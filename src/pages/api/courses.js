import { verifySession, getCourses, addCourse, updateCourse, deleteCourse } from '../../data/db.js';

export const prerender = false;

// Middleware to check admin session
async function checkAuth(cookies) {
  const token = cookies.get('admin_session')?.value;
  return await verifySession(token);
}

export async function GET({ cookies }) {
  if (!(await checkAuth(cookies))) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  const courses = await getCourses();
  return new Response(JSON.stringify(courses), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request, cookies }) {
  if (!(await checkAuth(cookies))) {
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

    // Set default tags or arrays if string provided
    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.learnItems === 'string') {
      data.learnItems = data.learnItems.split('\n').map(t => t.trim()).filter(Boolean);
    }
    if (typeof data.careerOpportunities === 'string') {
      data.careerOpportunities = data.careerOpportunities.split('\n').map(t => t.trim()).filter(Boolean);
    }

    const created = await addCourse(data);
    return new Response(JSON.stringify({ success: true, course: created }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error adding course:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function PUT({ request, cookies }) {
  if (!(await checkAuth(cookies))) {
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
    if (typeof data.careerOpportunities === 'string') {
      data.careerOpportunities = data.careerOpportunities.split('\n').map(t => t.trim()).filter(Boolean);
    }

    const updated = await updateCourse(id, data);
    return new Response(JSON.stringify({ success: true, course: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error updating course:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE({ request, cookies }) {
  if (!(await checkAuth(cookies))) {
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

    await deleteCourse(id);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error deleting course:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
