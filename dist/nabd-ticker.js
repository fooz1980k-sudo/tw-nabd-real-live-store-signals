import { LitElement as T, nothing as E, html as l, css as M } from "lit";
import { property as W, state as H } from "lit/decorators.js";
const m = () => window.salla ?? window.Salla, L = async () => {
  var t, r;
  try {
    await ((r = (t = m()) == null ? void 0 : t.onReady) == null ? void 0 : r.call(t));
  } catch {
  }
}, O = () => {
  var t, r, e, n, a;
  try {
    const s = ((r = (t = m()) == null ? void 0 : t.lang) == null ? void 0 : r.locale) ?? ((a = (n = (e = m()) == null ? void 0 : e.config) == null ? void 0 : n.get) == null ? void 0 : a.call(n, "user.language_code"));
    if (typeof s == "string" && s) return s.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, J = () => O() === "en", b = (t, r) => J() ? r : t, y = (t, r = "") => {
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
    const e = t, n = e[O()] ?? e.ar ?? e.en ?? Object.values(e).find((a) => typeof a == "string" && a);
    return typeof n == "string" && n.trim() ? n : r;
  }
  return r;
}, v = (t, r = "") => {
  const e = Array.isArray(t) ? t[0] : t, n = typeof e == "object" && e ? e.value : e;
  return n == null || n === "" ? r : String(n);
}, g = (t, r = 0) => {
  const e = Number(t);
  return t === "" || t == null || !Number.isFinite(e) ? r : e;
}, u = (t, r = !1) => t == null || t === "" ? r : t === !0 || t === "true" || t === 1 || t === "1", U = (t) => y(t).split(/[,،\n]/).map((r) => r.trim()).filter(Boolean), p = (t) => {
  const r = typeof t == "object" && t ? t.amount : t, e = Number(r);
  return Number.isFinite(e) ? e : 0;
}, Y = (t) => {
  if (!t) return null;
  const r = typeof t == "number" ? t < 1e12 ? t * 1e3 : t : Date.parse(String(t).replace(" ", "T"));
  return Number.isFinite(r) && r > Date.now() ? r : null;
};
function K(t) {
  var c, d, f, h, i, x, _, B, I;
  const r = p(t == null ? void 0 : t.sale_price), e = p((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)), n = r && r < e ? r : p(t == null ? void 0 : t.price) || e, a = Math.max(p(t == null ? void 0 : t.regular_price), p(t == null ? void 0 : t.price), n), s = (Array.isArray(t == null ? void 0 : t.images) ? t.images : []).map((k) => String((k == null ? void 0 : k.url) ?? k ?? "")).filter(Boolean), o = (t == null ? void 0 : t.sold_quantity) ?? (t == null ? void 0 : t.sold);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((c = t == null ? void 0 : t.image) == null ? void 0 : c.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? s[0] ?? ""),
    images: s,
    price: n,
    regular: a,
    discount: a > n ? Math.round((1 - n / a) * 100) : 0,
    rating: p(((d = t == null ? void 0 : t.rating) == null ? void 0 : d.stars) ?? ((f = t == null ? void 0 : t.rating) == null ? void 0 : f.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: p((h = t == null ? void 0 : t.rating) == null ? void 0 : h.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : p(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out" && !((t == null ? void 0 : t.quantity) === 0 && !(t != null && t.unlimited_quantity)),
    sold: o == null || o === "" || !Number.isFinite(Number(o)) ? null : Number(o),
    endsAt: Y((t == null ? void 0 : t.discount_ends) ?? (t == null ? void 0 : t.sale_end) ?? (t == null ? void 0 : t.discount_end)),
    category: String(((i = t == null ? void 0 : t.category) == null ? void 0 : i.name) ?? ((_ = (x = t == null ? void 0 : t.categories) == null ? void 0 : x[0]) == null ? void 0 : _.name) ?? ""),
    brand: String(((B = t == null ? void 0 : t.brand) == null ? void 0 : B.name) ?? ""),
    promo: String(((I = t == null ? void 0 : t.promotion) == null ? void 0 : I.title) ?? (t == null ? void 0 : t.promotion_title) ?? "")
  };
}
const N = /* @__PURE__ */ new Map();
async function A(t, r = [], e = 12) {
  await L();
  const n = `src:${t}:${r.join(",")}:${e}`;
  return N.has(n) || N.set(n, (async () => {
    var o, c, d, f;
    const a = (o = m()) == null ? void 0 : o.product, s = a != null && a.fetch ? a.fetch.bind(a) : (d = (c = a == null ? void 0 : a.api) == null ? void 0 : c.fetch) == null ? void 0 : d.bind(a.api);
    if (!s) return [];
    try {
      const h = { source: t, per_page: e };
      r.length && (h.source_value = r);
      const i = await s(h);
      return (Array.isArray(i == null ? void 0 : i.data) ? i.data : Array.isArray(i) ? i : ((f = i == null ? void 0 : i.data) == null ? void 0 : f.products) ?? []).map(K).filter((_) => _.name).slice(0, e);
    } catch {
      return [];
    }
  })()), N.get(n);
}
const C = (t) => {
  var r, e;
  try {
    const n = (e = (r = m()) == null ? void 0 : r.money) == null ? void 0 : e.call(r, t);
    if (n) return String(n);
  } catch {
  }
  return `${Math.round(t * 100) / 100} ${b("ر.س", "SAR")}`;
};
async function X(t, r = 1, e) {
  var n, a, s;
  await L();
  try {
    return await ((s = (a = (n = m()) == null ? void 0 : n.cart) == null ? void 0 : a.addItem) == null ? void 0 : s.call(a, e ? { id: t, quantity: r, notes: e } : { id: t, quantity: r })), !0;
  } catch {
    return !1;
  }
}
function Q(t, r = !0) {
  var e, n, a;
  try {
    (a = r ? (e = m()) == null ? void 0 : e.success : (n = m()) == null ? void 0 : n.error) == null || a(t);
  } catch {
  }
}
const V = (t, r) => {
  var e, n, a;
  try {
    (a = (n = (e = m()) == null ? void 0 : e.event) == null ? void 0 : n.on) == null || a.call(n, t, r);
  } catch {
  }
}, S = "tw_smart_mem_v1", q = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
function P() {
  try {
    return { ...q(), ...JSON.parse(localStorage.getItem(S) || "{}") };
  } catch {
    return q();
  }
}
function Z(t) {
  try {
    localStorage.setItem(S, JSON.stringify(t));
  } catch {
  }
}
function G(t) {
  const r = P();
  return t(r), Z(r), r;
}
function tt() {
  let t = !1;
  try {
    t = !sessionStorage.getItem(S), sessionStorage.setItem(S, "1");
  } catch {
  }
  return t ? G((r) => {
    r.visits += 1, r.last = Date.now();
  }) : P();
}
const z = (t, r = 1) => G((e) => {
  e.seen[t.id] = (e.seen[t.id] || 0) + r, e.prices = [...e.prices.slice(-29), t.price], t.category && (e.tags[t.category] = (e.tags[t.category] || 0) + r);
});
let R = !1;
function rt() {
  R || (R = !0, V("cart::item.added", (t) => {
    var e;
    const r = Number(((e = t == null ? void 0 : t.data) == null ? void 0 : e.product_id) ?? 0);
    r && G((n) => {
      n.carted.includes(r) || (n.carted = [...n.carted.slice(-40), r]);
    });
  }));
}
const et = () => {
  const t = innerWidth, r = navigator.userAgent;
  return /iPad|Tablet/i.test(r) || t >= 700 && t < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r) || t < 700 ? "mobile" : "desktop";
}, at = () => {
  try {
    return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
  } catch {
    return !0;
  }
};
var nt = Object.defineProperty, it = (t, r, e, n) => {
  for (var a = void 0, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (a = o(r, e, a) || a);
  return a && nt(r, e, a), a;
};
const st = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" }, j = /* @__PURE__ */ new Set();
function ot(t) {
  const r = st[t];
  if (!r || j.has(r)) return r;
  j.add(r);
  const e = document.createElement("link");
  return e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e), r;
}
const ct = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" }, lt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"], F = class F extends T {
  get c() {
    return this.config ?? {};
  }
  connectedCallback() {
    super.connectedCallback(), rt(), tt();
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
    const s = et();
    return !!(u(r.s_hide_mobile) && s === "mobile" || u(r.s_hide_desktop) && s !== "mobile");
  }
  vars(r = "") {
    const e = this.c, n = [], a = (o, c) => {
      c !== "" && c != null && n.push(`${o}:${c}`);
    };
    a("--a", e.s_accent || ""), a("--a2", e.s_accent2 || ""), a("--bgc", e.s_bg || ""), a("--fgc", e.s_text || ""), a("--cardc", e.s_card || ""), a("--r", `${g(e.s_radius, 22)}px`), a("--gap", `${g(e.s_gap, 18)}px`), a("--ts", `${g(e.s_title_size, 38)}px`), a("--fs", `${g(e.s_text_size, 16)}px`), a("--pt", `${g(e.s_pad_top, 56)}px`), a("--pb", `${g(e.s_pad_bottom, 56)}px`), a("--maxw", ct[v(e.s_width, "normal")] ?? "1240px"), a("--sh", lt[Math.max(0, Math.min(5, g(e.s_shadow, 2)))]), a("--ms", `${g(e.s_anim_ms, 700)}ms`), a("--ov", String(g(e.s_overlay, 45) / 100)), e.s_bg_image && a("--bgimg", `url("${String(e.s_bg_image)}")`);
    const s = ot(v(e.s_font, "inherit"));
    return s && a("font-family", `'${s}', inherit`), n.join(";") + (r ? ";" + r : "");
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
      u(r.s_border) ? "bordered" : "",
      u(r.s_stagger, !0) ? "stagger" : "",
      r.s_bg_image ? "has-img" : ""
    ].join(" ");
  }
  /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
  shell(r, e = {}, n = "", a = "", s = !0) {
    if (this.hiddenNow()) return E;
    const o = this.c, c = y(o.eyebrow, e.eyebrow ?? ""), d = y(o.title, e.title ?? ""), f = y(o.subtitle, e.sub ?? ""), h = s && u(o.s_show_head, !0) && (c || d || f);
    return l`<section class="${this.cls()} ${n}" style=${this.vars(a)} id=${String(o.s_anchor || "") || E}>
      <div class="wrap">${h ? l`<header class="head">${c ? l`<span class="eyebrow">${c}</span>` : ""}${d ? l`<h2 class="title">${d}</h2>` : ""}${f ? l`<p class="sub">${f}</p>` : ""}</header>` : ""}
      ${r}</div></section>`;
  }
  /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
  hints(r) {
    const e = r.filter(Boolean);
    return !e.length || !at() || !u(this.c.s_hints, !0) ? "" : l`<aside class="hints" role="note"><b>💡 ${b("مساعد الإعداد (يظهر لك فقط)", "Setup assistant (only you see this)")}</b><ul>${e.map((n) => l`<li>${n}</li>`)}</ul></aside>`;
  }
  card(r, e = {}) {
    var n;
    return l`<article class="pc ${r.available ? "" : "oos"}">
      <a class="ph" href=${r.url} @click=${() => z(r)}><img src=${r.image} alt=${r.name} loading="lazy" />${(n = e.badges) != null && n.length ? l`<span class="badges">${e.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r.url} @click=${() => z(r)}>${r.name}</a>
        <div class="pr"><b>${C(r.price)}</b>${r.regular > r.price ? l`<s>${C(r.regular)}</s>` : ""}</div>
        ${e.rating !== !1 && r.rating > 0 ? l`<div class="rt">★ ${r.rating.toFixed(1)}${r.ratingCount ? l` <small>(${r.ratingCount})</small>` : ""}</div>` : ""}
        ${e.extra ?? ""}
        ${e.quick !== !1 ? l`<button class="btn sm" ?disabled=${!r.available} @click=${() => this.add(r)}>${r.available ? b("أضف للسلة", "Add to cart") : b("نفدت الكمية", "Sold out")}</button>` : ""}
      </div></article>`;
  }
  async add(r, e = 1, n) {
    z(r, 3), await X(r.id, e, n) ? Q(b("تمت الإضافة للسلة", "Added to cart")) : location.href = r.url;
  }
};
F.base = M`
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
let w = F;
it([
  W({ type: Object })
], w.prototype, "config");
var dt = Object.defineProperty, gt = (t, r, e, n) => {
  for (var a = void 0, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (a = o(r, e, a) || a);
  return a && dt(r, e, a), a;
};
const D = class D extends w {
  constructor() {
    super(...arguments), this.facts = [];
  }
  willUpdate(r) {
    r.has("config") && this.load();
  }
  async load() {
    const r = this.c, e = [], [n, a, s, o] = await Promise.all([A("offers", [], 40), A("latest", [], 8), A("best_selling", [], 20), A("top-rated", [], 4)]), c = n.filter((i) => i.regular > i.price && i.available);
    u(r.f_offers, !0) && c.length && e.push({ e: "🏷️", text: b(`${c.length} منتج عليه خصم الآن`, `${c.length} products on sale now`) });
    const d = c.sort((i, x) => x.discount - i.discount)[0];
    u(r.f_biggest, !0) && d && e.push({ e: "💥", text: b(`أعلى خصم ${d.discount}% على ${d.name}`, `Biggest discount ${d.discount}% on ${d.name}`), url: d.url });
    const f = s.filter((i) => i.qty != null && i.qty > 0 && i.qty <= g(r.low, 5));
    u(r.f_low, !0) && f.slice(0, 2).forEach((i) => e.push({ e: "⏳", text: b(`باقي ${i.qty} من ${i.name}`, `${i.qty} left of ${i.name}`), url: i.url })), u(r.f_new, !0) && a[0] && e.push({ e: "🆕", text: b(`وصل جديد: ${a[0].name}`, `New in: ${a[0].name}`), url: a[0].url }), u(r.f_top, !0) && o[0] && o[0].rating > 0 && e.push({ e: "⭐", text: b(`الأعلى تقييماً: ${o[0].name} (${o[0].rating.toFixed(1)})`, `Top rated: ${o[0].name} (${o[0].rating.toFixed(1)})`), url: o[0].url });
    const h = s.filter((i) => i.available).sort((i, x) => i.price - x.price)[0];
    u(r.f_from, !0) && h && e.push({ e: "💸", text: b(`أسعارنا تبدأ من ${C(h.price)}`, `Prices start at ${C(h.price)}`) }), U(r.custom).forEach((i) => e.push({ e: "✦", text: i })), this.facts = e;
  }
  render() {
    const r = this.c;
    if (!this.facts.length || this.hiddenNow()) return E;
    const e = l`<div class="run">${this.facts.map((a) => a.url && u(r.links, !0) ? l`<a class="f" href=${a.url}>${a.e} ${a.text}</a>` : l`<span class="f">${a.e} ${a.text}</span>`)}</div>`, n = getComputedStyle(this).direction === "rtl";
    return l`<div class=${this.cls()} style=${this.vars(`padding:${g(r.s_pad_top, 0)}px 0 ${g(r.s_pad_bottom, 0)}px`)}><div class="tk" style=${`--tkbg:${r.bar_bg || "#111"};--tkfg:${r.bar_text || "#fff"};--spd:${g(r.speed, 40)}s;--tkr:${g(r.s_radius, 0)}px;--dx:${n ? "100%" : "-100%"}`}>${e}${e}</div></div>`;
  }
};
D.styles = [w.base, M`
    .tk { display: flex; overflow: hidden; background: var(--tkbg, #111); color: var(--tkfg, #fff); border-radius: var(--tkr, 0); padding: 12px 0; font-weight: 700; font-size: 14px; mask: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
    .run { display: flex; gap: 40px; padding-inline-end: 40px; flex: none; animation: run var(--spd, 40s) linear infinite; } .tk:hover .run { animation-play-state: paused; }
    @keyframes run { to { transform: translateX(var(--dx, 100%)); } }
    .f { display: inline-flex; gap: 8px; align-items: center; white-space: nowrap; color: inherit; text-decoration: none; } .f::after { content: '✦'; margin-inline-start: 32px; opacity: .4; }
  `];
let $ = D;
gt([
  H()
], $.prototype, "facts");
typeof $ < "u" && $.registerSallaComponent("salla-nabd-ticker");
export {
  $ as default
};
