var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o6) {
        if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s4 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s4 && 1 === s4.length;
          e5 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s4, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o6 = 1 === t3.length ? t3[0] : e5.reduce((e6, s4, o7) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s4) + t3[o7 + 1], t3[0]);
      return new n(o6, t3, s);
    };
    S = (s4, o6) => {
      if (e) s4.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o6) {
        const o7 = document.createElement("style"), n5 = t.litNonce;
        void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s4.appendChild(o7);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s4 of t4.cssRules) e5 += s4.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s4) => t3;
    u = { toAttribute(t3, s4) {
      switch (s4) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s4) {
      let i5 = t3;
      switch (s4) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s4) => !i2(t3, s4);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s4 = b) {
        if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
          const i5 = Symbol(), h6 = this.getPropertyDescriptor(t3, i5, s4);
          void 0 !== h6 && e2(this.prototype, t3, h6);
        }
      }
      static getPropertyDescriptor(t3, s4, i5) {
        const { get: e5, set: r6 } = h(this.prototype, t3) ?? { get() {
          return this[s4];
        }, set(t4) {
          this[s4] = t4;
        } };
        return { get: e5, set(s5) {
          const h6 = e5?.call(this);
          r6?.call(this, s5), this.requestUpdate(t3, h6, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
          for (const i5 of s4) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s4 = litPropertyMetadata.get(t3);
          if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s4] of this.elementProperties) {
          const i5 = this._$Eu(t4, s4);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s4) {
        const i5 = [];
        if (Array.isArray(s4)) {
          const e5 = new Set(s4.flat(1 / 0).reverse());
          for (const s5 of e5) i5.unshift(c(s5));
        } else void 0 !== s4 && i5.push(c(s4));
        return i5;
      }
      static _$Eu(t3, s4) {
        const i5 = s4.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
        for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s4, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s4) {
        const i5 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e5 && true === i5.reflect) {
          const h6 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
          this._$Em = t3, null == h6 ? this.removeAttribute(e5) : this.setAttribute(e5, h6), this._$Em = null;
        }
      }
      _$AK(t3, s4) {
        const i5 = this.constructor, e5 = i5._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i5.getPropertyOptions(e5), h6 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r6 = h6.fromAttribute(s4, t4.type);
          this[e5] = r6 ?? this._$Ej?.get(e5) ?? r6, this._$Em = null;
        }
      }
      requestUpdate(t3, s4, i5, e5 = false, h6) {
        if (void 0 !== t3) {
          const r6 = this.constructor;
          if (false === e5 && (h6 = this[t3]), i5 ??= r6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h6, s4) || i5.useDefault && i5.reflect && h6 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i5)))) return;
          this.C(t3, s4, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s4, { useDefault: i5, reflect: e5, wrapped: h6 }, r6) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h6 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s5] of this._$Ep) this[t5] = s5;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s5, i5] of t4) {
            const { wrapped: t5 } = i5, e5 = this[s5];
            true !== t5 || this._$AL.has(s5) || void 0 === e5 || this.C(s5, void 0, i5, e5);
          }
        }
        let t3 = false;
        const s4 = this._$AL;
        try {
          t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
        } catch (s5) {
          throw t3 = false, this._$EM(), s5;
        }
        t3 && this._$AE(s4);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s4 = t3, e5) {
  if (i5 === E) return i5;
  let h6 = void 0 !== e5 ? s4._$Co?.[e5] : s4._$Cl;
  const o6 = a2(i5) ? void 0 : i5._$litDirective$;
  return h6?.constructor !== o6 && (h6?._$AO?.(false), void 0 === o6 ? h6 = void 0 : (h6 = new o6(t3), h6._$AT(t3, s4, e5)), void 0 !== e5 ? (s4._$Co ??= [])[e5] = h6 : s4._$Cl = h6), void 0 !== h6 && (i5 = M(t3, h6._$AS(t3, i5.values), h6, e5)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s4 = t3.length - 1, e5 = [];
      let n5, l6 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
      for (let i6 = 0; i6 < s4; i6++) {
        const s5 = t3[i6];
        let a3, u6, d6 = -1, f6 = 0;
        for (; f6 < s5.length && (c4.lastIndex = f6, u6 = c4.exec(s5), null !== u6); ) f6 = c4.lastIndex, c4 === v ? "!--" === u6[1] ? c4 = _ : void 0 !== u6[1] ? c4 = m : void 0 !== u6[2] ? (y2.test(u6[2]) && (n5 = RegExp("</" + u6[2], "g")), c4 = p2) : void 0 !== u6[3] && (c4 = p2) : c4 === p2 ? ">" === u6[0] ? (c4 = n5 ?? v, d6 = -1) : void 0 === u6[1] ? d6 = -2 : (d6 = c4.lastIndex - u6[2].length, a3 = u6[1], c4 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n5 = void 0);
        const x6 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l6 += c4 === v ? s5 + r3 : d6 >= 0 ? (e5.push(a3), s5.slice(0, d6) + h2 + s5.slice(d6) + o3 + x6) : s5 + o3 + (-2 === d6 ? i6 : x6);
      }
      return [V(t3, l6 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e5) {
        let r6;
        this.parts = [];
        let l6 = 0, a3 = 0;
        const u6 = t3.length - 1, d6 = this.parts, [f6, v7] = N(t3, i5);
        if (this.el = _S.createElement(f6, e5), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r6 = P.nextNode()) && d6.length < u6; ) {
          if (1 === r6.nodeType) {
            if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v7[a3++], s4 = r6.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i6);
              d6.push({ type: 1, index: l6, name: e6[2], strings: s4, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r6.removeAttribute(t4);
            } else t4.startsWith(o3) && (d6.push({ type: 6, index: l6 }), r6.removeAttribute(t4));
            if (y2.test(r6.tagName)) {
              const t4 = r6.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r6.textContent = s2 ? s2.emptyScript : "";
                for (let s4 = 0; s4 < i6; s4++) r6.append(t4[s4], c3()), P.nextNode(), d6.push({ type: 2, index: ++l6 });
                r6.append(t4[i6], c3());
              }
            }
          } else if (8 === r6.nodeType) if (r6.data === n3) d6.push({ type: 2, index: l6 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d6.push({ type: 7, index: l6 }), t4 += o3.length - 1;
          }
          l6++;
        }
      }
      static createElement(t3, i5) {
        const s4 = l2.createElement("template");
        return s4.innerHTML = t3, s4;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s4 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e5;
        let h6 = P.nextNode(), o6 = 0, n5 = 0, r6 = s4[0];
        for (; void 0 !== r6; ) {
          if (o6 === r6.index) {
            let i6;
            2 === r6.type ? i6 = new k(h6, h6.nextSibling, this, t3) : 1 === r6.type ? i6 = new r6.ctor(h6, r6.name, r6.strings, this, t3) : 6 === r6.type && (i6 = new Z(h6, this, t3)), this._$AV.push(i6), r6 = s4[++n5];
          }
          o6 !== r6?.index && (h6 = P.nextNode(), o6++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i5 = 0;
        for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s4, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s4 } = t3, e5 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
        if (this._$AH?._$AD === e5) this._$AH.p(i5);
        else {
          const t4 = new R(e5, this), s5 = t4.u(this.options);
          t4.p(i5), this.T(s5), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s4, e5 = 0;
        for (const h6 of t3) e5 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e5], s4._$AI(h6), e5++;
        e5 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e5), i5.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s4) {
        for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
          const s5 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s5;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s4, e5, h6) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = h6, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s4, e5) {
        const h6 = this.strings;
        let o6 = false;
        if (void 0 === h6) t3 = M(this, t3, i5, 0), o6 = !a2(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n5, r6;
          for (t3 = h6[0], n5 = 0; n5 < h6.length - 1; n5++) r6 = M(this, e6[s4 + n5], i5, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h6[n5 + 1]), this._$AH[n5] = r6;
        }
        o6 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s4, e5, h6) {
        super(t3, i5, s4, e5, h6), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s4 = this._$AH, e5 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h6 = t3 !== A && (s4 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s4), h6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s4) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s4) => {
      const e5 = s4?.renderBefore ?? i5;
      let h6 = e5._$litPart$;
      if (void 0 === h6) {
        const t4 = s4?.renderBefore ?? null;
        e5._$litPart$ = h6 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
      }
      return h6._$AI(t3), h6;
    };
  }
});

// ../_kit/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../_kit/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r6 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o6) => "object" == typeof o6 ? r4(t3, e5, o6) : ((t4, e6, o7) => {
    const r6 = e6.hasOwnProperty(o7);
    return e6.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
  })(t3, e5, o6);
}
var o5, r4;
var init_property = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r6) => {
      const { kind: n5, metadata: i5 } = r6;
      let s4 = globalThis.litPropertyMetadata.get(i5);
      if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n5) {
        const { name: o6 } = r6;
        return { set(r7) {
          const n6 = e5.get.call(this);
          e5.set.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        }, init(e6) {
          return void 0 !== e6 && this.C(o6, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n5) {
        const { name: o6 } = r6;
        return function(r7) {
          const n6 = this[o6];
          e5.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        };
      }
      throw Error("Unsupported decorator location: " + n5);
    };
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}
var init_state = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// dist/nabd-bestsellers.js
var nabd_bestsellers_exports = {};
__export(nabd_bestsellers_exports, {
  default: () => _2
});
function T2(t3) {
  var o6, l6, f6, p7, d6, S7, k6, R6, F7;
  const r6 = m2(t3 == null ? void 0 : t3.sale_price), e5 = m2((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), i5 = r6 && r6 < e5 ? r6 : m2(t3 == null ? void 0 : t3.price) || e5, a3 = Math.max(m2(t3 == null ? void 0 : t3.regular_price), m2(t3 == null ? void 0 : t3.price), i5), n5 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((A4) => String((A4 == null ? void 0 : A4.url) ?? A4 ?? "")).filter(Boolean), s4 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((o6 = t3 == null ? void 0 : t3.image) == null ? void 0 : o6.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? n5[0] ?? ""),
    images: n5,
    price: i5,
    regular: a3,
    discount: a3 > i5 ? Math.round((1 - i5 / a3) * 100) : 0,
    rating: m2(((l6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : l6.stars) ?? ((f6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : f6.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: m2((p7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : p7.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : m2(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: s4 == null || s4 === "" || !Number.isFinite(Number(s4)) ? null : Number(s4),
    endsAt: X((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((d6 = t3 == null ? void 0 : t3.category) == null ? void 0 : d6.name) ?? ((k6 = (S7 = t3 == null ? void 0 : t3.categories) == null ? void 0 : S7[0]) == null ? void 0 : k6.name) ?? ""),
    brand: String(((R6 = t3 == null ? void 0 : t3.brand) == null ? void 0 : R6.name) ?? ""),
    promo: String(((F7 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : F7.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function Q(t3) {
  var i5, a3, n5;
  const r6 = (i5 = b3()) == null ? void 0 : i5.product;
  if (!r6) return null;
  const e5 = r6.getDetails ? r6.getDetails.bind(r6) : (n5 = (a3 = r6.api) == null ? void 0 : a3.getDetails) == null ? void 0 : n5.bind(r6.api);
  if (!e5) return null;
  try {
    const s4 = await e5(t3, ["images", "sold_quantity", "category"]), o6 = T2((s4 == null ? void 0 : s4.data) ?? s4);
    return o6.name ? o6 : null;
  } catch {
    return null;
  }
}
async function W(t3) {
  await G();
  const r6 = "ids:" + t3.join(",");
  return v2.has(r6) || v2.set(r6, Promise.all(t3.map(Q)).then((e5) => e5.filter((i5) => !!i5))), v2.get(r6);
}
async function D2(t3, r6 = [], e5 = 12) {
  await G();
  const i5 = `src:${t3}:${r6.join(",")}:${e5}`;
  return v2.has(i5) || v2.set(i5, (async () => {
    var s4, o6, l6, f6;
    const a3 = (s4 = b3()) == null ? void 0 : s4.product, n5 = a3 != null && a3.fetch ? a3.fetch.bind(a3) : (l6 = (o6 = a3 == null ? void 0 : a3.api) == null ? void 0 : o6.fetch) == null ? void 0 : l6.bind(a3.api);
    if (!n5) return [];
    try {
      const p7 = { source: t3, per_page: e5 };
      r6.length && (p7.source_value = r6);
      const d6 = await n5(p7);
      return (Array.isArray(d6 == null ? void 0 : d6.data) ? d6.data : Array.isArray(d6) ? d6 : ((f6 = d6 == null ? void 0 : d6.data) == null ? void 0 : f6.products) ?? []).map(T2).filter((k6) => k6.name).slice(0, e5);
    } catch {
      return [];
    }
  })()), v2.get(i5);
}
async function V2(t3, r6 = "best_selling", e5 = 12) {
  const i5 = N2(t3);
  if (i5.length) return { items: (await W(i5)).slice(0, e5), auto: false };
  let a3 = await D2(r6, [], e5);
  return !a3.length && r6 !== "latest" && (a3 = await D2("latest", [], e5)), { items: a3, auto: true };
}
async function Z2(t3, r6 = 1, e5) {
  var i5, a3, n5;
  await G();
  try {
    return await ((n5 = (a3 = (i5 = b3()) == null ? void 0 : i5.cart) == null ? void 0 : a3.addItem) == null ? void 0 : n5.call(a3, e5 ? { id: t3, quantity: r6, notes: e5 } : { id: t3, quantity: r6 })), true;
  } catch {
    return false;
  }
}
function tt(t3, r6 = true) {
  var e5, i5, a3;
  try {
    (a3 = r6 ? (e5 = b3()) == null ? void 0 : e5.success : (i5 = b3()) == null ? void 0 : i5.error) == null || a3(t3);
  } catch {
  }
}
function H2() {
  try {
    return { ...B2(), ...JSON.parse(localStorage.getItem(C2) || "{}") };
  } catch {
    return B2();
  }
}
function et(t3) {
  try {
    localStorage.setItem(C2, JSON.stringify(t3));
  } catch {
  }
}
function j(t3) {
  const r6 = H2();
  return t3(r6), et(r6), r6;
}
function at() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(C2), sessionStorage.setItem(C2, "1");
  } catch {
  }
  return t3 ? j((r6) => {
    r6.visits += 1, r6.last = Date.now();
  }) : H2();
}
function it() {
  M2 || (M2 = true, rt("cart::item.added", (t3) => {
    var e5;
    const r6 = Number(((e5 = t3 == null ? void 0 : t3.data) == null ? void 0 : e5.product_id) ?? 0);
    r6 && j((i5) => {
      i5.carted.includes(r6) || (i5.carted = [...i5.carted.slice(-40), r6]);
    });
  }));
}
function dt(t3) {
  const r6 = lt[t3];
  if (!r6 || L2.has(r6)) return r6;
  L2.add(r6);
  const e5 = document.createElement("link");
  return e5.rel = "stylesheet", e5.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r6)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e5), r6;
}
var b3, G, P2, K, h3, y3, x2, g2, u3, m2, X, N2, v2, w2, rt, C2, B2, z2, M2, nt, ot, st, ct, lt, L2, gt, ut, E2, $2, bt, ft, I2, _2;
var init_nabd_bestsellers = __esm({
  "dist/nabd-bestsellers.js"() {
    "use strict";
    init_lit();
    init_decorators();
    b3 = () => window.salla ?? window.Salla;
    G = async () => {
      var t3, r6;
      try {
        await ((r6 = (t3 = b3()) == null ? void 0 : t3.onReady) == null ? void 0 : r6.call(t3));
      } catch {
      }
    };
    P2 = () => {
      var t3, r6, e5, i5, a3;
      try {
        const n5 = ((r6 = (t3 = b3()) == null ? void 0 : t3.lang) == null ? void 0 : r6.locale) ?? ((a3 = (i5 = (e5 = b3()) == null ? void 0 : e5.config) == null ? void 0 : i5.get) == null ? void 0 : a3.call(i5, "user.language_code"));
        if (typeof n5 == "string" && n5) return n5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    K = () => P2() === "en";
    h3 = (t3, r6) => K() ? r6 : t3;
    y3 = (t3, r6 = "") => {
      if (t3 == null) return r6;
      if (typeof t3 == "string") {
        const e5 = t3.trim();
        if (e5.startsWith("{") && e5.endsWith("}"))
          try {
            return y3(JSON.parse(e5), r6);
          } catch {
          }
        return e5 || r6;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const e5 = t3, i5 = e5[P2()] ?? e5.ar ?? e5.en ?? Object.values(e5).find((a3) => typeof a3 == "string" && a3);
        return typeof i5 == "string" && i5.trim() ? i5 : r6;
      }
      return r6;
    };
    x2 = (t3, r6 = "") => {
      const e5 = Array.isArray(t3) ? t3[0] : t3, i5 = typeof e5 == "object" && e5 ? e5.value : e5;
      return i5 == null || i5 === "" ? r6 : String(i5);
    };
    g2 = (t3, r6 = 0) => {
      const e5 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(e5) ? r6 : e5;
    };
    u3 = (t3, r6 = false) => t3 == null || t3 === "" ? r6 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    m2 = (t3) => {
      const r6 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(r6);
      return Number.isFinite(e5) ? e5 : 0;
    };
    X = (t3) => {
      if (!t3) return null;
      const r6 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(r6) && r6 > Date.now() ? r6 : null;
    };
    N2 = (t3) => (Array.isArray(t3) ? t3 : []).map((r6) => Number(typeof r6 == "object" && r6 ? r6.value : r6)).filter((r6) => Number.isFinite(r6) && r6 > 0);
    v2 = /* @__PURE__ */ new Map();
    w2 = (t3) => {
      var r6, e5;
      try {
        const i5 = (e5 = (r6 = b3()) == null ? void 0 : r6.money) == null ? void 0 : e5.call(r6, t3);
        if (i5) return String(i5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${h3("\u0631.\u0633", "SAR")}`;
    };
    rt = (t3, r6) => {
      var e5, i5, a3;
      try {
        (a3 = (i5 = (e5 = b3()) == null ? void 0 : e5.event) == null ? void 0 : i5.on) == null || a3.call(i5, t3, r6);
      } catch {
      }
    };
    C2 = "tw_smart_mem_v1";
    B2 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    z2 = (t3, r6 = 1) => j((e5) => {
      e5.seen[t3.id] = (e5.seen[t3.id] || 0) + r6, e5.prices = [...e5.prices.slice(-29), t3.price], t3.category && (e5.tags[t3.category] = (e5.tags[t3.category] || 0) + r6);
    });
    M2 = false;
    nt = () => {
      const t3 = innerWidth, r6 = navigator.userAgent;
      return /iPad|Tablet/i.test(r6) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r6) || t3 < 700 ? "mobile" : "desktop";
    };
    ot = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    st = Object.defineProperty;
    ct = (t3, r6, e5, i5) => {
      for (var a3 = void 0, n5 = t3.length - 1, s4; n5 >= 0; n5--)
        (s4 = t3[n5]) && (a3 = s4(r6, e5, a3) || a3);
      return a3 && st(r6, e5, a3), a3;
    };
    lt = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    L2 = /* @__PURE__ */ new Set();
    gt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    ut = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    E2 = class E3 extends i4 {
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
        this.io = new IntersectionObserver((r6) => {
          var e5;
          r6.some((i5) => i5.isIntersecting) && (this.setAttribute("in", ""), (e5 = this.io) == null || e5.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var r6;
        super.disconnectedCallback(), (r6 = this.io) == null || r6.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const r6 = this.c, e5 = Date.now(), i5 = Date.parse(String(r6.s_from || "")), a3 = Date.parse(String(r6.s_to || ""));
        if (Number.isFinite(i5) && e5 < i5 || Number.isFinite(a3) && e5 > a3) return true;
        const n5 = nt();
        return !!(u3(r6.s_hide_mobile) && n5 === "mobile" || u3(r6.s_hide_desktop) && n5 !== "mobile");
      }
      vars(r6 = "") {
        const e5 = this.c, i5 = [], a3 = (s4, o6) => {
          o6 !== "" && o6 != null && i5.push(`${s4}:${o6}`);
        };
        a3("--a", e5.s_accent || ""), a3("--a2", e5.s_accent2 || ""), a3("--bgc", e5.s_bg || ""), a3("--fgc", e5.s_text || ""), a3("--cardc", e5.s_card || ""), a3("--r", `${g2(e5.s_radius, 22)}px`), a3("--gap", `${g2(e5.s_gap, 18)}px`), a3("--ts", `${g2(e5.s_title_size, 38)}px`), a3("--fs", `${g2(e5.s_text_size, 16)}px`), a3("--pt", `${g2(e5.s_pad_top, 56)}px`), a3("--pb", `${g2(e5.s_pad_bottom, 56)}px`), a3("--maxw", gt[x2(e5.s_width, "normal")] ?? "1240px"), a3("--sh", ut[Math.max(0, Math.min(5, g2(e5.s_shadow, 2)))]), a3("--ms", `${g2(e5.s_anim_ms, 700)}ms`), a3("--ov", String(g2(e5.s_overlay, 45) / 100)), e5.s_bg_image && a3("--bgimg", `url("${String(e5.s_bg_image)}")`);
        const n5 = dt(x2(e5.s_font, "inherit"));
        return n5 && a3("font-family", `'${n5}', inherit`), i5.join(";") + (r6 ? ";" + r6 : "");
      }
      cls() {
        const r6 = this.c;
        return [
          "sec",
          `th-${x2(r6.s_theme, "auto")}`,
          `al-${x2(r6.s_align, "start")}`,
          `an-${x2(r6.s_anim, "rise")}`,
          `pt-${x2(r6.s_pattern, "none")}`,
          `bs-${x2(r6.s_btn_style, "pill")}`,
          u3(r6.s_border) ? "bordered" : "",
          u3(r6.s_stagger, true) ? "stagger" : "",
          r6.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(r6, e5 = {}, i5 = "", a3 = "", n5 = true) {
        if (this.hiddenNow()) return A;
        const s4 = this.c, o6 = y3(s4.eyebrow, e5.eyebrow ?? ""), l6 = y3(s4.title, e5.title ?? ""), f6 = y3(s4.subtitle, e5.sub ?? ""), p7 = n5 && u3(s4.s_show_head, true) && (o6 || l6 || f6);
        return b2`<section class="${this.cls()} ${i5}" style=${this.vars(a3)} id=${String(s4.s_anchor || "") || A}>
      <div class="wrap">${p7 ? b2`<header class="head">${o6 ? b2`<span class="eyebrow">${o6}</span>` : ""}${l6 ? b2`<h2 class="title">${l6}</h2>` : ""}${f6 ? b2`<p class="sub">${f6}</p>` : ""}</header>` : ""}
      ${r6}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(r6) {
        const e5 = r6.filter(Boolean);
        return !e5.length || !ot() || !u3(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${h3("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${e5.map((i5) => b2`<li>${i5}</li>`)}</ul></aside>`;
      }
      card(r6, e5 = {}) {
        var i5;
        return b2`<article class="pc ${r6.available ? "" : "oos"}">
      <a class="ph" href=${r6.url} @click=${() => z2(r6)}><img src=${r6.image} alt=${r6.name} loading="lazy" />${(i5 = e5.badges) != null && i5.length ? b2`<span class="badges">${e5.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r6.url} @click=${() => z2(r6)}>${r6.name}</a>
        <div class="pr"><b>${w2(r6.price)}</b>${r6.regular > r6.price ? b2`<s>${w2(r6.regular)}</s>` : ""}</div>
        ${e5.rating !== false && r6.rating > 0 ? b2`<div class="rt">★ ${r6.rating.toFixed(1)}${r6.ratingCount ? b2` <small>(${r6.ratingCount})</small>` : ""}</div>` : ""}
        ${e5.extra ?? ""}
        ${e5.quick !== false ? b2`<button class="btn sm" ?disabled=${!r6.available} @click=${() => this.add(r6)}>${r6.available ? h3("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : h3("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(r6, e5 = 1, i5) {
        z2(r6, 3), await Z2(r6.id, e5, i5) ? tt(h3("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = r6.url;
      }
    };
    E2.base = i`
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
    $2 = E2;
    ct([
      n4({ type: Object })
    ], $2.prototype, "config");
    bt = Object.defineProperty;
    ft = (t3, r6, e5, i5) => {
      for (var a3 = void 0, n5 = t3.length - 1, s4; n5 >= 0; n5--)
        (s4 = t3[n5]) && (a3 = s4(r6, e5, a3) || a3);
      return a3 && bt(r6, e5, a3), a3;
    };
    I2 = class I3 extends $2 {
      constructor() {
        super(...arguments), this.items = null, this.seq = 0;
      }
      willUpdate(r6) {
        r6.has("config") && this.load();
      }
      async load() {
        const r6 = ++this.seq, e5 = this.c, i5 = g2(e5.limit, 8);
        let a3 = N2(e5.products).length ? await W(N2(e5.products)) : await D2("best_selling", [], i5);
        a3.length || (a3 = (await V2(null, "latest", i5)).items), u3(e5.sort_by_sold, true) && a3.every((n5) => n5.sold != null) && (a3 = [...a3].sort((n5, s4) => (s4.sold ?? 0) - (n5.sold ?? 0))), u3(e5.hide_oos, false) && (a3 = a3.filter((n5) => n5.available)), r6 === this.seq && (this.items = a3.slice(0, i5));
      }
      render() {
        var s4;
        const r6 = this.c, e5 = this.items, i5 = u3(r6.show_sold, true), a3 = (o6) => i5 && o6.sold != null && o6.sold >= g2(r6.sold_min, 1) ? b2`<span class="sold">🔥 ${y3(r6.sold_text, h3("\u0628\u064A\u0639 \u0645\u0646\u0647 {n}", "{n} sold")).replace("{n}", o6.sold.toLocaleString(h3("ar-SA", "en")))}</span>` : "", n5 = g2(((s4 = e5 == null ? void 0 : e5[0]) == null ? void 0 : s4.sold) ?? 0, 0);
        return this.shell(
          e5 == null ? b2`<div class="skel"></div>` : b2`
      ${u3(r6.podium, true) && e5.length >= 3 ? b2`<div class="pod">${[1, 0, 2].map((o6) => {
            const l6 = e5[o6];
            return b2`<a class="pd r${o6 + 1}" href=${l6.url}><span class="medal m${o6 + 1}">${o6 + 1}</span><img src=${l6.image} alt="" loading="lazy" /><b>${l6.name}</b><div class="pr"><b>${w2(l6.price)}</b>${l6.regular > l6.price ? b2`<s>${w2(l6.regular)}</s>` : ""}</div>${a3(l6)}</a>`;
          })}</div>` : ""}
      <div class="list">${e5.slice(u3(r6.podium, true) && e5.length >= 3 ? 3 : 0).map((o6, l6) => b2`<a class="li" href=${o6.url}><span class="n">${l6 + (u3(r6.podium, true) && e5.length >= 3 ? 4 : 1)}</span><img src=${o6.image} alt="" loading="lazy" />
        <div><b>${o6.name}</b>${i5 && o6.sold != null && n5 ? b2`<div class="bar"><i style=${`width:${Math.round(o6.sold / n5 * 100)}%`}></i></div>` : ""}</div><div style="text-align:end"><b style="color:var(--A)">${w2(o6.price)}</b><br />${a3(o6)}</div></a>`)}</div>`,
          { eyebrow: h3("\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B", "Best sellers"), title: h3("\u0627\u0644\u0644\u064A \u064A\u0637\u0644\u0628\u0648\u0646\u0647 \u0641\u0639\u0644\u0627\u064B", "What people actually order"), sub: "" }
        );
      }
    };
    I2.styles = [$2.base, i`
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
    _2 = I2;
    ft([
      r5()
    ], _2.prototype, "items");
    typeof _2 < "u" && _2.registerSallaComponent("salla-nabd-bestsellers");
  }
});

// dist/nabd-cart-goals.js
var nabd_cart_goals_exports = {};
__export(nabd_cart_goals_exports, {
  default: () => k2
});
function Y(t3) {
  var c4, l6, g6, b5, d6, o6, p7, G5, R6;
  const r6 = x3(t3 == null ? void 0 : t3.sale_price), a3 = x3((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), i5 = r6 && r6 < a3 ? r6 : x3(t3 == null ? void 0 : t3.price) || a3, e5 = Math.max(x3(t3 == null ? void 0 : t3.regular_price), x3(t3 == null ? void 0 : t3.price), i5), n5 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((S7) => String((S7 == null ? void 0 : S7.url) ?? S7 ?? "")).filter(Boolean), s4 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((c4 = t3 == null ? void 0 : t3.image) == null ? void 0 : c4.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? n5[0] ?? ""),
    images: n5,
    price: i5,
    regular: e5,
    discount: e5 > i5 ? Math.round((1 - i5 / e5) * 100) : 0,
    rating: x3(((l6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : l6.stars) ?? ((g6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : g6.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: x3((b5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : b5.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : x3(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: s4 == null || s4 === "" || !Number.isFinite(Number(s4)) ? null : Number(s4),
    endsAt: Q2((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((d6 = t3 == null ? void 0 : t3.category) == null ? void 0 : d6.name) ?? ((p7 = (o6 = t3 == null ? void 0 : t3.categories) == null ? void 0 : o6[0]) == null ? void 0 : p7.name) ?? ""),
    brand: String(((G5 = t3 == null ? void 0 : t3.brand) == null ? void 0 : G5.name) ?? ""),
    promo: String(((R6 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : R6.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function Z3(t3) {
  var i5, e5, n5;
  const r6 = (i5 = f3()) == null ? void 0 : i5.product;
  if (!r6) return null;
  const a3 = r6.getDetails ? r6.getDetails.bind(r6) : (n5 = (e5 = r6.api) == null ? void 0 : e5.getDetails) == null ? void 0 : n5.bind(r6.api);
  if (!a3) return null;
  try {
    const s4 = await a3(t3, ["images", "sold_quantity", "category"]), c4 = Y((s4 == null ? void 0 : s4.data) ?? s4);
    return c4.name ? c4 : null;
  } catch {
    return null;
  }
}
async function tt2(t3) {
  await D3();
  const r6 = "ids:" + t3.join(",");
  return _3.has(r6) || _3.set(r6, Promise.all(t3.map(Z3)).then((a3) => a3.filter((i5) => !!i5))), _3.get(r6);
}
async function B3(t3, r6 = [], a3 = 12) {
  await D3();
  const i5 = `src:${t3}:${r6.join(",")}:${a3}`;
  return _3.has(i5) || _3.set(i5, (async () => {
    var s4, c4, l6, g6;
    const e5 = (s4 = f3()) == null ? void 0 : s4.product, n5 = e5 != null && e5.fetch ? e5.fetch.bind(e5) : (l6 = (c4 = e5 == null ? void 0 : e5.api) == null ? void 0 : c4.fetch) == null ? void 0 : l6.bind(e5.api);
    if (!n5) return [];
    try {
      const b5 = { source: t3, per_page: a3 };
      r6.length && (b5.source_value = r6);
      const d6 = await n5(b5);
      return (Array.isArray(d6 == null ? void 0 : d6.data) ? d6.data : Array.isArray(d6) ? d6 : ((g6 = d6 == null ? void 0 : d6.data) == null ? void 0 : g6.products) ?? []).map(Y).filter((p7) => p7.name).slice(0, a3);
    } catch {
      return [];
    }
  })()), _3.get(i5);
}
async function rt2(t3, r6 = "best_selling", a3 = 12) {
  const i5 = V3(t3);
  if (i5.length) return { items: (await tt2(i5)).slice(0, a3), auto: false };
  let e5 = await B3(r6, [], a3);
  return !e5.length && r6 !== "latest" && (e5 = await B3("latest", [], a3)), { items: e5, auto: true };
}
async function at2(t3, r6 = 1, a3) {
  var i5, e5, n5;
  await D3();
  try {
    return await ((n5 = (e5 = (i5 = f3()) == null ? void 0 : i5.cart) == null ? void 0 : e5.addItem) == null ? void 0 : n5.call(e5, a3 ? { id: t3, quantity: r6, notes: a3 } : { id: t3, quantity: r6 })), true;
  } catch {
    return false;
  }
}
function et2(t3, r6 = true) {
  var a3, i5, e5;
  try {
    (e5 = r6 ? (a3 = f3()) == null ? void 0 : a3.success : (i5 = f3()) == null ? void 0 : i5.error) == null || e5(t3);
  } catch {
  }
}
async function it2() {
  var t3, r6, a3, i5, e5, n5, s4, c4;
  await D3();
  try {
    const l6 = await ((s4 = ((r6 = (t3 = f3()) == null ? void 0 : t3.cart) == null ? void 0 : r6.details) ?? ((e5 = (i5 = (a3 = f3()) == null ? void 0 : a3.cart) == null ? void 0 : i5.api) == null ? void 0 : e5.details)) == null ? void 0 : s4.call((n5 = f3()) == null ? void 0 : n5.cart, null)), g6 = ((c4 = l6 == null ? void 0 : l6.data) == null ? void 0 : c4.cart) ?? (l6 == null ? void 0 : l6.data) ?? l6;
    if (!g6) return null;
    const b5 = Array.isArray(g6.items) ? g6.items : [];
    return { total: x3(g6.sub_total ?? g6.total), count: b5.reduce((d6, o6) => d6 + x3(o6.quantity || 1), 0), ids: b5.map((d6) => Number(d6.product_id ?? d6.id)) };
  } catch {
    return null;
  }
}
function W2() {
  try {
    return { ...q(), ...JSON.parse(localStorage.getItem(N3) || "{}") };
  } catch {
    return q();
  }
}
function nt2(t3) {
  try {
    localStorage.setItem(N3, JSON.stringify(t3));
  } catch {
  }
}
function E4(t3) {
  const r6 = W2();
  return t3(r6), nt2(r6), r6;
}
function st2() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(N3), sessionStorage.setItem(N3, "1");
  } catch {
  }
  return t3 ? E4((r6) => {
    r6.visits += 1, r6.last = Date.now();
  }) : W2();
}
function ot2() {
  L3 || (L3 = true, z3("cart::item.added", (t3) => {
    var a3;
    const r6 = Number(((a3 = t3 == null ? void 0 : t3.data) == null ? void 0 : a3.product_id) ?? 0);
    r6 && E4((i5) => {
      i5.carted.includes(r6) || (i5.carted = [...i5.carted.slice(-40), r6]);
    });
  }));
}
function bt2(t3) {
  const r6 = ut2[t3];
  if (!r6 || M3.has(r6)) return r6;
  M3.add(r6);
  const a3 = document.createElement("link");
  return a3.rel = "stylesheet", a3.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r6)}:wght@400;500;700;800&display=swap`, document.head.appendChild(a3), r6;
}
var f3, D3, T3, K2, h4, w3, v3, m3, y4, X2, x3, Q2, V3, _3, $3, z3, N3, q, j2, L3, ct2, lt2, dt2, gt2, ut2, M3, ft2, pt, I4, C3, ht, H3, F, k2;
var init_nabd_cart_goals = __esm({
  "dist/nabd-cart-goals.js"() {
    "use strict";
    init_lit();
    init_decorators();
    f3 = () => window.salla ?? window.Salla;
    D3 = async () => {
      var t3, r6;
      try {
        await ((r6 = (t3 = f3()) == null ? void 0 : t3.onReady) == null ? void 0 : r6.call(t3));
      } catch {
      }
    };
    T3 = () => {
      var t3, r6, a3, i5, e5;
      try {
        const n5 = ((r6 = (t3 = f3()) == null ? void 0 : t3.lang) == null ? void 0 : r6.locale) ?? ((e5 = (i5 = (a3 = f3()) == null ? void 0 : a3.config) == null ? void 0 : i5.get) == null ? void 0 : e5.call(i5, "user.language_code"));
        if (typeof n5 == "string" && n5) return n5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    K2 = () => T3() === "en";
    h4 = (t3, r6) => K2() ? r6 : t3;
    w3 = (t3, r6 = "") => {
      if (t3 == null) return r6;
      if (typeof t3 == "string") {
        const a3 = t3.trim();
        if (a3.startsWith("{") && a3.endsWith("}"))
          try {
            return w3(JSON.parse(a3), r6);
          } catch {
          }
        return a3 || r6;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const a3 = t3, i5 = a3[T3()] ?? a3.ar ?? a3.en ?? Object.values(a3).find((e5) => typeof e5 == "string" && e5);
        return typeof i5 == "string" && i5.trim() ? i5 : r6;
      }
      return r6;
    };
    v3 = (t3, r6 = "") => {
      const a3 = Array.isArray(t3) ? t3[0] : t3, i5 = typeof a3 == "object" && a3 ? a3.value : a3;
      return i5 == null || i5 === "" ? r6 : String(i5);
    };
    m3 = (t3, r6 = 0) => {
      const a3 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(a3) ? r6 : a3;
    };
    y4 = (t3, r6 = false) => t3 == null || t3 === "" ? r6 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    X2 = (t3) => Array.isArray(t3) ? t3 : [];
    x3 = (t3) => {
      const r6 = typeof t3 == "object" && t3 ? t3.amount : t3, a3 = Number(r6);
      return Number.isFinite(a3) ? a3 : 0;
    };
    Q2 = (t3) => {
      if (!t3) return null;
      const r6 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(r6) && r6 > Date.now() ? r6 : null;
    };
    V3 = (t3) => (Array.isArray(t3) ? t3 : []).map((r6) => Number(typeof r6 == "object" && r6 ? r6.value : r6)).filter((r6) => Number.isFinite(r6) && r6 > 0);
    _3 = /* @__PURE__ */ new Map();
    $3 = (t3) => {
      var r6, a3;
      try {
        const i5 = (a3 = (r6 = f3()) == null ? void 0 : r6.money) == null ? void 0 : a3.call(r6, t3);
        if (i5) return String(i5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${h4("\u0631.\u0633", "SAR")}`;
    };
    z3 = (t3, r6) => {
      var a3, i5, e5;
      try {
        (e5 = (i5 = (a3 = f3()) == null ? void 0 : a3.event) == null ? void 0 : i5.on) == null || e5.call(i5, t3, r6);
      } catch {
      }
    };
    N3 = "tw_smart_mem_v1";
    q = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    j2 = (t3, r6 = 1) => E4((a3) => {
      a3.seen[t3.id] = (a3.seen[t3.id] || 0) + r6, a3.prices = [...a3.prices.slice(-29), t3.price], t3.category && (a3.tags[t3.category] = (a3.tags[t3.category] || 0) + r6);
    });
    L3 = false;
    ct2 = () => {
      const t3 = innerWidth, r6 = navigator.userAgent;
      return /iPad|Tablet/i.test(r6) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r6) || t3 < 700 ? "mobile" : "desktop";
    };
    lt2 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    dt2 = Object.defineProperty;
    gt2 = (t3, r6, a3, i5) => {
      for (var e5 = void 0, n5 = t3.length - 1, s4; n5 >= 0; n5--)
        (s4 = t3[n5]) && (e5 = s4(r6, a3, e5) || e5);
      return e5 && dt2(r6, a3, e5), e5;
    };
    ut2 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    M3 = /* @__PURE__ */ new Set();
    ft2 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    pt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    I4 = class I5 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), ot2(), st2();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((r6) => {
          var a3;
          r6.some((i5) => i5.isIntersecting) && (this.setAttribute("in", ""), (a3 = this.io) == null || a3.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var r6;
        super.disconnectedCallback(), (r6 = this.io) == null || r6.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const r6 = this.c, a3 = Date.now(), i5 = Date.parse(String(r6.s_from || "")), e5 = Date.parse(String(r6.s_to || ""));
        if (Number.isFinite(i5) && a3 < i5 || Number.isFinite(e5) && a3 > e5) return true;
        const n5 = ct2();
        return !!(y4(r6.s_hide_mobile) && n5 === "mobile" || y4(r6.s_hide_desktop) && n5 !== "mobile");
      }
      vars(r6 = "") {
        const a3 = this.c, i5 = [], e5 = (s4, c4) => {
          c4 !== "" && c4 != null && i5.push(`${s4}:${c4}`);
        };
        e5("--a", a3.s_accent || ""), e5("--a2", a3.s_accent2 || ""), e5("--bgc", a3.s_bg || ""), e5("--fgc", a3.s_text || ""), e5("--cardc", a3.s_card || ""), e5("--r", `${m3(a3.s_radius, 22)}px`), e5("--gap", `${m3(a3.s_gap, 18)}px`), e5("--ts", `${m3(a3.s_title_size, 38)}px`), e5("--fs", `${m3(a3.s_text_size, 16)}px`), e5("--pt", `${m3(a3.s_pad_top, 56)}px`), e5("--pb", `${m3(a3.s_pad_bottom, 56)}px`), e5("--maxw", ft2[v3(a3.s_width, "normal")] ?? "1240px"), e5("--sh", pt[Math.max(0, Math.min(5, m3(a3.s_shadow, 2)))]), e5("--ms", `${m3(a3.s_anim_ms, 700)}ms`), e5("--ov", String(m3(a3.s_overlay, 45) / 100)), a3.s_bg_image && e5("--bgimg", `url("${String(a3.s_bg_image)}")`);
        const n5 = bt2(v3(a3.s_font, "inherit"));
        return n5 && e5("font-family", `'${n5}', inherit`), i5.join(";") + (r6 ? ";" + r6 : "");
      }
      cls() {
        const r6 = this.c;
        return [
          "sec",
          `th-${v3(r6.s_theme, "auto")}`,
          `al-${v3(r6.s_align, "start")}`,
          `an-${v3(r6.s_anim, "rise")}`,
          `pt-${v3(r6.s_pattern, "none")}`,
          `bs-${v3(r6.s_btn_style, "pill")}`,
          y4(r6.s_border) ? "bordered" : "",
          y4(r6.s_stagger, true) ? "stagger" : "",
          r6.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(r6, a3 = {}, i5 = "", e5 = "", n5 = true) {
        if (this.hiddenNow()) return A;
        const s4 = this.c, c4 = w3(s4.eyebrow, a3.eyebrow ?? ""), l6 = w3(s4.title, a3.title ?? ""), g6 = w3(s4.subtitle, a3.sub ?? ""), b5 = n5 && y4(s4.s_show_head, true) && (c4 || l6 || g6);
        return b2`<section class="${this.cls()} ${i5}" style=${this.vars(e5)} id=${String(s4.s_anchor || "") || A}>
      <div class="wrap">${b5 ? b2`<header class="head">${c4 ? b2`<span class="eyebrow">${c4}</span>` : ""}${l6 ? b2`<h2 class="title">${l6}</h2>` : ""}${g6 ? b2`<p class="sub">${g6}</p>` : ""}</header>` : ""}
      ${r6}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(r6) {
        const a3 = r6.filter(Boolean);
        return !a3.length || !lt2() || !y4(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${h4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${a3.map((i5) => b2`<li>${i5}</li>`)}</ul></aside>`;
      }
      card(r6, a3 = {}) {
        var i5;
        return b2`<article class="pc ${r6.available ? "" : "oos"}">
      <a class="ph" href=${r6.url} @click=${() => j2(r6)}><img src=${r6.image} alt=${r6.name} loading="lazy" />${(i5 = a3.badges) != null && i5.length ? b2`<span class="badges">${a3.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r6.url} @click=${() => j2(r6)}>${r6.name}</a>
        <div class="pr"><b>${$3(r6.price)}</b>${r6.regular > r6.price ? b2`<s>${$3(r6.regular)}</s>` : ""}</div>
        ${a3.rating !== false && r6.rating > 0 ? b2`<div class="rt">★ ${r6.rating.toFixed(1)}${r6.ratingCount ? b2` <small>(${r6.ratingCount})</small>` : ""}</div>` : ""}
        ${a3.extra ?? ""}
        ${a3.quick !== false ? b2`<button class="btn sm" ?disabled=${!r6.available} @click=${() => this.add(r6)}>${r6.available ? h4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : h4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(r6, a3 = 1, i5) {
        j2(r6, 3), await at2(r6.id, a3, i5) ? et2(h4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = r6.url;
      }
    };
    I4.base = i`
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
    C3 = I4;
    gt2([
      n4({ type: Object })
    ], C3.prototype, "config");
    ht = Object.defineProperty;
    H3 = (t3, r6, a3, i5) => {
      for (var e5 = void 0, n5 = t3.length - 1, s4; n5 >= 0; n5--)
        (s4 = t3[n5]) && (e5 = s4(r6, a3, e5) || e5);
      return e5 && ht(r6, a3, e5), e5;
    };
    F = class F2 extends C3 {
      constructor() {
        super(...arguments), this.cart = null, this.pool = [];
      }
      connectedCallback() {
        super.connectedCallback();
        const r6 = () => it2().then((a3) => this.cart = a3);
        r6(), z3("cart::updated", r6), z3("cart::item.added", r6), z3("cart::item.deleted", r6);
      }
      willUpdate(r6) {
        r6.has("config") && y4(this.c.suggest, true) && rt2(this.c.products, v3(this.c.auto_source, "best_selling"), 30).then((a3) => this.pool = a3.items.filter((i5) => i5.available));
      }
      render() {
        var d6;
        const r6 = this.c, a3 = X2(r6.goals).map((o6) => ({ at: m3(o6.amount), label: w3(o6.label), emoji: w3(o6.emoji, "\u{1F381}") })).filter((o6) => o6.at > 0).sort((o6, p7) => o6.at - p7.at);
        if (!a3.length) return this.hints([h4("\u0623\u0636\u0641 \u0623\u0647\u062F\u0627\u0641\u0627\u064B \u0645\u062B\u0644 \xAB\u0634\u062D\u0646 \u0645\u062C\u0627\u0646\u064A \u0639\u0646\u062F 200\xBB.", "Add goals like free shipping at 200.")]) || A;
        const i5 = ((d6 = this.cart) == null ? void 0 : d6.total) ?? 0;
        if (!i5 && y4(r6.hide_empty_cart, false)) return A;
        const e5 = a3[a3.length - 1].at, n5 = a3.find((o6) => i5 < o6.at), s4 = n5 ? n5.at - i5 : 0, c4 = n5 ? this.pool.filter((o6) => {
          var p7;
          return o6.price >= s4 && !((p7 = this.cart) != null && p7.ids.includes(o6.id));
        }).sort((o6, p7) => o6.price - p7.price)[0] : null, l6 = n5 ? w3(r6.msg_next, h4("\u0628\u0627\u0642\u064A {gap} \u0648\u062A\u062D\u0635\u0644 \u0639\u0644\u0649 {goal}", "Add {gap} more to get {goal}")).replace("{gap}", $3(s4)).replace("{goal}", `${n5.emoji} ${n5.label}`) : w3(r6.msg_done, h4("\u0645\u0628\u0631\u0648\u0643! \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0643\u0644 \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A \u{1F389}", "Congrats! You unlocked every reward \u{1F389}")), g6 = l6.split($3(s4)), b5 = b2`<div class="box">
      <div class="msg">${n5 && g6.length === 2 ? b2`${g6[0]}<b>${$3(s4)}</b>${g6[1]}` : l6}</div>
      <div class="track"><div class="fill" style=${`width:${Math.min(100, i5 / e5 * 100)}%`}></div>
        ${a3.map((o6) => b2`<div class="pt ${i5 >= o6.at ? "ok" : ""}" style=${`inset-inline-start:calc(${o6.at / e5 * 100}% - 17px);translate:0 -50%`}><i>${o6.emoji}</i><small>${o6.label} · ${$3(o6.at)}</small></div>`)}</div>
      ${c4 && y4(r6.suggest, true) ? b2`<div class="gap"><img src=${c4.image} alt="" /><div>${w3(r6.suggest_text, h4("\u064A\u0643\u0645\u0651\u0644 \u0644\u0643 \u0627\u0644\u0647\u062F\u0641:", "Closes the gap:"))}<b>${c4.name} · ${$3(c4.price)}</b></div><button class="btn sm" @click=${() => this.add(c4)}>${h4("\u0623\u0636\u0641", "Add")}</button></div>` : ""}
    </div>`;
        return v3(r6.position, "inline") === "fixed" ? this.hiddenNow() ? A : b2`<div class="${this.cls()} bar-fixed" style=${this.vars()}>${b5}</div>` : this.shell(b2`<div class="panel">${b5}</div>`, { eyebrow: h4("\u0646\u0628\u0636 \u0633\u0644\u062A\u0643", "Your cart pulse"), title: "" });
      }
    };
    F.styles = [C3.base, i`
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
    k2 = F;
    H3([
      r5()
    ], k2.prototype, "cart");
    H3([
      r5()
    ], k2.prototype, "pool");
    typeof k2 < "u" && k2.registerSallaComponent("salla-nabd-cart-goals");
  }
});

// dist/nabd-deals.js
var nabd_deals_exports = {};
__export(nabd_deals_exports, {
  default: () => y5
});
function W3(t3) {
  var o6, h6, b5, x6, u6, z7, _5, E6, F7;
  const r6 = p3(t3 == null ? void 0 : t3.sale_price), e5 = p3((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), n5 = r6 && r6 < e5 ? r6 : p3(t3 == null ? void 0 : t3.price) || e5, a3 = Math.max(p3(t3 == null ? void 0 : t3.regular_price), p3(t3 == null ? void 0 : t3.price), n5), i5 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((A4) => String((A4 == null ? void 0 : A4.url) ?? A4 ?? "")).filter(Boolean), s4 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((o6 = t3 == null ? void 0 : t3.image) == null ? void 0 : o6.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? i5[0] ?? ""),
    images: i5,
    price: n5,
    regular: a3,
    discount: a3 > n5 ? Math.round((1 - n5 / a3) * 100) : 0,
    rating: p3(((h6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : h6.stars) ?? ((b5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : b5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: p3((x6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : x6.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : p3(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: s4 == null || s4 === "" || !Number.isFinite(Number(s4)) ? null : Number(s4),
    endsAt: K3((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((u6 = t3 == null ? void 0 : t3.category) == null ? void 0 : u6.name) ?? ((_5 = (z7 = t3 == null ? void 0 : t3.categories) == null ? void 0 : z7[0]) == null ? void 0 : _5.name) ?? ""),
    brand: String(((E6 = t3 == null ? void 0 : t3.brand) == null ? void 0 : E6.name) ?? ""),
    promo: String(((F7 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : F7.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function Q3(t3) {
  var n5, a3, i5;
  const r6 = (n5 = f4()) == null ? void 0 : n5.product;
  if (!r6) return null;
  const e5 = r6.getDetails ? r6.getDetails.bind(r6) : (i5 = (a3 = r6.api) == null ? void 0 : a3.getDetails) == null ? void 0 : i5.bind(r6.api);
  if (!e5) return null;
  try {
    const s4 = await e5(t3, ["images", "sold_quantity", "category"]), o6 = W3((s4 == null ? void 0 : s4.data) ?? s4);
    return o6.name ? o6 : null;
  } catch {
    return null;
  }
}
async function V4(t3) {
  await D4();
  const r6 = "ids:" + t3.join(",");
  return v4.has(r6) || v4.set(r6, Promise.all(t3.map(Q3)).then((e5) => e5.filter((n5) => !!n5))), v4.get(r6);
}
async function R2(t3, r6 = [], e5 = 12) {
  await D4();
  const n5 = `src:${t3}:${r6.join(",")}:${e5}`;
  return v4.has(n5) || v4.set(n5, (async () => {
    var s4, o6, h6, b5;
    const a3 = (s4 = f4()) == null ? void 0 : s4.product, i5 = a3 != null && a3.fetch ? a3.fetch.bind(a3) : (h6 = (o6 = a3 == null ? void 0 : a3.api) == null ? void 0 : o6.fetch) == null ? void 0 : h6.bind(a3.api);
    if (!i5) return [];
    try {
      const x6 = { source: t3, per_page: e5 };
      r6.length && (x6.source_value = r6);
      const u6 = await i5(x6);
      return (Array.isArray(u6 == null ? void 0 : u6.data) ? u6.data : Array.isArray(u6) ? u6 : ((b5 = u6 == null ? void 0 : u6.data) == null ? void 0 : b5.products) ?? []).map(W3).filter((_5) => _5.name).slice(0, e5);
    } catch {
      return [];
    }
  })()), v4.get(n5);
}
async function Z4(t3, r6 = "best_selling", e5 = 12) {
  const n5 = X3(t3);
  if (n5.length) return { items: (await V4(n5)).slice(0, e5), auto: false };
  let a3 = await R2(r6, [], e5);
  return !a3.length && r6 !== "latest" && (a3 = await R2("latest", [], e5)), { items: a3, auto: true };
}
async function tt3(t3, r6 = 1, e5) {
  var n5, a3, i5;
  await D4();
  try {
    return await ((i5 = (a3 = (n5 = f4()) == null ? void 0 : n5.cart) == null ? void 0 : a3.addItem) == null ? void 0 : i5.call(a3, e5 ? { id: t3, quantity: r6, notes: e5 } : { id: t3, quantity: r6 })), true;
  } catch {
    return false;
  }
}
function rt3(t3, r6 = true) {
  var e5, n5, a3;
  try {
    (a3 = r6 ? (e5 = f4()) == null ? void 0 : e5.success : (n5 = f4()) == null ? void 0 : n5.error) == null || a3(t3);
  } catch {
  }
}
function k3() {
  try {
    return { ...j3(), ...JSON.parse(localStorage.getItem(S3) || "{}") };
  } catch {
    return j3();
  }
}
function at3(t3) {
  try {
    localStorage.setItem(S3, JSON.stringify(t3));
  } catch {
  }
}
function G2(t3) {
  const r6 = k3();
  return t3(r6), at3(r6), r6;
}
function nt3() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(S3), sessionStorage.setItem(S3, "1");
  } catch {
  }
  return t3 ? G2((r6) => {
    r6.visits += 1, r6.last = Date.now();
  }) : k3();
}
function it3() {
  const t3 = [...k3().prices].sort((r6, e5) => r6 - e5);
  return t3.length >= 3 ? t3[Math.floor(t3.length / 2)] : 0;
}
function st3(t3, r6 = k3()) {
  let e5 = (r6.seen[t3.id] || 0) * 2 + (r6.carted.includes(t3.id) ? 4 : 0) + (t3.category && r6.tags[t3.category] || 0);
  const n5 = it3();
  return n5 && (e5 += Math.max(0, 2 - Math.abs(t3.price - n5) / n5 * 2)), e5;
}
function ct3() {
  B4 || (B4 = true, et3("cart::item.added", (t3) => {
    var e5;
    const r6 = Number(((e5 = t3 == null ? void 0 : t3.data) == null ? void 0 : e5.product_id) ?? 0);
    r6 && G2((n5) => {
      n5.carted.includes(r6) || (n5.carted = [...n5.carted.slice(-40), r6]);
    });
  }));
}
function ht2(t3) {
  const r6 = ft3[t3];
  if (!r6 || O.has(r6)) return r6;
  O.add(r6);
  const e5 = document.createElement("link");
  return e5.rel = "stylesheet", e5.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r6)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e5), r6;
}
var f4, D4, T4, U, l3, w4, m4, d3, g3, p3, K3, X3, v4, C4, et3, S3, j3, N4, ot3, B4, lt3, dt3, ut3, gt3, ft3, O, bt3, mt, I6, $4, pt2, Y2, M4, y5;
var init_nabd_deals = __esm({
  "dist/nabd-deals.js"() {
    "use strict";
    init_lit();
    init_decorators();
    f4 = () => window.salla ?? window.Salla;
    D4 = async () => {
      var t3, r6;
      try {
        await ((r6 = (t3 = f4()) == null ? void 0 : t3.onReady) == null ? void 0 : r6.call(t3));
      } catch {
      }
    };
    T4 = () => {
      var t3, r6, e5, n5, a3;
      try {
        const i5 = ((r6 = (t3 = f4()) == null ? void 0 : t3.lang) == null ? void 0 : r6.locale) ?? ((a3 = (n5 = (e5 = f4()) == null ? void 0 : e5.config) == null ? void 0 : n5.get) == null ? void 0 : a3.call(n5, "user.language_code"));
        if (typeof i5 == "string" && i5) return i5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    U = () => T4() === "en";
    l3 = (t3, r6) => U() ? r6 : t3;
    w4 = (t3, r6 = "") => {
      if (t3 == null) return r6;
      if (typeof t3 == "string") {
        const e5 = t3.trim();
        if (e5.startsWith("{") && e5.endsWith("}"))
          try {
            return w4(JSON.parse(e5), r6);
          } catch {
          }
        return e5 || r6;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const e5 = t3, n5 = e5[T4()] ?? e5.ar ?? e5.en ?? Object.values(e5).find((a3) => typeof a3 == "string" && a3);
        return typeof n5 == "string" && n5.trim() ? n5 : r6;
      }
      return r6;
    };
    m4 = (t3, r6 = "") => {
      const e5 = Array.isArray(t3) ? t3[0] : t3, n5 = typeof e5 == "object" && e5 ? e5.value : e5;
      return n5 == null || n5 === "" ? r6 : String(n5);
    };
    d3 = (t3, r6 = 0) => {
      const e5 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(e5) ? r6 : e5;
    };
    g3 = (t3, r6 = false) => t3 == null || t3 === "" ? r6 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    p3 = (t3) => {
      const r6 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(r6);
      return Number.isFinite(e5) ? e5 : 0;
    };
    K3 = (t3) => {
      if (!t3) return null;
      const r6 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(r6) && r6 > Date.now() ? r6 : null;
    };
    X3 = (t3) => (Array.isArray(t3) ? t3 : []).map((r6) => Number(typeof r6 == "object" && r6 ? r6.value : r6)).filter((r6) => Number.isFinite(r6) && r6 > 0);
    v4 = /* @__PURE__ */ new Map();
    C4 = (t3) => {
      var r6, e5;
      try {
        const n5 = (e5 = (r6 = f4()) == null ? void 0 : r6.money) == null ? void 0 : e5.call(r6, t3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${l3("\u0631.\u0633", "SAR")}`;
    };
    et3 = (t3, r6) => {
      var e5, n5, a3;
      try {
        (a3 = (n5 = (e5 = f4()) == null ? void 0 : e5.event) == null ? void 0 : n5.on) == null || a3.call(n5, t3, r6);
      } catch {
      }
    };
    S3 = "tw_smart_mem_v1";
    j3 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    N4 = (t3, r6 = 1) => G2((e5) => {
      e5.seen[t3.id] = (e5.seen[t3.id] || 0) + r6, e5.prices = [...e5.prices.slice(-29), t3.price], t3.category && (e5.tags[t3.category] = (e5.tags[t3.category] || 0) + r6);
    });
    ot3 = (t3, r6 = true) => {
      if (!r6) return t3;
      const e5 = k3();
      return t3.map((n5, a3) => ({ p: n5, i: a3, s: st3(n5, e5) })).sort((n5, a3) => a3.s - n5.s || n5.i - a3.i).map((n5) => n5.p);
    };
    B4 = false;
    lt3 = () => {
      const t3 = innerWidth, r6 = navigator.userAgent;
      return /iPad|Tablet/i.test(r6) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r6) || t3 < 700 ? "mobile" : "desktop";
    };
    dt3 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    ut3 = Object.defineProperty;
    gt3 = (t3, r6, e5, n5) => {
      for (var a3 = void 0, i5 = t3.length - 1, s4; i5 >= 0; i5--)
        (s4 = t3[i5]) && (a3 = s4(r6, e5, a3) || a3);
      return a3 && ut3(r6, e5, a3), a3;
    };
    ft3 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    O = /* @__PURE__ */ new Set();
    bt3 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    mt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    I6 = class I7 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), ct3(), nt3();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((r6) => {
          var e5;
          r6.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (e5 = this.io) == null || e5.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var r6;
        super.disconnectedCallback(), (r6 = this.io) == null || r6.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const r6 = this.c, e5 = Date.now(), n5 = Date.parse(String(r6.s_from || "")), a3 = Date.parse(String(r6.s_to || ""));
        if (Number.isFinite(n5) && e5 < n5 || Number.isFinite(a3) && e5 > a3) return true;
        const i5 = lt3();
        return !!(g3(r6.s_hide_mobile) && i5 === "mobile" || g3(r6.s_hide_desktop) && i5 !== "mobile");
      }
      vars(r6 = "") {
        const e5 = this.c, n5 = [], a3 = (s4, o6) => {
          o6 !== "" && o6 != null && n5.push(`${s4}:${o6}`);
        };
        a3("--a", e5.s_accent || ""), a3("--a2", e5.s_accent2 || ""), a3("--bgc", e5.s_bg || ""), a3("--fgc", e5.s_text || ""), a3("--cardc", e5.s_card || ""), a3("--r", `${d3(e5.s_radius, 22)}px`), a3("--gap", `${d3(e5.s_gap, 18)}px`), a3("--ts", `${d3(e5.s_title_size, 38)}px`), a3("--fs", `${d3(e5.s_text_size, 16)}px`), a3("--pt", `${d3(e5.s_pad_top, 56)}px`), a3("--pb", `${d3(e5.s_pad_bottom, 56)}px`), a3("--maxw", bt3[m4(e5.s_width, "normal")] ?? "1240px"), a3("--sh", mt[Math.max(0, Math.min(5, d3(e5.s_shadow, 2)))]), a3("--ms", `${d3(e5.s_anim_ms, 700)}ms`), a3("--ov", String(d3(e5.s_overlay, 45) / 100)), e5.s_bg_image && a3("--bgimg", `url("${String(e5.s_bg_image)}")`);
        const i5 = ht2(m4(e5.s_font, "inherit"));
        return i5 && a3("font-family", `'${i5}', inherit`), n5.join(";") + (r6 ? ";" + r6 : "");
      }
      cls() {
        const r6 = this.c;
        return [
          "sec",
          `th-${m4(r6.s_theme, "auto")}`,
          `al-${m4(r6.s_align, "start")}`,
          `an-${m4(r6.s_anim, "rise")}`,
          `pt-${m4(r6.s_pattern, "none")}`,
          `bs-${m4(r6.s_btn_style, "pill")}`,
          g3(r6.s_border) ? "bordered" : "",
          g3(r6.s_stagger, true) ? "stagger" : "",
          r6.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(r6, e5 = {}, n5 = "", a3 = "", i5 = true) {
        if (this.hiddenNow()) return A;
        const s4 = this.c, o6 = w4(s4.eyebrow, e5.eyebrow ?? ""), h6 = w4(s4.title, e5.title ?? ""), b5 = w4(s4.subtitle, e5.sub ?? ""), x6 = i5 && g3(s4.s_show_head, true) && (o6 || h6 || b5);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(a3)} id=${String(s4.s_anchor || "") || A}>
      <div class="wrap">${x6 ? b2`<header class="head">${o6 ? b2`<span class="eyebrow">${o6}</span>` : ""}${h6 ? b2`<h2 class="title">${h6}</h2>` : ""}${b5 ? b2`<p class="sub">${b5}</p>` : ""}</header>` : ""}
      ${r6}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(r6) {
        const e5 = r6.filter(Boolean);
        return !e5.length || !dt3() || !g3(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${l3("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${e5.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(r6, e5 = {}) {
        var n5;
        return b2`<article class="pc ${r6.available ? "" : "oos"}">
      <a class="ph" href=${r6.url} @click=${() => N4(r6)}><img src=${r6.image} alt=${r6.name} loading="lazy" />${(n5 = e5.badges) != null && n5.length ? b2`<span class="badges">${e5.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r6.url} @click=${() => N4(r6)}>${r6.name}</a>
        <div class="pr"><b>${C4(r6.price)}</b>${r6.regular > r6.price ? b2`<s>${C4(r6.regular)}</s>` : ""}</div>
        ${e5.rating !== false && r6.rating > 0 ? b2`<div class="rt">★ ${r6.rating.toFixed(1)}${r6.ratingCount ? b2` <small>(${r6.ratingCount})</small>` : ""}</div>` : ""}
        ${e5.extra ?? ""}
        ${e5.quick !== false ? b2`<button class="btn sm" ?disabled=${!r6.available} @click=${() => this.add(r6)}>${r6.available ? l3("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : l3("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(r6, e5 = 1, n5) {
        N4(r6, 3), await tt3(r6.id, e5, n5) ? rt3(l3("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = r6.url;
      }
    };
    I6.base = i`
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
    $4 = I6;
    gt3([
      n4({ type: Object })
    ], $4.prototype, "config");
    pt2 = Object.defineProperty;
    Y2 = (t3, r6, e5, n5) => {
      for (var a3 = void 0, i5 = t3.length - 1, s4; i5 >= 0; i5--)
        (s4 = t3[i5]) && (a3 = s4(r6, e5, a3) || a3);
      return a3 && pt2(r6, e5, a3), a3;
    };
    M4 = class M5 extends $4 {
      constructor() {
        super(...arguments), this.items = null, this.now = Date.now(), this.seq = 0, this.tm = 0;
      }
      connectedCallback() {
        super.connectedCallback(), this.tm = window.setInterval(() => this.now = Date.now(), 1e3);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), clearInterval(this.tm);
      }
      willUpdate(r6) {
        r6.has("config") && this.load();
      }
      async load() {
        const r6 = ++this.seq, e5 = this.c;
        let a3 = (await Z4(e5.products, "offers", 40)).items.filter((s4) => s4.regular > s4.price && s4.discount >= d3(e5.min_discount, 1) && (!g3(e5.hide_oos, true) || s4.available));
        const i5 = m4(e5.sort, "saving");
        a3 = i5 === "saving" ? a3.sort((s4, o6) => o6.regular - o6.price - (s4.regular - s4.price)) : i5 === "percent" ? a3.sort((s4, o6) => o6.discount - s4.discount) : i5 === "ending" ? a3.sort((s4, o6) => (s4.endsAt ?? 1e15) - (o6.endsAt ?? 1e15)) : ot3(a3, g3(e5.personalize, true)), r6 === this.seq && (this.items = a3.slice(0, d3(e5.limit, 8)));
      }
      cd(r6) {
        if (!g3(this.c.countdown, true) || !r6.endsAt) return "";
        const e5 = Math.max(0, Math.floor((r6.endsAt - this.now) / 1e3));
        if (!e5) return "";
        const n5 = Math.floor(e5 / 86400), a3 = Math.floor(e5 % 86400 / 3600), i5 = Math.floor(e5 % 3600 / 60), s4 = e5 % 60;
        return b2`<div class="cd" title=${l3("\u064A\u0646\u062A\u0647\u064A \u0627\u0644\u062E\u0635\u0645", "Discount ends")}>⏳ ${n5 ? b2`<span>${n5}${l3("\u064A", "d")}</span>` : ""}<span>${String(a3).padStart(2, "0")}</span><span>${String(i5).padStart(2, "0")}</span><span>${String(s4).padStart(2, "0")}</span></div>`;
      }
      render() {
        const r6 = this.c, e5 = this.items;
        if (e5 && !e5.length && g3(r6.hide_empty, true)) return this.hints([l3("\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u0635\u0648\u0645\u0627\u062A \u0641\u0639\u0644\u064A\u0629 \u0627\u0644\u0622\u0646\u060C \u0644\u0630\u0644\u0643 \u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u062E\u0641\u064A \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.", "No real discounts now, so the block is hidden.")]) || "";
        const n5 = (e5 == null ? void 0 : e5.reduce((i5, s4) => i5 + (s4.regular - s4.price), 0)) ?? 0, a3 = (e5 == null ? void 0 : e5.reduce((i5, s4) => Math.max(i5, s4.discount), 0)) ?? 0;
        return this.shell(
          e5 == null ? b2`<div class="skel"></div>` : b2`
      ${g3(r6.summary, true) ? b2`<div class="sum"><div class="st"><b>${e5.length}</b><span>${l3("\u0645\u0646\u062A\u062C \u0639\u0644\u064A\u0647 \u062E\u0635\u0645 \u0627\u0644\u0622\u0646", "products on sale now")}</span></div>
        <div class="st"><b>${a3}%</b><span>${l3("\u0623\u0639\u0644\u0649 \u0646\u0633\u0628\u0629 \u062E\u0635\u0645", "biggest discount")}</span></div><div class="st"><b>${C4(n5)}</b><span>${l3("\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u062A\u0648\u0641\u064A\u0631 \u0644\u0648 \u0623\u062E\u0630\u062A\u0647\u0627 \u0643\u0644\u0647\u0627", "total saving if you take them all")}</span></div></div>` : ""}
      <div class=${m4(r6.layout, "grid") === "rail" ? "rail" : "grid"} style=${`--cols:${d3(r6.cols, 4)};--mcols:${d3(r6.mcols, 2)}`}>${e5.map((i5) => this.card(i5, {
            badges: [b2`<span class="bdg">-${i5.discount}%</span>`],
            quick: g3(r6.quick_add, true),
            extra: b2`<span class="save">${l3("\u062A\u0648\u0641\u0651\u0631", "You save")} ${C4(i5.regular - i5.price)}</span>${this.cd(i5)}`
          }))}</div>`,
          { eyebrow: l3("\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A \u0627\u0644\u062D\u064A\u0651\u0629", "Live deals"), title: w4(r6.title_default, l3("\u062E\u0635\u0648\u0645\u0627\u062A \u062D\u0642\u064A\u0642\u064A\u0629\u2026 \u0628\u0623\u0631\u0642\u0627\u0645\u0647\u0627", "Real discounts, real numbers")) }
        );
      }
    };
    M4.styles = [$4.base, i`
    .sum { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
    .st { flex: 1 1 160px; padding: 16px 18px; border-radius: calc(var(--r) * .8); background: var(--CARD); box-shadow: var(--sh); } .st b { display: block; font-size: 26px; color: var(--A); } .st span { font-size: 13px; opacity: .7; }
    .cd { display: flex; gap: 4px; font-variant-numeric: tabular-nums; font-size: 12px; font-weight: 800; } .cd span { background: #111; color: #fff; border-radius: 7px; padding: 3px 6px; min-width: 28px; text-align: center; }
    .save { font-size: 13px; font-weight: 800; color: #15803d; }
  `];
    y5 = M4;
    Y2([
      r5()
    ], y5.prototype, "items");
    Y2([
      r5()
    ], y5.prototype, "now");
    typeof y5 < "u" && y5.registerSallaComponent("salla-nabd-deals");
  }
});

// dist/nabd-restock.js
var nabd_restock_exports = {};
__export(nabd_restock_exports, {
  default: () => x4
});
function H4(t3) {
  var c4, h6, b5, v7, u6, D9, _5, B6, j6;
  const e5 = m5(t3 == null ? void 0 : t3.sale_price), a3 = m5((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), r6 = e5 && e5 < a3 ? e5 : m5(t3 == null ? void 0 : t3.price) || a3, i5 = Math.max(m5(t3 == null ? void 0 : t3.regular_price), m5(t3 == null ? void 0 : t3.price), r6), s4 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map(($6) => String(($6 == null ? void 0 : $6.url) ?? $6 ?? "")).filter(Boolean), n5 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((c4 = t3 == null ? void 0 : t3.image) == null ? void 0 : c4.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? s4[0] ?? ""),
    images: s4,
    price: r6,
    regular: i5,
    discount: i5 > r6 ? Math.round((1 - r6 / i5) * 100) : 0,
    rating: m5(((h6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : h6.stars) ?? ((b5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : b5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: m5((v7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : v7.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : m5(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: n5 == null || n5 === "" || !Number.isFinite(Number(n5)) ? null : Number(n5),
    endsAt: X4((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((u6 = t3 == null ? void 0 : t3.category) == null ? void 0 : u6.name) ?? ((_5 = (D9 = t3 == null ? void 0 : t3.categories) == null ? void 0 : D9[0]) == null ? void 0 : _5.name) ?? ""),
    brand: String(((B6 = t3 == null ? void 0 : t3.brand) == null ? void 0 : B6.name) ?? ""),
    promo: String(((j6 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : j6.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function V5(t3) {
  var r6, i5, s4;
  const e5 = (r6 = g4()) == null ? void 0 : r6.product;
  if (!e5) return null;
  const a3 = e5.getDetails ? e5.getDetails.bind(e5) : (s4 = (i5 = e5.api) == null ? void 0 : i5.getDetails) == null ? void 0 : s4.bind(e5.api);
  if (!a3) return null;
  try {
    const n5 = await a3(t3, ["images", "sold_quantity", "category"]), c4 = H4((n5 == null ? void 0 : n5.data) ?? n5);
    return c4.name ? c4 : null;
  } catch {
    return null;
  }
}
async function Z5(t3) {
  await S4();
  const e5 = "ids:" + t3.join(",");
  return w5.has(e5) || w5.set(e5, Promise.all(t3.map(V5)).then((a3) => a3.filter((r6) => !!r6))), w5.get(e5);
}
async function R3(t3, e5 = [], a3 = 12) {
  await S4();
  const r6 = `src:${t3}:${e5.join(",")}:${a3}`;
  return w5.has(r6) || w5.set(r6, (async () => {
    var n5, c4, h6, b5;
    const i5 = (n5 = g4()) == null ? void 0 : n5.product, s4 = i5 != null && i5.fetch ? i5.fetch.bind(i5) : (h6 = (c4 = i5 == null ? void 0 : i5.api) == null ? void 0 : c4.fetch) == null ? void 0 : h6.bind(i5.api);
    if (!s4) return [];
    try {
      const v7 = { source: t3, per_page: a3 };
      e5.length && (v7.source_value = e5);
      const u6 = await s4(v7);
      return (Array.isArray(u6 == null ? void 0 : u6.data) ? u6.data : Array.isArray(u6) ? u6 : ((b5 = u6 == null ? void 0 : u6.data) == null ? void 0 : b5.products) ?? []).map(H4).filter((_5) => _5.name).slice(0, a3);
    } catch {
      return [];
    }
  })()), w5.get(r6);
}
async function tt4(t3, e5 = "best_selling", a3 = 12) {
  const r6 = Q4(t3);
  if (r6.length) return { items: (await Z5(r6)).slice(0, a3), auto: false };
  let i5 = await R3(e5, [], a3);
  return !i5.length && e5 !== "latest" && (i5 = await R3("latest", [], a3)), { items: i5, auto: true };
}
async function et4(t3, e5 = 1, a3) {
  var r6, i5, s4;
  await S4();
  try {
    return await ((s4 = (i5 = (r6 = g4()) == null ? void 0 : r6.cart) == null ? void 0 : i5.addItem) == null ? void 0 : s4.call(i5, a3 ? { id: t3, quantity: e5, notes: a3 } : { id: t3, quantity: e5 })), true;
  } catch {
    return false;
  }
}
function J(t3, e5 = true) {
  var a3, r6, i5;
  try {
    (i5 = e5 ? (a3 = g4()) == null ? void 0 : a3.success : (r6 = g4()) == null ? void 0 : r6.error) == null || i5(t3);
  } catch {
  }
}
function E5() {
  try {
    return { ...M6(), ...JSON.parse(localStorage.getItem(A2) || "{}") };
  } catch {
    return M6();
  }
}
function rt4(t3) {
  try {
    localStorage.setItem(A2, JSON.stringify(t3));
  } catch {
  }
}
function N5(t3) {
  const e5 = E5();
  return t3(e5), rt4(e5), e5;
}
function it4() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(A2), sessionStorage.setItem(A2, "1");
  } catch {
  }
  return t3 ? N5((e5) => {
    e5.visits += 1, e5.last = Date.now();
  }) : E5();
}
function nt4() {
  O2 || (O2 = true, at4("cart::item.added", (t3) => {
    var a3;
    const e5 = Number(((a3 = t3 == null ? void 0 : t3.data) == null ? void 0 : a3.product_id) ?? 0);
    e5 && N5((r6) => {
      r6.carted.includes(e5) || (r6.carted = [...r6.carted.slice(-40), e5]);
    });
  }));
}
function ut4(t3) {
  const e5 = dt4[t3];
  if (!e5 || P3.has(e5)) return e5;
  P3.add(e5);
  const a3 = document.createElement("link");
  return a3.rel = "stylesheet", a3.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e5)}:wght@400;500;700;800&display=swap`, document.head.appendChild(a3), e5;
}
var g4, S4, W4, K4, l4, y6, p4, d4, f5, m5, X4, Q4, w5, L4, at4, A2, M6, G3, O2, st4, ot4, ct4, lt4, dt4, P3, gt4, ht3, I8, k4, bt4, z4, F3, x4;
var init_nabd_restock = __esm({
  "dist/nabd-restock.js"() {
    "use strict";
    init_lit();
    init_decorators();
    g4 = () => window.salla ?? window.Salla;
    S4 = async () => {
      var t3, e5;
      try {
        await ((e5 = (t3 = g4()) == null ? void 0 : t3.onReady) == null ? void 0 : e5.call(t3));
      } catch {
      }
    };
    W4 = () => {
      var t3, e5, a3, r6, i5;
      try {
        const s4 = ((e5 = (t3 = g4()) == null ? void 0 : t3.lang) == null ? void 0 : e5.locale) ?? ((i5 = (r6 = (a3 = g4()) == null ? void 0 : a3.config) == null ? void 0 : r6.get) == null ? void 0 : i5.call(r6, "user.language_code"));
        if (typeof s4 == "string" && s4) return s4.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    K4 = () => W4() === "en";
    l4 = (t3, e5) => K4() ? e5 : t3;
    y6 = (t3, e5 = "") => {
      if (t3 == null) return e5;
      if (typeof t3 == "string") {
        const a3 = t3.trim();
        if (a3.startsWith("{") && a3.endsWith("}"))
          try {
            return y6(JSON.parse(a3), e5);
          } catch {
          }
        return a3 || e5;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const a3 = t3, r6 = a3[W4()] ?? a3.ar ?? a3.en ?? Object.values(a3).find((i5) => typeof i5 == "string" && i5);
        return typeof r6 == "string" && r6.trim() ? r6 : e5;
      }
      return e5;
    };
    p4 = (t3, e5 = "") => {
      const a3 = Array.isArray(t3) ? t3[0] : t3, r6 = typeof a3 == "object" && a3 ? a3.value : a3;
      return r6 == null || r6 === "" ? e5 : String(r6);
    };
    d4 = (t3, e5 = 0) => {
      const a3 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(a3) ? e5 : a3;
    };
    f5 = (t3, e5 = false) => t3 == null || t3 === "" ? e5 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    m5 = (t3) => {
      const e5 = typeof t3 == "object" && t3 ? t3.amount : t3, a3 = Number(e5);
      return Number.isFinite(a3) ? a3 : 0;
    };
    X4 = (t3) => {
      if (!t3) return null;
      const e5 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(e5) && e5 > Date.now() ? e5 : null;
    };
    Q4 = (t3) => (Array.isArray(t3) ? t3 : []).map((e5) => Number(typeof e5 == "object" && e5 ? e5.value : e5)).filter((e5) => Number.isFinite(e5) && e5 > 0);
    w5 = /* @__PURE__ */ new Map();
    L4 = (t3) => {
      var e5, a3;
      try {
        const r6 = (a3 = (e5 = g4()) == null ? void 0 : e5.money) == null ? void 0 : a3.call(e5, t3);
        if (r6) return String(r6);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${l4("\u0631.\u0633", "SAR")}`;
    };
    at4 = (t3, e5) => {
      var a3, r6, i5;
      try {
        (i5 = (r6 = (a3 = g4()) == null ? void 0 : a3.event) == null ? void 0 : r6.on) == null || i5.call(r6, t3, e5);
      } catch {
      }
    };
    A2 = "tw_smart_mem_v1";
    M6 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    G3 = (t3, e5 = 1) => N5((a3) => {
      a3.seen[t3.id] = (a3.seen[t3.id] || 0) + e5, a3.prices = [...a3.prices.slice(-29), t3.price], t3.category && (a3.tags[t3.category] = (a3.tags[t3.category] || 0) + e5);
    });
    O2 = false;
    st4 = () => {
      const t3 = innerWidth, e5 = navigator.userAgent;
      return /iPad|Tablet/i.test(e5) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(e5) || t3 < 700 ? "mobile" : "desktop";
    };
    ot4 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    ct4 = Object.defineProperty;
    lt4 = (t3, e5, a3, r6) => {
      for (var i5 = void 0, s4 = t3.length - 1, n5; s4 >= 0; s4--)
        (n5 = t3[s4]) && (i5 = n5(e5, a3, i5) || i5);
      return i5 && ct4(e5, a3, i5), i5;
    };
    dt4 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    P3 = /* @__PURE__ */ new Set();
    gt4 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    ht3 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    I8 = class I9 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), nt4(), it4();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((e5) => {
          var a3;
          e5.some((r6) => r6.isIntersecting) && (this.setAttribute("in", ""), (a3 = this.io) == null || a3.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var e5;
        super.disconnectedCallback(), (e5 = this.io) == null || e5.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const e5 = this.c, a3 = Date.now(), r6 = Date.parse(String(e5.s_from || "")), i5 = Date.parse(String(e5.s_to || ""));
        if (Number.isFinite(r6) && a3 < r6 || Number.isFinite(i5) && a3 > i5) return true;
        const s4 = st4();
        return !!(f5(e5.s_hide_mobile) && s4 === "mobile" || f5(e5.s_hide_desktop) && s4 !== "mobile");
      }
      vars(e5 = "") {
        const a3 = this.c, r6 = [], i5 = (n5, c4) => {
          c4 !== "" && c4 != null && r6.push(`${n5}:${c4}`);
        };
        i5("--a", a3.s_accent || ""), i5("--a2", a3.s_accent2 || ""), i5("--bgc", a3.s_bg || ""), i5("--fgc", a3.s_text || ""), i5("--cardc", a3.s_card || ""), i5("--r", `${d4(a3.s_radius, 22)}px`), i5("--gap", `${d4(a3.s_gap, 18)}px`), i5("--ts", `${d4(a3.s_title_size, 38)}px`), i5("--fs", `${d4(a3.s_text_size, 16)}px`), i5("--pt", `${d4(a3.s_pad_top, 56)}px`), i5("--pb", `${d4(a3.s_pad_bottom, 56)}px`), i5("--maxw", gt4[p4(a3.s_width, "normal")] ?? "1240px"), i5("--sh", ht3[Math.max(0, Math.min(5, d4(a3.s_shadow, 2)))]), i5("--ms", `${d4(a3.s_anim_ms, 700)}ms`), i5("--ov", String(d4(a3.s_overlay, 45) / 100)), a3.s_bg_image && i5("--bgimg", `url("${String(a3.s_bg_image)}")`);
        const s4 = ut4(p4(a3.s_font, "inherit"));
        return s4 && i5("font-family", `'${s4}', inherit`), r6.join(";") + (e5 ? ";" + e5 : "");
      }
      cls() {
        const e5 = this.c;
        return [
          "sec",
          `th-${p4(e5.s_theme, "auto")}`,
          `al-${p4(e5.s_align, "start")}`,
          `an-${p4(e5.s_anim, "rise")}`,
          `pt-${p4(e5.s_pattern, "none")}`,
          `bs-${p4(e5.s_btn_style, "pill")}`,
          f5(e5.s_border) ? "bordered" : "",
          f5(e5.s_stagger, true) ? "stagger" : "",
          e5.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(e5, a3 = {}, r6 = "", i5 = "", s4 = true) {
        if (this.hiddenNow()) return A;
        const n5 = this.c, c4 = y6(n5.eyebrow, a3.eyebrow ?? ""), h6 = y6(n5.title, a3.title ?? ""), b5 = y6(n5.subtitle, a3.sub ?? ""), v7 = s4 && f5(n5.s_show_head, true) && (c4 || h6 || b5);
        return b2`<section class="${this.cls()} ${r6}" style=${this.vars(i5)} id=${String(n5.s_anchor || "") || A}>
      <div class="wrap">${v7 ? b2`<header class="head">${c4 ? b2`<span class="eyebrow">${c4}</span>` : ""}${h6 ? b2`<h2 class="title">${h6}</h2>` : ""}${b5 ? b2`<p class="sub">${b5}</p>` : ""}</header>` : ""}
      ${e5}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(e5) {
        const a3 = e5.filter(Boolean);
        return !a3.length || !ot4() || !f5(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${l4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${a3.map((r6) => b2`<li>${r6}</li>`)}</ul></aside>`;
      }
      card(e5, a3 = {}) {
        var r6;
        return b2`<article class="pc ${e5.available ? "" : "oos"}">
      <a class="ph" href=${e5.url} @click=${() => G3(e5)}><img src=${e5.image} alt=${e5.name} loading="lazy" />${(r6 = a3.badges) != null && r6.length ? b2`<span class="badges">${a3.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${e5.url} @click=${() => G3(e5)}>${e5.name}</a>
        <div class="pr"><b>${L4(e5.price)}</b>${e5.regular > e5.price ? b2`<s>${L4(e5.regular)}</s>` : ""}</div>
        ${a3.rating !== false && e5.rating > 0 ? b2`<div class="rt">★ ${e5.rating.toFixed(1)}${e5.ratingCount ? b2` <small>(${e5.ratingCount})</small>` : ""}</div>` : ""}
        ${a3.extra ?? ""}
        ${a3.quick !== false ? b2`<button class="btn sm" ?disabled=${!e5.available} @click=${() => this.add(e5)}>${e5.available ? l4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : l4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(e5, a3 = 1, r6) {
        G3(e5, 3), await et4(e5.id, a3, r6) ? J(l4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = e5.url;
      }
    };
    I8.base = i`
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
    k4 = I8;
    lt4([
      n4({ type: Object })
    ], k4.prototype, "config");
    bt4 = Object.defineProperty;
    z4 = (t3, e5, a3, r6) => {
      for (var i5 = void 0, s4 = t3.length - 1, n5; s4 >= 0; s4--)
        (n5 = t3[s4]) && (i5 = n5(e5, a3, i5) || i5);
      return i5 && bt4(e5, a3, i5), i5;
    };
    F3 = class F4 extends k4 {
      constructor() {
        super(...arguments), this.back = [], this.out = [], this.rest = [], this.asked = [], this.seq = 0;
      }
      willUpdate(e5) {
        e5.has("config") && this.load();
      }
      async load() {
        const e5 = ++this.seq, a3 = this.c, r6 = (await tt4(a3.products, p4(a3.auto_source, "best_selling"), d4(a3.watch, 24))).items, i5 = E5().avail, s4 = r6.filter((n5) => n5.available && i5[n5.id] === false);
        N5((n5) => {
          for (const c4 of r6) n5.avail[c4.id] = c4.available;
        }), e5 === this.seq && (this.back = s4, this.out = r6.filter((n5) => !n5.available).slice(0, d4(a3.limit, 4)), this.rest = f5(a3.show_available, false) ? r6.filter((n5) => n5.available && !s4.includes(n5)).slice(0, d4(a3.limit, 4)) : []);
      }
      async notify(e5) {
        var a3, r6, i5;
        await S4();
        try {
          await ((i5 = (r6 = (a3 = g4()) == null ? void 0 : a3.product) == null ? void 0 : r6.availabilitySubscribe) == null ? void 0 : i5.call(r6, { id: e5.id })), this.asked = [...this.asked, e5.id], J(l4("\u0628\u0646\u0639\u0644\u0645\u0643 \u0623\u0648\u0644 \u0645\u0627 \u064A\u062A\u0648\u0641\u0631", "We will let you know when it is back"));
        } catch {
          location.href = e5.url;
        }
      }
      render() {
        const e5 = this.c, a3 = `--cols:${d4(e5.cols, 4)};--mcols:${d4(e5.mcols, 2)}`;
        return !this.back.length && !this.out.length && !this.rest.length ? this.hints([l4("\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0646\u0627\u0641\u062F\u0629 \u0623\u0648 \u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0622\u0646\u061B \u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u062E\u0641\u064A \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.", "Nothing sold out or back right now; hidden from shoppers.")]) || "" : this.shell(
          b2`
      ${this.back.length ? b2`<div class="sec-t">✅ ${y6(e5.back_title, l4("\u0631\u062C\u0639 \u0644\u0644\u0645\u062E\u0632\u0648\u0646 \u0645\u0646\u0630 \u0632\u064A\u0627\u0631\u062A\u0643 \u0627\u0644\u0623\u062E\u064A\u0631\u0629", "Back in stock since your last visit"))}</div>
        <div class="grid back" style=${a3}>${this.back.map((r6) => this.card(r6, { badges: [b2`<span class="bdg ok">${l4("\u0631\u062C\u0639!", "Back!")}</span>`] }))}</div>` : ""}
      ${this.out.length && f5(e5.show_out, true) ? b2`<div class="sec-t">🔔 ${y6(e5.out_title, l4("\u0646\u0641\u062F\u062A \u0627\u0644\u062D\u064A\u0646\u2026 \u0646\u0639\u0644\u0645\u0643 \u0623\u0648\u0644 \u0645\u0627 \u062A\u0631\u062C\u0639", "Sold out, we will tell you when it is back"))}</div>
        <div class="grid" style=${a3}>${this.out.map((r6) => this.card(r6, { quick: false, extra: b2`<button class="btn sm ghost" ?disabled=${this.asked.includes(r6.id)} @click=${() => this.notify(r6)}>${this.asked.includes(r6.id) ? l4("\u062A\u0645 \u2713", "Done \u2713") : l4("\u0646\u0628\u0651\u0647\u0646\u064A \u0639\u0646\u062F \u0627\u0644\u062A\u0648\u0641\u0631", "Notify me")}</button>` }))}</div>` : ""}
      ${this.rest.length ? b2`<div class="sec-t">${l4("\u0645\u062A\u0648\u0641\u0631 \u0627\u0644\u0622\u0646", "Available now")}</div><div class="grid" style=${a3}>${this.rest.map((r6) => this.card(r6))}</div>` : ""}
      ${f5(e5.privacy_note, true) ? b2`<p class="note">${l4("\u0646\u062A\u0630\u0643\u0631 \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0641\u0631 \u0639\u0644\u0649 \u062C\u0647\u0627\u0632\u0643 \u0641\u0642\u0637.", "Availability is remembered on your device only.")}</p>` : ""}`,
          { eyebrow: l4("\u0631\u0627\u062F\u0627\u0631 \u0627\u0644\u062A\u0648\u0641\u0631", "Restock radar"), title: "" }
        );
      }
    };
    F3.styles = [k4.base, i`
    .sec-t { font-weight: 800; margin: 6px 0 12px; display: flex; gap: 8px; align-items: center; } .sec-t::after { content: ''; flex: 1; height: 1px; background: var(--LINE); }
    .back .pc { outline: 2px solid #16a34a; } .note { font-size: 12px; opacity: .7; }
  `];
    x4 = F3;
    z4([
      r5()
    ], x4.prototype, "back");
    z4([
      r5()
    ], x4.prototype, "out");
    z4([
      r5()
    ], x4.prototype, "rest");
    z4([
      r5()
    ], x4.prototype, "asked");
    typeof x4 < "u" && x4.registerSallaComponent("salla-nabd-restock");
  }
});

// dist/nabd-stock.js
var nabd_stock_exports = {};
__export(nabd_stock_exports, {
  default: () => w6
});
function W5(t3) {
  var o6, f6, b5, y8, g6, C6, $6, G5, E6;
  const r6 = p5(t3 == null ? void 0 : t3.sale_price), e5 = p5((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), n5 = r6 && r6 < e5 ? r6 : p5(t3 == null ? void 0 : t3.price) || e5, a3 = Math.max(p5(t3 == null ? void 0 : t3.regular_price), p5(t3 == null ? void 0 : t3.price), n5), i5 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((A4) => String((A4 == null ? void 0 : A4.url) ?? A4 ?? "")).filter(Boolean), s4 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((o6 = t3 == null ? void 0 : t3.image) == null ? void 0 : o6.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? i5[0] ?? ""),
    images: i5,
    price: n5,
    regular: a3,
    discount: a3 > n5 ? Math.round((1 - n5 / a3) * 100) : 0,
    rating: p5(((f6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : f6.stars) ?? ((b5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : b5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: p5((y8 = t3 == null ? void 0 : t3.rating) == null ? void 0 : y8.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : p5(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: s4 == null || s4 === "" || !Number.isFinite(Number(s4)) ? null : Number(s4),
    endsAt: K5((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((g6 = t3 == null ? void 0 : t3.category) == null ? void 0 : g6.name) ?? (($6 = (C6 = t3 == null ? void 0 : t3.categories) == null ? void 0 : C6[0]) == null ? void 0 : $6.name) ?? ""),
    brand: String(((G5 = t3 == null ? void 0 : t3.brand) == null ? void 0 : G5.name) ?? ""),
    promo: String(((E6 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : E6.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function Q5(t3) {
  var n5, a3, i5;
  const r6 = (n5 = m6()) == null ? void 0 : n5.product;
  if (!r6) return null;
  const e5 = r6.getDetails ? r6.getDetails.bind(r6) : (i5 = (a3 = r6.api) == null ? void 0 : a3.getDetails) == null ? void 0 : i5.bind(r6.api);
  if (!e5) return null;
  try {
    const s4 = await e5(t3, ["images", "sold_quantity", "category"]), o6 = W5((s4 == null ? void 0 : s4.data) ?? s4);
    return o6.name ? o6 : null;
  } catch {
    return null;
  }
}
async function V6(t3) {
  await z5();
  const r6 = "ids:" + t3.join(",");
  return v5.has(r6) || v5.set(r6, Promise.all(t3.map(Q5)).then((e5) => e5.filter((n5) => !!n5))), v5.get(r6);
}
async function M7(t3, r6 = [], e5 = 12) {
  await z5();
  const n5 = `src:${t3}:${r6.join(",")}:${e5}`;
  return v5.has(n5) || v5.set(n5, (async () => {
    var s4, o6, f6, b5;
    const a3 = (s4 = m6()) == null ? void 0 : s4.product, i5 = a3 != null && a3.fetch ? a3.fetch.bind(a3) : (f6 = (o6 = a3 == null ? void 0 : a3.api) == null ? void 0 : o6.fetch) == null ? void 0 : f6.bind(a3.api);
    if (!i5) return [];
    try {
      const y8 = { source: t3, per_page: e5 };
      r6.length && (y8.source_value = r6);
      const g6 = await i5(y8);
      return (Array.isArray(g6 == null ? void 0 : g6.data) ? g6.data : Array.isArray(g6) ? g6 : ((b5 = g6 == null ? void 0 : g6.data) == null ? void 0 : b5.products) ?? []).map(W5).filter(($6) => $6.name).slice(0, e5);
    } catch {
      return [];
    }
  })()), v5.get(n5);
}
async function Z6(t3, r6 = "best_selling", e5 = 12) {
  const n5 = X5(t3);
  if (n5.length) return { items: (await V6(n5)).slice(0, e5), auto: false };
  let a3 = await M7(r6, [], e5);
  return !a3.length && r6 !== "latest" && (a3 = await M7("latest", [], e5)), { items: a3, auto: true };
}
async function tt5(t3, r6 = 1, e5) {
  var n5, a3, i5;
  await z5();
  try {
    return await ((i5 = (a3 = (n5 = m6()) == null ? void 0 : n5.cart) == null ? void 0 : a3.addItem) == null ? void 0 : i5.call(a3, e5 ? { id: t3, quantity: r6, notes: e5 } : { id: t3, quantity: r6 })), true;
  } catch {
    return false;
  }
}
function rt5(t3, r6 = true) {
  var e5, n5, a3;
  try {
    (a3 = r6 ? (e5 = m6()) == null ? void 0 : e5.success : (n5 = m6()) == null ? void 0 : n5.error) == null || a3(t3);
  } catch {
  }
}
function k5() {
  try {
    return { ...B5(), ...JSON.parse(localStorage.getItem(S5) || "{}") };
  } catch {
    return B5();
  }
}
function at5(t3) {
  try {
    localStorage.setItem(S5, JSON.stringify(t3));
  } catch {
  }
}
function N6(t3) {
  const r6 = k5();
  return t3(r6), at5(r6), r6;
}
function nt5() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(S5), sessionStorage.setItem(S5, "1");
  } catch {
  }
  return t3 ? N6((r6) => {
    r6.visits += 1, r6.last = Date.now();
  }) : k5();
}
function it5() {
  const t3 = [...k5().prices].sort((r6, e5) => r6 - e5);
  return t3.length >= 3 ? t3[Math.floor(t3.length / 2)] : 0;
}
function st5(t3, r6 = k5()) {
  let e5 = (r6.seen[t3.id] || 0) * 2 + (r6.carted.includes(t3.id) ? 4 : 0) + (t3.category && r6.tags[t3.category] || 0);
  const n5 = it5();
  return n5 && (e5 += Math.max(0, 2 - Math.abs(t3.price - n5) / n5 * 2)), e5;
}
function ct5() {
  R4 || (R4 = true, et5("cart::item.added", (t3) => {
    var e5;
    const r6 = Number(((e5 = t3 == null ? void 0 : t3.data) == null ? void 0 : e5.product_id) ?? 0);
    r6 && N6((n5) => {
      n5.carted.includes(r6) || (n5.carted = [...n5.carted.slice(-40), r6]);
    });
  }));
}
function ht4(t3) {
  const r6 = ft4[t3];
  if (!r6 || L5.has(r6)) return r6;
  L5.add(r6);
  const e5 = document.createElement("link");
  return e5.rel = "stylesheet", e5.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r6)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e5), r6;
}
var m6, z5, T5, Y3, u4, x5, h5, l5, d5, p5, K5, X5, v5, j4, et5, S5, B5, q2, ot5, R4, lt5, dt5, ut5, gt5, ft4, L5, mt2, bt5, D5, _4, pt3, H5, I10, w6;
var init_nabd_stock = __esm({
  "dist/nabd-stock.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m6 = () => window.salla ?? window.Salla;
    z5 = async () => {
      var t3, r6;
      try {
        await ((r6 = (t3 = m6()) == null ? void 0 : t3.onReady) == null ? void 0 : r6.call(t3));
      } catch {
      }
    };
    T5 = () => {
      var t3, r6, e5, n5, a3;
      try {
        const i5 = ((r6 = (t3 = m6()) == null ? void 0 : t3.lang) == null ? void 0 : r6.locale) ?? ((a3 = (n5 = (e5 = m6()) == null ? void 0 : e5.config) == null ? void 0 : n5.get) == null ? void 0 : a3.call(n5, "user.language_code"));
        if (typeof i5 == "string" && i5) return i5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    Y3 = () => T5() === "en";
    u4 = (t3, r6) => Y3() ? r6 : t3;
    x5 = (t3, r6 = "") => {
      if (t3 == null) return r6;
      if (typeof t3 == "string") {
        const e5 = t3.trim();
        if (e5.startsWith("{") && e5.endsWith("}"))
          try {
            return x5(JSON.parse(e5), r6);
          } catch {
          }
        return e5 || r6;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const e5 = t3, n5 = e5[T5()] ?? e5.ar ?? e5.en ?? Object.values(e5).find((a3) => typeof a3 == "string" && a3);
        return typeof n5 == "string" && n5.trim() ? n5 : r6;
      }
      return r6;
    };
    h5 = (t3, r6 = "") => {
      const e5 = Array.isArray(t3) ? t3[0] : t3, n5 = typeof e5 == "object" && e5 ? e5.value : e5;
      return n5 == null || n5 === "" ? r6 : String(n5);
    };
    l5 = (t3, r6 = 0) => {
      const e5 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(e5) ? r6 : e5;
    };
    d5 = (t3, r6 = false) => t3 == null || t3 === "" ? r6 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    p5 = (t3) => {
      const r6 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(r6);
      return Number.isFinite(e5) ? e5 : 0;
    };
    K5 = (t3) => {
      if (!t3) return null;
      const r6 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(r6) && r6 > Date.now() ? r6 : null;
    };
    X5 = (t3) => (Array.isArray(t3) ? t3 : []).map((r6) => Number(typeof r6 == "object" && r6 ? r6.value : r6)).filter((r6) => Number.isFinite(r6) && r6 > 0);
    v5 = /* @__PURE__ */ new Map();
    j4 = (t3) => {
      var r6, e5;
      try {
        const n5 = (e5 = (r6 = m6()) == null ? void 0 : r6.money) == null ? void 0 : e5.call(r6, t3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${u4("\u0631.\u0633", "SAR")}`;
    };
    et5 = (t3, r6) => {
      var e5, n5, a3;
      try {
        (a3 = (n5 = (e5 = m6()) == null ? void 0 : e5.event) == null ? void 0 : n5.on) == null || a3.call(n5, t3, r6);
      } catch {
      }
    };
    S5 = "tw_smart_mem_v1";
    B5 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    q2 = (t3, r6 = 1) => N6((e5) => {
      e5.seen[t3.id] = (e5.seen[t3.id] || 0) + r6, e5.prices = [...e5.prices.slice(-29), t3.price], t3.category && (e5.tags[t3.category] = (e5.tags[t3.category] || 0) + r6);
    });
    ot5 = (t3, r6 = true) => {
      if (!r6) return t3;
      const e5 = k5();
      return t3.map((n5, a3) => ({ p: n5, i: a3, s: st5(n5, e5) })).sort((n5, a3) => a3.s - n5.s || n5.i - a3.i).map((n5) => n5.p);
    };
    R4 = false;
    lt5 = () => {
      const t3 = innerWidth, r6 = navigator.userAgent;
      return /iPad|Tablet/i.test(r6) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r6) || t3 < 700 ? "mobile" : "desktop";
    };
    dt5 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    ut5 = Object.defineProperty;
    gt5 = (t3, r6, e5, n5) => {
      for (var a3 = void 0, i5 = t3.length - 1, s4; i5 >= 0; i5--)
        (s4 = t3[i5]) && (a3 = s4(r6, e5, a3) || a3);
      return a3 && ut5(r6, e5, a3), a3;
    };
    ft4 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    L5 = /* @__PURE__ */ new Set();
    mt2 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    bt5 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    D5 = class D6 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), ct5(), nt5();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((r6) => {
          var e5;
          r6.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (e5 = this.io) == null || e5.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var r6;
        super.disconnectedCallback(), (r6 = this.io) == null || r6.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const r6 = this.c, e5 = Date.now(), n5 = Date.parse(String(r6.s_from || "")), a3 = Date.parse(String(r6.s_to || ""));
        if (Number.isFinite(n5) && e5 < n5 || Number.isFinite(a3) && e5 > a3) return true;
        const i5 = lt5();
        return !!(d5(r6.s_hide_mobile) && i5 === "mobile" || d5(r6.s_hide_desktop) && i5 !== "mobile");
      }
      vars(r6 = "") {
        const e5 = this.c, n5 = [], a3 = (s4, o6) => {
          o6 !== "" && o6 != null && n5.push(`${s4}:${o6}`);
        };
        a3("--a", e5.s_accent || ""), a3("--a2", e5.s_accent2 || ""), a3("--bgc", e5.s_bg || ""), a3("--fgc", e5.s_text || ""), a3("--cardc", e5.s_card || ""), a3("--r", `${l5(e5.s_radius, 22)}px`), a3("--gap", `${l5(e5.s_gap, 18)}px`), a3("--ts", `${l5(e5.s_title_size, 38)}px`), a3("--fs", `${l5(e5.s_text_size, 16)}px`), a3("--pt", `${l5(e5.s_pad_top, 56)}px`), a3("--pb", `${l5(e5.s_pad_bottom, 56)}px`), a3("--maxw", mt2[h5(e5.s_width, "normal")] ?? "1240px"), a3("--sh", bt5[Math.max(0, Math.min(5, l5(e5.s_shadow, 2)))]), a3("--ms", `${l5(e5.s_anim_ms, 700)}ms`), a3("--ov", String(l5(e5.s_overlay, 45) / 100)), e5.s_bg_image && a3("--bgimg", `url("${String(e5.s_bg_image)}")`);
        const i5 = ht4(h5(e5.s_font, "inherit"));
        return i5 && a3("font-family", `'${i5}', inherit`), n5.join(";") + (r6 ? ";" + r6 : "");
      }
      cls() {
        const r6 = this.c;
        return [
          "sec",
          `th-${h5(r6.s_theme, "auto")}`,
          `al-${h5(r6.s_align, "start")}`,
          `an-${h5(r6.s_anim, "rise")}`,
          `pt-${h5(r6.s_pattern, "none")}`,
          `bs-${h5(r6.s_btn_style, "pill")}`,
          d5(r6.s_border) ? "bordered" : "",
          d5(r6.s_stagger, true) ? "stagger" : "",
          r6.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(r6, e5 = {}, n5 = "", a3 = "", i5 = true) {
        if (this.hiddenNow()) return A;
        const s4 = this.c, o6 = x5(s4.eyebrow, e5.eyebrow ?? ""), f6 = x5(s4.title, e5.title ?? ""), b5 = x5(s4.subtitle, e5.sub ?? ""), y8 = i5 && d5(s4.s_show_head, true) && (o6 || f6 || b5);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(a3)} id=${String(s4.s_anchor || "") || A}>
      <div class="wrap">${y8 ? b2`<header class="head">${o6 ? b2`<span class="eyebrow">${o6}</span>` : ""}${f6 ? b2`<h2 class="title">${f6}</h2>` : ""}${b5 ? b2`<p class="sub">${b5}</p>` : ""}</header>` : ""}
      ${r6}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(r6) {
        const e5 = r6.filter(Boolean);
        return !e5.length || !dt5() || !d5(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${u4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${e5.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(r6, e5 = {}) {
        var n5;
        return b2`<article class="pc ${r6.available ? "" : "oos"}">
      <a class="ph" href=${r6.url} @click=${() => q2(r6)}><img src=${r6.image} alt=${r6.name} loading="lazy" />${(n5 = e5.badges) != null && n5.length ? b2`<span class="badges">${e5.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r6.url} @click=${() => q2(r6)}>${r6.name}</a>
        <div class="pr"><b>${j4(r6.price)}</b>${r6.regular > r6.price ? b2`<s>${j4(r6.regular)}</s>` : ""}</div>
        ${e5.rating !== false && r6.rating > 0 ? b2`<div class="rt">★ ${r6.rating.toFixed(1)}${r6.ratingCount ? b2` <small>(${r6.ratingCount})</small>` : ""}</div>` : ""}
        ${e5.extra ?? ""}
        ${e5.quick !== false ? b2`<button class="btn sm" ?disabled=${!r6.available} @click=${() => this.add(r6)}>${r6.available ? u4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : u4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(r6, e5 = 1, n5) {
        q2(r6, 3), await tt5(r6.id, e5, n5) ? rt5(u4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = r6.url;
      }
    };
    D5.base = i`
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
    _4 = D5;
    gt5([
      n4({ type: Object })
    ], _4.prototype, "config");
    pt3 = Object.defineProperty;
    H5 = (t3, r6, e5, n5) => {
      for (var a3 = void 0, i5 = t3.length - 1, s4; i5 >= 0; i5--)
        (s4 = t3[i5]) && (a3 = s4(r6, e5, a3) || a3);
      return a3 && pt3(r6, e5, a3), a3;
    };
    I10 = class I11 extends _4 {
      constructor() {
        super(...arguments), this.items = null, this.auto = false, this.seq = 0;
      }
      willUpdate(r6) {
        r6.has("config") && this.load();
      }
      async load() {
        const r6 = ++this.seq, e5 = this.c, n5 = await Z6(e5.products, h5(e5.auto_source, "best_selling"), Math.max(24, l5(e5.limit, 8) * 2));
        let a3 = n5.items.filter((s4) => (d5(e5.hide_oos, true) ? s4.available : true) && (d5(e5.only_tracked, false) ? s4.qty != null : true));
        d5(e5.only_low, false) && (a3 = a3.filter((s4) => s4.qty != null && s4.qty <= l5(e5.low, 5))), h5(e5.sort, "scarce") === "scarce" ? a3 = a3.sort((s4, o6) => (s4.qty ?? 1e9) - (o6.qty ?? 1e9)) : a3 = ot5(a3, d5(e5.personalize, true)), r6 === this.seq && (this.items = a3.slice(0, l5(e5.limit, 8)), this.auto = n5.auto);
      }
      meter(r6) {
        const e5 = this.c, n5 = l5(e5.low, 5), a3 = l5(e5.full_at, 30);
        if (r6.qty == null) return d5(e5.show_unlimited, true) ? b2`<div class="meter" style="--mc:#16a34a;--w:100%"><div class="tr"><i></i></div><span>${x5(e5.text_plenty, u4("\u0645\u062A\u0648\u0641\u0631", "In stock"))}</span></div>` : "";
        if (!r6.available || r6.qty <= 0) return b2`<div class="meter" style="--mc:#9ca3af;--w:0%"><div class="tr"><i></i></div><span>${u4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</span></div>`;
        const i5 = r6.qty <= n5 ? "low" : r6.qty <= n5 * 3 ? "mid" : "ok", s4 = String(i5 === "low" ? e5.color_low || "#dc2626" : i5 === "mid" ? e5.color_mid || "#d97706" : e5.color_ok || "#16a34a"), o6 = i5 === "low" ? x5(e5.text_low, u4("\u0628\u0627\u0642\u064A {n} \u0641\u0642\u0637", "Only {n} left")) : i5 === "mid" ? x5(e5.text_mid, u4("\u0627\u0644\u0643\u0645\u064A\u0629 \u0645\u062D\u062F\u0648\u062F\u0629: {n}", "Limited: {n} left")) : x5(e5.text_ok, u4("\u0645\u062A\u0648\u0641\u0631 ({n})", "In stock ({n})")), f6 = d5(e5.show_number, true) || i5 === "low";
        return b2`<div class="meter" style=${`--mc:${s4};--w:${Math.max(4, Math.min(100, r6.qty / a3 * 100))}%`}><div class="tr"><i></i></div>
      <span>${i5 === "low" && d5(e5.pulse, true) ? b2`<b class="pulse"></b>` : ""}${f6 ? o6.replace("{n}", String(r6.qty)) : o6.replace(/\s*\(?\{n\}\)?/, "")}</span>
      ${d5(e5.show_sold, true) && r6.sold != null && r6.sold >= l5(e5.sold_min, 10) ? b2`<span class="sold" style="color:inherit">${u4(`\u0628\u064A\u0639 \u0645\u0646\u0647 ${r6.sold}`, `${r6.sold} sold`)}</span>` : ""}</div>`;
      }
      render() {
        const r6 = this.c, e5 = this.items;
        return this.shell(
          b2`${this.hints([
            this.auto && u4("\u064A\u0639\u0631\u0636 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0645\u0646 \u0645\u062A\u062C\u0631\u0643. \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0647\u064A \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0627\u0644\u0641\u0639\u0644\u064A \u0645\u0646 \u0633\u0644\u0629\u061B \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u063A\u064A\u0631 \u0645\u062D\u062F\u0648\u062F\u0629 \u0627\u0644\u0643\u0645\u064A\u0629 \u062A\u0638\u0647\u0631 \xAB\u0645\u062A\u0648\u0641\u0631\xBB \u0641\u0642\u0637.", "Auto from your store; numbers are your real Salla stock."),
            e5 && !e5.some((n5) => n5.qty != null) && u4("\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062A\u062C \u0628\u0643\u0645\u064A\u0629 \u0645\u062D\u062F\u062F\u0629\u061B \u0641\u0639\u0651\u0644 \u062A\u062A\u0628\u0639 \u0627\u0644\u0643\u0645\u064A\u0629 \u0641\u064A \u0633\u0644\u0629 \u0644\u064A\u0638\u0647\u0631 \u0627\u0644\u0639\u062F\u0651\u0627\u062F.", "No product tracks quantity; enable stock tracking in Salla.")
          ])}
      ${e5 == null ? b2`<div class="skel"></div>` : b2`<div class=${h5(r6.layout, "grid") === "rail" ? "rail" : "grid"} style=${`--cols:${l5(r6.cols, 4)};--mcols:${l5(r6.mcols, 2)}`}>${e5.map((n5) => this.card(n5, { extra: this.meter(n5), quick: d5(r6.quick_add, true), rating: d5(r6.show_rating, false) }))}</div>`}`,
          { eyebrow: u4("\u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0627\u0644\u0622\u0646", "Live stock"), title: u4("\u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629\u2026 \u0642\u0628\u0644 \u0644\u0627 \u062A\u062E\u0644\u0635", "Real quantities, before they run out") }
        );
      }
    };
    I10.styles = [_4.base, i`
    .meter { display: grid; gap: 6px; } .meter .tr { height: 8px; border-radius: 9px; background: var(--LINE); overflow: hidden; }
    .meter i { display: block; height: 100%; border-radius: 9px; background: var(--mc, #16a34a); transition: width 1.2s cubic-bezier(.2,.7,.2,1); width: 0; }
    :host([in]) .meter i { width: var(--w); }
    .meter span { font-size: 13px; font-weight: 700; color: var(--mc); display: flex; gap: 6px; align-items: center; }
    .pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--mc); animation: p 1.4s infinite; } @keyframes p { 0% { box-shadow: 0 0 0 0 var(--mc); } 100% { box-shadow: 0 0 0 10px transparent; } }
    .sold { font-size: 12px; opacity: .7; }
  `];
    w6 = I10;
    H5([
      r5()
    ], w6.prototype, "items");
    H5([
      r5()
    ], w6.prototype, "auto");
    typeof w6 < "u" && w6.registerSallaComponent("salla-nabd-stock");
  }
});

// dist/nabd-ticker.js
var nabd_ticker_exports = {};
__export(nabd_ticker_exports, {
  default: () => $5
});
function K6(t3) {
  var c4, d6, f6, h6, i5, x6, _5, B6, I12;
  const r6 = p6(t3 == null ? void 0 : t3.sale_price), e5 = p6((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), n5 = r6 && r6 < e5 ? r6 : p6(t3 == null ? void 0 : t3.price) || e5, a3 = Math.max(p6(t3 == null ? void 0 : t3.regular_price), p6(t3 == null ? void 0 : t3.price), n5), s4 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((k6) => String((k6 == null ? void 0 : k6.url) ?? k6 ?? "")).filter(Boolean), o6 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((c4 = t3 == null ? void 0 : t3.image) == null ? void 0 : c4.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? s4[0] ?? ""),
    images: s4,
    price: n5,
    regular: a3,
    discount: a3 > n5 ? Math.round((1 - n5 / a3) * 100) : 0,
    rating: p6(((d6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : d6.stars) ?? ((f6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : f6.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: p6((h6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : h6.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : p6(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: o6 == null || o6 === "" || !Number.isFinite(Number(o6)) ? null : Number(o6),
    endsAt: Y4((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((i5 = t3 == null ? void 0 : t3.category) == null ? void 0 : i5.name) ?? ((_5 = (x6 = t3 == null ? void 0 : t3.categories) == null ? void 0 : x6[0]) == null ? void 0 : _5.name) ?? ""),
    brand: String(((B6 = t3 == null ? void 0 : t3.brand) == null ? void 0 : B6.name) ?? ""),
    promo: String(((I12 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : I12.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function A3(t3, r6 = [], e5 = 12) {
  await L6();
  const n5 = `src:${t3}:${r6.join(",")}:${e5}`;
  return N7.has(n5) || N7.set(n5, (async () => {
    var o6, c4, d6, f6;
    const a3 = (o6 = m7()) == null ? void 0 : o6.product, s4 = a3 != null && a3.fetch ? a3.fetch.bind(a3) : (d6 = (c4 = a3 == null ? void 0 : a3.api) == null ? void 0 : c4.fetch) == null ? void 0 : d6.bind(a3.api);
    if (!s4) return [];
    try {
      const h6 = { source: t3, per_page: e5 };
      r6.length && (h6.source_value = r6);
      const i5 = await s4(h6);
      return (Array.isArray(i5 == null ? void 0 : i5.data) ? i5.data : Array.isArray(i5) ? i5 : ((f6 = i5 == null ? void 0 : i5.data) == null ? void 0 : f6.products) ?? []).map(K6).filter((_5) => _5.name).slice(0, e5);
    } catch {
      return [];
    }
  })()), N7.get(n5);
}
async function X6(t3, r6 = 1, e5) {
  var n5, a3, s4;
  await L6();
  try {
    return await ((s4 = (a3 = (n5 = m7()) == null ? void 0 : n5.cart) == null ? void 0 : a3.addItem) == null ? void 0 : s4.call(a3, e5 ? { id: t3, quantity: r6, notes: e5 } : { id: t3, quantity: r6 })), true;
  } catch {
    return false;
  }
}
function Q6(t3, r6 = true) {
  var e5, n5, a3;
  try {
    (a3 = r6 ? (e5 = m7()) == null ? void 0 : e5.success : (n5 = m7()) == null ? void 0 : n5.error) == null || a3(t3);
  } catch {
  }
}
function P4() {
  try {
    return { ...q3(), ...JSON.parse(localStorage.getItem(S6) || "{}") };
  } catch {
    return q3();
  }
}
function Z7(t3) {
  try {
    localStorage.setItem(S6, JSON.stringify(t3));
  } catch {
  }
}
function G4(t3) {
  const r6 = P4();
  return t3(r6), Z7(r6), r6;
}
function tt6() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(S6), sessionStorage.setItem(S6, "1");
  } catch {
  }
  return t3 ? G4((r6) => {
    r6.visits += 1, r6.last = Date.now();
  }) : P4();
}
function rt6() {
  R5 || (R5 = true, V7("cart::item.added", (t3) => {
    var e5;
    const r6 = Number(((e5 = t3 == null ? void 0 : t3.data) == null ? void 0 : e5.product_id) ?? 0);
    r6 && G4((n5) => {
      n5.carted.includes(r6) || (n5.carted = [...n5.carted.slice(-40), r6]);
    });
  }));
}
function ot6(t3) {
  const r6 = st6[t3];
  if (!r6 || j5.has(r6)) return r6;
  j5.add(r6);
  const e5 = document.createElement("link");
  return e5.rel = "stylesheet", e5.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(r6)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e5), r6;
}
var m7, L6, O3, J2, b4, y7, v6, g5, u5, U2, p6, Y4, N7, C5, V7, S6, q3, z6, R5, et6, at6, nt6, it6, st6, j5, ct6, lt6, F5, w7, dt6, gt6, D7, $5;
var init_nabd_ticker = __esm({
  "dist/nabd-ticker.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m7 = () => window.salla ?? window.Salla;
    L6 = async () => {
      var t3, r6;
      try {
        await ((r6 = (t3 = m7()) == null ? void 0 : t3.onReady) == null ? void 0 : r6.call(t3));
      } catch {
      }
    };
    O3 = () => {
      var t3, r6, e5, n5, a3;
      try {
        const s4 = ((r6 = (t3 = m7()) == null ? void 0 : t3.lang) == null ? void 0 : r6.locale) ?? ((a3 = (n5 = (e5 = m7()) == null ? void 0 : e5.config) == null ? void 0 : n5.get) == null ? void 0 : a3.call(n5, "user.language_code"));
        if (typeof s4 == "string" && s4) return s4.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    J2 = () => O3() === "en";
    b4 = (t3, r6) => J2() ? r6 : t3;
    y7 = (t3, r6 = "") => {
      if (t3 == null) return r6;
      if (typeof t3 == "string") {
        const e5 = t3.trim();
        if (e5.startsWith("{") && e5.endsWith("}"))
          try {
            return y7(JSON.parse(e5), r6);
          } catch {
          }
        return e5 || r6;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const e5 = t3, n5 = e5[O3()] ?? e5.ar ?? e5.en ?? Object.values(e5).find((a3) => typeof a3 == "string" && a3);
        return typeof n5 == "string" && n5.trim() ? n5 : r6;
      }
      return r6;
    };
    v6 = (t3, r6 = "") => {
      const e5 = Array.isArray(t3) ? t3[0] : t3, n5 = typeof e5 == "object" && e5 ? e5.value : e5;
      return n5 == null || n5 === "" ? r6 : String(n5);
    };
    g5 = (t3, r6 = 0) => {
      const e5 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(e5) ? r6 : e5;
    };
    u5 = (t3, r6 = false) => t3 == null || t3 === "" ? r6 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    U2 = (t3) => y7(t3).split(/[,،\n]/).map((r6) => r6.trim()).filter(Boolean);
    p6 = (t3) => {
      const r6 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(r6);
      return Number.isFinite(e5) ? e5 : 0;
    };
    Y4 = (t3) => {
      if (!t3) return null;
      const r6 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(r6) && r6 > Date.now() ? r6 : null;
    };
    N7 = /* @__PURE__ */ new Map();
    C5 = (t3) => {
      var r6, e5;
      try {
        const n5 = (e5 = (r6 = m7()) == null ? void 0 : r6.money) == null ? void 0 : e5.call(r6, t3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${b4("\u0631.\u0633", "SAR")}`;
    };
    V7 = (t3, r6) => {
      var e5, n5, a3;
      try {
        (a3 = (n5 = (e5 = m7()) == null ? void 0 : e5.event) == null ? void 0 : n5.on) == null || a3.call(n5, t3, r6);
      } catch {
      }
    };
    S6 = "tw_smart_mem_v1";
    q3 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    z6 = (t3, r6 = 1) => G4((e5) => {
      e5.seen[t3.id] = (e5.seen[t3.id] || 0) + r6, e5.prices = [...e5.prices.slice(-29), t3.price], t3.category && (e5.tags[t3.category] = (e5.tags[t3.category] || 0) + r6);
    });
    R5 = false;
    et6 = () => {
      const t3 = innerWidth, r6 = navigator.userAgent;
      return /iPad|Tablet/i.test(r6) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(r6) || t3 < 700 ? "mobile" : "desktop";
    };
    at6 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    nt6 = Object.defineProperty;
    it6 = (t3, r6, e5, n5) => {
      for (var a3 = void 0, s4 = t3.length - 1, o6; s4 >= 0; s4--)
        (o6 = t3[s4]) && (a3 = o6(r6, e5, a3) || a3);
      return a3 && nt6(r6, e5, a3), a3;
    };
    st6 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    j5 = /* @__PURE__ */ new Set();
    ct6 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    lt6 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    F5 = class F6 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), rt6(), tt6();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((r6) => {
          var e5;
          r6.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (e5 = this.io) == null || e5.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var r6;
        super.disconnectedCallback(), (r6 = this.io) == null || r6.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const r6 = this.c, e5 = Date.now(), n5 = Date.parse(String(r6.s_from || "")), a3 = Date.parse(String(r6.s_to || ""));
        if (Number.isFinite(n5) && e5 < n5 || Number.isFinite(a3) && e5 > a3) return true;
        const s4 = et6();
        return !!(u5(r6.s_hide_mobile) && s4 === "mobile" || u5(r6.s_hide_desktop) && s4 !== "mobile");
      }
      vars(r6 = "") {
        const e5 = this.c, n5 = [], a3 = (o6, c4) => {
          c4 !== "" && c4 != null && n5.push(`${o6}:${c4}`);
        };
        a3("--a", e5.s_accent || ""), a3("--a2", e5.s_accent2 || ""), a3("--bgc", e5.s_bg || ""), a3("--fgc", e5.s_text || ""), a3("--cardc", e5.s_card || ""), a3("--r", `${g5(e5.s_radius, 22)}px`), a3("--gap", `${g5(e5.s_gap, 18)}px`), a3("--ts", `${g5(e5.s_title_size, 38)}px`), a3("--fs", `${g5(e5.s_text_size, 16)}px`), a3("--pt", `${g5(e5.s_pad_top, 56)}px`), a3("--pb", `${g5(e5.s_pad_bottom, 56)}px`), a3("--maxw", ct6[v6(e5.s_width, "normal")] ?? "1240px"), a3("--sh", lt6[Math.max(0, Math.min(5, g5(e5.s_shadow, 2)))]), a3("--ms", `${g5(e5.s_anim_ms, 700)}ms`), a3("--ov", String(g5(e5.s_overlay, 45) / 100)), e5.s_bg_image && a3("--bgimg", `url("${String(e5.s_bg_image)}")`);
        const s4 = ot6(v6(e5.s_font, "inherit"));
        return s4 && a3("font-family", `'${s4}', inherit`), n5.join(";") + (r6 ? ";" + r6 : "");
      }
      cls() {
        const r6 = this.c;
        return [
          "sec",
          `th-${v6(r6.s_theme, "auto")}`,
          `al-${v6(r6.s_align, "start")}`,
          `an-${v6(r6.s_anim, "rise")}`,
          `pt-${v6(r6.s_pattern, "none")}`,
          `bs-${v6(r6.s_btn_style, "pill")}`,
          u5(r6.s_border) ? "bordered" : "",
          u5(r6.s_stagger, true) ? "stagger" : "",
          r6.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(r6, e5 = {}, n5 = "", a3 = "", s4 = true) {
        if (this.hiddenNow()) return A;
        const o6 = this.c, c4 = y7(o6.eyebrow, e5.eyebrow ?? ""), d6 = y7(o6.title, e5.title ?? ""), f6 = y7(o6.subtitle, e5.sub ?? ""), h6 = s4 && u5(o6.s_show_head, true) && (c4 || d6 || f6);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(a3)} id=${String(o6.s_anchor || "") || A}>
      <div class="wrap">${h6 ? b2`<header class="head">${c4 ? b2`<span class="eyebrow">${c4}</span>` : ""}${d6 ? b2`<h2 class="title">${d6}</h2>` : ""}${f6 ? b2`<p class="sub">${f6}</p>` : ""}</header>` : ""}
      ${r6}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(r6) {
        const e5 = r6.filter(Boolean);
        return !e5.length || !at6() || !u5(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${b4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${e5.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(r6, e5 = {}) {
        var n5;
        return b2`<article class="pc ${r6.available ? "" : "oos"}">
      <a class="ph" href=${r6.url} @click=${() => z6(r6)}><img src=${r6.image} alt=${r6.name} loading="lazy" />${(n5 = e5.badges) != null && n5.length ? b2`<span class="badges">${e5.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${r6.url} @click=${() => z6(r6)}>${r6.name}</a>
        <div class="pr"><b>${C5(r6.price)}</b>${r6.regular > r6.price ? b2`<s>${C5(r6.regular)}</s>` : ""}</div>
        ${e5.rating !== false && r6.rating > 0 ? b2`<div class="rt">★ ${r6.rating.toFixed(1)}${r6.ratingCount ? b2` <small>(${r6.ratingCount})</small>` : ""}</div>` : ""}
        ${e5.extra ?? ""}
        ${e5.quick !== false ? b2`<button class="btn sm" ?disabled=${!r6.available} @click=${() => this.add(r6)}>${r6.available ? b4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : b4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(r6, e5 = 1, n5) {
        z6(r6, 3), await X6(r6.id, e5, n5) ? Q6(b4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = r6.url;
      }
    };
    F5.base = i`
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
    w7 = F5;
    it6([
      n4({ type: Object })
    ], w7.prototype, "config");
    dt6 = Object.defineProperty;
    gt6 = (t3, r6, e5, n5) => {
      for (var a3 = void 0, s4 = t3.length - 1, o6; s4 >= 0; s4--)
        (o6 = t3[s4]) && (a3 = o6(r6, e5, a3) || a3);
      return a3 && dt6(r6, e5, a3), a3;
    };
    D7 = class D8 extends w7 {
      constructor() {
        super(...arguments), this.facts = [];
      }
      willUpdate(r6) {
        r6.has("config") && this.load();
      }
      async load() {
        const r6 = this.c, e5 = [], [n5, a3, s4, o6] = await Promise.all([A3("offers", [], 40), A3("latest", [], 8), A3("best_selling", [], 20), A3("top-rated", [], 4)]), c4 = n5.filter((i5) => i5.regular > i5.price && i5.available);
        u5(r6.f_offers, true) && c4.length && e5.push({ e: "\u{1F3F7}\uFE0F", text: b4(`${c4.length} \u0645\u0646\u062A\u062C \u0639\u0644\u064A\u0647 \u062E\u0635\u0645 \u0627\u0644\u0622\u0646`, `${c4.length} products on sale now`) });
        const d6 = c4.sort((i5, x6) => x6.discount - i5.discount)[0];
        u5(r6.f_biggest, true) && d6 && e5.push({ e: "\u{1F4A5}", text: b4(`\u0623\u0639\u0644\u0649 \u062E\u0635\u0645 ${d6.discount}% \u0639\u0644\u0649 ${d6.name}`, `Biggest discount ${d6.discount}% on ${d6.name}`), url: d6.url });
        const f6 = s4.filter((i5) => i5.qty != null && i5.qty > 0 && i5.qty <= g5(r6.low, 5));
        u5(r6.f_low, true) && f6.slice(0, 2).forEach((i5) => e5.push({ e: "\u23F3", text: b4(`\u0628\u0627\u0642\u064A ${i5.qty} \u0645\u0646 ${i5.name}`, `${i5.qty} left of ${i5.name}`), url: i5.url })), u5(r6.f_new, true) && a3[0] && e5.push({ e: "\u{1F195}", text: b4(`\u0648\u0635\u0644 \u062C\u062F\u064A\u062F: ${a3[0].name}`, `New in: ${a3[0].name}`), url: a3[0].url }), u5(r6.f_top, true) && o6[0] && o6[0].rating > 0 && e5.push({ e: "\u2B50", text: b4(`\u0627\u0644\u0623\u0639\u0644\u0649 \u062A\u0642\u064A\u064A\u0645\u0627\u064B: ${o6[0].name} (${o6[0].rating.toFixed(1)})`, `Top rated: ${o6[0].name} (${o6[0].rating.toFixed(1)})`), url: o6[0].url });
        const h6 = s4.filter((i5) => i5.available).sort((i5, x6) => i5.price - x6.price)[0];
        u5(r6.f_from, true) && h6 && e5.push({ e: "\u{1F4B8}", text: b4(`\u0623\u0633\u0639\u0627\u0631\u0646\u0627 \u062A\u0628\u062F\u0623 \u0645\u0646 ${C5(h6.price)}`, `Prices start at ${C5(h6.price)}`) }), U2(r6.custom).forEach((i5) => e5.push({ e: "\u2726", text: i5 })), this.facts = e5;
      }
      render() {
        const r6 = this.c;
        if (!this.facts.length || this.hiddenNow()) return A;
        const e5 = b2`<div class="run">${this.facts.map((a3) => a3.url && u5(r6.links, true) ? b2`<a class="f" href=${a3.url}>${a3.e} ${a3.text}</a>` : b2`<span class="f">${a3.e} ${a3.text}</span>`)}</div>`, n5 = getComputedStyle(this).direction === "rtl";
        return b2`<div class=${this.cls()} style=${this.vars(`padding:${g5(r6.s_pad_top, 0)}px 0 ${g5(r6.s_pad_bottom, 0)}px`)}><div class="tk" style=${`--tkbg:${r6.bar_bg || "#111"};--tkfg:${r6.bar_text || "#fff"};--spd:${g5(r6.speed, 40)}s;--tkr:${g5(r6.s_radius, 0)}px;--dx:${n5 ? "100%" : "-100%"}`}>${e5}${e5}</div></div>`;
      }
    };
    D7.styles = [w7.base, i`
    .tk { display: flex; overflow: hidden; background: var(--tkbg, #111); color: var(--tkfg, #fff); border-radius: var(--tkr, 0); padding: 12px 0; font-weight: 700; font-size: 14px; mask: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
    .run { display: flex; gap: 40px; padding-inline-end: 40px; flex: none; animation: run var(--spd, 40s) linear infinite; } .tk:hover .run { animation-play-state: paused; }
    @keyframes run { to { transform: translateX(var(--dx, 100%)); } }
    .f { display: inline-flex; gap: 8px; align-items: center; white-space: nowrap; color: inherit; text-decoration: none; } .f::after { content: '✦'; margin-inline-start: 32px; opacity: .4; }
  `];
    $5 = D7;
    gt6([
      r5()
    ], $5.prototype, "facts");
    typeof $5 < "u" && $5.registerSallaComponent("salla-nabd-ticker");
  }
});

// demo/entry.js
init_lit();
i4.registerSallaComponent = function(n5) {
  if (!customElements.get(n5)) customElements.define(n5, this);
};
await Promise.resolve().then(() => (init_nabd_bestsellers(), nabd_bestsellers_exports));
await Promise.resolve().then(() => (init_nabd_cart_goals(), nabd_cart_goals_exports));
await Promise.resolve().then(() => (init_nabd_deals(), nabd_deals_exports));
await Promise.resolve().then(() => (init_nabd_restock(), nabd_restock_exports));
await Promise.resolve().then(() => (init_nabd_stock(), nabd_stock_exports));
await Promise.resolve().then(() => (init_nabd_ticker(), nabd_ticker_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
