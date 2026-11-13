import { css, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, num, bool, t, money, fromSource, csv } from '../../shared/salla';

interface Fact { e: string; text: string; url?: string }
/** Store pulse ticker: a moving strip of facts computed live from the store (products on sale, biggest real discount, nearly sold out, newest arrival, top rated), plus the merchant's own lines. Nothing is made up. */
export default class NabdTicker extends Smart {
  @state() private facts: Fact[] = [];
  static styles = [Smart.base, css`
    .tk { display: flex; overflow: hidden; background: var(--tkbg, #111); color: var(--tkfg, #fff); border-radius: var(--tkr, 0); padding: 12px 0; font-weight: 700; font-size: 14px; mask: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
    .run { display: flex; gap: 40px; padding-inline-end: 40px; flex: none; animation: run var(--spd, 40s) linear infinite; } .tk:hover .run { animation-play-state: paused; }
    @keyframes run { to { transform: translateX(var(--dx, 100%)); } }
    .f { display: inline-flex; gap: 8px; align-items: center; white-space: nowrap; color: inherit; text-decoration: none; } .f::after { content: '✦'; margin-inline-start: 32px; opacity: .4; }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) this.load(); }
  private async load() {
    const c = this.c; const out: Fact[] = [];
    const [offers, latest, best, top] = await Promise.all([fromSource('offers', [], 40), fromSource('latest', [], 8), fromSource('best_selling', [], 20), fromSource('top-rated', [], 4)]);
    const sale = offers.filter((p) => p.regular > p.price && p.available);
    if (bool(c.f_offers, true) && sale.length) out.push({ e: '🏷️', text: t(`${sale.length} منتج عليه خصم الآن`, `${sale.length} products on sale now`) });
    const big = sale.sort((a, b) => b.discount - a.discount)[0];
    if (bool(c.f_biggest, true) && big) out.push({ e: '💥', text: t(`أعلى خصم ${big.discount}% على ${big.name}`, `Biggest discount ${big.discount}% on ${big.name}`), url: big.url });
    const low = best.filter((p) => p.qty != null && p.qty > 0 && p.qty <= num(c.low, 5));
    if (bool(c.f_low, true)) low.slice(0, 2).forEach((p) => out.push({ e: '⏳', text: t(`باقي ${p.qty} من ${p.name}`, `${p.qty} left of ${p.name}`), url: p.url }));
    if (bool(c.f_new, true) && latest[0]) out.push({ e: '🆕', text: t(`وصل جديد: ${latest[0].name}`, `New in: ${latest[0].name}`), url: latest[0].url });
    if (bool(c.f_top, true) && top[0] && top[0].rating > 0) out.push({ e: '⭐', text: t(`الأعلى تقييماً: ${top[0].name} (${top[0].rating.toFixed(1)})`, `Top rated: ${top[0].name} (${top[0].rating.toFixed(1)})`), url: top[0].url });
    const cheap = best.filter((p) => p.available).sort((a, b) => a.price - b.price)[0];
    if (bool(c.f_from, true) && cheap) out.push({ e: '💸', text: t(`أسعارنا تبدأ من ${money(cheap.price)}`, `Prices start at ${money(cheap.price)}`) });
    csv(c.custom).forEach((x) => out.push({ e: '✦', text: x }));
    this.facts = out;
  }
  render() {
    const c = this.c; if (!this.facts.length || this.hiddenNow()) return nothing;
    const run = html`<div class="run">${this.facts.map((f) => (f.url && bool(c.links, true) ? html`<a class="f" href=${f.url}>${f.e} ${f.text}</a>` : html`<span class="f">${f.e} ${f.text}</span>`))}</div>`;
    const rtl = getComputedStyle(this).direction === 'rtl';
    return html`<div class=${this.cls()} style=${this.vars(`padding:${num(c.s_pad_top, 0)}px 0 ${num(c.s_pad_bottom, 0)}px`)}><div class="tk" style=${`--tkbg:${c.bar_bg || '#111'};--tkfg:${c.bar_text || '#fff'};--spd:${num(c.speed, 40)}s;--tkr:${num(c.s_radius, 0)}px;--dx:${rtl ? '100%' : '-100%'}`}>${run}${run}</div></div>`;
  }
}
