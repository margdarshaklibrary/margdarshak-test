import { authenticateAdmin } from '../../data/db.js';

export const prerender = false;

export async function POST({ request, cookies }) {
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return new Response(JSON.stringify({ error: 'Username and password are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = await authenticateAdmin(username, password);

    if (token) {
      cookies.set('admin_session', token, {
        path: '/',
        httpOnly: true,
        secure: request.url.startsWith('https://'),
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 hours
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid username or password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (err) {
    console.error('Error in login endpoint:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
