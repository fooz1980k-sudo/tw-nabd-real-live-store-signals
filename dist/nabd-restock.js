import { LitElement as U, nothing as q, html as o, css as T } from "lit";
import { property as Y, state as C } from "lit/decorators.js";
const g = () => window.salla ?? window.Salla, S = async () => {
  var t, e;
  try {
    await ((e = (t = g()) == null ? void 0 : t.onReady) == null ? void 0 : e.call(t));
  } catch {
  }
}, W = () => {
  var t, e, a, r, i;
  try {
    const s = ((e = (t = g()) == null ? void 0 : t.lang) == null ? void 0 : e.locale) ?? ((i = (r = (a = g()) == null ? void 0 : a.config) == null ? void 0 : r.get) == null ? void 0 : i.call(r, "user.language_code"));
    if (typeof s == "string" && s) return s.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, K = () => W() === "en", l = (t, e) => K() ? e : t, y = (t, e = "") => {
  if (t == null) return e;
  if (typeof t == "string") {
    const a = t.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return y(JSON.parse(a), e);
      } catch {
      }
    return a || e;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const a = t, r = a[W()] ?? a.ar ?? a.en ?? Object.values(a).find((i) => typeof i == "string" && i);
    return typeof r == "string" && r.trim() ? r : e;
  }
  return e;
}, p = (t, e = "") => {
  const a = Array.isArray(t) ? t[0] : t, r = typeof a == "object" && a ? a.value : a;
  return r == null || r === "" ? e : String(r);
}, d = (t, e = 0) => {
  const a = Number(t);
  return t === "" || t == null || !Number.isFinite(a) ? e : a;
}, f = (t, e = !1) => t == null || t === "" ? e : t === !0 || t === "true" || t === 1 || t === "1", m = (t) => {
  const e = typeof t == "object" && t ? t.amount : t, a = Number(e);
  return Number.isFinite(a) ? a : 0;
}, X = (t) => {
  if (!t) return null;
  const e = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(e) && e > Date.now() ? e : null;
};
function H(t) {
  var c, h, b, v, u, D, _, B, j;
  const e = m(t == null ? void 0 : t.sale_price), a = m((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), r = e && e < a ? e : m(t == null ? void 0 : t.price) || a, i = Math.max(m(t == null ? void 0 : t.regular_price), m(t == null ? void 0 : t.price), r), s = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map(($) => String(($ == null ? void 0 : $.url) ?? $ ?? "")).filter(Boolean), n = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((c = t == null ? void 0 : t.image) == null ? void 0 : c.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? s[0] ?? ""),
    images: s,
    price: r,
    regular: i,
    discount: i > r ? Math.round((1 - r / i) * 100) : 0,
    rating: m(((h = t == null ? void 0 : t.rating) == null ? void 0 : h.stars) ?? ((b = t == null ? void 0 : t.rating) == null ? void 0 : b.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: m((v = t == null ? void 0 : t.rating) == null ? void 0 : v.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : m(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: n == null || n === "" || !Number.isFinite(Number(n)) ? null : Number(n),
    endsAt: X((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((u = t == null ? void 0 : t.category) == null ? void 0 : u.name) ?? ((_ = (D = t == null ? void 0 : t.categories) == null ? void 0 : D[0]) == null ? void 0 : _.name) ?? ""),
    brand: String(((B = t == null ? void 0 : t.brand) == null ? void 0 : B.name) ?? ""),
    promo: String(((j = t == null ? void 0 : t.promotion) == null ? void 0 : j.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const Q = (t) => (Array.isArray(t) ? t : []).map((e) => Number(typeof e == "object" && e ? e.value : e)).filter((e) => Number.isFinite(e) && e > 0), w = /* @__PURE__ */ new Map();
async function V(t) {
  var r, i, s;
  const e = (r = g()) == null ? void 0 : r.product;
  if (!e) return null;
  const a = e.getDetails ? e.getDetails.bind(e) : (s = (i = e.api) == null ? void 0 : i.getDetails) == null ? void 0 : s.bind(e.api);
  if (!a) return null;
  try {
    const n = await a(t, ["images", "sold_quantity", "category"]), c = H((n == null ? void 0 : n.data) ?? n);
    return c.name ? c : null;
  } catch {
    return null;
  }
}
async function Z(t) {
  await S();
  const e = "ids:" + t.join(",");
  return w.has(e) || w.set(e, Promise.all(t.map(V)).then((a) => a.filter((r) => !!r))), w.get(e);
}
async function R(t, e = [], a = 12) {
  await S();
  const r = `src:${t}:${e.join(",")}:${a}`;
  return w.has(r) || w.set(r, (async () => {
    var n, c, h, b;
    const i = (n = g()) == null ? void 0 : n.product, s = i != null && i.fetch ? i.fetch.bind(i) : (h = (c = i == null ? void 0 : i.api) == null ? void 0 : c.fetch) == null ? void 0 : h.bind(i.api);
    if (!s) return [];
    try {
      const v = { source: t, per_page: a };
      e.length && (v.source_value = e);
      const u = await s(v);
      return (Array.isArray(u == null ? void 0 : u.data) ? u.data : Array.isArray(u) ? u : ((b = u == null ? void 0 : u.data) == null ? void 0 : b.products) ?? []).map(H).filter((_) => _.name).slice(0, a);
    } catch {
      return [];
    }
  })()), w.get(r);
}
async function tt(t, e = "best_selling", a = 12) {
  const r = Q(t);
  if (r.length) return { items: (await Z(r)).slice(0, a), auto: !1 };
  let i = await R(e, [], a);
  return !i.length && e !== "latest" && (i = await R("latest", [], a)), { items: i, auto: !0 };
}
const L = (t) => {
  var e, a;
  try {
    const r = (a = (e = g()) == null ? void 0 : e.money) == null ? void 0 : a.call(e, t);
    if (r) return String(r);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${l("ر.س", "SAR")}`;
};
async function et(t, e = 1, a) {
  var r, i, s;
  await S();
  try {
    return await ((s = (i = (r = g()) == null ? void 0 : r.cart) == null ? void 0 : i.addItem) == null ? void 0 : s.call(i, a ? { id: t, quantity: e, notes: a } : { id: t, quantity: e })), !0;
  } catch {
    return !1;
  }
}
function J(t, e = !0) {
  var a, r, i;
  try {
    (i = e ? (a = g()) == null ? void 0 : a.success : (r = g()) == null ? void 0 : r.error) == null || i(t);
  } catch {
  }
}
const at = (t, e) => {
  var a, r, i;
  try {
    (i = (r = (a = g()) == null ? void 0 : a.event) == null ? void 0 : r.on) == null || i.call(r, t, e);
  } catch {
  }
}, A = "tw_smart_mem_v1", M = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function E() {
  try {
    return { ...M(), ...JSON.parse(localStorage.getItem(A) || "{}") };
  } catch {
    return M();
  }
}
function rt(t) {
  try {
    localStorage.setItem(A, JSON.stringify(t));
  } catch {
  }
}
function N(t) {
  const e = E();
  return t(e), rt(e), e;
}
function it() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(A), sessionStorage.setItem(A, "1");
  } catch {
  }
  return t ? N((e) => {
    e.visits += 1, e.last = Date.now();
  }) : E();
}
const G = (t, e = 1) => N((a) => {
  a.seen[t.id] = (a.seen[t.id] || 0) + e, a.prices = [...a.prices.slice(-29), t.price], t.category && (a.tags[t.category] = (a.tags[t.category] || 0) + e);
});
let O = !1;
function nt() {
  O || (O = !0, at("cart::item.added", (t) => {
    var a;
    const e = Number(((a = t == null ? void 0 : t.data) == null ? void 0 : a.product_id) ?? 0);
    e && N((r) => {
      r.carted.includes(e) || (r.carted = [...r.carted.slice(-40), e]);
    });
  }));
}
const st = () => {
  const t = innerWidth, e = navigator.userAgent;
  return /iPad|Tablet/i.test(e) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(e) || t < 700 ? "mobile" : "desktop";
}, ot = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
};
var ct = Object.defineProperty, lt = (t, e, a, r) => {
  for (var i = void 0, s = t.length - 1, n; s >= 0; s--)
    (n = t[s]) && (i = n(e, a, i) || i);
  return i && ct(e, a, i), i;
};
const dt = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, P = /* @__PURE__ */ new Set();
function ut(t) {
  const e = dt[t];
  if (!e || P.has(e)) return e;
  P.add(e);
  const a = document.createElement("link");
  return a.rel = "stylesheet", a.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;500;700;800&display=swap`, document.head.appendChild(a), e;
}
const gt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, ht = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], I = class I extends U {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), nt(), it();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((e) => {
      var a;
      e.some((r) => r.isIntersecting) && (this.setAttribute("in", ""), (a = this.io) == null || a.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.io) == null || e.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const e = this.c, a = Date.now(), r = Date.parse(String(e.s_from || "")), i = Date.parse(String(e.s_to || ""));
    if (Number.isFinite(r) && a < r || Number.isFinite(i) && a > i) return !0;
    const s = st();
    return !!(f(e.s_hide_mobile) && s === "mobile" || f(e.s_hide_desktop) && s !== "mobile");
  }
  vars(e = "") {
    const a = this.c, r = [], i = (n, c) => {
      c !== "" && c != null && r.push(`${n}:${c}`);
    };
    i("--a", a.s_accent || ""), i("--a2", a.s_accent2 || ""), i("--bgc", a.s_bg || ""), i("--fgc", a.s_text || ""), i("--cardc", a.s_card || ""), i("--r", `${d(a.s_radius, 22)}px`), i("--gap", `${d(a.s_gap, 18)}px`), i("--ts", `${d(a.s_title_size, 38)}px`), i("--fs", `${d(a.s_text_size, 16)}px`), i("--pt", `${d(a.s_pad_top, 56)}px`), i("--pb", `${d(a.s_pad_bottom, 56)}px`), i("--maxw", gt[p(a.s_width, "normal")] ?? "1240px"), i("--sh", ht[Math.max(0, Math.min(5, d(a.s_shadow, 2)))]), i("--ms", `${d(a.s_anim_ms, 700)}ms`), i("--ov", String(d(a.s_overlay, 45) / 100)), a.s_bg_image && i("--bgimg", `url("${String(a.s_bg_image)}")`);
    const s = ut(p(a.s_font, "inherit"));
    return s && i("font-family", `'${s}', inherit`), r.join(";") + (e ? ";" + e : "");
  }
  cls() {
    const e = this.c;
    return [
      "sec",
      `th-${p(e.s_theme, "auto")}`,
      `al-${p(e.s_align, "start")}`,
      `an-${p(e.s_anim, "rise")}`,
      `pt-${p(e.s_pattern, "none")}`,
      `bs-${p(e.s_btn_style, "pill")}`,
      f(e.s_border) ? "bordered" : "",
      f(e.s_stagger, !0) ? "stagger" : "",
      e.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(e, a = {}, r = "", i = "", s = !0) {
    if (this.hiddenNow()) return q;
    const n = this.c, c = y(n.eyebrow, a.eyebrow ?? ""), h = y(n.title, a.title ?? ""), b = y(n.subtitle, a.sub ?? ""), v = s && f(n.s_show_head, !0) && (c || h || b);
    return o`<section class="${this.cls()} ${r}" style=${this.vars(i)} id=${String(n.s_anchor || "") || q}>
      <div class="wrap">${v ? o`<header class="head">${c ? o`<span class="eyebrow">${c}</span>` : ""}${h ? o`<h2 class="title">${h}</h2>` : ""}${b ? o`<p class="sub">${b}</p>` : ""}</header>` : ""}
      ${e}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(e) {
    const a = e.filter(Boolean);
    return !a.length || !ot() || !f(this.c.s_hints, !0) ? "" : o`<aside class="hints" role="note"><b>💡 ${l("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${a.map((r) => o`<li>${r}</li>`)}</ul></aside>`;
  }
  card(e, a = {}) {
    var r;
    return o`<article class="pc ${e.available ? "" : "oos"}">
      <a class="ph" href=${e.url} @click=${() => G(e)}><img src=${e.image} alt=${e.name} loading="lazy" />${(r = a.badges) != null && r.length ? o`<span class="badges">${a.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${e.url} @click=${() => G(e)}>${e.name}</a>
        <div class="pr"><b>${L(e.price)}</b>${e.regular > e.price ? o`<s>${L(e.regular)}</s>` : ""}</div>
        ${a.rating !== !1 && e.rating > 0 ? o`<div class="rt">★ ${e.rating.toFixed(1)}${e.ratingCount ? o` <small>(${e.ratingCount})</small>` : ""}</div>` : ""}
        ${a.extra ?? ""}
        ${a.quick !== !1 ? o`<button class="btn sm" ?disabled=${!e.available} @click=${() => this.add(e)}>${e.available ? l("أضف للسلة", "Add to cart") : l("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(e, a = 1, r) {
    G(e, 3), await et(e.id, a, r) ? J(l("تمت الإضافة للسلة", "Added to cart")) : location.href = e.url;
  }
};
I.base = T`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
let k = I;
lt([
  Y({ type: Object })
], k.prototype, "config");
var bt = Object.defineProperty, z = (t, e, a, r) => {
  for (var i = void 0, s = t.length - 1, n; s >= 0; s--)
    (n = t[s]) && (i = n(e, a, i) || i);
  return i && bt(e, a, i), i;
};
const F = class F extends k {
  constructor() {
    super(...arguments), this.back = [], this.out = [], this.rest = [], this.asked = [], this.seq = 0;
  }
  willUpdate(e) {
    e.has("config") && this.load();
  }
  async load() {
    const e = ++this.seq, a = this.c, r = (await tt(a.products, p(a.auto_source, "best_selling"), d(a.watch, 24))).items, i = E().avail, s = r.filter((n) => n.available && i[n.id] === !1);
    N((n) => {
      for (const c of r) n.avail[c.id] = c.available;
    }), e === this.seq && (this.back = s, this.out = r.filter((n) => !n.available).slice(0, d(a.limit, 4)), this.rest = f(a.show_available, !1) ? r.filter((n) => n.available && !s.includes(n)).slice(0, d(a.limit, 4)) : []);
  }
  async notify(e) {
    var a, r, i;
    await S();
    try {
      await ((i = (r = (a = g()) == null ? void 0 : a.product) == null ? void 0 : r.availabilitySubscribe) == null ? void 0 : i.call(r, { id: e.id })), this.asked = [...this.asked, e.id], J(l("بنعلمك أول ما يتوفر", "We will let you know when it is back"));
    } catch {
      location.href = e.url;
    }
  }
  render() {
    const e = this.c, a = `--cols:${d(e.cols, 4)};--mcols:${d(e.mcols, 2)}`;
    return !this.back.length && !this.out.length && !this.rest.length ? this.hints([l("لا توجد منتجات نافدة أو راجعة الآن؛ العنصر مخفي عن العملاء.", "Nothing sold out or back right now; hidden from shoppers.")]) || "" : this.shell(
      o`
      ${this.back.length ? o`<div class="sec-t">✅ ${y(e.back_title, l("رجع للمخزون منذ زيارتك الأخيرة", "Back in stock since your last visit"))}</div>
        <div class="grid back" style=${a}>${this.back.map((r) => this.card(r, { badges: [o`<span class="bdg ok">${l("رجع!", "Back!")}</span>`] }))}</div>` : ""}
      ${this.out.length && f(e.show_out, !0) ? o`<div class="sec-t">🔔 ${y(e.out_title, l("نفدت الحين… نعلمك أول ما ترجع", "Sold out, we will tell you when it is back"))}</div>
        <div class="grid" style=${a}>${this.out.map((r) => this.card(r, { quick: !1, extra: o`<button class="btn sm ghost" ?disabled=${this.asked.includes(r.id)} @click=${() => this.notify(r)}>${this.asked.includes(r.id) ? l("تم ✓", "Done ✓") : l("نبّهني عند التوفر", "Notify me")}</button>` }))}</div>` : ""}
      ${this.rest.length ? o`<div class="sec-t">${l("متوفر الآن", "Available now")}</div><div class="grid" style=${a}>${this.rest.map((r) => this.card(r))}</div>` : ""}
      ${f(e.privacy_note, !0) ? o`<p class="note">${l("نتذكر حالة التوفر على جهازك فقط.", "Availability is remembered on your device only.")}</p>` : ""}`,
      { eyebrow: l("رادار التوفر", "Restock radar"), title: "" }
    );
  }
};
F.styles = [k.base, T`
    .sec-t { font-weight: 800; margin: 6px 0 12px; display: flex; gap: 8px; align-items: center; } .sec-t::after { content: ''; flex: 1; height: 1px; background: var(--LINE); }
    .back .pc { outline: 2px solid #16a34a; } .note { font-size: 12px; opacity: .7; }
  `];
let x = F;
z([
  C()
], x.prototype, "back");
z([
  C()
], x.prototype, "out");
z([
  C()
], x.prototype, "rest");
z([
  C()
], x.prototype, "asked");
typeof x < "u" && x.registerSallaComponent("salla-nabd-restock");
export {
  x as default
};
