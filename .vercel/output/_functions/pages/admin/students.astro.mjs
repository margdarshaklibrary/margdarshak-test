import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_Cz0Ahlmm.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Cr3ok2qs.mjs';
import { g as getCourses, a as getInternships } from '../../chunks/db_BB5DAx5-.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Students = createComponent(async ($$result, $$props, $$slots) => {
  const courses = getCourses();
  const internships = getInternships();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Registered Students - Margdarshak Admin", "activeTab": "students", "data-astro-cid-epox3rc6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="space-y-6" data-astro-cid-epox3rc6> <!-- Header Block --> <div class="glass-card-premium p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden" data-astro-cid-epox3rc6> <div class="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-[#FF7043]/5 to-[#FFB300]/5 rounded-full blur-2xl pointer-events-none -z-10" data-astro-cid-epox3rc6></div> <div class="space-y-1 relative z-10" data-astro-cid-epox3rc6> <h3 class="text-xl font-headline font-extrabold text-[#071426]" data-astro-cid-epox3rc6>Student Lead CRM</h3> <p class="text-xs text-slate-400 font-semibold" data-astro-cid-epox3rc6>Monitor, filter, and manage student course and internship registrations.</p> </div> <a href="/api/export-students" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-headline font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/15 hover:scale-[1.02] select-none" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-sm font-bold" data-astro-cid-epox3rc6>download</span>\nExport CSV\n</a> </div> <!-- CRM Filters, Search and Sorting --> <div class="glass-card-premium p-5 rounded-3xl border border-slate-200/60 shadow-sm space-y-4" data-astro-cid-epox3rc6> <div class="flex flex-col lg:flex-row gap-4 items-center justify-between" data-astro-cid-epox3rc6> <!-- Search Input --> <div class="relative w-full lg:max-w-md" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3.5 top-3" data-astro-cid-epox3rc6>search</span> <input type="text" id="search-input" class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition-all font-medium" placeholder="Search by student name, email, phone, or program..." data-astro-cid-epox3rc6> </div> <!-- Right filters row --> <div class="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:items-center gap-3 w-full lg:w-auto" data-astro-cid-epox3rc6> <!-- Program filter --> <select id="filter-program" class="px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-semibold text-slate-600 focus:outline-none focus:border-[#E53935] w-full lg:w-auto" data-astro-cid-epox3rc6> <option value="" data-astro-cid-epox3rc6>All Specific Programs</option> <optgroup label="Courses" data-astro-cid-epox3rc6> ', ' </optgroup> <optgroup label="Internships" data-astro-cid-epox3rc6> ', ' </optgroup> </select> <!-- Status Filter --> <select id="filter-status" class="px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-semibold text-slate-600 focus:outline-none focus:border-[#E53935] w-full lg:w-auto" data-astro-cid-epox3rc6> <option value="" data-astro-cid-epox3rc6>All Statuses</option> <option value="Pending" data-astro-cid-epox3rc6>Pending</option> <option value="Contacted" data-astro-cid-epox3rc6>Contacted</option> <option value="Enrolled" data-astro-cid-epox3rc6>Enrolled</option> <option value="Cancelled" data-astro-cid-epox3rc6>Cancelled</option> </select> <!-- Sort dropdown --> <select id="sort-students" class="px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-semibold text-slate-600 focus:outline-none focus:border-[#E53935] w-full lg:w-auto" data-astro-cid-epox3rc6> <option value="date-desc" data-astro-cid-epox3rc6>Newest First</option> <option value="date-asc" data-astro-cid-epox3rc6>Oldest First</option> <option value="name-asc" data-astro-cid-epox3rc6>Name (A-Z)</option> <option value="name-desc" data-astro-cid-epox3rc6>Name (Z-A)</option> </select> </div> </div> </div> <!-- Students Container --> <div class="flex flex-col gap-4 md:max-h-[calc(100vh-290px)] md:overflow-y-auto animate-table-fade p-0.5" id="students-container" data-astro-cid-epox3rc6> <!-- Loading Skeleton Cards --> ', ` </div> </div>    <div id="view-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071426]/60 backdrop-blur-sm hidden" role="dialog" aria-modal="true" data-astro-cid-epox3rc6> <div class="bg-white rounded-3xl border border-slate-200/60 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden" data-astro-cid-epox3rc6> <!-- View Modal Header --> <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <div class="flex items-center gap-3" data-astro-cid-epox3rc6> <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#071426] to-[#E53935] flex items-center justify-center" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-white text-sm" data-astro-cid-epox3rc6>person</span> </div> <div data-astro-cid-epox3rc6> <h4 class="font-headline font-bold text-sm text-[#071426]" data-astro-cid-epox3rc6>Student Profile</h4> <p class="text-[10px] text-slate-400 font-semibold" data-astro-cid-epox3rc6>Read-only view</p> </div> </div> <button id="close-view-btn" class="p-2 text-slate-400 hover:text-[#E53935] rounded-xl hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-lg" data-astro-cid-epox3rc6>close</span> </button> </div> <!-- View Modal Body --> <div class="flex-grow overflow-y-auto p-5 space-y-3" data-astro-cid-epox3rc6> <!-- Student Identity Card --> <div class="crm-card" data-astro-cid-epox3rc6> <div class="flex items-center gap-4" data-astro-cid-epox3rc6> <div class="w-14 h-14 bg-gradient-to-br from-[#071426] to-[#E53935] rounded-2xl flex items-center justify-center text-white font-headline font-black text-xl shadow-md flex-shrink-0" id="view-avatar" data-astro-cid-epox3rc6>AD</div> <div class="min-w-0" data-astro-cid-epox3rc6> <h3 class="font-headline font-extrabold text-lg text-[#071426] truncate" id="view-name" data-astro-cid-epox3rc6>Student Name</h3> <span class="text-[10px] text-slate-400 font-mono block" id="view-id" data-astro-cid-epox3rc6>UUID</span> <span id="view-status-badge" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-headline font-extrabold uppercase mt-1.5" data-astro-cid-epox3rc6>Pending</span> </div> </div> <!-- Quick Contact Links --> <div class="grid grid-cols-3 gap-2 mt-4" data-astro-cid-epox3rc6> <a id="view-link-call" href="#" class="flex flex-col items-center justify-center py-2.5 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-[#E53935]/20 transition-all text-slate-600" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-base text-[#E53935]" data-astro-cid-epox3rc6>call</span> <span class="text-[9px] font-headline font-extrabold mt-0.5 uppercase tracking-wide" data-astro-cid-epox3rc6>Call</span> </a> <a id="view-link-whatsapp" href="#" target="_blank" class="flex flex-col items-center justify-center py-2.5 rounded-xl border border-slate-100 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-emerald-800" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-base text-emerald-600" data-astro-cid-epox3rc6>chat</span> <span class="text-[9px] font-headline font-extrabold mt-0.5 uppercase tracking-wide" data-astro-cid-epox3rc6>WhatsApp</span> </a> <a id="view-link-email" href="#" class="flex flex-col items-center justify-center py-2.5 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-[#FFB300]/20 transition-all text-slate-600" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-base text-[#FFB300]" data-astro-cid-epox3rc6>mail</span> <span class="text-[9px] font-headline font-extrabold mt-0.5 uppercase tracking-wide" data-astro-cid-epox3rc6>Email</span> </a> </div> </div> <!-- Contact Details --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Contact Details</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Phone Number</span> <span class="crm-value flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-xs text-slate-400" data-astro-cid-epox3rc6>call</span> <span id="view-mobile" data-astro-cid-epox3rc6>-</span> </span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Email Address</span> <span class="crm-value flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-xs text-slate-400" data-astro-cid-epox3rc6>mail</span> <span id="view-email" class="truncate" data-astro-cid-epox3rc6>-</span> </span> </div> </div> </div> <!-- Program Details --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Program Details</p> <div class="mt-2 space-y-3" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Selected Program</span> <span class="crm-value font-bold" id="view-prog-name" data-astro-cid-epox3rc6>-</span> </div> <div class="grid grid-cols-2 gap-3" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Program Type</span> <span id="view-prog-type" class="inline-block px-2 py-0.5 rounded text-[8px] font-headline font-extrabold uppercase tracking-wide mt-0.5" data-astro-cid-epox3rc6>-</span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Learning Mode</span> <span class="crm-value" id="view-learning-mode" data-astro-cid-epox3rc6>-</span> </div> </div> </div> </div> <!-- Lead Management --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Lead Management</p> <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Registration Date</span> <span class="crm-value flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-xs text-slate-400" data-astro-cid-epox3rc6>calendar_today</span> <span id="view-date" data-astro-cid-epox3rc6>-</span> </span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Assigned Employee</span> <span class="crm-value" id="view-assigned" data-astro-cid-epox3rc6>-</span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Follow-up Date</span> <span class="crm-value" id="view-followup" data-astro-cid-epox3rc6>-</span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Next Action</span> <span class="crm-value" id="view-next-action" data-astro-cid-epox3rc6>-</span> </div> </div> </div> <!-- Student Notes --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Student Notes</p> <p id="view-message" class="text-xs text-slate-500 mt-2 leading-relaxed italic" data-astro-cid-epox3rc6></p> <div class="mt-3 pt-3 border-t border-slate-100" data-astro-cid-epox3rc6> <p class="crm-label" data-astro-cid-epox3rc6>CRM Notes</p> <p id="view-notes" class="text-xs text-slate-500 mt-1 leading-relaxed" data-astro-cid-epox3rc6></p> </div> </div> <!-- Activity Timeline --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Activity Timeline</p> <div id="view-timeline" class="mt-3 space-y-0" data-astro-cid-epox3rc6> <!-- Timeline items injected by JS --> </div> </div> </div> <!-- View Modal Footer --> <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-end shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <button id="close-view-footer-btn" class="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-headline font-bold text-xs transition-colors" data-astro-cid-epox3rc6>
Close
</button> </div> </div> </div>    <div id="edit-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071426]/60 backdrop-blur-sm hidden" role="dialog" aria-modal="true" data-astro-cid-epox3rc6> <div class="bg-white rounded-3xl border border-slate-200/60 shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden" data-astro-cid-epox3rc6> <!-- Edit Modal Header --> <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <div class="flex items-center gap-3" data-astro-cid-epox3rc6> <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF7043] to-[#FFB300] flex items-center justify-center" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-white text-sm" data-astro-cid-epox3rc6>edit</span> </div> <div data-astro-cid-epox3rc6> <h4 class="font-headline font-bold text-sm text-[#071426]" data-astro-cid-epox3rc6>Edit Lead</h4> <p class="text-[10px] text-slate-400 font-semibold truncate max-w-[220px]" id="edit-modal-subtitle" data-astro-cid-epox3rc6>Student Name</p> </div> </div> <button id="close-edit-btn" class="p-2 text-slate-400 hover:text-[#E53935] rounded-xl hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-lg" data-astro-cid-epox3rc6>close</span> </button> </div> <!-- Edit Modal Body --> <div class="flex-grow overflow-y-auto p-5 space-y-3" data-astro-cid-epox3rc6> <!-- Lead Status --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Lead Status</p> <div class="mt-2" data-astro-cid-epox3rc6> <select id="edit-status" class="crm-input" data-astro-cid-epox3rc6> <option value="Pending" data-astro-cid-epox3rc6>Pending</option> <option value="Contacted" data-astro-cid-epox3rc6>Contacted</option> <option value="Enrolled" data-astro-cid-epox3rc6>Enrolled</option> <option value="Cancelled" data-astro-cid-epox3rc6>Cancelled</option> </select> </div> </div> <!-- Assignment --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Assignment</p> <div class="mt-2" data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Assigned Employee</label> <input type="text" id="edit-assigned" placeholder="e.g. Harshvardhan, Priya..." class="crm-input" data-astro-cid-epox3rc6> </div> </div> <!-- Follow-up --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Follow-up Schedule</p> <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3" data-astro-cid-epox3rc6> <div data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Follow-up Date</label> <input type="date" id="edit-followup-date" class="crm-input" data-astro-cid-epox3rc6> </div> <div data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Follow-up Time</label> <input type="time" id="edit-followup-time" class="crm-input" data-astro-cid-epox3rc6> </div> </div> <div class="mt-3" data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Next Action</label> <input type="text" id="edit-next-action" placeholder="e.g. Call back, Send brochure..." class="crm-input" data-astro-cid-epox3rc6> </div> </div> <!-- Notes --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>CRM Notes</p> <div class="mt-2" data-astro-cid-epox3rc6> <textarea id="edit-notes" rows="4" placeholder="Add internal notes about this lead..." class="crm-input resize-none" data-astro-cid-epox3rc6></textarea> </div> </div> </div> <!-- Edit Modal Footer --> <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <button id="cancel-edit-btn" class="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-headline font-bold text-xs hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6>
Cancel
</button> <button id="save-edit-btn" class="px-5 py-2.5 bg-[#E53935] hover:bg-[#c12f31] text-white rounded-xl font-headline font-bold text-xs transition-all shadow-sm hover:scale-[1.02] flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-sm" data-astro-cid-epox3rc6>save</span>
Save Changes
</button> </div> </div> </div>    <div id="delete-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071426]/60 backdrop-blur-sm hidden" role="dialog" aria-modal="true" data-astro-cid-epox3rc6> <div class="bg-white rounded-3xl border border-slate-200/60 shadow-2xl max-w-sm w-full p-6 text-center space-y-6" data-astro-cid-epox3rc6> <div class="w-14 h-14 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E53935] mx-auto" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-2xl font-bold" data-astro-cid-epox3rc6>warning</span> </div> <div class="space-y-2" data-astro-cid-epox3rc6> <h4 class="font-headline font-bold text-base text-[#071426]" data-astro-cid-epox3rc6>Delete Record?</h4> <p class="text-xs text-slate-500 font-semibold leading-relaxed" data-astro-cid-epox3rc6>
Are you sure you want to delete <strong id="delete-item-name" class="text-slate-800" data-astro-cid-epox3rc6></strong>? This record will be permanently deleted from the database.
</p> </div> <div class="grid grid-cols-2 gap-2.5" data-astro-cid-epox3rc6> <button id="cancel-delete-btn" class="py-2.5 border border-slate-200 rounded-xl text-slate-600 font-headline font-bold text-xs hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6>
No, Cancel
</button> <button id="confirm-delete-btn" class="py-2.5 bg-[#E53935] text-white rounded-xl font-headline font-bold text-xs hover:bg-[#c12f31] transition-colors shadow-sm" data-astro-cid-epox3rc6>
Yes, Delete
</button> </div> </div> </div>  <script>
    function getAvatarColorClass(name) {
      if (!name) return 'from-slate-500/10 to-slate-600/10 text-slate-700 border-slate-200/50';
      const colors = [
        'from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200/50',
        'from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200/50',
        'from-rose-500/10 to-orange-500/10 text-rose-700 border-rose-200/50',
        'from-amber-500/10 to-yellow-500/10 text-amber-700 border-amber-200/50',
        'from-purple-500/10 to-pink-500/10 text-purple-700 border-purple-200/50'
      ];
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % colors.length;
      return colors[index];
    }

    // Elements
    const searchInput = document.getElementById('search-input');
    const filterProgram = document.getElementById('filter-program');
    const filterStatus = document.getElementById('filter-status');
    const sortStudents = document.getElementById('sort-students');
    const studentsContainer = document.getElementById('students-container');
    
    const viewModal = document.getElementById('view-modal');
    const editModal = document.getElementById('edit-modal');
    const deleteModal = document.getElementById('delete-modal');
    
    let studentsList = [];
    let activeStudent = null;
    let deleteTargetId = null;
    let editTargetId = null;

    // Modal Helpers for smooth animations
    function showModal(modal) {
      modal.classList.remove('hidden');
      modal.classList.remove('modal-close-animate');
      modal.classList.add('modal-open-animate');
    }

    function hideModal(modal, onComplete = null) {
      modal.classList.remove('modal-open-animate');
      modal.classList.add('modal-close-animate');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('modal-close-animate');
        if (onComplete) onComplete();
      }, 200);
    }

    // ================================================
    // LOAD STUDENTS
    // ================================================
    function showLoadingSkeletons() {
      let cardsHtml = '<div class="flex flex-col gap-4">';
      for (let i = 0; i < 4; i++) {
        cardsHtml += \`
          <div class="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 animate-pulse">
            <!-- Left Profile Skeleton -->
            <div class="flex items-center gap-4 min-w-[260px] lg:max-w-[320px]">
              <div class="w-11 h-11 rounded-full bg-slate-200 shrink-0"></div>
              <div class="space-y-2 flex-grow">
                <div class="h-4 bg-slate-200 rounded w-32"></div>
                <div class="h-3 bg-slate-100 rounded w-24"></div>
              </div>
            </div>
            
            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Details Skeleton -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:flex-grow lg:justify-between gap-4">
              <!-- Contact -->
              <div class="space-y-2 min-w-[180px]">
                <div class="h-3.5 bg-slate-200 rounded w-28"></div>
                <div class="h-3 bg-slate-100 rounded w-36"></div>
              </div>
              <!-- Program -->
              <div class="space-y-2 min-w-[200px]">
                <div class="h-4 bg-slate-100 rounded w-16"></div>
                <div class="h-3.5 bg-slate-200 rounded w-44"></div>
              </div>
              <!-- Date -->
              <div class="h-3.5 bg-slate-200 rounded w-24 min-w-[120px]"></div>
              <!-- Status -->
              <div class="h-6 bg-slate-100 rounded-full w-20 min-w-[120px]"></div>
            </div>

            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Actions -->
            <div class="flex items-center justify-end gap-2 shrink-0">
              <div class="w-9 h-9 rounded-xl bg-slate-100"></div>
              <div class="w-9 h-9 rounded-xl bg-slate-200"></div>
              <div class="w-9 h-9 rounded-xl bg-slate-100"></div>
            </div>
          </div>
        \`;
      }
      cardsHtml += '</div>';
      studentsContainer.innerHTML = cardsHtml;
    }

    async function loadStudents() {
      const search = searchInput.value;
      const programId = filterProgram.value;
      
      showLoadingSkeletons();

      try {
        const query = new URLSearchParams({ search, programId }).toString();
        const res = await fetch(\`/api/students?\${query}\`);
        if (res.ok) {
          studentsList = await res.json();
          renderTable();
        } else {
          studentsContainer.innerHTML = \`
            <div class="p-12 text-center text-[#E53935] font-semibold">
              Failed to retrieve registration records.
            </div>
          \`;
        }
      } catch (err) {
        console.error(err);
        studentsContainer.innerHTML = \`
          <div class="p-12 text-center text-[#E53935] font-semibold">
            Network failure. Please refresh the page.
          </div>
        \`;
      }
    }

    // ================================================
    // HELPERS
    // ================================================
    function formatDate(dateStr) {
      if (!dateStr) return 'N/A';
      return new Date(dateStr).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
      });
    }

    function formatDateTime(isoStr) {
      if (!isoStr) return 'N/A';
      const d = new Date(isoStr);
      return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
             ' \xB7 ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    function statusColors(status) {
      if (status === 'Enrolled') return 'bg-emerald-50 text-emerald-700';
      if (status === 'Contacted') return 'bg-blue-50 text-blue-700';
      if (status === 'Cancelled') return 'bg-rose-50 text-[#E53935]';
      return 'bg-amber-50 text-amber-700';
    }

    // ================================================
    // RENDER TABLE & CARDS
    // ================================================    
    function renderTable() {
      const statusFilterVal = filterStatus.value;
      const sortVal = sortStudents.value;

      let filtered = studentsList.filter(s => {
        return !statusFilterVal || (s.status || 'Pending') === statusFilterVal;
      });

      filtered.sort((a, b) => {
        if (sortVal === 'date-desc') return new Date(b.date) - new Date(a.date);
        if (sortVal === 'date-asc') return new Date(a.date) - new Date(b.date);
        if (sortVal === 'name-asc') return a.name.localeCompare(b.name);
        if (sortVal === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });

      if (filtered.length === 0) {
        studentsContainer.innerHTML = \`
          <div class="flex flex-col items-center justify-center p-16 text-center bg-white border border-slate-200/60 rounded-2xl shadow-sm space-y-4 animate-table-fade w-full">
            <div class="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <span class="material-symbols-outlined text-3xl">person_off</span>
            </div>
            <div class="space-y-1">
              <h3 class="font-headline font-bold text-[#071426] text-base">No registered students found</h3>
              <p class="text-xs text-slate-400 font-medium">Try adjusting your filters or search query to find records.</p>
            </div>
            <button 
              id="empty-refresh-btn"
              class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-headline font-bold text-xs transition-all shadow-sm flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <span class="material-symbols-outlined text-sm">refresh</span>
              Refresh
            </button>
          </div>
        \`;
        document.getElementById('empty-refresh-btn')?.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          if (filterProgram) filterProgram.value = '';
          if (filterStatus) filterStatus.value = '';
          if (sortStudents) sortStudents.value = 'date-desc';
          loadStudents();
        });
        return;
      }

      let cardsHtml = \`<div class="flex flex-col gap-4 animate-row w-full">\`;

      filtered.forEach((student, index) => {
        const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        const statusColor = statusColors(student.status || 'Pending');
        
        const isCourse = (student.programType || '').toLowerCase() === 'course';
        const progBadgeClass = isCourse 
          ? 'bg-blue-50 text-blue-700 border border-blue-200/50' 
          : 'bg-orange-50 text-orange-700 border border-orange-200/50';

        const avatarColors = getAvatarColorClass(student.name);
        const year = new Date(student.date).getFullYear();
        const shortId = student.id.substring(0, 8).toUpperCase();
        const regIdDisplay = \`REG-\${year}-\${shortId}\`;

        cardsHtml += \`
          <div class="student-card bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-premium-hover flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer" data-id="\${student.id}">
            
            <!-- Profile & Registration ID -->
            <div class="flex items-center gap-4 min-w-[260px] lg:max-w-[320px]">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br \${avatarColors} border flex items-center justify-center font-headline font-bold text-sm shadow-sm shrink-0">
                \${initials}
              </div>
              <div class="min-w-0">
                <h4 class="font-headline font-extrabold text-[#071426] text-base truncate hover:text-[#E53935] transition-colors duration-150">\${student.name}</h4>
                <p class="text-xs text-slate-400 font-mono tracking-tight mt-0.5">\${regIdDisplay}</p>
              </div>
            </div>

            <!-- Divider on mobile only -->
            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Grid of details that wraps on tablet -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:flex-grow lg:justify-between gap-4 text-xs font-semibold text-slate-600">
              
              <!-- Contact Info -->
              <div class="space-y-1.5 min-w-[180px]">
                <a href="tel:\${student.mobile}" class="text-slate-700 hover:text-[#E53935] font-semibold flex items-center gap-1.5 transition-colors duration-150">
                  <span class="material-symbols-outlined text-xs text-slate-400">call</span>
                  <span>\${student.mobile}</span>
                </a>
                <a href="mailto:\${student.email}" class="text-slate-500 hover:text-[#E53935] font-medium flex items-center gap-1.5 transition-colors duration-150 truncate max-w-[200px]" title="\${student.email}">
                  <span class="material-symbols-outlined text-xs text-slate-400">mail</span>
                  <span>\${student.email}</span>
                </a>
              </div>

              <!-- Selected Program -->
              <div class="space-y-1 min-w-[200px] max-w-[280px]">
                <span class="inline-block px-2.5 py-0.5 rounded text-[8px] font-headline font-extrabold uppercase tracking-wider \${progBadgeClass}">
                  \${student.programType}
                </span>
                <div class="text-slate-700 font-bold leading-normal truncate" title="\${student.programName}">
                  \${student.programName}
                </div>
              </div>

              <!-- Registration Date -->
              <div class="flex items-center gap-1.5 min-w-[120px]">
                <span class="material-symbols-outlined text-xs text-slate-400">calendar_today</span>
                <div class="text-slate-500 font-semibold">\${formatDate(student.date)}</div>
              </div>

              <!-- Status Pill -->
              <div class="min-w-[120px]">
                <span class="status-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-headline font-extrabold uppercase tracking-wider shadow-sm border border-slate-200/40 \${statusColor}">
                  <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                  \${student.status || 'Pending'}
                </span>
              </div>

            </div>

            <!-- Divider on mobile only -->
            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-end gap-2 shrink-0">
              <button 
                class="action-btn w-9 h-9 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 hover:border-slate-300 transition-all duration-200 view-btn"
                data-id="\${student.id}"
                title="View Student"
              >
                <span class="material-symbols-outlined text-base">visibility</span>
              </button>
              <button 
                class="action-btn w-9 h-9 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-center text-slate-500 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all duration-200 edit-btn"
                data-id="\${student.id}"
                title="Edit Lead"
              >
                <span class="material-symbols-outlined text-base">edit</span>
              </button>
              <button 
                class="action-btn w-9 h-9 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all duration-200 delete-btn"
                data-id="\${student.id}"
                data-name="\${student.name}"
                title="Delete Lead"
              >
                <span class="material-symbols-outlined text-base">delete</span>
              </button>
            </div>

          </div>
        \`;
      });

      cardsHtml += \`</div>\`;
      studentsContainer.innerHTML = cardsHtml;
      bindTableActions();
    } 

    // ================================================
    // VIEW MODAL
    // ================================================
    function openViewModal(student) {
      activeStudent = student;

      const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      document.getElementById('view-avatar').textContent = initials;
      document.getElementById('view-name').textContent = student.name;
      document.getElementById('view-id').textContent = \`System ID: \${student.id}\`;

      // Status badge
      const badge = document.getElementById('view-status-badge');
      badge.textContent = student.status || 'Pending';
      badge.className = \`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-headline font-extrabold uppercase mt-1.5 \${statusColors(student.status || 'Pending')}\`;

      // Quick links
      document.getElementById('view-link-call').href = \`tel:\${student.mobile}\`;
      document.getElementById('view-link-whatsapp').href = \`https://wa.me/91\${student.whatsapp || student.mobile}\`;
      document.getElementById('view-link-email').href = \`mailto:\${student.email}\`;

      // Contact
      document.getElementById('view-mobile').textContent = student.mobile || '-';
      document.getElementById('view-email').textContent = student.email || '-';

      // Program
      document.getElementById('view-prog-name').textContent = student.programName || '-';
      const progType = document.getElementById('view-prog-type');
      progType.textContent = student.programType || '-';
      progType.className = \`inline-block px-2 py-0.5 rounded text-[8px] font-headline font-extrabold uppercase tracking-wide mt-0.5 \${
        student.programType === 'course' ? 'bg-[#071426]/5 text-[#071426] border border-[#071426]/10' : 'bg-[#E53935]/5 text-[#E53935] border border-[#E53935]/10'
      }\`;
      document.getElementById('view-learning-mode').textContent = student.learningMode || 'Hybrid';

      // Lead management
      document.getElementById('view-date').textContent = formatDate(student.date);
      document.getElementById('view-assigned').textContent = student.assignedEmployee || 'Unassigned';
      const followupStr = student.followUpDate
        ? student.followUpDate + (student.followUpTime ? \` \xB7 \${student.followUpTime}\` : '')
        : 'Not scheduled';
      document.getElementById('view-followup').textContent = followupStr;
      document.getElementById('view-next-action').textContent = student.nextAction || 'None';

      // Notes
      document.getElementById('view-message').textContent = student.message || 'No specific queries or message notes attached.';
      document.getElementById('view-notes').textContent = student.notes || 'No CRM notes added yet.';

      // Timeline
      renderTimeline(student.timeline || [{ event: 'Registration Submitted', timestamp: student.date }]);

      showModal(viewModal);
    }

    function renderTimeline(timeline) {
      const container = document.getElementById('view-timeline');
      if (!timeline || timeline.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-400 italic">No activity recorded yet.</p>';
        return;
      }

      container.innerHTML = timeline.map((item, index) => \`
        <div class="timeline-item">
          <div class="timeline-dot \${index > 0 ? 'old' : ''}"></div>
          <div class="timeline-content">
            <p class="timeline-event">\${item.event}</p>
            <p class="timeline-time">\${formatDateTime(item.timestamp)}</p>
          </div>
        </div>
      \`).join('');
    }

    function closeViewModal() {
      hideModal(viewModal);
    }

    // ================================================
    // EDIT MODAL
    // ================================================
    function openEditModal(student) {
      editTargetId = student.id;
      document.getElementById('edit-modal-subtitle').textContent = student.name;

      document.getElementById('edit-status').value = student.status || 'Pending';
      document.getElementById('edit-assigned').value = student.assignedEmployee || '';
      document.getElementById('edit-followup-date').value = student.followUpDate || '';
      document.getElementById('edit-followup-time').value = student.followUpTime || '';
      document.getElementById('edit-next-action').value = student.nextAction || '';
      document.getElementById('edit-notes').value = student.notes || '';

      showModal(editModal);
    }

    function closeEditModal() {
      hideModal(editModal, () => {
        editTargetId = null;
      });
    }

    async function saveEdit() {
      if (!editTargetId) return;

      const saveBtn = document.getElementById('save-edit-btn');
      saveBtn.disabled = true;
      saveBtn.innerHTML = \`<span class="material-symbols-outlined text-sm animate-spin">progress_activity</span> Saving...\`;

      const payload = {
        id: editTargetId,
        status: document.getElementById('edit-status').value,
        assignedEmployee: document.getElementById('edit-assigned').value.trim(),
        followUpDate: document.getElementById('edit-followup-date').value,
        followUpTime: document.getElementById('edit-followup-time').value,
        nextAction: document.getElementById('edit-next-action').value.trim(),
        notes: document.getElementById('edit-notes').value.trim()
      };

      try {
        const res = await fetch('/api/students', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          closeEditModal();
          window.showToast('Lead updated successfully!');
          await loadStudents();
        } else {
          const err = await res.json();
          window.showToast(err.error || 'Failed to save changes.', 'error');
        }
      } catch (err) {
        console.error(err);
        window.showToast('Network error. Please try again.', 'error');
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = \`<span class="material-symbols-outlined text-sm">save</span> Save Changes\`;
      }
    }

    // ================================================
    // DELETE
    // ================================================
    function openDeleteModal(id, name) {
      deleteTargetId = id;
      document.getElementById('delete-item-name').textContent = name;
      showModal(deleteModal);
    }

    function closeDeleteModal() {
      hideModal(deleteModal, () => {
        deleteTargetId = null;
      });
    }

    // ================================================
    // BIND TABLE ACTIONS
    // ================================================
    function bindTableActions() {
      document.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.action-btn') || e.target.closest('a')) return;
          const student = studentsList.find(s => s.id === card.dataset.id);
          if (student) openViewModal(student);
        });
      });

      document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const student = studentsList.find(s => s.id === btn.dataset.id);
          if (student) openViewModal(student);
        });
      });

      document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const student = studentsList.find(s => s.id === btn.dataset.id);
          if (student) openEditModal(student);
        });
      });

      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openDeleteModal(btn.dataset.id, btn.dataset.name);
        });
      });
    }

    // ================================================
    // EVENT LISTENERS
    // ================================================
    if (searchInput) searchInput.addEventListener('input', renderTable);
    if (filterProgram) filterProgram.addEventListener('change', loadStudents);
    if (filterStatus) filterStatus.addEventListener('change', renderTable);
    if (sortStudents) sortStudents.addEventListener('change', renderTable);

    // View Modal close
    document.getElementById('close-view-btn')?.addEventListener('click', closeViewModal);
    document.getElementById('close-view-footer-btn')?.addEventListener('click', closeViewModal);
    viewModal?.addEventListener('click', e => { if (e.target === viewModal) closeViewModal(); });

    // Edit Modal controls
    document.getElementById('close-edit-btn')?.addEventListener('click', closeEditModal);
    document.getElementById('cancel-edit-btn')?.addEventListener('click', closeEditModal);
    document.getElementById('save-edit-btn')?.addEventListener('click', saveEdit);
    editModal?.addEventListener('click', e => { if (e.target === editModal) closeEditModal(); });

    // Delete Modal controls
    document.getElementById('cancel-delete-btn')?.addEventListener('click', closeDeleteModal);
    deleteModal?.addEventListener('click', e => { if (e.target === deleteModal) closeDeleteModal(); });

    document.getElementById('confirm-delete-btn')?.addEventListener('click', async () => {
      if (!deleteTargetId) return;
      const btn = document.getElementById('confirm-delete-btn');
      btn.disabled = true;
      btn.textContent = 'Deleting...';

      try {
        const res = await fetch(\`/api/students?id=\${deleteTargetId}\`, { method: 'DELETE' });
        if (res.ok) {
          closeDeleteModal();
          window.showToast('Student lead deleted successfully.');
          loadStudents();
        } else {
          window.showToast('Failed to delete student record.', 'error');
        }
      } catch (err) {
        console.error(err);
        window.showToast('Network error, failed to delete.', 'error');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Yes, Delete';
        deleteTargetId = null;
      }
    });

    // ================================================
    // INITIAL LOAD
    // ================================================
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadStudents);
    } else {
      loadStudents();
    }
  <\/script> `], [" ", '<div class="space-y-6" data-astro-cid-epox3rc6> <!-- Header Block --> <div class="glass-card-premium p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden" data-astro-cid-epox3rc6> <div class="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-[#FF7043]/5 to-[#FFB300]/5 rounded-full blur-2xl pointer-events-none -z-10" data-astro-cid-epox3rc6></div> <div class="space-y-1 relative z-10" data-astro-cid-epox3rc6> <h3 class="text-xl font-headline font-extrabold text-[#071426]" data-astro-cid-epox3rc6>Student Lead CRM</h3> <p class="text-xs text-slate-400 font-semibold" data-astro-cid-epox3rc6>Monitor, filter, and manage student course and internship registrations.</p> </div> <a href="/api/export-students" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-headline font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/15 hover:scale-[1.02] select-none" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-sm font-bold" data-astro-cid-epox3rc6>download</span>\nExport CSV\n</a> </div> <!-- CRM Filters, Search and Sorting --> <div class="glass-card-premium p-5 rounded-3xl border border-slate-200/60 shadow-sm space-y-4" data-astro-cid-epox3rc6> <div class="flex flex-col lg:flex-row gap-4 items-center justify-between" data-astro-cid-epox3rc6> <!-- Search Input --> <div class="relative w-full lg:max-w-md" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3.5 top-3" data-astro-cid-epox3rc6>search</span> <input type="text" id="search-input" class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition-all font-medium" placeholder="Search by student name, email, phone, or program..." data-astro-cid-epox3rc6> </div> <!-- Right filters row --> <div class="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:items-center gap-3 w-full lg:w-auto" data-astro-cid-epox3rc6> <!-- Program filter --> <select id="filter-program" class="px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-semibold text-slate-600 focus:outline-none focus:border-[#E53935] w-full lg:w-auto" data-astro-cid-epox3rc6> <option value="" data-astro-cid-epox3rc6>All Specific Programs</option> <optgroup label="Courses" data-astro-cid-epox3rc6> ', ' </optgroup> <optgroup label="Internships" data-astro-cid-epox3rc6> ', ' </optgroup> </select> <!-- Status Filter --> <select id="filter-status" class="px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-semibold text-slate-600 focus:outline-none focus:border-[#E53935] w-full lg:w-auto" data-astro-cid-epox3rc6> <option value="" data-astro-cid-epox3rc6>All Statuses</option> <option value="Pending" data-astro-cid-epox3rc6>Pending</option> <option value="Contacted" data-astro-cid-epox3rc6>Contacted</option> <option value="Enrolled" data-astro-cid-epox3rc6>Enrolled</option> <option value="Cancelled" data-astro-cid-epox3rc6>Cancelled</option> </select> <!-- Sort dropdown --> <select id="sort-students" class="px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-semibold text-slate-600 focus:outline-none focus:border-[#E53935] w-full lg:w-auto" data-astro-cid-epox3rc6> <option value="date-desc" data-astro-cid-epox3rc6>Newest First</option> <option value="date-asc" data-astro-cid-epox3rc6>Oldest First</option> <option value="name-asc" data-astro-cid-epox3rc6>Name (A-Z)</option> <option value="name-desc" data-astro-cid-epox3rc6>Name (Z-A)</option> </select> </div> </div> </div> <!-- Students Container --> <div class="flex flex-col gap-4 md:max-h-[calc(100vh-290px)] md:overflow-y-auto animate-table-fade p-0.5" id="students-container" data-astro-cid-epox3rc6> <!-- Loading Skeleton Cards --> ', ` </div> </div>    <div id="view-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071426]/60 backdrop-blur-sm hidden" role="dialog" aria-modal="true" data-astro-cid-epox3rc6> <div class="bg-white rounded-3xl border border-slate-200/60 shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden" data-astro-cid-epox3rc6> <!-- View Modal Header --> <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <div class="flex items-center gap-3" data-astro-cid-epox3rc6> <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#071426] to-[#E53935] flex items-center justify-center" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-white text-sm" data-astro-cid-epox3rc6>person</span> </div> <div data-astro-cid-epox3rc6> <h4 class="font-headline font-bold text-sm text-[#071426]" data-astro-cid-epox3rc6>Student Profile</h4> <p class="text-[10px] text-slate-400 font-semibold" data-astro-cid-epox3rc6>Read-only view</p> </div> </div> <button id="close-view-btn" class="p-2 text-slate-400 hover:text-[#E53935] rounded-xl hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-lg" data-astro-cid-epox3rc6>close</span> </button> </div> <!-- View Modal Body --> <div class="flex-grow overflow-y-auto p-5 space-y-3" data-astro-cid-epox3rc6> <!-- Student Identity Card --> <div class="crm-card" data-astro-cid-epox3rc6> <div class="flex items-center gap-4" data-astro-cid-epox3rc6> <div class="w-14 h-14 bg-gradient-to-br from-[#071426] to-[#E53935] rounded-2xl flex items-center justify-center text-white font-headline font-black text-xl shadow-md flex-shrink-0" id="view-avatar" data-astro-cid-epox3rc6>AD</div> <div class="min-w-0" data-astro-cid-epox3rc6> <h3 class="font-headline font-extrabold text-lg text-[#071426] truncate" id="view-name" data-astro-cid-epox3rc6>Student Name</h3> <span class="text-[10px] text-slate-400 font-mono block" id="view-id" data-astro-cid-epox3rc6>UUID</span> <span id="view-status-badge" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-headline font-extrabold uppercase mt-1.5" data-astro-cid-epox3rc6>Pending</span> </div> </div> <!-- Quick Contact Links --> <div class="grid grid-cols-3 gap-2 mt-4" data-astro-cid-epox3rc6> <a id="view-link-call" href="#" class="flex flex-col items-center justify-center py-2.5 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-[#E53935]/20 transition-all text-slate-600" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-base text-[#E53935]" data-astro-cid-epox3rc6>call</span> <span class="text-[9px] font-headline font-extrabold mt-0.5 uppercase tracking-wide" data-astro-cid-epox3rc6>Call</span> </a> <a id="view-link-whatsapp" href="#" target="_blank" class="flex flex-col items-center justify-center py-2.5 rounded-xl border border-slate-100 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-emerald-800" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-base text-emerald-600" data-astro-cid-epox3rc6>chat</span> <span class="text-[9px] font-headline font-extrabold mt-0.5 uppercase tracking-wide" data-astro-cid-epox3rc6>WhatsApp</span> </a> <a id="view-link-email" href="#" class="flex flex-col items-center justify-center py-2.5 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-[#FFB300]/20 transition-all text-slate-600" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-base text-[#FFB300]" data-astro-cid-epox3rc6>mail</span> <span class="text-[9px] font-headline font-extrabold mt-0.5 uppercase tracking-wide" data-astro-cid-epox3rc6>Email</span> </a> </div> </div> <!-- Contact Details --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Contact Details</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Phone Number</span> <span class="crm-value flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-xs text-slate-400" data-astro-cid-epox3rc6>call</span> <span id="view-mobile" data-astro-cid-epox3rc6>-</span> </span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Email Address</span> <span class="crm-value flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-xs text-slate-400" data-astro-cid-epox3rc6>mail</span> <span id="view-email" class="truncate" data-astro-cid-epox3rc6>-</span> </span> </div> </div> </div> <!-- Program Details --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Program Details</p> <div class="mt-2 space-y-3" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Selected Program</span> <span class="crm-value font-bold" id="view-prog-name" data-astro-cid-epox3rc6>-</span> </div> <div class="grid grid-cols-2 gap-3" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Program Type</span> <span id="view-prog-type" class="inline-block px-2 py-0.5 rounded text-[8px] font-headline font-extrabold uppercase tracking-wide mt-0.5" data-astro-cid-epox3rc6>-</span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Learning Mode</span> <span class="crm-value" id="view-learning-mode" data-astro-cid-epox3rc6>-</span> </div> </div> </div> </div> <!-- Lead Management --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Lead Management</p> <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3" data-astro-cid-epox3rc6> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Registration Date</span> <span class="crm-value flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-xs text-slate-400" data-astro-cid-epox3rc6>calendar_today</span> <span id="view-date" data-astro-cid-epox3rc6>-</span> </span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Assigned Employee</span> <span class="crm-value" id="view-assigned" data-astro-cid-epox3rc6>-</span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Follow-up Date</span> <span class="crm-value" id="view-followup" data-astro-cid-epox3rc6>-</span> </div> <div class="crm-field" data-astro-cid-epox3rc6> <span class="crm-label" data-astro-cid-epox3rc6>Next Action</span> <span class="crm-value" id="view-next-action" data-astro-cid-epox3rc6>-</span> </div> </div> </div> <!-- Student Notes --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Student Notes</p> <p id="view-message" class="text-xs text-slate-500 mt-2 leading-relaxed italic" data-astro-cid-epox3rc6></p> <div class="mt-3 pt-3 border-t border-slate-100" data-astro-cid-epox3rc6> <p class="crm-label" data-astro-cid-epox3rc6>CRM Notes</p> <p id="view-notes" class="text-xs text-slate-500 mt-1 leading-relaxed" data-astro-cid-epox3rc6></p> </div> </div> <!-- Activity Timeline --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Activity Timeline</p> <div id="view-timeline" class="mt-3 space-y-0" data-astro-cid-epox3rc6> <!-- Timeline items injected by JS --> </div> </div> </div> <!-- View Modal Footer --> <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-end shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <button id="close-view-footer-btn" class="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-headline font-bold text-xs transition-colors" data-astro-cid-epox3rc6>
Close
</button> </div> </div> </div>    <div id="edit-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071426]/60 backdrop-blur-sm hidden" role="dialog" aria-modal="true" data-astro-cid-epox3rc6> <div class="bg-white rounded-3xl border border-slate-200/60 shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden" data-astro-cid-epox3rc6> <!-- Edit Modal Header --> <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <div class="flex items-center gap-3" data-astro-cid-epox3rc6> <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF7043] to-[#FFB300] flex items-center justify-center" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-white text-sm" data-astro-cid-epox3rc6>edit</span> </div> <div data-astro-cid-epox3rc6> <h4 class="font-headline font-bold text-sm text-[#071426]" data-astro-cid-epox3rc6>Edit Lead</h4> <p class="text-[10px] text-slate-400 font-semibold truncate max-w-[220px]" id="edit-modal-subtitle" data-astro-cid-epox3rc6>Student Name</p> </div> </div> <button id="close-edit-btn" class="p-2 text-slate-400 hover:text-[#E53935] rounded-xl hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-lg" data-astro-cid-epox3rc6>close</span> </button> </div> <!-- Edit Modal Body --> <div class="flex-grow overflow-y-auto p-5 space-y-3" data-astro-cid-epox3rc6> <!-- Lead Status --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Lead Status</p> <div class="mt-2" data-astro-cid-epox3rc6> <select id="edit-status" class="crm-input" data-astro-cid-epox3rc6> <option value="Pending" data-astro-cid-epox3rc6>Pending</option> <option value="Contacted" data-astro-cid-epox3rc6>Contacted</option> <option value="Enrolled" data-astro-cid-epox3rc6>Enrolled</option> <option value="Cancelled" data-astro-cid-epox3rc6>Cancelled</option> </select> </div> </div> <!-- Assignment --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Assignment</p> <div class="mt-2" data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Assigned Employee</label> <input type="text" id="edit-assigned" placeholder="e.g. Harshvardhan, Priya..." class="crm-input" data-astro-cid-epox3rc6> </div> </div> <!-- Follow-up --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>Follow-up Schedule</p> <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3" data-astro-cid-epox3rc6> <div data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Follow-up Date</label> <input type="date" id="edit-followup-date" class="crm-input" data-astro-cid-epox3rc6> </div> <div data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Follow-up Time</label> <input type="time" id="edit-followup-time" class="crm-input" data-astro-cid-epox3rc6> </div> </div> <div class="mt-3" data-astro-cid-epox3rc6> <label class="crm-label mb-1 block" data-astro-cid-epox3rc6>Next Action</label> <input type="text" id="edit-next-action" placeholder="e.g. Call back, Send brochure..." class="crm-input" data-astro-cid-epox3rc6> </div> </div> <!-- Notes --> <div class="crm-card" data-astro-cid-epox3rc6> <p class="crm-card-title" data-astro-cid-epox3rc6>CRM Notes</p> <div class="mt-2" data-astro-cid-epox3rc6> <textarea id="edit-notes" rows="4" placeholder="Add internal notes about this lead..." class="crm-input resize-none" data-astro-cid-epox3rc6></textarea> </div> </div> </div> <!-- Edit Modal Footer --> <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/80" data-astro-cid-epox3rc6> <button id="cancel-edit-btn" class="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-headline font-bold text-xs hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6>
Cancel
</button> <button id="save-edit-btn" class="px-5 py-2.5 bg-[#E53935] hover:bg-[#c12f31] text-white rounded-xl font-headline font-bold text-xs transition-all shadow-sm hover:scale-[1.02] flex items-center gap-1.5" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-sm" data-astro-cid-epox3rc6>save</span>
Save Changes
</button> </div> </div> </div>    <div id="delete-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071426]/60 backdrop-blur-sm hidden" role="dialog" aria-modal="true" data-astro-cid-epox3rc6> <div class="bg-white rounded-3xl border border-slate-200/60 shadow-2xl max-w-sm w-full p-6 text-center space-y-6" data-astro-cid-epox3rc6> <div class="w-14 h-14 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E53935] mx-auto" data-astro-cid-epox3rc6> <span class="material-symbols-outlined text-2xl font-bold" data-astro-cid-epox3rc6>warning</span> </div> <div class="space-y-2" data-astro-cid-epox3rc6> <h4 class="font-headline font-bold text-base text-[#071426]" data-astro-cid-epox3rc6>Delete Record?</h4> <p class="text-xs text-slate-500 font-semibold leading-relaxed" data-astro-cid-epox3rc6>
Are you sure you want to delete <strong id="delete-item-name" class="text-slate-800" data-astro-cid-epox3rc6></strong>? This record will be permanently deleted from the database.
</p> </div> <div class="grid grid-cols-2 gap-2.5" data-astro-cid-epox3rc6> <button id="cancel-delete-btn" class="py-2.5 border border-slate-200 rounded-xl text-slate-600 font-headline font-bold text-xs hover:bg-slate-100 transition-colors" data-astro-cid-epox3rc6>
No, Cancel
</button> <button id="confirm-delete-btn" class="py-2.5 bg-[#E53935] text-white rounded-xl font-headline font-bold text-xs hover:bg-[#c12f31] transition-colors shadow-sm" data-astro-cid-epox3rc6>
Yes, Delete
</button> </div> </div> </div>  <script>
    function getAvatarColorClass(name) {
      if (!name) return 'from-slate-500/10 to-slate-600/10 text-slate-700 border-slate-200/50';
      const colors = [
        'from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200/50',
        'from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200/50',
        'from-rose-500/10 to-orange-500/10 text-rose-700 border-rose-200/50',
        'from-amber-500/10 to-yellow-500/10 text-amber-700 border-amber-200/50',
        'from-purple-500/10 to-pink-500/10 text-purple-700 border-purple-200/50'
      ];
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % colors.length;
      return colors[index];
    }

    // Elements
    const searchInput = document.getElementById('search-input');
    const filterProgram = document.getElementById('filter-program');
    const filterStatus = document.getElementById('filter-status');
    const sortStudents = document.getElementById('sort-students');
    const studentsContainer = document.getElementById('students-container');
    
    const viewModal = document.getElementById('view-modal');
    const editModal = document.getElementById('edit-modal');
    const deleteModal = document.getElementById('delete-modal');
    
    let studentsList = [];
    let activeStudent = null;
    let deleteTargetId = null;
    let editTargetId = null;

    // Modal Helpers for smooth animations
    function showModal(modal) {
      modal.classList.remove('hidden');
      modal.classList.remove('modal-close-animate');
      modal.classList.add('modal-open-animate');
    }

    function hideModal(modal, onComplete = null) {
      modal.classList.remove('modal-open-animate');
      modal.classList.add('modal-close-animate');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('modal-close-animate');
        if (onComplete) onComplete();
      }, 200);
    }

    // ================================================
    // LOAD STUDENTS
    // ================================================
    function showLoadingSkeletons() {
      let cardsHtml = '<div class="flex flex-col gap-4">';
      for (let i = 0; i < 4; i++) {
        cardsHtml += \\\`
          <div class="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 animate-pulse">
            <!-- Left Profile Skeleton -->
            <div class="flex items-center gap-4 min-w-[260px] lg:max-w-[320px]">
              <div class="w-11 h-11 rounded-full bg-slate-200 shrink-0"></div>
              <div class="space-y-2 flex-grow">
                <div class="h-4 bg-slate-200 rounded w-32"></div>
                <div class="h-3 bg-slate-100 rounded w-24"></div>
              </div>
            </div>
            
            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Details Skeleton -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:flex-grow lg:justify-between gap-4">
              <!-- Contact -->
              <div class="space-y-2 min-w-[180px]">
                <div class="h-3.5 bg-slate-200 rounded w-28"></div>
                <div class="h-3 bg-slate-100 rounded w-36"></div>
              </div>
              <!-- Program -->
              <div class="space-y-2 min-w-[200px]">
                <div class="h-4 bg-slate-100 rounded w-16"></div>
                <div class="h-3.5 bg-slate-200 rounded w-44"></div>
              </div>
              <!-- Date -->
              <div class="h-3.5 bg-slate-200 rounded w-24 min-w-[120px]"></div>
              <!-- Status -->
              <div class="h-6 bg-slate-100 rounded-full w-20 min-w-[120px]"></div>
            </div>

            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Actions -->
            <div class="flex items-center justify-end gap-2 shrink-0">
              <div class="w-9 h-9 rounded-xl bg-slate-100"></div>
              <div class="w-9 h-9 rounded-xl bg-slate-200"></div>
              <div class="w-9 h-9 rounded-xl bg-slate-100"></div>
            </div>
          </div>
        \\\`;
      }
      cardsHtml += '</div>';
      studentsContainer.innerHTML = cardsHtml;
    }

    async function loadStudents() {
      const search = searchInput.value;
      const programId = filterProgram.value;
      
      showLoadingSkeletons();

      try {
        const query = new URLSearchParams({ search, programId }).toString();
        const res = await fetch(\\\`/api/students?\\\${query}\\\`);
        if (res.ok) {
          studentsList = await res.json();
          renderTable();
        } else {
          studentsContainer.innerHTML = \\\`
            <div class="p-12 text-center text-[#E53935] font-semibold">
              Failed to retrieve registration records.
            </div>
          \\\`;
        }
      } catch (err) {
        console.error(err);
        studentsContainer.innerHTML = \\\`
          <div class="p-12 text-center text-[#E53935] font-semibold">
            Network failure. Please refresh the page.
          </div>
        \\\`;
      }
    }

    // ================================================
    // HELPERS
    // ================================================
    function formatDate(dateStr) {
      if (!dateStr) return 'N/A';
      return new Date(dateStr).toLocaleDateString('en-IN', {
        day: '2-digit', month: 'short', year: 'numeric'
      });
    }

    function formatDateTime(isoStr) {
      if (!isoStr) return 'N/A';
      const d = new Date(isoStr);
      return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
             ' \xB7 ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    function statusColors(status) {
      if (status === 'Enrolled') return 'bg-emerald-50 text-emerald-700';
      if (status === 'Contacted') return 'bg-blue-50 text-blue-700';
      if (status === 'Cancelled') return 'bg-rose-50 text-[#E53935]';
      return 'bg-amber-50 text-amber-700';
    }

    // ================================================
    // RENDER TABLE & CARDS
    // ================================================    
    function renderTable() {
      const statusFilterVal = filterStatus.value;
      const sortVal = sortStudents.value;

      let filtered = studentsList.filter(s => {
        return !statusFilterVal || (s.status || 'Pending') === statusFilterVal;
      });

      filtered.sort((a, b) => {
        if (sortVal === 'date-desc') return new Date(b.date) - new Date(a.date);
        if (sortVal === 'date-asc') return new Date(a.date) - new Date(b.date);
        if (sortVal === 'name-asc') return a.name.localeCompare(b.name);
        if (sortVal === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });

      if (filtered.length === 0) {
        studentsContainer.innerHTML = \\\`
          <div class="flex flex-col items-center justify-center p-16 text-center bg-white border border-slate-200/60 rounded-2xl shadow-sm space-y-4 animate-table-fade w-full">
            <div class="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <span class="material-symbols-outlined text-3xl">person_off</span>
            </div>
            <div class="space-y-1">
              <h3 class="font-headline font-bold text-[#071426] text-base">No registered students found</h3>
              <p class="text-xs text-slate-400 font-medium">Try adjusting your filters or search query to find records.</p>
            </div>
            <button 
              id="empty-refresh-btn"
              class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-headline font-bold text-xs transition-all shadow-sm flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <span class="material-symbols-outlined text-sm">refresh</span>
              Refresh
            </button>
          </div>
        \\\`;
        document.getElementById('empty-refresh-btn')?.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          if (filterProgram) filterProgram.value = '';
          if (filterStatus) filterStatus.value = '';
          if (sortStudents) sortStudents.value = 'date-desc';
          loadStudents();
        });
        return;
      }

      let cardsHtml = \\\`<div class="flex flex-col gap-4 animate-row w-full">\\\`;

      filtered.forEach((student, index) => {
        const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        const statusColor = statusColors(student.status || 'Pending');
        
        const isCourse = (student.programType || '').toLowerCase() === 'course';
        const progBadgeClass = isCourse 
          ? 'bg-blue-50 text-blue-700 border border-blue-200/50' 
          : 'bg-orange-50 text-orange-700 border border-orange-200/50';

        const avatarColors = getAvatarColorClass(student.name);
        const year = new Date(student.date).getFullYear();
        const shortId = student.id.substring(0, 8).toUpperCase();
        const regIdDisplay = \\\`REG-\\\${year}-\\\${shortId}\\\`;

        cardsHtml += \\\`
          <div class="student-card bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-premium-hover flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer" data-id="\\\${student.id}">
            
            <!-- Profile & Registration ID -->
            <div class="flex items-center gap-4 min-w-[260px] lg:max-w-[320px]">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br \\\${avatarColors} border flex items-center justify-center font-headline font-bold text-sm shadow-sm shrink-0">
                \\\${initials}
              </div>
              <div class="min-w-0">
                <h4 class="font-headline font-extrabold text-[#071426] text-base truncate hover:text-[#E53935] transition-colors duration-150">\\\${student.name}</h4>
                <p class="text-xs text-slate-400 font-mono tracking-tight mt-0.5">\\\${regIdDisplay}</p>
              </div>
            </div>

            <!-- Divider on mobile only -->
            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Grid of details that wraps on tablet -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:flex-grow lg:justify-between gap-4 text-xs font-semibold text-slate-600">
              
              <!-- Contact Info -->
              <div class="space-y-1.5 min-w-[180px]">
                <a href="tel:\\\${student.mobile}" class="text-slate-700 hover:text-[#E53935] font-semibold flex items-center gap-1.5 transition-colors duration-150">
                  <span class="material-symbols-outlined text-xs text-slate-400">call</span>
                  <span>\\\${student.mobile}</span>
                </a>
                <a href="mailto:\\\${student.email}" class="text-slate-500 hover:text-[#E53935] font-medium flex items-center gap-1.5 transition-colors duration-150 truncate max-w-[200px]" title="\\\${student.email}">
                  <span class="material-symbols-outlined text-xs text-slate-400">mail</span>
                  <span>\\\${student.email}</span>
                </a>
              </div>

              <!-- Selected Program -->
              <div class="space-y-1 min-w-[200px] max-w-[280px]">
                <span class="inline-block px-2.5 py-0.5 rounded text-[8px] font-headline font-extrabold uppercase tracking-wider \\\${progBadgeClass}">
                  \\\${student.programType}
                </span>
                <div class="text-slate-700 font-bold leading-normal truncate" title="\\\${student.programName}">
                  \\\${student.programName}
                </div>
              </div>

              <!-- Registration Date -->
              <div class="flex items-center gap-1.5 min-w-[120px]">
                <span class="material-symbols-outlined text-xs text-slate-400">calendar_today</span>
                <div class="text-slate-500 font-semibold">\\\${formatDate(student.date)}</div>
              </div>

              <!-- Status Pill -->
              <div class="min-w-[120px]">
                <span class="status-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-headline font-extrabold uppercase tracking-wider shadow-sm border border-slate-200/40 \\\${statusColor}">
                  <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                  \\\${student.status || 'Pending'}
                </span>
              </div>

            </div>

            <!-- Divider on mobile only -->
            <div class="h-px bg-slate-100 lg:hidden"></div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-end gap-2 shrink-0">
              <button 
                class="action-btn w-9 h-9 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 hover:border-slate-300 transition-all duration-200 view-btn"
                data-id="\\\${student.id}"
                title="View Student"
              >
                <span class="material-symbols-outlined text-base">visibility</span>
              </button>
              <button 
                class="action-btn w-9 h-9 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-center text-slate-500 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all duration-200 edit-btn"
                data-id="\\\${student.id}"
                title="Edit Lead"
              >
                <span class="material-symbols-outlined text-base">edit</span>
              </button>
              <button 
                class="action-btn w-9 h-9 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all duration-200 delete-btn"
                data-id="\\\${student.id}"
                data-name="\\\${student.name}"
                title="Delete Lead"
              >
                <span class="material-symbols-outlined text-base">delete</span>
              </button>
            </div>

          </div>
        \\\`;
      });

      cardsHtml += \\\`</div>\\\`;
      studentsContainer.innerHTML = cardsHtml;
      bindTableActions();
    } 

    // ================================================
    // VIEW MODAL
    // ================================================
    function openViewModal(student) {
      activeStudent = student;

      const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      document.getElementById('view-avatar').textContent = initials;
      document.getElementById('view-name').textContent = student.name;
      document.getElementById('view-id').textContent = \\\`System ID: \\\${student.id}\\\`;

      // Status badge
      const badge = document.getElementById('view-status-badge');
      badge.textContent = student.status || 'Pending';
      badge.className = \\\`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-headline font-extrabold uppercase mt-1.5 \\\${statusColors(student.status || 'Pending')}\\\`;

      // Quick links
      document.getElementById('view-link-call').href = \\\`tel:\\\${student.mobile}\\\`;
      document.getElementById('view-link-whatsapp').href = \\\`https://wa.me/91\\\${student.whatsapp || student.mobile}\\\`;
      document.getElementById('view-link-email').href = \\\`mailto:\\\${student.email}\\\`;

      // Contact
      document.getElementById('view-mobile').textContent = student.mobile || '-';
      document.getElementById('view-email').textContent = student.email || '-';

      // Program
      document.getElementById('view-prog-name').textContent = student.programName || '-';
      const progType = document.getElementById('view-prog-type');
      progType.textContent = student.programType || '-';
      progType.className = \\\`inline-block px-2 py-0.5 rounded text-[8px] font-headline font-extrabold uppercase tracking-wide mt-0.5 \\\${
        student.programType === 'course' ? 'bg-[#071426]/5 text-[#071426] border border-[#071426]/10' : 'bg-[#E53935]/5 text-[#E53935] border border-[#E53935]/10'
      }\\\`;
      document.getElementById('view-learning-mode').textContent = student.learningMode || 'Hybrid';

      // Lead management
      document.getElementById('view-date').textContent = formatDate(student.date);
      document.getElementById('view-assigned').textContent = student.assignedEmployee || 'Unassigned';
      const followupStr = student.followUpDate
        ? student.followUpDate + (student.followUpTime ? \\\` \xB7 \\\${student.followUpTime}\\\` : '')
        : 'Not scheduled';
      document.getElementById('view-followup').textContent = followupStr;
      document.getElementById('view-next-action').textContent = student.nextAction || 'None';

      // Notes
      document.getElementById('view-message').textContent = student.message || 'No specific queries or message notes attached.';
      document.getElementById('view-notes').textContent = student.notes || 'No CRM notes added yet.';

      // Timeline
      renderTimeline(student.timeline || [{ event: 'Registration Submitted', timestamp: student.date }]);

      showModal(viewModal);
    }

    function renderTimeline(timeline) {
      const container = document.getElementById('view-timeline');
      if (!timeline || timeline.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-400 italic">No activity recorded yet.</p>';
        return;
      }

      container.innerHTML = timeline.map((item, index) => \\\`
        <div class="timeline-item">
          <div class="timeline-dot \\\${index > 0 ? 'old' : ''}"></div>
          <div class="timeline-content">
            <p class="timeline-event">\\\${item.event}</p>
            <p class="timeline-time">\\\${formatDateTime(item.timestamp)}</p>
          </div>
        </div>
      \\\`).join('');
    }

    function closeViewModal() {
      hideModal(viewModal);
    }

    // ================================================
    // EDIT MODAL
    // ================================================
    function openEditModal(student) {
      editTargetId = student.id;
      document.getElementById('edit-modal-subtitle').textContent = student.name;

      document.getElementById('edit-status').value = student.status || 'Pending';
      document.getElementById('edit-assigned').value = student.assignedEmployee || '';
      document.getElementById('edit-followup-date').value = student.followUpDate || '';
      document.getElementById('edit-followup-time').value = student.followUpTime || '';
      document.getElementById('edit-next-action').value = student.nextAction || '';
      document.getElementById('edit-notes').value = student.notes || '';

      showModal(editModal);
    }

    function closeEditModal() {
      hideModal(editModal, () => {
        editTargetId = null;
      });
    }

    async function saveEdit() {
      if (!editTargetId) return;

      const saveBtn = document.getElementById('save-edit-btn');
      saveBtn.disabled = true;
      saveBtn.innerHTML = \\\`<span class="material-symbols-outlined text-sm animate-spin">progress_activity</span> Saving...\\\`;

      const payload = {
        id: editTargetId,
        status: document.getElementById('edit-status').value,
        assignedEmployee: document.getElementById('edit-assigned').value.trim(),
        followUpDate: document.getElementById('edit-followup-date').value,
        followUpTime: document.getElementById('edit-followup-time').value,
        nextAction: document.getElementById('edit-next-action').value.trim(),
        notes: document.getElementById('edit-notes').value.trim()
      };

      try {
        const res = await fetch('/api/students', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          closeEditModal();
          window.showToast('Lead updated successfully!');
          await loadStudents();
        } else {
          const err = await res.json();
          window.showToast(err.error || 'Failed to save changes.', 'error');
        }
      } catch (err) {
        console.error(err);
        window.showToast('Network error. Please try again.', 'error');
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = \\\`<span class="material-symbols-outlined text-sm">save</span> Save Changes\\\`;
      }
    }

    // ================================================
    // DELETE
    // ================================================
    function openDeleteModal(id, name) {
      deleteTargetId = id;
      document.getElementById('delete-item-name').textContent = name;
      showModal(deleteModal);
    }

    function closeDeleteModal() {
      hideModal(deleteModal, () => {
        deleteTargetId = null;
      });
    }

    // ================================================
    // BIND TABLE ACTIONS
    // ================================================
    function bindTableActions() {
      document.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.action-btn') || e.target.closest('a')) return;
          const student = studentsList.find(s => s.id === card.dataset.id);
          if (student) openViewModal(student);
        });
      });

      document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const student = studentsList.find(s => s.id === btn.dataset.id);
          if (student) openViewModal(student);
        });
      });

      document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const student = studentsList.find(s => s.id === btn.dataset.id);
          if (student) openEditModal(student);
        });
      });

      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openDeleteModal(btn.dataset.id, btn.dataset.name);
        });
      });
    }

    // ================================================
    // EVENT LISTENERS
    // ================================================
    if (searchInput) searchInput.addEventListener('input', renderTable);
    if (filterProgram) filterProgram.addEventListener('change', loadStudents);
    if (filterStatus) filterStatus.addEventListener('change', renderTable);
    if (sortStudents) sortStudents.addEventListener('change', renderTable);

    // View Modal close
    document.getElementById('close-view-btn')?.addEventListener('click', closeViewModal);
    document.getElementById('close-view-footer-btn')?.addEventListener('click', closeViewModal);
    viewModal?.addEventListener('click', e => { if (e.target === viewModal) closeViewModal(); });

    // Edit Modal controls
    document.getElementById('close-edit-btn')?.addEventListener('click', closeEditModal);
    document.getElementById('cancel-edit-btn')?.addEventListener('click', closeEditModal);
    document.getElementById('save-edit-btn')?.addEventListener('click', saveEdit);
    editModal?.addEventListener('click', e => { if (e.target === editModal) closeEditModal(); });

    // Delete Modal controls
    document.getElementById('cancel-delete-btn')?.addEventListener('click', closeDeleteModal);
    deleteModal?.addEventListener('click', e => { if (e.target === deleteModal) closeDeleteModal(); });

    document.getElementById('confirm-delete-btn')?.addEventListener('click', async () => {
      if (!deleteTargetId) return;
      const btn = document.getElementById('confirm-delete-btn');
      btn.disabled = true;
      btn.textContent = 'Deleting...';

      try {
        const res = await fetch(\\\`/api/students?id=\\\${deleteTargetId}\\\`, { method: 'DELETE' });
        if (res.ok) {
          closeDeleteModal();
          window.showToast('Student lead deleted successfully.');
          loadStudents();
        } else {
          window.showToast('Failed to delete student record.', 'error');
        }
      } catch (err) {
        console.error(err);
        window.showToast('Network error, failed to delete.', 'error');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Yes, Delete';
        deleteTargetId = null;
      }
    });

    // ================================================
    // INITIAL LOAD
    // ================================================
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadStudents);
    } else {
      loadStudents();
    }
  <\/script> `])), maybeRenderHead(), courses.map((c) => renderTemplate`<option${addAttribute(c.id, "value")} data-astro-cid-epox3rc6>${c.name}</option>`), internships.map((i) => renderTemplate`<option${addAttribute(i.id, "value")} data-astro-cid-epox3rc6>${i.name}</option>`), [1, 2, 3, 4].map(() => renderTemplate`<div class="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 animate-pulse" data-astro-cid-epox3rc6> <!-- Left Profile Skeleton --> <div class="flex items-center gap-4 min-w-[260px] lg:max-w-[320px]" data-astro-cid-epox3rc6> <div class="w-11 h-11 rounded-full bg-slate-200 shrink-0" data-astro-cid-epox3rc6></div> <div class="space-y-2 flex-grow" data-astro-cid-epox3rc6> <div class="h-4 bg-slate-200 rounded w-32" data-astro-cid-epox3rc6></div> <div class="h-3 bg-slate-100 rounded w-24" data-astro-cid-epox3rc6></div> </div> </div> <div class="h-px bg-slate-100 lg:hidden" data-astro-cid-epox3rc6></div> <!-- Details Skeleton --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:flex-grow lg:justify-between gap-4" data-astro-cid-epox3rc6> <!-- Contact --> <div class="space-y-2 min-w-[180px]" data-astro-cid-epox3rc6> <div class="h-3.5 bg-slate-200 rounded w-28" data-astro-cid-epox3rc6></div> <div class="h-3 bg-slate-100 rounded w-36" data-astro-cid-epox3rc6></div> </div> <!-- Program --> <div class="space-y-2 min-w-[200px]" data-astro-cid-epox3rc6> <div class="h-4 bg-slate-100 rounded w-16" data-astro-cid-epox3rc6></div> <div class="h-3.5 bg-slate-200 rounded w-44" data-astro-cid-epox3rc6></div> </div> <!-- Date --> <div class="h-3.5 bg-slate-200 rounded w-24 min-w-[120px]" data-astro-cid-epox3rc6></div> <!-- Status --> <div class="h-6 bg-slate-100 rounded-full w-20 min-w-[120px]" data-astro-cid-epox3rc6></div> </div> <div class="h-px bg-slate-100 lg:hidden" data-astro-cid-epox3rc6></div> <!-- Actions --> <div class="flex items-center justify-end gap-2 shrink-0" data-astro-cid-epox3rc6> <div class="w-9 h-9 rounded-xl bg-slate-100" data-astro-cid-epox3rc6></div> <div class="w-9 h-9 rounded-xl bg-slate-100" data-astro-cid-epox3rc6></div> <div class="w-9 h-9 rounded-xl bg-slate-100" data-astro-cid-epox3rc6></div> </div> </div>`)) })}`;
}, "C:/Users/margd/Documents/margdarshak-test/src/pages/admin/students.astro", void 0);

const $$file = "C:/Users/margd/Documents/margdarshak-test/src/pages/admin/students.astro";
const $$url = "/admin/students";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Students,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
