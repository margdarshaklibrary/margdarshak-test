import { f as verifySession } from './chunks/db_BB5DAx5-.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BDvgyqJ1.mjs';
import 'piccolore';
import './chunks/astro/server_Cz0Ahlmm.mjs';
import 'clsx';
import { s as sequence } from './chunks/render-context_BTgZh9vJ.mjs';

async function onRequest$1(context, next) {
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
