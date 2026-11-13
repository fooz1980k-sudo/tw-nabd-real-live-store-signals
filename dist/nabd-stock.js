import { LitElement as J, nothing as F, html as c, css as O } from "lit";
import { property as U, state as P } from "lit/decorators.js";
const m = () => window.salla ?? window.Salla, z = async () => {
  var t, r;
  try {
    await ((r = (t = m()) == null ? void 0 : t.onReady) == null ? void 0 : r.call(t));
  } catch {
  }
}, T = () => {
  var t, r, e, n, a;
  try {
    const i = ((r = (t = m()) == null ? void 0 : t.lang) == null ? void 0 : r.locale) ?? ((a = (n = (e = m()) == null ? void 0 : e.config) == null ? void 0 : n.get) == null ? void 0 : a.call(n, "user.language_code"));
    if (typeof i == "string" && i) return i.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, Y = () => T() === "en", u = (t, r) => Y() ? r : t, x = (t, r = "") => {
  if (t == null) return r;
  if (typeof t == "string") {
    const e = t.trim();
    if (e.startsWith("{") && e.endsWith("}"))
      try {
        return x(JSON.parse(e), r);
      } catch {
      }
    return e || r;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const e = t, n = e[T()] ?? e.ar ?? e.en ?? Object.values(e).find((a) => typeof a == "string" && a);
    return typeof n == "string" && n.trim() ? n : r;
  }
  return r;
}, h = (t, r = "") => {
  const e = Array.isArray(t) ? t[0] : t, n = typeof e == "object" && e ? e.value : e;
  return n == null || n === "" ? r : String(n);
}, l = (t, r = 0) => {
  const e = Number(t);
  return t === "" || t == null || !Number.isFinite(e) ? r : e;
}, d = (t, r = !1) => t == null || t === "" ? r : t === !0 || t === "true" || t === 1 || t === "1", p = (t) => {
  const r = typeof t == "object" && t ? t.amount : t, e = Number(r);
  return Number.isFinite(e) ? e : 0;
}, K = (t) => {
  if (!t) return null;
  const r = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(r) && r > Date.now() ? r : null;
};
function W(t) {
  var o, f, b, y, g, C, $, G, E;
  const r = p(t == null ? void 0 : t.sale_price), e = p((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), n = r && r < e ? r : p(t == null ? void 0 : t.price) || e, a = Math.max(p(t == null ? void 0 : t.regular_price), p(t == null ? void 0 : t.price), n), i = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map((A) => String((A == null ? void 0 : A.url) ?? A ?? "")).filter(Boolean), s = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((o = t == null ? void 0 : t.image) == null ? void 0 : o.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? i[0] ?? ""),
    images: i,
    price: n,
    regular: a,
    discount: a > n ? Math.round((1 - n / a) * 100) : 0,
    rating: p(((f = t == null ? void 0 : t.rating) == null ? void 0 : f.stars) ?? ((b = t == null ? void 0 : t.rating) == null ? void 0 : b.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: p((y = t == null ? void 0 : t.rating) == null ? void 0 : y.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : p(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: s == null || s === "" || !Number.isFinite(Number(s)) ? null : Number(s),
    endsAt: K((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((g = t == null ? void 0 : t.category) == null ? void 0 : g.name) ?? (($ = (C = t == null ? void 0 : t.categories) == null ? void 0 : C[0]) == null ? void 0 : $.name) ?? ""),
    brand: String(((G = t == null ? void 0 : t.brand) == null ? void 0 : G.name) ?? ""),
    promo: String(((E = t == null ? void 0 : t.promotion) == null ? void 0 : E.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const X = (t) => (Array.isArray(t) ? t : []).map((r) => Number(typeof r == "object" && r ? r.value : r)).filter((r) => Number.isFinite(r) && r > 0), v = /* @__PURE__ */ new Map();
async function Q(t) {
  var n, a, i;
  const r = (n = m()) == null ? void 0 : n.product;
  if (!r) return null;
  const e = r.getDetails ? r.getDetails.bind(r) : (i = (a = r.api) == null ? void 0 : a.getDetails) == null ? void 0 : i.bind(r.api);
  if (!e) return null;
  try {
    const s = await e(t, ["images", "sold_quantity", "category"]), o = W((s == null ? void 0 : s.data) ?? s);
    return o.name ? o : null;
  } catch {
    return null;
  }
}
async function V(t) {
  await z();
  const r = "ids:" + t.join(",");
  return v.has(r) || v.set(r, Promise.all(t.map(Q)).then((e) => e.filter((n) => !!n))), v.get(r);
}
async function M(t, r = [], e = 12) {
  await z();
  const n = `src:${t}:${r.join(",")}:${e}`;
  return v.has(n) || v.set(n, (async () => {
    var s, o, f, b;
    const a = (s = m()) == null ? void 0 : s.product, i = a != null && a.fetch ? a.fetch.bind(a) : (f = (o = a == null ? void 0 : a.api) == null ? void 0 : o.fetch) == null ? void 0 : f.bind(a.api);
    if (!i) return [];
    try {
      const y = { source: t, per_page: e };
      r.length && (y.source_value = r);
      const g = await i(y);
      return (Array.isArray(g == null ? void 0 : g.data) ? g.data : Array.isArray(g) ? g : ((b = g == null ? void 0 : g.data) == null ? void 0 : b.products) ?? []).map(W).filter(($) => $.name).slice(0, e);
    } catch {
      return [];
    }
  })()), v.get(n);
}
async function Z(t, r = "best_selling", e = 12) {
  const n = X(t);
  if (n.length) return { items: (await V(n)).slice(0, e), auto: !1 };
  let a = await M(r, [], e);
  return !a.length && r !== "latest" && (a = await M("latest", [], e)), { items: a, auto: !0 };
}
const j = (t) => {
  var r, e;
  try {
    const n = (e = (r = m()) == null ? void 0 : r.money) == null ? void 0 : e.call(r, t);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${u("ر.س", "SAR")}`;
};
async function tt(t, r = 1, e) {
  var n, a, i;
  await z();
  try {
    return await ((i = (a = (n = m()) == null ? void 0 : n.cart) == null ? void 0 : a.addItem) == null ? void 0 : i.call(a, e ? { id: t, quantity: r, notes: e } : { id: t, quantity: r })), !0;
  } catch {
    return !1;
  }
}
function rt(t, r = !0) {
  var e, n, a;
  try {
    (a = r ? (e = m()) == null ? void 0 : e.success : (n = m()) == null ? void 0 : n.error) == null || a(t);
  } catch {
  }
}
const et = (t, r) => {
  var e, n, a;
  try {
    (a = (n = (e = m()) == null ? void 0 : e.event) == null ? void 0 : n.on) == null || a.call(n, t, r);
  } catch {
  }
}, S = "tw_smart_mem_v1", B = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function k() {
  try {
    return { ...B(), ...JSON.parse(localStorage.getItem(S) || "{}") };
  } catch {
    return B();
  }
}
function at(t) {
  try {
    localStorage.setItem(S, JSON.stringify(t));
  } catch {
  }
}
function N(t) {
  const r = k();
  return t(r), at(r), r;
}
function nt() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(S), sessionStorage.setItem(S, "1");
  } catch {
  }
  return t ? N((r) => {
    r.visits += 1, r.last = Date.now();
  }) : k();
}
const q = (t, r = 1) => N((e) => {
  e.seen[t.id] = (e.seen[t.id] || 0) + r, e.prices = [...e.prices.slice(-29), t.price], t.category && (e.tags[t.category] = (e.tags[t.category] || 0) + r);
});
function it() {
  const t = [...k().prices].sort((r, e) => r - e);
  return t.length >= 3 ? t[Math.floor(t.length / 2)] : 0;
}
function st(t, r = k()) {
  let e = (r.seen[t.id] || 0) * 2 + (r.carted.includes(t.id) ? 4 : 0) + (t.category && r.tags[t.category] || 0);
  const n = it();
  return n && (e += Math.max(0, 2 - Math.abs(t.price - n) / n * 2)), e;
}
const ot = (t, r = !0) => {
  if (!r) return t;
  const e = k();
  return t.map((n, a) => ({ p: n, i: a, s: st(n, e) })).sort((n, a) => a.s - n.s || n.i - a.i).map((n) => n.p);
};
let R = !1;
function ct() {
  R || (R = !0, et("cart::item.added", (t) => {
    var e;
    const r = Number(((e = t == null ? void 0 : t.data) == null ? void 0 : e.product_id) ?? 0);
    r && N((n) => {
      n.carted.includes(r) || (n.carted = [...n.carted.slice(-40), r]);
    });
  }));
}
const lt = () => {
  const t = innerWidth, r = navigator.userAgent;
  return /iPad|Tablet/i.test(r) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r) || t < 700 ? "mobile" : "desktop";
}, dt = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
};
var ut = Object.defineProperty, gt = (t, r, e, n) => {
  for (var a = void 0, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (a = s(r, e, a) || a);
  return a && ut(r, e, a), a;
};
const ft = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, L = /* @__PURE__ */ new Set();
function ht(t) {
  const r = ft[t];
  if (!r || L.has(r)) return r;
  L.add(r);
  const e = document.createElement("link");
  return e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e), r;
}
const mt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, bt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], D = class D extends J {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), ct(), nt();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((r) => {
      var e;
      r.some((n) => n.isIntersecting) && (this.setAttribute("in", ""), (e = this.io) == null || e.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var r;
    super.disconnectedCallback(), (r = this.io) == null || r.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const r = this.c, e = Date.now(), n = Date.parse(String(r.s_from || "")), a = Date.parse(String(r.s_to || ""));
    if (Number.isFinite(n) && e < n || Number.isFinite(a) && e > a) return !0;
    const i = lt();
    return !!(d(r.s_hide_mobile) && i === "mobile" || d(r.s_hide_desktop) && i !== "mobile");
  }
  vars(r = "") {
    const e = this.c, n = [], a = (s, o) => {
      o !== "" && o != null && n.push(`${s}:${o}`);
    };
    a("--a", e.s_accent || ""), a("--a2", e.s_accent2 || ""), a("--bgc", e.s_bg || ""), a("--fgc", e.s_text || ""), a("--cardc", e.s_card || ""), a("--r", `${l(e.s_radius, 22)}px`), a("--gap", `${l(e.s_gap, 18)}px`), a("--ts", `${l(e.s_title_size, 38)}px`), a("--fs", `${l(e.s_text_size, 16)}px`), a("--pt", `${l(e.s_pad_top, 56)}px`), a("--pb", `${l(e.s_pad_bottom, 56)}px`), a("--maxw", mt[h(e.s_width, "normal")] ?? "1240px"), a("--sh", bt[Math.max(0, Math.min(5, l(e.s_shadow, 2)))]), a("--ms", `${l(e.s_anim_ms, 700)}ms`), a("--ov", String(l(e.s_overlay, 45) / 100)), e.s_bg_image && a("--bgimg", `url("${String(e.s_bg_image)}")`);
    const i = ht(h(e.s_font, "inherit"));
    return i && a("font-family", `'${i}', inherit`), n.join(";") + (r ? ";" + r : "");
  }
  cls() {
    const r = this.c;
    return [
      "sec",
      `th-${h(r.s_theme, "auto")}`,
      `al-${h(r.s_align, "start")}`,
      `an-${h(r.s_anim, "rise")}`,
      `pt-${h(r.s_pattern, "none")}`,
      `bs-${h(r.s_btn_style, "pill")}`,
      d(r.s_border) ? "bordered" : "",
      d(r.s_stagger, !0) ? "stagger" : "",
      r.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(r, e = {}, n = "", a = "", i = !0) {
    if (this.hiddenNow()) return F;
    const s = this.c, o = x(s.eyebrow, e.eyebrow ?? ""), f = x(s.title, e.title ?? ""), b = x(s.subtitle, e.sub ?? ""), y = i && d(s.s_show_head, !0) && (o || f || b);
    return c`<section class="${this.cls()} ${n}" style=${this.vars(a)} id=${String(s.s_anchor || "") || F}>
      <div class="wrap">${y ? c`<header class="head">${o ? c`<span class="eyebrow">${o}</span>` : ""}${f ? c`<h2 class="title">${f}</h2>` : ""}${b ? c`<p class="sub">${b}</p>` : ""}</header>` : ""}
      ${r}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(r) {
    const e = r.filter(Boolean);
    return !e.length || !dt() || !d(this.c.s_hints, !0) ? "" : c`<aside class="hints" role="note"><b>💡 ${u("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${e.map((n) => c`<li>${n}</li>`)}</ul></aside>`;
  }
  card(r, e = {}) {
    var n;
    return c`<article class="pc ${r.available ? "" : "oos"}">
      <a class="ph" href=${r.url} @click=${() => q(r)}><img src=${r.image} alt=${r.name} loading="lazy" />${(n = e.badges) != null && n.length ? c`<span class="badges">${e.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r.url} @click=${() => q(r)}>${r.name}</a>
        <div class="pr"><b>${j(r.price)}</b>${r.regular > r.price ? c`<s>${j(r.regular)}</s>` : ""}</div>
        ${e.rating !== !1 && r.rating > 0 ? c`<div class="rt">★ ${r.rating.toFixed(1)}${r.ratingCount ? c` <small>(${r.ratingCount})</small>` : ""}</div>` : ""}
        ${e.extra ?? ""}
        ${e.quick !== !1 ? c`<button class="btn sm" ?disabled=${!r.available} @click=${() => this.add(r)}>${r.available ? u("أضف للسلة", "Add to cart") : u("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(r, e = 1, n) {
    q(r, 3), await tt(r.id, e, n) ? rt(u("تمت الإضافة للسلة", "Added to cart")) : location.href = r.url;
  }
};
D.base = O`
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
let _ = D;
gt([
  U({ type: Object })
], _.prototype, "config");
var pt = Object.defineProperty, H = (t, r, e, n) => {
  for (var a = void 0, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (a = s(r, e, a) || a);
  return a && pt(r, e, a), a;
};
const I = class I extends _ {
  constructor() {
    super(...arguments), this.items = null, this.auto = !1, this.seq = 0;
  }
  willUpdate(r) {
    r.has("config") && this.load();
  }
  async load() {
    const r = ++this.seq, e = this.c, n = await Z(e.products, h(e.auto_source, "best_selling"), Math.max(24, l(e.limit, 8) * 2));
    let a = n.items.filter((s) => (d(e.hide_oos, !0) ? s.available : !0) && (d(e.only_tracked, !1) ? s.qty != null : !0));
    d(e.only_low, !1) && (a = a.filter((s) => s.qty != null && s.qty <= l(e.low, 5))), h(e.sort, "scarce") === "scarce" ? a = a.sort((s, o) => (s.qty ?? 1e9) - (o.qty ?? 1e9)) : a = ot(a, d(e.personalize, !0)), r === this.seq && (this.items = a.slice(0, l(e.limit, 8)), this.auto = n.auto);
  }
  meter(r) {
    const e = this.c, n = l(e.low, 5), a = l(e.full_at, 30);
    if (r.qty == null) return d(e.show_unlimited, !0) ? c`<div class="meter" style="--mc:#16a34a;--w:100%"><div class="tr"><i></i></div><span>${x(e.text_plenty, u("متوفر", "In stock"))}</span></div>` : "";
    if (!r.available || r.qty <= 0) return c`<div class="meter" style="--mc:#9ca3af;--w:0%"><div class="tr"><i></i></div><span>${u("نفدت الكمية", "Sold out")}</span></div>`;
    const i = r.qty <= n ? "low" : r.qty <= n * 3 ? "mid" : "ok", s = String(i === "low" ? e.color_low || "#dc2626" : i === "mid" ? e.color_mid || "#d97706" : e.color_ok || "#16a34a"), o = i === "low" ? x(e.text_low, u("باقي {n} فقط", "Only {n} left")) : i === "mid" ? x(e.text_mid, u("الكمية محدودة: {n}", "Limited: {n} left")) : x(e.text_ok, u("متوفر ({n})", "In stock ({n})")), f = d(e.show_number, !0) || i === "low";
    return c`<div class="meter" style=${`--mc:${s};--w:${Math.max(4, Math.min(100, r.qty / a * 100))}%`}><div class="tr"><i></i></div>
      <span>${i === "low" && d(e.pulse, !0) ? c`<b class="pulse"></b>` : ""}${f ? o.replace("{n}", String(r.qty)) : o.replace(/\s*\(?\{n\}\)?/, "")}</span>
      ${d(e.show_sold, !0) && r.sold != null && r.sold >= l(e.sold_min, 10) ? c`<span class="sold" style="color:inherit">${u(`بيع منه ${r.sold}`, `${r.sold} sold`)}</span>` : ""}</div>`;
  }
  render() {
    const r = this.c, e = this.items;
    return this.shell(
      c`${this.hints([
        this.auto && u("يعرض تلقائياً من متجرك. الأرقام هي المخزون الفعلي من سلة؛ المنتجات غير محدودة الكمية تظهر «متوفر» فقط.", "Auto from your store; numbers are your real Salla stock."),
        e && !e.some((n) => n.qty != null) && u("لا يوجد منتج بكمية محددة؛ فعّل تتبع الكمية في سلة ليظهر العدّاد.", "No product tracks quantity; enable stock tracking in Salla.")
      ])}
      ${e == null ? c`<div class="skel"></div>` : c`<div class=${h(r.layout, "grid") === "rail" ? "rail" : "grid"} style=${`--cols:${l(r.cols, 4)};--mcols:${l(r.mcols, 2)}`}>${e.map((n) => this.card(n, { extra: this.meter(n), quick: d(r.quick_add, !0), rating: d(r.show_rating, !1) }))}</div>`}`,
      { eyebrow: u("المخزون الآن", "Live stock"), title: u("الكميات الحقيقية… قبل لا تخلص", "Real quantities, before they run out") }
    );
  }
};
I.styles = [_.base, O`
    .meter { display: grid; gap: 6px; } .meter .tr { height: 8px; border-radius: 9px; background: var(--LINE); overflow: hidden; }
    .meter i { display: block; height: 100%; border-radius: 9px; background: var(--mc, #16a34a); transition: width 1.2s cubic-bezier(.2,.7,.2,1); width: 0; }
    :host([in]) .meter i { width: var(--w); }
    .meter span { font-size: 13px; font-weight: 700; color: var(--mc); display: flex; gap: 6px; align-items: center; }
    .pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--mc); animation: p 1.4s infinite; } @keyframes p { 0% { box-shadow: 0 0 0 0 var(--mc); } 100% { box-shadow: 0 0 0 10px transparent; } }
    .sold { font-size: 12px; opacity: .7; }
  `];
let w = I;
H([
  P()
], w.prototype, "items");
H([
  P()
], w.prototype, "auto");
typeof w < "u" && w.registerSallaComponent("salla-nabd-stock");
export {
  w as default
};
