import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BE3U4aJm.mjs';
import { manifest } from './manifest_neRGbUtF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/courses.astro.mjs');
const _page3 = () => import('./pages/admin/dashboard.astro.mjs');
const _page4 = () => import('./pages/admin/internships.astro.mjs');
const _page5 = () => import('./pages/admin/login.astro.mjs');
const _page6 = () => import('./pages/admin/settings.astro.mjs');
const _page7 = () => import('./pages/admin/students.astro.mjs');
const _page8 = () => import('./pages/admin.astro.mjs');
const _page9 = () => import('./pages/api/courses.astro.mjs');
const _page10 = () => import('./pages/api/export-students.astro.mjs');
const _page11 = () => import('./pages/api/internships.astro.mjs');
const _page12 = () => import('./pages/api/login.astro.mjs');
const _page13 = () => import('./pages/api/logout.astro.mjs');
const _page14 = () => import('./pages/api/register.astro.mjs');
const _page15 = () => import('./pages/api/students.astro.mjs');
const _page16 = () => import('./pages/api/upload-image.astro.mjs');
const _page17 = () => import('./pages/contact.astro.mjs');
const _page18 = () => import('./pages/courses/_id_.astro.mjs');
const _page19 = () => import('./pages/courses.astro.mjs');
const _page20 = () => import('./pages/internships/_id_.astro.mjs');
const _page21 = () => import('./pages/internships.astro.mjs');
const _page22 = () => import('./pages/register/success.astro.mjs');
const _page23 = () => import('./pages/register.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/courses.astro", _page2],
    ["src/pages/admin/dashboard.astro", _page3],
    ["src/pages/admin/internships.astro", _page4],
    ["src/pages/admin/login.astro", _page5],
    ["src/pages/admin/settings.astro", _page6],
    ["src/pages/admin/students.astro", _page7],
    ["src/pages/admin/index.astro", _page8],
    ["src/pages/api/courses.js", _page9],
    ["src/pages/api/export-students.js", _page10],
    ["src/pages/api/internships.js", _page11],
    ["src/pages/api/login.js", _page12],
    ["src/pages/api/logout.js", _page13],
    ["src/pages/api/register.js", _page14],
    ["src/pages/api/students.js", _page15],
    ["src/pages/api/upload-image.js", _page16],
    ["src/pages/contact.astro", _page17],
    ["src/pages/courses/[id].astro", _page18],
    ["src/pages/courses.astro", _page19],
    ["src/pages/internships/[id].astro", _page20],
    ["src/pages/internships.astro", _page21],
    ["src/pages/register/success.astro", _page22],
    ["src/pages/register.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "79cc73b5-8183-4d7f-9587-8f31c399e526",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
