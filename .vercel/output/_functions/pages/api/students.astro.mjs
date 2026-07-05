import { n as deleteStudent, b as getStudents, o as updateStudent, f as verifySession } from '../../chunks/db_BB5DAx5-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

function checkAuth(cookies) {
  const token = cookies.get('admin_session')?.value;
  return verifySession(token);
}

async function GET({ cookies, url }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const search = url.searchParams.get('search')?.toLowerCase() || '';
    const programId = url.searchParams.get('programId') || '';

    let list = getStudents();

    // Apply filters
    if (search) {
      list = list.filter(student =>
        student.name?.toLowerCase().includes(search) ||
        student.email?.toLowerCase().includes(search) ||
        student.mobile?.includes(search) ||
        student.whatsapp?.includes(search) ||
        student.programName?.toLowerCase().includes(search)
      );
    }

    if (programId) {
      list = list.filter(student => student.programId === programId);
    }

    // Sort by date descending
    list.sort((a, b) => new Date(b.date) - new Date(a.date));

    return new Response(JSON.stringify(list), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error fetching students:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function DELETE({ cookies, url }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    deleteStudent(id);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error deleting student:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function PUT({ cookies, request }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const updated = updateStudent(id, updateData);
    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error updating student:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
