import { m as addStudent } from '../../chunks/db_BB5DAx5-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Server-side validation
    if (!data.name || !data.mobile || !data.email || !data.programId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const newStudent = addStudent(data);

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
