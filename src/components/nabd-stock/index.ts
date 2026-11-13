import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, t, smart, type Prod } from '../../shared/salla';
import { rank } from '../../shared/memory';

/** Real stock meter: each product shows its true remaining quantity from the store (never invented); scarce items can float to the top. Unlimited items say «available» with no number. */
export default class NabdStock extends Smart {
  @state() private items: Prod[] | null = null;
  @state() private auto = false;
  private seq = 0;
  static styles = [Smart.base, css`
    .meter { display: grid; gap: 6px; } .meter .tr { height: 8px; border-radius: 9px; background: var(--LINE); overflow: hidden; }
    .meter i { display: block; height: 100%; border-radius: 9px; background: var(--mc, #16a34a); transition: width 1.2s cubic-bezier(.2,.7,.2,1); width: 0; }
    :host([in]) .meter i { width: var(--w); }
    .meter span { font-size: 13px; font-weight: 700; color: var(--mc); display: flex; gap: 6px; align-items: center; }
    .pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--mc); animation: p 1.4s infinite; } @keyframes p { 0% { box-shadow: 0 0 0 0 var(--mc); } 100% { box-shadow: 0 0 0 10px transparent; } }
    .sold { font-size: 12px; opacity: .7; }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) this.load(); }
  private async load() {
    const n = ++this.seq; const c = this.c; const r = await smart(c.products, opt(c.auto_source, 'best_selling'), Math.max(24, num(c.limit, 8) * 2));
    let l = r.items.filter((p) => (bool(c.hide_oos, true) ? p.available : true) && (bool(c.only_tracked, false) ? p.qty != null : true));
    if (bool(c.only_low, false)) l = l.filter((p) => p.qty != null && p.qty <= num(c.low, 5));
    const sort = opt(c.sort, 'scarce');
    if (sort === 'scarce') l = l.sort((a, b) => (a.qty ?? 1e9) - (b.qty ?? 1e9)); else l = rank(l, bool(c.personalize, true));
    if (n === this.seq) { this.items = l.slice(0, num(c.limit, 8)); this.auto = r.auto; }
  }
  private meter(p: Prod) {
    const c = this.c; const low = num(c.low, 5); const cap = num(c.full_at, 30);
    if (p.qty == null) return bool(c.show_unlimited, true) ? html`<div class="meter" style="--mc:#16a34a;--w:100%"><div class="tr"><i></i></div><span>${L(c.text_plenty, t('متوفر', 'In stock'))}</span></div>` : '';
    if (!p.available || p.qty <= 0) return html`<div class="meter" style="--mc:#9ca3af;--w:0%"><div class="tr"><i></i></div><span>${t('نفدت الكمية', 'Sold out')}</span></div>`;
    const lv = p.qty <= low ? 'low' : p.qty <= low * 3 ? 'mid' : 'ok';
    const col = lv === 'low' ? String(c.color_low || '#dc2626') : lv === 'mid' ? String(c.color_mid || '#d97706') : String(c.color_ok || '#16a34a');
    const txt = lv === 'low' ? L(c.text_low, t('باقي {n} فقط', 'Only {n} left')) : lv === 'mid' ? L(c.text_mid, t('الكمية محدودة: {n}', 'Limited: {n} left')) : L(c.text_ok, t('متوفر ({n})', 'In stock ({n})'));
    const show = bool(c.show_number, true) || lv === 'low';
    return html`<div class="meter" style=${`--mc:${col};--w:${Math.max(4, Math.min(100, (p.qty / cap) * 100))}%`}><div class="tr"><i></i></div>
      <span>${lv === 'low' && bool(c.pulse, true) ? html`<b class="pulse"></b>` : ''}${show ? txt.replace('{n}', String(p.qty)) : txt.replace(/\s*\(?\{n\}\)?/, '')}</span>
      ${bool(c.show_sold, true) && p.sold != null && p.sold >= num(c.sold_min, 10) ? html`<span class="sold" style="color:inherit">${t(`بيع منه ${p.sold}`, `${p.sold} sold`)}</span>` : ''}</div>`;
  }
  render() {
    const c = this.c; const L_ = this.items;
    return this.shell(html`${this.hints([this.auto && t('يعرض تلقائياً من متجرك. الأرقام هي المخزون الفعلي من سلة؛ المنتجات غير محدودة الكمية تظهر «متوفر» فقط.', 'Auto from your store; numbers are your real Salla stock.'),
      L_ && !L_.some((p) => p.qty != null) && t('لا يوجد منتج بكمية محددة؛ فعّل تتبع الكمية في سلة ليظهر العدّاد.', 'No product tracks quantity; enable stock tracking in Salla.')])}
      ${L_ == null ? html`<div class="skel"></div>` : html`<div class=${opt(c.layout, 'grid') === 'rail' ? 'rail' : 'grid'} style=${`--cols:${num(c.cols, 4)};--mcols:${num(c.mcols, 2)}`}>${L_.map((p) => this.card(p, { extra: this.meter(p), quick: bool(c.quick_add, true), rating: bool(c.show_rating, false) }))}</div>`}`,
      { eyebrow: t('المخزون الآن', 'Live stock'), title: t('الكميات الحقيقية… قبل لا تخلص', 'Real quantities, before they run out') });
  }
}
