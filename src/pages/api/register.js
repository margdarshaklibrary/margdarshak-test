import { addStudent } from '../../data/db.js';

export const prerender = false;

export async function POST({ request }) {
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
