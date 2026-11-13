import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/nabd-bestsellers.js');
await import('../dist/nabd-cart-goals.js');
await import('../dist/nabd-deals.js');
await import('../dist/nabd-restock.js');
await import('../dist/nabd-stock.js');
await import('../dist/nabd-ticker.js');
window.__ready = true;
