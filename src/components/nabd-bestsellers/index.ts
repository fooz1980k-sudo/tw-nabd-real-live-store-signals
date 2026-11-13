import { css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, t, money, smart, fromSource, byIds, ids, type Prod } from '../../shared/salla';

/** Best-seller podium straight from Salla's best-selling list; shows the real «sold» count only when the store exposes it, otherwise rank only. */
export default class NabdBestsellers extends Smart {
  @state() private items: Prod[] | null = null;
  private seq = 0;
  static styles = [Smart.base, css`
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
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) this.load(); }
  private async load() {
    const n = ++this.seq; const c = this.c; const lim = num(c.limit, 8);
    let l = ids(c.products).length ? await byIds(ids(c.products)) : await fromSource('best_selling', [], lim);
    if (!l.length) l = (await smart(null, 'latest', lim)).items;
    if (bool(c.sort_by_sold, true) && l.every((p) => p.sold != null)) l = [...l].sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0));
    if (bool(c.hide_oos, false)) l = l.filter((p) => p.available);
    if (n === this.seq) this.items = l.slice(0, lim);
  }
  render() {
    const c = this.c; const L_ = this.items; const showSold = bool(c.show_sold, true);
    const sold = (p: Prod) => (showSold && p.sold != null && p.sold >= num(c.sold_min, 1) ? html`<span class="sold">🔥 ${L(c.sold_text, t('بيع منه {n}', '{n} sold')).replace('{n}', p.sold.toLocaleString(t('ar-SA', 'en')))}</span>` : '');
    const top = num(L_?.[0]?.sold ?? 0, 0);
    return this.shell(L_ == null ? html`<div class="skel"></div>` : html`
      ${bool(c.podium, true) && L_.length >= 3 ? html`<div class="pod">${[1, 0, 2].map((i) => { const p = L_[i]; return html`<a class="pd r${i + 1}" href=${p.url}><span class="medal m${i + 1}">${i + 1}</span><img src=${p.image} alt="" loading="lazy" /><b>${p.name}</b><div class="pr"><b>${money(p.price)}</b>${p.regular > p.price ? html`<s>${money(p.regular)}</s>` : ''}</div>${sold(p)}</a>`; })}</div>` : ''}
      <div class="list">${L_.slice(bool(c.podium, true) && L_.length >= 3 ? 3 : 0).map((p, k) => html`<a class="li" href=${p.url}><span class="n">${k + (bool(c.podium, true) && L_.length >= 3 ? 4 : 1)}</span><img src=${p.image} alt="" loading="lazy" />
        <div><b>${p.name}</b>${showSold && p.sold != null && top ? html`<div class="bar"><i style=${`width:${Math.round((p.sold / top) * 100)}%`}></i></div>` : ''}</div><div style="text-align:end"><b style="color:var(--A)">${money(p.price)}</b><br />${sold(p)}</div></a>`)}</div>`,
      { eyebrow: t('الأكثر مبيعاً', 'Best sellers'), title: t('اللي يطلبونه فعلاً', 'What people actually order'), sub: '' });
  }
}
