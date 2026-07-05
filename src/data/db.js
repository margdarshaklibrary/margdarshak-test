import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { courses as initialCourses } from './courses.js';
import { internships as initialInternships } from './internships.js';

// Resolve database path
// Using process.cwd() ensures it resolves to the project root
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true' || !!process.env.VERCEL;
const DB_PATH = isVercel ? '/tmp/db.json' : path.resolve('src/data/db.json');
const COURSES_PATH = isVercel ? '/tmp/courses.js' : path.resolve('src/data/courses.js');
const INTERNSHIPS_PATH = isVercel ? '/tmp/internships.js' : path.resolve('src/data/internships.js');

// Helper to hash password
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

// Helper to verify password
export function verifyPassword(password, storedHash) {
  const parts = storedHash.split(':');
  if (parts.length !== 2) return false;
  const [salt, hash] = parts;
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
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
export function authenticateAdmin(username, password) {
  const db = readDb();
  if (db.admin.username !== username) return null;

  if (verifyPassword(password, db.admin.passwordHash)) {
    // Generate session token
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 24 hours

    db.sessions = db.sessions.filter(s => new Date(s.expiresAt) > new Date()); // Clean expired sessions
    db.sessions.push({ token, expiresAt });
    writeDb(db);
    return token;
  }
  return null;
}

// Verify Session Token
export function verifySession(token) {
  if (!token) return false;
  const db = readDb();
  const session = db.sessions.find(s => s.token === token);
  if (!session) return false;

  const isExpired = new Date(session.expiresAt) < new Date();
  if (isExpired) {
    // Clean expired session
    db.sessions = db.sessions.filter(s => s.token !== token);
    writeDb(db);
    return false;
  }
  return true;
}

// Logout Admin
export function logoutAdmin(token) {
  if (!token) return;
  const db = readDb();
  db.sessions = db.sessions.filter(s => s.token !== token);
  writeDb(db);
}

// Change Admin Credentials
export function changeAdminCredentials(token, username, newPassword) {
  if (!verifySession(token)) throw new Error('Unauthorized');
  const db = readDb();
  db.admin.username = username;
  if (newPassword) {
    db.admin.passwordHash = hashPassword(newPassword);
  }
  // Clear all other sessions except current one
  db.sessions = db.sessions.filter(s => s.token === token);
  writeDb(db);
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
