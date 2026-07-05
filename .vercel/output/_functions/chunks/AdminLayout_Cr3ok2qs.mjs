import { e as createAstro, f as createComponent, r as renderTemplate, o as renderSlot, h as addAttribute, n as renderHead } from './astro/server_Cz0Ahlmm.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://margdarshak.in");
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Margdarshak Admin Panel", activeTab = "dashboard" } = Astro2.props;
  const menuItems = [
    { id: "dashboard", name: "Dashboard", href: "/admin/dashboard", icon: "dashboard" },
    { id: "courses", name: "Courses", href: "/admin/courses", icon: "menu_book" },
    { id: "internships", name: "Internships", href: "/admin/internships", icon: "work" },
    { id: "students", name: "Students", href: "/admin/students", icon: "group" },
    { id: "settings", name: "Settings", href: "/admin/settings", icon: "settings" }
  ];
  return renderTemplate(_a || (_a = __template(['<html class="h-full bg-[#f8fafc]" lang="en"> <head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0" name="viewport"><title>', `</title><!-- Fonts & Favicon --><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@800&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Icons --><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet"><!-- Tailwind CSS --><script src="/assets/03ba5d9f9e95fc3599acebcbe7e5fb9a.js"><\/script><script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          screens: {
            'xs': '375px',
          },
          colors: {
            primary: "#071426",      // Deep Navy
            secondary: "#E53935",    // Brand Red
            accent: "#FFB300",       // Brand Golden Yellow
            brandOrange: "#FF7043",  // Brand Orange
            success: "#10b981",      // Success Green
            background: "#f8fafc"
          },
          fontFamily: {
            "headline": ["Outfit", "sans-serif"],
            "display": ["Outfit", "sans-serif"],
            "body": ["Plus Jakarta Sans", "sans-serif"],
            "label": ["Outfit", "sans-serif"]
          },
          boxShadow: {
            "premium": "0 10px 30px -10px rgba(7, 20, 38, 0.05), 0 1px 3px rgba(0, 0, 0, 0.01)",
            "premium-hover": "0 20px 40px -10px rgba(7, 20, 38, 0.12), 0 2px 5px rgba(0, 0, 0, 0.02)",
            "glass": "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 32px 0 rgba(7, 20, 38, 0.04)"
          }
        }
      }
    }
  <\/script><style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    /* Modern Premium Glassmorphism */
    .glass-sidebar {
      background: rgba(7, 20, 38, 0.96);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
    }
    .glass-card-premium {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 10px 30px -10px rgba(7, 20, 38, 0.04);
    }

    /* Sidebar Collapsed Styles */
    #sidebar-desktop {
      transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .sidebar-collapsed {
      width: 72px !important;
    }
    
    .logo-text, .logout-text, .menu-label {
      display: inline-block;
      max-width: 180px;
      opacity: 1;
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), max-width 200ms cubic-bezier(0.4, 0, 0.2, 1), margin 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .sidebar-collapsed .logo-text,
    .sidebar-collapsed .logout-text,
    .sidebar-collapsed .menu-label,
    .sidebar-collapsed .active-dot {
      opacity: 0 !important;
      max-width: 0 !important;
      overflow: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
      pointer-events: none !important;
    }
    
    .sidebar-collapsed .sidebar-header-container {
      padding-left: 0.75rem !important;
      padding-right: 0.75rem !important;
      justify-content: center !important;
      flex-direction: column !important;
      gap: 0.75rem !important;
    }
    
    .sidebar-collapsed nav {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }
    
    .sidebar-collapsed nav a,
    .sidebar-collapsed #desktop-logout-btn {
      justify-content: center !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      gap: 0 !important;
    }
    
    /* Tooltip styles for Collapsed Sidebar */
    @media (min-width: 768px) {
      .sidebar-collapsed nav a::after,
      .sidebar-collapsed #desktop-logout-btn::after {
        content: attr(data-tooltip);
        position: absolute;
        left: calc(100% + 12px);
        top: 50%;
        transform: translateY(-50%) translateX(-8px);
        background: #071426;
        color: #f8fafc;
        font-family: 'Outfit', sans-serif;
        font-size: 11px;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 8px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.15);
        z-index: 9999;
      }
      
      .sidebar-collapsed nav a:hover::after,
      .sidebar-collapsed #desktop-logout-btn:hover::after {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }
    }
    .btn-brand-gradient {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      background-size: 200% 100%;
      background-position: left center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-brand-gradient:hover {
      background-position: right center;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 20px rgba(229, 57, 53, 0.3);
    }
    .btn-brand-gradient:active {
      transform: translateY(0) scale(0.98);
    }

    /* Page transitions */
    body {
      opacity: 0;
      transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      transform: translateY(4px);
    }
    body.page-loaded {
      opacity: 1;
      transform: translateY(0);
    }
    body.page-exit {
      opacity: 0;
      transform: translateY(-4px);
    }

    /* Standardized Card Hover Lift & Border Glowing Transitions */
    .hover-lift {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, box-shadow;
    }
    .hover-lift:hover {
      transform: translateY(-6px) scale(1.02);
      border-color: rgba(229, 57, 53, 0.25);
      box-shadow: 0 20px 40px -10px rgba(7, 20, 38, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02);
    }

    /* Button transitions & active states */
    button, a.px-4, select {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    button:active, a.px-4:active {
      transform: scale(0.97);
    }

    /* Input Focus Glows */
    input:focus, select:focus, textarea:focus {
      box-shadow: 0 0 15px rgba(229, 57, 53, 0.15) !important;
      border-color: #E53935 !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Ripple Effect */
    .btn-ripple-container {
      position: relative;
      overflow: hidden;
    }
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      transform: scale(0);
      animation: ripple-animation 0.5s linear;
      pointer-events: none;
    }
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    /* Premium Modal Keyframes & Classes */
    @keyframes overlayFadeIn {
      from { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
      to   { opacity: 1; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
    }
    @keyframes overlayFadeOut {
      from { opacity: 1; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
      to   { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
    }
    @keyframes modalScaleIn {
      from { opacity: 0; transform: scale(0.95) translateY(10px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes modalScaleOut {
      from { opacity: 1; transform: scale(1) translateY(0); }
      to   { opacity: 0; transform: scale(0.95) translateY(10px); }
    }

    .modal-open-animate {
      display: flex !important;
      animation: overlayFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .modal-open-animate > div {
      animation: modalScaleIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .modal-close-animate {
      display: flex !important;
      animation: overlayFadeOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .modal-close-animate > div {
      animation: modalScaleOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    /* Custom Scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(7, 20, 38, 0.1);
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(229, 57, 53, 0.3);
    }

    /* Reduced Motion Accessibility */
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      .modal-open-animate, .modal-close-animate, .modal-open-animate > div, .modal-close-animate > div {
        animation: none !important;
      }
    }
  </style>`, `</head> <body class="h-full font-body antialiased text-slate-800 bg-[#f8fafc] overflow-x-hidden"> <!-- Main Layout Wrapper --> <div class="flex h-screen overflow-hidden"> <!-- Sidebar for Desktop --> <aside id="sidebar-desktop" class="hidden md:flex md:flex-col w-64 glass-sidebar text-white flex-shrink-0 relative z-20"> <script>
        if (localStorage.getItem('sidebar-collapsed') === 'true') {
          document.getElementById('sidebar-desktop').classList.add('sidebar-collapsed');
        }
      <\/script> <!-- Sidebar Header --> <div class="flex items-center justify-between px-6 py-6 border-b border-white/10 bg-slate-950/40 sidebar-header-container transition-all duration-300"> <a href="/" class="flex items-center gap-3 transition-transform hover:scale-105 logo-container shrink-0"> <img src="/favicon.svg" alt="Margdarshak Logo" class="h-8 w-auto object-contain bg-white rounded-lg p-1 shrink-0"> <div class="logo-text transition-all duration-200"> <h1 class="font-headline font-bold text-sm leading-tight tracking-wide text-white">Margdarshak</h1> <span class="text-[9px] text-[#FFB300] uppercase tracking-widest font-extrabold block">Admin Console</span> </div> </a> <button id="sidebar-collapse-btn" class="hidden md:flex p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0" aria-label="Collapse Sidebar"> <span class="material-symbols-outlined text-lg" id="sidebar-collapse-icon">menu_open</span> </button> </div> <!-- Navigation Links --> <nav class="flex-grow px-4 py-6 space-y-1.5 overflow-y-auto"> `, ' </nav> <!-- Sidebar Footer --> <div class="p-4 border-t border-white/10 bg-slate-950/30"> <button id="desktop-logout-btn" data-tooltip="Logout" class="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl font-headline font-semibold text-sm text-slate-400 hover:bg-[#E53935]/10 hover:text-[#E53935] transition-all duration-200 group"> <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-[#E53935] transition-colors">logout</span> <span class="logout-text transition-all duration-200">Logout</span> </button> </div> </aside> <!-- Mobile Drawer Sidebar (Initially Hidden) --> <div id="mobile-sidebar" class="fixed inset-0 z-50 md:hidden hidden" role="dialog" aria-modal="true"> <div id="mobile-sidebar-overlay" class="fixed inset-0 bg-[#071426]/60 backdrop-blur-sm transition-opacity"></div> <div class="relative flex flex-col w-full max-w-xs bg-[#071426] text-white h-full shadow-2xl transition-transform duration-300 ease-in-out -translate-x-full z-10" id="mobile-sidebar-menu"> <!-- Close Button --> <div class="absolute top-4 right-4"> <button id="close-mobile-btn" class="p-3 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close Sidebar"> <span class="material-symbols-outlined text-xl">close</span> </button> </div> <div class="flex items-center gap-3 px-6 py-6 border-b border-white/10 bg-slate-950/40"> <img src="/favicon.svg" alt="Margdarshak Logo" class="h-8 w-auto object-contain bg-white rounded-lg p-1"> <div> <h1 class="font-headline font-bold text-sm leading-tight tracking-wide text-white">Margdarshak</h1> <span class="text-[9px] text-[#FFB300] uppercase tracking-widest font-extrabold block">Admin Console</span> </div> </div> <nav class="flex-grow px-4 py-6 space-y-1.5 overflow-y-auto"> ', ' </nav> <div class="p-4 border-t border-white/10 bg-slate-950/30"> <button id="mobile-logout-btn" class="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl font-headline font-semibold text-sm text-slate-400 hover:bg-[#E53935]/10 hover:text-[#E53935] transition-all duration-200 min-h-[44px]"> <span class="material-symbols-outlined text-lg text-slate-400">logout</span>\nLogout\n</button> </div> </div> </div> <!-- Main Content Area --> <div class="flex flex-col flex-1 h-screen overflow-hidden"> <!-- Top Navigation Header --> <header class="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200/80 shadow-sm z-10 shrink-0"> <div class="flex items-center gap-4"> <!-- Hamburger Button for Mobile --> <button id="open-mobile-btn" class="p-3 text-slate-500 hover:text-[#E53935] rounded-xl hover:bg-slate-100 md:hidden focus:outline-none transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Open Sidebar"> <span class="material-symbols-outlined text-xl">menu</span> </button> <div class="flex items-center gap-2"> <h2 class="text-base font-headline font-bold text-[#071426] capitalize"> ', ' </h2> <span class="text-slate-300 hidden sm:inline">/</span> <span class="text-xs font-semibold text-slate-400 hidden sm:inline capitalize">Overview & Operations</span> </div> </div> <!-- Right Header Items: Search, Notifications, Profile --> <div class="flex items-center gap-4 sm:gap-6"> <!-- Mock Search Input --> <div class="relative hidden lg:block w-64"> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3 top-2.5">search</span> <input type="text" placeholder="Search console..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition-all font-medium"> </div> <!-- Notifications Mock Trigger --> <div class="relative"> <button class="p-2 text-slate-400 hover:text-[#071426] rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center relative"> <span class="material-symbols-outlined text-xl">notifications</span> <!-- Red dot badge --> <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E53935] border border-white"></span> </button> </div> <!-- Vertical separator --> <span class="w-px h-5 bg-slate-200"></span> <!-- Profile Info --> <div class="flex items-center gap-2.5"> <div class="w-8 h-8 bg-gradient-to-br from-[#071426] to-[#E53935] rounded-xl flex items-center justify-center text-white font-headline font-bold text-xs shadow-md">\nAD\n</div> <div class="hidden sm:block text-left"> <p class="text-xs font-headline font-bold text-[#071426] leading-tight">Admin Portal</p> <span class="text-[9px] text-[#FF7043] font-bold uppercase tracking-wider block">Superuser</span> </div> </div> </div> </header> <!-- Page Content Content Area --> <main class="flex-1 overflow-y-auto bg-[#f8fafc] p-6 md:p-8 relative"> <!-- background glow blobs --> <div class="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF7043]/5 blur-[80px] pointer-events-none -z-10"></div> <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFB300]/5 blur-[80px] pointer-events-none -z-10"></div> <div class="relative z-10 max-w-7xl xl:max-w-[92rem] 2xl:max-w-[95rem] mx-auto transition-all duration-300"> ', " </div> </main> </div> </div> <!-- Shared Toast Alerts --> <div id=\"toast-container\" class=\"fixed bottom-6 right-6 z-50 flex flex-col gap-3\"></div> <!-- Shared Logout Confirmation Script --> <script>\n    // Desktop Collapsible Sidebar\n    const sidebarDesktop = document.getElementById('sidebar-desktop');\n    const sidebarCollapseBtn = document.getElementById('sidebar-collapse-btn');\n    const sidebarCollapseIcon = document.getElementById('sidebar-collapse-icon');\n\n    if (sidebarDesktop && sidebarCollapseBtn) {\n      sidebarCollapseBtn.addEventListener('click', () => {\n        const isCollapsed = sidebarDesktop.classList.toggle('sidebar-collapsed');\n        localStorage.setItem('sidebar-collapsed', isCollapsed ? 'true' : 'false');\n        if (sidebarCollapseIcon) {\n          sidebarCollapseIcon.textContent = isCollapsed ? 'menu' : 'menu_open';\n        }\n      });\n      // Initial Sync\n      const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';\n      if (isCollapsed) {\n        sidebarDesktop.classList.add('sidebar-collapsed');\n        if (sidebarCollapseIcon) sidebarCollapseIcon.textContent = 'menu';\n      } else {\n        sidebarDesktop.classList.remove('sidebar-collapsed');\n        if (sidebarCollapseIcon) sidebarCollapseIcon.textContent = 'menu_open';\n      }\n    }\n\n    // Mobile Drawer Toggle\n    const mobileSidebar = document.getElementById('mobile-sidebar');\n    const mobileSidebarMenu = document.getElementById('mobile-sidebar-menu');\n    const openMobileBtn = document.getElementById('open-mobile-btn');\n    const closeMobileBtn = document.getElementById('close-mobile-btn');\n    const mobileOverlay = document.getElementById('mobile-sidebar-overlay');\n\n    if (openMobileBtn && mobileSidebar && mobileSidebarMenu) {\n      openMobileBtn.addEventListener('click', () => {\n        mobileSidebar.classList.remove('hidden');\n        mobileSidebar.classList.add('flex');\n        setTimeout(() => {\n          mobileSidebarMenu.classList.remove('-translate-x-full');\n        }, 10);\n      });\n    }\n\n    function closeSidebar() {\n      if (mobileSidebar && mobileSidebarMenu) {\n        mobileSidebarMenu.classList.add('-translate-x-full');\n        setTimeout(() => {\n          mobileSidebar.classList.remove('flex');\n          mobileSidebar.classList.add('hidden');\n        }, 300);\n      }\n    }\n\n    if (closeMobileBtn) closeMobileBtn.addEventListener('click', closeSidebar);\n    if (mobileOverlay) mobileOverlay.addEventListener('click', closeSidebar);\n\n    // Logout Functionality\n    async function logout() {\n      if (confirm('Are you sure you want to log out of the admin panel?')) {\n        try {\n          const res = await fetch('/api/logout', { method: 'POST' });\n          if (res.ok) {\n            window.location.href = '/admin/login';\n          } else {\n            alert('Logout failed. Please try again.');\n          }\n        } catch (err) {\n          console.error('Logout error:', err);\n          alert('Network error while logging out.');\n        }\n      }\n    }\n\n    const dLogout = document.getElementById('desktop-logout-btn');\n    const mLogout = document.getElementById('mobile-logout-btn');\n    if (dLogout) dLogout.addEventListener('click', logout);\n    if (mLogout) mLogout.addEventListener('click', logout);\n\n    // Global Toast alert system\n    window.showToast = function(message, type = 'success') {\n      const container = document.getElementById('toast-container');\n      if (!container) return;\n\n      const toast = document.createElement('div');\n      toast.className = `flex items-center gap-3 px-4 py-3.5 rounded-xl border shadow-lg max-w-sm text-sm transition-all duration-300 translate-y-4 opacity-0`;\n      \n      let icon = 'check_circle';\n      let colors = 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300';\n      \n      if (type === 'error') {\n        icon = 'error';\n        colors = 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950 dark:border-rose-800 dark:text-rose-300';\n      } else if (type === 'warning') {\n        icon = 'warning';\n        colors = 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-300';\n      }\n\n      toast.className += ` ${colors}`;\n      toast.innerHTML = `\n        <span class=\"material-symbols-outlined text-lg shrink-0\">${icon}</span>\n        <div class=\"font-medium\">${message}</div>\n      `;\n\n      container.appendChild(toast);\n      \n      // Animate entry\n      setTimeout(() => {\n        toast.classList.remove('translate-y-4', 'opacity-0');\n      }, 50);\n\n      // Animate leave and remove\n      setTimeout(() => {\n        toast.classList.add('translate-y-4', 'opacity-0');\n        setTimeout(() => {\n          toast.remove();\n        }, 300);\n      }, 3500);\n    }\n\n    // --- NEW MOTION DESIGN AND PAGE TRANSITIONS ENHANCEMENTS ---\n\n    // 1. Page Fade-In on Load\n    document.body.classList.add('page-loaded');\n\n    // 2. Page Fade-Out on Local Navigation Link Clicks\n    document.addEventListener('click', (e) => {\n      const link = e.target.closest('a');\n      if (!link) return;\n      \n      const href = link.getAttribute('href');\n      const target = link.getAttribute('target');\n      \n      if (!href || \n          href.startsWith('#') || \n          href.startsWith('mailto:') || \n          href.startsWith('tel:') || \n          target === '_blank' || \n          e.metaKey || \n          e.ctrlKey || \n          e.shiftKey || \n          e.altKey) {\n        return;\n      }\n      \n      const isSameSite = link.hostname === window.location.hostname;\n      if (!isSameSite) return;\n\n      e.preventDefault();\n      document.body.classList.remove('page-loaded');\n      document.body.classList.add('page-exit');\n      \n      setTimeout(() => {\n        window.location.href = href;\n      }, 220);\n    });\n\n    // 3. Handle Browser Back/Forward Cache Restorations\n    window.addEventListener('pageshow', (e) => {\n      if (e.persisted) {\n        document.body.classList.remove('page-exit');\n        document.body.classList.add('page-loaded');\n      }\n    });\n\n    // 4. Global Button Click Ripple Wave Effect\n    document.addEventListener('click', (e) => {\n      const target = e.target.closest('button, .btn-brand-gradient, .social-icon, .filter-pill');\n      if (!target || target.disabled) return;\n      \n      target.classList.add('btn-ripple-container');\n      \n      const rect = target.getBoundingClientRect();\n      const diameter = Math.max(target.clientWidth, target.clientHeight);\n      const radius = diameter / 2;\n      \n      const circle = document.createElement('span');\n      circle.style.width = circle.style.height = `${diameter}px`;\n      circle.style.left = `${e.clientX - rect.left - radius}px`;\n      circle.style.top = `${e.clientY - rect.top - radius}px`;\n      circle.classList.add('ripple');\n      \n      const isLightBg = target.classList.contains('bg-white') || \n                        target.classList.contains('bg-slate-100') || \n                        target.classList.contains('bg-slate-50') ||\n                        (target.tagName === 'BUTTON' && !target.className.includes('bg-') && !target.className.includes('btn-brand-gradient'));\n      \n      if (isLightBg) {\n        circle.style.backgroundColor = 'rgba(7, 20, 38, 0.12)';\n      }\n      \n      const oldRipple = target.querySelector('.ripple');\n      if (oldRipple) {\n        oldRipple.remove();\n      }\n      \n      target.appendChild(circle);\n    });\n  <\/script> </body> </html>"], ['<html class="h-full bg-[#f8fafc]" lang="en"> <head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0" name="viewport"><title>', `</title><!-- Fonts & Favicon --><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@800&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Icons --><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet"><!-- Tailwind CSS --><script src="/assets/03ba5d9f9e95fc3599acebcbe7e5fb9a.js"><\/script><script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          screens: {
            'xs': '375px',
          },
          colors: {
            primary: "#071426",      // Deep Navy
            secondary: "#E53935",    // Brand Red
            accent: "#FFB300",       // Brand Golden Yellow
            brandOrange: "#FF7043",  // Brand Orange
            success: "#10b981",      // Success Green
            background: "#f8fafc"
          },
          fontFamily: {
            "headline": ["Outfit", "sans-serif"],
            "display": ["Outfit", "sans-serif"],
            "body": ["Plus Jakarta Sans", "sans-serif"],
            "label": ["Outfit", "sans-serif"]
          },
          boxShadow: {
            "premium": "0 10px 30px -10px rgba(7, 20, 38, 0.05), 0 1px 3px rgba(0, 0, 0, 0.01)",
            "premium-hover": "0 20px 40px -10px rgba(7, 20, 38, 0.12), 0 2px 5px rgba(0, 0, 0, 0.02)",
            "glass": "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 8px 32px 0 rgba(7, 20, 38, 0.04)"
          }
        }
      }
    }
  <\/script><style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    /* Modern Premium Glassmorphism */
    .glass-sidebar {
      background: rgba(7, 20, 38, 0.96);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-right: 1px solid rgba(255, 255, 255, 0.08);
    }
    .glass-card-premium {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 10px 30px -10px rgba(7, 20, 38, 0.04);
    }

    /* Sidebar Collapsed Styles */
    #sidebar-desktop {
      transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .sidebar-collapsed {
      width: 72px !important;
    }
    
    .logo-text, .logout-text, .menu-label {
      display: inline-block;
      max-width: 180px;
      opacity: 1;
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), max-width 200ms cubic-bezier(0.4, 0, 0.2, 1), margin 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .sidebar-collapsed .logo-text,
    .sidebar-collapsed .logout-text,
    .sidebar-collapsed .menu-label,
    .sidebar-collapsed .active-dot {
      opacity: 0 !important;
      max-width: 0 !important;
      overflow: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
      pointer-events: none !important;
    }
    
    .sidebar-collapsed .sidebar-header-container {
      padding-left: 0.75rem !important;
      padding-right: 0.75rem !important;
      justify-content: center !important;
      flex-direction: column !important;
      gap: 0.75rem !important;
    }
    
    .sidebar-collapsed nav {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }
    
    .sidebar-collapsed nav a,
    .sidebar-collapsed #desktop-logout-btn {
      justify-content: center !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      gap: 0 !important;
    }
    
    /* Tooltip styles for Collapsed Sidebar */
    @media (min-width: 768px) {
      .sidebar-collapsed nav a::after,
      .sidebar-collapsed #desktop-logout-btn::after {
        content: attr(data-tooltip);
        position: absolute;
        left: calc(100% + 12px);
        top: 50%;
        transform: translateY(-50%) translateX(-8px);
        background: #071426;
        color: #f8fafc;
        font-family: 'Outfit', sans-serif;
        font-size: 11px;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 8px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.15);
        z-index: 9999;
      }
      
      .sidebar-collapsed nav a:hover::after,
      .sidebar-collapsed #desktop-logout-btn:hover::after {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }
    }
    .btn-brand-gradient {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      background-size: 200% 100%;
      background-position: left center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-brand-gradient:hover {
      background-position: right center;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 20px rgba(229, 57, 53, 0.3);
    }
    .btn-brand-gradient:active {
      transform: translateY(0) scale(0.98);
    }

    /* Page transitions */
    body {
      opacity: 0;
      transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      transform: translateY(4px);
    }
    body.page-loaded {
      opacity: 1;
      transform: translateY(0);
    }
    body.page-exit {
      opacity: 0;
      transform: translateY(-4px);
    }

    /* Standardized Card Hover Lift & Border Glowing Transitions */
    .hover-lift {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, box-shadow;
    }
    .hover-lift:hover {
      transform: translateY(-6px) scale(1.02);
      border-color: rgba(229, 57, 53, 0.25);
      box-shadow: 0 20px 40px -10px rgba(7, 20, 38, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02);
    }

    /* Button transitions & active states */
    button, a.px-4, select {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    button:active, a.px-4:active {
      transform: scale(0.97);
    }

    /* Input Focus Glows */
    input:focus, select:focus, textarea:focus {
      box-shadow: 0 0 15px rgba(229, 57, 53, 0.15) !important;
      border-color: #E53935 !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Ripple Effect */
    .btn-ripple-container {
      position: relative;
      overflow: hidden;
    }
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      transform: scale(0);
      animation: ripple-animation 0.5s linear;
      pointer-events: none;
    }
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    /* Premium Modal Keyframes & Classes */
    @keyframes overlayFadeIn {
      from { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
      to   { opacity: 1; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
    }
    @keyframes overlayFadeOut {
      from { opacity: 1; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
      to   { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
    }
    @keyframes modalScaleIn {
      from { opacity: 0; transform: scale(0.95) translateY(10px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes modalScaleOut {
      from { opacity: 1; transform: scale(1) translateY(0); }
      to   { opacity: 0; transform: scale(0.95) translateY(10px); }
    }

    .modal-open-animate {
      display: flex !important;
      animation: overlayFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .modal-open-animate > div {
      animation: modalScaleIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .modal-close-animate {
      display: flex !important;
      animation: overlayFadeOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .modal-close-animate > div {
      animation: modalScaleOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    /* Custom Scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(7, 20, 38, 0.1);
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(229, 57, 53, 0.3);
    }

    /* Reduced Motion Accessibility */
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      .modal-open-animate, .modal-close-animate, .modal-open-animate > div, .modal-close-animate > div {
        animation: none !important;
      }
    }
  </style>`, `</head> <body class="h-full font-body antialiased text-slate-800 bg-[#f8fafc] overflow-x-hidden"> <!-- Main Layout Wrapper --> <div class="flex h-screen overflow-hidden"> <!-- Sidebar for Desktop --> <aside id="sidebar-desktop" class="hidden md:flex md:flex-col w-64 glass-sidebar text-white flex-shrink-0 relative z-20"> <script>
        if (localStorage.getItem('sidebar-collapsed') === 'true') {
          document.getElementById('sidebar-desktop').classList.add('sidebar-collapsed');
        }
      <\/script> <!-- Sidebar Header --> <div class="flex items-center justify-between px-6 py-6 border-b border-white/10 bg-slate-950/40 sidebar-header-container transition-all duration-300"> <a href="/" class="flex items-center gap-3 transition-transform hover:scale-105 logo-container shrink-0"> <img src="/favicon.svg" alt="Margdarshak Logo" class="h-8 w-auto object-contain bg-white rounded-lg p-1 shrink-0"> <div class="logo-text transition-all duration-200"> <h1 class="font-headline font-bold text-sm leading-tight tracking-wide text-white">Margdarshak</h1> <span class="text-[9px] text-[#FFB300] uppercase tracking-widest font-extrabold block">Admin Console</span> </div> </a> <button id="sidebar-collapse-btn" class="hidden md:flex p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0" aria-label="Collapse Sidebar"> <span class="material-symbols-outlined text-lg" id="sidebar-collapse-icon">menu_open</span> </button> </div> <!-- Navigation Links --> <nav class="flex-grow px-4 py-6 space-y-1.5 overflow-y-auto"> `, ' </nav> <!-- Sidebar Footer --> <div class="p-4 border-t border-white/10 bg-slate-950/30"> <button id="desktop-logout-btn" data-tooltip="Logout" class="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl font-headline font-semibold text-sm text-slate-400 hover:bg-[#E53935]/10 hover:text-[#E53935] transition-all duration-200 group"> <span class="material-symbols-outlined text-lg text-slate-400 group-hover:text-[#E53935] transition-colors">logout</span> <span class="logout-text transition-all duration-200">Logout</span> </button> </div> </aside> <!-- Mobile Drawer Sidebar (Initially Hidden) --> <div id="mobile-sidebar" class="fixed inset-0 z-50 md:hidden hidden" role="dialog" aria-modal="true"> <div id="mobile-sidebar-overlay" class="fixed inset-0 bg-[#071426]/60 backdrop-blur-sm transition-opacity"></div> <div class="relative flex flex-col w-full max-w-xs bg-[#071426] text-white h-full shadow-2xl transition-transform duration-300 ease-in-out -translate-x-full z-10" id="mobile-sidebar-menu"> <!-- Close Button --> <div class="absolute top-4 right-4"> <button id="close-mobile-btn" class="p-3 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close Sidebar"> <span class="material-symbols-outlined text-xl">close</span> </button> </div> <div class="flex items-center gap-3 px-6 py-6 border-b border-white/10 bg-slate-950/40"> <img src="/favicon.svg" alt="Margdarshak Logo" class="h-8 w-auto object-contain bg-white rounded-lg p-1"> <div> <h1 class="font-headline font-bold text-sm leading-tight tracking-wide text-white">Margdarshak</h1> <span class="text-[9px] text-[#FFB300] uppercase tracking-widest font-extrabold block">Admin Console</span> </div> </div> <nav class="flex-grow px-4 py-6 space-y-1.5 overflow-y-auto"> ', ' </nav> <div class="p-4 border-t border-white/10 bg-slate-950/30"> <button id="mobile-logout-btn" class="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl font-headline font-semibold text-sm text-slate-400 hover:bg-[#E53935]/10 hover:text-[#E53935] transition-all duration-200 min-h-[44px]"> <span class="material-symbols-outlined text-lg text-slate-400">logout</span>\nLogout\n</button> </div> </div> </div> <!-- Main Content Area --> <div class="flex flex-col flex-1 h-screen overflow-hidden"> <!-- Top Navigation Header --> <header class="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200/80 shadow-sm z-10 shrink-0"> <div class="flex items-center gap-4"> <!-- Hamburger Button for Mobile --> <button id="open-mobile-btn" class="p-3 text-slate-500 hover:text-[#E53935] rounded-xl hover:bg-slate-100 md:hidden focus:outline-none transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Open Sidebar"> <span class="material-symbols-outlined text-xl">menu</span> </button> <div class="flex items-center gap-2"> <h2 class="text-base font-headline font-bold text-[#071426] capitalize"> ', ' </h2> <span class="text-slate-300 hidden sm:inline">/</span> <span class="text-xs font-semibold text-slate-400 hidden sm:inline capitalize">Overview & Operations</span> </div> </div> <!-- Right Header Items: Search, Notifications, Profile --> <div class="flex items-center gap-4 sm:gap-6"> <!-- Mock Search Input --> <div class="relative hidden lg:block w-64"> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3 top-2.5">search</span> <input type="text" placeholder="Search console..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition-all font-medium"> </div> <!-- Notifications Mock Trigger --> <div class="relative"> <button class="p-2 text-slate-400 hover:text-[#071426] rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center relative"> <span class="material-symbols-outlined text-xl">notifications</span> <!-- Red dot badge --> <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E53935] border border-white"></span> </button> </div> <!-- Vertical separator --> <span class="w-px h-5 bg-slate-200"></span> <!-- Profile Info --> <div class="flex items-center gap-2.5"> <div class="w-8 h-8 bg-gradient-to-br from-[#071426] to-[#E53935] rounded-xl flex items-center justify-center text-white font-headline font-bold text-xs shadow-md">\nAD\n</div> <div class="hidden sm:block text-left"> <p class="text-xs font-headline font-bold text-[#071426] leading-tight">Admin Portal</p> <span class="text-[9px] text-[#FF7043] font-bold uppercase tracking-wider block">Superuser</span> </div> </div> </div> </header> <!-- Page Content Content Area --> <main class="flex-1 overflow-y-auto bg-[#f8fafc] p-6 md:p-8 relative"> <!-- background glow blobs --> <div class="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF7043]/5 blur-[80px] pointer-events-none -z-10"></div> <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFB300]/5 blur-[80px] pointer-events-none -z-10"></div> <div class="relative z-10 max-w-7xl xl:max-w-[92rem] 2xl:max-w-[95rem] mx-auto transition-all duration-300"> ', " </div> </main> </div> </div> <!-- Shared Toast Alerts --> <div id=\"toast-container\" class=\"fixed bottom-6 right-6 z-50 flex flex-col gap-3\"></div> <!-- Shared Logout Confirmation Script --> <script>\n    // Desktop Collapsible Sidebar\n    const sidebarDesktop = document.getElementById('sidebar-desktop');\n    const sidebarCollapseBtn = document.getElementById('sidebar-collapse-btn');\n    const sidebarCollapseIcon = document.getElementById('sidebar-collapse-icon');\n\n    if (sidebarDesktop && sidebarCollapseBtn) {\n      sidebarCollapseBtn.addEventListener('click', () => {\n        const isCollapsed = sidebarDesktop.classList.toggle('sidebar-collapsed');\n        localStorage.setItem('sidebar-collapsed', isCollapsed ? 'true' : 'false');\n        if (sidebarCollapseIcon) {\n          sidebarCollapseIcon.textContent = isCollapsed ? 'menu' : 'menu_open';\n        }\n      });\n      // Initial Sync\n      const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';\n      if (isCollapsed) {\n        sidebarDesktop.classList.add('sidebar-collapsed');\n        if (sidebarCollapseIcon) sidebarCollapseIcon.textContent = 'menu';\n      } else {\n        sidebarDesktop.classList.remove('sidebar-collapsed');\n        if (sidebarCollapseIcon) sidebarCollapseIcon.textContent = 'menu_open';\n      }\n    }\n\n    // Mobile Drawer Toggle\n    const mobileSidebar = document.getElementById('mobile-sidebar');\n    const mobileSidebarMenu = document.getElementById('mobile-sidebar-menu');\n    const openMobileBtn = document.getElementById('open-mobile-btn');\n    const closeMobileBtn = document.getElementById('close-mobile-btn');\n    const mobileOverlay = document.getElementById('mobile-sidebar-overlay');\n\n    if (openMobileBtn && mobileSidebar && mobileSidebarMenu) {\n      openMobileBtn.addEventListener('click', () => {\n        mobileSidebar.classList.remove('hidden');\n        mobileSidebar.classList.add('flex');\n        setTimeout(() => {\n          mobileSidebarMenu.classList.remove('-translate-x-full');\n        }, 10);\n      });\n    }\n\n    function closeSidebar() {\n      if (mobileSidebar && mobileSidebarMenu) {\n        mobileSidebarMenu.classList.add('-translate-x-full');\n        setTimeout(() => {\n          mobileSidebar.classList.remove('flex');\n          mobileSidebar.classList.add('hidden');\n        }, 300);\n      }\n    }\n\n    if (closeMobileBtn) closeMobileBtn.addEventListener('click', closeSidebar);\n    if (mobileOverlay) mobileOverlay.addEventListener('click', closeSidebar);\n\n    // Logout Functionality\n    async function logout() {\n      if (confirm('Are you sure you want to log out of the admin panel?')) {\n        try {\n          const res = await fetch('/api/logout', { method: 'POST' });\n          if (res.ok) {\n            window.location.href = '/admin/login';\n          } else {\n            alert('Logout failed. Please try again.');\n          }\n        } catch (err) {\n          console.error('Logout error:', err);\n          alert('Network error while logging out.');\n        }\n      }\n    }\n\n    const dLogout = document.getElementById('desktop-logout-btn');\n    const mLogout = document.getElementById('mobile-logout-btn');\n    if (dLogout) dLogout.addEventListener('click', logout);\n    if (mLogout) mLogout.addEventListener('click', logout);\n\n    // Global Toast alert system\n    window.showToast = function(message, type = 'success') {\n      const container = document.getElementById('toast-container');\n      if (!container) return;\n\n      const toast = document.createElement('div');\n      toast.className = \\`flex items-center gap-3 px-4 py-3.5 rounded-xl border shadow-lg max-w-sm text-sm transition-all duration-300 translate-y-4 opacity-0\\`;\n      \n      let icon = 'check_circle';\n      let colors = 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300';\n      \n      if (type === 'error') {\n        icon = 'error';\n        colors = 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950 dark:border-rose-800 dark:text-rose-300';\n      } else if (type === 'warning') {\n        icon = 'warning';\n        colors = 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-300';\n      }\n\n      toast.className += \\` \\${colors}\\`;\n      toast.innerHTML = \\`\n        <span class=\"material-symbols-outlined text-lg shrink-0\">\\${icon}</span>\n        <div class=\"font-medium\">\\${message}</div>\n      \\`;\n\n      container.appendChild(toast);\n      \n      // Animate entry\n      setTimeout(() => {\n        toast.classList.remove('translate-y-4', 'opacity-0');\n      }, 50);\n\n      // Animate leave and remove\n      setTimeout(() => {\n        toast.classList.add('translate-y-4', 'opacity-0');\n        setTimeout(() => {\n          toast.remove();\n        }, 300);\n      }, 3500);\n    }\n\n    // --- NEW MOTION DESIGN AND PAGE TRANSITIONS ENHANCEMENTS ---\n\n    // 1. Page Fade-In on Load\n    document.body.classList.add('page-loaded');\n\n    // 2. Page Fade-Out on Local Navigation Link Clicks\n    document.addEventListener('click', (e) => {\n      const link = e.target.closest('a');\n      if (!link) return;\n      \n      const href = link.getAttribute('href');\n      const target = link.getAttribute('target');\n      \n      if (!href || \n          href.startsWith('#') || \n          href.startsWith('mailto:') || \n          href.startsWith('tel:') || \n          target === '_blank' || \n          e.metaKey || \n          e.ctrlKey || \n          e.shiftKey || \n          e.altKey) {\n        return;\n      }\n      \n      const isSameSite = link.hostname === window.location.hostname;\n      if (!isSameSite) return;\n\n      e.preventDefault();\n      document.body.classList.remove('page-loaded');\n      document.body.classList.add('page-exit');\n      \n      setTimeout(() => {\n        window.location.href = href;\n      }, 220);\n    });\n\n    // 3. Handle Browser Back/Forward Cache Restorations\n    window.addEventListener('pageshow', (e) => {\n      if (e.persisted) {\n        document.body.classList.remove('page-exit');\n        document.body.classList.add('page-loaded');\n      }\n    });\n\n    // 4. Global Button Click Ripple Wave Effect\n    document.addEventListener('click', (e) => {\n      const target = e.target.closest('button, .btn-brand-gradient, .social-icon, .filter-pill');\n      if (!target || target.disabled) return;\n      \n      target.classList.add('btn-ripple-container');\n      \n      const rect = target.getBoundingClientRect();\n      const diameter = Math.max(target.clientWidth, target.clientHeight);\n      const radius = diameter / 2;\n      \n      const circle = document.createElement('span');\n      circle.style.width = circle.style.height = \\`\\${diameter}px\\`;\n      circle.style.left = \\`\\${e.clientX - rect.left - radius}px\\`;\n      circle.style.top = \\`\\${e.clientY - rect.top - radius}px\\`;\n      circle.classList.add('ripple');\n      \n      const isLightBg = target.classList.contains('bg-white') || \n                        target.classList.contains('bg-slate-100') || \n                        target.classList.contains('bg-slate-50') ||\n                        (target.tagName === 'BUTTON' && !target.className.includes('bg-') && !target.className.includes('btn-brand-gradient'));\n      \n      if (isLightBg) {\n        circle.style.backgroundColor = 'rgba(7, 20, 38, 0.12)';\n      }\n      \n      const oldRipple = target.querySelector('.ripple');\n      if (oldRipple) {\n        oldRipple.remove();\n      }\n      \n      target.appendChild(circle);\n    });\n  <\/script> </body> </html>"])), title, renderHead(), menuItems.map((item) => {
    const isTabActive = activeTab === item.id;
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.name, "data-tooltip")}${addAttribute(`flex items-center gap-3.5 px-4 py-3 rounded-xl font-headline font-semibold text-sm transition-all duration-200 group relative ${isTabActive ? "bg-gradient-to-r from-[#E53935] to-[#FF7043] text-white shadow-lg shadow-[#E53935]/20" : "text-slate-400 hover:bg-white/5 hover:text-white"}`, "class")}> <span${addAttribute(`material-symbols-outlined text-lg ${isTabActive ? "text-white" : "text-slate-400 group-hover:text-white transition-colors"}`, "class")}>${item.icon}</span> <span class="menu-label transition-all duration-200">${item.name}</span> ${isTabActive && renderTemplate`<span class="active-dot absolute right-3 w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>`} </a>`;
  }), menuItems.map((item) => {
    const isTabActive = activeTab === item.id;
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex items-center gap-3.5 px-4 py-3 rounded-xl font-headline font-semibold text-sm transition-all duration-200 relative ${isTabActive ? "bg-gradient-to-r from-[#E53935] to-[#FF7043] text-white shadow-lg" : "text-slate-400 hover:bg-white/5 hover:text-white"}`, "class")}> <span class="material-symbols-outlined text-lg">${item.icon}</span> ${item.name} </a>`;
  }), menuItems.find((item) => item.id === activeTab)?.name || "Admin Panel", renderSlot($$result, $$slots["default"]));
}, "C:/Users/margd/Documents/margdarshak-test/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
