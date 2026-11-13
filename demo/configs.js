// Sample data only. The visitor saw product 102 sold out last time; demo marks it back in stock now to show the radar.
localStorage.setItem('tw_smart_mem_v1', JSON.stringify({ visits: 2, seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: { 102: false }, dismissed: {} })); sessionStorage.clear();
const sel = (v) => [{ value: v, label: v, key: v }];
window.__cfg = {
  'nabd-ticker': { config: { custom: 'توصيل مجاني فوق 200 ر.س' } },
  'nabd-stock': { config: { limit: 8 } },
  'nabd-bestsellers': { config: { limit: 7 } },
  'nabd-deals': { config: { s_theme: sel('midnight') } },
  'nabd-cart-goals': { config: { goals: [{ amount: 200, emoji: '🚚', label: 'شحن مجاني' }, { amount: 400, emoji: '🎁', label: 'هدية مجانية' }, { amount: 700, emoji: '💎', label: 'خصم 10%' }] },
    act: async () => { await salla.cart.addItem({ id: 102, quantity: 1 }); } },
  'nabd-restock': { config: { limit: 4 } },
};
