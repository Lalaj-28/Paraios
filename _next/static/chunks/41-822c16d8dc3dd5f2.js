// Next.js component chunk 4

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41], {
        2757: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                formatUrl: function() {
                    return u
                },
                formatWithValidation: function() {
                    return i
                },
                urlObjectKeys: function() {
                    return a
                }
            });
            let r = n(6966)._(n(8859)),
                o = /https?|ftp|gopher|file/;
 
            function u(e) {
                let {
                    auth: t,
                    hostname: n
                } = e, u = e.protocol || "", a = e.pathname || "", i = e.hash || "", l = e.query || "", s = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? s = t + e.host : n && (s = t + (~n.indexOf(":") ? "[" + n + "]" : n), e.port && (s += ":" + e.port)), l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l)));
                let c = e.search || l && "?" + l || "";
                return u && !u.endsWith(":") && (u += ":"), e.slashes || (!u || o.test(u)) && !1 !== s ? (s = "//" + (s || ""), a && "/" !== a[0] && (a = "/" + a)) : s || (s = ""), i && "#" !== i[0] && (i = "#" + i), c && "?" !== c[0] && (c = "?" + c), "" + u + s + (a = a.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + i
            }
            let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
 
            function i(e) {
                return u(e)
            }
        },
        6434: (e, t, n) => {
            n.d(t, {
                C1: () => M,
                bL: () => j
            });
            var r = n(2115),
                o = n(6101),
                u = n(6081),
                a = n(5185),
                i = n(5845),
                l = n(5503),
                s = n(1275),
                c = n(2712),
                f = e => {
                    let {
                        present: t,
                        children: n
                    } = e, u = function(e) {
                        var t, n;
                        let [o, u] = r.useState(), a = r.useRef({}), i = r.useRef(e), l = r.useRef("none"), [s, f] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = d(a.current);
                            l.current = "mounted" === s ? e : "none"
                        }, [s]), (0, c.N)(() => {
                            let t = a.current,
                                n = i.current;
                            if (n !== e) {
                                let r = l.current,
                                    o = d(t);
                                e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), i.current = e
                            }
                        }, [e, f]), (0, c.N)(() => {
                            if (o) {
                                var e;
                                let t;
                                let n = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    r = e => {
                                        let r = d(a.current).includes(e.animationName);
                                        if (e.target === o && r && (f("ANIMATION_END"), !i.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    u = e => {
                                        e.target === o && (l.current = d(a.current))
                                    };
                                return o.addEventListener("animationstart", u), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    n.clearTimeout(t), o.removeEventListener("animationstart", u), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            f("ANIMATION_END")
                        }, [o, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(s),
                            ref: r.useCallback(e => {
                                e && (a.current = getComputedStyle(e)), u(e)
                            }, [])
                        }
                    }(t), a = "function" == typeof n ? n({
                        present: u.isPresent
                    }) : r.Children.only(n), i = (0, o.s)(u.ref, function(e) {
                        var t, n;
                        let r = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get,
                            o = r && "isReactWarning" in r && r.isReactWarning;
                        return o ? e.ref : (o = (r = null === (n = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(a));
                    return "function" == typeof n || u.isPresent ? r.cloneElement(a, {
                        ref: i
                    }) : null
                };
 
            function d(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            f.displayName = "Presence";
            var p = n(3655),
                m = n(5155),
                y = "Checkbox",
                [h, g] = (0, u.A)(y),
                [v, b] = h(y),
                E = r.forwardRef((e, t) => {
                    let {
                        __scopeCheckbox: n,
                        name: u,
                        checked: l,
                        defaultChecked: s,
                        required: c,
                        disabled: f,
                        value: d = "on",
                        onCheckedChange: y,
                        form: h,
                        ...g
                    } = e, [b, E] = r.useState(null), N = (0, o.s)(t, e => E(e)), O = r.useRef(!1), j = !b || h || !!b.closest("form"), [M = !1, k] = (0, i.i)({
                        prop: l,
                        defaultProp: s,
                        onChange: y
                    }), C = r.useRef(M);
                    return r.useEffect(() => {
                        let e = null == b ? void 0 : b.form;
                        if (e) {
                            let t = () => k(C.current);
                            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
                        }
                    }, [b, k]), (0, m.jsxs)(v, {
                        scope: n,
                        state: M,
                        disabled: f,
                        children: [(0, m.jsx)(p.sG.button, {
                            type: "button",
                            role: "checkbox",
                            "aria-checked": T(M) ? "mixed" : M,
                            "aria-required": c,
                            "data-state": _(M),
                            "data-disabled": f ? "" : void 0,
                            disabled: f,
                            value: d,
                            ...g,
                            ref: N,
                            onKeyDown: (0, a.m)(e.onKeyDown, e => {
                                "Enter" === e.key && e.preventDefault()
                            }),
                            onClick: (0, a.m)(e.onClick, e => {
                                k(e => !!T(e) || !e), j && (O.current = e.isPropagationStopped(), O.current || e.stopPropagation())
                            })
                        }), j && (0, m.jsx)(P, {
                            control: b,
                            bubbles: !O.current,
                            name: u,
                            value: d,
                            checked: M,
                            required: c,
                            disabled: f,
                            form: h,
                            style: {
                                transform: "translateX(-100%)"
                            },
                            defaultChecked: !T(s) && s
                        })]
                    })
                });
            E.displayName = y;
            var N = "CheckboxIndicator",
                O = r.forwardRef((e, t) => {
                    let {
                        __scopeCheckbox: n,
                        forceMount: r,
                        ...o
                    } = e, u = b(N, n);
                    return (0, m.jsx)(f, {
                        present: r || T(u.state) || !0 === u.state,
                        children: (0, m.jsx)(p.sG.span, {
                            "data-state": _(u.state),
                            "data-disabled": u.disabled ? "" : void 0,
                            ...o,
                            ref: t,
                            style: {
                                pointerEvents: "none",
                                ...e.style
                            }
                        })
                    })
                });
            O.displayName = N;
            var P = e => {
                let {
                    control: t,
                    checked: n,
                    bubbles: o = !0,
                    defaultChecked: u,
                    ...a
                } = e, i = r.useRef(null), c = (0, l.Z)(n), f = (0, s.X)(t);
                r.useEffect(() => {
                    let e = i.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (c !== n && t) {
                        let r = new Event("click", {
                            bubbles: o
                        });
                        e.indeterminate = T(n), t.call(e, !T(n) && n), e.dispatchEvent(r)
                    }
                }, [c, n, o]);
                let d = r.useRef(!T(n) && n);
                return (0, m.jsx)("input", {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: null != u ? u : d.current,
                    ...a,
                    tabIndex: -1,
                    ref: i,
                    style: {
                        ...e.style,
                        ...f,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };
 
            function T(e) {
                return "indeterminate" === e
            }
 
            function _(e) {
                return T(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            var j = E,
                M = O
        },
        6654: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(2115);
 
            function o(e, t) {
                let n = (0, r.useRef)(null),
                    o = (0, r.useRef)(null);
                return (0, r.useCallback)(r => {
                    if (null === r) {
                        let e = n.current;
                        e && (n.current = null, e());
                        let t = o.current;
                        t && (o.current = null, t())
                    } else e && (n.current = u(e, r)), t && (o.current = u(t, r))
                }, [e, t])
            }
 
            function u(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let n = e(t);
                    return "function" == typeof n ? n : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6874: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });
            let r = n(8229),
                o = n(5155),
                u = r._(n(2115)),
                a = n(2757),
                i = n(5227),
                l = n(9818),
                s = n(6654),
                c = n(9991),
                f = n(5929);
            n(3230);
            let d = n(4930);
 
            function p(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let m = u.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: m,
                    children: y,
                    prefetch: h = null,
                    passHref: g,
                    replace: v,
                    shallow: b,
                    scroll: E,
                    onClick: N,
                    onMouseEnter: O,
                    onTouchStart: P,
                    legacyBehavior: T = !1,
                    ..._
                } = e;
                n = y, T && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let j = u.default.useContext(i.AppRouterContext),
                    M = !1 !== h,
                    k = null === h ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    {
                        href: C,
                        as: w
                    } = u.default.useMemo(() => {
                        let e = p(a);
                        return {
                            href: e,
                            as: m ? p(m) : e
                        }
                    }, [a, m]);
                T && (r = u.default.Children.only(n));
                let x = T ? r && "object" == typeof r && r.ref : t,
                    R = u.default.useCallback(e => (M && null !== j && (0, d.mountLinkInstance)(e, C, j, k), () => {
                        (0, d.unmountLinkInstance)(e)
                    }), [M, C, j, k]),
                    A = {
                        ref: (0, s.useMergedRef)(R, x),
                        onClick(e) {
                            T || "function" != typeof N || N(e), T && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), j && !e.defaultPrevented && ! function(e, t, n, r, o, a, i) {
                                let {
                                    nodeName: l
                                } = e.currentTarget;
                                !("A" === l.toUpperCase() && function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e)) && (e.preventDefault(), u.default.startTransition(() => {
                                    let e = null == i || i;
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                        shallow: a,
                                        scroll: e
                                    }) : t[o ? "replace" : "push"](r || n, {
                                        scroll: e
                                    })
                                }))
                            }(e, j, C, w, v, b, E)
                        },
                        onMouseEnter(e) {
                            T || "function" != typeof O || O(e), T && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), j && M && (0, d.onNavigationIntent)(e.currentTarget)
                        },
                        onTouchStart: function(e) {
                            T || "function" != typeof P || P(e), T && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), j && M && (0, d.onNavigationIntent)(e.currentTarget)
                        }
                    };
                return (0, c.isAbsoluteUrl)(w) ? A.href = w : T && !g && ("a" !== r.type || "href" in r.props) || (A.href = (0, f.addBasePath)(w)), T ? u.default.cloneElement(r, A) : (0, o.jsx)("a", {
                    ..._,
                    ...A,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8859: (e, t) => {
            function n(e) {
                let t = {};
                for (let [n, r] of e.entries()) {
                    let e = t[n];
                    void 0 === e ? t[n] = r : Array.isArray(e) ? e.push(r) : t[n] = [e, r]
                }
                return t
            }
 
            function r(e) {
                return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }
 
            function o(e) {
                let t = new URLSearchParams;
                for (let [n, o] of Object.entries(e))
                    if (Array.isArray(o))
                        for (let e of o) t.append(n, r(e));
                    else t.set(n, r(o));
                return t
            }
 
            function u(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (let t of n) {
                    for (let n of t.keys()) e.delete(n);
                    for (let [n, r] of t.entries()) e.append(n, r)
                }
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                assign: function() {
                    return u
                },
                searchParamsToUrlQuery: function() {
                    return n
                },
                urlQueryToSearchParams: function() {
                    return o
                }
            })
        },
        9991: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                DecodeError: function() {
                    return m
                },
                MiddlewareNotFoundError: function() {
                    return v
                },
                MissingStaticPage: function() {
                    return g
                },
                NormalizeError: function() {
                    return y
                },
                PageNotFoundError: function() {
                    return h
                },
                SP: function() {
                    return d
                },
                ST: function() {
                    return p
                },
                WEB_VITALS: function() {
                    return n
                },
                execOnce: function() {
                    return r
                },
                getDisplayName: function() {
                    return l
                },
                getLocationOrigin: function() {
                    return a
                },
                getURL: function() {
                    return i
                },
                isAbsoluteUrl: function() {
                    return u
                },
                isResSent: function() {
                    return s
                },
                loadGetInitialProps: function() {
                    return f
                },
                normalizeRepeatedSlashes: function() {
                    return c
                },
                stringifyError: function() {
                    return b
                }
            });
            let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
 
            function r(e) {
                let t, n = !1;
                return function() {
                    for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                    return n || (n = !0, t = e(...o)), t
                }
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                u = e => o.test(e);
 
            function a() {
                let {
                    protocol: e,
                    hostname: t,
                    port: n
                } = window.location;
                return e + "//" + t + (n ? ":" + n : "")
            }
 
            function i() {
                let {
                    href: e
                } = window.location, t = a();
                return e.substring(t.length)
            }
 
            function l(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }
 
            function s(e) {
                return e.finished || e.headersSent
            }
 
            function c(e) {
                let t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function f(e, t) {
                let n = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await f(t.Component, t.ctx)
                } : {};
                let r = await e.getInitialProps(t);
                if (n && s(n)) return r;
                if (!r) throw Object.defineProperty(Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
                return r
            }
            let d = "undefined" != typeof performance,
                p = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class m extends Error {}
            class y extends Error {}
            class h extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class g extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class v extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }
 
            function b(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        }
    }
]);