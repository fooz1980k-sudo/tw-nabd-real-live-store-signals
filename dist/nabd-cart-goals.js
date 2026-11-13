import { LitElement as J, nothing as A, html as u, css as O } from "lit";
import { property as U, state as P } from "lit/decorators.js";
const f = () => window.salla ?? window.Salla, D = async () => {
  var t, r;
  try {
    await ((r = (t = f()) == null ? void 0 : t.onReady) == null ? void 0 : r.call(t));
  } catch {
  }
}, T = () => {
  var t, r, a, i, e;
  try {
    const n = ((r = (t = f()) == null ? void 0 : t.lang) == null ? void 0 : r.locale) ?? ((e = (i = (a = f()) == null ? void 0 : a.config) == null ? void 0 : i.get) == null ? void 0 : e.call(i, "user.language_code"));
    if (typeof n == "string" && n) return n.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, K = () => T() === "en", h = (t, r) => K() ? r : t, w = (t, r = "") => {
  if (t == null) return r;
  if (typeof t == "string") {
    const a = t.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return w(JSON.parse(a), r);
      } catch {
      }
    return a || r;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const a = t, i = a[T()] ?? a.ar ?? a.en ?? Object.values(a).find((e) => typeof e == "string" && e);
    return typeof i == "string" && i.trim() ? i : r;
  }
  return r;
}, v = (t, r = "") => {
  const a = Array.isArray(t) ? t[0] : t, i = typeof a == "object" && a ? a.value : a;
  return i == null || i === "" ? r : String(i);
}, m = (t, r = 0) => {
  const a = Number(t);
  return t === "" || t == null || !Number.isFinite(a) ? r : a;
}, y = (t, r = !1) => t == null || t === "" ? r : t === !0 || t === "true" || t === 1 || t === "1", X = (t) => Array.isArray(t) ? t : [], x = (t) => {
  const r = typeof t == "object" && t ? t.amount : t, a = Number(r);
  return Number.isFinite(a) ? a : 0;
}, Q = (t) => {
  if (!t) return null;
  const r = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(r) && r > Date.now() ? r : null;
};
function Y(t) {
  var c, l, g, b, d, o, p, G, R;
  const r = x(t == null ? void 0 : t.sale_price), a = x((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), i = r && r < a ? r : x(t == null ? void 0 : t.price) || a, e = Math.max(x(t == null ? void 0 : t.regular_price), x(t == null ? void 0 : t.price), i), n = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map((S) => String((S == null ? void 0 : S.url) ?? S ?? "")).filter(Boolean), s = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((c = t == null ? void 0 : t.image) == null ? void 0 : c.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? n[0] ?? ""),
    images: n,
    price: i,
    regular: e,
    discount: e > i ? Math.round((1 - i / e) * 100) : 0,
    rating: x(((l = t == null ? void 0 : t.rating) == null ? void 0 : l.stars) ?? ((g = t == null ? void 0 : t.rating) == null ? void 0 : g.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: x((b = t == null ? void 0 : t.rating) == null ? void 0 : b.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : x(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: s == null || s === "" || !Number.isFinite(Number(s)) ? null : Number(s),
    endsAt: Q((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((d = t == null ? void 0 : t.category) == null ? void 0 : d.name) ?? ((p = (o = t == null ? void 0 : t.categories) == null ? void 0 : o[0]) == null ? void 0 : p.name) ?? ""),
    brand: String(((G = t == null ? void 0 : t.brand) == null ? void 0 : G.name) ?? ""),
    promo: String(((R = t == null ? void 0 : t.promotion) == null ? void 0 : R.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const V = (t) => (Array.isArray(t) ? t : []).map((r) => Number(typeof r == "object" && r ? r.value : r)).filter((r) => Number.isFinite(r) && r > 0), _ = /* @__PURE__ */ new Map();
async function Z(t) {
  var i, e, n;
  const r = (i = f()) == null ? void 0 : i.product;
  if (!r) return null;
  const a = r.getDetails ? r.getDetails.bind(r) : (n = (e = r.api) == null ? void 0 : e.getDetails) == null ? void 0 : n.bind(r.api);
  if (!a) return null;
  try {
    const s = await a(t, ["images", "sold_quantity", "category"]), c = Y((s == null ? void 0 : s.data) ?? s);
    return c.name ? c : null;
  } catch {
    return null;
  }
}
async function tt(t) {
  await D();
  const r = "ids:" + t.join(",");
  return _.has(r) || _.set(r, Promise.all(t.map(Z)).then((a) => a.filter((i) => !!i))), _.get(r);
}
async function B(t, r = [], a = 12) {
  await D();
  const i = `src:${t}:${r.join(",")}:${a}`;
  return _.has(i) || _.set(i, (async () => {
    var s, c, l, g;
    const e = (s = f()) == null ? void 0 : s.product, n = e != null && e.fetch ? e.fetch.bind(e) : (l = (c = e == null ? void 0 : e.api) == null ? void 0 : c.fetch) == null ? void 0 : l.bind(e.api);
    if (!n) return [];
    try {
      const b = { source: t, per_page: a };
      r.length && (b.source_value = r);
      const d = await n(b);
      return (Array.isArray(d == null ? void 0 : d.data) ? d.data : Array.isArray(d) ? d : ((g = d == null ? void 0 : d.data) == null ? void 0 : g.products) ?? []).map(Y).filter((p) => p.name).slice(0, a);
    } catch {
      return [];
    }
  })()), _.get(i);
}
async function rt(t, r = "best_selling", a = 12) {
  const i = V(t);
  if (i.length) return { items: (await tt(i)).slice(0, a), auto: !1 };
  let e = await B(r, [], a);
  return !e.length && r !== "latest" && (e = await B("latest", [], a)), { items: e, auto: !0 };
}
const $ = (t) => {
  var r, a;
  try {
    const i = (a = (r = f()) == null ? void 0 : r.money) == null ? void 0 : a.call(r, t);
    if (i) return String(i);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${h("ر.س", "SAR")}`;
};
async function at(t, r = 1, a) {
  var i, e, n;
  await D();
  try {
    return await ((n = (e = (i = f()) == null ? void 0 : i.cart) == null ? void 0 : e.addItem) == null ? void 0 : n.call(e, a ? { id: t, quantity: r, notes: a } : { id: t, quantity: r })), !0;
  } catch {
    return !1;
  }
}
function et(t, r = !0) {
  var a, i, e;
  try {
    (e = r ? (a = f()) == null ? void 0 : a.success : (i = f()) == null ? void 0 : i.error) == null || e(t);
  } catch {
  }
}
async function it() {
  var t, r, a, i, e, n, s, c;
  await D();
  try {
    const l = await ((s = ((r = (t = f()) == null ? void 0 : t.cart) == null ? void 0 : r.details) ?? ((e = (i = (a = f()) == null ? void 0 : a.cart) == null ? void 0 : i.api) == null ? void 0 : e.details)) == null ? void 0 : s.call((n = f()) == null ? void 0 : n.cart, null)), g = ((c = l == null ? void 0 : l.data) == null ? void 0 : c.cart) ?? (l == null ? void 0 : l.data) ?? l;
    if (!g) return null;
    const b = Array.isArray(g.items) ? g.items : [];
    return { total: x(g.sub_total ?? g.total), count: b.reduce((d, o) => d + x(o.quantity || 1), 0), ids: b.map((d) => Number(d.product_id ?? d.id)) };
  } catch {
    return null;
  }
}
const z = (t, r) => {
  var a, i, e;
  try {
    (e = (i = (a = f()) == null ? void 0 : a.event) == null ? void 0 : i.on) == null || e.call(i, t, r);
  } catch {
  }
}, N = "tw_smart_mem_v1", q = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function W() {
  try {
    return { ...q(), ...JSON.parse(localStorage.getItem(N) || "{}") };
  } catch {
    return q();
  }
}
function nt(t) {
  try {
    localStorage.setItem(N, JSON.stringify(t));
  } catch {
  }
}
function E(t) {
  const r = W();
  return t(r), nt(r), r;
}
function st() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(N), sessionStorage.setItem(N, "1");
  } catch {
  }
  return t ? E((r) => {
    r.visits += 1, r.last = Date.now();
  }) : W();
}
const j = (t, r = 1) => E((a) => {
  a.seen[t.id] = (a.seen[t.id] || 0) + r, a.prices = [...a.prices.slice(-29), t.price], t.category && (a.tags[t.category] = (a.tags[t.category] || 0) + r);
});
let L = !1;
function ot() {
  L || (L = !0, z("cart::item.added", (t) => {
    var a;
    const r = Number(((a = t == null ? void 0 : t.data) == null ? void 0 : a.product_id) ?? 0);
    r && E((i) => {
      i.carted.includes(r) || (i.carted = [...i.carted.slice(-40), r]);
    });
  }));
}
const ct = () => {
  const t = innerWidth, r = navigator.userAgent;
  return /iPad|Tablet/i.test(r) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r) || t < 700 ? "mobile" : "desktop";
}, lt = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
};
var dt = Object.defineProperty, gt = (t, r, a, i) => {
  for (var e = void 0, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (e = s(r, a, e) || e);
  return e && dt(r, a, e), e;
};
const ut = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, M = /* @__PURE__ */ new Set();
function bt(t) {
  const r = ut[t];
  if (!r || M.has(r)) return r;
  M.add(r);
  const a = document.createElement("link");
  return a.rel = "stylesheet", a.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r)}:wght@400;500;700;800&display=swap`, document.head.appendChild(a), r;
}
const ft = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, pt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], I = class I extends J {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), ot(), st();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((r) => {
      var a;
      r.some((i) => i.isIntersecting) && (this.setAttribute("in", ""), (a = this.io) == null || a.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var r;
    super.disconnectedCallback(), (r = this.io) == null || r.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const r = this.c, a = Date.now(), i = Date.parse(String(r.s_from || "")), e = Date.parse(String(r.s_to || ""));
    if (Number.isFinite(i) && a < i || Number.isFinite(e) && a > e) return !0;
    const n = ct();
    return !!(y(r.s_hide_mobile) && n === "mobile" || y(r.s_hide_desktop) && n !== "mobile");
  }
  vars(r = "") {
    const a = this.c, i = [], e = (s, c) => {
      c !== "" && c != null && i.push(`${s}:${c}`);
    };
    e("--a", a.s_accent || ""), e("--a2", a.s_accent2 || ""), e("--bgc", a.s_bg || ""), e("--fgc", a.s_text || ""), e("--cardc", a.s_card || ""), e("--r", `${m(a.s_radius, 22)}px`), e("--gap", `${m(a.s_gap, 18)}px`), e("--ts", `${m(a.s_title_size, 38)}px`), e("--fs", `${m(a.s_text_size, 16)}px`), e("--pt", `${m(a.s_pad_top, 56)}px`), e("--pb", `${m(a.s_pad_bottom, 56)}px`), e("--maxw", ft[v(a.s_width, "normal")] ?? "1240px"), e("--sh", pt[Math.max(0, Math.min(5, m(a.s_shadow, 2)))]), e("--ms", `${m(a.s_anim_ms, 700)}ms`), e("--ov", String(m(a.s_overlay, 45) / 100)), a.s_bg_image && e("--bgimg", `url("${String(a.s_bg_image)}")`);
    const n = bt(v(a.s_font, "inherit"));
    return n && e("font-family", `'${n}', inherit`), i.join(";") + (r ? ";" + r : "");
  }
  cls() {
    const r = this.c;
    return [
      "sec",
      `th-${v(r.s_theme, "auto")}`,
      `al-${v(r.s_align, "start")}`,
      `an-${v(r.s_anim, "rise")}`,
      `pt-${v(r.s_pattern, "none")}`,
      `bs-${v(r.s_btn_style, "pill")}`,
      y(r.s_border) ? "bordered" : "",
      y(r.s_stagger, !0) ? "stagger" : "",
      r.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(r, a = {}, i = "", e = "", n = !0) {
    if (this.hiddenNow()) return A;
    const s = this.c, c = w(s.eyebrow, a.eyebrow ?? ""), l = w(s.title, a.title ?? ""), g = w(s.subtitle, a.sub ?? ""), b = n && y(s.s_show_head, !0) && (c || l || g);
    return u`<section class="${this.cls()} ${i}" style=${this.vars(e)} id=${String(s.s_anchor || "") || A}>
      <div class="wrap">${b ? u`<header class="head">${c ? u`<span class="eyebrow">${c}</span>` : ""}${l ? u`<h2 class="title">${l}</h2>` : ""}${g ? u`<p class="sub">${g}</p>` : ""}</header>` : ""}
      ${r}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(r) {
    const a = r.filter(Boolean);
    return !a.length || !lt() || !y(this.c.s_hints, !0) ? "" : u`<aside class="hints" role="note"><b>💡 ${h("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${a.map((i) => u`<li>${i}</li>`)}</ul></aside>`;
  }
  card(r, a = {}) {
    var i;
    return u`<article class="pc ${r.available ? "" : "oos"}">
      <a class="ph" href=${r.url} @click=${() => j(r)}><img src=${r.image} alt=${r.name} loading="lazy" />${(i = a.badges) != null && i.length ? u`<span class="badges">${a.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r.url} @click=${() => j(r)}>${r.name}</a>
        <div class="pr"><b>${$(r.price)}</b>${r.regular > r.price ? u`<s>${$(r.regular)}</s>` : ""}</div>
        ${a.rating !== !1 && r.rating > 0 ? u`<div class="rt">★ ${r.rating.toFixed(1)}${r.ratingCount ? u` <small>(${r.ratingCount})</small>` : ""}</div>` : ""}
        ${a.extra ?? ""}
        ${a.quick !== !1 ? u`<button class="btn sm" ?disabled=${!r.available} @click=${() => this.add(r)}>${r.available ? h("أضف للسلة", "Add to cart") : h("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(r, a = 1, i) {
    j(r, 3), await at(r.id, a, i) ? et(h("تمت الإضافة للسلة", "Added to cart")) : location.href = r.url;
  }
};
I.base = O`
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
let C = I;
gt([
  U({ type: Object })
], C.prototype, "config");
var ht = Object.defineProperty, H = (t, r, a, i) => {
  for (var e = void 0, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (e = s(r, a, e) || e);
  return e && ht(r, a, e), e;
};
const F = class F extends C {
  constructor() {
    super(...arguments), this.cart = null, this.pool = [];
  }
  connectedCallback() {
    super.connectedCallback();
    const r = () => it().then((a) => this.cart = a);
    r(), z("cart::updated", r), z("cart::item.added", r), z("cart::item.deleted", r);
  }
  willUpdate(r) {
    r.has("config") && y(this.c.suggest, !0) && rt(this.c.products, v(this.c.auto_source, "best_selling"), 30).then((a) => this.pool = a.items.filter((i) => i.available));
  }
  render() {
    var d;
    const r = this.c, a = X(r.goals).map((o) => ({ at: m(o.amount), label: w(o.label), emoji: w(o.emoji, "🎁") })).filter((o) => o.at > 0).sort((o, p) => o.at - p.at);
    if (!a.length) return this.hints([h("أضف أهدافاً مثل «شحن مجاني عند 200».", "Add goals like free shipping at 200.")]) || A;
    const i = ((d = this.cart) == null ? void 0 : d.total) ?? 0;
    if (!i && y(r.hide_empty_cart, !1)) return A;
    const e = a[a.length - 1].at, n = a.find((o) => i < o.at), s = n ? n.at - i : 0, c = n ? this.pool.filter((o) => {
      var p;
      return o.price >= s && !((p = this.cart) != null && p.ids.includes(o.id));
    }).sort((o, p) => o.price - p.price)[0] : null, l = n ? w(r.msg_next, h("باقي {gap} وتحصل على {goal}", "Add {gap} more to get {goal}")).replace("{gap}", $(s)).replace("{goal}", `${n.emoji} ${n.label}`) : w(r.msg_done, h("مبروك! حصلت على كل المكافآت 🎉", "Congrats! You unlocked every reward 🎉")), g = l.split($(s)), b = u`<div class="box">
      <div class="msg">${n && g.length === 2 ? u`${g[0]}<b>${$(s)}</b>${g[1]}` : l}</div>
      <div class="track"><div class="fill" style=${`width:${Math.min(100, i / e * 100)}%`}></div>
        ${a.map((o) => u`<div class="pt ${i >= o.at ? "ok" : ""}" style=${`inset-inline-start:calc(${o.at / e * 100}% - 17px);translate:0 -50%`}><i>${o.emoji}</i><small>${o.label} · ${$(o.at)}</small></div>`)}</div>
      ${c && y(r.suggest, !0) ? u`<div class="gap"><img src=${c.image} alt="" /><div>${w(r.suggest_text, h("يكمّل لك الهدف:", "Closes the gap:"))}<b>${c.name} · ${$(c.price)}</b></div><button class="btn sm" @click=${() => this.add(c)}>${h("أضف", "Add")}</button></div>` : ""}
    </div>`;
    return v(r.position, "inline") === "fixed" ? this.hiddenNow() ? A : u`<div class="${this.cls()} bar-fixed" style=${this.vars()}>${b}</div>` : this.shell(u`<div class="panel">${b}</div>`, { eyebrow: h("نبض سلتك", "Your cart pulse"), title: "" });
  }
};
F.styles = [C.base, O`
    .box { display: grid; gap: 14px; } .msg { font-weight: 800; font-size: 17px; } .msg b { color: var(--A); }
    .track { position: relative; height: 12px; border-radius: 99px; background: var(--LINE); margin: 26px 8px 34px; }
    .fill { position: absolute; inset-block: 0; inset-inline-start: 0; border-radius: 99px; background: linear-gradient(90deg, var(--A), var(--A2)); transition: width 1s cubic-bezier(.2,.7,.2,1); }
    .pt { position: absolute; top: 50%; translate: 50% -50%; display: grid; justify-items: center; inset-inline-end: auto; }
    .pt i { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--CARD); border: 3px solid var(--LINE); font-style: normal; font-size: 16px; transition: all .4s; }
    .pt.ok i { border-color: var(--A); background: var(--A); transform: scale(1.1); } .pt small { position: absolute; top: 40px; white-space: nowrap; font-size: 11px; font-weight: 700; opacity: .8; }
    .gap { display: flex; gap: 12px; align-items: center; padding: 10px; border-radius: 16px; background: color-mix(in srgb, var(--A) 8%, transparent); }
    .gap img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; } .gap div { flex: 1; font-size: 14px; } .gap b { display: block; }
    .bar-fixed { position: fixed; z-index: 60; inset: auto 0 0 0; background: var(--CARD); box-shadow: 0 -10px 30px -12px #0004; padding: 10px 16px 6px; }
    .bar-fixed .track { margin: 18px 8px 28px; }
  `];
let k = F;
H([
  P()
], k.prototype, "cart");
H([
  P()
], k.prototype, "pool");
typeof k < "u" && k.registerSallaComponent("salla-nabd-cart-goals");
export {
  k as default
};
