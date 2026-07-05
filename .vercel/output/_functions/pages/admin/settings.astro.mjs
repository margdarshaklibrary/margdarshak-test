import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_Cz0Ahlmm.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Cr3ok2qs.mjs';
import { r as readDb, v as verifyPassword, c as changeAdminCredentials } from '../../chunks/db_BB5DAx5-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://margdarshak.in");
const prerender = false;
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const token = Astro2.cookies.get("admin_session")?.value;
  const db = readDb();
  const currentUsername = db.admin.username;
  let errorMsg = "";
  let successMsg = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const username = String(formData.get("username") || "").trim();
      const currentPassword = String(formData.get("currentPassword") || "");
      const newPassword = String(formData.get("newPassword") || "");
      const confirmPassword = String(formData.get("confirmPassword") || "");
      if (!username || !currentPassword) {
        errorMsg = "Username and Current Password are required.";
      } else if (!verifyPassword(currentPassword, db.admin.passwordHash)) {
        errorMsg = "The current password you entered is incorrect.";
      } else if (newPassword && newPassword.length < 5) {
        errorMsg = "New password must be at least 5 characters long.";
      } else if (newPassword && newPassword !== confirmPassword) {
        errorMsg = "New password and confirmation password do not match.";
      } else {
        changeAdminCredentials(token, username, newPassword || null);
        return Astro2.redirect("/admin/settings?success=true");
      }
    } catch (err) {
      console.error("Error changing credentials:", err);
      errorMsg = err.message || "An error occurred while saving your changes.";
    }
  }
  const successParam = Astro2.url.searchParams.get("success");
  if (successParam === "true") {
    successMsg = "Admin credentials updated successfully!";
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Settings - Margdarshak Admin", "activeTab": "settings" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-xl mx-auto space-y-6"> <!-- Page Header Bar --> <div class="glass-card-premium p-6 rounded-3xl border border-slate-200/60 shadow-sm relative overflow-hidden"> <div class="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-[#FF7043]/5 to-[#FFB300]/5 rounded-full blur-2xl pointer-events-none -z-10"></div> <div class="space-y-1 relative z-10"> <h3 class="text-xl font-headline font-extrabold text-[#071426]">Security & Accounts</h3> <p class="text-xs text-slate-400 font-semibold">Change console configuration parameters and admin credentials.</p> </div> </div> <!-- Settings Form Card --> <div class="glass-card-premium p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-6"> <div class="border-b border-slate-100 pb-4"> <h4 class="font-headline font-extrabold text-sm text-[#071426] uppercase tracking-wider">
Update Administrative Credentials
</h4> <p class="text-[10px] text-slate-400 mt-1 font-semibold leading-relaxed">
Ensure you maintain password complexity. A session reset will apply to other active browsers.
</p> </div> <!-- Error and Success Messages --> ${errorMsg && renderTemplate`<div class="bg-rose-50 border border-rose-100 text-[#E53935] px-4 py-3.5 rounded-2xl text-xs font-semibold flex items-start gap-2.5"> <span class="material-symbols-outlined text-lg shrink-0">error</span> <span class="font-medium">${errorMsg}</span> </div>`} ${successMsg && renderTemplate`<div class="bg-emerald-50 border border-emerald-100 text-success px-4 py-3.5 rounded-2xl text-xs font-semibold flex items-start gap-2.5"> <span class="material-symbols-outlined text-lg shrink-0">check_circle</span> <span class="font-medium">${successMsg}</span> </div>`} <form method="POST" class="space-y-5"> <!-- Username --> <div class="space-y-1.5"> <label for="username" class="text-[10px] font-headline font-extrabold text-slate-500 uppercase tracking-wider block">Administrator Username *</label> <div class="relative"> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3 top-1/2 -translate-y-1/2">account_circle</span> <input type="text" id="username" name="username"${addAttribute(currentUsername, "value")} required class="w-full pl-9 pr-4 py-3 text-xs rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:border-[#E53935] transition-all font-semibold text-slate-700"> </div> </div> <!-- Current Password --> <div class="space-y-1.5"> <label for="currentPassword" class="text-[10px] font-headline font-extrabold text-slate-500 uppercase tracking-wider block">Current Password *</label> <div class="relative"> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3 top-1/2 -translate-y-1/2">key</span> <input type="password" id="currentPassword" name="currentPassword" required placeholder="Required to authorize modifications" class="w-full pl-9 pr-4 py-3 text-xs rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:border-[#E53935] transition-all font-medium"> </div> </div> <hr class="border-slate-100/80 my-5"> <!-- New Password --> <div class="space-y-1.5"> <label for="newPassword" class="text-[10px] font-headline font-extrabold text-slate-500 uppercase tracking-wider block">New Password (optional)</label> <div class="relative"> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3 top-1/2 -translate-y-1/2">lock</span> <input type="password" id="newPassword" name="newPassword" placeholder="Leave blank to keep existing password" class="w-full pl-9 pr-4 py-3 text-xs rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:border-[#E53935] transition-all font-medium"> </div> </div> <!-- Confirm New Password --> <div class="space-y-1.5"> <label for="confirmPassword" class="text-[10px] font-headline font-extrabold text-slate-500 uppercase tracking-wider block">Confirm New Password</label> <div class="relative"> <span class="material-symbols-outlined text-slate-400 text-base absolute left-3 top-1/2 -translate-y-1/2">lock_reset</span> <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Verify new password" class="w-full pl-9 pr-4 py-3 text-xs rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:border-[#E53935] transition-all font-medium"> </div> </div> <!-- Submit Button --> <div class="pt-3"> <button type="submit" class="w-full sm:w-auto px-6 py-3 btn-brand-gradient text-white rounded-xl font-headline font-bold text-xs shadow-md shadow-[#E53935]/15 flex items-center justify-center gap-1.5 hover:scale-[1.02] select-none"> <span class="material-symbols-outlined text-sm">save</span>
Save Credentials
</button> </div> </form> </div> </div> ` })}`;
}, "C:/Users/margd/Documents/margdarshak-test/src/pages/admin/settings.astro", void 0);

const $$file = "C:/Users/margd/Documents/margdarshak-test/src/pages/admin/settings.astro";
const $$url = "/admin/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
