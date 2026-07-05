import { f as createComponent, r as renderTemplate, n as renderHead } from '../../chunks/astro/server_Cz0Ahlmm.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html class="h-full bg-slate-50" lang="en"> <head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0" name="viewport"><title>Admin Login - Margdarshak Shikshan Sansthan</title><!-- Fonts & Favicon --><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@800&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Icons --><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet"><!-- Tailwind CSS --><script src="/assets/03ba5d9f9e95fc3599acebcbe7e5fb9a.js"><\/script><script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#071426",      // Deep Navy
            secondary: "#E53935",    // Brand Red
            accent: "#FFB300",       // Brand Golden Yellow
            brandOrange: "#FF7043",  // Brand Orange
            success: "#10b981",
            background: "#f8fafc"
          },
          fontFamily: {
            "headline": ["Outfit", "sans-serif"],
            "display": ["Outfit", "sans-serif"],
            "body": ["Plus Jakarta Sans", "sans-serif"]
          }
        }
      }
    }
  <\/script><style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    .glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 10px 30px -10px rgba(7, 20, 38, 0.05);
    }
    
    .btn-brand-gradient {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      background-size: 200% 100%;
      background-position: left center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-brand-gradient:hover {
      background-position: right center;
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(229, 57, 53, 0.25);
    }
    .btn-brand-gradient:active {
      transform: translateY(0);
    }

    /* Glow blobs */
    .glow-blob {
      position: absolute;
      border-radius: 9999px;
      filter: blur(120px);
      opacity: 0.15;
      pointer-events: none;
    }
  </style>`, `</head> <body class="h-full font-body antialiased text-slate-800 bg-slate-50"> <div class="min-h-screen flex flex-col md:flex-row"> <!-- Left Pane: Branding Info (Hidden on small screens) --> <div class="hidden md:flex md:w-1/2 bg-primary flex-col justify-between p-12 text-white relative overflow-hidden"> <!-- Glow blobs inside navy side --> <div class="glow-blob w-96 h-96 bg-[#E53935] -top-10 -left-10"></div> <div class="glow-blob w-96 h-96 bg-[#FFB300] -bottom-10 -right-10"></div> <!-- Top Section --> <div class="relative z-10"> <a href="/" class="inline-flex items-center gap-3 transition-transform hover:scale-105"> <img src="/favicon.svg" alt="Margdarshak Logo" class="h-9 w-auto object-contain bg-white rounded-lg p-1.5"> <span class="font-headline font-bold text-base tracking-wide text-white">Margdarshak Console</span> </a> </div> <!-- Center Section --> <div class="relative z-10 max-w-md my-auto space-y-6"> <h2 class="text-4xl lg:text-5xl font-headline font-extrabold leading-tight tracking-tight text-white">
Secure <span class="bg-gradient-to-r from-[#E53935] via-[#FF7043] to-[#FFB300] bg-clip-text text-fill-transparent -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Administrator</span> Portal
</h2> <p class="text-sm text-slate-300 leading-relaxed font-medium">
Access the backend tools to manage training courses, internship schedules, registered leads, and overall platform details.
</p> <!-- Premium micro info card --> <div class="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3.5 shadow-xl"> <div class="flex items-center gap-3"> <span class="material-symbols-outlined text-[#FFB300]">verified_user</span> <span class="text-xs font-headline font-bold uppercase tracking-wider text-slate-200">Authorized Personnel Only</span> </div> <p class="text-xs text-slate-400 leading-relaxed font-medium">
This workspace contains student personal credentials. All access attempts and configurations are logged securely.
</p> </div> </div> <!-- Bottom Section --> <div class="relative z-10 flex items-center justify-between border-t border-white/10 pt-6"> <p class="text-xs text-slate-500 font-medium">\xA9 2026 Margdarshak Shikshan Sansthan.</p> <span class="text-[10px] text-[#FFB300] font-extrabold uppercase tracking-widest">Padhega Bharat, Badhega Bharat</span> </div> </div> <!-- Right Pane: Login Form --> <div class="w-full md:w-1/2 flex flex-col justify-center py-12 px-3.5 sm:px-6 lg:px-16 bg-[#f8fafc] relative"> <!-- Glow blobs inside light side --> <div class="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#E53935]/5 blur-[80px] pointer-events-none"></div> <div class="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#FFB300]/5 blur-[80px] pointer-events-none"></div> <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10"> <!-- Logo for mobile screens --> <div class="flex justify-center md:hidden mb-6"> <a href="/" class="inline-flex transition-transform hover:scale-105"> <img src="/logo-navbar.svg" alt="Margdarshak Logo" class="h-10 w-auto object-contain"> </a> </div> <div class="text-center md:text-left space-y-2"> <h2 class="text-2xl lg:text-3xl font-headline font-extrabold text-[#071426]">
Sign In to Console
</h2> <p class="text-xs lg:text-sm text-slate-400 font-medium">
Please enter your administrator username and password.
</p> </div> <div class="mt-8"> <div class="glass-card py-6 px-4 sm:py-8 sm:px-10 rounded-3xl border border-slate-200/60 space-y-6"> <!-- Error Message Box --> <div id="error-box" class="hidden bg-rose-50 border border-rose-200 text-[#E53935] px-4 py-3.5 rounded-xl text-xs font-semibold flex items-start gap-2.5"> <span class="material-symbols-outlined text-lg shrink-0">error</span> <span id="error-message" class="font-medium"></span> </div> <form id="login-form" class="space-y-5"> <!-- Username input --> <div class="space-y-1.5"> <label for="username" class="text-xs font-bold text-slate-700 block">
Username
</label> <div class="relative"> <span class="material-symbols-outlined text-slate-400 text-lg absolute left-3 top-1/2 -translate-y-1/2">person</span> <input id="username" name="username" type="text" required class="appearance-none block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:border-[#E53935] text-xs sm:text-sm transition-all" placeholder="Enter admin username"> </div> </div> <!-- Password input --> <div class="space-y-1.5"> <label for="password" class="text-xs font-bold text-slate-700 block">
Password
</label> <div class="relative"> <span class="material-symbols-outlined text-slate-400 text-lg absolute left-3 top-1/2 -translate-y-1/2">lock</span> <input id="password" name="password" type="password" required class="appearance-none block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:border-[#E53935] text-xs sm:text-sm transition-all" placeholder="Enter password"> </div> </div> <!-- Submit button --> <div class="pt-2"> <button type="submit" id="submit-btn" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-xs sm:text-sm font-bold text-white btn-brand-gradient shadow-md focus:outline-none select-none">
Sign In
</button> </div> </form> <div class="text-center pt-2 border-t border-slate-100"> <a href="/" class="text-xs font-semibold text-[#E53935] hover:underline flex items-center justify-center gap-1.5 transition-colors"> <span class="material-symbols-outlined text-sm font-bold">arrow_back</span>
Return to Main Website
</a> </div> </div> </div> </div> </div> </div> <script>
    const form = document.getElementById('login-form');
    const submitBtn = document.getElementById('submit-btn');
    const errorBox = document.getElementById('error-box');
    const errorMessage = document.getElementById('error-message');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear errors
        errorBox.classList.add('hidden');
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Authenticating...';

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });

          const data = await res.json();

          if (res.ok && data.success) {
            window.location.href = '/admin/dashboard';
          } else {
            errorMessage.textContent = data.error || 'Failed to authenticate.';
            errorBox.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        } catch (err) {
          console.error(err);
          errorMessage.textContent = 'A network error occurred. Please try again.';
          errorBox.classList.remove('hidden');
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    }
  <\/script> </body> </html>`])), renderHead());
}, "C:/Users/margd/Documents/margdarshak-test/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/margd/Documents/margdarshak-test/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
