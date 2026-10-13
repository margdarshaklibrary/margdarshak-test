import { verifySession } from './data/db.js';

export const prerender = false;

// Explicit hostname → site map. Substring matching is intentionally avoided
// to prevent spoofing via hostnames like evil.courses.margdarshakss.com.
const SUBDOMAIN_MAP = {
  'courses.margdarshakss.com':      'courses',
  'internships.margdarshakss.com':  'internships',
  'library.margdarshakss.com':      'library',
  'hostel.margdarshakss.com':       'hostel',
  'digital.margdarshakss.com':      'digital',
};

const MAIN_DOMAIN_HOSTNAMES = new Set([
  'margdarshakss.com',
  'www.margdarshakss.com',
]);

function detectSite(request) {
  // On Vercel, x-forwarded-host is set by the platform for custom domains.
  // Fall back to the host header for local development.
  const rawHost =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host') ||
    '';
  const hostname = rawHost.split(':')[0].toLowerCase(); // strip port
  if (MAIN_DOMAIN_HOSTNAMES.has(hostname)) return 'main';
  // Return the mapped site name, or 'main' for unknown hosts
  // (Vercel preview *.vercel.app, localhost, malformed values — all safe defaults)
  return SUBDOMAIN_MAP[hostname] ?? 'main';
}

export async function onRequest(context, next) {
  const { request, url } = context;

  let pathname = url.pathname;
  if (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1);
  }

  const site = detectSite(request);
  context.locals.site = site;

  // ── GUARD 1: /subdomains/* path — loop prevention + security ─────────────
  // context.rewrite() re-runs all middleware. On the second pass after a
  // subdomain rewrite the pathname will start with /subdomains/.
  // • Main domain: block direct access to internal paths (404).
  // • Subdomain: the second pass lands here — skip rewriting, fall through
  //   to the admin-auth section at the bottom (which won't match /subdomains/).
  if (pathname.startsWith('/subdomains/')) {
    if (site === 'main') {
      return new Response('Not Found', { status: 404 });
    }
    // Second middleware pass after rewrite — fall through to return next() below.
  }

  // ── GUARD 2: Paths that must never be rewritten ───────────────────────────
  else if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/_image') ||
    /\.(ico|png|jpg|jpeg|webp|svg|css|js|woff2?|ttf|txt|xml|json)$/.test(pathname)
  ) {
    return next();
  }

  // ── Redirect admin routes from subdomains to the main domain ─────────────
  else if (site !== 'main' && pathname.startsWith('/admin')) {
    // Destination is always hardcoded to margdarshakss.com — never derived from
    // user-supplied input — so this cannot be used as an open redirect.
    const safePath = pathname.replace(/[^a-zA-Z0-9/\-_]/g, '');
    return context.redirect(`https://margdarshakss.com${safePath}`, 302);
  }

  // ── Subdomain rewrite ────────────────────────────────────────────────────
  else if (site !== 'main') {
    // Map the public path to its internal /subdomains/<site>/<path> equivalent.
    // A URL object is used so that query parameters are preserved automatically.
    const internalPath = `/subdomains/${site}${pathname === '/' ? '' : pathname}`;
    const rewriteUrl = new URL(internalPath + url.search, url.origin);
    return context.rewrite(rewriteUrl);
  }

  // ── Admin auth (main domain — or second pass for subdomains) ─────────────
  // The admin auth block below only matches paths starting with /admin.
  // After a subdomain rewrite the path is /subdomains/*, which never matches,
  // so next() is called safely.

  if (pathname === '/admin/registrations') {
    return context.redirect('/admin/students');
  }

  if (pathname === '/admin') {
    const token = context.cookies.get('admin_session')?.value;
    const isAuthenticated = await verifySession(token);
    return isAuthenticated
      ? context.redirect('/admin/dashboard')
      : context.redirect('/admin/login');
  }

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = context.cookies.get('admin_session')?.value;
    if (!(await verifySession(token))) {
      return context.redirect('/admin/login');
    }
  }

  if (pathname === '/admin/login') {
    const token = context.cookies.get('admin_session')?.value;
    if (await verifySession(token)) {
      return context.redirect('/admin/dashboard');
    }
  }

  return next();
}
