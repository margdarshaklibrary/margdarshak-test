import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Cz0Ahlmm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_D2KgbjGT.mjs';
import { g as getCourses } from '../chunks/db_BB5DAx5-.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Courses = createComponent(($$result, $$props, $$slots) => {
  const courses = getCourses().filter((c) => c.status !== "Inactive");
  function getCategory(id) {
    switch (id) {
      case "dca-adca":
        return "computer-skills";
      case "web-development":
        return "web-development";
      case "digital-marketing":
        return "digital-marketing";
      case "gst-return-filing":
      case "income-tax-filing":
      case "tally-advanced-excel":
        return "accounting-gst";
      default:
        return "computer-skills";
    }
  }
  function getBadges(id) {
    switch (id) {
      case "dca-adca":
        return ["Govt. Registered", "Office Automation", "100% Refundable"];
      case "web-development":
        return ["Frontend Focus", "React & JS", "100% Refundable"];
      case "digital-marketing":
        return ["SEO & SEM", "Google Ads", "100% Refundable"];
      case "gst-return-filing":
        return ["Tax Portal Live", "Compliance", "100% Refundable"];
      case "income-tax-filing":
        return ["ITR Filing", "Tax Planning", "100% Refundable"];
      case "tally-advanced-excel":
        return ["TallyPrime", "MIS Dashboards", "100% Refundable"];
      default:
        return ["Practical Training", "Certificate Included", "100% Refundable"];
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Job-Oriented Courses \u2014 Web Development, Tally, GST & More | Margdarshak Darbhanga", "description": "Explore affordable, job-oriented certification courses at Margdarshak Shikshan Sansthan, Darbhanga. DCA, Web Development, Digital Marketing, Tally, GST & ITR with 100% fee refund guarantee.", "ogImage": "/assets/course_web_dev.png" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<section class="hero-gradient text-white py-10 md:py-24 relative overflow-hidden"> <!-- Glow Blobs --> <div class="absolute top-1/4 left-1/10 w-96 h-96 bg-secondary/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" aria-hidden="true"></div> <div class="absolute bottom-10 right-10 w-80 h-80 bg-accent/15 rounded-full filter blur-[100px] pointer-events-none animate-float-slow" aria-hidden="true"></div> <div class="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> <!-- Text Content --> <div class="lg:col-span-7 space-y-6 text-left"> <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"> <span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span> <span class="text-xs font-bold uppercase tracking-wider text-accent font-headline">Skill Development Programs</span> </div> <h1 class="text-4xl md:text-6xl font-headline font-black leading-tight">
Master In-Demand Skills with <br> <span class="text-gradient-purple-orange">Job-Oriented Courses</span> </h1> <p class="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed font-body">
Acquire professional computer and financial skillsets at pocket-friendly pricing, backed by our 100% attendance fee refund guarantee.
</p> <div class="flex flex-wrap gap-4 pt-2"> <div class="flex items-center gap-2 text-sm text-slate-200"> <span class="material-symbols-outlined text-accent text-xl">workspace_premium</span> <span>Government Registered Institute</span> </div> <div class="flex items-center gap-2 text-sm text-slate-200"> <span class="material-symbols-outlined text-accent text-xl">savings</span> <span>100% Refund Opportunity</span> </div> </div> </div> <!-- Visual Asset (Premium Interactive Preview Card) --> <div class="lg:col-span-5 relative hidden lg:block"> <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-secondary to-accent opacity-30 blur-lg animate-float-medium"></div> <div class="relative glass-card-premium p-8 rounded-3xl border border-white/10 text-white space-y-6 shadow-2xl bg-primary/45 backdrop-blur-xl"> <div class="flex justify-between items-center"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/25"> <span class="material-symbols-outlined font-bold">school</span> </div> <div> <h4 class="font-headline font-bold text-sm">Professional Learning</h4> <p class="text-[10px] text-slate-400">Industry Ready Skills</p> </div> </div> <span class="text-xs bg-accent/20 text-accent font-bold px-3 py-1 rounded-full border border-accent/30 uppercase">AI-Powered</span> </div> <!-- Dashboard Mini Card --> <div class="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-white/5"> <div class="flex justify-between text-xs"> <span class="text-slate-400">Practical Projects Completed</span> <span class="text-accent font-bold">100% Hands-on</span> </div> <div class="w-full bg-white/10 rounded-full h-2 overflow-hidden"> <div class="bg-gradient-to-r from-secondary to-accent h-full w-[85%] animate-pulse"></div> </div> <p class="text-[10px] text-slate-400 flex items-center gap-1"> <span class="material-symbols-outlined text-xs text-secondary font-bold">verified</span>
Govt. Registered Certificate Included
</p> </div> <div class="grid grid-cols-2 gap-3 text-center"> <div class="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col justify-center items-center"> <div class="text-lg font-bold text-accent">25+</div> <div class="text-[10px] text-slate-400">Career-Oriented Courses</div> </div> <div class="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col justify-center items-center"> <div class="text-lg font-bold text-accent">\u20B91,000/Mo</div> <div class="text-[10px] text-slate-400">Pocket-Friendly Fee</div> </div> <div class="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col justify-center items-center"> <div class="text-lg font-bold text-accent">Hybrid</div> <div class="text-[10px] text-slate-400">Learning Model</div> </div> <div class="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col justify-center items-center"> <div class="text-lg font-bold text-accent">90%+</div> <div class="text-[10px] text-slate-400">Refund Attendance Criteria</div> </div> </div> </div> </div> </div> </div> </section>  <section class="relative bg-white border-b border-slate-200/60 shadow-sm z-20"> <div class="max-w-[1440px] mx-auto px-4 md:px-6 py-6"> <div class="glass-card-premium p-6 rounded-2xl border border-secondary/15 flex flex-col md:flex-row items-center justify-between gap-6 bg-secondary/[0.02]"> <div class="flex items-center gap-4"> <div class="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20"> <span class="material-symbols-outlined text-2xl font-bold">payments</span> </div> <div> <h4 class="font-headline font-bold text-slate-800 text-base md:text-lg">
100% Attendance Fee Refund Opportunity
</h4> <p class="text-slate-600 text-xs md:text-sm font-medium">
We reward dedication. Maintain 90%+ attendance and complete your projects to get your entire fees back.
</p> </div> </div> <div class="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end"> <a href="/register" class="w-full md:w-auto text-center bg-primary hover:bg-primary/95 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md">
Check My Eligibility
</a> </div> </div> </div> </section>  <section class="py-16 bg-slate-50 min-h-[600px] relative"> <div class="max-w-[1440px] mx-auto px-4 md:px-6 space-y-12"> <!-- Sticky / Glassmorphic Search & Filters Bar --> <div class="glass-card-premium p-6 rounded-3xl border border-slate-200/80 shadow-premium bg-white/80 backdrop-blur-xl space-y-6"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"> <!-- Search Input --> <div class="lg:col-span-5 relative"> <span class="material-symbols-outlined absolute left-4 top-3.5 text-slate-400">search</span> <input type="text" id="search-input" placeholder="Search Job-Oriented Courses..." class="w-full pl-12 pr-4 py-3 bg-slate-100/60 border border-slate-200 rounded-2xl focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none text-slate-700 text-sm font-medium transition-all"> </div> <!-- Filters Info / Pill Title --> <div class="lg:col-span-7 flex flex-nowrap overflow-x-auto scrollbar-none gap-2 py-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap items-center" id="filter-pills-container"> <button data-filter="all" class="filter-pill active px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 border border-secondary bg-secondary text-white shadow-glow-red shrink-0">
All Courses
</button> <button data-filter="computer-skills" class="filter-pill px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 border border-slate-200 bg-white text-slate-600 hover:border-secondary/40 hover:bg-secondary/5 hover:text-secondary shrink-0">
Computer Skills
</button> <button data-filter="web-development" class="filter-pill px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 border border-slate-200 bg-white text-slate-600 hover:border-secondary/40 hover:bg-secondary/5 hover:text-secondary shrink-0">
Web Development
</button> <button data-filter="digital-marketing" class="filter-pill px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 border border-slate-200 bg-white text-slate-600 hover:border-secondary/40 hover:bg-secondary/5 hover:text-secondary shrink-0">
Digital Marketing
</button> <button data-filter="accounting-gst" class="filter-pill px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 border border-slate-200 bg-white text-slate-600 hover:border-secondary/40 hover:bg-secondary/5 hover:text-secondary shrink-0">
Accounting & GST
</button> </div> </div> </div> <!-- No Results State --> <div id="no-results" class="hidden text-center py-16 space-y-4"> <span class="material-symbols-outlined text-5xl text-slate-400 animate-bounce">search_off</span> <h3 class="text-xl font-headline font-bold text-primary">No Courses Found</h3> <p class="text-slate-500 max-w-sm mx-auto text-sm">We couldn't find any courses matching your current search or filters. Try adjusting your search term.</p> <button id="reset-search" class="text-xs font-bold text-secondary underline hover:text-secondary/85">Clear Search & Filters</button> </div> <!-- Courses Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-grid"> `, ` </div> </div> </section>  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('search-input');
      const filterPills = document.querySelectorAll('.filter-pill');
      const cards = document.querySelectorAll('.course-card');
      const noResults = document.getElementById('no-results');
      const resetSearch = document.getElementById('reset-search');
      const grid = document.getElementById('courses-grid');

      let currentQuery = '';
      let currentFilter = 'all';

      function applyFilter() {
        let visibleCount = 0;
        let visibleIndex = 0;

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const searchKeywords = card.getAttribute('data-search') || '';
          
          const matchesSearch = !currentQuery || searchKeywords.includes(currentQuery);
          const matchesCategory = currentFilter === 'all' || category === currentFilter;

          if (matchesSearch && matchesCategory) {
            card.style.display = 'flex';
            // Stagger animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            card.style.transition = 'none';
            
            const currentIdx = visibleIndex;
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30 + currentIdx * 45);
            
            visibleIndex++;
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
          grid.style.display = 'none';
        } else {
          noResults.classList.add('hidden');
          grid.style.display = 'grid';
        }
      }

      // Input Event
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.toLowerCase().trim();
          applyFilter();
        });
      }

      // Pill Click Events
      filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          // Remove active classes
          filterPills.forEach(p => {
            p.classList.remove('active', 'bg-secondary', 'text-white', 'border-secondary', 'shadow-glow-red');
            p.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
          });

          // Set active to clicked
          pill.classList.add('active', 'bg-secondary', 'text-white', 'border-secondary', 'shadow-glow-red');
          pill.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');

          currentFilter = pill.getAttribute('data-filter');
          applyFilter();
        });
      });

      // Reset Button Event
      if (resetSearch) {
        resetSearch.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          currentQuery = '';
          
          // Reset pills to "All"
          filterPills.forEach(p => {
            if (p.getAttribute('data-filter') === 'all') {
              p.classList.add('active', 'bg-secondary', 'text-white', 'border-secondary', 'shadow-glow-red');
              p.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
            } else {
              p.classList.remove('active', 'bg-secondary', 'text-white', 'border-secondary', 'shadow-glow-red');
              p.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
            }
          });
          currentFilter = 'all';
          applyFilter();
        });
      }
    });
  <\/script> `])), maybeRenderHead(), courses.map((course, idx) => {
    const category = getCategory(course.id);
    const badges = getBadges(course.id);
    const searchKeywords = [
      course.name,
      course.shortDescription,
      ...course.tags || [],
      category
    ].join(" ").toLowerCase();
    return renderTemplate`<div${addAttribute(category, "data-category")}${addAttribute(searchKeywords, "data-search")} class="course-card group glass-card-premium border border-slate-200/80 rounded-3xl overflow-hidden hover:border-secondary/35 hover:shadow-premium-hover hover-lift flex flex-col justify-between transition-all duration-300 reveal reveal-slide-up"${addAttribute(`transition-delay: ${idx % 3 * 80}ms`, "style")}> <div> <!-- Card Image & Floating Badges --> <div class="aspect-[16/10] overflow-hidden relative bg-slate-100"> <img${addAttribute(course.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${addAttribute(course.image, "src")} loading="lazy" decoding="async" width="400" height="250"> <!-- Gradient Overlays --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div> <!-- Floating Badge Header --> <div class="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[80%]"> ${badges.slice(0, 2).map((badge, idx2) => renderTemplate`<span${addAttribute(`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border backdrop-blur-md ${idx2 === 0 ? "bg-secondary/90 text-white border-secondary/30" : "bg-accent text-primary border-accent/30"}`, "class")}> ${badge} </span>`)} </div> <!-- Floating Fee Tag --> <div class="absolute bottom-4 right-4 bg-primary/90 text-white text-xs font-black px-3.5 py-1.5 rounded-xl border border-white/10 uppercase tracking-wider backdrop-blur-md shadow-md">
₹1,000 / month
</div> </div> <!-- Card Body --> <div class="p-6 space-y-4"> <!-- Duration & Mode row --> <div class="flex items-center gap-4 text-xs font-semibold text-slate-500"> <span class="flex items-center gap-1 text-secondary"> <span class="material-symbols-outlined text-base">schedule</span>
Duration: ${course.duration} </span> <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span> <span class="flex items-center gap-1"> <span class="material-symbols-outlined text-base">layers</span>
Hybrid Learning
</span> </div> <h3 class="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1"> ${course.name} </h3> <p class="text-slate-600 text-sm leading-relaxed line-clamp-2 font-body"> ${course.shortDescription} </p> <!-- Key Skills Pill Indicators --> <div class="space-y-2 pt-2"> <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Skills Covered</div> <div class="flex flex-wrap gap-1.5"> ${(course.learnItems || []).slice(0, 3).map((skill) => {
      const shortSkill = skill.split(" ").slice(0, 2).join(" ").replace(/,/g, "");
      return renderTemplate`<span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-lg border border-slate-200/50 hover:bg-slate-200/40 transition-colors"> ${shortSkill} </span>`;
    })} ${(course.learnItems || []).length > 3 && renderTemplate`<span class="px-2.5 py-1 bg-secondary/5 text-secondary text-[11px] font-bold rounded-lg border border-secondary/10">
+${course.learnItems.length - 3} More
</span>`} </div> </div> </div> </div> <!-- Card Action CTA Buttons --> <div class="p-6 pt-0"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5"> <a${addAttribute(`/courses/${course.id}`, "href")} class="flex items-center justify-center h-11 px-4 rounded-xl border-2 border-primary text-primary font-bold text-center text-xs hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap font-headline">
View Details
</a> <a href="/register" class="flex items-center justify-center h-11 px-4 rounded-xl btn-brand-gradient text-white font-bold text-center text-xs transition-all duration-300 whitespace-nowrap shadow-md font-headline">
Register Now
</a> </div> </div> </div>`;
  })) })}`;
}, "C:/Users/margd/Documents/margdarshak-test/src/pages/courses.astro", void 0);

const $$file = "C:/Users/margd/Documents/margdarshak-test/src/pages/courses.astro";
const $$url = "/courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Courses,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
