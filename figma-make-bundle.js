const xv = () => Promise.resolve().then(() => bv), { Fragment: wv, jsx: p, jsxs: C } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Do(e) {
  const t = e?.props?._fgT, n = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && n;
}
function un(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function No(e) {
  const { _fgT: t, _fgS: n, _fgB: r, _fgD: i, ...s } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...s,
    key: e.key
  }, s.children);
}
function Gn(e) {
  return Do(e) ? No(e) : un(e) ? e.props.children : e;
}
const sn = globalThis.__GLOBALS__.React.Children, Lo = {
  map(e, t, n) {
    return sn.map(e, (r, i) => {
      const s = Gn(r);
      return un(r) ? null : t.call(n, s, i);
    });
  },
  forEach(e, t, n) {
    sn.forEach(e, (r, i) => {
      if (un(r))
        return;
      const s = Gn(r);
      t.call(n, s, i);
    });
  },
  count(e) {
    let t = 0;
    return sn.forEach(e, (n) => {
      un(n) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return sn.forEach(e, (n) => {
      un(n) || t.push(Gn(n));
    }), t;
  },
  only(e) {
    const t = sn.only(e);
    return Gn(t);
  }
}, Er = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Tu(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let n = !1;
  for (let i = 0; i < Er.length; i++)
    if (Er[i] in e) {
      n = !0;
      break;
    }
  if (!n) return e;
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    Er.indexOf(s) === -1 && (r[s] = e[s]);
  }
  return r;
}
const ks = globalThis.__GLOBALS__.React.cloneElement, Vo = (e, ...t) => {
  if (Do(e)) {
    const n = No(e), r = t[0];
    return r != null && typeof r == "object" && (t = [
      Tu(r),
      ...t.slice(1)
    ]), ks(n, ...t);
  }
  return ks(e, ...t);
}, Au = {
  ...globalThis.__GLOBALS__.React,
  Children: Lo,
  cloneElement: Vo
}, { Component: Mi, createContext: fe, createElement: $, createFactory: Su, createRef: Pu, forwardRef: Vt, Fragment: ft, isValidElement: Eu, lazy: Ru, memo: Fo, Profiler: Cu, PureComponent: Mu, startTransition: xn, StrictMode: Du, Suspense: Nu, use: Lu, useCallback: at, useContext: z, useDebugValue: Vu, useDeferredValue: Fu, useEffect: Oe, useId: ko, useImperativeHandle: ku, useInsertionEffect: Io, useLayoutEffect: gr, useMemo: ye, useReducer: Iu, useRef: He, useState: _e, useSyncExternalStore: Bu, useTransition: _u, version: Ou, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ju } = globalThis.__GLOBALS__.React, Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Lo,
  Component: Mi,
  Fragment: ft,
  Profiler: Cu,
  PureComponent: Mu,
  StrictMode: Du,
  Suspense: Nu,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ju,
  cloneElement: Vo,
  createContext: fe,
  createElement: $,
  createFactory: Su,
  createRef: Pu,
  default: Au,
  forwardRef: Vt,
  isValidElement: Eu,
  lazy: Ru,
  memo: Fo,
  startTransition: xn,
  use: Lu,
  useCallback: at,
  useContext: z,
  useDebugValue: Vu,
  useDeferredValue: Fu,
  useEffect: Oe,
  useId: ko,
  useImperativeHandle: ku,
  useInsertionEffect: Io,
  useLayoutEffect: gr,
  useMemo: ye,
  useReducer: Iu,
  useRef: He,
  useState: _e,
  useSyncExternalStore: Bu,
  useTransition: _u,
  version: Ou
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Bo = (e) => {
  throw TypeError(e);
}, zu = (e, t, n) => t.has(e) || Bo("Cannot " + n), Rr = (e, t, n) => (zu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $u = (e, t, n) => t.has(e) ? Bo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Is = "popstate";
function Wu(e = {}) {
  function t(r, i) {
    let { pathname: s, search: a, hash: o } = r.location;
    return wn(
      "",
      { pathname: s, search: a, hash: o },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Je(i);
  }
  return Ku(
    t,
    n,
    null,
    e
  );
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function de(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Hu() {
  return Math.random().toString(36).substring(2, 10);
}
function Bs(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function wn(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? gt(t) : t,
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Hu()
  };
}
function Je({
  pathname: e = "/",
  search: t = "",
  hash: n = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function gt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Ku(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: s = !1 } = r, a = i.history, o = "POP", l = null, c = u();
  c == null && (c = 0, a.replaceState({ ...a.state, idx: c }, ""));
  function u() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    o = "POP";
    let T = u(), A = T == null ? null : T - c;
    c = T, l && l({ action: o, location: x.location, delta: A });
  }
  function h(T, A) {
    o = "PUSH";
    let w = wn(x.location, T, A);
    c = u() + 1;
    let S = Bs(w, c), D = x.createHref(w);
    try {
      a.pushState(S, "", D);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError")
        throw M;
      i.location.assign(D);
    }
    s && l && l({ action: o, location: x.location, delta: 1 });
  }
  function f(T, A) {
    o = "REPLACE";
    let w = wn(x.location, T, A);
    c = u();
    let S = Bs(w, c), D = x.createHref(w);
    a.replaceState(S, "", D), s && l && l({ action: o, location: x.location, delta: 0 });
  }
  function g(T) {
    return _o(T);
  }
  let x = {
    get action() {
      return o;
    },
    get location() {
      return e(i, a);
    },
    listen(T) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Is, d), l = T, () => {
        i.removeEventListener(Is, d), l = null;
      };
    },
    createHref(T) {
      return t(i, T);
    },
    createURL: g,
    encodeLocation(T) {
      let A = g(T);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: h,
    replace: f,
    go(T) {
      return a.go(T);
    }
  };
  return x;
}
function _o(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), K(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : Je(e);
  return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
}
var dn, _s = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if ($u(this, dn, /* @__PURE__ */ new Map()), e)
      for (let [t, n] of e)
        this.set(t, n);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (Rr(this, dn).has(e))
      return Rr(this, dn).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    Rr(this, dn).set(e, t);
  }
};
dn = /* @__PURE__ */ new WeakMap();
var Gu = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Xu(e) {
  return Gu.has(
    e
  );
}
var Yu = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function Zu(e) {
  return Yu.has(
    e
  );
}
function qu(e) {
  return e.index === !0;
}
function Tn(e, t, n = [], r = {}, i = !1) {
  return e.map((s, a) => {
    let o = [...n, String(a)], l = typeof s.id == "string" ? s.id : o.join("-");
    if (K(
      s.index !== !0 || !s.children,
      "Cannot specify children on an index route"
    ), K(
      i || !r[l],
      `Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`
    ), qu(s)) {
      let c = {
        ...s,
        id: l
      };
      return r[l] = Os(
        c,
        t(c)
      ), c;
    } else {
      let c = {
        ...s,
        id: l,
        children: void 0
      };
      return r[l] = Os(
        c,
        t(c)
      ), s.children && (c.children = Tn(
        s.children,
        t,
        o,
        r,
        i
      )), c;
    }
  });
}
function Os(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function ut(e, t, n = "/") {
  return hn(e, t, n, !1);
}
function hn(e, t, n, r) {
  let i = typeof t == "string" ? gt(t) : t, s = ze(i.pathname || "/", n);
  if (s == null)
    return null;
  let a = Oo(e);
  Qu(a);
  let o = null;
  for (let l = 0; o == null && l < a.length; ++l) {
    let c = ud(s);
    o = ld(
      a[l],
      c,
      r
    );
  }
  return o;
}
function Ju(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle
  };
}
function Oo(e, t = [], n = [], r = "", i = !1) {
  let s = (a, o, l = i, c) => {
    let u = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a
    };
    if (u.relativePath.startsWith("/")) {
      if (!u.relativePath.startsWith(r) && l)
        return;
      K(
        u.relativePath.startsWith(r),
        `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), u.relativePath = u.relativePath.slice(r.length);
    }
    let d = Ye([r, u.relativePath]), h = n.concat(u);
    a.children && a.children.length > 0 && (K(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      a.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${d}".`
    ), Oo(
      a.children,
      t,
      h,
      d,
      l
    )), !(a.path == null && !a.index) && t.push({
      path: d,
      score: ad(d, a.index),
      routesMeta: h
    });
  };
  return e.forEach((a, o) => {
    if (a.path === "" || !a.path?.includes("?"))
      s(a, o);
    else
      for (let l of jo(a.path))
        s(a, o, !0, l);
  }), t;
}
function jo(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [s, ""] : [s];
  let a = jo(r.join("/")), o = [];
  return o.push(
    ...a.map(
      (l) => l === "" ? s : [s, l].join("/")
    )
  ), i && o.push(...a), o.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function Qu(e) {
  e.sort(
    (t, n) => t.score !== n.score ? n.score - t.score : od(
      t.routesMeta.map((r) => r.childrenIndex),
      n.routesMeta.map((r) => r.childrenIndex)
    )
  );
}
var ed = /^:[\w-]+$/, td = 3, nd = 2, rd = 1, id = 10, sd = -2, js = (e) => e === "*";
function ad(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(js) && (r += sd), t && (r += nd), n.filter((i) => !js(i)).reduce(
    (i, s) => i + (ed.test(s) ? td : s === "" ? rd : id),
    r
  );
}
function od(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ld(e, t, n = !1) {
  let { routesMeta: r } = e, i = {}, s = "/", a = [];
  for (let o = 0; o < r.length; ++o) {
    let l = r[o], c = o === r.length - 1, u = s === "/" ? t : t.slice(s.length) || "/", d = lr(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
      u
    ), h = l.route;
    if (!d && c && n && !r[r.length - 1].route.index && (d = lr(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      u
    )), !d)
      return null;
    Object.assign(i, d.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Ye([s, d.pathname]),
      pathnameBase: fd(
        Ye([s, d.pathnameBase])
      ),
      route: h
    }), d.pathnameBase !== "/" && (s = Ye([s, d.pathnameBase]));
  }
  return a;
}
function lr(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = cd(
    e.path,
    e.caseSensitive,
    e.end
  ), i = t.match(n);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), o = i.slice(1);
  return {
    params: r.reduce(
      (c, { paramName: u, isOptional: d }, h) => {
        if (u === "*") {
          let g = o[h] || "";
          a = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
        }
        const f = o[h];
        return d && !f ? c[u] = void 0 : c[u] = (f || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function cd(e, t = !1, n = !0) {
  de(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (a, o, l) => (r.push({ paramName: o, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function ud(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return de(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function ze(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function dd({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : Ye([e, t]);
}
var Uo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Di = (e) => Uo.test(e);
function hd(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? gt(e) : e, s;
  return n ? (n = n.replace(/\/\/+/g, "/"), n.startsWith("/") ? s = Us(n.substring(1), "/") : s = Us(n, t)) : s = t, {
    pathname: s,
    search: md(r),
    hash: pd(i)
  };
}
function Us(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Cr(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function zo(e) {
  return e.filter(
    (t, n) => n === 0 || t.route.path && t.route.path.length > 0
  );
}
function Ni(e) {
  let t = zo(e);
  return t.map(
    (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase
  );
}
function Li(e, t, n, r = !1) {
  let i;
  typeof e == "string" ? i = gt(e) : (i = { ...e }, K(
    !i.pathname || !i.pathname.includes("?"),
    Cr("?", "pathname", "search", i)
  ), K(
    !i.pathname || !i.pathname.includes("#"),
    Cr("#", "pathname", "hash", i)
  ), K(
    !i.search || !i.search.includes("#"),
    Cr("#", "search", "hash", i)
  ));
  let s = e === "" || i.pathname === "", a = s ? "/" : i.pathname, o;
  if (a == null)
    o = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; )
        h.shift(), d -= 1;
      i.pathname = h.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let l = hd(i, o), c = a && a !== "/" && a.endsWith("/"), u = (s || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
var Ye = (e) => e.join("/").replace(/\/\/+/g, "/"), fd = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), md = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, pd = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Nn = class {
  constructor(e, t, n, r = !1) {
    this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
  }
};
function An(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Ln(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var $o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Wo(e, t) {
  let n = e;
  if (typeof n != "string" || !Uo.test(n))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: n
    };
  let r = n, i = !1;
  if ($o)
    try {
      let s = new URL(window.location.href), a = n.startsWith("//") ? new URL(s.protocol + n) : new URL(n), o = ze(a.pathname, t);
      a.origin === s.origin && o != null ? n = o + a.search + a.hash : i = !0;
    } catch {
      de(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: r,
    isExternal: i,
    to: n
  };
}
var ht = Symbol("Uninstrumented");
function gd(e, t) {
  let n = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (i) => i({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(s) {
        let a = Object.keys(n);
        for (let o of a)
          s[o] && n[o].push(s[o]);
      }
    })
  );
  let r = {};
  if (typeof t.lazy == "function" && n.lazy.length > 0) {
    let i = _t(n.lazy, t.lazy, () => {
    });
    i && (r.lazy = i);
  }
  if (typeof t.lazy == "object") {
    let i = t.lazy;
    ["middleware", "loader", "action"].forEach((s) => {
      let a = i[s], o = n[`lazy.${s}`];
      if (typeof a == "function" && o.length > 0) {
        let l = _t(o, a, () => {
        });
        l && (r.lazy = Object.assign(r.lazy || {}, {
          [s]: l
        }));
      }
    });
  }
  return ["loader", "action"].forEach((i) => {
    let s = t[i];
    if (typeof s == "function" && n[i].length > 0) {
      let a = s[ht] ?? s, o = _t(
        n[i],
        a,
        (...l) => zs(l[0])
      );
      o && (i === "loader" && a.hydrate === !0 && (o.hydrate = !0), o[ht] = a, r[i] = o);
    }
  }), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((i) => {
    let s = i[ht] ?? i, a = _t(
      n.middleware,
      s,
      (...o) => zs(o[0])
    );
    return a ? (a[ht] = s, a) : i;
  })), r;
}
function yd(e, t) {
  let n = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (r) => r({
      instrument(i) {
        let s = Object.keys(i);
        for (let a of s)
          i[a] && n[a].push(i[a]);
      }
    })
  ), n.navigate.length > 0) {
    let r = e.navigate[ht] ?? e.navigate, i = _t(
      n.navigate,
      r,
      (...s) => {
        let [a, o] = s;
        return {
          to: typeof a == "number" || typeof a == "string" ? a : a ? Je(a) : ".",
          ...$s(e, o ?? {})
        };
      }
    );
    i && (i[ht] = r, e.navigate = i);
  }
  if (n.fetch.length > 0) {
    let r = e.fetch[ht] ?? e.fetch, i = _t(n.fetch, r, (...s) => {
      let [a, , o, l] = s;
      return {
        href: o ?? ".",
        fetcherKey: a,
        ...$s(e, l ?? {})
      };
    });
    i && (i[ht] = r, e.fetch = i);
  }
  return e;
}
function _t(e, t, n) {
  return e.length === 0 ? null : async (...r) => {
    let i = await Ho(
      e,
      n(...r),
      () => t(...r),
      e.length - 1
    );
    if (i.type === "error")
      throw i.value;
    return i.value;
  };
}
async function Ho(e, t, n, r) {
  let i = e[r], s;
  if (i) {
    let a, o = async () => (a ? console.error("You cannot call instrumented handlers more than once") : a = Ho(e, t, n, r - 1), s = await a, K(s, "Expected a result"), s.type === "error" && s.value instanceof Error ? { status: "error", error: s.value } : { status: "success", error: void 0 });
    try {
      await i(o, t);
    } catch (l) {
      console.error("An instrumentation function threw an error:", l);
    }
    a || await o(), await a;
  } else
    try {
      s = { type: "success", value: await n() };
    } catch (a) {
      s = { type: "error", value: a };
    }
  return s || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function zs(e) {
  let { request: t, context: n, params: r, unstable_pattern: i } = e;
  return {
    request: vd(t),
    params: { ...r },
    unstable_pattern: i,
    context: bd(n)
  };
}
function $s(e, t) {
  return {
    currentUrl: Je(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function vd(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function bd(e) {
  if (wd(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var xd = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function wd(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === xd;
}
var Ko = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], Td = new Set(
  Ko
), Ad = [
  "GET",
  ...Ko
], Sd = new Set(Ad), Go = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Pd = /* @__PURE__ */ new Set([307, 308]), Mr = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Ed = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, an = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Rd = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), Xo = "remix-router-transitions", Yo = Symbol("ResetLoaderData");
function Cd(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || Rd, s = i;
  if (e.unstable_instrumentations) {
    let m = e.unstable_instrumentations;
    s = (y) => ({
      ...i(y),
      ...gd(
        m.map((b) => b.route).filter(Boolean),
        y
      )
    });
  }
  let a = {}, o = Tn(
    e.routes,
    s,
    void 0,
    a
  ), l, c = e.basename || "/";
  c.startsWith("/") || (c = `/${c}`);
  let u = e.dataStrategy || Vd, d = {
    ...e.future
  }, h = null, f = /* @__PURE__ */ new Set(), g = null, x = null, T = null, A = e.hydrationData != null, w = ut(o, e.history.location, c), S = !1, D = null, M;
  if (w == null && !e.patchRoutesOnNavigation) {
    let m = Be(404, {
      pathname: e.history.location.pathname
    }), { matches: y, route: b } = Xn(o);
    M = !0, w = y, D = { [b.id]: m };
  } else if (w && !e.hydrationData && zn(
    w,
    o,
    e.history.location.pathname
  ).active && (w = null), w)
    if (w.some((m) => m.route.lazy))
      M = !1;
    else if (!w.some((m) => Vi(m.route)))
      M = !0;
    else {
      let m = e.hydrationData ? e.hydrationData.loaderData : null, y = e.hydrationData ? e.hydrationData.errors : null;
      if (y) {
        let b = w.findIndex(
          (P) => y[P.route.id] !== void 0
        );
        M = w.slice(0, b + 1).every(
          (P) => !Zr(P.route, m, y)
        );
      } else
        M = w.every(
          (b) => !Zr(b.route, m, y)
        );
    }
  else {
    M = !1, w = [];
    let m = zn(
      null,
      o,
      e.history.location.pathname
    );
    m.active && m.matches && (S = !0, w = m.matches);
  }
  let B, v = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: w,
    initialized: M,
    navigation: Mr,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || D,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, E = "POP", I = null, H = !1, G, ee = !1, Se = /* @__PURE__ */ new Map(), Y = null, X = !1, ne = !1, Q = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map(), re = 0, le = -1, Re = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Set(), bt = /* @__PURE__ */ new Map(), jn, en = null;
  function iu() {
    if (h = e.history.listen(
      ({ action: m, location: y, delta: b }) => {
        if (jn) {
          jn(), jn = void 0;
          return;
        }
        de(
          bt.size === 0 || b != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let P = Ds({
          currentLocation: v.location,
          nextLocation: y,
          historyAction: m
        });
        if (P && b != null) {
          let R = new Promise((V) => {
            jn = V;
          });
          e.history.go(b * -1), Un(P, {
            state: "blocked",
            location: y,
            proceed() {
              Un(P, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: y
              }), R.then(() => e.history.go(b));
            },
            reset() {
              let V = new Map(v.blockers);
              V.set(P, an), ve({ blockers: V });
            }
          }), I?.resolve(), I = null;
          return;
        }
        return xt(m, y);
      }
    ), n) {
      qd(t, Se);
      let m = () => Jd(t, Se);
      t.addEventListener("pagehide", m), Y = () => t.removeEventListener("pagehide", m);
    }
    return v.initialized || xt("POP", v.location, {
      initialHydration: !0
    }), B;
  }
  function su() {
    h && h(), Y && Y(), f.clear(), G && G.abort(), v.fetchers.forEach((m, y) => Ar(y)), v.blockers.forEach((m, y) => Ms(y));
  }
  function au(m) {
    return f.add(m), () => f.delete(m);
  }
  function ve(m, y = {}) {
    m.matches && (m.matches = m.matches.map((R) => {
      let V = a[R.route.id], N = R.route;
      return N.element !== V.element || N.errorElement !== V.errorElement || N.hydrateFallbackElement !== V.hydrateFallbackElement ? {
        ...R,
        route: V
      } : R;
    })), v = {
      ...v,
      ...m
    };
    let b = [], P = [];
    v.fetchers.forEach((R, V) => {
      R.state === "idle" && (Ce.has(V) ? b.push(V) : P.push(V));
    }), Ce.forEach((R) => {
      !v.fetchers.has(R) && !W.has(R) && b.push(R);
    }), [...f].forEach(
      (R) => R(v, {
        deletedFetchers: b,
        newErrors: m.errors ?? null,
        viewTransitionOpts: y.viewTransitionOpts,
        flushSync: y.flushSync === !0
      })
    ), b.forEach((R) => Ar(R)), P.forEach((R) => v.fetchers.delete(R));
  }
  function kt(m, y, { flushSync: b } = {}) {
    let P = v.actionData != null && v.navigation.formMethod != null && xe(v.navigation.formMethod) && v.navigation.state === "loading" && m.state?._isRedirect !== !0, R;
    y.actionData ? Object.keys(y.actionData).length > 0 ? R = y.actionData : R = null : P ? R = v.actionData : R = null;
    let V = y.loaderData ? Qs(
      v.loaderData,
      y.loaderData,
      y.matches || [],
      y.errors
    ) : v.loaderData, N = v.blockers;
    N.size > 0 && (N = new Map(N), N.forEach((O, k) => N.set(k, an)));
    let L = X ? !1 : Ls(m, y.matches || v.matches), F = H === !0 || v.navigation.formMethod != null && xe(v.navigation.formMethod) && m.state?._isRedirect !== !0;
    l && (o = l, l = void 0), X || E === "POP" || (E === "PUSH" ? e.history.push(m, m.state) : E === "REPLACE" && e.history.replace(m, m.state));
    let _;
    if (E === "POP") {
      let O = Se.get(v.location.pathname);
      O && O.has(m.pathname) ? _ = {
        currentLocation: v.location,
        nextLocation: m
      } : Se.has(m.pathname) && (_ = {
        currentLocation: m,
        nextLocation: v.location
      });
    } else if (ee) {
      let O = Se.get(v.location.pathname);
      O ? O.add(m.pathname) : (O = /* @__PURE__ */ new Set([m.pathname]), Se.set(v.location.pathname, O)), _ = {
        currentLocation: v.location,
        nextLocation: m
      };
    }
    ve(
      {
        ...y,
        // matches, errors, fetchers go through as-is
        actionData: R,
        loaderData: V,
        historyAction: E,
        location: m,
        initialized: !0,
        navigation: Mr,
        revalidation: "idle",
        restoreScrollPosition: L,
        preventScrollReset: F,
        blockers: N
      },
      {
        viewTransitionOpts: _,
        flushSync: b === !0
      }
    ), E = "POP", H = !1, ee = !1, X = !1, ne = !1, I?.resolve(), I = null, en?.resolve(), en = null;
  }
  async function Ts(m, y) {
    if (I?.resolve(), I = null, typeof m == "number") {
      I || (I = ra());
      let J = I.promise;
      return e.history.go(m), J;
    }
    let b = Yr(
      v.location,
      v.matches,
      c,
      m,
      y?.fromRouteId,
      y?.relative
    ), { path: P, submission: R, error: V } = Ws(
      !1,
      b,
      y
    ), N = v.location, L = wn(v.location, P, y && y.state);
    L = {
      ...L,
      ...e.history.encodeLocation(L)
    };
    let F = y && y.replace != null ? y.replace : void 0, _ = "PUSH";
    F === !0 ? _ = "REPLACE" : F === !1 || R != null && xe(R.formMethod) && R.formAction === v.location.pathname + v.location.search && (_ = "REPLACE");
    let O = y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0, k = (y && y.flushSync) === !0, q = Ds({
      currentLocation: N,
      nextLocation: L,
      historyAction: _
    });
    if (q) {
      Un(q, {
        state: "blocked",
        location: L,
        proceed() {
          Un(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: L
          }), Ts(m, y);
        },
        reset() {
          let J = new Map(v.blockers);
          J.set(q, an), ve({ blockers: J });
        }
      });
      return;
    }
    await xt(_, L, {
      submission: R,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: V,
      preventScrollReset: O,
      replace: y && y.replace,
      enableViewTransition: y && y.viewTransition,
      flushSync: k,
      callSiteDefaultShouldRevalidate: y && y.unstable_defaultShouldRevalidate
    });
  }
  function ou() {
    en || (en = ra()), Tr(), ve({ revalidation: "loading" });
    let m = en.promise;
    return v.navigation.state === "submitting" ? m : v.navigation.state === "idle" ? (xt(v.historyAction, v.location, {
      startUninterruptedRevalidation: !0
    }), m) : (xt(
      E || v.historyAction,
      v.navigation.location,
      {
        overrideNavigation: v.navigation,
        // Proxy through any rending view transition
        enableViewTransition: ee === !0
      }
    ), m);
  }
  async function xt(m, y, b) {
    G && G.abort(), G = null, E = m, X = (b && b.startUninterruptedRevalidation) === !0, vu(v.location, v.matches), H = (b && b.preventScrollReset) === !0, ee = (b && b.enableViewTransition) === !0;
    let P = l || o, R = b && b.overrideNavigation, V = b?.initialHydration && v.matches && v.matches.length > 0 && !S ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      v.matches
    ) : ut(P, y, c), N = (b && b.flushSync) === !0;
    if (V && v.initialized && !ne && Ud(v.location, y) && !(b && b.submission && xe(b.submission.formMethod))) {
      kt(y, { matches: V }, { flushSync: N });
      return;
    }
    let L = zn(V, P, y.pathname);
    if (L.active && L.matches && (V = L.matches), !V) {
      let { error: me, notFoundMatches: Te, route: te } = Sr(
        y.pathname
      );
      kt(
        y,
        {
          matches: Te,
          loaderData: {},
          errors: {
            [te.id]: me
          }
        },
        { flushSync: N }
      );
      return;
    }
    G = new AbortController();
    let F = Bt(
      e.history,
      y,
      G.signal,
      b && b.submission
    ), _ = e.getContext ? await e.getContext() : new _s(), O;
    if (b && b.pendingError)
      O = [
        dt(V).route.id,
        { type: "error", error: b.pendingError }
      ];
    else if (b && b.submission && xe(b.submission.formMethod)) {
      let me = await lu(
        F,
        y,
        b.submission,
        V,
        _,
        L.active,
        b && b.initialHydration === !0,
        { replace: b.replace, flushSync: N }
      );
      if (me.shortCircuited)
        return;
      if (me.pendingActionResult) {
        let [Te, te] = me.pendingActionResult;
        if (Me(te) && An(te.error) && te.error.status === 404) {
          G = null, kt(y, {
            matches: me.matches,
            loaderData: {},
            errors: {
              [Te]: te.error
            }
          });
          return;
        }
      }
      V = me.matches || V, O = me.pendingActionResult, R = Dr(y, b.submission), N = !1, L.active = !1, F = Bt(
        e.history,
        F.url,
        F.signal
      );
    }
    let {
      shortCircuited: k,
      matches: q,
      loaderData: J,
      errors: pe
    } = await cu(
      F,
      y,
      V,
      _,
      L.active,
      R,
      b && b.submission,
      b && b.fetcherSubmission,
      b && b.replace,
      b && b.initialHydration === !0,
      N,
      O,
      b && b.callSiteDefaultShouldRevalidate
    );
    k || (G = null, kt(y, {
      matches: q || V,
      ...ea(O),
      loaderData: J,
      errors: pe
    }));
  }
  async function lu(m, y, b, P, R, V, N, L = {}) {
    Tr();
    let F = Yd(y, b);
    if (ve({ navigation: F }, { flushSync: L.flushSync === !0 }), V) {
      let k = await $n(
        P,
        y.pathname,
        m.signal
      );
      if (k.type === "aborted")
        return { shortCircuited: !0 };
      if (k.type === "error") {
        if (k.partialMatches.length === 0) {
          let { matches: J, route: pe } = Xn(o);
          return {
            matches: J,
            pendingActionResult: [
              pe.id,
              {
                type: "error",
                error: k.error
              }
            ]
          };
        }
        let q = dt(k.partialMatches).route.id;
        return {
          matches: k.partialMatches,
          pendingActionResult: [
            q,
            {
              type: "error",
              error: k.error
            }
          ]
        };
      } else if (k.matches)
        P = k.matches;
      else {
        let { notFoundMatches: q, error: J, route: pe } = Sr(
          y.pathname
        );
        return {
          matches: q,
          pendingActionResult: [
            pe.id,
            {
              type: "error",
              error: J
            }
          ]
        };
      }
    }
    let _, O = tr(P, y);
    if (!O.route.action && !O.route.lazy)
      _ = {
        type: "error",
        error: Be(405, {
          method: m.method,
          pathname: y.pathname,
          routeId: O.route.id
        })
      };
    else {
      let k = Wt(
        s,
        a,
        m,
        P,
        O,
        N ? [] : r,
        R
      ), q = await tn(
        m,
        k,
        R,
        null
      );
      if (_ = q[O.route.id], !_) {
        for (let J of P)
          if (q[J.route.id]) {
            _ = q[J.route.id];
            break;
          }
      }
      if (m.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (Ct(_)) {
      let k;
      return L && L.replace != null ? k = L.replace : k = Zs(
        _.response.headers.get("Location"),
        new URL(m.url),
        c,
        e.history
      ) === v.location.pathname + v.location.search, await wt(m, _, !0, {
        submission: b,
        replace: k
      }), { shortCircuited: !0 };
    }
    if (Me(_)) {
      let k = dt(P, O.route.id);
      return (L && L.replace) !== !0 && (E = "PUSH"), {
        matches: P,
        pendingActionResult: [
          k.route.id,
          _,
          O.route.id
        ]
      };
    }
    return {
      matches: P,
      pendingActionResult: [O.route.id, _]
    };
  }
  async function cu(m, y, b, P, R, V, N, L, F, _, O, k, q) {
    let J = V || Dr(y, N), pe = N || L || na(J), me = !X && !_;
    if (R) {
      if (me) {
        let be = As(k);
        ve(
          {
            navigation: J,
            ...be !== void 0 ? { actionData: be } : {}
          },
          {
            flushSync: O
          }
        );
      }
      let Z = await $n(
        b,
        y.pathname,
        m.signal
      );
      if (Z.type === "aborted")
        return { shortCircuited: !0 };
      if (Z.type === "error") {
        if (Z.partialMatches.length === 0) {
          let { matches: It, route: St } = Xn(o);
          return {
            matches: It,
            loaderData: {},
            errors: {
              [St.id]: Z.error
            }
          };
        }
        let be = dt(Z.partialMatches).route.id;
        return {
          matches: Z.partialMatches,
          loaderData: {},
          errors: {
            [be]: Z.error
          }
        };
      } else if (Z.matches)
        b = Z.matches;
      else {
        let { error: be, notFoundMatches: It, route: St } = Sr(
          y.pathname
        );
        return {
          matches: It,
          loaderData: {},
          errors: {
            [St.id]: be
          }
        };
      }
    }
    let Te = l || o, { dsMatches: te, revalidatingFetchers: Fe } = Hs(
      m,
      P,
      s,
      a,
      e.history,
      v,
      b,
      pe,
      y,
      _ ? [] : r,
      _ === !0,
      ne,
      Q,
      Ce,
      Le,
      Pe,
      Te,
      c,
      e.patchRoutesOnNavigation != null,
      k,
      q
    );
    if (le = ++re, !e.dataStrategy && !te.some((Z) => Z.shouldLoad) && !te.some(
      (Z) => Z.route.middleware && Z.route.middleware.length > 0
    ) && Fe.length === 0) {
      let Z = Rs();
      return kt(
        y,
        {
          matches: b,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: k && Me(k[1]) ? { [k[0]]: k[1].error } : null,
          ...ea(k),
          ...Z ? { fetchers: new Map(v.fetchers) } : {}
        },
        { flushSync: O }
      ), { shortCircuited: !0 };
    }
    if (me) {
      let Z = {};
      if (!R) {
        Z.navigation = J;
        let be = As(k);
        be !== void 0 && (Z.actionData = be);
      }
      Fe.length > 0 && (Z.fetchers = uu(Fe)), ve(Z, { flushSync: O });
    }
    Fe.forEach((Z) => {
      tt(Z.key), Z.controller && W.set(Z.key, Z.controller);
    });
    let Tt = () => Fe.forEach((Z) => tt(Z.key));
    G && G.signal.addEventListener(
      "abort",
      Tt
    );
    let { loaderResults: nn, fetcherResults: lt } = await Ss(
      te,
      Fe,
      m,
      P
    );
    if (m.signal.aborted)
      return { shortCircuited: !0 };
    G && G.signal.removeEventListener(
      "abort",
      Tt
    ), Fe.forEach((Z) => W.delete(Z.key));
    let Ge = Yn(nn);
    if (Ge)
      return await wt(m, Ge.result, !0, {
        replace: F
      }), { shortCircuited: !0 };
    if (Ge = Yn(lt), Ge)
      return Pe.add(Ge.key), await wt(m, Ge.result, !0, {
        replace: F
      }), { shortCircuited: !0 };
    let { loaderData: Pr, errors: rn } = Js(
      v,
      b,
      nn,
      k,
      Fe,
      lt
    );
    _ && v.errors && (rn = { ...v.errors, ...rn });
    let At = Rs(), Wn = Cs(le), Hn = At || Wn || Fe.length > 0;
    return {
      matches: b,
      loaderData: Pr,
      errors: rn,
      ...Hn ? { fetchers: new Map(v.fetchers) } : {}
    };
  }
  function As(m) {
    if (m && !Me(m[1]))
      return {
        [m[0]]: m[1].data
      };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function uu(m) {
    return m.forEach((y) => {
      let b = v.fetchers.get(y.key), P = on(
        void 0,
        b ? b.data : void 0
      );
      v.fetchers.set(y.key, P);
    }), new Map(v.fetchers);
  }
  async function du(m, y, b, P) {
    tt(m);
    let R = (P && P.flushSync) === !0, V = l || o, N = Yr(
      v.location,
      v.matches,
      c,
      b,
      y,
      P?.relative
    ), L = ut(V, N, c), F = zn(L, V, N);
    if (F.active && F.matches && (L = F.matches), !L) {
      et(
        m,
        y,
        Be(404, { pathname: N }),
        { flushSync: R }
      );
      return;
    }
    let { path: _, submission: O, error: k } = Ws(
      !0,
      N,
      P
    );
    if (k) {
      et(m, y, k, { flushSync: R });
      return;
    }
    let q = e.getContext ? await e.getContext() : new _s(), J = (P && P.preventScrollReset) === !0;
    if (O && xe(O.formMethod)) {
      await hu(
        m,
        y,
        _,
        L,
        q,
        F.active,
        R,
        J,
        O,
        P && P.unstable_defaultShouldRevalidate
      );
      return;
    }
    Le.set(m, { routeId: y, path: _ }), await fu(
      m,
      y,
      _,
      L,
      q,
      F.active,
      R,
      J,
      O
    );
  }
  async function hu(m, y, b, P, R, V, N, L, F, _) {
    Tr(), Le.delete(m);
    let O = v.fetchers.get(m);
    Qe(m, Zd(F, O), {
      flushSync: N
    });
    let k = new AbortController(), q = Bt(
      e.history,
      b,
      k.signal,
      F
    );
    if (V) {
      let ae = await $n(
        P,
        new URL(q.url).pathname,
        q.signal,
        m
      );
      if (ae.type === "aborted")
        return;
      if (ae.type === "error") {
        et(m, y, ae.error, { flushSync: N });
        return;
      } else if (ae.matches)
        P = ae.matches;
      else {
        et(
          m,
          y,
          Be(404, { pathname: b }),
          { flushSync: N }
        );
        return;
      }
    }
    let J = tr(P, b);
    if (!J.route.action && !J.route.lazy) {
      let ae = Be(405, {
        method: F.formMethod,
        pathname: b,
        routeId: y
      });
      et(m, y, ae, { flushSync: N });
      return;
    }
    W.set(m, k);
    let pe = re, me = Wt(
      s,
      a,
      q,
      P,
      J,
      r,
      R
    ), Te = await tn(
      q,
      me,
      R,
      m
    ), te = Te[J.route.id];
    if (!te) {
      for (let ae of me)
        if (Te[ae.route.id]) {
          te = Te[ae.route.id];
          break;
        }
    }
    if (q.signal.aborted) {
      W.get(m) === k && W.delete(m);
      return;
    }
    if (Ce.has(m)) {
      if (Ct(te) || Me(te)) {
        Qe(m, nt(void 0));
        return;
      }
    } else {
      if (Ct(te))
        if (W.delete(m), le > pe) {
          Qe(m, nt(void 0));
          return;
        } else
          return Pe.add(m), Qe(m, on(F)), wt(q, te, !1, {
            fetcherSubmission: F,
            preventScrollReset: L
          });
      if (Me(te)) {
        et(m, y, te.error);
        return;
      }
    }
    let Fe = v.navigation.location || v.location, Tt = Bt(
      e.history,
      Fe,
      k.signal
    ), nn = l || o, lt = v.navigation.state !== "idle" ? ut(nn, v.navigation.location, c) : v.matches;
    K(lt, "Didn't find any matches after fetcher action");
    let Ge = ++re;
    Re.set(m, Ge);
    let Pr = on(F, te.data);
    v.fetchers.set(m, Pr);
    let { dsMatches: rn, revalidatingFetchers: At } = Hs(
      Tt,
      R,
      s,
      a,
      e.history,
      v,
      lt,
      F,
      Fe,
      r,
      !1,
      ne,
      Q,
      Ce,
      Le,
      Pe,
      nn,
      c,
      e.patchRoutesOnNavigation != null,
      [J.route.id, te],
      _
    );
    At.filter((ae) => ae.key !== m).forEach((ae) => {
      let Kn = ae.key, Fs = v.fetchers.get(Kn), wu = on(
        void 0,
        Fs ? Fs.data : void 0
      );
      v.fetchers.set(Kn, wu), tt(Kn), ae.controller && W.set(Kn, ae.controller);
    }), ve({ fetchers: new Map(v.fetchers) });
    let Wn = () => At.forEach((ae) => tt(ae.key));
    k.signal.addEventListener(
      "abort",
      Wn
    );
    let { loaderResults: Hn, fetcherResults: Z } = await Ss(
      rn,
      At,
      Tt,
      R
    );
    if (k.signal.aborted)
      return;
    if (k.signal.removeEventListener(
      "abort",
      Wn
    ), Re.delete(m), W.delete(m), At.forEach((ae) => W.delete(ae.key)), v.fetchers.has(m)) {
      let ae = nt(te.data);
      v.fetchers.set(m, ae);
    }
    let be = Yn(Hn);
    if (be)
      return wt(
        Tt,
        be.result,
        !1,
        { preventScrollReset: L }
      );
    if (be = Yn(Z), be)
      return Pe.add(be.key), wt(
        Tt,
        be.result,
        !1,
        { preventScrollReset: L }
      );
    let { loaderData: It, errors: St } = Js(
      v,
      lt,
      Hn,
      void 0,
      At,
      Z
    );
    Cs(Ge), v.navigation.state === "loading" && Ge > le ? (K(E, "Expected pending action"), G && G.abort(), kt(v.navigation.location, {
      matches: lt,
      loaderData: It,
      errors: St,
      fetchers: new Map(v.fetchers)
    })) : (ve({
      errors: St,
      loaderData: Qs(
        v.loaderData,
        It,
        lt,
        St
      ),
      fetchers: new Map(v.fetchers)
    }), ne = !1);
  }
  async function fu(m, y, b, P, R, V, N, L, F) {
    let _ = v.fetchers.get(m);
    Qe(
      m,
      on(
        F,
        _ ? _.data : void 0
      ),
      { flushSync: N }
    );
    let O = new AbortController(), k = Bt(
      e.history,
      b,
      O.signal
    );
    if (V) {
      let te = await $n(
        P,
        new URL(k.url).pathname,
        k.signal,
        m
      );
      if (te.type === "aborted")
        return;
      if (te.type === "error") {
        et(m, y, te.error, { flushSync: N });
        return;
      } else if (te.matches)
        P = te.matches;
      else {
        et(
          m,
          y,
          Be(404, { pathname: b }),
          { flushSync: N }
        );
        return;
      }
    }
    let q = tr(P, b);
    W.set(m, O);
    let J = re, pe = Wt(
      s,
      a,
      k,
      P,
      q,
      r,
      R
    ), Te = (await tn(
      k,
      pe,
      R,
      m
    ))[q.route.id];
    if (W.get(m) === O && W.delete(m), !k.signal.aborted) {
      if (Ce.has(m)) {
        Qe(m, nt(void 0));
        return;
      }
      if (Ct(Te))
        if (le > J) {
          Qe(m, nt(void 0));
          return;
        } else {
          Pe.add(m), await wt(k, Te, !1, {
            preventScrollReset: L
          });
          return;
        }
      if (Me(Te)) {
        et(m, y, Te.error);
        return;
      }
      Qe(m, nt(Te.data));
    }
  }
  async function wt(m, y, b, {
    submission: P,
    fetcherSubmission: R,
    preventScrollReset: V,
    replace: N
  } = {}) {
    b || (I?.resolve(), I = null), y.response.headers.has("X-Remix-Revalidate") && (ne = !0);
    let L = y.response.headers.get("Location");
    K(L, "Expected a Location header on the redirect Response"), L = Zs(
      L,
      new URL(m.url),
      c,
      e.history
    );
    let F = wn(v.location, L, {
      _isRedirect: !0
    });
    if (n) {
      let pe = !1;
      if (y.response.headers.has("X-Remix-Reload-Document"))
        pe = !0;
      else if (Di(L)) {
        const me = _o(L, !0);
        pe = // Hard reload if it's an absolute URL to a new origin
        me.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        ze(me.pathname, c) == null;
      }
      if (pe) {
        N ? t.location.replace(L) : t.location.assign(L);
        return;
      }
    }
    G = null;
    let _ = N === !0 || y.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: O, formAction: k, formEncType: q } = v.navigation;
    !P && !R && O && k && q && (P = na(v.navigation));
    let J = P || R;
    if (Pd.has(y.response.status) && J && xe(J.formMethod))
      await xt(_, F, {
        submission: {
          ...J,
          formAction: L
        },
        // Preserve these flags across redirects
        preventScrollReset: V || H,
        enableViewTransition: b ? ee : void 0
      });
    else {
      let pe = Dr(
        F,
        P
      );
      await xt(_, F, {
        overrideNavigation: pe,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: R,
        // Preserve these flags across redirects
        preventScrollReset: V || H,
        enableViewTransition: b ? ee : void 0
      });
    }
  }
  async function tn(m, y, b, P) {
    let R, V = {};
    try {
      R = await kd(
        u,
        m,
        y,
        P,
        b,
        !1
      );
    } catch (N) {
      return y.filter((L) => L.shouldLoad).forEach((L) => {
        V[L.route.id] = {
          type: "error",
          error: N
        };
      }), V;
    }
    if (m.signal.aborted)
      return V;
    if (!xe(m.method))
      for (let N of y) {
        if (R[N.route.id]?.type === "error")
          break;
        !R.hasOwnProperty(N.route.id) && !v.loaderData.hasOwnProperty(N.route.id) && (!v.errors || !v.errors.hasOwnProperty(N.route.id)) && N.shouldCallHandler() && (R[N.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${N.route.id}`
          )
        });
      }
    for (let [N, L] of Object.entries(R))
      if (Hd(L)) {
        let F = L.result;
        V[N] = {
          type: "redirect",
          response: Od(
            F,
            m,
            N,
            y,
            c
          )
        };
      } else
        V[N] = await _d(L);
    return V;
  }
  async function Ss(m, y, b, P) {
    let R = tn(
      b,
      m,
      P,
      null
    ), V = Promise.all(
      y.map(async (F) => {
        if (F.matches && F.match && F.request && F.controller) {
          let O = (await tn(
            F.request,
            F.matches,
            P,
            F.key
          ))[F.match.route.id];
          return { [F.key]: O };
        } else
          return Promise.resolve({
            [F.key]: {
              type: "error",
              error: Be(404, {
                pathname: F.path
              })
            }
          });
      })
    ), N = await R, L = (await V).reduce(
      (F, _) => Object.assign(F, _),
      {}
    );
    return {
      loaderResults: N,
      fetcherResults: L
    };
  }
  function Tr() {
    ne = !0, Le.forEach((m, y) => {
      W.has(y) && Q.add(y), tt(y);
    });
  }
  function Qe(m, y, b = {}) {
    v.fetchers.set(m, y), ve(
      { fetchers: new Map(v.fetchers) },
      { flushSync: (b && b.flushSync) === !0 }
    );
  }
  function et(m, y, b, P = {}) {
    let R = dt(v.matches, y);
    Ar(m), ve(
      {
        errors: {
          [R.route.id]: b
        },
        fetchers: new Map(v.fetchers)
      },
      { flushSync: (P && P.flushSync) === !0 }
    );
  }
  function Ps(m) {
    return Ve.set(m, (Ve.get(m) || 0) + 1), Ce.has(m) && Ce.delete(m), v.fetchers.get(m) || Ed;
  }
  function mu(m, y) {
    tt(m, y?.reason), Qe(m, nt(null));
  }
  function Ar(m) {
    let y = v.fetchers.get(m);
    W.has(m) && !(y && y.state === "loading" && Re.has(m)) && tt(m), Le.delete(m), Re.delete(m), Pe.delete(m), Ce.delete(m), Q.delete(m), v.fetchers.delete(m);
  }
  function pu(m) {
    let y = (Ve.get(m) || 0) - 1;
    y <= 0 ? (Ve.delete(m), Ce.add(m)) : Ve.set(m, y), ve({ fetchers: new Map(v.fetchers) });
  }
  function tt(m, y) {
    let b = W.get(m);
    b && (b.abort(y), W.delete(m));
  }
  function Es(m) {
    for (let y of m) {
      let b = Ps(y), P = nt(b.data);
      v.fetchers.set(y, P);
    }
  }
  function Rs() {
    let m = [], y = !1;
    for (let b of Pe) {
      let P = v.fetchers.get(b);
      K(P, `Expected fetcher: ${b}`), P.state === "loading" && (Pe.delete(b), m.push(b), y = !0);
    }
    return Es(m), y;
  }
  function Cs(m) {
    let y = [];
    for (let [b, P] of Re)
      if (P < m) {
        let R = v.fetchers.get(b);
        K(R, `Expected fetcher: ${b}`), R.state === "loading" && (tt(b), Re.delete(b), y.push(b));
      }
    return Es(y), y.length > 0;
  }
  function gu(m, y) {
    let b = v.blockers.get(m) || an;
    return bt.get(m) !== y && bt.set(m, y), b;
  }
  function Ms(m) {
    v.blockers.delete(m), bt.delete(m);
  }
  function Un(m, y) {
    let b = v.blockers.get(m) || an;
    K(
      b.state === "unblocked" && y.state === "blocked" || b.state === "blocked" && y.state === "blocked" || b.state === "blocked" && y.state === "proceeding" || b.state === "blocked" && y.state === "unblocked" || b.state === "proceeding" && y.state === "unblocked",
      `Invalid blocker state transition: ${b.state} -> ${y.state}`
    );
    let P = new Map(v.blockers);
    P.set(m, y), ve({ blockers: P });
  }
  function Ds({
    currentLocation: m,
    nextLocation: y,
    historyAction: b
  }) {
    if (bt.size === 0)
      return;
    bt.size > 1 && de(!1, "A router only supports one blocker at a time");
    let P = Array.from(bt.entries()), [R, V] = P[P.length - 1], N = v.blockers.get(R);
    if (!(N && N.state === "proceeding") && V({ currentLocation: m, nextLocation: y, historyAction: b }))
      return R;
  }
  function Sr(m) {
    let y = Be(404, { pathname: m }), b = l || o, { matches: P, route: R } = Xn(b);
    return { notFoundMatches: P, route: R, error: y };
  }
  function yu(m, y, b) {
    if (g = m, T = y, x = b || null, !A && v.navigation === Mr) {
      A = !0;
      let P = Ls(v.location, v.matches);
      P != null && ve({ restoreScrollPosition: P });
    }
    return () => {
      g = null, T = null, x = null;
    };
  }
  function Ns(m, y) {
    return x && x(
      m,
      y.map((P) => Ju(P, v.loaderData))
    ) || m.key;
  }
  function vu(m, y) {
    if (g && T) {
      let b = Ns(m, y);
      g[b] = T();
    }
  }
  function Ls(m, y) {
    if (g) {
      let b = Ns(m, y), P = g[b];
      if (typeof P == "number")
        return P;
    }
    return null;
  }
  function zn(m, y, b) {
    if (e.patchRoutesOnNavigation)
      if (m) {
        if (Object.keys(m[0].params).length > 0)
          return { active: !0, matches: hn(
            y,
            b,
            c,
            !0
          ) };
      } else
        return { active: !0, matches: hn(
          y,
          b,
          c,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function $n(m, y, b, P) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: m };
    let R = m;
    for (; ; ) {
      let V = l == null, N = l || o, L = a;
      try {
        await e.patchRoutesOnNavigation({
          signal: b,
          path: y,
          matches: R,
          fetcherKey: P,
          patch: (O, k) => {
            b.aborted || Ks(
              O,
              k,
              N,
              L,
              s,
              !1
            );
          }
        });
      } catch (O) {
        return { type: "error", error: O, partialMatches: R };
      } finally {
        V && !b.aborted && (o = [...o]);
      }
      if (b.aborted)
        return { type: "aborted" };
      let F = ut(N, y, c), _ = null;
      if (F) {
        if (Object.keys(F[0].params).length === 0)
          return { type: "success", matches: F };
        if (_ = hn(
          N,
          y,
          c,
          !0
        ), !(_ && R.length < _.length && Vs(
          R,
          _.slice(0, R.length)
        )))
          return { type: "success", matches: F };
      }
      if (_ || (_ = hn(
        N,
        y,
        c,
        !0
      )), !_ || Vs(R, _))
        return { type: "success", matches: null };
      R = _;
    }
  }
  function Vs(m, y) {
    return m.length === y.length && m.every((b, P) => b.route.id === y[P].route.id);
  }
  function bu(m) {
    a = {}, l = Tn(
      m,
      s,
      void 0,
      a
    );
  }
  function xu(m, y, b = !1) {
    let P = l == null;
    Ks(
      m,
      y,
      l || o,
      a,
      s,
      b
    ), P && (o = [...o], ve({}));
  }
  return B = {
    get basename() {
      return c;
    },
    get future() {
      return d;
    },
    get state() {
      return v;
    },
    get routes() {
      return o;
    },
    get window() {
      return t;
    },
    initialize: iu,
    subscribe: au,
    enableScrollRestoration: yu,
    navigate: Ts,
    fetch: du,
    revalidate: ou,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (m) => e.history.createHref(m),
    encodeLocation: (m) => e.history.encodeLocation(m),
    getFetcher: Ps,
    resetFetcher: mu,
    deleteFetcher: pu,
    dispose: su,
    getBlocker: gu,
    deleteBlocker: Ms,
    patchRoutes: xu,
    _internalFetchControllers: W,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: bu,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(m) {
      ve(m);
    }
  }, e.unstable_instrumentations && (B = yd(
    B,
    e.unstable_instrumentations.map((m) => m.router).filter(Boolean)
  )), B;
}
function Md(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Yr(e, t, n, r, i, s) {
  let a, o;
  if (i) {
    a = [];
    for (let c of t)
      if (a.push(c), c.route.id === i) {
        o = c;
        break;
      }
  } else
    a = t, o = t[t.length - 1];
  let l = Li(
    r || ".",
    Ni(a),
    ze(e.pathname, n) || e.pathname,
    s === "path"
  );
  if (r == null && (l.search = e.search, l.hash = e.hash), (r == null || r === "" || r === ".") && o) {
    let c = ki(l.search);
    if (o.route.index && !c)
      l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
    else if (!o.route.index && c) {
      let u = new URLSearchParams(l.search), d = u.getAll("index");
      u.delete("index"), d.filter((f) => f).forEach((f) => u.append("index", f));
      let h = u.toString();
      l.search = h ? `?${h}` : "";
    }
  }
  return n !== "/" && (l.pathname = dd({ basename: n, pathname: l.pathname })), Je(l);
}
function Ws(e, t, n) {
  if (!n || !Md(n))
    return { path: t };
  if (n.formMethod && !Xd(n.formMethod))
    return {
      path: t,
      error: Be(405, { method: n.formMethod })
    };
  let r = () => ({
    path: t,
    error: Be(400, { type: "invalid-body" })
  }), s = (n.formMethod || "get").toUpperCase(), a = tl(t);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!xe(s))
        return r();
      let d = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(n.body.entries()).reduce(
          (h, [f, g]) => `${h}${f}=${g}
`,
          ""
        )
      ) : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: s,
          formAction: a,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: d
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!xe(s))
        return r();
      try {
        let d = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: s,
            formAction: a,
            formEncType: n.formEncType,
            formData: void 0,
            json: d,
            text: void 0
          }
        };
      } catch {
        return r();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let o, l;
  if (n.formData)
    o = Jr(n.formData), l = n.formData;
  else if (n.body instanceof FormData)
    o = Jr(n.body), l = n.body;
  else if (n.body instanceof URLSearchParams)
    o = n.body, l = qs(o);
  else if (n.body == null)
    o = new URLSearchParams(), l = new FormData();
  else
    try {
      o = new URLSearchParams(n.body), l = qs(o);
    } catch {
      return r();
    }
  let c = {
    formMethod: s,
    formAction: a,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: l,
    json: void 0,
    text: void 0
  };
  if (xe(c.formMethod))
    return { path: t, submission: c };
  let u = gt(t);
  return e && u.search && ki(u.search) && o.append("index", ""), u.search = `?${o}`, { path: Je(u), submission: c };
}
function Hs(e, t, n, r, i, s, a, o, l, c, u, d, h, f, g, x, T, A, w, S, D) {
  let M = S ? Me(S[1]) ? S[1].error : S[1].data : void 0, B = i.createURL(s.location), v = i.createURL(l), E;
  if (u && s.errors) {
    let X = Object.keys(s.errors)[0];
    E = a.findIndex((ne) => ne.route.id === X);
  } else if (S && Me(S[1])) {
    let X = S[0];
    E = a.findIndex((ne) => ne.route.id === X) - 1;
  }
  let I = S ? S[1].statusCode : void 0, H = I && I >= 400, G = {
    currentUrl: B,
    currentParams: s.matches[0]?.params || {},
    nextUrl: v,
    nextParams: a[0].params,
    ...o,
    actionResult: M,
    actionStatus: I
  }, ee = Ln(a), Se = a.map((X, ne) => {
    let { route: Q } = X, W = null;
    if (E != null && ne > E ? W = !1 : Q.lazy ? W = !0 : Vi(Q) ? u ? W = Zr(
      Q,
      s.loaderData,
      s.errors
    ) : Dd(s.loaderData, s.matches[ne], X) && (W = !0) : W = !1, W !== null)
      return qr(
        n,
        r,
        e,
        ee,
        X,
        c,
        t,
        W
      );
    let re = !1;
    typeof D == "boolean" ? re = D : H ? re = !1 : (d || B.pathname + B.search === v.pathname + v.search || B.search !== v.search || Nd(s.matches[ne], X)) && (re = !0);
    let le = {
      ...G,
      defaultShouldRevalidate: re
    }, Re = mn(X, le);
    return qr(
      n,
      r,
      e,
      ee,
      X,
      c,
      t,
      Re,
      le,
      D
    );
  }), Y = [];
  return g.forEach((X, ne) => {
    if (u || !a.some((Ve) => Ve.route.id === X.routeId) || f.has(ne))
      return;
    let Q = s.fetchers.get(ne), W = Q && Q.state !== "idle" && Q.data === void 0, re = ut(T, X.path, A);
    if (!re) {
      if (w && W)
        return;
      Y.push({
        key: ne,
        routeId: X.routeId,
        path: X.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (x.has(ne))
      return;
    let le = tr(re, X.path), Re = new AbortController(), Pe = Bt(
      i,
      X.path,
      Re.signal
    ), Le = null;
    if (h.has(ne))
      h.delete(ne), Le = Wt(
        n,
        r,
        Pe,
        re,
        le,
        c,
        t
      );
    else if (W)
      d && (Le = Wt(
        n,
        r,
        Pe,
        re,
        le,
        c,
        t
      ));
    else {
      let Ve;
      typeof D == "boolean" ? Ve = D : H ? Ve = !1 : Ve = d;
      let Ce = {
        ...G,
        defaultShouldRevalidate: Ve
      };
      mn(le, Ce) && (Le = Wt(
        n,
        r,
        Pe,
        re,
        le,
        c,
        t,
        Ce
      ));
    }
    Le && Y.push({
      key: ne,
      routeId: X.routeId,
      path: X.path,
      matches: Le,
      match: le,
      request: Pe,
      controller: Re
    });
  }), { dsMatches: Se, revalidatingFetchers: Y };
}
function Vi(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function Zr(e, t, n) {
  if (e.lazy)
    return !0;
  if (!Vi(e))
    return !1;
  let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
  return !r && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !i;
}
function Dd(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), i = !e.hasOwnProperty(n.route.id);
  return r || i;
}
function Nd(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function mn(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean")
      return n;
  }
  return t.defaultShouldRevalidate;
}
function Ks(e, t, n, r, i, s) {
  let a;
  if (e) {
    let c = r[e];
    K(
      c,
      `No route found to patch children into: routeId = ${e}`
    ), c.children || (c.children = []), a = c.children;
  } else
    a = n;
  let o = [], l = [];
  if (t.forEach((c) => {
    let u = a.find(
      (d) => Zo(c, d)
    );
    u ? l.push({ existingRoute: u, newRoute: c }) : o.push(c);
  }), o.length > 0) {
    let c = Tn(
      o,
      i,
      [e || "_", "patch", String(a?.length || "0")],
      r
    );
    a.push(...c);
  }
  if (s && l.length > 0)
    for (let c = 0; c < l.length; c++) {
      let { existingRoute: u, newRoute: d } = l[c], h = u, [f] = Tn(
        [d],
        i,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(h, {
        element: f.element ? f.element : h.element,
        errorElement: f.errorElement ? f.errorElement : h.errorElement,
        hydrateFallbackElement: f.hydrateFallbackElement ? f.hydrateFallbackElement : h.hydrateFallbackElement
      });
    }
}
function Zo(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (n, r) => t.children?.some((i) => Zo(n, i))
  ) : !1;
}
var Gs = /* @__PURE__ */ new WeakMap(), qo = ({
  key: e,
  route: t,
  manifest: n,
  mapRouteProperties: r
}) => {
  let i = n[t.id];
  if (K(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
    return;
  let s = i.lazy[e];
  if (!s)
    return;
  let a = Gs.get(i);
  a || (a = {}, Gs.set(i, a));
  let o = a[e];
  if (o)
    return o;
  let l = (async () => {
    let c = Xu(e), d = i[e] !== void 0 && e !== "hasErrorBoundary";
    if (c)
      de(
        !c,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), a[e] = Promise.resolve();
    else if (d)
      de(
        !1,
        `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let h = await s();
      h != null && (Object.assign(i, { [e]: h }), Object.assign(i, r(i)));
    }
    typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((h) => h === void 0) && (i.lazy = void 0));
  })();
  return a[e] = l, l;
}, Xs = /* @__PURE__ */ new WeakMap();
function Ld(e, t, n, r, i) {
  let s = n[e.id];
  if (K(s, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let u = Xs.get(s);
    if (u)
      return {
        lazyRoutePromise: u,
        lazyHandlerPromise: u
      };
    let d = (async () => {
      K(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let h = await e.lazy(), f = {};
      for (let g in h) {
        let x = h[g];
        if (x === void 0)
          continue;
        let T = Zu(g), w = s[g] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        g !== "hasErrorBoundary";
        T ? de(
          !T,
          "Route property " + g + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : w ? de(
          !w,
          `Route "${s.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`
        ) : f[g] = x;
      }
      Object.assign(s, f), Object.assign(s, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...r(s),
        lazy: void 0
      });
    })();
    return Xs.set(s, d), d.catch(() => {
    }), {
      lazyRoutePromise: d,
      lazyHandlerPromise: d
    };
  }
  let a = Object.keys(e.lazy), o = [], l;
  for (let u of a) {
    if (i && i.includes(u))
      continue;
    let d = qo({
      key: u,
      route: e,
      manifest: n,
      mapRouteProperties: r
    });
    d && (o.push(d), u === t && (l = d));
  }
  let c = o.length > 0 ? Promise.all(o).then(() => {
  }) : void 0;
  return c?.catch(() => {
  }), l?.catch(() => {
  }), {
    lazyRoutePromise: c,
    lazyHandlerPromise: l
  };
}
async function Ys(e) {
  let t = e.matches.filter((i) => i.shouldLoad), n = {};
  return (await Promise.all(t.map((i) => i.resolve()))).forEach((i, s) => {
    n[t[s].route.id] = i;
  }), n;
}
async function Vd(e) {
  return e.matches.some((t) => t.route.middleware) ? Jo(e, () => Ys(e)) : Ys(e);
}
function Jo(e, t) {
  return Fd(
    e,
    t,
    (r) => {
      if (Gd(r))
        throw r;
      return r;
    },
    $d,
    n
  );
  function n(r, i, s) {
    if (s)
      return Promise.resolve(
        Object.assign(s.value, {
          [i]: { type: "error", result: r }
        })
      );
    {
      let { matches: a } = e, o = Math.min(
        // Throwing route
        Math.max(
          a.findIndex((c) => c.route.id === i),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          a.findIndex((c) => c.shouldCallHandler()),
          0
        )
      ), l = dt(
        a,
        a[o].route.id
      ).route.id;
      return Promise.resolve({
        [l]: { type: "error", result: r }
      });
    }
  }
}
async function Fd(e, t, n, r, i) {
  let { matches: s, request: a, params: o, context: l, unstable_pattern: c } = e, u = s.flatMap(
    (h) => h.route.middleware ? h.route.middleware.map((f) => [h.route.id, f]) : []
  );
  return await Qo(
    {
      request: a,
      params: o,
      context: l,
      unstable_pattern: c
    },
    u,
    t,
    n,
    r,
    i
  );
}
async function Qo(e, t, n, r, i, s, a = 0) {
  let { request: o } = e;
  if (o.signal.aborted)
    throw o.signal.reason ?? new Error(`Request aborted: ${o.method} ${o.url}`);
  let l = t[a];
  if (!l)
    return await n();
  let [c, u] = l, d, h = async () => {
    if (d)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return d = { value: await Qo(
        e,
        t,
        n,
        r,
        i,
        s,
        a + 1
      ) }, d.value;
    } catch (f) {
      return d = { value: await s(f, c, d) }, d.value;
    }
  };
  try {
    let f = await u(e, h), g = f != null ? r(f) : void 0;
    return i(g) ? g : d ? g ?? d.value : (d = { value: await h() }, d.value);
  } catch (f) {
    return await s(f, c, d);
  }
}
function el(e, t, n, r, i) {
  let s = qo({
    key: "middleware",
    route: r.route,
    manifest: t,
    mapRouteProperties: e
  }), a = Ld(
    r.route,
    xe(n.method) ? "action" : "loader",
    t,
    e,
    i
  );
  return {
    middleware: s,
    route: a.lazyRoutePromise,
    handler: a.lazyHandlerPromise
  };
}
function qr(e, t, n, r, i, s, a, o, l = null, c) {
  let u = !1, d = el(
    e,
    t,
    n,
    i,
    s
  );
  return {
    ...i,
    _lazyPromises: d,
    shouldLoad: o,
    shouldRevalidateArgs: l,
    shouldCallHandler(h) {
      return u = !0, l ? typeof c == "boolean" ? mn(i, {
        ...l,
        defaultShouldRevalidate: c
      }) : typeof h == "boolean" ? mn(i, {
        ...l,
        defaultShouldRevalidate: h
      }) : mn(i, l) : o;
    },
    resolve(h) {
      let { lazy: f, loader: g, middleware: x } = i.route, T = u || o || h && !xe(n.method) && (f || g), A = x && x.length > 0 && !g && !f;
      return T && (xe(n.method) || !A) ? Id({
        request: n,
        unstable_pattern: r,
        match: i,
        lazyHandlerPromise: d?.handler,
        lazyRoutePromise: d?.route,
        handlerOverride: h,
        scopedContext: a
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Wt(e, t, n, r, i, s, a, o = null) {
  return r.map((l) => l.route.id !== i.route.id ? {
    ...l,
    shouldLoad: !1,
    shouldRevalidateArgs: o,
    shouldCallHandler: () => !1,
    _lazyPromises: el(
      e,
      t,
      n,
      l,
      s
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : qr(
    e,
    t,
    n,
    Ln(r),
    l,
    s,
    a,
    !0,
    o
  ));
}
async function kd(e, t, n, r, i, s) {
  n.some((c) => c._lazyPromises?.middleware) && await Promise.all(n.map((c) => c._lazyPromises?.middleware));
  let a = {
    request: t,
    unstable_pattern: Ln(n),
    params: n[0].params,
    context: i,
    matches: n
  }, l = await e({
    ...a,
    fetcherKey: r,
    runClientMiddleware: (c) => {
      let u = a;
      return Jo(u, () => c({
        ...u,
        fetcherKey: r,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      n.flatMap((c) => [
        c._lazyPromises?.handler,
        c._lazyPromises?.route
      ])
    );
  } catch {
  }
  return l;
}
async function Id({
  request: e,
  unstable_pattern: t,
  match: n,
  lazyHandlerPromise: r,
  lazyRoutePromise: i,
  handlerOverride: s,
  scopedContext: a
}) {
  let o, l, c = xe(e.method), u = c ? "action" : "loader", d = (h) => {
    let f, g = new Promise((A, w) => f = w);
    l = () => f(), e.signal.addEventListener("abort", l);
    let x = (A) => typeof h != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${n.route.id}]`
      )
    ) : h(
      {
        request: e,
        unstable_pattern: t,
        params: n.params,
        context: a
      },
      ...A !== void 0 ? [A] : []
    ), T = (async () => {
      try {
        return { type: "data", result: await (s ? s((w) => x(w)) : x()) };
      } catch (A) {
        return { type: "error", result: A };
      }
    })();
    return Promise.race([T, g]);
  };
  try {
    let h = c ? n.route.action : n.route.loader;
    if (r || i)
      if (h) {
        let f, [g] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          d(h).catch((x) => {
            f = x;
          }),
          // Ensure all lazy route promises are resolved before continuing
          r,
          i
        ]);
        if (f !== void 0)
          throw f;
        o = g;
      } else {
        await r;
        let f = c ? n.route.action : n.route.loader;
        if (f)
          [o] = await Promise.all([d(f), i]);
        else if (u === "action") {
          let g = new URL(e.url), x = g.pathname + g.search;
          throw Be(405, {
            method: e.method,
            pathname: x,
            routeId: n.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (h)
      o = await d(h);
    else {
      let f = new URL(e.url), g = f.pathname + f.search;
      throw Be(404, {
        pathname: g
      });
    }
  } catch (h) {
    return { type: "error", result: h };
  } finally {
    l && e.signal.removeEventListener("abort", l);
  }
  return o;
}
async function Bd(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function _d(e) {
  let { result: t, type: n } = e;
  if (Fi(t)) {
    let r;
    try {
      r = await Bd(t);
    } catch (i) {
      return { type: "error", error: i };
    }
    return n === "error" ? {
      type: "error",
      error: new Nn(t.status, t.statusText, r),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: r,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return n === "error" ? ta(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: zd(t),
    statusCode: An(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: An(t) ? t.status : void 0
  } : ta(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function Od(e, t, n, r, i) {
  let s = e.headers.get("Location");
  if (K(
    s,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !Di(s)) {
    let a = r.slice(
      0,
      r.findIndex((o) => o.route.id === n) + 1
    );
    s = Yr(
      new URL(t.url),
      a,
      i,
      s
    ), e.headers.set("Location", s);
  }
  return e;
}
function Zs(e, t, n, r) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (Di(e)) {
    let s = e, a = s.startsWith("//") ? new URL(t.protocol + s) : new URL(s);
    if (i.includes(a.protocol))
      throw new Error("Invalid redirect location");
    let o = ze(a.pathname, n) != null;
    if (a.origin === t.origin && o)
      return a.pathname + a.search + a.hash;
  }
  try {
    let s = r.createURL(e);
    if (i.includes(s.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function Bt(e, t, n, r) {
  let i = e.createURL(tl(t)).toString(), s = { signal: n };
  if (r && xe(r.formMethod)) {
    let { formMethod: a, formEncType: o } = r;
    s.method = a.toUpperCase(), o === "application/json" ? (s.headers = new Headers({ "Content-Type": o }), s.body = JSON.stringify(r.json)) : o === "text/plain" ? s.body = r.text : o === "application/x-www-form-urlencoded" && r.formData ? s.body = Jr(r.formData) : s.body = r.formData;
  }
  return new Request(i, s);
}
function Jr(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function qs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries())
    t.append(n, r);
  return t;
}
function jd(e, t, n, r = !1, i = !1) {
  let s = {}, a = null, o, l = !1, c = {}, u = n && Me(n[1]) ? n[1].error : void 0;
  return e.forEach((d) => {
    if (!(d.route.id in t))
      return;
    let h = d.route.id, f = t[h];
    if (K(
      !Ct(f),
      "Cannot handle redirect results in processLoaderData"
    ), Me(f)) {
      let g = f.error;
      if (u !== void 0 && (g = u, u = void 0), a = a || {}, i)
        a[h] = g;
      else {
        let x = dt(e, h);
        a[x.route.id] == null && (a[x.route.id] = g);
      }
      r || (s[h] = Yo), l || (l = !0, o = An(f.error) ? f.error.status : 500), f.headers && (c[h] = f.headers);
    } else
      s[h] = f.data, f.statusCode && f.statusCode !== 200 && !l && (o = f.statusCode), f.headers && (c[h] = f.headers);
  }), u !== void 0 && n && (a = { [n[0]]: u }, n[2] && (s[n[2]] = void 0)), {
    loaderData: s,
    errors: a,
    statusCode: o || 200,
    loaderHeaders: c
  };
}
function Js(e, t, n, r, i, s) {
  let { loaderData: a, errors: o } = jd(
    t,
    n,
    r
  );
  return i.filter((l) => !l.matches || l.matches.some((c) => c.shouldLoad)).forEach((l) => {
    let { key: c, match: u, controller: d } = l;
    if (d && d.signal.aborted)
      return;
    let h = s[c];
    if (K(h, "Did not find corresponding fetcher result"), Me(h)) {
      let f = dt(e.matches, u?.route.id);
      o && o[f.route.id] || (o = {
        ...o,
        [f.route.id]: h.error
      }), e.fetchers.delete(c);
    } else if (Ct(h))
      K(!1, "Unhandled fetcher revalidation redirect");
    else {
      let f = nt(h.data);
      e.fetchers.set(c, f);
    }
  }), { loaderData: a, errors: o };
}
function Qs(e, t, n, r) {
  let i = Object.entries(t).filter(([, s]) => s !== Yo).reduce((s, [a, o]) => (s[a] = o, s), {});
  for (let s of n) {
    let a = s.route.id;
    if (!t.hasOwnProperty(a) && e.hasOwnProperty(a) && s.route.loader && (i[a] = e[a]), r && r.hasOwnProperty(a))
      break;
  }
  return i;
}
function ea(e) {
  return e ? Me(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function dt(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function Xn(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function Be(e, {
  pathname: t,
  routeId: n,
  method: r,
  type: i,
  message: s
} = {}) {
  let a = "Unknown Server Error", o = "Unknown @remix-run/router error";
  return e === 400 ? (a = "Bad Request", r && t && n ? o = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (o = "Unable to encode submission body")) : e === 403 ? (a = "Forbidden", o = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (a = "Not Found", o = `No route matches URL "${t}"`) : e === 405 && (a = "Method Not Allowed", r && t && n ? o = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (o = `Invalid request method "${r.toUpperCase()}"`)), new Nn(
    e || 500,
    a,
    new Error(o),
    !0
  );
}
function Yn(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (Ct(i))
      return { key: r, result: i };
  }
}
function tl(e) {
  let t = typeof e == "string" ? gt(e) : e;
  return Je({ ...t, hash: "" });
}
function Ud(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function zd(e) {
  return new Nn(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function $d(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, n]) => typeof t == "string" && Wd(n)
  );
}
function Wd(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function Hd(e) {
  return Fi(e.result) && Go.has(e.result.status);
}
function Me(e) {
  return e.type === "error";
}
function Ct(e) {
  return (e && e.type) === "redirect";
}
function ta(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Fi(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Kd(e) {
  return Go.has(e);
}
function Gd(e) {
  return Fi(e) && Kd(e.status) && e.headers.has("Location");
}
function Xd(e) {
  return Sd.has(e.toUpperCase());
}
function xe(e) {
  return Td.has(e.toUpperCase());
}
function ki(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function tr(e, t) {
  let n = typeof t == "string" ? gt(t).search : t.search;
  if (e[e.length - 1].route.index && ki(n || ""))
    return e[e.length - 1];
  let r = zo(e);
  return r[r.length - 1];
}
function na(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: s, json: a } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0
      };
  }
}
function Dr(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Yd(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function on(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Zd(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function nt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function qd(e, t) {
  try {
    let n = e.sessionStorage.getItem(
      Xo
    );
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {
  }
}
function Jd(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t)
      n[r] = [...i];
    try {
      e.sessionStorage.setItem(
        Xo,
        JSON.stringify(n)
      );
    } catch (r) {
      de(
        !1,
        `Failed to save applied view transitions in sessionStorage (${r}).`
      );
    }
  }
}
function ra() {
  let e, t, n = new Promise((r, i) => {
    e = async (s) => {
      r(s);
      try {
        await n;
      } catch {
      }
    }, t = async (s) => {
      i(s);
      try {
        await n;
      } catch {
      }
    };
  });
  return {
    promise: n,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var Ft = fe(null);
Ft.displayName = "DataRouter";
var Vn = fe(null);
Vn.displayName = "DataRouterState";
var nl = fe(!1);
function Qd() {
  return z(nl);
}
var Ii = fe({
  isTransitioning: !1
});
Ii.displayName = "ViewTransition";
var rl = fe(
  /* @__PURE__ */ new Map()
);
rl.displayName = "Fetchers";
var eh = fe(null);
eh.displayName = "Await";
var $e = fe(
  null
);
$e.displayName = "Navigation";
var yr = fe(
  null
);
yr.displayName = "Location";
var Ke = fe({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ke.displayName = "Route";
var Bi = fe(null);
Bi.displayName = "RouteError";
var il = "REACT_ROUTER_ERROR", th = "REDIRECT", nh = "ROUTE_ERROR_RESPONSE";
function rh(e) {
  if (e.startsWith(`${il}:${th}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function ih(e) {
  if (e.startsWith(
    `${il}:${nh}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new Nn(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function sh(e, { relative: t } = {}) {
  K(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = z($e), { hash: i, pathname: s, search: a } = kn(e, { relative: t }), o = s;
  return n !== "/" && (o = s === "/" ? n : Ye([n, s])), r.createHref({ pathname: o, search: a, hash: i });
}
function Fn() {
  return z(yr) != null;
}
function ot() {
  return K(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), z(yr).location;
}
var sl = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function al(e) {
  z($e).static || gr(e);
}
function ol() {
  let { isDataRoute: e } = z(Ke);
  return e ? xh() : ah();
}
function ah() {
  K(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = z(Ft), { basename: t, navigator: n } = z($e), { matches: r } = z(Ke), { pathname: i } = ot(), s = JSON.stringify(Ni(r)), a = He(!1);
  return al(() => {
    a.current = !0;
  }), at(
    (l, c = {}) => {
      if (de(a.current, sl), !a.current) return;
      if (typeof l == "number") {
        n.go(l);
        return;
      }
      let u = Li(
        l,
        JSON.parse(s),
        i,
        c.relative === "path"
      );
      e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : Ye([t, u.pathname])), (c.replace ? n.replace : n.push)(
        u,
        c.state,
        c
      );
    },
    [
      t,
      n,
      s,
      i,
      e
    ]
  );
}
var oh = fe(null);
function lh(e) {
  let t = z(Ke).outlet;
  return ye(
    () => t && /* @__PURE__ */ $(oh.Provider, { value: e }, t),
    [t, e]
  );
}
function _i() {
  let { matches: e } = z(Ke), t = e[e.length - 1];
  return t ? t.params : {};
}
function kn(e, { relative: t } = {}) {
  let { matches: n } = z(Ke), { pathname: r } = ot(), i = JSON.stringify(Ni(n));
  return ye(
    () => Li(
      e,
      JSON.parse(i),
      r,
      t === "path"
    ),
    [e, i, r, t]
  );
}
function ch(e, t, n, r, i) {
  K(
    Fn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = z($e), { matches: a } = z(Ke), o = a[a.length - 1], l = o ? o.params : {}, c = o ? o.pathname : "/", u = o ? o.pathnameBase : "/", d = o && o.route;
  {
    let w = d && d.path || "";
    cl(
      c,
      !d || w.endsWith("*") || w.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w === "/" ? "*" : `${w}/*`}">.`
    );
  }
  let h = ot(), f;
  f = h;
  let g = f.pathname || "/", x = g;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    x = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let T = ut(e, { pathname: x });
  return de(
    d || T != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ), de(
    T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), mh(
    T && T.map(
      (w) => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: Ye([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          s.encodeLocation ? s.encodeLocation(
            w.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathname
        ]),
        pathnameBase: w.pathnameBase === "/" ? u : Ye([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          s.encodeLocation ? s.encodeLocation(
            w.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathnameBase
        ])
      })
    ),
    a,
    n,
    r,
    i
  );
}
function uh() {
  let e = bh(), t = An(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: r }, s = { padding: "2px 4px", backgroundColor: r }, a = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), a = /* @__PURE__ */ $(ft, null, /* @__PURE__ */ $("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ $("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $("code", { style: s }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $("code", { style: s }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $(ft, null, /* @__PURE__ */ $("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ $("pre", { style: i }, n) : null, a);
}
var dh = /* @__PURE__ */ $(uh, null), ll = class extends Mi {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const n = ih(e.digest);
      n && (e = n);
    }
    let t = e !== void 0 ? /* @__PURE__ */ $(Ke.Provider, { value: this.props.routeContext }, /* @__PURE__ */ $(
      Bi.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ $(hh, { error: e }, t) : t;
  }
};
ll.contextType = nl;
var Nr = /* @__PURE__ */ new WeakMap();
function hh({
  children: e,
  error: t
}) {
  let { basename: n } = z($e);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let r = rh(t.digest);
    if (r) {
      let i = Nr.get(t);
      if (i) throw i;
      let s = Wo(r.location, n);
      if ($o && !Nr.get(t))
        if (s.isExternal || r.reloadDocument)
          window.location.href = s.absoluteURL || s.to;
        else {
          const a = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(s.to, {
              replace: r.replace
            })
          );
          throw Nr.set(t, a), a;
        }
      return /* @__PURE__ */ $(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${s.absoluteURL || s.to}`
        }
      );
    }
  }
  return e;
}
function fh({ routeContext: e, match: t, children: n }) {
  let r = z(Ft);
  return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ $(Ke.Provider, { value: e }, n);
}
function mh(e, t = [], n = null, r = null, i = null) {
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let s = e, a = n?.errors;
  if (a != null) {
    let u = s.findIndex(
      (d) => d.route.id && a?.[d.route.id] !== void 0
    );
    K(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, u + 1)
    );
  }
  let o = !1, l = -1;
  if (n)
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = u), d.route.id) {
        let { loaderData: h, errors: f } = n, g = d.route.loader && !h.hasOwnProperty(d.route.id) && (!f || f[d.route.id] === void 0);
        if (d.route.lazy || g) {
          o = !0, l >= 0 ? s = s.slice(0, l + 1) : s = [s[0]];
          break;
        }
      }
    }
  let c = n && r ? (u, d) => {
    r(u, {
      location: n.location,
      params: n.matches?.[0]?.params ?? {},
      unstable_pattern: Ln(n.matches),
      errorInfo: d
    });
  } : void 0;
  return s.reduceRight(
    (u, d, h) => {
      let f, g = !1, x = null, T = null;
      n && (f = a && d.route.id ? a[d.route.id] : void 0, x = d.route.errorElement || dh, o && (l < 0 && h === 0 ? (cl(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), g = !0, T = null) : l === h && (g = !0, T = d.route.hydrateFallbackElement || null)));
      let A = t.concat(s.slice(0, h + 1)), w = () => {
        let S;
        return f ? S = x : g ? S = T : d.route.Component ? S = /* @__PURE__ */ $(d.route.Component, null) : d.route.element ? S = d.route.element : S = u, /* @__PURE__ */ $(
          fh,
          {
            match: d,
            routeContext: {
              outlet: u,
              matches: A,
              isDataRoute: n != null
            },
            children: S
          }
        );
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? /* @__PURE__ */ $(
        ll,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: f,
          children: w(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: c
        }
      ) : w();
    },
    null
  );
}
function Oi(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ph(e) {
  let t = z(Ft);
  return K(t, Oi(e)), t;
}
function gh(e) {
  let t = z(Vn);
  return K(t, Oi(e)), t;
}
function yh(e) {
  let t = z(Ke);
  return K(t, Oi(e)), t;
}
function ji(e) {
  let t = yh(e), n = t.matches[t.matches.length - 1];
  return K(
    n.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function vh() {
  return ji(
    "useRouteId"
    /* UseRouteId */
  );
}
function bh() {
  let e = z(Bi), t = gh(
    "useRouteError"
    /* UseRouteError */
  ), n = ji(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[n];
}
function xh() {
  let { router: e } = ph(
    "useNavigate"
    /* UseNavigateStable */
  ), t = ji(
    "useNavigate"
    /* UseNavigateStable */
  ), n = He(!1);
  return al(() => {
    n.current = !0;
  }), at(
    async (i, s = {}) => {
      de(n.current, sl), n.current && (typeof i == "number" ? await e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...s }));
    },
    [e, t]
  );
}
var ia = {};
function cl(e, t, n) {
  !t && !ia[e] && (ia[e] = !0, de(!1, n));
}
var sa = {};
function aa(e, t) {
  !e && !sa[t] && (sa[t] = !0, console.warn(t));
}
var wh = "useOptimistic", oa = Uu[wh], Th = () => {
};
function Ah(e) {
  return oa ? oa(e) : [e, Th];
}
function Sh(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && de(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: $(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && de(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: $(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && de(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: $(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var Ph = [
  "HydrateFallback",
  "hydrateFallbackElement"
], Eh = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (n) => {
        this.status === "pending" && (this.status = "resolved", e(n));
      }, this.reject = (n) => {
        this.status === "pending" && (this.status = "rejected", t(n));
      };
    });
  }
};
function Rh({
  router: e,
  flushSync: t,
  onError: n,
  unstable_useTransitions: r
}) {
  r = Qd() || r;
  let [s, a] = _e(e.state), [o, l] = Ah(s), [c, u] = _e(), [d, h] = _e({
    isTransitioning: !1
  }), [f, g] = _e(), [x, T] = _e(), [A, w] = _e(), S = He(/* @__PURE__ */ new Map()), D = at(
    (E, { deletedFetchers: I, newErrors: H, flushSync: G, viewTransitionOpts: ee }) => {
      H && n && Object.values(H).forEach(
        (Y) => n(Y, {
          location: E.location,
          params: E.matches[0]?.params ?? {},
          unstable_pattern: Ln(E.matches)
        })
      ), E.fetchers.forEach((Y, X) => {
        Y.data !== void 0 && S.current.set(X, Y.data);
      }), I.forEach((Y) => S.current.delete(Y)), aa(
        G === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Se = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (aa(
        ee == null || Se,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !ee || !Se) {
        t && G ? t(() => a(E)) : r === !1 ? a(E) : xn(() => {
          r === !0 && l((Y) => la(Y, E)), a(E);
        });
        return;
      }
      if (t && G) {
        t(() => {
          x && (f?.resolve(), x.skipTransition()), h({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: ee.currentLocation,
            nextLocation: ee.nextLocation
          });
        });
        let Y = e.window.document.startViewTransition(() => {
          t(() => a(E));
        });
        Y.finished.finally(() => {
          t(() => {
            g(void 0), T(void 0), u(void 0), h({ isTransitioning: !1 });
          });
        }), t(() => T(Y));
        return;
      }
      x ? (f?.resolve(), x.skipTransition(), w({
        state: E,
        currentLocation: ee.currentLocation,
        nextLocation: ee.nextLocation
      })) : (u(E), h({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: ee.currentLocation,
        nextLocation: ee.nextLocation
      }));
    },
    [
      e.window,
      t,
      x,
      f,
      r,
      l,
      n
    ]
  );
  gr(() => e.subscribe(D), [e, D]), Oe(() => {
    d.isTransitioning && !d.flushSync && g(new Eh());
  }, [d]), Oe(() => {
    if (f && c && e.window) {
      let E = c, I = f.promise, H = e.window.document.startViewTransition(async () => {
        r === !1 ? a(E) : xn(() => {
          r === !0 && l((G) => la(G, E)), a(E);
        }), await I;
      });
      H.finished.finally(() => {
        g(void 0), T(void 0), u(void 0), h({ isTransitioning: !1 });
      }), T(H);
    }
  }, [
    c,
    f,
    e.window,
    r,
    l
  ]), Oe(() => {
    f && c && o.location.key === c.location.key && f.resolve();
  }, [f, x, o.location, c]), Oe(() => {
    !d.isTransitioning && A && (u(A.state), h({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: A.currentLocation,
      nextLocation: A.nextLocation
    }), w(void 0));
  }, [d.isTransitioning, A]);
  let M = ye(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (E) => e.navigate(E),
    push: (E, I, H) => e.navigate(E, {
      state: I,
      preventScrollReset: H?.preventScrollReset
    }),
    replace: (E, I, H) => e.navigate(E, {
      replace: !0,
      state: I,
      preventScrollReset: H?.preventScrollReset
    })
  }), [e]), B = e.basename || "/", v = ye(
    () => ({
      router: e,
      navigator: M,
      static: !1,
      basename: B,
      onError: n
    }),
    [e, M, B, n]
  );
  return /* @__PURE__ */ $(ft, null, /* @__PURE__ */ $(Ft.Provider, { value: v }, /* @__PURE__ */ $(Vn.Provider, { value: o }, /* @__PURE__ */ $(rl.Provider, { value: S.current }, /* @__PURE__ */ $(Ii.Provider, { value: d }, /* @__PURE__ */ $(
    Nh,
    {
      basename: B,
      location: o.location,
      navigationType: o.historyAction,
      navigator: M,
      unstable_useTransitions: r
    },
    /* @__PURE__ */ $(
      Ch,
      {
        routes: e.routes,
        future: e.future,
        state: o,
        onError: n
      }
    )
  ))))), null);
}
function la(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var Ch = Fo(Mh);
function Mh({
  routes: e,
  future: t,
  state: n,
  onError: r
}) {
  return ch(e, void 0, n, r, t);
}
function Dh(e) {
  return lh(e.context);
}
function Nh({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: s = !1,
  unstable_useTransitions: a
}) {
  K(
    !Fn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let o = e.replace(/^\/*/, "/"), l = ye(
    () => ({
      basename: o,
      navigator: i,
      static: s,
      unstable_useTransitions: a,
      future: {}
    }),
    [o, i, s, a]
  );
  typeof n == "string" && (n = gt(n));
  let {
    pathname: c = "/",
    search: u = "",
    hash: d = "",
    state: h = null,
    key: f = "default"
  } = n, g = ye(() => {
    let x = ze(c, o);
    return x == null ? null : {
      location: {
        pathname: x,
        search: u,
        hash: d,
        state: h,
        key: f
      },
      navigationType: r
    };
  }, [o, c, u, d, h, f, r]);
  return de(
    g != null,
    `<Router basename="${o}"> is not able to match the URL "${c}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
  ), g == null ? null : /* @__PURE__ */ $($e.Provider, { value: l }, /* @__PURE__ */ $(yr.Provider, { children: t, value: g }));
}
var nr = "get", rr = "application/x-www-form-urlencoded";
function vr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Lh(e) {
  return vr(e) && e.tagName.toLowerCase() === "button";
}
function Vh(e) {
  return vr(e) && e.tagName.toLowerCase() === "form";
}
function Fh(e) {
  return vr(e) && e.tagName.toLowerCase() === "input";
}
function kh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ih(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !kh(e);
}
function Qr(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
      let r = e[n];
      return t.concat(
        Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]
      );
    }, [])
  );
}
function Bh(e, t) {
  let n = Qr(e);
  return t && t.forEach((r, i) => {
    n.has(i) || t.getAll(i).forEach((s) => {
      n.append(i, s);
    });
  }), n;
}
var Zn = null;
function _h() {
  if (Zn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Zn = !1;
    } catch {
      Zn = !0;
    }
  return Zn;
}
var Oh = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Lr(e) {
  return e != null && !Oh.has(e) ? (de(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`
  ), null) : e;
}
function jh(e, t) {
  let n, r, i, s, a;
  if (Vh(e)) {
    let o = e.getAttribute("action");
    r = o ? ze(o, t) : null, n = e.getAttribute("method") || nr, i = Lr(e.getAttribute("enctype")) || rr, s = new FormData(e);
  } else if (Lh(e) || Fh(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || o.getAttribute("action");
    if (r = l ? ze(l, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || nr, i = Lr(e.getAttribute("formenctype")) || Lr(o.getAttribute("enctype")) || rr, s = new FormData(o, e), !_h()) {
      let { name: c, type: u, value: d } = e;
      if (u === "image") {
        let h = c ? `${c}.` : "";
        s.append(`${h}x`, "0"), s.append(`${h}y`, "0");
      } else c && s.append(c, d);
    }
  } else {
    if (vr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = nr, r = null, i = rr, a = e;
  }
  return s && i === "text/plain" && (a = s, s = void 0), { action: r, method: n.toLowerCase(), encType: i, formData: s, body: a };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ui(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Uh(e, t, n, r) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && ze(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function zh(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function $h(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Wh(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let s = t.routes[i.route.id];
      if (s) {
        let a = await zh(s, n);
        return a.links ? a.links() : [];
      }
      return [];
    })
  );
  return Xh(
    r.flat(1).filter($h).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function ca(e, t, n, r, i, s) {
  let a = (l, c) => n[c] ? l.route.id !== n[c].route.id : !0, o = (l, c) => (
    // param change, /users/123 -> /users/456
    n[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n[c].route.path?.endsWith("*") && n[c].params["*"] !== l.params["*"]
  );
  return s === "assets" ? t.filter(
    (l, c) => a(l, c) || o(l, c)
  ) : s === "data" ? t.filter((l, c) => {
    let u = r.routes[l.route.id];
    if (!u || !u.hasLoader)
      return !1;
    if (a(l, c) || o(l, c))
      return !0;
    if (l.route.shouldRevalidate) {
      let d = l.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: n[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof d == "boolean")
        return d;
    }
    return !0;
  }) : [];
}
function Hh(e, t, { includeHydrateFallback: n } = {}) {
  return Kh(
    e.map((r) => {
      let i = t.routes[r.route.id];
      if (!i) return [];
      let s = [i.module];
      return i.clientActionModule && (s = s.concat(i.clientActionModule)), i.clientLoaderModule && (s = s.concat(i.clientLoaderModule)), n && i.hydrateFallbackModule && (s = s.concat(i.hydrateFallbackModule)), i.imports && (s = s.concat(i.imports)), s;
    }).flat(1)
  );
}
function Kh(e) {
  return [...new Set(e)];
}
function Gh(e) {
  let t = {}, n = Object.keys(e).sort();
  for (let r of n)
    t[r] = e[r];
  return t;
}
function Xh(e, t) {
  let n = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((r, i) => {
    let s = JSON.stringify(Gh(i));
    return n.has(s) || (n.add(s), r.push({ key: s, link: i })), r;
  }, []);
}
function ul() {
  let e = z(Ft);
  return Ui(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Yh() {
  let e = z(Vn);
  return Ui(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var zi = fe(void 0);
zi.displayName = "FrameworkContext";
function dl() {
  let e = z(zi);
  return Ui(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Zh(e, t) {
  let n = z(zi), [r, i] = _e(!1), [s, a] = _e(!1), { onFocus: o, onBlur: l, onMouseEnter: c, onMouseLeave: u, onTouchStart: d } = t, h = He(null);
  Oe(() => {
    if (e === "render" && a(!0), e === "viewport") {
      let x = (A) => {
        A.forEach((w) => {
          a(w.isIntersecting);
        });
      }, T = new IntersectionObserver(x, { threshold: 0.5 });
      return h.current && T.observe(h.current), () => {
        T.disconnect();
      };
    }
  }, [e]), Oe(() => {
    if (r) {
      let x = setTimeout(() => {
        a(!0);
      }, 100);
      return () => {
        clearTimeout(x);
      };
    }
  }, [r]);
  let f = () => {
    i(!0);
  }, g = () => {
    i(!1), a(!1);
  };
  return n ? e !== "intent" ? [s, h, {}] : [
    s,
    h,
    {
      onFocus: ln(o, f),
      onBlur: ln(l, g),
      onMouseEnter: ln(c, f),
      onMouseLeave: ln(u, g),
      onTouchStart: ln(d, f)
    }
  ] : [!1, h, {}];
}
function ln(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function qh({ page: e, ...t }) {
  let { router: n } = ul(), r = ye(
    () => ut(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return r ? /* @__PURE__ */ $(Qh, { page: e, matches: r, ...t }) : null;
}
function Jh(e) {
  let { manifest: t, routeModules: n } = dl(), [r, i] = _e([]);
  return Oe(() => {
    let s = !1;
    return Wh(e, t, n).then(
      (a) => {
        s || i(a);
      }
    ), () => {
      s = !0;
    };
  }, [e, t, n]), r;
}
function Qh({
  page: e,
  matches: t,
  ...n
}) {
  let r = ot(), { future: i, manifest: s, routeModules: a } = dl(), { basename: o } = ul(), { loaderData: l, matches: c } = Yh(), u = ye(
    () => ca(
      e,
      t,
      c,
      s,
      r,
      "data"
    ),
    [e, t, c, s, r]
  ), d = ye(
    () => ca(
      e,
      t,
      c,
      s,
      r,
      "assets"
    ),
    [e, t, c, s, r]
  ), h = ye(() => {
    if (e === r.pathname + r.search + r.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), T = !1;
    if (t.forEach((w) => {
      let S = s.routes[w.route.id];
      !S || !S.hasLoader || (!u.some((D) => D.route.id === w.route.id) && w.route.id in l && a[w.route.id]?.shouldRevalidate || S.hasClientLoader ? T = !0 : x.add(w.route.id));
    }), x.size === 0)
      return [];
    let A = Uh(
      e,
      o,
      i.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return T && x.size > 0 && A.searchParams.set(
      "_routes",
      t.filter((w) => x.has(w.route.id)).map((w) => w.route.id).join(",")
    ), [A.pathname + A.search];
  }, [
    o,
    i.unstable_trailingSlashAwareDataRequests,
    l,
    r,
    s,
    u,
    t,
    e,
    a
  ]), f = ye(
    () => Hh(d, s),
    [d, s]
  ), g = Jh(d);
  return /* @__PURE__ */ $(ft, null, h.map((x) => /* @__PURE__ */ $("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...n })), f.map((x) => /* @__PURE__ */ $("link", { key: x, rel: "modulepreload", href: x, ...n })), g.map(({ key: x, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $(
      "link",
      {
        key: x,
        nonce: n.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? n.crossOrigin
      }
    )
  )));
}
function ef(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var tf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  tf && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function nf(e, t) {
  return Cd({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: Wu({ window: t?.window }),
    hydrationData: rf(),
    routes: e,
    mapRouteProperties: Sh,
    hydrationRouteProperties: Ph,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function rf() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: sf(e.errors)
  }), e;
}
function sf(e) {
  if (!e) return null;
  let t = Object.entries(e), n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Nn(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let a = new s(i.message);
            a.stack = "", n[r] = a;
          } catch {
          }
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        s.stack = "", n[r] = s;
      }
    } else
      n[r] = i;
  return n;
}
var hl = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ue = Vt(
  function({
    onClick: t,
    discover: n = "render",
    prefetch: r = "none",
    relative: i,
    reloadDocument: s,
    replace: a,
    state: o,
    target: l,
    to: c,
    preventScrollReset: u,
    viewTransition: d,
    unstable_defaultShouldRevalidate: h,
    ...f
  }, g) {
    let { basename: x, unstable_useTransitions: T } = z($e), A = typeof c == "string" && hl.test(c), w = Wo(c, x);
    c = w.to;
    let S = sh(c, { relative: i }), [D, M, B] = Zh(
      r,
      f
    ), v = cf(c, {
      replace: a,
      state: o,
      target: l,
      preventScrollReset: u,
      relative: i,
      viewTransition: d,
      unstable_defaultShouldRevalidate: h,
      unstable_useTransitions: T
    });
    function E(H) {
      t && t(H), H.defaultPrevented || v(H);
    }
    let I = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $(
        "a",
        {
          ...f,
          ...B,
          href: w.absoluteURL || S,
          onClick: w.isExternal || s ? t : E,
          ref: ef(g, M),
          target: l,
          "data-discover": !A && n === "render" ? "true" : void 0
        }
      )
    );
    return D && !A ? /* @__PURE__ */ $(ft, null, I, /* @__PURE__ */ $(qh, { page: S })) : I;
  }
);
ue.displayName = "Link";
var af = Vt(
  function({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: s,
    to: a,
    viewTransition: o,
    children: l,
    ...c
  }, u) {
    let d = kn(a, { relative: c.relative }), h = ot(), f = z(Vn), { navigator: g, basename: x } = z($e), T = f != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    pf(d) && o === !0, A = g.encodeLocation ? g.encodeLocation(d).pathname : d.pathname, w = h.pathname, S = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    n || (w = w.toLowerCase(), S = S ? S.toLowerCase() : null, A = A.toLowerCase()), S && x && (S = ze(S, x) || S);
    const D = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let M = w === A || !i && w.startsWith(A) && w.charAt(D) === "/", B = S != null && (S === A || !i && S.startsWith(A) && S.charAt(A.length) === "/"), v = {
      isActive: M,
      isPending: B,
      isTransitioning: T
    }, E = M ? t : void 0, I;
    typeof r == "function" ? I = r(v) : I = [
      r,
      M ? "active" : null,
      B ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let H = typeof s == "function" ? s(v) : s;
    return /* @__PURE__ */ $(
      ue,
      {
        ...c,
        "aria-current": E,
        className: I,
        ref: u,
        style: H,
        to: a,
        viewTransition: o
      },
      typeof l == "function" ? l(v) : l
    );
  }
);
af.displayName = "NavLink";
var of = Vt(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: i,
    state: s,
    method: a = nr,
    action: o,
    onSubmit: l,
    relative: c,
    preventScrollReset: u,
    viewTransition: d,
    unstable_defaultShouldRevalidate: h,
    ...f
  }, g) => {
    let { unstable_useTransitions: x } = z($e), T = ff(), A = mf(o, { relative: c }), w = a.toLowerCase() === "get" ? "get" : "post", S = typeof o == "string" && hl.test(o);
    return /* @__PURE__ */ $(
      "form",
      {
        ref: g,
        method: w,
        action: A,
        onSubmit: r ? l : (M) => {
          if (l && l(M), M.defaultPrevented) return;
          M.preventDefault();
          let B = M.nativeEvent.submitter, v = B?.getAttribute("formmethod") || a, E = () => T(B || M.currentTarget, {
            fetcherKey: t,
            method: v,
            navigate: n,
            replace: i,
            state: s,
            relative: c,
            preventScrollReset: u,
            viewTransition: d,
            unstable_defaultShouldRevalidate: h
          });
          x && n !== !1 ? xn(() => E()) : E();
        },
        ...f,
        "data-discover": !S && e === "render" ? "true" : void 0
      }
    );
  }
);
of.displayName = "Form";
function lf(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fl(e) {
  let t = z(Ft);
  return K(t, lf(e)), t;
}
function cf(e, {
  target: t,
  replace: n,
  state: r,
  preventScrollReset: i,
  relative: s,
  viewTransition: a,
  unstable_defaultShouldRevalidate: o,
  unstable_useTransitions: l
} = {}) {
  let c = ol(), u = ot(), d = kn(e, { relative: s });
  return at(
    (h) => {
      if (Ih(h, t)) {
        h.preventDefault();
        let f = n !== void 0 ? n : Je(u) === Je(d), g = () => c(e, {
          replace: f,
          state: r,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
          unstable_defaultShouldRevalidate: o
        });
        l ? xn(() => g()) : g();
      }
    },
    [
      u,
      c,
      d,
      n,
      r,
      t,
      e,
      i,
      s,
      a,
      o,
      l
    ]
  );
}
function uf(e) {
  de(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let t = He(Qr(e)), n = He(!1), r = ot(), i = ye(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      Bh(
        r.search,
        n.current ? null : t.current
      )
    ),
    [r.search]
  ), s = ol(), a = at(
    (o, l) => {
      const c = Qr(
        typeof o == "function" ? o(new URLSearchParams(i)) : o
      );
      n.current = !0, s("?" + c, l);
    },
    [s, i]
  );
  return [i, a];
}
var df = 0, hf = () => `__${String(++df)}__`;
function ff() {
  let { router: e } = fl(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = z($e), n = vh(), r = e.fetch, i = e.navigate;
  return at(
    async (s, a = {}) => {
      let { action: o, method: l, encType: c, formData: u, body: d } = jh(
        s,
        t
      );
      if (a.navigate === !1) {
        let h = a.fetcherKey || hf();
        await r(h, n, a.action || o, {
          unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: u,
          body: d,
          formMethod: a.method || l,
          formEncType: a.encType || c,
          flushSync: a.flushSync
        });
      } else
        await i(a.action || o, {
          unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: u,
          body: d,
          formMethod: a.method || l,
          formEncType: a.encType || c,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [r, i, t, n]
  );
}
function mf(e, { relative: t } = {}) {
  let { basename: n } = z($e), r = z(Ke);
  K(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1), s = { ...kn(e || ".", { relative: t }) }, a = ot();
  if (e == null) {
    s.search = a.search;
    let o = new URLSearchParams(s.search), l = o.getAll("index");
    if (l.some((u) => u === "")) {
      o.delete("index"), l.filter((d) => d).forEach((d) => o.append("index", d));
      let u = o.toString();
      s.search = u ? `?${u}` : "";
    }
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (s.pathname = s.pathname === "/" ? n : Ye([n, s.pathname])), Je(s);
}
function pf(e, { relative: t } = {}) {
  let n = z(Ii);
  K(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = fl(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = kn(e, { relative: t });
  if (!n.isTransitioning)
    return !1;
  let s = ze(n.currentLocation.pathname, r) || n.currentLocation.pathname, a = ze(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return lr(i.pathname, a) != null || lr(i.pathname, s) != null;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), ua = (e) => {
  const t = yf(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ml = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = Vt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: a,
    ...o
  }, l) => $(
    "svg",
    {
      ref: l,
      ...vf,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ml("lucide", i),
      ...o
    },
    [
      ...a.map(([c, u]) => $(c, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (e, t) => {
  const n = Vt(
    ({ className: r, ...i }, s) => $(bf, {
      ref: s,
      iconNode: t,
      className: ml(
        `lucide-${gf(ua(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = ua(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xf = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], ei = Ne("arrow-left", xf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], Tf = Ne("book-open", wf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], da = Ne("bot", Af);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sf = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Pf = Ne("chevron-left", Sf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ef = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Rf = Ne("chevron-right", Ef);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], ti = Ne("clock", Cf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mf = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], Df = Ne("house", Mf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nf = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], Lf = Ne("lightbulb", Nf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
], Ff = Ne("list-checks", Vf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kf = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], If = Ne("map-pin", kf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], _f = Ne("search", Bf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], jf = Ne("send", Of);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], zf = Ne("user", Uf);
function $f() {
  const e = ot(), t = (r) => r === "/" ? e.pathname === "/" : e.pathname.startsWith(r);
  return /* @__PURE__ */ p("nav", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50", children: /* @__PURE__ */ p("div", { className: "max-w-md mx-auto flex justify-around items-center", children: [
    { path: "/", icon: Df, label: "首頁" },
    { path: "/search", icon: _f, label: "搜尋" },
    { path: "/topics", icon: Tf, label: "專題" }
  ].map((r) => {
    const i = r.icon, s = t(r.path);
    return /* @__PURE__ */ C(
      ue,
      {
        to: r.path,
        className: `flex flex-col items-center gap-1 transition-colors ${s ? "text-primary" : "text-gray-400"}`,
        children: [
          /* @__PURE__ */ p(i, { className: "w-6 h-6" }),
          /* @__PURE__ */ p("span", { className: "text-xs", children: r.label })
        ]
      },
      r.path
    );
  }) }) });
}
function Wf() {
  return /* @__PURE__ */ C("div", { className: "min-h-screen bg-neutral-50", children: [
    /* @__PURE__ */ p("div", { className: "pb-20", children: /* @__PURE__ */ p(Dh, {}) }),
    /* @__PURE__ */ p($f, {})
  ] });
}
const Ht = [
  { id: 1, name: "頭痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_oEg6HHLpUvOai81ztqQaZ9gKDKbTeRuQ3IH0eFwBVAyPJXgpQinghCUJhTk8dEoJKbOzJ-0y3aNo18E-wEC9IYP6GnCwB5hiRHW_8x-2zs15N_wayb2wmDqXF6UnNWmJWoLhUxPDW_9G/s800/virus_zutsuu_man.png" },
  { id: 2, name: "偏頭痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGzKBOWVvhRRkeB50g7w9fjkMoYTd40yBh58HxZLRVht1eMUrvm27MTDSORnA-tzdP_KKNhwkq-WwdTXN8Nhq4B0ZOE2VxJyjFAxpgt4HiqfpawPACdGCPy0-6wd4GWyfBvHCvJI8QS-s0/s450/virus_zutsuu2.png" },
  { id: 3, name: "頭暈", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfqPGhgpIUS9w2jWKS9uq-Q3l_KblXjfStpIlLBuIPaxzVdgIrUeBTprL3ZGXRRmGztFVoICGm6-WMpjScUligHVEYt0zWOKGyJAJ-3Rnni_QT1CPS9vilKO1ISPH7HBEhlqVhJNIx5_us/s450/memai_tachikurami_man.png" },
  { id: 4, name: "精神不濟", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcBaztWagQBAw3a2DNlzmpIdeYjl8l49-iA9QjfesWKSjsuOJgJsoZtZnKHYuc5wxfizzrAeKeL5fAYtgwOMd8SMRDEll7SxCTZAYNVM4AJODsUmlOrtjfj8T7wGXjluaWcx_D6VQtVHQ/s400/karou_hoikushi_woman.png" },
  { id: 5, name: "眼睛疲勞", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiHj3WHpuLYmuplo7oibvDWHSmMTzT5cVG1TxDRNPwUBoSxkMK_C4HJFlWpOuJO86JI4_oHqerCMnY3_ArnrWKgxgEDC-GJPMmio0_Mj1Po07Ay_o3OJr-BsA1EseWtwRua7T5NsQtys9-/s400/eye_ganseihirou_man.png" },
  { id: 6, name: "眼壓高", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJmAExz-OpHRciscwLMm8S4UHy96DiAPl4BkO83x8_f-mpzGNcBRHA2Xu7jWM9edW7KVNEP4W-MNU2Lg4pNKRNmT4Vzp0h91haoxzhy4RSXrE0XsAiPRHMN1ECFB0-HgK1nOB4QM8chyJc/s400/guruguru_megamawaru_man.png" },
  { id: 7, name: "眼睛乾澀", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcHNmFe3rKkBLPo3H5TV28i2NZKJvY8btBKd_hmhJSMKStP8X5VY6kgHfFKNsPeTy95hZxitcfd0uVc6i3RmOV6KPnHFq4mx6JZqxIiGvYt_7atAAzXYId8f2udxJIK1V5jragWB7DFxbc/s400/eye_ganseihirou_smartphone_man.png" },
  { id: 8, name: "鼻塞", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit7AoHswBsdKUpjtVu40s8AcaQq8HfQSAyKjpyt9h0I8YJmWLmvlwctajHJv3QRZH_LdJrtAklQA-_BMYPA3mKXXka9MLm9keTwQ43765k-5xtJjH_wZ32fcc_qptcjE_4SCzVp5GXx4-N/s400/biyou_keana_woman.png" },
  { id: 9, name: "鼻過敏", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZBa7B7umWE3_ARq5HeaWDPQzWm3dCQ2eDp-iEPUtwTC2xSZdlU9MTI10dQy6vxzvdsSSpPg_dKLJSWvpBpVdgURXzFGuAjdsfShEq6aHpgzQzqykoBvzVp2wgV07b-R64qyEIzus7g0Y/s400/allergy_kosuru_hana_woman_kafun.png" },
  { id: 10, name: "流鼻水", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-zBUkDLViBCnY_9KKQ4Se6711fSGAfVhvdQFzmlAGNvctsPnqQKZQAb_Xlj-C-Raryy4gAZUqmqym3YOzbcBUUO9cv5NqoqfZ2YDZjVe-XU-KKwHQ9WxBAFeDGzK-jfizSRHoNIUEYHWC/s400/kafun_bottoshiteru.png" },
  { id: 11, name: "牙痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJROGSvnTVTCkFkB-nEFeRfKgIZ2nnZCEhDir4VQcpt29U-qQylHeAzJtVVcRflM2W89QZgps746IrXmH3RWsuxPftyIozhgmIXHDhNm1GcX-__rKR2AM5r2gIk-V-3TFpYML-PjS4qGw/s400/mushiba_woman.png" },
  { id: 12, name: "腸胃與消化", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2aPUa-Y1tSv0s5tPb6mIwO4neV0to3uJzfLOgPuM9QNScrjjMTj42Iqhv-IhQ6BEwy0ssy4cUFTINZrEoElro2QjbbTkJVkJXcmp03aarR5wWs44MwKR5iZLy7EDGPzIzBr7Ch3XkJcrD/s400/virus_fukutsuu2.png" },
  { id: 13, name: "暈車", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyp7BVT1RN8BThh4Cp0q3HHJWff0tR3bhlpnyFsxZPWlLimMJU7d9F2Hd9eYKye4Tao6htobWbRtsP8m3YeSRt356mxpDlViZT70vxpzjVNlZadVfeEJM2sA2IhQYyBUGKnir23QUFVZc/s400/sick_funayoi.png" },
  { id: 14, name: "噁心想吐", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjISPS5a-FyZGy-eAkSDsmywTu2xZwdrLDuh8wXELnxKnezsaymowoG3ejBz2hWxrFBz_twux48pqrXjD9QC_PtQsK1yHrLXwB-9pisrYG_AfN9r6nKATlCas6VDr15F4QNvacFAy7UOLw/s400/sick_hakike_kimochiwarui_man.png" },
  { id: 15, name: "胃痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIFpfMenVcO2kiazhxk3zdGo8sb_v14RY9A_F7KfXS4OY2uPvCL6MB2T9IYO29m7D40v79fZ3MWet9E8RsMYCSSgFXfzgKy7wEc55XQ1o4Iw_TEw07yXsZrAESC6aI7rTXaeKisb71v1pO/s400/syokuji_imotare_woman.png" },
  { id: 44, name: "胃不適", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIFpfMenVcO2kiazhxk3zdGo8sb_v14RY9A_F7KfXS4OY2uPvCL6MB2T9IYO29m7D40v79fZ3MWet9E8RsMYCSSgFXfzgKy7wEc55XQ1o4Iw_TEw07yXsZrAESC6aI7rTXaeKisb71v1pO/s400/syokuji_imotare_woman.png" },
  { id: 16, name: "消化不良", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwoXS6KYuiQyxGIo7UuDbaOqCdvizG5uRlehRPkrjWLPik4d4mUChOuzvoHRv3-nL79jOoJb9cP5Gqju4H7h7602b6GF3Zd1dzTuXIKXpNEcqEXMgZdvVTIESuGJh-EL4jCCFdDjzHXI1_/s400/virus_fukutsuu_woman.png" },
  { id: 17, name: "胃脹氣", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2aPUa-Y1tSv0s5tPb6mIwO4neV0to3uJzfLOgPuM9QNScrjjMTj42Iqhv-IhQ6BEwy0ssy4cUFTINZrEoElro2QjbbTkJVkJXcmp03aarR5wWs44MwKR5iZLy7EDGPzIzBr7Ch3XkJcrD/s400/virus_fukutsuu2.png" },
  { id: 18, name: "腸胃絞痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgea6C0cWghtZGc4Bez9b3rlpjPUDRozI8AGbf4NcDcrvU4Bxt5w52OKgp73I0oXl61bI8vYjFd2vWtFjL4weUuWOKsFx_Uiknvt8Eu01Vu7A0D2Yh2aLvl20liIRwq0mcBH0GbqpZqTKfj/s400/haraita_man.png" },
  { id: 19, name: "便祕", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh7RdOb-4Br6Oe4B2gnzRy_lvd7bsJxp20ZhPLnzt7UUjfUIw1eATPVnOPOgy31cAPoRWnqnkP9fAMHUoJ9VUPbGPFY4uBxEicFM1CXtMtIeyiHoL7N68lDgRt9d7PtFUHaCTlm9uqBI4/s400/benpi_geri_woman.png" },
  { id: 20, name: "腹瀉", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcHJ-vJ5muLQh0VQSlD5me1M5l71IttYP3GwD2v_W-hZAvpilzOYlIE7_rpDcSkBPuFSHh1m8ePLV2ABK-hS4XeqLopLRbTNN3OYQrqQJKy9BwFcP_8JmtBU3e5hbrtIyU-iY-UvatM2o/s400/virus_benpi.png" },
  { id: 21, name: "情緒與睡眠", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlQF6t-I2IezsHucex8YhcPZEPtvjir7IQPf8cPze3k2ZOJ41BAdyIpV55w53YYl54NCEcYlOIzgJgzAMHAns-GEoAIpaUdDfdxN89Rc24leKl53PaqsJAl1ph0JdDSSV1pZISrE1oUu2P/s1600/sleep_makura_woman_awanai.png" },
  { id: 22, name: "失眠", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6RMrYSphKc1JCloxoQxiKXpwB_XryPkikJ5KnvUJDye2PK6xXP4P_dUNZGLLfO4JaOl3JOBjDHLTxnYtHeScj3_P-n_finSMJ_r4vMjMrrDWdJet5GuIJEC7yowEPsvQ5q-9CNENPURIh/s400/sleep_nemurenai_man.png" },
  { id: 23, name: "心悸", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1F3am81_E5j8_-M4mzu_CVNw-VkKoEyIROif7Zw0ipb5Qf4Oq9QqI38lfp8GV8HSBUUe88YQ10wDQPED4AWh4vnyiSOl8ZOaMwa0HEmMQWpqzCs0VIH4IpsL6m8x18s4wFY90bwdcxfo/s400/sick_douki.png" },
  { id: 24, name: "焦慮不安", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6QxBXS34gdU8oOX3pJq-HZGbbi35ng8AYvlLgW8V2jwxtP1iWB0oaHUV4wIP0rL_pWtZnZS_hT80CKPdryMUPdIBAHBOxigbOhwqiF8rr-vxKLF8YDj-2IQNAb1yQZO8sQbAnW2tkjvC1/s400/shinpai_obasan.png" },
  { id: 25, name: "壓力大", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXkVw4bgI3_ch7LJNdaVdWr78VpJMF0LZ-A6ZtW2aP-Uhqa42tY-eQdA1yVWhu-CXc15fwdigM_rUTDKP5fCljBPNdVWJ2OdzGmC6a0t3jdGKNhyw9kS0CV2r1986eleVLaEyTPwL-aRU/s400/shiraga_woman.png" },
  { id: 26, name: "情緒暴躁", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA7BSexhAyqtY98xK5ZEW19puDfRSU5CImo0wOT49Z9fKJhALC4r4QTHaQ3esUmgQzT3JOj_Avb-6vKyLHaRi_Fk4XxsYCmCUoVCidQOW63kEXigKFYTp79EShuhm0k59QmN295XF6JZw/s400/kenka_fuufu.png" },
  { id: 27, name: "易怒", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibfuJ-8JcRu93EVD4dZnnLISmGXlBfKHSEC08Drp_nIz5hGHb2_XoImmxoZtzlUAHWEiIMBArLgHfHUIvGY4JAuYLP8rnisBbJOZibySqh5o_PHfi-0RQFkzq4p3tOrtseEPwy1XVDLQ4E/s800/face_angry_woman4.png" },
  { id: 28, name: "心煩氣躁", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1hyphenhyphennjoIfXfcmeCedxGYATEZ0Wc0YgXdPqQsATwFsgv3GNsA48P7EKUvCcpVBpfnSxe9MoqTIk06Ccv0uTf3eXOtw-eMDqGeq9Raw-arI9epKPe-2fjgxSfgL2gBm-o-a1I_vrK22jSjua/s800/angry_fukureru_boy.png" },
  { id: 29, name: "疲勞無力", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZPBPWgthhxtvZ9UEPpyaQorJoLltmjXroV-cdtGoCeLqM4LT-NCr-06jyfSnmyY3BVb6dmbr7OAqajxtq_6Buv5bBoOOwI4C8y-fP4aaBb6f5yDemSHMsxuRGs4-FlmCxEy4qABVUJGU/s180-c/karou_businessman.png" },
  { id: 30, name: "痠痛與循環", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGnJLOvdGK5qx3zxL9qCQtQzkgCngiE-oBn45FQixfQ_8AD0nnE0CKTVqmWvzGF4d41fMS4zs017Qr1kfhvTLz6xJoXmk3v5o1Or3Ob0B04aHdJI7K1GI1797KdFe6dMffLLMFRT1addQ/s400/kansetsutsuu_koshi.png" },
  { id: 31, name: "肩頸痠痛", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklp1xneQ6dTz7533jVbR9zMkXOqPI97C7UCIi47qKLUI3MmDv&s" },
  { id: 32, name: "落枕", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9m0t_ZjO1ku9KGkwpDswC8vUm6DiUvadThKJsur69VAoNlQP&s" },
  { id: 33, name: "腰背痠痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLB9KNAK_niP3AfoTPAzeur1gzUJHuGt2nH5aziDaC1fKKTnzHYZhS2t6Y7AOYzGuIKuyX5B2nhpRUi9NxtsiATjhHuJGXDhh1kotcNYttgofqB2Hvfq9o3I-hut1bFYFA4s5OiIITykc/s180-c/kansetsutsuu_senaka.png" },
  { id: 34, name: "下肢疲勞", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkSc1bnSpo5hnVFnk2XiQxsO7tQFX2YkYIr7kvhlysXY5qK78&s" },
  { id: 35, name: "膝蓋痛", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROC1JClWH0A1Akd9aa71lIL8WnyZHJEjtOLk7s-ijdW7unv5PF&s" },
  { id: 36, name: "抽筋", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLndasf-j0bFy97aVW9RUbh0ybs1x8RAAq--3IXNRls1dNuGXY&s" },
  { id: 37, name: "肌肉痠痛", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hPBzJ0Bqf9tua1FDBnAPwTif7eIBORqBEtZZH8lhsWYKbyg&s" },
  { id: 38, name: "關節不適", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOxpYlnqZandeh7Cc57i_FjVMixgRVLbggLFlkQdlSzbk50qC&s" },
  { id: 39, name: "手腳冰冷", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjrahGPGwcf6U30TN3cIqb4OUoTsWiwYWuGK9xaQllWiyG1pONo7fuppE-5xk_Q8WKOX14GDTzi7B93Um9xfEno-Fn727pl41PJ_dumVwRbSc5WOi15FB4vocDFHcNq2ESuKX8U-P-09o/s400/eakon_samui.png" },
  { id: 40, name: "其他（婦科、內分泌）", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5JjC_DX5kVm6kEh5QDWG9eBSe2mXE88iKU43USbVkh_mG0E&s" },
  { id: 41, name: "經痛", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXAqW2swFUh1tJnXZfSPqk8if3qh-an6HIyyNsn_7waBQxBSq1w9W_PK4cnOXd1KOwiEll9c2Ns15gYoN_2qn31YmywOY-RlDuFyPqOht_PMoPEpW856hRtkPBOdSmW8RQNNE2G3ADRciF/s180-c/haraita_woman.png" },
  { id: 42, name: "婦科問題", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZThB9GUt-Skx155vRpGQ5lYx1U2bN1oioyWN8JbM4UZ0QGWybSUztG77pAo_E6knaH5gP8VO-kiJlaSdu_c6u8AaEcRCqVTmTk3G-SL2z7vWU4jmGJviiYSeU9GgZYNgU9T9lcdcBm_gl/s400/sick_kaoiro_woman.png" },
  { id: 43, name: "內分泌失調", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdi1efEUZofbKPuAZrGCjp0NVlhGousYK3e3xqX8WveIbxExRolF1rGRToypYTsfAav8QdPB-63_sfQB8Rxrcd7ZnLicEMBwRT6u0QINOALHJYPhDpPGpcfOEl9tiTaQ51C45Yxy2TtjQ/s400/kounenki_woman.png" }
];
function rt(e) {
  return Array.isArray ? Array.isArray(e) : yl(e) === "[object Array]";
}
function Hf(e) {
  if (typeof e == "string")
    return e;
  let t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Kf(e) {
  return e == null ? "" : Hf(e);
}
function Xe(e) {
  return typeof e == "string";
}
function pl(e) {
  return typeof e == "number";
}
function Gf(e) {
  return e === !0 || e === !1 || Xf(e) && yl(e) == "[object Boolean]";
}
function gl(e) {
  return typeof e == "object";
}
function Xf(e) {
  return gl(e) && e !== null;
}
function De(e) {
  return e != null;
}
function Vr(e) {
  return !e.trim().length;
}
function yl(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const Yf = "Incorrect 'index' type", Zf = (e) => `Invalid value for key ${e}`, qf = (e) => `Pattern length exceeds max of ${e}.`, Jf = (e) => `Missing ${e} property in key`, Qf = (e) => `Property 'weight' in key '${e}' must be a positive integer`, ha = Object.prototype.hasOwnProperty;
class em {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let n = 0;
    t.forEach((r) => {
      let i = vl(r);
      this._keys.push(i), this._keyMap[i.id] = i, n += i.weight;
    }), this._keys.forEach((r) => {
      r.weight /= n;
    });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function vl(e) {
  let t = null, n = null, r = null, i = 1, s = null;
  if (Xe(e) || rt(e))
    r = e, t = fa(e), n = ni(e);
  else {
    if (!ha.call(e, "name"))
      throw new Error(Jf("name"));
    const a = e.name;
    if (r = a, ha.call(e, "weight") && (i = e.weight, i <= 0))
      throw new Error(Qf(a));
    t = fa(a), n = ni(a), s = e.getFn;
  }
  return { path: t, id: n, weight: i, src: r, getFn: s };
}
function fa(e) {
  return rt(e) ? e : e.split(".");
}
function ni(e) {
  return rt(e) ? e.join(".") : e;
}
function tm(e, t) {
  let n = [], r = !1;
  const i = (s, a, o) => {
    if (De(s))
      if (!a[o])
        n.push(s);
      else {
        let l = a[o];
        const c = s[l];
        if (!De(c))
          return;
        if (o === a.length - 1 && (Xe(c) || pl(c) || Gf(c)))
          n.push(Kf(c));
        else if (rt(c)) {
          r = !0;
          for (let u = 0, d = c.length; u < d; u += 1)
            i(c[u], a, o + 1);
        } else a.length && i(c, a, o + 1);
      }
  };
  return i(e, Xe(t) ? t.split(".") : t, 0), r ? n : n[0];
}
const nm = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, rm = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, im = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, sm = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: tm,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var U = {
  ...rm,
  ...nm,
  ...im,
  ...sm
};
const am = /[^ ]+/g;
function om(e = 1, t = 3) {
  const n = /* @__PURE__ */ new Map(), r = Math.pow(10, t);
  return {
    get(i) {
      const s = i.match(am).length;
      if (n.has(s))
        return n.get(s);
      const a = 1 / Math.pow(s, 0.5 * e), o = parseFloat(Math.round(a * r) / r);
      return n.set(s, o), o;
    },
    clear() {
      n.clear();
    }
  };
}
class $i {
  constructor({
    getFn: t = U.getFn,
    fieldNormWeight: n = U.fieldNormWeight
  } = {}) {
    this.norm = om(n, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((n, r) => {
      this._keysMap[n.id] = r;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Xe(this.docs[0]) ? this.docs.forEach((t, n) => {
      this._addString(t, n);
    }) : this.docs.forEach((t, n) => {
      this._addObject(t, n);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(t) {
    const n = this.size();
    Xe(t) ? this._addString(t, n) : this._addObject(t, n);
  }
  // Removes the doc at the specified index of the index
  removeAt(t) {
    this.records.splice(t, 1);
    for (let n = t, r = this.size(); n < r; n += 1)
      this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(t, n) {
    return t[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, n) {
    if (!De(t) || Vr(t))
      return;
    let r = {
      v: t,
      i: n,
      n: this.norm.get(t)
    };
    this.records.push(r);
  }
  _addObject(t, n) {
    let r = { i: n, $: {} };
    this.keys.forEach((i, s) => {
      let a = i.getFn ? i.getFn(t) : this.getFn(t, i.path);
      if (De(a)) {
        if (rt(a)) {
          let o = [];
          const l = [{ nestedArrIndex: -1, value: a }];
          for (; l.length; ) {
            const { nestedArrIndex: c, value: u } = l.pop();
            if (De(u))
              if (Xe(u) && !Vr(u)) {
                let d = {
                  v: u,
                  i: c,
                  n: this.norm.get(u)
                };
                o.push(d);
              } else rt(u) && u.forEach((d, h) => {
                l.push({
                  nestedArrIndex: h,
                  value: d
                });
              });
          }
          r.$[s] = o;
        } else if (Xe(a) && !Vr(a)) {
          let o = {
            v: a,
            n: this.norm.get(a)
          };
          r.$[s] = o;
        }
      }
    }), this.records.push(r);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function bl(e, t, { getFn: n = U.getFn, fieldNormWeight: r = U.fieldNormWeight } = {}) {
  const i = new $i({ getFn: n, fieldNormWeight: r });
  return i.setKeys(e.map(vl)), i.setSources(t), i.create(), i;
}
function lm(e, { getFn: t = U.getFn, fieldNormWeight: n = U.fieldNormWeight } = {}) {
  const { keys: r, records: i } = e, s = new $i({ getFn: t, fieldNormWeight: n });
  return s.setKeys(r), s.setIndexRecords(i), s;
}
function qn(e, {
  errors: t = 0,
  currentLocation: n = 0,
  expectedLocation: r = 0,
  distance: i = U.distance,
  ignoreLocation: s = U.ignoreLocation
} = {}) {
  const a = t / e.length;
  if (s)
    return a;
  const o = Math.abs(r - n);
  return i ? a + o / i : o ? 1 : a;
}
function cm(e = [], t = U.minMatchCharLength) {
  let n = [], r = -1, i = -1, s = 0;
  for (let a = e.length; s < a; s += 1) {
    let o = e[s];
    o && r === -1 ? r = s : !o && r !== -1 && (i = s - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
  }
  return e[s - 1] && s - r >= t && n.push([r, s - 1]), n;
}
const Rt = 32;
function um(e, t, n, {
  location: r = U.location,
  distance: i = U.distance,
  threshold: s = U.threshold,
  findAllMatches: a = U.findAllMatches,
  minMatchCharLength: o = U.minMatchCharLength,
  includeMatches: l = U.includeMatches,
  ignoreLocation: c = U.ignoreLocation
} = {}) {
  if (t.length > Rt)
    throw new Error(qf(Rt));
  const u = t.length, d = e.length, h = Math.max(0, Math.min(r, d));
  let f = s, g = h;
  const x = o > 1 || l, T = x ? Array(d) : [];
  let A;
  for (; (A = e.indexOf(t, g)) > -1; ) {
    let v = qn(t, {
      currentLocation: A,
      expectedLocation: h,
      distance: i,
      ignoreLocation: c
    });
    if (f = Math.min(v, f), g = A + u, x) {
      let E = 0;
      for (; E < u; )
        T[A + E] = 1, E += 1;
    }
  }
  g = -1;
  let w = [], S = 1, D = u + d;
  const M = 1 << u - 1;
  for (let v = 0; v < u; v += 1) {
    let E = 0, I = D;
    for (; E < I; )
      qn(t, {
        errors: v,
        currentLocation: h + I,
        expectedLocation: h,
        distance: i,
        ignoreLocation: c
      }) <= f ? E = I : D = I, I = Math.floor((D - E) / 2 + E);
    D = I;
    let H = Math.max(1, h - I + 1), G = a ? d : Math.min(h + I, d) + u, ee = Array(G + 2);
    ee[G + 1] = (1 << v) - 1;
    for (let Y = G; Y >= H; Y -= 1) {
      let X = Y - 1, ne = n[e.charAt(X)];
      if (x && (T[X] = +!!ne), ee[Y] = (ee[Y + 1] << 1 | 1) & ne, v && (ee[Y] |= (w[Y + 1] | w[Y]) << 1 | 1 | w[Y + 1]), ee[Y] & M && (S = qn(t, {
        errors: v,
        currentLocation: X,
        expectedLocation: h,
        distance: i,
        ignoreLocation: c
      }), S <= f)) {
        if (f = S, g = X, g <= h)
          break;
        H = Math.max(1, 2 * h - g);
      }
    }
    if (qn(t, {
      errors: v + 1,
      currentLocation: h,
      expectedLocation: h,
      distance: i,
      ignoreLocation: c
    }) > f)
      break;
    w = ee;
  }
  const B = {
    isMatch: g >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, S)
  };
  if (x) {
    const v = cm(T, o);
    v.length ? l && (B.indices = v) : B.isMatch = !1;
  }
  return B;
}
function dm(e) {
  let t = {};
  for (let n = 0, r = e.length; n < r; n += 1) {
    const i = e.charAt(n);
    t[i] = (t[i] || 0) | 1 << r - n - 1;
  }
  return t;
}
const cr = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e);
class xl {
  constructor(t, {
    location: n = U.location,
    threshold: r = U.threshold,
    distance: i = U.distance,
    includeMatches: s = U.includeMatches,
    findAllMatches: a = U.findAllMatches,
    minMatchCharLength: o = U.minMatchCharLength,
    isCaseSensitive: l = U.isCaseSensitive,
    ignoreDiacritics: c = U.ignoreDiacritics,
    ignoreLocation: u = U.ignoreLocation
  } = {}) {
    if (this.options = {
      location: n,
      threshold: r,
      distance: i,
      includeMatches: s,
      findAllMatches: a,
      minMatchCharLength: o,
      isCaseSensitive: l,
      ignoreDiacritics: c,
      ignoreLocation: u
    }, t = l ? t : t.toLowerCase(), t = c ? cr(t) : t, this.pattern = t, this.chunks = [], !this.pattern.length)
      return;
    const d = (f, g) => {
      this.chunks.push({
        pattern: f,
        alphabet: dm(f),
        startIndex: g
      });
    }, h = this.pattern.length;
    if (h > Rt) {
      let f = 0;
      const g = h % Rt, x = h - g;
      for (; f < x; )
        d(this.pattern.substr(f, Rt), f), f += Rt;
      if (g) {
        const T = h - Rt;
        d(this.pattern.substr(T), T);
      }
    } else
      d(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: n, ignoreDiacritics: r, includeMatches: i } = this.options;
    if (t = n ? t : t.toLowerCase(), t = r ? cr(t) : t, this.pattern === t) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return i && (x.indices = [[0, t.length - 1]]), x;
    }
    const {
      location: s,
      distance: a,
      threshold: o,
      findAllMatches: l,
      minMatchCharLength: c,
      ignoreLocation: u
    } = this.options;
    let d = [], h = 0, f = !1;
    this.chunks.forEach(({ pattern: x, alphabet: T, startIndex: A }) => {
      const { isMatch: w, score: S, indices: D } = um(t, x, T, {
        location: s + A,
        distance: a,
        threshold: o,
        findAllMatches: l,
        minMatchCharLength: c,
        includeMatches: i,
        ignoreLocation: u
      });
      w && (f = !0), h += S, w && D && (d = [...d, ...D]);
    });
    let g = {
      isMatch: f,
      score: f ? h / this.chunks.length : 1
    };
    return f && i && (g.indices = d), g;
  }
}
class yt {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return ma(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return ma(t, this.singleRegex);
  }
  search() {
  }
}
function ma(e, t) {
  const n = e.match(t);
  return n ? n[1] : null;
}
class hm extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const n = t === this.pattern;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class fm extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const r = t.indexOf(this.pattern) === -1;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class mm extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const n = t.startsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class pm extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const n = !t.startsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class gm extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const n = t.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [t.length - this.pattern.length, t.length - 1]
    };
  }
}
class ym extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const n = !t.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class wl extends yt {
  constructor(t, {
    location: n = U.location,
    threshold: r = U.threshold,
    distance: i = U.distance,
    includeMatches: s = U.includeMatches,
    findAllMatches: a = U.findAllMatches,
    minMatchCharLength: o = U.minMatchCharLength,
    isCaseSensitive: l = U.isCaseSensitive,
    ignoreDiacritics: c = U.ignoreDiacritics,
    ignoreLocation: u = U.ignoreLocation
  } = {}) {
    super(t), this._bitapSearch = new xl(t, {
      location: n,
      threshold: r,
      distance: i,
      includeMatches: s,
      findAllMatches: a,
      minMatchCharLength: o,
      isCaseSensitive: l,
      ignoreDiacritics: c,
      ignoreLocation: u
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class Tl extends yt {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let n = 0, r;
    const i = [], s = this.pattern.length;
    for (; (r = t.indexOf(this.pattern, n)) > -1; )
      n = r + s, i.push([r, n - 1]);
    const a = !!i.length;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: i
    };
  }
}
const ri = [
  hm,
  Tl,
  mm,
  pm,
  ym,
  gm,
  fm,
  wl
], pa = ri.length, vm = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, bm = "|";
function xm(e, t = {}) {
  return e.split(bm).map((n) => {
    let r = n.trim().split(vm).filter((s) => s && !!s.trim()), i = [];
    for (let s = 0, a = r.length; s < a; s += 1) {
      const o = r[s];
      let l = !1, c = -1;
      for (; !l && ++c < pa; ) {
        const u = ri[c];
        let d = u.isMultiMatch(o);
        d && (i.push(new u(d, t)), l = !0);
      }
      if (!l)
        for (c = -1; ++c < pa; ) {
          const u = ri[c];
          let d = u.isSingleMatch(o);
          if (d) {
            i.push(new u(d, t));
            break;
          }
        }
    }
    return i;
  });
}
const wm = /* @__PURE__ */ new Set([wl.type, Tl.type]);
class Tm {
  constructor(t, {
    isCaseSensitive: n = U.isCaseSensitive,
    ignoreDiacritics: r = U.ignoreDiacritics,
    includeMatches: i = U.includeMatches,
    minMatchCharLength: s = U.minMatchCharLength,
    ignoreLocation: a = U.ignoreLocation,
    findAllMatches: o = U.findAllMatches,
    location: l = U.location,
    threshold: c = U.threshold,
    distance: u = U.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: n,
      ignoreDiacritics: r,
      includeMatches: i,
      minMatchCharLength: s,
      findAllMatches: o,
      ignoreLocation: a,
      location: l,
      threshold: c,
      distance: u
    }, t = n ? t : t.toLowerCase(), t = r ? cr(t) : t, this.pattern = t, this.query = xm(this.pattern, this.options);
  }
  static condition(t, n) {
    return n.useExtendedSearch;
  }
  searchIn(t) {
    const n = this.query;
    if (!n)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: r, isCaseSensitive: i, ignoreDiacritics: s } = this.options;
    t = i ? t : t.toLowerCase(), t = s ? cr(t) : t;
    let a = 0, o = [], l = 0;
    for (let c = 0, u = n.length; c < u; c += 1) {
      const d = n[c];
      o.length = 0, a = 0;
      for (let h = 0, f = d.length; h < f; h += 1) {
        const g = d[h], { isMatch: x, indices: T, score: A } = g.search(t);
        if (x) {
          if (a += 1, l += A, r) {
            const w = g.constructor.type;
            wm.has(w) ? o = [...o, ...T] : o.push(T);
          }
        } else {
          l = 0, a = 0, o.length = 0;
          break;
        }
      }
      if (a) {
        let h = {
          isMatch: !0,
          score: l / a
        };
        return r && (h.indices = o), h;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const ii = [];
function Am(...e) {
  ii.push(...e);
}
function si(e, t) {
  for (let n = 0, r = ii.length; n < r; n += 1) {
    let i = ii[n];
    if (i.condition(e, t))
      return new i(e, t);
  }
  return new xl(e, t);
}
const ur = {
  AND: "$and",
  OR: "$or"
}, ai = {
  PATH: "$path",
  PATTERN: "$val"
}, oi = (e) => !!(e[ur.AND] || e[ur.OR]), Sm = (e) => !!e[ai.PATH], Pm = (e) => !rt(e) && gl(e) && !oi(e), ga = (e) => ({
  [ur.AND]: Object.keys(e).map((t) => ({
    [t]: e[t]
  }))
});
function Al(e, t, { auto: n = !0 } = {}) {
  const r = (i) => {
    let s = Object.keys(i);
    const a = Sm(i);
    if (!a && s.length > 1 && !oi(i))
      return r(ga(i));
    if (Pm(i)) {
      const l = a ? i[ai.PATH] : s[0], c = a ? i[ai.PATTERN] : i[l];
      if (!Xe(c))
        throw new Error(Zf(l));
      const u = {
        keyId: ni(l),
        pattern: c
      };
      return n && (u.searcher = si(c, t)), u;
    }
    let o = {
      children: [],
      operator: s[0]
    };
    return s.forEach((l) => {
      const c = i[l];
      rt(c) && c.forEach((u) => {
        o.children.push(r(u));
      });
    }), o;
  };
  return oi(e) || (e = ga(e)), r(e);
}
function Em(e, { ignoreFieldNorm: t = U.ignoreFieldNorm }) {
  e.forEach((n) => {
    let r = 1;
    n.matches.forEach(({ key: i, norm: s, score: a }) => {
      const o = i ? i.weight : null;
      r *= Math.pow(
        a === 0 && o ? Number.EPSILON : a,
        (o || 1) * (t ? 1 : s)
      );
    }), n.score = r;
  });
}
function Rm(e, t) {
  const n = e.matches;
  t.matches = [], De(n) && n.forEach((r) => {
    if (!De(r.indices) || !r.indices.length)
      return;
    const { indices: i, value: s } = r;
    let a = {
      indices: i,
      value: s
    };
    r.key && (a.key = r.key.src), r.idx > -1 && (a.refIndex = r.idx), t.matches.push(a);
  });
}
function Cm(e, t) {
  t.score = e.score;
}
function Mm(e, t, {
  includeMatches: n = U.includeMatches,
  includeScore: r = U.includeScore
} = {}) {
  const i = [];
  return n && i.push(Rm), r && i.push(Cm), e.map((s) => {
    const { idx: a } = s, o = {
      item: t[a],
      refIndex: a
    };
    return i.length && i.forEach((l) => {
      l(s, o);
    }), o;
  });
}
class Zt {
  constructor(t, n = {}, r) {
    this.options = { ...U, ...n }, this.options.useExtendedSearch, this._keyStore = new em(this.options.keys), this.setCollection(t, r);
  }
  setCollection(t, n) {
    if (this._docs = t, n && !(n instanceof $i))
      throw new Error(Yf);
    this._myIndex = n || bl(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(t) {
    De(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const n = [];
    for (let r = 0, i = this._docs.length; r < i; r += 1) {
      const s = this._docs[r];
      t(s, r) && (this.removeAt(r), r -= 1, i -= 1, n.push(s));
    }
    return n;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: n = -1 } = {}) {
    const {
      includeMatches: r,
      includeScore: i,
      shouldSort: s,
      sortFn: a,
      ignoreFieldNorm: o
    } = this.options;
    let l = Xe(t) ? Xe(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
    return Em(l, { ignoreFieldNorm: o }), s && l.sort(a), pl(n) && n > -1 && (l = l.slice(0, n)), Mm(l, this._docs, {
      includeMatches: r,
      includeScore: i
    });
  }
  _searchStringList(t) {
    const n = si(t, this.options), { records: r } = this._myIndex, i = [];
    return r.forEach(({ v: s, i: a, n: o }) => {
      if (!De(s))
        return;
      const { isMatch: l, score: c, indices: u } = n.searchIn(s);
      l && i.push({
        item: s,
        idx: a,
        matches: [{ score: c, value: s, norm: o, indices: u }]
      });
    }), i;
  }
  _searchLogical(t) {
    const n = Al(t, this.options), r = (o, l, c) => {
      if (!o.children) {
        const { keyId: d, searcher: h } = o, f = this._findMatches({
          key: this._keyStore.get(d),
          value: this._myIndex.getValueForItemAtKeyId(l, d),
          searcher: h
        });
        return f && f.length ? [
          {
            idx: c,
            item: l,
            matches: f
          }
        ] : [];
      }
      const u = [];
      for (let d = 0, h = o.children.length; d < h; d += 1) {
        const f = o.children[d], g = r(f, l, c);
        if (g.length)
          u.push(...g);
        else if (o.operator === ur.AND)
          return [];
      }
      return u;
    }, i = this._myIndex.records, s = {}, a = [];
    return i.forEach(({ $: o, i: l }) => {
      if (De(o)) {
        let c = r(n, o, l);
        c.length && (s[l] || (s[l] = { idx: l, item: o, matches: [] }, a.push(s[l])), c.forEach(({ matches: u }) => {
          s[l].matches.push(...u);
        }));
      }
    }), a;
  }
  _searchObjectList(t) {
    const n = si(t, this.options), { keys: r, records: i } = this._myIndex, s = [];
    return i.forEach(({ $: a, i: o }) => {
      if (!De(a))
        return;
      let l = [];
      r.forEach((c, u) => {
        l.push(
          ...this._findMatches({
            key: c,
            value: a[u],
            searcher: n
          })
        );
      }), l.length && s.push({
        idx: o,
        item: a,
        matches: l
      });
    }), s;
  }
  _findMatches({ key: t, value: n, searcher: r }) {
    if (!De(n))
      return [];
    let i = [];
    if (rt(n))
      n.forEach(({ v: s, i: a, n: o }) => {
        if (!De(s))
          return;
        const { isMatch: l, score: c, indices: u } = r.searchIn(s);
        l && i.push({
          score: c,
          key: t,
          value: s,
          idx: a,
          norm: o,
          indices: u
        });
      });
    else {
      const { v: s, n: a } = n, { isMatch: o, score: l, indices: c } = r.searchIn(s);
      o && i.push({ score: l, key: t, value: s, norm: a, indices: c });
    }
    return i;
  }
}
Zt.version = "7.1.0";
Zt.createIndex = bl;
Zt.parseIndex = lm;
Zt.config = U;
Zt.parseQuery = Al;
Am(Tm);
function Gt(e) {
  const t = e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return t ? t[1] : "";
}
const Sn = [
  {
    id: "hegu",
    name: "合谷穴",
    symptoms: ["頭痛", "牙痛", "感冒初期", "發燒", "止痛"],
    videoUrl: "https://www.youtube.com/watch?v=VaQ1PMDq268",
    description: "合谷穴是手陽明大腸經的重要穴位，被稱為「萬能穴」，對於緩解頭痛、牙痛及感冒初期症狀有顯著效果。",
    location: "位於手背虎口處，拇指與食指骨交接處凹陷中",
    instructions: [
      "用另一手的拇指按壓穴位",
      "力度適中，有酸脹感為宜",
      "每次按壓3-5分鐘",
      "可順時針揉按增強效果"
    ]
  },
  {
    id: "yingxiang",
    name: "迎香穴",
    symptoms: ["鼻塞", "鼻過敏", "流鼻水", "打噴嚏"],
    videoUrl: "https://www.youtube.com/watch?v=97TUixIHHvo",
    description: "迎香穴是緩解鼻部不適的重要穴位，能有效改善鼻塞、過敏性鼻炎及流鼻水等症狀。",
    location: "位於鼻翼外緣中點旁，鼻唇溝中",
    instructions: [
      "雙手食指分別按壓兩側穴位",
      "以畫圓方式輕輕按摩",
      "每次按壓2-3分鐘",
      "配合深呼吸效果更佳"
    ]
  },
  {
    id: "cuanzhu",
    name: "攢竹穴",
    symptoms: ["眼睛疲勞", "眼壓高", "視力模糊", "護眼"],
    videoUrl: "https://www.youtube.com/watch?v=aKXMgTzaf9s",
    description: "攢竹穴對於緩解眼睛疲勞、降低眼壓有良好效果，是現代人護眼的重要穴位。",
    location: "位於眉頭凹陷處",
    instructions: [
      "雙手拇指分別按壓兩側穴位",
      "由下往上輕按",
      "每次按壓1-2分鐘",
      "適合長時間用眼後使用"
    ]
  },
  {
    id: "taiyang",
    name: "太陽穴",
    symptoms: ["偏頭痛", "眼睛乾澀", "頭暈", "眼睛疲勞"],
    videoUrl: "https://www.youtube.com/watch?v=aKXMgTzaf9s",
    description: "太陽穴是頭部的重要穴位，對緩解偏頭痛及眼睛乾澀有明顯功效。",
    location: "位於眉梢與外眼角之間向後約一寸的凹陷處",
    instructions: [
      "雙手食指或中指按壓穴位",
      "以順時針方向輕柔按摩",
      "每次按壓3-5分鐘",
      "力度以感到微微酸脹為宜"
    ]
  },
  {
    id: "baihui",
    name: "百會穴",
    symptoms: ["頭暈", "精神不濟", "失眠", "提神", "腦鳴"],
    videoUrl: "https://www.youtube.com/watch?v=u19xE8xONP8",
    description: "百會穴位於頭頂正中，是督脈的重要穴位，能提升精神、改善頭暈症狀。",
    location: "位於頭頂正中線與兩耳尖連線的交點處",
    instructions: [
      "用中指指腹垂直按壓",
      "力度由輕到重",
      "每次按壓2-3分鐘",
      "早晨按壓可提神醒腦"
    ]
  },
  {
    id: "neiguan",
    name: "內關穴",
    symptoms: ["暈車", "噁心想吐", "胃痛", "胃不適", "心悸", "害喜"],
    videoUrl: "https://www.youtube.com/watch?v=CZ-ZQ6D3fgw",
    description: "內關穴是緩解噁心、嘔吐的特效穴，對暈車、胃部不適有極佳療效。",
    location: "位於手腕橫紋正中上方兩寸（約三指寬）處",
    instructions: [
      "用拇指按壓穴位",
      "持續按壓或輕揉",
      "每次按壓3-5分鐘",
      "搭車前 or 感到不適時立即按壓"
    ]
  },
  {
    id: "zusanli",
    name: "足三里穴",
    symptoms: ["消化不良", "胃脹氣", "胃不適", "日常保健", "便祕", "胃痛"],
    videoUrl: "https://www.youtube.com/watch?v=3SkffqwUhWg",
    description: "足三里是著名的保健穴位，有「長壽穴」之稱，能調理脾胃、增強體質。",
    location: "位於小腿外側，膝蓋下方三寸（約四指寬）處",
    instructions: [
      "用拇指或中指按壓",
      "力度稍重，有酸脹感",
      "每次按壓5-10分鐘",
      "飯後一小時按壓幫助消化"
    ]
  },
  {
    id: "tianshu",
    name: "天樞穴",
    symptoms: ["便祕", "腹瀉", "腸胃絞痛", "脹氣", "胃不適"],
    videoUrl: "https://www.youtube.com/watch?v=7iwvPMM32qA",
    description: "天樞穴是調理腸道功能的重要穴位，對便秘、腹瀉都有雙向調節作用。",
    location: "位於肚臍旁開兩寸（約三指寬）處",
    instructions: [
      "雙手食指和中指併攏按壓",
      "順時針方向輕揉",
      "每次按壓5-10分鐘",
      "早晚各一次效果最佳"
    ]
  },
  {
    id: "shenmen",
    name: "神門穴",
    symptoms: ["失眠", "心悸", "焦慮不安", "心煩", "情緒不穩"],
    videoUrl: "https://www.youtube.com/watch?v=Fgj1KiAuThg",
    description: "神門穴有安神定志的作用，對改善睡眠品質、緩解焦慮有顯著效果。",
    location: "位於手腕橫紋處，小指側的凹陷中",
    instructions: [
      "用拇指輕按穴位",
      "力度適中，緩慢按壓",
      "每次按壓3-5分鐘",
      "睡前按壓有助入眠"
    ]
  },
  {
    id: "taichong",
    name: "太衝穴",
    symptoms: ["壓力大", "情緒暴躁", "易怒", "失眠", "降血壓"],
    videoUrl: "https://www.youtube.com/watch?v=LU64X--49lo",
    description: "太衝穴是肝經的重要穴位，能疏肝解鬱、平復情緒、緩解壓力。",
    location: "位於足背，第一、二趾骨間，向後約兩寸處的凹陷中",
    instructions: [
      "用拇指按壓穴位",
      "由輕至重按壓",
      "每次按壓3-5分鐘",
      "情緒焦躁時及時按壓"
    ]
  },
  {
    id: "laogong",
    name: "勞宮穴",
    symptoms: ["疲勞無力", "心煩氣躁", "手發抖", "安神"],
    videoUrl: "https://www.youtube.com/watch?v=z5k8ZkgBNAk",
    description: "勞宮穴能清心安神、消除疲勞，適合工作壓力大、心情煩躁時按摩。",
    location: "位於手掌心，握拳時中指指尖所指處",
    instructions: [
      "用另一手拇指按壓",
      "力度適中",
      "每次按壓2-3分鐘",
      "兩手交替按壓"
    ]
  },
  {
    id: "fengchi",
    name: "風池穴",
    symptoms: ["肩頸痠痛", "落枕", "感冒", "頭痛", "眼睛疲勞"],
    videoUrl: "https://www.youtube.com/watch?v=8mK1VfoLps4",
    description: "風池穴是緩解頸部疼痛的重要穴位，對肩頸痠痛、落枕有明顯療效。",
    location: "位於後頸部，頭骨下方兩側凹陷處",
    instructions: [
      "雙手拇指按壓穴位",
      "向上施力按壓",
      "每次按壓3-5分鐘",
      "可配合頭部緩慢轉動"
    ]
  },
  {
    id: "weizhong",
    name: "委中穴",
    symptoms: ["腰背痠痛", "下肢疲勞", "腿部抽筋", "坐骨神經痛"],
    videoUrl: "https://www.youtube.com/watch?v=cWV5BK49uY0",
    description: "委中穴是緩解腰背疼痛的特效穴，對下肢疲勞也有良好效果。",
    location: "位於膝蓋後方，膕窩橫紋中點",
    instructions: [
      "坐姿，用拇指按壓",
      "力度稍重",
      "每次按壓3-5分鐘",
      "久站久坐後按壓特別有效"
    ]
  },
  {
    id: "sanyinjiao",
    name: "三陰交穴",
    symptoms: ["經痛", "婦科問題", "內分泌失調", "更年期", "失眠"],
    videoUrl: "https://www.youtube.com/watch?v=-7RzeHEYtno",
    description: "三陰交是婦科保健的重要穴位，能調理月經、緩解經痛。注意：孕婦慎用。",
    location: "位於小腿內側，內踝尖上方三寸（約四指寬）處",
    instructions: [
      "用拇指按壓穴位",
      "力度由輕到重",
      "每次按壓5-10分鐘",
      "經期前後按壓效果佳",
      "⚠️ 孕婦禁止按壓此穴"
    ]
  },
  {
    id: "yongquan",
    name: "湧泉穴",
    symptoms: ["手腳冰冷", "促進血液循環", "足部疲勞", "消水腫"],
    videoUrl: "https://www.youtube.com/watch?v=yidujG5mYuA",
    description: "湧泉穴是腎經的起始穴，能溫陽補腎、促進血液循環，改善手腳冰冷。",
    location: "位於腳底前1/3處，腳趾彎曲時的凹陷中",
    instructions: [
      "坐姿，用拇指按壓",
      "力度稍重",
      "每次按壓5-10分鐘",
      "睡前按摩 or 泡腳後按壓"
    ]
  },
  {
    id: "yanglingquan",
    name: "陽陵泉穴",
    symptoms: ["抽筋", "肌肉痠痛", "關節不適", "膝蓋痛", "肩頸硬"],
    videoUrl: "https://www.youtube.com/watch?v=6_JnBCMIsS0",
    description: "陽陵泉是筋之會穴，對緩解肌肉抽筋、關節不適有特殊療效。",
    location: "位於小腿外側，膝蓋下方，腓骨小頭前下方凹陷處",
    instructions: [
      "用拇指或中指按壓",
      "力度適中",
      "每次按壓3-5分鐘",
      "運動前後按壓可預防抽筋"
    ]
  }
], Dm = new Zt(Sn, {
  keys: ["symptoms", "name", "description"],
  threshold: 0.4,
  minMatchCharLength: 1
});
function Sl(e) {
  if (!e) return [];
  const t = Sn.filter(
    (r) => r.symptoms.some((i) => i === e)
  );
  return t.length > 0 ? t : Dm.search(e).map((r) => r.item);
}
function Pl(e) {
  return Sn.find((t) => t.id === e);
}
function Nm() {
  const e = Sn[0], t = Gt(e.videoUrl), n = Ht.slice(0, 12);
  return /* @__PURE__ */ C("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ C("header", { className: "bg-white px-6 py-4 border-b border-gray-100", children: [
      /* @__PURE__ */ p(
        "h1",
        {
          className: "text-3xl text-center tracking-wide",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: "按按"
        }
      ),
      /* @__PURE__ */ p("p", { className: "text-center text-sm text-gray-500 mt-1", children: "穴位影音百科" })
    ] }),
    /* @__PURE__ */ p("section", { className: "bg-white px-4 pt-6 pb-8", children: /* @__PURE__ */ C("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ p(
        "h2",
        {
          className: "text-xl mb-3 text-gray-800",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: "本週推薦"
        }
      ),
      /* @__PURE__ */ C(ue, { to: `/acupoint/${e.id}`, children: [
        /* @__PURE__ */ p("div", { className: "relative aspect-video bg-black rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ p(
          "iframe",
          {
            src: `https://www.youtube.com/embed/${t}?autoplay=1&mute=1&controls=1&loop=1&playlist=${t}`,
            title: e.name,
            className: "w-full h-full",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0
          }
        ) }),
        /* @__PURE__ */ C("div", { className: "mt-3", children: [
          /* @__PURE__ */ p("h3", { className: "text-lg", style: { fontFamily: "'Noto Serif TC', serif" }, children: e.name }),
          /* @__PURE__ */ p("p", { className: "text-sm text-gray-600 mt-1", children: e.symptoms.join("、") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p("section", { className: "px-4 py-8 bg-neutral-50", children: /* @__PURE__ */ C("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ p(
        "h2",
        {
          className: "text-xl mb-4 text-gray-800",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: "症狀查找"
        }
      ),
      /* @__PURE__ */ p("div", { className: "grid grid-cols-3 gap-3", children: n.map((r) => /* @__PURE__ */ C(
        ue,
        {
          to: `/symptom/${r.id}`,
          className: "bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow",
          children: [
            /* @__PURE__ */ p("div", { className: "w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ p(
              "img",
              {
                src: r.imageUrl,
                alt: r.name,
                className: "w-12 h-12 object-contain"
              }
            ) }),
            /* @__PURE__ */ p("span", { className: "text-sm text-center text-gray-700", children: r.name })
          ]
        },
        r.id
      )) }),
      /* @__PURE__ */ p(
        ue,
        {
          to: "/search",
          className: "mt-6 block text-center py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",
          children: "查看更多症狀"
        }
      )
    ] }) }),
    /* @__PURE__ */ p("section", { className: "px-4 py-8 bg-white", children: /* @__PURE__ */ C("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ p(
        "h2",
        {
          className: "text-xl mb-4 text-gray-800",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: "身體放鬆"
        }
      ),
      /* @__PURE__ */ p("div", { className: "space-y-4", children: Sn.slice(1, 4).map((r) => {
        const i = Gt(r.videoUrl);
        return /* @__PURE__ */ p(
          ue,
          {
            to: `/acupoint/${r.id}`,
            className: "block bg-neutral-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",
            children: /* @__PURE__ */ C("div", { className: "flex gap-3 p-3", children: [
              /* @__PURE__ */ p("div", { className: "w-32 h-20 flex-shrink-0 bg-black rounded overflow-hidden", children: /* @__PURE__ */ p(
                "img",
                {
                  src: `https://img.youtube.com/vi/${i}/mqdefault.jpg`,
                  alt: r.name,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col justify-center", children: [
                /* @__PURE__ */ p("h3", { className: "text-base mb-1", style: { fontFamily: "'Noto Serif TC', serif" }, children: r.name }),
                /* @__PURE__ */ p("p", { className: "text-xs text-gray-600 line-clamp-2", children: r.symptoms.join("、") })
              ] })
            ] })
          },
          r.id
        );
      }) })
    ] }) })
  ] });
}
function Lm() {
  const [e] = uf(), t = e.get("symptom"), [n, r] = _e([
    {
      id: "1",
      type: "bot",
      content: `您好！我是按按小助手 🌟

請告訴我您的症狀，我會幫您找到適合的穴位。您可以直接輸入症狀，例如：「頭痛」、「失眠」、「肩頸痠痛」等。`
    }
  ]), [i, s] = _e("");
  Oe(() => {
    t && a(t);
  }, [t]);
  const a = (c) => {
    if (!c.trim()) return;
    const u = {
      id: Date.now().toString(),
      type: "user",
      content: c
    };
    r((f) => [...f, u]);
    const d = Sl(c), h = Ht.find((f) => f.name === c || c.includes(f.name));
    setTimeout(() => {
      let f;
      if (d.length > 0) {
        let g = `針對「${c}」，我為您找到了 ${d.length} 個相關穴位：`;
        h && (g = `針對「${c}」，您可以查看專屬的「${h.name}」緩解頁面，或參考以下穴位：`), f = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: g,
          acupoints: d,
          symptomLink: h ? `/symptom/${h.id}` : void 0,
          symptomName: h?.name
        };
      } else {
        const g = Ht.slice(0, 6).map((x) => x.name);
        f = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: `抱歉，我沒有找到與「${c}」相關的穴位。

您可以試試搜尋這些常見症狀：
${g.join("、")}`
        };
      }
      r((g) => [...g, f]);
    }, 500), s("");
  }, o = (c) => {
    c.preventDefault(), a(i);
  }, l = (c) => {
    a(c);
  };
  return /* @__PURE__ */ C("div", { className: "min-h-screen bg-neutral-50 flex flex-col", children: [
    /* @__PURE__ */ p("header", { className: "bg-white px-6 py-4 border-b border-gray-100", children: /* @__PURE__ */ p(
      "h1",
      {
        className: "text-2xl text-center",
        style: { fontFamily: "'Noto Serif TC', serif" },
        children: "智能搜尋"
      }
    ) }),
    /* @__PURE__ */ p("div", { className: "flex-1 overflow-y-auto px-4 py-6 space-y-4", children: /* @__PURE__ */ p("div", { className: "max-w-md mx-auto space-y-4", children: n.map((c) => /* @__PURE__ */ C(
      "div",
      {
        className: `flex gap-3 ${c.type === "user" ? "flex-row-reverse" : ""}`,
        children: [
          /* @__PURE__ */ p("div", { className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${c.type === "bot" ? "bg-primary text-white" : "bg-gray-300 text-gray-700"}`, children: c.type === "bot" ? /* @__PURE__ */ p(da, { className: "w-5 h-5" }) : /* @__PURE__ */ p(zf, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ p("div", { className: `flex-1 ${c.type === "user" ? "flex justify-end" : ""}`, children: /* @__PURE__ */ C("div", { className: `inline-block max-w-[85%] rounded-2xl px-4 py-3 ${c.type === "bot" ? "bg-white shadow-sm border border-gray-100" : "bg-primary text-white"}`, children: [
            /* @__PURE__ */ p("p", { className: "text-sm whitespace-pre-line leading-relaxed", children: c.content }),
            c.symptomLink && /* @__PURE__ */ p(
              ue,
              {
                to: c.symptomLink,
                className: "mt-3 block bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/15 transition-colors group",
                children: /* @__PURE__ */ C("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ C("div", { children: [
                    /* @__PURE__ */ C("p", { className: "text-primary font-bold text-base", children: [
                      "前往 ",
                      c.symptomName,
                      " 專頁"
                    ] }),
                    /* @__PURE__ */ p("p", { className: "text-primary/70 text-xs", children: "查看完整教學影片與緩解攻略" })
                  ] }),
                  /* @__PURE__ */ p(da, { className: "w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" })
                ] })
              }
            ),
            c.acupoints && c.acupoints.length > 0 && /* @__PURE__ */ p("div", { className: "mt-4 space-y-3", children: c.acupoints.map((u) => {
              const d = Gt(u.videoUrl);
              return /* @__PURE__ */ p(
                ue,
                {
                  to: `/acupoint/${u.id}`,
                  className: "block bg-neutral-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",
                  children: /* @__PURE__ */ C("div", { className: "flex gap-3 p-3", children: [
                    /* @__PURE__ */ p("div", { className: "w-28 h-20 flex-shrink-0 bg-black rounded overflow-hidden", children: /* @__PURE__ */ p(
                      "img",
                      {
                        src: `https://img.youtube.com/vi/${d}/mqdefault.jpg`,
                        alt: u.name,
                        className: "w-full h-full object-cover"
                      }
                    ) }),
                    /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col justify-center", children: [
                      /* @__PURE__ */ p(
                        "h3",
                        {
                          className: "text-base text-gray-900 mb-1",
                          style: { fontFamily: "'Noto Serif TC', serif" },
                          children: u.name
                        }
                      ),
                      /* @__PURE__ */ p("p", { className: "text-xs text-gray-600 line-clamp-2", children: u.symptoms.join("、") })
                    ] })
                  ] })
                },
                u.id
              );
            }) })
          ] }) })
        ]
      },
      c.id
    )) }) }),
    n.length === 1 && /* @__PURE__ */ p("div", { className: "px-4 pb-4", children: /* @__PURE__ */ C("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ p("p", { className: "text-xs text-gray-500 mb-3 text-center", children: "常見症狀：" }),
      /* @__PURE__ */ p("div", { className: "flex flex-wrap gap-2 justify-center", children: Ht.slice(0, 8).map((c) => /* @__PURE__ */ p(
        "button",
        {
          onClick: () => l(c.name),
          className: "px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors",
          children: c.name
        },
        c.id
      )) })
    ] }) }),
    /* @__PURE__ */ p("div", { className: "bg-white border-t border-gray-200 px-4 py-4", children: /* @__PURE__ */ p("form", { onSubmit: o, className: "max-w-md mx-auto", children: /* @__PURE__ */ C("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ p(
        "input",
        {
          type: "text",
          value: i,
          onChange: (c) => s(c.target.value),
          placeholder: "輸入您的症狀...",
          className: "flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors"
        }
      ),
      /* @__PURE__ */ p(
        "button",
        {
          type: "submit",
          disabled: !i.trim(),
          className: "w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors",
          children: /* @__PURE__ */ p(jf, { className: "w-5 h-5" })
        }
      )
    ] }) }) })
  ] });
}
const El = [
  {
    id: "office-worker-neck-pain",
    title: "上班族必看",
    subtitle: "擺脫肩頸痠痛的完整指南",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    category: "職場健康",
    date: "2026年3月",
    readTime: "5分鐘",
    content: {
      introduction: "長時間使用電腦、低頭滑手機，現代人的肩頸問題越來越嚴重。根據調查，超過70%的上班族都有肩頸痠痛的困擾。本期專題將帶您深入了解肩頸痠痛的成因，並教您如何透過穴位按摩有效緩解。",
      sections: [
        {
          title: "為什麼會肩頸痠痛？",
          content: "肩頸痠痛的主要原因包括：長時間維持同一姿勢、頸部肌肉緊張、血液循環不良、壓力累積等。當我們長時間低頭或前傾，頸部需要承受相當於數顆保齡球的重量，肌肉長期處於緊繃狀態，自然會產生痠痛感。",
          tips: [
            "每30分鐘起身活動",
            "保持正確坐姿",
            "螢幕高度與視線平行",
            "定期伸展頸部肌肉"
          ]
        },
        {
          title: "關鍵穴位：風池穴",
          content: "風池穴位於後頸部，是緩解肩頸痠痛最重要的穴位之一。按壓風池穴可以促進頸部血液循環，放鬆緊繃的肌肉，對於落枕、頭痛也有顯著效果。",
          tips: [
            "用雙手拇指按壓",
            "力道由輕到重",
            "每次按壓3-5分鐘",
            "可搭配熱敷增強效果"
          ]
        },
        {
          title: "日常保健建議",
          content: "除了穴位按摩，日常生活中還有許多方法可以預防和改善肩頸痠痛。定期運動、保持良好姿勢、適度休息都很重要。此外，睡眠時選擇適合的枕頭高度，也能有效減少頸部負擔。"
        }
      ],
      conclusion: "肩頸痠痛雖然常見，但只要掌握正確的保健方法，就能有效預防和改善。記得每天抽出幾分鐘按摩穴位，搭配良好的生活習慣，讓肩頸重獲輕鬆自在。"
    },
    relatedAcupoints: ["fengchi", "hegu"]
  },
  {
    id: "better-sleep",
    title: "一夜好眠",
    subtitle: "失眠者的穴位療癒法",
    coverImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    category: "睡眠健康",
    date: "2026年3月",
    readTime: "6分鐘",
    content: {
      introduction: "失眠已成為現代人的文明病，許多人長期依賴安眠藥卻效果有限。其實，透過按摩特定穴位，就能自然改善睡眠品質。本期專題將介紹最有效的助眠穴位，幫助您找回深沉好眠。",
      sections: [
        {
          title: "失眠的類型與成因",
          content: "失眠主要分為入睡困難、睡眠中斷、早醒三種類型。造成失眠的原因包括：壓力焦慮、生活作息不規律、睡前使用3C產品、環境因素等。中醫認為，失眠多與心神不寧、肝氣鬱結有關。",
          tips: [
            "建立固定睡眠時間",
            "睡前避免使用手機",
            "保持臥室安靜黑暗",
            "避免睡前飲用咖啡因"
          ]
        },
        {
          title: "神門穴：安神助眠",
          content: "神門穴是心經的重要穴位，具有寧心安神的作用。睡前按壓神門穴，可以幫助放鬆心情、平復情緒，讓身心進入適合睡眠的狀態。對於因焦慮、壓力導致的失眠特別有效。",
          tips: [
            "睡前30分鐘按壓",
            "力道輕柔",
            "配合深呼吸",
            "兩手輪流按摩"
          ]
        },
        {
          title: "百會穴：調節睡眠",
          content: "百會穴位於頭頂正中，是督脈的要穴。按摩百會穴能夠調節自律神經，改善腦部血液循環，對於因精神緊張、思慮過度導致的失眠有很好的效果。"
        }
      ],
      conclusion: "改善睡眠需要耐心和持續的努力。每天睡前花10分鐘按摩助眠穴位，配合良好的睡眠習慣，相信您很快就能享受一夜好眠。記住，規律作息比任何方法都重要。"
    },
    relatedAcupoints: ["shenmen", "baihui"]
  },
  {
    id: "digestive-health",
    title: "腸胃保健",
    subtitle: "告別消化不良與脹氣",
    coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    category: "消化健康",
    date: "2026年3月",
    readTime: "5分鐘",
    content: {
      introduction: "現代人飲食不規律、壓力大，腸胃問題層出不窮。胃脹氣、消化不良、便秘等症狀嚴重影響生活品質。透過按摩特定穴位，可以有效調理腸胃功能，改善消化系統健康。",
      sections: [
        {
          title: "腸胃問題的警訊",
          content: "常見的腸胃不適症狀包括：飯後腹脹、打嗝頻繁、消化緩慢、便秘或腹瀉交替等。這些問題如果長期忽視，可能影響營養吸收，甚至引發更嚴重的健康問題。中醫認為，脾胃是後天之本，腸胃健康至關重要。",
          tips: [
            "定時定量進食",
            "細嚼慢嚥",
            "避免暴飲暴食",
            "少吃生冷食物"
          ]
        },
        {
          title: "足三里：健脾養胃",
          content: "足三里被譽為「長壽穴」，是調理脾胃最重要的穴位。經常按摩足三里，可以增強消化功能、促進食物吸收、改善胃脹氣。對於消化不良、胃痛、便秘都有顯著效果。",
          tips: [
            "飯後1小時按摩",
            "每次5-10分鐘",
            "力道稍重",
            "持續按摩效果更佳"
          ]
        },
        {
          title: "天樞穴：調理腸道",
          content: "天樞穴是大腸的募穴，對於調節腸道功能特別有效。無論是便秘還是腹瀉，按摩天樞穴都能發揮雙向調節作用，幫助腸道恢復正常功能。"
        }
      ],
      conclusion: "腸胃健康需要從飲食、作息、情緒多方面調理。配合穴位按摩，可以事半功倍。記得每天花點時間關心自己的腸胃，它會用健康回報您。"
    },
    relatedAcupoints: ["zusanli", "tianshu"]
  },
  {
    id: "eye-care",
    title: "護眼專題",
    subtitle: "3C時代的眼睛保養術",
    coverImage: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80",
    category: "視力保健",
    date: "2026年2月",
    readTime: "4分鐘",
    content: {
      introduction: "長時間盯著螢幕，眼睛乾澀、疲勞已成為現代人的通病。藍光傷害、用眼過度都會加速眼睛老化。學會正確的眼部穴位按摩，能有效緩解眼睛疲勞，保護視力健康。",
      sections: [
        {
          title: "眼睛疲勞的症狀",
          content: "眼睛疲勞的常見症狀包括：眼睛乾澀、視力模糊、眼壓升高、頭痛、畏光等。這些症狀提醒我們，眼睛需要休息了。現代人平均每天使用3C產品超過8小時，眼睛承受巨大負擔。",
          tips: [
            "每20分鐘遠眺20秒",
            "保持適當閱讀距離",
            "調整螢幕亮度",
            "多眨眼保持濕潤"
          ]
        },
        {
          title: "攢竹穴：舒緩眼壓",
          content: "攢竹穴位於眉頭凹陷處，是緩解眼睛疲勞最有效的穴位。按摩攢竹穴可以放鬆眼周肌肉、降低眼壓、改善眼睛乾澀。特別適合長時間用眼後使用。",
          tips: [
            "用眼過度時立即按壓",
            "由下往上輕按",
            "配合閉眼休息",
            "每次1-2分鐘"
          ]
        },
        {
          title: "太陽穴：緩解頭痛",
          content: "眼睛疲勞常伴隨頭痛，此時按摩太陽穴能有效緩解。太陽穴位於眉梢與外眼角延長線的凹陷處，輕柔按摩可以促進頭部血液循環，消除疲勞。"
        }
      ],
      conclusion: "保護眼睛要從日常做起，定時休息、正確用眼、搭配穴位按摩，讓雙眼保持明亮有神。記住，眼睛是靈魂之窗，值得我們用心呵護。"
    },
    relatedAcupoints: ["cuanzhu", "taiyang"]
  }
];
function Vm(e) {
  return El.find((t) => t.id === e);
}
function Fm() {
  return /* @__PURE__ */ C("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ C("header", { className: "px-6 py-6 border-b border-gray-100", children: [
      /* @__PURE__ */ p(
        "h1",
        {
          className: "text-3xl text-center mb-2",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: "專題"
        }
      ),
      /* @__PURE__ */ p("p", { className: "text-center text-sm text-gray-500", children: "深度探索穴位保健知識" })
    ] }),
    /* @__PURE__ */ p("div", { className: "px-4 py-6", children: /* @__PURE__ */ p("div", { className: "max-w-md mx-auto space-y-6", children: El.map((e, t) => /* @__PURE__ */ p(
      ue,
      {
        to: `/topics/${e.id}`,
        className: "block group",
        children: t === 0 ? /* @__PURE__ */ C("article", { className: "bg-neutral-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ p("div", { className: "aspect-[16/10] overflow-hidden bg-gray-200", children: /* @__PURE__ */ p(
            "img",
            {
              src: e.coverImage,
              alt: e.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            }
          ) }),
          /* @__PURE__ */ C("div", { className: "p-6", children: [
            /* @__PURE__ */ C("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ p("span", { className: "px-3 py-1 bg-primary text-white text-xs rounded-full", children: e.category }),
              /* @__PURE__ */ C("div", { className: "flex items-center gap-1 text-xs text-gray-500", children: [
                /* @__PURE__ */ p(ti, { className: "w-3 h-3" }),
                /* @__PURE__ */ p("span", { children: e.readTime })
              ] })
            ] }),
            /* @__PURE__ */ p(
              "h2",
              {
                className: "text-2xl mb-2",
                style: { fontFamily: "'Noto Serif TC', serif" },
                children: e.title
              }
            ),
            /* @__PURE__ */ p("p", { className: "text-gray-600 mb-3", children: e.subtitle }),
            /* @__PURE__ */ C("div", { className: "flex items-center text-primary text-sm", children: [
              /* @__PURE__ */ p("span", { children: "閱讀更多" }),
              /* @__PURE__ */ p(Rf, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) : (
          /* Regular topic cards */
          /* @__PURE__ */ C("article", { className: "flex gap-4 bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4", children: [
            /* @__PURE__ */ p("div", { className: "w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200", children: /* @__PURE__ */ p(
              "img",
              {
                src: e.coverImage,
                alt: e.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              }
            ) }),
            /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col justify-between py-1", children: [
              /* @__PURE__ */ C("div", { children: [
                /* @__PURE__ */ C("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ p("span", { className: "px-2 py-0.5 bg-primary text-white text-xs rounded-full", children: e.category }),
                  /* @__PURE__ */ p("span", { className: "text-xs text-gray-500", children: e.date })
                ] }),
                /* @__PURE__ */ p(
                  "h3",
                  {
                    className: "text-lg mb-1",
                    style: { fontFamily: "'Noto Serif TC', serif" },
                    children: e.title
                  }
                ),
                /* @__PURE__ */ p("p", { className: "text-sm text-gray-600 line-clamp-2", children: e.subtitle })
              ] }),
              /* @__PURE__ */ C("div", { className: "flex items-center gap-1 text-xs text-gray-500 mt-2", children: [
                /* @__PURE__ */ p(ti, { className: "w-3 h-3" }),
                /* @__PURE__ */ p("span", { children: e.readTime })
              ] })
            ] })
          ] })
        )
      },
      e.id
    )) }) }),
    /* @__PURE__ */ p("div", { className: "px-4 pb-8", children: /* @__PURE__ */ p("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ C("div", { className: "text-center py-12 bg-neutral-50 rounded-xl border-2 border-dashed border-gray-200", children: [
      /* @__PURE__ */ p("p", { className: "text-gray-500 mb-2", children: "更多精彩專題" }),
      /* @__PURE__ */ p("p", { className: "text-sm text-gray-400", children: "即將推出" })
    ] }) }) })
  ] });
}
function km() {
  const { id: e } = _i(), t = e ? Vm(e) : void 0;
  if (!t)
    return /* @__PURE__ */ p("div", { className: "min-h-screen flex items-center justify-center px-4", children: /* @__PURE__ */ C("div", { className: "text-center", children: [
      /* @__PURE__ */ p("h2", { className: "text-2xl mb-4", style: { fontFamily: "'Noto Serif TC', serif" }, children: "找不到此專題" }),
      /* @__PURE__ */ p(ue, { to: "/topics", className: "text-primary underline", children: "返回專題列表" })
    ] }) });
  const n = t.relatedAcupoints.map((r) => Pl(r)).filter((r) => r !== void 0);
  return /* @__PURE__ */ C("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ p("header", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-4 z-10", children: /* @__PURE__ */ C("div", { className: "max-w-2xl mx-auto flex items-center gap-3", children: [
      /* @__PURE__ */ p(ue, { to: "/topics", className: "text-gray-600", children: /* @__PURE__ */ p(ei, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ p("span", { className: "text-sm text-gray-600", children: "返回" })
    ] }) }),
    /* @__PURE__ */ C("div", { className: "relative aspect-[16/9] overflow-hidden bg-gray-200", children: [
      /* @__PURE__ */ p(
        "img",
        {
          src: t.coverImage,
          alt: t.title,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ p("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
      /* @__PURE__ */ p("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white", children: /* @__PURE__ */ C("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ p("span", { className: "inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3", children: t.category }),
        /* @__PURE__ */ p(
          "h1",
          {
            className: "text-3xl mb-2",
            style: { fontFamily: "'Noto Serif TC', serif" },
            children: t.title
          }
        ),
        /* @__PURE__ */ p("p", { className: "text-lg mb-3 text-white/90", children: t.subtitle }),
        /* @__PURE__ */ C("div", { className: "flex items-center gap-4 text-sm text-white/80", children: [
          /* @__PURE__ */ p("span", { children: t.date }),
          /* @__PURE__ */ C("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ p(ti, { className: "w-4 h-4" }),
            /* @__PURE__ */ p("span", { children: t.readTime })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ p("article", { className: "px-6 py-8", children: /* @__PURE__ */ C("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ p("div", { className: "mb-10", children: /* @__PURE__ */ p("p", { className: "text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1", style: { fontFamily: "'Noto Serif TC', serif" }, children: t.content.introduction }) }),
      /* @__PURE__ */ p("div", { className: "space-y-10", children: t.content.sections.map((r, i) => /* @__PURE__ */ C("section", { className: "scroll-mt-20", children: [
        /* @__PURE__ */ p(
          "h2",
          {
            className: "text-2xl mb-4 pb-2 border-b border-gray-200",
            style: { fontFamily: "'Noto Serif TC', serif" },
            children: r.title
          }
        ),
        /* @__PURE__ */ p("p", { className: "text-gray-700 leading-relaxed mb-4", children: r.content }),
        r.tips && r.tips.length > 0 && /* @__PURE__ */ p("div", { className: "bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5 mt-4", children: /* @__PURE__ */ C("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ p(Lf, { className: "w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ p("h4", { className: "text-amber-900 mb-3", style: { fontFamily: "'Noto Serif TC', serif" }, children: "實用建議" }),
            /* @__PURE__ */ p("ul", { className: "space-y-2", children: r.tips.map((s, a) => /* @__PURE__ */ C("li", { className: "flex items-start gap-2 text-sm text-amber-800", children: [
              /* @__PURE__ */ p("span", { className: "inline-block w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2" }),
              /* @__PURE__ */ p("span", { children: s })
            ] }, a)) })
          ] })
        ] }) })
      ] }, i)) }),
      /* @__PURE__ */ C("div", { className: "mt-10 p-6 bg-neutral-50 rounded-xl border border-gray-200", children: [
        /* @__PURE__ */ p(
          "h3",
          {
            className: "text-xl mb-3",
            style: { fontFamily: "'Noto Serif TC', serif" },
            children: "總結"
          }
        ),
        /* @__PURE__ */ p("p", { className: "text-gray-700 leading-relaxed", children: t.content.conclusion })
      ] }),
      n.length > 0 && /* @__PURE__ */ C("div", { className: "mt-12", children: [
        /* @__PURE__ */ p(
          "h3",
          {
            className: "text-2xl mb-6",
            style: { fontFamily: "'Noto Serif TC', serif" },
            children: "相關穴位"
          }
        ),
        /* @__PURE__ */ p("div", { className: "grid gap-4", children: n.map((r) => {
          const i = Gt(r.videoUrl);
          return /* @__PURE__ */ p(
            ue,
            {
              to: `/acupoint/${r.id}`,
              className: "block bg-neutral-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow border border-gray-100",
              children: /* @__PURE__ */ C("div", { className: "flex gap-4 p-4", children: [
                /* @__PURE__ */ p("div", { className: "w-40 h-28 flex-shrink-0 bg-black rounded-lg overflow-hidden", children: /* @__PURE__ */ p(
                  "img",
                  {
                    src: `https://img.youtube.com/vi/${i}/mqdefault.jpg`,
                    alt: r.name,
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ C("div", { className: "flex-1 flex flex-col justify-center", children: [
                  /* @__PURE__ */ p(
                    "h4",
                    {
                      className: "text-xl mb-2",
                      style: { fontFamily: "'Noto Serif TC', serif" },
                      children: r.name
                    }
                  ),
                  /* @__PURE__ */ p("p", { className: "text-sm text-gray-600 mb-2", children: r.symptoms.join("、") }),
                  /* @__PURE__ */ p("p", { className: "text-sm text-gray-500 line-clamp-2", children: r.description })
                ] })
              ] })
            },
            r.id
          );
        }) })
      ] }),
      /* @__PURE__ */ p("div", { className: "mt-12 pt-8 border-t border-gray-200", children: /* @__PURE__ */ C(
        ue,
        {
          to: "/topics",
          className: "inline-flex items-center gap-2 text-primary hover:underline",
          children: [
            /* @__PURE__ */ p(ei, { className: "w-4 h-4" }),
            /* @__PURE__ */ p("span", { children: "返回專題列表" })
          ]
        }
      ) })
    ] }) })
  ] });
}
function Im() {
  const { id: e } = _i(), t = e ? Pl(e) : void 0;
  if (!t)
    return /* @__PURE__ */ p("div", { className: "min-h-screen flex items-center justify-center px-4", children: /* @__PURE__ */ C("div", { className: "text-center", children: [
      /* @__PURE__ */ p("h2", { className: "text-2xl mb-4", style: { fontFamily: "'Noto Serif TC', serif" }, children: "找不到此穴位" }),
      /* @__PURE__ */ p(ue, { to: "/", className: "text-primary underline", children: "返回首頁" })
    ] }) });
  const n = Gt(t.videoUrl);
  return /* @__PURE__ */ C("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ p("header", { className: "sticky top-0 bg-white border-b border-gray-100 px-4 py-4 z-10", children: /* @__PURE__ */ C("div", { className: "max-w-md mx-auto flex items-center gap-3", children: [
      /* @__PURE__ */ p(ue, { to: "/", className: "text-gray-600", children: /* @__PURE__ */ p(ei, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ p(
        "h1",
        {
          className: "text-2xl flex-1",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: t.name
        }
      )
    ] }) }),
    /* @__PURE__ */ C("div", { className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ p("div", { className: "aspect-video bg-black", children: /* @__PURE__ */ p(
        "iframe",
        {
          src: `https://www.youtube.com/embed/${n}?controls=1`,
          title: t.name,
          className: "w-full h-full",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: !0
        }
      ) }),
      /* @__PURE__ */ C("div", { className: "px-6 py-6 space-y-6", children: [
        /* @__PURE__ */ p("div", { children: /* @__PURE__ */ p("div", { className: "flex flex-wrap gap-2", children: t.symptoms.map((r, i) => {
          const s = Ht.find((a) => a.name === r);
          return /* @__PURE__ */ p(
            ue,
            {
              to: s ? `/symptom/${s.id}` : `/search?symptom=${encodeURIComponent(r)}`,
              className: "px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm border border-amber-200",
              children: r
            },
            i
          );
        }) }) }),
        /* @__PURE__ */ p("div", { children: /* @__PURE__ */ p("p", { className: "text-gray-700 leading-relaxed", children: t.description }) }),
        /* @__PURE__ */ p("div", { className: "bg-neutral-50 rounded-lg p-4", children: /* @__PURE__ */ C("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ p(If, { className: "w-5 h-5 text-primary flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ p(
              "h3",
              {
                className: "text-base mb-2",
                style: { fontFamily: "'Noto Serif TC', serif" },
                children: "穴位位置"
              }
            ),
            /* @__PURE__ */ p("p", { className: "text-sm text-gray-700 leading-relaxed", children: t.location })
          ] })
        ] }) }),
        /* @__PURE__ */ p("div", { className: "bg-neutral-50 rounded-lg p-4", children: /* @__PURE__ */ C("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ p(Ff, { className: "w-5 h-5 text-primary flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ C("div", { className: "flex-1", children: [
            /* @__PURE__ */ p(
              "h3",
              {
                className: "text-base mb-3",
                style: { fontFamily: "'Noto Serif TC', serif" },
                children: "按摩方法"
              }
            ),
            /* @__PURE__ */ p("ul", { className: "space-y-2", children: t.instructions.map((r, i) => /* @__PURE__ */ C("li", { className: "flex items-start gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ p("span", { className: "inline-block w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5", children: i + 1 }),
              /* @__PURE__ */ p("span", { className: "flex-1 leading-relaxed", children: r })
            ] }, i)) })
          ] })
        ] }) }),
        /* @__PURE__ */ p("div", { className: "border-t border-gray-200 pt-6", children: /* @__PURE__ */ p("p", { className: "text-xs text-gray-500 leading-relaxed", children: "⚠️ 提醒：穴位按摩為輔助保健方式，不能替代專業醫療。如有嚴重或持續性症狀，請諮詢專業醫療人員。" }) })
      ] })
    ] })
  ] });
}
const Rl = fe({});
function Bm(e) {
  const t = He(null);
  return t.current === null && (t.current = e()), t.current;
}
const Wi = typeof window < "u", _m = Wi ? gr : Oe, Hi = /* @__PURE__ */ fe(null);
function Ki(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const it = (e, t, n) => n > t ? t : n < e ? e : n;
let Xi = () => {
};
const st = {}, Cl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Ml(e) {
  return typeof e == "object" && e !== null;
}
const Dl = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ue = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Om = (e, t) => (n) => t(e(n)), In = (...e) => e.reduce(Om), Pn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Zi {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ki(this.subscriptions, t), () => Gi(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const a = this.subscriptions[s];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ze = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, je = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Nl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ll = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, jm = 1e-7, Um = 12;
function zm(e, t, n, r, i) {
  let s, a, o = 0;
  do
    a = t + (n - t) / 2, s = Ll(a, r, i) - e, s > 0 ? n = a : t = a;
  while (Math.abs(s) > jm && ++o < Um);
  return a;
}
function Bn(e, t, n, r) {
  if (e === t && n === r)
    return Ue;
  const i = (s) => zm(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Ll(i(s), t, r);
}
const Vl = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Fl = (e) => (t) => 1 - e(1 - t), kl = /* @__PURE__ */ Bn(0.33, 1.53, 0.69, 0.99), qi = /* @__PURE__ */ Fl(kl), Il = /* @__PURE__ */ Vl(qi), Bl = (e) => (e *= 2) < 1 ? 0.5 * qi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Ji = (e) => 1 - Math.sin(Math.acos(e)), _l = Fl(Ji), Ol = Vl(Ji), $m = /* @__PURE__ */ Bn(0.42, 0, 1, 1), Wm = /* @__PURE__ */ Bn(0, 0, 0.58, 1), jl = /* @__PURE__ */ Bn(0.42, 0, 0.58, 1), Hm = (e) => Array.isArray(e) && typeof e[0] != "number", Ul = (e) => Array.isArray(e) && typeof e[0] == "number", Km = {
  linear: Ue,
  easeIn: $m,
  easeInOut: jl,
  easeOut: Wm,
  circIn: Ji,
  circInOut: Ol,
  circOut: _l,
  backIn: qi,
  backInOut: Il,
  backOut: kl,
  anticipate: Bl
}, Gm = (e) => typeof e == "string", ya = (e) => {
  if (Ul(e)) {
    Xi(e.length === 4);
    const [t, n, r, i] = e;
    return Bn(t, n, r, i);
  } else if (Gm(e))
    return Km[e];
  return e;
}, Jn = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Xm(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, s = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    a.has(u) && (c.schedule(u), e()), u(o);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, d = !1, h = !1) => {
      const g = h && i ? n : r;
      return d && a.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      r.delete(u), a.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, i) {
        s = !0;
        return;
      }
      i = !0, [n, r] = [r, n], n.forEach(l), n.clear(), i = !1, s && (s = !1, c.process(u));
    }
  };
  return c;
}
const Ym = 40;
function zl(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, a = Jn.reduce((S, D) => (S[D] = Xm(s), S), {}), { setup: o, read: l, resolveKeyframes: c, preUpdate: u, update: d, preRender: h, render: f, postRender: g } = a, x = () => {
    const S = st.useManualTiming ? i.timestamp : performance.now();
    n = !1, st.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(S - i.timestamp, Ym), 1)), i.timestamp = S, i.isProcessing = !0, o.process(i), l.process(i), c.process(i), u.process(i), d.process(i), h.process(i), f.process(i), g.process(i), i.isProcessing = !1, n && t && (r = !1, e(x));
  }, T = () => {
    n = !0, r = !0, i.isProcessing || e(x);
  };
  return { schedule: Jn.reduce((S, D) => {
    const M = a[D];
    return S[D] = (B, v = !1, E = !1) => (n || T(), M.schedule(B, v, E)), S;
  }, {}), cancel: (S) => {
    for (let D = 0; D < Jn.length; D++)
      a[Jn[D]].cancel(S);
  }, state: i, steps: a };
}
const { schedule: ie, cancel: mt, state: ge, steps: Fr } = /* @__PURE__ */ zl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let ir;
function Zm() {
  ir = void 0;
}
const Ee = {
  now: () => (ir === void 0 && Ee.set(ge.isProcessing || st.useManualTiming ? ge.timestamp : performance.now()), ir),
  set: (e) => {
    ir = e, queueMicrotask(Zm);
  }
}, $l = (e) => (t) => typeof t == "string" && t.startsWith(e), Qi = /* @__PURE__ */ $l("--"), qm = /* @__PURE__ */ $l("var(--"), es = (e) => qm(e) ? Jm.test(e.split("/*")[0].trim()) : !1, Jm = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, qt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, En = {
  ...qt,
  transform: (e) => it(0, 1, e)
}, Qn = {
  ...qt,
  default: 1
}, pn = (e) => Math.round(e * 1e5) / 1e5, ts = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Qm(e) {
  return e == null;
}
const ep = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ns = (e, t) => (n) => !!(typeof n == "string" && ep.test(n) && n.startsWith(e) || t && !Qm(n) && Object.prototype.hasOwnProperty.call(n, t)), Wl = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, a, o] = r.match(ts);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(a),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, tp = (e) => it(0, 255, e), kr = {
  ...qt,
  transform: (e) => Math.round(tp(e))
}, Mt = {
  test: /* @__PURE__ */ ns("rgb", "red"),
  parse: /* @__PURE__ */ Wl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + kr.transform(e) + ", " + kr.transform(t) + ", " + kr.transform(n) + ", " + pn(En.transform(r)) + ")"
};
function np(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const li = {
  test: /* @__PURE__ */ ns("#"),
  parse: np,
  transform: Mt.transform
}, _n = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ct = /* @__PURE__ */ _n("deg"), qe = /* @__PURE__ */ _n("%"), j = /* @__PURE__ */ _n("px"), rp = /* @__PURE__ */ _n("vh"), ip = /* @__PURE__ */ _n("vw"), va = {
  ...qe,
  parse: (e) => qe.parse(e) / 100,
  transform: (e) => qe.transform(e * 100)
}, Ot = {
  test: /* @__PURE__ */ ns("hsl", "hue"),
  parse: /* @__PURE__ */ Wl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + qe.transform(pn(t)) + ", " + qe.transform(pn(n)) + ", " + pn(En.transform(r)) + ")"
}, he = {
  test: (e) => Mt.test(e) || li.test(e) || Ot.test(e),
  parse: (e) => Mt.test(e) ? Mt.parse(e) : Ot.test(e) ? Ot.parse(e) : li.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Mt.transform(e) : Ot.transform(e),
  getAnimatableNone: (e) => {
    const t = he.parse(e);
    return t.alpha = 0, he.transform(t);
  }
}, sp = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ap(e) {
  return isNaN(e) && typeof e == "string" && (e.match(ts)?.length || 0) + (e.match(sp)?.length || 0) > 0;
}
const Hl = "number", Kl = "color", op = "var", lp = "var(", ba = "${}", cp = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Rn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const o = t.replace(cp, (l) => (he.test(l) ? (r.color.push(s), i.push(Kl), n.push(he.parse(l))) : l.startsWith(lp) ? (r.var.push(s), i.push(op), n.push(l)) : (r.number.push(s), i.push(Hl), n.push(parseFloat(l))), ++s, ba)).split(ba);
  return { values: n, split: o, indexes: r, types: i };
}
function Gl(e) {
  return Rn(e).values;
}
function Xl(e) {
  const { split: t, types: n } = Rn(e), r = t.length;
  return (i) => {
    let s = "";
    for (let a = 0; a < r; a++)
      if (s += t[a], i[a] !== void 0) {
        const o = n[a];
        o === Hl ? s += pn(i[a]) : o === Kl ? s += he.transform(i[a]) : s += i[a];
      }
    return s;
  };
}
const up = (e) => typeof e == "number" ? 0 : he.test(e) ? he.getAnimatableNone(e) : e;
function dp(e) {
  const t = Gl(e);
  return Xl(e)(t.map(up));
}
const pt = {
  test: ap,
  parse: Gl,
  createTransformer: Xl,
  getAnimatableNone: dp
};
function Ir(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function hp({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, a = 0;
  if (!t)
    i = s = a = n;
  else {
    const o = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - o;
    i = Ir(l, o, e + 1 / 3), s = Ir(l, o, e), a = Ir(l, o, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function dr(e, t) {
  return (n) => n > 0 ? t : e;
}
const se = (e, t, n) => e + (t - e) * n, Br = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, fp = [li, Mt, Ot], mp = (e) => fp.find((t) => t.test(e));
function xa(e) {
  const t = mp(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Ot && (n = hp(n)), n;
}
const wa = (e, t) => {
  const n = xa(e), r = xa(t);
  if (!n || !r)
    return dr(e, t);
  const i = { ...n };
  return (s) => (i.red = Br(n.red, r.red, s), i.green = Br(n.green, r.green, s), i.blue = Br(n.blue, r.blue, s), i.alpha = se(n.alpha, r.alpha, s), Mt.transform(i));
}, ci = /* @__PURE__ */ new Set(["none", "hidden"]);
function pp(e, t) {
  return ci.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function gp(e, t) {
  return (n) => se(e, t, n);
}
function rs(e) {
  return typeof e == "number" ? gp : typeof e == "string" ? es(e) ? dr : he.test(e) ? wa : bp : Array.isArray(e) ? Yl : typeof e == "object" ? he.test(e) ? wa : yp : dr;
}
function Yl(e, t) {
  const n = [...e], r = n.length, i = e.map((s, a) => rs(s)(s, t[a]));
  return (s) => {
    for (let a = 0; a < r; a++)
      n[a] = i[a](s);
    return n;
  };
}
function yp(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = rs(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function vp(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], a = e.indexes[s][r[s]], o = e.values[a] ?? 0;
    n[i] = o, r[s]++;
  }
  return n;
}
const bp = (e, t) => {
  const n = pt.createTransformer(t), r = Rn(e), i = Rn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ci.has(e) && !i.values.length || ci.has(t) && !r.values.length ? pp(e, t) : In(Yl(vp(r, i), i.values), n) : dr(e, t);
};
function Zl(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? se(e, t, n) : rs(e)(e, t);
}
const xp = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ie.update(t, n),
    stop: () => mt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ge.isProcessing ? ge.timestamp : Ee.now()
  };
}, ql = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++)
    r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, hr = 2e4;
function is(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < hr; )
    t += n, r = e.next(t);
  return t >= hr ? 1 / 0 : t;
}
function wp(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), i = Math.min(is(r), hr);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: /* @__PURE__ */ je(i)
  };
}
const Tp = 5;
function Jl(e, t, n) {
  const r = Math.max(t - Tp, 0);
  return Nl(n - e(r), t - r);
}
const oe = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, _r = 1e-3;
function Ap({ duration: e = oe.duration, bounce: t = oe.bounce, velocity: n = oe.velocity, mass: r = oe.mass }) {
  let i, s, a = 1 - t;
  a = it(oe.minDamping, oe.maxDamping, a), e = it(oe.minDuration, oe.maxDuration, /* @__PURE__ */ je(e)), a < 1 ? (i = (c) => {
    const u = c * a, d = u * e, h = u - n, f = ui(c, a), g = Math.exp(-d);
    return _r - h / f * g;
  }, s = (c) => {
    const d = c * a * e, h = d * n + n, f = Math.pow(a, 2) * Math.pow(c, 2) * e, g = Math.exp(-d), x = ui(Math.pow(c, 2), a);
    return (-i(c) + _r > 0 ? -1 : 1) * ((h - f) * g) / x;
  }) : (i = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -_r + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const o = 5 / e, l = Pp(i, s, o);
  if (e = /* @__PURE__ */ Ze(e), isNaN(l))
    return {
      stiffness: oe.stiffness,
      damping: oe.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: a * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Sp = 12;
function Pp(e, t, n) {
  let r = n;
  for (let i = 1; i < Sp; i++)
    r = r - e(r) / t(r);
  return r;
}
function ui(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ep = ["duration", "bounce"], Rp = ["stiffness", "damping", "mass"];
function Ta(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Cp(e) {
  let t = {
    velocity: oe.velocity,
    stiffness: oe.stiffness,
    damping: oe.damping,
    mass: oe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ta(e, Rp) && Ta(e, Ep))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * it(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: oe.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = Ap(e);
      t = {
        ...t,
        ...n,
        mass: oe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function fr(e = oe.visualDuration, t = oe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], o = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: d, velocity: h, isResolvedFromDuration: f } = Cp({
    ...n,
    velocity: -/* @__PURE__ */ je(n.velocity || 0)
  }), g = h || 0, x = c / (2 * Math.sqrt(l * u)), T = a - s, A = /* @__PURE__ */ je(Math.sqrt(l / u)), w = Math.abs(T) < 5;
  r || (r = w ? oe.restSpeed.granular : oe.restSpeed.default), i || (i = w ? oe.restDelta.granular : oe.restDelta.default);
  let S;
  if (x < 1) {
    const M = ui(A, x);
    S = (B) => {
      const v = Math.exp(-x * A * B);
      return a - v * ((g + x * A * T) / M * Math.sin(M * B) + T * Math.cos(M * B));
    };
  } else if (x === 1)
    S = (M) => a - Math.exp(-A * M) * (T + (g + A * T) * M);
  else {
    const M = A * Math.sqrt(x * x - 1);
    S = (B) => {
      const v = Math.exp(-x * A * B), E = Math.min(M * B, 300);
      return a - v * ((g + x * A * T) * Math.sinh(E) + M * T * Math.cosh(E)) / M;
    };
  }
  const D = {
    calculatedDuration: f && d || null,
    next: (M) => {
      const B = S(M);
      if (f)
        o.done = M >= d;
      else {
        let v = M === 0 ? g : 0;
        x < 1 && (v = M === 0 ? /* @__PURE__ */ Ze(g) : Jl(S, M, B));
        const E = Math.abs(v) <= r, I = Math.abs(a - B) <= i;
        o.done = E && I;
      }
      return o.value = o.done ? a : B, o;
    },
    toString: () => {
      const M = Math.min(is(D), hr), B = ql((v) => D.next(M * v).value, M, 30);
      return M + "ms " + B;
    },
    toTransition: () => {
    }
  };
  return D;
}
fr.applyToOptions = (e) => {
  const t = wp(e, 100, fr);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Ze(t.duration), e.type = "keyframes", e;
};
function di({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: a, min: o, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, f = (E) => o !== void 0 && E < o || l !== void 0 && E > l, g = (E) => o === void 0 ? l : l === void 0 || Math.abs(o - E) < Math.abs(l - E) ? o : l;
  let x = n * t;
  const T = d + x, A = a === void 0 ? T : a(T);
  A !== T && (x = A - d);
  const w = (E) => -x * Math.exp(-E / r), S = (E) => A + w(E), D = (E) => {
    const I = w(E), H = S(E);
    h.done = Math.abs(I) <= c, h.value = h.done ? A : H;
  };
  let M, B;
  const v = (E) => {
    f(h.value) && (M = E, B = fr({
      keyframes: [h.value, g(h.value)],
      velocity: Jl(S, E, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return v(0), {
    calculatedDuration: null,
    next: (E) => {
      let I = !1;
      return !B && M === void 0 && (I = !0, D(E), v(E)), M !== void 0 && E >= M ? B.next(E - M) : (!I && D(E), h);
    }
  };
}
function Mp(e, t, n) {
  const r = [], i = n || st.mix || Zl, s = e.length - 1;
  for (let a = 0; a < s; a++) {
    let o = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ue : t;
      o = In(l, o);
    }
    r.push(o);
  }
  return r;
}
function Dp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (Xi(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = Mp(t, r, i), l = o.length, c = (u) => {
    if (a && u < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ Pn(e[d], e[d + 1], u);
    return o[d](h);
  };
  return n ? (u) => c(it(e[0], e[s - 1], u)) : c;
}
function Np(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Pn(0, t, r);
    e.push(se(n, 1, i));
  }
}
function Lp(e) {
  const t = [0];
  return Np(t, e.length - 1), t;
}
function Vp(e, t) {
  return e.map((n) => n * t);
}
function Fp(e, t) {
  return e.map(() => t || jl).splice(0, e.length - 1);
}
function gn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = Hm(r) ? r.map(ya) : ya(r), s = {
    done: !1,
    value: t[0]
  }, a = Vp(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Lp(t),
    e
  ), o = Dp(a, t, {
    ease: Array.isArray(i) ? i : Fp(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = o(l), s.done = l >= e, s)
  };
}
const kp = (e) => e !== null;
function ss(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(kp), o = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !o || r === void 0 ? s[o] : r;
}
const Ip = {
  decay: di,
  inertia: di,
  tween: gn,
  keyframes: gn,
  spring: fr
};
function Ql(e) {
  typeof e.type == "string" && (e.type = Ip[e.type]);
}
class as {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Bp = (e) => e / 100;
class os extends as {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ee.now() && this.tick(Ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Ql(t);
    const { type: n = gn, repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: a = 0 } = t;
    let { keyframes: o } = t;
    const l = n || gn;
    l !== gn && typeof o[0] != "number" && (this.mixKeyframes = In(Bp, Zl(o[0], o[1])), o = [0, 100]);
    const c = l({ ...t, keyframes: o });
    s === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...o].reverse(),
      velocity: -a
    })), c.calculatedDuration === null && (c.calculatedDuration = is(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: c = 0, keyframes: u, repeat: d, repeatType: h, repeatDelay: f, type: g, onUpdate: x, finalKeyframe: T } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const A = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? A < 0 : A > i;
    this.currentTime = Math.max(A, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let S = this.currentTime, D = r;
    if (d) {
      const E = Math.min(this.currentTime, i) / o;
      let I = Math.floor(E), H = E % 1;
      !H && E >= 1 && (H = 1), H === 1 && I--, I = Math.min(I, d + 1), !!(I % 2) && (h === "reverse" ? (H = 1 - H, f && (H -= f / o)) : h === "mirror" && (D = a)), S = it(0, 1, H) * o;
    }
    const M = w ? { done: !1, value: u[0] } : D.next(S);
    s && (M.value = s(M.value));
    let { done: B } = M;
    !w && l !== null && (B = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const v = this.holdTime === null && (this.state === "finished" || this.state === "running" && B);
    return v && g !== di && (M.value = ss(u, this.options, T, this.speed)), x && x(M.value), v && this.finish(), M;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ je(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ je(t);
  }
  get time() {
    return /* @__PURE__ */ je(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ze(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ee.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ je(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = xp, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ee.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function _p(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Dt = (e) => e * 180 / Math.PI, hi = (e) => {
  const t = Dt(Math.atan2(e[1], e[0]));
  return fi(t);
}, Op = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: hi,
  rotateZ: hi,
  skewX: (e) => Dt(Math.atan(e[1])),
  skewY: (e) => Dt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, fi = (e) => (e = e % 360, e < 0 && (e += 360), e), Aa = hi, Sa = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Pa = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), jp = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Sa,
  scaleY: Pa,
  scale: (e) => (Sa(e) + Pa(e)) / 2,
  rotateX: (e) => fi(Dt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => fi(Dt(Math.atan2(-e[2], e[0]))),
  rotateZ: Aa,
  rotate: Aa,
  skewX: (e) => Dt(Math.atan(e[4])),
  skewY: (e) => Dt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function mi(e) {
  return e.includes("scale") ? 1 : 0;
}
function pi(e, t) {
  if (!e || e === "none")
    return mi(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = jp, i = n;
  else {
    const o = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = Op, i = o;
  }
  if (!i)
    return mi(t);
  const s = r[t], a = i[1].split(",").map(zp);
  return typeof s == "function" ? s(a) : a[s];
}
const Up = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return pi(n, t);
};
function zp(e) {
  return parseFloat(e.trim());
}
const Jt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Qt = new Set(Jt), Ea = (e) => e === qt || e === j, $p = /* @__PURE__ */ new Set(["x", "y", "z"]), Wp = Jt.filter((e) => !$p.has(e));
function Hp(e) {
  const t = [];
  return Wp.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Nt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => pi(t, "x"),
  y: (e, { transform: t }) => pi(t, "y")
};
Nt.translateX = Nt.x;
Nt.translateY = Nt.y;
const Lt = /* @__PURE__ */ new Set();
let gi = !1, yi = !1, vi = !1;
function ec() {
  if (yi) {
    const e = Array.from(Lt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Hp(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, a]) => {
        r.getValue(s)?.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  yi = !1, gi = !1, Lt.forEach((e) => e.complete(vi)), Lt.clear();
}
function tc() {
  Lt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (yi = !0);
  });
}
function Kp() {
  vi = !0, tc(), ec(), vi = !1;
}
class ls {
  constructor(t, n, r, i, s, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Lt.add(this), gi || (gi = !0, ie.read(tc), ie.resolveKeyframes(ec))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const s = i?.get(), a = t[t.length - 1];
      if (s !== void 0)
        t[0] = s;
      else if (r && n) {
        const o = r.readValue(n, a);
        o != null && (t[0] = o);
      }
      t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
    }
    _p(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Lt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Lt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Gp = (e) => e.startsWith("--");
function Xp(e, t, n) {
  Gp(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Yp = /* @__PURE__ */ Yi(() => window.ScrollTimeline !== void 0), Zp = {};
function qp(e, t) {
  const n = /* @__PURE__ */ Yi(e);
  return () => Zp[t] ?? n();
}
const nc = /* @__PURE__ */ qp(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), fn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ra = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ fn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ fn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ fn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ fn([0.33, 1.53, 0.69, 0.99])
};
function rc(e, t) {
  if (e)
    return typeof e == "function" ? nc() ? ql(e, t) : "ease-out" : Ul(e) ? fn(e) : Array.isArray(e) ? e.map((n) => rc(n, t) || Ra.easeOut) : Ra[e];
}
function Jp(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: a = "loop", ease: o = "easeOut", times: l } = {}, c = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const d = rc(o, i);
  Array.isArray(d) && (u.easing = d);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: s + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return c && (h.pseudoElement = c), e.animate(u, h);
}
function ic(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Qp({ type: e, ...t }) {
  return ic(e) && nc() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class eg extends as {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: a = !1, finalKeyframe: o, onComplete: l } = t;
    this.isPseudoElement = !!s, this.allowFlatten = a, this.options = t, Xi(typeof t.type != "string");
    const c = Qp(t);
    this.animation = Jp(n, r, i, c, s), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        const u = ss(i, this.options, o, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : Xp(n, r, u), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ je(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ je(t);
  }
  get time() {
    return /* @__PURE__ */ je(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ze(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && Yp() ? (this.animation.timeline = t, Ue) : n(this);
  }
}
const sc = {
  anticipate: Bl,
  backInOut: Il,
  circInOut: Ol
};
function tg(e) {
  return e in sc;
}
function ng(e) {
  typeof e.ease == "string" && tg(e.ease) && (e.ease = sc[e.ease]);
}
const Ca = 10;
class rg extends eg {
  constructor(t) {
    ng(t), Ql(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: s, ...a } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const o = new os({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ Ze(this.finishedTime ?? this.time);
    n.setWithVelocity(o.sample(l - Ca).value, o.sample(l).value, Ca), o.stop();
  }
}
const Ma = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(pt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function ig(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function sg(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], a = Ma(i, t), o = Ma(s, t);
  return !a || !o ? !1 : ig(e) || (n === "spring" || ic(n)) && r;
}
function bi(e) {
  e.duration = 0, e.type = "keyframes";
}
const ag = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), og = /* @__PURE__ */ Yi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function lg(e) {
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: a } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return og() && n && ag.has(n) && (n !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && i !== "mirror" && s !== 0 && a !== "inertia";
}
const cg = 40;
class ug extends as {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: a = "loop", keyframes: o, name: l, motionValue: c, element: u, ...d }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ee.now();
    const h = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: a,
      name: l,
      motionValue: c,
      element: u,
      ...d
    }, f = u?.KeyframeResolver || ls;
    this.keyframeResolver = new f(o, (g, x, T) => this.onKeyframesResolved(g, x, h, !T), l, c, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: s, type: a, velocity: o, delay: l, isHandoff: c, onUpdate: u } = r;
    this.resolvedAt = Ee.now(), sg(t, s, a, o) || ((st.instantAnimations || !l) && u?.(ss(t, r, n)), t[0] = t[t.length - 1], bi(r), r.repeat = 0);
    const h = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > cg ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !c && lg(h) ? new rg({
      ...h,
      element: h.motionValue.owner.current
    }) : new os(h);
    f.finished.then(() => this.notifyFinished()).catch(Ue), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Kp()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const dg = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function hg(e) {
  const t = dg.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function ac(e, t, n = 1) {
  const [r, i] = hg(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const a = s.trim();
    return Cl(a) ? parseFloat(a) : a;
  }
  return es(i) ? ac(i, t, n + 1) : i;
}
function cs(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const oc = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jt
]), fg = {
  test: (e) => e === "auto",
  parse: (e) => e
}, lc = (e) => (t) => t.test(e), cc = [qt, j, qe, ct, ip, rp, fg], Da = (e) => cc.find(lc(e));
function mg(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Dl(e) : !0;
}
const pg = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function gg(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ts) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = pg.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const yg = /\b([a-z-]*)\(.*?\)/gu, xi = {
  ...pt,
  getAnimatableNone: (e) => {
    const t = e.match(yg);
    return t ? t.map(gg).join(" ") : e;
  }
}, Na = {
  ...qt,
  transform: Math.round
}, vg = {
  rotate: ct,
  rotateX: ct,
  rotateY: ct,
  rotateZ: ct,
  scale: Qn,
  scaleX: Qn,
  scaleY: Qn,
  scaleZ: Qn,
  skew: ct,
  skewX: ct,
  skewY: ct,
  distance: j,
  translateX: j,
  translateY: j,
  translateZ: j,
  x: j,
  y: j,
  z: j,
  perspective: j,
  transformPerspective: j,
  opacity: En,
  originX: va,
  originY: va,
  originZ: j
}, us = {
  // Border props
  borderWidth: j,
  borderTopWidth: j,
  borderRightWidth: j,
  borderBottomWidth: j,
  borderLeftWidth: j,
  borderRadius: j,
  radius: j,
  borderTopLeftRadius: j,
  borderTopRightRadius: j,
  borderBottomRightRadius: j,
  borderBottomLeftRadius: j,
  // Positioning props
  width: j,
  maxWidth: j,
  height: j,
  maxHeight: j,
  top: j,
  right: j,
  bottom: j,
  left: j,
  // Spacing props
  padding: j,
  paddingTop: j,
  paddingRight: j,
  paddingBottom: j,
  paddingLeft: j,
  margin: j,
  marginTop: j,
  marginRight: j,
  marginBottom: j,
  marginLeft: j,
  // Misc
  backgroundPositionX: j,
  backgroundPositionY: j,
  ...vg,
  zIndex: Na,
  // SVG
  fillOpacity: En,
  strokeOpacity: En,
  numOctaves: Na
}, bg = {
  ...us,
  // Color props
  color: he,
  backgroundColor: he,
  outlineColor: he,
  fill: he,
  stroke: he,
  // Border props
  borderColor: he,
  borderTopColor: he,
  borderRightColor: he,
  borderBottomColor: he,
  borderLeftColor: he,
  filter: xi,
  WebkitFilter: xi
}, uc = (e) => bg[e];
function dc(e, t) {
  let n = uc(e);
  return n !== xi && (n = pt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const xg = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function wg(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !xg.has(s) && Rn(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = dc(n, i);
}
class Tg extends ls {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), es(c))) {
        const u = ac(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !oc.has(r) || t.length !== 2)
      return;
    const [i, s] = t, a = Da(i), o = Da(s);
    if (a !== o)
      if (Ea(a) && Ea(o))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else Nt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || mg(t[i])) && r.push(i);
    r.length && wg(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Nt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1, a = r[s];
    r[s] = Nt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([o, l]) => {
      t.getValue(o).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Ag(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const hc = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Sg(e) {
  return Ml(e) && "offsetHeight" in e;
}
const La = 30, Pg = (e) => !isNaN(parseFloat(e));
class Eg {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const i = Ee.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const s of this.dependents)
          s.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ee.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Pg(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Zi());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ie.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Ee.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > La)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, La);
    return Nl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xt(e, t) {
  return new Eg(e, t);
}
const { schedule: ds } = /* @__PURE__ */ zl(queueMicrotask, !1), We = {
  x: !1,
  y: !1
};
function fc() {
  return We.x || We.y;
}
function Rg(e) {
  return e === "x" || e === "y" ? We[e] ? null : (We[e] = !0, () => {
    We[e] = !1;
  }) : We.x || We.y ? null : (We.x = We.y = !0, () => {
    We.x = We.y = !1;
  });
}
function mc(e, t) {
  const n = Ag(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Va(e) {
  return !(e.pointerType === "touch" || fc());
}
function Cg(e, t, n = {}) {
  const [r, i, s] = mc(e, n), a = (o) => {
    if (!Va(o))
      return;
    const { target: l } = o, c = t(l, o);
    if (typeof c != "function" || !l)
      return;
    const u = (d) => {
      Va(d) && (c(d), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, i);
  };
  return r.forEach((o) => {
    o.addEventListener("pointerenter", a, i);
  }), s;
}
const pc = (e, t) => t ? e === t ? !0 : pc(e, t.parentElement) : !1, hs = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Mg = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Dg(e) {
  return Mg.has(e.tagName) || e.tabIndex !== -1;
}
const sr = /* @__PURE__ */ new WeakSet();
function Fa(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Or(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Ng = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Fa(() => {
    if (sr.has(n))
      return;
    Or(n, "down");
    const i = Fa(() => {
      Or(n, "up");
    }), s = () => Or(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function ka(e) {
  return hs(e) && !fc();
}
function Lg(e, t, n = {}) {
  const [r, i, s] = mc(e, n), a = (o) => {
    const l = o.currentTarget;
    if (!ka(o))
      return;
    sr.add(l);
    const c = t(l, o), u = (f, g) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), sr.has(l) && sr.delete(l), ka(f) && typeof c == "function" && c(f, { success: g });
    }, d = (f) => {
      u(f, l === window || l === document || n.useGlobalTarget || pc(l, f.target));
    }, h = (f) => {
      u(f, !1);
    };
    window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", h, i);
  };
  return r.forEach((o) => {
    (n.useGlobalTarget ? window : o).addEventListener("pointerdown", a, i), Sg(o) && (o.addEventListener("focus", (c) => Ng(c, i)), !Dg(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
  }), s;
}
function gc(e) {
  return Ml(e) && "ownerSVGElement" in e;
}
function Vg(e) {
  return gc(e) && e.tagName === "svg";
}
const we = (e) => !!(e && e.getVelocity), Fg = [...cc, he, pt], kg = (e) => Fg.find(lc(e)), yc = fe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function Ig(e = !0) {
  const t = z(Hi);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, s = ko();
  Oe(() => {
    if (e)
      return i(s);
  }, [e]);
  const a = at(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const vc = fe({ strict: !1 }), Ia = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Yt = {};
for (const e in Ia)
  Yt[e] = {
    isEnabled: (t) => Ia[e].some((n) => !!t[n])
  };
function Bg(e) {
  for (const t in e)
    Yt[t] = {
      ...Yt[t],
      ...e[t]
    };
}
const _g = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function mr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || _g.has(e);
}
let bc = (e) => !mr(e);
function Og(e) {
  typeof e == "function" && (bc = (t) => t.startsWith("on") ? !mr(t) : e(t));
}
try {
  Og(require("@emotion/is-prop-valid").default);
} catch {
}
function jg(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (bc(i) || n === !0 && mr(i) || !t && !mr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const br = /* @__PURE__ */ fe({});
function xr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Cn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const fs = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ms = ["initial", ...fs];
function wr(e) {
  return xr(e.animate) || ms.some((t) => Cn(e[t]));
}
function xc(e) {
  return !!(wr(e) || e.variants);
}
function Ug(e, t) {
  if (wr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Cn(n) ? n : void 0,
      animate: Cn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zg(e) {
  const { initial: t, animate: n } = Ug(e, z(br));
  return ye(() => ({ initial: t, animate: n }), [Ba(t), Ba(n)]);
}
function Ba(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Mn = {};
function $g(e) {
  for (const t in e)
    Mn[t] = e[t], Qi(t) && (Mn[t].isCSSVariable = !0);
}
function wc(e, { layout: t, layoutId: n }) {
  return Qt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Mn[e] || e === "opacity");
}
const Wg = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Hg = Jt.length;
function Kg(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < Hg; s++) {
    const a = Jt[s], o = e[a];
    if (o === void 0)
      continue;
    let l = !0;
    if (typeof o == "number" ? l = o === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(o) === 0, !l || n) {
      const c = hc(o, us[a]);
      if (!l) {
        i = !1;
        const u = Wg[a] || a;
        r += `${u}(${c}) `;
      }
      n && (t[a] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function ps(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let a = !1, o = !1;
  for (const l in t) {
    const c = t[l];
    if (Qt.has(l)) {
      a = !0;
      continue;
    } else if (Qi(l)) {
      i[l] = c;
      continue;
    } else {
      const u = hc(c, us[l]);
      l.startsWith("origin") ? (o = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (a || n ? r.transform = Kg(t, e.transform, n) : r.transform && (r.transform = "none")), o) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const gs = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Tc(e, t, n) {
  for (const r in t)
    !we(t[r]) && !wc(r, n) && (e[r] = t[r]);
}
function Gg({ transformTemplate: e }, t) {
  return ye(() => {
    const n = gs();
    return ps(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Xg(e, t) {
  const n = e.style || {}, r = {};
  return Tc(r, n, e), Object.assign(r, Gg(e, t)), r;
}
function Yg(e, t) {
  const n = {}, r = Xg(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Zg = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qg = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Jg(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Zg : qg;
  e[s.offset] = j.transform(-r);
  const a = j.transform(t), o = j.transform(n);
  e[s.array] = `${a} ${o}`;
}
function Ac(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...o
}, l, c, u) {
  if (ps(e, o, c), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: h } = e;
  d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Jg(d, i, s, a, !1);
}
const Sc = () => ({
  ...gs(),
  attrs: {}
}), Pc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Qg(e, t, n, r) {
  const i = ye(() => {
    const s = Sc();
    return Ac(s, t, Pc(r), e.transformTemplate, e.style), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Tc(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
const ey = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ys(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(ey.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function ty(e, t, n, { latestValues: r }, i, s = !1) {
  const o = (ys(e) ? Qg : Yg)(t, r, i, e), l = jg(t, typeof e == "string", s), c = e !== ft ? { ...l, ...o, ref: n } : {}, { children: u } = t, d = ye(() => we(u) ? u.get() : u, [u]);
  return $(e, {
    ...c,
    children: d
  });
}
function _a(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function vs(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = _a(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = _a(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function ar(e) {
  return we(e) ? e.get() : e;
}
function ny({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return {
    latestValues: ry(n, r, i, e),
    renderState: t()
  };
}
function ry(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const h in s)
    i[h] = ar(s[h]);
  let { initial: a, animate: o } = e;
  const l = wr(e), c = xc(e);
  t && c && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), o === void 0 && (o = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || a === !1;
  const d = u ? o : a;
  if (d && typeof d != "boolean" && !xr(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let f = 0; f < h.length; f++) {
      const g = vs(e, h[f]);
      if (g) {
        const { transitionEnd: x, transition: T, ...A } = g;
        for (const w in A) {
          let S = A[w];
          if (Array.isArray(S)) {
            const D = u ? S.length - 1 : 0;
            S = S[D];
          }
          S !== null && (i[w] = S);
        }
        for (const w in x)
          i[w] = x[w];
      }
    }
  }
  return i;
}
const Ec = (e) => (t, n) => {
  const r = z(br), i = z(Hi), s = () => ny(e, t, r, i);
  return n ? s() : Bm(s);
};
function bs(e, t, n) {
  const { style: r } = e, i = {};
  for (const s in r)
    (we(r[s]) || t.style && we(t.style[s]) || wc(s, e) || n?.getValue(s)?.liveStyle !== void 0) && (i[s] = r[s]);
  return i;
}
const iy = /* @__PURE__ */ Ec({
  scrapeMotionValuesFromProps: bs,
  createRenderState: gs
});
function Rc(e, t, n) {
  const r = bs(e, t, n);
  for (const i in e)
    if (we(e[i]) || we(t[i])) {
      const s = Jt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
const sy = /* @__PURE__ */ Ec({
  scrapeMotionValuesFromProps: Rc,
  createRenderState: Sc
}), ay = Symbol.for("motionComponentSymbol");
function jt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function oy(e, t, n) {
  return at(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : jt(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const xs = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), ly = "framerAppearId", Cc = "data-" + xs(ly), Mc = fe({});
function cy(e, t, n, r, i) {
  const { visualElement: s } = z(br), a = z(vc), o = z(Hi), l = z(yc).reducedMotion, c = He(null);
  r = r || a.renderer, !c.current && r && (c.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = c.current, d = z(Mc);
  u && !u.projection && i && (u.type === "html" || u.type === "svg") && uy(c.current, n, i, d);
  const h = He(!1);
  Io(() => {
    u && h.current && u.update(n, o);
  });
  const f = n[Cc], g = He(!!f && !window.MotionHandoffIsComplete?.(f) && window.MotionHasOptimisedAnimation?.(f));
  return _m(() => {
    u && (h.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), g.current && u.animationState && u.animationState.animateChanges());
  }), Oe(() => {
    u && (!g.current && u.animationState && u.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(f);
    }), g.current = !1), u.enteringChildren = void 0);
  }), u;
}
function uy(e, t, n, r) {
  const { layoutId: i, layout: s, drag: a, dragConstraints: o, layoutScroll: l, layoutRoot: c, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Dc(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!a || o && jt(o),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c
  });
}
function Dc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Dc(e.parent);
}
function jr(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && Bg(n);
  const i = ys(e) ? sy : iy;
  function s(o, l) {
    let c;
    const u = {
      ...z(yc),
      ...o,
      layoutId: dy(o)
    }, { isStatic: d } = u, h = zg(o), f = i(o, d);
    if (!d && Wi) {
      hy();
      const g = fy(u);
      c = g.MeasureLayout, h.visualElement = cy(e, f, u, r, g.ProjectionNode);
    }
    return C(br.Provider, { value: h, children: [c && h.visualElement ? p(c, { visualElement: h.visualElement, ...u }) : null, ty(e, o, oy(f, h.visualElement, l), f, d, t)] });
  }
  s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const a = Vt(s);
  return a[ay] = e, a;
}
function dy({ layoutId: e }) {
  const t = z(Rl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function hy(e, t) {
  z(vc).strict;
}
function fy(e) {
  const { drag: t, layout: n } = Yt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function my(e, t) {
  if (typeof Proxy > "u")
    return jr;
  const n = /* @__PURE__ */ new Map(), r = (s, a) => jr(s, a, e, t), i = (s, a) => r(s, a);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, a) => a === "create" ? r : (n.has(a) || n.set(a, jr(a, void 0, e, t)), n.get(a))
  });
}
function Nc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function py({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function gy(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ur(e) {
  return e === void 0 || e === 1;
}
function wi({ scale: e, scaleX: t, scaleY: n }) {
  return !Ur(e) || !Ur(t) || !Ur(n);
}
function Et(e) {
  return wi(e) || Lc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Lc(e) {
  return Oa(e.x) || Oa(e.y);
}
function Oa(e) {
  return e && e !== "0%";
}
function pr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function ja(e, t, n, r, i) {
  return i !== void 0 && (e = pr(e, i, r)), pr(e, n, r) + t;
}
function Ti(e, t = 0, n = 1, r, i) {
  e.min = ja(e.min, t, n, r, i), e.max = ja(e.max, t, n, r, i);
}
function Vc(e, { x: t, y: n }) {
  Ti(e.x, t.translate, t.scale, t.originPoint), Ti(e.y, n.translate, n.scale, n.originPoint);
}
const Ua = 0.999999999999, za = 1.0000000000001;
function yy(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, a;
  for (let o = 0; o < i; o++) {
    s = n[o], a = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && zt(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Vc(e, a)), r && Et(s.latestValues) && zt(e, s.latestValues));
  }
  t.x < za && t.x > Ua && (t.x = 1), t.y < za && t.y > Ua && (t.y = 1);
}
function Ut(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function $a(e, t, n, r, i = 0.5) {
  const s = se(e.min, e.max, i);
  Ti(e, t, n, s, r);
}
function zt(e, t) {
  $a(e.x, t.x, t.scaleX, t.scale, t.originX), $a(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Fc(e, t) {
  return Nc(gy(e.getBoundingClientRect(), t));
}
function vy(e, t, n) {
  const r = Fc(e, n), { scroll: i } = t;
  return i && (Ut(r.x, i.offset.x), Ut(r.y, i.offset.y)), r;
}
const Wa = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $t = () => ({
  x: Wa(),
  y: Wa()
}), Ha = () => ({ min: 0, max: 0 }), ce = () => ({
  x: Ha(),
  y: Ha()
}), Ai = { current: null }, kc = { current: !1 };
function by() {
  if (kc.current = !0, !!Wi)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ai.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Ai.current = !1;
}
const xy = /* @__PURE__ */ new WeakMap();
function wy(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (we(i))
      e.addValue(r, i);
    else if (we(s))
      e.addValue(r, Xt(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Xt(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ka = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Ty {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: a }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ls, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Ee.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, ie.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.blockInitialAnimation = !!s, this.isControllingVariants = wr(n), this.isVariantNode = xc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const f = d[h];
      l[h] !== void 0 && we(f) && f.set(l[h]);
    }
  }
  mount(t) {
    this.current = t, xy.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), kc.current || by(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ai.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), mt(this.notifyUpdate), mt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Qt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ie.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Yt) {
      const n = Yt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Ka.length; r++) {
      const i = Ka[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, a = t[s];
      a && (this.propEventSubscriptions[i] = this.on(i, a));
    }
    this.prevMotionValues = wy(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Xt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Cl(r) || Dl(r)) ? r = parseFloat(r) : !kg(r) && pt.test(n) && (r = dc(t, n)), this.setBaseTarget(t, we(r) ? r.get() : r)), we(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = vs(this.props, n, this.presenceContext?.custom);
      s && (r = s[t]);
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !we(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Zi()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    ds.render(this.render);
  }
}
class Ic extends Ty {
  constructor() {
    super(...arguments), this.KeyframeResolver = Tg;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    we(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Bc(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let a;
  for (a in t)
    s[a] = t[a];
  i?.applyProjectionStyles(s, r);
  for (a in n)
    s.setProperty(a, n[a]);
}
function Ay(e) {
  return window.getComputedStyle(e);
}
class Sy extends Ic {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Bc;
  }
  readValueFromInstance(t, n) {
    if (Qt.has(n))
      return this.projection?.isProjecting ? mi(n) : Up(t, n);
    {
      const r = Ay(t), i = (Qi(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Fc(t, n);
  }
  build(t, n, r) {
    ps(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return bs(t, n, r);
  }
}
const _c = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Py(e, t, n, r) {
  Bc(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(_c.has(i) ? i : xs(i), t.attrs[i]);
}
class Ey extends Ic {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ce;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Qt.has(n)) {
      const r = uc(n);
      return r && r.default || 0;
    }
    return n = _c.has(n) ? n : xs(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Rc(t, n, r);
  }
  build(t, n, r) {
    Ac(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    Py(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Pc(t.tagName), super.mount(t);
  }
}
const Ry = (e, t) => ys(e) ? new Ey(t) : new Sy(t, {
  allowProjection: e !== ft
});
function Kt(e, t, n) {
  const r = e.getProps();
  return vs(r, t, n !== void 0 ? n : r.custom, e);
}
const Si = (e) => Array.isArray(e);
function Cy(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xt(n));
}
function My(e) {
  return Si(e) ? e[e.length - 1] || 0 : e;
}
function Dy(e, t) {
  const n = Kt(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const a in s) {
    const o = My(s[a]);
    Cy(e, a, o);
  }
}
function Ny(e) {
  return !!(we(e) && e.add);
}
function Pi(e, t) {
  const n = e.getValue("willChange");
  if (Ny(n))
    return n.add(t);
  if (!n && st.WillChange) {
    const r = new st.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Oc(e) {
  return e.props[Cc];
}
const Ly = (e) => e !== null;
function Vy(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Ly), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
const Fy = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ky = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Iy = {
  type: "keyframes",
  duration: 0.8
}, By = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, _y = (e, { keyframes: t }) => t.length > 2 ? Iy : Qt.has(e) ? e.startsWith("scale") ? ky(t[1]) : Fy : By;
function Oy({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: a, repeatDelay: o, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const ws = (e, t, n, r = {}, i, s) => (a) => {
  const o = cs(r, e) || {}, l = o.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Ze(l);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...o,
    delay: -c,
    onUpdate: (h) => {
      t.set(h), o.onUpdate && o.onUpdate(h);
    },
    onComplete: () => {
      a(), o.onComplete && o.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : i
  };
  Oy(o) || Object.assign(u, _y(e, u)), u.duration && (u.duration = /* @__PURE__ */ Ze(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ze(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (bi(u), u.delay === 0 && (d = !0)), (st.instantAnimations || st.skipAnimations) && (d = !0, bi(u), u.delay = 0), u.allowFlatten = !o.type && !o.ease, d && !s && t.get() !== void 0) {
    const h = Vy(u.keyframes, o);
    if (h !== void 0) {
      ie.update(() => {
        u.onUpdate(h), u.onComplete();
      });
      return;
    }
  }
  return o.isSync ? new os(u) : new ug(u);
};
function jy({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function jc(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...o } = t;
  r && (s = r);
  const l = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const u in o) {
    const d = e.getValue(u, e.latestValues[u] ?? null), h = o[u];
    if (h === void 0 || c && jy(c, u))
      continue;
    const f = {
      delay: n,
      ...cs(s || {}, u)
    }, g = d.get();
    if (g !== void 0 && !d.isAnimating && !Array.isArray(h) && h === g && !f.velocity)
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const A = Oc(e);
      if (A) {
        const w = window.MotionHandoffAnimation(A, u, ie);
        w !== null && (f.startTime = w, x = !0);
      }
    }
    Pi(e, u), d.start(ws(u, d, h, e.shouldReduceMotion && oc.has(u) ? { type: !1 } : f, e, x));
    const T = d.animation;
    T && l.push(T);
  }
  return a && Promise.all(l).then(() => {
    ie.update(() => {
      a && Dy(e, a);
    });
  }), l;
}
function Uc(e, t, n, r = 0, i = 1) {
  const s = Array.from(e).sort((c, u) => c.sortNodePosition(u)).indexOf(t), a = e.size, o = (a - 1) * r;
  return typeof n == "function" ? n(s, a) : i === 1 ? s * r : o - s * r;
}
function Ei(e, t, n = {}) {
  const r = Kt(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(jc(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = i;
    return Uy(e, t, l, c, u, d, n);
  } : () => Promise.resolve(), { when: o } = i;
  if (o) {
    const [l, c] = o === "beforeChildren" ? [s, a] : [a, s];
    return l().then(() => c());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function Uy(e, t, n = 0, r = 0, i = 0, s = 1, a) {
  const o = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), o.push(Ei(l, t, {
      ...a,
      delay: n + (typeof r == "function" ? 0 : r) + Uc(e.variantChildren, l, r, i, s)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(o);
}
function zy(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ei(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = Ei(e, t, n);
  else {
    const i = typeof t == "function" ? Kt(e, t, n.custom) : t;
    r = Promise.all(jc(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function zc(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const $y = ms.length;
function $c(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? $c(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < $y; n++) {
    const r = ms[n], i = e.props[r];
    (Cn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Wy = [...fs].reverse(), Hy = fs.length;
function Ky(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => zy(e, n, r)));
}
function Gy(e) {
  let t = Ky(e), n = Ga(), r = !0;
  const i = (l) => (c, u) => {
    const d = Kt(e, u, l === "exit" ? e.presenceContext?.custom : void 0);
    if (d) {
      const { transition: h, transitionEnd: f, ...g } = d;
      c = { ...c, ...g, ...f };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function a(l) {
    const { props: c } = e, u = $c(e.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let f = {}, g = 1 / 0;
    for (let T = 0; T < Hy; T++) {
      const A = Wy[T], w = n[A], S = c[A] !== void 0 ? c[A] : u[A], D = Cn(S), M = A === l ? w.isActive : null;
      M === !1 && (g = T);
      let B = S === u[A] && S !== c[A] && D;
      if (B && r && e.manuallyAnimateOnMount && (B = !1), w.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !S && !w.prevProp || // Or if the prop doesn't define an animation
      xr(S) || typeof S == "boolean")
        continue;
      const v = Xy(w.prevProp, S);
      let E = v || // If we're making this variant active, we want to always make it active
      A === l && w.isActive && !B && D || // If we removed a higher-priority variant (i is in reverse order)
      T > g && D, I = !1;
      const H = Array.isArray(S) ? S : [S];
      let G = H.reduce(i(A), {});
      M === !1 && (G = {});
      const { prevResolvedValues: ee = {} } = w, Se = {
        ...ee,
        ...G
      }, Y = (Q) => {
        E = !0, h.has(Q) && (I = !0, h.delete(Q)), w.needsAnimating[Q] = !0;
        const W = e.getValue(Q);
        W && (W.liveStyle = !1);
      };
      for (const Q in Se) {
        const W = G[Q], re = ee[Q];
        if (f.hasOwnProperty(Q))
          continue;
        let le = !1;
        Si(W) && Si(re) ? le = !zc(W, re) : le = W !== re, le ? W != null ? Y(Q) : h.add(Q) : W !== void 0 && h.has(Q) ? Y(Q) : w.protectedKeys[Q] = !0;
      }
      w.prevProp = S, w.prevResolvedValues = G, w.isActive && (f = { ...f, ...G }), r && e.blockInitialAnimation && (E = !1);
      const X = B && v;
      E && (!X || I) && d.push(...H.map((Q) => {
        const W = { type: A };
        if (typeof Q == "string" && r && !X && e.manuallyAnimateOnMount && e.parent) {
          const { parent: re } = e, le = Kt(re, Q);
          if (re.enteringChildren && le) {
            const { delayChildren: Re } = le.transition || {};
            W.delay = Uc(re.enteringChildren, e, Re);
          }
        }
        return {
          animation: Q,
          options: W
        };
      }));
    }
    if (h.size) {
      const T = {};
      if (typeof c.initial != "boolean") {
        const A = Kt(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        A && A.transition && (T.transition = A.transition);
      }
      h.forEach((A) => {
        const w = e.getBaseTarget(A), S = e.getValue(A);
        S && (S.liveStyle = !0), T[A] = w ?? null;
      }), d.push({ animation: T });
    }
    let x = !!d.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(d) : Promise.resolve();
  }
  function o(l, c) {
    if (n[l].isActive === c)
      return Promise.resolve();
    e.variantChildren?.forEach((d) => d.animationState?.setActive(l, c)), n[l].isActive = c;
    const u = a(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Ga();
    }
  };
}
function Xy(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zc(t, e) : !1;
}
function Pt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ga() {
  return {
    animate: Pt(!0),
    whileInView: Pt(),
    whileHover: Pt(),
    whileTap: Pt(),
    whileDrag: Pt(),
    whileFocus: Pt(),
    exit: Pt()
  };
}
class vt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Yy extends vt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Gy(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    xr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Zy = 0;
class qy extends vt {
  constructor() {
    super(...arguments), this.id = Zy++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Jy = {
  animation: {
    Feature: Yy
  },
  exit: {
    Feature: qy
  }
};
function Dn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function On(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Qy = (e) => (t) => hs(t) && e(t, On(t));
function yn(e, t, n, r) {
  return Dn(e, t, Qy(n), r);
}
const Wc = 1e-4, e0 = 1 - Wc, t0 = 1 + Wc, Hc = 0.01, n0 = 0 - Hc, r0 = 0 + Hc;
function Ae(e) {
  return e.max - e.min;
}
function i0(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Xa(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = se(t.min, t.max, e.origin), e.scale = Ae(n) / Ae(t), e.translate = se(n.min, n.max, e.origin) - e.originPoint, (e.scale >= e0 && e.scale <= t0 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= n0 && e.translate <= r0 || isNaN(e.translate)) && (e.translate = 0);
}
function vn(e, t, n, r) {
  Xa(e.x, t.x, n.x, r ? r.originX : void 0), Xa(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ya(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ae(t);
}
function s0(e, t, n) {
  Ya(e.x, t.x, n.x), Ya(e.y, t.y, n.y);
}
function Za(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ae(t);
}
function bn(e, t, n) {
  Za(e.x, t.x, n.x), Za(e.y, t.y, n.y);
}
function Ie(e) {
  return [e("x"), e("y")];
}
const Kc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, qa = (e, t) => Math.abs(e - t);
function a0(e, t) {
  const n = qa(e.x, t.x), r = qa(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Gc {
  constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: s = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = $r(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, g = a0(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !g)
        return;
      const { point: x } = h, { timestamp: T } = ge;
      this.history.push({ ...x, timestamp: T });
      const { onStart: A, onMove: w } = this.handlers;
      f || (A && A(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, f) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = zr(f, this.transformPagePoint), ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, f) => {
      this.end();
      const { onEnd: g, onSessionEnd: x, resumeAnimation: T } = this.handlers;
      if (this.dragSnapToOrigin && T && T(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const A = $r(h.type === "pointercancel" ? this.lastMoveEventInfo : zr(f, this.transformPagePoint), this.history);
      this.startEvent && g && g(h, A), x && x(h, A);
    }, !hs(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = i || window;
    const o = On(t), l = zr(o, this.transformPagePoint), { point: c } = l, { timestamp: u } = ge;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, $r(l, this.history)), this.removeListeners = In(yn(this.contextWindow, "pointermove", this.handlePointerMove), yn(this.contextWindow, "pointerup", this.handlePointerUp), yn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), mt(this.updatePoint);
  }
}
function zr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ja(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $r({ point: e }, t) {
  return {
    point: e,
    delta: Ja(e, Xc(t)),
    offset: Ja(e, o0(t)),
    velocity: l0(t, 0.1)
  };
}
function o0(e) {
  return e[0];
}
function Xc(e) {
  return e[e.length - 1];
}
function l0(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = Xc(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ Ze(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ je(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function c0(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)), e;
}
function Qa(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function u0(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Qa(e.x, n, i),
    y: Qa(e.y, t, r)
  };
}
function eo(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function d0(e, t) {
  return {
    x: eo(e.x, t.x),
    y: eo(e.y, t.y)
  };
}
function h0(e, t) {
  let n = 0.5;
  const r = Ae(e), i = Ae(t);
  return i > r ? n = /* @__PURE__ */ Pn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Pn(e.min, e.max - i, t.min)), it(0, 1, n);
}
function f0(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ri = 0.35;
function m0(e = Ri) {
  return e === !1 ? e = 0 : e === !0 && (e = Ri), {
    x: to(e, "left", "right"),
    y: to(e, "top", "bottom")
  };
}
function to(e, t, n) {
  return {
    min: no(e, t),
    max: no(e, n)
  };
}
function no(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const p0 = /* @__PURE__ */ new WeakMap();
class g0 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ce(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (d) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(On(d).point);
    }, a = (d, h) => {
      const { drag: f, dragPropagation: g, onDragStart: x } = this.getProps();
      if (f && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = Rg(f), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ie((A) => {
        let w = this.getAxisMotionValue(A).get() || 0;
        if (qe.test(w)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const D = S.layout.layoutBox[A];
            D && (w = Ae(D) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[A] = w;
      }), x && ie.postRender(() => x(d, h)), Pi(this.visualElement, "transform");
      const { animationState: T } = this.visualElement;
      T && T.setActive("whileDrag", !0);
    }, o = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h;
      const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: x, onDrag: T } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: A } = h;
      if (g && this.currentDirection === null) {
        this.currentDirection = y0(A), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, A), this.updateAxis("y", h.point, A), this.visualElement.render(), T && T(d, h);
    }, l = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h, this.stop(d, h), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => Ie((d) => this.getAnimationState(d) === "paused" && this.getAxisMotionValue(d).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Gc(t, {
      onSessionStart: s,
      onStart: a,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: Kc(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, i = n || this.latestPanInfo, s = this.isDragging;
    if (this.cancel(), !s || !i || !r)
      return;
    const { velocity: a } = i;
    this.startAnimation(a);
    const { onDragEnd: o } = this.getProps();
    o && ie.postRender(() => o(r, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !er(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = c0(a, this.constraints[t], this.elastic[t])), s.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    t && jt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = u0(r.layoutBox, t) : this.constraints = !1, this.elastic = m0(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Ie((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = f0(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !jt(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = vy(r, i.root, this.visualElement.getTransformPagePoint());
    let a = d0(i.layout.layoutBox, s);
    if (n) {
      const o = n(py(a));
      this.hasMutatedConstraints = !!o, o && (a = Nc(o));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), l = this.constraints || {}, c = Ie((u) => {
      if (!er(u, n, this.currentDirection))
        return;
      let d = l && l[u] || {};
      a && (d = { min: 0, max: 0 });
      const h = i ? 200 : 1e6, f = i ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(c).then(o);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Pi(this.visualElement, t), r.start(ws(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!er(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: o } = i.layout.layoutBox[n];
        s.set(t[n] - se(a, o, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!jt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((a) => {
      const o = this.getAxisMotionValue(a);
      if (o && this.constraints !== !1) {
        const l = o.get();
        i[a] = h0({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Ie((a) => {
      if (!er(a, t, null))
        return;
      const o = this.getAxisMotionValue(a), { min: l, max: c } = this.constraints[a];
      o.set(se(l, c, i[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    p0.set(this.visualElement, this);
    const t = this.visualElement.current, n = yn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      jt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ie.read(r);
    const a = Dn(window, "resize", () => this.scalePositionWithinConstraints()), o = i.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Ie((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), s(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: a = Ri, dragMomentum: o = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: a,
      dragMomentum: o
    };
  }
}
function er(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function y0(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class v0 extends vt {
  constructor(t) {
    super(t), this.removeGroupControls = Ue, this.removeListeners = Ue, this.controls = new g0(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ue;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ro = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class b0 extends vt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ue;
  }
  onPointerDown(t) {
    this.session = new Gc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: ro(t),
      onStart: ro(n),
      onMove: r,
      onEnd: (s, a) => {
        delete this.session, i && ie.postRender(() => i(s, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const or = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function io(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const cn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (j.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = io(e, t.target.x), r = io(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, x0 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = pt.parse(e);
    if (i.length > 5)
      return r;
    const s = pt.createTransformer(e), a = typeof i[0] != "number" ? 1 : 0, o = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + a] /= o, i[1 + a] /= l;
    const c = se(o, l, 0.5);
    return typeof i[2 + a] == "number" && (i[2 + a] /= c), typeof i[3 + a] == "number" && (i[3 + a] /= c), s(i);
  }
};
let Wr = !1;
class w0 extends Mi {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    $g(T0), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), Wr && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), or.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, { projection: a } = r;
    return a && (a.isPresent = s, Wr = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? a.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? a.promote() : a.relegate() || ie.postRender(() => {
      const o = a.getStack();
      (!o || !o.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), ds.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    Wr = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Yc(e) {
  const [t, n] = Ig(), r = z(Rl);
  return p(w0, { ...e, layoutGroup: r, switchLayoutGroup: z(Mc), isPresent: t, safeToRemove: n });
}
const T0 = {
  borderRadius: {
    ...cn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: cn,
  borderTopRightRadius: cn,
  borderBottomLeftRadius: cn,
  borderBottomRightRadius: cn,
  boxShadow: x0
};
function A0(e, t, n) {
  const r = we(e) ? e : Xt(e);
  return r.start(ws("", r, t, n)), r.animation;
}
const S0 = (e, t) => e.depth - t.depth;
class P0 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Ki(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Gi(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(S0), this.isDirty = !1, this.children.forEach(t);
  }
}
function E0(e, t) {
  const n = Ee.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (mt(r), e(s - t));
  };
  return ie.setup(r, !0), () => mt(r);
}
const Zc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], R0 = Zc.length, so = (e) => typeof e == "string" ? parseFloat(e) : e, ao = (e) => typeof e == "number" || j.test(e);
function C0(e, t, n, r, i, s) {
  i ? (e.opacity = se(0, n.opacity ?? 1, M0(r)), e.opacityExit = se(t.opacity ?? 1, 0, D0(r))) : s && (e.opacity = se(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < R0; a++) {
    const o = `border${Zc[a]}Radius`;
    let l = oo(t, o), c = oo(n, o);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || ao(l) === ao(c) ? (e[o] = Math.max(se(so(l), so(c), r), 0), (qe.test(c) || qe.test(l)) && (e[o] += "%")) : e[o] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function oo(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const M0 = /* @__PURE__ */ qc(0, 0.5, _l), D0 = /* @__PURE__ */ qc(0.5, 0.95, Ue);
function qc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Pn(e, t, r));
}
function lo(e, t) {
  e.min = t.min, e.max = t.max;
}
function ke(e, t) {
  lo(e.x, t.x), lo(e.y, t.y);
}
function co(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function uo(e, t, n, r, i) {
  return e -= t, e = pr(e, 1 / n, r), i !== void 0 && (e = pr(e, 1 / i, r)), e;
}
function N0(e, t = 0, n = 1, r = 0.5, i, s = e, a = e) {
  if (qe.test(t) && (t = parseFloat(t), t = se(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let o = se(s.min, s.max, r);
  e === s && (o -= t), e.min = uo(e.min, t, n, o, i), e.max = uo(e.max, t, n, o, i);
}
function ho(e, t, [n, r, i], s, a) {
  N0(e, t[n], t[r], t[i], t.scale, s, a);
}
const L0 = ["x", "scaleX", "originX"], V0 = ["y", "scaleY", "originY"];
function fo(e, t, n, r) {
  ho(e.x, t, L0, n ? n.x : void 0, r ? r.x : void 0), ho(e.y, t, V0, n ? n.y : void 0, r ? r.y : void 0);
}
function mo(e) {
  return e.translate === 0 && e.scale === 1;
}
function Jc(e) {
  return mo(e.x) && mo(e.y);
}
function po(e, t) {
  return e.min === t.min && e.max === t.max;
}
function F0(e, t) {
  return po(e.x, t.x) && po(e.y, t.y);
}
function go(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Qc(e, t) {
  return go(e.x, t.x) && go(e.y, t.y);
}
function yo(e) {
  return Ae(e.x) / Ae(e.y);
}
function vo(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class k0 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ki(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Gi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function I0(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, a = n?.z || 0;
  if ((i || s || a) && (r = `translate3d(${i}px, ${s}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: h, skewX: f, skewY: g } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), f && (r += `skewX(${f}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const o = e.x.scale * t.x, l = e.y.scale * t.y;
  return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`), r || "none";
}
const Hr = ["", "X", "Y", "Z"], B0 = 1e3;
let _0 = 0;
function Kr(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function eu(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Oc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && eu(r);
}
function tu({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(a = {}, o = t?.()) {
      this.id = _0++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(U0), this.nodes.forEach(H0), this.nodes.forEach(K0), this.nodes.forEach(z0);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new P0());
    }
    addEventListener(a, o) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Zi()), this.eventHandlers.get(a).add(o);
    }
    notifyListeners(a, ...o) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...o);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a) {
      if (this.instance)
        return;
      this.isSVG = gc(a) && !Vg(a), this.instance = a;
      const { layoutId: o, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || o) && (this.isLayoutDirty = !0), e) {
        let u, d = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        ie.read(() => {
          d = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== d && (d = f, this.root.updateBlockedByResize = !0, u && u(), u = E0(h, 250), or.hasAnimatedSinceResize && (or.hasAnimatedSinceResize = !1, this.nodes.forEach(wo)));
        });
      }
      o && this.root.registerSharedNode(o, this), this.options.animate !== !1 && c && (o || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: d, hasRelativeLayoutChanged: h, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || q0, { onLayoutAnimationStart: x, onLayoutAnimationComplete: T } = c.getProps(), A = !this.targetLayout || !Qc(this.targetLayout, f), w = !d && h;
        if (this.options.layoutRoot || this.resumeFrom || w || d && (A || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const S = {
            ...cs(g, "layout"),
            onPlay: x,
            onComplete: T
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S), this.setAnimationOrigin(u, w);
        } else
          d || wo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), mt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(G0), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && eu(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: o, layout: l } = this.options;
      if (o === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(bo);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(xo);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(W0), this.nodes.forEach(O0), this.nodes.forEach(j0)) : this.nodes.forEach(xo), this.clearAllSnapshots();
      const o = Ee.now();
      ge.delta = it(0, 1e3 / 60, o - ge.timestamp), ge.timestamp = o, ge.isProcessing = !0, Fr.update.process(ge), Fr.preRender.process(ge), Fr.render.process(ge), ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ds.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach($0), this.sharedNodes.forEach(X0);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ae(this.snapshot.measuredBox.x) && !Ae(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ce(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o && o.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (o = !1), o && this.instance) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !Jc(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      a && this.instance && (o || Et(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const o = this.measurePageBox();
      let l = this.removeElementScroll(o);
      return a && (l = this.removeTransform(l)), J0(l), {
        animationId: this.root.animationId,
        measuredBox: o,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return ce();
      const o = a.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Q0))) {
        const { scroll: c } = this.root;
        c && (Ut(o.x, c.offset.x), Ut(o.y, c.offset.y));
      }
      return o;
    }
    removeElementScroll(a) {
      const o = ce();
      if (ke(o, a), this.scroll?.wasRoot)
        return o;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        c !== this.root && u && d.layoutScroll && (u.wasRoot && ke(o, a), Ut(o.x, u.offset.x), Ut(o.y, u.offset.y));
      }
      return o;
    }
    applyTransform(a, o = !1) {
      const l = ce();
      ke(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !o && u.options.layoutScroll && u.scroll && u !== u.root && zt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Et(u.latestValues) && zt(l, u.latestValues);
      }
      return Et(this.latestValues) && zt(l, this.latestValues), l;
    }
    removeTransform(a) {
      const o = ce();
      ke(o, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Et(c.latestValues))
          continue;
        wi(c.latestValues) && c.updateSnapshot();
        const u = ce(), d = c.measurePageBox();
        ke(u, d), fo(o, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Et(this.latestValues) && fo(o, this.latestValues), o;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      const o = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== o;
      if (!(a || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (this.resolvedRelativeTargetAt = ge.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), bn(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ce(), this.targetWithTransforms = ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), s0(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ke(this.target, this.layout.layoutBox), Vc(this.target, this.targetDelta)) : ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const h = this.getClosestProjectingParent();
          h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), bn(this.relativeTargetOrigin, this.target, h.target), ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wi(this.parent.latestValues) || Lc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const a = this.getLead(), o = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ge.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      ke(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, h = this.treeScale.y;
      yy(this.layoutCorrected, this.treeScale, this.path, o), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ce());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (co(this.prevProjectionDelta.x, this.projectionDelta.x), co(this.prevProjectionDelta.y, this.projectionDelta.y)), vn(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !vo(this.projectionDelta.x, this.prevProjectionDelta.x) || !vo(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.visualElement?.scheduleRender(), a) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = $t(), this.projectionDelta = $t(), this.projectionDeltaWithTransform = $t();
    }
    setAnimationOrigin(a, o = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = $t();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
      const h = ce(), f = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, x = f !== g, T = this.getStack(), A = !T || T.members.length <= 1, w = !!(x && !A && this.options.crossfade === !0 && !this.path.some(Z0));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (D) => {
        const M = D / 1e3;
        To(d.x, a.x, M), To(d.y, a.y, M), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Y0(this.relativeTarget, this.relativeTargetOrigin, h, M), S && F0(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = ce()), ke(S, this.relativeTarget)), x && (this.animationValues = u, C0(u, c, this.latestValues, M, w, A)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = M;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (mt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
        or.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Xt(0)), this.currentAnimation = A0(this.motionValue, [0, 1e3], {
          ...a,
          velocity: 0,
          isSync: !0,
          onUpdate: (o) => {
            this.mixTargetDelta(o), a.onUpdate && a.onUpdate(o);
          },
          onStop: () => {
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(B0), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: o, target: l, layout: c, latestValues: u } = a;
      if (!(!o || !l || !c)) {
        if (this !== a && this.layout && c && nu(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ce();
          const d = Ae(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const h = Ae(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + h;
        }
        ke(o, l), zt(o, u), vn(this.projectionDeltaWithTransform, this.layoutCorrected, o, u);
      }
    }
    registerSharedNode(a, o) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new k0()), this.sharedNodes.get(a).add(o);
      const c = o.options.initialPromotionConfig;
      o.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(o) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: o, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), o && this.setOptions({ transition: o });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let o = !1;
      const { latestValues: l } = a;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (o = !0), !o)
        return;
      const c = {};
      l.z && Kr("z", a, c, this.animationValues);
      for (let u = 0; u < Hr.length; u++)
        Kr(`rotate${Hr[u]}`, a, c, this.animationValues), Kr(`skew${Hr[u]}`, a, c, this.animationValues);
      a.render();
      for (const u in c)
        a.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      a.scheduleRender();
    }
    applyProjectionStyles(a, o) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        a.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = ar(o?.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = ar(o?.pointerEvents) || ""), this.hasProjected && !Et(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let d = I0(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (d = l(u, d)), a.transform = d;
      const { x: h, y: f } = this.projectionDelta;
      a.transformOrigin = `${h.origin * 100}% ${f.origin * 100}% 0`, c.animationValues ? a.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const g in Mn) {
        if (u[g] === void 0)
          continue;
        const { correct: x, applyTo: T, isCSSVariable: A } = Mn[g], w = d === "none" ? u[g] : x(u[g], c);
        if (T) {
          const S = T.length;
          for (let D = 0; D < S; D++)
            a[T[D]] = w;
        } else
          A ? this.options.visualElement.renderState.vars[g] = w : a[g] = w;
      }
      this.options.layoutId && (a.pointerEvents = c === this ? ar(o?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => a.currentAnimation?.stop()), this.root.nodes.forEach(bo), this.root.sharedNodes.clear();
    }
  };
}
function O0(e) {
  e.updateLayout();
}
function j0(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, s = t.source !== e.layout.source;
    i === "size" ? Ie((u) => {
      const d = s ? t.measuredBox[u] : t.layoutBox[u], h = Ae(d);
      d.min = n[u].min, d.max = d.min + h;
    }) : nu(i, t.layoutBox, n) && Ie((u) => {
      const d = s ? t.measuredBox[u] : t.layoutBox[u], h = Ae(n[u]);
      d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const a = $t();
    vn(a, n, t.layoutBox);
    const o = $t();
    s ? vn(o, e.applyTransform(r, !0), t.measuredBox) : vn(o, n, t.layoutBox);
    const l = !Jc(a);
    let c = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: d, layout: h } = u;
        if (d && h) {
          const f = ce();
          bn(f, t.layoutBox, d.layoutBox);
          const g = ce();
          bn(g, n, h.layoutBox), Qc(f, g) || (c = !0), u.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = f, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: o,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function U0(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function z0(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function $0(e) {
  e.clearSnapshot();
}
function bo(e) {
  e.clearMeasurements();
}
function xo(e) {
  e.isLayoutDirty = !1;
}
function W0(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function wo(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function H0(e) {
  e.resolveTargetDelta();
}
function K0(e) {
  e.calcProjection();
}
function G0(e) {
  e.resetSkewAndRotation();
}
function X0(e) {
  e.removeLeadSnapshot();
}
function To(e, t, n) {
  e.translate = se(t.translate, 0, n), e.scale = se(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ao(e, t, n, r) {
  e.min = se(t.min, n.min, r), e.max = se(t.max, n.max, r);
}
function Y0(e, t, n, r) {
  Ao(e.x, t.x, n.x, r), Ao(e.y, t.y, n.y, r);
}
function Z0(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const q0 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, So = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Po = So("applewebkit/") && !So("chrome/") ? Math.round : Ue;
function Eo(e) {
  e.min = Po(e.min), e.max = Po(e.max);
}
function J0(e) {
  Eo(e.x), Eo(e.y);
}
function nu(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !i0(yo(t), yo(n), 0.2);
}
function Q0(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const ev = tu({
  attachResizeListener: (e, t) => Dn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Gr = {
  current: void 0
}, ru = tu({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Gr.current) {
      const e = new ev({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Gr.current = e;
    }
    return Gr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), tv = {
  pan: {
    Feature: b0
  },
  drag: {
    Feature: v0,
    ProjectionNode: ru,
    MeasureLayout: Yc
  }
};
function Ro(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, s = r[i];
  s && ie.postRender(() => s(t, On(t)));
}
class nv extends vt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Cg(t, (n, r) => (Ro(this.node, r, "Start"), (i) => Ro(this.node, i, "End"))));
  }
  unmount() {
  }
}
class rv extends vt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = In(Dn(this.node.current, "focus", () => this.onFocus()), Dn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Co(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), s = r[i];
  s && ie.postRender(() => s(t, On(t)));
}
class iv extends vt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Lg(t, (n, r) => (Co(this.node, r, "Start"), (i, { success: s }) => Co(this.node, i, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ci = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), sv = (e) => {
  const t = Ci.get(e.target);
  t && t(e);
}, av = (e) => {
  e.forEach(sv);
};
function ov({ root: e, ...t }) {
  const n = e || document;
  Xr.has(n) || Xr.set(n, {});
  const r = Xr.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(av, { root: e, ...t })), r[i];
}
function lv(e, t, n) {
  const r = ov(t);
  return Ci.set(e, n), r.observe(e), () => {
    Ci.delete(e), r.unobserve(e);
  };
}
const cv = {
  some: 0,
  all: 1
};
class uv extends vt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : cv[i]
    }, o = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), h = c ? u : d;
      h && h(l);
    };
    return lv(this.node.current, a, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(dv(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function dv({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const hv = {
  inView: {
    Feature: uv
  },
  tap: {
    Feature: iv
  },
  focus: {
    Feature: rv
  },
  hover: {
    Feature: nv
  }
}, fv = {
  layout: {
    ProjectionNode: ru,
    MeasureLayout: Yc
  }
}, mv = {
  ...Jy,
  ...hv,
  ...tv,
  ...fv
}, Mo = /* @__PURE__ */ my(mv, Ry);
function pv() {
  const { id: e } = _i(), t = Ht.find((r) => r.id === Number(e));
  if (!t)
    return /* @__PURE__ */ p("div", { className: "min-h-screen flex items-center justify-center p-6 text-center", children: /* @__PURE__ */ C("div", { children: [
      /* @__PURE__ */ p("h2", { className: "text-2xl mb-4", style: { fontFamily: "'Noto Serif TC', serif" }, children: "找不到該症狀" }),
      /* @__PURE__ */ p(ue, { to: "/", className: "text-primary hover:underline", children: "返回首頁" })
    ] }) });
  const n = Sl(t.name);
  return /* @__PURE__ */ C("div", { className: "min-h-screen bg-neutral-50 pb-20", children: [
    /* @__PURE__ */ C("header", { className: "bg-white px-6 py-4 border-b border-gray-100 flex items-center sticky top-0 z-10", children: [
      /* @__PURE__ */ p(ue, { to: "/", className: "mr-4 text-gray-600 hover:text-black", children: /* @__PURE__ */ p(Pf, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ p(
        "h1",
        {
          className: "text-xl flex-1 text-center pr-10",
          style: { fontFamily: "'Noto Serif TC', serif" },
          children: t.name
        }
      )
    ] }),
    /* @__PURE__ */ C("div", { className: "max-w-md mx-auto px-6 py-8", children: [
      /* @__PURE__ */ C("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ p(
          Mo.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "inline-block p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-6",
            children: /* @__PURE__ */ p(
              "img",
              {
                src: t.imageUrl,
                alt: t.name,
                className: "w-32 h-32 object-contain mx-auto"
              }
            )
          }
        ),
        /* @__PURE__ */ p(
          "h2",
          {
            className: "text-2xl mb-2",
            style: { fontFamily: "'Noto Serif TC', serif" },
            children: "推薦緩解穴位"
          }
        ),
        /* @__PURE__ */ C("p", { className: "text-sm text-gray-500", children: [
          "針對您的「",
          t.name,
          "」症狀，建議按壓以下穴位："
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: "space-y-12", children: n.length > 0 ? n.map((r, i) => {
        const s = Gt(r.videoUrl);
        return /* @__PURE__ */ C(
          Mo.section,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1 },
            className: "bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100",
            children: [
              /* @__PURE__ */ p("div", { className: "aspect-video w-full bg-black relative", children: /* @__PURE__ */ p(
                "iframe",
                {
                  src: `https://www.youtube.com/embed/${s}`,
                  title: r.name,
                  className: "w-full h-full",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: !0
                }
              ) }),
              /* @__PURE__ */ C("div", { className: "p-6", children: [
                /* @__PURE__ */ C("div", { className: "flex justify-between items-start mb-4", children: [
                  /* @__PURE__ */ C("div", { children: [
                    /* @__PURE__ */ p(
                      "h3",
                      {
                        className: "text-2xl mb-1",
                        style: { fontFamily: "'Noto Serif TC', serif" },
                        children: r.name
                      }
                    ),
                    /* @__PURE__ */ p("p", { className: "text-xs text-primary font-medium tracking-wider uppercase", children: "Acupoint recommendation" })
                  ] }),
                  /* @__PURE__ */ p(
                    ue,
                    {
                      to: `/acupoint/${r.id}`,
                      className: "text-xs px-3 py-1 bg-neutral-100 rounded-full text-gray-600 hover:bg-neutral-200 transition-colors",
                      children: "詳細資訊"
                    }
                  )
                ] }),
                /* @__PURE__ */ C("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ C("div", { className: "p-4 bg-neutral-50 rounded-xl", children: [
                    /* @__PURE__ */ C("h4", { className: "text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ p("span", { className: "w-1.5 h-1.5 bg-primary rounded-full" }),
                      "改善方式與功效"
                    ] }),
                    /* @__PURE__ */ p("p", { className: "text-sm text-gray-600 leading-relaxed", children: r.description })
                  ] }),
                  /* @__PURE__ */ C("div", { children: [
                    /* @__PURE__ */ p("h4", { className: "text-sm font-semibold text-gray-900 mb-2", children: "按壓方法" }),
                    /* @__PURE__ */ p("ul", { className: "space-y-2", children: r.instructions.map((a, o) => /* @__PURE__ */ C("li", { className: "text-sm text-gray-600 flex gap-2", children: [
                      /* @__PURE__ */ C("span", { className: "text-primary font-bold", children: [
                        o + 1,
                        "."
                      ] }),
                      a
                    ] }, o)) })
                  ] })
                ] })
              ] })
            ]
          },
          r.id
        );
      }) : /* @__PURE__ */ p("div", { className: "text-center py-10 text-gray-400", children: /* @__PURE__ */ p("p", { children: "暫無針對此症狀的專門穴位推薦" }) }) }),
      /* @__PURE__ */ p("div", { className: "mt-12 text-center p-6 border-t border-gray-100", children: /* @__PURE__ */ C("p", { className: "text-xs text-gray-400 leading-relaxed italic", children: [
        "* 按壓時請保持放鬆，力度以感到微酸脹為宜。",
        /* @__PURE__ */ p("br", {}),
        "若症狀持續不退，建議諮詢醫療專業人員。"
      ] }) })
    ] })
  ] });
}
function gv() {
  return /* @__PURE__ */ p("div", { className: "min-h-screen flex items-center justify-center px-4", children: /* @__PURE__ */ C("div", { className: "text-center", children: [
    /* @__PURE__ */ p("h1", { className: "text-4xl mb-4", style: { fontFamily: "'Noto Serif TC', serif" }, children: "找不到頁面" }),
    /* @__PURE__ */ p("p", { className: "text-gray-600 mb-6", children: "抱歉，您訪問的頁面不存在" }),
    /* @__PURE__ */ p(
      ue,
      {
        to: "/",
        className: "inline-block px-6 py-3 bg-primary text-white rounded-lg",
        children: "返回首頁"
      }
    )
  ] }) });
}
const yv = nf([
  {
    path: "/",
    Component: Wf,
    children: [
      { index: !0, Component: Nm },
      { path: "search", Component: Lm },
      { path: "topics", Component: Fm },
      { path: "topics/:id", Component: km },
      { path: "acupoint/:id", Component: Im },
      { path: "symptom/:id", Component: pv },
      { path: "*", Component: gv }
    ]
  }
]);
function vv() {
  return /* @__PURE__ */ p(Rh, { router: yv });
}
const bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vv
}, Symbol.toStringTag, { value: "Module" }));
export {
  xv as Code0_8
};
