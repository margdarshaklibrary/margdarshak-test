import { addStudent } from '../../data/db.js';

export const prerender = false;

const VALID_SOURCES = ['courses', 'internships', 'library', 'hostel', 'digital'];

// Required fields for new-service forms (library / hostel / digital).
// Courses and internships use the existing programId-based validation.
const NEW_SERVICE_REQUIRED = {
  library:  ['query'],
  hostel:   ['roomPreference', 'moveInDate'],
  digital:  ['serviceInterested'],
};

export async function POST({ request }) {
  try {
    const data = await request.json();

    // Base fields required for every submission
    if (!data.name || !data.mobile || !data.email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // ── Source resolution ────────────────────────────────────────────────────
    // Phase A: source is optional. When omitted, derive from programType for
    // backward compatibility with the existing register form.
    let source = data.source;

    if (source !== undefined && source !== null && source !== '') {
      // Explicit source provided — validate against allowlist
      if (!VALID_SOURCES.includes(source)) {
        return new Response(JSON.stringify({ error: 'Invalid source value' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } else {
      // Backward-compatible fallback: derive from programType
      // programType values in the existing form are 'course' and 'internship' (singular)
      if (data.programType === 'course') {
        source = 'courses';
      } else if (data.programType === 'internship') {
        source = 'internships';
      }
      // If neither is available, source is undefined — legacy record, no source stored
    }

    // ── Per-source field validation ──────────────────────────────────────────
    if (source === 'courses' || source === 'internships' || !source) {
      // Courses, internships, and legacy records require programId
      if (!data.programId) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } else if (NEW_SERVICE_REQUIRED[source]) {
      // New services (library, hostel, digital) — validate their specific fields
      const missing = NEW_SERVICE_REQUIRED[source].filter(f => !data[f]);
      if (missing.length > 0) {
        return new Response(
          JSON.stringify({ error: `Missing required fields: ${missing.join(', ')}` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const newStudent = await addStudent({ ...data, source: source || undefined });

    return new Response(JSON.stringify({ success: true, student: newStudent }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error in register endpoint:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
