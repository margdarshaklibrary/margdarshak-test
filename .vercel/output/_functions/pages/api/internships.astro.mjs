import { h as deleteInternship, a as getInternships, i as addInternship, j as updateInternship, f as verifySession } from '../../chunks/db_BB5DAx5-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

// Middleware to check admin session
function checkAuth(cookies) {
  const token = cookies.get('admin_session')?.value;
  return verifySession(token);
}

async function GET({ cookies }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response(JSON.stringify(getInternships()), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

async function POST({ request, cookies }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await request.json();
    if (!data.name || !data.duration || !data.fee) {
      return new Response(JSON.stringify({ error: 'Name, duration and fee are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.learnItems === 'string') {
      data.learnItems = data.learnItems.split('\n').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.practicalTasks === 'string') {
      data.practicalTasks = data.practicalTasks.split('\n').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.careerBenefits === 'string') {
      data.careerBenefits = data.careerBenefits.split('\n').map(t => t.trim()).filter(Boolean);
    }

    const created = addInternship(data);
    return new Response(JSON.stringify({ success: true, internship: created }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error adding internship:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function PUT({ request, cookies }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await request.json();
    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.learnItems === 'string') {
      data.learnItems = data.learnItems.split('\n').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.practicalTasks === 'string') {
      data.practicalTasks = data.practicalTasks.split('\n').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.careerBenefits === 'string') {
      data.careerBenefits = data.careerBenefits.split('\n').map(t => t.trim()).filter(Boolean);
    }

    const updated = updateInternship(id, data);
    return new Response(JSON.stringify({ success: true, internship: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error updating internship:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function DELETE({ request, cookies }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    deleteInternship(id);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error deleting internship:', err);
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
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
