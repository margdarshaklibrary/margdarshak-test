import { e as createAstro, f as createComponent, h as addAttribute, r as renderTemplate, u as unescapeHTML, o as renderSlot, n as renderHead, m as maybeRenderHead, k as renderComponent } from './astro/server_Cz0Ahlmm.mjs';
import 'piccolore';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://margdarshak.in");
const $$SeoHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SeoHead;
  const {
    title,
    description,
    canonicalPath = Astro2.url.pathname,
    ogImage = "/assets/new_hero_illustration.png",
    ogType = "website",
    noindex = false,
    jsonLd
  } = Astro2.props;
  const siteUrl = "https://margdarshak.in";
  const canonicalURL = new URL(canonicalPath, siteUrl).href;
  const ogImageURL = new URL(ogImage, siteUrl).href;
  const siteName = "Margdarshak Shikshan Sansthan";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": siteName,
    "alternateName": "Margdarshak",
    "url": siteUrl,
    "logo": new URL("/logo-navbar.svg", siteUrl).href,
    "description": "Job-oriented skill development institute in Darbhanga, Bihar. Courses in Web Development, Tally, GST, Digital Marketing with 100% fee refund guarantee.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Darbhanga Medical College",
      "addressLocality": "Darbhanga",
      "addressRegion": "Bihar",
      "postalCode": "846003",
      "addressCountry": "IN"
    },
    "telephone": "+919229025257",
    "sameAs": [
      "https://wa.me/919229025257",
      "https://play.google.com/store/apps/details?id=co.varys.shacc"
    ],
    "foundingDate": "2020",
    "areaServed": {
      "@type": "City",
      "name": "Darbhanga"
    }
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalURL,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl
    },
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl
    }
  };
  const allSchemas = [organizationSchema, webPageSchema];
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      allSchemas.push(...jsonLd);
    } else {
      allSchemas.push(jsonLd);
    }
  }
  return renderTemplate`<!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Robots -->${noindex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`}<!-- Open Graph --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><meta property="og:locale" content="en_IN"><meta property="og:image"${addAttribute(ogImageURL, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"${addAttribute(title, "content")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImageURL, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><!-- Additional SEO --><meta name="theme-color" content="#071426"><meta name="author"${addAttribute(siteName, "content")}><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Structured Data (JSON-LD) -->${allSchemas.map((schema) => renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))))}`;
}, "C:/Users/margd/Documents/margdarshak-test/src/layouts/seo-head.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://margdarshak.in");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Premium job-oriented education with 100% fee refund. Learn Web Development, Tally, GST, and more.",
    ogImage,
    ogType,
    noindex = false,
    jsonLd
  } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Internships", href: "/internships" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };
  return renderTemplate(_a || (_a = __template(['<html class="scroll-smooth font-body" lang="en"> <head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0" name="viewport"><title>', "</title><meta", ' name="description"><!-- SEO: Open Graph, Twitter Cards, Canonical, Structured Data -->', `<!-- Fonts & Favicon --><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@800&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Icons (deferred to avoid render-blocking) --><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet" media="print" onload="this.media='all'">`, `<noscript><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet"></noscript><!-- Tailwind CSS --><script src="/assets/03ba5d9f9e95fc3599acebcbe7e5fb9a.js"><\/script><script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          screens: {
            'xs': '375px',
          },
          colors: {
            primary: "#071426",      // Deep Navy base
            secondary: "#E53935",    // Brand Red
            accent: "#FFB300",       // Brand Golden Yellow
            brandOrange: "#FF7043",  // Brand Orange
            success: "#E53935",      // Brand Red
            background: "#f8fafc",   // Light Gray
            charcoal: "#071426",     // Cohesive Navy
            purpleglow: "#E53935",   // Soft Red Accent
            orangeglow: "#FF7043"    // Soft Orange Accent
          },
          borderRadius: {
            "DEFAULT": "0.5rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "2xl": "1rem",           // Standardized Bento Card Corner Radius
            "3xl": "1.5rem",
            "4xl": "2rem",
            "full": "9999px"
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
            "glass": "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 32px 0 rgba(7, 20, 38, 0.04)",
            "glow-purple": "0 0 25px rgba(229, 57, 53, 0.22)",
            "glow-red": "0 0 25px rgba(229, 57, 53, 0.22)",
            "glow-orange": "0 0 25px rgba(255, 112, 67, 0.22)",
            "glow-golden": "0 0 25px rgba(255, 179, 0, 0.22)"
          },
          animation: {
            "float-slow": "floatSlow 8s ease-in-out infinite",
            "float-medium": "floatMedium 5s ease-in-out infinite",
            "pulse-glow": "pulseGlow 4s ease-in-out infinite",
            "shimmer": "shimmer 2.5s linear infinite"
          },
          keyframes: {
            floatSlow: {
              "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
              "50%": { transform: "translateY(-15px) rotate(1deg)" }
            },
            floatMedium: {
              "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
              "50%": { transform: "translateY(-10px) rotate(-1deg)" }
            },
            pulseGlow: {
              "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
              "50%": { opacity: 0.7, transform: "scale(1.03)" }
            },
            shimmer: {
              "100%": { transform: "translateX(100%)" }
            }
          }
        }
      }
    }
  <\/script><style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    /* Modern Premium Glassmorphism */
    .glass-panel {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .glass-card-premium {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 10px 30px -10px rgba(7, 20, 38, 0.04);
    }
    .dark .glass-card-premium {
      background: rgba(7, 20, 38, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 40px -10px rgba(0, 0, 0, 0.3);
    }
    .glass-input {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-input:focus {
      border-color: #E53935;
      box-shadow: 0 0 15px rgba(229, 57, 53, 0.15);
      background: rgba(255, 255, 255, 0.06);
    }

    /* Premium Brand Button - Red to Orange to Golden Yellow */
    .btn-brand-gradient {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      background-size: 200% 100%;
      background-position: left center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 15px rgba(229, 57, 53, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2);
    }
    .btn-brand-gradient:hover {
      background-position: right center;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 25px rgba(229, 57, 53, 0.4), 0 0 15px rgba(255, 179, 0, 0.3);
    }
    .btn-brand-gradient:active {
      transform: translateY(0) scale(0.98);
    }

    /* Gradient Background Mesh & Blobs */
    .glow-blob {
      position: absolute;
      border-radius: 9999px;
      mix-blend-mode: plus-lighter;
      filter: blur(100px);
      opacity: 0.4;
      pointer-events: none;
      z-index: 1;
    }
    
    /* Text gradients following Brand Red -> Orange -> Golden Yellow */
    .text-gradient-purple-orange {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .text-gradient-white-orange {
      background: linear-gradient(135deg, #ffffff 40%, #FFB300 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Page transitions \u2014 NOT applied by default to avoid blocking FCP.
       The transition class is added via JS only after initial paint. */
    body.page-transition-ready {
      transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    }
    body.page-exit {
      opacity: 0;
      transform: translateY(-4px);
    }

    /* Skip to content link (accessibility) */
    .skip-to-content {
      position: absolute;
      top: -100%;
      left: 16px;
      z-index: 9999;
      background: #E53935;
      color: #fff;
      padding: 12px 24px;
      border-radius: 0 0 8px 8px;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      transition: top 0.2s ease;
    }
    .skip-to-content:focus {
      top: 0;
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

    /* Scroll Reveal classes */
    .reveal {
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .reveal-slide-up {
      transform: translateY(30px);
    }
    .reveal-slide-down {
      transform: translateY(-30px);
    }
    .reveal-slide-left {
      transform: translateX(30px);
    }
    .reveal-slide-right {
      transform: translateX(-30px);
    }
    .reveal-scale {
      transform: scale(0.96);
    }
    .reveal.revealed {
      opacity: 1;
      transform: translate(0) scale(1);
    }

    .animate-on-scroll {
      opacity: 0;
      transform: translateY(25px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .animate-on-scroll.reveal-active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Button and Interactive Elements Transitions */
    button, a.px-6, a.px-8, .btn-brand-gradient, .social-icon {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    button:focus-visible, a:focus-visible {
      outline: 2px solid #E53935;
      outline-offset: 2px;
    }
    button:active, a:active {
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
      .reveal, .animate-on-scroll {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }

    .hero-gradient {
      background: radial-gradient(circle at 50% 0%, #0c1c38 0%, #071426 100%);
    }

    /* Scrollbar enhancements */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #071426;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(229, 57, 53, 0.4);
    }

    /* Sticky Header Transition Styles */
    #main-header {
      transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #main-header nav {
      transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #main-header.header-scrolled {
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 10px 30px -10px rgba(7, 20, 38, 0.06), 0 1px 3px rgba(0, 0, 0, 0.01);
      border-color: rgba(226, 232, 240, 0.8);
    }
    .dark #main-header.header-scrolled {
      background-color: rgba(15, 23, 42, 0.85);
      border-color: rgba(51, 65, 85, 0.6);
      box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.3);
    }
    #main-header.header-scrolled nav {
      padding-top: 0.625rem; /* py-2.5 equivalent */
      padding-bottom: 0.625rem;
    }

    /* Premium Active Nav Item Underline */
    .nav-link {
      position: relative;
      transition: color 0.3s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #E53935, #FF7043);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .nav-link:hover::after,
    .nav-link.active::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    /* Animated Hamburger Menu */
    .hamburger-line {
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, background-color 0.3s ease;
    }
    body.menu-open #hamburger-line1 {
      transform: translateY(8px) rotate(45deg);
    }
    body.menu-open #hamburger-line2 {
      opacity: 0;
      transform: scaleX(0);
    }
    body.menu-open #hamburger-line3 {
      transform: translateY(-8px) rotate(-45deg);
    }

    /* Social Icons Hover Styling & Glows */
    .social-icon {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .social-icon:hover {
      transform: translateY(-4px) scale(1.08);
    }
    .social-icon-whatsapp:hover {
      background-color: #25D366 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.45);
      border-color: transparent !important;
    }
    .social-icon-phone:hover {
      background-color: #00E676 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(0, 230, 118, 0.45);
      border-color: transparent !important;
    }
    .social-icon-map:hover {
      background-color: #EA4335 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(234, 67, 53, 0.45);
      border-color: transparent !important;
    }
    .social-icon-register:hover {
      background-color: #FF7043 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(255, 112, 67, 0.45);
      border-color: transparent !important;
    }

    /* Newsletter Premium Focus Styles */
    .newsletter-input {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .newsletter-input:focus {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 179, 0, 0.6); /* Accent yellow tint */
      box-shadow: 0 0 20px rgba(255, 179, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05);
    }
  </style>`, '</head> <body class="font-body text-slate-800 bg-slate-50 min-h-screen flex flex-col justify-between overflow-x-hidden"> <!-- Skip to content (Accessibility) --> <a href="#main-content" class="skip-to-content">Skip to main content</a> <!-- Header --> <header id="main-header" class="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 border-b border-transparent backdrop-blur-md transition-all duration-300" role="banner"> <nav class="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1440px] mx-auto transition-all duration-300" aria-label="Main navigation"> <a href="/" class="flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-95" aria-label="Margdarshak Shikshan Sansthan \u2014 Home"> <img src="/logo-navbar.svg" alt="Margdarshak Shikshan Sansthan Logo" class="h-10 md:h-12 w-auto object-contain" width="320" height="56"> <span class="sr-only">Margdarshak Shikshan Sansthan</span> </a> <!-- Desktop Nav --> <div class="hidden md:flex items-center gap-6 lg:gap-8"> ', ' <a href="/register"', '>\nRegister Now\n</a> </div> <!-- Mobile Menu Toggle Button --> <div class="md:hidden flex items-center justify-center -mr-2"> <button id="menu-btn" class="p-3 w-11 h-11 rounded-xl flex flex-col justify-center items-center gap-1.5 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu"> <span class="w-6 h-[2px] bg-primary dark:bg-white rounded-full hamburger-line" id="hamburger-line1" aria-hidden="true"></span> <span class="w-6 h-[2px] bg-primary dark:bg-white rounded-full hamburger-line" id="hamburger-line2" aria-hidden="true"></span> <span class="w-6 h-[2px] bg-primary dark:bg-white rounded-full hamburger-line" id="hamburger-line3" aria-hidden="true"></span> </button> </div> </nav> </header> <!-- Mobile Drawer Menu (Initially Hidden) --> <div id="mobile-menu" class="fixed inset-0 z-50 md:hidden hidden" role="dialog" aria-modal="true" aria-label="Navigation menu"> <!-- Backdrop overlay --> <div id="mobile-menu-overlay" class="fixed inset-0 bg-[#071426]/60 backdrop-blur-sm transition-opacity duration-400 opacity-0"></div> <!-- Drawer menu content --> <div id="mobile-menu-drawer" class="relative flex flex-col w-full max-w-xs bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-white h-full ml-auto shadow-2xl transition-transform duration-400 ease-in-out translate-x-full z-10"> <!-- Close button & Logo header --> <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40"> <a href="/" class="flex items-center gap-3" aria-label="Margdarshak Home"> <img src="/logo-navbar.svg" alt="Margdarshak Shikshan Sansthan Logo" class="h-10 w-auto object-contain" width="320" height="56"> </a> <button id="close-menu-btn" class="w-10 h-10 text-slate-500 hover:text-secondary rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-all duration-300 hover:rotate-90" aria-label="Close Menu"> <span class="material-symbols-outlined text-2xl">close</span> </button> </div> <!-- Navigation Links --> <nav class="flex-grow px-6 py-6 space-y-3 overflow-y-auto" aria-label="Mobile navigation"> ', ' </nav> <!-- Drawer Footer with CTA --> <div class="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 space-y-4"> <a href="/register" class="block text-center btn-brand-gradient text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-glow-red active:scale-[0.98]">\nRegister Now\n</a> <div class="flex justify-center gap-4 text-xs font-semibold text-slate-400"> <a href="tel:+919229025257" class="flex items-center gap-1 hover:text-secondary min-h-[44px] px-2 flex-row justify-center items-center"> <span class="material-symbols-outlined text-sm">call</span> Call\n</a> <span class="text-slate-300 flex items-center">|</span> <a href="https://wa.me/919229025257" class="flex items-center gap-1 hover:text-secondary min-h-[44px] px-2 flex-row justify-center items-center"> <span class="material-symbols-outlined text-sm">chat</span> WhatsApp\n</a> </div> </div> </div> </div> <!-- Main Content Slot --> <main id="main-content" class="flex-grow pt-16 md:pt-[72px]" role="main"> ', ` </main> <!-- Footer --> <footer class="bg-primary dark:bg-slate-950 text-white border-t border-white/10 w-full rounded-none" role="contentinfo"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-20 max-w-[1440px] mx-auto"> <div class="space-y-6"> <div class="flex items-center gap-3"> <img src="/logo-footer.svg" alt="Margdarshak Shikshan Sansthan Logo" class="h-10 w-auto object-contain" width="320" height="56" loading="lazy"> <span class="sr-only">Margdarshak Shikshan Sansthan</span> </div> <p class="text-slate-300 text-sm leading-relaxed">Empowering the youth of Bharat with job-ready skills and affordable education. Excellence through dedication.</p> <div class="flex gap-4"> <a class="social-icon social-icon-whatsapp w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="https://wa.me/919229025257" target="_blank" aria-label="WhatsApp"> <span class="material-symbols-outlined text-lg">chat</span> </a> <a class="social-icon social-icon-phone w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="tel:+919229025257" aria-label="Phone Call"> <span class="material-symbols-outlined text-lg">call</span> </a> <a class="social-icon social-icon-map w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="/contact" aria-label="Location Map"> <span class="material-symbols-outlined text-lg">location_on</span> </a> <a class="social-icon social-icon-register w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="/register" aria-label="Register Now"> <span class="material-symbols-outlined text-lg">app_registration</span> </a> </div> </div> <div> <h4 class="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/5 pb-2">Quick Links</h4> <ul class="space-y-3 font-body text-sm"> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/">Home</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses">Courses</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/internships">Internships</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/about">About Us</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/contact">Contact Us</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block text-xs opacity-75" href="/admin">Admin Login</a></li> </ul> </div> <div> <h4 class="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/5 pb-2">Our Core Programs</h4> <ul class="space-y-3 font-body text-sm"> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses/web-development">Web Development</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses/tally-advanced-excel">Tally & Advanced Excel</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses/gst-return-filing">GST & Return Filing</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/internships/ai-tools">AI Tools Internship</a></li> </ul> </div> <div> <h4 class="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/5 pb-2">Newsletter</h4> <p class="text-slate-300 text-sm mb-4 leading-relaxed">Stay updated with our latest courses and scholarship opportunities.</p> <form class="relative w-full" action="#" method="post" aria-label="Newsletter subscription"> <label for="newsletter-email" class="sr-only">Email Address</label> <input id="newsletter-email" class="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 pr-14 focus:outline-none focus:border-accent/80 text-sm text-white focus:bg-white/10 focus:ring-1 focus:ring-accent/30 transition-all duration-300 newsletter-input" placeholder="Email Address" type="email" autocomplete="email" required> <button type="submit" class="absolute right-2 top-2 bg-accent text-primary p-2 rounded-xl flex items-center justify-center hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300" aria-label="Subscribe to newsletter"> <span class="material-symbols-outlined text-sm font-bold" aria-hidden="true">arrow_forward</span> </button> </form> </div> </div> <div class="border-t border-white/10 px-6 md:px-12 py-8 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4"> <p class="font-body text-xs text-slate-400 tracking-wide font-normal">\xA9 2026 Margdarshak Shikshan Sansthan. Padhega Bharat, Badhega Bharat.</p> <div class="flex gap-8 text-xs font-medium text-slate-400"> <a class="hover:text-white transition-colors duration-200" href="#">Terms of Service</a> <a class="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a> </div> </div> </footer> <!-- Scripts --> <script>
    // Mobile menu toggle drawer logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    function openDrawer() {
      if (mobileMenu && mobileMenuDrawer && mobileMenuOverlay) {
        document.body.classList.add('overflow-hidden', 'menu-open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        setTimeout(() => {
          mobileMenuOverlay.classList.remove('opacity-0');
          mobileMenuOverlay.classList.add('opacity-100');
          mobileMenuDrawer.classList.remove('translate-x-full');
        }, 10);
      }
    }

    function closeDrawer() {
      if (mobileMenu && mobileMenuDrawer && mobileMenuOverlay) {
        document.body.classList.remove('overflow-hidden', 'menu-open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuOverlay.classList.remove('opacity-100');
        mobileMenuOverlay.classList.add('opacity-0');
        mobileMenuDrawer.classList.add('translate-x-full');
        setTimeout(() => {
          mobileMenu.classList.remove('flex');
          mobileMenu.classList.add('hidden');
        }, 400);
      }
    }

    if (menuBtn) menuBtn.addEventListener('click', openDrawer);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeDrawer);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeDrawer);

    // Auto-close on drawer link click
    if (mobileMenuDrawer) {
      const drawerLinks = mobileMenuDrawer.querySelectorAll('a');
      drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
      });
    }

    // Sticky Header Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });

    // --- NEW MOTION DESIGN AND PAGE TRANSITIONS ENHANCEMENTS ---

    // 1. Page Fade-In on Load \u2014 enable transition class after first paint
    //    to avoid blocking FCP/LCP with opacity:0
    requestAnimationFrame(() => {
      document.body.classList.add('page-transition-ready');
    });

    // 2. Page Fade-Out on Local Navigation Link Clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      const target = link.getAttribute('target');
      
      if (!href || 
          href.startsWith('#') || 
          href.startsWith('mailto:') || 
          href.startsWith('tel:') || 
          target === '_blank' || 
          e.metaKey || 
          e.ctrlKey || 
          e.shiftKey || 
          e.altKey) {
        return;
      }
      
      const isSameSite = link.hostname === window.location.hostname;
      if (!isSameSite) return;

      e.preventDefault();
      document.body.classList.add('page-exit');
      
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    });

    // 3. Handle Browser Back/Forward Cache Restorations
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        document.body.classList.remove('page-exit');
      }
    });

    // 4. Global Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal, .animate-on-scroll');
    if (revealElements.length > 0) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-on-scroll')) {
              entry.target.classList.add('reveal-active');
            } else {
              entry.target.classList.add('revealed');
            }
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      });
      
      revealElements.forEach(el => revealObserver.observe(el));
    }

    // 5. Global Button Click Ripple Wave Effect
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, .btn-brand-gradient, .social-icon, .filter-pill');
      if (!target || target.disabled) return;
      
      target.classList.add('btn-ripple-container');
      
      const rect = target.getBoundingClientRect();
      const diameter = Math.max(target.clientWidth, target.clientHeight);
      const radius = diameter / 2;
      
      const circle = document.createElement('span');
      circle.style.width = circle.style.height = \`\${diameter}px\`;
      circle.style.left = \`\${e.clientX - rect.left - radius}px\`;
      circle.style.top = \`\${e.clientY - rect.top - radius}px\`;
      circle.classList.add('ripple');
      
      const isLightBg = target.classList.contains('bg-white') || 
                        target.classList.contains('bg-slate-100') || 
                        target.classList.contains('bg-slate-50') ||
                        target.classList.contains('bg-slate-100/60') ||
                        (target.tagName === 'BUTTON' && !target.className.includes('bg-') && !target.className.includes('btn-brand-gradient'));
      
      if (isLightBg) {
        circle.style.backgroundColor = 'rgba(7, 20, 38, 0.12)';
      }
      
      const oldRipple = target.querySelector('.ripple');
      if (oldRipple) {
        oldRipple.remove();
      }
      
      target.appendChild(circle);
    });
  <\/script> </body> </html>`], ['<html class="scroll-smooth font-body" lang="en"> <head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0" name="viewport"><title>', "</title><meta", ' name="description"><!-- SEO: Open Graph, Twitter Cards, Canonical, Structured Data -->', `<!-- Fonts & Favicon --><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@800&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Icons (deferred to avoid render-blocking) --><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet" media="print" onload="this.media='all'">`, `<noscript><link href="/assets/a39f5c6fcbb87b419667ec984d2e579a.css" rel="stylesheet"></noscript><!-- Tailwind CSS --><script src="/assets/03ba5d9f9e95fc3599acebcbe7e5fb9a.js"><\/script><script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          screens: {
            'xs': '375px',
          },
          colors: {
            primary: "#071426",      // Deep Navy base
            secondary: "#E53935",    // Brand Red
            accent: "#FFB300",       // Brand Golden Yellow
            brandOrange: "#FF7043",  // Brand Orange
            success: "#E53935",      // Brand Red
            background: "#f8fafc",   // Light Gray
            charcoal: "#071426",     // Cohesive Navy
            purpleglow: "#E53935",   // Soft Red Accent
            orangeglow: "#FF7043"    // Soft Orange Accent
          },
          borderRadius: {
            "DEFAULT": "0.5rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "2xl": "1rem",           // Standardized Bento Card Corner Radius
            "3xl": "1.5rem",
            "4xl": "2rem",
            "full": "9999px"
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
            "glass": "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 32px 0 rgba(7, 20, 38, 0.04)",
            "glow-purple": "0 0 25px rgba(229, 57, 53, 0.22)",
            "glow-red": "0 0 25px rgba(229, 57, 53, 0.22)",
            "glow-orange": "0 0 25px rgba(255, 112, 67, 0.22)",
            "glow-golden": "0 0 25px rgba(255, 179, 0, 0.22)"
          },
          animation: {
            "float-slow": "floatSlow 8s ease-in-out infinite",
            "float-medium": "floatMedium 5s ease-in-out infinite",
            "pulse-glow": "pulseGlow 4s ease-in-out infinite",
            "shimmer": "shimmer 2.5s linear infinite"
          },
          keyframes: {
            floatSlow: {
              "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
              "50%": { transform: "translateY(-15px) rotate(1deg)" }
            },
            floatMedium: {
              "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
              "50%": { transform: "translateY(-10px) rotate(-1deg)" }
            },
            pulseGlow: {
              "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
              "50%": { opacity: 0.7, transform: "scale(1.03)" }
            },
            shimmer: {
              "100%": { transform: "translateX(100%)" }
            }
          }
        }
      }
    }
  <\/script><style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    /* Modern Premium Glassmorphism */
    .glass-panel {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .glass-card-premium {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 10px 30px -10px rgba(7, 20, 38, 0.04);
    }
    .dark .glass-card-premium {
      background: rgba(7, 20, 38, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 40px -10px rgba(0, 0, 0, 0.3);
    }
    .glass-input {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-input:focus {
      border-color: #E53935;
      box-shadow: 0 0 15px rgba(229, 57, 53, 0.15);
      background: rgba(255, 255, 255, 0.06);
    }

    /* Premium Brand Button - Red to Orange to Golden Yellow */
    .btn-brand-gradient {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      background-size: 200% 100%;
      background-position: left center;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 15px rgba(229, 57, 53, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2);
    }
    .btn-brand-gradient:hover {
      background-position: right center;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 25px rgba(229, 57, 53, 0.4), 0 0 15px rgba(255, 179, 0, 0.3);
    }
    .btn-brand-gradient:active {
      transform: translateY(0) scale(0.98);
    }

    /* Gradient Background Mesh & Blobs */
    .glow-blob {
      position: absolute;
      border-radius: 9999px;
      mix-blend-mode: plus-lighter;
      filter: blur(100px);
      opacity: 0.4;
      pointer-events: none;
      z-index: 1;
    }
    
    /* Text gradients following Brand Red -> Orange -> Golden Yellow */
    .text-gradient-purple-orange {
      background: linear-gradient(135deg, #E53935 0%, #FF7043 50%, #FFB300 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .text-gradient-white-orange {
      background: linear-gradient(135deg, #ffffff 40%, #FFB300 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Page transitions \u2014 NOT applied by default to avoid blocking FCP.
       The transition class is added via JS only after initial paint. */
    body.page-transition-ready {
      transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    }
    body.page-exit {
      opacity: 0;
      transform: translateY(-4px);
    }

    /* Skip to content link (accessibility) */
    .skip-to-content {
      position: absolute;
      top: -100%;
      left: 16px;
      z-index: 9999;
      background: #E53935;
      color: #fff;
      padding: 12px 24px;
      border-radius: 0 0 8px 8px;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      transition: top 0.2s ease;
    }
    .skip-to-content:focus {
      top: 0;
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

    /* Scroll Reveal classes */
    .reveal {
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .reveal-slide-up {
      transform: translateY(30px);
    }
    .reveal-slide-down {
      transform: translateY(-30px);
    }
    .reveal-slide-left {
      transform: translateX(30px);
    }
    .reveal-slide-right {
      transform: translateX(-30px);
    }
    .reveal-scale {
      transform: scale(0.96);
    }
    .reveal.revealed {
      opacity: 1;
      transform: translate(0) scale(1);
    }

    .animate-on-scroll {
      opacity: 0;
      transform: translateY(25px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .animate-on-scroll.reveal-active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Button and Interactive Elements Transitions */
    button, a.px-6, a.px-8, .btn-brand-gradient, .social-icon {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    button:focus-visible, a:focus-visible {
      outline: 2px solid #E53935;
      outline-offset: 2px;
    }
    button:active, a:active {
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
      .reveal, .animate-on-scroll {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }

    .hero-gradient {
      background: radial-gradient(circle at 50% 0%, #0c1c38 0%, #071426 100%);
    }

    /* Scrollbar enhancements */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #071426;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(229, 57, 53, 0.4);
    }

    /* Sticky Header Transition Styles */
    #main-header {
      transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #main-header nav {
      transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #main-header.header-scrolled {
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 10px 30px -10px rgba(7, 20, 38, 0.06), 0 1px 3px rgba(0, 0, 0, 0.01);
      border-color: rgba(226, 232, 240, 0.8);
    }
    .dark #main-header.header-scrolled {
      background-color: rgba(15, 23, 42, 0.85);
      border-color: rgba(51, 65, 85, 0.6);
      box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.3);
    }
    #main-header.header-scrolled nav {
      padding-top: 0.625rem; /* py-2.5 equivalent */
      padding-bottom: 0.625rem;
    }

    /* Premium Active Nav Item Underline */
    .nav-link {
      position: relative;
      transition: color 0.3s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #E53935, #FF7043);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .nav-link:hover::after,
    .nav-link.active::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    /* Animated Hamburger Menu */
    .hamburger-line {
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, background-color 0.3s ease;
    }
    body.menu-open #hamburger-line1 {
      transform: translateY(8px) rotate(45deg);
    }
    body.menu-open #hamburger-line2 {
      opacity: 0;
      transform: scaleX(0);
    }
    body.menu-open #hamburger-line3 {
      transform: translateY(-8px) rotate(-45deg);
    }

    /* Social Icons Hover Styling & Glows */
    .social-icon {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .social-icon:hover {
      transform: translateY(-4px) scale(1.08);
    }
    .social-icon-whatsapp:hover {
      background-color: #25D366 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.45);
      border-color: transparent !important;
    }
    .social-icon-phone:hover {
      background-color: #00E676 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(0, 230, 118, 0.45);
      border-color: transparent !important;
    }
    .social-icon-map:hover {
      background-color: #EA4335 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(234, 67, 53, 0.45);
      border-color: transparent !important;
    }
    .social-icon-register:hover {
      background-color: #FF7043 !important;
      color: #ffffff !important;
      box-shadow: 0 8px 20px rgba(255, 112, 67, 0.45);
      border-color: transparent !important;
    }

    /* Newsletter Premium Focus Styles */
    .newsletter-input {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .newsletter-input:focus {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 179, 0, 0.6); /* Accent yellow tint */
      box-shadow: 0 0 20px rgba(255, 179, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05);
    }
  </style>`, '</head> <body class="font-body text-slate-800 bg-slate-50 min-h-screen flex flex-col justify-between overflow-x-hidden"> <!-- Skip to content (Accessibility) --> <a href="#main-content" class="skip-to-content">Skip to main content</a> <!-- Header --> <header id="main-header" class="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 border-b border-transparent backdrop-blur-md transition-all duration-300" role="banner"> <nav class="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1440px] mx-auto transition-all duration-300" aria-label="Main navigation"> <a href="/" class="flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-95" aria-label="Margdarshak Shikshan Sansthan \u2014 Home"> <img src="/logo-navbar.svg" alt="Margdarshak Shikshan Sansthan Logo" class="h-10 md:h-12 w-auto object-contain" width="320" height="56"> <span class="sr-only">Margdarshak Shikshan Sansthan</span> </a> <!-- Desktop Nav --> <div class="hidden md:flex items-center gap-6 lg:gap-8"> ', ' <a href="/register"', '>\nRegister Now\n</a> </div> <!-- Mobile Menu Toggle Button --> <div class="md:hidden flex items-center justify-center -mr-2"> <button id="menu-btn" class="p-3 w-11 h-11 rounded-xl flex flex-col justify-center items-center gap-1.5 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu"> <span class="w-6 h-[2px] bg-primary dark:bg-white rounded-full hamburger-line" id="hamburger-line1" aria-hidden="true"></span> <span class="w-6 h-[2px] bg-primary dark:bg-white rounded-full hamburger-line" id="hamburger-line2" aria-hidden="true"></span> <span class="w-6 h-[2px] bg-primary dark:bg-white rounded-full hamburger-line" id="hamburger-line3" aria-hidden="true"></span> </button> </div> </nav> </header> <!-- Mobile Drawer Menu (Initially Hidden) --> <div id="mobile-menu" class="fixed inset-0 z-50 md:hidden hidden" role="dialog" aria-modal="true" aria-label="Navigation menu"> <!-- Backdrop overlay --> <div id="mobile-menu-overlay" class="fixed inset-0 bg-[#071426]/60 backdrop-blur-sm transition-opacity duration-400 opacity-0"></div> <!-- Drawer menu content --> <div id="mobile-menu-drawer" class="relative flex flex-col w-full max-w-xs bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-white h-full ml-auto shadow-2xl transition-transform duration-400 ease-in-out translate-x-full z-10"> <!-- Close button & Logo header --> <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40"> <a href="/" class="flex items-center gap-3" aria-label="Margdarshak Home"> <img src="/logo-navbar.svg" alt="Margdarshak Shikshan Sansthan Logo" class="h-10 w-auto object-contain" width="320" height="56"> </a> <button id="close-menu-btn" class="w-10 h-10 text-slate-500 hover:text-secondary rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-all duration-300 hover:rotate-90" aria-label="Close Menu"> <span class="material-symbols-outlined text-2xl">close</span> </button> </div> <!-- Navigation Links --> <nav class="flex-grow px-6 py-6 space-y-3 overflow-y-auto" aria-label="Mobile navigation"> ', ' </nav> <!-- Drawer Footer with CTA --> <div class="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 space-y-4"> <a href="/register" class="block text-center btn-brand-gradient text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-glow-red active:scale-[0.98]">\nRegister Now\n</a> <div class="flex justify-center gap-4 text-xs font-semibold text-slate-400"> <a href="tel:+919229025257" class="flex items-center gap-1 hover:text-secondary min-h-[44px] px-2 flex-row justify-center items-center"> <span class="material-symbols-outlined text-sm">call</span> Call\n</a> <span class="text-slate-300 flex items-center">|</span> <a href="https://wa.me/919229025257" class="flex items-center gap-1 hover:text-secondary min-h-[44px] px-2 flex-row justify-center items-center"> <span class="material-symbols-outlined text-sm">chat</span> WhatsApp\n</a> </div> </div> </div> </div> <!-- Main Content Slot --> <main id="main-content" class="flex-grow pt-16 md:pt-[72px]" role="main"> ', ` </main> <!-- Footer --> <footer class="bg-primary dark:bg-slate-950 text-white border-t border-white/10 w-full rounded-none" role="contentinfo"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-20 max-w-[1440px] mx-auto"> <div class="space-y-6"> <div class="flex items-center gap-3"> <img src="/logo-footer.svg" alt="Margdarshak Shikshan Sansthan Logo" class="h-10 w-auto object-contain" width="320" height="56" loading="lazy"> <span class="sr-only">Margdarshak Shikshan Sansthan</span> </div> <p class="text-slate-300 text-sm leading-relaxed">Empowering the youth of Bharat with job-ready skills and affordable education. Excellence through dedication.</p> <div class="flex gap-4"> <a class="social-icon social-icon-whatsapp w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="https://wa.me/919229025257" target="_blank" aria-label="WhatsApp"> <span class="material-symbols-outlined text-lg">chat</span> </a> <a class="social-icon social-icon-phone w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="tel:+919229025257" aria-label="Phone Call"> <span class="material-symbols-outlined text-lg">call</span> </a> <a class="social-icon social-icon-map w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="/contact" aria-label="Location Map"> <span class="material-symbols-outlined text-lg">location_on</span> </a> <a class="social-icon social-icon-register w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:scale-110 transition-all" href="/register" aria-label="Register Now"> <span class="material-symbols-outlined text-lg">app_registration</span> </a> </div> </div> <div> <h4 class="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/5 pb-2">Quick Links</h4> <ul class="space-y-3 font-body text-sm"> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/">Home</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses">Courses</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/internships">Internships</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/about">About Us</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/contact">Contact Us</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block text-xs opacity-75" href="/admin">Admin Login</a></li> </ul> </div> <div> <h4 class="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/5 pb-2">Our Core Programs</h4> <ul class="space-y-3 font-body text-sm"> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses/web-development">Web Development</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses/tally-advanced-excel">Tally & Advanced Excel</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/courses/gst-return-filing">GST & Return Filing</a></li> <li><a class="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-block" href="/internships/ai-tools">AI Tools Internship</a></li> </ul> </div> <div> <h4 class="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/5 pb-2">Newsletter</h4> <p class="text-slate-300 text-sm mb-4 leading-relaxed">Stay updated with our latest courses and scholarship opportunities.</p> <form class="relative w-full" action="#" method="post" aria-label="Newsletter subscription"> <label for="newsletter-email" class="sr-only">Email Address</label> <input id="newsletter-email" class="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 pr-14 focus:outline-none focus:border-accent/80 text-sm text-white focus:bg-white/10 focus:ring-1 focus:ring-accent/30 transition-all duration-300 newsletter-input" placeholder="Email Address" type="email" autocomplete="email" required> <button type="submit" class="absolute right-2 top-2 bg-accent text-primary p-2 rounded-xl flex items-center justify-center hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300" aria-label="Subscribe to newsletter"> <span class="material-symbols-outlined text-sm font-bold" aria-hidden="true">arrow_forward</span> </button> </form> </div> </div> <div class="border-t border-white/10 px-6 md:px-12 py-8 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4"> <p class="font-body text-xs text-slate-400 tracking-wide font-normal">\xA9 2026 Margdarshak Shikshan Sansthan. Padhega Bharat, Badhega Bharat.</p> <div class="flex gap-8 text-xs font-medium text-slate-400"> <a class="hover:text-white transition-colors duration-200" href="#">Terms of Service</a> <a class="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a> </div> </div> </footer> <!-- Scripts --> <script>
    // Mobile menu toggle drawer logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    function openDrawer() {
      if (mobileMenu && mobileMenuDrawer && mobileMenuOverlay) {
        document.body.classList.add('overflow-hidden', 'menu-open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        setTimeout(() => {
          mobileMenuOverlay.classList.remove('opacity-0');
          mobileMenuOverlay.classList.add('opacity-100');
          mobileMenuDrawer.classList.remove('translate-x-full');
        }, 10);
      }
    }

    function closeDrawer() {
      if (mobileMenu && mobileMenuDrawer && mobileMenuOverlay) {
        document.body.classList.remove('overflow-hidden', 'menu-open');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuOverlay.classList.remove('opacity-100');
        mobileMenuOverlay.classList.add('opacity-0');
        mobileMenuDrawer.classList.add('translate-x-full');
        setTimeout(() => {
          mobileMenu.classList.remove('flex');
          mobileMenu.classList.add('hidden');
        }, 400);
      }
    }

    if (menuBtn) menuBtn.addEventListener('click', openDrawer);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeDrawer);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeDrawer);

    // Auto-close on drawer link click
    if (mobileMenuDrawer) {
      const drawerLinks = mobileMenuDrawer.querySelectorAll('a');
      drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
      });
    }

    // Sticky Header Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });

    // --- NEW MOTION DESIGN AND PAGE TRANSITIONS ENHANCEMENTS ---

    // 1. Page Fade-In on Load \u2014 enable transition class after first paint
    //    to avoid blocking FCP/LCP with opacity:0
    requestAnimationFrame(() => {
      document.body.classList.add('page-transition-ready');
    });

    // 2. Page Fade-Out on Local Navigation Link Clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      const target = link.getAttribute('target');
      
      if (!href || 
          href.startsWith('#') || 
          href.startsWith('mailto:') || 
          href.startsWith('tel:') || 
          target === '_blank' || 
          e.metaKey || 
          e.ctrlKey || 
          e.shiftKey || 
          e.altKey) {
        return;
      }
      
      const isSameSite = link.hostname === window.location.hostname;
      if (!isSameSite) return;

      e.preventDefault();
      document.body.classList.add('page-exit');
      
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    });

    // 3. Handle Browser Back/Forward Cache Restorations
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        document.body.classList.remove('page-exit');
      }
    });

    // 4. Global Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal, .animate-on-scroll');
    if (revealElements.length > 0) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-on-scroll')) {
              entry.target.classList.add('reveal-active');
            } else {
              entry.target.classList.add('revealed');
            }
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      });
      
      revealElements.forEach(el => revealObserver.observe(el));
    }

    // 5. Global Button Click Ripple Wave Effect
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, .btn-brand-gradient, .social-icon, .filter-pill');
      if (!target || target.disabled) return;
      
      target.classList.add('btn-ripple-container');
      
      const rect = target.getBoundingClientRect();
      const diameter = Math.max(target.clientWidth, target.clientHeight);
      const radius = diameter / 2;
      
      const circle = document.createElement('span');
      circle.style.width = circle.style.height = \\\`\\\${diameter}px\\\`;
      circle.style.left = \\\`\\\${e.clientX - rect.left - radius}px\\\`;
      circle.style.top = \\\`\\\${e.clientY - rect.top - radius}px\\\`;
      circle.classList.add('ripple');
      
      const isLightBg = target.classList.contains('bg-white') || 
                        target.classList.contains('bg-slate-100') || 
                        target.classList.contains('bg-slate-50') ||
                        target.classList.contains('bg-slate-100/60') ||
                        (target.tagName === 'BUTTON' && !target.className.includes('bg-') && !target.className.includes('btn-brand-gradient'));
      
      if (isLightBg) {
        circle.style.backgroundColor = 'rgba(7, 20, 38, 0.12)';
      }
      
      const oldRipple = target.querySelector('.ripple');
      if (oldRipple) {
        oldRipple.remove();
      }
      
      target.appendChild(circle);
    });
  <\/script> </body> </html>`])), title, addAttribute(description, "content"), renderComponent($$result, "SeoHead", $$SeoHead, { "title": title, "description": description, "ogImage": ogImage, "ogType": ogType, "noindex": noindex, "jsonLd": jsonLd }), maybeRenderHead(), renderHead(), navItems.map((item) => renderTemplate`<a${addAttribute(`font-display text-sm lg:text-base font-semibold nav-link pb-1 ${isActive(item.href) ? "active text-secondary" : "text-slate-700 dark:text-slate-300 hover:text-secondary"}`, "class")}${addAttribute(item.href, "href")}> ${item.name} </a>`), addAttribute(`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_8px_25px_rgba(229,57,53,0.3)] focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 focus:outline-none ${isActive("/register") ? "bg-primary text-white border border-white/10" : "btn-brand-gradient text-white"}`, "class"), navItems.map((item) => renderTemplate`<a${addAttribute(`block font-display text-lg font-bold transition-all py-3.5 px-5 ${isActive(item.href) ? "bg-secondary/5 text-secondary border-l-4 border-secondary rounded-r-xl rounded-l-none" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-secondary rounded-xl"}`, "class")}${addAttribute(item.href, "href")}> ${item.name} </a>`), renderSlot($$result, $$slots["default"]));
}, "C:/Users/margd/Documents/margdarshak-test/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
