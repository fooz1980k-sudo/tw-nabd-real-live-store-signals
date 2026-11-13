import { css, html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { Smart } from '../../shared/ui';
import { L, opt, num, bool, list, t, money, cart, on, smart, type Prod, type Cart } from '../../shared/salla';

type R = Record<string, unknown>;
interface Goal { at: number; label: string; emoji: string }
/** Cart pulse: the real cart total against the merchant's reward tiers (free shipping, gift, extra discount), live as items are added, with the cheapest real product that closes the gap. */
export default class NabdCartGoals extends Smart {
  @state() private cart: Cart | null = null;
  @state() private pool: Prod[] = [];
  static styles = [Smart.base, css`
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
  connectedCallback() { super.connectedCallback(); const up = () => cart().then((c) => (this.cart = c)); up(); on('cart::updated', up); on('cart::item.added', up); on('cart::item.deleted', up); }
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config') && bool(this.c.suggest, true)) smart(this.c.products, opt(this.c.auto_source, 'best_selling'), 30).then((r) => (this.pool = r.items.filter((p) => p.available))); }
  render() {
    const c = this.c; const goals: Goal[] = list<R>(c.goals).map((g) => ({ at: num(g.amount), label: L(g.label), emoji: L(g.emoji, '🎁') })).filter((g) => g.at > 0).sort((a, b) => a.at - b.at);
    if (!goals.length) return this.hints([t('أضف أهدافاً مثل «شحن مجاني عند 200».', 'Add goals like free shipping at 200.')]) || nothing;
    const total = this.cart?.total ?? 0; if (!total && bool(c.hide_empty_cart, false)) return nothing;
    const max = goals[goals.length - 1].at; const next = goals.find((g) => total < g.at); const gap = next ? next.at - total : 0;
    const closer = next ? this.pool.filter((p) => p.price >= gap && !this.cart?.ids.includes(p.id)).sort((a, b) => a.price - b.price)[0] : null;
    const msg = next ? L(c.msg_next, t('باقي {gap} وتحصل على {goal}', 'Add {gap} more to get {goal}')).replace('{gap}', money(gap)).replace('{goal}', `${next.emoji} ${next.label}`) : L(c.msg_done, t('مبروك! حصلت على كل المكافآت 🎉', 'Congrats! You unlocked every reward 🎉'));
    const parts = msg.split(money(gap));
    const body = html`<div class="box">
      <div class="msg">${next && parts.length === 2 ? html`${parts[0]}<b>${money(gap)}</b>${parts[1]}` : msg}</div>
      <div class="track"><div class="fill" style=${`width:${Math.min(100, (total / max) * 100)}%`}></div>
        ${goals.map((g) => html`<div class="pt ${total >= g.at ? 'ok' : ''}" style=${`inset-inline-start:calc(${(g.at / max) * 100}% - 17px);translate:0 -50%`}><i>${g.emoji}</i><small>${g.label} · ${money(g.at)}</small></div>`)}</div>
      ${closer && bool(c.suggest, true) ? html`<div class="gap"><img src=${closer.image} alt="" /><div>${L(c.suggest_text, t('يكمّل لك الهدف:', 'Closes the gap:'))}<b>${closer.name} · ${money(closer.price)}</b></div><button class="btn sm" @click=${() => this.add(closer)}>${t('أضف', 'Add')}</button></div>` : ''}
    </div>`;
    if (opt(c.position, 'inline') === 'fixed') return this.hiddenNow() ? nothing : html`<div class="${this.cls()} bar-fixed" style=${this.vars()}>${body}</div>`;
    return this.shell(html`<div class="panel">${body}</div>`, { eyebrow: t('نبض سلتك', 'Your cart pulse'), title: '' });
  }
}
