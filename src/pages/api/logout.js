import { logoutAdmin } from '../../data/db.js';

export const prerender = false;

export async function POST({ cookies }) {
  try {
    const token = cookies.get('admin_session')?.value;
    if (token) {
      await logoutAdmin(token);
    }
    
    // Clear the session cookie
    cookies.delete('admin_session', { path: '/' });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error in logout endpoint:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
export async function GET({ cookies }) {
  // Support GET logout for fallback
  return POST({ cookies });
}
