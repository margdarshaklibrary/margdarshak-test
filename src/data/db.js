import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { getDb } from '../lib/mongodb.js';

// Helper to hash password
export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// Helper to verify password
export async function verifyPassword(password, storedHash) {
  if (!storedHash) return false;
  if (storedHash.includes(':')) {
    const parts = storedHash.split(':');
    if (parts.length !== 2) return false;
    const [salt, hash] = parts;
    const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
  }
  return await bcrypt.compare(password, storedHash);
}

// Fetch Admin Credentials from MongoDB
export async function getAdminUsername() {
  const dbClient = await getDb();
  const admin = await dbClient.collection('admins').findOne({});
  return admin ? admin.username : 'admin';
}

export async function getAdminPasswordHash() {
  const dbClient = await getDb();
  const admin = await dbClient.collection('admins').findOne({});
  return admin ? admin.passwordHash : '';
}

// Authenticate Admin
export async function authenticateAdmin(username, password) {
  console.log('[DEBUG] [authenticateAdmin] Started for username:', username);
  const dbClient = await getDb();
  const adminsCol = dbClient.collection('admins');
  
  console.log('[DEBUG] [authenticateAdmin] Querying admin document for username:', username);
  const admin = await adminsCol.findOne({ username });
  if (!admin) {
    console.log('[DEBUG] [authenticateAdmin] Admin document not found for username:', username);
    return null;
  }

  console.log('[DEBUG] [authenticateAdmin] Password verification started');
  const isValid = await verifyPassword(password, admin.passwordHash);
  console.log('[DEBUG] [authenticateAdmin] Password verification result:', isValid);
  
  if (isValid) {
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    console.log('[DEBUG] [authenticateAdmin] Inserting session token into sessions collection');
    const sessionsCol = dbClient.collection('sessions');
    await sessionsCol.deleteMany({ expiresAt: { $lt: new Date() } }); // Clean expired sessions
    await sessionsCol.insertOne({ token, expiresAt });
    console.log('[DEBUG] [authenticateAdmin] Session created successfully');

    return token;
  }
  return null;
}

// Verify Session Token
export async function verifySession(token) {
  if (!token) return false;
  const dbClient = await getDb();
  const sessionsCol = dbClient.collection('sessions');
  
  const session = await sessionsCol.findOne({ token });
  if (!session) return false;

  const isExpired = new Date(session.expiresAt) < new Date();
  if (isExpired) {
    await sessionsCol.deleteOne({ token });
    return false;
  }
  return true;
}

// Logout Admin
export async function logoutAdmin(token) {
  if (!token) return;
  const dbClient = await getDb();
  await dbClient.collection('sessions').deleteOne({ token });
}

// Change Admin Credentials
export async function changeAdminCredentials(token, username, newPassword) {
  const isValid = await verifySession(token);
  if (!isValid) throw new Error('Unauthorized');
  
  const dbClient = await getDb();
  const adminsCol = dbClient.collection('admins');
  const sessionsCol = dbClient.collection('sessions');
  
  const updateData = { username };
  if (newPassword) {
    updateData.passwordHash = await hashPassword(newPassword);
  }
  
  await adminsCol.updateOne({}, { $set: updateData });
  await sessionsCol.deleteMany({ token: { $ne: token } });
}

// Course CRUD Operations
export async function getCourses() {
  const dbClient = await getDb();
  const courses = await dbClient.collection('courses').find({}).sort({ _order: 1 }).toArray();
  return courses.map(c => {
    const { _id, _order, ...rest } = c;
    return rest;
  });
}

export async function addCourse(courseData) {
  const dbClient = await getDb();
  const coursesCol = dbClient.collection('courses');

  if (!courseData.id) {
    courseData.id = courseData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  
  const existing = await coursesCol.findOne({ id: courseData.id });
  if (existing) {
    courseData.id = `${courseData.id}-${crypto.randomBytes(3).toString('hex')}`;
  }

  const lastCourse = await coursesCol.find().sort({ _order: -1 }).limit(1).toArray();
  const nextOrder = lastCourse.length > 0 ? (lastCourse[0]._order || 0) + 1 : 0;

  const doc = { ...courseData, _order: nextOrder };
  await coursesCol.insertOne(doc);
  return courseData;
}

export async function updateCourse(id, courseData) {
  const dbClient = await getDb();
  const coursesCol = dbClient.collection('courses');

  const existing = await coursesCol.findOne({ id });
  if (!existing) throw new Error('Course not found');

  const updateDoc = {
    ...courseData,
    id // keep ID same
  };
  // Don't overwrite _id or _order in the $set, delete them if they somehow got in
  delete updateDoc._id;
  delete updateDoc._order;

  await coursesCol.updateOne({ id }, { $set: updateDoc });
  
  const updated = await coursesCol.findOne({ id });
  const { _id, _order, ...rest } = updated;
  return rest;
}

export async function deleteCourse(id) {
  const dbClient = await getDb();
  await dbClient.collection('courses').deleteOne({ id });
}

// Internship CRUD Operations
export async function getInternships() {
  const dbClient = await getDb();
  const internships = await dbClient.collection('internships').find({}).sort({ _order: 1 }).toArray();
  return internships.map(i => {
    const { _id, _order, ...rest } = i;
    return rest;
  });
}

export async function getInternship(id) {
  const dbClient = await getDb();
  const internship = await dbClient.collection('internships').findOne({ id });
  if (!internship) return null;
  const { _id, _order, ...rest } = internship;
  return rest;
}

export async function addInternship(internshipData) {
  const dbClient = await getDb();
  const internshipsCol = dbClient.collection('internships');

  if (!internshipData.id) {
    internshipData.id = internshipData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  
  const existing = await internshipsCol.findOne({ id: internshipData.id });
  if (existing) {
    internshipData.id = `${internshipData.id}-${crypto.randomBytes(3).toString('hex')}`;
  }

  const lastInternship = await internshipsCol.find().sort({ _order: -1 }).limit(1).toArray();
  const nextOrder = lastInternship.length > 0 ? (lastInternship[0]._order || 0) + 1 : 0;

  const doc = { ...internshipData, _order: nextOrder };
  await internshipsCol.insertOne(doc);
  return internshipData;
}

export async function updateInternship(id, internshipData) {
  const dbClient = await getDb();
  const internshipsCol = dbClient.collection('internships');

  const existing = await internshipsCol.findOne({ id });
  if (!existing) throw new Error('Internship not found');

  const updateDoc = {
    ...internshipData,
    id // keep ID same
  };
  delete updateDoc._id;
  delete updateDoc._order;

  await internshipsCol.updateOne({ id }, { $set: updateDoc });
  
  const updated = await internshipsCol.findOne({ id });
  const { _id, _order, ...rest } = updated;
  return rest;
}

export async function deleteInternship(id) {
  const dbClient = await getDb();
  await dbClient.collection('internships').deleteOne({ id });
}

// Student Operations
export async function getStudents() {
  const dbClient = await getDb();
  const students = await dbClient.collection('leadstudents').find({}).toArray();
  return students.map(s => {
    const { _id, ...rest } = s;
    return rest;
  });
}

export async function addStudent(studentData) {
  const dbClient = await getDb();
  const studentsCol = dbClient.collection('leadstudents');

  const now = new Date().toISOString();
  const student = {
    id: crypto.randomUUID(),
    name: studentData.name,
    mobile: studentData.mobile,
    whatsapp: studentData.whatsapp || studentData.mobile,
    email: studentData.email,
    programType: studentData.programType, // 'course' or 'internship'
    programId: studentData.programId,
    programName: studentData.programName,
    learningMode: studentData.learningMode || 'Hybrid',
    message: studentData.message || '',
    date: studentData.date || now,
    status: studentData.status || 'Pending',
    assignedEmployee: studentData.assignedEmployee || '',
    followUpDate: studentData.followUpDate || '',
    followUpTime: studentData.followUpTime || '',
    nextAction: studentData.nextAction || '',
    notes: studentData.notes || '',
    timeline: [
      { event: 'Registration Submitted', timestamp: studentData.date || now }
    ]
  };

  await studentsCol.insertOne(student);
  return student;
}

export async function updateStudent(id, updateData) {
  const dbClient = await getDb();
  const studentsCol = dbClient.collection('leadstudents');

  const existing = await studentsCol.findOne({ id });
  if (!existing) throw new Error('Student not found');

  const now = new Date().toISOString();
  const timelineAdditions = [];

  if (updateData.status && updateData.status !== existing.status) {
    timelineAdditions.push({ event: `Status changed to ${updateData.status}`, timestamp: now });
  }
  if (updateData.assignedEmployee && updateData.assignedEmployee !== existing.assignedEmployee) {
    timelineAdditions.push({ event: `Assigned to ${updateData.assignedEmployee}`, timestamp: now });
  }
  if (updateData.followUpDate && updateData.followUpDate !== existing.followUpDate) {
    const timeStr = updateData.followUpTime ? ` at ${updateData.followUpTime}` : '';
    timelineAdditions.push({ event: `Follow-up scheduled for ${updateData.followUpDate}${timeStr}`, timestamp: now });
  }
  if (updateData.nextAction && updateData.nextAction !== existing.nextAction) {
    timelineAdditions.push({ event: `Next action: ${updateData.nextAction}`, timestamp: now });
  }

  const setDoc = { ...updateData };
  delete setDoc.id; // never update id
  delete setDoc._id; // never update mongo _id
  delete setDoc.timeline; // handle timeline manually via $push

  const updateOp = {};
  if (Object.keys(setDoc).length > 0) {
    updateOp.$set = setDoc;
  }

  if (timelineAdditions.length > 0) {
    updateOp.$push = {
      timeline: {
        $each: timelineAdditions,
        $position: 0
      }
    };
  }

  if (Object.keys(updateOp).length > 0) {
    await studentsCol.updateOne({ id }, updateOp);
  }

  const updated = await studentsCol.findOne({ id });
  const { _id, ...rest } = updated;
  return rest;
}

export async function deleteStudent(id) {
  const dbClient = await getDb();
  await dbClient.collection('leadstudents').deleteOne({ id });
}
