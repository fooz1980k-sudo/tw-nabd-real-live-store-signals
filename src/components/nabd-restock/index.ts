import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, t, S, ready, toast, smart, type Prod } from '../../shared/salla';
import { mem, update } from '../../shared/memory';

/** Back-in-stock radar: remembers (in this browser) which products were sold out at the last visit and announces the ones that are truly back; sold-out items get a real «notify me» via Salla. */
export default class NabdRestock extends Smart {
  @state() private back: Prod[] = [];
  @state() private out: Prod[] = [];
  @state() private rest: Prod[] = [];
  @state() private asked: number[] = [];
  private seq = 0;
  static styles = [Smart.base, css`
    .sec-t { font-weight: 800; margin: 6px 0 12px; display: flex; gap: 8px; align-items: center; } .sec-t::after { content: ''; flex: 1; height: 1px; background: var(--LINE); }
    .back .pc { outline: 2px solid #16a34a; } .note { font-size: 12px; opacity: .7; }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) this.load(); }
  private async load() {
    const n = ++this.seq; const c = this.c; const l = (await smart(c.products, opt(c.auto_source, 'best_selling'), num(c.watch, 24))).items;
    const before = mem().avail; const back = l.filter((p) => p.available && before[p.id] === false);
    update((m) => { for (const p of l) m.avail[p.id] = p.available; });
    if (n !== this.seq) return;
    this.back = back; this.out = l.filter((p) => !p.available).slice(0, num(c.limit, 4));
    this.rest = bool(c.show_available, false) ? l.filter((p) => p.available && !back.includes(p)).slice(0, num(c.limit, 4)) : [];
  }
  private async notify(p: Prod) {
    await ready();
    try { await S()?.product?.availabilitySubscribe?.({ id: p.id }); this.asked = [...this.asked, p.id]; toast(t('بنعلمك أول ما يتوفر', 'We will let you know when it is back')); }
    catch { location.href = p.url; }
  }
  render() {
    const c = this.c; const cols = `--cols:${num(c.cols, 4)};--mcols:${num(c.mcols, 2)}`;
    if (!this.back.length && !this.out.length && !this.rest.length) return this.hints([t('لا توجد منتجات نافدة أو راجعة الآن؛ العنصر مخفي عن العملاء.', 'Nothing sold out or back right now; hidden from shoppers.')]) || '';
    return this.shell(html`
      ${this.back.length ? html`<div class="sec-t">✅ ${L(c.back_title, t('رجع للمخزون منذ زيارتك الأخيرة', 'Back in stock since your last visit'))}</div>
        <div class="grid back" style=${cols}>${this.back.map((p) => this.card(p, { badges: [html`<span class="bdg ok">${t('رجع!', 'Back!')}</span>`] }))}</div>` : ''}
      ${this.out.length && bool(c.show_out, true) ? html`<div class="sec-t">🔔 ${L(c.out_title, t('نفدت الحين… نعلمك أول ما ترجع', 'Sold out, we will tell you when it is back'))}</div>
        <div class="grid" style=${cols}>${this.out.map((p) => this.card(p, { quick: false, extra: html`<button class="btn sm ghost" ?disabled=${this.asked.includes(p.id)} @click=${() => this.notify(p)}>${this.asked.includes(p.id) ? t('تم ✓', 'Done ✓') : t('نبّهني عند التوفر', 'Notify me')}</button>` }))}</div>` : ''}
      ${this.rest.length ? html`<div class="sec-t">${t('متوفر الآن', 'Available now')}</div><div class="grid" style=${cols}>${this.rest.map((p) => this.card(p))}</div>` : ''}
      ${bool(c.privacy_note, true) ? html`<p class="note">${t('نتذكر حالة التوفر على جهازك فقط.', 'Availability is remembered on your device only.')}</p>` : ''}`,
      { eyebrow: t('رادار التوفر', 'Restock radar'), title: '' });
  }
}
