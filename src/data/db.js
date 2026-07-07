import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { getDb } from '../lib/mongodb.js';
import { courses as initialCourses } from './courses.js';
import { internships as initialInternships } from './internships.js';

// Resolve database path
// Using process.cwd() ensures it resolves to the project root
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true' || !!process.env.VERCEL;
const DB_PATH = isVercel ? '/tmp/db.json' : path.resolve('src/data/db.json');
const COURSES_PATH = isVercel ? '/tmp/courses.js' : path.resolve('src/data/courses.js');
const INTERNSHIPS_PATH = isVercel ? '/tmp/internships.js' : path.resolve('src/data/internships.js');

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

// Admin Migration from JSON to MongoDB
async function ensureAdminMigrated() {
  console.log('[DEBUG] [ensureAdminMigrated] Started check');
  const dbClient = await getDb();
  const adminsCol = dbClient.collection('admins');
  
  const existingAdmin = await adminsCol.findOne({});
  if (existingAdmin) {
    console.log('[DEBUG] [ensureAdminMigrated] Admin already exists in MongoDB, skipping migration');
    return;
  }
  
  console.log('[DEBUG] [ensureAdminMigrated] Admins collection is empty. Starting automatic migration from JSON');
  const dbData = readDb(); // Fallback to JSON read
  console.log('[DEBUG] [ensureAdminMigrated] JSON admin loaded:', dbData.admin ? dbData.admin.username : 'none');
  
  if (dbData.admin && dbData.admin.username) {
    let passwordHash = dbData.admin.passwordHash;
    if (passwordHash && !passwordHash.includes(':') && !passwordHash.startsWith('$2')) {
       console.log('[DEBUG] [ensureAdminMigrated] Plain-text password detected. Hashing with bcrypt...');
       passwordHash = await hashPassword(passwordHash);
    }
    await adminsCol.insertOne({
      username: dbData.admin.username,
      passwordHash: passwordHash
    });
    console.log('[DEBUG] [ensureAdminMigrated] Migration completed: admin document inserted into MongoDB');
  } else {
    console.log('[DEBUG] [ensureAdminMigrated] No admin found in JSON. Creating default admin with username "admin"');
    await adminsCol.insertOne({
      username: 'admin',
      passwordHash: await hashPassword('admin')
    });
    console.log('[DEBUG] [ensureAdminMigrated] Migration completed: default admin inserted');
  }
}

// Fetch Admin Credentials from MongoDB
export async function getAdminUsername() {
  await ensureAdminMigrated();
  const dbClient = await getDb();
  const admin = await dbClient.collection('admins').findOne({});
  return admin ? admin.username : 'admin';
}

export async function getAdminPasswordHash() {
  await ensureAdminMigrated();
  const dbClient = await getDb();
  const admin = await dbClient.collection('admins').findOne({});
  return admin ? admin.passwordHash : '';
}

// Atomic file writer to avoid file corruption
function writeJsonAtomic(filePath, data) {
  const tempPath = `${filePath}.${crypto.randomBytes(8).toString('hex')}.tmp`;
  try {
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);
  } catch (err) {
    if (fs.existsSync(tempPath)) {
      try { fs.unlinkSync(tempPath); } catch (_) { }
    }
    throw err;
  }
}

// Read database
export function readDb() {
  if (!fs.existsSync(DB_PATH)) {
    // Seed database
    const defaultPassword = 'admin'; // Feel free to change or update in settings
    const initialDb = {
      admin: {
        username: 'admin',
        passwordHash: hashPassword(defaultPassword)
      },
      sessions: [],
      courses: initialCourses,
      internships: initialInternships,
      students: []
    };
    // Ensure parent directories exist
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    writeJsonAtomic(DB_PATH, initialDb);
    return initialDb;
  }

  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading JSON db, returning empty state:', err);
    return { admin: { username: 'admin', passwordHash: '' }, sessions: [], courses: [], internships: [], students: [] };
  }
}

// Write database
export function writeDb(data) {
  writeJsonAtomic(DB_PATH, data);
}

// Authenticate Admin
export async function authenticateAdmin(username, password) {
  console.log('[DEBUG] [authenticateAdmin] Started for username:', username);
  await ensureAdminMigrated();
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

// Synchronize static courses.js file
function syncCoursesJs(coursesList) {
  const content = `export const courses = ${JSON.stringify(coursesList, null, 2)};\n`;
  fs.writeFileSync(COURSES_PATH, content, 'utf-8');
}

// Synchronize static internships.js file
function syncInternshipsJs(internshipsList) {
  const content = `export const internships = ${JSON.stringify(internshipsList, null, 2)};\n`;
  fs.writeFileSync(INTERNSHIPS_PATH, content, 'utf-8');
}

// Course CRUD Operations
export function getCourses() {
  const db = readDb();
  return db.courses;
}

export function addCourse(courseData) {
  const db = readDb();
  // Ensure the course has a unique id (slugified name if not provided)
  if (!courseData.id) {
    courseData.id = courseData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  // Check if course with same ID already exists
  if (db.courses.some(c => c.id === courseData.id)) {
    courseData.id = `${courseData.id}-${crypto.randomBytes(3).toString('hex')}`;
  }

  db.courses.push(courseData);
  writeDb(db);
  syncCoursesJs(db.courses);
  return courseData;
}

export function updateCourse(id, courseData) {
  const db = readDb();
  const index = db.courses.findIndex(c => c.id === id);
  if (index === -1) throw new Error('Course not found');

  // Keep original fields that are not in the edit form if not provided
  db.courses[index] = {
    ...db.courses[index],
    ...courseData,
    id // keep ID same
  };

  writeDb(db);
  syncCoursesJs(db.courses);
  return db.courses[index];
}

export function deleteCourse(id) {
  const db = readDb();
  db.courses = db.courses.filter(c => c.id !== id);
  writeDb(db);
  syncCoursesJs(db.courses);
}

// Internship CRUD Operations
export function getInternships() {
  const db = readDb();
  return db.internships;
}

export function addInternship(internshipData) {
  const db = readDb();
  if (!internshipData.id) {
    internshipData.id = internshipData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  if (db.internships.some(i => i.id === internshipData.id)) {
    internshipData.id = `${internshipData.id}-${crypto.randomBytes(3).toString('hex')}`;
  }

  db.internships.push(internshipData);
  writeDb(db);
  syncInternshipsJs(db.internships);
  return internshipData;
}

export function updateInternship(id, internshipData) {
  const db = readDb();
  const index = db.internships.findIndex(i => i.id === id);
  if (index === -1) throw new Error('Internship not found');

  db.internships[index] = {
    ...db.internships[index],
    ...internshipData,
    id
  };

  writeDb(db);
  syncInternshipsJs(db.internships);
  return db.internships[index];
}

export function deleteInternship(id) {
  const db = readDb();
  db.internships = db.internships.filter(i => i.id !== id);
  writeDb(db);
  syncInternshipsJs(db.internships);
}

// Student Operations
export function getStudents() {
  const db = readDb();
  return db.students;
}

export function addStudent(studentData) {
  const db = readDb();
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

  db.students.push(student);
  writeDb(db);
  return student;
}

export function updateStudent(id, updateData) {
  const db = readDb();
  const index = db.students.findIndex(s => s.id === id);
  if (index === -1) throw new Error('Student not found');

  const existing = db.students[index];
  const now = new Date().toISOString();

  // Build timeline entries for tracked changes
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

  // Merge existing timeline with new entries (newest first)
  const existingTimeline = existing.timeline || [];
  const mergedTimeline = [...timelineAdditions, ...existingTimeline];

  db.students[index] = {
    ...existing,
    status: updateData.status !== undefined ? updateData.status : existing.status,
    assignedEmployee: updateData.assignedEmployee !== undefined ? updateData.assignedEmployee : existing.assignedEmployee,
    followUpDate: updateData.followUpDate !== undefined ? updateData.followUpDate : existing.followUpDate,
    followUpTime: updateData.followUpTime !== undefined ? updateData.followUpTime : existing.followUpTime,
    nextAction: updateData.nextAction !== undefined ? updateData.nextAction : existing.nextAction,
    notes: updateData.notes !== undefined ? updateData.notes : existing.notes,
    timeline: mergedTimeline
  };

  writeDb(db);
  return db.students[index];
}

export function deleteStudent(id) {
  const db = readDb();
  db.students = db.students.filter(s => s.id !== id);
  writeDb(db);
}
