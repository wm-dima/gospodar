! function(t) {
    var e = window.webpackHotUpdate;
    window.webpackHotUpdate = function(t, i) {
        ! function(t, e) {
            if (!y[t] || !x[t]) return;
            for (var i in x[t] = !1, e) Object.prototype.hasOwnProperty.call(e, i) && (g[i] = e[i]);
            0 == --v && 0 === b && A()
        }(t, i), e && e(t, i)
    };
    var i, o = !0,
        n = "55b0b70e2d1096a2b5ae",
        s = 1e4,
        a = {},
        r = [],
        l = [];

    function h(t) {
        var e = I[t];
        if (!e) return S;
        var o = function(o) {
                return e.hot.active ? (I[o] ? -1 === I[o].parents.indexOf(t) && I[o].parents.push(t) : (r = [t], i = o), -1 === e.children.indexOf(o) && e.children.push(o)) : (console.warn("[HMR] unexpected require(" + o + ") from disposed module " + t), r = []), S(o)
            },
            n = function(t) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return S[t]
                    },
                    set: function(e) {
                        S[t] = e
                    }
                }
            };
        for (var s in S) Object.prototype.hasOwnProperty.call(S, s) && "e" !== s && "t" !== s && Object.defineProperty(o, s, n(s));
        return o.e = function(t) {
            return "ready" === d && u("prepare"), b++, S.e(t).then(e, function(t) {
                throw e(), t
            });

            function e() {
                b--, "prepare" === d && (w[t] || E(t), 0 === b && 0 === v && A())
            }
        }, o.t = function(t, e) {
            return 1 & e && (t = o(t)), S.t(t, -2 & e)
        }, o
    }

    function p(t) {
        var e = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: i !== t,
            active: !0,
            accept: function(t, i) {
                if (void 0 === t) e._selfAccepted = !0;
                else if ("function" == typeof t) e._selfAccepted = t;
                else if ("object" == typeof t)
                    for (var o = 0; o < t.length; o++) e._acceptedDependencies[t[o]] = i || function() {};
                else e._acceptedDependencies[t] = i || function() {}
            },
            decline: function(t) {
                if (void 0 === t) e._selfDeclined = !0;
                else if ("object" == typeof t)
                    for (var i = 0; i < t.length; i++) e._declinedDependencies[t[i]] = !0;
                else e._declinedDependencies[t] = !0
            },
            dispose: function(t) {
                e._disposeHandlers.push(t)
            },
            addDisposeHandler: function(t) {
                e._disposeHandlers.push(t)
            },
            removeDisposeHandler: function(t) {
                var i = e._disposeHandlers.indexOf(t);
                i >= 0 && e._disposeHandlers.splice(i, 1)
            },
            check: z,
            apply: T,
            status: function(t) {
                if (!t) return d;
                c.push(t)
            },
            addStatusHandler: function(t) {
                c.push(t)
            },
            removeStatusHandler: function(t) {
                var e = c.indexOf(t);
                e >= 0 && c.splice(e, 1)
            },
            data: a[t]
        };
        return i = void 0, e
    }
    var c = [],
        d = "idle";

    function u(t) {
        d = t;
        for (var e = 0; e < c.length; e++) c[e].call(null, t)
    }
    var m, g, f, v = 0,
        b = 0,
        w = {},
        x = {},
        y = {};

    function k(t) {
        return +t + "" === t ? +t : t
    }

    function z(t) {
        if ("idle" !== d) throw new Error("check() is only allowed in idle status");
        return o = t, u("check"), (e = s, e = e || 1e4, new Promise(function(t, i) {
            if ("undefined" == typeof XMLHttpRequest) return i(new Error("No browser support"));
            try {
                var o = new XMLHttpRequest,
                    s = S.p + "" + n + ".hot-update.json";
                o.open("GET", s, !0), o.timeout = e, o.send(null)
            } catch (t) {
                return i(t)
            }
            o.onreadystatechange = function() {
                if (4 === o.readyState)
                    if (0 === o.status) i(new Error("Manifest request to " + s + " timed out."));
                    else if (404 === o.status) t();
                else if (200 !== o.status && 304 !== o.status) i(new Error("Manifest request to " + s + " failed."));
                else {
                    try {
                        var e = JSON.parse(o.responseText)
                    } catch (t) {
                        return void i(t)
                    }
                    t(e)
                }
            }
        })).then(function(t) {
            if (!t) return u("idle"), null;
            x = {}, w = {}, y = t.c, f = t.h, u("prepare");
            var e = new Promise(function(t, e) {
                m = {
                    resolve: t,
                    reject: e
                }
            });
            g = {};
            return E(0), "prepare" === d && 0 === b && 0 === v && A(), e
        });
        var e
    }

    function E(t) {
        y[t] ? (x[t] = !0, v++, function(t) {
            var e = document.createElement("script");
            e.charset = "utf-8", e.src = S.p + "" + t + "." + n + ".hot-update.js", document.head.appendChild(e)
        }(t)) : w[t] = !0
    }

    function A() {
        u("ready");
        var t = m;
        if (m = null, t)
            if (o) Promise.resolve().then(function() {
                return T(o)
            }).then(function(e) {
                t.resolve(e)
            }, function(e) {
                t.reject(e)
            });
            else {
                var e = [];
                for (var i in g) Object.prototype.hasOwnProperty.call(g, i) && e.push(k(i));
                t.resolve(e)
            }
    }

    function T(e) {
        if ("ready" !== d) throw new Error("apply() is only allowed in ready status");
        var i, o, s, l, h;

        function p(t) {
            for (var e = [t], i = {}, o = e.slice().map(function(t) {
                    return {
                        chain: [t],
                        id: t
                    }
                }); o.length > 0;) {
                var n = o.pop(),
                    s = n.id,
                    a = n.chain;
                if ((l = I[s]) && !l.hot._selfAccepted) {
                    if (l.hot._selfDeclined) return {
                        type: "self-declined",
                        chain: a,
                        moduleId: s
                    };
                    if (l.hot._main) return {
                        type: "unaccepted",
                        chain: a,
                        moduleId: s
                    };
                    for (var r = 0; r < l.parents.length; r++) {
                        var h = l.parents[r],
                            p = I[h];
                        if (p) {
                            if (p.hot._declinedDependencies[s]) return {
                                type: "declined",
                                chain: a.concat([h]),
                                moduleId: s,
                                parentId: h
                            }; - 1 === e.indexOf(h) && (p.hot._acceptedDependencies[s] ? (i[h] || (i[h] = []), c(i[h], [s])) : (delete i[h], e.push(h), o.push({
                                chain: a.concat([h]),
                                id: h
                            })))
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: t,
                outdatedModules: e,
                outdatedDependencies: i
            }
        }

        function c(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i]; - 1 === t.indexOf(o) && t.push(o)
            }
        }
        e = e || {};
        var m = {},
            v = [],
            b = {},
            w = function() {
                console.warn("[HMR] unexpected require(" + z.moduleId + ") to disposed module")
            };
        for (var x in g)
            if (Object.prototype.hasOwnProperty.call(g, x)) {
                var z;
                h = k(x);
                var E = !1,
                    A = !1,
                    T = !1,
                    C = "";
                switch ((z = g[x] ? p(h) : {
                    type: "disposed",
                    moduleId: x
                }).chain && (C = "\nUpdate propagation: " + z.chain.join(" -> ")), z.type) {
                    case "self-declined":
                        e.onDeclined && e.onDeclined(z), e.ignoreDeclined || (E = new Error("Aborted because of self decline: " + z.moduleId + C));
                        break;
                    case "declined":
                        e.onDeclined && e.onDeclined(z), e.ignoreDeclined || (E = new Error("Aborted because of declined dependency: " + z.moduleId + " in " + z.parentId + C));
                        break;
                    case "unaccepted":
                        e.onUnaccepted && e.onUnaccepted(z), e.ignoreUnaccepted || (E = new Error("Aborted because " + h + " is not accepted" + C));
                        break;
                    case "accepted":
                        e.onAccepted && e.onAccepted(z), A = !0;
                        break;
                    case "disposed":
                        e.onDisposed && e.onDisposed(z), T = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + z.type)
                }
                if (E) return u("abort"), Promise.reject(E);
                if (A)
                    for (h in b[h] = g[h], c(v, z.outdatedModules), z.outdatedDependencies) Object.prototype.hasOwnProperty.call(z.outdatedDependencies, h) && (m[h] || (m[h] = []), c(m[h], z.outdatedDependencies[h]));
                T && (c(v, [z.moduleId]), b[h] = w)
            } var M, $ = [];
        for (o = 0; o < v.length; o++) h = v[o], I[h] && I[h].hot._selfAccepted && $.push({
            module: h,
            errorHandler: I[h].hot._selfAccepted
        });
        u("dispose"), Object.keys(y).forEach(function(t) {
            !1 === y[t] && function(t) {
                delete installedChunks[t]
            }(t)
        });
        for (var O, L, j = v.slice(); j.length > 0;)
            if (h = j.pop(), l = I[h]) {
                var N = {},
                    B = l.hot._disposeHandlers;
                for (s = 0; s < B.length; s++)(i = B[s])(N);
                for (a[h] = N, l.hot.active = !1, delete I[h], delete m[h], s = 0; s < l.children.length; s++) {
                    var P = I[l.children[s]];
                    P && ((M = P.parents.indexOf(h)) >= 0 && P.parents.splice(M, 1))
                }
            } for (h in m)
            if (Object.prototype.hasOwnProperty.call(m, h) && (l = I[h]))
                for (L = m[h], s = 0; s < L.length; s++) O = L[s], (M = l.children.indexOf(O)) >= 0 && l.children.splice(M, 1);
        for (h in u("apply"), n = f, b) Object.prototype.hasOwnProperty.call(b, h) && (t[h] = b[h]);
        var D = null;
        for (h in m)
            if (Object.prototype.hasOwnProperty.call(m, h) && (l = I[h])) {
                L = m[h];
                var F = [];
                for (o = 0; o < L.length; o++)
                    if (O = L[o], i = l.hot._acceptedDependencies[O]) {
                        if (-1 !== F.indexOf(i)) continue;
                        F.push(i)
                    } for (o = 0; o < F.length; o++) {
                    i = F[o];
                    try {
                        i(L)
                    } catch (t) {
                        e.onErrored && e.onErrored({
                            type: "accept-errored",
                            moduleId: h,
                            dependencyId: L[o],
                            error: t
                        }), e.ignoreErrored || D || (D = t)
                    }
                }
            } for (o = 0; o < $.length; o++) {
            var H = $[o];
            h = H.module, r = [h];
            try {
                S(h)
            } catch (t) {
                if ("function" == typeof H.errorHandler) try {
                    H.errorHandler(t)
                } catch (i) {
                    e.onErrored && e.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: h,
                        error: i,
                        originalError: t
                    }), e.ignoreErrored || D || (D = i), D || (D = t)
                } else e.onErrored && e.onErrored({
                    type: "self-accept-errored",
                    moduleId: h,
                    error: t
                }), e.ignoreErrored || D || (D = t)
            }
        }
        return D ? (u("fail"), Promise.reject(D)) : (u("idle"), new Promise(function(t) {
            t(v)
        }))
    }
    var I = {};

    function S(e) {
        if (I[e]) return I[e].exports;
        var i = I[e] = {
            i: e,
            l: !1,
            exports: {},
            hot: p(e),
            parents: (l = r, r = [], l),
            children: []
        };
        return t[e].call(i.exports, i, i.exports, h(e)), i.l = !0, i.exports
    }
    S.m = t, S.c = I, S.d = function(t, e, i) {
        S.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, S.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, S.t = function(t, e) {
        if (1 & e && (t = S(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (S.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) S.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, S.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return S.d(e, "a", e), e
    }, S.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, S.p = "", S.h = function() {
        return n
    }, h(5)(S.s = 5)
}([function(t, e, i) {
    var o, n, s = {},
        a = (o = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === n && (n = o.apply(this, arguments)), n
        }),
        r = function(t) {
            var e = {};
            return function(t, i) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var o = function(t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t)
                    }.call(this, t, i);
                    if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                        o = o.contentDocument.head
                    } catch (t) {
                        o = null
                    }
                    e[t] = o
                }
                return e[t]
            }
        }(),
        l = null,
        h = 0,
        p = [],
        c = i(9);

    function d(t, e) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i],
                n = s[o.id];
            if (n) {
                n.refs++;
                for (var a = 0; a < n.parts.length; a++) n.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++) n.parts.push(b(o.parts[a], e))
            } else {
                var r = [];
                for (a = 0; a < o.parts.length; a++) r.push(b(o.parts[a], e));
                s[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }

    function u(t, e) {
        for (var i = [], o = {}, n = 0; n < t.length; n++) {
            var s = t[n],
                a = e.base ? s[0] + e.base : s[0],
                r = {
                    css: s[1],
                    media: s[2],
                    sourceMap: s[3]
                };
            o[a] ? o[a].parts.push(r) : i.push(o[a] = {
                id: a,
                parts: [r]
            })
        }
        return i
    }

    function m(t, e) {
        var i = r(t.insertInto);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = p[p.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? i.insertBefore(e, o.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), p.push(e);
        else if ("bottom" === t.insertAt) i.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var n = r(t.insertAt.before, i);
            i.insertBefore(e, n)
        }
    }

    function g(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = p.indexOf(t);
        e >= 0 && p.splice(e, 1)
    }

    function f(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var o = function() {
                0;
                return i.nc
            }();
            o && (t.attrs.nonce = o)
        }
        return v(e, t.attrs), m(t, e), e
    }

    function v(t, e) {
        Object.keys(e).forEach(function(i) {
            t.setAttribute(i, e[i])
        })
    }

    function b(t, e) {
        var i, o, n, s;
        if (e.transform && t.css) {
            if (!(s = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
            t.css = s
        }
        if (e.singleton) {
            var a = h++;
            i = l || (l = f(e)), o = y.bind(null, i, a, !1), n = y.bind(null, i, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), m(t, e), e
        }(e), o = function(t, e, i) {
            var o = i.css,
                n = i.sourceMap,
                s = void 0 === e.convertToAbsoluteUrls && n;
            (e.convertToAbsoluteUrls || s) && (o = c(o));
            n && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
            var a = new Blob([o], {
                    type: "text/css"
                }),
                r = t.href;
            t.href = URL.createObjectURL(a), r && URL.revokeObjectURL(r)
        }.bind(null, i, e), n = function() {
            g(i), i.href && URL.revokeObjectURL(i.href)
        }) : (i = f(e), o = function(t, e) {
            var i = e.css,
                o = e.media;
            o && t.setAttribute("media", o);
            if (t.styleSheet) t.styleSheet.cssText = i;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }.bind(null, i), n = function() {
            g(i)
        });
        return o(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    o(t = e)
                } else n()
            }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var i = u(t, e);
        return d(i, e),
            function(t) {
                for (var o = [], n = 0; n < i.length; n++) {
                    var a = i[n];
                    (r = s[a.id]).refs--, o.push(r)
                }
                t && d(u(t, e), e);
                for (n = 0; n < o.length; n++) {
                    var r;
                    if (0 === (r = o[n]).refs) {
                        for (var l = 0; l < r.parts.length; l++) r.parts[l]();
                        delete s[r.id]
                    }
                }
            }
    };
    var w, x = (w = [], function(t, e) {
        return w[t] = e, w.filter(Boolean).join("\n")
    });

    function y(t, e, i, o) {
        var n = i ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, n);
        else {
            var s = document.createTextNode(n),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(s, a[e]) : t.appendChild(s)
        }
    }
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(6), i(7), i(8), i(10), i(11), i(12), i(13), new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    /*jQuery(document).ready(function(t) {
        var e = t(".catalog-min"),
            i = t(".catalog-additional"),
            o = e.outerHeight(),
            n = i.outerHeight();
        o > n && i.css("min-height", o), n > o && e.css("min-height", n)
    }), $(function() {
        ! function() {
            var t = $(".quantity-arrow-minus"),
                e = $(".quantity-arrow-plus"),
                i = $(".quantity-num");
            t.click(function() {
                i.val() > 1 && i.val(+i.val() - 1)
            }), e.click(function() {
                i.val(+i.val() + 1)
            })
        }()
    }), $(".quantity-block button").click(function(t) {
        t.preventDefault()
    })*/
}, function(t, e, i) {
    var o; /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
    ! function(e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, function(i, n) {
        "use strict";
        var s = [],
            a = i.document,
            r = Object.getPrototypeOf,
            l = s.slice,
            h = s.concat,
            p = s.push,
            c = s.indexOf,
            d = {},
            u = d.toString,
            m = d.hasOwnProperty,
            g = m.toString,
            f = g.call(Object),
            v = {},
            b = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            w = function(t) {
                return null != t && t === t.window
            },
            x = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function y(t, e, i) {
            var o, n = (e = e || a).createElement("script");
            if (n.text = t, i)
                for (o in x) i[o] && (n[o] = i[o]);
            e.head.appendChild(n).parentNode.removeChild(n)
        }

        function k(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[u.call(t)] || "object" : typeof t
        }
        var z = function(t, e) {
                return new z.fn.init(t, e)
            },
            E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function A(t) {
            var e = !!t && "length" in t && t.length,
                i = k(t);
            return !b(t) && !w(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        z.fn = z.prototype = {
            jquery: "3.3.1",
            constructor: z,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = z.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return z.each(this, t)
            },
            map: function(t) {
                return this.pushStack(z.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: p,
            sort: s.sort,
            splice: s.splice
        }, z.extend = z.fn.extend = function() {
            var t, e, i, o, n, s, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || b(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
                if (null != (t = arguments[r]))
                    for (e in t) i = a[e], a !== (o = t[e]) && (h && o && (z.isPlainObject(o) || (n = Array.isArray(o))) ? (n ? (n = !1, s = i && Array.isArray(i) ? i : []) : s = i && z.isPlainObject(i) ? i : {}, a[e] = z.extend(h, s, o)) : void 0 !== o && (a[e] = o));
            return a
        }, z.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== u.call(t) || (e = r(t)) && ("function" != typeof(i = m.call(e, "constructor") && e.constructor) || g.call(i) !== f))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t) {
                y(t)
            },
            each: function(t, e) {
                var i, o = 0;
                if (A(t))
                    for (i = t.length; o < i && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(E, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (A(Object(t)) ? z.merge(i, "string" == typeof t ? [t] : t) : p.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : c.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, o = 0, n = t.length; o < i; o++) t[n++] = e[o];
                return t.length = n, t
            },
            grep: function(t, e, i) {
                for (var o = [], n = 0, s = t.length, a = !i; n < s; n++) !e(t[n], n) !== a && o.push(t[n]);
                return o
            },
            map: function(t, e, i) {
                var o, n, s = 0,
                    a = [];
                if (A(t))
                    for (o = t.length; s < o; s++) null != (n = e(t[s], s, i)) && a.push(n);
                else
                    for (s in t) null != (n = e(t[s], s, i)) && a.push(n);
                return h.apply([], a)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (z.fn[Symbol.iterator] = s[Symbol.iterator]), z.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        });
        var T = function(t) {
            var e, i, o, n, s, a, r, l, h, p, c, d, u, m, g, f, v, b, w, x = "sizzle" + 1 * new Date,
                y = t.document,
                k = 0,
                z = 0,
                E = at(),
                A = at(),
                T = at(),
                I = function(t, e) {
                    return t === e && (c = !0), 0
                },
                S = {}.hasOwnProperty,
                C = [],
                M = C.pop,
                $ = C.push,
                O = C.push,
                L = C.slice,
                j = function(t, e) {
                    for (var i = 0, o = t.length; i < o; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                B = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                D = "\\[" + B + "*(" + P + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + B + "*\\]",
                F = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)",
                H = new RegExp(B + "+", "g"),
                _ = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                q = new RegExp("^" + B + "*," + B + "*"),
                R = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
                U = new RegExp(F),
                V = new RegExp("^" + P + "$"),
                Y = {
                    ID: new RegExp("^#(" + P + ")"),
                    CLASS: new RegExp("^\\.(" + P + ")"),
                    TAG: new RegExp("^(" + P + "|[*])"),
                    ATTR: new RegExp("^" + D),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + N + ")$", "i"),
                    needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
                },
                Z = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                G = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                J = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
                tt = function(t, e, i) {
                    var o = "0x" + e - 65536;
                    return o != o || i ? e : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
                },
                et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                it = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                ot = function() {
                    d()
                },
                nt = bt(function(t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(C = L.call(y.childNodes), y.childNodes), C[y.childNodes.length].nodeType
            } catch (t) {
                O = {
                    apply: C.length ? function(t, e) {
                        $.apply(t, L.call(e))
                    } : function(t, e) {
                        for (var i = t.length, o = 0; t[i++] = e[o++];);
                        t.length = i - 1
                    }
                }
            }

            function st(t, e, o, n) {
                var s, r, h, p, c, m, v, b = e && e.ownerDocument,
                    k = e ? e.nodeType : 9;
                if (o = o || [], "string" != typeof t || !t || 1 !== k && 9 !== k && 11 !== k) return o;
                if (!n && ((e ? e.ownerDocument || e : y) !== u && d(e), e = e || u, g)) {
                    if (11 !== k && (c = Q.exec(t)))
                        if (s = c[1]) {
                            if (9 === k) {
                                if (!(h = e.getElementById(s))) return o;
                                if (h.id === s) return o.push(h), o
                            } else if (b && (h = b.getElementById(s)) && w(e, h) && h.id === s) return o.push(h), o
                        } else {
                            if (c[2]) return O.apply(o, e.getElementsByTagName(t)), o;
                            if ((s = c[3]) && i.getElementsByClassName && e.getElementsByClassName) return O.apply(o, e.getElementsByClassName(s)), o
                        } if (i.qsa && !T[t + " "] && (!f || !f.test(t))) {
                        if (1 !== k) b = e, v = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((p = e.getAttribute("id")) ? p = p.replace(et, it) : e.setAttribute("id", p = x), r = (m = a(t)).length; r--;) m[r] = "#" + p + " " + vt(m[r]);
                            v = m.join(","), b = K.test(t) && gt(e.parentNode) || e
                        }
                        if (v) try {
                            return O.apply(o, b.querySelectorAll(v)), o
                        } catch (t) {} finally {
                            p === x && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(_, "$1"), e, o, n)
            }

            function at() {
                var t = [];
                return function e(i, n) {
                    return t.push(i + " ") > o.cacheLength && delete e[t.shift()], e[i + " "] = n
                }
            }

            function rt(t) {
                return t[x] = !0, t
            }

            function lt(t) {
                var e = u.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function ht(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) o.attrHandle[i[n]] = e
            }

            function pt(t, e) {
                var i = e && t,
                    o = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (o) return o;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ct(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function dt(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function ut(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && nt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function mt(t) {
                return rt(function(e) {
                    return e = +e, rt(function(i, o) {
                        for (var n, s = t([], i.length, e), a = s.length; a--;) i[n = s[a]] && (i[n] = !(o[n] = i[n]))
                    })
                })
            }

            function gt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = st.support = {}, s = st.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, d = st.setDocument = function(t) {
                    var e, n, a = t ? t.ownerDocument || t : y;
                    return a !== u && 9 === a.nodeType && a.documentElement ? (m = (u = a).documentElement, g = !s(u), y !== u && (n = u.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ot, !1) : n.attachEvent && n.attachEvent("onunload", ot)), i.attributes = lt(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = lt(function(t) {
                        return t.appendChild(u.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = G.test(u.getElementsByClassName), i.getById = lt(function(t) {
                        return m.appendChild(t).id = x, !u.getElementsByName || !u.getElementsByName(x).length
                    }), i.getById ? (o.filter.ID = function(t) {
                        var e = t.replace(J, tt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, o.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (o.filter.ID = function(t) {
                        var e = t.replace(J, tt);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, o.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i, o, n, s = e.getElementById(t);
                            if (s) {
                                if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                for (n = e.getElementsByName(t), o = 0; s = n[o++];)
                                    if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                            }
                            return []
                        }
                    }), o.find.TAG = i.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, o = [],
                            n = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = s[n++];) 1 === i.nodeType && o.push(i);
                            return o
                        }
                        return s
                    }, o.find.CLASS = i.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                    }, v = [], f = [], (i.qsa = G.test(u.querySelectorAll)) && (lt(function(t) {
                        m.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + B + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || f.push("\\[" + B + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + x + "-]").length || f.push("~="), t.querySelectorAll(":checked").length || f.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || f.push(".#.+[+~]")
                    }), lt(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = u.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && f.push("name" + B + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && f.push(":enabled", ":disabled"), m.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), f.push(",.*:")
                    })), (i.matchesSelector = G.test(b = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && lt(function(t) {
                        i.disconnectedMatch = b.call(t, "*"), b.call(t, "[s!='']:x"), v.push("!=", F)
                    }), f = f.length && new RegExp(f.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(m.compareDocumentPosition), w = e || G.test(m.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            o = e && e.parentNode;
                        return t === o || !(!o || 1 !== o.nodeType || !(i.contains ? i.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, I = e ? function(t, e) {
                        if (t === e) return c = !0, 0;
                        var o = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return o || (1 & (o = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === o ? t === u || t.ownerDocument === y && w(y, t) ? -1 : e === u || e.ownerDocument === y && w(y, e) ? 1 : p ? j(p, t) - j(p, e) : 0 : 4 & o ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return c = !0, 0;
                        var i, o = 0,
                            n = t.parentNode,
                            s = e.parentNode,
                            a = [t],
                            r = [e];
                        if (!n || !s) return t === u ? -1 : e === u ? 1 : n ? -1 : s ? 1 : p ? j(p, t) - j(p, e) : 0;
                        if (n === s) return pt(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) r.unshift(i);
                        for (; a[o] === r[o];) o++;
                        return o ? pt(a[o], r[o]) : a[o] === y ? -1 : r[o] === y ? 1 : 0
                    }, u) : u
                }, st.matches = function(t, e) {
                    return st(t, null, null, e)
                }, st.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== u && d(t), e = e.replace(W, "='$1']"), i.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!f || !f.test(e))) try {
                        var o = b.call(t, e);
                        if (o || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o
                    } catch (t) {}
                    return st(e, u, null, [t]).length > 0
                }, st.contains = function(t, e) {
                    return (t.ownerDocument || t) !== u && d(t), w(t, e)
                }, st.attr = function(t, e) {
                    (t.ownerDocument || t) !== u && d(t);
                    var n = o.attrHandle[e.toLowerCase()],
                        s = n && S.call(o.attrHandle, e.toLowerCase()) ? n(t, e, !g) : void 0;
                    return void 0 !== s ? s : i.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                }, st.escape = function(t) {
                    return (t + "").replace(et, it)
                }, st.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, st.uniqueSort = function(t) {
                    var e, o = [],
                        n = 0,
                        s = 0;
                    if (c = !i.detectDuplicates, p = !i.sortStable && t.slice(0), t.sort(I), c) {
                        for (; e = t[s++];) e === t[s] && (n = o.push(s));
                        for (; n--;) t.splice(o[n], 1)
                    }
                    return p = null, t
                }, n = st.getText = function(t) {
                    var e, i = "",
                        o = 0,
                        s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
                        } else if (3 === s || 4 === s) return t.nodeValue
                    } else
                        for (; e = t[o++];) i += n(e);
                    return i
                }, (o = st.selectors = {
                    cacheLength: 50,
                    createPseudo: rt,
                    match: Y,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(J, tt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = E[t + " "];
                            return e || (e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) && E(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(o) {
                                var n = st.attr(o, t);
                                return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n.replace(H, " ") + " ").indexOf(i) > -1 : "|=" === e && (n === i || n.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, o, n) {
                            var s = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                r = "of-type" === e;
                            return 1 === o && 0 === n ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var h, p, c, d, u, m, g = s !== a ? "nextSibling" : "previousSibling",
                                    f = e.parentNode,
                                    v = r && e.nodeName.toLowerCase(),
                                    b = !l && !r,
                                    w = !1;
                                if (f) {
                                    if (s) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            m = g = "only" === t && !m && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (m = [a ? f.firstChild : f.lastChild], a && b) {
                                        for (w = (u = (h = (p = (c = (d = f)[x] || (d[x] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === k && h[1]) && h[2], d = u && f.childNodes[u]; d = ++u && d && d[g] || (w = u = 0) || m.pop();)
                                            if (1 === d.nodeType && ++w && d === e) {
                                                p[t] = [k, u, w];
                                                break
                                            }
                                    } else if (b && (w = u = (h = (p = (c = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === k && h[1]), !1 === w)
                                        for (;
                                            (d = ++u && d && d[g] || (w = u = 0) || m.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (b && ((p = (c = d[x] || (d[x] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] = [k, w]), d !== e)););
                                    return (w -= n) === o || w % o == 0 && w / o >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, n = o.pseudos[t] || o.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return n[x] ? n(e) : n.length > 1 ? (i = [t, t, "", e], o.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, i) {
                                for (var o, s = n(t, e), a = s.length; a--;) t[o = j(t, s[a])] = !(i[o] = s[a])
                            }) : function(t) {
                                return n(t, 0, i)
                            }) : n
                        }
                    },
                    pseudos: {
                        not: rt(function(t) {
                            var e = [],
                                i = [],
                                o = r(t.replace(_, "$1"));
                            return o[x] ? rt(function(t, e, i, n) {
                                for (var s, a = o(t, null, n, []), r = t.length; r--;)(s = a[r]) && (t[r] = !(e[r] = s))
                            }) : function(t, n, s) {
                                return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: rt(function(t) {
                            return function(e) {
                                return st(t, e).length > 0
                            }
                        }),
                        contains: rt(function(t) {
                            return t = t.replace(J, tt),
                                function(e) {
                                    return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                                }
                        }),
                        lang: rt(function(t) {
                            return V.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === m
                        },
                        focus: function(t) {
                            return t === u.activeElement && (!u.hasFocus || u.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: ut(!1),
                        disabled: ut(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !o.pseudos.empty(t)
                        },
                        header: function(t) {
                            return X.test(t.nodeName)
                        },
                        input: function(t) {
                            return Z.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: mt(function() {
                            return [0]
                        }),
                        last: mt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: mt(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: mt(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: mt(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: mt(function(t, e, i) {
                            for (var o = i < 0 ? i + e : i; --o >= 0;) t.push(o);
                            return t
                        }),
                        gt: mt(function(t, e, i) {
                            for (var o = i < 0 ? i + e : i; ++o < e;) t.push(o);
                            return t
                        })
                    }
                }).pseudos.nth = o.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) o.pseudos[e] = ct(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) o.pseudos[e] = dt(e);

            function ft() {}

            function vt(t) {
                for (var e = 0, i = t.length, o = ""; e < i; e++) o += t[e].value;
                return o
            }

            function bt(t, e, i) {
                var o = e.dir,
                    n = e.next,
                    s = n || o,
                    a = i && "parentNode" === s,
                    r = z++;
                return e.first ? function(e, i, n) {
                    for (; e = e[o];)
                        if (1 === e.nodeType || a) return t(e, i, n);
                    return !1
                } : function(e, i, l) {
                    var h, p, c, d = [k, r];
                    if (l) {
                        for (; e = e[o];)
                            if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                    } else
                        for (; e = e[o];)
                            if (1 === e.nodeType || a)
                                if (p = (c = e[x] || (e[x] = {}))[e.uniqueID] || (c[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[o] || e;
                                else {
                                    if ((h = p[s]) && h[0] === k && h[1] === r) return d[2] = h[2];
                                    if (p[s] = d, d[2] = t(e, i, l)) return !0
                                } return !1
                }
            }

            function wt(t) {
                return t.length > 1 ? function(e, i, o) {
                    for (var n = t.length; n--;)
                        if (!t[n](e, i, o)) return !1;
                    return !0
                } : t[0]
            }

            function xt(t, e, i, o, n) {
                for (var s, a = [], r = 0, l = t.length, h = null != e; r < l; r++)(s = t[r]) && (i && !i(s, o, n) || (a.push(s), h && e.push(r)));
                return a
            }

            function yt(t, e, i, o, n, s) {
                return o && !o[x] && (o = yt(o)), n && !n[x] && (n = yt(n, s)), rt(function(s, a, r, l) {
                    var h, p, c, d = [],
                        u = [],
                        m = a.length,
                        g = s || function(t, e, i) {
                            for (var o = 0, n = e.length; o < n; o++) st(t, e[o], i);
                            return i
                        }(e || "*", r.nodeType ? [r] : r, []),
                        f = !t || !s && e ? g : xt(g, d, t, r, l),
                        v = i ? n || (s ? t : m || o) ? [] : a : f;
                    if (i && i(f, v, r, l), o)
                        for (h = xt(v, u), o(h, [], r, l), p = h.length; p--;)(c = h[p]) && (v[u[p]] = !(f[u[p]] = c));
                    if (s) {
                        if (n || t) {
                            if (n) {
                                for (h = [], p = v.length; p--;)(c = v[p]) && h.push(f[p] = c);
                                n(null, v = [], h, l)
                            }
                            for (p = v.length; p--;)(c = v[p]) && (h = n ? j(s, c) : d[p]) > -1 && (s[h] = !(a[h] = c))
                        }
                    } else v = xt(v === a ? v.splice(m, v.length) : v), n ? n(null, a, v, l) : O.apply(a, v)
                })
            }

            function kt(t) {
                for (var e, i, n, s = t.length, a = o.relative[t[0].type], r = a || o.relative[" "], l = a ? 1 : 0, p = bt(function(t) {
                        return t === e
                    }, r, !0), c = bt(function(t) {
                        return j(e, t) > -1
                    }, r, !0), d = [function(t, i, o) {
                        var n = !a && (o || i !== h) || ((e = i).nodeType ? p(t, i, o) : c(t, i, o));
                        return e = null, n
                    }]; l < s; l++)
                    if (i = o.relative[t[l].type]) d = [bt(wt(d), i)];
                    else {
                        if ((i = o.filter[t[l].type].apply(null, t[l].matches))[x]) {
                            for (n = ++l; n < s && !o.relative[t[n].type]; n++);
                            return yt(l > 1 && wt(d), l > 1 && vt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(_, "$1"), i, l < n && kt(t.slice(l, n)), n < s && kt(t = t.slice(n)), n < s && vt(t))
                        }
                        d.push(i)
                    } return wt(d)
            }

            function zt(t, e) {
                var i = e.length > 0,
                    n = t.length > 0,
                    s = function(s, a, r, l, p) {
                        var c, m, f, v = 0,
                            b = "0",
                            w = s && [],
                            x = [],
                            y = h,
                            z = s || n && o.find.TAG("*", p),
                            E = k += null == y ? 1 : Math.random() || .1,
                            A = z.length;
                        for (p && (h = a === u || a || p); b !== A && null != (c = z[b]); b++) {
                            if (n && c) {
                                for (m = 0, a || c.ownerDocument === u || (d(c), r = !g); f = t[m++];)
                                    if (f(c, a || u, r)) {
                                        l.push(c);
                                        break
                                    } p && (k = E)
                            }
                            i && ((c = !f && c) && v--, s && w.push(c))
                        }
                        if (v += b, i && b !== v) {
                            for (m = 0; f = e[m++];) f(w, x, a, r);
                            if (s) {
                                if (v > 0)
                                    for (; b--;) w[b] || x[b] || (x[b] = M.call(l));
                                x = xt(x)
                            }
                            O.apply(l, x), p && !s && x.length > 0 && v + e.length > 1 && st.uniqueSort(l)
                        }
                        return p && (k = E, h = y), w
                    };
                return i ? rt(s) : s
            }
            return ft.prototype = o.filters = o.pseudos, o.setFilters = new ft, a = st.tokenize = function(t, e) {
                var i, n, s, a, r, l, h, p = A[t + " "];
                if (p) return e ? 0 : p.slice(0);
                for (r = t, l = [], h = o.preFilter; r;) {
                    for (a in i && !(n = q.exec(r)) || (n && (r = r.slice(n[0].length) || r), l.push(s = [])), i = !1, (n = R.exec(r)) && (i = n.shift(), s.push({
                            value: i,
                            type: n[0].replace(_, " ")
                        }), r = r.slice(i.length)), o.filter) !(n = Y[a].exec(r)) || h[a] && !(n = h[a](n)) || (i = n.shift(), s.push({
                        value: i,
                        type: a,
                        matches: n
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return e ? r.length : r ? st.error(t) : A(t, l).slice(0)
            }, r = st.compile = function(t, e) {
                var i, o = [],
                    n = [],
                    s = T[t + " "];
                if (!s) {
                    for (e || (e = a(t)), i = e.length; i--;)(s = kt(e[i]))[x] ? o.push(s) : n.push(s);
                    (s = T(t, zt(n, o))).selector = t
                }
                return s
            }, l = st.select = function(t, e, i, n) {
                var s, l, h, p, c, d = "function" == typeof t && t,
                    u = !n && a(t = d.selector || t);
                if (i = i || [], 1 === u.length) {
                    if ((l = u[0] = u[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && g && o.relative[l[1].type]) {
                        if (!(e = (o.find.ID(h.matches[0].replace(J, tt), e) || [])[0])) return i;
                        d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (s = Y.needsContext.test(t) ? 0 : l.length; s-- && (h = l[s], !o.relative[p = h.type]);)
                        if ((c = o.find[p]) && (n = c(h.matches[0].replace(J, tt), K.test(l[0].type) && gt(e.parentNode) || e))) {
                            if (l.splice(s, 1), !(t = n.length && vt(l))) return O.apply(i, n), i;
                            break
                        }
                }
                return (d || r(t, u))(n, e, !g, i, !e || K.test(t) && gt(e.parentNode) || e), i
            }, i.sortStable = x.split("").sort(I).join("") === x, i.detectDuplicates = !!c, d(), i.sortDetached = lt(function(t) {
                return 1 & t.compareDocumentPosition(u.createElement("fieldset"))
            }), lt(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || ht("type|href|height|width", function(t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), i.attributes && lt(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || ht("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), lt(function(t) {
                return null == t.getAttribute("disabled")
            }) || ht(N, function(t, e, i) {
                var o;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }), st
        }(i);
        z.find = T, z.expr = T.selectors, z.expr[":"] = z.expr.pseudos, z.uniqueSort = z.unique = T.uniqueSort, z.text = T.getText, z.isXMLDoc = T.isXML, z.contains = T.contains, z.escapeSelector = T.escape;
        var I = function(t, e, i) {
                for (var o = [], n = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (n && z(t).is(i)) break;
                        o.push(t)
                    } return o
            },
            S = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            C = z.expr.match.needsContext;

        function M(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function O(t, e, i) {
            return b(e) ? z.grep(t, function(t, o) {
                return !!e.call(t, o, t) !== i
            }) : e.nodeType ? z.grep(t, function(t) {
                return t === e !== i
            }) : "string" != typeof e ? z.grep(t, function(t) {
                return c.call(e, t) > -1 !== i
            }) : z.filter(e, t, i)
        }
        z.filter = function(t, e, i) {
            var o = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === o.nodeType ? z.find.matchesSelector(o, t) ? [o] : [] : z.find.matches(t, z.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, z.fn.extend({
            find: function(t) {
                var e, i, o = this.length,
                    n = this;
                if ("string" != typeof t) return this.pushStack(z(t).filter(function() {
                    for (e = 0; e < o; e++)
                        if (z.contains(n[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < o; e++) z.find(t, n[e], i);
                return o > 1 ? z.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(O(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(O(this, t || [], !0))
            },
            is: function(t) {
                return !!O(this, "string" == typeof t && C.test(t) ? z(t) : t || [], !1).length
            }
        });
        var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (z.fn.init = function(t, e, i) {
            var o, n;
            if (!t) return this;
            if (i = i || L, "string" == typeof t) {
                if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (o[1]) {
                    if (e = e instanceof z ? e[0] : e, z.merge(this, z.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : a, !0)), $.test(o[1]) && z.isPlainObject(e))
                        for (o in e) b(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                    return this
                }
                return (n = a.getElementById(o[2])) && (this[0] = n, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== i.ready ? i.ready(t) : t(z) : z.makeArray(t, this)
        }).prototype = z.fn, L = z(a);
        var N = /^(?:parents|prev(?:Until|All))/,
            B = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function P(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        z.fn.extend({
            has: function(t) {
                var e = z(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (z.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var i, o = 0,
                    n = this.length,
                    s = [],
                    a = "string" != typeof t && z(t);
                if (!C.test(t))
                    for (; o < n; o++)
                        for (i = this[o]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && z.find.matchesSelector(i, t))) {
                                s.push(i);
                                break
                            } return this.pushStack(s.length > 1 ? z.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? c.call(z(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(z.uniqueSort(z.merge(this.get(), z(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), z.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return I(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return I(t, "parentNode", i)
            },
            next: function(t) {
                return P(t, "nextSibling")
            },
            prev: function(t) {
                return P(t, "previousSibling")
            },
            nextAll: function(t) {
                return I(t, "nextSibling")
            },
            prevAll: function(t) {
                return I(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return I(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return I(t, "previousSibling", i)
            },
            siblings: function(t) {
                return S((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return S(t.firstChild)
            },
            contents: function(t) {
                return M(t, "iframe") ? t.contentDocument : (M(t, "template") && (t = t.content || t), z.merge([], t.childNodes))
            }
        }, function(t, e) {
            z.fn[t] = function(i, o) {
                var n = z.map(this, e, i);
                return "Until" !== t.slice(-5) && (o = i), o && "string" == typeof o && (n = z.filter(o, n)), this.length > 1 && (B[t] || z.uniqueSort(n), N.test(t) && n.reverse()), this.pushStack(n)
            }
        });
        var D = /[^\x20\t\r\n\f]+/g;

        function F(t) {
            return t
        }

        function H(t) {
            throw t
        }

        function _(t, e, i, o) {
            var n;
            try {
                t && b(n = t.promise) ? n.call(t).done(e).fail(i) : t && b(n = t.then) ? n.call(t, e, i) : e.apply(void 0, [t].slice(o))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        z.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return z.each(t.match(D) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : z.extend({}, t);
            var e, i, o, n, s = [],
                a = [],
                r = -1,
                l = function() {
                    for (n = n || t.once, o = e = !0; a.length; r = -1)
                        for (i = a.shift(); ++r < s.length;) !1 === s[r].apply(i[0], i[1]) && t.stopOnFalse && (r = s.length, i = !1);
                    t.memory || (i = !1), e = !1, n && (s = i ? [] : "")
                },
                h = {
                    add: function() {
                        return s && (i && !e && (r = s.length - 1, a.push(i)), function e(i) {
                            z.each(i, function(i, o) {
                                b(o) ? t.unique && h.has(o) || s.push(o) : o && o.length && "string" !== k(o) && e(o)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return z.each(arguments, function(t, e) {
                            for (var i;
                                (i = z.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= r && r--
                        }), this
                    },
                    has: function(t) {
                        return t ? z.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return n = a = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return n = a = [], i || e || (s = i = ""), this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(t, i) {
                        return n || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || l()), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return h
        }, z.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", z.Callbacks("memory"), z.Callbacks("memory"), 2],
                        ["resolve", "done", z.Callbacks("once memory"), z.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", z.Callbacks("once memory"), z.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    n = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return n.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return z.Deferred(function(i) {
                                z.each(e, function(e, o) {
                                    var n = b(t[o[4]]) && t[o[4]];
                                    s[o[1]](function() {
                                        var t = n && n.apply(this, arguments);
                                        t && b(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this, n ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, o, n) {
                            var s = 0;

                            function a(t, e, o, n) {
                                return function() {
                                    var r = this,
                                        l = arguments,
                                        h = function() {
                                            var i, h;
                                            if (!(t < s)) {
                                                if ((i = o.apply(r, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                h = i && ("object" == typeof i || "function" == typeof i) && i.then, b(h) ? n ? h.call(i, a(s, e, F, n), a(s, e, H, n)) : (s++, h.call(i, a(s, e, F, n), a(s, e, H, n), a(s, e, F, e.notifyWith))) : (o !== F && (r = void 0, l = [i]), (n || e.resolveWith)(r, l))
                                            }
                                        },
                                        p = n ? h : function() {
                                            try {
                                                h()
                                            } catch (i) {
                                                z.Deferred.exceptionHook && z.Deferred.exceptionHook(i, p.stackTrace), t + 1 >= s && (o !== H && (r = void 0, l = [i]), e.rejectWith(r, l))
                                            }
                                        };
                                    t ? p() : (z.Deferred.getStackHook && (p.stackTrace = z.Deferred.getStackHook()), i.setTimeout(p))
                                }
                            }
                            return z.Deferred(function(i) {
                                e[0][3].add(a(0, i, b(n) ? n : F, i.notifyWith)), e[1][3].add(a(0, i, b(t) ? t : F)), e[2][3].add(a(0, i, b(o) ? o : H))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? z.extend(t, n) : n
                        }
                    },
                    s = {};
                return z.each(e, function(t, i) {
                    var a = i[2],
                        r = i[5];
                    n[i[1]] = a.add, r && a.add(function() {
                        o = r
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(i[3].fire), s[i[0]] = function() {
                        return s[i[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[i[0] + "With"] = a.fireWith
                }), n.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e = arguments.length,
                    i = e,
                    o = Array(i),
                    n = l.call(arguments),
                    s = z.Deferred(),
                    a = function(t) {
                        return function(i) {
                            o[t] = this, n[t] = arguments.length > 1 ? l.call(arguments) : i, --e || s.resolveWith(o, n)
                        }
                    };
                if (e <= 1 && (_(t, s.done(a(i)).resolve, s.reject, !e), "pending" === s.state() || b(n[i] && n[i].then))) return s.then();
                for (; i--;) _(n[i], a(i), s.reject);
                return s.promise()
            }
        });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        z.Deferred.exceptionHook = function(t, e) {
            i.console && i.console.warn && t && q.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, z.readyException = function(t) {
            i.setTimeout(function() {
                throw t
            })
        };
        var R = z.Deferred();

        function W() {
            a.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), z.ready()
        }
        z.fn.ready = function(t) {
            return R.then(t).catch(function(t) {
                z.readyException(t)
            }), this
        }, z.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --z.readyWait : z.isReady) || (z.isReady = !0, !0 !== t && --z.readyWait > 0 || R.resolveWith(a, [z]))
            }
        }), z.ready.then = R.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(z.ready) : (a.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));
        var U = function(t, e, i, o, n, s, a) {
                var r = 0,
                    l = t.length,
                    h = null == i;
                if ("object" === k(i))
                    for (r in n = !0, i) U(t, e, r, i[r], !0, s, a);
                else if (void 0 !== o && (n = !0, b(o) || (a = !0), h && (a ? (e.call(t, o), e = null) : (h = e, e = function(t, e, i) {
                        return h.call(z(t), i)
                    })), e))
                    for (; r < l; r++) e(t[r], i, a ? o : o.call(t[r], r, e(t[r], i)));
                return n ? t : h ? e.call(t) : l ? e(t[0], i) : s
            },
            V = /^-ms-/,
            Y = /-([a-z])/g;

        function Z(t, e) {
            return e.toUpperCase()
        }

        function X(t) {
            return t.replace(V, "ms-").replace(Y, Z)
        }
        var G = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function Q() {
            this.expando = z.expando + Q.uid++
        }
        Q.uid = 1, Q.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var o, n = this.cache(t);
                if ("string" == typeof e) n[X(e)] = i;
                else
                    for (o in e) n[X(o)] = e[o];
                return n
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in o ? [e] : e.match(D) || []).length;
                        for (; i--;) delete o[e[i]]
                    }(void 0 === e || z.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !z.isEmptyObject(e)
            }
        };
        var K = new Q,
            J = new Q,
            tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            et = /[A-Z]/g;

        function it(t, e, i) {
            var o;
            if (void 0 === i && 1 === t.nodeType)
                if (o = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(o))) {
                    try {
                        i = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(i)
                    } catch (t) {}
                    J.set(t, e, i)
                } else i = void 0;
            return i
        }
        z.extend({
            hasData: function(t) {
                return J.hasData(t) || K.hasData(t)
            },
            data: function(t, e, i) {
                return J.access(t, e, i)
            },
            removeData: function(t, e) {
                J.remove(t, e)
            },
            _data: function(t, e, i) {
                return K.access(t, e, i)
            },
            _removeData: function(t, e) {
                K.remove(t, e)
            }
        }), z.fn.extend({
            data: function(t, e) {
                var i, o, n, s = this[0],
                    a = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (n = J.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && 0 === (o = a[i].name).indexOf("data-") && (o = X(o.slice(5)), it(s, o, n[o]));
                        K.set(s, "hasDataAttrs", !0)
                    }
                    return n
                }
                return "object" == typeof t ? this.each(function() {
                    J.set(this, t)
                }) : U(this, function(e) {
                    var i;
                    if (s && void 0 === e) {
                        if (void 0 !== (i = J.get(s, t))) return i;
                        if (void 0 !== (i = it(s, t))) return i
                    } else this.each(function() {
                        J.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    J.remove(this, t)
                })
            }
        }), z.extend({
            queue: function(t, e, i) {
                var o;
                if (t) return e = (e || "fx") + "queue", o = K.get(t, e), i && (!o || Array.isArray(i) ? o = K.access(t, e, z.makeArray(i)) : o.push(i)), o || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = z.queue(t, e),
                    o = i.length,
                    n = i.shift(),
                    s = z._queueHooks(t, e);
                "inprogress" === n && (n = i.shift(), o--), n && ("fx" === e && i.unshift("inprogress"), delete s.stop, n.call(t, function() {
                    z.dequeue(t, e)
                }, s)), !o && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return K.get(t, i) || K.access(t, i, {
                    empty: z.Callbacks("once memory").add(function() {
                        K.remove(t, [e + "queue", i])
                    })
                })
            }
        }), z.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = z.queue(this, t, e);
                    z._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && z.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    z.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, o = 1,
                    n = z.Deferred(),
                    s = this,
                    a = this.length,
                    r = function() {
                        --o || n.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = K.get(s[a], t + "queueHooks")) && i.empty && (o++, i.empty.add(r));
                return r(), n.promise(e)
            }
        });
        var ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            nt = new RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
            st = ["Top", "Right", "Bottom", "Left"],
            at = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && z.contains(t.ownerDocument, t) && "none" === z.css(t, "display")
            },
            rt = function(t, e, i, o) {
                var n, s, a = {};
                for (s in e) a[s] = t.style[s], t.style[s] = e[s];
                for (s in n = i.apply(t, o || []), e) t.style[s] = a[s];
                return n
            };

        function lt(t, e, i, o) {
            var n, s, a = 20,
                r = o ? function() {
                    return o.cur()
                } : function() {
                    return z.css(t, e, "")
                },
                l = r(),
                h = i && i[3] || (z.cssNumber[e] ? "" : "px"),
                p = (z.cssNumber[e] || "px" !== h && +l) && nt.exec(z.css(t, e));
            if (p && p[3] !== h) {
                for (l /= 2, h = h || p[3], p = +l || 1; a--;) z.style(t, e, p + h), (1 - s) * (1 - (s = r() / l || .5)) <= 0 && (a = 0), p /= s;
                p *= 2, z.style(t, e, p + h), i = i || []
            }
            return i && (p = +p || +l || 0, n = i[1] ? p + (i[1] + 1) * i[2] : +i[2], o && (o.unit = h, o.start = p, o.end = n)), n
        }
        var ht = {};

        function pt(t) {
            var e, i = t.ownerDocument,
                o = t.nodeName,
                n = ht[o];
            return n || (e = i.body.appendChild(i.createElement(o)), n = z.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), ht[o] = n, n)
        }

        function ct(t, e) {
            for (var i, o, n = [], s = 0, a = t.length; s < a; s++)(o = t[s]).style && (i = o.style.display, e ? ("none" === i && (n[s] = K.get(o, "display") || null, n[s] || (o.style.display = "")), "" === o.style.display && at(o) && (n[s] = pt(o))) : "none" !== i && (n[s] = "none", K.set(o, "display", i)));
            for (s = 0; s < a; s++) null != n[s] && (t[s].style.display = n[s]);
            return t
        }
        z.fn.extend({
            show: function() {
                return ct(this, !0)
            },
            hide: function() {
                return ct(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    at(this) ? z(this).show() : z(this).hide()
                })
            }
        });
        var dt = /^(?:checkbox|radio)$/i,
            ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            mt = /^$|^module$|\/(?:java|ecma)script/i,
            gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ft(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && M(t, e) ? z.merge([t], i) : i
        }

        function vt(t, e) {
            for (var i = 0, o = t.length; i < o; i++) K.set(t[i], "globalEval", !e || K.get(e[i], "globalEval"))
        }
        gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td;
        var bt = /<|&#?\w+;/;

        function wt(t, e, i, o, n) {
            for (var s, a, r, l, h, p, c = e.createDocumentFragment(), d = [], u = 0, m = t.length; u < m; u++)
                if ((s = t[u]) || 0 === s)
                    if ("object" === k(s)) z.merge(d, s.nodeType ? [s] : s);
                    else if (bt.test(s)) {
                for (a = a || c.appendChild(e.createElement("div")), r = (ut.exec(s) || ["", ""])[1].toLowerCase(), l = gt[r] || gt._default, a.innerHTML = l[1] + z.htmlPrefilter(s) + l[2], p = l[0]; p--;) a = a.lastChild;
                z.merge(d, a.childNodes), (a = c.firstChild).textContent = ""
            } else d.push(e.createTextNode(s));
            for (c.textContent = "", u = 0; s = d[u++];)
                if (o && z.inArray(s, o) > -1) n && n.push(s);
                else if (h = z.contains(s.ownerDocument, s), a = ft(c.appendChild(s), "script"), h && vt(a), i)
                for (p = 0; s = a[p++];) mt.test(s.type || "") && i.push(s);
            return c
        }! function() {
            var t = a.createDocumentFragment().appendChild(a.createElement("div")),
                e = a.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var xt = a.documentElement,
            yt = /^key/,
            kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            zt = /^([^.]*)(?:\.(.+)|)/;

        function Et() {
            return !0
        }

        function At() {
            return !1
        }

        function Tt() {
            try {
                return a.activeElement
            } catch (t) {}
        }

        function It(t, e, i, o, n, s) {
            var a, r;
            if ("object" == typeof e) {
                for (r in "string" != typeof i && (o = o || i, i = void 0), e) It(t, r, i, o, e[r], s);
                return t
            }
            if (null == o && null == n ? (n = i, o = i = void 0) : null == n && ("string" == typeof i ? (n = o, o = void 0) : (n = o, o = i, i = void 0)), !1 === n) n = At;
            else if (!n) return t;
            return 1 === s && (a = n, (n = function(t) {
                return z().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = z.guid++)), t.each(function() {
                z.event.add(this, e, n, o, i)
            })
        }
        z.event = {
            global: {},
            add: function(t, e, i, o, n) {
                var s, a, r, l, h, p, c, d, u, m, g, f = K.get(t);
                if (f)
                    for (i.handler && (i = (s = i).handler, n = s.selector), n && z.find.matchesSelector(xt, n), i.guid || (i.guid = z.guid++), (l = f.events) || (l = f.events = {}), (a = f.handle) || (a = f.handle = function(e) {
                            return void 0 !== z && z.event.triggered !== e.type ? z.event.dispatch.apply(t, arguments) : void 0
                        }), h = (e = (e || "").match(D) || [""]).length; h--;) u = g = (r = zt.exec(e[h]) || [])[1], m = (r[2] || "").split(".").sort(), u && (c = z.event.special[u] || {}, u = (n ? c.delegateType : c.bindType) || u, c = z.event.special[u] || {}, p = z.extend({
                        type: u,
                        origType: g,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: n,
                        needsContext: n && z.expr.match.needsContext.test(n),
                        namespace: m.join(".")
                    }, s), (d = l[u]) || ((d = l[u] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, o, m, a) || t.addEventListener && t.addEventListener(u, a)), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), n ? d.splice(d.delegateCount++, 0, p) : d.push(p), z.event.global[u] = !0)
            },
            remove: function(t, e, i, o, n) {
                var s, a, r, l, h, p, c, d, u, m, g, f = K.hasData(t) && K.get(t);
                if (f && (l = f.events)) {
                    for (h = (e = (e || "").match(D) || [""]).length; h--;)
                        if (u = g = (r = zt.exec(e[h]) || [])[1], m = (r[2] || "").split(".").sort(), u) {
                            for (c = z.event.special[u] || {}, d = l[u = (o ? c.delegateType : c.bindType) || u] || [], r = r[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = d.length; s--;) p = d[s], !n && g !== p.origType || i && i.guid !== p.guid || r && !r.test(p.namespace) || o && o !== p.selector && ("**" !== o || !p.selector) || (d.splice(s, 1), p.selector && d.delegateCount--, c.remove && c.remove.call(t, p));
                            a && !d.length && (c.teardown && !1 !== c.teardown.call(t, m, f.handle) || z.removeEvent(t, u, f.handle), delete l[u])
                        } else
                            for (u in l) z.event.remove(t, u + e[h], i, o, !0);
                    z.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, o, n, s, a, r = z.event.fix(t),
                    l = new Array(arguments.length),
                    h = (K.get(this, "events") || {})[r.type] || [],
                    p = z.event.special[r.type] || {};
                for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (r.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, r)) {
                    for (a = z.event.handlers.call(this, r, h), e = 0;
                        (n = a[e++]) && !r.isPropagationStopped();)
                        for (r.currentTarget = n.elem, i = 0;
                            (s = n.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(s.namespace) || (r.handleObj = s, r.data = s.data, void 0 !== (o = ((z.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, l)) && !1 === (r.result = o) && (r.preventDefault(), r.stopPropagation()));
                    return p.postDispatch && p.postDispatch.call(this, r), r.result
                }
            },
            handlers: function(t, e) {
                var i, o, n, s, a, r = [],
                    l = e.delegateCount,
                    h = t.target;
                if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (s = [], a = {}, i = 0; i < l; i++) void 0 === a[n = (o = e[i]).selector + " "] && (a[n] = o.needsContext ? z(n, this).index(h) > -1 : z.find(n, this, null, [h]).length), a[n] && s.push(o);
                            s.length && r.push({
                                elem: h,
                                handlers: s
                            })
                        } return h = this, l < e.length && r.push({
                    elem: h,
                    handlers: e.slice(l)
                }), r
            },
            addProp: function(t, e) {
                Object.defineProperty(z.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: b(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[z.expando] ? t : new z.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Tt() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Tt() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && M(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return M(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, z.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, z.Event = function(t, e) {
            if (!(this instanceof z.Event)) return new z.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : At, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && z.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[z.expando] = !0
        }, z.Event.prototype = {
            constructor: z.Event,
            isDefaultPrevented: At,
            isPropagationStopped: At,
            isImmediatePropagationStopped: At,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, z.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, z.event.addProp), z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            z.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, o = t.relatedTarget,
                        n = t.handleObj;
                    return o && (o === this || z.contains(this, o)) || (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), z.fn.extend({
            on: function(t, e, i, o) {
                return It(this, t, e, i, o)
            },
            one: function(t, e, i, o) {
                return It(this, t, e, i, o, 1)
            },
            off: function(t, e, i) {
                var o, n;
                if (t && t.preventDefault && t.handleObj) return o = t.handleObj, z(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (n in t) this.off(n, e, t[n]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = At), this.each(function() {
                    z.event.remove(this, t, i, e)
                })
            }
        });
        var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ct = /<script|<style|<link/i,
            Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ot(t, e) {
            return M(t, "table") && M(11 !== e.nodeType ? e : e.firstChild, "tr") && z(t).children("tbody")[0] || t
        }

        function Lt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function jt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Nt(t, e) {
            var i, o, n, s, a, r, l, h;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (s = K.access(t), a = K.set(e, s), h = s.events))
                    for (n in delete a.handle, a.events = {}, h)
                        for (i = 0, o = h[n].length; i < o; i++) z.event.add(e, n, h[n][i]);
                J.hasData(t) && (r = J.access(t), l = z.extend({}, r), J.set(e, l))
            }
        }

        function Bt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && dt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function Pt(t, e, i, o) {
            e = h.apply([], e);
            var n, s, a, r, l, p, c = 0,
                d = t.length,
                u = d - 1,
                m = e[0],
                g = b(m);
            if (g || d > 1 && "string" == typeof m && !v.checkClone && Mt.test(m)) return t.each(function(n) {
                var s = t.eq(n);
                g && (e[0] = m.call(this, n, s.html())), Pt(s, e, i, o)
            });
            if (d && (s = (n = wt(e, t[0].ownerDocument, !1, t, o)).firstChild, 1 === n.childNodes.length && (n = s), s || o)) {
                for (r = (a = z.map(ft(n, "script"), Lt)).length; c < d; c++) l = n, c !== u && (l = z.clone(l, !0, !0), r && z.merge(a, ft(l, "script"))), i.call(t[c], l, c);
                if (r)
                    for (p = a[a.length - 1].ownerDocument, z.map(a, jt), c = 0; c < r; c++) l = a[c], mt.test(l.type || "") && !K.access(l, "globalEval") && z.contains(p, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? z._evalUrl && z._evalUrl(l.src) : y(l.textContent.replace($t, ""), p, l))
            }
            return t
        }

        function Dt(t, e, i) {
            for (var o, n = e ? z.filter(e, t) : t, s = 0; null != (o = n[s]); s++) i || 1 !== o.nodeType || z.cleanData(ft(o)), o.parentNode && (i && z.contains(o.ownerDocument, o) && vt(ft(o, "script")), o.parentNode.removeChild(o));
            return t
        }
        z.extend({
            htmlPrefilter: function(t) {
                return t.replace(St, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var o, n, s, a, r = t.cloneNode(!0),
                    l = z.contains(t.ownerDocument, t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || z.isXMLDoc(t)))
                    for (a = ft(r), o = 0, n = (s = ft(t)).length; o < n; o++) Bt(s[o], a[o]);
                if (e)
                    if (i)
                        for (s = s || ft(t), a = a || ft(r), o = 0, n = s.length; o < n; o++) Nt(s[o], a[o]);
                    else Nt(t, r);
                return (a = ft(r, "script")).length > 0 && vt(a, !l && ft(t, "script")), r
            },
            cleanData: function(t) {
                for (var e, i, o, n = z.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (G(i)) {
                        if (e = i[K.expando]) {
                            if (e.events)
                                for (o in e.events) n[o] ? z.event.remove(i, o) : z.removeEvent(i, o, e.handle);
                            i[K.expando] = void 0
                        }
                        i[J.expando] && (i[J.expando] = void 0)
                    }
            }
        }), z.fn.extend({
            detach: function(t) {
                return Dt(this, t, !0)
            },
            remove: function(t) {
                return Dt(this, t)
            },
            text: function(t) {
                return U(this, function(t) {
                    return void 0 === t ? z.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Pt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return Pt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Ot(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Pt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Pt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (z.cleanData(ft(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return z.clone(this, t, e)
                })
            },
            html: function(t) {
                return U(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ct.test(t) && !gt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = z.htmlPrefilter(t);
                        try {
                            for (; i < o; i++) 1 === (e = this[i] || {}).nodeType && (z.cleanData(ft(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Pt(this, arguments, function(e) {
                    var i = this.parentNode;
                    z.inArray(this, t) < 0 && (z.cleanData(ft(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            z.fn[t] = function(t) {
                for (var i, o = [], n = z(t), s = n.length - 1, a = 0; a <= s; a++) i = a === s ? this : this.clone(!0), z(n[a])[e](i), p.apply(o, i.get());
                return this.pushStack(o)
            }
        });
        var Ft = new RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
            Ht = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = i), e.getComputedStyle(t)
            },
            _t = new RegExp(st.join("|"), "i");

        function qt(t, e, i) {
            var o, n, s, a, r = t.style;
            return (i = i || Ht(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || z.contains(t.ownerDocument, t) || (a = z.style(t, e)), !v.pixelBoxStyles() && Ft.test(a) && _t.test(e) && (o = r.width, n = r.minWidth, s = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = o, r.minWidth = n, r.maxWidth = s)), void 0 !== a ? a + "" : a
        }

        function Rt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (p) {
                    h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", p.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xt.appendChild(h).appendChild(p);
                    var t = i.getComputedStyle(p);
                    o = "1%" !== t.top, l = 12 === e(t.marginLeft), p.style.right = "60%", r = 36 === e(t.right), n = 36 === e(t.width), p.style.position = "absolute", s = 36 === p.offsetWidth || "absolute", xt.removeChild(h), p = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var o, n, s, r, l, h = a.createElement("div"),
                p = a.createElement("div");
            p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === p.style.backgroundClip, z.extend(v, {
                boxSizingReliable: function() {
                    return t(), n
                },
                pixelBoxStyles: function() {
                    return t(), r
                },
                pixelPosition: function() {
                    return t(), o
                },
                reliableMarginLeft: function() {
                    return t(), l
                },
                scrollboxSize: function() {
                    return t(), s
                }
            }))
        }();
        var Wt = /^(none|table(?!-c[ea]).+)/,
            Ut = /^--/,
            Vt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Zt = ["Webkit", "Moz", "ms"],
            Xt = a.createElement("div").style;

        function Gt(t) {
            var e = z.cssProps[t];
            return e || (e = z.cssProps[t] = function(t) {
                if (t in Xt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = Zt.length; i--;)
                    if ((t = Zt[i] + e) in Xt) return t
            }(t) || t), e
        }

        function Qt(t, e, i) {
            var o = nt.exec(e);
            return o ? Math.max(0, o[2] - (i || 0)) + (o[3] || "px") : e
        }

        function Kt(t, e, i, o, n, s) {
            var a = "width" === e ? 1 : 0,
                r = 0,
                l = 0;
            if (i === (o ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === i && (l += z.css(t, i + st[a], !0, n)), o ? ("content" === i && (l -= z.css(t, "padding" + st[a], !0, n)), "margin" !== i && (l -= z.css(t, "border" + st[a] + "Width", !0, n))) : (l += z.css(t, "padding" + st[a], !0, n), "padding" !== i ? l += z.css(t, "border" + st[a] + "Width", !0, n) : r += z.css(t, "border" + st[a] + "Width", !0, n));
            return !o && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - r - .5))), l
        }

        function Jt(t, e, i) {
            var o = Ht(t),
                n = qt(t, e, o),
                s = "border-box" === z.css(t, "boxSizing", !1, o),
                a = s;
            if (Ft.test(n)) {
                if (!i) return n;
                n = "auto"
            }
            return a = a && (v.boxSizingReliable() || n === t.style[e]), ("auto" === n || !parseFloat(n) && "inline" === z.css(t, "display", !1, o)) && (n = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (n = parseFloat(n) || 0) + Kt(t, e, i || (s ? "border" : "content"), a, o, n) + "px"
        }

        function te(t, e, i, o, n) {
            return new te.prototype.init(t, e, i, o, n)
        }
        z.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = qt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, i, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var n, s, a, r = X(e),
                        l = Ut.test(e),
                        h = t.style;
                    if (l || (e = Gt(r)), a = z.cssHooks[e] || z.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (n = a.get(t, !1, o)) ? n : h[e];
                    "string" == (s = typeof i) && (n = nt.exec(i)) && n[1] && (i = lt(t, e, n), s = "number"), null != i && i == i && ("number" === s && (i += n && n[3] || (z.cssNumber[r] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, o)) || (l ? h.setProperty(e, i) : h[e] = i))
                }
            },
            css: function(t, e, i, o) {
                var n, s, a, r = X(e);
                return Ut.test(e) || (e = Gt(r)), (a = z.cssHooks[e] || z.cssHooks[r]) && "get" in a && (n = a.get(t, !0, i)), void 0 === n && (n = qt(t, e, o)), "normal" === n && e in Yt && (n = Yt[e]), "" === i || i ? (s = parseFloat(n), !0 === i || isFinite(s) ? s || 0 : n) : n
            }
        }), z.each(["height", "width"], function(t, e) {
            z.cssHooks[e] = {
                get: function(t, i, o) {
                    if (i) return !Wt.test(z.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, o) : rt(t, Vt, function() {
                        return Jt(t, e, o)
                    })
                },
                set: function(t, i, o) {
                    var n, s = Ht(t),
                        a = "border-box" === z.css(t, "boxSizing", !1, s),
                        r = o && Kt(t, e, o, a, s);
                    return a && v.scrollboxSize() === s.position && (r -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Kt(t, e, "border", !1, s) - .5)), r && (n = nt.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = z.css(t, e)), Qt(0, i, r)
                }
            }
        }), z.cssHooks.marginLeft = Rt(v.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            z.cssHooks[t + e] = {
                expand: function(i) {
                    for (var o = 0, n = {}, s = "string" == typeof i ? i.split(" ") : [i]; o < 4; o++) n[t + st[o] + e] = s[o] || s[o - 2] || s[0];
                    return n
                }
            }, "margin" !== t && (z.cssHooks[t + e].set = Qt)
        }), z.fn.extend({
            css: function(t, e) {
                return U(this, function(t, e, i) {
                    var o, n, s = {},
                        a = 0;
                    if (Array.isArray(e)) {
                        for (o = Ht(t), n = e.length; a < n; a++) s[e[a]] = z.css(t, e[a], !1, o);
                        return s
                    }
                    return void 0 !== i ? z.style(t, e, i) : z.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), z.Tween = te, te.prototype = {
            constructor: te,
            init: function(t, e, i, o, n, s) {
                this.elem = t, this.prop = i, this.easing = n || z.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = o, this.unit = s || (z.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = te.propHooks[this.prop];
                return t && t.get ? t.get(this) : te.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = te.propHooks[this.prop];
                return this.options.duration ? this.pos = e = z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : te.propHooks._default.set(this), this
            }
        }, te.prototype.init.prototype = te.prototype, te.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = z.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    z.fx.step[t.prop] ? z.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[z.cssProps[t.prop]] && !z.cssHooks[t.prop] ? t.elem[t.prop] = t.now : z.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, te.propHooks.scrollTop = te.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, z.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, z.fx = te.prototype.init, z.fx.step = {};
        var ee, ie, oe = /^(?:toggle|show|hide)$/,
            ne = /queueHooks$/;

        function se() {
            ie && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(se) : i.setTimeout(se, z.fx.interval), z.fx.tick())
        }

        function ae() {
            return i.setTimeout(function() {
                ee = void 0
            }), ee = Date.now()
        }

        function re(t, e) {
            var i, o = 0,
                n = {
                    height: t
                };
            for (e = e ? 1 : 0; o < 4; o += 2 - e) n["margin" + (i = st[o])] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function le(t, e, i) {
            for (var o, n = (he.tweeners[e] || []).concat(he.tweeners["*"]), s = 0, a = n.length; s < a; s++)
                if (o = n[s].call(i, e, t)) return o
        }

        function he(t, e, i) {
            var o, n, s = 0,
                a = he.prefilters.length,
                r = z.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (n) return !1;
                    for (var e = ee || ae(), i = Math.max(0, h.startTime + h.duration - e), o = 1 - (i / h.duration || 0), s = 0, a = h.tweens.length; s < a; s++) h.tweens[s].run(o);
                    return r.notifyWith(t, [h, o, i]), o < 1 && a ? i : (a || r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h]), !1)
                },
                h = r.promise({
                    elem: t,
                    props: z.extend({}, e),
                    opts: z.extend(!0, {
                        specialEasing: {},
                        easing: z.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: ee || ae(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var o = z.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(o), o
                    },
                    stop: function(e) {
                        var i = 0,
                            o = e ? h.tweens.length : 0;
                        if (n) return this;
                        for (n = !0; i < o; i++) h.tweens[i].run(1);
                        return e ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e])) : r.rejectWith(t, [h, e]), this
                    }
                }),
                p = h.props;
            for (function(t, e) {
                    var i, o, n, s, a;
                    for (i in t)
                        if (n = e[o = X(i)], s = t[i], Array.isArray(s) && (n = s[1], s = t[i] = s[0]), i !== o && (t[o] = s, delete t[i]), (a = z.cssHooks[o]) && "expand" in a)
                            for (i in s = a.expand(s), delete t[o], s) i in t || (t[i] = s[i], e[i] = n);
                        else e[o] = n
                }(p, h.opts.specialEasing); s < a; s++)
                if (o = he.prefilters[s].call(h, t, p, h.opts)) return b(o.stop) && (z._queueHooks(h.elem, h.opts.queue).stop = o.stop.bind(o)), o;
            return z.map(p, le, h), b(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), z.fx.timer(z.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h
        }
        z.Animation = z.extend(he, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return lt(i.elem, t, nt.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    b(t) ? (e = t, t = ["*"]) : t = t.match(D);
                    for (var i, o = 0, n = t.length; o < n; o++) i = t[o], he.tweeners[i] = he.tweeners[i] || [], he.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var o, n, s, a, r, l, h, p, c = "width" in e || "height" in e,
                        d = this,
                        u = {},
                        m = t.style,
                        g = t.nodeType && at(t),
                        f = K.get(t, "fxshow");
                    for (o in i.queue || (null == (a = z._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || r()
                        }), a.unqueued++, d.always(function() {
                            d.always(function() {
                                a.unqueued--, z.queue(t, "fx").length || a.empty.fire()
                            })
                        })), e)
                        if (n = e[o], oe.test(n)) {
                            if (delete e[o], s = s || "toggle" === n, n === (g ? "hide" : "show")) {
                                if ("show" !== n || !f || void 0 === f[o]) continue;
                                g = !0
                            }
                            u[o] = f && f[o] || z.style(t, o)
                        } if ((l = !z.isEmptyObject(e)) || !z.isEmptyObject(u))
                        for (o in c && 1 === t.nodeType && (i.overflow = [m.overflow, m.overflowX, m.overflowY], null == (h = f && f.display) && (h = K.get(t, "display")), "none" === (p = z.css(t, "display")) && (h ? p = h : (ct([t], !0), h = t.style.display || h, p = z.css(t, "display"), ct([t]))), ("inline" === p || "inline-block" === p && null != h) && "none" === z.css(t, "float") && (l || (d.done(function() {
                                m.display = h
                            }), null == h && (p = m.display, h = "none" === p ? "" : p)), m.display = "inline-block")), i.overflow && (m.overflow = "hidden", d.always(function() {
                                m.overflow = i.overflow[0], m.overflowX = i.overflow[1], m.overflowY = i.overflow[2]
                            })), l = !1, u) l || (f ? "hidden" in f && (g = f.hidden) : f = K.access(t, "fxshow", {
                            display: h
                        }), s && (f.hidden = !g), g && ct([t], !0), d.done(function() {
                            for (o in g || ct([t]), K.remove(t, "fxshow"), u) z.style(t, o, u[o])
                        })), l = le(g ? f[o] : 0, o, d), o in f || (f[o] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? he.prefilters.unshift(t) : he.prefilters.push(t)
                }
            }), z.speed = function(t, e, i) {
                var o = t && "object" == typeof t ? z.extend({}, t) : {
                    complete: i || !i && e || b(t) && t,
                    duration: t,
                    easing: i && e || e && !b(e) && e
                };
                return z.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in z.fx.speeds ? o.duration = z.fx.speeds[o.duration] : o.duration = z.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
                    b(o.old) && o.old.call(this), o.queue && z.dequeue(this, o.queue)
                }, o
            }, z.fn.extend({
                fadeTo: function(t, e, i, o) {
                    return this.filter(at).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, o)
                },
                animate: function(t, e, i, o) {
                    var n = z.isEmptyObject(t),
                        s = z.speed(e, i, o),
                        a = function() {
                            var e = he(this, z.extend({}, t), s);
                            (n || K.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, n || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                },
                stop: function(t, e, i) {
                    var o = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            n = null != t && t + "queueHooks",
                            s = z.timers,
                            a = K.get(this);
                        if (n) a[n] && a[n].stop && o(a[n]);
                        else
                            for (n in a) a[n] && a[n].stop && ne.test(n) && o(a[n]);
                        for (n = s.length; n--;) s[n].elem !== this || null != t && s[n].queue !== t || (s[n].anim.stop(i), e = !1, s.splice(n, 1));
                        !e && i || z.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = K.get(this),
                            o = i[t + "queue"],
                            n = i[t + "queueHooks"],
                            s = z.timers,
                            a = o ? o.length : 0;
                        for (i.finish = !0, z.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < a; e++) o[e] && o[e].finish && o[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), z.each(["toggle", "show", "hide"], function(t, e) {
                var i = z.fn[e];
                z.fn[e] = function(t, o, n) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(re(e, !0), t, o, n)
                }
            }), z.each({
                slideDown: re("show"),
                slideUp: re("hide"),
                slideToggle: re("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                z.fn[t] = function(t, i, o) {
                    return this.animate(e, t, i, o)
                }
            }), z.timers = [], z.fx.tick = function() {
                var t, e = 0,
                    i = z.timers;
                for (ee = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || z.fx.stop(), ee = void 0
            }, z.fx.timer = function(t) {
                z.timers.push(t), z.fx.start()
            }, z.fx.interval = 13, z.fx.start = function() {
                ie || (ie = !0, se())
            }, z.fx.stop = function() {
                ie = null
            }, z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, z.fn.delay = function(t, e) {
                return t = z.fx && z.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, o) {
                    var n = i.setTimeout(e, t);
                    o.stop = function() {
                        i.clearTimeout(n)
                    }
                })
            },
            function() {
                var t = a.createElement("input"),
                    e = a.createElement("select").appendChild(a.createElement("option"));
                t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = a.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value
            }();
        var pe, ce = z.expr.attrHandle;
        z.fn.extend({
            attr: function(t, e) {
                return U(this, z.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    z.removeAttr(this, t)
                })
            }
        }), z.extend({
            attr: function(t, e, i) {
                var o, n, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? z.prop(t, e, i) : (1 === s && z.isXMLDoc(t) || (n = z.attrHooks[e.toLowerCase()] || (z.expr.match.bool.test(e) ? pe : void 0)), void 0 !== i ? null === i ? void z.removeAttr(t, e) : n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (o = n.get(t, e)) ? o : null == (o = z.find.attr(t, e)) ? void 0 : o)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && M(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, o = 0,
                    n = e && e.match(D);
                if (n && 1 === t.nodeType)
                    for (; i = n[o++];) t.removeAttribute(i)
            }
        }), pe = {
            set: function(t, e, i) {
                return !1 === e ? z.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, z.each(z.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ce[e] || z.find.attr;
            ce[e] = function(t, e, o) {
                var n, s, a = e.toLowerCase();
                return o || (s = ce[a], ce[a] = n, n = null != i(t, e, o) ? a : null, ce[a] = s), n
            }
        });
        var de = /^(?:input|select|textarea|button)$/i,
            ue = /^(?:a|area)$/i;

        function me(t) {
            return (t.match(D) || []).join(" ")
        }

        function ge(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function fe(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(D) || []
        }
        z.fn.extend({
            prop: function(t, e) {
                return U(this, z.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[z.propFix[t] || t]
                })
            }
        }), z.extend({
            prop: function(t, e, i) {
                var o, n, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && z.isXMLDoc(t) || (e = z.propFix[e] || e, n = z.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : t[e] = i : n && "get" in n && null !== (o = n.get(t, e)) ? o : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = z.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (z.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            z.propFix[this.toLowerCase()] = this
        }), z.fn.extend({
            addClass: function(t) {
                var e, i, o, n, s, a, r, l = 0;
                if (b(t)) return this.each(function(e) {
                    z(this).addClass(t.call(this, e, ge(this)))
                });
                if ((e = fe(t)).length)
                    for (; i = this[l++];)
                        if (n = ge(i), o = 1 === i.nodeType && " " + me(n) + " ") {
                            for (a = 0; s = e[a++];) o.indexOf(" " + s + " ") < 0 && (o += s + " ");
                            n !== (r = me(o)) && i.setAttribute("class", r)
                        } return this
            },
            removeClass: function(t) {
                var e, i, o, n, s, a, r, l = 0;
                if (b(t)) return this.each(function(e) {
                    z(this).removeClass(t.call(this, e, ge(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = fe(t)).length)
                    for (; i = this[l++];)
                        if (n = ge(i), o = 1 === i.nodeType && " " + me(n) + " ") {
                            for (a = 0; s = e[a++];)
                                for (; o.indexOf(" " + s + " ") > -1;) o = o.replace(" " + s + " ", " ");
                            n !== (r = me(o)) && i.setAttribute("class", r)
                        } return this
            },
            toggleClass: function(t, e) {
                var i = typeof t,
                    o = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && o ? e ? this.addClass(t) : this.removeClass(t) : b(t) ? this.each(function(i) {
                    z(this).toggleClass(t.call(this, i, ge(this), e), e)
                }) : this.each(function() {
                    var e, n, s, a;
                    if (o)
                        for (n = 0, s = z(this), a = fe(t); e = a[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = ge(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, o = 0;
                for (e = " " + t + " "; i = this[o++];)
                    if (1 === i.nodeType && (" " + me(ge(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ve = /\r/g;
        z.fn.extend({
            val: function(t) {
                var e, i, o, n = this[0];
                return arguments.length ? (o = b(t), this.each(function(i) {
                    var n;
                    1 === this.nodeType && (null == (n = o ? t.call(this, i, z(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = z.map(n, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = z.valHooks[this.type] || z.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
                })) : n ? (e = z.valHooks[n.type] || z.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof(i = n.value) ? i.replace(ve, "") : null == i ? "" : i : void 0
            }
        }), z.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = z.find.attr(t, "value");
                        return null != e ? e : me(z.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, o, n = t.options,
                            s = t.selectedIndex,
                            a = "select-one" === t.type,
                            r = a ? null : [],
                            l = a ? s + 1 : n.length;
                        for (o = s < 0 ? l : a ? s : 0; o < l; o++)
                            if (((i = n[o]).selected || o === s) && !i.disabled && (!i.parentNode.disabled || !M(i.parentNode, "optgroup"))) {
                                if (e = z(i).val(), a) return e;
                                r.push(e)
                            } return r
                    },
                    set: function(t, e) {
                        for (var i, o, n = t.options, s = z.makeArray(e), a = n.length; a--;)((o = n[a]).selected = z.inArray(z.valHooks.option.get(o), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), z.each(["radio", "checkbox"], function() {
            z.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = z.inArray(z(t).val(), e) > -1
                }
            }, v.checkOn || (z.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), v.focusin = "onfocusin" in i;
        var be = /^(?:focusinfocus|focusoutblur)$/,
            we = function(t) {
                t.stopPropagation()
            };
        z.extend(z.event, {
            trigger: function(t, e, o, n) {
                var s, r, l, h, p, c, d, u, g = [o || a],
                    f = m.call(t, "type") ? t.type : t,
                    v = m.call(t, "namespace") ? t.namespace.split(".") : [];
                if (r = u = l = o = o || a, 3 !== o.nodeType && 8 !== o.nodeType && !be.test(f + z.event.triggered) && (f.indexOf(".") > -1 && (f = (v = f.split(".")).shift(), v.sort()), p = f.indexOf(":") < 0 && "on" + f, (t = t[z.expando] ? t : new z.Event(f, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : z.makeArray(e, [t]), d = z.event.special[f] || {}, n || !d.trigger || !1 !== d.trigger.apply(o, e))) {
                    if (!n && !d.noBubble && !w(o)) {
                        for (h = d.delegateType || f, be.test(h + f) || (r = r.parentNode); r; r = r.parentNode) g.push(r), l = r;
                        l === (o.ownerDocument || a) && g.push(l.defaultView || l.parentWindow || i)
                    }
                    for (s = 0;
                        (r = g[s++]) && !t.isPropagationStopped();) u = r, t.type = s > 1 ? h : d.bindType || f, (c = (K.get(r, "events") || {})[t.type] && K.get(r, "handle")) && c.apply(r, e), (c = p && r[p]) && c.apply && G(r) && (t.result = c.apply(r, e), !1 === t.result && t.preventDefault());
                    return t.type = f, n || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), e) || !G(o) || p && b(o[f]) && !w(o) && ((l = o[p]) && (o[p] = null), z.event.triggered = f, t.isPropagationStopped() && u.addEventListener(f, we), o[f](), t.isPropagationStopped() && u.removeEventListener(f, we), z.event.triggered = void 0, l && (o[p] = l)), t.result
                }
            },
            simulate: function(t, e, i) {
                var o = z.extend(new z.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                z.event.trigger(o, null, e)
            }
        }), z.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    z.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return z.event.trigger(t, e, i, !0)
            }
        }), v.focusin || z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                z.event.simulate(e, t.target, z.event.fix(t))
            };
            z.event.special[e] = {
                setup: function() {
                    var o = this.ownerDocument || this,
                        n = K.access(o, e);
                    n || o.addEventListener(t, i, !0), K.access(o, e, (n || 0) + 1)
                },
                teardown: function() {
                    var o = this.ownerDocument || this,
                        n = K.access(o, e) - 1;
                    n ? K.access(o, e, n) : (o.removeEventListener(t, i, !0), K.remove(o, e))
                }
            }
        });
        var xe = i.location,
            ye = Date.now(),
            ke = /\?/;
        z.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || z.error("Invalid XML: " + t), e
        };
        var ze = /\[\]$/,
            Ee = /\r?\n/g,
            Ae = /^(?:submit|button|image|reset|file)$/i,
            Te = /^(?:input|select|textarea|keygen)/i;

        function Ie(t, e, i, o) {
            var n;
            if (Array.isArray(e)) z.each(e, function(e, n) {
                i || ze.test(t) ? o(t, n) : Ie(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, o)
            });
            else if (i || "object" !== k(e)) o(t, e);
            else
                for (n in e) Ie(t + "[" + n + "]", e[n], i, o)
        }
        z.param = function(t, e) {
            var i, o = [],
                n = function(t, e) {
                    var i = b(e) ? e() : e;
                    o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (Array.isArray(t) || t.jquery && !z.isPlainObject(t)) z.each(t, function() {
                n(this.name, this.value)
            });
            else
                for (i in t) Ie(i, t[i], e, n);
            return o.join("&")
        }, z.fn.extend({
            serialize: function() {
                return z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = z.prop(this, "elements");
                    return t ? z.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !z(this).is(":disabled") && Te.test(this.nodeName) && !Ae.test(t) && (this.checked || !dt.test(t))
                }).map(function(t, e) {
                    var i = z(this).val();
                    return null == i ? null : Array.isArray(i) ? z.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ee, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ee, "\r\n")
                    }
                }).get()
            }
        });
        var Se = /%20/g,
            Ce = /#.*$/,
            Me = /([?&])_=[^&]*/,
            $e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Oe = /^(?:GET|HEAD)$/,
            Le = /^\/\//,
            je = {},
            Ne = {},
            Be = "*/".concat("*"),
            Pe = a.createElement("a");

        function De(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var o, n = 0,
                    s = e.toLowerCase().match(D) || [];
                if (b(i))
                    for (; o = s[n++];) "+" === o[0] ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(i)) : (t[o] = t[o] || []).push(i)
            }
        }

        function Fe(t, e, i, o) {
            var n = {},
                s = t === Ne;

            function a(r) {
                var l;
                return n[r] = !0, z.each(t[r] || [], function(t, r) {
                    var h = r(e, i, o);
                    return "string" != typeof h || s || n[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h), a(h), !1)
                }), l
            }
            return a(e.dataTypes[0]) || !n["*"] && a("*")
        }

        function He(t, e) {
            var i, o, n = z.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((n[i] ? t : o || (o = {}))[i] = e[i]);
            return o && z.extend(!0, t, o), t
        }
        Pe.href = xe.href, z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? He(He(t, z.ajaxSettings), e) : He(z.ajaxSettings, t)
            },
            ajaxPrefilter: De(je),
            ajaxTransport: De(Ne),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var o, n, s, r, l, h, p, c, d, u, m = z.ajaxSetup({}, e),
                    g = m.context || m,
                    f = m.context && (g.nodeType || g.jquery) ? z(g) : z.event,
                    v = z.Deferred(),
                    b = z.Callbacks("once memory"),
                    w = m.statusCode || {},
                    x = {},
                    y = {},
                    k = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (p) {
                                if (!r)
                                    for (r = {}; e = $e.exec(s);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return p ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == p && (t = y[t.toLowerCase()] = y[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == p && (m.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (p) E.always(t[E.status]);
                                else
                                    for (e in t) w[e] = [w[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || k;
                            return o && o.abort(e), A(0, e), this
                        }
                    };
                if (v.promise(E), m.url = ((t || m.url || xe.href) + "").replace(Le, xe.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(D) || [""], null == m.crossDomain) {
                    h = a.createElement("a");
                    try {
                        h.href = m.url, h.href = h.href, m.crossDomain = Pe.protocol + "//" + Pe.host != h.protocol + "//" + h.host
                    } catch (t) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = z.param(m.data, m.traditional)), Fe(je, m, e, E), p) return E;
                for (d in (c = z.event && m.global) && 0 == z.active++ && z.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Oe.test(m.type), n = m.url.replace(Ce, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Se, "+")) : (u = m.url.slice(n.length), m.data && (m.processData || "string" == typeof m.data) && (n += (ke.test(n) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (n = n.replace(Me, "$1"), u = (ke.test(n) ? "&" : "?") + "_=" + ye++ + u), m.url = n + u), m.ifModified && (z.lastModified[n] && E.setRequestHeader("If-Modified-Since", z.lastModified[n]), z.etag[n] && E.setRequestHeader("If-None-Match", z.etag[n])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && E.setRequestHeader("Content-Type", m.contentType), E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : m.accepts["*"]), m.headers) E.setRequestHeader(d, m.headers[d]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, E, m) || p)) return E.abort();
                if (k = "abort", b.add(m.complete), E.done(m.success), E.fail(m.error), o = Fe(Ne, m, e, E)) {
                    if (E.readyState = 1, c && f.trigger("ajaxSend", [E, m]), p) return E;
                    m.async && m.timeout > 0 && (l = i.setTimeout(function() {
                        E.abort("timeout")
                    }, m.timeout));
                    try {
                        p = !1, o.send(x, A)
                    } catch (t) {
                        if (p) throw t;
                        A(-1, t)
                    }
                } else A(-1, "No Transport");

                function A(t, e, a, r) {
                    var h, d, u, x, y, k = e;
                    p || (p = !0, l && i.clearTimeout(l), o = void 0, s = r || "", E.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, a && (x = function(t, e, i) {
                        for (var o, n, s, a, r = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (o)
                            for (n in r)
                                if (r[n] && r[n].test(o)) {
                                    l.unshift(n);
                                    break
                                } if (l[0] in i) s = l[0];
                        else {
                            for (n in i) {
                                if (!l[0] || t.converters[n + " " + l[0]]) {
                                    s = n;
                                    break
                                }
                                a || (a = n)
                            }
                            s = s || a
                        }
                        if (s) return s !== l[0] && l.unshift(s), i[s]
                    }(m, E, a)), x = function(t, e, i, o) {
                        var n, s, a, r, l, h = {},
                            p = t.dataTypes.slice();
                        if (p[1])
                            for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
                        for (s = p.shift(); s;)
                            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && o && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = p.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(a = h[l + " " + s] || h["* " + s]))
                                for (n in h)
                                    if ((r = n.split(" "))[1] === s && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                                        !0 === a ? a = h[n] : !0 !== h[n] && (s = r[0], p.unshift(r[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try {
                                    e = a(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: a ? t : "No conversion from " + l + " to " + s
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(m, x, E, h), h ? (m.ifModified && ((y = E.getResponseHeader("Last-Modified")) && (z.lastModified[n] = y), (y = E.getResponseHeader("etag")) && (z.etag[n] = y)), 204 === t || "HEAD" === m.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, d = x.data, h = !(u = x.error))) : (u = k, !t && k || (k = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || k) + "", h ? v.resolveWith(g, [d, k, E]) : v.rejectWith(g, [E, k, u]), E.statusCode(w), w = void 0, c && f.trigger(h ? "ajaxSuccess" : "ajaxError", [E, m, h ? d : u]), b.fireWith(g, [E, k]), c && (f.trigger("ajaxComplete", [E, m]), --z.active || z.event.trigger("ajaxStop")))
                }
                return E
            },
            getJSON: function(t, e, i) {
                return z.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return z.get(t, void 0, e, "script")
            }
        }), z.each(["get", "post"], function(t, e) {
            z[e] = function(t, i, o, n) {
                return b(i) && (n = n || o, o = i, i = void 0), z.ajax(z.extend({
                    url: t,
                    type: e,
                    dataType: n,
                    data: i,
                    success: o
                }, z.isPlainObject(t) && t))
            }
        }), z._evalUrl = function(t) {
            return z.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, z.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (b(t) && (t = t.call(this[0])), e = z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return b(t) ? this.each(function(e) {
                    z(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = z(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = b(t);
                return this.each(function(i) {
                    z(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    z(this).replaceWith(this.childNodes)
                }), this
            }
        }), z.expr.pseudos.hidden = function(t) {
            return !z.expr.pseudos.visible(t)
        }, z.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, z.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        };
        var _e = {
                0: 200,
                1223: 204
            },
            qe = z.ajaxSettings.xhr();
        v.cors = !!qe && "withCredentials" in qe, v.ajax = qe = !!qe, z.ajaxTransport(function(t) {
            var e, o;
            if (v.cors || qe && !t.crossDomain) return {
                send: function(n, s) {
                    var a, r = t.xhr();
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) r[a] = t.xhrFields[a];
                    for (a in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) r.setRequestHeader(a, n[a]);
                    e = function(t) {
                        return function() {
                            e && (e = o = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? s(0, "error") : s(r.status, r.statusText) : s(_e[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = e(), o = r.onerror = r.ontimeout = e("error"), void 0 !== r.onabort ? r.onabort = o : r.onreadystatechange = function() {
                        4 === r.readyState && i.setTimeout(function() {
                            e && o()
                        })
                    }, e = e("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), z.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return z.globalEval(t), t
                }
            }
        }), z.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), z.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain) return {
                send: function(o, n) {
                    e = z("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && n("error" === t.type ? 404 : 200, t.type)
                    }), a.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Re = [],
            We = /(=)\?(?=&|$)|\?\?/;
        z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Re.pop() || z.expando + "_" + ye++;
                return this[t] = !0, t
            }
        }), z.ajaxPrefilter("json jsonp", function(t, e, o) {
            var n, s, a, r = !1 !== t.jsonp && (We.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(t.data) && "data");
            if (r || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(We, "$1" + n) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
                return a || z.error(n + " was not called"), a[0]
            }, t.dataTypes[0] = "json", s = i[n], i[n] = function() {
                a = arguments
            }, o.always(function() {
                void 0 === s ? z(i).removeProp(n) : i[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, Re.push(n)), a && b(s) && s(a[0]), a = s = void 0
            }), "script"
        }), v.createHTMLDocument = function() {
            var t = a.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), z.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (v.createHTMLDocument ? ((o = (e = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, e.head.appendChild(o)) : e = a), s = !i && [], (n = $.exec(t)) ? [e.createElement(n[1])] : (n = wt([t], e, s), s && s.length && z(s).remove(), z.merge([], n.childNodes)));
            var o, n, s
        }, z.fn.load = function(t, e, i) {
            var o, n, s, a = this,
                r = t.indexOf(" ");
            return r > -1 && (o = me(t.slice(r)), t = t.slice(0, r)), b(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), a.length > 0 && z.ajax({
                url: t,
                type: n || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, a.html(o ? z("<div>").append(z.parseHTML(t)).find(o) : t)
            }).always(i && function(t, e) {
                a.each(function() {
                    i.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            z.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), z.expr.pseudos.animated = function(t) {
            return z.grep(z.timers, function(e) {
                return t === e.elem
            }).length
        }, z.offset = {
            setOffset: function(t, e, i) {
                var o, n, s, a, r, l, h = z.css(t, "position"),
                    p = z(t),
                    c = {};
                "static" === h && (t.style.position = "relative"), r = p.offset(), s = z.css(t, "top"), l = z.css(t, "left"), ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1 ? (a = (o = p.position()).top, n = o.left) : (a = parseFloat(s) || 0, n = parseFloat(l) || 0), b(e) && (e = e.call(t, i, z.extend({}, r))), null != e.top && (c.top = e.top - r.top + a), null != e.left && (c.left = e.left - r.left + n), "using" in e ? e.using.call(t, c) : p.css(c)
            }
        }, z.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    z.offset.setOffset(this, t, e)
                });
                var e, i, o = this[0];
                return o ? o.getClientRects().length ? (e = o.getBoundingClientRect(), i = o.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, o = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === z.css(o, "position")) e = o.getBoundingClientRect();
                    else {
                        for (e = this.offset(), i = o.ownerDocument, t = o.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === z.css(t, "position");) t = t.parentNode;
                        t && t !== o && 1 === t.nodeType && ((n = z(t).offset()).top += z.css(t, "borderTopWidth", !0), n.left += z.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - n.top - z.css(o, "marginTop", !0),
                        left: e.left - n.left - z.css(o, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === z.css(t, "position");) t = t.offsetParent;
                    return t || xt
                })
            }
        }), z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            z.fn[t] = function(o) {
                return U(this, function(t, o, n) {
                    var s;
                    if (w(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === n) return s ? s[e] : t[o];
                    s ? s.scrollTo(i ? s.pageXOffset : n, i ? n : s.pageYOffset) : t[o] = n
                }, t, o, arguments.length)
            }
        }), z.each(["top", "left"], function(t, e) {
            z.cssHooks[e] = Rt(v.pixelPosition, function(t, i) {
                if (i) return i = qt(t, e), Ft.test(i) ? z(t).position()[e] + "px" : i
            })
        }), z.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            z.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, o) {
                z.fn[o] = function(n, s) {
                    var a = arguments.length && (i || "boolean" != typeof n),
                        r = i || (!0 === n || !0 === s ? "margin" : "border");
                    return U(this, function(e, i, n) {
                        var s;
                        return w(e) ? 0 === o.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? z.css(e, i, r) : z.style(e, i, n, r)
                    }, e, a ? n : void 0, a)
                }
            })
        }), z.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            z.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), z.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), z.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, o) {
                return this.on(e, t, i, o)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), z.proxy = function(t, e) {
            var i, o, n;
            if ("string" == typeof e && (i = t[e], e = t, t = i), b(t)) return o = l.call(arguments, 2), (n = function() {
                return t.apply(e || this, o.concat(l.call(arguments)))
            }).guid = t.guid = t.guid || z.guid++, n
        }, z.holdReady = function(t) {
            t ? z.readyWait++ : z.ready(!0)
        }, z.isArray = Array.isArray, z.parseJSON = JSON.parse, z.nodeName = M, z.isFunction = b, z.isWindow = w, z.camelCase = X, z.type = k, z.now = Date.now, z.isNumeric = function(t) {
            var e = z.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, void 0 === (o = function() {
            return z
        }.apply(e, [])) || (t.exports = o);
        var Ue = i.jQuery,
            Ve = i.$;
        return z.noConflict = function(t) {
            return i.$ === z && (i.$ = Ve), t && i.jQuery === z && (i.jQuery = Ue), z
        }, n || (i.jQuery = i.$ = z), z
    })
}, function(t, e) {
    var i;

    function o(t, e, i) {
        var o = this;
        o.timeout = t;
        var n = null,
            s = 0,
            a = !1,
            r = !1,
            l = !1;
        this.pause = function() {
            r && (a = !0, clearInterval(n))
        }, this.resume = function(t) {
            l && !t || (l = !1, r && a && (a = !1, n = setInterval(function() {
                (s += 50) > o.timeout && (clearInterval(n), e && e()), i && i(s / o.timeout)
            }, 50)))
        }, this.stop = function() {
            clearInterval(n), i && i(-1), s = 0, a = !1, r = !1
        }, this.start = function() {
            s = 0, a = !1, r = !0, n = setInterval(function() {
                (s += 50) > o.timeout && (clearInterval(n), e && e()), i && i(s / o.timeout)
            }, 50)
        }, this.startandpause = function() {
            s = 0, a = !0, r = !0, l = !0
        }, this.unsetstartandpause = function() {
            l = !1
        }
    }(i = jQuery).fn.asHTML5VideoControls = function(t, e, o, n, s, a, r, l, h) {
            var p = "ontouchstart" in window,
                c = p ? "touchstart" : "mousedown",
                d = p ? "touchmove" : "mousemove",
                u = p ? "touchcancel" : "mouseup",
                m = p ? 48 : 36,
                g = null,
                f = null,
                v = !1,
                b = !0,
                w = i(this).data("ishd"),
                x = i(this).data("hd"),
                y = i(this).data("src"),
                k = i(this);
            k.get(0).removeAttribute("controls");
            var z = i("<div class='html5boxVideoPlay'></div>");
            k.after(z);
            var E = h && "playbutton" in h && h.playbutton.length > 0 ? h.playbutton : t + "html5boxplayer_playvideo.png";
            z.css({
                position: "absolute",
                top: "50%",
                left: "50%",
                display: "block",
                cursor: "pointer",
                width: 64,
                height: 64,
                "margin-left": -32,
                "margin-top": -32,
                "background-image": "url('" + E + "')",
                "background-position": "center center",
                "background-repeat": "no-repeat"
            }).on("click", function() {
                k.get(0).play()
            });
            var A = i("<div class='html5boxVideoFullscreenBg'></div>"),
                T = i("<div class='html5boxVideoControls'><div class='html5boxVideoControlsBg'></div><div class='html5boxPlayPause'><div class='html5boxPlay'></div><div class='html5boxPause'></div></div><div class='html5boxTimeCurrent'>--:--</div><div class='html5boxFullscreen'></div><div class='html5boxHD'></div><div class='html5boxVolume'><div class='html5boxVolumeButton'></div><div class='html5boxVolumeBar'><div class='html5boxVolumeBarBg'><div class='html5boxVolumeBarActive'></div></div></div></div><div class='html5boxTimeTotal'>--:--</div><div class='html5boxSeeker'><div class='html5boxSeekerBuffer'></div><div class='html5boxSeekerPlay'></div><div class='html5boxSeekerHandler'></div></div><div style='clear:both;'></div></div>");
            k.after(T), k.after(A), A.css({
                display: "none",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }), T.css({
                display: "block",
                position: "absolute",
                width: "100%",
                height: m,
                left: 0,
                bottom: 0,
                right: 0,
                margin: "0 auto"
            });
            var I = function() {
                b = !0
            };
            k.on("touch click mousemove mouseenter", function() {
                b = !0
            }), n || setInterval(function() {
                b && (T.show(), b = !1, clearTimeout(g), g = setTimeout(function() {
                    k.get(0).paused || T.fadeOut()
                }, 5e3))
            }, 250), i(".html5boxVideoControlsBg", T).css({
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                "background-color": "#000000",
                opacity: .7,
                filter: "alpha(opacity=70)"
            }), i(".html5boxPlayPause", T).css({
                display: "block",
                position: "relative",
                width: "32px",
                height: "32px",
                margin: Math.floor((m - 32) / 2),
                float: "left"
            });
            var S = i(".html5boxPlay", T),
                C = i(".html5boxPause", T);
            S.css({
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: "32px",
                height: "32px",
                cursor: "pointer",
                "background-image": "url('" + t + "html5boxplayer_playpause.png')",
                "background-position": "top left"
            }).hover(function() {
                i(this).css({
                    "background-position": "bottom left"
                })
            }, function() {
                i(this).css({
                    "background-position": "top left"
                })
            }).on("click", function() {
                k.get(0).play()
            }), C.css({
                display: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "32px",
                height: "32px",
                cursor: "pointer",
                "background-image": "url('" + t + "html5boxplayer_playpause.png')",
                "background-position": "top right"
            }).hover(function() {
                i(this).css({
                    "background-position": "bottom right"
                })
            }, function() {
                i(this).css({
                    "background-position": "top right"
                })
            }).on("click", function() {
                k.get(0).pause()
            });
            var M = i(".html5boxTimeCurrent", T),
                $ = i(".html5boxTimeTotal", T),
                O = i(".html5boxSeeker", T),
                L = i(".html5boxSeekerPlay", T),
                j = i(".html5boxSeekerBuffer", T),
                N = i(".html5boxSeekerHandler", T);
            M.css({
                display: "block",
                position: "relative",
                float: "left",
                "line-height": m + "px",
                "font-weight": "normal",
                "font-size": "12px",
                margin: "0 8px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#fff"
            }), $.css({
                display: "block",
                position: "relative",
                float: "right",
                "line-height": m + "px",
                "font-weight": "normal",
                "font-size": "12px",
                margin: "0 8px",
                "font-family": "Arial, Helvetica, sans-serif",
                color: "#fff"
            }), O.css({
                display: "block",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                height: "10px",
                "background-color": "#222",
                margin: Math.floor((m - 10) / 2) + "px 4px"
            }).on(c, function(t) {
                var e = (p ? t.originalEvent.touches[0] : t).pageX - O.offset().left;
                L.css({
                    width: e
                }), k.get(0).currentTime = e * k.get(0).duration / O.width(), O.on(d, function(t) {
                    var e = (p ? t.originalEvent.touches[0] : t).pageX - O.offset().left;
                    L.css({
                        width: e
                    }), k.get(0).currentTime = e * k.get(0).duration / O.width()
                })
            }).on(u, function() {
                O.off(d)
            }), j.css({
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                "background-color": "#444"
            }), L.css({
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                "background-color": "#fcc500"
            });
            var B = r ? k : k.parent();
            if (B.get(0).requestFullscreen || B.get(0).webkitRequestFullScreen || B.get(0).mozRequestFullScreen || B.get(0).webkitEnterFullScreen || B.get(0).msRequestFullscreen) {
                var P = function(t) {
                    r ? t ? (k.get(0).setAttribute("controls", "controls"), l && k.get(0).setAttribute("controlsList", "nodownload")) : k.get(0).removeAttribute("controls") : t ? (i(document).on("mousemove", I), T.css({
                        "z-index": 2147483647,
                        position: "fixed"
                    }), A.css({
                        "z-index": 2147483647,
                        display: "block"
                    }), z.css({
                        "z-index": 2147483647
                    })) : (i(document).off("mousemove", I), T.css({
                        "z-index": "",
                        position: "absolute"
                    }), A.css({
                        "z-index": "",
                        display: "none"
                    }), z.css({
                        "z-index": ""
                    }))
                };
                document.addEventListener("MSFullscreenChange", function() {
                    v = null != document.msFullscreenElement, P(v)
                }, !1), document.addEventListener("fullscreenchange", function() {
                    v = document.fullscreen, P(v)
                }, !1), document.addEventListener("mozfullscreenchange", function() {
                    v = document.mozFullScreen, P(v)
                }, !1), document.addEventListener("webkitfullscreenchange", function() {
                    v = document.webkitIsFullScreen, P(v)
                }, !1), B.get(0).addEventListener("webkitbeginfullscreen", function() {
                    P(v = !0)
                }, !1), B.get(0).addEventListener("webkitendfullscreen", function() {
                    P(v = !1)
                }, !1), r || i("head").append("<style type='text/css'>video" + o + "::-webkit-media-controls { display:none !important; }</style>"), i(".html5boxFullscreen", T).css({
                    display: "block",
                    position: "relative",
                    float: "right",
                    width: "32px",
                    height: "32px",
                    margin: Math.floor((m - 32) / 2),
                    cursor: "pointer",
                    "background-image": "url('" + t + "html5boxplayer_fullscreen.png')",
                    "background-position": "left top"
                }).hover(function() {
                    var t = i(this).css("background-position") ? i(this).css("background-position").split(" ")[0] : i(this).css("background-position-x");
                    i(this).css({
                        "background-position": t + " bottom"
                    })
                }, function() {
                    var t = i(this).css("background-position") ? i(this).css("background-position").split(" ")[0] : i(this).css("background-position-x");
                    i(this).css({
                        "background-position": t + " top"
                    })
                }).on("click", function() {
                    (v = !v) ? (r && (k.get(0).setAttribute("controls", "controls"), l && k.get(0).setAttribute("controlsList", "nodownload")), B.get(0).requestFullscreen ? B.get(0).requestFullscreen() : B.get(0).webkitRequestFullScreen ? B.get(0).webkitRequestFullScreen() : B.get(0).mozRequestFullScreen ? B.get(0).mozRequestFullScreen() : B.get(0).webkitEnterFullScreen && B.get(0).webkitEnterFullScreen(), B.get(0).msRequestFullscreen && B.get(0).msRequestFullscreen()) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                })
            }
            x && i(".html5boxHD", T).css({
                display: "block",
                position: "relative",
                float: "right",
                width: "32px",
                height: "32px",
                margin: Math.floor((m - 32) / 2),
                cursor: "pointer",
                "background-image": "url('" + t + "html5boxplayer_hd.png')",
                "background-position": (w ? "right" : "left") + " center"
            }).on("click", function() {
                w = !w, i(this).css({
                    "background-position": (w ? "right" : "left") + " center"
                }), e.isHd = w;
                var t = k.get(0).isPaused;
                k.get(0).setAttribute("src", (w ? x : y) + "#t=" + k.get(0).currentTime), t ? k.get(0).pause() : k.get(0).play()
            }), k.get(0).volume = a;
            var D = 0 == a ? 1 : a,
                F = k.get(0).volume;
            if (k.get(0).volume = F / 2 + .1, k.get(0).volume === F / 2 + .1) {
                k.get(0).volume = F;
                var H = i(".html5boxVolume", T),
                    _ = i(".html5boxVolumeButton", T),
                    q = i(".html5boxVolumeBar", T),
                    R = i(".html5boxVolumeBarBg", T),
                    W = i(".html5boxVolumeBarActive", T);
                H.css({
                    display: "block",
                    position: "relative",
                    float: "right",
                    width: "32px",
                    height: "32px",
                    margin: Math.floor((m - 32) / 2)
                }).hover(function() {
                    clearTimeout(f);
                    var t = k.get(0).volume;
                    W.css({
                        height: Math.round(100 * t) + "%"
                    }), q.show()
                }, function() {
                    clearTimeout(f), f = setTimeout(function() {
                        q.hide()
                    }, 1e3)
                }), _.css({
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "32px",
                    height: "32px",
                    cursor: "pointer",
                    "background-image": "url('" + t + "html5boxplayer_volume.png')",
                    "background-position": "top " + (F > 0 ? "left" : "right")
                }).hover(function() {
                    var t = i(this).css("background-position") ? i(this).css("background-position").split(" ")[0] : i(this).css("background-position-x");
                    i(this).css({
                        "background-position": t + " bottom"
                    })
                }, function() {
                    var t = i(this).css("background-position") ? i(this).css("background-position").split(" ")[0] : i(this).css("background-position-x");
                    i(this).css({
                        "background-position": t + " top"
                    })
                }).on("click", function() {
                    var t = k.get(0).volume;
                    t > 0 ? (D = t, t = 0) : t = D;
                    var e = i(this).css("background-position") ? i(this).css("background-position").split(" ")[1] : i(this).css("background-position-y");
                    _.css({
                        "background-position": (t > 0 ? "left" : "right") + " " + e
                    }), t > 0 && (k.get(0).muted = !1), k.get(0).volume = t, W.css({
                        height: Math.round(100 * t) + "%"
                    })
                }), q.css({
                    display: "none",
                    position: "absolute",
                    left: 4,
                    bottom: "100%",
                    width: 24,
                    height: 80,
                    "margin-bottom": Math.floor((m - 32) / 2),
                    "background-color": "#000000",
                    opacity: .7,
                    filter: "alpha(opacity=70)"
                }), R.css({
                    display: "block",
                    position: "relative",
                    width: 10,
                    height: 68,
                    margin: 7,
                    cursor: "pointer",
                    "background-color": "#222"
                }), W.css({
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "background-color": "#fcc500"
                }), R.on(c, function(t) {
                    var e = 1 - ((p ? t.originalEvent.touches[0] : t).pageY - R.offset().top) / R.height();
                    e = e > 1 ? 1 : e < 0 ? 0 : e, W.css({
                        height: Math.round(100 * e) + "%"
                    }), _.css({
                        "background-position": "left " + (e > 0 ? "top" : "bottom")
                    }), e > 0 && (k.get(0).muted = !1), k.get(0).volume = e, R.on(d, function(t) {
                        var e = 1 - ((p ? t.originalEvent.touches[0] : t).pageY - R.offset().top) / R.height();
                        e = e > 1 ? 1 : e < 0 ? 0 : e, W.css({
                            height: Math.round(100 * e) + "%"
                        }), _.css({
                            "background-position": "left " + (e > 0 ? "top" : "bottom")
                        }), e > 0 && (k.get(0).muted = !1), k.get(0).volume = e
                    })
                }).on(u, function() {
                    R.off(d)
                })
            }
            var U = function(t) {
                var e = Math.floor(t / 3600),
                    i = e < 10 ? "0" + e : e,
                    o = Math.floor((t - 3600 * e) / 60),
                    n = o < 10 ? "0" + o : o,
                    s = Math.floor(t - (3600 * e + 60 * o)),
                    a = n + ":" + (s < 10 ? "0" + s : s);
                return e > 0 && (a = i + ":" + a), a
            };
            s && z.hide(), n && T.hide();
            try {
                k.on("play", function() {
                    s || z.hide(), n || (S.hide(), C.show())
                }), k.on("pause", function() {
                    s || z.show(), n || (T.show(), clearTimeout(g), S.show(), C.hide())
                }), k.on("ended", function() {
                    i(window).trigger("html5lightbox.videoended"), s || z.show(), n || (T.show(), clearTimeout(g), S.show(), C.hide())
                }), k.on("timeupdate", function() {
                    var t = k.get(0).currentTime;
                    if (t) {
                        M.text(U(t));
                        var e = k.get(0).duration;
                        if (e) {
                            $.text(U(e));
                            var i = O.width(),
                                o = Math.round(i * t / e);
                            L.css({
                                width: o
                            }), N.css({
                                left: o
                            })
                        }
                    }
                }), k.on("progress", function() {
                    if (k.get(0).buffered && k.get(0).buffered.length > 0 && !isNaN(k.get(0).buffered.end(0)) && !isNaN(k.get(0).duration)) {
                        var t = O.width();
                        j.css({
                            width: Math.round(t * k.get(0).buffered.end(0) / k.get(0).duration)
                        })
                    }
                })
            } catch (t) {}
        },
        function(t) {
            t.fn.ashtml5lightbox = function(e) {
                var i = this;
                i.options = t.extend({
                    freelink: "http://html5box.com/",
                    defaultvideovolume: 1,
                    autoclose: !1,
                    autoclosedelay: 0,
                    resizedelay: 100,
                    insideiframe: !1,
                    autoresizecontent: !0,
                    defaultwidth: 960,
                    defaultheight: 540,
                    usedefaultsizeforcontent: !1,
                    preload: !0,
                    preloadallonpageload: !1,
                    preloadalldelay: 5e3,
                    autoplay: !0,
                    loopvideo: !1,
                    html5player: !0,
                    responsive: !0,
                    nativehtml5controls: !1,
                    videohidecontrols: !1,
                    nativecontrolsonfirefox: !1,
                    nativecontrolsonie: !1,
                    nativecontrolsoniphone: !0,
                    nativecontrolsonipad: !0,
                    nativecontrolsonandroid: !0,
                    nativecontrolsonfullscreen: !0,
                    nativecontrolsnodownload: !0,
                    imagekeepratio: !0,
                    maxheight: !1,
                    elemautoheight: !1,
                    useflashonie9: !0,
                    useflashonie10: !0,
                    useflashonie11: !1,
                    useflashformp4onfirefox: !1,
                    transition: "none",
                    transitionduration: 400,
                    enablepdfjs: !1,
                    pdfjsengine: "",
                    openpdfinnewtaboniphone: !1,
                    openpdfinnewtabonipad: !1,
                    googleanalyticsaccount: "",
                    arrowloop: !0,
                    showall: !1,
                    userelforgroup: !0,
                    shownavigation: !0,
                    thumbwidth: 96,
                    thumbheight: 72,
                    thumbgap: 4,
                    thumbtopmargin: 12,
                    thumbbottommargin: 12,
                    thumbborder: 1,
                    thumbbordercolor: "transparent",
                    thumbhighlightbordercolor: "#fff",
                    thumbopacity: 1,
                    navbuttonwidth: 32,
                    navbgcolor: "rgba(0,0,0,0.2)",
                    shownavcontrol: !0,
                    navcontrolimage: "lightbox-navcontrol.png",
                    hidenavdefault: !1,
                    overlaybgcolor: "#000",
                    overlayopacity: .9,
                    bgcolor: "#fff",
                    bordersize: 8,
                    borderradius: 0,
                    bordermargin: 16,
                    bordertopmargin: 48,
                    barautoheight: !0,
                    barheight: 64,
                    smallscreenheight: 415,
                    responsivebarheight: !1,
                    barheightonsmallheight: 64,
                    notkeepratioonsmallheight: !1,
                    bordertopmarginsmall: 36,
                    loadingwidth: 64,
                    loadingheight: 64,
                    resizespeed: 400,
                    fadespeed: 0,
                    jsfolder: "",
                    skinsfoldername: "",
                    loadingimage: "lightbox-loading.gif",
                    nextimage: "lightbox-next.png",
                    previmage: "lightbox-prev.png",
                    closeimage: "lightbox-close.png",
                    playvideoimage: "lightbox-playvideo.png",
                    titlebgimage: "lightbox-titlebg.png",
                    navarrowsprevimage: "lightbox-navprev.png",
                    navarrowsnextimage: "lightbox-navnext.png",
                    navarrowsalwaysshowontouch: !0,
                    navarrowsbottomscreenwidth: 479,
                    closeonoverlay: !0,
                    alwaysshownavarrows: !1,
                    showplaybutton: !0,
                    playimage: "lightbox-play.png",
                    pauseimage: "lightbox-pause.png",
                    fullscreenmode: !1,
                    fullscreencloseimage: "lightbox-close-fullscreen.png",
                    fullscreennextimage: "lightbox-next-fullscreen.png",
                    fullscreenprevimage: "lightbox-prev-fullscreen.png",
                    fullscreennomargin: !1,
                    fullscreenmodeonsmallscreen: !1,
                    fullscreennomarginonsmallscreen: !1,
                    fullscreensmallscreenwidth: 800,
                    fullscreenbgcolor: "rgba(0, 0, 0, 0.9)",
                    fullscreenbordersize: 0,
                    fullscreentextinside: !1,
                    videobgcolor: "#000",
                    html5videoposter: "",
                    showtitle: !0,
                    titlestyle: "bottom",
                    titleinsidecss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px;",
                    titlebottomcss: "color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
                    showonmouseoverinside: !1,
                    showinsidetitleforimageonly: !0,
                    showdescription: !0,
                    descriptioninsidecss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                    descriptionbottomcss: "color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                    fullscreentitlebottomcss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 8px 8px;",
                    fullscreendescriptionbottomcss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                    showsocialmedia: !0,
                    socialmediaposition: "position:absolute;top:8px;right:8px;",
                    showtitleprefix: !0,
                    titleprefix: "%NUM / %TOTAL",
                    autoslide: !1,
                    slideinterval: 5e3,
                    showtimer: !0,
                    timerposition: "bottom",
                    timerheight: 2,
                    timercolor: "#dc572e",
                    timeropacity: 1,
                    initvimeo: !0,
                    inityoutube: !0,
                    swipepreventdefaultonandroid: !1,
                    initsocial: !1,
                    showsocial: !1,
                    socialposition: "position:absolute;top:100%;right:0;",
                    socialpositionsmallscreen: "position:absolute;top:100%;right:0;left:0;",
                    socialdirection: "horizontal",
                    socialbuttonsize: 32,
                    socialbuttonfontsize: 18,
                    socialrotateeffect: !0,
                    showfacebook: !0,
                    showtwitter: !0,
                    showpinterest: !0,
                    showemail: !1,
                    imagepercentage: 75,
                    sidetobottomscreenwidth: 479,
                    errorwidth: 280,
                    errorheight: 48,
                    errorcss: "text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;",
                    enabletouchswipe: !0,
                    mobileresizeevent: !1,
                    swipedistance: 0,
                    bodynoscroll: !1,
                    useabsolutepos: !1,
                    useabsoluteposonmobile: !1,
                    supportesckey: !0,
                    supportarrowkeys: !0,
                    version: "3.3",
                    stamp: !1,
                    freemark: "72,84,77,76,53,32,76,105,103,104,116,98,111,120,32,70,114,101,101,32,86,101,114,115,105,111,110",
                    watermark: "",
                    watermarklink: ""
                }, e), "undefined" != typeof html5lightbox_options && html5lightbox_options && t.extend(i.options, html5lightbox_options), t("div.html5lightbox_options").length && t.each(t("div.html5lightbox_options").data(), function(t, e) {
                    i.options[t.toLowerCase()] = e
                }), t("div#html5lightbox_options").length && t.each(t("div#html5lightbox_options").data(), function(t, e) {
                    i.options[t.toLowerCase()] = e
                }), t("div#html5lightbox_general_options").length && t.each(t("div#html5lightbox_general_options").data(), function(t, e) {
                    i.options[t.toLowerCase()] = e
                });
                i.options.types = ["IMAGE", "FLASH", "VIDEO", "YOUTUBE", "VIMEO", "PDF", "MP3", "WEB", "FLV", "DAILYMOTION", "DIV", "WISTIA", "IFRAMEVIDEO"], i.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1), i.options.skinsfolder = i.options.skinsfoldername, i.options.skinsfolder.length > 0 && "/" != i.options.skinsfolder[i.options.skinsfolder.length - 1] && (i.options.skinsfolder += "/"), "/" != i.options.skinsfolder.charAt(0) && "http:" != i.options.skinsfolder.substring(0, 5) && "https:" != i.options.skinsfolder.substring(0, 6) && (i.options.skinsfolder = i.options.jsfolder + i.options.skinsfolder);
                for (var o, n = ["loadingimage", "nextimage", "previmage", "closeimage", "playvideoimage", "titlebgimage", "navarrowsprevimage", "navarrowsnextimage", "navcontrolimage", "playimage", "pauseimage", "fullscreencloseimage", "fullscreennextimage", "fullscreenprevimage"], s = 0; s < n.length; s++) i.options[n[s]] && "http://" != i.options[n[s]].substring(0, 7).toLowerCase() && "https://" != i.options[n[s]].substring(0, 8).toLowerCase() && (i.options[n[s]] = i.options.skinsfolder + i.options[n[s]]);
                var a = "",
                    r = i.options.freemark.split(",");
                for (s = 0; s < r.length; s++) a += String.fromCharCode(r[s]);
                i.options.freemark = a;
                var l = "hmtamgli5cboxh.iclolms";
                for (s = 1; s <= 5; s++) l = l.slice(0, s) + l.slice(s + 1);
                for (o = l.length, s = 0; s < 5; s++) l = l.slice(0, o - 9 + s) + l.slice(o - 8 + s); - 1 != i.options.htmlfolder.indexOf(l) && (i.options.stamp = !1), i.options.flashInstalled = !1;
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (i.options.flashInstalled = !0)
                } catch (t) {
                    navigator.mimeTypes["application/x-shockwave-flash"] && (i.options.flashInstalled = !0)
                }
                if (i.options.html5VideoSupported = !!document.createElement("video").canPlayType, i.options.isChrome = null != navigator.userAgent.match(/Chrome/i), i.options.isFirefox = null != navigator.userAgent.match(/Firefox/i), i.options.isOpera = null != navigator.userAgent.match(/Opera/i) || null != navigator.userAgent.match(/OPR\//i), i.options.isSafari = null != navigator.userAgent.match(/Safari/i), i.options.isIE11 = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/), i.options.isIE = null != navigator.userAgent.match(/MSIE/i) && !i.options.isOpera, i.options.isIE10 = null != navigator.userAgent.match(/MSIE 10/i) && !this.options.isOpera, i.options.isIE9 = null != navigator.userAgent.match(/MSIE 9/i) && !i.options.isOpera, i.options.isIE8 = null != navigator.userAgent.match(/MSIE 8/i) && !i.options.isOpera, i.options.isIE7 = null != navigator.userAgent.match(/MSIE 7/i) && !i.options.isOpera, i.options.isIE6 = null != navigator.userAgent.match(/MSIE 6/i) && !i.options.isOpera, i.options.isIE678 = i.options.isIE6 || i.options.isIE7 || i.options.isIE8, i.options.isIE6789 = i.options.isIE6 || i.options.isIE7 || i.options.isIE8 || i.options.isIE9, i.options.isAndroid = null != navigator.userAgent.match(/Android/i), i.options.isIPad = null != navigator.userAgent.match(/iPad/i), i.options.isIPhone = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i), i.options.isIOS = i.options.isIPad || i.options.isIPhone, i.options.isMobile = i.options.isAndroid || i.options.isIPad || i.options.isIPhone, i.options.isIOSLess5 = i.options.isIPad && i.options.isIPhone && (null != navigator.userAgent.match(/OS 4/i) || null != navigator.userAgent.match(/OS 3/i)), i.options.supportCSSPositionFixed = !i.options.isIE6 && !i.options.isIOSLess5, i.options.iequirksmode = i.options.isIE6789 && "CSS1Compat" != document.compatMode, i.options.isTouch = "ontouchstart" in window, i.options.isChrome) {
                    var h = navigator.userAgent.match(/Chrome\/([0-9]+)/);
                    i.options.chromeVersion = h && h.length >= 2 ? parseInt(h[1], 10) : 0
                }
                if (i.options.isAndroid) {
                    h = navigator.userAgent.match(/Android\s([0-9\.]*)/i);
                    i.options.androidVersion = h && h.length >= 2 ? parseInt(h[1], 10) : -1
                }
                var p, c, d = document.createElement("video");
                (i.options.canplaymp4 = d && d.canPlayType && d.canPlayType("video/mp4").replace(/no/, ""), (i.options.isFirefox && i.options.nativecontrolsonfirefox || (i.options.isIE6789 || i.options.isIE10 || i.options.isIE11) && i.options.nativecontrolsonie || i.options.isIPhone && i.options.nativecontrolsoniphone || i.options.isIPad && i.options.nativecontrolsonipad || i.options.isAndroid && i.options.nativecontrolsonandroid) && (i.options.nativehtml5controls = !0), (i.options.isIOS || i.options.isAndroid) && (i.options.nativecontrolsonfullscreen = !0), i.options.navheight = 0, i.options.thumbgap += 2 * i.options.thumbborder, i.options.resizeTimeout = -1, i.slideTimeout = null, i.autosliding = !1, i.existingElem = -1, i.direction = -3, i.elemArray = new Array, i.options.curElem = -1, i.defaultoptions = t.extend({}, i.options), i.options.googleanalyticsaccount && !window._gaq && (window._gaq = window._gaq || [], window._gaq.push(["_setAccount", i.options.googleanalyticsaccount]), window._gaq.push(["_trackPageview"]), t.getScript("https://ssl.google-analytics.com/ga.js")), i.options.initvimeo) && ((p = document.createElement("script")).src = i.options.jsfolder + "froogaloop2.min.js", (c = document.getElementsByTagName("script")[0]).parentNode.insertBefore(p, c));
                i.options.inityoutube && ((p = document.createElement("script")).src = "https://www.youtube.com/iframe_api", (c = document.getElementsByTagName("script")[0]).parentNode.insertBefore(p, c));
                return i.options.initsocial && t("head").append('<link rel="stylesheet" href="' + i.options.jsfolder + 'icons/css/fontello.css" type="text/css" />'), i.showing = !1, i.navvisible = !1, i.disableEscKey = function(t) {
                    t ? i.disableesckeyinfullscreen = !0 : setTimeout(function() {
                        i.disableesckeyinfullscreen = !1
                    }, 1e3)
                }, i.supportKeyboard = function() {
                    i.disableesckeyinfullscreen = !1, t(document).keyup(function(t) {
                        i.showing && (!i.disableesckeyinfullscreen && i.options.supportesckey && 27 == t.keyCode ? i.finish() : i.options.supportarrowkeys && (39 == t.keyCode ? i.gotoSlide(-1) : 37 == t.keyCode && i.gotoSlide(-2)))
                    }), i.options.supportesckey && (document.addEventListener("MSFullscreenChange", function() {
                        i.disableEscKey(null != document.msFullscreenElement)
                    }, !1), document.addEventListener("webkitfullscreenchange", function() {
                        i.disableEscKey(document.webkitIsFullScreen)
                    }, !1))
                }, i.supportKeyboard(), i.init = function() {
                    i.showing = !1, i.readData(), i.createMarkup(), i.initSlide()
                }, i.readData = function() {
                    i.each(function() {
                        if ("a" == this.nodeName.toLowerCase() || "area" == this.nodeName.toLowerCase()) {
                            var e = t(this),
                                o = "mediatype" in e.data() ? e.data("mediatype") : i.checkType(e.attr("href"));
                            if (!(o < 0)) {
                                for (var n = e.data("title") ? e.data("title") : e.attr("title"), s = e.data("group") ? e.data("group") : i.options.userelforgroup ? e.attr("rel") : null, a = 0; a < i.elemArray.length; a++)
                                    if (e.attr("href") == i.elemArray[a][1]) return i.elemArray[a][2] = n, void(i.elemArray[a][3] = s);
                                i.elemArray.push(new Array(o, e.attr("href"), n, s, e.data("width"), e.data("height"), e.data("webm"), e.data("ogg"), e.data("thumbnail"), e.data("description"), null, null, null, e.data("socialmedia")))
                            }
                        }
                    })
                }, i.createMarkup = function() {
                    (t(window).width() <= i.options.fullscreensmallscreenwidth && (i.options.fullscreenmodeonsmallscreen && (i.options.fullscreenmode = !0, i.options.fullscreennomarginonsmallscreen && (i.options.fullscreennomargin = !0)), i.options.fullscreenmode && i.options.fullscreennomarginonsmallscreen && (i.options.fullscreennomargin = !0)), i.options.fullscreenmode && (i.options.bgcolor = i.options.fullscreenbgcolor, i.options.bordersize = i.options.fullscreenbordersize, i.options.fullscreennomargin && (i.options.bordersize = 0, i.options.bordermargin = 0, i.options.bordertopmargin = 0, i.options.bordertopmarginsmall = 0), i.options.fullscreentextinside ? (i.options.titlestyle = "inside", i.options.titlecss = i.options.titleinsidecss, i.options.descriptioncss = i.options.descriptioninsidecss) : (i.options.titlebottomcss = i.options.fullscreentitlebottomcss, i.options.descriptionbottomcss = i.options.fullscreendescriptionbottomcss)), i.options.barheightoriginal = i.options.barheight, i.options.responsivebarheight) && (t(window).height() <= i.options.smallscreenheight && (i.options.barheight = i.options.barheightonsmallheight));
                    i.options.titlecss || (i.options.titlecss = "inside" == i.options.titlestyle ? i.options.titleinsidecss : i.options.titlebottomcss), i.options.descriptioncss || (i.options.descriptioncss = "inside" == i.options.titlestyle ? i.options.descriptioninsidecss : i.options.descriptionbottomcss), i.options.titlecss = t.trim(i.options.titlecss), i.options.titlecss.length > 1 && ("{" == i.options.titlecss.charAt(0) && (i.options.titlecss = i.options.titlecss.substring(1)), "}" == i.options.titlecss.charAt(i.options.titlecss.length - 1) && (i.options.titlecss = i.options.titlecss.substring(0, i.options.titlecss.length - 1))), i.options.descriptioncss = t.trim(i.options.descriptioncss), i.options.descriptioncss.length > 1 && ("{" == i.options.descriptioncss.charAt(0) && (i.options.descriptioncss = i.options.descriptioncss.substring(1)), "}" == i.options.descriptioncss.charAt(i.options.descriptioncss.length - 1) && (i.options.descriptioncss = i.options.descriptioncss.substring(0, i.options.descriptioncss.length - 1))), i.options.errorcss = t.trim(i.options.errorcss), i.options.errorcss.length > 1 && ("{" == i.options.errorcss.charAt(0) && (i.options.errorcss = i.options.errorcss.substring(1)), "}" == i.options.errorcss.charAt(i.options.errorcss.length - 1) && (i.options.errorcss = i.options.errorcss.substring(0, i.options.errorcss.length - 1)));
                    var e = ".bodynoscroll {height:100%;overflow:hidden;}";
                    e += ".html5-hide {display:none !important;} #slider-html5-lightbox .html5-text {" + i.options.titlecss + "}", e += "#slider-html5-lightbox .html5-description {" + i.options.descriptioncss + "}", e += "#slider-html5-lightbox .html5-error {" + i.options.errorcss + "}", (i.options.navarrowsalwaysshowontouch || i.options.alwaysshownavarrows) && (e += "#slider-html5-lightbox .html5-prev-touch {left:0px;top:50%;margin-top:-16px;margin-left:-32px;} #slider-html5-lightbox .html5-next-touch {right:0px;top:50%;margin-top:-16px;margin-right:-32px;}", e += "@media (max-width: " + i.options.navarrowsbottomscreenwidth + "px) { #slider-html5-lightbox .html5-prev-touch {top:100%;left:0;margin:0;} #slider-html5-lightbox .html5-next-touch {top:100%;right:0;margin:0;} }"), e += "#slider-html5-lightbox .html5-prev-fullscreen {display:block;} #slider-html5-lightbox .html5-next-fullscreen {display:block;} #slider-html5-lightbox .html5-prev-bottom-fullscreen {display:none;} #slider-html5-lightbox .html5-next-bottom-fullscreen {display:none;}", e += "@media (max-width: " + i.options.navarrowsbottomscreenwidth + "px) {#slider-html5-lightbox .html5-prev-fullscreen {display:none;} #slider-html5-lightbox .html5-next-fullscreen {display:none;} #slider-html5-lightbox .html5-prev-bottom-fullscreen {display:block;} #slider-html5-lightbox .html5-next-bottom-fullscreen {display:block;} }", "right" == i.options.titlestyle ? (e += "#slider-html5-lightbox .html5-elem-wrap {width:" + i.options.imagepercentage + "%;height:100%;} #slider-html5-lightbox .html5-elem-data-box {min-height:100%;}", e += "@media (max-width: " + i.options.sidetobottomscreenwidth + "px) {#slider-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #slider-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}") : "left" == i.options.titlestyle && (e += "#slider-html5-lightbox .html5-elem-wrap {height:100%;} #slider-html5-lightbox .html5-elem-data-box {width:" + String(100 - i.options.imagepercentage) + "%;min-height:100%;}", e += "@media (max-width: " + i.options.sidetobottomscreenwidth + "px) {#slider-html5-lightbox .html5-elem-wrap {width:100%;height:auto;} #slider-html5-lightbox .html5-elem-data-box {width:100%;height:auto;min-height:0;}}"), e += ".html5-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }", e += "@media (max-width: " + i.options.navarrowsbottomscreenwidth + "px) {#html5-social {" + i.options.socialpositionsmallscreen + "}}", t("head").append("<style type='text/css' data-creator='slider-html5-lightbox'>" + e + "</style>");
                    var o = i.options.elemautoheight ? "auto" : "100%";
                    i.$lightbox = t("<div id='slider-html5-lightbox' style='display:none;top:0px;left:0px;width:100%;height:100%;z-index:9999998;text-align:center;'><div id='html5-lightbox-overlay' style='display:block;position:absolute;top:0px;left:0px;width:100%;min-height:100%;background-color:" + i.options.overlaybgcolor + ";opacity:" + i.options.overlayopacity + ";filter:alpha(opacity=" + Math.round(100 * i.options.overlayopacity) + ");'></div><div id='html5-lightbox-box' style='display:block;position:relative;margin:0px auto;'><div class='html5-elem-box' style='display:block;position:relative;width:100%;overflow-x:hidden;overflow-y:auto;height:" + o + ";margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'><div class='html5-elem-wrap' style='display:block;position:relative;margin:0px auto;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:" + i.options.bgcolor + ";'><div class='html5-loading' style='display:none;position:absolute;top:0px;left:0px;text-align:center;width:100%;height:100%;background:url(\"" + i.options.loadingimage + "\") no-repeat center center;'></div><div class='html5-error-box html5-error' style='display:none;position:absolute;padding:" + i.options.bordersize + "px;text-align:center;width:" + i.options.errorwidth + "px;height:" + i.options.errorheight + "px;'>The requested content cannot be loaded.<br />Please try again later.</div><div class='html5-image' style='display:none;position:relative;top:0px;left:0px;width:100%;height:100%;" + (i.options.iequirksmode ? "margin" : "padding") + ":" + i.options.bordersize + "px;text-align:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;'></div></div></div><div id='html5-watermark' style='display:none;position:absolute;left:" + String(i.options.bordersize + 2) + "px;top:" + String(i.options.bordersize + 2) + "px;'></div></div></div>"), i.options.positionFixed = i.options.supportCSSPositionFixed && i.options.responsive && !i.options.iequirksmode, (i.options.useabsolutepos || i.options.useabsoluteposonmobile && i.options.isMobile) && (i.options.positionFixed = !1), i.options.positionFixed || (i.options.bodynoscroll = !0), i.$lightbox.css({
                        position: i.options.positionFixed ? "fixed" : "absolute"
                    }), i.$lightbox.appendTo("body"), i.$lightboxBox = t("#html5-lightbox-box", i.$lightbox), i.$elem = t(".html5-elem-box", i.$lightbox), i.$elemWrap = t(".html5-elem-wrap", i.$lightbox), i.$loading = t(".html5-loading", i.$lightbox), i.$error = t(".html5-error-box", i.$lightbox), i.$image = t(".html5-image", i.$lightbox), i.options.fullscreenmode && i.options.fullscreennomargin && i.$elem.css({
                        overflow: "hidden"
                    });
                    var n = "<div class='html5-elem-data-box' style='display:none;box-sizing:border-box;'><div class='html5-text' style='display:block;overflow:hidden;'></div></div>";
                    if ("left" == i.options.titlestyle ? i.$elem.prepend(n) : i.$elem.append(n), i.$elemData = t(".html5-elem-data-box", i.$lightbox), i.$text = t(".html5-text", i.$lightbox), i.options.borderradius > 0 && (i.$elem.css({
                            "border-radius": i.options.borderradius + "px",
                            "-moz-border-radius": i.options.borderradius + "px",
                            "-webkit-border-radius": i.options.borderradius + "px"
                        }), "inside" == i.options.titlestyle ? i.$elemWrap.css({
                            "border-radius": i.options.borderradius + "px",
                            "-moz-border-radius": i.options.borderradius + "px",
                            "-webkit-border-radius": i.options.borderradius + "px"
                        }) : "bottom" == i.options.titlestyle && (i.$elemWrap.css({
                            "border-top-left-radius": i.options.borderradius + "px",
                            "-moz-top-left-border-radius": i.options.borderradius + "px",
                            "-webkit-top-left-border-radius": i.options.borderradius + "px",
                            "border-top-right-radius": i.options.borderradius + "px",
                            "-moz-top-right-border-radius": i.options.borderradius + "px",
                            "-webkit-top-right-border-radius": i.options.borderradius + "px"
                        }), i.$elemData.css({
                            "border-bottom-left-radius": i.options.borderradius + "px",
                            "-moz-top-bottom-border-radius": i.options.borderradius + "px",
                            "-webkit-bottom-left-border-radius": i.options.borderradius + "px",
                            "border-bottom-right-radius": i.options.borderradius + "px",
                            "-moz-bottom-right-border-radius": i.options.borderradius + "px",
                            "-webkit-bottom-right-border-radius": i.options.borderradius + "px"
                        }))), "right" == i.options.titlestyle || "left" == i.options.titlestyle ? (i.$lightboxBox.css({
                            "background-color": i.options.bgcolor
                        }), "right" == i.options.titlestyle ? (i.$elemWrap.css({
                            position: "relative",
                            float: "left"
                        }), i.$elemData.css({
                            position: "relative",
                            overflow: "hidden",
                            padding: i.options.bordersize + "px"
                        })) : (i.$elemWrap.css({
                            position: "relative",
                            overflow: "hidden"
                        }), i.$elemData.css({
                            position: "relative",
                            float: "left",
                            padding: i.options.bordersize + "px"
                        }))) : "inside" == i.options.titlestyle ? (i.$elemData.css({
                            position: "absolute",
                            margin: i.options.bordersize + "px",
                            bottom: 0,
                            left: 0,
                            "background-color": "#333",
                            "background-color": "rgba(51, 51, 51, 0.6)"
                        }), i.options.showonmouseoverinside && i.$elemData.css({
                            opacity: 0
                        }), i.$text.css({
                            padding: i.options.bordersize + "px " + 2 * i.options.bordersize + "px"
                        })) : (i.$elemData.css({
                            position: "relative",
                            width: "100%",
                            height: i.options.barautoheight ? "auto" : i.options.barheight + "px",
                            padding: "0 0 " + i.options.bordersize + "px 0",
                            "background-color": i.options.bgcolor,
                            "text-align": "left"
                        }), i.options.fullscreenmode && i.options.fullscreennomargin || i.$text.css({
                            margin: "0 " + i.options.bordersize + "px"
                        })), i.options.showsocial) {
                        var s = '<div id="html5-social" style="display:none;' + i.options.socialposition + '">',
                            a = ("horizontal" == i.options.socialdirection ? "display:inline-block;" : "display:block;") + "margin:4px;",
                            r = "display:table-cell;width:" + i.options.socialbuttonsize + "px;height:" + i.options.socialbuttonsize + "px;font-size:" + i.options.socialbuttonfontsize + "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
                        i.options.showemail && (s += '<div class="html5-social-btn' + (i.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-email" style="' + a + '"><div class="mh-icon-mail" style="' + r + 'background-color:#4d83ff;"></div></div>'), i.options.showfacebook && (s += '<div class="html5-social-btn' + (i.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-facebook" style="' + a + '"><div class="mh-icon-facebook" style="' + r + 'background-color:#3b5998;"></div></div>'), i.options.showtwitter && (s += '<div class="html5-social-btn' + (i.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-twitter" style="' + a + '"><div class="mh-icon-twitter" style="' + r + 'background-color:#03b3ee;"></div></div>'), i.options.showpinterest && (s += '<div class="html5-social-btn' + (i.options.socialrotateeffect ? " html5-rotate" : "") + ' html5-social-pinterest" style="' + a + '"><div class="mh-icon-pinterest" style="' + r + 'background-color:#c92228;"></div></div>'), s += '<div style="clear:both;"></div></div>', i.$lightboxBox.append(s), t(".html5-social-btn", i.$lightbox).click(function() {
                            var e = window.location.href + (window.location.href.indexOf("?") < 0 ? "?" : "&") + "html5lightboxshare=" + encodeURIComponent(i.currentElem[1]),
                                o = i.currentElem[2],
                                n = i.currentElem[1];
                            if (0 == i.currentElem[0]) n = i.absoluteUrl(i.currentElem[1]);
                            else if (3 == i.currentElem[0]) n = "https://img.youtube.com/vi/" + i.getYoutubeId(i.currentElem[1]) + "/0.jpg";
                            else {
                                var s = t('.html5lightbox[href="' + i.currentElem[1] + '"]');
                                if (s.length > 0)
                                    if (s.data("shareimage") && s.data("shareimage").length > 0) n = i.absoluteUrl(s.data("shareimage"));
                                    else if (s.data("thumbnail") && s.data("thumbnail").length > 0) n = i.absoluteUrl(s.data("thumbnail"));
                                else {
                                    var a = t("img", s);
                                    a.length > 0 && (n = i.absoluteUrl(a.attr("src")))
                                }
                            }
                            var r = 2 == i.currentElem[0] || 3 == i.currentElem[0] || 4 == i.currentElem[0] || 8 == i.currentElem[0] || 9 == i.currentElem[0] || 11 == i.currentElem[0] || 12 == i.currentElem[0];
                            return o = o ? i.html2Text(o) : "", t(this).hasClass("html5-social-facebook") ? window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e) + "&t=" + encodeURIComponent(o), "_blank") : t(this).hasClass("html5-social-twitter") ? window.open("https://twitter.com/share?url=" + encodeURIComponent(e) + "&text=" + encodeURIComponent(o), "_blank") : t(this).hasClass("html5-social-pinterest") ? window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(n) + "&url=" + encodeURIComponent(e) + "&description=" + encodeURIComponent(o) + "&is_video=" + (r ? "true" : "false"), "_blank") : t(this).hasClass("html5-social-email") && window.open("mailto:?subject=" + encodeURIComponent(o) + "&body=Check out this: " + encodeURIComponent(e)), !1
                        })
                    }
                    if (i.options.fullscreenmode ? (i.$lightbox.append("<div class='html5-next-fullscreen' style='cursor:pointer;position:absolute;right:" + i.options.bordersize + "px;top:50%;margin-top:-16px;'><img alt='' src='" + i.options.fullscreennextimage + "'></div><div class='html5-prev-fullscreen' style='cursor:pointer;position:absolute;left:" + i.options.bordersize + "px;top:50%;margin-top:-16px;'><img alt='' src='" + i.options.fullscreenprevimage + "'></div>"), i.$next = t(".html5-next-fullscreen", i.$lightbox), i.$prev = t(".html5-prev-fullscreen", i.$lightbox), i.$lightboxBox.append("<div class='html5-next-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;right:0;margin-top:8px;'><img alt='' src='" + i.options.fullscreennextimage + "'></div><div class='html5-prev-bottom-fullscreen' style='cursor:pointer;position:absolute;top:100%;left:0;margin-top:8px;'><img alt='' src='" + i.options.fullscreenprevimage + "'></div>"), i.$nextbottom = t(".html5-next-bottom-fullscreen", i.$lightbox), i.$prevbottom = t(".html5-prev-bottom-fullscreen", i.$lightbox), i.$nextbottom.click(function() {
                            i.nextArrowClicked()
                        }), i.$prevbottom.click(function() {
                            i.prevArrowClicked()
                        }), i.$lightbox.append("<div id='html5-close-fullscreen' style='display:block;cursor:pointer;position:absolute;top:0;right:0;margin-top:0;margin-right:0;'><img alt='' src='" + i.options.fullscreencloseimage + "'></div>"), i.$close = t("#html5-close-fullscreen", i.$lightbox)) : (i.$lightboxBox.append("<div class='html5-next' style='display:none;cursor:pointer;position:absolute;right:" + i.options.bordersize + "px;top:50%;margin-top:-32px;'><img alt='' src='" + i.options.nextimage + "'></div><div class='html5-prev' style='display:none;cursor:pointer;position:absolute;left:" + i.options.bordersize + "px;top:50%;margin-top:-32px;'><img alt='' src='" + i.options.previmage + "'></div>"), i.$next = t(".html5-next", i.$lightbox), i.$prev = t(".html5-prev", i.$lightbox), (i.options.isTouch && i.options.navarrowsalwaysshowontouch || i.options.alwaysshownavarrows) && (i.$lightboxBox.append("<div class='html5-next-touch' style='display:block;cursor:pointer;position:absolute;'><img alt='' src='" + i.options.nextimage + "'></div><div class='html5-prev-touch' style='display:block;cursor:pointer;position:absolute;'><img alt='' src='" + i.options.previmage + "'></div>"), i.$nexttouch = t(".html5-next-touch", i.$lightbox), i.$prevtouch = t(".html5-prev-touch", i.$lightbox), i.$nexttouch.click(function() {
                            i.nextArrowClicked()
                        }), i.$prevtouch.click(function() {
                            i.prevArrowClicked()
                        })), i.$lightboxBox.append("<div id='html5-close' style='display:none;cursor:pointer;position:absolute;top:0;right:0;margin-top:-16px;margin-right:-16px;'><img alt='' src='" + i.options.closeimage + "'></div>"), i.$close = t("#html5-close", i.$lightbox)), "inside" == i.options.titlestyle && i.options.showonmouseoverinside && i.$lightboxBox.hover(function() {
                            0 != i.currentElem[0] && i.options.showinsidetitleforimageonly || i.$elemData.animate({
                                opacity: 1
                            }, 400)
                        }, function() {
                            i.$elemData.animate({
                                opacity: 0
                            }, 400)
                        }), i.$watermark = t("#html5-watermark", i.$lightbox), i.options.stamp) i.$watermark.html("<a href='" + i.options.freelink + "' style='text-decoration:none;' title='jQuery Lightbox'><div style='display:block;width:170px;height:20px;text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;color:#333;font:12px Arial,sans-serif;'><div style='line-height:20px;'>" + i.options.freemark + "</div></div></a>");
                    else if (i.options.watermark) {
                        var l = "<img alt='' src='" + i.options.watermark + "' style='border:none;' />";
                        i.options.watermarklink && (l = "<a href='" + i.options.watermarklink + "' target='_blank'>" + l + "</a>"), i.$watermark.html(l)
                    }
                    i.options.closeonoverlay && t("#html5-lightbox-overlay", i.$lightbox).click(i.finish), i.$close.click(i.finish), i.$next.click(function() {
                        i.nextArrowClicked()
                    }), i.$prev.click(function() {
                        i.prevArrowClicked()
                    }), t(window).resize(function() {
                        i.options.isIOS && !i.options.mobileresizeevent || (clearTimeout(i.options.resizeTimeout), i.options.resizeTimeout = setTimeout(function() {
                            i.resizeWindow()
                        }, i.options.resizedelay))
                    }), t(window).scroll(function() {
                        i.options.isIOS && !i.options.mobileresizeevent || i.scrollBox()
                    }), t(window).on("orientationchange", function(t) {
                        i.options.isMobile && i.resizeWindow()
                    }), i.options.enabletouchswipe && i.enableSwipe()
                }, i.html2Text = function(t) {
                    var e = document.createElement("div");
                    return e.innerHTML = t, e.innerText
                }, i.slideTimer = function(t, e, i) {
                    var o = this;
                    o.timeout = t;
                    var n = null,
                        s = 0,
                        a = !1,
                        r = !1,
                        l = !1;
                    return this.pause = function() {
                        r && (a = !0, clearInterval(n))
                    }, this.resume = function(t) {
                        l && !t || (l = !1, r && a && (a = !1, n = setInterval(function() {
                            (s += 50) > o.timeout && (clearInterval(n), e && e()), i && i(s / o.timeout)
                        }, 50)))
                    }, this.stop = function() {
                        clearInterval(n), i && i(-1), s = 0, a = !1, r = !1
                    }, this.start = function() {
                        s = 0, a = !1, r = !0, n = setInterval(function() {
                            (s += 50) > o.timeout && (clearInterval(n), e && e()), i && i(s / o.timeout)
                        }, 50)
                    }, this.startandpause = function() {
                        s = 0, a = !0, r = !0, l = !0
                    }, this
                }, i.updateTimer = function(e) {
                    var o = Math.round(100 * e);
                    o > 100 && (o = 100), o < 0 && (o = 0), t(".html5-timer", i.$lightbox).css({
                        display: "block",
                        width: o + "%"
                    })
                }, i.initSlide = function() {
                    i.autosliding = !1, i.slideTimeout = i.slideTimer(i.options.slideinterval, function() {
                        i.gotoSlide(-1)
                    }, i.options.showtimer ? function(t) {
                        i.updateTimer(t)
                    } : null), i.options.autoslide && (i.slideTimeout.stop(), i.autosliding = !0)
                }, i.nextArrowClicked = function() {
                    i.options.nextElem <= i.options.curElem && i.options.onlastarrowclicked && window[i.options.onlastarrowclicked] && "function" == typeof window[i.options.onlastarrowclicked] && window[i.options.onlastarrowclicked](), i.gotoSlide(-1)
                }, i.prevArrowClicked = function() {
                    i.options.prevElem >= i.options.curElem && i.options.onfirstarrowclicked && window[i.options.onfirstarrowclicked] && "function" == typeof window[i.options.onfirstarrowclicked] && window[i.options.onfirstarrowclicked](), i.gotoSlide(-2)
                }, i.calcNextPrevElem = function() {
                    i.options.nextElem = -1, i.options.prevElem = -1, i.options.inGroup = !1, i.options.groupIndex = 0, i.options.groupCount = 0;
                    for (var t = i.elemArray[i.options.curElem][3], e = 0; e < i.elemArray.length; e++) i.matchGroup(t, i.elemArray[e][3]) && (e == i.options.curElem && (i.options.groupIndex = i.options.groupCount), i.options.groupCount++);
                    var o, n = i.elemArray[i.options.curElem][3];
                    if (null != n && null != n) {
                        for (o = i.options.curElem + 1; o < i.elemArray.length; o++)
                            if (i.matchGroup(n, i.elemArray[o][3])) {
                                i.options.nextElem = o;
                                break
                            } if (i.options.nextElem < 0)
                            for (o = 0; o < i.options.curElem; o++)
                                if (i.matchGroup(n, i.elemArray[o][3])) {
                                    i.options.nextElem = o;
                                    break
                                } if (i.options.nextElem >= 0) {
                            for (o = i.options.curElem - 1; o >= 0; o--)
                                if (i.matchGroup(n, i.elemArray[o][3])) {
                                    i.options.prevElem = o;
                                    break
                                } if (i.options.prevElem < 0)
                                for (o = i.elemArray.length - 1; o > i.options.curElem; o--)
                                    if (i.matchGroup(n, i.elemArray[o][3])) {
                                        i.options.prevElem = o;
                                        break
                                    }
                        }
                    }(i.options.nextElem >= 0 || i.options.prevElem >= 0) && (i.options.inGroup = !0)
                }, i.calcBoxPosition = function(e, o) {
                    var n = e + 2 * i.options.bordersize,
                        s = o + 2 * i.options.bordersize,
                        a = i.options.shownavigation && i.navvisible ? i.options.navheight : 0,
                        r = t(window).height(),
                        l = Math.round((r - a) / 2 - s / 2);
                    "bottom" == i.options.titlestyle && (l -= Math.round(i.options.barheight / 2));
                    var h = t(window).height() < i.options.smallscreenheight ? i.options.bordertopmarginsmall : i.options.bordertopmargin;
                    if (l < h && (l = h), i.options.insideiframe && window.self != window.top && parent.window.jQuery && parent.window.jQuery("#" + i.options.iframeid).length) {
                        var p = parent.window.jQuery("#" + i.options.iframeid).offset().top,
                            c = parent.window.document.body.scrollTop;
                        l = h, l += c > p ? c - p : 0
                    }
                    return [n, s, l]
                }, i.hideNavArrows = function() {
                    var t = !1,
                        e = !1;
                    i.options.inGroup && ((i.options.arrowloop || !i.options.arrowloop && i.options.prevElem < i.options.curElem) && (t = !0), (i.options.arrowloop || !i.options.arrowloop && i.options.nextElem > i.options.curElem) && (e = !0)), t ? (i.$prev.removeClass("html5-hide"), i.$prevbottom && i.$prevbottom.removeClass("html5-hide"), i.$prevtouch && i.$prevtouch.removeClass("html5-hide")) : (i.$prev.addClass("html5-hide"), i.$prevbottom && i.$prevbottom.addClass("html5-hide"), i.$prevtouch && i.$prevtouch.addClass("html5-hide")), e ? (i.$next.removeClass("html5-hide"), i.$nextbottom && i.$nextbottom.removeClass("html5-hide"), i.$nexttouch && i.$nexttouch.removeClass("html5-hide")) : (i.$next.addClass("html5-hide"), i.$nextbottom && i.$nextbottom.addClass("html5-hide"), i.$nexttouch && i.$nexttouch.addClass("html5-hide"))
                }, i.clickHandler = function() {
                    var e = t(this),
                        o = {};
                    if (t.each(e.data(), function(t, e) {
                            o[t.toLowerCase()] = e
                        }), i.options = t.extend(i.options, i.defaultoptions, o), t(window).trigger("html5lightbox.lightboxshow"), i.init(), i.elemArray.length <= 0) return !0;
                    i.hideObjects();
                    for (var n = 0; n < i.elemArray.length && i.elemArray[n][1] != e.attr("href"); n++);
                    if (n == i.elemArray.length) return !0;
                    i.options.curElem = n, i.calcNextPrevElem(), i.reset(), i.$lightbox.show();
                    var s = i.calcBoxPosition(i.options.loadingwidth, i.options.loadingheight),
                        a = s[0],
                        r = s[1],
                        l = s[2];
                    return i.options.iequirksmode ? i.$lightboxBox.css({
                        top: l
                    }) : i.$lightboxBox.css({
                        "margin-top": l
                    }), "left" == i.options.titlestyle || "right" == i.options.titlestyle ? i.$lightboxBox.css({
                        width: a,
                        height: r
                    }) : (i.$lightboxBox.css({
                        width: a,
                        height: "auto"
                    }), i.$elemWrap.css({
                        width: a,
                        height: r
                    })), i.loadCurElem(), !1
                }, i.loadThumbnail = function(e, o, n) {
                    var s = new Image;
                    t(s).on("load", function() {
                        var s;
                        s = this.width / this.height <= i.options.thumbwidth / i.options.thumbheight ? "width:100%;" : "height:100%;", t(".html5-nav-thumb").eq(o).html("<img alt='" + i.html2Text(n) + "' style='" + s + "' src='" + e + "' />")
                    }), s.src = e
                }, i.matchGroup = function(e, o) {
                    if (i.options.showall) return !0;
                    if (!e || !o) return !1;
                    var n = e.split(":"),
                        s = o.split(":"),
                        a = !1;
                    for (var r in n)
                        if (t.inArray(n[r], s) > -1) {
                            a = !0;
                            break
                        } return a
                }, i.showNavigation = function() {
                    if (i.options.shownavigation && i.currentElem && i.currentElem[3]) {
                        var e, o = !1,
                            n = i.currentElem[3];
                        for (e = 0; e < i.elemArray.length; e++)
                            if (i.matchGroup(n, i.elemArray[e][3]) && i.elemArray[e][8] && i.elemArray[e][8].length > 0) {
                                o = !0;
                                break
                            } if (o && (i.options.navheight = i.options.thumbheight + i.options.thumbtopmargin + i.options.thumbbottommargin, !(t(".html5-nav").length > 0))) {
                            var s = i.options.hidenavdefault ? "top:100%;bottom:auto;left:0;right:0;" : "top:auto;bottom:0;left:0;right:0;",
                                a = i.options.positionFixed ? "fixed" : "absolute";
                            t("body").append("<div class='html5-nav' style='display:block;position:" + a + ";" + s + "width:100%;height:" + i.options.navheight + "px;z-index:9999999;" + (i.options.navbgcolor ? "background-color:" + i.options.navbgcolor + ";" : "") + "'><div class='html5-nav-container' style='position:relative;margin:" + i.options.thumbtopmargin + "px auto " + i.options.thumbbottommargin + "px;'><div class='html5-nav-prev' style='display:block;position:absolute;cursor:pointer;width:" + i.options.navbuttonwidth + 'px;height:100%;left:0;top:0;background:url("' + i.options.navarrowsprevimage + "\") no-repeat left center;'></div><div class='html5-nav-mask' style='display:block;position:relative;margin:0 auto;overflow:hidden;'><div class='html5-nav-list'></div></div><div class='html5-nav-next' style='display:block;position:absolute;cursor:pointer;width:" + i.options.navbuttonwidth + 'px;height:100%;right:0;top:0;background:url("' + i.options.navarrowsnextimage + "\") no-repeat right center;'></div></div></div>"), i.navvisible = !i.options.hidenavdefault, i.options.shownavcontrol && (t(".html5-nav").append('<div class="html5-nav-showcontrol" style="position:absolute;display:block;cursor:pointer;bottom:100%;right:12px;margin:0;padding:0;"><img alt="" src="' + i.options.navcontrolimage + '"></div>'), t(".html5-nav-showcontrol").click(function() {
                                var e = t(window).height(),
                                    o = t(".html5-nav").height();
                                if (i.navvisible) i.navvisible = !1, t(".html5-nav").css({
                                    top: e - o + "px",
                                    bottom: "auto"
                                }).animate({
                                    top: e + "px"
                                }, function() {
                                    t(this).css({
                                        top: "100%",
                                        bottom: "auto"
                                    })
                                });
                                else {
                                    i.navvisible = !0;
                                    o = t(".html5-nav").height();
                                    t(".html5-nav").css({
                                        top: e + "px",
                                        bottom: "auto"
                                    }).animate({
                                        top: e - o + "px"
                                    }, function() {
                                        t(this).css({
                                            top: "auto",
                                            bottom: 0
                                        })
                                    })
                                }
                                i.resizeWindow()
                            }));
                            var r = 0;
                            for (e = 0; e < i.elemArray.length; e++) i.matchGroup(n, i.elemArray[e][3]) && i.elemArray[e][8] && i.elemArray[e][8].length > 0 && (t(".html5-nav-list").append("<div class='html5-nav-thumb' data-arrayindex='" + e + "' style='float:left;overflow:hidden;cursor:pointer;opacity:" + i.options.thumbopacity + ";margin: 0 " + i.options.thumbgap / 2 + "px;width:" + i.options.thumbwidth + "px;height:" + i.options.thumbheight + "px;border:" + i.options.thumbborder + "px solid " + i.options.thumbbordercolor + ";'></div>"), this.loadThumbnail(i.elemArray[e][8], r, i.elemArray[e][2]), r++);
                            t(".html5-nav-thumb").hover(function() {
                                t(this).css({
                                    opacity: 1
                                }), t(this).css({
                                    border: i.options.thumbborder + "px solid " + i.options.thumbhighlightbordercolor
                                })
                            }, function() {
                                t(this).css({
                                    opacity: i.options.thumbopacity
                                }), t(this).css({
                                    border: i.options.thumbborder + "px solid " + i.options.thumbbordercolor
                                })
                            }), t(".html5-nav-thumb").click(function() {
                                var e = t(this).data("arrayindex");
                                e >= 0 && i.gotoSlide(e)
                            }), i.options.totalwidth = r * (i.options.thumbgap + i.options.thumbwidth + 2 * i.options.thumbborder), t(".html5-nav-list").css({
                                display: "block",
                                position: "relative",
                                "margin-left": 0,
                                width: i.options.totalwidth + "px"
                            }).append("<div style='clear:both;'></div>");
                            var l = t(".html5-nav-mask"),
                                h = t(".html5-nav-prev"),
                                p = t(".html5-nav-next");
                            h.click(function() {
                                var e = t(".html5-nav-list"),
                                    o = t(".html5-nav-next"),
                                    n = t(window).width() - 2 * i.options.navbuttonwidth,
                                    s = parseInt(e.css("margin-left")) + n;
                                s >= 0 ? (s = 0, t(this).css({
                                    "background-position": "center left"
                                })) : t(this).css({
                                    "background-position": "center right"
                                }), s <= n - i.options.totalwidth ? o.css({
                                    "background-position": "center left"
                                }) : o.css({
                                    "background-position": "center right"
                                }), e.animate({
                                    "margin-left": s
                                })
                            }), p.click(function() {
                                var e = t(".html5-nav-list"),
                                    o = t(".html5-nav-prev"),
                                    n = t(window).width() - 2 * i.options.navbuttonwidth,
                                    s = parseInt(e.css("margin-left")) - n;
                                s <= n - i.options.totalwidth ? (s = n - i.options.totalwidth, t(this).css({
                                    "background-position": "center left"
                                })) : t(this).css({
                                    "background-position": "center right"
                                }), s >= 0 ? o.css({
                                    "background-position": "center left"
                                }) : o.css({
                                    "background-position": "center right"
                                }), e.animate({
                                    "margin-left": s
                                })
                            });
                            var c = t(window).width();
                            i.options.totalwidth <= c ? (l.css({
                                width: i.options.totalwidth + "px"
                            }), h.hide(), p.hide()) : (l.css({
                                width: c - 2 * i.options.navbuttonwidth + "px"
                            }), h.show(), p.show())
                        }
                    }
                }, i.loadElem = function(e) {
                    if (i.currentElem = e, i.showing = !0, i.options.bodynoscroll && t("html,body").addClass("bodynoscroll"), i.options.showtitle && i.currentElem[2] && i.currentElem[2].length > 0 || i.options.showdescription && i.currentElem[9] && i.currentElem[9].length > 0 || i.options.inGroup && (i.options.showplaybutton || i.options.showtitleprefix) || (i.options.barheight = 0), i.showNavigation(), i.$elem.off("mouseenter").off("mouseleave").off("mousemove"), i.$loading.show(), i.options.onshowitem && window[i.options.onshowitem] && "function" == typeof window[i.options.onshowitem] && window[i.options.onshowitem](e), "slide" == i.options.transition && i.existingElem >= 0) {
                        t(".html5-elem-box-previous").remove();
                        var o = i.$elem.clone();
                        o.insertAfter(i.$elem), i.$prevelem = i.$elem, i.$elem = o, i.$prevelem.addClass("html5-elem-box-previous"), i.$elem.addClass("html5-elem-box-current"), i.$elemWrap = t(".html5-elem-wrap", i.$elem), i.$loading = t(".html5-loading", i.$elem), i.$error = t(".html5-error-box", i.$elem), i.$image = t(".html5-image", i.$elem), i.$elemData = t(".html5-elem-data-box", i.$elem), i.$text = t(".html5-text", i.$elem), i.$elem.css({
                            position: "absolute",
                            top: 0,
                            left: -1 == i.direction ? "100%" : "-100%",
                            opacity: 0,
                            height: "auto"
                        }), i.$prevelem.css({
                            width: i.$prevelem.width() + "px",
                            height: i.$prevelem.height() + "px"
                        })
                    }
                    switch (e[0]) {
                        case 0:
                            var n = new Image;
                            t(n).on("load", function() {
                                e[11] = n.width, e[12] = n.height, i.showImage(e, n.width, n.height)
                            }), t(n).on("error", function() {
                                i.showError()
                            }), n.src = e[1];
                            break;
                        case 1:
                            i.showSWF(e);
                            break;
                        case 2:
                        case 8:
                            i.showVideo(e);
                            break;
                        case 3:
                        case 4:
                        case 9:
                        case 11:
                        case 12:
                            i.showYoutubeVimeo(e);
                            break;
                        case 5:
                            i.showPDF(e);
                            break;
                        case 6:
                            i.showMP3(e);
                            break;
                        case 7:
                            i.showWeb(e);
                            break;
                        case 10:
                            i.showDiv(e)
                    }
                    i.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Lightbox", "Open", e[1]]), i.options.preload && (i.options.nextElem >= 0 && 0 == i.elemArray[i.options.nextElem][0] && ((new Image).src = i.elemArray[i.options.nextElem][1]), i.options.prevElem >= 0 && 0 == i.elemArray[i.options.prevElem][0] && ((new Image).src = i.elemArray[i.options.prevElem][1]))
                }, i.loadCurElem = function() {
                    i.loadElem(i.elemArray[i.options.curElem])
                }, i.showError = function() {
                    i.$loading.hide(), i.resizeLightbox(i.options.errorwidth, i.options.errorheight, !0, function() {
                        i.$loading.hide(), i.$error.show(), i.$elem.fadeIn(i.options.fadespeed, function() {
                            i.showData()
                        })
                    })
                }, i.calcTextWidth = function(t) {
                    return t - 36
                }, i.showTitle = function(e, o, n) {
                    "inside" == i.options.titlestyle && i.$elemData.css({
                        width: e + "px"
                    });
                    var s = "";
                    i.options.showtitle && o && o.length > 0 && (s += o), i.options.inGroup && (i.options.showtitleprefix && (s = "<span class='html5-title-prefix'>" + i.options.titleprefix.replace("%NUM", i.options.groupIndex + 1).replace("%TOTAL", i.options.groupCount) + "</span> <span class='html5-title-caption'>" + s + "</span>"), i.options.showplaybutton && (s = "<div class='html5-playpause' style='display:inline-block;cursor:pointer;vertical-align:middle;'><div class='html5-play' style='display:block;'><img alt='' src='" + i.options.playimage + "'></div><div class='html5-pause' style='display:none;'><img alt='' src='" + i.options.pauseimage + "'></div></div> " + s)), s.length > 0 && (s = '<div class="html5-title">' + s + "</div>"), i.options.showdescription && n && n.length > 0 && (s += '<div class="html5-description">' + n + "</div>"), i.$text.html(s), i.options.inGroup && i.options.showplaybutton && (i.autosliding ? (t(".html5-play", i.$lightbox).hide(), t(".html5-pause", i.$lightbox).show()) : (t(".html5-play", i.$lightbox).show(), t(".html5-pause", i.$lightbox).hide()), t(".html5-play", i.$lightbox).click(function() {
                        t(".html5-play", i.$lightbox).hide(), t(".html5-pause", i.$lightbox).show(), i.slideTimeout && (i.slideTimeout.stop(), i.slideTimeout.start(), i.autosliding = !0)
                    }), t(".html5-pause", i.$lightbox).click(function() {
                        t(".html5-play", i.$lightbox).show(), t(".html5-pause", i.$lightbox).hide(), i.slideTimeout && (i.slideTimeout.stop(), i.autosliding = !1)
                    })), t("#html5-social", i.$lightbox).show(), i.options.showsocialmedia && (i.currentElem[13] ? t("#html5-socialmedia", i.$lightboxBox).length > 0 ? t("#html5-socialmedia", i.$lightboxBox).html(i.currentElem[13]) : i.$lightboxBox.append('<div id="html5-socialmedia" style="' + i.options.socialmediaposition + '">' + i.currentElem[13] + "</div>") : t("#html5-socialmedia", i.$lightboxBox).length > 0 && t("#html5-socialmedia", i.$lightboxBox).remove())
                }, i.showImage = function(t, e, o) {
                    var n, s;
                    t[4] ? n = t[4] : (n = e, t[4] = e), t[5] ? s = t[5] : (s = o, t[5] = o);
                    var a = i.calcElemSize({
                        w: n,
                        h: s
                    }, i.options.imagekeepratio);
                    i.resizeLightbox(a.w, a.h, !0, function() {
                        i.$loading.hide(), i.showTitle(a.w, t[2], t[9]);
                        var e = i.options.showtimer && i.options.inGroup ? "<div class='html5-timer' style='display:none;position:absolute;" + i.options.timerposition + ":0;left:0;width:0;height:" + i.options.timerheight + "px;background-color:" + i.options.timercolor + ";opacity:" + i.options.timeropacity + ";'></div>" : "";
                        i.$image.hide(), i.$image.html("<div class='html5-image-container' style='display:block;position:relative;width:100%;height:100%;" + (i.options.imagekeepratio ? "overflow:hidden;" : "overflow:auto;") + "'><img alt='" + i.html2Text(t[2]) + "' src='" + t[1] + "' width='100%' height='" + (i.options.imagekeepratio ? "100%" : "auto") + "' />" + e + "</div>"), i.$image.fadeIn(i.options.fadespeed), i.showData(), i.autosliding && (i.slideTimeout.stop(), i.slideTimeout.start())
                    })
                }, i.showSWF = function(e) {
                    var o = e[4] ? e[4] : i.options.defaultwidth,
                        n = e[5] ? e[5] : i.options.defaultheight,
                        s = i.calcElemSize({
                            w: o,
                            h: n
                        }, !0);
                    o = s.w, n = s.h, i.resizeLightbox(o, n, !0, function() {
                        i.$loading.hide(), i.showTitle(s.w, e[2], e[9]), i.$image.html("<div class='html5lightbox-swf' style='display:block;width:100%;height:100%;'></div>").show(), i.embedFlash(t(".html5lightbox-swf", i.$image), e[1], "window", {
                            width: o,
                            height: n
                        }), i.$elem.show(), i.showData(), i.autosliding && (i.slideTimeout.stop(), i.slideTimeout.start())
                    })
                }, i.showVideo = function(e) {
                    i.slideTimeout.stop();
                    var o = e[4] ? e[4] : i.options.defaultwidth,
                        n = e[5] ? e[5] : i.options.defaultheight,
                        s = i.calcElemSize({
                            w: o,
                            h: n
                        }, !0);
                    o = s.w, n = s.h, i.resizeLightbox(o, n, !0, function() {
                        i.$loading.hide(), i.showTitle(s.w, e[2], e[9]), i.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;background-color:" + i.options.videobgcolor + ";'></div>").show();
                        var a = !1;
                        if (i.options.isIE678 || 8 == e[0] || i.options.isIE9 && i.options.useflashonie9 || i.options.isIE10 && i.options.useflashonie10 || i.options.isIE11 && i.options.useflashonie11 ? a = !1 : i.options.isMobile ? a = !0 : !i.options.html5player && i.options.flashInstalled || !i.options.html5VideoSupported || (a = !0, (i.options.isFirefox || i.options.isOpera) && (e[6] || e[7] || i.options.canplaymp4 && !i.options.useflashformp4onfirefox || (a = !1))), a) {
                            var r = e[1];
                            (i.options.isFirefox || i.options.isOpera) && (e[6] ? r = e[6] : e[7] && (r = e[7])), i.embedHTML5Video(t(".html5lightbox-video", i.$image), r, i.options.autoplay, i.options.loopvideo)
                        } else {
                            var l = e[1];
                            "/" != l.charAt(0) && "http:" != l.substring(0, 5) && "https:" != l.substring(0, 6) && (l = i.options.htmlfolder + l), i.embedFlash(t(".html5lightbox-video", i.$image), i.options.jsfolder + "html5boxplayer.swf", "transparent", {
                                width: o,
                                height: n,
                                jsobjectname: "html5Lightbox",
                                hidecontrols: i.options.videohidecontrols ? "1" : "0",
                                hideplaybutton: "0",
                                videofile: l,
                                hdfile: "",
                                ishd: "0",
                                defaultvolume: i.options.defaultvideovolume,
                                autoplay: i.options.autoplay ? "1" : "0",
                                loop: i.options.loopvideo ? "1" : "0",
                                errorcss: ".html5box-error" + i.options.errorcss,
                                id: 0
                            })
                        }
                        i.$elem.show(), i.showData()
                    })
                }, i.loadNext = function() {
                    t(window).trigger("html5lightbox.videofinished"), i.autosliding ? i.gotoSlide(-1) : i.options.autoclose && setTimeout(function() {
                        i.finish()
                    }, i.options.autoclosedelay)
                }, i.getYoutubeParams = function(t) {
                    var e = {};
                    if (t.indexOf("?") < 0) return e;
                    for (var i = t.substring(t.indexOf("?") + 1).split("&"), o = 0; o < i.length; o++) {
                        var n = i[o].split("=");
                        n && 2 == n.length && "v" != n[0].toLowerCase() && (e[n[0].toLowerCase()] = n[1])
                    }
                    return e
                }, i.getYoutubeId = function(t) {
                    var e = "",
                        i = t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/);
                    return i && i[7] && 11 == i[7].length && (e = i[7]), e
                }, i.prepareYoutubeHref = function(t) {
                    var e = "https://www.youtube.com/embed/" + i.getYoutubeId(t),
                        o = this.getYoutubeParams(t),
                        n = !0;
                    for (var s in o) n ? (e += "?", n = !1) : e += "&", e += s + "=" + o[s];
                    return e
                }, i.prepareDailymotionHref = function(t) {
                    if (t.match(/\:\/\/.*(dai\.ly)/i)) {
                        var e = t.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2];
                        t = "https://www.dailymotion.com/embed/video/" + e
                    }
                    return t
                }, i.showYoutubeVimeo = function(e) {
                    i.slideTimeout.stop();
                    var o = e[4] ? e[4] : i.options.defaultwidth,
                        n = e[5] ? e[5] : i.options.defaultheight,
                        s = i.calcElemSize({
                            w: o,
                            h: n
                        }, !0);
                    o = s.w, n = s.h, i.resizeLightbox(o, n, !0, function() {
                        i.$loading.hide(), i.showTitle(s.w, e[2], e[9]), i.$image.html("<div class='html5lightbox-video' style='display:block;width:100%;height:100%;overflow:hidden;'></div>").show();
                        var o = e[1],
                            n = "";
                        if (3 == e[0] && (n = i.getYoutubeId(o), o = i.prepareYoutubeHref(o)), 9 == e[0] && (o = i.prepareDailymotionHref(o)), i.options.autoplay && (o += o.indexOf("?") < 0 ? "?" : "&", 11 == e[0] ? o += "autoPlay=true" : o += "autoplay=1"), i.options.loopvideo) switch (o += o.indexOf("?") < 0 ? "?" : "&", e[0]) {
                            case 3:
                                o += "loop=1&playlist=" + n;
                                break;
                            case 4:
                            case 9:
                                o += "loop=1";
                                break;
                            case 11:
                                o += "endVideoBehavior=loop"
                        }
                        if (3 == e[0] ? (o.indexOf("?") < 0 ? o += "?wmode=transparent&rel=0" : o += "&wmode=transparent&rel=0", i.options.videohidecontrols && (o += "&controls=0&showinfo=0"), o += "&enablejsapi=1&origin=" + document.location.protocol + "//" + document.location.hostname) : 4 == e[0] && (o += o.indexOf("?") < 0 ? "?" : "&", o += "api=1&player_id=html5boxiframevideo" + i.options.curElem), t(".html5lightbox-video", i.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5boxiframevideo' id='html5boxiframevideo" + i.options.curElem + "' width='100%' height='100%' src='" + o + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), i.$elem.show(), i.showData(), 3 == e[0] && "object" == typeof YT && "function" == typeof YT.Player) i.ytplayer = new YT.Player("html5boxiframevideo" + i.options.curElem, {
                            events: {
                                onStateChange: function(e) {
                                    e.data == YT.PlayerState.ENDED && (t(window).trigger("html5lightbox.videofinished"), i.autosliding ? i.gotoSlide(-1) : i.options.autoclose && setTimeout(function() {
                                        i.finish()
                                    }, i.options.autoclosedelay))
                                }
                            }
                        });
                        else if (4 == e[0] && "function" == typeof $f) {
                            var a = t("#html5boxiframevideo" + i.options.curElem)[0];
                            i.vimeoPlayer = $f(a), i.vimeoPlayer.addEvent("ready", function() {
                                i.vimeoPlayer.addEvent("finish", function(e) {
                                    t(window).trigger("html5lightbox.videofinished"), i.autosliding ? i.gotoSlide(-1) : i.options.autoclose && setTimeout(function() {
                                        i.finish()
                                    }, i.options.autoclosedelay)
                                })
                            })
                        }
                    })
                }, i.showPDF = function(t) {
                    if (i.options.enablepdfjs) {
                        if (i.options.isIPhone && i.options.openpdfinnewtaboniphone || i.options.isIPad && i.options.openpdfinnewtabonipad) return window.open(t[1], "_blank").focus(), void i.finish();
                        i.options.pdfjsengine || (i.options.pdfjsengine = i.options.jsfolder + "pdfjs/web/viewer.html");
                        var e = t[1];
                        "http:" != e.substring(0, 5) && "https:" != e.substring(0, 6) && (e = i.absoluteUrl(e));
                        var o = jQuery.extend(!0, {}, t);
                        o[1] = i.options.pdfjsengine + (i.options.pdfjsengine.indexOf("?") < 0 ? "?" : "&") + "file=" + encodeURIComponent(e), i.showWeb(o)
                    } else {
                        if (i.options.isIPhone || i.options.isIPad || i.options.isAndroid || i.options.isIE || i.options.isIE11) return window.open(t[1], "_blank").focus(), void i.finish();
                        i.showWeb(t)
                    }
                }, i.showMP3 = function(t) {}, i.showDiv = function(e) {
                    var o = t(window).width(),
                        n = t(window).height(),
                        s = i.options.shownavigation && i.navvisible ? i.options.navheight : 0,
                        a = e[4] ? e[4] : i.options.usedefaultsizeforcontent ? i.options.defaultwidth : o,
                        r = e[5] ? e[5] : i.options.usedefaultsizeforcontent ? i.options.defaultheight : n - s,
                        l = i.calcElemSize({
                            w: a,
                            h: r
                        }, !1);
                    a = l.w, r = l.h, i.resizeLightbox(a, r, !0, function() {
                        i.$loading.hide(), i.showTitle(l.w, e[2], e[9]), i.$image.html("<div class='html5lightbox-div' id='html5lightbox-div" + i.options.curElem + "' style='display:block;width:100%;height:" + (i.options.autoresizecontent ? "auto" : "100%") + ";" + (i.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "overflow:auto;") + "'></div>").show();
                        var o = e[1];
                        t(o).length > 0 ? t(o).children().appendTo(t("#html5lightbox-div" + i.options.curElem, i.$image)) : t("#html5lightbox-div" + i.options.curElem, i.$image).html("<div class='html5-error'>The specified div ID does not exist.</div>"), i.$elem.show(), i.showData(), i.options.autoresizecontent && i.resizeWindow(), i.autosliding && (i.slideTimeout.stop(), i.slideTimeout.start())
                    })
                }, i.isSameDomain = function(t) {
                    if ("http:" != t.substring(0, 5) && "https:" != t.substring(0, 6)) return !0;
                    var e = document.createElement("a");
                    e.setAttribute("href", t);
                    var i = e.protocol == document.location.protocol && e.host == document.location.host && e.port == document.location.port;
                    return e = null, i
                }, i.showWeb = function(e) {
                    var o = t(window).width(),
                        n = t(window).height(),
                        s = i.options.shownavigation && i.navvisible ? i.options.navheight : 0,
                        a = e[4] ? e[4] : i.options.usedefaultsizeforcontent ? i.options.defaultwidth : o,
                        r = e[5] ? e[5] : i.options.usedefaultsizeforcontent ? i.options.defaultheight : n - s,
                        l = i.calcElemSize({
                            w: a,
                            h: r
                        }, !1);
                    a = l.w, r = l.h, i.resizeLightbox(a, r, !0, function() {
                        i.$loading.hide(), i.showTitle(l.w, e[2], e[9]), i.$image.html("<div class='html5lightbox-web' style='display:block;width:100%;height:100%;" + (i.options.isIOS ? "-webkit-overflow-scrolling:touch;overflow-y:scroll;" : "") + "'></div>").show(), t(".html5lightbox-web", i.$image).html("<iframe style='margin:0;padding:0;border:0;' class='html5lightbox-web-iframe' width='100%' height='100%' src='" + e[1] + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), i.$elem.show(), i.showData(), i.options.autoresizecontent && i.isSameDomain(e[1]) && (t(".html5lightbox-web-iframe", i.$image).data("sameorigin", !0), t(".html5lightbox-web-iframe", i.$image).on("load", function() {
                            t(this).data("sameoriginloaded", !0), i.resizeWindow()
                        })), i.autosliding && (i.slideTimeout.stop(), i.slideTimeout.start())
                    })
                }, i.scrollBox = function() {}, i.resizeWindow = function() {
                    if (i.currentElem && i.options.responsive) {
                        var e, o, n, s = t(window).width(),
                            a = t(window).height();
                        if (i.options.responsivebarheight && (a <= i.options.smallscreenheight ? i.options.barheight = i.options.barheightonsmallheight : i.options.barheight = i.options.barheightoriginal, "bottom" == i.options.titlestyle && "auto" != i.options.barautoheight && i.$elemData.css({
                                height: i.options.barheight + "px",
                                "max-height": i.options.barheight + "px"
                            })), i.options.showtitle && i.currentElem[2] && i.currentElem[2].length > 0 || i.options.showdescription && i.currentElem[9] && i.currentElem[9].length > 0 || i.options.inGroup && (i.options.showplaybutton || i.options.showtitleprefix) || (i.options.barheight = 0), 5 == i.currentElem[0] || 7 == i.currentElem[0] || 10 == i.currentElem[0]) {
                            var r = i.options.shownavigation && i.navvisible ? i.options.navheight : 0;
                            e = i.currentElem[4] ? i.currentElem[4] : i.options.usedefaultsizeforcontent ? i.options.defaultwidth : s, o = i.currentElem[5] ? i.currentElem[5] : i.options.usedefaultsizeforcontent ? i.options.defaultheight : a - r, n = !1
                        } else e = i.currentElem[4] ? i.currentElem[4] : i.options.defaultwidth, o = i.currentElem[5] ? i.currentElem[5] : i.options.defaultheight, n = 0 != i.currentElem[0] || i.options.imagekeepratio;
                        var l = i.calcElemSize({
                                w: e,
                                h: o
                            }, n),
                            h = i.calcBoxPosition(l.w, l.h),
                            p = h[0],
                            c = h[1],
                            d = h[2];
                        if (i.$lightboxBox.css({
                                "margin-top": d
                            }), "left" == i.options.titlestyle || "right" == i.options.titlestyle ? i.$lightboxBox.css({
                                width: p,
                                height: c
                            }) : (i.$lightboxBox.css({
                                width: p,
                                height: "auto"
                            }), i.$elemWrap.css({
                                width: p,
                                height: c
                            })), "inside" == i.options.titlestyle && i.$elemData.css({
                                width: l.w + "px"
                            }), i.options.autoresizecontent && (5 == i.currentElem[0] || 7 == i.currentElem[0] || 10 == i.currentElem[0])) {
                            var u = !1;
                            if (7 == i.currentElem[0] && t(".html5lightbox-web-iframe", i.$lightbox).length > 0 && t(".html5lightbox-web-iframe", i.$lightbox).data("sameoriginloaded")) {
                                var m = t(".html5lightbox-web-iframe", i.$lightbox)[0];
                                m && m.contentWindow && m.contentWindow.document && m.contentWindow.document.documentElement.offsetHeight && o > m.contentWindow.document.documentElement.offsetHeight && (o = m.contentWindow.document.documentElement.offsetHeight, u = !0)
                            } else if (10 == i.currentElem[0] && t(".html5lightbox-div", i.$lightbox).length > 0) {
                                var g = t(".html5lightbox-div", i.$lightbox).height();
                                o > g && (o = g, u = !0)
                            }
                            u && (l = i.calcElemSize({
                                w: e,
                                h: o
                            }, n), p = (h = i.calcBoxPosition(l.w, l.h))[0], c = h[1], d = h[2], i.$lightboxBox.css({
                                "margin-top": d
                            }), "left" == i.options.titlestyle || "right" == i.options.titlestyle ? i.$lightboxBox.css({
                                height: c
                            }) : (i.$lightboxBox.css({
                                height: "auto"
                            }), i.$elemWrap.css({
                                height: c
                            })))
                        }
                        if (!(t(".html5-nav").length <= 0)) {
                            t(".html5-nav-list").css({
                                "margin-left": 0
                            });
                            var f = t(".html5-nav-mask"),
                                v = t(".html5-nav-prev"),
                                b = t(".html5-nav-next");
                            s = t(window).width();
                            i.options.totalwidth <= s ? (f.css({
                                width: i.options.totalwidth + "px"
                            }), v.hide(), b.hide()) : (f.css({
                                width: s - 2 * i.options.navbuttonwidth + "px"
                            }), v.show(), b.show())
                        }
                    }
                }, i.calcElemSize = function(e, o) {
                    if (!i.options.responsive) return e;
                    var n = t(window).width();
                    n = n || t(document).width();
                    var s = t(window).height();
                    s = s || t(document).height(), ("left" == i.options.titlestyle || "right" == i.options.titlestyle) && n > i.options.sidetobottomscreenwidth && (e.w = 100 * e.w / i.options.imagepercentage);
                    var a = i.options.shownavigation && i.navvisible ? i.options.navheight : 0,
                        r = t(window).height() < i.options.smallscreenheight ? i.options.bordertopmarginsmall : i.options.bordertopmargin,
                        l = s - a - 2 * i.options.bordersize - 2 * r;
                    "bottom" == i.options.titlestyle && (l -= i.options.barheight);
                    var h = n - 2 * i.options.bordersize - 2 * i.options.bordermargin;
                    if ((i.options.fullscreenmode && n > i.options.navarrowsbottomscreenwidth || (i.options.isTouch && i.options.navarrowsalwaysshowontouch || i.options.alwaysshownavarrows) && n > i.options.navarrowsbottomscreenwidth) && (h -= 64), (("left" == i.options.titlestyle || "right" == i.options.titlestyle) && n <= i.options.sidetobottomscreenwidth || i.options.notkeepratioonsmallheight && s <= i.options.smallscreenheight) && (o = !1), 0 == i.currentElem[0] && o) {
                        var p = i.currentElem[11] / i.currentElem[12];
                        e.h = Math.round(e.w / p), e.h > l && (e.w = Math.round(p * l), e.h = l), e.w > h && (e.h = Math.round(h / p), e.w = h)
                    } else e.h > l ? (o && (e.w = Math.round(e.w * l / e.h)), e.h = l) : i.options.maxheight && (e.h = l), e.w > h && (o && (e.h = Math.round(e.h * h / e.w)), e.w = h);
                    return e
                }, i.showData = function() {
                    i.$text.text().length > 0 && i.$elemData.show(), "bottom" != i.options.titlestyle && "inside" != i.options.titlestyle || i.$lightboxBox.css({
                        height: "auto"
                    }), i.$text.text().length > 0 && "bottom" == i.options.titlestyle && i.$elemData.css({
                        "max-height": i.options.barheight + "px"
                    }), i.options.positionFixed ? t("#html5-lightbox-overlay", i.$lightbox).css({
                        height: Math.max(t(window).height(), t(document).height())
                    }) : t("#html5-lightbox-overlay", i.$lightbox).css({
                        height: "100%"
                    }), t(window).trigger("html5lightbox.lightboxopened")
                }, i.resizeLightbox = function(e, o, n, s) {
                    i.hideNavArrows();
                    var a = i.calcBoxPosition(e, o),
                        r = a[0],
                        l = a[1],
                        h = a[2];
                    i.$loading.hide(), i.$watermark.hide(), i.options.nextElem <= i.options.curElem && i.options.onlastitem && window[i.options.onlastitem] && "function" == typeof window[i.options.onlastitem] && window[i.options.onlastitem](i.currentElem), i.options.prevElem >= i.options.curElem && i.options.onfirstitem && window[i.options.onfirstitem] && "function" == typeof window[i.options.onfirstitem] && window[i.options.onfirstitem](i.currentElem), i.options.fullscreenmode || i.options.isTouch && i.options.navarrowsalwaysshowontouch || i.options.alwaysshownavarrows || (i.$lightboxBox.on("mouseenter mousemove", function() {
                        (i.options.arrowloop && i.options.prevElem >= 0 || !i.options.arrowloop && i.options.prevElem >= 0 && i.options.prevElem < i.options.curElem) && i.$prev.fadeIn(), (i.options.arrowloop && i.options.nextElem >= 0 || !i.options.arrowloop && i.options.nextElem >= 0 && i.options.nextElem > i.options.curElem) && i.$next.fadeIn()
                    }), i.$lightboxBox.on("mouseleave", function() {
                        i.$next.fadeOut(), i.$prev.fadeOut()
                    }));
                    var p = parseInt(i.$lightboxBox.css("margin-top"));
                    i.$lightboxBox.css({
                        "margin-top": h
                    });
                    var c = n ? i.options.resizespeed : 0;
                    i.options.fullscreenmode && (c = 0), "slide" == i.options.transition && i.existingElem >= 0 && (c = 0), "left" == i.options.titlestyle || "right" == i.options.titlestyle ? (r == i.$lightboxBox.width() && l == i.$lightboxBox.height() && (c = 0), i.$lightboxBox.animate({
                        width: r
                    }, c).animate({
                        height: l
                    }, c, function() {
                        i.onAnimateFinish(s)
                    })) : (r == i.$elemWrap.width() && l == i.$elemWrap.height() && (c = 0), i.$lightboxBox.css({
                        width: r,
                        height: "auto"
                    }), "slide" == i.options.transition && i.existingElem >= 0 && t(".html5-elem-box-previous", i.$lightbox).length > 0 && t(".html5-elem-box-previous", i.$lightbox).css({
                        "margin-left": String(r / 2 - t(".html5-elem-box-previous", i.$lightbox).width() / 2) + "px",
                        top: String(p - h) + "px"
                    }), i.$elemWrap.animate({
                        width: r
                    }, c).animate({
                        height: l
                    }, c, function() {
                        i.onAnimateFinish(s)
                    }))
                }, i.onAnimateFinish = function(t) {
                    i.$loading.show(), i.$watermark.show(), i.$close.show(), i.$elem.css({
                        "background-color": i.options.bgcolor
                    }), t(), i.finishCallback()
                }, i.finishCallback = function() {
                    "slide" == i.options.transition && i.existingElem >= 0 && (i.$prevelem.animate({
                        left: -1 == i.direction ? "-100%" : "100%",
                        opacity: 0
                    }, {
                        duration: i.options.transitionduration
                    }), i.$elem.animate({
                        left: 0,
                        opacity: 1
                    }, {
                        duration: i.options.transitionduration,
                        always: function() {
                            i.$prevelem.remove(), i.$elem.removeClass("html5-elem-box-current").css({
                                position: "relative",
                                height: "100%"
                            })
                        }
                    }))
                }, i.resetDiv = function(e) {
                    if (i.elemArray.length > 0 && e >= 0 && 10 == i.elemArray[e][0]) {
                        var o = i.elemArray[e][1];
                        t(o).length > 0 && t("#html5lightbox-div" + e).children().appendTo(t(o))
                    }
                }, i.reset = function() {
                    i.options.stamp && i.$watermark.hide(), i.showing = !1, i.$image.empty(), i.$text.empty(), i.$error.hide(), i.$loading.hide(), i.$image.hide(), "bottom" != i.options.titlestyle && "inside" != i.options.titlestyle || i.$elemData.hide(), i.options.fullscreenmode || i.$close.hide(), i.$elem.css({
                        "background-color": ""
                    })
                }, i.resetNavigation = function() {
                    i.options.navheight = 0, t(".html5-nav").remove(), i.navvisible = !1
                }, i.finish = function() {
                    i.existingElem = -1, i.resetDiv(i.options.curElem), t(".html5-lightbox-video", i.$lightbox).length && t(".html5-lightbox-video", i.$lightbox).attr("src", ""), t("head").find("style").each(function() {
                        "slider-html5-lightbox" == t(this).data("creator") && t(this).remove()
                    }), i.options.bodynoscroll && t("html,body").removeClass("bodynoscroll"), i.slideTimeout.stop(), i.reset(), i.resetNavigation(), i.$lightbox.remove(), t("#slider-html5-lightbox").remove(), i.showObjects(), i.options.oncloselightbox && window[i.options.oncloselightbox] && "function" == typeof window[i.options.oncloselightbox] && window[i.options.oncloselightbox](i.currentElem), i.onLightboxClosed && "function" == typeof i.onLightboxClosed && i.onLightboxClosed(i.currentElem), t(window).trigger("html5lightbox.lightboxclosed")
                }, i.pauseSlide = function() {}, i.playSlide = function() {}, i.gotoSlide = function(t) {
                    if (i.existingElem = i.options.curElem, i.direction = t, i.resetDiv(i.options.curElem), -1 == t) {
                        if (i.options.nextElem < 0) return;
                        i.options.curElem = i.options.nextElem
                    } else if (-2 == t) {
                        if (i.options.prevElem < 0) return;
                        i.options.curElem = i.options.prevElem
                    } else t >= 0 && (i.direction = t > i.options.curElem ? -1 : -2, i.options.curElem = t);
                    i.autosliding && i.slideTimeout.stop(), i.calcNextPrevElem(), "slide" != i.options.transition && i.reset(), i.loadCurElem(), "inside" == i.options.titlestyle && i.options.showonmouseoverinside && 0 !== i.currentElem[0] && i.options.showinsidetitleforimageonly && i.$elemData.css({
                        opacity: 0
                    })
                }, i.enableSwipe = function() {
                    var t = !(!i.options.isAndroid || !(i.options.swipepreventdefaultonandroid || i.options.androidVersion >= 0 && i.options.androidVersion <= 5));
                    i.$lightboxBox.sliderTouchSwipe({
                        preventWebBrowser: t,
                        swipeDistance: i.options.swipedistance,
                        swipeLeft: function() {
                            i.gotoSlide(-1)
                        },
                        swipeRight: function() {
                            i.gotoSlide(-2)
                        }
                    })
                }, i.hideObjects = function() {
                    t("select, embed, object").css({
                        visibility: "hidden"
                    })
                }, i.showObjects = function() {
                    t("select, embed, object").css({
                        visibility: "visible"
                    })
                }, i.embedHTML5Video = function(e, o, n, s) {
                    e.html("<div style='display:block;width:100%;height:100%;position:relative;'><video class='html5-lightbox-video' width='100%' height='100%'" + (i.options.html5videoposter && i.options.html5videoposter.length > 0 ? "poster='" + i.options.html5videoposter + "'" : "") + (n ? " autoplay" : "") + (s ? " loop" : "") + (i.options.nativehtml5controls && !i.options.videohidecontrols ? " controls='controls'" : "") + (i.options.nativecontrolsnodownload ? ' controlsList="nodownload"' : "") + " src='" + o + "'></div>"), i.options.nativehtml5controls || i.options.videohidecontrols || (t("video", e).data("src", o), t("video", e).asHTML5VideoControls(i.options.skinsfolder, i, ".html5-lightbox-video", i.options.videohidecontrols, !1, i.options.defaultvideovolume, i.options.nativecontrolsonfullscreen, i.options.nativecontrolsnodownload, null)), t("video", e).off("ended").on("ended", function() {
                        t(window).trigger("html5lightbox.videofinished"), i.autosliding ? i.gotoSlide(-1) : i.options.autoclose && setTimeout(function() {
                            i.finish()
                        }, i.options.autoclosedelay)
                    })
                }, i.embedFlash = function(e, o, n, s) {
                    if (i.options.flashInstalled) {
                        var a = {
                            pluginspage: "http://www.adobe.com/go/getflashplayer",
                            quality: "high",
                            allowFullScreen: "true",
                            allowScriptAccess: "always",
                            type: "application/x-shockwave-flash",
                            width: "100%",
                            height: "100%"
                        };
                        a.src = o, a.flashVars = t.param(s), a.wmode = n;
                        var r = "";
                        for (var l in a) r += l + "=" + a[l] + " ";
                        e.html("<embed " + r + "/>")
                    } else e.html("<div class='html5lightbox-flash-error' style='display:block; position:relative;text-align:center; width:100%; left:0px; top:40%;'><div class='html5-error'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div></div>")
                }, i.checkType = function(t) {
                    return t ? t.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i) ? 0 : t.match(/[^\.]\.(swf)\s*$/i) ? 1 : t.match(/\.(mp4|m4v|ogv|ogg|webm)(.*)?$/i) ? 2 : t.match(/\:\/\/.*(youtube\.com)/i) || t.match(/\:\/\/.*(youtu\.be)/i) ? 3 : t.match(/\:\/\/.*(vimeo\.com)/i) ? 4 : t.match(/\:\/\/.*(dailymotion\.com)/i) || t.match(/\:\/\/.*(dai\.ly)/i) ? 9 : t.match(/[^\.]\.(pdf)\s*$/i) ? 5 : t.match(/[^\.]\.(mp3)\s*$/i) ? 6 : t.match(/[^\.]\.(flv)\s*$/i) ? 8 : t.match(/\#\w+/i) ? 10 : t.match(/\:\/\/.*(wistia)/i) ? 11 : 7 : -1
                }, i.getURLParams = function() {
                    for (var t = {}, e = window.location.search.substring(1).split("&"), i = 0; i < e.length; i++) {
                        var o = e[i].split("=");
                        o && 2 == o.length && (t[o[0].toLowerCase()] = unescape(o[1]))
                    }
                    return t
                }, i.absoluteUrl = function(t) {
                    var e = document.createElement("a");
                    return e.href = t, e.protocol + "//" + e.host + e.pathname + e.search + e.hash
                }, i.showLightbox = function(e, o, n, s, a, r, l, h, p) {
                    i.options = t.extend(i.options, i.defaultoptions), t(window).trigger("html5lightbox.lightboxshow"), i.init(), i.reset(), i.$lightbox.show();
                    var c = i.calcBoxPosition(i.options.loadingwidth, i.options.loadingheight),
                        d = c[0],
                        u = c[1],
                        m = c[2];
                    i.$lightboxBox.css({
                        "margin-top": m
                    }), "left" == i.options.titlestyle || "right" == i.options.titlestyle ? i.$lightboxBox.css({
                        width: d,
                        height: u
                    }) : (i.$lightboxBox.css({
                        width: d,
                        height: "auto"
                    }), i.$elemWrap.css({
                        width: d,
                        height: u
                    })), i.loadElem(new Array(e, o, n, null, s, a, r, l, h, p))
                }, i.addItem = function(t, e, o, n, s, a, r, l, h, p) {
                    type = p && p >= 0 ? p : i.checkType(t), i.elemArray.push(new Array(type, t, e, o, n, s, a, r, l, h))
                }, i.showItem = function(e) {
                    if (i.options = t.extend(i.options, i.defaultoptions), t(window).trigger("html5lightbox.lightboxshow"), i.init(), i.elemArray.length <= 0) return !0;
                    i.hideObjects();
                    for (var o = 0; o < i.elemArray.length && i.elemArray[o][1] != e; o++);
                    if (o == i.elemArray.length) return !0;
                    i.options.curElem = o, i.calcNextPrevElem(), i.reset(), i.$lightbox.show();
                    var n = i.calcBoxPosition(i.options.loadingwidth, i.options.loadingheight),
                        s = n[0],
                        a = n[1],
                        r = n[2];
                    return i.$lightboxBox.css({
                        "margin-top": r
                    }), "left" == i.options.titlestyle || "right" == i.options.titlestyle ? i.$lightboxBox.css({
                        width: s,
                        height: a
                    }) : (i.$lightboxBox.css({
                        width: s,
                        height: "auto"
                    }), i.$elemWrap.css({
                        width: s,
                        height: a
                    })), i.loadCurElem(), !1
                }, i.off("click").click(i.clickHandler), i.each(function() {
                    var e = t(this),
                        o = !1,
                        n = 0;
                    if ("undefined" != typeof html5lightbox_options && html5lightbox_options && ("autoopen" in html5lightbox_options && (o = html5lightbox_options.autoopen), "autoopendelay" in html5lightbox_options && (n = html5lightbox_options.autoopendelay)), o = e.data("autoopen") ? e.data("autoopen") : o, n = e.data("autoopendelay") ? e.data("autoopendelay") : n, o) return setTimeout(function() {
                        e.click()
                    }, n), !1;
                    if (e.data("preloadonpageload") && 0 == ("mediatype" in e.data() ? e.data("mediatype") : i.checkType(e.attr("href")))) {
                        var s = e.data("preloaddelay") ? e.data("preloaddelay") : 0;
                        setTimeout(function() {
                            (new Image).src = e.attr("href")
                        }, s)
                    }
                }), i.options.preloadallonpageload && setTimeout(function() {
                    i.each(function() {
                        "a" != this.nodeName.toLowerCase() && "area" != this.nodeName.toLowerCase() || 0 === ("mediatype" in t(this).data() ? t(this).data("mediatype") : i.checkType(t(this).attr("href"))) && ((new Image).src = t(this).attr("href"), t(this).data("thumbnail") && ((new Image).src = t(this).data("thumbnail")))
                    })
                }, i.options.preloadalldelay), i
            }
        }(jQuery);
    var n = {
        flashInstalled: function() {
            var t = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = !0)
            } catch (e) {
                navigator.mimeTypes["application/x-shockwave-flash"] && (t = !0)
            }
            return t
        },
        html5VideoSupported: function() {
            return !!document.createElement("video").canPlayType
        },
        canPlayMP4: function() {
            var t = document.createElement("video");
            return t && t.canPlayType && t.canPlayType("video/mp4").replace(/no/, "")
        },
        isChrome: function() {
            return null != navigator.userAgent.match(/Chrome/i)
        },
        isFirefox: function() {
            return null != navigator.userAgent.match(/Firefox/i)
        },
        isOpera: function() {
            return null != navigator.userAgent.match(/Opera/i) || null != navigator.userAgent.match(/OPR\//i)
        },
        isSafari: function() {
            return null != navigator.userAgent.match(/Safari/i)
        },
        isAndroid: function() {
            return null != navigator.userAgent.match(/Android/i)
        },
        isIPad: function() {
            return null != navigator.userAgent.match(/iPad/i)
        },
        isIPhone: function() {
            return null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i)
        },
        isIOS: function() {
            return this.isIPad() || this.isIPhone()
        },
        isMobile: function() {
            return this.isAndroid() || this.isIPad() || this.isIPhone()
        },
        isIE11: function() {
            return null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/)
        },
        isIE: function() {
            return (null != navigator.userAgent.match(/MSIE/i) || this.isIE11()) && !this.isOpera()
        },
        isIE10: function() {
            return null != navigator.userAgent.match(/MSIE 10/i) && !this.isOpera()
        },
        isIE9: function() {
            return null != navigator.userAgent.match(/MSIE 9/i) && !this.isOpera()
        },
        isIE8: function() {
            return null != navigator.userAgent.match(/MSIE 8/i) && !this.isOpera()
        },
        isIE7: function() {
            return null != navigator.userAgent.match(/MSIE 7/i) && !this.isOpera()
        },
        isIE6: function() {
            return null != navigator.userAgent.match(/MSIE 6/i) && !this.isOpera()
        },
        isIE678: function() {
            return this.isIE6() || this.isIE7() || this.isIE8()
        },
        isIE6789: function() {
            return this.isIE6() || this.isIE7() || this.isIE8() || this.isIE9()
        },
        isTouch: function() {
            return "ontouchstart" in window
        },
        css33dTransformSupported: function() {
            return !this.isIE() && !this.isOpera()
        },
        applyBrowserStyles: function(t, e) {
            var i = {};
            for (var o in t) i[o] = t[o], i["-webkit-" + o] = e ? "-webkit-" + t[o] : t[o], i["-moz-" + o] = e ? "-moz-" + t[o] : t[o], i["-ms-" + o] = e ? "-ms-" + t[o] : t[o], i["-o-" + o] = e ? "-o-" + t[o] : t[o];
            return i
        }
    };
    if (function(t) {
            t.fn.amazingslider = function(e) {
                var i = function(e, i, o, s) {
                    this.container = e, this.options = i, this.textoptions = o, this.id = s, this.transitionTimeout = null, this.arrowTimeout = null, this.socialTimeout = null, this.lightboxArray = [], this.elemArray = [], this.container.children().hide(), this.container.css({
                        display: "block",
                        position: "relative"
                    }), t(".amazingslider-engine").css({
                        display: "none"
                    }), n.isMobile() && !this.options.navshowpreviewontouch && (this.options.navshowpreview = !1), this.container.trigger("amazingslider.initstart"), this.initData(this.init)
                };
                i.prototype = {
                    initData: function(t) {
                        this.readTags(), t(this)
                    },
                    readTags: function() {
                        var e = this;
                        if (t(".amazingslider-slides", this.container).find("li").each(function() {
                                var i = t("img.amazingsliderimg", t(this));
                                if (i.length <= 0 && (i = t("img", t(this))), i.length > 0) {
                                    for (var o = "", n = ["src", "class", "title", "alt", "data-description", "data-duration", "data-texteffect"], s = i.attr("src"), a = e.options.lazyloadtags.split(","), r = 0; r < a.length; r++)
                                        if (n.push("data-" + a[r]), i.data(a[r]) && i.data(a[r]).length > 0) {
                                            s = i.data(a[r]);
                                            break
                                        } var l = i.attr("title") && i.attr("title").length > 0 ? i.attr("title") : "";
                                    !l && e.options.titleusealt && (l = i.attr("alt") && i.attr("alt").length > 0 ? i.attr("alt") : "");
                                    var h = i.data("description") && i.data("description").length > 0 ? i.data("description") : "",
                                        p = i.parent() && i.parent().is("a") ? i.parent().attr("href") : "",
                                        c = i.parent() && i.parent().is("a") ? i.parent().attr("target") : "",
                                        d = !(!i.parent() || !i.parent().is("a")) && i.parent().hasClass("html5lightbox"),
                                        u = i.parent() && d ? i.parent().data("width") : 0,
                                        m = i.parent() && d ? i.parent().data("height") : 0,
                                        g = i.parent() && i.parent().is("a") ? i.parent().data("webm") : "",
                                        f = i.parent() && i.parent().is("a") ? i.parent().data("ogg") : "",
                                        v = i.data("texteffect") && i.data("texteffect").length > 0 ? i.data("texteffect") : "",
                                        b = i.data("duration") ? i.data("duration") : 0,
                                        w = i.attr("alt") && i.attr("alt").length > 0 ? i.attr("alt") : l;
                                    e.options.addextraattributes && t.each(i.get(0).attributes, function(t, e) {
                                        -1 == n.indexOf(e.name) && (o += " " + e.name + '="' + e.value + '"')
                                    });
                                    var x = "";
                                    t("button", t(this)).length > 0 && (x = t("button", t(this)).parent().is("a") ? t("button", t(this)).parent().clone().wrapAll("<div/>").parent().html() : t("button", t(this)).clone().wrapAll("<div/>").parent().html());
                                    var y = [],
                                        k = d && i.parent() && i.parent().data("mediatype") ? i.parent().data("mediatype") : e.checkVideoType(p);
                                    if (t("video", t(this)).length > 0) {
                                        var z = (A = t("video", t(this))).attr("src");
                                        k = A.data("mediatype") ? A.data("mediatype") : e.checkVideoType(A.attr("src")), y.push({
                                            href: z,
                                            type: k
                                        }), 6 == k && A.data("webm") && A.data("webm").length > 0 && y.push({
                                            href: A.data("webm"),
                                            type: 8
                                        })
                                    }
                                    var E = new Array(e.elemArray.length, s, l, h, p, c, y, "", d, u, m, g, f, v, b, x, k, w, o);
                                    e.elemArray.push(E), d && e.lightboxArray.push(E)
                                } else if (t("video", t(this)).length > 0) {
                                    var A;
                                    y = [], z = (A = t("video", t(this))).attr("src"), k = A.data("mediatype") ? A.data("mediatype") : e.checkVideoType(A.attr("src"));
                                    y.push({
                                        href: z,
                                        type: k
                                    }), 6 == k && A.data("webm") && A.data("webm").length > 0 && y.push({
                                        href: A.data("webm"),
                                        type: 8
                                    });
                                    E = new Array(e.elemArray.length, "", "", "", "", "", y, "", !1, 0, 0, "", "", "", 0, "", k, "");
                                    e.elemArray.push(E)
                                }
                            }), t(".amazingslider-thumbnails", this.container).find("li").each(function(i) {
                                var o = t("img.amazingsliderthumbnailimg", t(this));
                                if (o.length <= 0 && (o = t("img", t(this))), o.length > 0 && e.elemArray.length > i) {
                                    for (var n = o.attr("src"), s = e.options.lazyloadtags.split(","), a = 0; a < s.length; a++)
                                        if (o.data(s[a]) && o.data(s[a]).length > 0) {
                                            n = o.data(s[a]);
                                            break
                                        } e.elemArray[i][7] = n
                                }
                            }), this.options.shownumbering)
                            for (var i = 0; i < this.elemArray.length; i++) {
                                var o = this.options.numberingformat.replace("%NUM", i + 1).replace("%TOTAL", this.elemArray.length);
                                this.elemArray[i][2] = o + this.elemArray[i][2]
                            }
                    },
                    init: function(e) {
                        if (!(e.elemArray.length <= 0)) {
                            var i, o = e.elemArray.length;
                            if (e.options.randomplay) {
                                for (i = o - 1; i > 0 && !(1 == i && Math.random() < .5); i--) {
                                    var n = Math.floor(Math.random() * i),
                                        s = e.elemArray[n];
                                    e.elemArray[n] = e.elemArray[i], e.elemArray[i] = s
                                }
                                for (i = 0; i < o; i++) e.elemArray[i][0] = i
                            }
                            e.isAnimating = !1, e.isPaused = !e.options.autoplay, e.videoPaused = !1, e.lightboxPaused = !1, e.isPausedOnMouseover = !1, e.initSocial(), e.initVideoApi(), e.createMarkup(), e.createStyle(), e.createNav(), e.createArrows(), e.createBottomShadow(), e.createBackgroundImage(), e.createText(), e.createSliderTimeout(), e.createWm(), e.createRibbon(), e.showSocial(), e.initHtml5Lightbox(), e.googleFontsCreated = !1, e.curElem = -1, e.prevElem = -1, e.nextElem = -1, e.firstslide = !0, e.loopCount = 0, e.pauseCarousel = !1, e.curImageMarginTop = 0, e.curImageMarginLeft = 0, e.curImageMaxWidth = 100, e.prevImageMarginTop = 0, e.prevImageMarginLeft = 0, e.prevImageMaxWidth = 100, e.prevtextstyle = "", e.html5Volume = 1, e.videoAutoplayMode = !0, e.vimeoAPILoadCount = 0;
                            var a = 0,
                                r = e.getParams(),
                                l = parseInt(r.firstslideid);
                            if (!isNaN(l) && l >= 1 && l <= e.elemArray.length && (a = l - 1), l = parseInt(r.slidershareid), !isNaN(l) && l >= 0 && l < e.elemArray.length && (a = l), e.slideRun(a), e.container.trigger("amazingslider.inited", [a]), "html5lightboxshare" in r) {
                                var h = decodeURIComponent(r.html5lightboxshare);
                                t('.html5lightbox[href="' + h + '"]').length > 0 && (e.isPaused || (e.lightboxPaused = !0, e.isPaused = !0, e.sliderTimeout.pause()), e.html5Lightbox.showItem(h))
                            }
                        }
                    },
                    getParams: function() {
                        for (var t = {}, e = window.location.search.substring(1).split("&"), i = 0; i < e.length; i++) {
                            var o = e[i].split("=");
                            o && 2 == o.length && (t[o[0].toLowerCase()] = unescape(o[1]))
                        }
                        return t
                    },
                    initHtml5Lightbox: function() {
                        var e;
                        if (this.lightboxArray.length > 0) {
                            var i = this.options.skinsfoldername.length > 0 ? this.options.skinsfoldername + "/" : "",
                                o = {
                                    jsfolder: this.options.jsfolder,
                                    skinsfoldername: i,
                                    nativehtml5controls: this.options.nativehtml5controls,
                                    barheight: this.options.lightboxbarheight,
                                    responsive: this.options.lightboxresponsive,
                                    showtitle: this.options.lightboxshowtitle,
                                    showdescription: this.options.lightboxshowdescription,
                                    shownavigation: this.options.lightboxshownavigation,
                                    thumbwidth: this.options.lightboxthumbwidth,
                                    thumbheight: this.options.lightboxthumbheight,
                                    thumbtopmargin: this.options.lightboxthumbtopmargin,
                                    thumbbottommargin: this.options.lightboxthumbbottommargin,
                                    titlebottomcss: this.options.lightboxtitlebottomcss,
                                    descriptionbottomcss: this.options.lightboxdescriptionbottomcss,
                                    fullscreenmode: this.options.lightboxfullscreenmode,
                                    closeonoverlay: this.options.lightboxcloseonoverlay,
                                    videohidecontrols: this.options.lightboxvideohidecontrols,
                                    titlestyle: this.options.lightboxtitlestyle,
                                    imagepercentage: this.options.lightboximagepercentage,
                                    defaultvideovolume: this.options.lightboxdefaultvideovolume,
                                    overlaybgcolor: this.options.lightboxoverlaybgcolor,
                                    overlayopacity: this.options.lightboxoverlayopacity,
                                    bgcolor: this.options.lightboxbgcolor,
                                    titleprefix: this.options.lightboxtitleprefix,
                                    titleinsidecss: this.options.lightboxtitleinsidecss,
                                    descriptioninsidecss: this.options.lightboxdescriptioninsidecss,
                                    autoslide: this.options.lightboxautoslide,
                                    slideinterval: this.options.lightboxslideinterval,
                                    showtimer: this.options.lightboxshowtimer,
                                    timerposition: this.options.lightboxtimerposition,
                                    timerheight: this.options.lightboxtimerheight,
                                    timercolor: this.options.lightboxtimercolor,
                                    timeropacity: this.options.lightboxtimeropacity,
                                    showplaybutton: this.options.lightboxshowplaybutton,
                                    alwaysshownavarrows: this.options.lightboxalwaysshownavarrows,
                                    bordersize: this.options.lightboxbordersize,
                                    showtitleprefix: this.options.lightboxshowtitleprefix,
                                    borderradius: this.options.lightboxborderradius,
                                    showsocial: this.options.lightboxshowsocial,
                                    socialposition: this.options.lightboxsocialposition,
                                    socialpositionsmallscreen: this.options.lightboxsocialpositionsmallscreen,
                                    socialdirection: this.options.lightboxsocialdirection,
                                    socialbuttonsize: this.options.lightboxsocialbuttonsize,
                                    socialbuttonfontsize: this.options.lightboxsocialbuttonfontsize,
                                    socialrotateeffect: this.options.lightboxsocialrotateeffect,
                                    showfacebook: this.options.lightboxshowfacebook,
                                    showtwitter: this.options.lightboxshowtwitter,
                                    showpinterest: this.options.lightboxshowpinterest,
                                    html5player: !this.options.forceflash,
                                    useflashonie10: this.options.forceflashonie10,
                                    useflashonie11: this.options.forceflashonie11,
                                    id: this.id
                                };
                            for (t("#wpsliderlightbox_advanced_options").length && t.each(t("#wpsliderlightbox_advanced_options").data(), function(t, e) {
                                    o[t.toLowerCase()] = e
                                }), t("#wpsliderlightbox_advanced_options_" + this.options.sliderid).length && t.each(t("#wpsliderlightbox_advanced_options_" + this.options.sliderid).data(), function(t, e) {
                                    o[t.toLowerCase()] = e
                                }), this.html5Lightbox = t([]).ashtml5lightbox(o), html5Lightbox = this.html5Lightbox, e = 0; e < this.lightboxArray.length; e++) this.html5Lightbox.addItem(this.lightboxArray[e][4], this.lightboxArray[e][2], this.options.lightboxnogroup ? "" : "amazingslider" + this.id, this.lightboxArray[e][9], this.lightboxArray[e][10], this.lightboxArray[e][11], this.lightboxArray[e][12], this.lightboxArray[e][7], this.lightboxArray[e][3], 11 == this.lightboxArray[e][16] ? 9 : -1);
                            var n = this;
                            this.html5Lightbox.onLightboxClosed = function() {
                                n.lightboxPaused && (n.lightboxPaused = !1, n.isPaused = !1, n.sliderTimeout.resume())
                            }
                        }
                    },
                    createGoogleFonts: function() {
                        if (this.googleFontsCreated = !0, !this.options.previewmode && this.textoptions.addgooglefonts && this.textoptions.googlefonts && this.textoptions.googlefonts.length > 0) {
                            var t = "https://fonts.googleapis.com/css?family=" + this.textoptions.googlefonts,
                                e = document.createElement("link");
                            e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("href", t), e.setAttribute("data-creator", "amazingslidercreator" + this.id), document.getElementsByTagName("head")[0].appendChild(e)
                        }
                    },
                    createRibbon: function() {
                        !this.options.showribbon || this.options.ribbonimage.length <= 0 || t(".amazingslider-ribbon-" + this.id, this.container).html("<img src='" + this.options.ribbonimage + "' alt='' style='border:none;' />")
                    },
                    createWm: function() {
                        if (this.options.showwatermark && !("text" == this.options.watermarkstyle && this.options.watermarktext.length <= 0 || "image" == this.options.watermarkstyle && this.options.watermarkimage.length <= 0)) {
                            var e = "";
                            if (this.options.watermarklink && (e += "<a href='" + this.options.watermarklink + "' style='" + this.options.watermarklinkcss + "'", ("AMCom" == this.options.versionmark || "AMLite" == this.options.versionmark && this.options.skin && t.inArray(this.options.skin, ["classic", "cube", "content"]) >= 0) && (e += " class='amazingslider-watermark-" + this.id + "'"), this.options.watermarktitle && (e += " title='" + this.options.watermarktitle + "'"), this.options.watermarktarget && (e += " target='" + this.options.watermarktarget + "'"), e += ">"), "text" == this.options.watermarkstyle) e += this.options.watermarktext;
                            else if ("image" == this.options.watermarkstyle) {
                                var i = this.options.watermarkimage;
                                "http://" != i.substring(0, 7).toLowerCase() && "https://" != i.substring(0, 8).toLowerCase() && (i = this.options.skinsfolder + i), e += "<img alt='' src='" + i + "' style='border:none;' />"
                            }
                            this.options.watermarklink && (e += "</a>");
                            var o = this.options.watermarkpositioncss;
                            "text" == this.options.watermarkstyle && this.options.watermarktext.length > 0 && (o += this.options.watermarktextcss), this.options.watermarklink && (o += "cursor:pointer;"), t(".amazingslider-box-" + this.id, this.container).append('<div style="' + o + '">' + e + "</div>")
                        }
                    },
                    absoluteUrl: function(t) {
                        var e = document.createElement("a");
                        return e.href = t, e.protocol + "//" + e.host + e.pathname + e.search + e.hash
                    },
                    initSocial: function() {
                        this.options.initsocial && t("head").append('<link rel="stylesheet" href="' + this.options.jsfolder + 'icons/css/fontello.css" type="text/css" />')
                    },
                    showSocial: function() {
                        if (this.options.showsocial) {
                            var e = this,
                                i = '<div class="amazingslider-social-' + this.id + '" style="display:' + ("mouseover" == this.options.socialmode ? "none" : "block") + ";" + this.options.socialposition + '">',
                                o = ("horizontal" == this.options.socialdirection ? "display:inline-block;" : "display:block;") + "margin:4px;",
                                n = "display:table-cell;width:" + this.options.socialbuttonsize + "px;height:" + this.options.socialbuttonsize + "px;font-size:" + this.options.socialbuttonfontsize + "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
                            this.options.showfacebook && (i += '<div class="amazingslider-social-btn' + (this.options.socialrotateeffect ? " amazingslider-rotate" : "") + ' amazingslider-social-facebook" style="' + o + '"><div class="mh-icon-facebook" style="' + n + 'background-color:#3b5998;"></div></div>'), this.options.showtwitter && (i += '<div class="amazingslider-social-btn' + (this.options.socialrotateeffect ? " amazingslider-rotate" : "") + ' amazingslider-social-twitter" style="' + o + '"><div class="mh-icon-twitter" style="' + n + 'background-color:#03b3ee;"></div></div>'), this.options.showpinterest && (i += '<div class="amazingslider-social-btn' + (this.options.socialrotateeffect ? " amazingslider-rotate" : "") + ' amazingslider-social-pinterest" style="' + o + '"><div class="mh-icon-pinterest" style="' + n + 'background-color:#c92228;"></div></div>'), i += '<div style="clear:both;"></div></div>', t(".amazingslider-wrapper-" + this.id, this.container).append(i), "mouseover" == this.options.socialmode && t(".amazingslider-wrapper-" + this.id, this.container).hover(function() {
                                clearTimeout(e.socialTimeout), t(".amazingslider-social-" + e.id, e.container).fadeIn()
                            }, function() {
                                e.socialTimeout = setTimeout(function() {
                                    t(".amazingslider-social-" + e.id, e.container).fadeOut()
                                }, e.options.arrowhideonmouseleave)
                            }), t(".amazingslider-social-btn", this.container).click(function() {
                                var i = window.location.href + (window.location.href.indexOf("?") < 0 ? "?" : "&") + "slidershareid=" + e.elemArray[e.curElem][0],
                                    o = e.elemArray[e.curElem][2],
                                    n = e.absoluteUrl(e.elemArray[e.curElem][1]),
                                    s = e.elemArray[e.curElem][6].length > 0;
                                return t(this).hasClass("amazingslider-social-facebook") ? window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(i) + "&t=" + encodeURIComponent(o), "_blank") : t(this).hasClass("amazingslider-social-twitter") ? window.open("https://twitter.com/share?url=" + encodeURIComponent(i) + "&text=" + encodeURIComponent(o), "_blank") : t(this).hasClass("amazingslider-social-pinterest") && window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(n) + "&url=" + encodeURIComponent(i) + "&description=" + encodeURIComponent(o) + "&is_video=" + (s ? "true" : "false"), "_blank"), !1
                            })
                        }
                    },
                    initVideoApi: function() {
                        var t, e, i, o, n, s = !1,
                            a = !1;
                        for (t = 0; t < this.elemArray.length; t++)
                            for (i = this.elemArray[t][6], e = 0; e < i.length; e++) 9 == i[e].type ? s = !0 : 10 == i[e].type && (a = !0);
                        s && ((o = document.createElement("script")).src = "https://www.youtube.com/iframe_api", (n = document.getElementsByTagName("script")[0]).parentNode.insertBefore(o, n));
                        a && ((o = document.createElement("script")).src = this.options.jsfolder + "froogaloop2.min.js", (n = document.getElementsByTagName("script")[0]).parentNode.insertBefore(o, n))
                    },
                    createSliderTimeout: function() {
                        var e = this;
                        this.sliderTimeout = new o(this.options.slideinterval, function() {
                            e.slideRun(-1)
                        }, this.options.showtimer ? function(t) {
                            e.updateTimer(t)
                        } : null), e.options.pauseonmouseover && t(".amazingslider-slider-" + this.id, this.container).hover(function() {
                            e.isPaused || (e.sliderTimeout.pause(), e.isPausedOnMouseover = !0)
                        }, function() {
                            e.isPaused || (e.sliderTimeout.resume(!1), e.isPausedOnMouseover = !1)
                        }), e.options.showtimer && t(".amazingslider-timer-" + e.id, e.container).css({
                            display: "block",
                            position: "absolute",
                            left: "0px",
                            top: "bottom" == e.options.timerposition ? "" : "0px",
                            bottom: "bottom" == e.options.timerposition ? "0px" : "",
                            width: "0%",
                            height: e.options.timerheight + "px",
                            "background-color": e.options.timercolor,
                            opacity: e.options.timeropacity,
                            filter: "alpha(opacity=" + Math.round(100 * e.options.timeropacity) + ")"
                        })
                    },
                    updateTimer: function(e) {
                        w = Math.round(100 * e), w > 100 && (w = 100), w < 0 && (w = 0), t(".amazingslider-timer-" + this.id, this.container).css({
                            width: w + "%"
                        })
                    },
                    createMarkup: function() {
                        this.$wrapper = jQuery("<div class='amazingslider-wrapper-" + this.id + "'><div class='amazingslider-background-image-" + this.id + "'></div><div class='amazingslider-slider-" + this.id + "'><div class='amazingslider-bottom-shadow-" + this.id + "'></div><div class='amazingslider-box-" + this.id + "'><div class='amazingslider-swipe-box-" + this.id + "'><div class='amazingslider-space-" + this.id + "'></div><div class='amazingslider-img-box-" + this.id + "'></div><div class='amazingslider-lightbox-play-" + this.id + "'></div><div class='amazingslider-timer-" + this.id + "'></div></div><div class='amazingslider-text-box-" + this.id + "'></div></div><div class='amazingslider-play-" + this.id + "'></div><div class='amazingslider-video-wrapper-" + this.id + "'></div><div class='amazingslider-ribbon-" + this.id + "'></div><div class='amazingslider-arrow-left-" + this.id + "'></div><div class='amazingslider-arrow-right-" + this.id + "'></div></div><div class='amazingslider-nav-" + this.id + "'><div class='amazingslider-nav-container-" + this.id + "'></div></div></div>"), this.$wrapper.appendTo(this.container), t(".amazingslider-slider-" + this.id, this.container).data("sliderid", this.id);
                        var e = this;
                        this.options.enabletouchswipe && t(".amazingslider-swipe-box-" + this.id, this.container).sliderTouchSwipe({
                            preventWebBrowser: !1,
                            swipeLeft: function() {
                                e.container.trigger("amazingslider.touchswipe", [e.curElem, -1]), e.videoAutoplayMode = !1, e.slideRun(-1)
                            },
                            swipeRight: function() {
                                e.container.trigger("amazingslider.touchswipe", [e.curElem, -2]), e.videoAutoplayMode = !1, e.slideRun(-2)
                            }
                        }), t(".amazingslider-play-" + this.id, this.container).click(function() {
                            e.videoAutoplayMode = !1, e.playVideo(!0)
                        })
                    },
                    playVideo: function(e) {
                        var i = this.elemArray[this.curElem][6];
                        if (!(i.length <= 0)) {
                            t(".amazingslider-img-" + this.id, this.container).empty(), this.sliderTimeout.stop(), this.videoPaused = !0;
                            var o = !1,
                                n = !1;
                            e && this.options.playmutedandinlinewhenautoplay && this.videoAutoplayMode && (o = !0, n = !0);
                            var s = i[0].href,
                                a = i[0].type;
                            if (9 == a) this.playYoutubeVideo(s, e, o, n);
                            else if (10 == a) this.playVimeoVideo(s, e, o, n);
                            else if (6 == a) {
                                var r = i.length > 1 ? i[1].href : "";
                                this.playMp4Video(s, r, e, o, n)
                            } else 11 == a && this.playIframeVideo(s, e)
                        }
                    },
                    playMp4Video: function(e, i, o, s, a) {
                        var r = t(".amazingslider-video-wrapper-" + this.id, this.container);
                        r.css({
                            display: "block",
                            width: "100%",
                            height: "100%"
                        });
                        var l = !0;
                        if (this.options.forceflash && n.flashInstalled() && (l = !1), n.html5VideoSupported() || (l = !1), n.isIE6789() && (l = !1), (n.isFirefox() || n.isOpera()) && (n.canPlayMP4() || i || (l = !1)), (n.isIE10() && this.options.forceflashonie10 || n.isIE11() && this.options.forceflashonie11) && (l = !1), l) {
                            var h = e;
                            (n.isFirefox() || n.isOpera()) && i && (h = i), this.embedHTML5Video(r, h, o, s, a)
                        } else {
                            var p = e;
                            "/" != p.charAt(0) && "http:" != p.substring(0, 5) && "https:" != p.substring(0, 6) && (p = this.options.htmlfolder + p), this.embedFlash(r, "100%", "100%", this.options.jsfolder + "html5boxplayer.swf", "transparent", {
                                width: "100%",
                                height: "100%",
                                jsobjectname: "amazingsliderObjects",
                                hidecontrols: this.options.videohidecontrols ? "1" : "0",
                                hideplaybutton: this.options.videohideplaybutton ? "1" : "0",
                                videofile: p,
                                hdfile: "",
                                ishd: "0",
                                autoplay: o ? "1" : "0",
                                errorcss: ".amazingslider-error" + this.options.errorcss,
                                id: this.id
                            })
                        }
                    },
                    embedHTML5Video: function(e, i, o, s, a) {
                        (n.isFirefox() && this.options.nativecontrolsonfirefox || (n.isIE6789() || n.isIE10() || n.isIE11()) && this.options.nativecontrolsonie || n.isIPhone() && this.options.nativecontrolsoniphone || n.isIPad() && this.options.nativecontrolsonipad || n.isAndroid() && this.options.nativecontrolsonandroid) && (this.options.nativehtml5controls = !0), (n.isIOS() || n.isAndroid()) && (this.options.nativecontrolsonfullscreen = !0), e.html("<div class='amazingslider-video-container-" + this.id + "' style='position:relative;display:block;width:100%;height:100%;'><video class='slider-inline-video' style='width:100%;height:100%;'" + (this.options.nativehtml5controls && !this.options.videohidecontrols ? " controls='controls'" : "") + (this.options.nativecontrolsnodownload ? " controlsList='nodownload'" : "") + (s ? " muted" : "") + (a ? " playsinline" : "") + "></div>"), t("video", e).get(0).setAttribute("src", i), o && t("video", e).get(0).play(), this.options.nativehtml5controls || this.options.videohidecontrols || (t("video", e).data("src", i), t("video", e).asHTML5VideoControls(this.options.skinsfolder, this, ".slider-inline-video", this.options.videohidecontrols, this.options.videohideplaybutton, s ? 0 : this.options.defaultvideovolume, this.options.nativecontrolsonfullscreen, this.options.nativecontrolsnodownload, null));
                        var r = this;
                        t("video", e).off("ended").on("ended", function() {
                            r.videoPaused = !1, r.isPaused || r.slideRun(-1, !0)
                        }), t("video", e).get(0).onvolumechange = function() {
                            !this.muted && this.volume > 0 && (r.videoAutoplayMode = !1)
                        }
                    },
                    embedFlash: function(e, i, o, s, a, r) {
                        if (n.flashInstalled()) {
                            var l = {
                                pluginspage: "http://www.adobe.com/go/getflashplayer",
                                quality: "high",
                                allowFullScreen: "true",
                                allowScriptAccess: "always",
                                type: "application/x-shockwave-flash"
                            };
                            l.width = i, l.height = o, l.src = s, l.wmode = a, l.flashVars = t.param(r);
                            var h = "";
                            for (var p in l) h += p + "=" + l[p] + " ";
                            e.html("<embed " + h + "/>")
                        } else e.html("<div class='amazingslider-error-" + this.id + "' style='display:block; position:absolute; text-align:center; width:" + this.options.width + "px; left:0px; top:" + Math.round(this.options.height / 2 - 10) + "px;'><div>The required Adobe Flash Player plugin is not installed</div><br /><div style='display:block;position:relative;text-align:center;width:112px;height:33px;margin:0px auto;'><a href='http://www.adobe.com/go/getflashplayer'><img src='https://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' width='112' height='33'></img></a></div>")
                    },
                    playVimeoVideo: function(e, i, o, s) {
                        var a = t(".amazingslider-video-wrapper-" + this.id, this.container);
                        if (a.css({
                                display: "block",
                                width: "100%",
                                height: "100%"
                            }), this.options.previewmode) a.html("<div class='amazingslider-error-" + this.id + "'>To view Vimeo video, publish the slider then open it in your web browser</div>");
                        else {
                            var r = e + (e.indexOf("?") < 0 ? "?" : "&") + "autoplay=" + (i && !n.isAndroid() ? "1" : "0") + (o ? "&muted=1" : "") + (s ? "&playsinline=1" : "") + "&api=1&player_id=amazingslider_vimeo_" + this.id;
                            a.html("<iframe id='amazingslider_vimeo_" + this.id + "' width='" + this.options.width + "' height='" + this.options.height + "' src='" + r + "' frameborder='0' allow='autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), this.playVimeoAPICallback()
                        }
                    },
                    playVimeoAPICallback: function() {
                        var e = this;
                        if ("function" == typeof $f) {
                            var i = t("#amazingslider_vimeo_" + this.id)[0],
                                o = $f(i);
                            o.addEvent("ready", function() {
                                o.addEvent("finish", function(t) {
                                    e.videoPaused = !1, e.isPaused || e.slideRun(-1, !0)
                                }), o.addEvent("volumechange", function(t) {
                                    e.videoAutoplayMode = !1
                                })
                            })
                        } else setTimeout(function() {
                            e.vimeoAPILoadCount < 10 && (e.vimeoAPILoadCount++, e.playVimeoAPICallback())
                        }, 300)
                    },
                    playIframeVideo: function(e, i) {
                        var o = t(".amazingslider-video-wrapper-" + this.id, this.container);
                        if (o.css({
                                display: "block",
                                width: "100%",
                                height: "100%"
                            }), this.options.previewmode) o.html("<div class='amazingslider-error-" + this.id + "'>To view the video, publish the slider then open it in your web browser</div>");
                        else {
                            var n = e;
                            o.html("<iframe id='amazingslider_iframevideo_" + this.id + "' width='" + this.options.width + "' height='" + this.options.height + "' src='" + n + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
                        }
                    },
                    getYoutubeParams: function(t) {
                        var e = {};
                        if (t.indexOf("?") < 0) return e;
                        for (var i = t.substring(t.indexOf("?") + 1).split("&"), o = 0; o < i.length; o++) {
                            var n = i[o].split("=");
                            n && 2 == n.length && "v" != n[0].toLowerCase() && (e[n[0].toLowerCase()] = n[1])
                        }
                        return e
                    },
                    playYoutubeVideo: function(e, i, o, n) {
                        var s = t(".amazingslider-video-wrapper-" + this.id, this.container);
                        if (s.css({
                                display: "block",
                                width: "100%",
                                height: "100%"
                            }), this.options.previewmode) s.html("<div class='amazingslider-error-" + this.id + "'>To view YouTube video, publish the slider then open it in your web browser</div>");
                        else {
                            var l = this;
                            if (!a && (r += 100) < 3e3) setTimeout(function() {
                                l.playYoutubeVideo(e, i, o, n)
                            }, 100);
                            else if (a) {
                                s.html("<div id='amazingslider-video-" + this.id + "' style='display:block;'></div>");
                                var h = this.getYoutubeParams(e);
                                h = t.extend({}, h, {
                                    html5: 1,
                                    autoplay: 1,
                                    rel: 0,
                                    autohide: 1,
                                    wmode: "transparent"
                                }), l.options.videohidecontrols && (h = t.extend({}, h, {
                                    controls: 0,
                                    showinfo: 0
                                })), o && (h.mute = 1), n && (h.playsinline = 1);
                                var p = e.match(/(\?v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/)[2];
                                new YT.Player("amazingslider-video-" + this.id, {
                                    width: l.options.width,
                                    height: l.options.height,
                                    videoId: p,
                                    playerVars: h,
                                    events: {
                                        onVolumeChange: function(t) {
                                            !t.target.isMuted() && t.target.getVolume() > 0 && (l.videoAutoplayMode = !1)
                                        },
                                        onReady: function(t) {
                                            t.target.playVideo()
                                        },
                                        onStateChange: function(t) {
                                            t.data == YT.PlayerState.ENDED && (l.videoPaused = !1, l.isPaused || l.slideRun(-1, !0))
                                        }
                                    }
                                })
                            } else {
                                var c = e + (e.indexOf("?") < 0 ? "?" : "&") + "autoplay=1&wmode=transparent&rel=0&autohide=1";
                                l.options.videohidecontrols && (c += "&controls=0&showinfo=0"), o && (c += "&mute=1"), n && (c += "&playsinline=1"), s.html("<iframe width='" + l.options.width + "' height='" + l.options.height + "' src='" + c + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
                            }
                        }
                    },
                    checkVideoType: function(t) {
                        return t ? t.match(/\.(flv)(.*)?$/i) ? 5 : t.match(/\.(mp4|m4v)(.*)?$/i) ? 6 : t.match(/\.(ogv|ogg)(.*)?$/i) ? 7 : t.match(/\.(webm)(.*)?$/i) ? 8 : t.match(/\:\/\/.*(youtube\.com)/i) || t.match(/\:\/\/.*(youtu\.be)/i) ? 9 : t.match(/\:\/\/.*(vimeo\.com)/i) ? 10 : 0 : -1
                    },
                    showTexteffect: function(e) {
                        var i = t(this).data("sliderid");
                        t(".amazingslider-text-box-" + i, this).fadeIn()
                    },
                    hideTexteffect: function(e) {
                        var i = t(this).data("sliderid");
                        t(".amazingslider-text-box-" + i, this).fadeOut()
                    },
                    createText: function() {
                        if (this.options.showtext && "none" != this.textoptions.textstyle) {
                            var e = this;
                            this.container.on("amazingslider.switchtext", function(i, o, s) {
                                t("head").find("style").each(function() {
                                    t(this).data("creator") == "amazingslidercreator" + e.id && "texteffect" == t(this).data("csstype") && t(this).remove()
                                });
                                var a = "<style type='text/css' data-creator='amazingslidercreator" + e.id + "' data-csstype='texteffect'>.amazingslider-text-" + e.id + " {" + e.textoptions.textcss + "} .amazingslider-text-bg-" + e.id + " {" + e.textoptions.textbgcss + "} .amazingslider-title-" + e.id + " {" + e.textoptions.titlecss + "} .amazingslider-description-" + e.id + " {" + e.textoptions.descriptioncss + "} .amazingslider-button-" + e.id + " {" + e.textoptions.buttoncss + "} ";
                                e.textoptions.texteffectresponsive && (a += "@media (max-width: " + e.textoptions.texteffectresponsivesize + "px) {.amazingslider-title-" + e.id + " {" + e.textoptions.titlecssresponsive + "} .amazingslider-description-" + e.id + " {" + e.textoptions.descriptioncssresponsive + "} .amazingslider-button-" + e.id + " {" + e.textoptions.buttoncssresponsive + "} } "), a += "</style>", t("head").append(a);
                                var r = t(".amazingslider-text-box-" + e.id, e.container);
                                r.html("<div class='amazingslider-text-wrapper-" + e.id + "'></div>"), t(".amazingslider-slider-" + e.id, e.container).off("mouseenter", e.showTexteffect).off("mouseleave", e.hideTexteffect);
                                var l = t(".amazingslider-text-wrapper-" + e.id, e.container);
                                if ("static" == e.textoptions.textstyle) switch (l.html("<div class='amazingslider-text-" + e.id + "'><div class='amazingslider-text-bg-" + e.id + "'></div><div class='amazingslider-title-" + e.id + "'></div><div class='amazingslider-description-" + e.id + "'></div><div class='amazingslider-button-" + e.id + "'></div></div>"), e.textoptions.textautohide ? "static" != e.prevtextstyle && r.css({
                                    display: e.textoptions.textautohide ? "none" : "block"
                                }) : r.css({
                                    display: "block"
                                }), e.textoptions.textautohide && t(".amazingslider-slider-" + e.id, e.container).hover(e.showTexteffect, e.hideTexteffect), e.textoptions.textpositionstatic) {
                                    case "top":
                                        l.css({
                                            width: "100%",
                                            height: "auto",
                                            position: "absolute",
                                            left: "0px",
                                            top: "0px",
                                            "margin-top": e.textoptions.textpositionmarginstatic + "px"
                                        });
                                        break;
                                    case "bottom":
                                        l.css({
                                            width: "100%",
                                            height: "auto",
                                            position: "absolute",
                                            left: "0px",
                                            bottom: "0px",
                                            "margin-bottom": e.textoptions.textpositionmarginstatic + "px"
                                        });
                                        break;
                                    case "left":
                                        l.css({
                                            width: e.textoptions.textleftrightpercentforstatic + "%",
                                            height: "100%",
                                            position: "absolute",
                                            left: "0px",
                                            top: "0px",
                                            margin: e.textoptions.textpositionmarginstatic + "px"
                                        });
                                        break;
                                    case "right":
                                        l.css({
                                            width: e.textoptions.textleftrightpercentforstatic + "%",
                                            height: "100%",
                                            position: "absolute",
                                            right: "0px",
                                            top: "0px",
                                            margin: e.textoptions.textpositionmarginstatic + "px"
                                        });
                                        break;
                                    case "topoutside":
                                        l.css({
                                            width: "100%",
                                            height: "auto",
                                            position: "absolute",
                                            left: "0px",
                                            bottom: "100%",
                                            "margin-bottom": e.textoptions.textpositionmarginstatic + "px"
                                        });
                                        break;
                                    case "bottomoutside":
                                        l.css({
                                            width: "100%",
                                            height: "auto",
                                            position: "absolute",
                                            left: "0px",
                                            top: "100%",
                                            "margin-top": e.textoptions.textpositionmarginstatic + "px"
                                        })
                                } else r.css({
                                    display: "block"
                                }), l.html("<div class='amazingslider-text-holding-" + e.id + "' style='visibility:hidden;" + e.textoptions.textcss + "'><div class='amazingslider-text-bg-" + e.id + "'></div><div class='amazingslider-title-" + e.id + "'></div><div class='amazingslider-description-" + e.id + "'></div><div class='amazingslider-button-" + e.id + "'></div></div><div class='amazingslider-text-" + e.id + "' style='position:absolute;top:0%;left:0%;" + (n.isIE678() ? "opacity:inherit;filter:inherit;" : "") + "'><div class='amazingslider-text-bg-" + e.id + "'></div><div class='amazingslider-title-" + e.id + "'></div><div class='amazingslider-description-" + e.id + "'></div><div class='amazingslider-button-" + e.id + "'></div></div>"), l.css({
                                    display: "none",
                                    position: "absolute"
                                });
                                e.prevtextstyle = e.textoptions.textstyle;
                                var h = t(".amazingslider-text-bg-" + e.id, e.container),
                                    p = t(".amazingslider-text-" + e.id, e.container),
                                    c = t(".amazingslider-title-" + e.id, e.container),
                                    d = t(".amazingslider-description-" + e.id, e.container),
                                    u = t(".amazingslider-button-" + e.id, e.container);
                                "static" == e.textoptions.textstyle ? (c.html(e.elemArray[s][2]), e.elemArray[s][3].length > 0 ? d.html(e.elemArray[s][3]).css({
                                    display: "block"
                                }) : d.css({
                                    display: "none"
                                }).html(""), e.elemArray[s][15].length > 0 ? u.html(e.elemArray[s][15]).css({
                                    display: "block"
                                }) : u.css({
                                    display: "none"
                                }).html(""), e.elemArray[s][2] || e.elemArray[s][3] || e.elemArray[s][15] ? h.show() : h.hide()) : "dynamic" == e.textoptions.textstyle && (e.elemArray[s][2] || e.elemArray[s][3] || e.elemArray[s][15] ? l.fadeOut(function() {
                                    c.html(e.elemArray[s][2]), e.elemArray[s][3].length > 0 ? d.html(e.elemArray[s][3]).css({
                                        display: "block"
                                    }) : d.css({
                                        display: "none"
                                    }).html(""), e.elemArray[s][15].length > 0 ? u.html(e.elemArray[s][15]).css({
                                        display: "block"
                                    }) : u.css({
                                        display: "none"
                                    }).html("");
                                    var i = "bottomleft",
                                        o = e.textoptions.textpositiondynamic;
                                    switch (o && (i = (o = o.split(","))[Math.floor(Math.random() * o.length)], i = t.trim(i.toLowerCase())), i) {
                                        case "topleft":
                                            l.css({
                                                left: "0px",
                                                right: "",
                                                top: "0px",
                                                bottom: ""
                                            }), l.css({
                                                margin: e.textoptions.textpositionmargintop + "px " + e.textoptions.textpositionmarginleft + "px"
                                            });
                                            break;
                                        case "topright":
                                            l.css({
                                                left: "",
                                                right: "0px",
                                                top: "0px",
                                                bottom: ""
                                            }), l.css({
                                                margin: e.textoptions.textpositionmargintop + "px " + e.textoptions.textpositionmarginright + "px"
                                            });
                                            break;
                                        case "bottomleft":
                                            l.css({
                                                left: "0px",
                                                right: "",
                                                top: "",
                                                bottom: "0px"
                                            }), l.css({
                                                margin: e.textoptions.textpositionmarginbottom + "px " + e.textoptions.textpositionmarginleft + "px"
                                            });
                                            break;
                                        case "bottomright":
                                            l.css({
                                                left: "",
                                                right: "0px",
                                                top: "",
                                                bottom: "0px"
                                            }), l.css({
                                                margin: e.textoptions.textpositionmarginbottom + "px " + e.textoptions.textpositionmarginright + "px"
                                            });
                                            break;
                                        case "topcenter":
                                            p.css({
                                                left: "0px",
                                                right: "0px"
                                            }), l.css({
                                                left: "0px",
                                                right: "0px",
                                                top: "0px",
                                                bottom: ""
                                            }), l.css({
                                                margin: e.textoptions.textpositionmargintop + "px " + e.textoptions.textpositionmarginleft + "px"
                                            });
                                            break;
                                        case "bottomcenter":
                                            p.css({
                                                left: "0px",
                                                right: "0px"
                                            }), l.css({
                                                left: "0px",
                                                right: "0px",
                                                top: "",
                                                bottom: "0px"
                                            }), l.css({
                                                margin: e.textoptions.textpositionmarginbottom + "px " + e.textoptions.textpositionmarginleft + "px"
                                            });
                                            break;
                                        case "centercenter":
                                            p.css({
                                                left: "0px",
                                                right: "0px"
                                            }), l.css({
                                                left: "0px",
                                                right: "0px",
                                                top: "50%",
                                                bottom: ""
                                            });
                                            var n = l.height();
                                            l.css({
                                                margin: "-" + n / 2 + "px 0px 0px"
                                            });
                                            break;
                                        case "centerleft":
                                            p.css({
                                                left: "0px",
                                                right: ""
                                            }), l.css({
                                                left: "0px",
                                                right: "",
                                                top: "50%",
                                                bottom: ""
                                            });
                                            n = l.height();
                                            l.css({
                                                margin: "-" + n / 2 + "px 0px 0px"
                                            });
                                            break;
                                        case "centerright":
                                            p.css({
                                                left: "",
                                                right: "0px"
                                            }), l.css({
                                                left: "",
                                                right: "0px",
                                                top: "50%",
                                                bottom: ""
                                            });
                                            n = l.height();
                                            l.css({
                                                margin: "-" + n / 2 + "px 0px 0px"
                                            })
                                    }
                                    var a = ["left", "right", "top", "bottom"],
                                        r = null,
                                        h = e.textoptions.texteffect;
                                    h && (r = (h = h.split(","))[Math.floor(Math.random() * h.length)], r = t.trim(r.toLowerCase()));
                                    var m = e.textoptions.texteffectseparate ? t(".amazingslider-title-" + e.id, e.container) : t(".amazingslider-text-" + e.id, e.container);
                                    switch (r) {
                                        case "fade":
                                            m.css({
                                                opacity: 0
                                            }), m.delay(e.textoptions.texteffectdelay).fadeTo(e.textoptions.texteffectduration, 1);
                                            break;
                                        case "slide":
                                            var g = e.textoptions.texteffectslidedirection;
                                            "random" == g && (g = a[Math.floor(Math.random() * a.length)]), "left" == g ? (m.css({
                                                left: "-" + e.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            }), m.delay(e.textoptions.texteffectdelay).animate({
                                                left: "0px",
                                                opacity: 1
                                            }, e.textoptions.texteffectduration, e.textoptions.texteffecteasing)) : "right" == g ? (m.css({
                                                left: e.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            }), m.delay(e.textoptions.texteffectdelay).animate({
                                                left: "0px",
                                                opacity: 1
                                            }, e.textoptions.texteffectduration, e.textoptions.texteffecteasing)) : "top" == g ? (m.css({
                                                top: "-" + e.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            }), m.delay(e.textoptions.texteffectdelay).animate({
                                                top: "0px",
                                                opacity: 1
                                            }, e.textoptions.texteffectduration, e.textoptions.texteffecteasing)) : "bottom" == g && (m.css({
                                                top: e.textoptions.texteffectslidedistance + "px",
                                                opacity: 0
                                            }), m.delay(e.textoptions.texteffectdelay).animate({
                                                top: "0px",
                                                opacity: 1
                                            }, e.textoptions.texteffectduration, e.textoptions.texteffecteasing));
                                            break;
                                        default:
                                            m.delay(e.textoptions.texteffectdelay).show()
                                    }
                                    if (e.textoptions.texteffectseparate && e.elemArray[s][3].length > 0) {
                                        var f = null,
                                            v = e.textoptions.texteffect1;
                                        v && (f = (v = v.split(","))[Math.floor(Math.random() * v.length)], f = t.trim(f.toLowerCase()));
                                        var b = t(".amazingslider-description-" + e.id, e.container);
                                        switch (f) {
                                            case "fade":
                                                b.css({
                                                    opacity: 0
                                                }), b.delay(e.textoptions.texteffectdelay1).fadeTo(e.textoptions.texteffectduration1, 1);
                                                break;
                                            case "slide":
                                                var w = e.textoptions.texteffectslidedirection1;
                                                "random" == w && (w = a[Math.floor(Math.random() * a.length)]), "left" == w ? (b.css({
                                                    left: "-" + e.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                }), b.delay(e.textoptions.texteffectdelay1).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration1, e.textoptions.texteffecteasing1)) : "right" == w ? (b.css({
                                                    left: e.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                }), b.delay(e.textoptions.texteffectdelay1).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration1, e.textoptions.texteffecteasing1)) : "top" == w ? (b.css({
                                                    top: "-" + e.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                }), b.delay(e.textoptions.texteffectdelay1).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration1, e.textoptions.texteffecteasing1)) : "bottom" == w && (b.css({
                                                    top: e.textoptions.texteffectslidedistance1 + "px",
                                                    opacity: 0
                                                }), b.delay(e.textoptions.texteffectdelay1).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration1, e.textoptions.texteffecteasing1));
                                                break;
                                            default:
                                                b.delay(e.textoptions.texteffectdelay).show()
                                        }
                                    }
                                    if (e.textoptions.texteffectseparate && e.elemArray[s][15].length > 0) {
                                        var x = null,
                                            y = e.textoptions.texteffect2;
                                        y && (x = (y = y.split(","))[Math.floor(Math.random() * y.length)], x = t.trim(x.toLowerCase()));
                                        var k = t(".amazingslider-button-" + e.id, e.container);
                                        switch (x) {
                                            case "fade":
                                                k.css({
                                                    opacity: 0
                                                }), k.delay(e.textoptions.texteffectdelay2).fadeTo(e.textoptions.texteffectduration2, 1);
                                                break;
                                            case "slide":
                                                var z = e.textoptions.texteffectslidedirection2;
                                                "random" == z && (z = a[Math.floor(Math.random() * a.length)]), "left" == z ? (k.css({
                                                    left: "-" + e.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                }), k.delay(e.textoptions.texteffectdelay2).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration2, e.textoptions.texteffecteasing2)) : "right" == z ? (k.css({
                                                    left: e.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                }), k.delay(e.textoptions.texteffectdelay2).animate({
                                                    left: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration2, e.textoptions.texteffecteasing2)) : "top" == z ? (k.css({
                                                    top: "-" + e.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                }), k.delay(e.textoptions.texteffectdelay2).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration2, e.textoptions.texteffecteasing2)) : "bottom" == z && (k.css({
                                                    top: e.textoptions.texteffectslidedistance2 + "px",
                                                    opacity: 0
                                                }), k.delay(e.textoptions.texteffectdelay2).animate({
                                                    top: "0px",
                                                    opacity: 1
                                                }, e.textoptions.texteffectduration2, e.textoptions.texteffecteasing2));
                                                break;
                                            default:
                                                k.delay(e.textoptions.texteffectdelay).show()
                                        }
                                    }
                                    l.show()
                                }) : l.fadeOut()), e.googleFontsCreated || e.createGoogleFonts()
                            })
                        }
                    },
                    resizeFullscreenImage: function(t) {
                        if (!(t.data("originalwidth") <= 0 || t.data("originalheight") <= 0)) {
                            var e = t.data("originalheight") / t.data("originalwidth"),
                                i = this.options.height / this.options.width;
                            this.prevImageMarginTop = this.curImageMarginTop, this.prevImageMarginLeft = this.curImageMarginLeft, this.prevImageMaxWidth = this.curImageMaxWidth, this.curImageMarginTop = 0, this.curImageMarginLeft = 0, this.curImageMaxWidth = 100, i < e ? "fit" == this.options.scalemode ? (this.curImageMaxWidth = i / e * 100, this.curImageMarginLeft = 50 - this.curImageMaxWidth / 2) : this.curImageMarginTop = -1 * (e - i) * 50 : "fit" == this.options.scalemode ? this.curImageMarginTop = 50 * (i - e) : (this.curImageMarginLeft = (1 / i - 1 / e) * i * 50, this.curImageMaxWidth = 100 - 2 * this.curImageMarginLeft), Math.abs(this.curImageMarginLeft) > 0 ? t.css({
                                "max-width": this.curImageMaxWidth + "%",
                                width: this.curImageMaxWidth + "%",
                                height: "100%",
                                "margin-left": this.curImageMarginLeft + "%",
                                "margin-top": 0
                            }) : t.css({
                                "max-width": this.curImageMaxWidth + "%",
                                width: this.curImageMaxWidth + "%",
                                height: "auto",
                                "margin-left": 0,
                                "margin-top": this.curImageMarginTop + "%"
                            })
                        }
                    },
                    resizeSlider: function() {
                        if (this.container.parent() && this.container.parent().width()) {
                            if (this.options.width = this.container.parent().width(), this.options.width % 2 != 0 && this.options.forcewidthtoevenforslice && (this.options.increasewhenforcetoeven ? this.options.width++ : this.options.width--), this.options.isfullscreen) this.options.height = this.container.parent().height(), t(".amazingslider-img-elem-" + this.id).length > 0 && this.resizeFullscreenImage(t(".amazingslider-img-elem-" + this.id));
                            else if ("flexheight" == this.options.scalemode ? this.options.height = this.options.width * this.options.flexratio : this.options.height = Math.round(this.options.width * this.options.originalheight / this.options.originalwidth), this.options.ratioresponsive) {
                                var e = this.options.isMobile ? Math.max(t(window).width(), t(document).width()) : t(window).width();
                                e <= this.options.ratiosmallscreen ? this.options.height *= this.options.ratiosmallheight : e <= this.options.ratiomediumscreen && (this.options.height *= this.options.ratiomediumheight)
                            }
                            t(".amazingslider-space-" + this.id, this.container).css({
                                width: this.options.width,
                                height: this.options.height
                            }), this.container.css({
                                width: this.options.width,
                                height: "horizontal" == this.options.navdirection && this.options.navmultirows ? "auto" : this.options.height
                            }), "thumbnails" == this.options.navstyle && this.options.navthumbresponsive && this.resizeNavBullets();
                            var i = t(".amazingslider-nav-" + this.id, this.container),
                                o = t(".amazingslider-nav-container-" + this.id, this.container),
                                n = t(".amazingslider-bullet-wrapper-" + this.id, this.container),
                                s = t(".amazingslider-car-left-arrow-" + this.id, this.container),
                                a = t(".amazingslider-car-right-arrow-" + this.id, this.container);
                            if ("vertical" == this.options.navdirection) {
                                var r = "none" == this.options.navstyle ? 0 : this.elemArray.length * this.options.navheight + (this.elemArray.length - 1) * this.options.navspacing;
                                this.options.navshowbuttons && (this.options.navshowarrow && (r += r > 0 ? this.options.navspacing : 0, r += 2 * this.options.navheight + this.options.navspacing), this.options.navshowplaypause && !this.options.navshowplaypausestandalone && (r += r > 0 ? this.options.navspacing : 0, r += this.options.navheight)), n.css({
                                    height: r + "px",
                                    width: "auto"
                                })
                            } else if (this.options.navmultirows) n.css({
                                width: "100%",
                                height: "auto"
                            });
                            else {
                                r = "none" == this.options.navstyle ? 0 : this.elemArray.length * this.options.navwidth + (this.elemArray.length - 1) * this.options.navspacing;
                                this.options.navshowbuttons && (this.options.navshowarrow && (r += r > 0 ? this.options.navspacing : 0, r += 2 * this.options.navwidth + this.options.navspacing), this.options.navshowplaypause && !this.options.navshowplaypausestandalone && (r += r > 0 ? this.options.navspacing : 0, r += this.options.navwidth)), n.css({
                                    width: r + "px",
                                    height: "auto"
                                })
                            }
                            if (this.options.navmultirows && "horizontal" == this.options.navdirection && "samecolumn" == this.options.navthumbresponsivemode)
                                for (var l = t(".amazingslider-bullet-" + this.id, this.container), h = 1; h < l.length; h++)(h + 1) % this.options.navthumbcolumn == 0 ? l.eq(h).css({
                                    "margin-right": 0
                                }) : l.eq(h).css({
                                    "margin-right": this.options.navspacing + "px"
                                });
                            if ("auto" != this.options.navthumbnavigationstyle) {
                                if (this.options.navmultirows) {
                                    if ("horizontal" == this.options.navdirection)(c = Math.floor(i.width() / (this.options.navwidth + this.options.navspacing))) <= 0 && (c = 1), d = Math.floor((i.width() - c * this.options.navwidth - (c - 1) * this.options.navspacing) / 2) - 2, "samecolumn" == this.options.navthumbresponsivemode && (d = 0), o.css({
                                        width: "100%",
                                        "margin-left": d + "px"
                                    })
                                } else if ("vertical" == this.options.navdirection && n.height() > o.height() || "horizontal" == this.options.navdirection && n.width() > o.width()) {
                                    "arrowinside" != this.options.navthumbnavigationstyle && (s.css({
                                        display: "block"
                                    }), a.css({
                                        display: "block"
                                    }));
                                    var p = 0;
                                    if ("vertical" == this.options.navdirection)(p = isNaN(parseInt(n.css("margin-top"))) ? 0 : parseInt(n.css("margin-top"))) <= o.height() - n.height() && (p = o.height() - n.height()), p >= 0 && (p = 0), n.css({
                                        "margin-top": p
                                    });
                                    else {
                                        var c, d = 0;
                                        if ("arrow" == this.options.navthumbnavigationstyle)
                                            if (d = this.options.navthumbnavigationarrowimagewidth + this.options.navspacing, "horizontal" == this.options.navdirection)(c = Math.floor((i.width() - 2 * d + this.options.navspacing) / (this.options.navwidth + this.options.navspacing))) <= 0 && (c = 1), d = Math.floor((i.width() - c * this.options.navwidth - (c - 1) * this.options.navspacing) / 2), o.css({
                                                "margin-left": d + "px",
                                                "margin-right": d + "px"
                                            });
                                            else o.css({
                                                "margin-top": d + "px",
                                                "margin-bottom": d + "px"
                                            });
                                        (p = isNaN(parseInt(n.css("margin-left"))) ? 0 : parseInt(n.css("margin-left"))) <= o.width() - n.width() && (p = o.width() - n.width()), p >= 0 && (p = 0), n.css({
                                            "margin-left": p
                                        })
                                    }
                                    this.updateCarouselLeftRightArrow(p)
                                } else s.css({
                                    display: "none"
                                }), a.css({
                                    display: "none"
                                }), "vertical" == this.options.navdirection ? n.css({
                                    "margin-top": 0
                                }) : n.css({
                                    "margin-left": "auto"
                                });
                                if ("thumbnails" == this.options.navstyle && this.options.navthumbresponsive) {
                                    var u = 0;
                                    "vertical" == this.options.navdirection ? this.options.navwidth : this.options.navheight;
                                    "thumbnails" == this.options.navstyle && this.options.navshowfeaturedarrow && ("vertical" == this.options.navdirection ? this.options.navfeaturedarrowimagewidth : this.options.navfeaturedarrowimageheight, u = "vertical" == this.options.navdirection ? this.options.navfeaturedarrowimagewidth : this.options.navfeaturedarrowimageheight);
                                    var m = "vertical" == this.options.navdirection ? this.options.navwidth / 2 - this.options.navthumbnavigationarrowimagewidth / 2 : this.options.navheight / 2 - this.options.navthumbnavigationarrowimageheight / 2;
                                    "bottomleft" != this.options.navposition && "bottomright" != this.options.navposition && "bottom" != this.options.navposition && "right" != this.options.navposition || (m += u), "vertical" == this.options.navdirection ? (s.css({
                                        top: "arrowoutside" == this.options.navthumbnavigationstyle ? "-" + this.options.navthumbnavigationarrowimageheight + "px" : "0px",
                                        left: "0px",
                                        "margin-left": m + "px"
                                    }), a.css({
                                        bottom: "arrowoutside" == this.options.navthumbnavigationstyle ? "-" + this.options.navthumbnavigationarrowimageheight + "px" : "0px",
                                        left: "0px",
                                        "margin-left": m + "px"
                                    })) : (s.css({
                                        left: "arrowoutside" == this.options.navthumbnavigationstyle ? "-" + this.options.navthumbnavigationarrowimagewidth + "px" : "0px",
                                        top: "0px",
                                        "margin-top": m + "px"
                                    }), a.css({
                                        right: "arrowoutside" == this.options.navthumbnavigationstyle ? "-" + this.options.navthumbnavigationarrowimagewidth + "px" : "0px",
                                        top: "0px",
                                        "margin-top": m + "px"
                                    }))
                                }
                            }
                            this.curElem >= 0 && "none" != this.options.navstyle && t("#amazingslider-bullet-" + this.id + "-" + this.curElem, this.container).length > 0 && this.adjustNav(t("#amazingslider-bullet-" + this.id + "-" + this.curElem, this.container))
                        }
                    },
                    createStyle: function() {
                        if (this.options.originalwidth = this.options.width, this.options.originalheight = this.options.height, this.options.flexratio = this.options.height / this.options.width, this.options.navoriginalwidth = this.options.navwidth, this.options.navoriginalheight = this.options.navheight, this.options.navthumboriginalcolumn = this.options.navthumbcolumn, this.options.navoriginalthumbtitleheight = this.options.navthumbtitleheight, this.options.navoriginalthumbtitlewidth = this.options.navthumbtitlewidth, this.options.isresponsive) {
                            this.resizeSlider();
                            var e = this;
                            t(window).resize(function() {
                                setTimeout(function() {
                                    e.resizeSlider()
                                }, e.options.windowresizetimeout)
                            })
                        } else t(".amazingslider-space-" + this.id, this.container).css({
                            width: this.options.width,
                            height: this.options.height
                        }), this.container.css({
                            width: this.options.width,
                            height: "horizontal" == this.options.navdirection && this.options.navmultirows ? "auto" : this.options.height
                        });
                        var i = ".amazingslider-wrapper-" + this.id + " {display:block;position:relative;width:100%;height:auto;}";
                        if (i += ".amazingslider-slider-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;", this.options.showshadow) {
                            var o = "0px 0px " + this.options.shadowsize + "px " + this.options.shadowcolor;
                            i += "box-shadow:" + o + ";-moz-box-shadow:" + o + ";-webkit-box-shadow:" + o + ";", (n.isIE678() || n.isIE9) && (i += "filter:progid:DXImageTransform.Microsoft.Shadow(color=" + this.options.shadowcolor + ",direction=135,strength=" + this.options.shadowsize + ");")
                        }
                        if (i += "}", i += ".amazingslider-box-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;", this.options.border > 0 && (i += "margin-left:-" + this.options.border + "px;border-width:" + this.options.border + "px;border-style:solid;border-color:" + this.options.bordercolor + ";"), i += "}", i += ".amazingslider-swipe-box-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;}", i += ".amazingslider-space-" + this.id + " {display:block;position:relative;left:0px;top:0px;width:100%;height:auto;visibility:hidden;line-height:0px;font-size:0px;}", i += ".amazingslider-img-box-" + this.id + " {display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;}", i += ".amazingslider-lightbox-play-" + this.id + " {display:none;position:absolute;left:50%;top:50%;cursor:pointer;width:" + this.options.playvideoimagewidth + "px;height:" + this.options.playvideoimageheight + "px;margin-top:-" + Math.round(this.options.playvideoimageheight / 2) + "px;margin-left:-" + Math.round(this.options.playvideoimagewidth / 2) + "px; background:url('" + this.options.playvideoimage + "') no-repeat left top;}", i += ".amazingslider-play-" + this.id + " {display:none;position:absolute;left:50%;top:50%;cursor:pointer;width:" + this.options.playvideoimagewidth + "px;height:" + this.options.playvideoimageheight + "px;margin-top:-" + Math.round(this.options.playvideoimageheight / 2) + "px;margin-left:-" + Math.round(this.options.playvideoimagewidth / 2) + "px; background:url('" + this.options.playvideoimage + "') no-repeat left top;}", i += ".amazingslider-video-wrapper-" + this.id + " {display:none;position:absolute;left:0px;top:0px;background-color:#000;text-align:center;}", i += ".amazingslider-error-" + this.id + " {display:block;position:relative;margin:0 auto;width:80%;top:50%;color:#fff;font:16px Arial,Tahoma,Helvetica,sans-serif;}", this.options.showribbon) {
                            switch (i += ".amazingslider-ribbon-" + this.id + " {display:block;position:absolute;", this.options.ribbonposition) {
                                case "topleft":
                                    i += "left:" + this.options.ribbonimagex + "px;top:" + this.options.ribbonimagey + "px;";
                                    break;
                                case "topright":
                                    i += "right:" + this.options.ribbonimagex + "px;top:" + this.options.ribbonimagey + "px;";
                                    break;
                                case "bottomleft":
                                    i += "left:" + this.options.ribbonimagex + "px;bottom:" + this.options.ribbonimagey + "px;";
                                    break;
                                case "bottomright":
                                    i += "right:" + this.options.ribbonimagex + "px;bottom:" + this.options.ribbonimagey + "px;";
                                    break;
                                case "top":
                                    i += "width:100%;height:auto;margin:0 auto;top:" + this.options.ribbonimagey + "px;";
                                case "bottom":
                                    i += "width:100%;height:auto;text-align:center;bottom:" + this.options.ribbonimagey + "px;"
                            }
                            i += "}"
                        }
                        i += ".amazingslider-video-wrapper-" + this.id + " video {max-width:100%;height:auto;}", i += ".amazingslider-video-wrapper-" + this.id + " iframe, .amazingslider-video-wrapper-" + this.id + " object, .amazingslider-video-wrapper-" + this.id + " embed {position:absolute;top:0;left:0;width:100%;height:100%;}", "thumbnails" == this.options.navstyle && "imageonly" != this.options.navthumbstyle && (i += ".amazingslider-nav-thumbnail-tite-" + this.id + " {" + this.options.navthumbtitlecss + "}", i += ".amazingslider-nav-thumbnail-tite-" + this.id + ":hover {" + this.options.navthumbtitlehovercss + "}", i += ".amazingslider-bullet-selected .amazingslider-nav-thumbnail-tite-" + this.id + ", .amazingslider-bullet-highlighted .amazingslider-nav-thumbnail-tite-" + this.id + " {" + this.options.navthumbtitlehovercss + "}", "imageandtitledescription" != this.options.navthumbstyle && "textonly" != this.options.navthumbstyle || (i += ".amazingslider-nav-thumbnail-description-" + this.id + " {" + this.options.navthumbdescriptioncss + "}", i += ".amazingslider-nav-thumbnail-description-" + this.id + ":hover {" + this.options.navthumbdescriptionhovercss + "}", i += ".amazingslider-bullet-selected .amazingslider-nav-thumbnail-description-" + this.id + ", .amazingslider-bullet-highlighted .amazingslider-nav-thumbnail-description-" + this.id + " {" + this.options.navthumbdescriptionhovercss + "}")), i += ".amazingslider-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .amazingslider-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }", t("head").append("<style type='text/css' data-creator='amazingslidercreator" + this.id + "'>" + i + "</style>"), this.options.customcss && this.options.customcss.length > 0 && t("head").append("<style type='text/css' data-creator='amazingslidercreator" + this.id + "'>" + this.options.customcss + "</style>")
                    },
                    createBottomShadow: function() {
                        if (this.options.showbottomshadow) {
                            var e = t(".amazingslider-bottom-shadow-" + this.id, this.container),
                                i = (100 - this.options.bottomshadowimagewidth) / 2;
                            e.css({
                                display: "block",
                                position: "absolute",
                                left: i + "%",
                                top: this.options.bottomshadowimagetop + "%",
                                width: this.options.bottomshadowimagewidth + "%",
                                height: "auto"
                            }), e.html("<img alt='' src='" + this.options.bottomshadowimage + "' style='display:block;position:relative;width:100%;height:auto;max-width:100%;' />")
                        }
                    },
                    createBackgroundImage: function() {
                        if (this.options.showbackgroundimage && this.options.backgroundimage) {
                            var e = t(".amazingslider-background-image-" + this.id, this.container),
                                i = (100 - this.options.backgroundimagewidth) / 2;
                            e.css({
                                display: "block",
                                position: "absolute",
                                left: i + "%",
                                top: this.options.backgroundimagetop + "%",
                                width: this.options.backgroundimagewidth + "%",
                                height: "auto"
                            }), e.html("<img alt='' src='" + this.options.backgroundimage + "' style='display:block;position:relative;width:100%;height:auto;' />")
                        }
                    },
                    createArrows: function() {
                        if ("none" != this.options.arrowstyle) {
                            var e = this,
                                i = t(".amazingslider-arrow-left-" + this.id, this.container),
                                o = t(".amazingslider-arrow-right-" + this.id, this.container);
                            i.css({
                                overflow: "hidden",
                                position: "absolute",
                                cursor: "pointer",
                                width: this.options.arrowwidth + "px",
                                height: this.options.arrowheight + "px",
                                left: this.options.arrowmargin + "px",
                                top: this.options.arrowtop + "%",
                                "margin-top": "-" + this.options.arrowheight / 2 + "px",
                                background: "url('" + this.options.arrowimage + "') no-repeat left top"
                            }), n.isIE678() && i.css({
                                opacity: "inherit",
                                filter: "inherit"
                            }), i.hover(function() {
                                t(this).css({
                                    "background-position": "left bottom"
                                })
                            }, function() {
                                t(this).css({
                                    "background-position": "left top"
                                })
                            }), i.click(function() {
                                e.container.trigger("amazingslider.arrow", [e.curElem, -2]), e.videoAutoplayMode = !1, e.slideRun(-2)
                            }), o.css({
                                overflow: "hidden",
                                position: "absolute",
                                cursor: "pointer",
                                width: this.options.arrowwidth + "px",
                                height: this.options.arrowheight + "px",
                                right: this.options.arrowmargin + "px",
                                top: this.options.arrowtop + "%",
                                "margin-top": "-" + this.options.arrowheight / 2 + "px",
                                background: "url('" + this.options.arrowimage + "') no-repeat right top"
                            }), n.isIE678() && o.css({
                                opacity: "inherit",
                                filter: "inherit"
                            }), o.hover(function() {
                                t(this).css({
                                    "background-position": "right bottom"
                                })
                            }, function() {
                                t(this).css({
                                    "background-position": "right top"
                                })
                            }), o.click(function() {
                                e.container.trigger("amazingslider.arrow", [e.curElem, -1]), e.videoAutoplayMode = !1, e.slideRun(-1)
                            }), "always" == this.options.arrowstyle ? (i.css({
                                display: "block"
                            }), o.css({
                                display: "block"
                            })) : (i.css({
                                display: "none"
                            }), o.css({
                                display: "none"
                            }), t(".amazingslider-wrapper-" + this.id, this.container).hover(function() {
                                clearTimeout(e.arrowTimeout), n.isIE678() ? (t(".amazingslider-arrow-left-" + e.id, e.container).show(), t(".amazingslider-arrow-right-" + e.id, e.container).show()) : (t(".amazingslider-arrow-left-" + e.id, e.container).fadeIn(), t(".amazingslider-arrow-right-" + e.id, e.container).fadeIn())
                            }, function() {
                                e.arrowTimeout = setTimeout(function() {
                                    n.isIE678() ? (t(".amazingslider-arrow-left-" + e.id, e.container).hide(), t(".amazingslider-arrow-right-" + e.id, e.container).hide()) : (t(".amazingslider-arrow-left-" + e.id, e.container).fadeOut(), t(".amazingslider-arrow-right-" + e.id, e.container).fadeOut())
                                }, e.options.arrowhideonmouseleave)
                            }))
                        }
                    },
                    carMoveLeft: function() {
                        var e = t(".amazingslider-nav-container-" + this.id, this.container),
                            i = t(".amazingslider-bullet-wrapper-" + this.id, this.container);
                        if (!(e.width() >= i.width())) {
                            this.options.navshowpreview && t(".amazingslider-nav-preview-" + this.id, this.container).hide();
                            var o = e.width() + this.options.navspacing,
                                n = (isNaN(parseInt(i.css("margin-left"))) ? 0 : parseInt(i.css("margin-left"))) - o;
                            n <= e.width() - i.width() && (n = e.width() - i.width()), n >= 0 && (n = 0), i.animate({
                                "margin-left": n
                            }, {
                                queue: !1,
                                duration: 500,
                                easing: "easeOutCirc"
                            }), "auto" != this.options.navthumbnavigationstyle && this.updateCarouselLeftRightArrow(n)
                        }
                    },
                    carMoveRight: function() {
                        var e = t(".amazingslider-nav-container-" + this.id, this.container),
                            i = t(".amazingslider-bullet-wrapper-" + this.id, this.container);
                        if (!(e.width() >= i.width())) {
                            this.options.navshowpreview && t(".amazingslider-nav-preview-" + this.id, this.container).hide();
                            var o = e.width() + this.options.navspacing,
                                n = (isNaN(parseInt(i.css("margin-left"))) ? 0 : parseInt(i.css("margin-left"))) + o;
                            n <= e.width() - i.width() && (n = e.width() - i.width()), n >= 0 && (n = 0), i.animate({
                                "margin-left": n
                            }, {
                                queue: !1,
                                duration: 500,
                                easing: "easeOutCirc"
                            }), "auto" != this.options.navthumbnavigationstyle && this.updateCarouselLeftRightArrow(n)
                        }
                    },
                    carMoveBottom: function() {
                        var e = t(".amazingslider-nav-container-" + this.id, this.container),
                            i = t(".amazingslider-bullet-wrapper-" + this.id, this.container);
                        if (!(e.height() >= i.height())) {
                            this.options.navshowpreview && t(".amazingslider-nav-preview-" + this.id, this.container).hide();
                            var o = e.height() + this.options.navspacing,
                                n = (isNaN(parseInt(i.css("margin-top"))) ? 0 : parseInt(i.css("margin-top"))) + o;
                            n <= e.height() - i.height() && (n = e.height() - i.height()), n >= 0 && (n = 0), i.animate({
                                "margin-top": n
                            }, {
                                queue: !1,
                                duration: 500,
                                easing: "easeOutCirc"
                            }), "auto" != this.options.navthumbnavigationstyle && this.updateCarouselLeftRightArrow(n)
                        }
                    },
                    carMoveTop: function() {
                        var e = t(".amazingslider-nav-container-" + this.id, this.container),
                            i = t(".amazingslider-bullet-wrapper-" + this.id, this.container);
                        if (!(e.height() >= i.height())) {
                            this.options.navshowpreview && t(".amazingslider-nav-preview-" + this.id, this.container).hide();
                            var o = e.height() + this.options.navspacing,
                                n = (isNaN(parseInt(i.css("margin-top"))) ? 0 : parseInt(i.css("margin-top"))) - o;
                            n <= e.height() - i.height() && (n = e.height() - i.height()), n >= 0 && (n = 0), i.animate({
                                "margin-top": n
                            }, {
                                queue: !1,
                                duration: 500,
                                easing: "easeOutCirc"
                            }), "auto" != this.options.navthumbnavigationstyle && this.updateCarouselLeftRightArrow(n)
                        }
                    },
                    updateCarouselLeftRightArrow: function(e) {
                        var i = t(".amazingslider-nav-container-" + this.id, this.container),
                            o = t(".amazingslider-bullet-wrapper-" + this.id, this.container);
                        "vertical" == this.options.navdirection ? (0 == e ? (t(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left bottom",
                            cursor: ""
                        }), t(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", !0)) : (t(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left top",
                            cursor: "pointer"
                        }), t(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", !1)), e == i.height() - o.height() ? (t(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right bottom",
                            cursor: ""
                        }), t(".amazingslider-car-right-arrow-" + this.id, this.container).data("disabled", !0)) : (t(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right top",
                            cursor: "pointer"
                        }), t(".amazingslider-car-right-arrow-" + this.id, this.container).data("disabled", !1))) : (0 == e ? (t(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left bottom",
                            cursor: ""
                        }), t(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", !0)) : (t(".amazingslider-car-left-arrow-" + this.id, this.container).css({
                            "background-position": "left top",
                            cursor: "pointer"
                        }), t(".amazingslider-car-left-arrow-" + this.id, this.container).data("disabled", !1)), e == i.width() - o.width() ? (t(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right bottom",
                            cursor: ""
                        }), t(".amazingslider-car-right-arrow-" + this.id, this.container).data("disabled", !0)) : (t(".amazingslider-car-right-arrow-" + this.id, this.container).css({
                            "background-position": "right top",
                            cursor: "pointer"
                        }), t(".amazingslider-car-right-arrow-" + this.id, this.container).data("disabled", !1)))
                    },
                    calcNavThumbSize: function() {
                        var e = t(window).width();
                        e < this.options.navthumbsmallsize ? ("samecolumn" == this.options.navthumbresponsivemode && "horizontal" == this.options.navdirection ? (this.options.navwidth = (this.options.width - this.options.navspacing * (this.options.navthumbsmallcolumn - 1)) / this.options.navthumbsmallcolumn, this.options.navheight = this.options.navwidth * this.options.navoriginalheight / this.options.navoriginalwidth, this.options.navthumbcolumn = this.options.navthumbsmallcolumn) : (this.options.navwidth = this.options.navthumbsmallwidth, this.options.navheight = this.options.navthumbsmallheight), this.options.navthumbtitleheight = this.options.navthumbsmalltitleheight, this.options.navthumbtitlewidth = this.options.navthumbsmalltitlewidth) : e < this.options.navthumbmediumsize ? ("samecolumn" == this.options.navthumbresponsivemode && "horizontal" == this.options.navdirection ? (this.options.navwidth = (this.options.width - this.options.navspacing * (this.options.navthumbmediumcolumn - 1)) / this.options.navthumbmediumcolumn, this.options.navheight = this.options.navwidth * this.options.navoriginalheight / this.options.navoriginalwidth, this.options.navthumbcolumn = this.options.navthumbmediumcolumn) : (this.options.navwidth = this.options.navthumbmediumwidth, this.options.navheight = this.options.navthumbmediumheight), this.options.navthumbtitleheight = this.options.navthumbmediumtitleheight, this.options.navthumbtitlewidth = this.options.navthumbmediumtitlewidth) : ("samecolumn" == this.options.navthumbresponsivemode && "horizontal" == this.options.navdirection ? (this.options.navwidth = (this.options.width - this.options.navspacing * (this.options.navthumboriginalcolumn - 1)) / this.options.navthumboriginalcolumn, this.options.navheight = this.options.navwidth * this.options.navoriginalheight / this.options.navoriginalwidth, this.options.navthumbcolumn = this.options.navthumboriginalcolumn) : (this.options.navwidth = this.options.navoriginalwidth, this.options.navheight = this.options.navoriginalheight), this.options.navthumbtitleheight = this.options.navoriginalthumbtitleheight, this.options.navthumbtitlewidth = this.options.navoriginalthumbtitlewidth)
                    },
                    createNav: function() {
                        if ("none" != this.options.navstyle || this.options.navshowbuttons) {
                            var e = this,
                                i = t(".amazingslider-nav-" + this.id, this.container),
                                o = t(".amazingslider-nav-container-" + this.id, this.container),
                                s = t("<div class='amazingslider-bullet-wrapper-" + this.id + "' style='display:block;position:relative;'></div>");
                            if (o.css({
                                    overflow: "hidden"
                                }), "thumbnails" == this.options.navstyle && ((this.options.navthumbresponsive || "samecolumn" == this.options.navthumbresponsivemode) && this.calcNavThumbSize(), this.options.navimagewidth = this.options.navwidth - 2 * this.options.navborder, this.options.navimageheight = this.options.navheight - 2 * this.options.navborder, "imageandtitle" == this.options.navthumbstyle ? this.options.navheight += this.options.navthumbtitleheight : "imageandtitledescription" != this.options.navthumbstyle && "textonly" != this.options.navthumbstyle || (this.options.navwidth += this.options.navthumbtitlewidth)), "vertical" == this.options.navdirection) {
                                var a = "none" == this.options.navstyle ? 0 : this.elemArray.length * this.options.navheight + (this.elemArray.length - 1) * this.options.navspacing;
                                this.options.navshowbuttons && (this.options.navshowarrow && (a += a > 0 ? this.options.navspacing : 0, a += 2 * this.options.navheight + this.options.navspacing), this.options.navshowplaypause && !this.options.navshowplaypausestandalone && (a += a > 0 ? this.options.navspacing : 0, a += this.options.navheight)), s.css({
                                    height: a + "px",
                                    width: "auto"
                                })
                            } else if (this.options.navmultirows) s.css({
                                width: "100%",
                                height: "auto"
                            });
                            else {
                                a = "none" == this.options.navstyle ? 0 : this.elemArray.length * this.options.navwidth + (this.elemArray.length - 1) * this.options.navspacing;
                                this.options.navshowbuttons && (this.options.navshowarrow && (a += a > 0 ? this.options.navspacing : 0, a += 2 * this.options.navwidth + this.options.navspacing), this.options.navshowplaypause && !this.options.navshowplaypausestandalone && (a += a > 0 ? this.options.navspacing : 0, a += this.options.navwidth)), s.css({
                                    width: a + "px",
                                    height: "auto"
                                })
                            }
                            o.append(s);
                            var r = 0,
                                l = "vertical" == this.options.navdirection ? this.options.navwidth : this.options.navheight;
                            "thumbnails" == this.options.navstyle && this.options.navshowfeaturedarrow && (l += "vertical" == this.options.navdirection ? this.options.navfeaturedarrowimagewidth : this.options.navfeaturedarrowimageheight, r = "vertical" == this.options.navdirection ? this.options.navfeaturedarrowimagewidth : this.options.navfeaturedarrowimageheight);
                            var h = "navmarginx" in this.options ? this.options.navmarginx : this.options.navmargin,
                                p = "navmarginy" in this.options ? this.options.navmarginy : this.options.navmargin;
                            switch (i.css({
                                display: "block",
                                position: "horizontal" == this.options.navdirection && this.options.navmultirows ? "relative" : "absolute",
                                height: "auto"
                            }), this.options.navposition) {
                                case "top":
                                    s.css({
                                        "margin-left": "auto",
                                        "margin-right": "auto",
                                        height: l + "px"
                                    }), i.css({
                                        width: "100%",
                                        top: "0%",
                                        left: "0px",
                                        "margin-top": p + "px"
                                    });
                                    break;
                                case "topleft":
                                    s.css({
                                        height: l + "px"
                                    }), i.css({
                                        "max-width": "100%",
                                        top: "0px",
                                        left: "0px",
                                        "margin-top": p + "px",
                                        "margin-left": h + "px"
                                    });
                                    break;
                                case "topright":
                                    s.css({
                                        height: l + "px"
                                    }), i.css({
                                        "max-width": "100%",
                                        top: "0px",
                                        right: "0px",
                                        "margin-top": p + "px",
                                        "margin-right": h + "px"
                                    });
                                    break;
                                case "bottom":
                                    s.css({
                                        "margin-left": "auto",
                                        "margin-right": "auto",
                                        "margin-top": r + "px"
                                    }), i.css({
                                        width: "100%",
                                        top: "100%",
                                        left: "0px",
                                        "margin-top": String(p - r) + "px"
                                    });
                                    break;
                                case "bottomleft":
                                    s.css({
                                        "margin-top": r + "px"
                                    }), i.css({
                                        "max-width": "100%",
                                        bottom: "0px",
                                        left: "0px",
                                        "margin-bottom": p + "px",
                                        "margin-top": String(p - r) + "px",
                                        "margin-left": h + "px"
                                    });
                                    break;
                                case "bottomright":
                                    s.css({
                                        "margin-top": r + "px"
                                    }), i.css({
                                        "max-width": "100%",
                                        bottom: "0px",
                                        right: "0px",
                                        "margin-bottom": p + "px",
                                        "margin-top": String(p - r) + "px",
                                        "margin-right": h + "px"
                                    });
                                    break;
                                case "left":
                                    s.css({
                                        width: l + "px"
                                    }), i.css({
                                        height: "100%",
                                        width: l + "px",
                                        top: "0%",
                                        left: "0%",
                                        "margin-left": h + "px"
                                    }), o.css({
                                        display: "block",
                                        position: "absolute",
                                        top: "0px",
                                        bottom: "0px",
                                        left: "0px",
                                        right: "0px",
                                        height: "auto"
                                    });
                                    break;
                                case "right":
                                    s.css({
                                        "margin-left": r + "px"
                                    }), i.css({
                                        height: "100%",
                                        width: l + "px",
                                        top: "0%",
                                        left: "100%",
                                        "margin-left": String(h - r) + "px"
                                    }), o.css({
                                        display: "block",
                                        position: "absolute",
                                        top: "0px",
                                        bottom: "0px",
                                        left: "0px",
                                        right: "0px",
                                        height: "auto"
                                    })
                            }
                            if ("none" != this.options.navstyle) {
                                var c;
                                for (u = 0; u < this.elemArray.length; u++) c = this.createNavBullet(u), s.append(c);
                                if (this.options.navmultirows && s.append('<div style="clear:both;"></div>'), i.mouseenter(function() {
                                        e.pauseCarousel = !0
                                    }), i.mouseleave(function() {
                                        e.pauseCarousel = !1
                                    }), e.options.navmultirows && "horizontal" == e.options.navdirection && "samecolumn" == e.options.navthumbresponsivemode)
                                    for (var d = t(".amazingslider-bullet-" + e.id, e.container), u = 1; u < d.length; u++)(u + 1) % e.options.navthumbcolumn == 0 ? d.eq(u).css({
                                        "margin-right": 0
                                    }) : d.eq(u).css({
                                        "margin-right": e.options.navspacing + "px"
                                    });
                                if ("auto" == e.options.navthumbnavigationstyle) i.mousemove(function(t) {
                                    if ("vertical" == e.options.navdirection) {
                                        if (i.height() >= s.height()) return;
                                        (a = t.pageY - i.offset().top) < 10 && (a = 0), a > i.height() - 10 && (a = i.height());
                                        var o = a / i.height(),
                                            n = (i.height() - s.height()) * o;
                                        s.animate({
                                            "margin-top": n
                                        }, {
                                            queue: !1,
                                            duration: 20,
                                            easing: "easeOutCubic"
                                        })
                                    } else {
                                        if (i.width() >= s.width()) return;
                                        var a;
                                        (a = t.pageX - i.offset().left) < 10 && (a = 0), a > i.width() - 10 && (a = i.width());
                                        o = a / i.width(), n = (i.width() - s.width()) * o;
                                        s.animate({
                                            "margin-left": n
                                        }, {
                                            queue: !1,
                                            duration: 20,
                                            easing: "easeOutCubic"
                                        })
                                    }
                                });
                                else {
                                    var m = 0;
                                    if (e.options.navmultirows && "horizontal" == e.options.navdirection)(g = Math.floor(i.width() / (e.options.navwidth + e.options.navspacing))) <= 0 && (g = 1), m = Math.floor((i.width() - g * e.options.navwidth - (g - 1) * e.options.navspacing) / 2), "samecolumn" == e.options.navthumbresponsivemode && (m = 0), o.css({
                                        width: "100%",
                                        "margin-left": m + "px"
                                    });
                                    else if ("arrow" == e.options.navthumbnavigationstyle) {
                                        var g;
                                        if (m = e.options.navthumbnavigationarrowimagewidth + e.options.navspacing, "horizontal" == e.options.navdirection)(g = Math.floor((i.width() - 2 * m + e.options.navspacing) / (e.options.navwidth + e.options.navspacing))) <= 0 && (g = 1), m = Math.floor((i.width() - g * e.options.navwidth - (g - 1) * e.options.navspacing) / 2), o.css({
                                            "margin-left": m + "px",
                                            "margin-right": m + "px"
                                        });
                                        else o.css({
                                            "margin-top": m + "px",
                                            "margin-bottom": m + "px"
                                        })
                                    } else "horizontal" == e.options.navdirection ? o.css({
                                        "margin-left": "0px",
                                        "margin-right": "0px"
                                    }) : o.css({
                                        "margin-top": "0px",
                                        "margin-bottom": "0px"
                                    });
                                    var f = t("<div class='amazingslider-car-left-arrow-" + e.id + "' style='display:none;'></div>"),
                                        v = t("<div class='amazingslider-car-right-arrow-" + e.id + "' style='display:none;'></div>");
                                    i.append(f), i.append(v), f.css({
                                        overflow: "hidden",
                                        position: "absolute",
                                        cursor: "pointer",
                                        display: "none",
                                        width: e.options.navthumbnavigationarrowimagewidth + "px",
                                        height: e.options.navthumbnavigationarrowimageheight + "px",
                                        background: "url('" + e.options.navthumbnavigationarrowimage + "') no-repeat left top"
                                    }), v.css({
                                        overflow: "hidden",
                                        position: "absolute",
                                        cursor: "pointer",
                                        display: "none",
                                        width: e.options.navthumbnavigationarrowimagewidth + "px",
                                        height: e.options.navthumbnavigationarrowimageheight + "px",
                                        background: "url('" + e.options.navthumbnavigationarrowimage + "') no-repeat right top"
                                    });
                                    var b = "vertical" == e.options.navdirection ? e.options.navwidth / 2 - e.options.navthumbnavigationarrowimagewidth / 2 : e.options.navheight / 2 - e.options.navthumbnavigationarrowimageheight / 2;
                                    "bottomleft" != e.options.navposition && "bottomright" != e.options.navposition && "bottom" != e.options.navposition && "right" != e.options.navposition || (b += r), "vertical" == e.options.navdirection ? (f.css({
                                        top: "arrowoutside" == e.options.navthumbnavigationstyle ? "-" + e.options.navthumbnavigationarrowimageheight + "px" : "0px",
                                        left: "0px",
                                        "margin-left": b + "px"
                                    }), v.css({
                                        bottom: "arrowoutside" == e.options.navthumbnavigationstyle ? "-" + e.options.navthumbnavigationarrowimageheight + "px" : "0px",
                                        left: "0px",
                                        "margin-left": b + "px"
                                    })) : (f.css({
                                        left: "arrowoutside" == e.options.navthumbnavigationstyle ? "-" + e.options.navthumbnavigationarrowimagewidth + "px" : "0px",
                                        top: "0px",
                                        "margin-top": b + "px"
                                    }), v.css({
                                        right: "arrowoutside" == e.options.navthumbnavigationstyle ? "-" + e.options.navthumbnavigationarrowimagewidth + "px" : "0px",
                                        top: "0px",
                                        "margin-top": b + "px"
                                    })), n.isIE678() && f.css({
                                        opacity: "inherit",
                                        filter: "inherit"
                                    }), f.hover(function() {
                                        t(this).data("disabled") || t(this).css({
                                            "background-position": "left center"
                                        })
                                    }, function() {
                                        t(this).data("disabled") || t(this).css({
                                            "background-position": "left top"
                                        })
                                    }), f.click(function() {
                                        "vertical" == e.options.navdirection ? e.carMoveBottom() : e.carMoveRight()
                                    }), n.isIE678() && v.css({
                                        opacity: "inherit",
                                        filter: "inherit"
                                    }), v.hover(function() {
                                        t(this).data("disabled") || t(this).css({
                                            "background-position": "right center"
                                        })
                                    }, function() {
                                        t(this).data("disabled") || t(this).css({
                                            "background-position": "right top"
                                        })
                                    }), v.click(function() {
                                        "vertical" == e.options.navdirection ? e.carMoveTop() : e.carMoveLeft()
                                    }), ("vertical" == e.options.navdirection && s.height() > o.height() || "horizontal" == e.options.navdirection && s.width() > o.width()) && (f.css({
                                        display: "block",
                                        "background-position": "left bottom",
                                        cursor: ""
                                    }), f.data("disabled", !0), v.css({
                                        display: "block"
                                    })), "arrowinside" == e.options.navthumbnavigationstyle && (f.hide(), v.hide(), i.hover(function() {
                                        ("vertical" == e.options.navdirection && s.height() > o.height() || "horizontal" == e.options.navdirection && s.width() > o.width()) && (f.fadeIn(), v.fadeIn())
                                    }, function() {
                                        f.fadeOut(), v.fadeOut()
                                    }))
                                }
                                if ("vertical" == e.options.navdirection ? i.sliderTouchSwipe({
                                        preventWebBrowser: !0,
                                        swipeTop: function(t) {
                                            e.carMoveTop()
                                        },
                                        swipeBottom: function() {
                                            e.carMoveBottom()
                                        }
                                    }) : i.sliderTouchSwipe({
                                        preventWebBrowser: !1,
                                        swipeLeft: function(t) {
                                            e.carMoveLeft()
                                        },
                                        swipeRight: function() {
                                            e.carMoveRight()
                                        }
                                    }), this.container.on("amazingslider.switch", function(i, o, n) {
                                        t("#amazingslider-bullet-" + e.id + "-" + o, e.container)["bulletNormal" + e.id](), t("#amazingslider-bullet-" + e.id + "-" + n, e.container)["bulletSelected" + e.id]()
                                    }), this.options.navshowpreview) {
                                    var w = t("<div class='amazingslider-nav-preview-" + this.id + "' style='display:none;position:absolute;width:" + this.options.navpreviewwidth + "px;height:" + this.options.navpreviewheight + "px;background-color:" + this.options.navpreviewbordercolor + ";padding:" + e.options.navpreviewborder + "px;'></div>"),
                                        x = t("<div class='amazingslider-nav-preview-arrow-" + this.id + "' style='display:block;position:absolute;width:" + this.options.navpreviewarrowwidth + "px;height:" + this.options.navpreviewarrowheight + 'px;background:url("' + this.options.navpreviewarrowimage + "\") no-repeat center center;' ></div>");
                                    switch (this.options.navpreviewposition) {
                                        case "bottom":
                                            x.css({
                                                left: "50%",
                                                bottom: "100%",
                                                "margin-left": "-" + Math.round(this.options.navpreviewarrowwidth / 2) + "px"
                                            });
                                            break;
                                        case "top":
                                            x.css({
                                                left: "50%",
                                                top: "100%",
                                                "margin-left": "-" + Math.round(this.options.navpreviewarrowwidth / 2) + "px"
                                            });
                                            break;
                                        case "left":
                                            x.css({
                                                top: "50%",
                                                left: "100%",
                                                "margin-top": "-" + Math.round(this.options.navpreviewarrowheight / 2) + "px"
                                            });
                                            break;
                                        case "right":
                                            x.css({
                                                top: "50%",
                                                right: "100%",
                                                "margin-top": "-" + Math.round(this.options.navpreviewarrowheight / 2) + "px"
                                            })
                                    }
                                    var y = t("<div class='amazingslider-nav-preview-images-" + this.id + "' style='display:block;position:relative;width:100%;height:100%;overflow:hidden;' />");
                                    if (w.append(x), w.append(y), this.options.navshowplayvideo) {
                                        var k = t("<div class='amazingslider-nav-preview-play-" + this.id + "' style='display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:url(\"" + this.options.navplayvideoimage + "\") no-repeat center center;' ></div>");
                                        w.append(k)
                                    }
                                    t(".amazingslider-wrapper-" + this.id, this.container).append(w)
                                }
                                this.options.navshowfeaturedarrow && s.append("<div class='amazingslider-nav-featuredarrow-" + this.id + "' style='display:none;position:absolute;width:" + this.options.navfeaturedarrowimagewidth + "px;height:" + this.options.navfeaturedarrowimageheight + 'px;background:url("' + this.options.navfeaturedarrowimage + "\") no-repeat center center;'></div>")
                            }
                            if (this.options.navshowbuttons) {
                                var z = "vertical" == this.options.navdirection ? "top" : "left",
                                    E = "none" == this.options.navstyle ? 0 : this.options.navspacing;
                                if (this.options.navshowarrow) {
                                    var A = t("<div class='amazingslider-nav-left-" + this.id + "' style='position:relative;float:" + z + ";margin-" + z + ":" + E + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>");
                                    s.append(A), this.options.navbuttonradius && A.css(n.applyBrowserStyles({
                                        "border-radius": this.options.navbuttonradius + "px"
                                    })), this.options.navbuttoncolor && A.css({
                                        "background-color": this.options.navbuttoncolor
                                    }), this.options.navarrowimage && A.css({
                                        "background-image": "url('" + this.options.navarrowimage + "')",
                                        "background-repeat": "no-repeat",
                                        "background-position": "left top"
                                    }), A.hover(function() {
                                        e.options.navbuttonhighlightcolor && t(this).css({
                                            "background-color": e.options.navbuttonhighlightcolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "left bottom"
                                        })
                                    }, function() {
                                        e.options.navbuttoncolor && t(this).css({
                                            "background-color": e.options.navbuttoncolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "left top"
                                        })
                                    }), A.click(function() {
                                        e.videoAutoplayMode = !1, e.slideRun(-2)
                                    }), E = this.options.navspacing
                                }
                                if (this.options.navshowplaypause) {
                                    var T, I;
                                    if (this.options.navshowplaypausestandalone) switch (T = t("<div class='amazingslider-nav-play-" + this.id + "' style='position:absolute;width:" + this.options.navshowplaypausestandalonewidth + "px;height:" + this.options.navshowplaypausestandaloneheight + "px;'></div>"), this.$wrapper.append(T), I = t("<div class='amazingslider-nav-pause-" + this.id + "' style='position:absolute;width:" + this.options.navshowplaypausestandalonewidth + "px;height:" + this.options.navshowplaypausestandaloneheight + "px;'></div>"), this.$wrapper.append(I), this.options.navshowplaypausestandaloneposition) {
                                        case "topleft":
                                            T.css({
                                                top: 0,
                                                left: 0,
                                                "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                            }), I.css({
                                                top: 0,
                                                left: 0,
                                                "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                            });
                                            break;
                                        case "topright":
                                            T.css({
                                                top: 0,
                                                right: 0,
                                                "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                            }), I.css({
                                                top: 0,
                                                right: 0,
                                                "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-top": this.options.navshowplaypausestandalonemarginy + "px"
                                            });
                                            break;
                                        case "bottomleft":
                                            T.css({
                                                bottom: 0,
                                                left: 0,
                                                "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-bottom": this.options.navshowplaypausestandalonemarginy + "px"
                                            }), I.css({
                                                bottom: 0,
                                                left: 0,
                                                "margin-left": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-bottom": this.options.navshowplaypausestandalonemarginy + "px"
                                            });
                                            break;
                                        case "bottomright":
                                            T.css({
                                                bottom: 0,
                                                right: 0,
                                                "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-bottom": this.options.navshowplaypausestandalonemarginy + "px"
                                            }), I.css({
                                                bottom: 0,
                                                right: 0,
                                                "margin-right": this.options.navshowplaypausestandalonemarginx + "px",
                                                "margin-bottom": this.options.navshowplaypausestandalonemarginy + "px"
                                            });
                                            break;
                                        case "center":
                                            T.css({
                                                top: "50%",
                                                left: "50%",
                                                "margin-left": "-" + Math.round(this.options.navshowplaypausestandalonewidth / 2) + "px",
                                                "margin-top": "-" + Math.round(this.options.navshowplaypausestandaloneheight / 2) + "px"
                                            }), I.css({
                                                top: "50%",
                                                left: "50%",
                                                "margin-left": "-" + Math.round(this.options.navshowplaypausestandalonewidth / 2) + "px",
                                                "margin-top": "-" + Math.round(this.options.navshowplaypausestandaloneheight / 2) + "px"
                                            })
                                    } else T = t("<div class='amazingslider-nav-play-" + this.id + "' style='position:relative;float:" + z + ";margin-" + z + ":" + E + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>"), s.append(T), I = t("<div class='amazingslider-nav-pause-" + this.id + "' style='position:relative;float:" + z + ";margin-" + z + ":" + E + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>"), s.append(I);
                                    this.options.navbuttonradius && T.css(n.applyBrowserStyles({
                                        "border-radius": this.options.navbuttonradius + "px"
                                    })), this.options.navbuttoncolor && T.css({
                                        "background-color": this.options.navbuttoncolor
                                    }), this.options.navarrowimage && T.css({
                                        "background-image": "url('" + this.options.navplaypauseimage + "')",
                                        "background-repeat": "no-repeat",
                                        "background-position": "left top"
                                    }), T.hover(function() {
                                        e.options.navbuttonhighlightcolor && t(this).css({
                                            "background-color": e.options.navbuttonhighlightcolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "left bottom"
                                        })
                                    }, function() {
                                        e.options.navbuttoncolor && t(this).css({
                                            "background-color": e.options.navbuttoncolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "left top"
                                        })
                                    }), T.click(function() {
                                        e.isPaused = !1, e.loopCount = 0, e.videoPaused || e.sliderTimeout.start(), t(this).css({
                                            display: "none"
                                        }), t(".amazingslider-nav-pause-" + e.id, e.container).css({
                                            display: "block"
                                        })
                                    }), this.options.navbuttonradius && I.css(n.applyBrowserStyles({
                                        "border-radius": this.options.navbuttonradius + "px"
                                    })), this.options.navbuttoncolor && I.css({
                                        "background-color": this.options.navbuttoncolor
                                    }), this.options.navarrowimage && I.css({
                                        "background-image": "url('" + this.options.navplaypauseimage + "')",
                                        "background-repeat": "no-repeat",
                                        "background-position": "right top"
                                    }), I.hover(function() {
                                        e.options.navbuttonhighlightcolor && t(this).css({
                                            "background-color": e.options.navbuttonhighlightcolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "right bottom"
                                        })
                                    }, function() {
                                        e.options.navbuttoncolor && t(this).css({
                                            "background-color": e.options.navbuttoncolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "right top"
                                        })
                                    }), I.click(function() {
                                        e.isPaused = !0, e.sliderTimeout.stop(), t(this).css({
                                            display: "none"
                                        }), t(".amazingslider-nav-play-" + e.id, e.container).css({
                                            display: "block"
                                        })
                                    }), this.options.navshowplaypausestandalone && this.options.navshowplaypausestandaloneautohide ? (T.css({
                                        display: "none"
                                    }), I.css({
                                        display: "none"
                                    }), this.$wrapper.hover(function() {
                                        e.isPaused ? (T.fadeIn(), I.css({
                                            display: "none"
                                        })) : (T.css({
                                            display: "none"
                                        }), I.fadeIn())
                                    }, function() {
                                        T.fadeOut(), I.fadeOut()
                                    })) : (T.css({
                                        display: e.isPaused ? "block" : "none"
                                    }), I.css({
                                        display: e.isPaused ? "none" : "block"
                                    }))
                                }
                                if (this.options.navshowarrow) {
                                    var S = t("<div class='amazingslider-nav-right-" + this.id + "' style='position:relative;float:" + z + ";margin-" + z + ":" + E + "px;width:" + this.options.navwidth + "px;height:" + this.options.navheight + "px;cursor:pointer;'></div>");
                                    s.append(S), this.options.navbuttonradius && S.css(n.applyBrowserStyles({
                                        "border-radius": this.options.navbuttonradius + "px"
                                    })), this.options.navbuttoncolor && S.css({
                                        "background-color": this.options.navbuttoncolor
                                    }), this.options.navarrowimage && S.css({
                                        "background-image": "url('" + this.options.navarrowimage + "')",
                                        "background-repeat": "no-repeat",
                                        "background-position": "right top"
                                    }), S.hover(function() {
                                        e.options.navbuttonhighlightcolor && t(this).css({
                                            "background-color": e.options.navbuttonhighlightcolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "right bottom"
                                        })
                                    }, function() {
                                        e.options.navbuttoncolor && t(this).css({
                                            "background-color": e.options.navbuttoncolor
                                        }), e.options.navarrowimage && t(this).css({
                                            "background-position": "right top"
                                        })
                                    }), S.click(function() {
                                        e.videoAutoplayMode = !1, e.slideRun(-1)
                                    })
                                }
                            }
                        }
                    },
                    resizeNavBullets: function() {
                        if ("thumbnails" == this.options.navstyle && this.options.navthumbresponsive) {
                            this.calcNavThumbSize(), this.options.navimagewidth = this.options.navwidth - 2 * this.options.navborder, this.options.navimageheight = this.options.navheight - 2 * this.options.navborder, "imageandtitle" == this.options.navthumbstyle ? this.options.navheight += this.options.navthumbtitleheight : "imageandtitledescription" != this.options.navthumbstyle && "textonly" != this.options.navthumbstyle || (this.options.navwidth += this.options.navthumbtitlewidth);
                            var e = this;
                            t(".amazingslider-bullet-" + this.id, this.container).each(function() {
                                var i = t(this).data("originalthumbwidth"),
                                    o = t(this).data("originalthumbheight");
                                t(this).css({
                                    width: String(e.options.navwidth - 2 * e.options.navborder) + "px",
                                    height: String(e.options.navheight - 2 * e.options.navborder) + "px"
                                }), "textonly" != e.options.navthumbstyle && (t(".amazingslider-bullet-image-" + e.id, this).css({
                                    width: e.options.navimagewidth + "px",
                                    height: e.options.navimageheight + "px"
                                }), i / o <= e.options.navimagewidth / e.options.navimageheight ? t(".amazingslider-bullet-img-" + e.id, this).css({
                                    width: "100%",
                                    height: "auto",
                                    "margin-top": "-" + Math.floor(o / i * e.options.navimagewidth / 2 - e.options.navimageheight / 2) + "px"
                                }) : t(".amazingslider-bullet-img-" + e.id, this).css({
                                    width: "auto",
                                    height: "100%",
                                    "margin-left": "-" + Math.floor(i / o * e.options.navimageheight / 2 - e.options.navimagewidth / 2) + "px"
                                })), "imageonly" != e.options.navthumbstyle && ("imageandtitle" == e.options.navthumbstyle ? t(".amazingslider-bullet-text-" + e.id, this).css({
                                    "margin-top": e.options.navimageheight + "px",
                                    width: e.options.navimagewidth + "px",
                                    height: e.options.navthumbtitleheight + "px"
                                }) : "imageandtitledescription" == e.options.navthumbstyle ? t(".amazingslider-bullet-text-" + e.id, this).css({
                                    "margin-left": e.options.navimagewidth + "px",
                                    width: e.options.navthumbtitlewidth + "px",
                                    height: e.options.navimageheight + "px"
                                }) : "textonly" == e.options.navthumbstyle && t(".amazingslider-bullet-text-" + e.id, this).css({
                                    width: String(e.options.navthumbtitlewidth + e.options.navimagewidth) + "px",
                                    height: e.options.navimageheight + "px"
                                }))
                            })
                        }
                    },
                    createNavBullet: function(e) {
                        var i = this,
                            o = "vertical" == this.options.navdirection ? "top" : "left",
                            s = "vertical" == this.options.navdirection ? "bottom" : "right",
                            a = e == this.elemArray.length - 1 ? 0 : this.options.navspacing,
                            r = "thumbnails" == this.options.navstyle ? this.options.navwidth - 2 * this.options.navborder : this.options.navwidth,
                            l = "thumbnails" == this.options.navstyle ? this.options.navheight - 2 * this.options.navborder : this.options.navheight,
                            h = "horizontal" == this.options.navdirection && this.options.navmultirows ? "margin-bottom:" + this.options.navrowspacing + "px;" : "",
                            p = t("<div class='amazingslider-bullet-" + this.id + "' id='amazingslider-bullet-" + this.id + "-" + e + "' style='position:relative;float:" + o + ";" + h + "margin-" + s + ":" + a + "px;width:" + r + "px;height:" + l + "px;cursor:pointer;'></div>");
                        if (p.data("index", e), p.hover(function() {
                                t(this).data("index") != i.curElem && t(this)["bulletHighlight" + i.id]();
                                var e = t(this).data("index");
                                if (i.options.navswitchonmouseover && e != i.curElem && i.slideRun(e), i.options.navshowpreview) {
                                    var o = t(".amazingslider-nav-preview-" + i.id, i.container),
                                        n = t(".amazingslider-nav-preview-images-" + i.id, o);
                                    if (i.options.navshowplayvideo) {
                                        var s = t(".amazingslider-nav-preview-play-" + i.id, o);
                                        i.elemArray[e][6].length > 0 || i.elemArray[e][4] && i.elemArray[e][8] && i.elemArray[e][16] > 0 ? s.show() : s.hide()
                                    }
                                    var a = t(".amazingslider-nav-" + i.id, i.container),
                                        r = t(".amazingslider-bullet-wrapper-" + i.id, i.container),
                                        l = t(this).position(),
                                        h = a.position(),
                                        p = r.position();
                                    if (l.left += h.left + p.left, l.left += isNaN(parseInt(r.css("margin-left"))) ? 0 : parseInt(r.css("margin-left")), l.left += isNaN(parseInt(a.css("margin-left"))) ? 0 : parseInt(a.css("margin-left")), l.top += h.top + p.top, l.top += isNaN(parseInt(r.css("margin-top"))) ? 0 : parseInt(r.css("margin-top")), l.top += isNaN(parseInt(a.css("margin-top"))) ? 0 : parseInt(a.css("margin-top")), "vertical" == i.options.navdirection) {
                                        var c = t(".amazingslider-nav-container-" + i.id, i.container);
                                        l.top += isNaN(parseInt(c.css("margin-top"))) ? 0 : parseInt(c.css("margin-top"))
                                    }
                                    var d, u, m = l.left + i.options.navwidth / 2 - i.options.navpreviewwidth / 2 - i.options.navpreviewborder,
                                        g = l.top + i.options.navheight / 2 - i.options.navpreviewheight / 2 - i.options.navpreviewborder,
                                        f = {};
                                    switch (i.options.navpreviewposition) {
                                        case "bottom":
                                            d = l.top + i.options.navheight + i.options.navpreviewarrowheight, f = {
                                                left: m + "px",
                                                top: d + "px"
                                            };
                                            break;
                                        case "top":
                                            d = l.top - i.options.navpreviewheight - 2 * i.options.navpreviewborder - i.options.navpreviewarrowheight, f = {
                                                left: m + "px",
                                                top: d + "px"
                                            };
                                            break;
                                        case "left":
                                            u = l.left - i.options.navpreviewwidth - 2 * i.options.navpreviewborder - i.options.navpreviewarrowwidth, f = {
                                                left: u + "px",
                                                top: g + "px"
                                            };
                                            break;
                                        case "right":
                                            u = l.left + i.options.navwidth + i.options.navpreviewarrowwidth, f = {
                                                left: u + "px",
                                                top: g + "px"
                                            }
                                    }
                                    var v = new Image;
                                    t(v).on("load", function() {
                                        var s;
                                        s = this.width / this.height <= i.options.navpreviewwidth / i.options.navpreviewheight ? "width:" + i.options.navpreviewwidth + "px;max-width:" + i.options.navpreviewwidth + "px;height:auto;margin-top:-" + Math.floor(this.height / this.width * i.options.navpreviewwidth / 2 - i.options.navpreviewheight / 2) + "px;" : "width:auto;max-width:none;height:" + i.options.navpreviewheight + "px;margin-left:-" + Math.floor(this.width / this.height * i.options.navpreviewheight / 2 - i.options.navpreviewwidth / 2) + "px;";
                                        var a = t(".amazingslider-nav-preview-img-" + i.id, n);
                                        if ("vertical" == i.options.navdirection) {
                                            var r = t("<div class='amazingslider-nav-preview-img-" + i.id + "' style='display:block;position:absolute;overflow:hidden;width:" + i.options.navpreviewwidth + "px;height:" + i.options.navpreviewheight + "px;left:0px;top:" + i.options.navpreviewheight + "px;'><img class='amazingslider-preview-elem' alt='" + i.elemArray[e][17] + "' src='" + i.elemArray[e][7] + "' style='display:block;position:absolute;left:0px;top:0px;" + s + "' /></div>");
                                            n.append(r), a.length > 0 && a.animate({
                                                top: "-" + i.options.navpreviewheight + "px"
                                            }, function() {
                                                a.remove()
                                            }), o.is(":visible") ? (r.animate({
                                                top: "0px"
                                            }), o.stop(!0, !0).animate(f)) : (r.css({
                                                top: "0px"
                                            }), o.stop(!0, !0).css(f).fadeIn())
                                        } else {
                                            r = t("<div class='amazingslider-nav-preview-img-" + i.id + "' style='display:block;position:absolute;overflow:hidden;width:" + i.options.navpreviewwidth + "px;height:" + i.options.navpreviewheight + "px;left:" + i.options.navpreviewheight + "px;top:0px;'><img class='amazingslider-preview-elem' alt='" + i.elemArray[e][17] + "' src='" + i.elemArray[e][7] + "' style='display:block;position:absolute;left:0px;top:0px;" + s + "' /></div>");
                                            n.append(r), a.length > 0 && a.animate({
                                                left: "-" + i.options.navpreviewwidth + "px"
                                            }, function() {
                                                a.remove()
                                            }), o.is(":visible") ? (r.animate({
                                                left: "0px"
                                            }), o.stop(!0, !0).animate(f)) : (r.css({
                                                left: "0px"
                                            }), o.stop(!0, !0).css(f).fadeIn())
                                        }
                                    }), v.src = i.elemArray[e][7]
                                }
                            }, function() {
                                (t(this).data("index") != i.curElem && t(this)["bulletNormal" + i.id](), i.options.navshowpreview) && t(".amazingslider-nav-preview-" + i.id, i.container).delay(500).fadeOut()
                            }), p.click(function() {
                                i.videoAutoplayMode = !1, i.slideRun(t(this).data("index"), i.options.playvideoonclickthumb)
                            }), "bullets" == this.options.navstyle) p.css({
                            background: "url('" + this.options.navimage + "') no-repeat left top"
                        }), t.fn["bulletNormal" + this.id] = function() {
                            t(this).css({
                                "background-position": "left top"
                            })
                        }, t.fn["bulletHighlight" + this.id] = function() {
                            t(this).css({
                                "background-position": "left bottom"
                            })
                        }, t.fn["bulletSelected" + this.id] = function() {
                            t(this).css({
                                "background-position": "left bottom"
                            }), i.adjustNav(this)
                        };
                        else if ("numbering" == this.options.navstyle) p.text(e + 1), p.css({
                            "background-color": this.options.navcolor,
                            color: this.options.navfontcolor,
                            "font-size": this.options.navfontsize,
                            "font-family": this.options.navfont,
                            "text-align": "center",
                            "line-height": this.options.navheight + "px"
                        }), p.css(n.applyBrowserStyles({
                            "border-radius": this.options.navradius + "px"
                        })), this.options.navbuttonshowbgimage && this.options.navbuttonbgimage && p.css({
                            background: "url('" + this.options.navbuttonbgimage + "') no-repeat center top"
                        }), t.fn["bulletNormal" + this.id] = function() {
                            t(this).css({
                                "background-color": i.options.navcolor,
                                color: i.options.navfontcolor
                            }), i.options.navbuttonshowbgimage && i.options.navbuttonbgimage && t(this).css({
                                "background-position": "center top"
                            })
                        }, t.fn["bulletHighlight" + this.id] = function() {
                            t(this).css({
                                "background-color": i.options.navhighlightcolor,
                                color: i.options.navfonthighlightcolor
                            }), i.options.navbuttonshowbgimage && i.options.navbuttonbgimage && t(this).css({
                                "background-position": "center bottom"
                            })
                        }, t.fn["bulletSelected" + this.id] = function() {
                            t(this).css({
                                "background-color": i.options.navhighlightcolor,
                                color: i.options.navfonthighlightcolor
                            }), i.options.navbuttonshowbgimage && i.options.navbuttonbgimage && t(this).css({
                                "background-position": "center bottom"
                            }), i.adjustNav(this)
                        };
                        else if ("thumbnails" == this.options.navstyle) {
                            p.css({
                                padding: this.options.navborder + "px",
                                "background-color": this.options.navbordercolor
                            }), p.css({
                                opacity: this.options.navopacity,
                                filter: "alpha(opacity=" + Math.round(100 * this.options.navopacity) + ")"
                            });
                            var c = new Image;
                            i = this;
                            t(c).on("load", function() {
                                var t;
                                (p.data("originalthumbwidth", this.width), p.data("originalthumbheight", this.height), "textonly" != i.options.navthumbstyle) && (t = this.width / this.height <= i.options.navimagewidth / i.options.navimageheight ? "max-width:none;width:100%;height:auto;margin-top:-" + Math.floor(this.height / this.width * i.options.navimagewidth / 2 - i.options.navimageheight / 2) + "px" : "max-width:none;width:auto;height:100%;margin-left:-" + Math.floor(this.width / this.height * i.options.navimageheight / 2 - i.options.navimagewidth / 2) + "px", p.append("<div class='amazingslider-bullet-image-" + i.id + "' style='display:block;position:absolute;width:" + i.options.navimagewidth + "px;height:" + i.options.navimageheight + "px;overflow:hidden;'><img alt='" + i.elemArray[e][17] + "' class='amazingslider-thumbnail-elem amazingslider-bullet-img-" + i.id + "' src='" + i.elemArray[e][7] + "' style='" + t + "' /></div>"), i.options.navshowplayvideo && (i.elemArray[e][6].length > 0 || i.elemArray[e][4] && i.elemArray[e][8] && i.elemArray[e][16] > 0) && p.append("<div class='amazingslider-bullet-playvideo-" + i.id + "' style='display:block;position:absolute;margin-left:0;margin-top:0;width:" + i.options.navimagewidth + "px;height:" + i.options.navimageheight + 'px;background:url("' + i.options.navplayvideoimage + "\") no-repeat center center;' ></div>"));
                                if ("imageonly" != i.options.navthumbstyle) {
                                    var o = "<div class='amazingslider-bullet-text-" + i.id + "' style='display:block;position:absolute;overflow:hidden;";
                                    "imageandtitle" == i.options.navthumbstyle ? o += "margin-left:0px;margin-top:" + i.options.navimageheight + "px;width:" + i.options.navimagewidth + "px;height:" + i.options.navthumbtitleheight + "px;" : "imageandtitledescription" == i.options.navthumbstyle ? o += "margin-left:" + i.options.navimagewidth + "px;margin-top:0px;width:" + i.options.navthumbtitlewidth + "px;height:" + i.options.navimageheight + "px;" : "textonly" == i.options.navthumbstyle && (o += "margin-left:0px;margin-top:0px;width:" + String(i.options.navthumbtitlewidth + i.options.navimagewidth) + "px;height:" + i.options.navimageheight + "px;"), o += "'><div class='amazingslider-nav-thumbnail-tite-" + i.id + "'>" + i.elemArray[e][2] + "</div>", "imageandtitledescription" != i.options.navthumbstyle && "textonly" != i.options.navthumbstyle || (o += "<div class='amazingslider-nav-thumbnail-description-" + i.id + "'>" + i.elemArray[e][3] + "</div>"), o += "</div>", p.append(o)
                                }
                            }), c.src = this.elemArray[e][7], t.fn["bulletNormal" + this.id] = function() {
                                t(this).css({
                                    opacity: i.options.navopacity,
                                    filter: "alpha(opacity=" + Math.round(100 * i.options.navopacity) + ")"
                                }), t(this).removeClass("amazingslider-bullet-selected").removeClass("amazingslider-bullet-highlighted"), i.options.navbordercolor && t(this).css({
                                    "background-color": i.options.navbordercolor
                                })
                            }, t.fn["bulletHighlight" + this.id] = function() {
                                t(this).css({
                                    opacity: 1,
                                    filter: "alpha(opacity=100)"
                                }), i.options.navborderhighlightcolor && t(this).css({
                                    "background-color": i.options.navborderhighlightcolor
                                }), t(this).removeClass("amazingslider-bullet-selected").addClass("amazingslider-bullet-highlighted")
                            }, t.fn["bulletSelected" + this.id] = function() {
                                t(this).css({
                                    opacity: 1,
                                    filter: "alpha(opacity=100)"
                                }), i.options.navborderhighlightcolor && t(this).css({
                                    "background-color": i.options.navborderhighlightcolor
                                }), t(this).removeClass("amazingslider-bullet-highlighted").addClass("amazingslider-bullet-selected"), i.adjustNav(this)
                            }
                        }
                        return p
                    },
                    adjustNav: function(e) {
                        var i = t(e).position(),
                            o = t(".amazingslider-nav-container-" + this.id, this.container),
                            n = t(".amazingslider-bullet-wrapper-" + this.id, this.container);
                        if ("horizontal" == this.options.navdirection) {
                            var s = i.left + this.options.navwidth / 2 - this.options.navfeaturedarrowimagewidth / 2;
                            if (l = "top" == this.options.navposition || "topleft" == this.options.navposition || "topright" == this.options.navposition ? i.top + this.options.navheight : i.top - this.options.navfeaturedarrowimageheight, this.options.navshowfeaturedarrow)(r = t(".amazingslider-nav-featuredarrow-" + this.id, this.container)).css({
                                top: l + "px"
                            }), r.is(":visible") ? r.stop(!0, !0).animate({
                                left: s + "px"
                            }) : r.css({
                                display: "block",
                                left: s + "px"
                            });
                            if (o.width() < n.width() && !this.pauseCarousel) {
                                var a = Math.abs(isNaN(parseInt(n.css("margin-left"))) ? 0 : parseInt(n.css("margin-left")));
                                if (i.left < a || i.left + this.options.navwidth > a + o.width())(h = -i.left) <= o.width() - n.width() && (h = o.width() - n.width()), h >= 0 && (h = 0), n.animate({
                                    "margin-left": h + "px"
                                }, {
                                    queue: !1,
                                    duration: 500,
                                    easing: "easeOutCirc"
                                }), this.updateCarouselLeftRightArrow(h)
                            }
                        } else {
                            var r, l = i.top + this.options.navheight / 2 - this.options.navfeaturedarrowimageheight / 2;
                            if (s = "left" == this.options.navposition ? i.left + this.options.navwidth : i.left - this.options.navfeaturedarrowimagewidth, this.options.navshowfeaturedarrow)(r = t(".amazingslider-nav-featuredarrow-" + this.id, this.container)).css({
                                left: s + "px"
                            }), r.is(":visible") ? r.stop(!0, !0).animate({
                                top: l + "px"
                            }) : r.css({
                                display: "block",
                                top: l + "px"
                            });
                            if (o.height() < n.height() && !this.pauseCarousel) {
                                var h;
                                a = Math.abs(isNaN(parseInt(n.css("margin-top"))) ? 0 : parseInt(n.css("margin-top")));
                                if (i.top < a || i.top + this.options.navheight > a + o.height())(h = -i.top) <= o.height() - n.height() && (h = o.height() - n.height()), h >= 0 && (h = 0), n.animate({
                                    "margin-top": h + "px"
                                }, {
                                    queue: !1,
                                    duration: 500,
                                    easing: "easeOutCirc"
                                }), this.updateCarouselLeftRightArrow(h)
                            }
                        }
                    },
                    slideRun: function(e, i, o) {
                        if (savedCur = this.curElem, this.calcIndex(e), savedCur != this.curElem || this.elemArray[this.curElem][6].length > 0 && i) {
                            if (savedCur >= 0 && this.container.removeClass("amazingslider-activeslide-" + this.id + "-" + savedCur), this.container.addClass("amazingslider-activeslide-" + this.id + "-" + this.curElem), this.isAnimating) {
                                this.transitionTimeout && clearTimeout(this.transitionTimeout), t(".amazingslider-img-box-" + this.id, this.container).off("transitionFinished");
                                var n = "<div class='amazingslider-img-" + this.id + " ' style='display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;overflow:hidden;'>";
                                n += "<img alt='" + this.elemArray[savedCur][17] + "' style='position:absolute;", Math.abs(this.curImageMarginLeft) > 0 ? n += "max-width:" + this.curImageMaxWidth + "%;width:" + this.curImageMaxWidth + "%;height:100%;left:0%;top:0%;margin-left:" + this.curImageMarginLeft + "%" : n += "max-width:" + this.curImageMaxWidth + "%;width:" + this.curImageMaxWidth + "%;height:auto;left:0%;top:0%;margin-top:" + this.curImageMarginTop + "%;", this.options.borderradius > 0 && (n += "border-radius:" + this.options.borderradius + "px;-moz-border-radius:" + this.options.borderradius + "px;-webkit-border-radius:" + this.options.borderradius + "px;"), n += "' src='" + this.elemArray[savedCur][1] + "' /></div>", t(".amazingslider-img-box-" + this.id, this.container).html(n), this.isAnimating = !1
                            }
                            var s = this.elemArray[this.curElem][13];
                            if (s && s.length > 0 && "textformat" in this.options && s in this.options.textformat ? this.textoptions = t.ASUpdateObject(this.textoptions, this.options.textformat[s]) : this.textoptions = t.ASUpdateObject(this.textoptions, this.options), this.sliderTimeout.stop(), this.sliderTimeout.timeout = this.elemArray[this.curElem][14] > 0 ? this.elemArray[this.curElem][14] : this.options.slideinterval, this.videoPaused = !1, this.container.trigger("amazingslider.switch", [savedCur, this.curElem]), t(".amazingslider-video-wrapper-" + this.id, this.container).find("iframe").each(function() {
                                    t(this).attr("src", "")
                                }), t(".amazingslider-video-wrapper-" + this.id, this.container).find("video").each(function() {
                                    t(this).attr("src", "")
                                }), this.container.trigger("amazingslider.switchtext", [savedCur, this.curElem]), (i || this.options.autoplayvideo) && this.elemArray[this.curElem][6].length > 0) this.playVideo(!0);
                            else if (!this.elemArray[this.curElem][1] && this.elemArray[this.curElem][6].length > 0) this.playVideo(this.options.autoplayvideo);
                            else {
                                t(".amazingslider-video-wrapper-" + this.id, this.container).css({
                                    display: "none"
                                }).empty();
                                var a = !0; - 2 == e ? a = !1 : -1 == e ? a = !0 : e >= 0 && (a = this.curElem > savedCur), this.showImage(a, o)
                            }
                            this.options.preloadprevnext && ((new Image).src = this.elemArray[this.prevElem][1], (new Image).src = this.elemArray[this.nextElem][1]), this.options.loop > 0 && this.curElem == this.elemArray.length - 1 && (this.loopCount++, this.options.loop <= this.loopCount && (this.isPaused = !0)), this.checkMK()
                        }
                    },
                    checkMK: function() {
                        if ("AMCom" != this.options.versionmark && !("AMLite" == this.options.versionmark && this.options.skin && t.inArray(this.options.skin, ["classic", "cube", "content"]) >= 0)) {
                            var e = t(".amazingslider-box-" + this.id, this.container),
                                i = t('a[href="' + this.options.watermarklink + '"]', e);
                            if (e.text().indexOf(this.options.watermarktext) < 0 || i.length < 0) {
                                var o = '<div style="display:none !important;position:absolute;top:6px;left:6px;visibility:hidden !important;z-index:-9999 !important;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);cursor:pointer;"><a href="' + this.options.watermarklink + '" style="display:block!important;visibility:visible!important;text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;" title="Responsive jQuery Slider" target="_blank">' + this.options.watermarktext + "</a></div>";
                                e.append(o)
                            } else {
                                var n = i.parent();
                                ("none" == i.css("display") || "hidden" == i.css("visibility") || parseInt(i.css("font-size")) < 8 || "none" == n.css("display") || "hidden" == n.css("visibility") || parseInt(n.css("font-size")) < 8) && (i.attr({
                                    style: (i.attr("style") || "") + "display:block!important;visibility:visible!important;font-size:12px!important;"
                                }), n.attr({
                                    style: n.attr("style") + "display:block!important;visibility:visible!important;font-size:12px!important;"
                                }))
                            }
                        }
                    },
                    showImage: function(e, i) {
                        var o = this,
                            s = new Image;
                        t(s).on("load", function() {
                            var s = t(".amazingslider-img-box-" + o.id, o.container),
                                a = t(".amazingslider-img-" + o.id, o.container),
                                r = "<div class='amazingslider-img-" + o.id + "' style='display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;overflow:hidden;'>";
                            r += "<img " + o.elemArray[o.curElem][18] + " alt='" + o.elemArray[o.curElem][17] + "' class='amazingsliderimg amazingslider-img-elem amazingslider-img-elem-" + o.id + "' data-originalwidth='" + this.width + "' data-originalheight='" + this.height + "' style='position:absolute;" + (n.isIE678() ? "opacity:inherit;filter:inherit;" : "");
                            var l = o.options.height / o.options.width,
                                h = this.height / this.width;
                            o.prevImageMarginTop = o.curImageMarginTop, o.prevImageMarginLeft = o.curImageMarginLeft, o.prevImageMaxWidth = o.curImageMaxWidth, o.curImageMarginTop = 0, o.curImageMarginLeft = 0, o.curImageMaxWidth = 100, "flexheight" == o.options.scalemode ? (o.options.flexratio = h, o.options.height = o.options.width * h, t(".amazingslider-space-" + o.id, o.container).css({
                                height: o.options.height
                            }), o.container.css({
                                height: "horizontal" == o.options.navdirection && o.options.navmultirows ? "auto" : o.options.height
                            })) : l < h ? "fit" == o.options.scalemode ? (o.curImageMaxWidth = l / h * 100, o.curImageMarginLeft = 50 - o.curImageMaxWidth / 2) : o.curImageMarginTop = -1 * (h - l) * 50 : "fit" == o.options.scalemode ? o.curImageMarginTop = 50 * (l - h) : (o.curImageMarginLeft = (1 / l - 1 / h) * l * 50, o.curImageMaxWidth = 100 - 2 * o.curImageMarginLeft), Math.abs(o.curImageMarginLeft) > 0 ? r += "max-width:" + o.curImageMaxWidth + "%;width:" + o.curImageMaxWidth + "%;height:100%;left:0%;top:0%;margin-left:" + o.curImageMarginLeft + "%" : r += "max-width:" + o.curImageMaxWidth + "%;width:" + o.curImageMaxWidth + "%;height:auto;left:0%;top:0%;margin-top:" + o.curImageMarginTop + "%;", o.options.borderradius > 0 && (r += "border-radius:" + o.options.borderradius + "px;-moz-border-radius:" + o.options.borderradius + "px;-webkit-border-radius:" + o.options.borderradius + "px;"), r += "' src='" + o.elemArray[o.curElem][1] + "' />";
                            var p = t(r += "</div>");
                            a.length > 0 ? a.before(p) : s.append(p);
                            var c = o.firstslide && !o.options.transitiononfirstslide ? "" : o.options.transition;
                            i && i in o.options && (c = i), o.firstslide = !1, o.isAnimating = !0, s.amazingsliderTransition(o.id, a, p, {
                                effect: c,
                                direction: e,
                                duration: o.options.transitionduration,
                                easing: o.options.transitioneasing,
                                imgmarginleft: o.curImageMarginLeft,
                                imgmargintop: o.curImageMarginTop,
                                imgmaxwidth: o.curImageMaxWidth,
                                previmgmarginleft: o.prevImageMarginLeft,
                                previmgmargintop: o.prevImageMarginTop,
                                previmgmaxwidth: o.prevImageMaxWidth,
                                crossfade: o.options.crossfade,
                                fadeoutfadein: o.options.fadeoutfadein,
                                kenburns: o.options.kenburns,
                                fade: o.options.fade,
                                slide: o.options.slide,
                                cssslide: o.options.cssslide,
                                elastic: o.options.elastic,
                                slice: o.options.slice,
                                flip: o.options.flip,
                                flipwithzoom: o.options.flipwithzoom,
                                blinds: o.options.blinds,
                                threed: o.options.threed,
                                threedwithzoom: o.options.threedwithzoom,
                                threedhorizontal: o.options.threedhorizontal,
                                threedhorizontalwithzoom: o.options.threedhorizontalwithzoom,
                                blocks: o.options.blocks,
                                threedtiles: o.options.threedtiles,
                                tiles: o.options.tiles,
                                shuffle: o.options.shuffle,
                                threedflip: o.options.threedflip,
                                threedflipwithzoom: o.options.threedflipwithzoom
                            }, function() {
                                o.isAnimating = !1, o.isPausedOnMouseover ? o.sliderTimeout.unsetstartandpause() : o.sliderTimeout.resume(!0)
                            }, function(t) {
                                o.transitionTimeout = t, !o.isPaused && !o.videoPaused && o.elemArray.length > 1 && o.sliderTimeout.startandpause()
                            });
                            var d = t(".amazingslider-swipe-box-" + o.id, o.container);
                            o.elemArray[o.curElem][4] ? (d.css({
                                cursor: "pointer"
                            }), d.off("click").on("click", function() {
                                if (o.elemArray[o.curElem][8]) t(window).trigger("amazingslider.lightboxclicked", [o.options.sliderid, o.elemArray[o.curElem][0], o.elemArray[o.curElem][1], o.elemArray[o.curElem][2], o.elemArray[o.curElem][4]]), o.isPaused || (o.lightboxPaused = !0, o.isPaused = !0, o.sliderTimeout.pause()), o.html5Lightbox.showItem(o.elemArray[o.curElem][4]);
                                else {
                                    t(window).trigger("amazingslider.linkclicked", [o.options.sliderid, o.elemArray[o.curElem][0], o.elemArray[o.curElem][1], o.elemArray[o.curElem][2], o.elemArray[o.curElem][4]]);
                                    var e = o.elemArray[o.curElem][5] ? o.elemArray[o.curElem][5] : "_self";
                                    window.open(o.elemArray[o.curElem][4], e)
                                }
                            })) : (d.css({
                                cursor: ""
                            }), d.off("click"));
                            var u = o.elemArray[o.curElem][4] && o.elemArray[o.curElem][8] && o.elemArray[o.curElem][16] > 0;
                            t(".amazingslider-lightbox-play-" + o.id, o.container).css({
                                display: u ? "block" : "none"
                            }), t(".amazingslider-play-" + o.id, o.container).css({
                                display: o.elemArray[o.curElem][6].length > 0 ? "block" : "none"
                            })
                        }).on("error", function() {
                            !o.isPaused && !o.videoPaused && o.elemArray.length > 1 && o.sliderTimeout.start()
                        }), s.src = this.elemArray[this.curElem][1]
                    },
                    calcIndex: function(t) {
                        -2 == t ? (this.nextElem = this.curElem, this.curElem = this.prevElem, this.prevElem = this.curElem - 1 < 0 ? this.elemArray.length - 1 : this.curElem - 1) : -1 == t ? (this.prevElem = this.curElem, this.curElem = this.nextElem, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1) : t >= 0 && (this.curElem = t, this.prevElem = this.curElem - 1 < 0 ? this.elemArray.length - 1 : this.curElem - 1, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1)
                    }
                };
                var h = function(t) {
                    for (var e = "", i = t.split(","), o = 0; o < i.length; o++) e += String.fromCharCode(i[o]);
                    return e
                };
                for (var p in e = e || {}) p.toLowerCase() !== p && (e[p.toLowerCase()] = e[p], delete e[p]);
                this.each(function() {
                    if ((!t(this).data("donotinit") || e && e.forceinit) && !t(this).data("inited")) {
                        t(this).data("inited", 1), this.options = t.extend({}, e), this.options.linktitle = (Math.random() > .4 ? h("82,101,115,112,111,110,115,105,118,101,32") : "") + h("106,81,117,101,114,121,32,83,108,105,100,101,114");
                        var o = this;
                        t.each(t(this).data(), function(t, e) {
                            o.options[t.toLowerCase()] = e
                        });
                        for (var n = {}, a = window.location.search.substring(1).split("&"), r = 0; r < a.length; r++) {
                            var p = a[r].split("=");
                            if (p && 2 == p.length) {
                                var c = p[0].toLowerCase(),
                                    d = unescape(p[1]).toLowerCase();
                                n[c] = "true" == d || "false" != d && d
                            }
                        }
                        if (this.options = t.extend(this.options, n), this.options.customeffects = null, this.options.customtexteffect) try {
                            this.options.customeffects = t.parseJSON(this.options.customtexteffect)
                        } catch (t) {}
                        if (t("#amazingslider_customtexteffect_" + this.options.sliderid).length > 0) try {
                            this.options.customeffects = t.parseJSON(t("#amazingslider_customtexteffect_" + this.options.sliderid).text())
                        } catch (t) {}
                        this.options.textformat && "undefined" != typeof AMAZINGSLIDER_TEXT_EFFECT_FORMATS && this.options.textformat in AMAZINGSLIDER_TEXT_EFFECT_FORMATS && (this.options = t.extend({}, AMAZINGSLIDER_TEXT_EFFECT_FORMATS[this.options.textformat], this.options)), this.options.textformat && this.options.customeffects && this.options.textformat in this.options.customeffects && (this.options = t.extend({}, this.options.customeffects[this.options.textformat], this.options)), t(this).data("skin") && "undefined" != typeof AMAZINGSLIDER_SKIN_OPTIONS && t(this).data("skin") in AMAZINGSLIDER_SKIN_OPTIONS && (this.options = t.extend({}, AMAZINGSLIDER_SKIN_OPTIONS[t(this).data("skin")], this.options));
                        this.options = t.extend(!0, {
                            watermarklinkdefault: "https://amazingslider.com",
                            watermarktargetdefault: "_blank",
                            previewmode: !1,
                            preloadprevnext: !0,
                            isresponsive: !0,
                            isfullscreen: !1,
                            windowresizetimeout: 0,
                            initsocial: !0,
                            showsocial: !1,
                            socialmode: "mouseover",
                            socialposition: "position:absolute;top:8px;right:8px;",
                            socialpositionsmallscreen: "position:absolute;top:8px;right:8px;",
                            socialdirection: "horizontal",
                            socialbuttonsize: 32,
                            socialbuttonfontsize: 18,
                            socialrotateeffect: !0,
                            showfacebook: !0,
                            showtwitter: !0,
                            showpinterest: !0,
                            titleusealt: !0,
                            ratioresponsive: !1,
                            ratiomediumscreen: 800,
                            ratiomediumheight: 1.2,
                            ratiosmallscreen: 480,
                            ratiosmallheight: 1.6,
                            autoplay: !1,
                            pauseonmouseover: !0,
                            slideinterval: 5e3,
                            randomplay: !1,
                            loop: 0,
                            forceflash: !1,
                            forceflashonie10: !0,
                            forceflashonie11: !1,
                            nativehtml5controls: !1,
                            nativecontrolsonfirefox: !1,
                            nativecontrolsonie: !1,
                            nativecontrolsoniphone: !0,
                            nativecontrolsonipad: !0,
                            nativecontrolsonandroid: !0,
                            nativecontrolsonfullscreen: !0,
                            nativecontrolsnodownload: !0,
                            lazyloadtags: "lazy-src,lazyload-src,cfsrc,src",
                            addextraattributes: !1,
                            lightboxbarheight: 64,
                            lightboxresponsive: !0,
                            lightboxshowtitle: !0,
                            lightboxshowdescription: !1,
                            lightboxshownavigation: !1,
                            lightboxthumbwidth: 80,
                            lightboxthumbheight: 60,
                            lightboxthumbtopmargin: 12,
                            lightboxthumbbottommargin: 4,
                            lightboxtitlebottomcss: "color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;",
                            lightboxdescriptionbottomcss: "color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                            lightboxfullscreenmode: !1,
                            lightboxcloseonoverlay: !0,
                            lightboxvideohidecontrols: !1,
                            lightboxtitlestyle: "bottom",
                            lightboximagepercentage: 75,
                            lightboxdefaultvideovolume: 1,
                            lightboxoverlaybgcolor: "#000",
                            lightboxoverlayopacity: .9,
                            lightboxbgcolor: "#fff",
                            lightboxtitleprefix: "%NUM / %TOTAL",
                            lightboxtitleinsidecss: "color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;",
                            lightboxdescriptioninsidecss: "color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;",
                            lightboxautoslide: !1,
                            lightboxslideinterval: 5e3,
                            lightboxshowtimer: !0,
                            lightboxtimerposition: "bottom",
                            lightboxtimerheight: 2,
                            lightboxtimercolor: "#dc572e",
                            lightboxtimeropacity: 1,
                            lightboxshowplaybutton: !0,
                            lightboxalwaysshownavarrows: !1,
                            lightboxbordersize: 8,
                            lightboxshowtitleprefix: !0,
                            lightboxborderradius: 0,
                            lightboxnogroup: !1,
                            lightboxshowsocial: !1,
                            lightboxsocialposition: "position:absolute;top:100%;right:0;",
                            lightboxsocialpositionsmallscreen: "position:absolute;top:100%;right:0;left:0;",
                            lightboxsocialdirection: "horizontal",
                            lightboxsocialbuttonsize: 32,
                            lightboxsocialbuttonfontsize: 18,
                            lightboxsocialrotateeffect: !0,
                            lightboxshowfacebook: !0,
                            lightboxshowtwitter: !0,
                            lightboxshowpinterest: !0,
                            scalemode: "fill",
                            skinsfoldername: "skins",
                            showtimer: !0,
                            timerposition: "bottom",
                            timercolor: "#ffffff",
                            timeropacity: .6,
                            timerheight: 2,
                            autoplayvideo: !1,
                            playvideoimage: "play-video.png",
                            playvideoimagewidth: 64,
                            playvideoimageheight: 64,
                            playmutedandinlinewhenautoplay: !1,
                            playvideoonclickthumb: !0,
                            videohidecontrols: !1,
                            videohideplaybutton: !1,
                            defaultvideovolume: 1,
                            enabletouchswipe: !0,
                            border: 6,
                            bordercolor: "#ffffff",
                            borderradius: 0,
                            showshadow: !0,
                            shadowsize: 5,
                            shadowcolor: "#aaaaaa",
                            showbottomshadow: !1,
                            bottomshadowimage: "bottom-shadow.png",
                            bottomshadowimagewidth: 140,
                            bottomshadowimagetop: 90,
                            showbackgroundimage: !1,
                            backgroundimage: "background.png",
                            backgroundimagewidth: 120,
                            backgroundimagetop: -10,
                            arrowstyle: "mouseover",
                            arrowimage: "arrows.png",
                            arrowwidth: 32,
                            arrowheight: 32,
                            arrowmargin: 0,
                            arrowhideonmouseleave: 1e3,
                            arrowtop: 50,
                            showribbon: !1,
                            ribbonimage: "ribbon_topleft-0.png",
                            ribbonposition: "topleft",
                            ribbonimagex: -11,
                            ribbonimagey: -11,
                            showtext: !0,
                            shownumbering: !1,
                            numberingformat: "%NUM/%TOTAL ",
                            shownav: !0,
                            navstyle: "thumbnails",
                            navswitchonmouseover: !1,
                            navdirection: "horizontal",
                            navposition: "bottom",
                            navmargin: 24,
                            navwidth: 64,
                            navheight: 60,
                            navspacing: 8,
                            navmultirows: !1,
                            navrowspacing: 8,
                            navshowpreview: !0,
                            navshowpreviewontouch: !1,
                            navpreviewposition: "top",
                            navpreviewarrowimage: "preview-arrow.png",
                            navpreviewarrowwidth: 20,
                            navpreviewarrowheight: 10,
                            navpreviewwidth: 120,
                            navpreviewheight: 60,
                            navpreviewborder: 8,
                            navpreviewbordercolor: "#ffff00",
                            navimage: "bullets.png",
                            navradius: 0,
                            navcolor: "",
                            navhighlightcolor: "",
                            navfont: "Lucida Console, Arial",
                            navfontcolor: "#666666",
                            navfonthighlightcolor: "#666666",
                            navfontsize: 12,
                            navbuttonshowbgimage: !0,
                            navbuttonbgimage: "navbuttonbgimage.png",
                            navshowbuttons: !1,
                            navbuttonradius: 2,
                            navbuttoncolor: "#999999",
                            navbuttonhighlightcolor: "#333333",
                            navshowplaypause: !0,
                            navshowarrow: !0,
                            navplaypauseimage: "nav-play-pause.png",
                            navarrowimage: "nav-arrows.png",
                            navshowplaypausestandalone: !1,
                            navshowplaypausestandaloneautohide: !1,
                            navshowplaypausestandaloneposition: "bottomright",
                            navshowplaypausestandalonemarginx: 24,
                            navshowplaypausestandalonemarginy: 24,
                            navshowplaypausestandalonewidth: 32,
                            navshowplaypausestandaloneheight: 32,
                            navopacity: .8,
                            navborder: 2,
                            navbordercolor: "#ffffff",
                            navborderhighlightcolor: "",
                            navshowfeaturedarrow: !0,
                            navfeaturedarrowimage: "featured-arrow.png",
                            navfeaturedarrowimagewidth: 20,
                            navfeaturedarrowimageheight: 10,
                            navthumbstyle: "imageonly",
                            navthumbtitleheight: 20,
                            navthumbtitlewidth: 120,
                            navthumbtitlecss: "display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
                            navthumbtitlehovercss: "text-decoration:underline;",
                            navthumbdescriptioncss: "display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
                            navthumbdescriptionhovercss: "",
                            navthumbnavigationstyle: "arrow",
                            navthumbnavigationarrowimage: "carousel-arrows-32-32-0.png",
                            navthumbnavigationarrowimagewidth: 32,
                            navthumbnavigationarrowimageheight: 32,
                            navthumbresponsive: !1,
                            navthumbmediumsize: 800,
                            navthumbmediumwidth: 64,
                            navthumbmediumheight: 64,
                            navthumbmediumtitleheight: 20,
                            navthumbmediumtitlewidth: 120,
                            navthumbsmallsize: 600,
                            navthumbsmallwidth: 48,
                            navthumbsmallheight: 48,
                            navthumbsmalltitleheight: 20,
                            navthumbsmalltitlewidth: 120,
                            navthumbresponsivemode: "samesize",
                            navthumbcolumn: 5,
                            navthumbmediumcolumn: 4,
                            navthumbsmallcolumn: 3,
                            navshowplayvideo: !0,
                            navplayvideoimage: "play-32-32-0.png",
                            forcewidthtoevenforslice: !0,
                            increasewhenforcetoeven: !1,
                            transitiononfirstslide: !1,
                            transition: "slide",
                            transitionduration: 1e3,
                            transitioneasing: "easeOutQuad",
                            slice: {
                                checked: !0,
                                effectdirection: 0,
                                effects: "up,down,updown",
                                slicecount: 10,
                                duration: 1500,
                                easing: "easeOutCubic"
                            },
                            blocks: {
                                columncount: 5,
                                checked: !0,
                                rowcount: 5,
                                effects: "topleft,bottomright,top,bottom,random",
                                duration: 1500,
                                easing: "easeOutCubic"
                            },
                            threedtiles: {
                                rowcount: 3,
                                columncount: 5,
                                checked: !0,
                                effects: "top,bottom,random",
                                duration: 2e3,
                                easing: "ease-out",
                                depth: 20,
                                scale: .8,
                                scaleduration: 400,
                                bgcolor: "#333333",
                                perspective: 1e3,
                                fallback: "tiles",
                                scatter: 4,
                                perspectiveorigin: "bottom"
                            },
                            tiles: {
                                rowcount: 3,
                                columncount: 5,
                                checked: !0,
                                effects: "top,bottom,random",
                                duration: 2e3,
                                easing: "ease-out",
                                scale: .8,
                                scaleduration: 400,
                                bgcolor: "#333333",
                                fallback: "blocks"
                            },
                            slide: {
                                duration: 1e3,
                                easing: "easeOutCubic",
                                checked: !0,
                                effectdirection: 0
                            },
                            cssslide: {
                                duration: 1e3,
                                easing: "ease",
                                checked: !0,
                                effectdirection: 0
                            },
                            elastic: {
                                duration: 1e3,
                                easing: "easeOutElastic",
                                checked: !0,
                                effectdirection: 0
                            },
                            crossfade: {
                                duration: 1e3,
                                easing: "easeOutCubic",
                                checked: !0
                            },
                            fadeoutfadein: {
                                duration: 1e3,
                                easing: "easeOutCubic",
                                checked: !0
                            },
                            kenburns: {
                                fadeduration: 3e3,
                                duration: 5e3,
                                effects: "zoomin,zoomout",
                                scale: 1.1,
                                easing: "easeOutCubic",
                                nextadvancetime: 0,
                                checked: !0
                            },
                            threedhorizontal: {
                                checked: !0,
                                effectdirection: 0,
                                bgcolor: "#222222",
                                perspective: 1e3,
                                slicecount: 1,
                                duration: 1500,
                                scale: 1,
                                scaleduration: 0,
                                easing: "ease",
                                fallback: "slice",
                                scatter: 5,
                                perspectiveorigin: "bottom"
                            },
                            threedhorizontalwithzoom: {
                                checked: !0,
                                effectdirection: 0,
                                bgcolor: "#222222",
                                perspective: 1e3,
                                slicecount: 4,
                                duration: 2200,
                                scale: .8,
                                scaleduration: 400,
                                easing: "ease",
                                fallback: "slice",
                                scatter: 5,
                                perspectiveorigin: "bottom"
                            },
                            fade: {
                                duration: 1e3,
                                easing: "easeOutCubic",
                                checked: !0
                            },
                            shuffle: {
                                duration: 1500,
                                easing: "easeOutCubic",
                                columncount: 5,
                                checked: !0,
                                rowcount: 5
                            },
                            threed: {
                                checked: !0,
                                effectdirection: 0,
                                scale: 1,
                                scaleduration: 0,
                                bgcolor: "#222222",
                                perspective: 1e3,
                                slicecount: 5,
                                duration: 1500,
                                easing: "ease",
                                fallback: "slice",
                                scatter: 5,
                                perspectiveorigin: "right"
                            },
                            threedwithzoom: {
                                checked: !0,
                                effectdirection: 0,
                                bgcolor: "#222222",
                                perspective: 1e3,
                                slicecount: 5,
                                duration: 2500,
                                scale: .8,
                                scaleduration: 400,
                                easing: "ease",
                                fallback: "slice",
                                scatter: 5,
                                perspectiveorigin: "right"
                            },
                            blinds: {
                                duration: 1500,
                                easing: "easeOutCubic",
                                checked: !0,
                                effectdirection: 0,
                                slicecount: 5
                            },
                            threedflip: {
                                duration: 1500,
                                easing: "ease-out",
                                depth: 20,
                                scale: 1,
                                scaleduration: 0,
                                checked: !0,
                                effectdirection: 0,
                                bgcolor: "#222222",
                                perspective: 1e3,
                                slicecount: 5,
                                fallback: "flip",
                                scatter: 4,
                                perspectiveorigin: "bottom"
                            },
                            threedflipwithzoom: {
                                duration: 2e3,
                                easing: "ease-out",
                                depth: 20,
                                scale: .8,
                                scaleduration: 400,
                                checked: !0,
                                effectdirection: 0,
                                bgcolor: "#222222",
                                perspective: 1e3,
                                slicecount: 5,
                                fallback: "flipwithzoom",
                                scatter: 4,
                                perspectiveorigin: "bottom"
                            },
                            flip: {
                                checked: !0,
                                effectdirection: 0,
                                slicecount: 5,
                                duration: 1500,
                                easing: "ease-in",
                                fallback: "slice",
                                scale: 1,
                                scaleduration: 0
                            },
                            flipwithzoom: {
                                checked: !0,
                                effectdirection: 0,
                                slicecount: 5,
                                duration: 2e3,
                                easing: "ease-in",
                                fallback: "slice",
                                scale: .8,
                                scaleduration: 400
                            },
                            versionmark: "AMFree",
                            showwdefault: !0,
                            wstyledefault: "text",
                            wtextdefault: "65,109,97,122,105,110,103,32,83,108,105,100,101,114,32,70,114,101,101,32,86,101,114,115,105,111,110",
                            wimagedefault: "",
                            wpamcss: "position:absolute;top:6px;left:6px;visibility:hidden !important;z-index:-999999 !important;display:none !important;",
                            wtextcssdefault: "font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
                            winkcssdefault: "text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;"
                        }, this.options);
                        var u, m = ["slice", "blocks", "threedtiles", "tiles", "slide", "cssslide", "elastic", "crossfade", "fadeoutfadein", "kenburns", "threedhorizontal", "threedhorizontalwithzoom", "fade", "shuffle", "threed", "threedwithzoom", "blinds", "threedflip", "threedflipwithzoom", "flip", "flipwithzoom"];
                        for (r = 0; r < m.length; r++) {
                            var g = m[r] + "duration";
                            g in this.options && (this.options[m[r]].duration = this.options[g]);
                            var f = m[r] + "fallback";
                            f in this.options && (this.options[m[r]].fallback = this.options[f])
                        }
                        for (var c in this.options)
                            if ("customtransition_" == c.substring(0, 17)) {
                                var v = c.split("_");
                                3 == v.length && m.indexOf(v[1]) >= 0 && (this.options[v[1]][v[2]] = this.options[c])
                            } if (this.textoptions = t.ASUpdateObject({
                                textstyle: "static",
                                textpositionstatic: "bottom",
                                textautohide: !1,
                                textpositionmarginstatic: 0,
                                textleftrightpercentforstatic: "40",
                                textpositiondynamic: "topleft,topright,bottomleft,bottomright,topcenter,bottomcenter",
                                textpositionmarginleft: 24,
                                textpositionmarginright: 24,
                                textpositionmargintop: 24,
                                textpositionmarginbottom: 24,
                                texteffect: "slide",
                                texteffecteasing: "easeOutCubic",
                                texteffectduration: 600,
                                texteffectslidedirection: "left",
                                texteffectslidedistance: 120,
                                texteffectdelay: 500,
                                texteffectseparate: !0,
                                texteffect1: "slide",
                                texteffectslidedirection1: "right",
                                texteffectslidedistance1: 120,
                                texteffecteasing1: "easeOutCubic",
                                texteffectduration1: 600,
                                texteffectdelay1: 1500,
                                texteffect2: "slide",
                                texteffectslidedirection2: "right",
                                texteffectslidedistance2: 120,
                                texteffecteasing2: "easeOutCubic",
                                texteffectduration2: 600,
                                texteffectdelay2: 1500,
                                addgooglefonts: !0,
                                googlefonts: "Inder",
                                textcss: "display:block; padding:12px; text-align:left;",
                                textbgcss: "display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#333333; opacity:0.6; filter:alpha(opacity=60);",
                                titlecss: "display:block; position:relative; font:bold 14px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
                                descriptioncss: "display:block; position:relative; font:12px Anaheim,Arial,Tahoma,Helvetica,sans-serif; color:#fff;",
                                buttoncss: "display:block; position:relative;",
                                texteffectresponsive: !0,
                                texteffectresponsivesize: 600,
                                titlecssresponsive: "font-size:12px;",
                                descriptioncssresponsive: "font-size:12px;",
                                buttoncssresponsive: ""
                            }, this.options), this.options.forcewidthtoevenforslice) {
                            m = this.options.transition.toLowerCase().split(",");
                            t.inArray("slice", m) < 0 && (this.options.forcewidthtoevenforslice = !1)
                        }
                        this.options.shownav || (this.options.navstyle = "none"), "undefined" != typeof amazingslider_previewmode && (this.options.previewmode = amazingslider_previewmode), this.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1), this.options.skinsfoldername.length > 0 ? this.options.skinsfolder = this.options.jsfolder + this.options.skinsfoldername + "/" : this.options.skinsfolder = this.options.jsfolder;
                        var b = "",
                            w = this.options.wtextdefault.split(",");
                        for (r = 0; r < w.length; r++) b += String.fromCharCode(w[r]);
                        this.options.vermk = b;
                        var x = "ammaagziicngsliderh.iclolms";
                        for (r = 1; r <= 5; r++) x = x.slice(0, r) + x.slice(r + 1);
                        for (u = x.length, r = 0; r < 5; r++) x = x.slice(0, u - 9 + r) + x.slice(u - 8 + r);
                        "AMCom" == this.options.versionmark || "AMLite" == this.options.versionmark && this.options.skin && t.inArray(this.options.skin, ["classic", "cube", "content"]) >= 0 || (this.options.showwatermark = !(window.location.href.indexOf(x) >= 0), this.options.watermarkstyle = this.options.wstyledefault, this.options.watermarktext = this.options.vermk, this.options.watermarkimage = this.options.wimagedefault, this.options.watermarklink = this.options.watermarklinkdefault, this.options.watermarktarget = this.options.watermarktargetdefault, this.options.watermarkpositioncss = this.options.wpamcss, this.options.watermarktextcss = this.options.wtextcssdefault, this.options.watermarklinkcss = this.options.winkcssdefault, this.options.watermarktitle = this.options.linktitle), "undefined" != typeof AMAZINGSLIDER_TEXT_EFFECT_FORMATS && (this.options.textformat = AMAZINGSLIDER_TEXT_EFFECT_FORMATS, this.options.customeffects && (this.options.textformat = t.extend({}, this.options.textformat, this.options.customeffects)));
                        var y, k = ["arrowimage", "navimage", "playvideoimage", "navthumbnavigationarrowimage", "navplayvideoimage", "bottomshadowimage", "backgroundimage", "ribbonimage", "navpreviewarrowimage", "navbuttonbgimage", "navplaypauseimage", "navarrowimage", "navfeaturedarrowimage"];
                        for (r = 0; r < k.length; r++) this.options[k[r]] && "http://" != this.options[k[r]].substring(0, 7).toLowerCase() && "https://" != this.options[k[r]].substring(0, 8).toLowerCase() && (this.options[k[r]] = this.options.skinsfolder + this.options[k[r]]);
                        "sliderid" in this.options ? y = this.options.sliderid : (y = l, l++);
                        var z = new i(t(this), this.options, this.textoptions, y);
                        t(this).data("object", z), t(this).data("id", y), s.addObject(z)
                    }
                })
            }
        }(jQuery), jQuery.ASUpdateObject = function(t, e) {
            for (var i in t) i in e && (t[i] = e[i]);
            return t
        }, function(t) {
            t.fn.amazingsliderTransition = function(e, i, o, s, a, r) {
                var l = s.effect,
                    h = s.duration,
                    p = s.easing,
                    c = s.direction,
                    d = null;
                l && (d = (l = l.split(","))[Math.floor(Math.random() * l.length)], d = t.trim(d.toLowerCase())), "threed" != d && "threedwithzoom" != d && "threedtiles" != d && "threedhorizontal" != d && "threedhorizontalwithzoom" != d && "threedflip" != d && "threedflipwithzoom" != d || n.css33dTransformSupported() || (d = s[d].fallback), "flip" != d && "flipwithzoom" != d && "tiles" != d || !n.isIE6789() || (d = s[d].fallback), d && s[d] && ("effectdirection" in s[d] && (1 == s[d].effectdirection ? c = !0 : 2 == s[d].effectdirection && (c = !1)), s[d].duration && (h = s[d].duration), s[d].easing && (p = s[d].easing)), "fade" == d ? (r(), this.css({
                    overflow: "hidden"
                }), o.show(), i && i.length ? i.fadeOut(h, p, function() {
                    i.remove(), a()
                }) : a()) : "fadein" == d ? (r(), this.css({
                    overflow: "hidden"
                }), o.hide(), i.insertBefore(o), o.fadeIn(h, p, function() {
                    i.remove(), a()
                })) : "crossfade" == d ? (r(), this.css({
                    overflow: "hidden"
                }), o.hide(), i && i.length ? i.fadeOut(h / 2, p, function() {
                    o.fadeIn(h / 2, p, function() {
                        i.remove(), a()
                    })
                }) : a()) : "fadeoutfadein" == d ? (r(), this.css({
                    overflow: "hidden"
                }), o.fadeIn(h, p), i && i.length ? i.fadeOut(h, p, function() {
                    i.remove(), a()
                }) : a()) : "kenburns" == d ? (this.css({
                    overflow: "hidden"
                }), this.kenburnsTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth
                }, s[d]), a, r)) : "cssslide" == d ? (r(), this.css({
                    overflow: "hidden"
                }), c ? (o.css({
                    left: "100%"
                }), i.css({
                    transition: "left " + h + "ms " + p
                }), o.css({
                    transition: "left " + h + "ms " + p
                }), setTimeout(function() {
                    o.css({
                        left: "0%"
                    }), i && i.length && i.css({
                        left: "-100%"
                    }), setTimeout(function() {
                        i.remove(), a()
                    }, h + 500)
                }, 50)) : (o.css({
                    left: "-100%"
                }), i.css({
                    transition: "left " + h + "ms " + p
                }), o.css({
                    transition: "left " + h + "ms " + p
                }), setTimeout(function() {
                    o.css({
                        left: "0%"
                    }), i && i.length && i.css({
                        left: "100%"
                    }), setTimeout(function() {
                        i.remove(), a()
                    }, h + 500)
                }, 50))) : "slide" == d || "elastic" == d ? (r(), this.css({
                    overflow: "hidden"
                }), c ? (o.css({
                    left: "100%"
                }), o.animate({
                    left: "0%"
                }, h, p), i && i.length ? i.animate({
                    left: "-100%"
                }, h, p, function() {
                    i.remove(), a()
                }) : a()) : (o.css({
                    left: "-100%"
                }), o.animate({
                    left: "0%"
                }, h, p), i && i.length ? i.animate({
                    left: "100%"
                }, h, p, function() {
                    i.remove(), a()
                }) : a())) : "slice" == d ? (this.css({
                    overflow: "hidden"
                }), this.sliceTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth
                }, s.slice), a, r)) : "flip" == d || "flipwithzoom" == d ? (this.css({
                    overflow: "hidden"
                }), this.flipTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth,
                    previmgmargintop: s.previmgmargintop,
                    previmgmarginleft: s.previmgmarginleft,
                    previmgmaxwidth: s.previmgmaxwidth
                }, s[d]), a, r)) : "blinds" == d ? (this.css({
                    overflow: "hidden"
                }), this.blindsTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth
                }, s.blinds), a, r)) : "threed" == d || "threedwithzoom" == d ? (this.css({
                    overflow: "visible"
                }), this.threedTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth,
                    previmgmargintop: s.previmgmargintop,
                    previmgmarginleft: s.previmgmarginleft,
                    previmgmaxwidth: s.previmgmaxwidth
                }, s[d]), a, r)) : "threedhorizontal" == d || "threedhorizontalwithzoom" == d ? (this.css({
                    overflow: "visible"
                }), this.threedHorizontalTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth,
                    previmgmargintop: s.previmgmargintop,
                    previmgmarginleft: s.previmgmarginleft,
                    previmgmaxwidth: s.previmgmaxwidth
                }, s[d]), a, r)) : "threedflip" == d || "threedflipwithzoom" == d ? (this.css({
                    overflow: "visible"
                }), this.threedFlipTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth,
                    previmgmargintop: s.previmgmargintop,
                    previmgmarginleft: s.previmgmarginleft,
                    previmgmaxwidth: s.previmgmaxwidth
                }, s[d]), a, r)) : "blocks" == d ? (this.css({
                    overflow: "hidden"
                }), this.blocksTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth
                }, s[d]), a, r)) : "threedtiles" == d ? (this.css({
                    overflow: "hidden"
                }), this.threedtilesTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth,
                    previmgmargintop: s.previmgmargintop,
                    previmgmarginleft: s.previmgmarginleft,
                    previmgmaxwidth: s.previmgmaxwidth
                }, s[d]), a, r)) : "tiles" == d ? (this.css({
                    overflow: "hidden"
                }), this.tilesTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth,
                    previmgmargintop: s.previmgmargintop,
                    previmgmarginleft: s.previmgmarginleft,
                    previmgmaxwidth: s.previmgmaxwidth
                }, s[d]), a, r)) : "shuffle" == d ? (this.css({
                    overflow: "visible"
                }), this.shuffleTransition(e, i, o, t.extend({
                    duration: h,
                    easing: p,
                    direction: c,
                    imgmargintop: s.imgmargintop,
                    imgmarginleft: s.imgmarginleft,
                    imgmaxwidth: s.imgmaxwidth
                }, s.shuffle), a, r)) : (r(), o.show(), i.remove(), a())
            }, t.fn.kenburnsTransition = function(e, i, o, s, a, r) {
                var l = this;
                l.off("transitionFinished").on("transitionFinished", function() {
                    l.off("transitionFinished"), i.remove(), a()
                }), o.hide(), i.insertBefore(o);
                var h = Math.floor(4 * Math.random()),
                    p = s.effects.split(","),
                    c = Math.floor(Math.random() * p.length),
                    d = t.trim(p[c]);
                if (n.isIE6789()) {
                    var u = {
                        top: 0,
                        left: 0,
                        bottom: "auto",
                        right: "auto"
                    };
                    switch (h) {
                        case 0:
                            u = {
                                top: 0,
                                left: "auto",
                                bottom: "auto",
                                right: 0
                            };
                            break;
                        case 1:
                            u = {
                                top: "auto",
                                left: 0,
                                bottom: 0,
                                right: "auto"
                            };
                            break;
                        case 2:
                            u = {
                                top: "auto",
                                left: "auto",
                                bottom: 0,
                                right: 0
                            };
                            break;
                        default:
                            u = {
                                top: 0,
                                left: 0,
                                bottom: "auto",
                                right: "auto"
                            }
                    }
                    o.css(u);
                    var m = Math.round(100 * s.scale);
                    "zoomout" == d ? (o.css({
                        width: m + "%",
                        height: m + "%",
                        display: "block",
                        opacity: 0
                    }), o.animate({
                        opacity: 1,
                        width: "100%",
                        height: "100%"
                    }, s.duration, s.easing)) : (o.css({
                        width: "100%",
                        height: "100%",
                        display: "block",
                        opacity: 0
                    }), o.animate({
                        opacity: 1,
                        width: m + "%",
                        height: m + "%"
                    }, s.duration, s.easing))
                } else {
                    o.find("img").css({
                        display: "none"
                    }), o.show();
                    var g = o.width(),
                        f = o.height(),
                        v = o.find("img").data("originalwidth"),
                        b = o.find("img").data("originalheight"),
                        w = 0,
                        x = 0,
                        y = v,
                        k = b,
                        z = f / g;
                    z < b / v ? x = (b - (k = v * z)) / 2 : w = (v - (y = b / z)) / 2;
                    var E = t('<canvas class="amazingslider-img-canvas-' + e + '" width="' + g + '" height="' + f + '" />');
                    o.append(E);
                    var A = o.find("img")[0],
                        T = E[0].getContext("2d"),
                        I = 60 * s.fadeduration / 1e3;
                    I <= 0 && (I = 1);
                    var S = 1 / I,
                        C = 60 * s.duration / 1e3;
                    C <= 0 && (C = 1);
                    var M = (s.scale - 1) / C,
                        $ = 0;
                    if ("zoomout" == d) {
                        m = s.scale;
                        ! function i() {
                            switch (g = o.width(), f = o.height(), t(".amazingslider-img-canvas-" + e, o).attr("width", g).attr("height", f), ($ += S) > 1 && ($ = 1), (m -= M) < 1 && (m = 1), T.globalAlpha = $, h) {
                                case 0:
                                    T.drawImage(A, w, x, y, k, g - m * g, f - m * f, m * g, m * f);
                                    break;
                                case 1:
                                    T.drawImage(A, w, x, y, k, 0, f - m * f, m * g, m * f);
                                    break;
                                case 2:
                                    T.drawImage(A, w, x, y, k, g - m * g, 0, m * g, m * f);
                                    break;
                                default:
                                    T.drawImage(A, w, x, y, k, 0, 0, m * g, m * f)
                            }($ < 1 || m > 1) && requestAnimationFrame(i)
                        }()
                    } else {
                        m = 1;
                        ! function i() {
                            switch (g = o.width(), f = o.height(), t(".amazingslider-img-canvas-" + e, o).attr("width", g).attr("height", f), ($ += S) > 1 && ($ = 1), (m += M) > s.scale && (m = s.scale), T.globalAlpha = $, h) {
                                case 0:
                                    T.drawImage(A, w, x, y, k, g - m * g, f - m * f, m * g, m * f);
                                    break;
                                case 1:
                                    T.drawImage(A, w, x, y, k, 0, f - m * f, m * g, m * f);
                                    break;
                                case 2:
                                    T.drawImage(A, w, x, y, k, g - m * g, 0, m * g, m * f);
                                    break;
                                default:
                                    T.drawImage(A, w, x, y, k, 0, 0, m * g, m * f)
                            }($ < 1 || m < s.scale) && requestAnimationFrame(i)
                        }()
                    }
                }
                r(setTimeout(function() {
                    l.trigger("transitionFinished")
                }, s.duration - s.nextadvancetime))
            }, t.fn.sliceTransition = function(e, i, o, n, s, a) {
                var r, l, h = this,
                    p = h.width() / n.slicecount;
                for (o.hide(), r = 0; r < n.slicecount; r++) {
                    var c = t("<div class='amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:" + r * p + "px;top:0%;width:" + p + "px;height:100%;overflow:hidden;'></div>"),
                        d = t("img", o).clone();
                    Math.abs(n.imgmarginleft) > 0 ? (d.css({
                        "margin-left": n.slicecount * n.imgmarginleft + "%"
                    }), d.css({
                        "max-width": n.slicecount * n.imgmaxwidth + "%",
                        left: "-" + p * r + "px",
                        width: n.slicecount * n.imgmaxwidth + "%"
                    })) : (d.css({
                        "margin-top": n.slicecount * n.imgmargintop + "%"
                    }), d.css({
                        "max-width": 100 * n.slicecount + "%",
                        left: "-" + p * r + "px",
                        width: 100 * n.slicecount + "%"
                    })), c.append(d), h.append(c)
                }
                var u = t(".amazingslider-img-slice-" + e, h);
                n.direction || (u = t(t.makeArray(u).reverse()));
                var m = n.effects.split(","),
                    g = m[Math.floor(Math.random() * m.length)];
                g = t.trim(g.toLowerCase()), h.off("transitionFinished").on("transitionFinished", function() {
                    h.off("transitionFinished"), i.remove(), o.show(), u.remove(), s()
                });
                var f = n.duration / 2,
                    v = n.duration / 2 / n.slicecount;
                l = 0, u.each(function() {
                    var e = t(this);
                    switch (g) {
                        case "up":
                            e.css({
                                top: "",
                                bottom: "0%",
                                height: "0%"
                            });
                            break;
                        case "down":
                            e.css({
                                top: "0%",
                                height: "0%"
                            });
                            break;
                        case "updown":
                            l % 2 == 0 ? e.css({
                                top: "0%",
                                height: "0%"
                            }) : e.css({
                                top: "",
                                bottom: "0%",
                                height: "0%"
                            })
                    }
                    setTimeout(function() {
                        e.animate({
                            height: "100%"
                        }, f, n.easing)
                    }, v * l), l++
                }), a(setTimeout(function() {
                    h.trigger("transitionFinished")
                }, n.duration))
            }, t.fn.blindsTransition = function(e, i, o, n, s, a) {
                var r, l, h = this,
                    p = h.width() / n.slicecount;
                for (o.hide(), r = 0; r < n.slicecount; r++) {
                    var c = t("<div class='amazingslider-img-slice-wrapper-" + e + " ' style='display:block;position:absolute;left:" + r * p + "px;top:0%;width:" + p + "px;height:100%;overflow:hidden;'></div>"),
                        d = t("<div class='amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>"),
                        u = t("img", o).clone();
                    Math.abs(n.imgmarginleft) > 0 ? (u.css({
                        "margin-left": n.slicecount * n.imgmarginleft + "%"
                    }), u.css({
                        "max-width": n.slicecount * n.imgmaxwidth + "%",
                        left: "-" + p * r + "px",
                        width: n.slicecount * n.imgmaxwidth + "%"
                    })) : (u.css({
                        "margin-top": n.slicecount * n.imgmargintop + "%"
                    }), u.css({
                        "max-width": 100 * n.slicecount + "%",
                        left: "-" + p * r + "px",
                        width: 100 * n.slicecount + "%"
                    })), d.append(u), c.append(d), h.append(c)
                }
                var m = t(".amazingslider-img-slice-" + e, h);
                n.direction || (m = t(t.makeArray(m).reverse())), h.off("transitionFinished").on("transitionFinished", function() {
                    h.off("transitionFinished"), i.remove(), o.show(), t(".amazingslider-img-slice-wrapper-" + e, h).remove(), s()
                }), l = 0, m.each(function() {
                    var e, i = t(this);
                    n.direction ? (i.css({
                        left: "-100%"
                    }), e = {
                        left: "0%"
                    }) : (i.css({
                        left: "",
                        right: "-100%"
                    }), e = {
                        right: "0%"
                    }), i.animate(e, n.duration * (l + 1) / n.slicecount, n.easing), l++
                }), a(setTimeout(function() {
                    h.trigger("transitionFinished")
                }, n.duration))
            }, t.fn.threedTransition = function(e, i, o, s, a, r) {
                var l, h, p = this,
                    c = p.width(),
                    d = p.height(),
                    u = d / 2,
                    m = c / s.slicecount,
                    g = t("<div class='amazingslider-img-cube-wrapper-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
                for (p.append(g), g.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        perspective: s.perspective,
                        "perspective-origin": s.perspectiveorigin + " center"
                    })), o.hide(), l = 0; l < s.slicecount; l++) {
                    var f = t("img", o).clone();
                    Math.abs(s.imgmarginleft) > 0 ? (f.css({
                        "margin-left": s.slicecount * s.imgmarginleft + "%"
                    }), f.css({
                        "max-width": s.slicecount * s.imgmaxwidth + "%",
                        left: "-" + m * l + "px",
                        width: s.slicecount * s.imgmaxwidth + "%"
                    })) : (f.css({
                        "margin-top": s.slicecount * s.imgmargintop + "%"
                    }), f.css({
                        "max-width": 100 * s.slicecount + "%",
                        left: "-" + m * l + "px",
                        width: 100 * s.slicecount + "%"
                    }));
                    var v = t("<div class='amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    v.append(f);
                    var b = t("img", i).clone();
                    Math.abs(s.previmgmarginleft) > 0 ? (b.css({
                        "margin-left": s.slicecount * s.previmgmarginleft + "%"
                    }), b.css({
                        "max-width": s.slicecount * s.previmgmaxwidth + "%",
                        left: "-" + m * l + "px",
                        width: s.slicecount * s.previmgmaxwidth + "%"
                    })) : (b.css({
                        "margin-top": s.slicecount * s.previmgmargintop + "%"
                    }), b.css({
                        "max-width": 100 * s.slicecount + "%",
                        left: "-" + m * l + "px",
                        width: 100 * s.slicecount + "%"
                    }));
                    var w = t("<div class='amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    w.append(b);
                    var x = t("<div class='amazingslider-img-slice-left-" + e + " ' style='display:block;position:absolute;left:2px;top:2px;width:" + (d - 1) + "px;height:" + (d - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                        y = t("<div class='amazingslider-img-slice-right-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:" + (d - 1) + "px;height:" + (d - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                        k = t("<div class='amazingslider-img-cube-" + e + " ' style='display:block;position:absolute;left:" + l * m + "px;top:0%;width:" + m + "px;height:100%;'></div>");
                    k.append(x), k.append(y), k.append(v), k.append(w), g.append(k), x.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateY(-90deg) translateZ(" + u + "px)"
                    })), y.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateY(90deg) translateZ(" + (m - u) + "px)"
                    })), w.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "translateZ(" + u + "px)"
                    })), v.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateX(" + (s.direction ? "90" : "-90") + "deg) translateZ(" + u + "px)"
                    }))
                }
                var z = t(".amazingslider-img-cube-" + e, p);
                p.off("transitionFinished").on("transitionFinished", function() {
                    p.off("transitionFinished"), i.remove(), o.show(), setTimeout(function() {
                        g.remove()
                    }, 100), a()
                });
                var E = 1 == s.scale ? 0 : 12,
                    A = 1 == s.scale ? 0 : s.scaleduration - E;
                A < 0 && (A = 0);
                var T = 1 == s.scale ? s.duration : s.duration - 2 * A;
                T < 0 && (E = 0, A = 0, T = s.duration);
                var I = T / 2 / s.slicecount,
                    S = T / 2;
                z.each(function() {
                    t(this).css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden"
                    })), t(this).css(n.applyBrowserStyles({
                        "transition-property": "transform"
                    }, !0)), t(this).css(n.applyBrowserStyles({
                        transform: "translateZ(-" + u + "px)"
                    }))
                }), i.hide(), A > 0 && (z.css(n.applyBrowserStyles({
                    "transition-timing-function": s.easing,
                    "transition-duration": A + "ms"
                })), setTimeout(function() {
                    z.css(n.applyBrowserStyles({
                        transform: "scale(" + s.scale + ") translateZ(-" + u + "px)"
                    }))
                }, E)), h = 0, z.each(function() {
                    var e = t(this),
                        i = (s.slicecount - 1) / 2,
                        o = Math.round((h - i) * s.scatter * c / 100);
                    setTimeout(function() {
                        A > 0 ? e.css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": S + "ms",
                            transform: "scale(" + s.scale + ") translateZ(-" + u + "px) rotateX(" + (s.direction ? "-89.99" : "89.99") + "deg)"
                        })) : e.css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": S + "ms",
                            transform: "translateZ(-" + u + "px) rotateX(" + (s.direction ? "-89.99" : "89.99") + "deg)"
                        })), e.animate({
                            left: "+=" + o + "px"
                        }, S / 2 - 50, function() {
                            e.animate({
                                left: "-=" + o + "px"
                            }, S / 2 - 50)
                        })
                    }, A + E + I * h + 100), h++
                }), A > 0 && setTimeout(function() {
                    z.css(n.applyBrowserStyles({
                        "transition-duration": A + "ms",
                        transform: "scale(1) translateZ(-" + u + "px) rotateX(" + (s.direction ? "-89.99" : "89.99") + "deg)"
                    }))
                }, s.duration - A - E), r(setTimeout(function() {
                    p.trigger("transitionFinished")
                }, s.duration))
            }, t.fn.threedHorizontalTransition = function(e, i, o, s, a, r) {
                var l, h, p = this,
                    c = p.width(),
                    d = p.height(),
                    u = c / 2,
                    m = d / s.slicecount,
                    g = t("<div class='amazingslider-img-cube-wrapper-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
                for (p.append(g), g.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        perspective: s.perspective,
                        "perspective-origin": "center " + s.perspectiveorigin
                    })), o.hide(), l = 0; l < s.slicecount; l++) {
                    var f = t("img", o).clone();
                    Math.abs(s.imgmarginleft) > 0 ? (f.css({
                        "margin-left": s.imgmarginleft + "%",
                        height: "auto"
                    }), f.css({
                        "max-width": s.imgmaxwidth + "%",
                        top: "-" + m * l + "px",
                        width: s.imgmaxwidth + "%"
                    })) : (f.css({
                        "margin-top": s.imgmargintop + "%"
                    }), f.css({
                        "max-width": "100%",
                        top: "-" + m * l + "px",
                        width: "100%"
                    }));
                    var v = t("<div class='amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    v.append(f);
                    var b = t("img", i).clone();
                    Math.abs(s.previmgmarginleft) > 0 ? (b.css({
                        "margin-left": s.previmgmarginleft + "%",
                        height: "auto"
                    }), b.css({
                        "max-width": s.previmgmaxwidth + "%",
                        top: "-" + m * l + "px",
                        width: s.previmgmaxwidth + "%"
                    })) : (b.css({
                        "margin-top": s.previmgmargintop + "%"
                    }), b.css({
                        "max-width": "100%",
                        top: "-" + m * l + "px",
                        width: "100%"
                    }));
                    var w = t("<div class='amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    w.append(b);
                    var x = t("<div class='amazingslider-img-slice-left-" + e + " ' style='display:block;position:absolute;left:2px;top:2px;width:" + (c - 1) + "px;height:" + (c - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                        y = t("<div class='amazingslider-img-slice-right-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:" + (c - 1) + "px;height:" + (c - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                        k = t("<div class='amazingslider-img-cube-" + e + " ' style='display:block;position:absolute;left:0%;top:" + l * m + "px;width:100%;height:" + m + "px;'></div>");
                    k.append(x), k.append(y), k.append(v), k.append(w), g.append(k), x.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateX(90deg) translateZ(" + u + "px)"
                    })), y.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateX(-90deg) translateZ(" + (m - u) + "px)"
                    })), w.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "translateZ(" + u + "px)"
                    })), v.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateY(" + (s.direction ? "-90" : "90") + "deg) translateZ(" + u + "px)"
                    }))
                }
                var z = t(".amazingslider-img-cube-" + e, p);
                p.off("transitionFinished").on("transitionFinished", function() {
                    p.off("transitionFinished"), i.remove(), o.show(), setTimeout(function() {
                        g.remove()
                    }, 100), a()
                });
                var E = 1 == s.scale ? 0 : 12,
                    A = 1 == s.scale ? 0 : s.scaleduration - E;
                A < 0 && (A = 0);
                var T = 1 == s.scale ? s.duration : s.duration - 2 * A;
                T < 0 && (E = 0, A = 0, T = s.duration);
                var I = T / 2 / s.slicecount,
                    S = T / 2;
                z.each(function() {
                    t(this).css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden"
                    })), t(this).css(n.applyBrowserStyles({
                        "transition-property": "transform"
                    }, !0)), t(this).css(n.applyBrowserStyles({
                        transform: "translateZ(-" + u + "px)"
                    }))
                }), i.hide(), A > 0 && (z.css(n.applyBrowserStyles({
                    "transition-timing-function": s.easing,
                    "transition-duration": A + "ms"
                })), setTimeout(function() {
                    z.css(n.applyBrowserStyles({
                        transform: "scale(" + s.scale + ") translateZ(-" + u + "px)"
                    }))
                }, E)), h = 0, z.each(function() {
                    var e = t(this),
                        i = (s.slicecount - 1) / 2,
                        o = Math.round((h - i) * s.scatter * d / 100);
                    setTimeout(function() {
                        A > 0 ? e.css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": S + "ms",
                            transform: "scale(" + s.scale + ") translateZ(-" + u + "px) rotateY(" + (s.direction ? "89.99" : "-89.99") + "deg)"
                        })) : e.css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": S + "ms",
                            transform: "translateZ(-" + u + "px) rotateY(" + (s.direction ? "89.99" : "-89.99") + "deg)"
                        })), e.animate({
                            top: "+=" + o + "px"
                        }, S / 2 - 50, function() {
                            e.animate({
                                top: "-=" + o + "px"
                            }, S / 2 - 50)
                        })
                    }, A + E + I * h + 100), h++
                }), A > 0 && setTimeout(function() {
                    z.css(n.applyBrowserStyles({
                        "transition-duration": A + "ms",
                        transform: "scale(1) translateZ(-" + u + "px) rotateY(" + (s.direction ? "89.99" : "-89.99") + "deg)"
                    }))
                }, s.duration - A - E), r(setTimeout(function() {
                    p.trigger("transitionFinished")
                }, s.duration))
            }, t.fn.threedFlipTransition = function(e, i, o, s, a, r) {
                var l, h, p = this,
                    c = p.width(),
                    d = p.height(),
                    u = c / s.slicecount,
                    m = t("<div class='amazingslider-img-cube-wrapper-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
                for (p.append(m), m.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        perspective: s.perspective,
                        "perspective-origin": s.perspectiveorigin + " center"
                    })), o.hide(), l = 0; l < s.slicecount; l++) {
                    var g = t("img", o).clone();
                    Math.abs(s.imgmarginleft) > 0 ? (g.css({
                        "margin-left": s.slicecount * s.imgmarginleft + "%"
                    }), g.css({
                        "max-width": s.slicecount * s.imgmaxwidth + "%",
                        left: "-" + u * l + "px",
                        width: s.slicecount * s.imgmaxwidth + "%"
                    })) : (g.css({
                        "margin-top": s.slicecount * s.imgmargintop + "%"
                    }), g.css({
                        "max-width": 100 * s.slicecount + "%",
                        left: "-" + u * l + "px",
                        width: 100 * s.slicecount + "%"
                    }));
                    var f = t("<div class='amazingslider-img-slice-next amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    f.append(g);
                    var v = t("img", i).clone();
                    Math.abs(s.previmgmarginleft) > 0 ? (v.css({
                        "margin-left": s.slicecount * s.previmgmarginleft + "%"
                    }), v.css({
                        "max-width": s.slicecount * s.previmgmaxwidth + "%",
                        left: "-" + u * l + "px",
                        width: s.slicecount * s.previmgmaxwidth + "%"
                    })) : (v.css({
                        "margin-top": s.slicecount * s.previmgmargintop + "%"
                    }), v.css({
                        "max-width": 100 * s.slicecount + "%",
                        left: "-" + u * l + "px",
                        width: 100 * s.slicecount + "%"
                    }));
                    var b = t("<div class='amazingslider-img-slice-current amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    b.append(v);
                    var w = t("<div class='amazingslider-img-slice-left-" + e + " ' style='display:block;position:absolute;left:2px;top:2px;width:" + s.depth + "px;height:" + (d - 2) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                        x = t("<div class='amazingslider-img-slice-right-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:" + s.depth + "px;height:" + d + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                        y = t("<div class='amazingslider-img-cube-" + e + " ' style='display:block;position:absolute;left:" + l * u + "px;top:0%;width:" + u + "px;height:100%;'></div>");
                    y.append(w), y.append(x), y.append(f), y.append(b), m.append(y), w.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateY(-90deg) translateZ(" + s.depth / 2 + "px)"
                    })), x.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateY(90deg) translateZ(" + (u - s.depth / 2) + "px)"
                    })), f.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "rotateY(-180deg) translateZ(" + s.depth / 2 + "px)"
                    })), b.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        transform: "translateZ(" + s.depth / 2 + "px)"
                    }))
                }
                var k = t(".amazingslider-img-cube-" + e, p);
                p.off("transitionFinished").on("transitionFinished", function() {
                    p.off("transitionFinished"), i.remove(), o.show(), setTimeout(function() {
                        m.remove()
                    }, 100), a()
                });
                var z = 1 == s.scale ? 0 : 12,
                    E = 1 == s.scale ? 0 : s.scaleduration - z;
                E < 0 && (E = 0);
                var A = 1 == s.scale ? s.duration : s.duration - 2 * E;
                A < 0 && (z = 0, E = 0, A = s.duration);
                var T = A / 2 / s.slicecount,
                    I = A / 2;
                k.each(function() {
                    t(this).css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden"
                    })), t(this).css(n.applyBrowserStyles({
                        "transition-property": "transform"
                    }, !0)), t(this).css(n.applyBrowserStyles({
                        transform: "translateZ(-" + s.depth / 2 + "px)"
                    }))
                }), i.hide(), h = 0, E > 0 && (k.css(n.applyBrowserStyles({
                    "transition-timing-function": s.easing,
                    "transition-duration": E + "ms"
                })), setTimeout(function() {
                    k.css(n.applyBrowserStyles({
                        transform: "scale(" + s.scale + ") translateZ(-" + s.depth / 2 + "px)"
                    }))
                }, z)), k.each(function() {
                    var e = t(this),
                        i = (s.slicecount - 1) / 2,
                        o = Math.round((h - i) * s.scatter * c / 100);
                    setTimeout(function() {
                        e.css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": I + "ms",
                            transform: "scale(" + s.scale + ") translateZ(-" + s.depth / 2 + "px) rotateY(" + (s.direction ? E > 0 ? "-180.5" : "-180" : E > 0 ? "180.5" : "180") + "deg)"
                        })), e.animate({
                            left: "+=" + o + "px"
                        }, I / 2 - 50, function() {
                            e.animate({
                                left: "-=" + o + "px"
                            }, I / 2 - 50)
                        })
                    }, E + z + T * h + 100), h++
                }), E > 0 && setTimeout(function() {
                    k.css(n.applyBrowserStyles({
                        "transition-duration": E + "ms",
                        transform: "scale(1) translateZ(-" + s.depth / 2 + "px) rotateY(" + (s.direction ? "-180" : "180") + "deg)"
                    }))
                }, s.duration - E - z), r(setTimeout(function() {
                    p.trigger("transitionFinished")
                }, s.duration))
            }, t.fn.threedtilesTransition = function(e, i, o, s, a, r) {
                var l, h, p, c = this,
                    d = c.width(),
                    u = c.height(),
                    m = d / s.columncount,
                    g = u / s.rowcount,
                    f = s.effects.split(","),
                    v = f[Math.floor(Math.random() * f.length)];
                v = t.trim(v.toLowerCase());
                var b = t("<div class='amazingslider-img-cube-wrapper-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
                for (c.append(b), b.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        perspective: s.perspective,
                        "perspective-origin": s.perspectiveorigin + " center"
                    })), o.hide(), l = 0; l < s.rowcount; l++)
                    for (h = 0; h < s.columncount; h++) {
                        var w = t("img", o).clone();
                        Math.abs(s.imgmarginleft) > 0 ? (w.css({
                            "margin-left": s.columncount * s.imgmarginleft + "%"
                        }), w.css({
                            "max-width": s.columncount * s.imgmaxwidth + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: s.columncount * s.imgmaxwidth + "%",
                            height: "auto"
                        })) : (w.css({
                            "margin-top": s.columncount * s.imgmargintop + "%"
                        }), w.css({
                            "max-width": 100 * s.columncount + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: 100 * s.columncount + "%"
                        }));
                        var x = t("<div class='amazingslider-img-block-next amazingslider-img-block-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                        x.append(w);
                        var y = t("img", i).clone();
                        Math.abs(s.previmgmarginleft) > 0 ? (y.css({
                            "margin-left": s.columncount * s.previmgmarginleft + "%"
                        }), y.css({
                            "max-width": s.columncount * s.previmgmaxwidth + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: s.columncount * s.previmgmaxwidth + "%",
                            height: "auto"
                        })) : (y.css({
                            "margin-top": s.columncount * s.previmgmargintop + "%"
                        }), y.css({
                            "max-width": 100 * s.columncount + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: 100 * s.columncount + "%"
                        }));
                        var k = t("<div class='amazingslider-img-block-current amazingslider-img-block-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                        k.append(y);
                        var z = t("<div class='amazingslider-img-block-left-" + e + " ' style='display:block;position:absolute;left:2px;top:2px;width:" + (s.depth - 2) + "px;height:" + (g - 2) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                            E = t("<div class='amazingslider-img-block-right-" + e + " ' style='display:block;position:absolute;left:0px;top:0px;width:" + s.depth + "px;height:" + g + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                            A = t("<div class='amazingslider-img-block-bottom-" + e + " ' style='display:block;position:absolute;left:2px;top:0px;width:" + (m - 2) + "px;height:" + (s.depth - 1) + "px;overflow:hidden;outline:2px solid transparent;background-color:" + s.bgcolor + ";'></div>"),
                            T = t("<div class='amazingslider-img-cube-" + e + " ' style='display:block;position:absolute;left:" + h * m + "px;top:" + l * g + "px;width:" + m + "px;height:" + g + "px;'></div>");
                        T.append(z), T.append(E), T.append(A), T.append(x), T.append(k), b.append(T), z.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden",
                            transform: "rotateY(-90deg) translateZ(" + s.depth / 2 + "px)"
                        })), E.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden",
                            transform: "rotateY(90deg) translateZ(" + (m - s.depth / 2) + "px)"
                        })), A.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden",
                            transform: "rotateX(-90deg) translateZ(" + (g - s.depth / 2) + "px)"
                        })), x.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden",
                            transform: "rotateY(-180deg) translateZ(" + s.depth / 2 + "px)"
                        })), k.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden",
                            transform: "translateZ(" + s.depth / 2 + "px)"
                        }))
                    }
                var I = t(".amazingslider-img-cube-" + e, c);
                c.off("transitionFinished").on("transitionFinished", function() {
                    c.off("transitionFinished"), i.remove(), o.show(), b.remove(), a()
                }), "bottom" == v ? I = t(t.makeArray(I).reverse()) : "random" == v && (I = t(t.makeArray(I).sort(function() {
                    return .5 - Math.random()
                })));
                var S = 1 == s.scale ? 0 : 12,
                    C = 1 == s.scale ? 0 : s.scaleduration - S;
                C < 0 && (C = 0);
                var M = 1 == s.scale ? s.duration : s.duration - 2 * C;
                M < 0 && (S = 0, C = 0, M = s.duration);
                var $ = M / 2 / (s.rowcount * s.columncount),
                    O = M / 2;
                I.each(function() {
                    t(this).css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden"
                    })), t(this).css(n.applyBrowserStyles({
                        "transition-property": "transform"
                    }, !0)), t(this).css(n.applyBrowserStyles({
                        transform: "translateZ(-" + s.depth / 2 + "px)"
                    }))
                }), i.hide(), p = 0, C > 0 && (I.css(n.applyBrowserStyles({
                    "transition-timing-function": s.easing,
                    "transition-duration": C + "ms"
                })), setTimeout(function() {
                    I.css(n.applyBrowserStyles({
                        transform: "scale(" + s.scale + ") translateZ(-" + s.depth / 2 + "px)"
                    }))
                }, S)), I.each(function() {
                    var e = t(this);
                    setTimeout(function() {
                        e.css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": O + "ms",
                            transform: "scale(" + s.scale + ") translateZ(-" + s.depth / 2 + "px) rotateY(" + (s.direction ? C > 0 ? "-180.5" : "-180" : C > 0 ? "180.5" : "180") + "deg)"
                        }))
                    }, C + S + $ * p + 100), p++
                }), C > 0 && setTimeout(function() {
                    I.css(n.applyBrowserStyles({
                        "transition-duration": C + "ms",
                        transform: "scale(1) translateZ(-" + s.depth / 2 + "px) rotateY(" + (s.direction ? "-180" : "180") + "deg)"
                    }))
                }, s.duration - C - S), r(setTimeout(function() {
                    c.trigger("transitionFinished")
                }, s.duration))
            }, t.fn.tilesTransition = function(e, i, o, s, a, r) {
                var l, h, p, c = this,
                    d = c.width(),
                    u = c.height(),
                    m = d / s.columncount,
                    g = u / s.rowcount,
                    f = s.effects.split(","),
                    v = f[Math.floor(Math.random() * f.length)];
                v = t.trim(v.toLowerCase());
                var b = t("<div class='amazingslider-img-cube-wrapper-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
                for (c.append(b), b.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d"
                    })), o.hide(), l = 0; l < s.rowcount; l++)
                    for (h = 0; h < s.columncount; h++) {
                        var w = t("img", o).clone();
                        Math.abs(s.imgmarginleft) > 0 ? (w.css({
                            "margin-left": s.columncount * s.imgmarginleft + "%"
                        }), w.css({
                            "max-width": s.columncount * s.imgmaxwidth + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: s.columncount * s.imgmaxwidth + "%",
                            height: "auto"
                        })) : (w.css({
                            "margin-top": s.columncount * s.imgmargintop + "%"
                        }), w.css({
                            "max-width": 100 * s.columncount + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: 100 * s.columncount + "%"
                        }));
                        var x = t("<div class='amazingslider-img-block-next amazingslider-img-block-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                        x.append(w);
                        var y = t("img", i).clone();
                        Math.abs(s.previmgmarginleft) > 0 ? (y.css({
                            "margin-left": s.columncount * s.previmgmarginleft + "%"
                        }), y.css({
                            "max-width": s.columncount * s.previmgmaxwidth + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: s.columncount * s.previmgmaxwidth + "%",
                            height: "auto"
                        })) : (y.css({
                            "margin-top": s.columncount * s.previmgmargintop + "%"
                        }), y.css({
                            "max-width": 100 * s.columncount + "%",
                            left: "-" + m * h + "px",
                            top: "-" + g * l + "px",
                            width: 100 * s.columncount + "%"
                        }));
                        var k = t("<div class='amazingslider-img-block-current amazingslider-img-block-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>");
                        k.append(y);
                        var z = t("<div class='amazingslider-img-cube-" + e + " ' style='display:block;position:absolute;left:" + h * m + "px;top:" + l * g + "px;width:" + m + "px;height:" + g + "px;'></div>");
                        z.append(x), z.append(k), b.append(z), x.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden"
                        })), x.css(n.applyBrowserStyles({
                            "transition-property": "transform"
                        }, !0)), x.css(n.applyBrowserStyles({
                            transform: "rotateY(180deg)"
                        })), k.css(n.applyBrowserStyles({
                            "transform-style": "preserve-3d",
                            "backface-visibility": "hidden"
                        })), k.css(n.applyBrowserStyles({
                            "transition-property": "transform"
                        }, !0)), k.css(n.applyBrowserStyles({
                            transform: "rotateY(0deg)"
                        }))
                    }
                var E = t(".amazingslider-img-cube-" + e, c);
                c.off("transitionFinished").on("transitionFinished", function() {
                    c.off("transitionFinished"), i.remove(), o.show(), b.remove(), a()
                }), "bottom" == v ? E = t(t.makeArray(E).reverse()) : "random" == v && (E = t(t.makeArray(E).sort(function() {
                    return .5 - Math.random()
                })));
                var A = 1 == s.scale ? 0 : 12,
                    T = 1 == s.scale ? 0 : s.scaleduration - A;
                T < 0 && (T = 0);
                var I = 1 == s.scale ? s.duration : s.duration - 2 * T;
                I < 0 && (A = 0, T = 0, I = s.duration);
                var S = I / 2 / (s.rowcount * s.columncount),
                    C = I / 2;
                i.hide(), p = 0, T > 0 && (E.css(n.applyBrowserStyles({
                    "transform-style": "preserve-3d",
                    "backface-visibility": "hidden"
                })), E.css(n.applyBrowserStyles({
                    "transition-property": "transform"
                }, !0)), E.css(n.applyBrowserStyles({
                    "transition-timing-function": s.easing,
                    "transition-duration": T + "ms"
                })), setTimeout(function() {
                    E.css(n.applyBrowserStyles({
                        transform: "scale(" + s.scale + ")"
                    }))
                }, A)), E.each(function() {
                    var e = t(this);
                    setTimeout(function() {
                        e.find(".amazingslider-img-block-next").css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": C + "ms",
                            transform: "rotateY(0deg)"
                        })), e.find(".amazingslider-img-block-current").css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": C + "ms",
                            transform: "rotateY(180deg)"
                        }))
                    }, T + A + S * p + 100), p++
                }), T > 0 && setTimeout(function() {
                    E.css(n.applyBrowserStyles({
                        "transition-duration": T + "ms",
                        transform: "scale(1)"
                    }))
                }, s.duration - T - A), r(setTimeout(function() {
                    c.trigger("transitionFinished")
                }, s.duration))
            }, t.fn.flipTransition = function(e, i, o, s, a, r) {
                var l, h, p = this,
                    c = p.width() / s.slicecount,
                    d = t("<div class='amazingslider-img-cube-wrapper-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;'></div>");
                for (p.append(d), o.hide(), l = 0; l < s.slicecount; l++) {
                    var u = t("img", o).clone();
                    Math.abs(s.imgmarginleft) > 0 ? (u.css({
                        "margin-left": s.slicecount * s.imgmarginleft + "%"
                    }), u.css({
                        "max-width": s.slicecount * s.imgmaxwidth + "%",
                        left: "-" + c * l + "px",
                        width: s.slicecount * s.imgmaxwidth + "%"
                    })) : (u.css({
                        "margin-top": s.slicecount * s.imgmargintop + "%"
                    }), u.css({
                        "max-width": 100 * s.slicecount + "%",
                        left: "-" + c * l + "px",
                        width: 100 * s.slicecount + "%"
                    }));
                    var m = t("<div class='amazingslider-img-slice-next amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    m.append(u);
                    var g = t("img", i).clone();
                    Math.abs(s.previmgmarginleft) > 0 ? (g.css({
                        "margin-left": s.slicecount * s.previmgmarginleft + "%"
                    }), g.css({
                        "max-width": s.slicecount * s.previmgmaxwidth + "%",
                        left: "-" + c * l + "px",
                        width: s.slicecount * s.previmgmaxwidth + "%"
                    })) : (g.css({
                        "margin-top": s.slicecount * s.previmgmargintop + "%"
                    }), g.css({
                        "max-width": 100 * s.slicecount + "%",
                        left: "-" + c * l + "px",
                        width: 100 * s.slicecount + "%"
                    }));
                    var f = t("<div class='amazingslider-img-slice-current amazingslider-img-slice-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;outline:1px solid transparent;background-color:" + s.bgcolor + ";'></div>");
                    f.append(g);
                    var v = t("<div class='amazingslider-img-cube-" + e + " ' style='display:block;position:absolute;left:" + l * c + "px;top:0%;width:" + c + "px;height:100%;'></div>");
                    v.append(m), v.append(f), d.append(v), m.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden"
                    })), m.css(n.applyBrowserStyles({
                        "transition-property": "transform"
                    }, !0)), m.css(n.applyBrowserStyles({
                        transform: "rotateY(180deg)"
                    })), f.css(n.applyBrowserStyles({
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden"
                    })), f.css(n.applyBrowserStyles({
                        "transition-property": "transform"
                    }, !0)), f.css(n.applyBrowserStyles({
                        transform: "rotateY(0deg)"
                    }))
                }
                var b = t(".amazingslider-img-cube-" + e, p);
                p.off("transitionFinished").on("transitionFinished", function() {
                    p.off("transitionFinished"), i.remove(), o.show(), setTimeout(function() {
                        d.remove()
                    }, 100), a()
                });
                var w = 1 == s.scale ? 0 : 12,
                    x = 1 == s.scale ? 0 : s.scaleduration - w;
                x < 0 && (x = 0);
                var y = 1 == s.scale ? s.duration : s.duration - 2 * x;
                y < 0 && (w = 0, x = 0, y = s.duration);
                var k = y / 2 / s.slicecount,
                    z = y / 2;
                i.hide(), h = 0, x > 0 && (b.css(n.applyBrowserStyles({
                    "transform-style": "preserve-3d",
                    "backface-visibility": "hidden"
                })), b.css(n.applyBrowserStyles({
                    "transition-property": "transform"
                }, !0)), b.css(n.applyBrowserStyles({
                    "transition-timing-function": s.easing,
                    "transition-duration": x + "ms"
                })), setTimeout(function() {
                    b.css(n.applyBrowserStyles({
                        transform: "scale(" + s.scale + ")"
                    }))
                }, w)), b.each(function() {
                    var e = t(this);
                    setTimeout(function() {
                        e.find(".amazingslider-img-slice-next").css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": z + "ms",
                            transform: "rotateY(0deg)"
                        })), e.find(".amazingslider-img-slice-current").css(n.applyBrowserStyles({
                            "transition-timing-function": s.easing,
                            "transition-duration": z + "ms",
                            transform: "rotateY(180deg)"
                        }))
                    }, x + w + k * h + 100), h++
                }), x > 0 && setTimeout(function() {
                    b.css(n.applyBrowserStyles({
                        "transition-duration": x + "ms",
                        transform: "scale(1)"
                    }))
                }, s.duration - x - w), r(setTimeout(function() {
                    p.trigger("transitionFinished")
                }, s.duration))
            }, t.fn.blocksTransition = function(e, i, o, n, s, a) {
                var r, l, h, p = this,
                    c = p.width(),
                    d = p.height(),
                    u = c / n.columncount,
                    m = d / n.rowcount,
                    g = n.effects.split(","),
                    f = g[Math.floor(Math.random() * g.length)];
                for (f = t.trim(f.toLowerCase()), o.hide(), r = 0; r < n.rowcount; r++)
                    for (l = 0; l < n.columncount; l++) {
                        var v = t("<div class='amazingslider-img-block-wrapper-" + e + " ' style='display:block;position:absolute;left:" + l * u + "px;top:" + r * m + "px;width:" + u + "px;height:" + m + "px;overflow:hidden;'></div>"),
                            b = t("<div class='amazingslider-img-block-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>"),
                            w = t("img", o).clone();
                        Math.abs(n.imgmarginleft) > 0 ? (w.css({
                            "margin-left": n.columncount * n.imgmarginleft + "%"
                        }), w.css({
                            "max-width": n.columncount * n.imgmaxwidth + "%",
                            left: "-" + u * l + "px",
                            top: "-" + m * r + "px",
                            width: n.columncount * n.imgmaxwidth + "%",
                            height: "auto"
                        })) : (w.css({
                            "margin-top": n.columncount * n.imgmargintop + "%"
                        }), w.css({
                            "max-width": 100 * n.columncount + "%",
                            left: "-" + u * l + "px",
                            top: "-" + m * r + "px",
                            width: 100 * n.columncount + "%"
                        })), b.append(w), v.append(b), p.append(v)
                    }
                var x = t(".amazingslider-img-block-" + e, p);
                p.off("transitionFinished").on("transitionFinished", function() {
                    p.off("transitionFinished"), i.remove(), o.show(), t(".amazingslider-img-block-wrapper-" + e, p).remove(), s()
                }), "bottomright" == f || "bottom" == f ? x = t(t.makeArray(x).reverse()) : "random" == f && (x = t(t.makeArray(x).sort(function() {
                    return .5 - Math.random()
                }))), h = 0, x.each(function() {
                    var e, i, o = t(this);
                    switch (e = Math.floor(h / n.columncount), i = h % n.columncount, o.hide(), f) {
                        case "topleft":
                        case "bottomright":
                            o.delay(n.duration * (e + i) / (n.rowcount + n.columncount)).fadeIn();
                            break;
                        case "top":
                        case "bottom":
                        case "random":
                            o.delay(n.duration * h / (n.rowcount * n.columncount)).fadeIn()
                    }
                    h++
                }), a(setTimeout(function() {
                    p.trigger("transitionFinished")
                }, n.duration))
            }, t.fn.shuffleTransition = function(e, i, o, n, s, a) {
                var r, l, h, p = this,
                    c = p.width(),
                    d = p.height(),
                    u = c / n.columncount,
                    m = d / n.rowcount;
                for (r = 0; r < n.rowcount; r++)
                    for (l = 0; l < n.columncount; l++) {
                        var g = t("<div class='amazingslider-img-block-wrapper-next-" + e + " ' style='display:block;position:absolute;left:" + l * u + "px;top:" + r * m + "px;width:" + u + "px;height:" + m + "px;overflow:hidden;'></div>"),
                            f = t("<div class='amazingslider-img-block-next-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>"),
                            v = t("img", o).clone();
                        Math.abs(n.imgmarginleft) > 0 ? (v.css({
                            "margin-left": n.columncount * n.imgmarginleft + "%"
                        }), v.css({
                            "max-width": n.columncount * n.imgmaxwidth + "%",
                            left: "-" + u * l + "px",
                            top: "-" + m * r + "px",
                            width: n.columncount * n.imgmaxwidth + "%",
                            height: "auto"
                        })) : (v.css({
                            "margin-top": n.columncount * n.imgmargintop + "%"
                        }), v.css({
                            "max-width": 100 * n.columncount + "%",
                            left: "-" + u * l + "px",
                            top: "-" + m * r + "px",
                            width: 100 * n.columncount + "%"
                        })), f.append(v), g.append(f), p.append(g);
                        var b = t("<div class='amazingslider-img-block-wrapper-prev-" + e + " ' style='display:block;position:absolute;left:" + l * u + "px;top:" + r * m + "px;width:" + u + "px;height:" + m + "px;overflow:hidden;'></div>"),
                            w = t("<div class='amazingslider-img-block-prev-" + e + " ' style='display:block;position:absolute;left:0%;top:0%;width:100%;height:100%;overflow:hidden;'></div>"),
                            x = t("img", i).clone();
                        Math.abs(n.imgmarginleft) > 0 ? (x.css({
                            "margin-left": n.columncount * n.imgmarginleft + "%"
                        }), x.css({
                            "max-width": n.columncount * n.imgmaxwidth + "%",
                            left: "-" + u * l + "px",
                            top: "-" + m * r + "px",
                            width: n.columncount * n.imgmaxwidth + "%",
                            height: "auto"
                        })) : (x.css({
                            "margin-top": n.columncount * n.imgmargintop + "%"
                        }), x.css({
                            "max-width": 100 * n.columncount + "%",
                            left: "-" + u * l + "px",
                            top: "-" + m * r + "px",
                            width: 100 * n.columncount + "%"
                        })), w.append(x), b.append(w), p.append(b)
                    }
                o.hide(), i.hide();
                var y = t(".amazingslider-img-block-wrapper-next-" + e, p),
                    k = t(".amazingslider-img-block-wrapper-prev-" + e, p);
                p.off("transitionFinished").on("transitionFinished", function() {
                    p.off("transitionFinished"), i.remove(), o.show(), t(".amazingslider-img-block-wrapper-next-" + e, p).remove(), t(".amazingslider-img-block-wrapper-prev-" + e, p).remove(), s()
                });
                var z = p.offset(),
                    E = -z.left,
                    A = t(window).width() - z.left - p.width() / n.columncount,
                    T = 100 * -z.top / p.height(),
                    I = t(window).height() - z.top - p.height() / n.rowcount;
                h = 0, k.each(function() {
                    var e = t(this),
                        i = Math.random() * (A - E) + E,
                        o = Math.random() * (I - T) + T;
                    e.animate({
                        left: i + "px",
                        top: o + "px",
                        opacity: 0
                    }, n.duration, n.easing), h++
                }), h = 0, y.each(function() {
                    var e = t(this),
                        i = Math.floor(h / n.columncount),
                        o = h % n.columncount,
                        s = Math.random() * (A - E) + E,
                        a = Math.random() * (I - T) + T;
                    e.css({
                        left: s + "px",
                        top: a + "px",
                        opacity: 0
                    }, n.duration, n.easing), e.animate({
                        left: o * u + "px",
                        top: i * m + "px",
                        opacity: 1
                    }, n.duration, n.easing), h++
                }), a(setTimeout(function() {
                    p.trigger("transitionFinished")
                }, n.duration))
            }
        }(jQuery), function(t) {
            t.fn.sliderTouchSwipe = function(e) {
                var i = {
                    preventWebBrowser: !1,
                    swipeLeft: null,
                    swipeRight: null,
                    swipeTop: null,
                    swipeBottom: null
                };
                return e && t.extend(i, e), this.each(function() {
                    var e = -1,
                        o = -1,
                        n = -1,
                        s = -1;

                    function a(t) {
                        e = -1, o = -1, n = -1, s = -1
                    }
                    try {
                        t(this).on("touchstart", function(t) {
                            var i = t.originalEvent;
                            i.targetTouches.length >= 1 ? (e = i.targetTouches[0].pageX, o = i.targetTouches[0].pageY) : a()
                        }), t(this).on("touchmove", function(t) {
                            i.preventWebBrowser && t.preventDefault();
                            var e = t.originalEvent;
                            e.targetTouches.length >= 1 ? (n = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY) : a()
                        }), t(this).on("touchend", function(t) {
                            n > 0 || s > 0 ? (Math.abs(n - e) > Math.abs(s - o) ? n > e ? i.swipeRight && i.swipeRight.call() : i.swipeLeft && i.swipeLeft.call() : s > o ? i.swipeBottom && i.swipeBottom.call() : i.swipeTop && i.swipeTop.call(), a()) : a()
                        }), t(this).on("touchcancel", a)
                    } catch (t) {}
                })
            }
        }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            easeInQuad: function(t, e, i, o, n) {
                return o * (e /= n) * e + i
            },
            easeOutQuad: function(t, e, i, o, n) {
                return -o * (e /= n) * (e - 2) + i
            },
            easeInOutQuad: function(t, e, i, o, n) {
                return (e /= n / 2) < 1 ? o / 2 * e * e + i : -o / 2 * (--e * (e - 2) - 1) + i
            },
            easeInCubic: function(t, e, i, o, n) {
                return o * (e /= n) * e * e + i
            },
            easeOutCubic: function(t, e, i, o, n) {
                return o * ((e = e / n - 1) * e * e + 1) + i
            },
            easeInOutCubic: function(t, e, i, o, n) {
                return (e /= n / 2) < 1 ? o / 2 * e * e * e + i : o / 2 * ((e -= 2) * e * e + 2) + i
            },
            easeInQuart: function(t, e, i, o, n) {
                return o * (e /= n) * e * e * e + i
            },
            easeOutQuart: function(t, e, i, o, n) {
                return -o * ((e = e / n - 1) * e * e * e - 1) + i
            },
            easeInOutQuart: function(t, e, i, o, n) {
                return (e /= n / 2) < 1 ? o / 2 * e * e * e * e + i : -o / 2 * ((e -= 2) * e * e * e - 2) + i
            },
            easeInQuint: function(t, e, i, o, n) {
                return o * (e /= n) * e * e * e * e + i
            },
            easeOutQuint: function(t, e, i, o, n) {
                return o * ((e = e / n - 1) * e * e * e * e + 1) + i
            },
            easeInOutQuint: function(t, e, i, o, n) {
                return (e /= n / 2) < 1 ? o / 2 * e * e * e * e * e + i : o / 2 * ((e -= 2) * e * e * e * e + 2) + i
            },
            easeInSine: function(t, e, i, o, n) {
                return -o * Math.cos(e / n * (Math.PI / 2)) + o + i
            },
            easeOutSine: function(t, e, i, o, n) {
                return o * Math.sin(e / n * (Math.PI / 2)) + i
            },
            easeInOutSine: function(t, e, i, o, n) {
                return -o / 2 * (Math.cos(Math.PI * e / n) - 1) + i
            },
            easeInExpo: function(t, e, i, o, n) {
                return 0 == e ? i : o * Math.pow(2, 10 * (e / n - 1)) + i
            },
            easeOutExpo: function(t, e, i, o, n) {
                return e == n ? i + o : o * (1 - Math.pow(2, -10 * e / n)) + i
            },
            easeInOutExpo: function(t, e, i, o, n) {
                return 0 == e ? i : e == n ? i + o : (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + i : o / 2 * (2 - Math.pow(2, -10 * --e)) + i
            },
            easeInCirc: function(t, e, i, o, n) {
                return -o * (Math.sqrt(1 - (e /= n) * e) - 1) + i
            },
            easeOutCirc: function(t, e, i, o, n) {
                return o * Math.sqrt(1 - (e = e / n - 1) * e) + i
            },
            easeInOutCirc: function(t, e, i, o, n) {
                return (e /= n / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + i : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
            },
            easeInElastic: function(t, e, i, o, n) {
                var s = 1.70158,
                    a = 0,
                    r = o;
                if (0 == e) return i;
                if (1 == (e /= n)) return i + o;
                if (a || (a = .3 * n), r < Math.abs(o)) {
                    r = o;
                    s = a / 4
                } else s = a / (2 * Math.PI) * Math.asin(o / r);
                return -r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) + i
            },
            easeOutElastic: function(t, e, i, o, n) {
                var s = 1.70158,
                    a = 0,
                    r = o;
                if (0 == e) return i;
                if (1 == (e /= n)) return i + o;
                if (a || (a = .3 * n), r < Math.abs(o)) {
                    r = o;
                    s = a / 4
                } else s = a / (2 * Math.PI) * Math.asin(o / r);
                return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - s) * Math.PI / a) + o + i
            },
            easeInOutElastic: function(t, e, i, o, n) {
                var s = 1.70158,
                    a = 0,
                    r = o;
                if (0 == e) return i;
                if (2 == (e /= n / 2)) return i + o;
                if (a || (a = .3 * n * 1.5), r < Math.abs(o)) {
                    r = o;
                    s = a / 4
                } else s = a / (2 * Math.PI) * Math.asin(o / r);
                return e < 1 ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) * .5 + o + i
            },
            easeInBack: function(t, e, i, o, n, s) {
                return null == s && (s = 1.70158), o * (e /= n) * e * ((s + 1) * e - s) + i
            },
            easeOutBack: function(t, e, i, o, n, s) {
                return null == s && (s = 1.70158), o * ((e = e / n - 1) * e * ((s + 1) * e + s) + 1) + i
            },
            easeInOutBack: function(t, e, i, o, n, s) {
                return null == s && (s = 1.70158), (e /= n / 2) < 1 ? o / 2 * e * e * ((1 + (s *= 1.525)) * e - s) + i : o / 2 * ((e -= 2) * e * ((1 + (s *= 1.525)) * e + s) + 2) + i
            },
            easeInBounce: function(t, e, i, o, n) {
                return o - jQuery.easing.easeOutBounce(t, n - e, 0, o, n) + i
            },
            easeOutBounce: function(t, e, i, o, n) {
                return (e /= n) < 1 / 2.75 ? 7.5625 * o * e * e + i : e < 2 / 2.75 ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            },
            easeInOutBounce: function(t, e, i, o, n) {
                return e < n / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, o, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, o, n) + .5 * o + i
            }
        }), void 0 === s) var s = new function() {
        this.objects = [], this.addObject = function(t) {
            this.objects.push(t)
        }, this.loadNext = function(t) {
            for (var e = 0; e < this.objects.length; e++) this.objects[e].id == t && (this.objects[e].videoPaused = !1, this.objects[e].isPaused || this.objects[e].slideRun(-1))
        }
    };
    if (void 0 === a) {
        var a = !1,
            r = 0
    }
    if (void 0 === l) var l = 0
}, function(t, e, i) {
    var o = i(1);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]);
    var n = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        },
        s = i(0)(o, n);
    o.locals && (t.exports = o.locals), t.hot.accept(1, function() {
        var e = i(1);
        if ("string" == typeof e && (e = [
                [t.i, e, ""]
            ]), ! function(t, e) {
                var i, o = 0;
                for (i in t) {
                    if (!e || t[i] !== e[i]) return !1;
                    o++
                }
                for (i in e) o--;
                return 0 === o
            }(o.locals, e.locals)) throw new Error("Aborting CSS HMR due to changed css-modules locals.");
        s(e)
    }), t.hot.dispose(function() {
        s()
    })
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var i = e.protocol + "//" + e.host,
            o = i + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var n, s = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s) ? t : (n = 0 === s.indexOf("//") ? s : 0 === s.indexOf("/") ? i + s : o + s.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
    }
}, function(t, e) {
    jQuery(document).ready(function() {
        for (var t = document.getElementsByTagName("script"), e = "", i = 0; i < t.length; i++) t[i].src && t[i].src.match(/initslider-1\.js/i) && (e = t[i].src.substr(0, t[i].src.lastIndexOf("/") + 1));
        jQuery("#amazingslider-1").amazingslider({
            sliderid: 1,
            jsfolder: e,
            width: 535,
            height: 532,
            skinsfoldername: "",
            loadimageondemand: !1,
            videohidecontrols: !1,
            donotresize: !1,
            enabletouchswipe: !0,
            fullscreen: !1,
            autoplayvideo: !1,
            addmargin: !0,
            transitiononfirstslide: !1,
            forceflash: !1,
            isresponsive: !0,
            forceflashonie11: !0,
            forceflashonie10: !0,
            pauseonmouseover: !1,
            playvideoonclickthumb: !0,
            slideinterval: 5e3,
            fullwidth: !1,
            randomplay: !1,
            scalemode: "fill",
            loop: 0,
            autoplay: !1,
            navplayvideoimage: "play-32-32-1.png",
            navpreviewheight: 60,
            timerheight: 2,
            descriptioncssresponsive: "font-size:12px;",
            shownumbering: !1,
            navthumbresponsivemode: "samesize",
            skin: "Vertical",
            textautohide: !0,
            lightboxshowtwitter: !1,
            addgooglefonts: !0,
            navshowplaypause: !0,
            initsocial: !1,
            navshowplayvideo: !1,
            navshowplaypausestandalonemarginx: 8,
            navshowplaypausestandalonemarginy: 8,
            navbuttonradius: 0,
            navthumbcolumn: 5,
            navthumbnavigationarrowimageheight: 32,
            navradius: 0,
            navthumbsmallcolumn: 3,
            lightboxshownavigation: !1,
            showshadow: !1,
            navfeaturedarrowimagewidth: 8,
            lightboxshowsocial: !1,
            navpreviewwidth: 120,
            googlefonts: "Inder",
            navborderhighlightcolor: "",
            navcolor: "#999999",
            lightboxdescriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
            lightboxthumbwidth: 80,
            navthumbnavigationarrowimagewidth: 32,
            navthumbtitlehovercss: "text-decoration:underline;",
            navthumbmediumheight: 64,
            texteffectresponsivesize: 600,
            arrowwidth: 32,
            texteffecteasing: "easeOutCubic",
            texteffect: "slide",
            lightboxthumbheight: 60,
            navspacing: 6,
            navarrowimage: "navarrows-28-28-0.png",
            ribbonimage: "ribbon_topleft-0.png",
            navwidth: 97,
            navheight: 97,
            arrowimage: "arrows-32-32-0.png",
            timeropacity: .6,
            titlecssresponsive: "font-size:12px;",
            navthumbnavigationarrowimage: "carouselarrows-32-32-1.png",
            navshowplaypausestandalone: !1,
            texteffect1: "slide",
            navpreviewbordercolor: "#ffffff",
            texteffect2: "slide",
            customcss: "",
            ribbonposition: "topleft",
            navthumbdescriptioncss: "display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
            lightboxtitlebottomcss: "{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
            arrowstyle: "none",
            navthumbmediumsize: 800,
            navthumbtitleheight: 18,
            navpreviewarrowheight: 16,
            textpositionmargintop: 24,
            navshowbuttons: !1,
            buttoncssresponsive: "",
            texteffectdelay: 500,
            navswitchonmouseover: !1,
            playvideoimage: "playvideo-64-64-1.png",
            arrowtop: 50,
            textstyle: "static",
            playvideoimageheight: 64,
            navfonthighlightcolor: "#666666",
            showbackgroundimage: !1,
            showpinterest: !1,
            navpreviewborder: 4,
            navshowplaypausestandaloneheight: 28,
            navdirection: "vertical",
            navbuttonshowbgimage: !0,
            navbuttonbgimage: "navbuttonbgimage-28-28-0.png",
            textbgcss: "display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#333333; opacity:0.6; filter:alpha(opacity=60);",
            playvideoimagewidth: 64,
            buttoncss: "display:block; position:relative; margin-top:8px;",
            navborder: 0,
            navshowpreviewontouch: !1,
            bottomshadowimagewidth: 110,
            showtimer: !1,
            navmultirows: !1,
            navshowpreview: !1,
            navmarginy: 16,
            navmarginx: 16,
            navfeaturedarrowimage: "featuredarrow-8-16-0.png",
            texteffectslidedirection1: "right",
            showribbon: !1,
            navstyle: "thumbnails",
            textpositionmarginleft: 24,
            descriptioncss: 'display:block; position:relative; font:12px "Lucida Sans Unicode","Lucida Grande",sans-serif,Arial; color:#fff; margin-top:8px;',
            navplaypauseimage: "navplaypause-28-28-0.png",
            backgroundimagetop: -10,
            timercolor: "#ffffff",
            numberingformat: "%NUM/%TOTAL ",
            navthumbmediumwidth: 64,
            navfontsize: 12,
            navhighlightcolor: "#333333",
            texteffectdelay1: 1e3,
            navimage: "bullet-24-24-5.png",
            texteffectdelay2: 1500,
            texteffectduration1: 600,
            navshowplaypausestandaloneautohide: !1,
            texteffectduration2: 600,
            navbuttoncolor: "#999999",
            navshowarrow: !0,
            texteffectslidedirection: "left",
            navshowfeaturedarrow: !0,
            lightboxbarheight: 64,
            showfacebook: !1,
            titlecss: 'display:block; position:relative; font:bold 14px "Lucida Sans Unicode","Lucida Grande",sans-serif,Arial; color:#fff;',
            ribbonimagey: 0,
            ribbonimagex: 0,
            texteffectresponsive: !0,
            navthumbsmallheight: 48,
            texteffectslidedistance1: 120,
            texteffectslidedistance2: 120,
            navrowspacing: 8,
            navshowplaypausestandaloneposition: "bottomright",
            lightboxshowpinterest: !1,
            lightboxthumbbottommargin: 8,
            lightboxthumbtopmargin: 12,
            arrowhideonmouseleave: 1e3,
            navshowplaypausestandalonewidth: 28,
            showsocial: !1,
            navthumbresponsive: !1,
            navfeaturedarrowimageheight: 16,
            navopacity: .8,
            textpositionmarginright: 24,
            backgroundimagewidth: 120,
            bordercolor: "#ffffff",
            border: 0,
            navthumbtitlewidth: 120,
            navpreviewposition: "left",
            texteffectseparate: !1,
            arrowheight: 32,
            arrowmargin: 8,
            texteffectduration: 600,
            bottomshadowimage: "bottomshadow-110-95-4.png",
            lightboxshowfacebook: !1,
            lightboxshowdescription: !1,
            timerposition: "bottom",
            navfontcolor: "#333333",
            navthumbnavigationstyle: "arrow",
            borderradius: 0,
            navbuttonhighlightcolor: "#333333",
            textpositionstatic: "bottom",
            texteffecteasing2: "easeOutCubic",
            navthumbstyle: "imageonly",
            texteffecteasing1: "easeOutCubic",
            textcss: "display:block; padding:12px; text-align:left;",
            navthumbsmallwidth: 48,
            navbordercolor: "#ffffff",
            navthumbmediumcolumn: 4,
            navpreviewarrowimage: "previewarrow-8-16-0.png",
            showbottomshadow: !1,
            texteffectslidedistance: 30,
            shadowcolor: "#aaaaaa",
            showtwitter: !1,
            textpositionmarginstatic: 0,
            backgroundimage: "",
            navposition: "right",
            navthumbsmallsize: 480,
            navpreviewarrowwidth: 8,
            textformat: "",
            texteffectslidedirection2: "right",
            bottomshadowimagetop: 95,
            textpositiondynamic: "bottomleft",
            shadowsize: 5,
            navthumbtitlecss: "display:block;position:relative;padding:2px 4px;text-align:center;font:bold 12px Arial,Helvetica,sans-serif;color:#333;",
            textpositionmarginbottom: 24,
            lightboxshowtitle: !1,
            socialmode: "mouseover",
            fade: {
                duration: 1e3,
                easing: "easeOutCubic",
                checked: !0
            },
            transition: "fade",
            scalemode: "fill",
            isfullscreen: !1,
            textformat: {}
        })
    })
}, function(t, e, i) {
    var o = i(2);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]);
    var n = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        },
        s = i(0)(o, n);
    o.locals && (t.exports = o.locals), t.hot.accept(2, function() {
        var e = i(2);
        if ("string" == typeof e && (e = [
                [t.i, e, ""]
            ]), ! function(t, e) {
                var i, o = 0;
                for (i in t) {
                    if (!e || t[i] !== e[i]) return !1;
                    o++
                }
                for (i in e) o--;
                return 0 === o
            }(o.locals, e.locals)) throw new Error("Aborting CSS HMR due to changed css-modules locals.");
        s(e)
    }), t.hot.dispose(function() {
        s()
    })
}, function(t, e, i) {
    var o = i(3);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]);
    var n = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        },
        s = i(0)(o, n);
    o.locals && (t.exports = o.locals), t.hot.accept(3, function() {
        var e = i(3);
        if ("string" == typeof e && (e = [
                [t.i, e, ""]
            ]), ! function(t, e) {
                var i, o = 0;
                for (i in t) {
                    if (!e || t[i] !== e[i]) return !1;
                    o++
                }
                for (i in e) o--;
                return 0 === o
            }(o.locals, e.locals)) throw new Error("Aborting CSS HMR due to changed css-modules locals.");
        s(e)
    }), t.hot.dispose(function() {
        s()
    })
}, function(t, e, i) {
    var o = i(4);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]);
    var n = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        },
        s = i(0)(o, n);
    o.locals && (t.exports = o.locals), t.hot.accept(4, function() {
        var e = i(4);
        if ("string" == typeof e && (e = [
                [t.i, e, ""]
            ]), ! function(t, e) {
                var i, o = 0;
                for (i in t) {
                    if (!e || t[i] !== e[i]) return !1;
                    o++
                }
                for (i in e) o--;
                return 0 === o
            }(o.locals, e.locals)) throw new Error("Aborting CSS HMR due to changed css-modules locals.");
        s(e)
    }), t.hot.dispose(function() {
        s()
    })
}]);   
try {
    $(".header-inside__part2-login__text ul li a").click(function(event) {
        event.preventDefault();
  });
} catch (e){}
