import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, t, money, smart, type Prod } from '../../shared/salla';
import { rank } from '../../shared/memory';

/** Live deals: only products with a real sale price; savings computed from the real prices; a countdown appears only when Salla gives the discount's real end date. */
export default class NabdDeals extends Smart {
  @state() private items: Prod[] | null = null;
  @state() private now = Date.now();
  private seq = 0; private tm = 0;
  static styles = [Smart.base, css`
    .sum { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
    .st { flex: 1 1 160px; padding: 16px 18px; border-radius: calc(var(--r) * .8); background: var(--CARD); box-shadow: var(--sh); } .st b { display: block; font-size: 26px; color: var(--A); } .st span { font-size: 13px; opacity: .7; }
    .cd { display: flex; gap: 4px; font-variant-numeric: tabular-nums; font-size: 12px; font-weight: 800; } .cd span { background: #111; color: #fff; border-radius: 7px; padding: 3px 6px; min-width: 28px; text-align: center; }
    .save { font-size: 13px; font-weight: 800; color: #15803d; }
  `];
  connectedCallback() { super.connectedCallback(); this.tm = window.setInterval(() => (this.now = Date.now()), 1000); }
  disconnectedCallback() { super.disconnectedCallback(); clearInterval(this.tm); }
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) this.load(); }
  private async load() {
    const n = ++this.seq; const c = this.c; const r = await smart(c.products, 'offers', 40);
    let l = r.items.filter((p) => p.regular > p.price && p.discount >= num(c.min_discount, 1) && (!bool(c.hide_oos, true) || p.available));
    const s = opt(c.sort, 'saving');
    l = s === 'saving' ? l.sort((a, b) => (b.regular - b.price) - (a.regular - a.price)) : s === 'percent' ? l.sort((a, b) => b.discount - a.discount) : s === 'ending' ? l.sort((a, b) => (a.endsAt ?? 1e15) - (b.endsAt ?? 1e15)) : rank(l, bool(c.personalize, true));
    if (n === this.seq) this.items = l.slice(0, num(c.limit, 8));
  }
  private cd(p: Prod) {
    if (!bool(this.c.countdown, true) || !p.endsAt) return '';
    const s = Math.max(0, Math.floor((p.endsAt - this.now) / 1000)); if (!s) return '';
    const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return html`<div class="cd" title=${t('ينتهي الخصم', 'Discount ends')}>⏳ ${d ? html`<span>${d}${t('ي', 'd')}</span>` : ''}<span>${String(h).padStart(2, '0')}</span><span>${String(m).padStart(2, '0')}</span><span>${String(x).padStart(2, '0')}</span></div>`;
  }
  render() {
    const c = this.c; const L_ = this.items;
    if (L_ && !L_.length && bool(c.hide_empty, true)) return this.hints([t('لا توجد خصومات فعلية الآن، لذلك العنصر مخفي عن العملاء.', 'No real discounts now, so the block is hidden.')]) || '';
    const total = L_?.reduce((s, p) => s + (p.regular - p.price), 0) ?? 0; const best = L_?.reduce((m, p) => Math.max(m, p.discount), 0) ?? 0;
    return this.shell(L_ == null ? html`<div class="skel"></div>` : html`
      ${bool(c.summary, true) ? html`<div class="sum"><div class="st"><b>${L_.length}</b><span>${t('منتج عليه خصم الآن', 'products on sale now')}</span></div>
        <div class="st"><b>${best}%</b><span>${t('أعلى نسبة خصم', 'biggest discount')}</span></div><div class="st"><b>${money(total)}</b><span>${t('مجموع التوفير لو أخذتها كلها', 'total saving if you take them all')}</span></div></div>` : ''}
      <div class=${opt(c.layout, 'grid') === 'rail' ? 'rail' : 'grid'} style=${`--cols:${num(c.cols, 4)};--mcols:${num(c.mcols, 2)}`}>${L_.map((p) => this.card(p, {
        badges: [html`<span class="bdg">-${p.discount}%</span>`], quick: bool(c.quick_add, true),
        extra: html`<span class="save">${t('توفّر', 'You save')} ${money(p.regular - p.price)}</span>${this.cd(p)}` }))}</div>`,
      { eyebrow: t('الخصومات الحيّة', 'Live deals'), title: L(c.title_default, t('خصومات حقيقية… بأرقامها', 'Real discounts, real numbers')) });
  }
}
