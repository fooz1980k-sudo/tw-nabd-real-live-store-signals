import { LitElement as J, nothing as q, html as c, css as O } from "lit";
import { property as U, state as Y } from "lit/decorators.js";
const b = () => window.salla ?? window.Salla, G = async () => {
  var t, r;
  try {
    await ((r = (t = b()) == null ? void 0 : t.onReady) == null ? void 0 : r.call(t));
  } catch {
  }
}, P = () => {
  var t, r, e, i, a;
  try {
    const n = ((r = (t = b()) == null ? void 0 : t.lang) == null ? void 0 : r.locale) ?? ((a = (i = (e = b()) == null ? void 0 : e.config) == null ? void 0 : i.get) == null ? void 0 : a.call(i, "user.language_code"));
    if (typeof n == "string" && n) return n.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, K = () => P() === "en", h = (t, r) => K() ? r : t, y = (t, r = "") => {
  if (t == null) return r;
  if (typeof t == "string") {
    const e = t.trim();
    if (e.startsWith("{") && e.endsWith("}"))
      try {
        return y(JSON.parse(e), r);
      } catch {
      }
    return e || r;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const e = t, i = e[P()] ?? e.ar ?? e.en ?? Object.values(e).find((a) => typeof a == "string" && a);
    return typeof i == "string" && i.trim() ? i : r;
  }
  return r;
}, x = (t, r = "") => {
  const e = Array.isArray(t) ? t[0] : t, i = typeof e == "object" && e ? e.value : e;
  return i == null || i === "" ? r : String(i);
}, g = (t, r = 0) => {
  const e = Number(t);
  return t === "" || t == null || !Number.isFinite(e) ? r : e;
}, u = (t, r = !1) => t == null || t === "" ? r : t === !0 || t === "true" || t === 1 || t === "1", m = (t) => {
  const r = typeof t == "object" && t ? t.amount : t, e = Number(r);
  return Number.isFinite(e) ? e : 0;
}, X = (t) => {
  if (!t) return null;
  const r = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(r) && r > Date.now() ? r : null;
};
function T(t) {
  var o, l, f, p, d, S, k, R, F;
  const r = m(t == null ? void 0 : t.sale_price), e = m((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), i = r && r < e ? r : m(t == null ? void 0 : t.price) || e, a = Math.max(m(t == null ? void 0 : t.regular_price), m(t == null ? void 0 : t.price), i), n = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map((A) => String((A == null ? void 0 : A.url) ?? A ?? "")).filter(Boolean), s = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((o = t == null ? void 0 : t.image) == null ? void 0 : o.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? n[0] ?? ""),
    images: n,
    price: i,
    regular: a,
    discount: a > i ? Math.round((1 - i / a) * 100) : 0,
    rating: m(((l = t == null ? void 0 : t.rating) == null ? void 0 : l.stars) ?? ((f = t == null ? void 0 : t.rating) == null ? void 0 : f.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: m((p = t == null ? void 0 : t.rating) == null ? void 0 : p.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : m(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: s == null || s === "" || !Number.isFinite(Number(s)) ? null : Number(s),
    endsAt: X((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((d = t == null ? void 0 : t.category) == null ? void 0 : d.name) ?? ((k = (S = t == null ? void 0 : t.categories) == null ? void 0 : S[0]) == null ? void 0 : k.name) ?? ""),
    brand: String(((R = t == null ? void 0 : t.brand) == null ? void 0 : R.name) ?? ""),
    promo: String(((F = t == null ? void 0 : t.promotion) == null ? void 0 : F.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const N = (t) => (Array.isArray(t) ? t : []).map((r) => Number(typeof r == "object" && r ? r.value : r)).filter((r) => Number.isFinite(r) && r > 0), v = /* @__PURE__ */ new Map();
async function Q(t) {
  var i, a, n;
  const r = (i = b()) == null ? void 0 : i.product;
  if (!r) return null;
  const e = r.getDetails ? r.getDetails.bind(r) : (n = (a = r.api) == null ? void 0 : a.getDetails) == null ? void 0 : n.bind(r.api);
  if (!e) return null;
  try {
    const s = await e(t, ["images", "sold_quantity", "category"]), o = T((s == null ? void 0 : s.data) ?? s);
    return o.name ? o : null;
  } catch {
    return null;
  }
}
async function W(t) {
  await G();
  const r = "ids:" + t.join(",");
  return v.has(r) || v.set(r, Promise.all(t.map(Q)).then((e) => e.filter((i) => !!i))), v.get(r);
}
async function D(t, r = [], e = 12) {
  await G();
  const i = `src:${t}:${r.join(",")}:${e}`;
  return v.has(i) || v.set(i, (async () => {
    var s, o, l, f;
    const a = (s = b()) == null ? void 0 : s.product, n = a != null && a.fetch ? a.fetch.bind(a) : (l = (o = a == null ? void 0 : a.api) == null ? void 0 : o.fetch) == null ? void 0 : l.bind(a.api);
    if (!n) return [];
    try {
      const p = { source: t, per_page: e };
      r.length && (p.source_value = r);
      const d = await n(p);
      return (Array.isArray(d == null ? void 0 : d.data) ? d.data : Array.isArray(d) ? d : ((f = d == null ? void 0 : d.data) == null ? void 0 : f.products) ?? []).map(T).filter((k) => k.name).slice(0, e);
    } catch {
      return [];
    }
  })()), v.get(i);
}
async function V(t, r = "best_selling", e = 12) {
  const i = N(t);
  if (i.length) return { items: (await W(i)).slice(0, e), auto: !1 };
  let a = await D(r, [], e);
  return !a.length && r !== "latest" && (a = await D("latest", [], e)), { items: a, auto: !0 };
}
const w = (t) => {
  var r, e;
  try {
    const i = (e = (r = b()) == null ? void 0 : r.money) == null ? void 0 : e.call(r, t);
    if (i) return String(i);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${h("ر.س", "SAR")}`;
};
async function Z(t, r = 1, e) {
  var i, a, n;
  await G();
  try {
    return await ((n = (a = (i = b()) == null ? void 0 : i.cart) == null ? void 0 : a.addItem) == null ? void 0 : n.call(a, e ? { id: t, quantity: r, notes: e } : { id: t, quantity: r })), !0;
  } catch {
    return !1;
  }
}
function tt(t, r = !0) {
  var e, i, a;
  try {
    (a = r ? (e = b()) == null ? void 0 : e.success : (i = b()) == null ? void 0 : i.error) == null || a(t);
  } catch {
  }
}
const rt = (t, r) => {
  var e, i, a;
  try {
    (a = (i = (e = b()) == null ? void 0 : e.event) == null ? void 0 : i.on) == null || a.call(i, t, r);
  } catch {
  }
}, C = "tw_smart_mem_v1", B = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function H() {
  try {
    return { ...B(), ...JSON.parse(localStorage.getItem(C) || "{}") };
  } catch {
    return B();
  }
}
function et(t) {
  try {
    localStorage.setItem(C, JSON.stringify(t));
  } catch {
  }
}
function j(t) {
  const r = H();
  return t(r), et(r), r;
}
function at() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(C), sessionStorage.setItem(C, "1");
  } catch {
  }
  return t ? j((r) => {
    r.visits += 1, r.last = Date.now();
  }) : H();
}
const z = (t, r = 1) => j((e) => {
  e.seen[t.id] = (e.seen[t.id] || 0) + r, e.prices = [...e.prices.slice(-29), t.price], t.category && (e.tags[t.category] = (e.tags[t.category] || 0) + r);
});
let M = !1;
function it() {
  M || (M = !0, rt("cart::item.added", (t) => {
    var e;
    const r = Number(((e = t == null ? void 0 : t.data) == null ? void 0 : e.product_id) ?? 0);
    r && j((i) => {
      i.carted.includes(r) || (i.carted = [...i.carted.slice(-40), r]);
    });
  }));
}
const nt = () => {
  const t = innerWidth, r = navigator.userAgent;
  return /iPad|Tablet/i.test(r) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r) || t < 700 ? "mobile" : "desktop";
}, ot = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
};
var st = Object.defineProperty, ct = (t, r, e, i) => {
  for (var a = void 0, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (a = s(r, e, a) || a);
  return a && st(r, e, a), a;
};
const lt = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, L = /* @__PURE__ */ new Set();
function dt(t) {
  const r = lt[t];
  if (!r || L.has(r)) return r;
  L.add(r);
  const e = document.createElement("link");
  return e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e), r;
}
const gt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, ut = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], E = class E extends J {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), it(), at();
  }
  firstUpdated() {
    if (!("IntersectionObserver" in window)) {
      this.setAttribute("in", "");
      return;
    }
    this.io = new IntersectionObserver((r) => {
      var e;
      r.some((i) => i.isIntersecting) && (this.setAttribute("in", ""), (e = this.io) == null || e.disconnect());
    }, { threshold: 0.12 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var r;
    super.disconnectedCallback(), (r = this.io) == null || r.disconnect();
  }
  /** Hidden by the merchant's schedule or device rule? */
  hiddenNow() {
    const r = this.c, e = Date.now(), i = Date.parse(String(r.s_from || "")), a = Date.parse(String(r.s_to || ""));
    if (Number.isFinite(i) && e < i || Number.isFinite(a) && e > a) return !0;
    const n = nt();
    return !!(u(r.s_hide_mobile) && n === "mobile" || u(r.s_hide_desktop) && n !== "mobile");
  }
  vars(r = "") {
    const e = this.c, i = [], a = (s, o) => {
      o !== "" && o != null && i.push(`${s}:${o}`);
    };
    a("--a", e.s_accent || ""), a("--a2", e.s_accent2 || ""), a("--bgc", e.s_bg || ""), a("--fgc", e.s_text || ""), a("--cardc", e.s_card || ""), a("--r", `${g(e.s_radius, 22)}px`), a("--gap", `${g(e.s_gap, 18)}px`), a("--ts", `${g(e.s_title_size, 38)}px`), a("--fs", `${g(e.s_text_size, 16)}px`), a("--pt", `${g(e.s_pad_top, 56)}px`), a("--pb", `${g(e.s_pad_bottom, 56)}px`), a("--maxw", gt[x(e.s_width, "normal")] ?? "1240px"), a("--sh", ut[Math.max(0, Math.min(5, g(e.s_shadow, 2)))]), a("--ms", `${g(e.s_anim_ms, 700)}ms`), a("--ov", String(g(e.s_overlay, 45) / 100)), e.s_bg_image && a("--bgimg", `url("${String(e.s_bg_image)}")`);
    const n = dt(x(e.s_font, "inherit"));
    return n && a("font-family", `'${n}', inherit`), i.join(";") + (r ? ";" + r : "");
  }
  cls() {
    const r = this.c;
    return [
      "sec",
      `th-${x(r.s_theme, "auto")}`,
      `al-${x(r.s_align, "start")}`,
      `an-${x(r.s_anim, "rise")}`,
      `pt-${x(r.s_pattern, "none")}`,
      `bs-${x(r.s_btn_style, "pill")}`,
      u(r.s_border) ? "bordered" : "",
      u(r.s_stagger, !0) ? "stagger" : "",
      r.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(r, e = {}, i = "", a = "", n = !0) {
    if (this.hiddenNow()) return q;
    const s = this.c, o = y(s.eyebrow, e.eyebrow ?? ""), l = y(s.title, e.title ?? ""), f = y(s.subtitle, e.sub ?? ""), p = n && u(s.s_show_head, !0) && (o || l || f);
    return c`<section class="${this.cls()} ${i}" style=${this.vars(a)} id=${String(s.s_anchor || "") || q}>
      <div class="wrap">${p ? c`<header class="head">${o ? c`<span class="eyebrow">${o}</span>` : ""}${l ? c`<h2 class="title">${l}</h2>` : ""}${f ? c`<p class="sub">${f}</p>` : ""}</header>` : ""}
      ${r}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(r) {
    const e = r.filter(Boolean);
    return !e.length || !ot() || !u(this.c.s_hints, !0) ? "" : c`<aside class="hints" role="note"><b>💡 ${h("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${e.map((i) => c`<li>${i}</li>`)}</ul></aside>`;
  }
  card(r, e = {}) {
    var i;
    return c`<article class="pc ${r.available ? "" : "oos"}">
      <a class="ph" href=${r.url} @click=${() => z(r)}><img src=${r.image} alt=${r.name} loading="lazy" />${(i = e.badges) != null && i.length ? c`<span class="badges">${e.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r.url} @click=${() => z(r)}>${r.name}</a>
        <div class="pr"><b>${w(r.price)}</b>${r.regular > r.price ? c`<s>${w(r.regular)}</s>` : ""}</div>
        ${e.rating !== !1 && r.rating > 0 ? c`<div class="rt">★ ${r.rating.toFixed(1)}${r.ratingCount ? c` <small>(${r.ratingCount})</small>` : ""}</div>` : ""}
        ${e.extra ?? ""}
        ${e.quick !== !1 ? c`<button class="btn sm" ?disabled=${!r.available} @click=${() => this.add(r)}>${r.available ? h("أضف للسلة", "Add to cart") : h("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(r, e = 1, i) {
    z(r, 3), await Z(r.id, e, i) ? tt(h("تمت الإضافة للسلة", "Added to cart")) : location.href = r.url;
  }
};
E.base = O`
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
let $ = E;
ct([
  U({ type: Object })
], $.prototype, "config");
var bt = Object.defineProperty, ft = (t, r, e, i) => {
  for (var a = void 0, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (a = s(r, e, a) || a);
  return a && bt(r, e, a), a;
};
const I = class I extends $ {
  constructor() {
    super(...arguments), this.items = null, this.seq = 0;
  }
  willUpdate(r) {
    r.has("config") && this.load();
  }
  async load() {
    const r = ++this.seq, e = this.c, i = g(e.limit, 8);
    let a = N(e.products).length ? await W(N(e.products)) : await D("best_selling", [], i);
    a.length || (a = (await V(null, "latest", i)).items), u(e.sort_by_sold, !0) && a.every((n) => n.sold != null) && (a = [...a].sort((n, s) => (s.sold ?? 0) - (n.sold ?? 0))), u(e.hide_oos, !1) && (a = a.filter((n) => n.available)), r === this.seq && (this.items = a.slice(0, i));
  }
  render() {
    var s;
    const r = this.c, e = this.items, i = u(r.show_sold, !0), a = (o) => i && o.sold != null && o.sold >= g(r.sold_min, 1) ? c`<span class="sold">🔥 ${y(r.sold_text, h("بيع منه {n}", "{n} sold")).replace("{n}", o.sold.toLocaleString(h("ar-SA", "en")))}</span>` : "", n = g(((s = e == null ? void 0 : e[0]) == null ? void 0 : s.sold) ?? 0, 0);
    return this.shell(
      e == null ? c`<div class="skel"></div>` : c`
      ${u(r.podium, !0) && e.length >= 3 ? c`<div class="pod">${[1, 0, 2].map((o) => {
        const l = e[o];
        return c`<a class="pd r${o + 1}" href=${l.url}><span class="medal m${o + 1}">${o + 1}</span><img src=${l.image} alt="" loading="lazy" /><b>${l.name}</b><div class="pr"><b>${w(l.price)}</b>${l.regular > l.price ? c`<s>${w(l.regular)}</s>` : ""}</div>${a(l)}</a>`;
      })}</div>` : ""}
      <div class="list">${e.slice(u(r.podium, !0) && e.length >= 3 ? 3 : 0).map((o, l) => c`<a class="li" href=${o.url}><span class="n">${l + (u(r.podium, !0) && e.length >= 3 ? 4 : 1)}</span><img src=${o.image} alt="" loading="lazy" />
        <div><b>${o.name}</b>${i && o.sold != null && n ? c`<div class="bar"><i style=${`width:${Math.round(o.sold / n * 100)}%`}></i></div>` : ""}</div><div style="text-align:end"><b style="color:var(--A)">${w(o.price)}</b><br />${a(o)}</div></a>`)}</div>`,
      { eyebrow: h("الأكثر مبيعاً", "Best sellers"), title: h("اللي يطلبونه فعلاً", "What people actually order"), sub: "" }
    );
  }
};
I.styles = [$.base, O`
    .pod { display: grid; grid-template-columns: 1fr 1.15fr 1fr; gap: var(--gap); align-items: end; margin-bottom: calc(var(--gap) * 1.5); }
    @media (max-width: 760px) { .pod { grid-template-columns: 1fr; } .pod > :nth-child(2) { order: -1; } }
    .pd { position: relative; text-align: center; background: var(--CARD); border-radius: var(--r); padding: 16px; box-shadow: var(--sh); display: grid; gap: 8px; color: inherit; text-decoration: none; }
    .pd img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: calc(var(--r) * .7); }
    .pd.r1 { padding-bottom: 28px; background: linear-gradient(180deg, color-mix(in srgb, var(--A) 18%, var(--CARD)), var(--CARD)); } .pd.r1 img { aspect-ratio: 4/5; }
    .medal { position: absolute; top: -14px; left: 50%; translate: -50% 0; width: 46px; height: 46px; border-radius: 50%; display: grid; place-items: center; font-weight: 900; font-size: 20px; color: #fff; box-shadow: 0 10px 20px -8px #0007; }
    .m1 { background: linear-gradient(135deg, #f5d68a, #b8892d); } .m2 { background: linear-gradient(135deg, #e5e7eb, #9ca3af); } .m3 { background: linear-gradient(135deg, #f0b38a, #a0582d); }
    .pd b { font-size: 16px; } .pd .pr { justify-content: center; } .sold { font-size: 13px; font-weight: 800; color: var(--A); }
    .list { display: grid; gap: 10px; } .li { display: grid; grid-template-columns: 40px 64px 1fr auto; gap: 14px; align-items: center; padding: 10px 14px; border-radius: calc(var(--r) * .7); background: var(--CARD); box-shadow: var(--sh); color: inherit; text-decoration: none; }
    .li img { width: 64px; height: 64px; object-fit: cover; border-radius: 12px; } .li .n { font-weight: 900; font-size: 20px; opacity: .4; text-align: center; }
    .bar { height: 6px; border-radius: 9px; background: var(--LINE); margin-top: 6px; overflow: hidden; } .bar i { display: block; height: 100%; background: var(--A); }
  `];
let _ = I;
ft([
  Y()
], _.prototype, "items");
typeof _ < "u" && _.registerSallaComponent("salla-nabd-bestsellers");
export {
  _ as default
};
