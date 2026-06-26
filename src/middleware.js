import { verifySession } from './data/db.js';

export const prerender = false;

export async function onRequest(context, next) {
  const url = new URL(context.request.url);
  let pathname = url.pathname;

  // Normalize pathname to remove trailing slash
  if (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1);
  }

  // Handle registrations route alias requested by the user
  if (pathname === '/admin/registrations') {
    return context.redirect('/admin/students');
  }

  // Check if accessing admin route
  if (pathname === '/admin') {
    const sessionToken = context.cookies.get('admin_session')?.value;
    const isAuthenticated = verifySession(sessionToken);
    
    if (isAuthenticated) {
      return context.redirect('/admin/dashboard');
    } else {
      return context.redirect('/admin/login');
    }
  }

  // Guard protected admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const sessionToken = context.cookies.get('admin_session')?.value;
    const isAuthenticated = verifySession(sessionToken);

    if (!isAuthenticated) {
      return context.redirect('/admin/login');
    }
  }

  // Redirect logged-in admin away from login page
  if (pathname === '/admin/login') {
    const sessionToken = context.cookies.get('admin_session')?.value;
    const isAuthenticated = verifySession(sessionToken);
    
    if (isAuthenticated) {
      return context.redirect('/admin/dashboard');
    }
  }

  return next();
}
