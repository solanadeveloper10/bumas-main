function K0(A, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in A)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i &&
            Object.defineProperty(
              A,
              n,
              i.get ? i : { enumerable: !0, get: () => r[n] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(A, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = t(n);
    fetch(n.href, i);
  }
})();
var Ta =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function N0(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default")
    ? A.default
    : A;
}
var M0 = { exports: {} },
  kl = {},
  _0 = { exports: {} },
  cA = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $o = Symbol.for("react.element"),
  KQ = Symbol.for("react.portal"),
  NQ = Symbol.for("react.fragment"),
  MQ = Symbol.for("react.strict_mode"),
  _Q = Symbol.for("react.profiler"),
  kQ = Symbol.for("react.provider"),
  PQ = Symbol.for("react.context"),
  VQ = Symbol.for("react.forward_ref"),
  GQ = Symbol.for("react.suspense"),
  jQ = Symbol.for("react.memo"),
  WQ = Symbol.for("react.lazy"),
  vg = Symbol.iterator;
function XQ(A) {
  return A === null || typeof A != "object"
    ? null
    : ((A = (vg && A[vg]) || A["@@iterator"]),
      typeof A == "function" ? A : null);
}
var k0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  P0 = Object.assign,
  V0 = {};
function mi(A, e, t) {
  (this.props = A),
    (this.context = e),
    (this.refs = V0),
    (this.updater = t || k0);
}
mi.prototype.isReactComponent = {};
mi.prototype.setState = function (A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, A, e, "setState");
};
mi.prototype.forceUpdate = function (A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function G0() {}
G0.prototype = mi.prototype;
function Fd(A, e, t) {
  (this.props = A),
    (this.context = e),
    (this.refs = V0),
    (this.updater = t || k0);
}
var Ed = (Fd.prototype = new G0());
Ed.constructor = Fd;
P0(Ed, mi.prototype);
Ed.isPureReactComponent = !0;
var mg = Array.isArray,
  j0 = Object.prototype.hasOwnProperty,
  Id = { current: null },
  W0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function X0(A, e, t) {
  var r,
    n = {},
    i = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      j0.call(e, r) && !W0.hasOwnProperty(r) && (n[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) n.children = t;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    n.children = s;
  }
  if (A && A.defaultProps)
    for (r in ((a = A.defaultProps), a)) n[r] === void 0 && (n[r] = a[r]);
  return {
    $$typeof: $o,
    type: A,
    key: i,
    ref: o,
    props: n,
    _owner: Id.current,
  };
}
function zQ(A, e) {
  return {
    $$typeof: $o,
    type: A.type,
    key: e,
    ref: A.ref,
    props: A.props,
    _owner: A._owner,
  };
}
function xd(A) {
  return typeof A == "object" && A !== null && A.$$typeof === $o;
}
function JQ(A) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    A.replace(/[=:]/g, function (t) {
      return e[t];
    })
  );
}
var Cg = /\/+/g;
function _u(A, e) {
  return typeof A == "object" && A !== null && A.key != null
    ? JQ("" + A.key)
    : e.toString(36);
}
function xs(A, e, t, r, n) {
  var i = typeof A;
  (i === "undefined" || i === "boolean") && (A = null);
  var o = !1;
  if (A === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case $o:
          case KQ:
            o = !0;
        }
    }
  if (o)
    return (
      (o = A),
      (n = n(o)),
      (A = r === "" ? "." + _u(o, 0) : r),
      mg(n)
        ? ((t = ""),
          A != null && (t = A.replace(Cg, "$&/") + "/"),
          xs(n, e, t, "", function (l) {
            return l;
          }))
        : n != null &&
          (xd(n) &&
            (n = zQ(
              n,
              t +
                (!n.key || (o && o.key === n.key)
                  ? ""
                  : ("" + n.key).replace(Cg, "$&/") + "/") +
                A
            )),
          e.push(n)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), mg(A)))
    for (var a = 0; a < A.length; a++) {
      i = A[a];
      var s = r + _u(i, a);
      o += xs(i, e, t, s, n);
    }
  else if (((s = XQ(A)), typeof s == "function"))
    for (A = s.call(A), a = 0; !(i = A.next()).done; )
      (i = i.value), (s = r + _u(i, a++)), (o += xs(i, e, t, s, n));
  else if (i === "object")
    throw (
      ((e = String(A)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(A).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Da(A, e, t) {
  if (A == null) return A;
  var r = [],
    n = 0;
  return (
    xs(A, r, "", "", function (i) {
      return e.call(t, i, n++);
    }),
    r
  );
}
function YQ(A) {
  if (A._status === -1) {
    var e = A._result;
    (e = e()),
      e.then(
        function (t) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 1), (A._result = t));
        },
        function (t) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 2), (A._result = t));
        }
      ),
      A._status === -1 && ((A._status = 0), (A._result = e));
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var Ue = { current: null },
  Hs = { transition: null },
  ZQ = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Hs,
    ReactCurrentOwner: Id,
  };
function z0() {
  throw Error("act(...) is not supported in production builds of React.");
}
cA.Children = {
  map: Da,
  forEach: function (A, e, t) {
    Da(
      A,
      function () {
        e.apply(this, arguments);
      },
      t
    );
  },
  count: function (A) {
    var e = 0;
    return (
      Da(A, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (A) {
    return (
      Da(A, function (e) {
        return e;
      }) || []
    );
  },
  only: function (A) {
    if (!xd(A))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return A;
  },
};
cA.Component = mi;
cA.Fragment = NQ;
cA.Profiler = _Q;
cA.PureComponent = Fd;
cA.StrictMode = MQ;
cA.Suspense = GQ;
cA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ZQ;
cA.act = z0;
cA.cloneElement = function (A, e, t) {
  if (A == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        A +
        "."
    );
  var r = P0({}, A.props),
    n = A.key,
    i = A.ref,
    o = A._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (o = Id.current)),
      e.key !== void 0 && (n = "" + e.key),
      A.type && A.type.defaultProps)
    )
      var a = A.type.defaultProps;
    for (s in e)
      j0.call(e, s) &&
        !W0.hasOwnProperty(s) &&
        (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    a = Array(s);
    for (var l = 0; l < s; l++) a[l] = arguments[l + 2];
    r.children = a;
  }
  return { $$typeof: $o, type: A.type, key: n, ref: i, props: r, _owner: o };
};
cA.createContext = function (A) {
  return (
    (A = {
      $$typeof: PQ,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (A.Provider = { $$typeof: kQ, _context: A }),
    (A.Consumer = A)
  );
};
cA.createElement = X0;
cA.createFactory = function (A) {
  var e = X0.bind(null, A);
  return (e.type = A), e;
};
cA.createRef = function () {
  return { current: null };
};
cA.forwardRef = function (A) {
  return { $$typeof: VQ, render: A };
};
cA.isValidElement = xd;
cA.lazy = function (A) {
  return { $$typeof: WQ, _payload: { _status: -1, _result: A }, _init: YQ };
};
cA.memo = function (A, e) {
  return { $$typeof: jQ, type: A, compare: e === void 0 ? null : e };
};
cA.startTransition = function (A) {
  var e = Hs.transition;
  Hs.transition = {};
  try {
    A();
  } finally {
    Hs.transition = e;
  }
};
cA.unstable_act = z0;
cA.useCallback = function (A, e) {
  return Ue.current.useCallback(A, e);
};
cA.useContext = function (A) {
  return Ue.current.useContext(A);
};
cA.useDebugValue = function () {};
cA.useDeferredValue = function (A) {
  return Ue.current.useDeferredValue(A);
};
cA.useEffect = function (A, e) {
  return Ue.current.useEffect(A, e);
};
cA.useId = function () {
  return Ue.current.useId();
};
cA.useImperativeHandle = function (A, e, t) {
  return Ue.current.useImperativeHandle(A, e, t);
};
cA.useInsertionEffect = function (A, e) {
  return Ue.current.useInsertionEffect(A, e);
};
cA.useLayoutEffect = function (A, e) {
  return Ue.current.useLayoutEffect(A, e);
};
cA.useMemo = function (A, e) {
  return Ue.current.useMemo(A, e);
};
cA.useReducer = function (A, e, t) {
  return Ue.current.useReducer(A, e, t);
};
cA.useRef = function (A) {
  return Ue.current.useRef(A);
};
cA.useState = function (A) {
  return Ue.current.useState(A);
};
cA.useSyncExternalStore = function (A, e, t) {
  return Ue.current.useSyncExternalStore(A, e, t);
};
cA.useTransition = function () {
  return Ue.current.useTransition();
};
cA.version = "18.3.1";
_0.exports = cA;
var N = _0.exports;
const Ce = N0(N),
  $Q = K0({ __proto__: null, default: Ce }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qQ = N,
  Ay = Symbol.for("react.element"),
  ey = Symbol.for("react.fragment"),
  ty = Object.prototype.hasOwnProperty,
  ry = qQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ny = { key: !0, ref: !0, __self: !0, __source: !0 };
function J0(A, e, t) {
  var r,
    n = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) ty.call(e, r) && !ny.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps)
    for (r in ((e = A.defaultProps), e)) n[r] === void 0 && (n[r] = e[r]);
  return {
    $$typeof: Ay,
    type: A,
    key: i,
    ref: o,
    props: n,
    _owner: ry.current,
  };
}
kl.Fragment = ey;
kl.jsx = J0;
kl.jsxs = J0;
M0.exports = kl;
var Q = M0.exports,
  Y0 = { exports: {} },
  ke = {},
  Z0 = { exports: {} },
  $0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (A) {
  function e(b, D) {
    var T = b.length;
    b.push(D);
    A: for (; 0 < T; ) {
      var M = (T - 1) >>> 1,
        j = b[M];
      if (0 < n(j, D)) (b[M] = D), (b[T] = j), (T = M);
      else break A;
    }
  }
  function t(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var D = b[0],
      T = b.pop();
    if (T !== D) {
      b[0] = T;
      A: for (var M = 0, j = b.length, rA = j >>> 1; M < rA; ) {
        var nA = 2 * (M + 1) - 1,
          vA = b[nA],
          _ = nA + 1,
          iA = b[_];
        if (0 > n(vA, T))
          _ < j && 0 > n(iA, vA)
            ? ((b[M] = iA), (b[_] = T), (M = _))
            : ((b[M] = vA), (b[nA] = T), (M = nA));
        else if (_ < j && 0 > n(iA, T)) (b[M] = iA), (b[_] = T), (M = _);
        else break A;
      }
    }
    return D;
  }
  function n(b, D) {
    var T = b.sortIndex - D.sortIndex;
    return T !== 0 ? T : b.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    A.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    A.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    l = [],
    u = 1,
    c = null,
    f = 3,
    h = !1,
    g = !1,
    p = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    B = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(b) {
    for (var D = t(l); D !== null; ) {
      if (D.callback === null) r(l);
      else if (D.startTime <= b)
        r(l), (D.sortIndex = D.expirationTime), e(s, D);
      else break;
      D = t(l);
    }
  }
  function C(b) {
    if (((p = !1), w(b), !g))
      if (t(s) !== null) (g = !0), eA(m);
      else {
        var D = t(l);
        D !== null && tA(C, D.startTime - b);
      }
  }
  function m(b, D) {
    (g = !1), p && ((p = !1), B(v), (v = -1)), (h = !0);
    var T = f;
    try {
      for (
        w(D), c = t(s);
        c !== null && (!(c.expirationTime > D) || (b && !L()));

      ) {
        var M = c.callback;
        if (typeof M == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var j = M(c.expirationTime <= D);
          (D = A.unstable_now()),
            typeof j == "function" ? (c.callback = j) : c === t(s) && r(s),
            w(D);
        } else r(s);
        c = t(s);
      }
      if (c !== null) var rA = !0;
      else {
        var nA = t(l);
        nA !== null && tA(C, nA.startTime - D), (rA = !1);
      }
      return rA;
    } finally {
      (c = null), (f = T), (h = !1);
    }
  }
  var y = !1,
    E = null,
    v = -1,
    x = 5,
    H = -1;
  function L() {
    return !(A.unstable_now() - H < x);
  }
  function O() {
    if (E !== null) {
      var b = A.unstable_now();
      H = b;
      var D = !0;
      try {
        D = E(!0, b);
      } finally {
        D ? R() : ((y = !1), (E = null));
      }
    } else y = !1;
  }
  var R;
  if (typeof d == "function")
    R = function () {
      d(O);
    };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(),
      J = P.port2;
    (P.port1.onmessage = O),
      (R = function () {
        J.postMessage(null);
      });
  } else
    R = function () {
      F(O, 0);
    };
  function eA(b) {
    (E = b), y || ((y = !0), R());
  }
  function tA(b, D) {
    v = F(function () {
      b(A.unstable_now());
    }, D);
  }
  (A.unstable_IdlePriority = 5),
    (A.unstable_ImmediatePriority = 1),
    (A.unstable_LowPriority = 4),
    (A.unstable_NormalPriority = 3),
    (A.unstable_Profiling = null),
    (A.unstable_UserBlockingPriority = 2),
    (A.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (A.unstable_continueExecution = function () {
      g || h || ((g = !0), eA(m));
    }),
    (A.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (x = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (A.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (A.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (A.unstable_next = function (b) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var T = f;
      f = D;
      try {
        return b();
      } finally {
        f = T;
      }
    }),
    (A.unstable_pauseExecution = function () {}),
    (A.unstable_requestPaint = function () {}),
    (A.unstable_runWithPriority = function (b, D) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var T = f;
      f = b;
      try {
        return D();
      } finally {
        f = T;
      }
    }),
    (A.unstable_scheduleCallback = function (b, D, T) {
      var M = A.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? M + T : M))
          : (T = M),
        b)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = T + j),
        (b = {
          id: u++,
          callback: D,
          priorityLevel: b,
          startTime: T,
          expirationTime: j,
          sortIndex: -1,
        }),
        T > M
          ? ((b.sortIndex = T),
            e(l, b),
            t(s) === null &&
              b === t(l) &&
              (p ? (B(v), (v = -1)) : (p = !0), tA(C, T - M)))
          : ((b.sortIndex = j), e(s, b), g || h || ((g = !0), eA(m))),
        b
      );
    }),
    (A.unstable_shouldYield = L),
    (A.unstable_wrapCallback = function (b) {
      var D = f;
      return function () {
        var T = f;
        f = D;
        try {
          return b.apply(this, arguments);
        } finally {
          f = T;
        }
      };
    });
})($0);
Z0.exports = $0;
var iy = Z0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oy = N,
  _e = iy;
function k(A) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1;
    t < arguments.length;
    t++
  )
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    A +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var q0 = new Set(),
  Qo = {};
function vn(A, e) {
  si(A, e), si(A + "Capture", e);
}
function si(A, e) {
  for (Qo[A] = e, A = 0; A < e.length; A++) q0.add(e[A]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zc = Object.prototype.hasOwnProperty,
  ay =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qg = {},
  yg = {};
function sy(A) {
  return zc.call(yg, A)
    ? !0
    : zc.call(Qg, A)
    ? !1
    : ay.test(A)
    ? (yg[A] = !0)
    : ((Qg[A] = !0), !1);
}
function ly(A, e, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((A = A.toLowerCase().slice(0, 5)), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function uy(A, e, t, r) {
  if (e === null || typeof e > "u" || ly(A, e, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Fe(A, e, t, r, n, i, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = n),
    (this.mustUseProperty = t),
    (this.propertyName = A),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (A) {
    ce[A] = new Fe(A, 0, !1, A, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (A) {
  var e = A[0];
  ce[e] = new Fe(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (A) {
  ce[A] = new Fe(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (A) {
  ce[A] = new Fe(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (A) {
    ce[A] = new Fe(A, 3, !1, A.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (A) {
  ce[A] = new Fe(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function (A) {
  ce[A] = new Fe(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (A) {
  ce[A] = new Fe(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function (A) {
  ce[A] = new Fe(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var Hd = /[\-:]([a-z])/g;
function Sd(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (A) {
    var e = A.replace(Hd, Sd);
    ce[e] = new Fe(e, 1, !1, A, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (A) {
    var e = A.replace(Hd, Sd);
    ce[e] = new Fe(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
  var e = A.replace(Hd, Sd);
  ce[e] = new Fe(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (A) {
  ce[A] = new Fe(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (A) {
  ce[A] = new Fe(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function Ld(A, e, t, r) {
  var n = ce.hasOwnProperty(e) ? ce[e] : null;
  (n !== null
    ? n.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (uy(e, t, n, r) && (t = null),
    r || n === null
      ? sy(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t))
      : n.mustUseProperty
      ? (A[n.propertyName] = t === null ? (n.type === 3 ? !1 : "") : t)
      : ((e = n.attributeName),
        (r = n.attributeNamespace),
        t === null
          ? A.removeAttribute(e)
          : ((n = n.type),
            (t = n === 3 || (n === 4 && t === !0) ? "" : "" + t),
            r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var qt = oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ba = Symbol.for("react.element"),
  Nn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Td = Symbol.for("react.strict_mode"),
  Jc = Symbol.for("react.profiler"),
  Aw = Symbol.for("react.provider"),
  ew = Symbol.for("react.context"),
  Dd = Symbol.for("react.forward_ref"),
  Yc = Symbol.for("react.suspense"),
  Zc = Symbol.for("react.suspense_list"),
  bd = Symbol.for("react.memo"),
  cr = Symbol.for("react.lazy"),
  tw = Symbol.for("react.offscreen"),
  Ug = Symbol.iterator;
function Ti(A) {
  return A === null || typeof A != "object"
    ? null
    : ((A = (Ug && A[Ug]) || A["@@iterator"]),
      typeof A == "function" ? A : null);
}
var RA = Object.assign,
  ku;
function Xi(A) {
  if (ku === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      ku = (e && e[1]) || "";
    }
  return (
    `
` +
    ku +
    A
  );
}
var Pu = !1;
function Vu(A, e) {
  if (!A || Pu) return "";
  Pu = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (l) {
          var r = l;
        }
        Reflect.construct(A, [], e);
      } else {
        try {
          e.call();
        } catch (l) {
          r = l;
        }
        A.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      A();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (
        var n = l.stack.split(`
`),
          i = r.stack.split(`
`),
          o = n.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && n[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (n[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || n[o] !== i[a])) {
                var s =
                  `
` + n[o].replace(" at new ", " at ");
                return (
                  A.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", A.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Pu = !1), (Error.prepareStackTrace = t);
  }
  return (A = A ? A.displayName || A.name : "") ? Xi(A) : "";
}
function cy(A) {
  switch (A.tag) {
    case 5:
      return Xi(A.type);
    case 16:
      return Xi("Lazy");
    case 13:
      return Xi("Suspense");
    case 19:
      return Xi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (A = Vu(A.type, !1)), A;
    case 11:
      return (A = Vu(A.type.render, !1)), A;
    case 1:
      return (A = Vu(A.type, !0)), A;
    default:
      return "";
  }
}
function $c(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case Mn:
      return "Fragment";
    case Nn:
      return "Portal";
    case Jc:
      return "Profiler";
    case Td:
      return "StrictMode";
    case Yc:
      return "Suspense";
    case Zc:
      return "SuspenseList";
  }
  if (typeof A == "object")
    switch (A.$$typeof) {
      case ew:
        return (A.displayName || "Context") + ".Consumer";
      case Aw:
        return (A._context.displayName || "Context") + ".Provider";
      case Dd:
        var e = A.render;
        return (
          (A = A.displayName),
          A ||
            ((A = e.displayName || e.name || ""),
            (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
          A
        );
      case bd:
        return (
          (e = A.displayName || null), e !== null ? e : $c(A.type) || "Memo"
        );
      case cr:
        (e = A._payload), (A = A._init);
        try {
          return $c(A(e));
        } catch {}
    }
  return null;
}
function fy(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (A = e.render),
        (A = A.displayName || A.name || ""),
        e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $c(e);
    case 8:
      return e === Td ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Dr(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function rw(A) {
  var e = A.type;
  return (
    (A = A.nodeName) &&
    A.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function dy(A) {
  var e = rw(A) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e),
    r = "" + A[e];
  if (
    !A.hasOwnProperty(e) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var n = t.get,
      i = t.set;
    return (
      Object.defineProperty(A, e, {
        configurable: !0,
        get: function () {
          return n.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(A, e, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (A._valueTracker = null), delete A[e];
        },
      }
    );
  }
}
function Oa(A) {
  A._valueTracker || (A._valueTracker = dy(A));
}
function nw(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    r = "";
  return (
    A && (r = rw(A) ? (A.checked ? "true" : "false") : A.value),
    (A = r),
    A !== t ? (e.setValue(A), !0) : !1
  );
}
function Ys(A) {
  if (((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u"))
    return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function qc(A, e) {
  var t = e.checked;
  return RA({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? A._wrapperState.initialChecked,
  });
}
function Fg(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (t = Dr(e.value != null ? e.value : t)),
    (A._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function iw(A, e) {
  (e = e.checked), e != null && Ld(A, "checked", e, !1);
}
function Af(A, e) {
  iw(A, e);
  var t = Dr(e.value),
    r = e.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && A.value === "") || A.value != t) && (A.value = "" + t)
      : A.value !== "" + t && (A.value = "" + t);
  else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? ef(A, e.type, t)
    : e.hasOwnProperty("defaultValue") && ef(A, e.type, Dr(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (A.defaultChecked = !!e.defaultChecked);
}
function Eg(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + A._wrapperState.initialValue),
      t || e === A.value || (A.value = e),
      (A.defaultValue = e);
  }
  (t = A.name),
    t !== "" && (A.name = ""),
    (A.defaultChecked = !!A._wrapperState.initialChecked),
    t !== "" && (A.name = t);
}
function ef(A, e, t) {
  (e !== "number" || Ys(A.ownerDocument) !== A) &&
    (t == null
      ? (A.defaultValue = "" + A._wrapperState.initialValue)
      : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var zi = Array.isArray;
function qn(A, e, t, r) {
  if (((A = A.options), e)) {
    e = {};
    for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++)
      (n = e.hasOwnProperty("$" + A[t].value)),
        A[t].selected !== n && (A[t].selected = n),
        n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + Dr(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        (A[n].selected = !0), r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function tf(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return RA({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + A._wrapperState.initialValue,
  });
}
function Ig(A, e) {
  var t = e.value;
  if (t == null) {
    if (((t = e.children), (e = e.defaultValue), t != null)) {
      if (e != null) throw Error(k(92));
      if (zi(t)) {
        if (1 < t.length) throw Error(k(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), (t = e);
  }
  A._wrapperState = { initialValue: Dr(t) };
}
function ow(A, e) {
  var t = Dr(e.value),
    r = Dr(e.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== A.value && (A.value = t),
    e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)),
    r != null && (A.defaultValue = "" + r);
}
function xg(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function aw(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rf(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml"
    ? aw(e)
    : A === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : A;
}
var Ra,
  sw = (function (A) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, t, r, n) {
          MSApp.execUnsafeLocalFunction(function () {
            return A(e, t, r, n);
          });
        }
      : A;
  })(function (A, e) {
    if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
      A.innerHTML = e;
    else {
      for (
        Ra = Ra || document.createElement("div"),
          Ra.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Ra.firstChild;
        A.firstChild;

      )
        A.removeChild(A.firstChild);
      for (; e.firstChild; ) A.appendChild(e.firstChild);
    }
  });
function yo(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var io = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  By = ["Webkit", "ms", "Moz", "O"];
Object.keys(io).forEach(function (A) {
  By.forEach(function (e) {
    (e = e + A.charAt(0).toUpperCase() + A.substring(1)), (io[e] = io[A]);
  });
});
function lw(A, e, t) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : t || typeof e != "number" || e === 0 || (io.hasOwnProperty(A) && io[A])
    ? ("" + e).trim()
    : e + "px";
}
function uw(A, e) {
  A = A.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        n = lw(t, e[t], r);
      t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : (A[t] = n);
    }
}
var gy = RA(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function nf(A, e) {
  if (e) {
    if (gy[A] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(k(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(k(62));
  }
}
function of(A, e) {
  if (A.indexOf("-") === -1) return typeof e.is == "string";
  switch (A) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var af = null;
function Od(A) {
  return (
    (A = A.target || A.srcElement || window),
    A.correspondingUseElement && (A = A.correspondingUseElement),
    A.nodeType === 3 ? A.parentNode : A
  );
}
var sf = null,
  Ai = null,
  ei = null;
function Hg(A) {
  if ((A = ea(A))) {
    if (typeof sf != "function") throw Error(k(280));
    var e = A.stateNode;
    e && ((e = Wl(e)), sf(A.stateNode, A.type, e));
  }
}
function cw(A) {
  Ai ? (ei ? ei.push(A) : (ei = [A])) : (Ai = A);
}
function fw() {
  if (Ai) {
    var A = Ai,
      e = ei;
    if (((ei = Ai = null), Hg(A), e)) for (A = 0; A < e.length; A++) Hg(e[A]);
  }
}
function dw(A, e) {
  return A(e);
}
function Bw() {}
var Gu = !1;
function gw(A, e, t) {
  if (Gu) return A(e, t);
  Gu = !0;
  try {
    return dw(A, e, t);
  } finally {
    (Gu = !1), (Ai !== null || ei !== null) && (Bw(), fw());
  }
}
function Uo(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = Wl(t);
  if (r === null) return null;
  t = r[e];
  A: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((A = A.type),
        (r = !(
          A === "button" ||
          A === "input" ||
          A === "select" ||
          A === "textarea"
        ))),
        (A = !r);
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != "function") throw Error(k(231, e, typeof t));
  return t;
}
var lf = !1;
if (jt)
  try {
    var Di = {};
    Object.defineProperty(Di, "passive", {
      get: function () {
        lf = !0;
      },
    }),
      window.addEventListener("test", Di, Di),
      window.removeEventListener("test", Di, Di);
  } catch {
    lf = !1;
  }
function hy(A, e, t, r, n, i, o, a, s) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var oo = !1,
  Zs = null,
  $s = !1,
  uf = null,
  py = {
    onError: function (A) {
      (oo = !0), (Zs = A);
    },
  };
function wy(A, e, t, r, n, i, o, a, s) {
  (oo = !1), (Zs = null), hy.apply(py, arguments);
}
function vy(A, e, t, r, n, i, o, a, s) {
  if ((wy.apply(this, arguments), oo)) {
    if (oo) {
      var l = Zs;
      (oo = !1), (Zs = null);
    } else throw Error(k(198));
    $s || (($s = !0), (uf = l));
  }
}
function mn(A) {
  var e = A,
    t = A;
  if (A.alternate) for (; e.return; ) e = e.return;
  else {
    A = e;
    do (e = A), e.flags & 4098 && (t = e.return), (A = e.return);
    while (A);
  }
  return e.tag === 3 ? t : null;
}
function hw(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (
      (e === null && ((A = A.alternate), A !== null && (e = A.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Sg(A) {
  if (mn(A) !== A) throw Error(k(188));
}
function my(A) {
  var e = A.alternate;
  if (!e) {
    if (((e = mn(A)), e === null)) throw Error(k(188));
    return e !== A ? null : A;
  }
  for (var t = A, r = e; ; ) {
    var n = t.return;
    if (n === null) break;
    var i = n.alternate;
    if (i === null) {
      if (((r = n.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (n.child === i.child) {
      for (i = n.child; i; ) {
        if (i === t) return Sg(n), A;
        if (i === r) return Sg(n), e;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (t.return !== r.return) (t = n), (r = i);
    else {
      for (var o = !1, a = n.child; a; ) {
        if (a === t) {
          (o = !0), (t = n), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = n), (t = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === t) {
            (o = !0), (t = i), (r = n);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (t = n);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (t.alternate !== r) throw Error(k(190));
  }
  if (t.tag !== 3) throw Error(k(188));
  return t.stateNode.current === t ? A : e;
}
function pw(A) {
  return (A = my(A)), A !== null ? ww(A) : null;
}
function ww(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = ww(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var vw = _e.unstable_scheduleCallback,
  Lg = _e.unstable_cancelCallback,
  Cy = _e.unstable_shouldYield,
  Qy = _e.unstable_requestPaint,
  XA = _e.unstable_now,
  yy = _e.unstable_getCurrentPriorityLevel,
  Rd = _e.unstable_ImmediatePriority,
  mw = _e.unstable_UserBlockingPriority,
  qs = _e.unstable_NormalPriority,
  Uy = _e.unstable_LowPriority,
  Cw = _e.unstable_IdlePriority,
  Pl = null,
  mt = null;
function Fy(A) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(Pl, A, void 0, (A.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : xy,
  Ey = Math.log,
  Iy = Math.LN2;
function xy(A) {
  return (A >>>= 0), A === 0 ? 32 : (31 - ((Ey(A) / Iy) | 0)) | 0;
}
var Ka = 64,
  Na = 4194304;
function Ji(A) {
  switch (A & -A) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Al(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    n = A.suspendedLanes,
    i = A.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var a = o & ~n;
    a !== 0 ? (r = Ji(a)) : ((i &= o), i !== 0 && (r = Ji(i)));
  } else (o = t & ~n), o !== 0 ? (r = Ji(o)) : i !== 0 && (r = Ji(i));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & n) &&
    ((n = r & -r), (i = e & -e), n >= i || (n === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= t & 16), (e = A.entangledLanes), e !== 0))
    for (A = A.entanglements, e &= r; 0 < e; )
      (t = 31 - ut(e)), (n = 1 << t), (r |= A[t]), (e &= ~n);
  return r;
}
function Hy(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sy(A, e) {
  for (
    var t = A.suspendedLanes,
      r = A.pingedLanes,
      n = A.expirationTimes,
      i = A.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ut(i),
      a = 1 << o,
      s = n[o];
    s === -1
      ? (!(a & t) || a & r) && (n[o] = Hy(a, e))
      : s <= e && (A.expiredLanes |= a),
      (i &= ~a);
  }
}
function cf(A) {
  return (
    (A = A.pendingLanes & -1073741825),
    A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
  );
}
function Qw() {
  var A = Ka;
  return (Ka <<= 1), !(Ka & 4194240) && (Ka = 64), A;
}
function ju(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function qo(A, e, t) {
  (A.pendingLanes |= e),
    e !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
    (A = A.eventTimes),
    (e = 31 - ut(e)),
    (A[e] = t);
}
function Ly(A, e) {
  var t = A.pendingLanes & ~e;
  (A.pendingLanes = e),
    (A.suspendedLanes = 0),
    (A.pingedLanes = 0),
    (A.expiredLanes &= e),
    (A.mutableReadLanes &= e),
    (A.entangledLanes &= e),
    (e = A.entanglements);
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t),
      i = 1 << n;
    (e[n] = 0), (r[n] = -1), (A[n] = -1), (t &= ~i);
  }
}
function Kd(A, e) {
  var t = (A.entangledLanes |= e);
  for (A = A.entanglements; t; ) {
    var r = 31 - ut(t),
      n = 1 << r;
    (n & e) | (A[r] & e) && (A[r] |= e), (t &= ~n);
  }
}
var wA = 0;
function yw(A) {
  return (A &= -A), 1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Uw,
  Nd,
  Fw,
  Ew,
  Iw,
  ff = !1,
  Ma = [],
  yr = null,
  Ur = null,
  Fr = null,
  Fo = new Map(),
  Eo = new Map(),
  Br = [],
  Ty =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tg(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      yr = null;
      break;
    case "dragenter":
    case "dragleave":
      Ur = null;
      break;
    case "mouseover":
    case "mouseout":
      Fr = null;
      break;
    case "pointerover":
    case "pointerout":
      Fo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Eo.delete(e.pointerId);
  }
}
function bi(A, e, t, r, n, i) {
  return A === null || A.nativeEvent !== i
    ? ((A = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [n],
      }),
      e !== null && ((e = ea(e)), e !== null && Nd(e)),
      A)
    : ((A.eventSystemFlags |= r),
      (e = A.targetContainers),
      n !== null && e.indexOf(n) === -1 && e.push(n),
      A);
}
function Dy(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return (yr = bi(yr, A, e, t, r, n)), !0;
    case "dragenter":
      return (Ur = bi(Ur, A, e, t, r, n)), !0;
    case "mouseover":
      return (Fr = bi(Fr, A, e, t, r, n)), !0;
    case "pointerover":
      var i = n.pointerId;
      return Fo.set(i, bi(Fo.get(i) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return (
        (i = n.pointerId), Eo.set(i, bi(Eo.get(i) || null, A, e, t, r, n)), !0
      );
  }
  return !1;
}
function xw(A) {
  var e = An(A.target);
  if (e !== null) {
    var t = mn(e);
    if (t !== null) {
      if (((e = t.tag), e === 13)) {
        if (((e = hw(t)), e !== null)) {
          (A.blockedOn = e),
            Iw(A.priority, function () {
              Fw(t);
            });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function Ss(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = df(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      (af = r), t.target.dispatchEvent(r), (af = null);
    } else return (e = ea(t)), e !== null && Nd(e), (A.blockedOn = t), !1;
    e.shift();
  }
  return !0;
}
function Dg(A, e, t) {
  Ss(A) && t.delete(e);
}
function by() {
  (ff = !1),
    yr !== null && Ss(yr) && (yr = null),
    Ur !== null && Ss(Ur) && (Ur = null),
    Fr !== null && Ss(Fr) && (Fr = null),
    Fo.forEach(Dg),
    Eo.forEach(Dg);
}
function Oi(A, e) {
  A.blockedOn === e &&
    ((A.blockedOn = null),
    ff ||
      ((ff = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, by)));
}
function Io(A) {
  function e(n) {
    return Oi(n, A);
  }
  if (0 < Ma.length) {
    Oi(Ma[0], A);
    for (var t = 1; t < Ma.length; t++) {
      var r = Ma[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (
    yr !== null && Oi(yr, A),
      Ur !== null && Oi(Ur, A),
      Fr !== null && Oi(Fr, A),
      Fo.forEach(e),
      Eo.forEach(e),
      t = 0;
    t < Br.length;
    t++
  )
    (r = Br[t]), r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < Br.length && ((t = Br[0]), t.blockedOn === null); )
    xw(t), t.blockedOn === null && Br.shift();
}
var ti = qt.ReactCurrentBatchConfig,
  el = !0;
function Oy(A, e, t, r) {
  var n = wA,
    i = ti.transition;
  ti.transition = null;
  try {
    (wA = 1), Md(A, e, t, r);
  } finally {
    (wA = n), (ti.transition = i);
  }
}
function Ry(A, e, t, r) {
  var n = wA,
    i = ti.transition;
  ti.transition = null;
  try {
    (wA = 4), Md(A, e, t, r);
  } finally {
    (wA = n), (ti.transition = i);
  }
}
function Md(A, e, t, r) {
  if (el) {
    var n = df(A, e, t, r);
    if (n === null) ec(A, e, r, tl, t), Tg(A, r);
    else if (Dy(n, A, e, t, r)) r.stopPropagation();
    else if ((Tg(A, r), e & 4 && -1 < Ty.indexOf(A))) {
      for (; n !== null; ) {
        var i = ea(n);
        if (
          (i !== null && Uw(i),
          (i = df(A, e, t, r)),
          i === null && ec(A, e, r, tl, t),
          i === n)
        )
          break;
        n = i;
      }
      n !== null && r.stopPropagation();
    } else ec(A, e, r, null, t);
  }
}
var tl = null;
function df(A, e, t, r) {
  if (((tl = null), (A = Od(r)), (A = An(A)), A !== null))
    if (((e = mn(A)), e === null)) A = null;
    else if (((t = e.tag), t === 13)) {
      if (((A = hw(e)), A !== null)) return A;
      A = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      A = null;
    } else e !== A && (A = null);
  return (tl = A), null;
}
function Hw(A) {
  switch (A) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yy()) {
        case Rd:
          return 1;
        case mw:
          return 4;
        case qs:
        case Uy:
          return 16;
        case Cw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hr = null,
  _d = null,
  Ls = null;
function Sw() {
  if (Ls) return Ls;
  var A,
    e = _d,
    t = e.length,
    r,
    n = "value" in hr ? hr.value : hr.textContent,
    i = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++);
  var o = t - A;
  for (r = 1; r <= o && e[t - r] === n[i - r]; r++);
  return (Ls = n.slice(A, 1 < r ? 1 - r : void 0));
}
function Ts(A) {
  var e = A.keyCode;
  return (
    "charCode" in A
      ? ((A = A.charCode), A === 0 && e === 13 && (A = 13))
      : (A = e),
    A === 10 && (A = 13),
    32 <= A || A === 13 ? A : 0
  );
}
function _a() {
  return !0;
}
function bg() {
  return !1;
}
function Pe(A) {
  function e(t, r, n, i, o) {
    (this._reactName = t),
      (this._targetInst = n),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in A)
      A.hasOwnProperty(a) && ((t = A[a]), (this[a] = t ? t(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _a
        : bg),
      (this.isPropagationStopped = bg),
      this
    );
  }
  return (
    RA(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = _a));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = _a));
      },
      persist: function () {},
      isPersistent: _a,
    }),
    e
  );
}
var Ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (A) {
      return A.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  kd = Pe(Ci),
  Aa = RA({}, Ci, { view: 0, detail: 0 }),
  Ky = Pe(Aa),
  Wu,
  Xu,
  Ri,
  Vl = RA({}, Aa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (A) {
      return A.relatedTarget === void 0
        ? A.fromElement === A.srcElement
          ? A.toElement
          : A.fromElement
        : A.relatedTarget;
    },
    movementX: function (A) {
      return "movementX" in A
        ? A.movementX
        : (A !== Ri &&
            (Ri && A.type === "mousemove"
              ? ((Wu = A.screenX - Ri.screenX), (Xu = A.screenY - Ri.screenY))
              : (Xu = Wu = 0),
            (Ri = A)),
          Wu);
    },
    movementY: function (A) {
      return "movementY" in A ? A.movementY : Xu;
    },
  }),
  Og = Pe(Vl),
  Ny = RA({}, Vl, { dataTransfer: 0 }),
  My = Pe(Ny),
  _y = RA({}, Aa, { relatedTarget: 0 }),
  zu = Pe(_y),
  ky = RA({}, Ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Py = Pe(ky),
  Vy = RA({}, Ci, {
    clipboardData: function (A) {
      return "clipboardData" in A ? A.clipboardData : window.clipboardData;
    },
  }),
  Gy = Pe(Vy),
  jy = RA({}, Ci, { data: 0 }),
  Rg = Pe(jy),
  Wy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Xy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jy(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = zy[A]) ? !!e[A] : !1;
}
function Pd() {
  return Jy;
}
var Yy = RA({}, Aa, {
    key: function (A) {
      if (A.key) {
        var e = Wy[A.key] || A.key;
        if (e !== "Unidentified") return e;
      }
      return A.type === "keypress"
        ? ((A = Ts(A)), A === 13 ? "Enter" : String.fromCharCode(A))
        : A.type === "keydown" || A.type === "keyup"
        ? Xy[A.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pd,
    charCode: function (A) {
      return A.type === "keypress" ? Ts(A) : 0;
    },
    keyCode: function (A) {
      return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
    },
    which: function (A) {
      return A.type === "keypress"
        ? Ts(A)
        : A.type === "keydown" || A.type === "keyup"
        ? A.keyCode
        : 0;
    },
  }),
  Zy = Pe(Yy),
  $y = RA({}, Vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Kg = Pe($y),
  qy = RA({}, Aa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pd,
  }),
  AU = Pe(qy),
  eU = RA({}, Ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tU = Pe(eU),
  rU = RA({}, Vl, {
    deltaX: function (A) {
      return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
    },
    deltaY: function (A) {
      return "deltaY" in A
        ? A.deltaY
        : "wheelDeltaY" in A
        ? -A.wheelDeltaY
        : "wheelDelta" in A
        ? -A.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nU = Pe(rU),
  iU = [9, 13, 27, 32],
  Vd = jt && "CompositionEvent" in window,
  ao = null;
jt && "documentMode" in document && (ao = document.documentMode);
var oU = jt && "TextEvent" in window && !ao,
  Lw = jt && (!Vd || (ao && 8 < ao && 11 >= ao)),
  Ng = " ",
  Mg = !1;
function Tw(A, e) {
  switch (A) {
    case "keyup":
      return iU.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dw(A) {
  return (A = A.detail), typeof A == "object" && "data" in A ? A.data : null;
}
var _n = !1;
function aU(A, e) {
  switch (A) {
    case "compositionend":
      return Dw(e);
    case "keypress":
      return e.which !== 32 ? null : ((Mg = !0), Ng);
    case "textInput":
      return (A = e.data), A === Ng && Mg ? null : A;
    default:
      return null;
  }
}
function sU(A, e) {
  if (_n)
    return A === "compositionend" || (!Vd && Tw(A, e))
      ? ((A = Sw()), (Ls = _d = hr = null), (_n = !1), A)
      : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Lw && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var lU = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _g(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!lU[A.type] : e === "textarea";
}
function bw(A, e, t, r) {
  cw(r),
    (e = rl(e, "onChange")),
    0 < e.length &&
      ((t = new kd("onChange", "change", null, t, r)),
      A.push({ event: t, listeners: e }));
}
var so = null,
  xo = null;
function uU(A) {
  jw(A, 0);
}
function Gl(A) {
  var e = Vn(A);
  if (nw(e)) return A;
}
function cU(A, e) {
  if (A === "change") return e;
}
var Ow = !1;
if (jt) {
  var Ju;
  if (jt) {
    var Yu = "oninput" in document;
    if (!Yu) {
      var kg = document.createElement("div");
      kg.setAttribute("oninput", "return;"),
        (Yu = typeof kg.oninput == "function");
    }
    Ju = Yu;
  } else Ju = !1;
  Ow = Ju && (!document.documentMode || 9 < document.documentMode);
}
function Pg() {
  so && (so.detachEvent("onpropertychange", Rw), (xo = so = null));
}
function Rw(A) {
  if (A.propertyName === "value" && Gl(xo)) {
    var e = [];
    bw(e, xo, A, Od(A)), gw(uU, e);
  }
}
function fU(A, e, t) {
  A === "focusin"
    ? (Pg(), (so = e), (xo = t), so.attachEvent("onpropertychange", Rw))
    : A === "focusout" && Pg();
}
function dU(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown")
    return Gl(xo);
}
function BU(A, e) {
  if (A === "click") return Gl(e);
}
function gU(A, e) {
  if (A === "input" || A === "change") return Gl(e);
}
function hU(A, e) {
  return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
}
var ft = typeof Object.is == "function" ? Object.is : hU;
function Ho(A, e) {
  if (ft(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null)
    return !1;
  var t = Object.keys(A),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!zc.call(e, n) || !ft(A[n], e[n])) return !1;
  }
  return !0;
}
function Vg(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function Gg(A, e) {
  var t = Vg(A);
  A = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = A + t.textContent.length), A <= e && r >= e))
        return { node: t, offset: e - A };
      A = r;
    }
    A: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Vg(t);
  }
}
function Kw(A, e) {
  return A && e
    ? A === e
      ? !0
      : A && A.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Kw(A, e.parentNode)
      : "contains" in A
      ? A.contains(e)
      : A.compareDocumentPosition
      ? !!(A.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Nw() {
  for (var A = window, e = Ys(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = Ys(A.document);
  }
  return e;
}
function Gd(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (A.type === "text" ||
        A.type === "search" ||
        A.type === "tel" ||
        A.type === "url" ||
        A.type === "password")) ||
      e === "textarea" ||
      A.contentEditable === "true")
  );
}
function pU(A) {
  var e = Nw(),
    t = A.focusedElem,
    r = A.selectionRange;
  if (
    e !== t &&
    t &&
    t.ownerDocument &&
    Kw(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && Gd(t)) {
      if (
        ((e = r.start),
        (A = r.end),
        A === void 0 && (A = e),
        "selectionStart" in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(A, t.value.length));
      else if (
        ((A = ((e = t.ownerDocument || document) && e.defaultView) || window),
        A.getSelection)
      ) {
        A = A.getSelection();
        var n = t.textContent.length,
          i = Math.min(r.start, n);
        (r = r.end === void 0 ? i : Math.min(r.end, n)),
          !A.extend && i > r && ((n = r), (r = i), (i = n)),
          (n = Gg(t, i));
        var o = Gg(t, r);
        n &&
          o &&
          (A.rangeCount !== 1 ||
            A.anchorNode !== n.node ||
            A.anchorOffset !== n.offset ||
            A.focusNode !== o.node ||
            A.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(n.node, n.offset),
          A.removeAllRanges(),
          i > r
            ? (A.addRange(e), A.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; (A = A.parentNode); )
      A.nodeType === 1 &&
        e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
      (A = e[t]),
        (A.element.scrollLeft = A.left),
        (A.element.scrollTop = A.top);
  }
}
var wU = jt && "documentMode" in document && 11 >= document.documentMode,
  kn = null,
  Bf = null,
  lo = null,
  gf = !1;
function jg(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  gf ||
    kn == null ||
    kn !== Ys(r) ||
    ((r = kn),
    "selectionStart" in r && Gd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (lo && Ho(lo, r)) ||
      ((lo = r),
      (r = rl(Bf, "onSelect")),
      0 < r.length &&
        ((e = new kd("onSelect", "select", null, e, t)),
        A.push({ event: e, listeners: r }),
        (e.target = kn))));
}
function ka(A, e) {
  var t = {};
  return (
    (t[A.toLowerCase()] = e.toLowerCase()),
    (t["Webkit" + A] = "webkit" + e),
    (t["Moz" + A] = "moz" + e),
    t
  );
}
var Pn = {
    animationend: ka("Animation", "AnimationEnd"),
    animationiteration: ka("Animation", "AnimationIteration"),
    animationstart: ka("Animation", "AnimationStart"),
    transitionend: ka("Transition", "TransitionEnd"),
  },
  Zu = {},
  Mw = {};
jt &&
  ((Mw = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function jl(A) {
  if (Zu[A]) return Zu[A];
  if (!Pn[A]) return A;
  var e = Pn[A],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in Mw) return (Zu[A] = e[t]);
  return A;
}
var _w = jl("animationend"),
  kw = jl("animationiteration"),
  Pw = jl("animationstart"),
  Vw = jl("transitionend"),
  Gw = new Map(),
  Wg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nr(A, e) {
  Gw.set(A, e), vn(e, [A]);
}
for (var $u = 0; $u < Wg.length; $u++) {
  var qu = Wg[$u],
    vU = qu.toLowerCase(),
    mU = qu[0].toUpperCase() + qu.slice(1);
  Nr(vU, "on" + mU);
}
Nr(_w, "onAnimationEnd");
Nr(kw, "onAnimationIteration");
Nr(Pw, "onAnimationStart");
Nr("dblclick", "onDoubleClick");
Nr("focusin", "onFocus");
Nr("focusout", "onBlur");
Nr(Vw, "onTransitionEnd");
si("onMouseEnter", ["mouseout", "mouseover"]);
si("onMouseLeave", ["mouseout", "mouseover"]);
si("onPointerEnter", ["pointerout", "pointerover"]);
si("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  CU = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
function Xg(A, e, t) {
  var r = A.type || "unknown-event";
  (A.currentTarget = t), vy(r, e, void 0, A), (A.currentTarget = null);
}
function jw(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t],
      n = r.event;
    r = r.listeners;
    A: {
      var i = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            l = a.currentTarget;
          if (((a = a.listener), s !== i && n.isPropagationStopped())) break A;
          Xg(n, a, l), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (l = a.currentTarget),
            (a = a.listener),
            s !== i && n.isPropagationStopped())
          )
            break A;
          Xg(n, a, l), (i = s);
        }
    }
  }
  if ($s) throw ((A = uf), ($s = !1), (uf = null), A);
}
function EA(A, e) {
  var t = e[mf];
  t === void 0 && (t = e[mf] = new Set());
  var r = A + "__bubble";
  t.has(r) || (Ww(e, A, 2, !1), t.add(r));
}
function Ac(A, e, t) {
  var r = 0;
  e && (r |= 4), Ww(t, A, r, e);
}
var Pa = "_reactListening" + Math.random().toString(36).slice(2);
function So(A) {
  if (!A[Pa]) {
    (A[Pa] = !0),
      q0.forEach(function (t) {
        t !== "selectionchange" && (CU.has(t) || Ac(t, !1, A), Ac(t, !0, A));
      });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Pa] || ((e[Pa] = !0), Ac("selectionchange", !1, e));
  }
}
function Ww(A, e, t, r) {
  switch (Hw(e)) {
    case 1:
      var n = Oy;
      break;
    case 4:
      n = Ry;
      break;
    default:
      n = Md;
  }
  (t = n.bind(null, e, t, A)),
    (n = void 0),
    !lf ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (n = !0),
    r
      ? n !== void 0
        ? A.addEventListener(e, t, { capture: !0, passive: n })
        : A.addEventListener(e, t, !0)
      : n !== void 0
      ? A.addEventListener(e, t, { passive: n })
      : A.addEventListener(e, t, !1);
}
function ec(A, e, t, r, n) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    A: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === n || (a.nodeType === 8 && a.parentNode === n)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === n || (s.nodeType === 8 && s.parentNode === n))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = An(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue A;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  gw(function () {
    var l = i,
      u = Od(t),
      c = [];
    A: {
      var f = Gw.get(A);
      if (f !== void 0) {
        var h = kd,
          g = A;
        switch (A) {
          case "keypress":
            if (Ts(t) === 0) break A;
          case "keydown":
          case "keyup":
            h = Zy;
            break;
          case "focusin":
            (g = "focus"), (h = zu);
            break;
          case "focusout":
            (g = "blur"), (h = zu);
            break;
          case "beforeblur":
          case "afterblur":
            h = zu;
            break;
          case "click":
            if (t.button === 2) break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Og;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = My;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = AU;
            break;
          case _w:
          case kw:
          case Pw:
            h = Py;
            break;
          case Vw:
            h = tU;
            break;
          case "scroll":
            h = Ky;
            break;
          case "wheel":
            h = nU;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Gy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Kg;
        }
        var p = (e & 4) !== 0,
          F = !p && A === "scroll",
          B = p ? (f !== null ? f + "Capture" : null) : f;
        p = [];
        for (var d = l, w; d !== null; ) {
          w = d;
          var C = w.stateNode;
          if (
            (w.tag === 5 &&
              C !== null &&
              ((w = C),
              B !== null && ((C = Uo(d, B)), C != null && p.push(Lo(d, C, w)))),
            F)
          )
            break;
          d = d.return;
        }
        0 < p.length &&
          ((f = new h(f, g, null, t, u)), c.push({ event: f, listeners: p }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (
          ((f = A === "mouseover" || A === "pointerover"),
          (h = A === "mouseout" || A === "pointerout"),
          f &&
            t !== af &&
            (g = t.relatedTarget || t.fromElement) &&
            (An(g) || g[Wt]))
        )
          break A;
        if (
          (h || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((g = t.relatedTarget || t.toElement),
              (h = l),
              (g = g ? An(g) : null),
              g !== null &&
                ((F = mn(g)), g !== F || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((h = null), (g = l)),
          h !== g)
        ) {
          if (
            ((p = Og),
            (C = "onMouseLeave"),
            (B = "onMouseEnter"),
            (d = "mouse"),
            (A === "pointerout" || A === "pointerover") &&
              ((p = Kg),
              (C = "onPointerLeave"),
              (B = "onPointerEnter"),
              (d = "pointer")),
            (F = h == null ? f : Vn(h)),
            (w = g == null ? f : Vn(g)),
            (f = new p(C, d + "leave", h, t, u)),
            (f.target = F),
            (f.relatedTarget = w),
            (C = null),
            An(u) === l &&
              ((p = new p(B, d + "enter", g, t, u)),
              (p.target = w),
              (p.relatedTarget = F),
              (C = p)),
            (F = C),
            h && g)
          )
            e: {
              for (p = h, B = g, d = 0, w = p; w; w = En(w)) d++;
              for (w = 0, C = B; C; C = En(C)) w++;
              for (; 0 < d - w; ) (p = En(p)), d--;
              for (; 0 < w - d; ) (B = En(B)), w--;
              for (; d--; ) {
                if (p === B || (B !== null && p === B.alternate)) break e;
                (p = En(p)), (B = En(B));
              }
              p = null;
            }
          else p = null;
          h !== null && zg(c, f, h, p, !1),
            g !== null && F !== null && zg(c, F, g, p, !0);
        }
      }
      A: {
        if (
          ((f = l ? Vn(l) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var m = cU;
        else if (_g(f))
          if (Ow) m = gU;
          else {
            m = dU;
            var y = fU;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (m = BU);
        if (m && (m = m(A, l))) {
          bw(c, m, t, u);
          break A;
        }
        y && y(A, f, l),
          A === "focusout" &&
            (y = f._wrapperState) &&
            y.controlled &&
            f.type === "number" &&
            ef(f, "number", f.value);
      }
      switch (((y = l ? Vn(l) : window), A)) {
        case "focusin":
          (_g(y) || y.contentEditable === "true") &&
            ((kn = y), (Bf = l), (lo = null));
          break;
        case "focusout":
          lo = Bf = kn = null;
          break;
        case "mousedown":
          gf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gf = !1), jg(c, t, u);
          break;
        case "selectionchange":
          if (wU) break;
        case "keydown":
        case "keyup":
          jg(c, t, u);
      }
      var E;
      if (Vd)
        A: {
          switch (A) {
            case "compositionstart":
              var v = "onCompositionStart";
              break A;
            case "compositionend":
              v = "onCompositionEnd";
              break A;
            case "compositionupdate":
              v = "onCompositionUpdate";
              break A;
          }
          v = void 0;
        }
      else
        _n
          ? Tw(A, t) && (v = "onCompositionEnd")
          : A === "keydown" && t.keyCode === 229 && (v = "onCompositionStart");
      v &&
        (Lw &&
          t.locale !== "ko" &&
          (_n || v !== "onCompositionStart"
            ? v === "onCompositionEnd" && _n && (E = Sw())
            : ((hr = u),
              (_d = "value" in hr ? hr.value : hr.textContent),
              (_n = !0))),
        (y = rl(l, v)),
        0 < y.length &&
          ((v = new Rg(v, A, null, t, u)),
          c.push({ event: v, listeners: y }),
          E ? (v.data = E) : ((E = Dw(t)), E !== null && (v.data = E)))),
        (E = oU ? aU(A, t) : sU(A, t)) &&
          ((l = rl(l, "onBeforeInput")),
          0 < l.length &&
            ((u = new Rg("onBeforeInput", "beforeinput", null, t, u)),
            c.push({ event: u, listeners: l }),
            (u.data = E)));
    }
    jw(c, e);
  });
}
function Lo(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function rl(A, e) {
  for (var t = e + "Capture", r = []; A !== null; ) {
    var n = A,
      i = n.stateNode;
    n.tag === 5 &&
      i !== null &&
      ((n = i),
      (i = Uo(A, t)),
      i != null && r.unshift(Lo(A, i, n)),
      (i = Uo(A, e)),
      i != null && r.push(Lo(A, i, n))),
      (A = A.return);
  }
  return r;
}
function En(A) {
  if (A === null) return null;
  do A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function zg(A, e, t, r, n) {
  for (var i = e._reactName, o = []; t !== null && t !== r; ) {
    var a = t,
      s = a.alternate,
      l = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      l !== null &&
      ((a = l),
      n
        ? ((s = Uo(t, i)), s != null && o.unshift(Lo(t, s, a)))
        : n || ((s = Uo(t, i)), s != null && o.push(Lo(t, s, a)))),
      (t = t.return);
  }
  o.length !== 0 && A.push({ event: e, listeners: o });
}
var QU = /\r\n?/g,
  yU = /\u0000|\uFFFD/g;
function Jg(A) {
  return (typeof A == "string" ? A : "" + A)
    .replace(
      QU,
      `
`
    )
    .replace(yU, "");
}
function Va(A, e, t) {
  if (((e = Jg(e)), Jg(A) !== e && t)) throw Error(k(425));
}
function nl() {}
var hf = null,
  pf = null;
function wf(A, e) {
  return (
    A === "textarea" ||
    A === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var vf = typeof setTimeout == "function" ? setTimeout : void 0,
  UU = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yg = typeof Promise == "function" ? Promise : void 0,
  FU =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yg < "u"
      ? function (A) {
          return Yg.resolve(null).then(A).catch(EU);
        }
      : vf;
function EU(A) {
  setTimeout(function () {
    throw A;
  });
}
function tc(A, e) {
  var t = e,
    r = 0;
  do {
    var n = t.nextSibling;
    if ((A.removeChild(t), n && n.nodeType === 8))
      if (((t = n.data), t === "/$")) {
        if (r === 0) {
          A.removeChild(n), Io(e);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = n;
  } while (t);
  Io(e);
}
function Er(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = A.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return A;
}
function Zg(A) {
  A = A.previousSibling;
  for (var e = 0; A; ) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return A;
        e--;
      } else t === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var Qi = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + Qi,
  To = "__reactProps$" + Qi,
  Wt = "__reactContainer$" + Qi,
  mf = "__reactEvents$" + Qi,
  IU = "__reactListeners$" + Qi,
  xU = "__reactHandles$" + Qi;
function An(A) {
  var e = A[vt];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if ((e = t[Wt] || t[vt])) {
      if (
        ((t = e.alternate),
        e.child !== null || (t !== null && t.child !== null))
      )
        for (A = Zg(A); A !== null; ) {
          if ((t = A[vt])) return t;
          A = Zg(A);
        }
      return e;
    }
    (A = t), (t = A.parentNode);
  }
  return null;
}
function ea(A) {
  return (
    (A = A[vt] || A[Wt]),
    !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3) ? null : A
  );
}
function Vn(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(k(33));
}
function Wl(A) {
  return A[To] || null;
}
var Cf = [],
  Gn = -1;
function Mr(A) {
  return { current: A };
}
function IA(A) {
  0 > Gn || ((A.current = Cf[Gn]), (Cf[Gn] = null), Gn--);
}
function yA(A, e) {
  Gn++, (Cf[Gn] = A.current), (A.current = e);
}
var br = {},
  pe = Mr(br),
  Le = Mr(!1),
  cn = br;
function li(A, e) {
  var t = A.type.contextTypes;
  if (!t) return br;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var n = {},
    i;
  for (i in t) n[i] = e[i];
  return (
    r &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = e),
      (A.__reactInternalMemoizedMaskedChildContext = n)),
    n
  );
}
function Te(A) {
  return (A = A.childContextTypes), A != null;
}
function il() {
  IA(Le), IA(pe);
}
function $g(A, e, t) {
  if (pe.current !== br) throw Error(k(168));
  yA(pe, e), yA(Le, t);
}
function Xw(A, e, t) {
  var r = A.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(k(108, fy(A) || "Unknown", n));
  return RA({}, t, r);
}
function ol(A) {
  return (
    (A =
      ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) || br),
    (cn = pe.current),
    yA(pe, A),
    yA(Le, Le.current),
    !0
  );
}
function qg(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(k(169));
  t
    ? ((A = Xw(A, e, cn)),
      (r.__reactInternalMemoizedMergedChildContext = A),
      IA(Le),
      IA(pe),
      yA(pe, A))
    : IA(Le),
    yA(Le, t);
}
var Ot = null,
  Xl = !1,
  rc = !1;
function zw(A) {
  Ot === null ? (Ot = [A]) : Ot.push(A);
}
function HU(A) {
  (Xl = !0), zw(A);
}
function _r() {
  if (!rc && Ot !== null) {
    rc = !0;
    var A = 0,
      e = wA;
    try {
      var t = Ot;
      for (wA = 1; A < t.length; A++) {
        var r = t[A];
        do r = r(!0);
        while (r !== null);
      }
      (Ot = null), (Xl = !1);
    } catch (n) {
      throw (Ot !== null && (Ot = Ot.slice(A + 1)), vw(Rd, _r), n);
    } finally {
      (wA = e), (rc = !1);
    }
  }
  return null;
}
var jn = [],
  Wn = 0,
  al = null,
  sl = 0,
  Ge = [],
  je = 0,
  fn = null,
  Kt = 1,
  Nt = "";
function Yr(A, e) {
  (jn[Wn++] = sl), (jn[Wn++] = al), (al = A), (sl = e);
}
function Jw(A, e, t) {
  (Ge[je++] = Kt), (Ge[je++] = Nt), (Ge[je++] = fn), (fn = A);
  var r = Kt;
  A = Nt;
  var n = 32 - ut(r) - 1;
  (r &= ~(1 << n)), (t += 1);
  var i = 32 - ut(e) + n;
  if (30 < i) {
    var o = n - (n % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (n -= o),
      (Kt = (1 << (32 - ut(e) + n)) | (t << n) | r),
      (Nt = i + A);
  } else (Kt = (1 << i) | (t << n) | r), (Nt = A);
}
function jd(A) {
  A.return !== null && (Yr(A, 1), Jw(A, 1, 0));
}
function Wd(A) {
  for (; A === al; )
    (al = jn[--Wn]), (jn[Wn] = null), (sl = jn[--Wn]), (jn[Wn] = null);
  for (; A === fn; )
    (fn = Ge[--je]),
      (Ge[je] = null),
      (Nt = Ge[--je]),
      (Ge[je] = null),
      (Kt = Ge[--je]),
      (Ge[je] = null);
}
var Me = null,
  Ne = null,
  SA = !1,
  at = null;
function Yw(A, e) {
  var t = ze(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = e),
    (t.return = A),
    (e = A.deletions),
    e === null ? ((A.deletions = [t]), (A.flags |= 16)) : e.push(t);
}
function Ah(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return (
        (e =
          e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((A.stateNode = e), (Me = A), (Ne = Er(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = A.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((A.stateNode = e), (Me = A), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((t = fn !== null ? { id: Kt, overflow: Nt } : null),
            (A.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = ze(18, null, null, 0)),
            (t.stateNode = e),
            (t.return = A),
            (A.child = t),
            (Me = A),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qf(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function yf(A) {
  if (SA) {
    var e = Ne;
    if (e) {
      var t = e;
      if (!Ah(A, e)) {
        if (Qf(A)) throw Error(k(418));
        e = Er(t.nextSibling);
        var r = Me;
        e && Ah(A, e)
          ? Yw(r, t)
          : ((A.flags = (A.flags & -4097) | 2), (SA = !1), (Me = A));
      }
    } else {
      if (Qf(A)) throw Error(k(418));
      (A.flags = (A.flags & -4097) | 2), (SA = !1), (Me = A);
    }
  }
}
function eh(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; )
    A = A.return;
  Me = A;
}
function Ga(A) {
  if (A !== Me) return !1;
  if (!SA) return eh(A), (SA = !0), !1;
  var e;
  if (
    ((e = A.tag !== 3) &&
      !(e = A.tag !== 5) &&
      ((e = A.type),
      (e = e !== "head" && e !== "body" && !wf(A.type, A.memoizedProps))),
    e && (e = Ne))
  ) {
    if (Qf(A)) throw (Zw(), Error(k(418)));
    for (; e; ) Yw(A, e), (e = Er(e.nextSibling));
  }
  if ((eh(A), A.tag === 13)) {
    if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
      throw Error(k(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              Ne = Er(A.nextSibling);
              break A;
            }
            e--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || e++;
        }
        A = A.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Me ? Er(A.stateNode.nextSibling) : null;
  return !0;
}
function Zw() {
  for (var A = Ne; A; ) A = Er(A.nextSibling);
}
function ui() {
  (Ne = Me = null), (SA = !1);
}
function Xd(A) {
  at === null ? (at = [A]) : at.push(A);
}
var SU = qt.ReactCurrentBatchConfig;
function Ki(A, e, t) {
  if (
    ((A = t.ref), A !== null && typeof A != "function" && typeof A != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(k(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(k(147, A));
      var n = r,
        i = "" + A;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (o) {
            var a = n.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof A != "string") throw Error(k(284));
    if (!t._owner) throw Error(k(290, A));
  }
  return A;
}
function ja(A, e) {
  throw (
    ((A = Object.prototype.toString.call(e)),
    Error(
      k(
        31,
        A === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : A
      )
    ))
  );
}
function th(A) {
  var e = A._init;
  return e(A._payload);
}
function $w(A) {
  function e(B, d) {
    if (A) {
      var w = B.deletions;
      w === null ? ((B.deletions = [d]), (B.flags |= 16)) : w.push(d);
    }
  }
  function t(B, d) {
    if (!A) return null;
    for (; d !== null; ) e(B, d), (d = d.sibling);
    return null;
  }
  function r(B, d) {
    for (B = new Map(); d !== null; )
      d.key !== null ? B.set(d.key, d) : B.set(d.index, d), (d = d.sibling);
    return B;
  }
  function n(B, d) {
    return (B = Sr(B, d)), (B.index = 0), (B.sibling = null), B;
  }
  function i(B, d, w) {
    return (
      (B.index = w),
      A
        ? ((w = B.alternate),
          w !== null
            ? ((w = w.index), w < d ? ((B.flags |= 2), d) : w)
            : ((B.flags |= 2), d))
        : ((B.flags |= 1048576), d)
    );
  }
  function o(B) {
    return A && B.alternate === null && (B.flags |= 2), B;
  }
  function a(B, d, w, C) {
    return d === null || d.tag !== 6
      ? ((d = uc(w, B.mode, C)), (d.return = B), d)
      : ((d = n(d, w)), (d.return = B), d);
  }
  function s(B, d, w, C) {
    var m = w.type;
    return m === Mn
      ? u(B, d, w.props.children, C, w.key)
      : d !== null &&
        (d.elementType === m ||
          (typeof m == "object" &&
            m !== null &&
            m.$$typeof === cr &&
            th(m) === d.type))
      ? ((C = n(d, w.props)), (C.ref = Ki(B, d, w)), (C.return = B), C)
      : ((C = Ms(w.type, w.key, w.props, null, B.mode, C)),
        (C.ref = Ki(B, d, w)),
        (C.return = B),
        C);
  }
  function l(B, d, w, C) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== w.containerInfo ||
      d.stateNode.implementation !== w.implementation
      ? ((d = cc(w, B.mode, C)), (d.return = B), d)
      : ((d = n(d, w.children || [])), (d.return = B), d);
  }
  function u(B, d, w, C, m) {
    return d === null || d.tag !== 7
      ? ((d = an(w, B.mode, C, m)), (d.return = B), d)
      : ((d = n(d, w)), (d.return = B), d);
  }
  function c(B, d, w) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = uc("" + d, B.mode, w)), (d.return = B), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ba:
          return (
            (w = Ms(d.type, d.key, d.props, null, B.mode, w)),
            (w.ref = Ki(B, null, d)),
            (w.return = B),
            w
          );
        case Nn:
          return (d = cc(d, B.mode, w)), (d.return = B), d;
        case cr:
          var C = d._init;
          return c(B, C(d._payload), w);
      }
      if (zi(d) || Ti(d))
        return (d = an(d, B.mode, w, null)), (d.return = B), d;
      ja(B, d);
    }
    return null;
  }
  function f(B, d, w, C) {
    var m = d !== null ? d.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return m !== null ? null : a(B, d, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ba:
          return w.key === m ? s(B, d, w, C) : null;
        case Nn:
          return w.key === m ? l(B, d, w, C) : null;
        case cr:
          return (m = w._init), f(B, d, m(w._payload), C);
      }
      if (zi(w) || Ti(w)) return m !== null ? null : u(B, d, w, C, null);
      ja(B, w);
    }
    return null;
  }
  function h(B, d, w, C, m) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (B = B.get(w) || null), a(d, B, "" + C, m);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ba:
          return (B = B.get(C.key === null ? w : C.key) || null), s(d, B, C, m);
        case Nn:
          return (B = B.get(C.key === null ? w : C.key) || null), l(d, B, C, m);
        case cr:
          var y = C._init;
          return h(B, d, w, y(C._payload), m);
      }
      if (zi(C) || Ti(C)) return (B = B.get(w) || null), u(d, B, C, m, null);
      ja(d, C);
    }
    return null;
  }
  function g(B, d, w, C) {
    for (
      var m = null, y = null, E = d, v = (d = 0), x = null;
      E !== null && v < w.length;
      v++
    ) {
      E.index > v ? ((x = E), (E = null)) : (x = E.sibling);
      var H = f(B, E, w[v], C);
      if (H === null) {
        E === null && (E = x);
        break;
      }
      A && E && H.alternate === null && e(B, E),
        (d = i(H, d, v)),
        y === null ? (m = H) : (y.sibling = H),
        (y = H),
        (E = x);
    }
    if (v === w.length) return t(B, E), SA && Yr(B, v), m;
    if (E === null) {
      for (; v < w.length; v++)
        (E = c(B, w[v], C)),
          E !== null &&
            ((d = i(E, d, v)), y === null ? (m = E) : (y.sibling = E), (y = E));
      return SA && Yr(B, v), m;
    }
    for (E = r(B, E); v < w.length; v++)
      (x = h(E, B, v, w[v], C)),
        x !== null &&
          (A && x.alternate !== null && E.delete(x.key === null ? v : x.key),
          (d = i(x, d, v)),
          y === null ? (m = x) : (y.sibling = x),
          (y = x));
    return (
      A &&
        E.forEach(function (L) {
          return e(B, L);
        }),
      SA && Yr(B, v),
      m
    );
  }
  function p(B, d, w, C) {
    var m = Ti(w);
    if (typeof m != "function") throw Error(k(150));
    if (((w = m.call(w)), w == null)) throw Error(k(151));
    for (
      var y = (m = null), E = d, v = (d = 0), x = null, H = w.next();
      E !== null && !H.done;
      v++, H = w.next()
    ) {
      E.index > v ? ((x = E), (E = null)) : (x = E.sibling);
      var L = f(B, E, H.value, C);
      if (L === null) {
        E === null && (E = x);
        break;
      }
      A && E && L.alternate === null && e(B, E),
        (d = i(L, d, v)),
        y === null ? (m = L) : (y.sibling = L),
        (y = L),
        (E = x);
    }
    if (H.done) return t(B, E), SA && Yr(B, v), m;
    if (E === null) {
      for (; !H.done; v++, H = w.next())
        (H = c(B, H.value, C)),
          H !== null &&
            ((d = i(H, d, v)), y === null ? (m = H) : (y.sibling = H), (y = H));
      return SA && Yr(B, v), m;
    }
    for (E = r(B, E); !H.done; v++, H = w.next())
      (H = h(E, B, v, H.value, C)),
        H !== null &&
          (A && H.alternate !== null && E.delete(H.key === null ? v : H.key),
          (d = i(H, d, v)),
          y === null ? (m = H) : (y.sibling = H),
          (y = H));
    return (
      A &&
        E.forEach(function (O) {
          return e(B, O);
        }),
      SA && Yr(B, v),
      m
    );
  }
  function F(B, d, w, C) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Mn &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case ba:
          A: {
            for (var m = w.key, y = d; y !== null; ) {
              if (y.key === m) {
                if (((m = w.type), m === Mn)) {
                  if (y.tag === 7) {
                    t(B, y.sibling),
                      (d = n(y, w.props.children)),
                      (d.return = B),
                      (B = d);
                    break A;
                  }
                } else if (
                  y.elementType === m ||
                  (typeof m == "object" &&
                    m !== null &&
                    m.$$typeof === cr &&
                    th(m) === y.type)
                ) {
                  t(B, y.sibling),
                    (d = n(y, w.props)),
                    (d.ref = Ki(B, y, w)),
                    (d.return = B),
                    (B = d);
                  break A;
                }
                t(B, y);
                break;
              } else e(B, y);
              y = y.sibling;
            }
            w.type === Mn
              ? ((d = an(w.props.children, B.mode, C, w.key)),
                (d.return = B),
                (B = d))
              : ((C = Ms(w.type, w.key, w.props, null, B.mode, C)),
                (C.ref = Ki(B, d, w)),
                (C.return = B),
                (B = C));
          }
          return o(B);
        case Nn:
          A: {
            for (y = w.key; d !== null; ) {
              if (d.key === y)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === w.containerInfo &&
                  d.stateNode.implementation === w.implementation
                ) {
                  t(B, d.sibling),
                    (d = n(d, w.children || [])),
                    (d.return = B),
                    (B = d);
                  break A;
                } else {
                  t(B, d);
                  break;
                }
              else e(B, d);
              d = d.sibling;
            }
            (d = cc(w, B.mode, C)), (d.return = B), (B = d);
          }
          return o(B);
        case cr:
          return (y = w._init), F(B, d, y(w._payload), C);
      }
      if (zi(w)) return g(B, d, w, C);
      if (Ti(w)) return p(B, d, w, C);
      ja(B, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        d !== null && d.tag === 6
          ? (t(B, d.sibling), (d = n(d, w)), (d.return = B), (B = d))
          : (t(B, d), (d = uc(w, B.mode, C)), (d.return = B), (B = d)),
        o(B))
      : t(B, d);
  }
  return F;
}
var ci = $w(!0),
  qw = $w(!1),
  ll = Mr(null),
  ul = null,
  Xn = null,
  zd = null;
function Jd() {
  zd = Xn = ul = null;
}
function Yd(A) {
  var e = ll.current;
  IA(ll), (A._currentValue = e);
}
function Uf(A, e, t) {
  for (; A !== null; ) {
    var r = A.alternate;
    if (
      ((A.childLanes & e) !== e
        ? ((A.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      A === t)
    )
      break;
    A = A.return;
  }
}
function ri(A, e) {
  (ul = A),
    (zd = Xn = null),
    (A = A.dependencies),
    A !== null &&
      A.firstContext !== null &&
      (A.lanes & e && (He = !0), (A.firstContext = null));
}
function qe(A) {
  var e = A._currentValue;
  if (zd !== A)
    if (((A = { context: A, memoizedValue: e, next: null }), Xn === null)) {
      if (ul === null) throw Error(k(308));
      (Xn = A), (ul.dependencies = { lanes: 0, firstContext: A });
    } else Xn = Xn.next = A;
  return e;
}
var en = null;
function Zd(A) {
  en === null ? (en = [A]) : en.push(A);
}
function Av(A, e, t, r) {
  var n = e.interleaved;
  return (
    n === null ? ((t.next = t), Zd(e)) : ((t.next = n.next), (n.next = t)),
    (e.interleaved = t),
    Xt(A, r)
  );
}
function Xt(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; )
    (A.childLanes |= e),
      (t = A.alternate),
      t !== null && (t.childLanes |= e),
      (t = A),
      (A = A.return);
  return t.tag === 3 ? t.stateNode : null;
}
var fr = !1;
function $d(A) {
  A.updateQueue = {
    baseState: A.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ev(A, e) {
  (A = A.updateQueue),
    e.updateQueue === A &&
      (e.updateQueue = {
        baseState: A.baseState,
        firstBaseUpdate: A.firstBaseUpdate,
        lastBaseUpdate: A.lastBaseUpdate,
        shared: A.shared,
        effects: A.effects,
      });
}
function kt(A, e) {
  return {
    eventTime: A,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ir(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), BA & 2)) {
    var n = r.pending;
    return (
      n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (r.pending = e),
      Xt(A, t)
    );
  }
  return (
    (n = r.interleaved),
    n === null ? ((e.next = e), Zd(r)) : ((e.next = n.next), (n.next = e)),
    (r.interleaved = e),
    Xt(A, t)
  );
}
function Ds(A, e, t) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= A.pendingLanes), (t |= r), (e.lanes = t), Kd(A, t);
  }
}
function rh(A, e) {
  var t = A.updateQueue,
    r = A.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var n = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (n = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (n = i = e) : (i = i.next = e);
    } else n = i = e;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: n,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (A.updateQueue = t);
    return;
  }
  (A = t.lastBaseUpdate),
    A === null ? (t.firstBaseUpdate = e) : (A.next = e),
    (t.lastBaseUpdate = e);
}
function cl(A, e, t, r) {
  var n = A.updateQueue;
  fr = !1;
  var i = n.firstBaseUpdate,
    o = n.lastBaseUpdate,
    a = n.shared.pending;
  if (a !== null) {
    n.shared.pending = null;
    var s = a,
      l = s.next;
    (s.next = null), o === null ? (i = l) : (o.next = l), (o = s);
    var u = A.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = l) : (a.next = l),
        (u.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = n.baseState;
    (o = 0), (u = l = s = null), (a = i);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        A: {
          var g = A,
            p = a;
          switch (((f = e), (h = t), p.tag)) {
            case 1:
              if (((g = p.payload), typeof g == "function")) {
                c = g.call(h, c, f);
                break A;
              }
              c = g;
              break A;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = p.payload),
                (f = typeof g == "function" ? g.call(h, c, f) : g),
                f == null)
              )
                break A;
              c = RA({}, c, f);
              break A;
            case 2:
              fr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((A.flags |= 64),
          (f = n.effects),
          f === null ? (n.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((l = u = h), (s = c)) : (u = u.next = h),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = n.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (n.lastBaseUpdate = f),
          (n.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (s = c),
      (n.baseState = s),
      (n.firstBaseUpdate = l),
      (n.lastBaseUpdate = u),
      (e = n.shared.interleaved),
      e !== null)
    ) {
      n = e;
      do (o |= n.lane), (n = n.next);
      while (n !== e);
    } else i === null && (n.shared.lanes = 0);
    (Bn |= o), (A.lanes = o), (A.memoizedState = c);
  }
}
function nh(A, e, t) {
  if (((A = e.effects), (e.effects = null), A !== null))
    for (e = 0; e < A.length; e++) {
      var r = A[e],
        n = r.callback;
      if (n !== null) {
        if (((r.callback = null), (r = t), typeof n != "function"))
          throw Error(k(191, n));
        n.call(r);
      }
    }
}
var ta = {},
  Ct = Mr(ta),
  Do = Mr(ta),
  bo = Mr(ta);
function tn(A) {
  if (A === ta) throw Error(k(174));
  return A;
}
function qd(A, e) {
  switch ((yA(bo, e), yA(Do, A), yA(Ct, ta), (A = e.nodeType), A)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : rf(null, "");
      break;
    default:
      (A = A === 8 ? e.parentNode : e),
        (e = A.namespaceURI || null),
        (A = A.tagName),
        (e = rf(e, A));
  }
  IA(Ct), yA(Ct, e);
}
function fi() {
  IA(Ct), IA(Do), IA(bo);
}
function tv(A) {
  tn(bo.current);
  var e = tn(Ct.current),
    t = rf(e, A.type);
  e !== t && (yA(Do, A), yA(Ct, t));
}
function AB(A) {
  Do.current === A && (IA(Ct), IA(Do));
}
var bA = Mr(0);
function fl(A) {
  for (var e = A; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var nc = [];
function eB() {
  for (var A = 0; A < nc.length; A++)
    nc[A]._workInProgressVersionPrimary = null;
  nc.length = 0;
}
var bs = qt.ReactCurrentDispatcher,
  ic = qt.ReactCurrentBatchConfig,
  dn = 0,
  OA = null,
  Ae = null,
  ie = null,
  dl = !1,
  uo = !1,
  Oo = 0,
  LU = 0;
function fe() {
  throw Error(k(321));
}
function tB(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++)
    if (!ft(A[t], e[t])) return !1;
  return !0;
}
function rB(A, e, t, r, n, i) {
  if (
    ((dn = i),
    (OA = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (bs.current = A === null || A.memoizedState === null ? OU : RU),
    (A = t(r, n)),
    uo)
  ) {
    i = 0;
    do {
      if (((uo = !1), (Oo = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (ie = Ae = null),
        (e.updateQueue = null),
        (bs.current = KU),
        (A = t(r, n));
    } while (uo);
  }
  if (
    ((bs.current = Bl),
    (e = Ae !== null && Ae.next !== null),
    (dn = 0),
    (ie = Ae = OA = null),
    (dl = !1),
    e)
  )
    throw Error(k(300));
  return A;
}
function nB() {
  var A = Oo !== 0;
  return (Oo = 0), A;
}
function pt() {
  var A = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (OA.memoizedState = ie = A) : (ie = ie.next = A), ie;
}
function At() {
  if (Ae === null) {
    var A = OA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = Ae.next;
  var e = ie === null ? OA.memoizedState : ie.next;
  if (e !== null) (ie = e), (Ae = A);
  else {
    if (A === null) throw Error(k(310));
    (Ae = A),
      (A = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      ie === null ? (OA.memoizedState = ie = A) : (ie = ie.next = A);
  }
  return ie;
}
function Ro(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function oc(A) {
  var e = At(),
    t = e.queue;
  if (t === null) throw Error(k(311));
  t.lastRenderedReducer = A;
  var r = Ae,
    n = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (n !== null) {
      var o = n.next;
      (n.next = i.next), (i.next = o);
    }
    (r.baseQueue = n = i), (t.pending = null);
  }
  if (n !== null) {
    (i = n.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      l = i;
    do {
      var u = l.lane;
      if ((dn & u) === u)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : A(r, l.action));
      else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (o = r)) : (s = s.next = c),
          (OA.lanes |= u),
          (Bn |= u);
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? (o = r) : (s.next = a),
      ft(r, e.memoizedState) || (He = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((A = t.interleaved), A !== null)) {
    n = A;
    do (i = n.lane), (OA.lanes |= i), (Bn |= i), (n = n.next);
    while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function ac(A) {
  var e = At(),
    t = e.queue;
  if (t === null) throw Error(k(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch,
    n = t.pending,
    i = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var o = (n = n.next);
    do (i = A(i, o.action)), (o = o.next);
    while (o !== n);
    ft(i, e.memoizedState) || (He = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function rv() {}
function nv(A, e) {
  var t = OA,
    r = At(),
    n = e(),
    i = !ft(r.memoizedState, n);
  if (
    (i && ((r.memoizedState = n), (He = !0)),
    (r = r.queue),
    iB(av.bind(null, t, r, A), [A]),
    r.getSnapshot !== e || i || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Ko(9, ov.bind(null, t, r, n, e), void 0, null),
      oe === null)
    )
      throw Error(k(349));
    dn & 30 || iv(t, e, n);
  }
  return n;
}
function iv(A, e, t) {
  (A.flags |= 16384),
    (A = { getSnapshot: e, value: t }),
    (e = OA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (OA.updateQueue = e),
        (e.stores = [A]))
      : ((t = e.stores), t === null ? (e.stores = [A]) : t.push(A));
}
function ov(A, e, t, r) {
  (e.value = t), (e.getSnapshot = r), sv(e) && lv(A);
}
function av(A, e, t) {
  return t(function () {
    sv(e) && lv(A);
  });
}
function sv(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !ft(A, t);
  } catch {
    return !0;
  }
}
function lv(A) {
  var e = Xt(A, 1);
  e !== null && ct(e, A, 1, -1);
}
function ih(A) {
  var e = pt();
  return (
    typeof A == "function" && (A = A()),
    (e.memoizedState = e.baseState = A),
    (A = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ro,
      lastRenderedState: A,
    }),
    (e.queue = A),
    (A = A.dispatch = bU.bind(null, OA, A)),
    [e.memoizedState, A]
  );
}
function Ko(A, e, t, r) {
  return (
    (A = { tag: A, create: e, destroy: t, deps: r, next: null }),
    (e = OA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (OA.updateQueue = e),
        (e.lastEffect = A.next = A))
      : ((t = e.lastEffect),
        t === null
          ? (e.lastEffect = A.next = A)
          : ((r = t.next), (t.next = A), (A.next = r), (e.lastEffect = A))),
    A
  );
}
function uv() {
  return At().memoizedState;
}
function Os(A, e, t, r) {
  var n = pt();
  (OA.flags |= A),
    (n.memoizedState = Ko(1 | e, t, void 0, r === void 0 ? null : r));
}
function zl(A, e, t, r) {
  var n = At();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ae !== null) {
    var o = Ae.memoizedState;
    if (((i = o.destroy), r !== null && tB(r, o.deps))) {
      n.memoizedState = Ko(e, t, i, r);
      return;
    }
  }
  (OA.flags |= A), (n.memoizedState = Ko(1 | e, t, i, r));
}
function oh(A, e) {
  return Os(8390656, 8, A, e);
}
function iB(A, e) {
  return zl(2048, 8, A, e);
}
function cv(A, e) {
  return zl(4, 2, A, e);
}
function fv(A, e) {
  return zl(4, 4, A, e);
}
function dv(A, e) {
  if (typeof e == "function")
    return (
      (A = A()),
      e(A),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (A = A()),
      (e.current = A),
      function () {
        e.current = null;
      }
    );
}
function Bv(A, e, t) {
  return (
    (t = t != null ? t.concat([A]) : null), zl(4, 4, dv.bind(null, e, A), t)
  );
}
function oB() {}
function gv(A, e) {
  var t = At();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && tB(e, r[1])
    ? r[0]
    : ((t.memoizedState = [A, e]), A);
}
function hv(A, e) {
  var t = At();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && tB(e, r[1])
    ? r[0]
    : ((A = A()), (t.memoizedState = [A, e]), A);
}
function pv(A, e, t) {
  return dn & 21
    ? (ft(t, e) || ((t = Qw()), (OA.lanes |= t), (Bn |= t), (A.baseState = !0)),
      e)
    : (A.baseState && ((A.baseState = !1), (He = !0)), (A.memoizedState = t));
}
function TU(A, e) {
  var t = wA;
  (wA = t !== 0 && 4 > t ? t : 4), A(!0);
  var r = ic.transition;
  ic.transition = {};
  try {
    A(!1), e();
  } finally {
    (wA = t), (ic.transition = r);
  }
}
function wv() {
  return At().memoizedState;
}
function DU(A, e, t) {
  var r = Hr(A);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vv(A))
  )
    mv(e, t);
  else if (((t = Av(A, e, t, r)), t !== null)) {
    var n = Qe();
    ct(t, A, r, n), Cv(t, e, r);
  }
}
function bU(A, e, t) {
  var r = Hr(A),
    n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (vv(A)) mv(e, n);
  else {
    var i = A.alternate;
    if (
      A.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = i(o, t);
        if (((n.hasEagerState = !0), (n.eagerState = a), ft(a, o))) {
          var s = e.interleaved;
          s === null
            ? ((n.next = n), Zd(e))
            : ((n.next = s.next), (s.next = n)),
            (e.interleaved = n);
          return;
        }
      } catch {
      } finally {
      }
    (t = Av(A, e, n, r)),
      t !== null && ((n = Qe()), ct(t, A, r, n), Cv(t, e, r));
  }
}
function vv(A) {
  var e = A.alternate;
  return A === OA || (e !== null && e === OA);
}
function mv(A, e) {
  uo = dl = !0;
  var t = A.pending;
  t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
    (A.pending = e);
}
function Cv(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    (r &= A.pendingLanes), (t |= r), (e.lanes = t), Kd(A, t);
  }
}
var Bl = {
    readContext: qe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  OU = {
    readContext: qe,
    useCallback: function (A, e) {
      return (pt().memoizedState = [A, e === void 0 ? null : e]), A;
    },
    useContext: qe,
    useEffect: oh,
    useImperativeHandle: function (A, e, t) {
      return (
        (t = t != null ? t.concat([A]) : null),
        Os(4194308, 4, dv.bind(null, e, A), t)
      );
    },
    useLayoutEffect: function (A, e) {
      return Os(4194308, 4, A, e);
    },
    useInsertionEffect: function (A, e) {
      return Os(4, 2, A, e);
    },
    useMemo: function (A, e) {
      var t = pt();
      return (
        (e = e === void 0 ? null : e), (A = A()), (t.memoizedState = [A, e]), A
      );
    },
    useReducer: function (A, e, t) {
      var r = pt();
      return (
        (e = t !== void 0 ? t(e) : e),
        (r.memoizedState = r.baseState = e),
        (A = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: A,
          lastRenderedState: e,
        }),
        (r.queue = A),
        (A = A.dispatch = DU.bind(null, OA, A)),
        [r.memoizedState, A]
      );
    },
    useRef: function (A) {
      var e = pt();
      return (A = { current: A }), (e.memoizedState = A);
    },
    useState: ih,
    useDebugValue: oB,
    useDeferredValue: function (A) {
      return (pt().memoizedState = A);
    },
    useTransition: function () {
      var A = ih(!1),
        e = A[0];
      return (A = TU.bind(null, A[1])), (pt().memoizedState = A), [e, A];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (A, e, t) {
      var r = OA,
        n = pt();
      if (SA) {
        if (t === void 0) throw Error(k(407));
        t = t();
      } else {
        if (((t = e()), oe === null)) throw Error(k(349));
        dn & 30 || iv(r, e, t);
      }
      n.memoizedState = t;
      var i = { value: t, getSnapshot: e };
      return (
        (n.queue = i),
        oh(av.bind(null, r, i, A), [A]),
        (r.flags |= 2048),
        Ko(9, ov.bind(null, r, i, t, e), void 0, null),
        t
      );
    },
    useId: function () {
      var A = pt(),
        e = oe.identifierPrefix;
      if (SA) {
        var t = Nt,
          r = Kt;
        (t = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + t),
          (e = ":" + e + "R" + t),
          (t = Oo++),
          0 < t && (e += "H" + t.toString(32)),
          (e += ":");
      } else (t = LU++), (e = ":" + e + "r" + t.toString(32) + ":");
      return (A.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  RU = {
    readContext: qe,
    useCallback: gv,
    useContext: qe,
    useEffect: iB,
    useImperativeHandle: Bv,
    useInsertionEffect: cv,
    useLayoutEffect: fv,
    useMemo: hv,
    useReducer: oc,
    useRef: uv,
    useState: function () {
      return oc(Ro);
    },
    useDebugValue: oB,
    useDeferredValue: function (A) {
      var e = At();
      return pv(e, Ae.memoizedState, A);
    },
    useTransition: function () {
      var A = oc(Ro)[0],
        e = At().memoizedState;
      return [A, e];
    },
    useMutableSource: rv,
    useSyncExternalStore: nv,
    useId: wv,
    unstable_isNewReconciler: !1,
  },
  KU = {
    readContext: qe,
    useCallback: gv,
    useContext: qe,
    useEffect: iB,
    useImperativeHandle: Bv,
    useInsertionEffect: cv,
    useLayoutEffect: fv,
    useMemo: hv,
    useReducer: ac,
    useRef: uv,
    useState: function () {
      return ac(Ro);
    },
    useDebugValue: oB,
    useDeferredValue: function (A) {
      var e = At();
      return Ae === null ? (e.memoizedState = A) : pv(e, Ae.memoizedState, A);
    },
    useTransition: function () {
      var A = ac(Ro)[0],
        e = At().memoizedState;
      return [A, e];
    },
    useMutableSource: rv,
    useSyncExternalStore: nv,
    useId: wv,
    unstable_isNewReconciler: !1,
  };
function nt(A, e) {
  if (A && A.defaultProps) {
    (e = RA({}, e)), (A = A.defaultProps);
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function Ff(A, e, t, r) {
  (e = A.memoizedState),
    (t = t(r, e)),
    (t = t == null ? e : RA({}, e, t)),
    (A.memoizedState = t),
    A.lanes === 0 && (A.updateQueue.baseState = t);
}
var Jl = {
  isMounted: function (A) {
    return (A = A._reactInternals) ? mn(A) === A : !1;
  },
  enqueueSetState: function (A, e, t) {
    A = A._reactInternals;
    var r = Qe(),
      n = Hr(A),
      i = kt(r, n);
    (i.payload = e),
      t != null && (i.callback = t),
      (e = Ir(A, i, n)),
      e !== null && (ct(e, A, n, r), Ds(e, A, n));
  },
  enqueueReplaceState: function (A, e, t) {
    A = A._reactInternals;
    var r = Qe(),
      n = Hr(A),
      i = kt(r, n);
    (i.tag = 1),
      (i.payload = e),
      t != null && (i.callback = t),
      (e = Ir(A, i, n)),
      e !== null && (ct(e, A, n, r), Ds(e, A, n));
  },
  enqueueForceUpdate: function (A, e) {
    A = A._reactInternals;
    var t = Qe(),
      r = Hr(A),
      n = kt(t, r);
    (n.tag = 2),
      e != null && (n.callback = e),
      (e = Ir(A, n, r)),
      e !== null && (ct(e, A, r, t), Ds(e, A, r));
  },
};
function ah(A, e, t, r, n, i, o) {
  return (
    (A = A.stateNode),
    typeof A.shouldComponentUpdate == "function"
      ? A.shouldComponentUpdate(r, i, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Ho(t, r) || !Ho(n, i)
      : !0
  );
}
function Qv(A, e, t) {
  var r = !1,
    n = br,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qe(i))
      : ((n = Te(e) ? cn : pe.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? li(A, n) : br)),
    (e = new e(t, i)),
    (A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Jl),
    (A.stateNode = e),
    (e._reactInternals = A),
    r &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = n),
      (A.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function sh(A, e, t, r) {
  (A = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(t, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(t, r),
    e.state !== A && Jl.enqueueReplaceState(e, e.state, null);
}
function Ef(A, e, t, r) {
  var n = A.stateNode;
  (n.props = t), (n.state = A.memoizedState), (n.refs = {}), $d(A);
  var i = e.contextType;
  typeof i == "object" && i !== null
    ? (n.context = qe(i))
    : ((i = Te(e) ? cn : pe.current), (n.context = li(A, i))),
    (n.state = A.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (Ff(A, e, i, t), (n.state = A.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof n.getSnapshotBeforeUpdate == "function" ||
      (typeof n.UNSAFE_componentWillMount != "function" &&
        typeof n.componentWillMount != "function") ||
      ((e = n.state),
      typeof n.componentWillMount == "function" && n.componentWillMount(),
      typeof n.UNSAFE_componentWillMount == "function" &&
        n.UNSAFE_componentWillMount(),
      e !== n.state && Jl.enqueueReplaceState(n, n.state, null),
      cl(A, t, n, r),
      (n.state = A.memoizedState)),
    typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function di(A, e) {
  try {
    var t = "",
      r = e;
    do (t += cy(r)), (r = r.return);
    while (r);
    var n = t;
  } catch (i) {
    n =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function sc(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function If(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var NU = typeof WeakMap == "function" ? WeakMap : Map;
function yv(A, e, t) {
  (t = kt(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = e.value;
  return (
    (t.callback = function () {
      hl || ((hl = !0), (Kf = r)), If(A, e);
    }),
    t
  );
}
function Uv(A, e, t) {
  (t = kt(-1, t)), (t.tag = 3);
  var r = A.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var n = e.value;
    (t.payload = function () {
      return r(n);
    }),
      (t.callback = function () {
        If(A, e);
      });
  }
  var i = A.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        If(A, e),
          typeof r != "function" &&
            (xr === null ? (xr = new Set([this])) : xr.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function lh(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new NU();
    var n = new Set();
    r.set(e, n);
  } else (n = r.get(e)), n === void 0 && ((n = new Set()), r.set(e, n));
  n.has(t) || (n.add(t), (A = $U.bind(null, A, e, t)), e.then(A, A));
}
function uh(A) {
  do {
    var e;
    if (
      ((e = A.tag === 13) &&
        ((e = A.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function ch(A, e, t, r, n) {
  return A.mode & 1
    ? ((A.flags |= 65536), (A.lanes = n), A)
    : (A === e
        ? (A.flags |= 65536)
        : ((A.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((e = kt(-1, 1)), (e.tag = 2), Ir(t, e, 1))),
          (t.lanes |= 1)),
      A);
}
var MU = qt.ReactCurrentOwner,
  He = !1;
function me(A, e, t, r) {
  e.child = A === null ? qw(e, null, t, r) : ci(e, A.child, t, r);
}
function fh(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return (
    ri(e, n),
    (r = rB(A, e, t, r, i, n)),
    (t = nB()),
    A !== null && !He
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~n),
        zt(A, e, n))
      : (SA && t && jd(e), (e.flags |= 1), me(A, e, r, n), e.child)
  );
}
function dh(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" &&
      !BB(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), Fv(A, e, i, r, n))
      : ((A = Ms(t.type, null, r, e, e.mode, n)),
        (A.ref = e.ref),
        (A.return = e),
        (e.child = A));
  }
  if (((i = A.child), !(A.lanes & n))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ho), t(o, r) && A.ref === e.ref)
    )
      return zt(A, e, n);
  }
  return (
    (e.flags |= 1),
    (A = Sr(i, r)),
    (A.ref = e.ref),
    (A.return = e),
    (e.child = A)
  );
}
function Fv(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (Ho(i, r) && A.ref === e.ref)
      if (((He = !1), (e.pendingProps = r = i), (A.lanes & n) !== 0))
        A.flags & 131072 && (He = !0);
      else return (e.lanes = A.lanes), zt(A, e, n);
  }
  return xf(A, e, t, r, n);
}
function Ev(A, e, t) {
  var r = e.pendingProps,
    n = r.children,
    i = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        yA(Jn, Re),
        (Re |= t);
    else {
      if (!(t & 1073741824))
        return (
          (A = i !== null ? i.baseLanes | t : t),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: A,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          yA(Jn, Re),
          (Re |= A),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        yA(Jn, Re),
        (Re |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (e.memoizedState = null)) : (r = t),
      yA(Jn, Re),
      (Re |= r);
  return me(A, e, n, t), e.child;
}
function Iv(A, e) {
  var t = e.ref;
  ((A === null && t !== null) || (A !== null && A.ref !== t)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function xf(A, e, t, r, n) {
  var i = Te(t) ? cn : pe.current;
  return (
    (i = li(e, i)),
    ri(e, n),
    (t = rB(A, e, t, r, i, n)),
    (r = nB()),
    A !== null && !He
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~n),
        zt(A, e, n))
      : (SA && r && jd(e), (e.flags |= 1), me(A, e, t, n), e.child)
  );
}
function Bh(A, e, t, r, n) {
  if (Te(t)) {
    var i = !0;
    ol(e);
  } else i = !1;
  if ((ri(e, n), e.stateNode === null))
    Rs(A, e), Qv(e, t, r), Ef(e, t, r, n), (r = !0);
  else if (A === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var s = o.context,
      l = t.contextType;
    typeof l == "object" && l !== null
      ? (l = qe(l))
      : ((l = Te(t) ? cn : pe.current), (l = li(e, l)));
    var u = t.getDerivedStateFromProps,
      c =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== l) && sh(e, o, r, l)),
      (fr = !1);
    var f = e.memoizedState;
    (o.state = f),
      cl(e, r, o, n),
      (s = e.memoizedState),
      a !== r || f !== s || Le.current || fr
        ? (typeof u == "function" && (Ff(e, t, u, r), (s = e.memoizedState)),
          (a = fr || ah(e, t, a, r, f, s, l))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = l),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      ev(A, e),
      (a = e.memoizedProps),
      (l = e.type === e.elementType ? a : nt(e.type, a)),
      (o.props = l),
      (c = e.pendingProps),
      (f = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = qe(s))
        : ((s = Te(t) ? cn : pe.current), (s = li(e, s)));
    var h = t.getDerivedStateFromProps;
    (u =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== c || f !== s) && sh(e, o, r, s)),
      (fr = !1),
      (f = e.memoizedState),
      (o.state = f),
      cl(e, r, o, n);
    var g = e.memoizedState;
    a !== c || f !== g || Le.current || fr
      ? (typeof h == "function" && (Ff(e, t, h, r), (g = e.memoizedState)),
        (l = fr || ah(e, t, l, r, f, g, s) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === A.memoizedProps && f === A.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === A.memoizedProps && f === A.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = l))
      : (typeof o.componentDidUpdate != "function" ||
          (a === A.memoizedProps && f === A.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === A.memoizedProps && f === A.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Hf(A, e, t, r, i, n);
}
function Hf(A, e, t, r, n, i) {
  Iv(A, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return n && qg(e, t, !1), zt(A, e, i);
  (r = e.stateNode), (MU.current = e);
  var a =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    A !== null && o
      ? ((e.child = ci(e, A.child, null, i)), (e.child = ci(e, null, a, i)))
      : me(A, e, a, i),
    (e.memoizedState = r.state),
    n && qg(e, t, !0),
    e.child
  );
}
function xv(A) {
  var e = A.stateNode;
  e.pendingContext
    ? $g(A, e.pendingContext, e.pendingContext !== e.context)
    : e.context && $g(A, e.context, !1),
    qd(A, e.containerInfo);
}
function gh(A, e, t, r, n) {
  return ui(), Xd(n), (e.flags |= 256), me(A, e, t, r), e.child;
}
var Sf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lf(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function Hv(A, e, t) {
  var r = e.pendingProps,
    n = bA.current,
    i = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0),
    a
      ? ((i = !0), (e.flags &= -129))
      : (A === null || A.memoizedState !== null) && (n |= 1),
    yA(bA, n & 1),
    A === null)
  )
    return (
      yf(e),
      (A = e.memoizedState),
      A !== null && ((A = A.dehydrated), A !== null)
        ? (e.mode & 1
            ? A.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (A = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = $l(o, r, 0, null)),
              (A = an(A, r, t, null)),
              (i.return = e),
              (A.return = e),
              (i.sibling = A),
              (e.child = i),
              (e.child.memoizedState = Lf(t)),
              (e.memoizedState = Sf),
              A)
            : aB(e, o))
    );
  if (((n = A.memoizedState), n !== null && ((a = n.dehydrated), a !== null)))
    return _U(A, e, o, r, a, n, t);
  if (i) {
    (i = r.fallback), (o = e.mode), (n = A.child), (a = n.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== n
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (e.deletions = null))
        : ((r = Sr(n, s)), (r.subtreeFlags = n.subtreeFlags & 14680064)),
      a !== null ? (i = Sr(a, i)) : ((i = an(i, o, t, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (o = A.child.memoizedState),
      (o =
        o === null
          ? Lf(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = A.childLanes & ~t),
      (e.memoizedState = Sf),
      r
    );
  }
  return (
    (i = A.child),
    (A = i.sibling),
    (r = Sr(i, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = t),
    (r.return = e),
    (r.sibling = null),
    A !== null &&
      ((t = e.deletions),
      t === null ? ((e.deletions = [A]), (e.flags |= 16)) : t.push(A)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function aB(A, e) {
  return (
    (e = $l({ mode: "visible", children: e }, A.mode, 0, null)),
    (e.return = A),
    (A.child = e)
  );
}
function Wa(A, e, t, r) {
  return (
    r !== null && Xd(r),
    ci(e, A.child, null, t),
    (A = aB(e, e.pendingProps.children)),
    (A.flags |= 2),
    (e.memoizedState = null),
    A
  );
}
function _U(A, e, t, r, n, i, o) {
  if (t)
    return e.flags & 256
      ? ((e.flags &= -257), (r = sc(Error(k(422)))), Wa(A, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = A.child), (e.flags |= 128), null)
      : ((i = r.fallback),
        (n = e.mode),
        (r = $l({ mode: "visible", children: r.children }, n, 0, null)),
        (i = an(i, n, o, null)),
        (i.flags |= 2),
        (r.return = e),
        (i.return = e),
        (r.sibling = i),
        (e.child = r),
        e.mode & 1 && ci(e, A.child, null, o),
        (e.child.memoizedState = Lf(o)),
        (e.memoizedState = Sf),
        i);
  if (!(e.mode & 1)) return Wa(A, e, o, null);
  if (n.data === "$!") {
    if (((r = n.nextSibling && n.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(k(419))), (r = sc(i, r, void 0)), Wa(A, e, o, r);
  }
  if (((a = (o & A.childLanes) !== 0), He || a)) {
    if (((r = oe), r !== null)) {
      switch (o & -o) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      (n = n & (r.suspendedLanes | o) ? 0 : n),
        n !== 0 &&
          n !== i.retryLane &&
          ((i.retryLane = n), Xt(A, n), ct(r, A, n, -1));
    }
    return dB(), (r = sc(Error(k(421)))), Wa(A, e, o, r);
  }
  return n.data === "$?"
    ? ((e.flags |= 128),
      (e.child = A.child),
      (e = qU.bind(null, A)),
      (n._reactRetry = e),
      null)
    : ((A = i.treeContext),
      (Ne = Er(n.nextSibling)),
      (Me = e),
      (SA = !0),
      (at = null),
      A !== null &&
        ((Ge[je++] = Kt),
        (Ge[je++] = Nt),
        (Ge[je++] = fn),
        (Kt = A.id),
        (Nt = A.overflow),
        (fn = e)),
      (e = aB(e, r.children)),
      (e.flags |= 4096),
      e);
}
function hh(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), Uf(A.return, e, t);
}
function lc(A, e, t, r, n) {
  var i = A.memoizedState;
  i === null
    ? (A.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: n,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = n));
}
function Sv(A, e, t) {
  var r = e.pendingProps,
    n = r.revealOrder,
    i = r.tail;
  if ((me(A, e, r.children, t), (r = bA.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (A !== null && A.flags & 128)
      A: for (A = e.child; A !== null; ) {
        if (A.tag === 13) A.memoizedState !== null && hh(A, t, e);
        else if (A.tag === 19) hh(A, t, e);
        else if (A.child !== null) {
          (A.child.return = A), (A = A.child);
          continue;
        }
        if (A === e) break A;
        for (; A.sibling === null; ) {
          if (A.return === null || A.return === e) break A;
          A = A.return;
        }
        (A.sibling.return = A.return), (A = A.sibling);
      }
    r &= 1;
  }
  if ((yA(bA, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (n) {
      case "forwards":
        for (t = e.child, n = null; t !== null; )
          (A = t.alternate),
            A !== null && fl(A) === null && (n = t),
            (t = t.sibling);
        (t = n),
          t === null
            ? ((n = e.child), (e.child = null))
            : ((n = t.sibling), (t.sibling = null)),
          lc(e, !1, n, t, i);
        break;
      case "backwards":
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (((A = n.alternate), A !== null && fl(A) === null)) {
            e.child = n;
            break;
          }
          (A = n.sibling), (n.sibling = t), (t = n), (n = A);
        }
        lc(e, !0, t, null, i);
        break;
      case "together":
        lc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Rs(A, e) {
  !(e.mode & 1) &&
    A !== null &&
    ((A.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function zt(A, e, t) {
  if (
    (A !== null && (e.dependencies = A.dependencies),
    (Bn |= e.lanes),
    !(t & e.childLanes))
  )
    return null;
  if (A !== null && e.child !== A.child) throw Error(k(153));
  if (e.child !== null) {
    for (
      A = e.child, t = Sr(A, A.pendingProps), e.child = t, t.return = e;
      A.sibling !== null;

    )
      (A = A.sibling), (t = t.sibling = Sr(A, A.pendingProps)), (t.return = e);
    t.sibling = null;
  }
  return e.child;
}
function kU(A, e, t) {
  switch (e.tag) {
    case 3:
      xv(e), ui();
      break;
    case 5:
      tv(e);
      break;
    case 1:
      Te(e.type) && ol(e);
      break;
    case 4:
      qd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        n = e.memoizedProps.value;
      yA(ll, r._currentValue), (r._currentValue = n);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (yA(bA, bA.current & 1), (e.flags |= 128), null)
          : t & e.child.childLanes
          ? Hv(A, e, t)
          : (yA(bA, bA.current & 1),
            (A = zt(A, e, t)),
            A !== null ? A.sibling : null);
      yA(bA, bA.current & 1);
      break;
    case 19:
      if (((r = (t & e.childLanes) !== 0), A.flags & 128)) {
        if (r) return Sv(A, e, t);
        e.flags |= 128;
      }
      if (
        ((n = e.memoizedState),
        n !== null &&
          ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
        yA(bA, bA.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Ev(A, e, t);
  }
  return zt(A, e, t);
}
var Lv, Tf, Tv, Dv;
Lv = function (A, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) A.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Tf = function () {};
Tv = function (A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    (A = e.stateNode), tn(Ct.current);
    var i = null;
    switch (t) {
      case "input":
        (n = qc(A, n)), (r = qc(A, r)), (i = []);
        break;
      case "select":
        (n = RA({}, n, { value: void 0 })),
          (r = RA({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (n = tf(A, n)), (r = tf(A, r)), (i = []);
        break;
      default:
        typeof n.onClick != "function" &&
          typeof r.onClick == "function" &&
          (A.onclick = nl);
    }
    nf(t, r);
    var o;
    t = null;
    for (l in n)
      if (!r.hasOwnProperty(l) && n.hasOwnProperty(l) && n[l] != null)
        if (l === "style") {
          var a = n[l];
          for (o in a) a.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          l !== "dangerouslySetInnerHTML" &&
            l !== "children" &&
            l !== "suppressContentEditableWarning" &&
            l !== "suppressHydrationWarning" &&
            l !== "autoFocus" &&
            (Qo.hasOwnProperty(l)
              ? i || (i = [])
              : (i = i || []).push(l, null));
    for (l in r) {
      var s = r[l];
      if (
        ((a = n != null ? n[l] : void 0),
        r.hasOwnProperty(l) && s !== a && (s != null || a != null))
      )
        if (l === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(l, t)), (t = s);
        else
          l === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(l, s))
            : l === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(l, "" + s)
            : l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" &&
              (Qo.hasOwnProperty(l)
                ? (s != null && l === "onScroll" && EA("scroll", A),
                  i || a === s || (i = []))
                : (i = i || []).push(l, s));
    }
    t && (i = i || []).push("style", t);
    var l = i;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
Dv = function (A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function Ni(A, e) {
  if (!SA)
    switch (A.tailMode) {
      case "hidden":
        e = A.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), (e = e.sibling);
        t === null ? (A.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = A.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? e || A.tail === null
            ? (A.tail = null)
            : (A.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(A) {
  var e = A.alternate !== null && A.alternate.child === A.child,
    t = 0,
    r = 0;
  if (e)
    for (var n = A.child; n !== null; )
      (t |= n.lanes | n.childLanes),
        (r |= n.subtreeFlags & 14680064),
        (r |= n.flags & 14680064),
        (n.return = A),
        (n = n.sibling);
  else
    for (n = A.child; n !== null; )
      (t |= n.lanes | n.childLanes),
        (r |= n.subtreeFlags),
        (r |= n.flags),
        (n.return = A),
        (n = n.sibling);
  return (A.subtreeFlags |= r), (A.childLanes = t), e;
}
function PU(A, e, t) {
  var r = e.pendingProps;
  switch ((Wd(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(e), null;
    case 1:
      return Te(e.type) && il(), de(e), null;
    case 3:
      return (
        (r = e.stateNode),
        fi(),
        IA(Le),
        IA(pe),
        eB(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (A === null || A.child === null) &&
          (Ga(e)
            ? (e.flags |= 4)
            : A === null ||
              (A.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), at !== null && (_f(at), (at = null)))),
        Tf(A, e),
        de(e),
        null
      );
    case 5:
      AB(e);
      var n = tn(bo.current);
      if (((t = e.type), A !== null && e.stateNode != null))
        Tv(A, e, t, r, n),
          A.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(k(166));
          return de(e), null;
        }
        if (((A = tn(Ct.current)), Ga(e))) {
          (r = e.stateNode), (t = e.type);
          var i = e.memoizedProps;
          switch (((r[vt] = e), (r[To] = i), (A = (e.mode & 1) !== 0), t)) {
            case "dialog":
              EA("cancel", r), EA("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              EA("load", r);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Yi.length; n++) EA(Yi[n], r);
              break;
            case "source":
              EA("error", r);
              break;
            case "img":
            case "image":
            case "link":
              EA("error", r), EA("load", r);
              break;
            case "details":
              EA("toggle", r);
              break;
            case "input":
              Fg(r, i), EA("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                EA("invalid", r);
              break;
            case "textarea":
              Ig(r, i), EA("invalid", r);
          }
          nf(t, i), (n = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Va(r.textContent, a, A),
                    (n = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Va(r.textContent, a, A),
                    (n = ["children", "" + a]))
                : Qo.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  EA("scroll", r);
            }
          switch (t) {
            case "input":
              Oa(r), Eg(r, i, !0);
              break;
            case "textarea":
              Oa(r), xg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = nl);
          }
          (r = n), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = n.nodeType === 9 ? n : n.ownerDocument),
            A === "http://www.w3.org/1999/xhtml" && (A = aw(t)),
            A === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((A = o.createElement("div")),
                  (A.innerHTML = "<script></script>"),
                  (A = A.removeChild(A.firstChild)))
                : typeof r.is == "string"
                ? (A = o.createElement(t, { is: r.is }))
                : ((A = o.createElement(t)),
                  t === "select" &&
                    ((o = A),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (A = o.createElementNS(A, t)),
            (A[vt] = e),
            (A[To] = r),
            Lv(A, e, !1, !1),
            (e.stateNode = A);
          A: {
            switch (((o = of(t, r)), t)) {
              case "dialog":
                EA("cancel", A), EA("close", A), (n = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                EA("load", A), (n = r);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Yi.length; n++) EA(Yi[n], A);
                n = r;
                break;
              case "source":
                EA("error", A), (n = r);
                break;
              case "img":
              case "image":
              case "link":
                EA("error", A), EA("load", A), (n = r);
                break;
              case "details":
                EA("toggle", A), (n = r);
                break;
              case "input":
                Fg(A, r), (n = qc(A, r)), EA("invalid", A);
                break;
              case "option":
                n = r;
                break;
              case "select":
                (A._wrapperState = { wasMultiple: !!r.multiple }),
                  (n = RA({}, r, { value: void 0 })),
                  EA("invalid", A);
                break;
              case "textarea":
                Ig(A, r), (n = tf(A, r)), EA("invalid", A);
                break;
              default:
                n = r;
            }
            nf(t, n), (a = n);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? uw(A, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && sw(A, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && yo(A, s)
                    : typeof s == "number" && yo(A, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qo.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && EA("scroll", A)
                      : s != null && Ld(A, i, s, o));
              }
            switch (t) {
              case "input":
                Oa(A), Eg(A, r, !1);
                break;
              case "textarea":
                Oa(A), xg(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + Dr(r.value));
                break;
              case "select":
                (A.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(A, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(A, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof n.onClick == "function" && (A.onclick = nl);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break A;
              case "img":
                r = !0;
                break A;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return de(e), null;
    case 6:
      if (A && e.stateNode != null) Dv(A, e, A.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(k(166));
        if (((t = tn(bo.current)), tn(Ct.current), Ga(e))) {
          if (
            ((r = e.stateNode),
            (t = e.memoizedProps),
            (r[vt] = e),
            (i = r.nodeValue !== t) && ((A = Me), A !== null))
          )
            switch (A.tag) {
              case 3:
                Va(r.nodeValue, t, (A.mode & 1) !== 0);
                break;
              case 5:
                A.memoizedProps.suppressHydrationWarning !== !0 &&
                  Va(r.nodeValue, t, (A.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[vt] = e),
            (e.stateNode = r);
      }
      return de(e), null;
    case 13:
      if (
        (IA(bA),
        (r = e.memoizedState),
        A === null ||
          (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
      ) {
        if (SA && Ne !== null && e.mode & 1 && !(e.flags & 128))
          Zw(), ui(), (e.flags |= 98560), (i = !1);
        else if (((i = Ga(e)), r !== null && r.dehydrated !== null)) {
          if (A === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[vt] = e;
          } else
            ui(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          de(e), (i = !1);
        } else at !== null && (_f(at), (at = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = t), e)
        : ((r = r !== null),
          r !== (A !== null && A.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (A === null || bA.current & 1 ? te === 0 && (te = 3) : dB())),
          e.updateQueue !== null && (e.flags |= 4),
          de(e),
          null);
    case 4:
      return (
        fi(), Tf(A, e), A === null && So(e.stateNode.containerInfo), de(e), null
      );
    case 10:
      return Yd(e.type._context), de(e), null;
    case 17:
      return Te(e.type) && il(), de(e), null;
    case 19:
      if ((IA(bA), (i = e.memoizedState), i === null)) return de(e), null;
      if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Ni(i, !1);
        else {
          if (te !== 0 || (A !== null && A.flags & 128))
            for (A = e.child; A !== null; ) {
              if (((o = fl(A)), o !== null)) {
                for (
                  e.flags |= 128,
                    Ni(i, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = t,
                    t = e.child;
                  t !== null;

                )
                  (i = t),
                    (A = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = A),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (A = o.dependencies),
                        (i.dependencies =
                          A === null
                            ? null
                            : {
                                lanes: A.lanes,
                                firstContext: A.firstContext,
                              })),
                    (t = t.sibling);
                return yA(bA, (bA.current & 1) | 2), e.child;
              }
              A = A.sibling;
            }
          i.tail !== null &&
            XA() > Bi &&
            ((e.flags |= 128), (r = !0), Ni(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((A = fl(o)), A !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (t = A.updateQueue),
              t !== null && ((e.updateQueue = t), (e.flags |= 4)),
              Ni(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !SA)
            )
              return de(e), null;
          } else
            2 * XA() - i.renderingStartTime > Bi &&
              t !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Ni(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (e.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = XA()),
          (e.sibling = null),
          (t = bA.current),
          yA(bA, r ? (t & 1) | 2 : t & 1),
          e)
        : (de(e), null);
    case 22:
    case 23:
      return (
        fB(),
        (r = e.memoizedState !== null),
        A !== null && (A.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Re & 1073741824 && (de(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : de(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function VU(A, e) {
  switch ((Wd(e), e.tag)) {
    case 1:
      return (
        Te(e.type) && il(),
        (A = e.flags),
        A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 3:
      return (
        fi(),
        IA(Le),
        IA(pe),
        eB(),
        (A = e.flags),
        A & 65536 && !(A & 128) ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 5:
      return AB(e), null;
    case 13:
      if (
        (IA(bA), (A = e.memoizedState), A !== null && A.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(k(340));
        ui();
      }
      return (
        (A = e.flags), A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 19:
      return IA(bA), null;
    case 4:
      return fi(), null;
    case 10:
      return Yd(e.type._context), null;
    case 22:
    case 23:
      return fB(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xa = !1,
  he = !1,
  GU = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function zn(A, e) {
  var t = A.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        GA(A, e, r);
      }
    else t.current = null;
}
function Df(A, e, t) {
  try {
    t();
  } catch (r) {
    GA(A, e, r);
  }
}
var ph = !1;
function jU(A, e) {
  if (((hf = el), (A = Nw()), Gd(A))) {
    if ("selectionStart" in A)
      var t = { start: A.selectionStart, end: A.selectionEnd };
    else
      A: {
        t = ((t = A.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var n = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break A;
          }
          var o = 0,
            a = -1,
            s = -1,
            l = 0,
            u = 0,
            c = A,
            f = null;
          e: for (;;) {
            for (
              var h;
              c !== t || (n !== 0 && c.nodeType !== 3) || (a = o + n),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (h = c.firstChild) !== null;

            )
              (f = c), (c = h);
            for (;;) {
              if (c === A) break e;
              if (
                (f === t && ++l === n && (a = o),
                f === i && ++u === r && (s = o),
                (h = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = h;
          }
          t = a === -1 || s === -1 ? null : { start: a, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (pf = { focusedElem: A, selectionRange: t }, el = !1, z = e; z !== null; )
    if (((e = z), (A = e.child), (e.subtreeFlags & 1028) !== 0 && A !== null))
      (A.return = e), (z = A);
    else
      for (; z !== null; ) {
        e = z;
        try {
          var g = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var p = g.memoizedProps,
                    F = g.memoizedState,
                    B = e.stateNode,
                    d = B.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? p : nt(e.type, p),
                      F
                    );
                  B.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var w = e.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (C) {
          GA(e, e.return, C);
        }
        if (((A = e.sibling), A !== null)) {
          (A.return = e.return), (z = A);
          break;
        }
        z = e.return;
      }
  return (g = ph), (ph = !1), g;
}
function co(A, e, t) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var n = (r = r.next);
    do {
      if ((n.tag & A) === A) {
        var i = n.destroy;
        (n.destroy = void 0), i !== void 0 && Df(e, t, i);
      }
      n = n.next;
    } while (n !== r);
  }
}
function Yl(A, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var t = (e = e.next);
    do {
      if ((t.tag & A) === A) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function bf(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == "function" ? e(A) : (e.current = A);
  }
}
function bv(A) {
  var e = A.alternate;
  e !== null && ((A.alternate = null), bv(e)),
    (A.child = null),
    (A.deletions = null),
    (A.sibling = null),
    A.tag === 5 &&
      ((e = A.stateNode),
      e !== null &&
        (delete e[vt], delete e[To], delete e[mf], delete e[IU], delete e[xU])),
    (A.stateNode = null),
    (A.return = null),
    (A.dependencies = null),
    (A.memoizedProps = null),
    (A.memoizedState = null),
    (A.pendingProps = null),
    (A.stateNode = null),
    (A.updateQueue = null);
}
function Ov(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function wh(A) {
  A: for (;;) {
    for (; A.sibling === null; ) {
      if (A.return === null || Ov(A.return)) return null;
      A = A.return;
    }
    for (
      A.sibling.return = A.return, A = A.sibling;
      A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

    ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      (A.child.return = A), (A = A.child);
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Of(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    (A = A.stateNode),
      e
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(A, e)
          : t.insertBefore(A, e)
        : (t.nodeType === 8
            ? ((e = t.parentNode), e.insertBefore(A, t))
            : ((e = t), e.appendChild(A)),
          (t = t._reactRootContainer),
          t != null || e.onclick !== null || (e.onclick = nl));
  else if (r !== 4 && ((A = A.child), A !== null))
    for (Of(A, e, t), A = A.sibling; A !== null; ) Of(A, e, t), (A = A.sibling);
}
function Rf(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    (A = A.stateNode), e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && ((A = A.child), A !== null))
    for (Rf(A, e, t), A = A.sibling; A !== null; ) Rf(A, e, t), (A = A.sibling);
}
var ae = null,
  it = !1;
function nr(A, e, t) {
  for (t = t.child; t !== null; ) Rv(A, e, t), (t = t.sibling);
}
function Rv(A, e, t) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(Pl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      he || zn(t, e);
    case 6:
      var r = ae,
        n = it;
      (ae = null),
        nr(A, e, t),
        (ae = r),
        (it = n),
        ae !== null &&
          (it
            ? ((A = ae),
              (t = t.stateNode),
              A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t))
            : ae.removeChild(t.stateNode));
      break;
    case 18:
      ae !== null &&
        (it
          ? ((A = ae),
            (t = t.stateNode),
            A.nodeType === 8
              ? tc(A.parentNode, t)
              : A.nodeType === 1 && tc(A, t),
            Io(A))
          : tc(ae, t.stateNode));
      break;
    case 4:
      (r = ae),
        (n = it),
        (ae = t.stateNode.containerInfo),
        (it = !0),
        nr(A, e, t),
        (ae = r),
        (it = n);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        n = r = r.next;
        do {
          var i = n,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Df(t, e, o),
            (n = n.next);
        } while (n !== r);
      }
      nr(A, e, t);
      break;
    case 1:
      if (
        !he &&
        (zn(t, e),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          GA(t, e, a);
        }
      nr(A, e, t);
      break;
    case 21:
      nr(A, e, t);
      break;
    case 22:
      t.mode & 1
        ? ((he = (r = he) || t.memoizedState !== null), nr(A, e, t), (he = r))
        : nr(A, e, t);
      break;
    default:
      nr(A, e, t);
  }
}
function vh(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new GU()),
      e.forEach(function (r) {
        var n = AF.bind(null, A, r);
        t.has(r) || (t.add(r), r.then(n, n));
      });
  }
}
function tt(A, e) {
  var t = e.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      try {
        var i = A,
          o = e,
          a = o;
        A: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ae = a.stateNode), (it = !1);
              break A;
            case 3:
              (ae = a.stateNode.containerInfo), (it = !0);
              break A;
            case 4:
              (ae = a.stateNode.containerInfo), (it = !0);
              break A;
          }
          a = a.return;
        }
        if (ae === null) throw Error(k(160));
        Rv(i, o, n), (ae = null), (it = !1);
        var s = n.alternate;
        s !== null && (s.return = null), (n.return = null);
      } catch (l) {
        GA(n, e, l);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Kv(e, A), (e = e.sibling);
}
function Kv(A, e) {
  var t = A.alternate,
    r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(e, A), gt(A), r & 4)) {
        try {
          co(3, A, A.return), Yl(3, A);
        } catch (p) {
          GA(A, A.return, p);
        }
        try {
          co(5, A, A.return);
        } catch (p) {
          GA(A, A.return, p);
        }
      }
      break;
    case 1:
      tt(e, A), gt(A), r & 512 && t !== null && zn(t, t.return);
      break;
    case 5:
      if (
        (tt(e, A),
        gt(A),
        r & 512 && t !== null && zn(t, t.return),
        A.flags & 32)
      ) {
        var n = A.stateNode;
        try {
          yo(n, "");
        } catch (p) {
          GA(A, A.return, p);
        }
      }
      if (r & 4 && ((n = A.stateNode), n != null)) {
        var i = A.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          a = A.type,
          s = A.updateQueue;
        if (((A.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && iw(n, i),
              of(a, o);
            var l = of(a, i);
            for (o = 0; o < s.length; o += 2) {
              var u = s[o],
                c = s[o + 1];
              u === "style"
                ? uw(n, c)
                : u === "dangerouslySetInnerHTML"
                ? sw(n, c)
                : u === "children"
                ? yo(n, c)
                : Ld(n, u, c, l);
            }
            switch (a) {
              case "input":
                Af(n, i);
                break;
              case "textarea":
                ow(n, i);
                break;
              case "select":
                var f = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? qn(n, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(n, !!i.multiple, i.defaultValue, !0)
                      : qn(n, !!i.multiple, i.multiple ? [] : "", !1));
            }
            n[To] = i;
          } catch (p) {
            GA(A, A.return, p);
          }
      }
      break;
    case 6:
      if ((tt(e, A), gt(A), r & 4)) {
        if (A.stateNode === null) throw Error(k(162));
        (n = A.stateNode), (i = A.memoizedProps);
        try {
          n.nodeValue = i;
        } catch (p) {
          GA(A, A.return, p);
        }
      }
      break;
    case 3:
      if (
        (tt(e, A), gt(A), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Io(e.containerInfo);
        } catch (p) {
          GA(A, A.return, p);
        }
      break;
    case 4:
      tt(e, A), gt(A);
      break;
    case 13:
      tt(e, A),
        gt(A),
        (n = A.child),
        n.flags & 8192 &&
          ((i = n.memoizedState !== null),
          (n.stateNode.isHidden = i),
          !i ||
            (n.alternate !== null && n.alternate.memoizedState !== null) ||
            (uB = XA())),
        r & 4 && vh(A);
      break;
    case 22:
      if (
        ((u = t !== null && t.memoizedState !== null),
        A.mode & 1 ? ((he = (l = he) || u), tt(e, A), (he = l)) : tt(e, A),
        gt(A),
        r & 8192)
      ) {
        if (
          ((l = A.memoizedState !== null),
          (A.stateNode.isHidden = l) && !u && A.mode & 1)
        )
          for (z = A, u = A.child; u !== null; ) {
            for (c = z = u; z !== null; ) {
              switch (((f = z), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  co(4, f, f.return);
                  break;
                case 1:
                  zn(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (t = f.return);
                    try {
                      (e = r),
                        (g.props = e.memoizedProps),
                        (g.state = e.memoizedState),
                        g.componentWillUnmount();
                    } catch (p) {
                      GA(r, t, p);
                    }
                  }
                  break;
                case 5:
                  zn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ch(c);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (z = h)) : Ch(c);
            }
            u = u.sibling;
          }
        A: for (u = null, c = A; ; ) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                (n = c.stateNode),
                  l
                    ? ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = lw("display", o)));
              } catch (p) {
                GA(A, A.return, p);
              }
            }
          } else if (c.tag === 6) {
            if (u === null)
              try {
                c.stateNode.nodeValue = l ? "" : c.memoizedProps;
              } catch (p) {
                GA(A, A.return, p);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === A) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === A) break A;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === A) break A;
            u === c && (u = null), (c = c.return);
          }
          u === c && (u = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      tt(e, A), gt(A), r & 4 && vh(A);
      break;
    case 21:
      break;
    default:
      tt(e, A), gt(A);
  }
}
function gt(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (Ov(t)) {
            var r = t;
            break A;
          }
          t = t.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var n = r.stateNode;
          r.flags & 32 && (yo(n, ""), (r.flags &= -33));
          var i = wh(A);
          Rf(A, i, n);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = wh(A);
          Of(A, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      GA(A, A.return, s);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function WU(A, e, t) {
  (z = A), Nv(A);
}
function Nv(A, e, t) {
  for (var r = (A.mode & 1) !== 0; z !== null; ) {
    var n = z,
      i = n.child;
    if (n.tag === 22 && r) {
      var o = n.memoizedState !== null || Xa;
      if (!o) {
        var a = n.alternate,
          s = (a !== null && a.memoizedState !== null) || he;
        a = Xa;
        var l = he;
        if (((Xa = o), (he = s) && !l))
          for (z = n; z !== null; )
            (o = z),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Qh(n)
                : s !== null
                ? ((s.return = o), (z = s))
                : Qh(n);
        for (; i !== null; ) (z = i), Nv(i), (i = i.sibling);
        (z = n), (Xa = a), (he = l);
      }
      mh(A);
    } else
      n.subtreeFlags & 8772 && i !== null ? ((i.return = n), (z = i)) : mh(A);
  }
}
function mh(A) {
  for (; z !== null; ) {
    var e = z;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              he || Yl(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !he)
                if (t === null) r.componentDidMount();
                else {
                  var n =
                    e.elementType === e.type
                      ? t.memoizedProps
                      : nt(e.type, t.memoizedProps);
                  r.componentDidUpdate(
                    n,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && nh(e, i, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                nh(e, o, t);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (t === null && e.flags & 4) {
                t = a;
                var s = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var l = e.alternate;
                if (l !== null) {
                  var u = l.memoizedState;
                  if (u !== null) {
                    var c = u.dehydrated;
                    c !== null && Io(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        he || (e.flags & 512 && bf(e));
      } catch (f) {
        GA(e, e.return, f);
      }
    }
    if (e === A) {
      z = null;
      break;
    }
    if (((t = e.sibling), t !== null)) {
      (t.return = e.return), (z = t);
      break;
    }
    z = e.return;
  }
}
function Ch(A) {
  for (; z !== null; ) {
    var e = z;
    if (e === A) {
      z = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      (t.return = e.return), (z = t);
      break;
    }
    z = e.return;
  }
}
function Qh(A) {
  for (; z !== null; ) {
    var e = z;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            Yl(4, e);
          } catch (s) {
            GA(e, t, s);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var n = e.return;
            try {
              r.componentDidMount();
            } catch (s) {
              GA(e, n, s);
            }
          }
          var i = e.return;
          try {
            bf(e);
          } catch (s) {
            GA(e, i, s);
          }
          break;
        case 5:
          var o = e.return;
          try {
            bf(e);
          } catch (s) {
            GA(e, o, s);
          }
      }
    } catch (s) {
      GA(e, e.return, s);
    }
    if (e === A) {
      z = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (z = a);
      break;
    }
    z = e.return;
  }
}
var XU = Math.ceil,
  gl = qt.ReactCurrentDispatcher,
  sB = qt.ReactCurrentOwner,
  $e = qt.ReactCurrentBatchConfig,
  BA = 0,
  oe = null,
  $A = null,
  ue = 0,
  Re = 0,
  Jn = Mr(0),
  te = 0,
  No = null,
  Bn = 0,
  Zl = 0,
  lB = 0,
  fo = null,
  xe = null,
  uB = 0,
  Bi = 1 / 0,
  bt = null,
  hl = !1,
  Kf = null,
  xr = null,
  za = !1,
  pr = null,
  pl = 0,
  Bo = 0,
  Nf = null,
  Ks = -1,
  Ns = 0;
function Qe() {
  return BA & 6 ? XA() : Ks !== -1 ? Ks : (Ks = XA());
}
function Hr(A) {
  return A.mode & 1
    ? BA & 2 && ue !== 0
      ? ue & -ue
      : SU.transition !== null
      ? (Ns === 0 && (Ns = Qw()), Ns)
      : ((A = wA),
        A !== 0 || ((A = window.event), (A = A === void 0 ? 16 : Hw(A.type))),
        A)
    : 1;
}
function ct(A, e, t, r) {
  if (50 < Bo) throw ((Bo = 0), (Nf = null), Error(k(185)));
  qo(A, t, r),
    (!(BA & 2) || A !== oe) &&
      (A === oe && (!(BA & 2) && (Zl |= t), te === 4 && gr(A, ue)),
      De(A, r),
      t === 1 && BA === 0 && !(e.mode & 1) && ((Bi = XA() + 500), Xl && _r()));
}
function De(A, e) {
  var t = A.callbackNode;
  Sy(A, e);
  var r = Al(A, A === oe ? ue : 0);
  if (r === 0)
    t !== null && Lg(t), (A.callbackNode = null), (A.callbackPriority = 0);
  else if (((e = r & -r), A.callbackPriority !== e)) {
    if ((t != null && Lg(t), e === 1))
      A.tag === 0 ? HU(yh.bind(null, A)) : zw(yh.bind(null, A)),
        FU(function () {
          !(BA & 6) && _r();
        }),
        (t = null);
    else {
      switch (yw(r)) {
        case 1:
          t = Rd;
          break;
        case 4:
          t = mw;
          break;
        case 16:
          t = qs;
          break;
        case 536870912:
          t = Cw;
          break;
        default:
          t = qs;
      }
      t = Wv(t, Mv.bind(null, A));
    }
    (A.callbackPriority = e), (A.callbackNode = t);
  }
}
function Mv(A, e) {
  if (((Ks = -1), (Ns = 0), BA & 6)) throw Error(k(327));
  var t = A.callbackNode;
  if (ni() && A.callbackNode !== t) return null;
  var r = Al(A, A === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = wl(A, r);
  else {
    e = r;
    var n = BA;
    BA |= 2;
    var i = kv();
    (oe !== A || ue !== e) && ((bt = null), (Bi = XA() + 500), on(A, e));
    do
      try {
        YU();
        break;
      } catch (a) {
        _v(A, a);
      }
    while (!0);
    Jd(),
      (gl.current = i),
      (BA = n),
      $A !== null ? (e = 0) : ((oe = null), (ue = 0), (e = te));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((n = cf(A)), n !== 0 && ((r = n), (e = Mf(A, n)))), e === 1)
    )
      throw ((t = No), on(A, 0), gr(A, r), De(A, XA()), t);
    if (e === 6) gr(A, r);
    else {
      if (
        ((n = A.current.alternate),
        !(r & 30) &&
          !zU(n) &&
          ((e = wl(A, r)),
          e === 2 && ((i = cf(A)), i !== 0 && ((r = i), (e = Mf(A, i)))),
          e === 1))
      )
        throw ((t = No), on(A, 0), gr(A, r), De(A, XA()), t);
      switch (((A.finishedWork = n), (A.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Zr(A, xe, bt);
          break;
        case 3:
          if (
            (gr(A, r), (r & 130023424) === r && ((e = uB + 500 - XA()), 10 < e))
          ) {
            if (Al(A, 0) !== 0) break;
            if (((n = A.suspendedLanes), (n & r) !== r)) {
              Qe(), (A.pingedLanes |= A.suspendedLanes & n);
              break;
            }
            A.timeoutHandle = vf(Zr.bind(null, A, xe, bt), e);
            break;
          }
          Zr(A, xe, bt);
          break;
        case 4:
          if ((gr(A, r), (r & 4194240) === r)) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var o = 31 - ut(r);
            (i = 1 << o), (o = e[o]), o > n && (n = o), (r &= ~i);
          }
          if (
            ((r = n),
            (r = XA() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * XU(r / 1960)) - r),
            10 < r)
          ) {
            A.timeoutHandle = vf(Zr.bind(null, A, xe, bt), r);
            break;
          }
          Zr(A, xe, bt);
          break;
        case 5:
          Zr(A, xe, bt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return De(A, XA()), A.callbackNode === t ? Mv.bind(null, A) : null;
}
function Mf(A, e) {
  var t = fo;
  return (
    A.current.memoizedState.isDehydrated && (on(A, e).flags |= 256),
    (A = wl(A, e)),
    A !== 2 && ((e = xe), (xe = t), e !== null && _f(e)),
    A
  );
}
function _f(A) {
  xe === null ? (xe = A) : xe.push.apply(xe, A);
}
function zU(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var n = t[r],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ft(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
      (t.return = e), (e = t);
    else {
      if (e === A) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function gr(A, e) {
  for (
    e &= ~lB,
      e &= ~Zl,
      A.suspendedLanes |= e,
      A.pingedLanes &= ~e,
      A = A.expirationTimes;
    0 < e;

  ) {
    var t = 31 - ut(e),
      r = 1 << t;
    (A[t] = -1), (e &= ~r);
  }
}
function yh(A) {
  if (BA & 6) throw Error(k(327));
  ni();
  var e = Al(A, 0);
  if (!(e & 1)) return De(A, XA()), null;
  var t = wl(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = cf(A);
    r !== 0 && ((e = r), (t = Mf(A, r)));
  }
  if (t === 1) throw ((t = No), on(A, 0), gr(A, e), De(A, XA()), t);
  if (t === 6) throw Error(k(345));
  return (
    (A.finishedWork = A.current.alternate),
    (A.finishedLanes = e),
    Zr(A, xe, bt),
    De(A, XA()),
    null
  );
}
function cB(A, e) {
  var t = BA;
  BA |= 1;
  try {
    return A(e);
  } finally {
    (BA = t), BA === 0 && ((Bi = XA() + 500), Xl && _r());
  }
}
function gn(A) {
  pr !== null && pr.tag === 0 && !(BA & 6) && ni();
  var e = BA;
  BA |= 1;
  var t = $e.transition,
    r = wA;
  try {
    if ((($e.transition = null), (wA = 1), A)) return A();
  } finally {
    (wA = r), ($e.transition = t), (BA = e), !(BA & 6) && _r();
  }
}
function fB() {
  (Re = Jn.current), IA(Jn);
}
function on(A, e) {
  (A.finishedWork = null), (A.finishedLanes = 0);
  var t = A.timeoutHandle;
  if ((t !== -1 && ((A.timeoutHandle = -1), UU(t)), $A !== null))
    for (t = $A.return; t !== null; ) {
      var r = t;
      switch ((Wd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && il();
          break;
        case 3:
          fi(), IA(Le), IA(pe), eB();
          break;
        case 5:
          AB(r);
          break;
        case 4:
          fi();
          break;
        case 13:
          IA(bA);
          break;
        case 19:
          IA(bA);
          break;
        case 10:
          Yd(r.type._context);
          break;
        case 22:
        case 23:
          fB();
      }
      t = t.return;
    }
  if (
    ((oe = A),
    ($A = A = Sr(A.current, null)),
    (ue = Re = e),
    (te = 0),
    (No = null),
    (lB = Zl = Bn = 0),
    (xe = fo = null),
    en !== null)
  ) {
    for (e = 0; e < en.length; e++)
      if (((t = en[e]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var n = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = n), (r.next = o);
        }
        t.pending = r;
      }
    en = null;
  }
  return A;
}
function _v(A, e) {
  do {
    var t = $A;
    try {
      if ((Jd(), (bs.current = Bl), dl)) {
        for (var r = OA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), (r = r.next);
        }
        dl = !1;
      }
      if (
        ((dn = 0),
        (ie = Ae = OA = null),
        (uo = !1),
        (Oo = 0),
        (sB.current = null),
        t === null || t.return === null)
      ) {
        (te = 1), (No = e), ($A = null);
        break;
      }
      A: {
        var i = A,
          o = t.return,
          a = t,
          s = e;
        if (
          ((e = ue),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var l = s,
            u = a,
            c = u.tag;
          if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = uh(o);
          if (h !== null) {
            (h.flags &= -257),
              ch(h, o, a, i, e),
              h.mode & 1 && lh(i, l, e),
              (e = h),
              (s = l);
            var g = e.updateQueue;
            if (g === null) {
              var p = new Set();
              p.add(s), (e.updateQueue = p);
            } else g.add(s);
            break A;
          } else {
            if (!(e & 1)) {
              lh(i, l, e), dB();
              break A;
            }
            s = Error(k(426));
          }
        } else if (SA && a.mode & 1) {
          var F = uh(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              ch(F, o, a, i, e),
              Xd(di(s, a));
            break A;
          }
        }
        (i = s = di(s, a)),
          te !== 4 && (te = 2),
          fo === null ? (fo = [i]) : fo.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var B = yv(i, s, e);
              rh(i, B);
              break A;
            case 1:
              a = s;
              var d = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (xr === null || !xr.has(w))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var C = Uv(i, a, e);
                rh(i, C);
                break A;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Vv(t);
    } catch (m) {
      (e = m), $A === t && t !== null && ($A = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function kv() {
  var A = gl.current;
  return (gl.current = Bl), A === null ? Bl : A;
}
function dB() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    oe === null || (!(Bn & 268435455) && !(Zl & 268435455)) || gr(oe, ue);
}
function wl(A, e) {
  var t = BA;
  BA |= 2;
  var r = kv();
  (oe !== A || ue !== e) && ((bt = null), on(A, e));
  do
    try {
      JU();
      break;
    } catch (n) {
      _v(A, n);
    }
  while (!0);
  if ((Jd(), (BA = t), (gl.current = r), $A !== null)) throw Error(k(261));
  return (oe = null), (ue = 0), te;
}
function JU() {
  for (; $A !== null; ) Pv($A);
}
function YU() {
  for (; $A !== null && !Cy(); ) Pv($A);
}
function Pv(A) {
  var e = jv(A.alternate, A, Re);
  (A.memoizedProps = A.pendingProps),
    e === null ? Vv(A) : ($A = e),
    (sB.current = null);
}
function Vv(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (((A = e.return), e.flags & 32768)) {
      if (((t = VU(t, e)), t !== null)) {
        (t.flags &= 32767), ($A = t);
        return;
      }
      if (A !== null)
        (A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null);
      else {
        (te = 6), ($A = null);
        return;
      }
    } else if (((t = PU(t, e, Re)), t !== null)) {
      $A = t;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      $A = e;
      return;
    }
    $A = e = A;
  } while (e !== null);
  te === 0 && (te = 5);
}
function Zr(A, e, t) {
  var r = wA,
    n = $e.transition;
  try {
    ($e.transition = null), (wA = 1), ZU(A, e, t, r);
  } finally {
    ($e.transition = n), (wA = r);
  }
  return null;
}
function ZU(A, e, t, r) {
  do ni();
  while (pr !== null);
  if (BA & 6) throw Error(k(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (((A.finishedWork = null), (A.finishedLanes = 0), t === A.current))
    throw Error(k(177));
  (A.callbackNode = null), (A.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Ly(A, i),
    A === oe && (($A = oe = null), (ue = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      za ||
      ((za = !0),
      Wv(qs, function () {
        return ni(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = $e.transition), ($e.transition = null);
    var o = wA;
    wA = 1;
    var a = BA;
    (BA |= 4),
      (sB.current = null),
      jU(A, t),
      Kv(t, A),
      pU(pf),
      (el = !!hf),
      (pf = hf = null),
      (A.current = t),
      WU(t),
      Qy(),
      (BA = a),
      (wA = o),
      ($e.transition = i);
  } else A.current = t;
  if (
    (za && ((za = !1), (pr = A), (pl = n)),
    (i = A.pendingLanes),
    i === 0 && (xr = null),
    Fy(t.stateNode),
    De(A, XA()),
    e !== null)
  )
    for (r = A.onRecoverableError, t = 0; t < e.length; t++)
      (n = e[t]), r(n.value, { componentStack: n.stack, digest: n.digest });
  if (hl) throw ((hl = !1), (A = Kf), (Kf = null), A);
  return (
    pl & 1 && A.tag !== 0 && ni(),
    (i = A.pendingLanes),
    i & 1 ? (A === Nf ? Bo++ : ((Bo = 0), (Nf = A))) : (Bo = 0),
    _r(),
    null
  );
}
function ni() {
  if (pr !== null) {
    var A = yw(pl),
      e = $e.transition,
      t = wA;
    try {
      if ((($e.transition = null), (wA = 16 > A ? 16 : A), pr === null))
        var r = !1;
      else {
        if (((A = pr), (pr = null), (pl = 0), BA & 6)) throw Error(k(331));
        var n = BA;
        for (BA |= 4, z = A.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var l = a[s];
                for (z = l; z !== null; ) {
                  var u = z;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      co(8, u, i);
                  }
                  var c = u.child;
                  if (c !== null) (c.return = u), (z = c);
                  else
                    for (; z !== null; ) {
                      u = z;
                      var f = u.sibling,
                        h = u.return;
                      if ((bv(u), u === l)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (z = f);
                        break;
                      }
                      z = h;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var p = g.child;
                if (p !== null) {
                  g.child = null;
                  do {
                    var F = p.sibling;
                    (p.sibling = null), (p = F);
                  } while (p !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            A: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    co(9, i, i.return);
                }
              var B = i.sibling;
              if (B !== null) {
                (B.return = i.return), (z = B);
                break A;
              }
              z = i.return;
            }
        }
        var d = A.current;
        for (z = d; z !== null; ) {
          o = z;
          var w = o.child;
          if (o.subtreeFlags & 2064 && w !== null) (w.return = o), (z = w);
          else
            A: for (o = d; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl(9, a);
                  }
                } catch (m) {
                  GA(a, a.return, m);
                }
              if (a === o) {
                z = null;
                break A;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (z = C);
                break A;
              }
              z = a.return;
            }
        }
        if (
          ((BA = n), _r(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(Pl, A);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (wA = t), ($e.transition = e);
    }
  }
  return !1;
}
function Uh(A, e, t) {
  (e = di(t, e)),
    (e = yv(A, e, 1)),
    (A = Ir(A, e, 1)),
    (e = Qe()),
    A !== null && (qo(A, 1, e), De(A, e));
}
function GA(A, e, t) {
  if (A.tag === 3) Uh(A, A, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Uh(e, A, t);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xr === null || !xr.has(r)))
        ) {
          (A = di(t, A)),
            (A = Uv(e, A, 1)),
            (e = Ir(e, A, 1)),
            (A = Qe()),
            e !== null && (qo(e, 1, A), De(e, A));
          break;
        }
      }
      e = e.return;
    }
}
function $U(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e),
    (e = Qe()),
    (A.pingedLanes |= A.suspendedLanes & t),
    oe === A &&
      (ue & t) === t &&
      (te === 4 || (te === 3 && (ue & 130023424) === ue && 500 > XA() - uB)
        ? on(A, 0)
        : (lB |= t)),
    De(A, e);
}
function Gv(A, e) {
  e === 0 &&
    (A.mode & 1
      ? ((e = Na), (Na <<= 1), !(Na & 130023424) && (Na = 4194304))
      : (e = 1));
  var t = Qe();
  (A = Xt(A, e)), A !== null && (qo(A, e, t), De(A, t));
}
function qU(A) {
  var e = A.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), Gv(A, t);
}
function AF(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var r = A.stateNode,
        n = A.memoizedState;
      n !== null && (t = n.retryLane);
      break;
    case 19:
      r = A.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(e), Gv(A, t);
}
var jv;
jv = function (A, e, t) {
  if (A !== null)
    if (A.memoizedProps !== e.pendingProps || Le.current) He = !0;
    else {
      if (!(A.lanes & t) && !(e.flags & 128)) return (He = !1), kU(A, e, t);
      He = !!(A.flags & 131072);
    }
  else (He = !1), SA && e.flags & 1048576 && Jw(e, sl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Rs(A, e), (A = e.pendingProps);
      var n = li(e, pe.current);
      ri(e, t), (n = rB(null, e, r, A, n, t));
      var i = nB();
      return (
        (e.flags |= 1),
        typeof n == "object" &&
        n !== null &&
        typeof n.render == "function" &&
        n.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Te(r) ? ((i = !0), ol(e)) : (i = !1),
            (e.memoizedState =
              n.state !== null && n.state !== void 0 ? n.state : null),
            $d(e),
            (n.updater = Jl),
            (e.stateNode = n),
            (n._reactInternals = e),
            Ef(e, r, A, t),
            (e = Hf(null, e, r, !0, i, t)))
          : ((e.tag = 0), SA && i && jd(e), me(null, e, n, t), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      A: {
        switch (
          (Rs(A, e),
          (A = e.pendingProps),
          (n = r._init),
          (r = n(r._payload)),
          (e.type = r),
          (n = e.tag = tF(r)),
          (A = nt(r, A)),
          n)
        ) {
          case 0:
            e = xf(null, e, r, A, t);
            break A;
          case 1:
            e = Bh(null, e, r, A, t);
            break A;
          case 11:
            e = fh(null, e, r, A, t);
            break A;
          case 14:
            e = dh(null, e, r, nt(r.type, A), t);
            break A;
        }
        throw Error(k(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : nt(r, n)),
        xf(A, e, r, n, t)
      );
    case 1:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : nt(r, n)),
        Bh(A, e, r, n, t)
      );
    case 3:
      A: {
        if ((xv(e), A === null)) throw Error(k(387));
        (r = e.pendingProps),
          (i = e.memoizedState),
          (n = i.element),
          ev(A, e),
          cl(e, r, null, t);
        var o = e.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (n = di(Error(k(423)), e)), (e = gh(A, e, r, t, n));
            break A;
          } else if (r !== n) {
            (n = di(Error(k(424)), e)), (e = gh(A, e, r, t, n));
            break A;
          } else
            for (
              Ne = Er(e.stateNode.containerInfo.firstChild),
                Me = e,
                SA = !0,
                at = null,
                t = qw(e, null, r, t),
                e.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((ui(), r === n)) {
            e = zt(A, e, t);
            break A;
          }
          me(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        tv(e),
        A === null && yf(e),
        (r = e.type),
        (n = e.pendingProps),
        (i = A !== null ? A.memoizedProps : null),
        (o = n.children),
        wf(r, n) ? (o = null) : i !== null && wf(r, i) && (e.flags |= 32),
        Iv(A, e),
        me(A, e, o, t),
        e.child
      );
    case 6:
      return A === null && yf(e), null;
    case 13:
      return Hv(A, e, t);
    case 4:
      return (
        qd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        A === null ? (e.child = ci(e, null, r, t)) : me(A, e, r, t),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : nt(r, n)),
        fh(A, e, r, n, t)
      );
    case 7:
      return me(A, e, e.pendingProps, t), e.child;
    case 8:
      return me(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return me(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (
          ((r = e.type._context),
          (n = e.pendingProps),
          (i = e.memoizedProps),
          (o = n.value),
          yA(ll, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (ft(i.value, o)) {
            if (i.children === n.children && !Le.current) {
              e = zt(A, e, t);
              break A;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = kt(-1, t & -t)), (s.tag = 2);
                      var l = i.updateQueue;
                      if (l !== null) {
                        l = l.shared;
                        var u = l.pending;
                        u === null
                          ? (s.next = s)
                          : ((s.next = u.next), (u.next = s)),
                          (l.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Uf(i.return, t, e),
                      (a.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= t),
                  (a = o.alternate),
                  a !== null && (a.lanes |= t),
                  Uf(o, t, e),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        me(A, e, n.children, t), (e = e.child);
      }
      return e;
    case 9:
      return (
        (n = e.type),
        (r = e.pendingProps.children),
        ri(e, t),
        (n = qe(n)),
        (r = r(n)),
        (e.flags |= 1),
        me(A, e, r, t),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (n = nt(r, e.pendingProps)),
        (n = nt(r.type, n)),
        dh(A, e, r, n, t)
      );
    case 15:
      return Fv(A, e, e.type, e.pendingProps, t);
    case 17:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : nt(r, n)),
        Rs(A, e),
        (e.tag = 1),
        Te(r) ? ((A = !0), ol(e)) : (A = !1),
        ri(e, t),
        Qv(e, r, n),
        Ef(e, r, n, t),
        Hf(null, e, r, !0, A, t)
      );
    case 19:
      return Sv(A, e, t);
    case 22:
      return Ev(A, e, t);
  }
  throw Error(k(156, e.tag));
};
function Wv(A, e) {
  return vw(A, e);
}
function eF(A, e, t, r) {
  (this.tag = A),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(A, e, t, r) {
  return new eF(A, e, t, r);
}
function BB(A) {
  return (A = A.prototype), !(!A || !A.isReactComponent);
}
function tF(A) {
  if (typeof A == "function") return BB(A) ? 1 : 0;
  if (A != null) {
    if (((A = A.$$typeof), A === Dd)) return 11;
    if (A === bd) return 14;
  }
  return 2;
}
function Sr(A, e) {
  var t = A.alternate;
  return (
    t === null
      ? ((t = ze(A.tag, e, A.key, A.mode)),
        (t.elementType = A.elementType),
        (t.type = A.type),
        (t.stateNode = A.stateNode),
        (t.alternate = A),
        (A.alternate = t))
      : ((t.pendingProps = e),
        (t.type = A.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = A.flags & 14680064),
    (t.childLanes = A.childLanes),
    (t.lanes = A.lanes),
    (t.child = A.child),
    (t.memoizedProps = A.memoizedProps),
    (t.memoizedState = A.memoizedState),
    (t.updateQueue = A.updateQueue),
    (e = A.dependencies),
    (t.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (t.sibling = A.sibling),
    (t.index = A.index),
    (t.ref = A.ref),
    t
  );
}
function Ms(A, e, t, r, n, i) {
  var o = 2;
  if (((r = A), typeof A == "function")) BB(A) && (o = 1);
  else if (typeof A == "string") o = 5;
  else
    A: switch (A) {
      case Mn:
        return an(t.children, n, i, e);
      case Td:
        (o = 8), (n |= 8);
        break;
      case Jc:
        return (
          (A = ze(12, t, e, n | 2)), (A.elementType = Jc), (A.lanes = i), A
        );
      case Yc:
        return (A = ze(13, t, e, n)), (A.elementType = Yc), (A.lanes = i), A;
      case Zc:
        return (A = ze(19, t, e, n)), (A.elementType = Zc), (A.lanes = i), A;
      case tw:
        return $l(t, n, i, e);
      default:
        if (typeof A == "object" && A !== null)
          switch (A.$$typeof) {
            case Aw:
              o = 10;
              break A;
            case ew:
              o = 9;
              break A;
            case Dd:
              o = 11;
              break A;
            case bd:
              o = 14;
              break A;
            case cr:
              (o = 16), (r = null);
              break A;
          }
        throw Error(k(130, A == null ? A : typeof A, ""));
    }
  return (
    (e = ze(o, t, e, n)), (e.elementType = A), (e.type = r), (e.lanes = i), e
  );
}
function an(A, e, t, r) {
  return (A = ze(7, A, r, e)), (A.lanes = t), A;
}
function $l(A, e, t, r) {
  return (
    (A = ze(22, A, r, e)),
    (A.elementType = tw),
    (A.lanes = t),
    (A.stateNode = { isHidden: !1 }),
    A
  );
}
function uc(A, e, t) {
  return (A = ze(6, A, null, e)), (A.lanes = t), A;
}
function cc(A, e, t) {
  return (
    (e = ze(4, A.children !== null ? A.children : [], A.key, e)),
    (e.lanes = t),
    (e.stateNode = {
      containerInfo: A.containerInfo,
      pendingChildren: null,
      implementation: A.implementation,
    }),
    e
  );
}
function rF(A, e, t, r, n) {
  (this.tag = e),
    (this.containerInfo = A),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ju(0)),
    (this.expirationTimes = ju(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ju(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = n),
    (this.mutableSourceEagerHydrationData = null);
}
function gB(A, e, t, r, n, i, o, a, s) {
  return (
    (A = new rF(A, e, t, a, s)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = ze(3, null, null, e)),
    (A.current = i),
    (i.stateNode = A),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $d(i),
    A
  );
}
function nF(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nn,
    key: r == null ? null : "" + r,
    children: A,
    containerInfo: e,
    implementation: t,
  };
}
function Xv(A) {
  if (!A) return br;
  A = A._reactInternals;
  A: {
    if (mn(A) !== A || A.tag !== 1) throw Error(k(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (Te(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(k(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (Te(t)) return Xw(A, t, e);
  }
  return e;
}
function zv(A, e, t, r, n, i, o, a, s) {
  return (
    (A = gB(t, r, !0, A, n, i, o, a, s)),
    (A.context = Xv(null)),
    (t = A.current),
    (r = Qe()),
    (n = Hr(t)),
    (i = kt(r, n)),
    (i.callback = e ?? null),
    Ir(t, i, n),
    (A.current.lanes = n),
    qo(A, n, r),
    De(A, r),
    A
  );
}
function ql(A, e, t, r) {
  var n = e.current,
    i = Qe(),
    o = Hr(n);
  return (
    (t = Xv(t)),
    e.context === null ? (e.context = t) : (e.pendingContext = t),
    (e = kt(i, o)),
    (e.payload = { element: A }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (A = Ir(n, e, o)),
    A !== null && (ct(A, n, o, i), Ds(A, n, o)),
    o
  );
}
function vl(A) {
  if (((A = A.current), !A.child)) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function Fh(A, e) {
  if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function hB(A, e) {
  Fh(A, e), (A = A.alternate) && Fh(A, e);
}
function iF() {
  return null;
}
var Jv =
  typeof reportError == "function"
    ? reportError
    : function (A) {
        console.error(A);
      };
function pB(A) {
  this._internalRoot = A;
}
Au.prototype.render = pB.prototype.render = function (A) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  ql(A, e, null, null);
};
Au.prototype.unmount = pB.prototype.unmount = function () {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    gn(function () {
      ql(null, A, null, null);
    }),
      (e[Wt] = null);
  }
};
function Au(A) {
  this._internalRoot = A;
}
Au.prototype.unstable_scheduleHydration = function (A) {
  if (A) {
    var e = Ew();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Br.length && e !== 0 && e < Br[t].priority; t++);
    Br.splice(t, 0, A), t === 0 && xw(A);
  }
};
function wB(A) {
  return !(!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11));
}
function eu(A) {
  return !(
    !A ||
    (A.nodeType !== 1 &&
      A.nodeType !== 9 &&
      A.nodeType !== 11 &&
      (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
  );
}
function Eh() {}
function oF(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var l = vl(o);
        i.call(l);
      };
    }
    var o = zv(e, r, A, 0, null, !1, !1, "", Eh);
    return (
      (A._reactRootContainer = o),
      (A[Wt] = o.current),
      So(A.nodeType === 8 ? A.parentNode : A),
      gn(),
      o
    );
  }
  for (; (n = A.lastChild); ) A.removeChild(n);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var l = vl(s);
      a.call(l);
    };
  }
  var s = gB(A, 0, !1, null, null, !1, !1, "", Eh);
  return (
    (A._reactRootContainer = s),
    (A[Wt] = s.current),
    So(A.nodeType === 8 ? A.parentNode : A),
    gn(function () {
      ql(e, s, t, r);
    }),
    s
  );
}
function tu(A, e, t, r, n) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var s = vl(o);
        a.call(s);
      };
    }
    ql(e, o, A, n);
  } else o = oF(t, e, A, n, r);
  return vl(o);
}
Uw = function (A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = Ji(e.pendingLanes);
        t !== 0 &&
          (Kd(e, t | 1), De(e, XA()), !(BA & 6) && ((Bi = XA() + 500), _r()));
      }
      break;
    case 13:
      gn(function () {
        var r = Xt(A, 1);
        if (r !== null) {
          var n = Qe();
          ct(r, A, 1, n);
        }
      }),
        hB(A, 1);
  }
};
Nd = function (A) {
  if (A.tag === 13) {
    var e = Xt(A, 134217728);
    if (e !== null) {
      var t = Qe();
      ct(e, A, 134217728, t);
    }
    hB(A, 134217728);
  }
};
Fw = function (A) {
  if (A.tag === 13) {
    var e = Hr(A),
      t = Xt(A, e);
    if (t !== null) {
      var r = Qe();
      ct(t, A, e, r);
    }
    hB(A, e);
  }
};
Ew = function () {
  return wA;
};
Iw = function (A, e) {
  var t = wA;
  try {
    return (wA = A), e();
  } finally {
    wA = t;
  }
};
sf = function (A, e, t) {
  switch (e) {
    case "input":
      if ((Af(A, t), (e = t.name), t.type === "radio" && e != null)) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = Wl(r);
            if (!n) throw Error(k(90));
            nw(r), Af(r, n);
          }
        }
      }
      break;
    case "textarea":
      ow(A, t);
      break;
    case "select":
      (e = t.value), e != null && qn(A, !!t.multiple, e, !1);
  }
};
dw = cB;
Bw = gn;
var aF = { usingClientEntryPoint: !1, Events: [ea, Vn, Wl, cw, fw, cB] },
  Mi = {
    findFiberByHostInstance: An,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  sF = {
    bundleType: Mi.bundleType,
    version: Mi.version,
    rendererPackageName: Mi.rendererPackageName,
    rendererConfig: Mi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (A) {
      return (A = pw(A)), A === null ? null : A.stateNode;
    },
    findFiberByHostInstance: Mi.findFiberByHostInstance || iF,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ja = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ja.isDisabled && Ja.supportsFiber)
    try {
      (Pl = Ja.inject(sF)), (mt = Ja);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aF;
ke.createPortal = function (A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wB(e)) throw Error(k(200));
  return nF(A, e, null, t);
};
ke.createRoot = function (A, e) {
  if (!wB(A)) throw Error(k(299));
  var t = !1,
    r = "",
    n = Jv;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (t = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (n = e.onRecoverableError)),
    (e = gB(A, 1, !1, null, null, t, !1, r, n)),
    (A[Wt] = e.current),
    So(A.nodeType === 8 ? A.parentNode : A),
    new pB(e)
  );
};
ke.findDOMNode = function (A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function"
      ? Error(k(188))
      : ((A = Object.keys(A).join(",")), Error(k(268, A)));
  return (A = pw(e)), (A = A === null ? null : A.stateNode), A;
};
ke.flushSync = function (A) {
  return gn(A);
};
ke.hydrate = function (A, e, t) {
  if (!eu(e)) throw Error(k(200));
  return tu(null, A, e, !0, t);
};
ke.hydrateRoot = function (A, e, t) {
  if (!wB(A)) throw Error(k(405));
  var r = (t != null && t.hydratedSources) || null,
    n = !1,
    i = "",
    o = Jv;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (e = zv(e, null, A, 1, t ?? null, n, !1, i, o)),
    (A[Wt] = e.current),
    So(A),
    r)
  )
    for (A = 0; A < r.length; A++)
      (t = r[A]),
        (n = t._getVersion),
        (n = n(t._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, n])
          : e.mutableSourceEagerHydrationData.push(t, n);
  return new Au(e);
};
ke.render = function (A, e, t) {
  if (!eu(e)) throw Error(k(200));
  return tu(null, A, e, !1, t);
};
ke.unmountComponentAtNode = function (A) {
  if (!eu(A)) throw Error(k(40));
  return A._reactRootContainer
    ? (gn(function () {
        tu(null, null, A, !1, function () {
          (A._reactRootContainer = null), (A[Wt] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = cB;
ke.unstable_renderSubtreeIntoContainer = function (A, e, t, r) {
  if (!eu(t)) throw Error(k(200));
  if (A == null || A._reactInternals === void 0) throw Error(k(38));
  return tu(A, e, t, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function Yv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv);
    } catch (A) {
      console.error(A);
    }
}
Yv(), (Y0.exports = ke);
var ru = Y0.exports;
const lF = N0(ru),
  uF = K0({ __proto__: null, default: lF }, [ru]);
var Zv,
  Ih = ru;
(Zv = Ih.createRoot), Ih.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function DA() {
  return (
    (DA = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
          }
          return A;
        }),
    DA.apply(this, arguments)
  );
}
var YA;
(function (A) {
  (A.Pop = "POP"), (A.Push = "PUSH"), (A.Replace = "REPLACE");
})(YA || (YA = {}));
const xh = "popstate";
function cF(A) {
  A === void 0 && (A = {});
  function e(r, n) {
    let { pathname: i, search: o, hash: a } = r.location;
    return Mo(
      "",
      { pathname: i, search: o, hash: a },
      (n.state && n.state.usr) || null,
      (n.state && n.state.key) || "default"
    );
  }
  function t(r, n) {
    return typeof n == "string" ? n : hn(n);
  }
  return dF(e, t, null, A);
}
function uA(A, e) {
  if (A === !1 || A === null || typeof A > "u") throw new Error(e);
}
function gi(A, e) {
  if (!A) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function fF() {
  return Math.random().toString(36).substr(2, 8);
}
function Hh(A, e) {
  return { usr: A.state, key: A.key, idx: e };
}
function Mo(A, e, t, r) {
  return (
    t === void 0 && (t = null),
    DA(
      { pathname: typeof A == "string" ? A : A.pathname, search: "", hash: "" },
      typeof e == "string" ? kr(e) : e,
      { state: t, key: (e && e.key) || r || fF() }
    )
  );
}
function hn(A) {
  let { pathname: e = "/", search: t = "", hash: r = "" } = A;
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function kr(A) {
  let e = {};
  if (A) {
    let t = A.indexOf("#");
    t >= 0 && ((e.hash = A.substr(t)), (A = A.substr(0, t)));
    let r = A.indexOf("?");
    r >= 0 && ((e.search = A.substr(r)), (A = A.substr(0, r))),
      A && (e.pathname = A);
  }
  return e;
}
function dF(A, e, t, r) {
  r === void 0 && (r = {});
  let { window: n = document.defaultView, v5Compat: i = !1 } = r,
    o = n.history,
    a = YA.Pop,
    s = null,
    l = u();
  l == null && ((l = 0), o.replaceState(DA({}, o.state, { idx: l }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    a = YA.Pop;
    let F = u(),
      B = F == null ? null : F - l;
    (l = F), s && s({ action: a, location: p.location, delta: B });
  }
  function f(F, B) {
    a = YA.Push;
    let d = Mo(p.location, F, B);
    l = u() + 1;
    let w = Hh(d, l),
      C = p.createHref(d);
    try {
      o.pushState(w, "", C);
    } catch (m) {
      if (m instanceof DOMException && m.name === "DataCloneError") throw m;
      n.location.assign(C);
    }
    i && s && s({ action: a, location: p.location, delta: 1 });
  }
  function h(F, B) {
    a = YA.Replace;
    let d = Mo(p.location, F, B);
    l = u();
    let w = Hh(d, l),
      C = p.createHref(d);
    o.replaceState(w, "", C),
      i && s && s({ action: a, location: p.location, delta: 0 });
  }
  function g(F) {
    let B = n.location.origin !== "null" ? n.location.origin : n.location.href,
      d = typeof F == "string" ? F : hn(F);
    return (
      (d = d.replace(/ $/, "%20")),
      uA(
        B,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, B)
    );
  }
  let p = {
    get action() {
      return a;
    },
    get location() {
      return A(n, o);
    },
    listen(F) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        n.addEventListener(xh, c),
        (s = F),
        () => {
          n.removeEventListener(xh, c), (s = null);
        }
      );
    },
    createHref(F) {
      return e(n, F);
    },
    createURL: g,
    encodeLocation(F) {
      let B = g(F);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: f,
    replace: h,
    go(F) {
      return o.go(F);
    },
  };
  return p;
}
var mA;
(function (A) {
  (A.data = "data"),
    (A.deferred = "deferred"),
    (A.redirect = "redirect"),
    (A.error = "error");
})(mA || (mA = {}));
const BF = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function gF(A) {
  return A.index === !0;
}
function _o(A, e, t, r) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = {}),
    A.map((n, i) => {
      let o = [...t, String(i)],
        a = typeof n.id == "string" ? n.id : o.join("-");
      if (
        (uA(
          n.index !== !0 || !n.children,
          "Cannot specify children on an index route"
        ),
        uA(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        gF(n))
      ) {
        let s = DA({}, n, e(n), { id: a });
        return (r[a] = s), s;
      } else {
        let s = DA({}, n, e(n), { id: a, children: void 0 });
        return (
          (r[a] = s), n.children && (s.children = _o(n.children, e, o, r)), s
        );
      }
    })
  );
}
function $r(A, e, t) {
  return t === void 0 && (t = "/"), _s(A, e, t, !1);
}
function _s(A, e, t, r) {
  let n = typeof e == "string" ? kr(e) : e,
    i = yi(n.pathname || "/", t);
  if (i == null) return null;
  let o = $v(A);
  pF(o);
  let a = null;
  for (let s = 0; a == null && s < o.length; ++s) {
    let l = xF(i);
    a = EF(o[s], l, r);
  }
  return a;
}
function hF(A, e) {
  let { route: t, pathname: r, params: n } = A;
  return { id: t.id, pathname: r, params: n, data: e[t.id], handle: t.handle };
}
function $v(A, e, t, r) {
  e === void 0 && (e = []), t === void 0 && (t = []), r === void 0 && (r = "");
  let n = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (uA(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let l = Pt([r, s.relativePath]),
      u = t.concat(s);
    i.children &&
      i.children.length > 0 &&
      (uA(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + l + '".')
      ),
      $v(i.children, e, u, l)),
      !(i.path == null && !i.index) &&
        e.push({ path: l, score: UF(l, i.index), routesMeta: u });
  };
  return (
    A.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) n(i, o);
      else for (let s of qv(i.path)) n(i, o, s);
    }),
    e
  );
}
function qv(A) {
  let e = A.split("/");
  if (e.length === 0) return [];
  let [t, ...r] = e,
    n = t.endsWith("?"),
    i = t.replace(/\?$/, "");
  if (r.length === 0) return n ? [i, ""] : [i];
  let o = qv(r.join("/")),
    a = [];
  return (
    a.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    n && a.push(...o),
    a.map((s) => (A.startsWith("/") && s === "" ? "/" : s))
  );
}
function pF(A) {
  A.sort((e, t) =>
    e.score !== t.score
      ? t.score - e.score
      : FF(
          e.routesMeta.map((r) => r.childrenIndex),
          t.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const wF = /^:[\w-]+$/,
  vF = 3,
  mF = 2,
  CF = 1,
  QF = 10,
  yF = -2,
  Sh = (A) => A === "*";
function UF(A, e) {
  let t = A.split("/"),
    r = t.length;
  return (
    t.some(Sh) && (r += yF),
    e && (r += mF),
    t
      .filter((n) => !Sh(n))
      .reduce((n, i) => n + (wF.test(i) ? vF : i === "" ? CF : QF), r)
  );
}
function FF(A, e) {
  return A.length === e.length && A.slice(0, -1).every((r, n) => r === e[n])
    ? A[A.length - 1] - e[e.length - 1]
    : 0;
}
function EF(A, e, t) {
  t === void 0 && (t = !1);
  let { routesMeta: r } = A,
    n = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      l = a === r.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = Lh(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      ),
      f = s.route;
    if (
      (!c &&
        l &&
        t &&
        !r[r.length - 1].route.index &&
        (c = Lh(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          u
        )),
      !c)
    )
      return null;
    Object.assign(n, c.params),
      o.push({
        params: n,
        pathname: Pt([i, c.pathname]),
        pathnameBase: LF(Pt([i, c.pathnameBase])),
        route: f,
      }),
      c.pathnameBase !== "/" && (i = Pt([i, c.pathnameBase]));
  }
  return o;
}
function Lh(A, e) {
  typeof A == "string" && (A = { path: A, caseSensitive: !1, end: !0 });
  let [t, r] = IF(A.path, A.caseSensitive, A.end),
    n = e.match(t);
  if (!n) return null;
  let i = n[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = n.slice(1);
  return {
    params: r.reduce((l, u, c) => {
      let { paramName: f, isOptional: h } = u;
      if (f === "*") {
        let p = a[c] || "";
        o = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[c];
      return (
        h && !g ? (l[f] = void 0) : (l[f] = (g || "").replace(/%2F/g, "/")), l
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: A,
  };
}
function IF(A, e, t) {
  e === void 0 && (e = !1),
    t === void 0 && (t = !0),
    gi(
      A === "*" || !A.endsWith("*") || A.endsWith("/*"),
      'Route path "' +
        A +
        '" will be treated as if it were ' +
        ('"' + A.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + A.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    n =
      "^" +
      A.replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    A.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (n += A === "*" || A === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : t
      ? (n += "\\/*$")
      : A !== "" && A !== "/" && (n += "(?:(?=\\/|$))"),
    [new RegExp(n, e ? void 0 : "i"), r]
  );
}
function xF(A) {
  try {
    return A.split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      gi(
        !1,
        'The URL path "' +
          A +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      A
    );
  }
}
function yi(A, e) {
  if (e === "/") return A;
  if (!A.toLowerCase().startsWith(e.toLowerCase())) return null;
  let t = e.endsWith("/") ? e.length - 1 : e.length,
    r = A.charAt(t);
  return r && r !== "/" ? null : A.slice(t) || "/";
}
function HF(A, e) {
  e === void 0 && (e = "/");
  let {
    pathname: t,
    search: r = "",
    hash: n = "",
  } = typeof A == "string" ? kr(A) : A;
  return {
    pathname: t ? (t.startsWith("/") ? t : SF(t, e)) : e,
    search: TF(r),
    hash: DF(n),
  };
}
function SF(A, e) {
  let t = e.replace(/\/+$/, "").split("/");
  return (
    A.split("/").forEach((n) => {
      n === ".." ? t.length > 1 && t.pop() : n !== "." && t.push(n);
    }),
    t.length > 1 ? t.join("/") : "/"
  );
}
function fc(A, e, t, r) {
  return (
    "Cannot include a '" +
    A +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + t + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Am(A) {
  return A.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function vB(A, e) {
  let t = Am(A);
  return e
    ? t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase))
    : t.map((r) => r.pathnameBase);
}
function mB(A, e, t, r) {
  r === void 0 && (r = !1);
  let n;
  typeof A == "string"
    ? (n = kr(A))
    : ((n = DA({}, A)),
      uA(
        !n.pathname || !n.pathname.includes("?"),
        fc("?", "pathname", "search", n)
      ),
      uA(
        !n.pathname || !n.pathname.includes("#"),
        fc("#", "pathname", "hash", n)
      ),
      uA(!n.search || !n.search.includes("#"), fc("#", "search", "hash", n)));
  let i = A === "" || n.pathname === "",
    o = i ? "/" : n.pathname,
    a;
  if (o == null) a = t;
  else {
    let c = e.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (c -= 1);
      n.pathname = f.join("/");
    }
    a = c >= 0 ? e[c] : "/";
  }
  let s = HF(n, a),
    l = o && o !== "/" && o.endsWith("/"),
    u = (i || o === ".") && t.endsWith("/");
  return !s.pathname.endsWith("/") && (l || u) && (s.pathname += "/"), s;
}
const Pt = (A) => A.join("/").replace(/\/\/+/g, "/"),
  LF = (A) => A.replace(/\/+$/, "").replace(/^\/*/, "/"),
  TF = (A) => (!A || A === "?" ? "" : A.startsWith("?") ? A : "?" + A),
  DF = (A) => (!A || A === "#" ? "" : A.startsWith("#") ? A : "#" + A);
class ml {
  constructor(e, t, r, n) {
    n === void 0 && (n = !1),
      (this.status = e),
      (this.statusText = t || ""),
      (this.internal = n),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function nu(A) {
  return (
    A != null &&
    typeof A.status == "number" &&
    typeof A.statusText == "string" &&
    typeof A.internal == "boolean" &&
    "data" in A
  );
}
const em = ["post", "put", "patch", "delete"],
  bF = new Set(em),
  OF = ["get", ...em],
  RF = new Set(OF),
  KF = new Set([301, 302, 303, 307, 308]),
  NF = new Set([307, 308]),
  dc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  MF = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _i = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  CB = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _F = (A) => ({ hasErrorBoundary: !!A.hasErrorBoundary }),
  tm = "remix-router-transitions";
function kF(A) {
  const e = A.window ? A.window : typeof window < "u" ? window : void 0,
    t =
      typeof e < "u" &&
      typeof e.document < "u" &&
      typeof e.document.createElement < "u",
    r = !t;
  uA(
    A.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let n;
  if (A.mapRouteProperties) n = A.mapRouteProperties;
  else if (A.detectErrorBoundary) {
    let U = A.detectErrorBoundary;
    n = (I) => ({ hasErrorBoundary: U(I) });
  } else n = _F;
  let i = {},
    o = _o(A.routes, n, void 0, i),
    a,
    s = A.basename || "/",
    l = A.unstable_dataStrategy || XF,
    u = A.unstable_patchRoutesOnNavigation,
    c = DA(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      A.future
    ),
    f = null,
    h = new Set(),
    g = 1e3,
    p = new Set(),
    F = null,
    B = null,
    d = null,
    w = A.hydrationData != null,
    C = $r(o, A.history.location, s),
    m = null;
  if (C == null && !u) {
    let U = we(404, { pathname: A.history.location.pathname }),
      { matches: I, route: S } = _h(o);
    (C = I), (m = { [S.id]: U });
  }
  C &&
    !A.hydrationData &&
    Ea(C, o, A.history.location.pathname).active &&
    (C = null);
  let y;
  if (C)
    if (C.some((U) => U.route.lazy)) y = !1;
    else if (!C.some((U) => U.route.loader)) y = !0;
    else if (c.v7_partialHydration) {
      let U = A.hydrationData ? A.hydrationData.loaderData : null,
        I = A.hydrationData ? A.hydrationData.errors : null,
        S = (K) =>
          K.route.loader
            ? typeof K.route.loader == "function" &&
              K.route.loader.hydrate === !0
              ? !1
              : (U && U[K.route.id] !== void 0) ||
                (I && I[K.route.id] !== void 0)
            : !0;
      if (I) {
        let K = C.findIndex((X) => I[X.route.id] !== void 0);
        y = C.slice(0, K + 1).every(S);
      } else y = C.every(S);
    } else y = A.hydrationData != null;
  else if (((y = !1), (C = []), c.v7_partialHydration)) {
    let U = Ea(null, o, A.history.location.pathname);
    U.active && U.matches && (C = U.matches);
  }
  let E,
    v = {
      historyAction: A.history.action,
      location: A.history.location,
      matches: C,
      initialized: y,
      navigation: dc,
      restoreScrollPosition: A.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (A.hydrationData && A.hydrationData.loaderData) || {},
      actionData: (A.hydrationData && A.hydrationData.actionData) || null,
      errors: (A.hydrationData && A.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = YA.Pop,
    H = !1,
    L,
    O = !1,
    R = new Map(),
    P = null,
    J = !1,
    eA = !1,
    tA = [],
    b = new Set(),
    D = new Map(),
    T = 0,
    M = -1,
    j = new Map(),
    rA = new Set(),
    nA = new Map(),
    vA = new Map(),
    _ = new Set(),
    iA = new Map(),
    NA = new Map(),
    MA = new Map(),
    zA;
  function Ou() {
    if (
      ((f = A.history.listen((U) => {
        let { action: I, location: S, delta: K } = U;
        if (zA) {
          zA(), (zA = void 0);
          return;
        }
        gi(
          NA.size === 0 || K != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let X = Bg({
          currentLocation: v.location,
          nextLocation: S,
          historyAction: I,
        });
        if (X && K != null) {
          let q = new Promise((oA) => {
            zA = oA;
          });
          A.history.go(K * -1),
            Ua(X, {
              state: "blocked",
              location: S,
              proceed() {
                Ua(X, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: S,
                }),
                  q.then(() => A.history.go(K));
              },
              reset() {
                let oA = new Map(v.blockers);
                oA.set(X, _i), sA({ blockers: oA });
              },
            });
          return;
        }
        return jr(I, S);
      })),
      t)
    ) {
      s1(e, R);
      let U = () => l1(e, R);
      e.addEventListener("pagehide", U),
        (P = () => e.removeEventListener("pagehide", U));
    }
    return v.initialized || jr(YA.Pop, v.location, { initialHydration: !0 }), E;
  }
  function Qa() {
    f && f(),
      P && P(),
      h.clear(),
      L && L.abort(),
      v.fetchers.forEach((U, I) => ya(I)),
      v.blockers.forEach((U, I) => dg(I));
  }
  function Y(U) {
    return h.add(U), () => h.delete(U);
  }
  function sA(U, I) {
    I === void 0 && (I = {}), (v = DA({}, v, U));
    let S = [],
      K = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((X, q) => {
        X.state === "idle" && (_.has(q) ? K.push(q) : S.push(q));
      }),
      [...h].forEach((X) =>
        X(v, {
          deletedFetchers: K,
          unstable_viewTransitionOpts: I.viewTransitionOpts,
          unstable_flushSync: I.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (S.forEach((X) => v.fetchers.delete(X)), K.forEach((X) => ya(X)));
  }
  function Ee(U, I, S) {
    var K, X;
    let { flushSync: q } = S === void 0 ? {} : S,
      oA =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ot(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((K = U.state) == null ? void 0 : K._isRedirect) !== !0,
      V;
    I.actionData
      ? Object.keys(I.actionData).length > 0
        ? (V = I.actionData)
        : (V = null)
      : oA
      ? (V = v.actionData)
      : (V = null);
    let AA = I.loaderData
        ? Nh(v.loaderData, I.loaderData, I.matches || [], I.errors)
        : v.loaderData,
      Z = v.blockers;
    Z.size > 0 && ((Z = new Map(Z)), Z.forEach((pA, FA) => Z.set(FA, _i)));
    let $ =
      H === !0 ||
      (v.navigation.formMethod != null &&
        ot(v.navigation.formMethod) &&
        ((X = U.state) == null ? void 0 : X._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      J ||
        x === YA.Pop ||
        (x === YA.Push
          ? A.history.push(U, U.state)
          : x === YA.Replace && A.history.replace(U, U.state));
    let gA;
    if (x === YA.Pop) {
      let pA = R.get(v.location.pathname);
      pA && pA.has(U.pathname)
        ? (gA = { currentLocation: v.location, nextLocation: U })
        : R.has(U.pathname) &&
          (gA = { currentLocation: U, nextLocation: v.location });
    } else if (O) {
      let pA = R.get(v.location.pathname);
      pA
        ? pA.add(U.pathname)
        : ((pA = new Set([U.pathname])), R.set(v.location.pathname, pA)),
        (gA = { currentLocation: v.location, nextLocation: U });
    }
    sA(
      DA({}, I, {
        actionData: V,
        loaderData: AA,
        historyAction: x,
        location: U,
        initialized: !0,
        navigation: dc,
        revalidation: "idle",
        restoreScrollPosition: hg(U, I.matches || v.matches),
        preventScrollReset: $,
        blockers: Z,
      }),
      { viewTransitionOpts: gA, flushSync: q === !0 }
    ),
      (x = YA.Pop),
      (H = !1),
      (O = !1),
      (J = !1),
      (eA = !1),
      (tA = []);
  }
  async function Ar(U, I) {
    if (typeof U == "number") {
      A.history.go(U);
      return;
    }
    let S = kf(
        v.location,
        v.matches,
        s,
        c.v7_prependBasename,
        U,
        c.v7_relativeSplatPath,
        I == null ? void 0 : I.fromRouteId,
        I == null ? void 0 : I.relative
      ),
      {
        path: K,
        submission: X,
        error: q,
      } = Th(c.v7_normalizeFormMethod, !1, S, I),
      oA = v.location,
      V = Mo(v.location, K, I && I.state);
    V = DA({}, V, A.history.encodeLocation(V));
    let AA = I && I.replace != null ? I.replace : void 0,
      Z = YA.Push;
    AA === !0
      ? (Z = YA.Replace)
      : AA === !1 ||
        (X != null &&
          ot(X.formMethod) &&
          X.formAction === v.location.pathname + v.location.search &&
          (Z = YA.Replace));
    let $ =
        I && "preventScrollReset" in I ? I.preventScrollReset === !0 : void 0,
      gA = (I && I.unstable_flushSync) === !0,
      pA = Bg({ currentLocation: oA, nextLocation: V, historyAction: Z });
    if (pA) {
      Ua(pA, {
        state: "blocked",
        location: V,
        proceed() {
          Ua(pA, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: V,
          }),
            Ar(U, I);
        },
        reset() {
          let FA = new Map(v.blockers);
          FA.set(pA, _i), sA({ blockers: FA });
        },
      });
      return;
    }
    return await jr(Z, V, {
      submission: X,
      pendingError: q,
      preventScrollReset: $,
      replace: I && I.replace,
      enableViewTransition: I && I.unstable_viewTransition,
      flushSync: gA,
    });
  }
  function Ru() {
    if (
      (Ku(),
      sA({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        jr(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      jr(x || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
        enableViewTransition: O === !0,
      });
    }
  }
  async function jr(U, I, S) {
    L && L.abort(),
      (L = null),
      (x = U),
      (J = (S && S.startUninterruptedRevalidation) === !0),
      DQ(v.location, v.matches),
      (H = (S && S.preventScrollReset) === !0),
      (O = (S && S.enableViewTransition) === !0);
    let K = a || o,
      X = S && S.overrideNavigation,
      q = $r(K, I, s),
      oA = (S && S.flushSync) === !0,
      V = Ea(q, K, I.pathname);
    if ((V.active && V.matches && (q = V.matches), !q)) {
      let { error: dA, notFoundMatches: re, route: JA } = Nu(I.pathname);
      Ee(
        I,
        { matches: re, loaderData: {}, errors: { [JA.id]: dA } },
        { flushSync: oA }
      );
      return;
    }
    if (
      v.initialized &&
      !eA &&
      qF(v.location, I) &&
      !(S && S.submission && ot(S.submission.formMethod))
    ) {
      Ee(I, { matches: q }, { flushSync: oA });
      return;
    }
    L = new AbortController();
    let AA = In(A.history, I, L.signal, S && S.submission),
      Z;
    if (S && S.pendingError)
      Z = [Yn(q).route.id, { type: mA.error, error: S.pendingError }];
    else if (S && S.submission && ot(S.submission.formMethod)) {
      let dA = await UQ(AA, I, S.submission, q, V.active, {
        replace: S.replace,
        flushSync: oA,
      });
      if (dA.shortCircuited) return;
      if (dA.pendingActionResult) {
        let [re, JA] = dA.pendingActionResult;
        if (Ke(JA) && nu(JA.error) && JA.error.status === 404) {
          (L = null),
            Ee(I, {
              matches: dA.matches,
              loaderData: {},
              errors: { [re]: JA.error },
            });
          return;
        }
      }
      (q = dA.matches || q),
        (Z = dA.pendingActionResult),
        (X = Bc(I, S.submission)),
        (oA = !1),
        (V.active = !1),
        (AA = In(A.history, AA.url, AA.signal));
    }
    let {
      shortCircuited: $,
      matches: gA,
      loaderData: pA,
      errors: FA,
    } = await FQ(
      AA,
      I,
      q,
      V.active,
      X,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      S && S.initialHydration === !0,
      oA,
      Z
    );
    $ ||
      ((L = null),
      Ee(I, DA({ matches: gA || q }, Mh(Z), { loaderData: pA, errors: FA })));
  }
  async function UQ(U, I, S, K, X, q) {
    q === void 0 && (q = {}), Ku();
    let oA = o1(I, S);
    if ((sA({ navigation: oA }, { flushSync: q.flushSync === !0 }), X)) {
      let Z = await Ia(K, I.pathname, U.signal);
      if (Z.type === "aborted") return { shortCircuited: !0 };
      if (Z.type === "error") {
        let { boundaryId: $, error: gA } = Fa(I.pathname, Z);
        return {
          matches: Z.partialMatches,
          pendingActionResult: [$, { type: mA.error, error: gA }],
        };
      } else if (Z.matches) K = Z.matches;
      else {
        let { notFoundMatches: $, error: gA, route: pA } = Nu(I.pathname);
        return {
          matches: $,
          pendingActionResult: [pA.id, { type: mA.error, error: gA }],
        };
      }
    }
    let V,
      AA = Zi(K, I);
    if (!AA.route.action && !AA.route.lazy)
      V = {
        type: mA.error,
        error: we(405, {
          method: U.method,
          pathname: I.pathname,
          routeId: AA.route.id,
        }),
      };
    else if (
      ((V = (await Si("action", v, U, [AA], K, null))[AA.route.id]),
      U.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (rn(V)) {
      let Z;
      return (
        q && q.replace != null
          ? (Z = q.replace)
          : (Z =
              Oh(V.response.headers.get("Location"), new URL(U.url), s) ===
              v.location.pathname + v.location.search),
        await Wr(U, V, !0, { submission: S, replace: Z }),
        { shortCircuited: !0 }
      );
    }
    if (wr(V)) throw we(400, { type: "defer-action" });
    if (Ke(V)) {
      let Z = Yn(K, AA.route.id);
      return (
        (q && q.replace) !== !0 && (x = YA.Push),
        { matches: K, pendingActionResult: [Z.route.id, V] }
      );
    }
    return { matches: K, pendingActionResult: [AA.route.id, V] };
  }
  async function FQ(U, I, S, K, X, q, oA, V, AA, Z, $) {
    let gA = X || Bc(I, q),
      pA = q || oA || Ph(gA),
      FA = !J && (!c.v7_partialHydration || !AA);
    if (K) {
      if (FA) {
        let _A = ag($);
        sA(DA({ navigation: gA }, _A !== void 0 ? { actionData: _A } : {}), {
          flushSync: Z,
        });
      }
      let lA = await Ia(S, I.pathname, U.signal);
      if (lA.type === "aborted") return { shortCircuited: !0 };
      if (lA.type === "error") {
        let { boundaryId: _A, error: be } = Fa(I.pathname, lA);
        return {
          matches: lA.partialMatches,
          loaderData: {},
          errors: { [_A]: be },
        };
      } else if (lA.matches) S = lA.matches;
      else {
        let { error: _A, notFoundMatches: be, route: kA } = Nu(I.pathname);
        return { matches: be, loaderData: {}, errors: { [kA.id]: _A } };
      }
    }
    let dA = a || o,
      [re, JA] = Dh(
        A.history,
        v,
        S,
        pA,
        I,
        c.v7_partialHydration && AA === !0,
        c.v7_skipActionErrorRevalidation,
        eA,
        tA,
        b,
        _,
        nA,
        rA,
        dA,
        s,
        $
      );
    if (
      (Mu(
        (lA) =>
          !(S && S.some((_A) => _A.route.id === lA)) ||
          (re && re.some((_A) => _A.route.id === lA))
      ),
      (M = ++T),
      re.length === 0 && JA.length === 0)
    ) {
      let lA = cg();
      return (
        Ee(
          I,
          DA(
            {
              matches: S,
              loaderData: {},
              errors: $ && Ke($[1]) ? { [$[0]]: $[1].error } : null,
            },
            Mh($),
            lA ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: Z }
        ),
        { shortCircuited: !0 }
      );
    }
    if (FA) {
      let lA = {};
      if (!K) {
        lA.navigation = gA;
        let _A = ag($);
        _A !== void 0 && (lA.actionData = _A);
      }
      JA.length > 0 && (lA.fetchers = EQ(JA)), sA(lA, { flushSync: Z });
    }
    JA.forEach((lA) => {
      D.has(lA.key) && tr(lA.key),
        lA.controller && D.set(lA.key, lA.controller);
    });
    let Li = () => JA.forEach((lA) => tr(lA.key));
    L && L.signal.addEventListener("abort", Li);
    let { loaderResults: Ht, fetcherResults: Fn } = await sg(v, S, re, JA, U);
    if (U.signal.aborted) return { shortCircuited: !0 };
    L && L.signal.removeEventListener("abort", Li),
      JA.forEach((lA) => D.delete(lA.key));
    let rr = Ya(Ht);
    if (rr)
      return await Wr(U, rr.result, !0, { replace: V }), { shortCircuited: !0 };
    if (((rr = Ya(Fn)), rr))
      return (
        rA.add(rr.key),
        await Wr(U, rr.result, !0, { replace: V }),
        { shortCircuited: !0 }
      );
    let { loaderData: xa, errors: St } = Kh(v, S, re, Ht, $, JA, Fn, iA);
    iA.forEach((lA, _A) => {
      lA.subscribe((be) => {
        (be || lA.done) && iA.delete(_A);
      });
    }),
      c.v7_partialHydration &&
        AA &&
        v.errors &&
        Object.entries(v.errors)
          .filter((lA) => {
            let [_A] = lA;
            return !re.some((be) => be.route.id === _A);
          })
          .forEach((lA) => {
            let [_A, be] = lA;
            St = Object.assign(St || {}, { [_A]: be });
          });
    let Ha = cg(),
      Sa = fg(M),
      La = Ha || Sa || JA.length > 0;
    return DA(
      { matches: S, loaderData: xa, errors: St },
      La ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function ag(U) {
    if (U && !Ke(U[1])) return { [U[0]]: U[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function EQ(U) {
    return (
      U.forEach((I) => {
        let S = v.fetchers.get(I.key),
          K = ki(void 0, S ? S.data : void 0);
        v.fetchers.set(I.key, K);
      }),
      new Map(v.fetchers)
    );
  }
  function IQ(U, I, S, K) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    D.has(U) && tr(U);
    let X = (K && K.unstable_flushSync) === !0,
      q = a || o,
      oA = kf(
        v.location,
        v.matches,
        s,
        c.v7_prependBasename,
        S,
        c.v7_relativeSplatPath,
        I,
        K == null ? void 0 : K.relative
      ),
      V = $r(q, oA, s),
      AA = Ea(V, q, oA);
    if ((AA.active && AA.matches && (V = AA.matches), !V)) {
      xt(U, I, we(404, { pathname: oA }), { flushSync: X });
      return;
    }
    let {
      path: Z,
      submission: $,
      error: gA,
    } = Th(c.v7_normalizeFormMethod, !0, oA, K);
    if (gA) {
      xt(U, I, gA, { flushSync: X });
      return;
    }
    let pA = Zi(V, Z);
    if (((H = (K && K.preventScrollReset) === !0), $ && ot($.formMethod))) {
      xQ(U, I, Z, pA, V, AA.active, X, $);
      return;
    }
    nA.set(U, { routeId: I, path: Z }), HQ(U, I, Z, pA, V, AA.active, X, $);
  }
  async function xQ(U, I, S, K, X, q, oA, V) {
    Ku(), nA.delete(U);
    function AA(kA) {
      if (!kA.route.action && !kA.route.lazy) {
        let Lt = we(405, { method: V.formMethod, pathname: S, routeId: I });
        return xt(U, I, Lt, { flushSync: oA }), !0;
      }
      return !1;
    }
    if (!q && AA(K)) return;
    let Z = v.fetchers.get(U);
    er(U, a1(V, Z), { flushSync: oA });
    let $ = new AbortController(),
      gA = In(A.history, S, $.signal, V);
    if (q) {
      let kA = await Ia(X, S, gA.signal);
      if (kA.type === "aborted") return;
      if (kA.type === "error") {
        let { error: Lt } = Fa(S, kA);
        xt(U, I, Lt, { flushSync: oA });
        return;
      } else if (kA.matches) {
        if (((X = kA.matches), (K = Zi(X, S)), AA(K))) return;
      } else {
        xt(U, I, we(404, { pathname: S }), { flushSync: oA });
        return;
      }
    }
    D.set(U, $);
    let pA = T,
      dA = (await Si("action", v, gA, [K], X, U))[K.route.id];
    if (gA.signal.aborted) {
      D.get(U) === $ && D.delete(U);
      return;
    }
    if (c.v7_fetcherPersist && _.has(U)) {
      if (rn(dA) || Ke(dA)) {
        er(U, sr(void 0));
        return;
      }
    } else {
      if (rn(dA))
        if ((D.delete(U), M > pA)) {
          er(U, sr(void 0));
          return;
        } else
          return (
            rA.add(U), er(U, ki(V)), Wr(gA, dA, !1, { fetcherSubmission: V })
          );
      if (Ke(dA)) {
        xt(U, I, dA.error);
        return;
      }
    }
    if (wr(dA)) throw we(400, { type: "defer-action" });
    let re = v.navigation.location || v.location,
      JA = In(A.history, re, $.signal),
      Li = a || o,
      Ht =
        v.navigation.state !== "idle"
          ? $r(Li, v.navigation.location, s)
          : v.matches;
    uA(Ht, "Didn't find any matches after fetcher action");
    let Fn = ++T;
    j.set(U, Fn);
    let rr = ki(V, dA.data);
    v.fetchers.set(U, rr);
    let [xa, St] = Dh(
      A.history,
      v,
      Ht,
      V,
      re,
      !1,
      c.v7_skipActionErrorRevalidation,
      eA,
      tA,
      b,
      _,
      nA,
      rA,
      Li,
      s,
      [K.route.id, dA]
    );
    St.filter((kA) => kA.key !== U).forEach((kA) => {
      let Lt = kA.key,
        wg = v.fetchers.get(Lt),
        RQ = ki(void 0, wg ? wg.data : void 0);
      v.fetchers.set(Lt, RQ),
        D.has(Lt) && tr(Lt),
        kA.controller && D.set(Lt, kA.controller);
    }),
      sA({ fetchers: new Map(v.fetchers) });
    let Ha = () => St.forEach((kA) => tr(kA.key));
    $.signal.addEventListener("abort", Ha);
    let { loaderResults: Sa, fetcherResults: La } = await sg(v, Ht, xa, St, JA);
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", Ha),
      j.delete(U),
      D.delete(U),
      St.forEach((kA) => D.delete(kA.key));
    let lA = Ya(Sa);
    if (lA) return Wr(JA, lA.result, !1);
    if (((lA = Ya(La)), lA)) return rA.add(lA.key), Wr(JA, lA.result, !1);
    let { loaderData: _A, errors: be } = Kh(v, Ht, xa, Sa, void 0, St, La, iA);
    if (v.fetchers.has(U)) {
      let kA = sr(dA.data);
      v.fetchers.set(U, kA);
    }
    fg(Fn),
      v.navigation.state === "loading" && Fn > M
        ? (uA(x, "Expected pending action"),
          L && L.abort(),
          Ee(v.navigation.location, {
            matches: Ht,
            loaderData: _A,
            errors: be,
            fetchers: new Map(v.fetchers),
          }))
        : (sA({
            errors: be,
            loaderData: Nh(v.loaderData, _A, Ht, be),
            fetchers: new Map(v.fetchers),
          }),
          (eA = !1));
  }
  async function HQ(U, I, S, K, X, q, oA, V) {
    let AA = v.fetchers.get(U);
    er(U, ki(V, AA ? AA.data : void 0), { flushSync: oA });
    let Z = new AbortController(),
      $ = In(A.history, S, Z.signal);
    if (q) {
      let dA = await Ia(X, S, $.signal);
      if (dA.type === "aborted") return;
      if (dA.type === "error") {
        let { error: re } = Fa(S, dA);
        xt(U, I, re, { flushSync: oA });
        return;
      } else if (dA.matches) (X = dA.matches), (K = Zi(X, S));
      else {
        xt(U, I, we(404, { pathname: S }), { flushSync: oA });
        return;
      }
    }
    D.set(U, Z);
    let gA = T,
      FA = (await Si("loader", v, $, [K], X, U))[K.route.id];
    if (
      (wr(FA) && (FA = (await QB(FA, $.signal, !0)) || FA),
      D.get(U) === Z && D.delete(U),
      !$.signal.aborted)
    ) {
      if (_.has(U)) {
        er(U, sr(void 0));
        return;
      }
      if (rn(FA))
        if (M > gA) {
          er(U, sr(void 0));
          return;
        } else {
          rA.add(U), await Wr($, FA, !1);
          return;
        }
      if (Ke(FA)) {
        xt(U, I, FA.error);
        return;
      }
      uA(!wr(FA), "Unhandled fetcher deferred data"), er(U, sr(FA.data));
    }
  }
  async function Wr(U, I, S, K) {
    let {
      submission: X,
      fetcherSubmission: q,
      replace: oA,
    } = K === void 0 ? {} : K;
    I.response.headers.has("X-Remix-Revalidate") && (eA = !0);
    let V = I.response.headers.get("Location");
    uA(V, "Expected a Location header on the redirect Response"),
      (V = Oh(V, new URL(U.url), s));
    let AA = Mo(v.location, V, { _isRedirect: !0 });
    if (t) {
      let dA = !1;
      if (I.response.headers.has("X-Remix-Reload-Document")) dA = !0;
      else if (CB.test(V)) {
        const re = A.history.createURL(V);
        dA = re.origin !== e.location.origin || yi(re.pathname, s) == null;
      }
      if (dA) {
        oA ? e.location.replace(V) : e.location.assign(V);
        return;
      }
    }
    L = null;
    let Z =
        oA === !0 || I.response.headers.has("X-Remix-Replace")
          ? YA.Replace
          : YA.Push,
      { formMethod: $, formAction: gA, formEncType: pA } = v.navigation;
    !X && !q && $ && gA && pA && (X = Ph(v.navigation));
    let FA = X || q;
    if (NF.has(I.response.status) && FA && ot(FA.formMethod))
      await jr(Z, AA, {
        submission: DA({}, FA, { formAction: V }),
        preventScrollReset: H,
        enableViewTransition: S ? O : void 0,
      });
    else {
      let dA = Bc(AA, X);
      await jr(Z, AA, {
        overrideNavigation: dA,
        fetcherSubmission: q,
        preventScrollReset: H,
        enableViewTransition: S ? O : void 0,
      });
    }
  }
  async function Si(U, I, S, K, X, q) {
    let oA,
      V = {};
    try {
      oA = await zF(l, U, I, S, K, X, q, i, n);
    } catch (AA) {
      return (
        K.forEach((Z) => {
          V[Z.route.id] = { type: mA.error, error: AA };
        }),
        V
      );
    }
    for (let [AA, Z] of Object.entries(oA))
      if (e1(Z)) {
        let $ = Z.result;
        V[AA] = {
          type: mA.redirect,
          response: ZF($, S, AA, X, s, c.v7_relativeSplatPath),
        };
      } else V[AA] = await YF(Z);
    return V;
  }
  async function sg(U, I, S, K, X) {
    let q = U.matches,
      oA = Si("loader", U, X, S, I, null),
      V = Promise.all(
        K.map(async ($) => {
          if ($.matches && $.match && $.controller) {
            let pA = (
              await Si(
                "loader",
                U,
                In(A.history, $.path, $.controller.signal),
                [$.match],
                $.matches,
                $.key
              )
            )[$.match.route.id];
            return { [$.key]: pA };
          } else
            return Promise.resolve({
              [$.key]: { type: mA.error, error: we(404, { pathname: $.path }) },
            });
        })
      ),
      AA = await oA,
      Z = (await V).reduce(($, gA) => Object.assign($, gA), {});
    return (
      await Promise.all([n1(I, AA, X.signal, q, U.loaderData), i1(I, Z, K)]),
      { loaderResults: AA, fetcherResults: Z }
    );
  }
  function Ku() {
    (eA = !0),
      tA.push(...Mu()),
      nA.forEach((U, I) => {
        D.has(I) && (b.add(I), tr(I));
      });
  }
  function er(U, I, S) {
    S === void 0 && (S = {}),
      v.fetchers.set(U, I),
      sA(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (S && S.flushSync) === !0 }
      );
  }
  function xt(U, I, S, K) {
    K === void 0 && (K = {});
    let X = Yn(v.matches, I);
    ya(U),
      sA(
        { errors: { [X.route.id]: S }, fetchers: new Map(v.fetchers) },
        { flushSync: (K && K.flushSync) === !0 }
      );
  }
  function lg(U) {
    return (
      c.v7_fetcherPersist &&
        (vA.set(U, (vA.get(U) || 0) + 1), _.has(U) && _.delete(U)),
      v.fetchers.get(U) || MF
    );
  }
  function ya(U) {
    let I = v.fetchers.get(U);
    D.has(U) && !(I && I.state === "loading" && j.has(U)) && tr(U),
      nA.delete(U),
      j.delete(U),
      rA.delete(U),
      _.delete(U),
      b.delete(U),
      v.fetchers.delete(U);
  }
  function SQ(U) {
    if (c.v7_fetcherPersist) {
      let I = (vA.get(U) || 0) - 1;
      I <= 0 ? (vA.delete(U), _.add(U)) : vA.set(U, I);
    } else ya(U);
    sA({ fetchers: new Map(v.fetchers) });
  }
  function tr(U) {
    let I = D.get(U);
    uA(I, "Expected fetch controller: " + U), I.abort(), D.delete(U);
  }
  function ug(U) {
    for (let I of U) {
      let S = lg(I),
        K = sr(S.data);
      v.fetchers.set(I, K);
    }
  }
  function cg() {
    let U = [],
      I = !1;
    for (let S of rA) {
      let K = v.fetchers.get(S);
      uA(K, "Expected fetcher: " + S),
        K.state === "loading" && (rA.delete(S), U.push(S), (I = !0));
    }
    return ug(U), I;
  }
  function fg(U) {
    let I = [];
    for (let [S, K] of j)
      if (K < U) {
        let X = v.fetchers.get(S);
        uA(X, "Expected fetcher: " + S),
          X.state === "loading" && (tr(S), j.delete(S), I.push(S));
      }
    return ug(I), I.length > 0;
  }
  function LQ(U, I) {
    let S = v.blockers.get(U) || _i;
    return NA.get(U) !== I && NA.set(U, I), S;
  }
  function dg(U) {
    v.blockers.delete(U), NA.delete(U);
  }
  function Ua(U, I) {
    let S = v.blockers.get(U) || _i;
    uA(
      (S.state === "unblocked" && I.state === "blocked") ||
        (S.state === "blocked" && I.state === "blocked") ||
        (S.state === "blocked" && I.state === "proceeding") ||
        (S.state === "blocked" && I.state === "unblocked") ||
        (S.state === "proceeding" && I.state === "unblocked"),
      "Invalid blocker state transition: " + S.state + " -> " + I.state
    );
    let K = new Map(v.blockers);
    K.set(U, I), sA({ blockers: K });
  }
  function Bg(U) {
    let { currentLocation: I, nextLocation: S, historyAction: K } = U;
    if (NA.size === 0) return;
    NA.size > 1 && gi(!1, "A router only supports one blocker at a time");
    let X = Array.from(NA.entries()),
      [q, oA] = X[X.length - 1],
      V = v.blockers.get(q);
    if (
      !(V && V.state === "proceeding") &&
      oA({ currentLocation: I, nextLocation: S, historyAction: K })
    )
      return q;
  }
  function Nu(U) {
    let I = we(404, { pathname: U }),
      S = a || o,
      { matches: K, route: X } = _h(S);
    return Mu(), { notFoundMatches: K, route: X, error: I };
  }
  function Fa(U, I) {
    return {
      boundaryId: Yn(I.partialMatches).route.id,
      error: we(400, {
        type: "route-discovery",
        pathname: U,
        message:
          I.error != null && "message" in I.error ? I.error : String(I.error),
      }),
    };
  }
  function Mu(U) {
    let I = [];
    return (
      iA.forEach((S, K) => {
        (!U || U(K)) && (S.cancel(), I.push(K), iA.delete(K));
      }),
      I
    );
  }
  function TQ(U, I, S) {
    if (((F = U), (d = I), (B = S || null), !w && v.navigation === dc)) {
      w = !0;
      let K = hg(v.location, v.matches);
      K != null && sA({ restoreScrollPosition: K });
    }
    return () => {
      (F = null), (d = null), (B = null);
    };
  }
  function gg(U, I) {
    return (
      (B &&
        B(
          U,
          I.map((K) => hF(K, v.loaderData))
        )) ||
      U.key
    );
  }
  function DQ(U, I) {
    if (F && d) {
      let S = gg(U, I);
      F[S] = d();
    }
  }
  function hg(U, I) {
    if (F) {
      let S = gg(U, I),
        K = F[S];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function Ea(U, I, S) {
    if (u) {
      if (p.has(S)) return { active: !1, matches: U };
      if (U) {
        if (Object.keys(U[0].params).length > 0)
          return { active: !0, matches: _s(I, S, s, !0) };
      } else return { active: !0, matches: _s(I, S, s, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function Ia(U, I, S) {
    let K = U;
    for (;;) {
      let X = a == null,
        q = a || o;
      try {
        await jF(u, I, K, q, i, n, MA, S);
      } catch (AA) {
        return { type: "error", error: AA, partialMatches: K };
      } finally {
        X && (o = [...o]);
      }
      if (S.aborted) return { type: "aborted" };
      let oA = $r(q, I, s);
      if (oA) return pg(I, p), { type: "success", matches: oA };
      let V = _s(q, I, s, !0);
      if (
        !V ||
        (K.length === V.length &&
          K.every((AA, Z) => AA.route.id === V[Z].route.id))
      )
        return pg(I, p), { type: "success", matches: null };
      K = V;
    }
  }
  function pg(U, I) {
    if (I.size >= g) {
      let S = I.values().next().value;
      I.delete(S);
    }
    I.add(U);
  }
  function bQ(U) {
    (i = {}), (a = _o(U, n, void 0, i));
  }
  function OQ(U, I) {
    let S = a == null;
    nm(U, I, a || o, i, n), S && ((o = [...o]), sA({}));
  }
  return (
    (E = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return e;
      },
      initialize: Ou,
      subscribe: Y,
      enableScrollRestoration: TQ,
      navigate: Ar,
      fetch: IQ,
      revalidate: Ru,
      createHref: (U) => A.history.createHref(U),
      encodeLocation: (U) => A.history.encodeLocation(U),
      getFetcher: lg,
      deleteFetcher: SQ,
      dispose: Qa,
      getBlocker: LQ,
      deleteBlocker: dg,
      patchRoutes: OQ,
      _internalFetchControllers: D,
      _internalActiveDeferreds: iA,
      _internalSetRoutes: bQ,
    }),
    E
  );
}
function PF(A) {
  return (
    A != null &&
    (("formData" in A && A.formData != null) ||
      ("body" in A && A.body !== void 0))
  );
}
function kf(A, e, t, r, n, i, o, a) {
  let s, l;
  if (o) {
    s = [];
    for (let c of e)
      if ((s.push(c), c.route.id === o)) {
        l = c;
        break;
      }
  } else (s = e), (l = e[e.length - 1]);
  let u = mB(n || ".", vB(s, i), yi(A.pathname, t) || A.pathname, a === "path");
  return (
    n == null && ((u.search = A.search), (u.hash = A.hash)),
    (n == null || n === "" || n === ".") &&
      l &&
      l.route.index &&
      !yB(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      t !== "/" &&
      (u.pathname = u.pathname === "/" ? t : Pt([t, u.pathname])),
    hn(u)
  );
}
function Th(A, e, t, r) {
  if (!r || !PF(r)) return { path: t };
  if (r.formMethod && !r1(r.formMethod))
    return { path: t, error: we(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: we(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = A ? i.toUpperCase() : i.toLowerCase(),
    a = im(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ot(o)) return n();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((h, g) => {
              let [p, F] = g;
              return (
                "" +
                h +
                p +
                "=" +
                F +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ot(o)) return n();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return n();
      }
    }
  }
  uA(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, l;
  if (r.formData) (s = Pf(r.formData)), (l = r.formData);
  else if (r.body instanceof FormData) (s = Pf(r.body)), (l = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (l = Rh(s));
  else if (r.body == null) (s = new URLSearchParams()), (l = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (l = Rh(s));
    } catch {
      return n();
    }
  let u = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: l,
    json: void 0,
    text: void 0,
  };
  if (ot(u.formMethod)) return { path: t, submission: u };
  let c = kr(t);
  return (
    e && c.search && yB(c.search) && s.append("index", ""),
    (c.search = "?" + s),
    { path: hn(c), submission: u }
  );
}
function VF(A, e) {
  let t = A;
  if (e) {
    let r = A.findIndex((n) => n.route.id === e);
    r >= 0 && (t = A.slice(0, r));
  }
  return t;
}
function Dh(A, e, t, r, n, i, o, a, s, l, u, c, f, h, g, p) {
  let F = p ? (Ke(p[1]) ? p[1].error : p[1].data) : void 0,
    B = A.createURL(e.location),
    d = A.createURL(n),
    w = p && Ke(p[1]) ? p[0] : void 0,
    C = w ? VF(t, w) : t,
    m = p ? p[1].statusCode : void 0,
    y = o && m && m >= 400,
    E = C.filter((x, H) => {
      let { route: L } = x;
      if (L.lazy) return !0;
      if (L.loader == null) return !1;
      if (i)
        return typeof L.loader != "function" || L.loader.hydrate
          ? !0
          : e.loaderData[L.id] === void 0 &&
              (!e.errors || e.errors[L.id] === void 0);
      if (GF(e.loaderData, e.matches[H], x) || s.some((P) => P === x.route.id))
        return !0;
      let O = e.matches[H],
        R = x;
      return bh(
        x,
        DA(
          {
            currentUrl: B,
            currentParams: O.params,
            nextUrl: d,
            nextParams: R.params,
          },
          r,
          {
            actionResult: F,
            actionStatus: m,
            defaultShouldRevalidate: y
              ? !1
              : a ||
                B.pathname + B.search === d.pathname + d.search ||
                B.search !== d.search ||
                rm(O, R),
          }
        )
      );
    }),
    v = [];
  return (
    c.forEach((x, H) => {
      if (i || !t.some((J) => J.route.id === x.routeId) || u.has(H)) return;
      let L = $r(h, x.path, g);
      if (!L) {
        v.push({
          key: H,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let O = e.fetchers.get(H),
        R = Zi(L, x.path),
        P = !1;
      f.has(H)
        ? (P = !1)
        : l.has(H)
        ? (l.delete(H), (P = !0))
        : O && O.state !== "idle" && O.data === void 0
        ? (P = a)
        : (P = bh(
            R,
            DA(
              {
                currentUrl: B,
                currentParams: e.matches[e.matches.length - 1].params,
                nextUrl: d,
                nextParams: t[t.length - 1].params,
              },
              r,
              {
                actionResult: F,
                actionStatus: m,
                defaultShouldRevalidate: y ? !1 : a,
              }
            )
          )),
        P &&
          v.push({
            key: H,
            routeId: x.routeId,
            path: x.path,
            matches: L,
            match: R,
            controller: new AbortController(),
          });
    }),
    [E, v]
  );
}
function GF(A, e, t) {
  let r = !e || t.route.id !== e.route.id,
    n = A[t.route.id] === void 0;
  return r || n;
}
function rm(A, e) {
  let t = A.route.path;
  return (
    A.pathname !== e.pathname ||
    (t != null && t.endsWith("*") && A.params["*"] !== e.params["*"])
  );
}
function bh(A, e) {
  if (A.route.shouldRevalidate) {
    let t = A.route.shouldRevalidate(e);
    if (typeof t == "boolean") return t;
  }
  return e.defaultShouldRevalidate;
}
async function jF(A, e, t, r, n, i, o, a) {
  let s = [e, ...t.map((l) => l.route.id)].join("-");
  try {
    let l = o.get(s);
    l ||
      ((l = A({
        path: e,
        matches: t,
        patch: (u, c) => {
          a.aborted || nm(u, c, r, n, i);
        },
      })),
      o.set(s, l)),
      l && A1(l) && (await l);
  } finally {
    o.delete(s);
  }
}
function nm(A, e, t, r, n) {
  if (A) {
    var i;
    let o = r[A];
    uA(o, "No route found to patch children into: routeId = " + A);
    let a = _o(
      e,
      n,
      [
        A,
        "patch",
        String(((i = o.children) == null ? void 0 : i.length) || "0"),
      ],
      r
    );
    o.children ? o.children.push(...a) : (o.children = a);
  } else {
    let o = _o(e, n, ["patch", String(t.length || "0")], r);
    t.push(...o);
  }
}
async function WF(A, e, t) {
  if (!A.lazy) return;
  let r = await A.lazy();
  if (!A.lazy) return;
  let n = t[A.id];
  uA(n, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let s = n[o] !== void 0 && o !== "hasErrorBoundary";
    gi(
      !s,
      'Route "' +
        n.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !s && !BF.has(o) && (i[o] = r[o]);
  }
  Object.assign(n, i), Object.assign(n, DA({}, e(n), { lazy: void 0 }));
}
async function XF(A) {
  let { matches: e } = A,
    t = e.filter((n) => n.shouldLoad);
  return (await Promise.all(t.map((n) => n.resolve()))).reduce(
    (n, i, o) => Object.assign(n, { [t[o].route.id]: i }),
    {}
  );
}
async function zF(A, e, t, r, n, i, o, a, s, l) {
  let u = i.map((h) => (h.route.lazy ? WF(h.route, s, a) : void 0)),
    c = i.map((h, g) => {
      let p = u[g],
        F = n.some((d) => d.route.id === h.route.id);
      return DA({}, h, {
        shouldLoad: F,
        resolve: async (d) => (
          d &&
            r.method === "GET" &&
            (h.route.lazy || h.route.loader) &&
            (F = !0),
          F
            ? JF(e, r, h, p, d, l)
            : Promise.resolve({ type: mA.data, result: void 0 })
        ),
      });
    }),
    f = await A({
      matches: c,
      request: r,
      params: i[0].params,
      fetcherKey: o,
      context: l,
    });
  try {
    await Promise.all(u);
  } catch {}
  return f;
}
async function JF(A, e, t, r, n, i) {
  let o,
    a,
    s = (l) => {
      let u,
        c = new Promise((g, p) => (u = p));
      (a = () => u()), e.signal.addEventListener("abort", a);
      let f = (g) =>
          typeof l != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + A + '" [routeId: ' + t.route.id + "]")
                )
              )
            : l(
                { request: e, params: t.params, context: i },
                ...(g !== void 0 ? [g] : [])
              ),
        h = (async () => {
          try {
            return { type: "data", result: await (n ? n((p) => f(p)) : f()) };
          } catch (g) {
            return { type: "error", result: g };
          }
        })();
      return Promise.race([h, c]);
    };
  try {
    let l = t.route[A];
    if (r)
      if (l) {
        let u,
          [c] = await Promise.all([
            s(l).catch((f) => {
              u = f;
            }),
            r,
          ]);
        if (u !== void 0) throw u;
        o = c;
      } else if ((await r, (l = t.route[A]), l)) o = await s(l);
      else if (A === "action") {
        let u = new URL(e.url),
          c = u.pathname + u.search;
        throw we(405, { method: e.method, pathname: c, routeId: t.route.id });
      } else return { type: mA.data, result: void 0 };
    else if (l) o = await s(l);
    else {
      let u = new URL(e.url),
        c = u.pathname + u.search;
      throw we(404, { pathname: c });
    }
    uA(
      o.result !== void 0,
      "You defined " +
        (A === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          t.route.id +
          "\" but didn't return anything from your `" +
          A +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (l) {
    return { type: mA.error, result: l };
  } finally {
    a && e.signal.removeEventListener("abort", a);
  }
  return o;
}
async function YF(A) {
  let { result: e, type: t } = A;
  if (om(e)) {
    let l;
    try {
      let u = e.headers.get("Content-Type");
      u && /\bapplication\/json\b/.test(u)
        ? e.body == null
          ? (l = null)
          : (l = await e.json())
        : (l = await e.text());
    } catch (u) {
      return { type: mA.error, error: u };
    }
    return t === mA.error
      ? {
          type: mA.error,
          error: new ml(e.status, e.statusText, l),
          statusCode: e.status,
          headers: e.headers,
        }
      : { type: mA.data, data: l, statusCode: e.status, headers: e.headers };
  }
  if (t === mA.error) {
    if (kh(e)) {
      var r;
      if (e.data instanceof Error) {
        var n;
        return {
          type: mA.error,
          error: e.data,
          statusCode: (n = e.init) == null ? void 0 : n.status,
        };
      }
      e = new ml(
        ((r = e.init) == null ? void 0 : r.status) || 500,
        void 0,
        e.data
      );
    }
    return { type: mA.error, error: e, statusCode: nu(e) ? e.status : void 0 };
  }
  if (t1(e)) {
    var i, o;
    return {
      type: mA.deferred,
      deferredData: e,
      statusCode: (i = e.init) == null ? void 0 : i.status,
      headers:
        ((o = e.init) == null ? void 0 : o.headers) &&
        new Headers(e.init.headers),
    };
  }
  if (kh(e)) {
    var a, s;
    return {
      type: mA.data,
      data: e.data,
      statusCode: (a = e.init) == null ? void 0 : a.status,
      headers:
        (s = e.init) != null && s.headers
          ? new Headers(e.init.headers)
          : void 0,
    };
  }
  return { type: mA.data, data: e };
}
function ZF(A, e, t, r, n, i) {
  let o = A.headers.get("Location");
  if (
    (uA(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !CB.test(o))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === t) + 1);
    (o = kf(new URL(e.url), a, n, !0, o, i)), A.headers.set("Location", o);
  }
  return A;
}
function Oh(A, e, t) {
  if (CB.test(A)) {
    let r = A,
      n = r.startsWith("//") ? new URL(e.protocol + r) : new URL(r),
      i = yi(n.pathname, t) != null;
    if (n.origin === e.origin && i) return n.pathname + n.search + n.hash;
  }
  return A;
}
function In(A, e, t, r) {
  let n = A.createURL(im(e)).toString(),
    i = { signal: t };
  if (r && ot(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = Pf(r.formData))
        : (i.body = r.formData);
  }
  return new Request(n, i);
}
function Pf(A) {
  let e = new URLSearchParams();
  for (let [t, r] of A.entries())
    e.append(t, typeof r == "string" ? r : r.name);
  return e;
}
function Rh(A) {
  let e = new FormData();
  for (let [t, r] of A.entries()) e.append(t, r);
  return e;
}
function $F(A, e, t, r, n) {
  let i = {},
    o = null,
    a,
    s = !1,
    l = {},
    u = t && Ke(t[1]) ? t[1].error : void 0;
  return (
    A.forEach((c) => {
      if (!(c.route.id in e)) return;
      let f = c.route.id,
        h = e[f];
      if (
        (uA(!rn(h), "Cannot handle redirect results in processLoaderData"),
        Ke(h))
      ) {
        let g = h.error;
        u !== void 0 && ((g = u), (u = void 0)), (o = o || {});
        {
          let p = Yn(A, f);
          o[p.route.id] == null && (o[p.route.id] = g);
        }
        (i[f] = void 0),
          s || ((s = !0), (a = nu(h.error) ? h.error.status : 500)),
          h.headers && (l[f] = h.headers);
      } else
        wr(h)
          ? (r.set(f, h.deferredData),
            (i[f] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !s &&
              (a = h.statusCode),
            h.headers && (l[f] = h.headers))
          : ((i[f] = h.data),
            h.statusCode && h.statusCode !== 200 && !s && (a = h.statusCode),
            h.headers && (l[f] = h.headers));
    }),
    u !== void 0 && t && ((o = { [t[0]]: u }), (i[t[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: l }
  );
}
function Kh(A, e, t, r, n, i, o, a) {
  let { loaderData: s, errors: l } = $F(e, r, n, a);
  return (
    i.forEach((u) => {
      let { key: c, match: f, controller: h } = u,
        g = o[c];
      if (
        (uA(g, "Did not find corresponding fetcher result"),
        !(h && h.signal.aborted))
      )
        if (Ke(g)) {
          let p = Yn(A.matches, f == null ? void 0 : f.route.id);
          (l && l[p.route.id]) || (l = DA({}, l, { [p.route.id]: g.error })),
            A.fetchers.delete(c);
        } else if (rn(g)) uA(!1, "Unhandled fetcher revalidation redirect");
        else if (wr(g)) uA(!1, "Unhandled fetcher deferred data");
        else {
          let p = sr(g.data);
          A.fetchers.set(c, p);
        }
    }),
    { loaderData: s, errors: l }
  );
}
function Nh(A, e, t, r) {
  let n = DA({}, e);
  for (let i of t) {
    let o = i.route.id;
    if (
      (e.hasOwnProperty(o)
        ? e[o] !== void 0 && (n[o] = e[o])
        : A[o] !== void 0 && i.route.loader && (n[o] = A[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return n;
}
function Mh(A) {
  return A
    ? Ke(A[1])
      ? { actionData: {} }
      : { actionData: { [A[0]]: A[1].data } }
    : {};
}
function Yn(A, e) {
  return (
    (e ? A.slice(0, A.findIndex((r) => r.route.id === e) + 1) : [...A])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || A[0]
  );
}
function _h(A) {
  let e =
    A.length === 1
      ? A[0]
      : A.find((t) => t.index || !t.path || t.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: e }],
    route: e,
  };
}
function we(A, e) {
  let {
      pathname: t,
      routeId: r,
      method: n,
      type: i,
      message: o,
    } = e === void 0 ? {} : e,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    A === 400
      ? ((a = "Bad Request"),
        i === "route-discovery"
          ? (s =
              'Unable to match URL "' +
              t +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                o))
          : n && t && r
          ? (s =
              "You made a " +
              n +
              ' request to "' +
              t +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (s = "defer() is not supported in actions")
          : i === "invalid-body" && (s = "Unable to encode submission body"))
      : A === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + t + '"'))
      : A === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + t + '"'))
      : A === 405 &&
        ((a = "Method Not Allowed"),
        n && t && r
          ? (s =
              "You made a " +
              n.toUpperCase() +
              ' request to "' +
              t +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : n && (s = 'Invalid request method "' + n.toUpperCase() + '"')),
    new ml(A || 500, a, new Error(s), !0)
  );
}
function Ya(A) {
  let e = Object.entries(A);
  for (let t = e.length - 1; t >= 0; t--) {
    let [r, n] = e[t];
    if (rn(n)) return { key: r, result: n };
  }
}
function im(A) {
  let e = typeof A == "string" ? kr(A) : A;
  return hn(DA({}, e, { hash: "" }));
}
function qF(A, e) {
  return A.pathname !== e.pathname || A.search !== e.search
    ? !1
    : A.hash === ""
    ? e.hash !== ""
    : A.hash === e.hash
    ? !0
    : e.hash !== "";
}
function A1(A) {
  return typeof A == "object" && A != null && "then" in A;
}
function e1(A) {
  return om(A.result) && KF.has(A.result.status);
}
function wr(A) {
  return A.type === mA.deferred;
}
function Ke(A) {
  return A.type === mA.error;
}
function rn(A) {
  return (A && A.type) === mA.redirect;
}
function kh(A) {
  return (
    typeof A == "object" &&
    A != null &&
    "type" in A &&
    "data" in A &&
    "init" in A &&
    A.type === "DataWithResponseInit"
  );
}
function t1(A) {
  let e = A;
  return (
    e &&
    typeof e == "object" &&
    typeof e.data == "object" &&
    typeof e.subscribe == "function" &&
    typeof e.cancel == "function" &&
    typeof e.resolveData == "function"
  );
}
function om(A) {
  return (
    A != null &&
    typeof A.status == "number" &&
    typeof A.statusText == "string" &&
    typeof A.headers == "object" &&
    typeof A.body < "u"
  );
}
function r1(A) {
  return RF.has(A.toLowerCase());
}
function ot(A) {
  return bF.has(A.toLowerCase());
}
async function n1(A, e, t, r, n) {
  let i = Object.entries(e);
  for (let o = 0; o < i.length; o++) {
    let [a, s] = i[o],
      l = A.find((f) => (f == null ? void 0 : f.route.id) === a);
    if (!l) continue;
    let u = r.find((f) => f.route.id === l.route.id),
      c = u != null && !rm(u, l) && (n && n[l.route.id]) !== void 0;
    wr(s) &&
      c &&
      (await QB(s, t, !1).then((f) => {
        f && (e[a] = f);
      }));
  }
}
async function i1(A, e, t) {
  for (let r = 0; r < t.length; r++) {
    let { key: n, routeId: i, controller: o } = t[r],
      a = e[n];
    A.find((l) => (l == null ? void 0 : l.route.id) === i) &&
      wr(a) &&
      (uA(
        o,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await QB(a, o.signal, !0).then((l) => {
        l && (e[n] = l);
      }));
  }
}
async function QB(A, e, t) {
  if ((t === void 0 && (t = !1), !(await A.deferredData.resolveData(e)))) {
    if (t)
      try {
        return { type: mA.data, data: A.deferredData.unwrappedData };
      } catch (n) {
        return { type: mA.error, error: n };
      }
    return { type: mA.data, data: A.deferredData.data };
  }
}
function yB(A) {
  return new URLSearchParams(A).getAll("index").some((e) => e === "");
}
function Zi(A, e) {
  let t = typeof e == "string" ? kr(e).search : e.search;
  if (A[A.length - 1].route.index && yB(t || "")) return A[A.length - 1];
  let r = Am(A);
  return r[r.length - 1];
}
function Ph(A) {
  let {
    formMethod: e,
    formAction: t,
    formEncType: r,
    text: n,
    formData: i,
    json: o,
  } = A;
  if (!(!e || !t || !r)) {
    if (n != null)
      return {
        formMethod: e,
        formAction: t,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: n,
      };
    if (i != null)
      return {
        formMethod: e,
        formAction: t,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: e,
        formAction: t,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Bc(A, e) {
  return e
    ? {
        state: "loading",
        location: A,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
      }
    : {
        state: "loading",
        location: A,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function o1(A, e) {
  return {
    state: "submitting",
    location: A,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
  };
}
function ki(A, e) {
  return A
    ? {
        state: "loading",
        formMethod: A.formMethod,
        formAction: A.formAction,
        formEncType: A.formEncType,
        formData: A.formData,
        json: A.json,
        text: A.text,
        data: e,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
      };
}
function a1(A, e) {
  return {
    state: "submitting",
    formMethod: A.formMethod,
    formAction: A.formAction,
    formEncType: A.formEncType,
    formData: A.formData,
    json: A.json,
    text: A.text,
    data: e ? e.data : void 0,
  };
}
function sr(A) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: A,
  };
}
function s1(A, e) {
  try {
    let t = A.sessionStorage.getItem(tm);
    if (t) {
      let r = JSON.parse(t);
      for (let [n, i] of Object.entries(r || {}))
        i && Array.isArray(i) && e.set(n, new Set(i || []));
    }
  } catch {}
}
function l1(A, e) {
  if (e.size > 0) {
    let t = {};
    for (let [r, n] of e) t[r] = [...n];
    try {
      A.sessionStorage.setItem(tm, JSON.stringify(t));
    } catch (r) {
      gi(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cl() {
  return (
    (Cl = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
          }
          return A;
        }),
    Cl.apply(this, arguments)
  );
}
const iu = N.createContext(null),
  am = N.createContext(null),
  Cn = N.createContext(null),
  UB = N.createContext(null),
  Qn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sm = N.createContext(null);
function u1(A, e) {
  let { relative: t } = e === void 0 ? {} : e;
  ra() || uA(!1);
  let { basename: r, navigator: n } = N.useContext(Cn),
    { hash: i, pathname: o, search: a } = um(A, { relative: t }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : Pt([r, o])),
    n.createHref({ pathname: s, search: a, hash: i })
  );
}
function ra() {
  return N.useContext(UB) != null;
}
function na() {
  return ra() || uA(!1), N.useContext(UB).location;
}
function lm(A) {
  N.useContext(Cn).static || N.useLayoutEffect(A);
}
function c1() {
  let { isDataRoute: A } = N.useContext(Qn);
  return A ? y1() : f1();
}
function f1() {
  ra() || uA(!1);
  let A = N.useContext(iu),
    { basename: e, future: t, navigator: r } = N.useContext(Cn),
    { matches: n } = N.useContext(Qn),
    { pathname: i } = na(),
    o = JSON.stringify(vB(n, t.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    lm(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof l == "number") {
          r.go(l);
          return;
        }
        let c = mB(l, JSON.parse(o), i, u.relative === "path");
        A == null &&
          e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : Pt([e, c.pathname])),
          (u.replace ? r.replace : r.push)(c, u.state, u);
      },
      [e, r, o, i, A]
    )
  );
}
function um(A, e) {
  let { relative: t } = e === void 0 ? {} : e,
    { future: r } = N.useContext(Cn),
    { matches: n } = N.useContext(Qn),
    { pathname: i } = na(),
    o = JSON.stringify(vB(n, r.v7_relativeSplatPath));
  return N.useMemo(() => mB(A, JSON.parse(o), i, t === "path"), [A, o, i, t]);
}
function d1(A, e, t, r) {
  ra() || uA(!1);
  let { navigator: n } = N.useContext(Cn),
    { matches: i } = N.useContext(Qn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let l = na(),
    u;
  u = l;
  let c = u.pathname || "/",
    f = c;
  if (s !== "/") {
    let p = s.replace(/^\//, "").split("/");
    f = "/" + c.replace(/^\//, "").split("/").slice(p.length).join("/");
  }
  let h = $r(A, { pathname: f });
  return w1(
    h &&
      h.map((p) =>
        Object.assign({}, p, {
          params: Object.assign({}, a, p.params),
          pathname: Pt([
            s,
            n.encodeLocation
              ? n.encodeLocation(p.pathname).pathname
              : p.pathname,
          ]),
          pathnameBase:
            p.pathnameBase === "/"
              ? s
              : Pt([
                  s,
                  n.encodeLocation
                    ? n.encodeLocation(p.pathnameBase).pathname
                    : p.pathnameBase,
                ]),
        })
      ),
    i,
    t,
    r
  );
}
function B1() {
  let A = Q1(),
    e = nu(A)
      ? A.status + " " + A.statusText
      : A instanceof Error
      ? A.message
      : JSON.stringify(A),
    t = A instanceof Error ? A.stack : null,
    n = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, e),
    t ? N.createElement("pre", { style: n }, t) : null,
    null
  );
}
const g1 = N.createElement(B1, null);
class h1 extends N.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ||
      (t.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : t.error,
          location: t.location,
          revalidation: e.revalidation || t.revalidation,
        };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Qn.Provider,
          { value: this.props.routeContext },
          N.createElement(sm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function p1(A) {
  let { routeContext: e, match: t, children: r } = A,
    n = N.useContext(iu);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    N.createElement(Qn.Provider, { value: e }, r)
  );
}
function w1(A, e, t, r) {
  var n;
  if (
    (e === void 0 && (e = []),
    t === void 0 && (t = null),
    r === void 0 && (r = null),
    A == null)
  ) {
    var i;
    if (!t) return null;
    if (t.errors) A = t.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      e.length === 0 &&
      !t.initialized &&
      t.matches.length > 0
    )
      A = t.matches;
    else return null;
  }
  let o = A,
    a = (n = t) == null ? void 0 : n.errors;
  if (a != null) {
    let u = o.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    u >= 0 || uA(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  let s = !1,
    l = -1;
  if (t && r && r.v7_partialHydration)
    for (let u = 0; u < o.length; u++) {
      let c = o[u];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (l = u),
        c.route.id)
      ) {
        let { loaderData: f, errors: h } = t,
          g =
            c.route.loader &&
            f[c.route.id] === void 0 &&
            (!h || h[c.route.id] === void 0);
        if (c.route.lazy || g) {
          (s = !0), l >= 0 ? (o = o.slice(0, l + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((u, c, f) => {
    let h,
      g = !1,
      p = null,
      F = null;
    t &&
      ((h = a && c.route.id ? a[c.route.id] : void 0),
      (p = c.route.errorElement || g1),
      s &&
        (l < 0 && f === 0
          ? (U1("route-fallback"), (g = !0), (F = null))
          : l === f &&
            ((g = !0), (F = c.route.hydrateFallbackElement || null))));
    let B = e.concat(o.slice(0, f + 1)),
      d = () => {
        let w;
        return (
          h
            ? (w = p)
            : g
            ? (w = F)
            : c.route.Component
            ? (w = N.createElement(c.route.Component, null))
            : c.route.element
            ? (w = c.route.element)
            : (w = u),
          N.createElement(p1, {
            match: c,
            routeContext: { outlet: u, matches: B, isDataRoute: t != null },
            children: w,
          })
        );
      };
    return t && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? N.createElement(h1, {
          location: t.location,
          revalidation: t.revalidation,
          component: p,
          error: h,
          children: d(),
          routeContext: { outlet: null, matches: B, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var cm = (function (A) {
    return (
      (A.UseBlocker = "useBlocker"),
      (A.UseRevalidator = "useRevalidator"),
      (A.UseNavigateStable = "useNavigate"),
      A
    );
  })(cm || {}),
  Ql = (function (A) {
    return (
      (A.UseBlocker = "useBlocker"),
      (A.UseLoaderData = "useLoaderData"),
      (A.UseActionData = "useActionData"),
      (A.UseRouteError = "useRouteError"),
      (A.UseNavigation = "useNavigation"),
      (A.UseRouteLoaderData = "useRouteLoaderData"),
      (A.UseMatches = "useMatches"),
      (A.UseRevalidator = "useRevalidator"),
      (A.UseNavigateStable = "useNavigate"),
      (A.UseRouteId = "useRouteId"),
      A
    );
  })(Ql || {});
function v1(A) {
  let e = N.useContext(iu);
  return e || uA(!1), e;
}
function m1(A) {
  let e = N.useContext(am);
  return e || uA(!1), e;
}
function C1(A) {
  let e = N.useContext(Qn);
  return e || uA(!1), e;
}
function fm(A) {
  let e = C1(),
    t = e.matches[e.matches.length - 1];
  return t.route.id || uA(!1), t.route.id;
}
function Q1() {
  var A;
  let e = N.useContext(sm),
    t = m1(Ql.UseRouteError),
    r = fm(Ql.UseRouteError);
  return e !== void 0 ? e : (A = t.errors) == null ? void 0 : A[r];
}
function y1() {
  let { router: A } = v1(cm.UseNavigateStable),
    e = fm(Ql.UseNavigateStable),
    t = N.useRef(!1);
  return (
    lm(() => {
      t.current = !0;
    }),
    N.useCallback(
      function (n, i) {
        i === void 0 && (i = {}),
          t.current &&
            (typeof n == "number"
              ? A.navigate(n)
              : A.navigate(n, Cl({ fromRouteId: e }, i)));
      },
      [A, e]
    )
  );
}
const Vh = {};
function U1(A, e, t) {
  Vh[A] || (Vh[A] = !0);
}
function F1(A) {
  let {
    basename: e = "/",
    children: t = null,
    location: r,
    navigationType: n = YA.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = A;
  ra() && uA(!1);
  let s = e.replace(/^\/*/, "/"),
    l = N.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: Cl({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, o]
    );
  typeof r == "string" && (r = kr(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: h = null,
      key: g = "default",
    } = r,
    p = N.useMemo(() => {
      let F = yi(u, s);
      return F == null
        ? null
        : {
            location: { pathname: F, search: c, hash: f, state: h, key: g },
            navigationType: n,
          };
    }, [s, u, c, f, h, g, n]);
  return p == null
    ? null
    : N.createElement(
        Cn.Provider,
        { value: l },
        N.createElement(UB.Provider, { children: t, value: p })
      );
}
new Promise(() => {});
function E1(A) {
  let e = {
    hasErrorBoundary: A.ErrorBoundary != null || A.errorElement != null,
  };
  return (
    A.Component &&
      Object.assign(e, {
        element: N.createElement(A.Component),
        Component: void 0,
      }),
    A.HydrateFallback &&
      Object.assign(e, {
        hydrateFallbackElement: N.createElement(A.HydrateFallback),
        HydrateFallback: void 0,
      }),
    A.ErrorBoundary &&
      Object.assign(e, {
        errorElement: N.createElement(A.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    e
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ko() {
  return (
    (ko = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
          }
          return A;
        }),
    ko.apply(this, arguments)
  );
}
function I1(A, e) {
  if (A == null) return {};
  var t = {},
    r = Object.keys(A),
    n,
    i;
  for (i = 0; i < r.length; i++)
    (n = r[i]), !(e.indexOf(n) >= 0) && (t[n] = A[n]);
  return t;
}
function x1(A) {
  return !!(A.metaKey || A.altKey || A.ctrlKey || A.shiftKey);
}
function H1(A, e) {
  return A.button === 0 && (!e || e === "_self") && !x1(A);
}
const S1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  L1 = "6";
try {
  window.__reactRouterVersion = L1;
} catch {}
function T1(A, e) {
  return kF({
    basename: void 0,
    future: ko({}, void 0, { v7_prependBasename: !0 }),
    history: cF({ window: void 0 }),
    hydrationData: D1(),
    routes: A,
    mapRouteProperties: E1,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function D1() {
  var A;
  let e = (A = window) == null ? void 0 : A.__staticRouterHydrationData;
  return e && e.errors && (e = ko({}, e, { errors: b1(e.errors) })), e;
}
function b1(A) {
  if (!A) return null;
  let e = Object.entries(A),
    t = {};
  for (let [r, n] of e)
    if (n && n.__type === "RouteErrorResponse")
      t[r] = new ml(n.status, n.statusText, n.data, n.internal === !0);
    else if (n && n.__type === "Error") {
      if (n.__subType) {
        let i = window[n.__subType];
        if (typeof i == "function")
          try {
            let o = new i(n.message);
            (o.stack = ""), (t[r] = o);
          } catch {}
      }
      if (t[r] == null) {
        let i = new Error(n.message);
        (i.stack = ""), (t[r] = i);
      }
    } else t[r] = n;
  return t;
}
const O1 = N.createContext({ isTransitioning: !1 }),
  R1 = N.createContext(new Map()),
  K1 = "startTransition",
  Gh = $Q[K1],
  N1 = "flushSync",
  jh = uF[N1];
function M1(A) {
  Gh ? Gh(A) : A();
}
function Pi(A) {
  jh ? jh(A) : A();
}
class _1 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, t) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), e(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), t(r));
          });
      }));
  }
}
function k1(A) {
  let { fallbackElement: e, router: t, future: r } = A,
    [n, i] = N.useState(t.state),
    [o, a] = N.useState(),
    [s, l] = N.useState({ isTransitioning: !1 }),
    [u, c] = N.useState(),
    [f, h] = N.useState(),
    [g, p] = N.useState(),
    F = N.useRef(new Map()),
    { v7_startTransition: B } = r || {},
    d = N.useCallback(
      (v) => {
        B ? M1(v) : v();
      },
      [B]
    ),
    w = N.useCallback(
      (v, x) => {
        let {
          deletedFetchers: H,
          unstable_flushSync: L,
          unstable_viewTransitionOpts: O,
        } = x;
        H.forEach((P) => F.current.delete(P)),
          v.fetchers.forEach((P, J) => {
            P.data !== void 0 && F.current.set(J, P.data);
          });
        let R =
          t.window == null ||
          t.window.document == null ||
          typeof t.window.document.startViewTransition != "function";
        if (!O || R) {
          L ? Pi(() => i(v)) : d(() => i(v));
          return;
        }
        if (L) {
          Pi(() => {
            f && (u && u.resolve(), f.skipTransition()),
              l({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: O.currentLocation,
                nextLocation: O.nextLocation,
              });
          });
          let P = t.window.document.startViewTransition(() => {
            Pi(() => i(v));
          });
          P.finished.finally(() => {
            Pi(() => {
              c(void 0), h(void 0), a(void 0), l({ isTransitioning: !1 });
            });
          }),
            Pi(() => h(P));
          return;
        }
        f
          ? (u && u.resolve(),
            f.skipTransition(),
            p({
              state: v,
              currentLocation: O.currentLocation,
              nextLocation: O.nextLocation,
            }))
          : (a(v),
            l({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: O.currentLocation,
              nextLocation: O.nextLocation,
            }));
      },
      [t.window, f, u, F, d]
    );
  N.useLayoutEffect(() => t.subscribe(w), [t, w]),
    N.useEffect(() => {
      s.isTransitioning && !s.flushSync && c(new _1());
    }, [s]),
    N.useEffect(() => {
      if (u && o && t.window) {
        let v = o,
          x = u.promise,
          H = t.window.document.startViewTransition(async () => {
            d(() => i(v)), await x;
          });
        H.finished.finally(() => {
          c(void 0), h(void 0), a(void 0), l({ isTransitioning: !1 });
        }),
          h(H);
      }
    }, [d, o, u, t.window]),
    N.useEffect(() => {
      u && o && n.location.key === o.location.key && u.resolve();
    }, [u, f, n.location, o]),
    N.useEffect(() => {
      !s.isTransitioning &&
        g &&
        (a(g.state),
        l({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        p(void 0));
    }, [s.isTransitioning, g]),
    N.useEffect(() => {}, []);
  let C = N.useMemo(
      () => ({
        createHref: t.createHref,
        encodeLocation: t.encodeLocation,
        go: (v) => t.navigate(v),
        push: (v, x, H) =>
          t.navigate(v, {
            state: x,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
        replace: (v, x, H) =>
          t.navigate(v, {
            replace: !0,
            state: x,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
      }),
      [t]
    ),
    m = t.basename || "/",
    y = N.useMemo(
      () => ({ router: t, navigator: C, static: !1, basename: m }),
      [t, C, m]
    ),
    E = N.useMemo(
      () => ({ v7_relativeSplatPath: t.future.v7_relativeSplatPath }),
      [t.future.v7_relativeSplatPath]
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      iu.Provider,
      { value: y },
      N.createElement(
        am.Provider,
        { value: n },
        N.createElement(
          R1.Provider,
          { value: F.current },
          N.createElement(
            O1.Provider,
            { value: s },
            N.createElement(
              F1,
              {
                basename: m,
                location: n.location,
                navigationType: n.historyAction,
                navigator: C,
                future: E,
              },
              n.initialized || t.future.v7_partialHydration
                ? N.createElement(P1, {
                    routes: t.routes,
                    future: t.future,
                    state: n,
                  })
                : e
            )
          )
        )
      )
    ),
    null
  );
}
const P1 = N.memo(V1);
function V1(A) {
  let { routes: e, future: t, state: r } = A;
  return d1(e, void 0, r, t);
}
const G1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  j1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dm = N.forwardRef(function (e, t) {
    let {
        onClick: r,
        relative: n,
        reloadDocument: i,
        replace: o,
        state: a,
        target: s,
        to: l,
        preventScrollReset: u,
        unstable_viewTransition: c,
      } = e,
      f = I1(e, S1),
      { basename: h } = N.useContext(Cn),
      g,
      p = !1;
    if (typeof l == "string" && j1.test(l) && ((g = l), G1))
      try {
        let w = new URL(window.location.href),
          C = l.startsWith("//") ? new URL(w.protocol + l) : new URL(l),
          m = yi(C.pathname, h);
        C.origin === w.origin && m != null
          ? (l = m + C.search + C.hash)
          : (p = !0);
      } catch {}
    let F = u1(l, { relative: n }),
      B = W1(l, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: u,
        relative: n,
        unstable_viewTransition: c,
      });
    function d(w) {
      r && r(w), w.defaultPrevented || B(w);
    }
    return N.createElement(
      "a",
      ko({}, f, { href: g || F, onClick: p || i ? r : d, ref: t, target: s })
    );
  });
var Wh;
(function (A) {
  (A.UseScrollRestoration = "useScrollRestoration"),
    (A.UseSubmit = "useSubmit"),
    (A.UseSubmitFetcher = "useSubmitFetcher"),
    (A.UseFetcher = "useFetcher"),
    (A.useViewTransitionState = "useViewTransitionState");
})(Wh || (Wh = {}));
var Xh;
(function (A) {
  (A.UseFetcher = "useFetcher"),
    (A.UseFetchers = "useFetchers"),
    (A.UseScrollRestoration = "useScrollRestoration");
})(Xh || (Xh = {}));
function W1(A, e) {
  let {
      target: t,
      replace: r,
      state: n,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = e === void 0 ? {} : e,
    s = c1(),
    l = na(),
    u = um(A, { relative: o });
  return N.useCallback(
    (c) => {
      if (H1(c, t)) {
        c.preventDefault();
        let f = r !== void 0 ? r : hn(l) === hn(u);
        s(A, {
          replace: f,
          state: n,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [l, s, u, r, n, t, A, i, o, a]
  );
}
function yn({ children: A, className: e = "", fluid: t = !1 }) {
  return Q.jsx("div", {
    className: `${t ? "w-full" : "container"} px-3 ${e}`,
    children: A,
  });
}
function Ui({ children: A, className: e = "" }) {
  return Q.jsx("div", { className: `flex flex-wrap -mx-3 ${e}`, children: A });
}
function Jt({
  children: A,
  className: e = "",
  xs: t,
  md: r,
  lg: n,
  xl: i,
  xxl: o,
  xxxl: a,
  ...s
}) {
  let l = "";
  t === 1
    ? (l = "w-1/12")
    : t === 2
    ? (l = "w-2/12")
    : t === 3
    ? (l = "w-3/12")
    : t === 4
    ? (l = "w-4/12")
    : t === 5
    ? (l = "w-5/12")
    : t === 6
    ? (l = "w-6/12")
    : t === 7
    ? (l = "w-7/12")
    : t === 8
    ? (l = "w-8/12")
    : t === 9
    ? (l = "w-9/12")
    : t === 10
    ? (l = "w-10/12")
    : t === 11
    ? (l = "w-11/12")
    : t === 12 && (l = "w-full");
  let u = "";
  r === 1
    ? (u = "md:w-1/12")
    : r === 2
    ? (u = "md:w-2/12")
    : r === 3
    ? (u = "md:w-3/12")
    : r === 4
    ? (u = "md:w-4/12")
    : r === 5
    ? (u = "md:w-5/12")
    : r === 6
    ? (u = "md:w-6/12")
    : r === 7
    ? (u = "md:w-7/12")
    : r === 8
    ? (u = "md:w-8/12")
    : r === 9
    ? (u = "md:w-9/12")
    : r === 10
    ? (u = "md:w-10/12")
    : r === 11
    ? (u = "md:w-11/12")
    : r === 12 && (u = "md:w-full");
  let c = "";
  n === 1
    ? (c = "lg:w-1/12")
    : n === 2
    ? (c = "lg:w-2/12")
    : n === 3
    ? (c = "lg:w-3/12")
    : n === 4
    ? (c = "lg:w-4/12")
    : n === 5
    ? (c = "lg:w-5/12")
    : n === 6
    ? (c = "lg:w-6/12")
    : n === 7
    ? (c = "lg:w-7/12")
    : n === 8
    ? (c = "lg:w-8/12")
    : n === 9
    ? (c = "lg:w-9/12")
    : n === 10
    ? (c = "lg:w-10/12")
    : n === 11
    ? (c = "lg:w-11/12")
    : n === 12 && (c = "lg:w-full");
  let f = "";
  i === 1
    ? (f = "xl:w-1/12")
    : i === 2
    ? (f = "xl:w-2/12")
    : i === 3
    ? (f = "xl:w-3/12")
    : i === 4
    ? (f = "xl:w-4/12")
    : i === 5
    ? (f = "xl:w-5/12")
    : i === 6
    ? (f = "xl:w-6/12")
    : i === 7
    ? (f = "xl:w-7/12")
    : i === 8
    ? (f = "xl:w-8/12")
    : i === 9
    ? (f = "xl:w-9/12")
    : i === 10
    ? (f = "xl:w-10/12")
    : i === 11
    ? (f = "xl:w-11/12")
    : i === 12 && (f = "xl:w-full");
  let h = "";
  o === 1
    ? (h = "2xl:w-1/12")
    : o === 2
    ? (h = "2xl:w-2/12")
    : o === 3
    ? (h = "2xl:w-3/12")
    : o === 4
    ? (h = "2xl:w-4/12")
    : o === 5
    ? (h = "2xl:w-5/12")
    : o === 6
    ? (h = "2xl:w-6/12")
    : o === 7
    ? (h = "2xl:w-7/12")
    : o === 8
    ? (h = "2xl:w-8/12")
    : o === 9
    ? (h = "2xl:w-9/12")
    : o === 10
    ? (h = "2xl:w-10/12")
    : o === 11
    ? (h = "2xl:w-11/12")
    : o === 12 && (h = "2xl:w-full");
  let g = "";
  return (
    a === 1
      ? (g = "3xl:w-1/12")
      : a === 2
      ? (g = "3xl:w-2/12")
      : a === 3
      ? (g = "3xl:w-3/12")
      : a === 4
      ? (g = "3xl:w-4/12")
      : a === 5
      ? (g = "3xl:w-5/12")
      : a === 6
      ? (g = "3xl:w-6/12")
      : a === 7
      ? (g = "3xl:w-7/12")
      : a === 8
      ? (g = "3xl:w-8/12")
      : a === 9
      ? (g = "3xl:w-9/12")
      : a === 10
      ? (g = "3xl:w-10/12")
      : a === 11
      ? (g = "3xl:w-11/12")
      : a === 12 && (g = "3xl:w-full"),
    Q.jsx("div", {
      className: `px-3 ${l} ${u} ${c} ${f} ${h} ${g} ${e}`,
      ...s,
      children: A,
    })
  );
}
var VA = {},
  FB = {},
  ia = {},
  oa = {},
  Bm = "Expected a function",
  zh = NaN,
  X1 = "[object Symbol]",
  z1 = /^\s+|\s+$/g,
  J1 = /^[-+]0x[0-9a-f]+$/i,
  Y1 = /^0b[01]+$/i,
  Z1 = /^0o[0-7]+$/i,
  $1 = parseInt,
  q1 = typeof Ta == "object" && Ta && Ta.Object === Object && Ta,
  AE = typeof self == "object" && self && self.Object === Object && self,
  eE = q1 || AE || Function("return this")(),
  tE = Object.prototype,
  rE = tE.toString,
  nE = Math.max,
  iE = Math.min,
  gc = function () {
    return eE.Date.now();
  };
function oE(A, e, t) {
  var r,
    n,
    i,
    o,
    a,
    s,
    l = 0,
    u = !1,
    c = !1,
    f = !0;
  if (typeof A != "function") throw new TypeError(Bm);
  (e = Jh(e) || 0),
    yl(t) &&
      ((u = !!t.leading),
      (c = "maxWait" in t),
      (i = c ? nE(Jh(t.maxWait) || 0, e) : i),
      (f = "trailing" in t ? !!t.trailing : f));
  function h(y) {
    var E = r,
      v = n;
    return (r = n = void 0), (l = y), (o = A.apply(v, E)), o;
  }
  function g(y) {
    return (l = y), (a = setTimeout(B, e)), u ? h(y) : o;
  }
  function p(y) {
    var E = y - s,
      v = y - l,
      x = e - E;
    return c ? iE(x, i - v) : x;
  }
  function F(y) {
    var E = y - s,
      v = y - l;
    return s === void 0 || E >= e || E < 0 || (c && v >= i);
  }
  function B() {
    var y = gc();
    if (F(y)) return d(y);
    a = setTimeout(B, p(y));
  }
  function d(y) {
    return (a = void 0), f && r ? h(y) : ((r = n = void 0), o);
  }
  function w() {
    a !== void 0 && clearTimeout(a), (l = 0), (r = s = n = a = void 0);
  }
  function C() {
    return a === void 0 ? o : d(gc());
  }
  function m() {
    var y = gc(),
      E = F(y);
    if (((r = arguments), (n = this), (s = y), E)) {
      if (a === void 0) return g(s);
      if (c) return (a = setTimeout(B, e)), h(s);
    }
    return a === void 0 && (a = setTimeout(B, e)), o;
  }
  return (m.cancel = w), (m.flush = C), m;
}
function aE(A, e, t) {
  var r = !0,
    n = !0;
  if (typeof A != "function") throw new TypeError(Bm);
  return (
    yl(t) &&
      ((r = "leading" in t ? !!t.leading : r),
      (n = "trailing" in t ? !!t.trailing : n)),
    oE(A, e, { leading: r, maxWait: e, trailing: n })
  );
}
function yl(A) {
  var e = typeof A;
  return !!A && (e == "object" || e == "function");
}
function sE(A) {
  return !!A && typeof A == "object";
}
function lE(A) {
  return typeof A == "symbol" || (sE(A) && rE.call(A) == X1);
}
function Jh(A) {
  if (typeof A == "number") return A;
  if (lE(A)) return zh;
  if (yl(A)) {
    var e = typeof A.valueOf == "function" ? A.valueOf() : A;
    A = yl(e) ? e + "" : e;
  }
  if (typeof A != "string") return A === 0 ? A : +A;
  A = A.replace(z1, "");
  var t = Y1.test(A);
  return t || Z1.test(A) ? $1(A.slice(2), t ? 2 : 8) : J1.test(A) ? zh : +A;
}
var uE = aE,
  aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.addPassiveEventListener = function (e, t, r) {
  var n = r.name;
  n || ((n = t), console.warn("Listener must be a named function.")),
    ks.has(t) || ks.set(t, new Set());
  var i = ks.get(t);
  if (!i.has(n)) {
    var o = (function () {
      var a = !1;
      try {
        var s = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        window.addEventListener("test", null, s);
      } catch {}
      return a;
    })();
    e.addEventListener(t, r, o ? { passive: !0 } : !1), i.add(n);
  }
};
aa.removePassiveEventListener = function (e, t, r) {
  e.removeEventListener(t, r), ks.get(t).delete(r.name || t);
};
var ks = new Map();
Object.defineProperty(oa, "__esModule", { value: !0 });
var cE = uE,
  fE = BE(cE),
  dE = aa;
function BE(A) {
  return A && A.__esModule ? A : { default: A };
}
var gE = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, fE.default)(e, t);
  },
  LA = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (e, t) {
      if (e) {
        var r = gE(function (n) {
          LA.scrollHandler(e);
        }, t);
        LA.scrollSpyContainers.push(e),
          (0, dE.addPassiveEventListener)(e, "scroll", r);
      }
    },
    isMounted: function (e) {
      return LA.scrollSpyContainers.indexOf(e) !== -1;
    },
    currentPositionX: function (e) {
      if (e === document) {
        var t = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return t
          ? window.pageXOffset
          : r
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      } else return e.scrollLeft;
    },
    currentPositionY: function (e) {
      if (e === document) {
        var t = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return t
          ? window.pageYOffset
          : r
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      } else return e.scrollTop;
    },
    scrollHandler: function (e) {
      var t =
        LA.scrollSpyContainers[LA.scrollSpyContainers.indexOf(e)]
          .spyCallbacks || [];
      t.forEach(function (r) {
        return r(LA.currentPositionX(e), LA.currentPositionY(e));
      });
    },
    addStateHandler: function (e) {
      LA.spySetState.push(e);
    },
    addSpyHandler: function (e, t) {
      var r = LA.scrollSpyContainers[LA.scrollSpyContainers.indexOf(t)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(e),
        e(LA.currentPositionX(t), LA.currentPositionY(t));
    },
    updateStates: function () {
      LA.spySetState.forEach(function (e) {
        return e();
      });
    },
    unmount: function (e, t) {
      LA.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(t) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(t), 1)
        );
      }),
        LA.spySetState &&
          LA.spySetState.length &&
          LA.spySetState.indexOf(e) > -1 &&
          LA.spySetState.splice(LA.spySetState.indexOf(e), 1),
        document.removeEventListener("scroll", LA.scrollHandler);
    },
    update: function () {
      return LA.scrollSpyContainers.forEach(function (e) {
        return LA.scrollHandler(e);
      });
    },
  };
oa.default = LA;
var Fi = {},
  sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
var hE = function (e, t) {
    var r = e.indexOf("#") === 0 ? e.substring(1) : e,
      n = r ? "#" + r : "",
      i = window && window.location,
      o = n ? i.pathname + i.search + n : i.pathname + i.search;
    t
      ? history.pushState(history.state, "", o)
      : history.replaceState(history.state, "", o);
  },
  pE = function () {
    return window.location.hash.replace(/^#/, "");
  },
  wE = function (e) {
    return function (t) {
      return e.contains
        ? e != t && e.contains(t)
        : !!(e.compareDocumentPosition(t) & 16);
    };
  },
  vE = function (e) {
    return getComputedStyle(e).position !== "static";
  },
  hc = function (e, t) {
    for (var r = e.offsetTop, n = e.offsetParent; n && !t(n); )
      (r += n.offsetTop), (n = n.offsetParent);
    return { offsetTop: r, offsetParent: n };
  },
  mE = function (e, t, r) {
    if (r)
      return e === document
        ? t.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(e).position !== "static"
        ? t.offsetLeft
        : t.offsetLeft - e.offsetLeft;
    if (e === document)
      return (
        t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (vE(e)) {
      if (t.offsetParent !== e) {
        var n = function (u) {
            return u === e || u === document;
          },
          i = hc(t, n),
          o = i.offsetTop,
          a = i.offsetParent;
        if (a !== e)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element"
          );
        return o;
      }
      return t.offsetTop;
    }
    if (t.offsetParent === e.offsetParent) return t.offsetTop - e.offsetTop;
    var s = function (u) {
      return u === document;
    };
    return hc(t, s).offsetTop - hc(e, s).offsetTop;
  };
sa.default = {
  updateHash: hE,
  getHash: pE,
  filterElementInContainer: wE,
  scrollOffset: mE,
};
var ou = {},
  EB = {};
Object.defineProperty(EB, "__esModule", { value: !0 });
EB.default = {
  defaultEasing: function (e) {
    return e < 0.5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2;
  },
  linear: function (e) {
    return e;
  },
  easeInQuad: function (e) {
    return e * e;
  },
  easeOutQuad: function (e) {
    return e * (2 - e);
  },
  easeInOutQuad: function (e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  },
  easeInCubic: function (e) {
    return e * e * e;
  },
  easeOutCubic: function (e) {
    return --e * e * e + 1;
  },
  easeInOutCubic: function (e) {
    return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
  },
  easeInQuart: function (e) {
    return e * e * e * e;
  },
  easeOutQuart: function (e) {
    return 1 - --e * e * e * e;
  },
  easeInOutQuart: function (e) {
    return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
  },
  easeInQuint: function (e) {
    return e * e * e * e * e;
  },
  easeOutQuint: function (e) {
    return 1 + --e * e * e * e * e;
  },
  easeInOutQuint: function (e) {
    return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
  },
};
var IB = {};
Object.defineProperty(IB, "__esModule", { value: !0 });
var CE = aa,
  QE = ["mousedown", "mousewheel", "touchmove", "keydown"];
IB.default = {
  subscribe: function (e) {
    return (
      typeof document < "u" &&
      QE.forEach(function (t) {
        return (0, CE.addPassiveEventListener)(document, t, e);
      })
    );
  },
};
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
var Vf = {
  registered: {},
  scrollEvent: {
    register: function (e, t) {
      Vf.registered[e] = t;
    },
    remove: function (e) {
      Vf.registered[e] = null;
    },
  },
};
la.default = Vf;
Object.defineProperty(ou, "__esModule", { value: !0 });
var yE =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    },
  UE = sa;
au(UE);
var FE = EB,
  Yh = au(FE),
  EE = IB,
  IE = au(EE),
  xE = la,
  wt = au(xE);
function au(A) {
  return A && A.__esModule ? A : { default: A };
}
var gm = function (e) {
    return Yh.default[e.smooth] || Yh.default.defaultEasing;
  },
  HE = function (e) {
    return typeof e == "function"
      ? e
      : function () {
          return e;
        };
  },
  SE = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  Gf = (function () {
    return (
      SE() ||
      function (A, e, t) {
        window.setTimeout(A, t || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  hm = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  pm = function (e) {
    var t = e.data.containerElement;
    if (t && t !== document && t !== document.body) return t.scrollLeft;
    var r = window.pageXOffset !== void 0,
      n = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : n
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
  },
  wm = function (e) {
    var t = e.data.containerElement;
    if (t && t !== document && t !== document.body) return t.scrollTop;
    var r = window.pageXOffset !== void 0,
      n = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : n
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  },
  LE = function (e) {
    var t = e.data.containerElement;
    if (t && t !== document && t !== document.body)
      return t.scrollWidth - t.offsetWidth;
    var r = document.body,
      n = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      n.clientWidth,
      n.scrollWidth,
      n.offsetWidth
    );
  },
  TE = function (e) {
    var t = e.data.containerElement;
    if (t && t !== document && t !== document.body)
      return t.scrollHeight - t.offsetHeight;
    var r = document.body,
      n = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      n.clientHeight,
      n.scrollHeight,
      n.offsetHeight
    );
  },
  DE = function A(e, t, r) {
    var n = t.data;
    if (!t.ignoreCancelEvents && n.cancel) {
      wt.default.registered.end &&
        wt.default.registered.end(n.to, n.target, n.currentPositionY);
      return;
    }
    if (
      ((n.delta = Math.round(n.targetPosition - n.startPosition)),
      n.start === null && (n.start = r),
      (n.progress = r - n.start),
      (n.percent = n.progress >= n.duration ? 1 : e(n.progress / n.duration)),
      (n.currentPosition = n.startPosition + Math.ceil(n.delta * n.percent)),
      n.containerElement &&
      n.containerElement !== document &&
      n.containerElement !== document.body
        ? t.horizontal
          ? (n.containerElement.scrollLeft = n.currentPosition)
          : (n.containerElement.scrollTop = n.currentPosition)
        : t.horizontal
        ? window.scrollTo(n.currentPosition, 0)
        : window.scrollTo(0, n.currentPosition),
      n.percent < 1)
    ) {
      var i = A.bind(null, e, t);
      Gf.call(window, i);
      return;
    }
    wt.default.registered.end &&
      wt.default.registered.end(n.to, n.target, n.currentPosition);
  },
  xB = function (e) {
    e.data.containerElement = e
      ? e.containerId
        ? document.getElementById(e.containerId)
        : e.container && e.container.nodeType
        ? e.container
        : document
      : null;
  },
  ua = function (e, t, r, n) {
    (t.data = t.data || hm()), window.clearTimeout(t.data.delayTimeout);
    var i = function () {
      t.data.cancel = !0;
    };
    if (
      (IE.default.subscribe(i),
      xB(t),
      (t.data.start = null),
      (t.data.cancel = !1),
      (t.data.startPosition = t.horizontal ? pm(t) : wm(t)),
      (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
      t.data.startPosition === t.data.targetPosition)
    ) {
      wt.default.registered.end &&
        wt.default.registered.end(
          t.data.to,
          t.data.target,
          t.data.currentPosition
        );
      return;
    }
    (t.data.delta = Math.round(t.data.targetPosition - t.data.startPosition)),
      (t.data.duration = HE(t.duration)(t.data.delta)),
      (t.data.duration = isNaN(parseFloat(t.data.duration))
        ? 1e3
        : parseFloat(t.data.duration)),
      (t.data.to = r),
      (t.data.target = n);
    var o = gm(t),
      a = DE.bind(null, o, t);
    if (t && t.delay > 0) {
      t.data.delayTimeout = window.setTimeout(function () {
        wt.default.registered.begin &&
          wt.default.registered.begin(t.data.to, t.data.target),
          Gf.call(window, a);
      }, t.delay);
      return;
    }
    wt.default.registered.begin &&
      wt.default.registered.begin(t.data.to, t.data.target),
      Gf.call(window, a);
  },
  su = function (e) {
    return (e = yE({}, e)), (e.data = e.data || hm()), (e.absolute = !0), e;
  },
  bE = function (e) {
    ua(0, su(e));
  },
  OE = function (e, t) {
    ua(e, su(t));
  },
  RE = function (e) {
    (e = su(e)), xB(e), ua(e.horizontal ? LE(e) : TE(e), e);
  },
  KE = function (e, t) {
    (t = su(t)), xB(t);
    var r = t.horizontal ? pm(t) : wm(t);
    ua(e + r, t);
  };
ou.default = {
  animateTopScroll: ua,
  getAnimationType: gm,
  scrollToTop: bE,
  scrollToBottom: RE,
  scrollTo: OE,
  scrollMore: KE,
};
Object.defineProperty(Fi, "__esModule", { value: !0 });
var NE =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    },
  ME = sa,
  _E = HB(ME),
  kE = ou,
  PE = HB(kE),
  VE = la,
  Za = HB(VE);
function HB(A) {
  return A && A.__esModule ? A : { default: A };
}
var $a = {},
  Zh = void 0;
Fi.default = {
  unmount: function () {
    $a = {};
  },
  register: function (e, t) {
    $a[e] = t;
  },
  unregister: function (e) {
    delete $a[e];
  },
  get: function (e) {
    return (
      $a[e] ||
      document.getElementById(e) ||
      document.getElementsByName(e)[0] ||
      document.getElementsByClassName(e)[0]
    );
  },
  setActiveLink: function (e) {
    return (Zh = e);
  },
  getActiveLink: function () {
    return Zh;
  },
  scrollTo: function (e, t) {
    var r = this.get(e);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    t = NE({}, t, { absolute: !1 });
    var n = t.containerId,
      i = t.container,
      o = void 0;
    n
      ? (o = document.getElementById(n))
      : i && i.nodeType
      ? (o = i)
      : (o = document),
      (t.absolute = !0);
    var a = t.horizontal,
      s = _E.default.scrollOffset(o, r, a) + (t.offset || 0);
    if (!t.smooth) {
      Za.default.registered.begin && Za.default.registered.begin(e, r),
        o === document
          ? t.horizontal
            ? window.scrollTo(s, 0)
            : window.scrollTo(0, s)
          : (o.scrollTop = s),
        Za.default.registered.end && Za.default.registered.end(e, r);
      return;
    }
    PE.default.animateTopScroll(s, t, e, r);
  },
};
var vm = { exports: {} },
  GE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  jE = GE,
  WE = jE;
function mm() {}
function Cm() {}
Cm.resetWarningCache = mm;
var XE = function () {
  function A(r, n, i, o, a, s) {
    if (s !== WE) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((l.name = "Invariant Violation"), l);
    }
  }
  A.isRequired = A;
  function e() {
    return A;
  }
  var t = {
    array: A,
    bigint: A,
    bool: A,
    func: A,
    number: A,
    object: A,
    string: A,
    symbol: A,
    any: A,
    arrayOf: e,
    element: A,
    elementType: A,
    instanceOf: e,
    node: A,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: Cm,
    resetWarningCache: mm,
  };
  return (t.PropTypes = t), t;
};
vm.exports = XE();
var lu = vm.exports,
  uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
var zE = sa,
  pc = JE(zE);
function JE(A) {
  return A && A.__esModule ? A : { default: A };
}
var YE = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (e) {
    (this.scroller = e),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (e, t) {
    this.containers[e] = t;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var e = this,
      t = this.getHash();
    t
      ? window.setTimeout(function () {
          e.scrollTo(t, !0), (e.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (e, t) {
    var r = this.scroller,
      n = r.get(e);
    if (n && (t || e !== r.getActiveLink())) {
      var i = this.containers[e] || document;
      r.scrollTo(e, { container: i });
    }
  },
  getHash: function () {
    return pc.default.getHash();
  },
  changeHash: function (e, t) {
    this.isInitialized() &&
      pc.default.getHash() !== e &&
      pc.default.updateHash(e, t);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
uu.default = YE;
Object.defineProperty(ia, "__esModule", { value: !0 });
var qa =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    },
  ZE = (function () {
    function A(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (e, t, r) {
      return t && A(e.prototype, t), r && A(e, r), e;
    };
  })(),
  $E = N,
  $h = ca($E),
  qE = oa,
  As = ca(qE),
  A2 = Fi,
  e2 = ca(A2),
  t2 = lu,
  xA = ca(t2),
  r2 = uu,
  ir = ca(r2);
function ca(A) {
  return A && A.__esModule ? A : { default: A };
}
function n2(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function i2(A, e) {
  if (!A)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : A;
}
function o2(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (A.prototype = Object.create(e && e.prototype, {
    constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(A, e) : (A.__proto__ = e));
}
var qh = {
  to: xA.default.string.isRequired,
  containerId: xA.default.string,
  container: xA.default.object,
  activeClass: xA.default.string,
  activeStyle: xA.default.object,
  spy: xA.default.bool,
  horizontal: xA.default.bool,
  smooth: xA.default.oneOfType([xA.default.bool, xA.default.string]),
  offset: xA.default.number,
  delay: xA.default.number,
  isDynamic: xA.default.bool,
  onClick: xA.default.func,
  duration: xA.default.oneOfType([xA.default.number, xA.default.func]),
  absolute: xA.default.bool,
  onSetActive: xA.default.func,
  onSetInactive: xA.default.func,
  ignoreCancelEvents: xA.default.bool,
  hashSpy: xA.default.bool,
  saveHashHistory: xA.default.bool,
  spyThrottle: xA.default.number,
};
ia.default = function (A, e) {
  var t = e || e2.default,
    r = (function (i) {
      o2(o, i);
      function o(a) {
        n2(this, o);
        var s = i2(
          this,
          (o.__proto__ || Object.getPrototypeOf(o)).call(this, a)
        );
        return n.call(s), (s.state = { active: !1 }), s;
      }
      return (
        ZE(o, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var s = this.props.containerId,
                l = this.props.container;
              return s && !l
                ? document.getElementById(s)
                : l && l.nodeType
                ? l
                : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var s = this.getScrollSpyContainer();
                As.default.isMounted(s) ||
                  As.default.mount(s, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (ir.default.isMounted() || ir.default.mount(t),
                    ir.default.mapContainer(this.props.to, s)),
                  As.default.addSpyHandler(this.spyHandler, s),
                  this.setState({ container: s });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              As.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var s = "";
              this.state && this.state.active
                ? (s = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (s = this.props.className);
              var l = {};
              this.state && this.state.active
                ? (l = qa({}, this.props.style, this.props.activeStyle))
                : (l = qa({}, this.props.style));
              var u = qa({}, this.props);
              for (var c in qh) u.hasOwnProperty(c) && delete u[c];
              return (
                (u.className = s),
                (u.style = l),
                (u.onClick = this.handleClick),
                $h.default.createElement(A, u)
              );
            },
          },
        ]),
        o
      );
    })($h.default.PureComponent),
    n = function () {
      var o = this;
      (this.scrollTo = function (a, s) {
        t.scrollTo(a, qa({}, o.state, s));
      }),
        (this.handleClick = function (a) {
          o.props.onClick && o.props.onClick(a),
            a.stopPropagation && a.stopPropagation(),
            a.preventDefault && a.preventDefault(),
            o.scrollTo(o.props.to, o.props);
        }),
        (this.spyHandler = function (a, s) {
          var l = o.getScrollSpyContainer();
          if (!(ir.default.isMounted() && !ir.default.isInitialized())) {
            var u = o.props.horizontal,
              c = o.props.to,
              f = null,
              h = void 0,
              g = void 0;
            if (u) {
              var p = 0,
                F = 0,
                B = 0;
              if (l.getBoundingClientRect) {
                var d = l.getBoundingClientRect();
                B = d.left;
              }
              if (!f || o.props.isDynamic) {
                if (((f = t.get(c)), !f)) return;
                var w = f.getBoundingClientRect();
                (p = w.left - B + a), (F = p + w.width);
              }
              var C = a - o.props.offset;
              (h = C >= Math.floor(p) && C < Math.floor(F)),
                (g = C < Math.floor(p) || C >= Math.floor(F));
            } else {
              var m = 0,
                y = 0,
                E = 0;
              if (l.getBoundingClientRect) {
                var v = l.getBoundingClientRect();
                E = v.top;
              }
              if (!f || o.props.isDynamic) {
                if (((f = t.get(c)), !f)) return;
                var x = f.getBoundingClientRect();
                (m = x.top - E + s), (y = m + x.height);
              }
              var H = s - o.props.offset;
              (h = H >= Math.floor(m) && H < Math.floor(y)),
                (g = H < Math.floor(m) || H >= Math.floor(y));
            }
            var L = t.getActiveLink();
            if (g) {
              if (
                (c === L && t.setActiveLink(void 0),
                o.props.hashSpy && ir.default.getHash() === c)
              ) {
                var O = o.props.saveHashHistory,
                  R = O === void 0 ? !1 : O;
                ir.default.changeHash("", R);
              }
              o.props.spy &&
                o.state.active &&
                (o.setState({ active: !1 }),
                o.props.onSetInactive && o.props.onSetInactive(c, f));
            }
            if (h && (L !== c || o.state.active === !1)) {
              t.setActiveLink(c);
              var P = o.props.saveHashHistory,
                J = P === void 0 ? !1 : P;
              o.props.hashSpy && ir.default.changeHash(c, J),
                o.props.spy &&
                  (o.setState({ active: !0 }),
                  o.props.onSetActive && o.props.onSetActive(c, f));
            }
          }
        });
    };
  return (r.propTypes = qh), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(FB, "__esModule", { value: !0 });
var a2 = N,
  Ap = Qm(a2),
  s2 = ia,
  l2 = Qm(s2);
function Qm(A) {
  return A && A.__esModule ? A : { default: A };
}
function u2(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ep(A, e) {
  if (!A)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : A;
}
function c2(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (A.prototype = Object.create(e && e.prototype, {
    constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(A, e) : (A.__proto__ = e));
}
var f2 = (function (A) {
  c2(e, A);
  function e() {
    var t, r, n, i;
    u2(this, e);
    for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return (
      (i =
        ((r =
          ((n = ep(
            this,
            (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
              t,
              [this].concat(a)
            )
          )),
          n)),
        (n.render = function () {
          return Ap.default.createElement("a", n.props, n.props.children);
        }),
        r)),
      ep(n, i)
    );
  }
  return e;
})(Ap.default.Component);
FB.default = (0, l2.default)(f2);
var SB = {};
Object.defineProperty(SB, "__esModule", { value: !0 });
var d2 = (function () {
    function A(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (e, t, r) {
      return t && A(e.prototype, t), r && A(e, r), e;
    };
  })(),
  B2 = N,
  tp = ym(B2),
  g2 = ia,
  h2 = ym(g2);
function ym(A) {
  return A && A.__esModule ? A : { default: A };
}
function p2(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function w2(A, e) {
  if (!A)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : A;
}
function v2(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (A.prototype = Object.create(e && e.prototype, {
    constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(A, e) : (A.__proto__ = e));
}
var m2 = (function (A) {
  v2(e, A);
  function e() {
    return (
      p2(this, e),
      w2(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    );
  }
  return (
    d2(e, [
      {
        key: "render",
        value: function () {
          return tp.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    e
  );
})(tp.default.Component);
SB.default = (0, h2.default)(m2);
var LB = {},
  cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
var C2 =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    },
  Q2 = (function () {
    function A(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (e, t, r) {
      return t && A(e.prototype, t), r && A(e, r), e;
    };
  })(),
  y2 = N,
  rp = fu(y2),
  U2 = ru;
fu(U2);
var F2 = Fi,
  np = fu(F2),
  E2 = lu,
  ip = fu(E2);
function fu(A) {
  return A && A.__esModule ? A : { default: A };
}
function I2(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function x2(A, e) {
  if (!A)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : A;
}
function H2(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (A.prototype = Object.create(e && e.prototype, {
    constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(A, e) : (A.__proto__ = e));
}
cu.default = function (A) {
  var e = (function (t) {
    H2(r, t);
    function r(n) {
      I2(this, r);
      var i = x2(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, n));
      return (i.childBindings = { domNode: null }), i;
    }
    return (
      Q2(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.name !== i.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            np.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (i) {
            np.default.register(i, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return rp.default.createElement(
              A,
              C2({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(rp.default.Component);
  return (e.propTypes = { name: ip.default.string, id: ip.default.string }), e;
};
Object.defineProperty(LB, "__esModule", { value: !0 });
var op =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    },
  S2 = (function () {
    function A(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (e, t, r) {
      return t && A(e.prototype, t), r && A(e, r), e;
    };
  })(),
  L2 = N,
  ap = TB(L2),
  T2 = cu,
  D2 = TB(T2),
  b2 = lu,
  sp = TB(b2);
function TB(A) {
  return A && A.__esModule ? A : { default: A };
}
function O2(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function R2(A, e) {
  if (!A)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : A;
}
function K2(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (A.prototype = Object.create(e && e.prototype, {
    constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(A, e) : (A.__proto__ = e));
}
var Um = (function (A) {
  K2(e, A);
  function e() {
    return (
      O2(this, e),
      R2(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    );
  }
  return (
    S2(e, [
      {
        key: "render",
        value: function () {
          var r = this,
            n = op({}, this.props);
          return (
            delete n.name,
            n.parentBindings && delete n.parentBindings,
            ap.default.createElement(
              "div",
              op({}, n, {
                ref: function (o) {
                  r.props.parentBindings.domNode = o;
                },
              }),
              this.props.children
            )
          );
        },
      },
    ]),
    e
  );
})(ap.default.Component);
Um.propTypes = { name: sp.default.string, id: sp.default.string };
LB.default = (0, D2.default)(Um);
var wc =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    },
  lp = (function () {
    function A(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (e, t, r) {
      return t && A(e.prototype, t), r && A(e, r), e;
    };
  })();
function up(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function cp(A, e) {
  if (!A)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : A;
}
function fp(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (A.prototype = Object.create(e && e.prototype, {
    constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(A, e) : (A.__proto__ = e));
}
var es = N,
  Xr = oa,
  vc = Fi,
  TA = lu,
  or = uu,
  dp = {
    to: TA.string.isRequired,
    containerId: TA.string,
    container: TA.object,
    activeClass: TA.string,
    spy: TA.bool,
    smooth: TA.oneOfType([TA.bool, TA.string]),
    offset: TA.number,
    delay: TA.number,
    isDynamic: TA.bool,
    onClick: TA.func,
    duration: TA.oneOfType([TA.number, TA.func]),
    absolute: TA.bool,
    onSetActive: TA.func,
    onSetInactive: TA.func,
    ignoreCancelEvents: TA.bool,
    hashSpy: TA.bool,
    spyThrottle: TA.number,
  },
  N2 = {
    Scroll: function (e, t) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = t || vc,
        n = (function (o) {
          fp(a, o);
          function a(s) {
            up(this, a);
            var l = cp(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, s)
            );
            return i.call(l), (l.state = { active: !1 }), l;
          }
          return (
            lp(a, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var l = this.props.containerId,
                    u = this.props.container;
                  return l
                    ? document.getElementById(l)
                    : u && u.nodeType
                    ? u
                    : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var l = this.getScrollSpyContainer();
                    Xr.isMounted(l) || Xr.mount(l, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (or.isMounted() || or.mount(r),
                        or.mapContainer(this.props.to, l)),
                      this.props.spy && Xr.addStateHandler(this.stateHandler),
                      Xr.addSpyHandler(this.spyHandler, l),
                      this.setState({ container: l });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  Xr.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var l = "";
                  this.state && this.state.active
                    ? (l = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (l = this.props.className);
                  var u = wc({}, this.props);
                  for (var c in dp) u.hasOwnProperty(c) && delete u[c];
                  return (
                    (u.className = l),
                    (u.onClick = this.handleClick),
                    es.createElement(e, u)
                  );
                },
              },
            ]),
            a
          );
        })(es.Component),
        i = function () {
          var a = this;
          (this.scrollTo = function (s, l) {
            r.scrollTo(s, wc({}, a.state, l));
          }),
            (this.handleClick = function (s) {
              a.props.onClick && a.props.onClick(s),
                s.stopPropagation && s.stopPropagation(),
                s.preventDefault && s.preventDefault(),
                a.scrollTo(a.props.to, a.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== a.props.to &&
                (a.state !== null &&
                  a.state.active &&
                  a.props.onSetInactive &&
                  a.props.onSetInactive(),
                a.setState({ active: !1 }));
            }),
            (this.spyHandler = function (s) {
              var l = a.getScrollSpyContainer();
              if (!(or.isMounted() && !or.isInitialized())) {
                var u = a.props.to,
                  c = null,
                  f = 0,
                  h = 0,
                  g = 0;
                if (l.getBoundingClientRect) {
                  var p = l.getBoundingClientRect();
                  g = p.top;
                }
                if (!c || a.props.isDynamic) {
                  if (((c = r.get(u)), !c)) return;
                  var F = c.getBoundingClientRect();
                  (f = F.top - g + s), (h = f + F.height);
                }
                var B = s - a.props.offset,
                  d = B >= Math.floor(f) && B < Math.floor(h),
                  w = B < Math.floor(f) || B >= Math.floor(h),
                  C = r.getActiveLink();
                if (w)
                  return (
                    u === C && r.setActiveLink(void 0),
                    a.props.hashSpy && or.getHash() === u && or.changeHash(),
                    a.props.spy &&
                      a.state.active &&
                      (a.setState({ active: !1 }),
                      a.props.onSetInactive && a.props.onSetInactive()),
                    Xr.updateStates()
                  );
                if (d && C !== u)
                  return (
                    r.setActiveLink(u),
                    a.props.hashSpy && or.changeHash(u),
                    a.props.spy &&
                      (a.setState({ active: !0 }),
                      a.props.onSetActive && a.props.onSetActive(u)),
                    Xr.updateStates()
                  );
              }
            });
        };
      return (n.propTypes = dp), (n.defaultProps = { offset: 0 }), n;
    },
    Element: function (e) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var t = (function (r) {
        fp(n, r);
        function n(i) {
          up(this, n);
          var o = cp(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, i)
          );
          return (o.childBindings = { domNode: null }), o;
        }
        return (
          lp(n, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (o) {
                this.props.name !== o.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                vc.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (o) {
                vc.register(o, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return es.createElement(
                  e,
                  wc({}, this.props, { parentBindings: this.childBindings })
                );
              },
            },
          ]),
          n
        );
      })(es.Component);
      return (t.propTypes = { name: TA.string, id: TA.string }), t;
    },
  },
  M2 = N2;
Object.defineProperty(VA, "__esModule", { value: !0 });
VA.Helpers =
  VA.ScrollElement =
  VA.ScrollLink =
  VA.animateScroll =
  VA.scrollSpy =
  VA.Events =
  VA.scroller =
  VA.Element =
  VA.Button =
  jf =
  VA.Link =
    void 0;
var _2 = FB,
  Fm = Ut(_2),
  k2 = SB,
  Em = Ut(k2),
  P2 = LB,
  Im = Ut(P2),
  V2 = Fi,
  xm = Ut(V2),
  G2 = la,
  Hm = Ut(G2),
  j2 = oa,
  Sm = Ut(j2),
  W2 = ou,
  Lm = Ut(W2),
  X2 = ia,
  Tm = Ut(X2),
  z2 = cu,
  Dm = Ut(z2),
  J2 = M2,
  bm = Ut(J2);
function Ut(A) {
  return A && A.__esModule ? A : { default: A };
}
var jf = (VA.Link = Fm.default);
VA.Button = Em.default;
VA.Element = Im.default;
VA.scroller = xm.default;
VA.Events = Hm.default;
VA.scrollSpy = Sm.default;
VA.animateScroll = Lm.default;
VA.ScrollLink = Tm.default;
VA.ScrollElement = Dm.default;
VA.Helpers = bm.default;
VA.default = {
  Link: Fm.default,
  Button: Em.default,
  Element: Im.default,
  scroller: xm.default,
  Events: Hm.default,
  scrollSpy: Sm.default,
  animateScroll: Lm.default,
  ScrollLink: Tm.default,
  ScrollElement: Dm.default,
  Helpers: bm.default,
};
const Y2 = "/assets/logo-zeLxvy5t.png";
function Bp() {
  return Q.jsx(dm, {
    className: "logo block cursor-pointer",
    to: "/",
    children: Q.jsx("img", { src: Y2, alt: "site-logo" }),
  });
}
var Om = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gp = Ce.createContext && Ce.createContext(Om),
  Z2 = ["attr", "size", "title"];
function $2(A, e) {
  if (A == null) return {};
  var t = q2(A, e),
    r,
    n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(A);
    for (n = 0; n < i.length; n++)
      (r = i[n]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(A, r) &&
          (t[r] = A[r]);
  }
  return t;
}
function q2(A, e) {
  if (A == null) return {};
  var t = {};
  for (var r in A)
    if (Object.prototype.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) >= 0) continue;
      t[r] = A[r];
    }
  return t;
}
function Ul() {
  return (
    (Ul = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
          }
          return A;
        }),
    Ul.apply(this, arguments)
  );
}
function hp(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(A);
    e &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(A, n).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function Fl(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? hp(Object(t), !0).forEach(function (r) {
          A4(A, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t))
      : hp(Object(t)).forEach(function (r) {
          Object.defineProperty(A, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return A;
}
function A4(A, e, t) {
  return (
    (e = e4(e)),
    e in A
      ? Object.defineProperty(A, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (A[e] = t),
    A
  );
}
function e4(A) {
  var e = t4(A, "string");
  return typeof e == "symbol" ? e : e + "";
}
function t4(A, e) {
  if (typeof A != "object" || !A) return A;
  var t = A[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(A, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(A);
}
function Rm(A) {
  return (
    A &&
    A.map((e, t) =>
      Ce.createElement(e.tag, Fl({ key: t }, e.attr), Rm(e.child))
    )
  );
}
function du(A) {
  return (e) =>
    Ce.createElement(r4, Ul({ attr: Fl({}, A.attr) }, e), Rm(A.child));
}
function r4(A) {
  var e = (t) => {
    var { attr: r, size: n, title: i } = A,
      o = $2(A, Z2),
      a = n || t.size || "1em",
      s;
    return (
      t.className && (s = t.className),
      A.className && (s = (s ? s + " " : "") + A.className),
      Ce.createElement(
        "svg",
        Ul(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          r,
          o,
          {
            className: s,
            style: Fl(Fl({ color: A.color || t.color }, t.style), A.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && Ce.createElement("title", null, i),
        A.children
      )
    );
  };
  return gp !== void 0
    ? Ce.createElement(gp.Consumer, null, (t) => e(t))
    : e(Om);
}
function n4(A) {
  return du({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
        },
        child: [],
      },
    ],
  })(A);
}
function i4(A) {
  return du({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(A);
}
const o4 = "https://t.me/BumasCoin",
  a4 = "https://x.com/BumasCoin";
function DB({ className: A }) {
  const e = [
    { name: "telegram", icon: Q.jsx(n4, {}), url: o4 },
    { name: "twitter", icon: Q.jsx(i4, {}), url: a4 },
  ];
  return Q.jsx("ul", {
    className: `social-list flex items-center flex-wrap gap-3 md:gap-4 lg:gap-6 ${A}`,
    children: e.map((t, r) =>
      Q.jsx(
        "li",
        {
          children: Q.jsx("a", {
            href: t.url,
            target: "_blank",
            className: "social-link flex items-center justify-center",
            children: t.icon,
          }),
        },
        r
      )
    ),
  });
}
const s4 = "/assets/favicon-Bz1jdLl1.png";
function Km({ className: A }) {
  const e = [
      { btn_title: "About", to: "about" },
      { btn_title: "Tokenomics", to: "tokenmos" },
      { btn_title: "COMMUNITY", to: "community" },
    ],
    [t, r] = N.useState(!1),
    n = () => {
      r(!t);
    },
    [i, o] = N.useState(!1);
  return (
    N.useEffect(() => {
      const a = () => {
        const s = window.scrollY > 200;
        o(s);
      };
      return (
        window.addEventListener("scroll", a),
        () => {
          window.removeEventListener("scroll", a);
        }
      );
    }, [i, o]),
    Q.jsx(Q.Fragment, {
      children: Q.jsx("header", {
        className: `${A} heading ${i ? "position-fixed" : ""} z-[999]`,
        children: Q.jsx(yn, {
          children: Q.jsxs("div", {
            className: "heading-wrap flex items-center justify-between",
            children: [
              Q.jsxs("nav", {
                className: `heading-menu ${t ? "show-menu" : ""}`,
                children: [
                  Q.jsxs("div", {
                    className:
                      "title flex items-center justify-between lg:hidden",
                    children: [
                      Q.jsx(Bp, {}),
                      Q.jsx("button", {
                        className: "heading-toggler",
                        onClick: () => r(!t),
                        children: Q.jsxs("svg", {
                          width: "25",
                          height: "24",
                          viewBox: "0 0 25 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            Q.jsx("path", {
                              d: "M16.3849 9.32205C16.481 9.23249 16.5585 9.12488 16.6129 9.00538C16.6674 8.88587 16.6978 8.75681 16.7024 8.62555C16.707 8.4943 16.6857 8.36342 16.6397 8.2404C16.5938 8.11737 16.524 8.00461 16.4344 7.90855C16.3449 7.81249 16.2373 7.73501 16.1178 7.68053C15.9982 7.62605 15.8692 7.59565 15.7379 7.59105C15.6067 7.58646 15.4758 7.60776 15.3528 7.65374C15.2297 7.69972 15.117 7.76949 15.0209 7.85905L12.0949 10.587L9.36692 7.66005C9.18439 7.47309 8.93593 7.36501 8.67472 7.35891C8.4135 7.35282 8.16028 7.44921 7.96923 7.62745C7.77818 7.8057 7.66448 8.05164 7.65246 8.31265C7.64044 8.57366 7.73106 8.829 7.90492 9.02405L10.6329 11.95L7.70592 14.6781C7.60647 14.7667 7.52573 14.8743 7.46846 14.9946C7.41118 15.1149 7.37852 15.2454 7.37239 15.3785C7.36626 15.5116 7.38679 15.6446 7.43277 15.7696C7.47875 15.8947 7.54925 16.0093 7.64014 16.1067C7.73103 16.2041 7.84047 16.2824 7.96203 16.3369C8.08359 16.3915 8.21482 16.4212 8.34802 16.4243C8.48121 16.4274 8.61369 16.4038 8.73766 16.355C8.86163 16.3062 8.97459 16.2331 9.06992 16.14L11.9959 13.413L14.7239 16.3391C14.812 16.4403 14.9196 16.5229 15.0402 16.5817C15.1609 16.6405 15.2922 16.6745 15.4262 16.6815C15.5603 16.6885 15.6943 16.6685 15.8205 16.6226C15.9466 16.5767 16.0622 16.5058 16.1604 16.4143C16.2586 16.3228 16.3374 16.2124 16.392 16.0898C16.4466 15.9672 16.476 15.8348 16.4784 15.7006C16.4807 15.5664 16.4561 15.4331 16.4058 15.3086C16.3556 15.1841 16.2808 15.071 16.1859 14.976L13.4589 12.05L16.3849 9.32205Z",
                              fill: "currentColor",
                            }),
                            Q.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M1.04492 12C1.04492 5.925 5.96992 1 12.0449 1C18.1199 1 23.0449 5.925 23.0449 12C23.0449 18.075 18.1199 23 12.0449 23C5.96992 23 1.04492 18.075 1.04492 12ZM12.0449 21C10.863 21 9.6927 20.7672 8.60077 20.3149C7.50884 19.8626 6.51669 19.1997 5.68096 18.364C4.84523 17.5282 4.1823 16.5361 3.73001 15.4442C3.27771 14.3522 3.04492 13.1819 3.04492 12C3.04492 10.8181 3.27771 9.64778 3.73001 8.55585C4.1823 7.46392 4.84523 6.47177 5.68096 5.63604C6.51669 4.80031 7.50884 4.13738 8.60077 3.68508C9.6927 3.23279 10.863 3 12.0449 3C14.4319 3 16.7211 3.94821 18.4089 5.63604C20.0967 7.32387 21.0449 9.61305 21.0449 12C21.0449 14.3869 20.0967 16.6761 18.4089 18.364C16.7211 20.0518 14.4319 21 12.0449 21Z",
                              fill: "currentColor",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Q.jsx("ul", {
                    className:
                      "flex flex-wrap lg:flex-row text-left gap-4 lg:gap-6 items-center",
                    children: e.map((a, s) =>
                      Q.jsx(
                        "li",
                        {
                          className: "d-block",
                          children: Q.jsx(jf, {
                            className: "heading-link uppercase",
                            to: a.to,
                            spy: !0,
                            smooth: !0,
                            duration: 600,
                            offset: 0,
                            onClick: () => n(a.to),
                            children: a.btn_title,
                          }),
                        },
                        s
                      )
                    ),
                  }),
                ],
              }),
              Q.jsxs("div", {
                className: "heading-middle",
                children: [
                  Q.jsx("div", {
                    className: "hidden md:block",
                    children: Q.jsx(Bp, {}),
                  }),
                  Q.jsx("div", {
                    className: "md:hidden favicon",
                    children: Q.jsx(jf, {
                      to: "banner",
                      spy: !0,
                      smooth: !0,
                      duration: 600,
                      offset: 0,
                      children: Q.jsx("img", {
                        height: "30px",
                        src: s4,
                        alt: "",
                      }),
                    }),
                  }),
                ],
              }),
              Q.jsxs("div", {
                className: "heading-actions flex items-center flex-wrap",
                children: [
                  Q.jsx(DB, {}),
                  Q.jsx("button", {
                    className: "heading-toggler lg:hidden",
                    onClick: () => r(!t),
                    children: Q.jsxs("svg", {
                      width: "25",
                      height: "24",
                      viewBox: "0 0 25 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        Q.jsx("path", {
                          d: "M3.08984 6H21.0898",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        Q.jsx("path", {
                          d: "M3.08984 12H21.0898",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                        Q.jsx("path", {
                          d: "M3.08984 18H21.0898",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    })
  );
}
const l4 = "/assets/banner_animation.gif",
  u4 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAEHCAYAAABlZ4JyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZySURBVHgB7dyPUeJAFMfxN1cBVmBKoAPTgVjBpQPpADqQDoAKhAqCFeBVEDsIHXD7g40TMfyThJD4/czsgcAB47t9u/t2c2YAAABAi4W+oYVewjBcB0Gwdvf7hlYJOp3OWtI0VYBT1zpWkj+GuoW9Xm9zxwXaXE9WcLtWEgJcv0fn8wcf7J6hNTapOZMkidJ0YmiFniZXu+7v7xXk0EpAiq7X49+/f789+PT0pJvQ0HiJUvKuOI7Vg2NDo4Xdbne9j5ZOVsJyiRRdH42/+5/czqYjuxABrs9Dfnn07cmHB908GhopUFnykLKqWvTgejweSs9SRVUL1VPABuq9RbPnXcvlcn13d6derA2IwHCzQtfGmhkPBoMvlatj9A8hiiKla7WxEeibEroW/ySw+wLttxQVaFJ3jSLXYpUhx+PxRYHdpffSe/pAx1bCUgqn2YyvrqUKrKpRVVOgVSyx7eZEZKhM4FqqFHqNwO7SZ/pxOjHG6EpMRqPRum7D4VBBHuW/GOvgcnw4+sPqslqt7P39XXffDaXT+DvRxEep8pQ1bln0Wf1+P1svDw2VClybuJZUHWiNu5rM2bacObQSD+rhuMC2s9qk7Bl1LrCaUKnCRWBrFrmWKH1PJpP1T2jtqwlUbu0bGm5O6Fp8bqA1O/eb/wS2IQLXklPStgoZ7rVLY23bOGHRacpdPiVTc26gjpY1h2rUZZ2PptBRj5UL7vt8Pt/7Av/cwi5EgOszXywWe5+czWa6mRoaq5NdVbgnPadWAnpwfVz5eLUo6sX+sTcrAQGu11vROOwfmxkaLyw6PusLG4GhFdL8pkTZ1yWRous3zafp6XQzcZ4bWuNLVYvqVftou2+Tpl9fX7m6v6Ui2wZWjd4LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECjdV2LXVv6+2iZZDwer9Xc/dTQKt0gCNaZMAwV5NB+mT/WXi6mYf6HzY2hNWLnswfrvnssMbRC0Ol01rv0mHvu3n6RtqboL+k5E0WRbp7sF2lrgB+dogc3N4ZG67iWJknyLUWnaZql6Y6hkRS48fPz83qffr+vAL+6FhgaI3RtrN45GAzWx+g1WiPr7xgVrpsWuhZngVUKPpVeqwqXD7TKmZHhZkSuxapOKUiXygU6MQJ9lFJeYNV5UWDzRYyy6D17vV42RqPAstvt6hdUZd03WS6X66oodfvvjx0qLnz2BNuOa1WI1cuKlkFlBNfPsqv67o02Ho1Gn7+oCtebes+ha4mrTJWSqnOpOfXvzTq5wJfU6bfnIqtWpM/VZ00mk/W5FFj/PQnsEV/2XkW92bbrzGuIXIv1HU4JtGbNfq6gVNwzHNVXuszzk5Vrn6IIXVtmQ0WR4XCo77U09obPEheNhTWdoujc3d2l+4oefr0bGE5WuPea6y0ju77Cf3AVz+5vUhnbhYV7r/Lw8KCbOrbn5tPp9NuD/rG54Syvh8qF9/f3dZyiKMwqPj2zuXCm9FCR3xcO+nZ9y3ya1hLOfuGZrEtTdM+lZ9dZ9i8fazxFMX97e/v8wd9fGM4yPrabk6tqBXZdoda6md96Lvqn1GVfNKadUhN+eXnJ0uO1iwqp0rS+o3Fk9iSha2OtM8/dYK9pzzXyn5ca+7wHhfbDkxO7coV9/eKfjaJDrSLLnZy4JLC7lDZV3rTt3qtq1oHhKjS+DlxLqzo5sRtonYLMHYILDZXRJCgta5/1XLlxmiMzFVlWeRzmVCxpyrNb6FjliwN1WK1W9vHxYaiG6rTJqRvnZdJYrLKmlmBWT2nzV9FY/HlCoooDbhmOzdQrcG2iQGviVWagc4HVelg9lsDWKHBtYv4k408DrXW0DgHkLhcJDTclsNxJxnMCrcD6TQcC2xCRAnZKdSt3mDwwNMpIPfNYWrZtOTIwXN2lG/6zxWJx8AW5jfYPQyMdPLLjNxQiQ2NNDh005xxy80XZVYW7/DnkpaE2ZZyLnv3792+lGvKu+XxzBLne4jZKUXglgb/Ai3PILdDXWjePg27t8u1KAv9/NF/r8lFcwZcrCfxGAtfetsgwq2rxH5m0U5jVpv3V/TND6+ha4GxyFRgAAADQRv8BWEA3DE1xswEAAAAASUVORK5CYII=",
  c4 = "/assets/title-style-2-CvCY_8Zp.png",
  f4 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABUCAYAAAAs5wHgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgB7Zw9j9xEGMcfwQfA9wXOU1LeF0DnDwBaXw3S+jokJHZrTsq6poCkoKBhdyWKNHBngRQaYm8i0aE9KEgVeVNAFzkNZeTM3x5vHK/X++bx2bPzkx55X+4S57/zvM08GyKNRqPRaAq8T/IxuH3O7UNut6TZmtBxnNiyrJg/dkmzFWeMsRhEUQThIkpXYOd5j+Ric5IHhmEQX3UQ7YwUQLZwPc7yCRcOF5s0lbDMTTPCMIS7hqQAMlecJVbYEi4kmabJSAF3lSlcP++mGRcXF7hod10DkkCSSYv4vg939UlTio26bR08w0K8Tpclsly11+/3174pShSHNCuEyKDrGI/H2l1LsM7OzuIqVOgiZLiqXSxDiqjQRcgQ7rysDCki4pwuSwQr3cI6RBcRUUepe8VZm9w0Q3QRcNftfqFl1CkcRBht46YZl5eXuGz/C4oBwYbcwsFgEO8Csitcm9LS5GjiXbLCuEXoEtBK7QvqOiEgdk4cUhTGbXRychJhS/wQwYrgzxJb7JmAjBTA4uajzxyNRqUNfF0g4+JDoTTrjqmjAlrcfLiSbMHWCSjcGAK2vmBeBvxD41cd4MPKxUEkEodayIBqCPiygIDohSmNg61ZgQZiWNXORlsQOyxzuiOKBXCyW4EmvO2IDqVVN+oilriu28qVh3saDocxyiFqYaxj3CbckqzWBgFzNR4Ec6nle3mM0psM6y529xAMyQCZvnObnw6J8mQymcQyQfmBUJErPyxSAIdEQVy3gJlg4hRMGcGKWNwmEBDB+pA4CHdEKBAB3yVFetRNMBKJBKtlVyA6dSTgy4JxC3dJIKKIvaYjFSyPixW0LSJbWqQh61gOa2QQbZMohJveUEeRca469Txv4w+Jn+mscDKwqiaVMu5gYgl/l0Mt3gzFDUZVO8V3MCPHCG1j/9OYmaetTkjXVV2FOE8YUnM4Tv+zOH79fzz+4ftWT0o5tm2vFU70oIyaw7/+6WEiXPTyv1ZPSiU7yWXuOp/Pm548T8ZqIVpm1vlHB7urrInMV5zg9nb1q1sim25Ou/Vh272P332h90lyoZYyLOsixEGLRc0xRlzLr7jw+T+tLr4Z3DXPHX1BJIJQeeFgpmke9AHK/J7DgrvrIgiC5QvicUDNYfF4ZjBmrrxxkbqvRXsi+7tc3mw2Wz6ZTqfJa9QcK/Eto2cnce6cWsqyixAD0013C+H8zz9W3DQzw/ig6fvZiRAbnGLDckzNMWDsdK1oMPfeFe7pW2opjNt9YU18uhYlZyKncVlSyBuKYe7Kys/lVZENCc1R3F7//LBSsKL5j3+L0ZJRKuCIjuDM4+1UKBcMAuwiWNGwQoWAWVhhpBiMkqlQIxp++cXBgpUJOBpdZTspENAiBWAQDP+w6OW/tQpWZug6hIAOdRwHAV22YEXxqFARyC6AZbAIZk95Mf0jNUEQPKEHD77DwxkpgEVJyWHGE74awufPal9l/u+Psu0nJUsVRskYhplkw0MFRF3n3vuKxzRT6dmVPIzSMYxoHwEzwVQf9qmCkRhHQwLZRkAIdmzDPptwEaOqRbvSsytriKr6VRHL9jpn7WI5sgtTz/ul9I3bv/6mxYsXC9rz/7RTXbibG+/X0jdmwVNcAtKUkk4V8KxZdNM6jghVx5+snHI9O/iUS3VXBV4we/LOC+K5npTagIGzhfyKE7u+Dmk24vuPHy2FoxoOjY7BVcHMu0mzq5dm2YDbK9JshMFd73/zdVb0OqTZGnQIOGlzSKPRaDQaGbwB4YcXfYYb4JwAAAAASUVORK5CYII=",
  d4 = "/assets/banner-shape-Dmjb4S5a.png";
var Nm = {};
function B4(A) {
  if (typeof window > "u") return;
  const e = document.createElement("style");
  return (
    e.setAttribute("type", "text/css"),
    (e.innerHTML = A),
    document.head.appendChild(e),
    A
  );
}
Object.defineProperty(Nm, "__esModule", { value: !0 });
var PA = N;
function g4(A) {
  return A && typeof A == "object" && "default" in A ? A : { default: A };
}
var ar = g4(PA);
B4(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const h4 = PA.forwardRef(function (
  {
    style: e = {},
    className: t = "",
    autoFill: r = !1,
    play: n = !0,
    pauseOnHover: i = !1,
    pauseOnClick: o = !1,
    direction: a = "left",
    speed: s = 50,
    delay: l = 0,
    loop: u = 0,
    gradient: c = !1,
    gradientColor: f = "white",
    gradientWidth: h = 200,
    onFinish: g,
    onCycleComplete: p,
    onMount: F,
    children: B,
  },
  d
) {
  const [w, C] = PA.useState(0),
    [m, y] = PA.useState(0),
    [E, v] = PA.useState(1),
    [x, H] = PA.useState(!1),
    L = PA.useRef(null),
    O = d || L,
    R = PA.useRef(null),
    P = PA.useCallback(() => {
      if (R.current && O.current) {
        const M = O.current.getBoundingClientRect(),
          j = R.current.getBoundingClientRect();
        let rA = M.width,
          nA = j.width;
        (a === "up" || a === "down") && ((rA = M.height), (nA = j.height)),
          v(r && rA && nA && nA < rA ? Math.ceil(rA / nA) : 1),
          C(rA),
          y(nA);
      }
    }, [r, O, a]);
  PA.useEffect(() => {
    if (x && (P(), R.current && O.current)) {
      const M = new ResizeObserver(() => P());
      return (
        M.observe(O.current),
        M.observe(R.current),
        () => {
          M && M.disconnect();
        }
      );
    }
  }, [P, O, x]),
    PA.useEffect(() => {
      P();
    }, [P, B]),
    PA.useEffect(() => {
      H(!0);
    }, []),
    PA.useEffect(() => {
      typeof F == "function" && F();
    }, []);
  const J = PA.useMemo(
      () => (r ? (m * E) / s : m < w ? w / s : m / s),
      [r, w, m, E, s]
    ),
    eA = PA.useMemo(
      () =>
        Object.assign(Object.assign({}, e), {
          "--pause-on-hover": !n || i ? "paused" : "running",
          "--pause-on-click": !n || (i && !o) || o ? "paused" : "running",
          "--width": a === "up" || a === "down" ? "100vh" : "100%",
          "--transform":
            a === "up"
              ? "rotate(-90deg)"
              : a === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [e, n, i, o, a]
    ),
    tA = PA.useMemo(
      () => ({
        "--gradient-color": f,
        "--gradient-width": typeof h == "number" ? `${h}px` : h,
      }),
      [f, h]
    ),
    b = PA.useMemo(
      () => ({
        "--play": n ? "running" : "paused",
        "--direction": a === "left" ? "normal" : "reverse",
        "--duration": `${J}s`,
        "--delay": `${l}s`,
        "--iteration-count": u ? `${u}` : "infinite",
        "--min-width": r ? "auto" : "100%",
      }),
      [n, a, J, l, u, r]
    ),
    D = PA.useMemo(
      () => ({
        "--transform":
          a === "up"
            ? "rotate(90deg)"
            : a === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [a]
    ),
    T = PA.useCallback(
      (M) =>
        [...Array(Number.isFinite(M) && M >= 0 ? M : 0)].map((j, rA) =>
          ar.default.createElement(
            PA.Fragment,
            { key: rA },
            PA.Children.map(B, (nA) =>
              ar.default.createElement(
                "div",
                { style: D, className: "rfm-child" },
                nA
              )
            )
          )
        ),
      [D, B]
    );
  return x
    ? ar.default.createElement(
        "div",
        { ref: O, style: eA, className: "rfm-marquee-container " + t },
        c &&
          ar.default.createElement("div", {
            style: tA,
            className: "rfm-overlay",
          }),
        ar.default.createElement(
          "div",
          {
            className: "rfm-marquee",
            style: b,
            onAnimationIteration: p,
            onAnimationEnd: g,
          },
          ar.default.createElement(
            "div",
            { className: "rfm-initial-child-container", ref: R },
            PA.Children.map(B, (M) =>
              ar.default.createElement(
                "div",
                { style: D, className: "rfm-child" },
                M
              )
            )
          ),
          T(E - 1)
        ),
        ar.default.createElement(
          "div",
          { className: "rfm-marquee", style: b },
          T(E)
        )
      )
    : null;
});
var p4 = (Nm.default = h4);
function pp() {
  return Q.jsx("div", {
    className:
      "common-marquee bg-white py-3 xl:py-4 border-l-0 border-r-0 border-2 border-[#1A1A1A] mb-1",
    children: Q.jsx(p4, {
      autoFill: !1,
      speed: 60,
      children: Array.from({ length: 20 }).map((e, t) =>
        Q.jsxs("div", {
          className: "flex items-center",
          children: [
            Q.jsxs("svg", {
              width: "30",
              height: "30",
              className: "w-[20px] md:w-[30px] mx-5 xl:mx-[30px]",
              viewBox: "0 0 30 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                Q.jsx("circle", {
                  cx: "15.1606",
                  cy: "14.6466",
                  r: "14.5884",
                  fill: "black",
                }),
                Q.jsx("circle", {
                  cx: "15.1606",
                  cy: "14.6466",
                  r: "7.89453",
                  fill: "#FFFDEE",
                }),
              ],
            }),
            Q.jsx("h4", {
              className:
                "mb-0 text-uppercase text-black text-xl xl:text-[34px] leading-[1.5]",
              children: "$BUMAS",
            }),
          ],
        })
      ),
    }),
  });
}
function w4() {
  return Q.jsxs("div", {
    className: "banner relative z-10",
    children: [
      Q.jsx("div", {
        className:
          "banner-shape absolute top-full left-0 w-full h-auto -mt-1 -z-20",
        children: Q.jsx("img", {
          src: d4,
          className: "w-full h-auto",
          alt: "",
        }),
      }),
      Q.jsx(yn, {
        children: Q.jsx(Ui, {
          children: Q.jsx(Jt, {
            xs: 12,
            children: Q.jsxs("div", {
              className: "banner-wrap",
              children: [
                Q.jsxs("div", {
                  className:
                    "banner-title text-center relative w-[max-content] mx-auto",
                  children: [
                    Q.jsx("h1", { children: "bumas" }),
                    Q.jsx("img", {
                      src: u4,
                      alt: "",
                      className: "title title-1 absolute z-10 ",
                    }),
                    Q.jsx("img", {
                      src: c4,
                      alt: "",
                      className: "title title-2 absolute z-10 ",
                    }),
                    Q.jsx("img", {
                      src: f4,
                      alt: "",
                      className: "title title-3 absolute z-10 ",
                    }),
                  ],
                }),
                Q.jsx("div", {
                  className: "banner-img flex justify-center relative z-20",
                  children: Q.jsx("img", { src: l4, alt: "" }),
                }),
              ],
            }),
          }),
        }),
      }),
      Q.jsxs("div", {
        className: "marquee",
        children: [
          Q.jsx(pp, { className: "marquee-1" }),
          Q.jsx(pp, { className: "marquee-2" }),
        ],
      }),
    ],
  });
}
const v4 = "/assets/about-img-Drj7CRQ5.png",
  m4 = "/assets/Body_element2.png",
  C4 = "/assets/scanner-Cv-TSM07.svg",
  Q4 =
    "data:image/svg+xml,%3csvg%20width='34'%20height='30'%20viewBox='0%200%2034%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.8416%200.412412C32.2787%20-0.0645891%2031.3945%20-0.132839%2030.4803%200.233912H30.4788C29.5174%200.619413%203.26336%2011.8724%202.19458%2012.3322C2.00019%2012.3997%200.302461%2013.0327%200.477337%2014.4427C0.633451%2015.714%201.99794%2016.2405%202.16456%2016.3012L8.83915%2018.585C9.28197%2020.058%2010.9144%2025.4925%2011.2754%2026.6535C11.5006%2027.3772%2011.8676%2028.3282%2012.5108%2028.524C13.0752%2028.7415%2013.6366%2028.5427%2013.9999%2028.2577L18.0806%2024.4755L24.6681%2029.6092L24.825%2029.703C25.2723%2029.901%2025.7009%2030%2026.1099%2030C26.4259%2030%2026.7291%2029.9407%2027.0188%2029.8222C28.0058%2029.4172%2028.4006%2028.4775%2028.4419%2028.371L33.3624%202.81317C33.6627%201.44817%2033.2454%200.753663%2032.8416%200.412412ZM14.7257%2019.4985L12.474%2025.4985L10.2224%2017.9985L27.4849%205.24843L14.7257%2019.4985Z'%20fill='black'/%3e%3c/svg%3e",
  y4 = "/assets/x-BPTlec88.svg",
  linkedInIcon = "/assets/dexx.png"; // Додали іконку LinkedIn
function U4({ className: A }) {
  const e = [
    { name: "dexscreener", icon: linkedInIcon, url: "https://dexscreener.com/solana/9yvpQZfqM91VJG8T1DQFctrAgDkoKUsEMtzRWwRpump" }, // Додаємо новий об'єкт
    {
      name: "discoard",
      icon: C4,
      url: "https://www.dextools.io/app/en/solana/pair-explorer/9yvpQZfqM91VJG8T1DQFctrAgDkoKUsEMtzRWwRpump",
    },
    { name: "telegram", icon: Q4, url: "https://t.me/BumasCoin" },
    { name: "twitter", icon: y4, url: "https://x.com/BumasCoin" },
  ];
  return Q.jsx("ul", {
    className: `social-list flex items-center flex-wrap gap-2 md:gap-4 lg:gap-4 xl:gap-6 ${A}`,
    children: e.map((t, r) =>
      Q.jsx(
        "li",
        {
          children: Q.jsx("a", {
            href: t.url,
            target: "_blank",
            className: "social-link flex items-center justify-center ml-1",
            children: Q.jsx("img", { src: t.icon, alt: "" }),
          }),
        },
        r
      )
    ),
  });
}
function F4() {
  return Q.jsx("div", {
    className:
      "about bg-white pt-[80px] md:pt-20 lg:pt-[250px] pb-[50px] md:pb-[100px] relative",
    children: Q.jsx(yn, {
      children: Q.jsxs(Ui, {
        className: "items-center flex-col-reverse md:flex-row",
        children: [
          Q.jsx(Jt, {
            lg: 8,
            xl: 7,
            children: Q.jsxs("div", {
              className: "about-left",
              children: [
                Q.jsxs("div", {
                  className: "about-content",
                  children: [
                    Q.jsx("img", {
                      className:
                        " relative left-[0] xl:left-[-35px] w-4 xl:w-9",
                      src: m4,
                      alt: "",
                    }),
                    Q.jsx("h2", {
                      className: "text-center lg:text-left",
                      children: "What is BUMAS?",
                    }),
                    // Q.jsx("p", {
                    //   className:
                    //     'text-black text-[18px] md:text-[20px] lg:md:text-[20px] xl:md:text-[30px] leading-[150%] capitalize font-["Poppins"] max-w-[867px] w-full pt-5 text-center lg:text-left',
                    //   children:
                    //   "$BUMAS is the bullish Christmas Spirit the Solana! Part spirit, part bull, you'll see him popping up all over the place on his Xmas mission! Gains for all. <br> Join in the fun with the community, the good vibes and the be bullish on Solana BULL!",
                    // }),
                    Q.jsx("div", {
                      className:
                          'text-black text-[18px] md:text-[20px] lg:md:text-[20px] xl:md:text-[30px] leading-[150%] capitalize font-["Poppins"] max-w-[867px] w-full pt-5 text-center lg:text-left',
                      dangerouslySetInnerHTML: {
                        __html:
                          "$BUMAS is the bullish Christmas Spirit the Solana! Part spirit, part bull, you'll see him popping up all over the place on his Xmas mission! Gains for all. <br> Join in the fun with the community, the good vibes and the be bullish on Solana BULL!",
                      },
                    }),
                  ],
                }),
                Q.jsxs("div", {
                  className: "about-social flex pt-10 items-center",
                  children: [
                    Q.jsx("a", {
                      href: "https://raydium.io/swap/?inputMint=sol&outputMint=9yvpQZfqM91VJG8T1DQFctrAgDkoKUsEMtzRWwRpump",
                      target: "_blank",
                      className: "btn text-lg",
                      children: "BUY NOW",
                    }),
                    Q.jsx(U4, {}),
                  ],
                }),
              ],
            }),
          }),
          Q.jsx(Jt, {
            xs: 12,
            lg: 4,
            xl: 5,
            children: Q.jsx("div", {
              className: "about-images",
              children: Q.jsx("img", { className: "", src: v4, alt: "" }),
            }),
          }),
        ],
      }),
    }),
  });
}
function E4(A) {
  return du({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "m12 15 2 2 4-4" }, child: [] },
      {
        tag: "rect",
        attr: { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" },
        child: [],
      },
    ],
  })(A);
}
function I4(A) {
  return du({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" },
        child: [],
      },
    ],
  })(A);
}
function x4() {
  const A =
      "9yvpQZfqM91VJG8T1DQFctrAgDkoKUsEMtzRWwRpump",
    [e, t] = N.useState(!1),
    r = () => {
      navigator.clipboard.writeText(A),
        t(!0),
        setTimeout(() => {
          t(!1);
        }, 3e3);
    };
  return Q.jsxs("div", {
    className:
      "token flex justify-between text-base md:text-xl lg:text-[24px] xl:text-[30px] pr-8 xl:pr-12 2xl:text-[38px] font-normal   text-[#060205]  border border-black rounded-lg bg-white md:rounded-[16px] items-center mb-5 md:mb-6  relative z-[1]",
    children: [
      Q.jsxs("p", {
        className:
          "flex items-center overflow-auto py-6 lg:py-[43px] px-6 md:px-10 lg:px-[44px]",
        children: [
          "CA: ",
          Q.jsx("span", { className: "font-bold", children: A }),
        ],
      }),
      Q.jsx("button", {
        onClick: () => r(),
        className: "bg-transparent p-0 border-0",
        children: e ? Q.jsx(E4, {}) : Q.jsx(I4, {}),
      }),
    ],
  });
}
const H4 = "/assets/tokenmos-img-CGrEXnA0.png",
  S4 = "/assets/tokenmos-bg-B2VmtxuJ.png",
  L4 = "/assets/Body_element.png",
  T4 = "/assets/Body_element2.png",
  D4 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgBzZhvkYQwDMUj4SQg4SQgYSVUwjkAJz0HKwEpkXAS3rWz7Ow/CEnaAr+ZfmKbfU370gDRjgDo8qAzkoQxbgynEpnEBLyShQY6A09Ze2eiI5m3cY1ARzGbgFeEMR1JEhCrZC39+EIVmbOG4rOGh5s4jZ4qsJG1zhKI3yZHFNSivEBBWLQEClIgj0ism0CfNchuupOfD6RkY7GjNk4ONEIPQ+EwCKUD1l2YV8pGkf1KrEGYF8gDbttryWImPmcCrQvu/Ae/cIhErYKrFDlBDwvP2lzusJ/HJTpqSYFIfcEtFOgxzbV55hZEukxDewG561iCYbhpSsUN8MFo2QFDdydrRPZUG8gFd4KNiFrnEYoOF0eZBoYOF76bxmeaNPEiBI7CPGsRH8kKCjtcpUiGs+8rXim2b5pAViB3uF9kBMumsfd9aPhJAa+mCZa598l/a1mjSsDzUo+9OlyHMKngXulIUOuTQiNx31h26T4drgZ8Fs+OzkYS9ZMH7cA/3Jn10RJ+79UAAAAASUVORK5CYII=",
  Wf = "/assets/about-tp-shap-D3UDAV7U.png";
function b4() {
  const A = [
    { title: "Token Name", subtitle: "Bumas the Spirit" },
    { title: "Symbol", subtitle: "$BUMAS" },
    { title: "Total Supply", subtitle: "1B" },
    { title: "Tax", subtitle: "0%" },
  ];
  return Q.jsxs("div", {
    className: "tokenmos  relative z-[1] ",
    children: [
      Q.jsx("img", {
        className: "absolute top-[-10px] left-0 w-full h-[70px] lg:h-[128px]",
        src: Wf,
        alt: "",
      }),
      Q.jsx("div", {
        className:
          "tokenmso-shap w-full h-full absolute -z-10 left-0 top-[-10%] scale-110",
        children: Q.jsx("img", {
          className: "w-full h-full",
          src: S4,
          alt: "",
        }),
      }),
      Q.jsx("div", {
        className:
          "shap1 absolute -z-[2] left-0 top-[30%] h-[130px] w-[130px] ",
        children: Q.jsx("img", {
          src: L4,
          className: "w-full h-full object-contain ",
          alt: "",
        }),
      }),
      Q.jsx("div", {
        className:
          "shap2 absolute -z-[2] right-[30%] top-[110px] h-[57px] w-[57px] ",
        children: Q.jsx("img", {
          src: T4,
          className: "w-full h-full object-contain ",
          alt: "",
        }),
      }),
      Q.jsx("div", {
        className:
          "shap3 absolute -z-[2] right-[40%] top-[52%] h-[40px] w-[40px] ",
        children: Q.jsx("img", {
          src: D4,
          className: "w-full h-full object-contain ",
          alt: "",
        }),
      }),
      Q.jsx("div", {
        className:
          "main-content pt-32 pb-14 md:pt-[130px] md:pb-[70px] lg:pt-[200px] lg:pb-[120px] xl:pt-[250px] xl:pb-[277px]",
        children: Q.jsx(yn, {
          children: Q.jsxs(Ui, {
            className: "justify-center lg:justify-between items-center ",
            children: [
              Q.jsx(Jt, {
                xs: 12,
                md: 10,
                lg: 5,
                className: "mb-8 md:mb-0",
                children: Q.jsx("div", {
                  className: "flex items-center justify-center",
                  children: Q.jsx("div", {
                    className:
                      "tokenmos-img w-full h-auto 2xl:w-[690px] 2xl:h-[690px]",
                    children: Q.jsx("img", {
                      className: "w-full h-full",
                      src: H4,
                      alt: "",
                    }),
                  }),
                }),
              }),
              Q.jsx(Jt, {
                xs: 12,
                md: 10,
                lg: 7,
                xl: 7,
                children: Q.jsxs("div", {
                  className: "tokenmos-content relative z-10",
                  children: [
                    Q.jsx("h2", {
                      className:
                        "text-white text-center lg:text-start  font-normal uppercase mb-8 md:mb-10 lg:mb-12",
                      children: "TOKENOMICS",
                    }),
                    Q.jsx("ul", {
                      children: A.map((e, t) =>
                        Q.jsxs(
                          "li",
                          {
                            className:
                              " text-xl md:text-2xl lg:text-[30px] xl:text-[38px] font-normal  py-6 lg:py-[42px] px-8 md:px-10 lg:px-[44px] text-[#060205]  border border-black rounded-lg bg-white md:rounded-[16px] flex items-center mb-5 md:mb-6 ",
                            children: [
                              e.title,
                              ": ",
                              Q.jsx("span", {
                                className: "font-bold ml-1",
                                children: e.subtitle,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                    Q.jsx(x4, {}),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const O4 = "/assets/community-bg-BIhC7XQy.png",
  R4 = "/assets/community-carecter-4xChB0fu.gif",
  K4 = "/assets/community-tp-shap-CFcsF30D.png";
function N4() {
  return Q.jsxs("div", {
    className: "community relative",
    children: [
      Q.jsx("img", {
        src: K4,
        className: "absolute top-0 max-w-36 lg:max-w-[350px] z-[-1] left-0",
        alt: "",
      }),
      Q.jsx(yn, {
        children: Q.jsx(Ui, {
          children: Q.jsx(Jt, {
            xs: 12,
            className: "flex justify-center",
            children: Q.jsxs("div", {
              className:
                "community-content relative max-w-[1425px] text-center",
              children: [
                Q.jsx("img", {
                  src: R4,
                  className:
                    "absolute bottom-full left-1/2 -translate-x-1/2 max-w-[52%] md:max-w-[40%] lg:max-w-[100%] z-[-1]",
                  alt: "",
                }),
                Q.jsx("img", {
                  className:
                    "cmntybg absolute top-0 left-0 w-full h-full z-[-1] hidden md:block",
                  src: O4,
                  alt: "",
                }),
                Q.jsx("h3", { children: "Join OUR COMMUNITY!" }),
Q.jsx("p", {
  className: "no-transform" , // Застосуйте клас для перевизначення стилю
  children:
    "Stay updated with the latest developments and important announcements by joining our Telegram group and following us on X. As we take steps towards the future together, don’t miss out on the fun and opportunities along the way!",
}),
                Q.jsxs("div", {
                  className: "flex items-center justify-center",
                  children: [
                    Q.jsx("a", {
                      href: "https://raydium.io/swap/?inputMint=sol&outputMint=9yvpQZfqM91VJG8T1DQFctrAgDkoKUsEMtzRWwRpump",
                      target: "_blank",
                      className: "btn",
                      children: "BUY NOW",
                    }),
                    Q.jsx(DB, {}),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
const M4 = "/assets/maker-img-D8MpR8wU.png";
function _4() {
  return null
}
const k4 = "/assets/logo-zeLxvy5t.png",
  P4 = "/assets/footer-top-shape--i4_h7B0.png",
  V4 = "/assets/footer-style-19j15BnH.gif",
  G4 = "/assets/footer-bg-shape-C9jY5_4z.png";
function j4() {
  return Q.jsxs("div", {
    className: "footer relative z-[1] bg-white mt-28 md:mt-36 lg:mt-64 ",
    children: [
      Q.jsx("div", {
        className:
          "footer-shape absolute bottom-full left-0 w-full h-auto -mb-1",
        children: Q.jsx("img", {
          src: P4,
          className: "w-full h-auto",
          alt: "",
        }),
      }),
      Q.jsx("div", {
        className: "footer-shape absolute bottom-0 left-0 w-full h-auto",
        children: Q.jsx("img", {
          src: V4,
          className: "w-full h-auto",
          alt: "",
        }),
      }),
      Q.jsx("div", {
        className:
          "footer-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto -z-[1]",
        children: Q.jsx("img", {
          src: G4,
          className: "w-full h-auto",
          alt: "",
        }),
      }),
      Q.jsx(yn, {
        children: Q.jsx(Ui, {
          className: "justify-center",
          children: Q.jsxs(Jt, {
            xs: 12,
            lg: 10,
            xxxl: 7,
            className: "text-center",
            children: [
              Q.jsx("img", {
                src: k4,
                className:
                  "mx-auto max-w-[200px] md:max-w-[280px] lg:max-w-[350px] xl:max-w-full",
                alt: "",
              }),
              Q.jsx("p", {
                className:
                  "text-black mb-6 md:mb-8 lg:mb-12 mt-5 md:mt-7 lg:mt-10 text-xl md:text-2xl lg:text-3xl font-Poppins !leading-normal md:px-[5%] capitalize",
                children:
                  "Suibull: Harness the power of the bull, rise to the top of the meme coin world! Unite communities, build the future, and stay strong!",
              }),
              Q.jsx(DB, { className: "justify-center" }),
            ],
          }),
        }),
      }),
    ],
  });
}
function W4() {
  return Q.jsxs(Q.Fragment, {
    children: [
      Q.jsx(Km, {}),
      Q.jsx(w4, {}),
      Q.jsx(F4, {}),
      Q.jsx(b4, {}),
      Q.jsx(_4, {}),
      Q.jsx(N4, {}),
      Q.jsx(j4, {}),
    ],
  });
}
const X4 =
    "data:image/svg+xml,%3csvg%20width='150'%20height='51'%20viewBox='0%200%20150%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M127.502%207.2447C127.932%205.8237%20129.944%205.8237%20130.373%207.2447L133.727%2018.3322C133.936%2019.0222%20134.432%2019.5886%20135.089%2019.8859L145.183%2024.4559C146.359%2024.9879%20146.359%2026.6569%20145.183%2027.1889L135.089%2031.7589C134.432%2032.0562%20133.936%2032.6226%20133.727%2033.3126L130.373%2044.4001C129.944%2045.8211%20127.932%2045.8211%20127.502%2044.4001L124.148%2033.3127C123.94%2032.6226%20123.443%2032.0562%20122.787%2031.7589L112.692%2027.1889C111.517%2026.6569%20111.517%2024.9879%20112.692%2024.4559L122.787%2019.8859C123.443%2019.5886%20123.94%2019.0222%20124.148%2018.3322L127.502%207.2447Z'%20fill='%2373CEE1'%20stroke='black'/%3e%3cpath%20d='M32.9397%209.83531L15.8952%2040.4992M38.8744%2033.9375L8.21047%2016.893'%20stroke='%23018BD6'%20stroke-width='8.55'/%3e%3c/svg%3e",
  z4 =
    "data:image/svg+xml,%3csvg%20width='56'%20height='70'%20viewBox='0%200%2056%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.4515%207.08601C24.8813%205.66501%2026.8933%205.66501%2027.3231%207.08601L31.8762%2022.1402C32.0849%2022.8303%2032.5814%2023.3966%2033.2381%2023.6939L46.5751%2029.7318C47.7502%2030.2638%2047.7502%2031.9327%2046.5751%2032.4647L33.2381%2038.5026C32.5814%2038.7999%2032.0849%2039.3662%2031.8762%2040.0563L27.3231%2055.1105C26.8933%2056.5315%2024.8813%2056.5315%2024.4515%2055.1105L19.8984%2040.0563C19.6896%2039.3662%2019.1932%2038.7999%2018.5365%2038.5026L5.19954%2032.4647C4.02438%2031.9327%204.02438%2030.2638%205.19954%2029.7318L18.5365%2023.6939C19.1932%2023.3966%2019.6896%2022.8303%2019.8984%2022.1402L24.4515%207.08601Z'%20fill='%2373CEE1'%20stroke='black'/%3e%3cpath%20d='M36.1899%2032.1509C36.6197%2030.73%2038.6317%2030.73%2039.0615%2032.151L41.7209%2040.9438C41.9296%2041.6338%2042.426%2042.2002%2043.0828%2042.4975L51.3018%2046.2184C52.477%2046.7504%2052.477%2048.4194%2051.3018%2048.9514L43.0828%2052.6723C42.426%2052.9696%2041.9296%2053.536%2041.7209%2054.226L39.0615%2063.0188C38.6317%2064.4398%2036.6197%2064.4398%2036.1899%2063.0188L33.5305%2054.226C33.3218%2053.536%2032.8254%2052.9696%2032.1686%2052.6723L23.9495%2048.9514C22.7744%2048.4194%2022.7744%2046.7504%2023.9495%2046.2184L32.1686%2042.4975C32.8254%2042.2002%2033.3218%2041.6338%2033.5305%2040.9438L36.1899%2032.1509Z'%20fill='%2373CEE1'%20stroke='black'/%3e%3c/svg%3e",
  wp =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23%204V10H17'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.49%2015C19.84%2016.8399%2018.6096%2018.4187%2016.9842%2019.4985C15.3588%2020.5783%2013.4265%2021.1006%2011.4784%2020.9866C9.53038%2020.8726%207.67216%2020.1286%206.18376%2018.8667C4.69536%2017.6047%203.65743%2015.8932%203.22637%2013.9901C2.79531%2012.0869%202.99448%2010.0952%203.79386%208.31508C4.59325%206.53496%205.94954%205.06288%207.65836%204.12065C9.36717%203.17843%2011.3359%202.81711%2013.268%203.09116C15.2%203.3652%2016.9906%204.25975%2018.37%205.64001L23%2010'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  vp =
    "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.5%2015V19C21.5%2019.5304%2021.2893%2020.0391%2020.9142%2020.4142C20.5391%2020.7893%2020.0304%2021%2019.5%2021H5.5C4.96957%2021%204.46086%2020.7893%204.08579%2020.4142C3.71071%2020.0391%203.5%2019.5304%203.5%2019V15'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.5%2010L12.5%2015L17.5%2010'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.5%2015V3'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  mp =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%203H21V8'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%2020L21%203'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21%2016V21H16'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2015L21%2021'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%204L9%209'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  J4 = "/assets/DEFAULT%20BASE-D05Tt0jn.png",
  Cp = "/assets/x-BavbMs6Y.svg";
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Xf =
  function (A, e) {
    return (
      (Xf =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, r) {
            t.__proto__ = r;
          }) ||
        function (t, r) {
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }),
      Xf(A, e)
    );
  };
function dt(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  Xf(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var zf = function () {
  return (
    (zf =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
          t = arguments[r];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }),
    zf.apply(this, arguments)
  );
};
function ve(A, e, t, r) {
  function n(i) {
    return i instanceof t
      ? i
      : new t(function (o) {
          o(i);
        });
  }
  return new (t || (t = Promise))(function (i, o) {
    function a(u) {
      try {
        l(r.next(u));
      } catch (c) {
        o(c);
      }
    }
    function s(u) {
      try {
        l(r.throw(u));
      } catch (c) {
        o(c);
      }
    }
    function l(u) {
      u.done ? i(u.value) : n(u.value).then(a, s);
    }
    l((r = r.apply(A, [])).next());
  });
}
function Be(A, e) {
  var t = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    n,
    i,
    o;
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(l) {
    return function (u) {
      return s([l, u]);
    };
  }
  function s(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((r = 1),
          n &&
            (i =
              l[0] & 2
                ? n.return
                : l[0]
                ? n.throw || ((i = n.return) && i.call(n), 0)
                : n.next) &&
            !(i = i.call(n, l[1])).done)
        )
          return i;
        switch (((n = 0), i && (l = [l[0] & 2, i.value]), l[0])) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return t.label++, { value: l[1], done: !1 };
          case 5:
            t.label++, (n = l[1]), (l = [0]);
            continue;
          case 7:
            (l = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((i = t.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (l[0] === 6 || l[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < i[1]) {
              (t.label = i[1]), (i = l);
              break;
            }
            if (i && t.label < i[2]) {
              (t.label = i[2]), t.ops.push(l);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(A, t);
      } catch (u) {
        (l = [6, u]), (n = 0);
      } finally {
        r = i = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function ts(A, e, t) {
  if (arguments.length === 2)
    for (var r = 0, n = e.length, i; r < n; r++)
      (i || !(r in e)) &&
        (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
  return A.concat(i || e);
}
var Yt = (function () {
    function A(e, t, r, n) {
      (this.left = e), (this.top = t), (this.width = r), (this.height = n);
    }
    return (
      (A.prototype.add = function (e, t, r, n) {
        return new A(
          this.left + e,
          this.top + t,
          this.width + r,
          this.height + n
        );
      }),
      (A.fromClientRect = function (e, t) {
        return new A(
          t.left + e.windowBounds.left,
          t.top + e.windowBounds.top,
          t.width,
          t.height
        );
      }),
      (A.fromDOMRectList = function (e, t) {
        var r = Array.from(t).find(function (n) {
          return n.width !== 0;
        });
        return r
          ? new A(
              r.left + e.windowBounds.left,
              r.top + e.windowBounds.top,
              r.width,
              r.height
            )
          : A.EMPTY;
      }),
      (A.EMPTY = new A(0, 0, 0, 0)),
      A
    );
  })(),
  Bu = function (A, e) {
    return Yt.fromClientRect(A, e.getBoundingClientRect());
  },
  Y4 = function (A) {
    var e = A.body,
      t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(
        Math.max(e.scrollWidth, t.scrollWidth),
        Math.max(e.offsetWidth, t.offsetWidth),
        Math.max(e.clientWidth, t.clientWidth)
      ),
      n = Math.max(
        Math.max(e.scrollHeight, t.scrollHeight),
        Math.max(e.offsetHeight, t.offsetHeight),
        Math.max(e.clientHeight, t.clientHeight)
      );
    return new Yt(0, 0, r, n);
  },
  gu = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var i = A.charCodeAt(t++);
        (i & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  WA = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
      var o = A[n];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  Qp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Z4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rs = 0; rs < Qp.length; rs++) Z4[Qp.charCodeAt(rs)] = rs;
var yp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  $i = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ns = 0; ns < yp.length; ns++) $i[yp.charCodeAt(ns)] = ns;
var $4 = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      i,
      o,
      a,
      s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(e)
          : new Array(e),
      u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4)
      (i = $i[A.charCodeAt(r)]),
        (o = $i[A.charCodeAt(r + 1)]),
        (a = $i[A.charCodeAt(r + 2)]),
        (s = $i[A.charCodeAt(r + 3)]),
        (u[n++] = (i << 2) | (o >> 4)),
        (u[n++] = ((o & 15) << 4) | (a >> 2)),
        (u[n++] = ((a & 3) << 6) | (s & 63));
    return l;
  },
  q4 = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  AI = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  sn = 5,
  bB = 11,
  mc = 2,
  eI = bB - sn,
  Mm = 65536 >> sn,
  tI = 1 << sn,
  Cc = tI - 1,
  rI = 1024 >> sn,
  nI = Mm + rI,
  iI = nI,
  oI = 32,
  aI = iI + oI,
  sI = 65536 >> bB,
  lI = 1 << eI,
  uI = lI - 1,
  Up = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  cI = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  fI = function (A, e) {
    var t = $4(A),
      r = Array.isArray(t) ? AI(t) : new Uint32Array(t),
      n = Array.isArray(t) ? q4(t) : new Uint16Array(t),
      i = 24,
      o = Up(n, i / 2, r[4] / 2),
      a = r[5] === 2 ? Up(n, (i + r[4]) / 2) : cI(r, Math.ceil((i + r[4]) / 4));
    return new dI(r[0], r[1], r[2], r[3], o, a);
  },
  dI = (function () {
    function A(e, t, r, n, i, o) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = o);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> sn]),
              (t = (t << mc) + (e & Cc)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[Mm + ((e - 55296) >> sn)]),
              (t = (t << mc) + (e & Cc)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = aI - sI + (e >> bB)),
              (t = this.index[t]),
              (t += (e >> sn) & uI),
              (t = this.index[t]),
              (t = (t << mc) + (e & Cc)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  Fp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  BI = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var is = 0; is < Fp.length; is++) BI[Fp.charCodeAt(is)] = is;
var gI =
    "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  Ep = 50,
  hI = 1,
  _m = 2,
  km = 3,
  pI = 4,
  wI = 5,
  Ip = 7,
  Pm = 8,
  xp = 9,
  vr = 10,
  Jf = 11,
  Hp = 12,
  Yf = 13,
  vI = 14,
  qi = 15,
  Zf = 16,
  os = 17,
  Vi = 18,
  mI = 19,
  Sp = 20,
  $f = 21,
  Gi = 22,
  Qc = 23,
  xn = 24,
  Oe = 25,
  Ao = 26,
  eo = 27,
  Hn = 28,
  CI = 29,
  qr = 30,
  QI = 31,
  as = 32,
  ss = 33,
  qf = 34,
  Ad = 35,
  ed = 36,
  Po = 37,
  td = 38,
  Ps = 39,
  Vs = 40,
  yc = 41,
  Vm = 42,
  yI = 43,
  UI = [9001, 65288],
  Gm = "!",
  fA = "×",
  ls = "÷",
  rd = fI(gI),
  Tt = [qr, ed],
  nd = [hI, _m, km, wI],
  jm = [vr, Pm],
  Lp = [eo, Ao],
  FI = nd.concat(jm),
  Tp = [td, Ps, Vs, qf, Ad],
  EI = [qi, Yf],
  II = function (A, e) {
    e === void 0 && (e = "strict");
    var t = [],
      r = [],
      n = [];
    return (
      A.forEach(function (i, o) {
        var a = rd.get(i);
        if (
          (a > Ep ? (n.push(!0), (a -= Ep)) : n.push(!1),
          ["normal", "auto", "loose"].indexOf(e) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(i) !== -1)
        )
          return r.push(o), t.push(Zf);
        if (a === pI || a === Jf) {
          if (o === 0) return r.push(o), t.push(qr);
          var s = t[o - 1];
          return FI.indexOf(s) === -1
            ? (r.push(r[o - 1]), t.push(s))
            : (r.push(o), t.push(qr));
        }
        if ((r.push(o), a === QI)) return t.push(e === "strict" ? $f : Po);
        if (a === Vm || a === CI) return t.push(qr);
        if (a === yI)
          return (i >= 131072 && i <= 196605) || (i >= 196608 && i <= 262141)
            ? t.push(Po)
            : t.push(qr);
        t.push(a);
      }),
      [r, t, n]
    );
  },
  Uc = function (A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
      for (var i = t; i <= r.length; ) {
        i++;
        var o = r[i];
        if (o === e) return !0;
        if (o !== vr) break;
      }
    if (n === vr)
      for (var i = t; i > 0; ) {
        i--;
        var a = r[i];
        if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a)
          for (var s = t; s <= r.length; ) {
            s++;
            var o = r[s];
            if (o === e) return !0;
            if (o !== vr) break;
          }
        if (a !== vr) break;
      }
    return !1;
  },
  Dp = function (A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === vr) t--;
      else return r;
    }
    return 0;
  },
  xI = function (A, e, t, r, n) {
    if (t[r] === 0) return fA;
    var i = r - 1;
    if (Array.isArray(n) && n[i] === !0) return fA;
    var o = i - 1,
      a = i + 1,
      s = e[i],
      l = o >= 0 ? e[o] : 0,
      u = e[a];
    if (s === _m && u === km) return fA;
    if (nd.indexOf(s) !== -1) return Gm;
    if (nd.indexOf(u) !== -1 || jm.indexOf(u) !== -1) return fA;
    if (Dp(i, e) === Pm) return ls;
    if (
      rd.get(A[i]) === Jf ||
      ((s === as || s === ss) && rd.get(A[a]) === Jf) ||
      s === Ip ||
      u === Ip ||
      s === xp ||
      ([vr, Yf, qi].indexOf(s) === -1 && u === xp) ||
      [os, Vi, mI, xn, Hn].indexOf(u) !== -1 ||
      Dp(i, e) === Gi ||
      Uc(Qc, Gi, i, e) ||
      Uc([os, Vi], $f, i, e) ||
      Uc(Hp, Hp, i, e)
    )
      return fA;
    if (s === vr) return ls;
    if (s === Qc || u === Qc) return fA;
    if (u === Zf || s === Zf) return ls;
    if (
      [Yf, qi, $f].indexOf(u) !== -1 ||
      s === vI ||
      (l === ed && EI.indexOf(s) !== -1) ||
      (s === Hn && u === ed) ||
      u === Sp ||
      (Tt.indexOf(u) !== -1 && s === Oe) ||
      (Tt.indexOf(s) !== -1 && u === Oe) ||
      (s === eo && [Po, as, ss].indexOf(u) !== -1) ||
      ([Po, as, ss].indexOf(s) !== -1 && u === Ao) ||
      (Tt.indexOf(s) !== -1 && Lp.indexOf(u) !== -1) ||
      (Lp.indexOf(s) !== -1 && Tt.indexOf(u) !== -1) ||
      ([eo, Ao].indexOf(s) !== -1 &&
        (u === Oe || ([Gi, qi].indexOf(u) !== -1 && e[a + 1] === Oe))) ||
      ([Gi, qi].indexOf(s) !== -1 && u === Oe) ||
      (s === Oe && [Oe, Hn, xn].indexOf(u) !== -1)
    )
      return fA;
    if ([Oe, Hn, xn, os, Vi].indexOf(u) !== -1)
      for (var c = i; c >= 0; ) {
        var f = e[c];
        if (f === Oe) return fA;
        if ([Hn, xn].indexOf(f) !== -1) c--;
        else break;
      }
    if ([eo, Ao].indexOf(u) !== -1)
      for (var c = [os, Vi].indexOf(s) !== -1 ? o : i; c >= 0; ) {
        var f = e[c];
        if (f === Oe) return fA;
        if ([Hn, xn].indexOf(f) !== -1) c--;
        else break;
      }
    if (
      (td === s && [td, Ps, qf, Ad].indexOf(u) !== -1) ||
      ([Ps, qf].indexOf(s) !== -1 && [Ps, Vs].indexOf(u) !== -1) ||
      ([Vs, Ad].indexOf(s) !== -1 && u === Vs) ||
      (Tp.indexOf(s) !== -1 && [Sp, Ao].indexOf(u) !== -1) ||
      (Tp.indexOf(u) !== -1 && s === eo) ||
      (Tt.indexOf(s) !== -1 && Tt.indexOf(u) !== -1) ||
      (s === xn && Tt.indexOf(u) !== -1) ||
      (Tt.concat(Oe).indexOf(s) !== -1 &&
        u === Gi &&
        UI.indexOf(A[a]) === -1) ||
      (Tt.concat(Oe).indexOf(u) !== -1 && s === Vi)
    )
      return fA;
    if (s === yc && u === yc) {
      for (var h = t[i], g = 1; h > 0 && (h--, e[h] === yc); ) g++;
      if (g % 2 !== 0) return fA;
    }
    return s === as && u === ss ? fA : ls;
  },
  HI = function (A, e) {
    e || (e = { lineBreak: "normal", wordBreak: "normal" });
    var t = II(A, e.lineBreak),
      r = t[0],
      n = t[1],
      i = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") &&
      (n = n.map(function (a) {
        return [Oe, qr, Vm].indexOf(a) !== -1 ? Po : a;
      }));
    var o =
      e.wordBreak === "keep-all"
        ? i.map(function (a, s) {
            return a && A[s] >= 19968 && A[s] <= 40959;
          })
        : void 0;
    return [r, n, o];
  },
  SI = (function () {
    function A(e, t, r, n) {
      (this.codePoints = e),
        (this.required = t === Gm),
        (this.start = r),
        (this.end = n);
    }
    return (
      (A.prototype.slice = function () {
        return WA.apply(void 0, this.codePoints.slice(this.start, this.end));
      }),
      A
    );
  })(),
  LI = function (A, e) {
    var t = gu(A),
      r = HI(t, e),
      n = r[0],
      i = r[1],
      o = r[2],
      a = t.length,
      s = 0,
      l = 0;
    return {
      next: function () {
        if (l >= a) return { done: !0, value: null };
        for (var u = fA; l < a && (u = xI(t, i, n, ++l, o)) === fA; );
        if (u !== fA || l === a) {
          var c = new SI(t, u, s, l);
          return (s = l), { value: c, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  TI = 1,
  DI = 2,
  fa = 4,
  bp = 8,
  El = 10,
  Op = 47,
  go = 92,
  bI = 9,
  OI = 32,
  us = 34,
  ji = 61,
  RI = 35,
  KI = 36,
  NI = 37,
  cs = 39,
  fs = 40,
  Wi = 41,
  MI = 95,
  Ie = 45,
  _I = 33,
  kI = 60,
  PI = 62,
  VI = 64,
  GI = 91,
  jI = 93,
  WI = 61,
  XI = 123,
  ds = 63,
  zI = 125,
  Rp = 124,
  JI = 126,
  YI = 128,
  Kp = 65533,
  Fc = 42,
  nn = 43,
  ZI = 44,
  $I = 58,
  qI = 59,
  Vo = 46,
  Ax = 0,
  ex = 8,
  tx = 11,
  rx = 14,
  nx = 31,
  ix = 127,
  ht = -1,
  Wm = 48,
  Xm = 97,
  zm = 101,
  ox = 102,
  ax = 117,
  sx = 122,
  Jm = 65,
  Ym = 69,
  Zm = 70,
  lx = 85,
  ux = 90,
  ge = function (A) {
    return A >= Wm && A <= 57;
  },
  cx = function (A) {
    return A >= 55296 && A <= 57343;
  },
  Sn = function (A) {
    return ge(A) || (A >= Jm && A <= Zm) || (A >= Xm && A <= ox);
  },
  fx = function (A) {
    return A >= Xm && A <= sx;
  },
  dx = function (A) {
    return A >= Jm && A <= ux;
  },
  Bx = function (A) {
    return fx(A) || dx(A);
  },
  gx = function (A) {
    return A >= YI;
  },
  Bs = function (A) {
    return A === El || A === bI || A === OI;
  },
  Il = function (A) {
    return Bx(A) || gx(A) || A === MI;
  },
  Np = function (A) {
    return Il(A) || ge(A) || A === Ie;
  },
  hx = function (A) {
    return (A >= Ax && A <= ex) || A === tx || (A >= rx && A <= nx) || A === ix;
  },
  dr = function (A, e) {
    return A !== go ? !1 : e !== El;
  },
  gs = function (A, e, t) {
    return A === Ie ? Il(e) || dr(e, t) : Il(A) ? !0 : !!(A === go && dr(A, e));
  },
  Ec = function (A, e, t) {
    return A === nn || A === Ie
      ? ge(e)
        ? !0
        : e === Vo && ge(t)
      : ge(A === Vo ? e : A);
  },
  px = function (A) {
    var e = 0,
      t = 1;
    (A[e] === nn || A[e] === Ie) && (A[e] === Ie && (t = -1), e++);
    for (var r = []; ge(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(WA.apply(void 0, r), 10) : 0;
    A[e] === Vo && e++;
    for (var i = []; ge(A[e]); ) i.push(A[e++]);
    var o = i.length,
      a = o ? parseInt(WA.apply(void 0, i), 10) : 0;
    (A[e] === Ym || A[e] === zm) && e++;
    var s = 1;
    (A[e] === nn || A[e] === Ie) && (A[e] === Ie && (s = -1), e++);
    for (var l = []; ge(A[e]); ) l.push(A[e++]);
    var u = l.length ? parseInt(WA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -o)) * Math.pow(10, s * u);
  },
  wx = { type: 2 },
  vx = { type: 3 },
  mx = { type: 4 },
  Cx = { type: 13 },
  Qx = { type: 8 },
  yx = { type: 21 },
  Ux = { type: 9 },
  Fx = { type: 10 },
  Ex = { type: 11 },
  Ix = { type: 12 },
  xx = { type: 14 },
  hs = { type: 23 },
  Hx = { type: 1 },
  Sx = { type: 25 },
  Lx = { type: 24 },
  Tx = { type: 26 },
  Dx = { type: 27 },
  bx = { type: 28 },
  Ox = { type: 29 },
  Rx = { type: 31 },
  id = { type: 32 },
  $m = (function () {
    function A() {
      this._value = [];
    }
    return (
      (A.prototype.write = function (e) {
        this._value = this._value.concat(gu(e));
      }),
      (A.prototype.read = function () {
        for (var e = [], t = this.consumeToken(); t !== id; )
          e.push(t), (t = this.consumeToken());
        return e;
      }),
      (A.prototype.consumeToken = function () {
        var e = this.consumeCodePoint();
        switch (e) {
          case us:
            return this.consumeStringToken(us);
          case RI:
            var t = this.peekCodePoint(0),
              r = this.peekCodePoint(1),
              n = this.peekCodePoint(2);
            if (Np(t) || dr(r, n)) {
              var i = gs(t, r, n) ? DI : TI,
                o = this.consumeName();
              return { type: 5, value: o, flags: i };
            }
            break;
          case KI:
            if (this.peekCodePoint(0) === ji)
              return this.consumeCodePoint(), Cx;
            break;
          case cs:
            return this.consumeStringToken(cs);
          case fs:
            return wx;
          case Wi:
            return vx;
          case Fc:
            if (this.peekCodePoint(0) === ji)
              return this.consumeCodePoint(), xx;
            break;
          case nn:
            if (Ec(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case ZI:
            return mx;
          case Ie:
            var a = e,
              s = this.peekCodePoint(0),
              l = this.peekCodePoint(1);
            if (Ec(a, s, l))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            if (gs(a, s, l))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            if (s === Ie && l === PI)
              return this.consumeCodePoint(), this.consumeCodePoint(), Lx;
            break;
          case Vo:
            if (Ec(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case Op:
            if (this.peekCodePoint(0) === Fc)
              for (this.consumeCodePoint(); ; ) {
                var u = this.consumeCodePoint();
                if (u === Fc && ((u = this.consumeCodePoint()), u === Op))
                  return this.consumeToken();
                if (u === ht) return this.consumeToken();
              }
            break;
          case $I:
            return Tx;
          case qI:
            return Dx;
          case kI:
            if (
              this.peekCodePoint(0) === _I &&
              this.peekCodePoint(1) === Ie &&
              this.peekCodePoint(2) === Ie
            )
              return this.consumeCodePoint(), this.consumeCodePoint(), Sx;
            break;
          case VI:
            var c = this.peekCodePoint(0),
              f = this.peekCodePoint(1),
              h = this.peekCodePoint(2);
            if (gs(c, f, h)) {
              var o = this.consumeName();
              return { type: 7, value: o };
            }
            break;
          case GI:
            return bx;
          case go:
            if (dr(e, this.peekCodePoint(0)))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            break;
          case jI:
            return Ox;
          case WI:
            if (this.peekCodePoint(0) === ji)
              return this.consumeCodePoint(), Qx;
            break;
          case XI:
            return Ex;
          case zI:
            return Ix;
          case ax:
          case lx:
            var g = this.peekCodePoint(0),
              p = this.peekCodePoint(1);
            return (
              g === nn &&
                (Sn(p) || p === ds) &&
                (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
              this.reconsumeCodePoint(e),
              this.consumeIdentLikeToken()
            );
          case Rp:
            if (this.peekCodePoint(0) === ji)
              return this.consumeCodePoint(), Ux;
            if (this.peekCodePoint(0) === Rp)
              return this.consumeCodePoint(), yx;
            break;
          case JI:
            if (this.peekCodePoint(0) === ji)
              return this.consumeCodePoint(), Fx;
            break;
          case ht:
            return id;
        }
        return Bs(e)
          ? (this.consumeWhiteSpace(), Rx)
          : ge(e)
          ? (this.reconsumeCodePoint(e), this.consumeNumericToken())
          : Il(e)
          ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken())
          : { type: 6, value: WA(e) };
      }),
      (A.prototype.consumeCodePoint = function () {
        var e = this._value.shift();
        return typeof e > "u" ? -1 : e;
      }),
      (A.prototype.reconsumeCodePoint = function (e) {
        this._value.unshift(e);
      }),
      (A.prototype.peekCodePoint = function (e) {
        return e >= this._value.length ? -1 : this._value[e];
      }),
      (A.prototype.consumeUnicodeRangeToken = function () {
        for (var e = [], t = this.consumeCodePoint(); Sn(t) && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint());
        for (var r = !1; t === ds && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint()), (r = !0);
        if (r) {
          var n = parseInt(
              WA.apply(
                void 0,
                e.map(function (s) {
                  return s === ds ? Wm : s;
                })
              ),
              16
            ),
            i = parseInt(
              WA.apply(
                void 0,
                e.map(function (s) {
                  return s === ds ? Zm : s;
                })
              ),
              16
            );
          return { type: 30, start: n, end: i };
        }
        var o = parseInt(WA.apply(void 0, e), 16);
        if (this.peekCodePoint(0) === Ie && Sn(this.peekCodePoint(1))) {
          this.consumeCodePoint(), (t = this.consumeCodePoint());
          for (var a = []; Sn(t) && a.length < 6; )
            a.push(t), (t = this.consumeCodePoint());
          var i = parseInt(WA.apply(void 0, a), 16);
          return { type: 30, start: o, end: i };
        } else return { type: 30, start: o, end: o };
      }),
      (A.prototype.consumeIdentLikeToken = function () {
        var e = this.consumeName();
        return e.toLowerCase() === "url" && this.peekCodePoint(0) === fs
          ? (this.consumeCodePoint(), this.consumeUrlToken())
          : this.peekCodePoint(0) === fs
          ? (this.consumeCodePoint(), { type: 19, value: e })
          : { type: 20, value: e };
      }),
      (A.prototype.consumeUrlToken = function () {
        var e = [];
        if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === ht))
          return { type: 22, value: "" };
        var t = this.peekCodePoint(0);
        if (t === cs || t === us) {
          var r = this.consumeStringToken(this.consumeCodePoint());
          return r.type === 0 &&
            (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === ht || this.peekCodePoint(0) === Wi)
            ? (this.consumeCodePoint(), { type: 22, value: r.value })
            : (this.consumeBadUrlRemnants(), hs);
        }
        for (;;) {
          var n = this.consumeCodePoint();
          if (n === ht || n === Wi)
            return { type: 22, value: WA.apply(void 0, e) };
          if (Bs(n))
            return (
              this.consumeWhiteSpace(),
              this.peekCodePoint(0) === ht || this.peekCodePoint(0) === Wi
                ? (this.consumeCodePoint(),
                  { type: 22, value: WA.apply(void 0, e) })
                : (this.consumeBadUrlRemnants(), hs)
            );
          if (n === us || n === cs || n === fs || hx(n))
            return this.consumeBadUrlRemnants(), hs;
          if (n === go)
            if (dr(n, this.peekCodePoint(0)))
              e.push(this.consumeEscapedCodePoint());
            else return this.consumeBadUrlRemnants(), hs;
          else e.push(n);
        }
      }),
      (A.prototype.consumeWhiteSpace = function () {
        for (; Bs(this.peekCodePoint(0)); ) this.consumeCodePoint();
      }),
      (A.prototype.consumeBadUrlRemnants = function () {
        for (;;) {
          var e = this.consumeCodePoint();
          if (e === Wi || e === ht) return;
          dr(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
        }
      }),
      (A.prototype.consumeStringSlice = function (e) {
        for (var t = 5e4, r = ""; e > 0; ) {
          var n = Math.min(t, e);
          (r += WA.apply(void 0, this._value.splice(0, n))), (e -= n);
        }
        return this._value.shift(), r;
      }),
      (A.prototype.consumeStringToken = function (e) {
        var t = "",
          r = 0;
        do {
          var n = this._value[r];
          if (n === ht || n === void 0 || n === e)
            return (t += this.consumeStringSlice(r)), { type: 0, value: t };
          if (n === El) return this._value.splice(0, r), Hx;
          if (n === go) {
            var i = this._value[r + 1];
            i !== ht &&
              i !== void 0 &&
              (i === El
                ? ((t += this.consumeStringSlice(r)),
                  (r = -1),
                  this._value.shift())
                : dr(n, i) &&
                  ((t += this.consumeStringSlice(r)),
                  (t += WA(this.consumeEscapedCodePoint())),
                  (r = -1)));
          }
          r++;
        } while (!0);
      }),
      (A.prototype.consumeNumber = function () {
        var e = [],
          t = fa,
          r = this.peekCodePoint(0);
        for (
          (r === nn || r === Ie) && e.push(this.consumeCodePoint());
          ge(this.peekCodePoint(0));

        )
          e.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === Vo && ge(n))
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = bp;
            ge(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        (r = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
        var i = this.peekCodePoint(2);
        if (
          (r === Ym || r === zm) &&
          (((n === nn || n === Ie) && ge(i)) || ge(n))
        )
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = bp;
            ge(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        return [px(e), t];
      }),
      (A.prototype.consumeNumericToken = function () {
        var e = this.consumeNumber(),
          t = e[0],
          r = e[1],
          n = this.peekCodePoint(0),
          i = this.peekCodePoint(1),
          o = this.peekCodePoint(2);
        if (gs(n, i, o)) {
          var a = this.consumeName();
          return { type: 15, number: t, flags: r, unit: a };
        }
        return n === NI
          ? (this.consumeCodePoint(), { type: 16, number: t, flags: r })
          : { type: 17, number: t, flags: r };
      }),
      (A.prototype.consumeEscapedCodePoint = function () {
        var e = this.consumeCodePoint();
        if (Sn(e)) {
          for (var t = WA(e); Sn(this.peekCodePoint(0)) && t.length < 6; )
            t += WA(this.consumeCodePoint());
          Bs(this.peekCodePoint(0)) && this.consumeCodePoint();
          var r = parseInt(t, 16);
          return r === 0 || cx(r) || r > 1114111 ? Kp : r;
        }
        return e === ht ? Kp : e;
      }),
      (A.prototype.consumeName = function () {
        for (var e = ""; ; ) {
          var t = this.consumeCodePoint();
          if (Np(t)) e += WA(t);
          else if (dr(t, this.peekCodePoint(0)))
            e += WA(this.consumeEscapedCodePoint());
          else return this.reconsumeCodePoint(t), e;
        }
      }),
      A
    );
  })(),
  qm = (function () {
    function A(e) {
      this._tokens = e;
    }
    return (
      (A.create = function (e) {
        var t = new $m();
        return t.write(e), new A(t.read());
      }),
      (A.parseValue = function (e) {
        return A.create(e).parseComponentValue();
      }),
      (A.parseValues = function (e) {
        return A.create(e).parseComponentValues();
      }),
      (A.prototype.parseComponentValue = function () {
        for (var e = this.consumeToken(); e.type === 31; )
          e = this.consumeToken();
        if (e.type === 32)
          throw new SyntaxError(
            "Error parsing CSS component value, unexpected EOF"
          );
        this.reconsumeToken(e);
        var t = this.consumeComponentValue();
        do e = this.consumeToken();
        while (e.type === 31);
        if (e.type === 32) return t;
        throw new SyntaxError(
          "Error parsing CSS component value, multiple values found when expecting only one"
        );
      }),
      (A.prototype.parseComponentValues = function () {
        for (var e = []; ; ) {
          var t = this.consumeComponentValue();
          if (t.type === 32) return e;
          e.push(t), e.push();
        }
      }),
      (A.prototype.consumeComponentValue = function () {
        var e = this.consumeToken();
        switch (e.type) {
          case 11:
          case 28:
          case 2:
            return this.consumeSimpleBlock(e.type);
          case 19:
            return this.consumeFunction(e);
        }
        return e;
      }),
      (A.prototype.consumeSimpleBlock = function (e) {
        for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
          if (r.type === 32 || Nx(r, e)) return t;
          this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue()),
            (r = this.consumeToken());
        }
      }),
      (A.prototype.consumeFunction = function (e) {
        for (var t = { name: e.value, values: [], type: 18 }; ; ) {
          var r = this.consumeToken();
          if (r.type === 32 || r.type === 3) return t;
          this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
        }
      }),
      (A.prototype.consumeToken = function () {
        var e = this._tokens.shift();
        return typeof e > "u" ? id : e;
      }),
      (A.prototype.reconsumeToken = function (e) {
        this._tokens.unshift(e);
      }),
      A
    );
  })(),
  da = function (A) {
    return A.type === 15;
  },
  Ei = function (A) {
    return A.type === 17;
  },
  CA = function (A) {
    return A.type === 20;
  },
  Kx = function (A) {
    return A.type === 0;
  },
  od = function (A, e) {
    return CA(A) && A.value === e;
  },
  AC = function (A) {
    return A.type !== 31;
  },
  hi = function (A) {
    return A.type !== 31 && A.type !== 4;
  },
  Ft = function (A) {
    var e = [],
      t = [];
    return (
      A.forEach(function (r) {
        if (r.type === 4) {
          if (t.length === 0)
            throw new Error("Error parsing function args, zero tokens for arg");
          e.push(t), (t = []);
          return;
        }
        r.type !== 31 && t.push(r);
      }),
      t.length && e.push(t),
      e
    );
  },
  Nx = function (A, e) {
    return (e === 11 && A.type === 12) || (e === 28 && A.type === 29)
      ? !0
      : e === 2 && A.type === 3;
  },
  Or = function (A) {
    return A.type === 17 || A.type === 15;
  },
  ZA = function (A) {
    return A.type === 16 || Or(A);
  },
  eC = function (A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]];
  },
  le = { type: 17, number: 0, flags: fa },
  OB = { type: 16, number: 50, flags: fa },
  mr = { type: 16, number: 100, flags: fa },
  to = function (A, e, t) {
    var r = A[0],
      n = A[1];
    return [QA(r, e), QA(typeof n < "u" ? n : r, t)];
  },
  QA = function (A, e) {
    if (A.type === 16) return (A.number / 100) * e;
    if (da(A))
      switch (A.unit) {
        case "rem":
        case "em":
          return 16 * A.number;
        case "px":
        default:
          return A.number;
      }
    return A.number;
  },
  tC = "deg",
  rC = "grad",
  nC = "rad",
  iC = "turn",
  hu = {
    name: "angle",
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit) {
          case tC:
            return (Math.PI * e.number) / 180;
          case rC:
            return (Math.PI / 200) * e.number;
          case nC:
            return e.number;
          case iC:
            return Math.PI * 2 * e.number;
        }
      throw new Error("Unsupported angle type");
    },
  },
  oC = function (A) {
    return (
      A.type === 15 &&
      (A.unit === tC || A.unit === rC || A.unit === nC || A.unit === iC)
    );
  },
  aC = function (A) {
    var e = A.filter(CA)
      .map(function (t) {
        return t.value;
      })
      .join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [le, le];
      case "to top":
      case "bottom":
        return Je(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [le, mr];
      case "to right":
      case "left":
        return Je(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [mr, mr];
      case "to bottom":
      case "top":
        return Je(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [mr, le];
      case "to left":
      case "right":
        return Je(270);
    }
    return 0;
  },
  Je = function (A) {
    return (Math.PI * A) / 180;
  },
  Lr = {
    name: "color",
    parse: function (A, e) {
      if (e.type === 18) {
        var t = Mx[e.name];
        if (typeof t > "u")
          throw new Error(
            'Attempting to parse an unsupported color function "' + e.name + '"'
          );
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            i = e.value.substring(2, 3);
          return Cr(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            1
          );
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            i = e.value.substring(2, 3),
            o = e.value.substring(3, 4);
          return Cr(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            parseInt(o + o, 16) / 255
          );
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            i = e.value.substring(4, 6);
          return Cr(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            i = e.value.substring(4, 6),
            o = e.value.substring(6, 8);
          return Cr(
            parseInt(r, 16),
            parseInt(n, 16),
            parseInt(i, 16),
            parseInt(o, 16) / 255
          );
        }
      }
      if (e.type === 20) {
        var a = Vt[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return Vt.TRANSPARENT;
    },
  },
  Tr = function (A) {
    return (255 & A) === 0;
  },
  ne = function (A) {
    var e = 255 & A,
      t = 255 & (A >> 8),
      r = 255 & (A >> 16),
      n = 255 & (A >> 24);
    return e < 255
      ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")"
      : "rgb(" + n + "," + r + "," + t + ")";
  },
  Cr = function (A, e, t, r) {
    return (
      ((A << 24) | (e << 16) | (t << 8) | (Math.round(r * 255) << 0)) >>> 0
    );
  },
  Mp = function (A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? (A.number / 100) * t : Math.round((A.number / 100) * t);
    }
    return 0;
  },
  _p = function (A, e) {
    var t = e.filter(hi);
    if (t.length === 3) {
      var r = t.map(Mp),
        n = r[0],
        i = r[1],
        o = r[2];
      return Cr(n, i, o, 1);
    }
    if (t.length === 4) {
      var a = t.map(Mp),
        n = a[0],
        i = a[1],
        o = a[2],
        s = a[3];
      return Cr(n, i, o, s);
    }
    return 0;
  };
function Ic(A, e, t) {
  return (
    t < 0 && (t += 1),
    t >= 1 && (t -= 1),
    t < 1 / 6
      ? (e - A) * t * 6 + A
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? (e - A) * 6 * (2 / 3 - t) + A
      : A
  );
}
var kp = function (A, e) {
    var t = e.filter(hi),
      r = t[0],
      n = t[1],
      i = t[2],
      o = t[3],
      a = (r.type === 17 ? Je(r.number) : hu.parse(A, r)) / (Math.PI * 2),
      s = ZA(n) ? n.number / 100 : 0,
      l = ZA(i) ? i.number / 100 : 0,
      u = typeof o < "u" && ZA(o) ? QA(o, 1) : 1;
    if (s === 0) return Cr(l * 255, l * 255, l * 255, 1);
    var c = l <= 0.5 ? l * (s + 1) : l + s - l * s,
      f = l * 2 - c,
      h = Ic(f, c, a + 1 / 3),
      g = Ic(f, c, a),
      p = Ic(f, c, a - 1 / 3);
    return Cr(h * 255, g * 255, p * 255, u);
  },
  Mx = { hsl: kp, hsla: kp, rgb: _p, rgba: _p },
  ho = function (A, e) {
    return Lr.parse(A, qm.create(e).parseComponentValue());
  },
  Vt = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  _x = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (CA(t))
          switch (t.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  kx = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  pu = function (A, e) {
    var t = Lr.parse(A, e[0]),
      r = e[1];
    return r && ZA(r) ? { color: t, stop: r } : { color: t, stop: null };
  },
  Pp = function (A, e) {
    var t = A[0],
      r = A[A.length - 1];
    t.stop === null && (t.stop = le), r.stop === null && (r.stop = mr);
    for (var n = [], i = 0, o = 0; o < A.length; o++) {
      var a = A[o].stop;
      if (a !== null) {
        var s = QA(a, e);
        s > i ? n.push(s) : n.push(i), (i = s);
      } else n.push(null);
    }
    for (var l = null, o = 0; o < n.length; o++) {
      var u = n[o];
      if (u === null) l === null && (l = o);
      else if (l !== null) {
        for (
          var c = o - l, f = n[l - 1], h = (u - f) / (c + 1), g = 1;
          g <= c;
          g++
        )
          n[l + g - 1] = h * g;
        l = null;
      }
    }
    return A.map(function (p, F) {
      var B = p.color;
      return { color: B, stop: Math.max(Math.min(1, n[F] / e), 0) };
    });
  },
  Px = function (A, e, t) {
    var r = e / 2,
      n = t / 2,
      i = QA(A[0], e) - r,
      o = n - QA(A[1], t);
    return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
  },
  Vx = function (A, e, t) {
    var r = typeof A == "number" ? A : Px(A, e, t),
      n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
      i = e / 2,
      o = t / 2,
      a = n / 2,
      s = Math.sin(r - Math.PI / 2) * a,
      l = Math.cos(r - Math.PI / 2) * a;
    return [n, i - l, i + l, o - s, o + s];
  },
  rt = function (A, e) {
    return Math.sqrt(A * A + e * e);
  },
  Vp = function (A, e, t, r, n) {
    var i = [
      [0, 0],
      [0, e],
      [A, 0],
      [A, e],
    ];
    return i.reduce(
      function (o, a) {
        var s = a[0],
          l = a[1],
          u = rt(t - s, r - l);
        return (n ? u < o.optimumDistance : u > o.optimumDistance)
          ? { optimumCorner: a, optimumDistance: u }
          : o;
      },
      { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }
    ).optimumCorner;
  },
  Gx = function (A, e, t, r, n) {
    var i = 0,
      o = 0;
    switch (A.size) {
      case 0:
        A.shape === 0
          ? (i = o =
              Math.min(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((i = Math.min(Math.abs(e), Math.abs(e - r))),
            (o = Math.min(Math.abs(t), Math.abs(t - n))));
        break;
      case 2:
        if (A.shape === 0)
          i = o = Math.min(
            rt(e, t),
            rt(e, t - n),
            rt(e - r, t),
            rt(e - r, t - n)
          );
        else if (A.shape === 1) {
          var a =
              Math.min(Math.abs(t), Math.abs(t - n)) /
              Math.min(Math.abs(e), Math.abs(e - r)),
            s = Vp(r, n, e, t, !0),
            l = s[0],
            u = s[1];
          (i = rt(l - e, (u - t) / a)), (o = a * i);
        }
        break;
      case 1:
        A.shape === 0
          ? (i = o =
              Math.max(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((i = Math.max(Math.abs(e), Math.abs(e - r))),
            (o = Math.max(Math.abs(t), Math.abs(t - n))));
        break;
      case 3:
        if (A.shape === 0)
          i = o = Math.max(
            rt(e, t),
            rt(e, t - n),
            rt(e - r, t),
            rt(e - r, t - n)
          );
        else if (A.shape === 1) {
          var a =
              Math.max(Math.abs(t), Math.abs(t - n)) /
              Math.max(Math.abs(e), Math.abs(e - r)),
            c = Vp(r, n, e, t, !1),
            l = c[0],
            u = c[1];
          (i = rt(l - e, (u - t) / a)), (o = a * i);
        }
        break;
    }
    return (
      Array.isArray(A.size) &&
        ((i = QA(A.size[0], r)),
        (o = A.size.length === 2 ? QA(A.size[1], n) : i)),
      [i, o]
    );
  },
  jx = function (A, e) {
    var t = Je(180),
      r = [];
    return (
      Ft(e).forEach(function (n, i) {
        if (i === 0) {
          var o = n[0];
          if (o.type === 20 && o.value === "to") {
            t = aC(n);
            return;
          } else if (oC(o)) {
            t = hu.parse(A, o);
            return;
          }
        }
        var a = pu(A, n);
        r.push(a);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  ps = function (A, e) {
    var t = Je(180),
      r = [];
    return (
      Ft(e).forEach(function (n, i) {
        if (i === 0) {
          var o = n[0];
          if (
            o.type === 20 &&
            ["top", "left", "right", "bottom"].indexOf(o.value) !== -1
          ) {
            t = aC(n);
            return;
          } else if (oC(o)) {
            t = (hu.parse(A, o) + Je(270)) % Je(360);
            return;
          }
        }
        var a = pu(A, n);
        r.push(a);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  Wx = function (A, e) {
    var t = Je(180),
      r = [],
      n = 1,
      i = 0,
      o = 3,
      a = [];
    return (
      Ft(e).forEach(function (s, l) {
        var u = s[0];
        if (l === 0) {
          if (CA(u) && u.value === "linear") {
            n = 1;
            return;
          } else if (CA(u) && u.value === "radial") {
            n = 2;
            return;
          }
        }
        if (u.type === 18) {
          if (u.name === "from") {
            var c = Lr.parse(A, u.values[0]);
            r.push({ stop: le, color: c });
          } else if (u.name === "to") {
            var c = Lr.parse(A, u.values[0]);
            r.push({ stop: mr, color: c });
          } else if (u.name === "color-stop") {
            var f = u.values.filter(hi);
            if (f.length === 2) {
              var c = Lr.parse(A, f[1]),
                h = f[0];
              Ei(h) &&
                r.push({
                  stop: { type: 16, number: h.number * 100, flags: h.flags },
                  color: c,
                });
            }
          }
        }
      }),
      n === 1
        ? { angle: (t + Je(180)) % Je(360), stops: r, type: n }
        : { size: o, shape: i, stops: r, position: a, type: n }
    );
  },
  sC = "closest-side",
  lC = "farthest-side",
  uC = "closest-corner",
  cC = "farthest-corner",
  fC = "circle",
  dC = "ellipse",
  BC = "cover",
  gC = "contain",
  Xx = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      i = [];
    return (
      Ft(e).forEach(function (o, a) {
        var s = !0;
        if (a === 0) {
          var l = !1;
          s = o.reduce(function (c, f) {
            if (l)
              if (CA(f))
                switch (f.value) {
                  case "center":
                    return i.push(OB), c;
                  case "top":
                  case "left":
                    return i.push(le), c;
                  case "right":
                  case "bottom":
                    return i.push(mr), c;
                }
              else (ZA(f) || Or(f)) && i.push(f);
            else if (CA(f))
              switch (f.value) {
                case fC:
                  return (t = 0), !1;
                case dC:
                  return (t = 1), !1;
                case "at":
                  return (l = !0), !1;
                case sC:
                  return (r = 0), !1;
                case BC:
                case lC:
                  return (r = 1), !1;
                case gC:
                case uC:
                  return (r = 2), !1;
                case cC:
                  return (r = 3), !1;
              }
            else if (Or(f) || ZA(f))
              return Array.isArray(r) || (r = []), r.push(f), !1;
            return c;
          }, s);
        }
        if (s) {
          var u = pu(A, o);
          n.push(u);
        }
      }),
      { size: r, shape: t, stops: n, position: i, type: 2 }
    );
  },
  ws = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      i = [];
    return (
      Ft(e).forEach(function (o, a) {
        var s = !0;
        if (
          (a === 0
            ? (s = o.reduce(function (u, c) {
                if (CA(c))
                  switch (c.value) {
                    case "center":
                      return i.push(OB), !1;
                    case "top":
                    case "left":
                      return i.push(le), !1;
                    case "right":
                    case "bottom":
                      return i.push(mr), !1;
                  }
                else if (ZA(c) || Or(c)) return i.push(c), !1;
                return u;
              }, s))
            : a === 1 &&
              (s = o.reduce(function (u, c) {
                if (CA(c))
                  switch (c.value) {
                    case fC:
                      return (t = 0), !1;
                    case dC:
                      return (t = 1), !1;
                    case gC:
                    case sC:
                      return (r = 0), !1;
                    case lC:
                      return (r = 1), !1;
                    case uC:
                      return (r = 2), !1;
                    case BC:
                    case cC:
                      return (r = 3), !1;
                  }
                else if (Or(c) || ZA(c))
                  return Array.isArray(r) || (r = []), r.push(c), !1;
                return u;
              }, s)),
          s)
        ) {
          var l = pu(A, o);
          n.push(l);
        }
      }),
      { size: r, shape: t, stops: n, position: i, type: 2 }
    );
  },
  zx = function (A) {
    return A.type === 1;
  },
  Jx = function (A) {
    return A.type === 2;
  },
  RB = {
    name: "image",
    parse: function (A, e) {
      if (e.type === 22) {
        var t = { url: e.value, type: 0 };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = hC[e.name];
        if (typeof r > "u")
          throw new Error(
            'Attempting to parse an unsupported image function "' + e.name + '"'
          );
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    },
  };
function Yx(A) {
  return (
    !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!hC[A.name])
  );
}
var hC = {
    "linear-gradient": jx,
    "-moz-linear-gradient": ps,
    "-ms-linear-gradient": ps,
    "-o-linear-gradient": ps,
    "-webkit-linear-gradient": ps,
    "radial-gradient": Xx,
    "-moz-radial-gradient": ws,
    "-ms-radial-gradient": ws,
    "-o-radial-gradient": ws,
    "-webkit-radial-gradient": ws,
    "-webkit-gradient": Wx,
  },
  Zx = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none"
        ? []
        : e
            .filter(function (r) {
              return hi(r) && Yx(r);
            })
            .map(function (r) {
              return RB.parse(A, r);
            });
    },
  },
  $x = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (CA(t))
          switch (t.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  qx = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return Ft(e)
        .map(function (t) {
          return t.filter(ZA);
        })
        .map(eC);
    },
  },
  AH = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return Ft(e)
        .map(function (t) {
          return t
            .filter(CA)
            .map(function (r) {
              return r.value;
            })
            .join(" ");
        })
        .map(eH);
    },
  },
  eH = function (A) {
    switch (A) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  ii;
(function (A) {
  (A.AUTO = "auto"), (A.CONTAIN = "contain"), (A.COVER = "cover");
})(ii || (ii = {}));
var tH = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return Ft(e).map(function (t) {
        return t.filter(rH);
      });
    },
  },
  rH = function (A) {
    return CA(A) || ZA(A);
  },
  wu = function (A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    };
  },
  nH = wu("top"),
  iH = wu("right"),
  oH = wu("bottom"),
  aH = wu("left"),
  vu = function (A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (e, t) {
        return eC(t.filter(ZA));
      },
    };
  },
  sH = vu("top-left"),
  lH = vu("top-right"),
  uH = vu("bottom-right"),
  cH = vu("bottom-left"),
  mu = function (A) {
    return {
      name: "border-" + A + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (e, t) {
        switch (t) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      },
    };
  },
  fH = mu("top"),
  dH = mu("right"),
  BH = mu("bottom"),
  gH = mu("left"),
  Cu = function (A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (e, t) {
        return da(t) ? t.number : 0;
      },
    };
  },
  hH = Cu("top"),
  pH = Cu("right"),
  wH = Cu("bottom"),
  vH = Cu("left"),
  mH = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  CH = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    },
  },
  QH = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(CA).reduce(function (t, r) {
        return t | yH(r.value);
      }, 0);
    },
  },
  yH = function (A) {
    switch (A) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  UH = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    },
  },
  FH = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      return e.type === 20 && e.value === "normal"
        ? 0
        : e.type === 17 || e.type === 15
        ? e.number
        : 0;
    },
  },
  xl;
(function (A) {
  (A.NORMAL = "normal"), (A.STRICT = "strict");
})(xl || (xl = {}));
var EH = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "strict":
          return xl.STRICT;
        case "normal":
        default:
          return xl.NORMAL;
      }
    },
  },
  IH = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
  Gp = function (A, e) {
    return CA(A) && A.value === "normal"
      ? 1.2 * e
      : A.type === 17
      ? e * A.number
      : ZA(A)
      ? QA(A, e)
      : e;
  },
  xH = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return e.type === 20 && e.value === "none" ? null : RB.parse(A, e);
    },
  },
  HH = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    },
  },
  ad = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    },
  },
  Qu = function (A) {
    return { name: "margin-" + A, initialValue: "0", prefix: !1, type: 4 };
  },
  SH = Qu("top"),
  LH = Qu("right"),
  TH = Qu("bottom"),
  DH = Qu("left"),
  bH = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(CA).map(function (t) {
        switch (t.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    },
  },
  OH = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  yu = function (A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage",
    };
  },
  RH = yu("top"),
  KH = yu("right"),
  NH = yu("bottom"),
  MH = yu("left"),
  _H = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    },
  },
  kH = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    },
  },
  PH = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && od(e[0], "none")
        ? []
        : Ft(e).map(function (t) {
            for (
              var r = {
                  color: Vt.TRANSPARENT,
                  offsetX: le,
                  offsetY: le,
                  blur: le,
                },
                n = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i];
              Or(o)
                ? (n === 0
                    ? (r.offsetX = o)
                    : n === 1
                    ? (r.offsetY = o)
                    : (r.blur = o),
                  n++)
                : (r.color = Lr.parse(A, o));
            }
            return r;
          });
    },
  },
  VH = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    },
  },
  GH = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = XH[e.name];
        if (typeof t > "u")
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              e.name +
              '"'
          );
        return t(e.values);
      }
      return null;
    },
  },
  jH = function (A) {
    var e = A.filter(function (t) {
      return t.type === 17;
    }).map(function (t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  },
  WH = function (A) {
    var e = A.filter(function (s) {
        return s.type === 17;
      }).map(function (s) {
        return s.number;
      }),
      t = e[0],
      r = e[1];
    e[2], e[3];
    var n = e[4],
      i = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var o = e[12],
      a = e[13];
    return e[14], e[15], e.length === 16 ? [t, r, n, i, o, a] : null;
  },
  XH = { matrix: jH, matrix3d: WH },
  jp = { type: 16, number: 50, flags: fa },
  zH = [jp, jp],
  JH = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      var t = e.filter(ZA);
      return t.length !== 2 ? zH : [t[0], t[1]];
    },
  },
  YH = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    },
  },
  po;
(function (A) {
  (A.NORMAL = "normal"), (A.BREAK_ALL = "break-all"), (A.KEEP_ALL = "keep-all");
})(po || (po = {}));
var ZH = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-all":
          return po.BREAK_ALL;
        case "keep-all":
          return po.KEEP_ALL;
        case "normal":
        default:
          return po.NORMAL;
      }
    },
  },
  $H = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20) return { auto: !0, order: 0 };
      if (Ei(e)) return { auto: !1, order: e.number };
      throw new Error("Invalid z-index number parsed");
    },
  },
  pC = {
    name: "time",
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit.toLowerCase()) {
          case "s":
            return 1e3 * e.number;
          case "ms":
            return e.number;
        }
      throw new Error("Unsupported time type");
    },
  },
  qH = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return Ei(e) ? e.number : 1;
    },
  },
  AS = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  eS = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e
        .filter(CA)
        .map(function (t) {
          switch (t.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        })
        .filter(function (t) {
          return t !== 0;
        });
    },
  },
  tS = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [],
        r = [];
      return (
        e.forEach(function (n) {
          switch (n.type) {
            case 20:
            case 0:
              t.push(n.value);
              break;
            case 17:
              t.push(n.number.toString());
              break;
            case 4:
              r.push(t.join(" ")), (t.length = 0);
              break;
          }
        }),
        t.length && r.push(t.join(" ")),
        r.map(function (n) {
          return n.indexOf(" ") === -1 ? n : "'" + n + "'";
        })
      );
    },
  },
  rS = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length",
  },
  nS = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      if (Ei(e)) return e.number;
      if (CA(e))
        switch (e.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      return 400;
    },
  },
  iS = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.filter(CA).map(function (t) {
        return t.value;
      });
    },
  },
  oS = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  ee = function (A, e) {
    return (A & e) !== 0;
  },
  aS = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    },
  },
  sS = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(AC), i = 0; i < n.length; i++) {
        var o = n[i],
          a = n[i + 1];
        if (o.type === 20) {
          var s = a && Ei(a) ? a.number : 1;
          r.push({ counter: o.value, increment: s });
        }
      }
      return r;
    },
  },
  lS = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(AC), n = 0; n < r.length; n++) {
        var i = r[n],
          o = r[n + 1];
        if (CA(i) && i.value !== "none") {
          var a = o && Ei(o) ? o.number : 0;
          t.push({ counter: i.value, reset: a });
        }
      }
      return t;
    },
  },
  uS = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(da).map(function (t) {
        return pC.parse(A, t);
      });
    },
  },
  cS = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [],
        n = e.filter(Kx);
      if (n.length % 2 !== 0) return null;
      for (var i = 0; i < n.length; i += 2) {
        var o = n[i].value,
          a = n[i + 1].value;
        r.push({ open: o, close: a });
      }
      return r;
    },
  },
  Wp = function (A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? (t ? r.open : r.close) : "";
  },
  fS = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && od(e[0], "none")
        ? []
        : Ft(e).map(function (t) {
            for (
              var r = {
                  color: 255,
                  offsetX: le,
                  offsetY: le,
                  blur: le,
                  spread: le,
                  inset: !1,
                },
                n = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i];
              od(o, "inset")
                ? (r.inset = !0)
                : Or(o)
                ? (n === 0
                    ? (r.offsetX = o)
                    : n === 1
                    ? (r.offsetY = o)
                    : n === 2
                    ? (r.blur = o)
                    : (r.spread = o),
                  n++)
                : (r.color = Lr.parse(A, o));
            }
            return r;
          });
    },
  },
  dS = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [0, 1, 2],
        r = [];
      return (
        e.filter(CA).forEach(function (n) {
          switch (n.value) {
            case "stroke":
              r.push(1);
              break;
            case "fill":
              r.push(0);
              break;
            case "markers":
              r.push(2);
              break;
          }
        }),
        t.forEach(function (n) {
          r.indexOf(n) === -1 && r.push(n);
        }),
        r
      );
    },
  },
  BS = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color",
  },
  gS = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return da(e) ? e.number : 0;
    },
  },
  hS = (function () {
    function A(e, t) {
      var r, n;
      (this.animationDuration = W(e, uS, t.animationDuration)),
        (this.backgroundClip = W(e, _x, t.backgroundClip)),
        (this.backgroundColor = W(e, kx, t.backgroundColor)),
        (this.backgroundImage = W(e, Zx, t.backgroundImage)),
        (this.backgroundOrigin = W(e, $x, t.backgroundOrigin)),
        (this.backgroundPosition = W(e, qx, t.backgroundPosition)),
        (this.backgroundRepeat = W(e, AH, t.backgroundRepeat)),
        (this.backgroundSize = W(e, tH, t.backgroundSize)),
        (this.borderTopColor = W(e, nH, t.borderTopColor)),
        (this.borderRightColor = W(e, iH, t.borderRightColor)),
        (this.borderBottomColor = W(e, oH, t.borderBottomColor)),
        (this.borderLeftColor = W(e, aH, t.borderLeftColor)),
        (this.borderTopLeftRadius = W(e, sH, t.borderTopLeftRadius)),
        (this.borderTopRightRadius = W(e, lH, t.borderTopRightRadius)),
        (this.borderBottomRightRadius = W(e, uH, t.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = W(e, cH, t.borderBottomLeftRadius)),
        (this.borderTopStyle = W(e, fH, t.borderTopStyle)),
        (this.borderRightStyle = W(e, dH, t.borderRightStyle)),
        (this.borderBottomStyle = W(e, BH, t.borderBottomStyle)),
        (this.borderLeftStyle = W(e, gH, t.borderLeftStyle)),
        (this.borderTopWidth = W(e, hH, t.borderTopWidth)),
        (this.borderRightWidth = W(e, pH, t.borderRightWidth)),
        (this.borderBottomWidth = W(e, wH, t.borderBottomWidth)),
        (this.borderLeftWidth = W(e, vH, t.borderLeftWidth)),
        (this.boxShadow = W(e, fS, t.boxShadow)),
        (this.color = W(e, mH, t.color)),
        (this.direction = W(e, CH, t.direction)),
        (this.display = W(e, QH, t.display)),
        (this.float = W(e, UH, t.cssFloat)),
        (this.fontFamily = W(e, tS, t.fontFamily)),
        (this.fontSize = W(e, rS, t.fontSize)),
        (this.fontStyle = W(e, oS, t.fontStyle)),
        (this.fontVariant = W(e, iS, t.fontVariant)),
        (this.fontWeight = W(e, nS, t.fontWeight)),
        (this.letterSpacing = W(e, FH, t.letterSpacing)),
        (this.lineBreak = W(e, EH, t.lineBreak)),
        (this.lineHeight = W(e, IH, t.lineHeight)),
        (this.listStyleImage = W(e, xH, t.listStyleImage)),
        (this.listStylePosition = W(e, HH, t.listStylePosition)),
        (this.listStyleType = W(e, ad, t.listStyleType)),
        (this.marginTop = W(e, SH, t.marginTop)),
        (this.marginRight = W(e, LH, t.marginRight)),
        (this.marginBottom = W(e, TH, t.marginBottom)),
        (this.marginLeft = W(e, DH, t.marginLeft)),
        (this.opacity = W(e, qH, t.opacity));
      var i = W(e, bH, t.overflow);
      (this.overflowX = i[0]),
        (this.overflowY = i[i.length > 1 ? 1 : 0]),
        (this.overflowWrap = W(e, OH, t.overflowWrap)),
        (this.paddingTop = W(e, RH, t.paddingTop)),
        (this.paddingRight = W(e, KH, t.paddingRight)),
        (this.paddingBottom = W(e, NH, t.paddingBottom)),
        (this.paddingLeft = W(e, MH, t.paddingLeft)),
        (this.paintOrder = W(e, dS, t.paintOrder)),
        (this.position = W(e, kH, t.position)),
        (this.textAlign = W(e, _H, t.textAlign)),
        (this.textDecorationColor = W(
          e,
          AS,
          (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color
        )),
        (this.textDecorationLine = W(
          e,
          eS,
          (n = t.textDecorationLine) !== null && n !== void 0
            ? n
            : t.textDecoration
        )),
        (this.textShadow = W(e, PH, t.textShadow)),
        (this.textTransform = W(e, VH, t.textTransform)),
        (this.transform = W(e, GH, t.transform)),
        (this.transformOrigin = W(e, JH, t.transformOrigin)),
        (this.visibility = W(e, YH, t.visibility)),
        (this.webkitTextStrokeColor = W(e, BS, t.webkitTextStrokeColor)),
        (this.webkitTextStrokeWidth = W(e, gS, t.webkitTextStrokeWidth)),
        (this.wordBreak = W(e, ZH, t.wordBreak)),
        (this.zIndex = W(e, $H, t.zIndex));
    }
    return (
      (A.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0;
      }),
      (A.prototype.isTransparent = function () {
        return Tr(this.backgroundColor);
      }),
      (A.prototype.isTransformed = function () {
        return this.transform !== null;
      }),
      (A.prototype.isPositioned = function () {
        return this.position !== 0;
      }),
      (A.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
      }),
      (A.prototype.isFloating = function () {
        return this.float !== 0;
      }),
      (A.prototype.isInlineLevel = function () {
        return (
          ee(this.display, 4) ||
          ee(this.display, 33554432) ||
          ee(this.display, 268435456) ||
          ee(this.display, 536870912) ||
          ee(this.display, 67108864) ||
          ee(this.display, 134217728)
        );
      }),
      A
    );
  })(),
  pS = (function () {
    function A(e, t) {
      (this.content = W(e, aS, t.content)), (this.quotes = W(e, cS, t.quotes));
    }
    return A;
  })(),
  Xp = (function () {
    function A(e, t) {
      (this.counterIncrement = W(e, sS, t.counterIncrement)),
        (this.counterReset = W(e, lS, t.counterReset));
    }
    return A;
  })(),
  W = function (A, e, t) {
    var r = new $m(),
      n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var i = new qm(r.read());
    switch (e.type) {
      case 2:
        var o = i.parseComponentValue();
        return e.parse(A, CA(o) ? o.value : e.initialValue);
      case 0:
        return e.parse(A, i.parseComponentValue());
      case 1:
        return e.parse(A, i.parseComponentValues());
      case 4:
        return i.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return hu.parse(A, i.parseComponentValue());
          case "color":
            return Lr.parse(A, i.parseComponentValue());
          case "image":
            return RB.parse(A, i.parseComponentValue());
          case "length":
            var a = i.parseComponentValue();
            return Or(a) ? a : le;
          case "length-percentage":
            var s = i.parseComponentValue();
            return ZA(s) ? s : le;
          case "time":
            return pC.parse(A, i.parseComponentValue());
        }
        break;
    }
  },
  wS = "data-html2canvas-debug",
  vS = function (A) {
    var e = A.getAttribute(wS);
    switch (e) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  sd = function (A, e) {
    var t = vS(A);
    return t === 1 || e === t;
  },
  Et = (function () {
    function A(e, t) {
      if (
        ((this.context = e),
        (this.textNodes = []),
        (this.elements = []),
        (this.flags = 0),
        sd(t, 3))
      )
        debugger;
      (this.styles = new hS(e, window.getComputedStyle(t, null))),
        cd(t) &&
          (this.styles.animationDuration.some(function (r) {
            return r > 0;
          }) && (t.style.animationDuration = "0s"),
          this.styles.transform !== null && (t.style.transform = "none")),
        (this.bounds = Bu(this.context, t)),
        sd(t, 4) && (this.flags |= 16);
    }
    return A;
  })(),
  mS =
    "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  zp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  ro = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var vs = 0; vs < zp.length; vs++) ro[zp.charCodeAt(vs)] = vs;
var CS = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      i,
      o,
      a,
      s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(e)
          : new Array(e),
      u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4)
      (i = ro[A.charCodeAt(r)]),
        (o = ro[A.charCodeAt(r + 1)]),
        (a = ro[A.charCodeAt(r + 2)]),
        (s = ro[A.charCodeAt(r + 3)]),
        (u[n++] = (i << 2) | (o >> 4)),
        (u[n++] = ((o & 15) << 4) | (a >> 2)),
        (u[n++] = ((a & 3) << 6) | (s & 63));
    return l;
  },
  QS = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  yS = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  ln = 5,
  KB = 11,
  xc = 2,
  US = KB - ln,
  wC = 65536 >> ln,
  FS = 1 << ln,
  Hc = FS - 1,
  ES = 1024 >> ln,
  IS = wC + ES,
  xS = IS,
  HS = 32,
  SS = xS + HS,
  LS = 65536 >> KB,
  TS = 1 << US,
  DS = TS - 1,
  Jp = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  bS = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  OS = function (A, e) {
    var t = CS(A),
      r = Array.isArray(t) ? yS(t) : new Uint32Array(t),
      n = Array.isArray(t) ? QS(t) : new Uint16Array(t),
      i = 24,
      o = Jp(n, i / 2, r[4] / 2),
      a = r[5] === 2 ? Jp(n, (i + r[4]) / 2) : bS(r, Math.ceil((i + r[4]) / 4));
    return new RS(r[0], r[1], r[2], r[3], o, a);
  },
  RS = (function () {
    function A(e, t, r, n, i, o) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = o);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> ln]),
              (t = (t << xc) + (e & Hc)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[wC + ((e - 55296) >> ln)]),
              (t = (t << xc) + (e & Hc)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = SS - LS + (e >> KB)),
              (t = this.index[t]),
              (t += (e >> ln) & DS),
              (t = this.index[t]),
              (t = (t << xc) + (e & Hc)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  Yp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  KS = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ms = 0; ms < Yp.length; ms++) KS[Yp.charCodeAt(ms)] = ms;
var NS = 1,
  Sc = 2,
  Lc = 3,
  Zp = 4,
  $p = 5,
  MS = 7,
  qp = 8,
  Tc = 9,
  Dc = 10,
  A0 = 11,
  e0 = 12,
  t0 = 13,
  r0 = 14,
  bc = 15,
  _S = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var i = A.charCodeAt(t++);
        (i & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  kS = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
      var o = A[n];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  PS = OS(mS),
  Ve = "×",
  Oc = "÷",
  VS = function (A) {
    return PS.get(A);
  },
  GS = function (A, e, t) {
    var r = t - 2,
      n = e[r],
      i = e[t - 1],
      o = e[t];
    if (i === Sc && o === Lc) return Ve;
    if (i === Sc || i === Lc || i === Zp || o === Sc || o === Lc || o === Zp)
      return Oc;
    if (
      (i === qp && [qp, Tc, A0, e0].indexOf(o) !== -1) ||
      ((i === A0 || i === Tc) && (o === Tc || o === Dc)) ||
      ((i === e0 || i === Dc) && o === Dc) ||
      o === t0 ||
      o === $p ||
      o === MS ||
      i === NS
    )
      return Ve;
    if (i === t0 && o === r0) {
      for (; n === $p; ) n = e[--r];
      if (n === r0) return Ve;
    }
    if (i === bc && o === bc) {
      for (var a = 0; n === bc; ) a++, (n = e[--r]);
      if (a % 2 === 0) return Ve;
    }
    return Oc;
  },
  jS = function (A) {
    var e = _S(A),
      t = e.length,
      r = 0,
      n = 0,
      i = e.map(VS);
    return {
      next: function () {
        if (r >= t) return { done: !0, value: null };
        for (var o = Ve; r < t && (o = GS(e, i, ++r)) === Ve; );
        if (o !== Ve || r === t) {
          var a = kS.apply(null, e.slice(n, r));
          return (n = r), { value: a, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  WS = function (A) {
    for (var e = jS(A), t = [], r; !(r = e.next()).done; )
      r.value && t.push(r.value.slice());
    return t;
  },
  XS = function (A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        (r.style.height = e + "px"),
          (r.style.display = "block"),
          A.body.appendChild(r),
          t.selectNode(r);
        var n = t.getBoundingClientRect(),
          i = Math.round(n.height);
        if ((A.body.removeChild(r), i === e)) return !0;
      }
    }
    return !1;
  },
  zS = function (A) {
    var e = A.createElement("boundtest");
    (e.style.width = "50px"),
      (e.style.display = "block"),
      (e.style.fontSize = "12px"),
      (e.style.letterSpacing = "0px"),
      (e.style.wordSpacing = "0px"),
      A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild,
      n = gu(r.data).map(function (s) {
        return WA(s);
      }),
      i = 0,
      o = {},
      a = n.every(function (s, l) {
        t.setStart(r, i), t.setEnd(r, i + s.length);
        var u = t.getBoundingClientRect();
        i += s.length;
        var c = u.x > o.x || u.y > o.y;
        return (o = u), l === 0 ? !0 : c;
      });
    return A.body.removeChild(e), a;
  },
  JS = function () {
    return typeof new Image().crossOrigin < "u";
  },
  YS = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  ZS = function (A) {
    var e = new Image(),
      t = A.createElement("canvas"),
      r = t.getContext("2d");
    if (!r) return !1;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  n0 = function (A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  },
  $S = function (A) {
    var e = A.createElement("canvas"),
      t = 100;
    (e.width = t), (e.height = t);
    var r = e.getContext("2d");
    if (!r) return Promise.reject(!1);
    (r.fillStyle = "rgb(0, 255, 0)"), r.fillRect(0, 0, t, t);
    var n = new Image(),
      i = e.toDataURL();
    n.src = i;
    var o = ld(t, t, 0, 0, n);
    return (
      (r.fillStyle = "red"),
      r.fillRect(0, 0, t, t),
      i0(o)
        .then(function (a) {
          r.drawImage(a, 0, 0);
          var s = r.getImageData(0, 0, t, t).data;
          (r.fillStyle = "red"), r.fillRect(0, 0, t, t);
          var l = A.createElement("div");
          return (
            (l.style.backgroundImage = "url(" + i + ")"),
            (l.style.height = t + "px"),
            n0(s) ? i0(ld(t, t, 0, 0, l)) : Promise.reject(!1)
          );
        })
        .then(function (a) {
          return r.drawImage(a, 0, 0), n0(r.getImageData(0, 0, t, t).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  ld = function (A, e, t, r, n) {
    var i = "http://www.w3.org/2000/svg",
      o = document.createElementNS(i, "svg"),
      a = document.createElementNS(i, "foreignObject");
    return (
      o.setAttributeNS(null, "width", A.toString()),
      o.setAttributeNS(null, "height", e.toString()),
      a.setAttributeNS(null, "width", "100%"),
      a.setAttributeNS(null, "height", "100%"),
      a.setAttributeNS(null, "x", t.toString()),
      a.setAttributeNS(null, "y", r.toString()),
      a.setAttributeNS(null, "externalResourcesRequired", "true"),
      o.appendChild(a),
      a.appendChild(n),
      o
    );
  },
  i0 = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        return e(r);
      }),
        (r.onerror = t),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  se = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = XS(document);
      return Object.defineProperty(se, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = se.SUPPORT_RANGE_BOUNDS && zS(document);
      return (
        Object.defineProperty(se, "SUPPORT_WORD_BREAKING", { value: A }), A
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var A = ZS(document);
      return Object.defineProperty(se, "SUPPORT_SVG_DRAWING", { value: A }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A =
        typeof Array.from == "function" && typeof window.fetch == "function"
          ? $S(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(se, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: A,
        }),
        A
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var A = JS();
      return Object.defineProperty(se, "SUPPORT_CORS_IMAGES", { value: A }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = YS();
      return (
        Object.defineProperty(se, "SUPPORT_RESPONSE_TYPE", { value: A }), A
      );
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(se, "SUPPORT_CORS_XHR", { value: A }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return (
        Object.defineProperty(se, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: A,
        }),
        A
      );
    },
  },
  wo = (function () {
    function A(e, t) {
      (this.text = e), (this.bounds = t);
    }
    return A;
  })(),
  qS = function (A, e, t, r) {
    var n = tL(e, t),
      i = [],
      o = 0;
    return (
      n.forEach(function (a) {
        if (t.textDecorationLine.length || a.trim().length > 0)
          if (se.SUPPORT_RANGE_BOUNDS) {
            var s = o0(r, o, a.length).getClientRects();
            if (s.length > 1) {
              var l = NB(a),
                u = 0;
              l.forEach(function (f) {
                i.push(
                  new wo(
                    f,
                    Yt.fromDOMRectList(
                      A,
                      o0(r, u + o, f.length).getClientRects()
                    )
                  )
                ),
                  (u += f.length);
              });
            } else i.push(new wo(a, Yt.fromDOMRectList(A, s)));
          } else {
            var c = r.splitText(a.length);
            i.push(new wo(a, AL(A, r))), (r = c);
          }
        else se.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
        o += a.length;
      }),
      i
    );
  },
  AL = function (A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(!0));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var i = Bu(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), i;
      }
    }
    return Yt.EMPTY;
  },
  o0 = function (A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  },
  NB = function (A) {
    if (se.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(e.segment(A)).map(function (t) {
        return t.segment;
      });
    }
    return WS(A);
  },
  eL = function (A, e) {
    if (se.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(t.segment(A)).map(function (r) {
        return r.segment;
      });
    }
    return nL(A, e);
  },
  tL = function (A, e) {
    return e.letterSpacing !== 0 ? NB(A) : eL(A, e);
  },
  rL = [32, 160, 4961, 65792, 65793, 4153, 4241],
  nL = function (A, e) {
    for (
      var t = LI(A, {
          lineBreak: e.lineBreak,
          wordBreak:
            e.overflowWrap === "break-word" ? "break-word" : e.wordBreak,
        }),
        r = [],
        n,
        i = function () {
          if (n.value) {
            var o = n.value.slice(),
              a = gu(o),
              s = "";
            a.forEach(function (l) {
              rL.indexOf(l) === -1
                ? (s += WA(l))
                : (s.length && r.push(s), r.push(WA(l)), (s = ""));
            }),
              s.length && r.push(s);
          }
        };
      !(n = t.next()).done;

    )
      i();
    return r;
  },
  iL = (function () {
    function A(e, t, r) {
      (this.text = oL(t.data, r.textTransform)),
        (this.textBounds = qS(e, this.text, r, t));
    }
    return A;
  })(),
  oL = function (A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(aL, sL);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  },
  aL = /(^|\s|:|-|\(|\))([a-z])/g,
  sL = function (A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  },
  vC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.src = r.currentSrc || r.src),
        (n.intrinsicWidth = r.naturalWidth),
        (n.intrinsicHeight = r.naturalHeight),
        n.context.cache.addImage(n.src),
        n
      );
    }
    return e;
  })(Et),
  mC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r),
        (n.intrinsicWidth = r.width),
        (n.intrinsicHeight = r.height),
        n
      );
    }
    return e;
  })(Et),
  CC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        i = new XMLSerializer(),
        o = Bu(t, r);
      return (
        r.setAttribute("width", o.width + "px"),
        r.setAttribute("height", o.height + "px"),
        (n.svg =
          "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r))),
        (n.intrinsicWidth = r.width.baseVal.value),
        (n.intrinsicHeight = r.height.baseVal.value),
        n.context.cache.addImage(n.svg),
        n
      );
    }
    return e;
  })(Et),
  QC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(Et),
  ud = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.start = r.start),
        (n.reversed = typeof r.reversed == "boolean" && r.reversed === !0),
        n
      );
    }
    return e;
  })(Et),
  lL = [{ type: 15, flags: 0, unit: "px", number: 3 }],
  uL = [{ type: 16, flags: 0, number: 50 }],
  cL = function (A) {
    return A.width > A.height
      ? new Yt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height)
      : A.width < A.height
      ? new Yt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width)
      : A;
  },
  fL = function (A) {
    var e = A.type === dL ? new Array(A.value.length + 1).join("•") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  },
  Hl = "checkbox",
  Sl = "radio",
  dL = "password",
  a0 = 707406591,
  MB = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (
        ((n.type = r.type.toLowerCase()),
        (n.checked = r.checked),
        (n.value = fL(r)),
        (n.type === Hl || n.type === Sl) &&
          ((n.styles.backgroundColor = 3739148031),
          (n.styles.borderTopColor =
            n.styles.borderRightColor =
            n.styles.borderBottomColor =
            n.styles.borderLeftColor =
              2779096575),
          (n.styles.borderTopWidth =
            n.styles.borderRightWidth =
            n.styles.borderBottomWidth =
            n.styles.borderLeftWidth =
              1),
          (n.styles.borderTopStyle =
            n.styles.borderRightStyle =
            n.styles.borderBottomStyle =
            n.styles.borderLeftStyle =
              1),
          (n.styles.backgroundClip = [0]),
          (n.styles.backgroundOrigin = [0]),
          (n.bounds = cL(n.bounds))),
        n.type)
      ) {
        case Hl:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              lL;
          break;
        case Sl:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              uL;
          break;
      }
      return n;
    }
    return e;
  })(Et),
  yC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        i = r.options[r.selectedIndex || 0];
      return (n.value = (i && i.text) || ""), n;
    }
    return e;
  })(Et),
  UC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(Et),
  FC = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      (n.src = r.src),
        (n.width = parseInt(r.width, 10) || 0),
        (n.height = parseInt(r.height, 10) || 0),
        (n.backgroundColor = n.styles.backgroundColor);
      try {
        if (
          r.contentWindow &&
          r.contentWindow.document &&
          r.contentWindow.document.documentElement
        ) {
          n.tree = IC(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement
              ? ho(
                  t,
                  getComputedStyle(r.contentWindow.document.documentElement)
                    .backgroundColor
                )
              : Vt.TRANSPARENT,
            o = r.contentWindow.document.body
              ? ho(
                  t,
                  getComputedStyle(r.contentWindow.document.body)
                    .backgroundColor
                )
              : Vt.TRANSPARENT;
          n.backgroundColor = Tr(i)
            ? Tr(o)
              ? n.styles.backgroundColor
              : o
            : i;
        }
      } catch {}
      return n;
    }
    return e;
  })(Et),
  BL = ["OL", "UL", "MENU"],
  Gs = function (A, e, t, r) {
    for (var n = e.firstChild, i = void 0; n; n = i)
      if (((i = n.nextSibling), xC(n) && n.data.trim().length > 0))
        t.textNodes.push(new iL(A, n, t.styles));
      else if (Zn(n))
        if (TC(n) && n.assignedNodes)
          n.assignedNodes().forEach(function (a) {
            return Gs(A, a, t, r);
          });
        else {
          var o = EC(A, n);
          o.styles.isVisible() &&
            (gL(n, o, r) ? (o.flags |= 4) : hL(o.styles) && (o.flags |= 2),
            BL.indexOf(n.tagName) !== -1 && (o.flags |= 8),
            t.elements.push(o),
            n.slot,
            n.shadowRoot
              ? Gs(A, n.shadowRoot, o, r)
              : !Ll(n) && !HC(n) && !Tl(n) && Gs(A, n, o, r));
        }
  },
  EC = function (A, e) {
    return fd(e)
      ? new vC(A, e)
      : SC(e)
      ? new mC(A, e)
      : HC(e)
      ? new CC(A, e)
      : pL(e)
      ? new QC(A, e)
      : wL(e)
      ? new ud(A, e)
      : vL(e)
      ? new MB(A, e)
      : Tl(e)
      ? new yC(A, e)
      : Ll(e)
      ? new UC(A, e)
      : LC(e)
      ? new FC(A, e)
      : new Et(A, e);
  },
  IC = function (A, e) {
    var t = EC(A, e);
    return (t.flags |= 4), Gs(A, e, t, t), t;
  },
  gL = function (A, e, t) {
    return (
      e.styles.isPositionedWithZIndex() ||
      e.styles.opacity < 1 ||
      e.styles.isTransformed() ||
      (_B(A) && t.styles.isTransparent())
    );
  },
  hL = function (A) {
    return A.isPositioned() || A.isFloating();
  },
  xC = function (A) {
    return A.nodeType === Node.TEXT_NODE;
  },
  Zn = function (A) {
    return A.nodeType === Node.ELEMENT_NODE;
  },
  cd = function (A) {
    return Zn(A) && typeof A.style < "u" && !js(A);
  },
  js = function (A) {
    return typeof A.className == "object";
  },
  pL = function (A) {
    return A.tagName === "LI";
  },
  wL = function (A) {
    return A.tagName === "OL";
  },
  vL = function (A) {
    return A.tagName === "INPUT";
  },
  mL = function (A) {
    return A.tagName === "HTML";
  },
  HC = function (A) {
    return A.tagName === "svg";
  },
  _B = function (A) {
    return A.tagName === "BODY";
  },
  SC = function (A) {
    return A.tagName === "CANVAS";
  },
  s0 = function (A) {
    return A.tagName === "VIDEO";
  },
  fd = function (A) {
    return A.tagName === "IMG";
  },
  LC = function (A) {
    return A.tagName === "IFRAME";
  },
  l0 = function (A) {
    return A.tagName === "STYLE";
  },
  CL = function (A) {
    return A.tagName === "SCRIPT";
  },
  Ll = function (A) {
    return A.tagName === "TEXTAREA";
  },
  Tl = function (A) {
    return A.tagName === "SELECT";
  },
  TC = function (A) {
    return A.tagName === "SLOT";
  },
  u0 = function (A) {
    return A.tagName.indexOf("-") > 0;
  },
  QL = (function () {
    function A() {
      this.counters = {};
    }
    return (
      (A.prototype.getCounterValue = function (e) {
        var t = this.counters[e];
        return t && t.length ? t[t.length - 1] : 1;
      }),
      (A.prototype.getCounterValues = function (e) {
        var t = this.counters[e];
        return t || [];
      }),
      (A.prototype.pop = function (e) {
        var t = this;
        e.forEach(function (r) {
          return t.counters[r].pop();
        });
      }),
      (A.prototype.parse = function (e) {
        var t = this,
          r = e.counterIncrement,
          n = e.counterReset,
          i = !0;
        r !== null &&
          r.forEach(function (a) {
            var s = t.counters[a.counter];
            s &&
              a.increment !== 0 &&
              ((i = !1),
              s.length || s.push(1),
              (s[Math.max(0, s.length - 1)] += a.increment));
          });
        var o = [];
        return (
          i &&
            n.forEach(function (a) {
              var s = t.counters[a.counter];
              o.push(a.counter),
                s || (s = t.counters[a.counter] = []),
                s.push(a.reset);
            }),
          o
        );
      }),
      A
    );
  })(),
  c0 = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
  },
  f0 = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      "Ք",
      "Փ",
      "Ւ",
      "Ց",
      "Ր",
      "Տ",
      "Վ",
      "Ս",
      "Ռ",
      "Ջ",
      "Պ",
      "Չ",
      "Ո",
      "Շ",
      "Ն",
      "Յ",
      "Մ",
      "Ճ",
      "Ղ",
      "Ձ",
      "Հ",
      "Կ",
      "Ծ",
      "Խ",
      "Լ",
      "Ի",
      "Ժ",
      "Թ",
      "Ը",
      "Է",
      "Զ",
      "Ե",
      "Դ",
      "Գ",
      "Բ",
      "Ա",
    ],
  },
  yL = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      "י׳",
      "ט׳",
      "ח׳",
      "ז׳",
      "ו׳",
      "ה׳",
      "ד׳",
      "ג׳",
      "ב׳",
      "א׳",
      "ת",
      "ש",
      "ר",
      "ק",
      "צ",
      "פ",
      "ע",
      "ס",
      "נ",
      "מ",
      "ל",
      "כ",
      "יט",
      "יח",
      "יז",
      "טז",
      "טו",
      "י",
      "ט",
      "ח",
      "ז",
      "ו",
      "ה",
      "ד",
      "ג",
      "ב",
      "א",
    ],
  },
  UL = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      "ჵ",
      "ჰ",
      "ჯ",
      "ჴ",
      "ხ",
      "ჭ",
      "წ",
      "ძ",
      "ც",
      "ჩ",
      "შ",
      "ყ",
      "ღ",
      "ქ",
      "ფ",
      "ჳ",
      "ტ",
      "ს",
      "რ",
      "ჟ",
      "პ",
      "ო",
      "ჲ",
      "ნ",
      "მ",
      "ლ",
      "კ",
      "ი",
      "თ",
      "ჱ",
      "ზ",
      "ვ",
      "ე",
      "დ",
      "გ",
      "ბ",
      "ა",
    ],
  },
  Ln = function (A, e, t, r, n, i) {
    return A < e || A > t
      ? Go(A, n, i.length > 0)
      : r.integers.reduce(function (o, a, s) {
          for (; A >= a; ) (A -= a), (o += r.values[s]);
          return o;
        }, "") + i;
  },
  DC = function (A, e, t, r) {
    var n = "";
    do t || A--, (n = r(A) + n), (A /= e);
    while (A * e >= e);
    return n;
  },
  jA = function (A, e, t, r, n) {
    var i = t - e + 1;
    return (
      (A < 0 ? "-" : "") +
      (DC(Math.abs(A), i, r, function (o) {
        return WA(Math.floor(o % i) + e);
      }) +
        n)
    );
  },
  zr = function (A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return (
      DC(Math.abs(A), r, !1, function (n) {
        return e[Math.floor(n % r)];
      }) + t
    );
  },
  bn = 1,
  lr = 2,
  ur = 4,
  no = 8,
  Dt = function (A, e, t, r, n, i) {
    if (A < -9999 || A > 9999) return Go(A, 4, n.length > 0);
    var o = Math.abs(A),
      a = n;
    if (o === 0) return e[0] + a;
    for (var s = 0; o > 0 && s <= 4; s++) {
      var l = o % 10;
      l === 0 && ee(i, bn) && a !== ""
        ? (a = e[l] + a)
        : l > 1 ||
          (l === 1 && s === 0) ||
          (l === 1 && s === 1 && ee(i, lr)) ||
          (l === 1 && s === 1 && ee(i, ur) && A > 100) ||
          (l === 1 && s > 1 && ee(i, no))
        ? (a = e[l] + (s > 0 ? t[s - 1] : "") + a)
        : l === 1 && s > 0 && (a = t[s - 1] + a),
        (o = Math.floor(o / 10));
    }
    return (A < 0 ? r : "") + a;
  },
  d0 = "十百千萬",
  B0 = "拾佰仟萬",
  g0 = "マイナス",
  Rc = "마이너스",
  Go = function (A, e, t) {
    var r = t ? ". " : "",
      n = t ? "、" : "",
      i = t ? ", " : "",
      o = t ? " " : "";
    switch (e) {
      case 0:
        return "•" + o;
      case 1:
        return "◦" + o;
      case 2:
        return "◾" + o;
      case 5:
        var a = jA(A, 48, 57, !0, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return zr(A, "〇一二三四五六七八九", n);
      case 6:
        return Ln(A, 1, 3999, c0, 3, r).toLowerCase();
      case 7:
        return Ln(A, 1, 3999, c0, 3, r);
      case 8:
        return jA(A, 945, 969, !1, r);
      case 9:
        return jA(A, 97, 122, !1, r);
      case 10:
        return jA(A, 65, 90, !1, r);
      case 11:
        return jA(A, 1632, 1641, !0, r);
      case 12:
      case 49:
        return Ln(A, 1, 9999, f0, 3, r);
      case 35:
        return Ln(A, 1, 9999, f0, 3, r).toLowerCase();
      case 13:
        return jA(A, 2534, 2543, !0, r);
      case 14:
      case 30:
        return jA(A, 6112, 6121, !0, r);
      case 15:
        return zr(A, "子丑寅卯辰巳午未申酉戌亥", n);
      case 16:
        return zr(A, "甲乙丙丁戊己庚辛壬癸", n);
      case 17:
      case 48:
        return Dt(A, "零一二三四五六七八九", d0, "負", n, lr | ur | no);
      case 47:
        return Dt(A, "零壹貳參肆伍陸柒捌玖", B0, "負", n, bn | lr | ur | no);
      case 42:
        return Dt(A, "零一二三四五六七八九", d0, "负", n, lr | ur | no);
      case 41:
        return Dt(A, "零壹贰叁肆伍陆柒捌玖", B0, "负", n, bn | lr | ur | no);
      case 26:
        return Dt(A, "〇一二三四五六七八九", "十百千万", g0, n, 0);
      case 25:
        return Dt(A, "零壱弐参四伍六七八九", "拾百千万", g0, n, bn | lr | ur);
      case 31:
        return Dt(A, "영일이삼사오육칠팔구", "십백천만", Rc, i, bn | lr | ur);
      case 33:
        return Dt(A, "零一二三四五六七八九", "十百千萬", Rc, i, 0);
      case 32:
        return Dt(A, "零壹貳參四五六七八九", "拾百千", Rc, i, bn | lr | ur);
      case 18:
        return jA(A, 2406, 2415, !0, r);
      case 20:
        return Ln(A, 1, 19999, UL, 3, r);
      case 21:
        return jA(A, 2790, 2799, !0, r);
      case 22:
        return jA(A, 2662, 2671, !0, r);
      case 22:
        return Ln(A, 1, 10999, yL, 3, r);
      case 23:
        return zr(
          A,
          "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
        );
      case 24:
        return zr(
          A,
          "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
        );
      case 27:
        return jA(A, 3302, 3311, !0, r);
      case 28:
        return zr(
          A,
          "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
          n
        );
      case 29:
        return zr(
          A,
          "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
          n
        );
      case 34:
        return jA(A, 3792, 3801, !0, r);
      case 37:
        return jA(A, 6160, 6169, !0, r);
      case 38:
        return jA(A, 4160, 4169, !0, r);
      case 39:
        return jA(A, 2918, 2927, !0, r);
      case 40:
        return jA(A, 1776, 1785, !0, r);
      case 43:
        return jA(A, 3046, 3055, !0, r);
      case 44:
        return jA(A, 3174, 3183, !0, r);
      case 45:
        return jA(A, 3664, 3673, !0, r);
      case 46:
        return jA(A, 3872, 3881, !0, r);
      case 3:
      default:
        return jA(A, 48, 57, !0, r);
    }
  },
  bC = "data-html2canvas-ignore",
  h0 = (function () {
    function A(e, t, r) {
      if (
        ((this.context = e),
        (this.options = r),
        (this.scrolledElements = []),
        (this.referenceElement = t),
        (this.counters = new QL()),
        (this.quoteDepth = 0),
        !t.ownerDocument)
      )
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(
        t.ownerDocument.documentElement,
        !1
      );
    }
    return (
      (A.prototype.toIFrame = function (e, t) {
        var r = this,
          n = FL(e, t);
        if (!n.contentWindow)
          return Promise.reject("Unable to find iframe window");
        var i = e.defaultView.pageXOffset,
          o = e.defaultView.pageYOffset,
          a = n.contentWindow,
          s = a.document,
          l = xL(n).then(function () {
            return ve(r, void 0, void 0, function () {
              var u, c;
              return Be(this, function (f) {
                switch (f.label) {
                  case 0:
                    return (
                      this.scrolledElements.forEach(TL),
                      a &&
                        (a.scrollTo(t.left, t.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                          (a.scrollY !== t.top || a.scrollX !== t.left) &&
                          (this.context.logger.warn(
                            "Unable to restore scroll position for cloned document"
                          ),
                          (this.context.windowBounds =
                            this.context.windowBounds.add(
                              a.scrollX - t.left,
                              a.scrollY - t.top,
                              0,
                              0
                            )))),
                      (u = this.options.onclone),
                      (c = this.clonedReferenceElement),
                      typeof c > "u"
                        ? [
                            2,
                            Promise.reject(
                              "Error finding the " +
                                this.referenceElement.nodeName +
                                " in the cloned document"
                            ),
                          ]
                        : s.fonts && s.fonts.ready
                        ? [4, s.fonts.ready]
                        : [3, 2]
                    );
                  case 1:
                    f.sent(), (f.label = 2);
                  case 2:
                    return /(AppleWebKit)/g.test(navigator.userAgent)
                      ? [4, IL(s)]
                      : [3, 4];
                  case 3:
                    f.sent(), (f.label = 4);
                  case 4:
                    return typeof u == "function"
                      ? [
                          2,
                          Promise.resolve()
                            .then(function () {
                              return u(s, c);
                            })
                            .then(function () {
                              return n;
                            }),
                        ]
                      : [2, n];
                }
              });
            });
          });
        return (
          s.open(),
          s.write(SL(document.doctype) + "<html></html>"),
          LL(this.referenceElement.ownerDocument, i, o),
          s.replaceChild(s.adoptNode(this.documentElement), s.documentElement),
          s.close(),
          l
        );
      }),
      (A.prototype.createElementClone = function (e) {
        if (sd(e, 2)) debugger;
        if (SC(e)) return this.createCanvasClone(e);
        if (s0(e)) return this.createVideoClone(e);
        if (l0(e)) return this.createStyleClone(e);
        var t = e.cloneNode(!1);
        return (
          fd(t) &&
            (fd(e) &&
              e.currentSrc &&
              e.currentSrc !== e.src &&
              ((t.src = e.currentSrc), (t.srcset = "")),
            t.loading === "lazy" && (t.loading = "eager")),
          u0(t) ? this.createCustomElementClone(t) : t
        );
      }),
      (A.prototype.createCustomElementClone = function (e) {
        var t = document.createElement("html2canvascustomelement");
        return Kc(e.style, t), t;
      }),
      (A.prototype.createStyleClone = function (e) {
        try {
          var t = e.sheet;
          if (t && t.cssRules) {
            var r = [].slice.call(t.cssRules, 0).reduce(function (i, o) {
                return o && typeof o.cssText == "string" ? i + o.cssText : i;
              }, ""),
              n = e.cloneNode(!1);
            return (n.textContent = r), n;
          }
        } catch (i) {
          if (
            (this.context.logger.error("Unable to access cssRules property", i),
            i.name !== "SecurityError")
          )
            throw i;
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.createCanvasClone = function (e) {
        var t;
        if (this.options.inlineImages && e.ownerDocument) {
          var r = e.ownerDocument.createElement("img");
          try {
            return (r.src = e.toDataURL()), r;
          } catch {
            this.context.logger.info(
              "Unable to inline canvas contents, canvas is tainted",
              e
            );
          }
        }
        var n = e.cloneNode(!1);
        try {
          (n.width = e.width), (n.height = e.height);
          var i = e.getContext("2d"),
            o = n.getContext("2d");
          if (o)
            if (!this.options.allowTaint && i)
              o.putImageData(i.getImageData(0, 0, e.width, e.height), 0, 0);
            else {
              var a =
                (t = e.getContext("webgl2")) !== null && t !== void 0
                  ? t
                  : e.getContext("webgl");
              if (a) {
                var s = a.getContextAttributes();
                (s == null ? void 0 : s.preserveDrawingBuffer) === !1 &&
                  this.context.logger.warn(
                    "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                    e
                  );
              }
              o.drawImage(e, 0, 0);
            }
          return n;
        } catch {
          this.context.logger.info(
            "Unable to clone canvas as it is tainted",
            e
          );
        }
        return n;
      }),
      (A.prototype.createVideoClone = function (e) {
        var t = e.ownerDocument.createElement("canvas");
        (t.width = e.offsetWidth), (t.height = e.offsetHeight);
        var r = t.getContext("2d");
        try {
          return (
            r &&
              (r.drawImage(e, 0, 0, t.width, t.height),
              this.options.allowTaint ||
                r.getImageData(0, 0, t.width, t.height)),
            t
          );
        } catch {
          this.context.logger.info("Unable to clone video as it is tainted", e);
        }
        var n = e.ownerDocument.createElement("canvas");
        return (n.width = e.offsetWidth), (n.height = e.offsetHeight), n;
      }),
      (A.prototype.appendChildNode = function (e, t, r) {
        (!Zn(t) ||
          (!CL(t) &&
            !t.hasAttribute(bC) &&
            (typeof this.options.ignoreElements != "function" ||
              !this.options.ignoreElements(t)))) &&
          (!this.options.copyStyles || !Zn(t) || !l0(t)) &&
          e.appendChild(this.cloneNode(t, r));
      }),
      (A.prototype.cloneChildNodes = function (e, t, r) {
        for (
          var n = this,
            i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild;
          i;
          i = i.nextSibling
        )
          if (Zn(i) && TC(i) && typeof i.assignedNodes == "function") {
            var o = i.assignedNodes();
            o.length &&
              o.forEach(function (a) {
                return n.appendChildNode(t, a, r);
              });
          } else this.appendChildNode(t, i, r);
      }),
      (A.prototype.cloneNode = function (e, t) {
        if (xC(e)) return document.createTextNode(e.data);
        if (!e.ownerDocument) return e.cloneNode(!1);
        var r = e.ownerDocument.defaultView;
        if (r && Zn(e) && (cd(e) || js(e))) {
          var n = this.createElementClone(e);
          n.style.transitionProperty = "none";
          var i = r.getComputedStyle(e),
            o = r.getComputedStyle(e, ":before"),
            a = r.getComputedStyle(e, ":after");
          this.referenceElement === e &&
            cd(n) &&
            (this.clonedReferenceElement = n),
            _B(n) && OL(n);
          var s = this.counters.parse(new Xp(this.context, i)),
            l = this.resolvePseudoContent(e, n, o, vo.BEFORE);
          u0(e) && (t = !0),
            s0(e) || this.cloneChildNodes(e, n, t),
            l && n.insertBefore(l, n.firstChild);
          var u = this.resolvePseudoContent(e, n, a, vo.AFTER);
          return (
            u && n.appendChild(u),
            this.counters.pop(s),
            ((i && (this.options.copyStyles || js(e)) && !LC(e)) || t) &&
              Kc(i, n),
            (e.scrollTop !== 0 || e.scrollLeft !== 0) &&
              this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]),
            (Ll(e) || Tl(e)) && (Ll(n) || Tl(n)) && (n.value = e.value),
            n
          );
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.resolvePseudoContent = function (e, t, r, n) {
        var i = this;
        if (r) {
          var o = r.content,
            a = t.ownerDocument;
          if (
            !(
              !a ||
              !o ||
              o === "none" ||
              o === "-moz-alt-content" ||
              r.display === "none"
            )
          ) {
            this.counters.parse(new Xp(this.context, r));
            var s = new pS(this.context, r),
              l = a.createElement("html2canvaspseudoelement");
            Kc(r, l),
              s.content.forEach(function (c) {
                if (c.type === 0) l.appendChild(a.createTextNode(c.value));
                else if (c.type === 22) {
                  var f = a.createElement("img");
                  (f.src = c.value), (f.style.opacity = "1"), l.appendChild(f);
                } else if (c.type === 18) {
                  if (c.name === "attr") {
                    var h = c.values.filter(CA);
                    h.length &&
                      l.appendChild(
                        a.createTextNode(e.getAttribute(h[0].value) || "")
                      );
                  } else if (c.name === "counter") {
                    var g = c.values.filter(hi),
                      p = g[0],
                      F = g[1];
                    if (p && CA(p)) {
                      var B = i.counters.getCounterValue(p.value),
                        d = F && CA(F) ? ad.parse(i.context, F.value) : 3;
                      l.appendChild(a.createTextNode(Go(B, d, !1)));
                    }
                  } else if (c.name === "counters") {
                    var w = c.values.filter(hi),
                      p = w[0],
                      C = w[1],
                      F = w[2];
                    if (p && CA(p)) {
                      var m = i.counters.getCounterValues(p.value),
                        y = F && CA(F) ? ad.parse(i.context, F.value) : 3,
                        E = C && C.type === 0 ? C.value : "",
                        v = m
                          .map(function (L) {
                            return Go(L, y, !1);
                          })
                          .join(E);
                      l.appendChild(a.createTextNode(v));
                    }
                  }
                } else if (c.type === 20)
                  switch (c.value) {
                    case "open-quote":
                      l.appendChild(
                        a.createTextNode(Wp(s.quotes, i.quoteDepth++, !0))
                      );
                      break;
                    case "close-quote":
                      l.appendChild(
                        a.createTextNode(Wp(s.quotes, --i.quoteDepth, !1))
                      );
                      break;
                    default:
                      l.appendChild(a.createTextNode(c.value));
                  }
              }),
              (l.className = dd + " " + Bd);
            var u = n === vo.BEFORE ? " " + dd : " " + Bd;
            return js(t) ? (t.className.baseValue += u) : (t.className += u), l;
          }
        }
      }),
      (A.destroy = function (e) {
        return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
      }),
      A
    );
  })(),
  vo;
(function (A) {
  (A[(A.BEFORE = 0)] = "BEFORE"), (A[(A.AFTER = 1)] = "AFTER");
})(vo || (vo = {}));
var FL = function (A, e) {
    var t = A.createElement("iframe");
    return (
      (t.className = "html2canvas-container"),
      (t.style.visibility = "hidden"),
      (t.style.position = "fixed"),
      (t.style.left = "-10000px"),
      (t.style.top = "0px"),
      (t.style.border = "0"),
      (t.width = e.width.toString()),
      (t.height = e.height.toString()),
      (t.scrolling = "no"),
      t.setAttribute(bC, "true"),
      A.body.appendChild(t),
      t
    );
  },
  EL = function (A) {
    return new Promise(function (e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      (A.onload = e), (A.onerror = e);
    });
  },
  IL = function (A) {
    return Promise.all([].slice.call(A.images, 0).map(EL));
  },
  xL = function (A) {
    return new Promise(function (e, t) {
      var r = A.contentWindow;
      if (!r) return t("No window assigned for iframe");
      var n = r.document;
      r.onload = A.onload = function () {
        r.onload = A.onload = null;
        var i = setInterval(function () {
          n.body.childNodes.length > 0 &&
            n.readyState === "complete" &&
            (clearInterval(i), e(A));
        }, 50);
      };
    });
  },
  HL = ["all", "d", "content"],
  Kc = function (A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      HL.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  },
  SL = function (A) {
    var e = "";
    return (
      A &&
        ((e += "<!DOCTYPE "),
        A.name && (e += A.name),
        A.internalSubset && (e += A.internalSubset),
        A.publicId && (e += '"' + A.publicId + '"'),
        A.systemId && (e += '"' + A.systemId + '"'),
        (e += ">")),
      e
    );
  },
  LL = function (A, e, t) {
    A &&
      A.defaultView &&
      (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) &&
      A.defaultView.scrollTo(e, t);
  },
  TL = function (A) {
    var e = A[0],
      t = A[1],
      r = A[2];
    (e.scrollLeft = t), (e.scrollTop = r);
  },
  DL = ":before",
  bL = ":after",
  dd = "___html2canvas___pseudoelement_before",
  Bd = "___html2canvas___pseudoelement_after",
  p0 = `{
    content: "" !important;
    display: none !important;
}`,
  OL = function (A) {
    RL(
      A,
      "." +
        dd +
        DL +
        p0 +
        `
         .` +
        Bd +
        bL +
        p0
    );
  },
  RL = function (A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      (r.textContent = e), A.appendChild(r);
    }
  },
  OC = (function () {
    function A() {}
    return (
      (A.getOrigin = function (e) {
        var t = A._link;
        return t
          ? ((t.href = e), (t.href = t.href), t.protocol + t.hostname + t.port)
          : "about:blank";
      }),
      (A.isSameOrigin = function (e) {
        return A.getOrigin(e) === A._origin;
      }),
      (A.setContext = function (e) {
        (A._link = e.document.createElement("a")),
          (A._origin = A.getOrigin(e.location.href));
      }),
      (A._origin = "about:blank"),
      A
    );
  })(),
  KL = (function () {
    function A(e, t) {
      (this.context = e), (this._options = t), (this._cache = {});
    }
    return (
      (A.prototype.addImage = function (e) {
        var t = Promise.resolve();
        return (
          this.has(e) ||
            ((Mc(e) || kL(e)) &&
              (this._cache[e] = this.loadImage(e)).catch(function () {})),
          t
        );
      }),
      (A.prototype.match = function (e) {
        return this._cache[e];
      }),
      (A.prototype.loadImage = function (e) {
        return ve(this, void 0, void 0, function () {
          var t,
            r,
            n,
            i,
            o = this;
          return Be(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (t = OC.isSameOrigin(e)),
                  (r =
                    !Nc(e) &&
                    this._options.useCORS === !0 &&
                    se.SUPPORT_CORS_IMAGES &&
                    !t),
                  (n =
                    !Nc(e) &&
                    !t &&
                    !Mc(e) &&
                    typeof this._options.proxy == "string" &&
                    se.SUPPORT_CORS_XHR &&
                    !r),
                  !t &&
                  this._options.allowTaint === !1 &&
                  !Nc(e) &&
                  !Mc(e) &&
                  !n &&
                  !r
                    ? [2]
                    : ((i = e), n ? [4, this.proxy(i)] : [3, 2])
                );
              case 1:
                (i = a.sent()), (a.label = 2);
              case 2:
                return (
                  this.context.logger.debug(
                    "Added image " + e.substring(0, 256)
                  ),
                  [
                    4,
                    new Promise(function (s, l) {
                      var u = new Image();
                      (u.onload = function () {
                        return s(u);
                      }),
                        (u.onerror = l),
                        (PL(i) || r) && (u.crossOrigin = "anonymous"),
                        (u.src = i),
                        u.complete === !0 &&
                          setTimeout(function () {
                            return s(u);
                          }, 500),
                        o._options.imageTimeout > 0 &&
                          setTimeout(function () {
                            return l(
                              "Timed out (" +
                                o._options.imageTimeout +
                                "ms) loading image"
                            );
                          }, o._options.imageTimeout);
                    }),
                  ]
                );
              case 3:
                return [2, a.sent()];
            }
          });
        });
      }),
      (A.prototype.has = function (e) {
        return typeof this._cache[e] < "u";
      }),
      (A.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
      }),
      (A.prototype.proxy = function (e) {
        var t = this,
          r = this._options.proxy;
        if (!r) throw new Error("No proxy defined");
        var n = e.substring(0, 256);
        return new Promise(function (i, o) {
          var a = se.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            s = new XMLHttpRequest();
          (s.onload = function () {
            if (s.status === 200)
              if (a === "text") i(s.response);
              else {
                var c = new FileReader();
                c.addEventListener(
                  "load",
                  function () {
                    return i(c.result);
                  },
                  !1
                ),
                  c.addEventListener(
                    "error",
                    function (f) {
                      return o(f);
                    },
                    !1
                  ),
                  c.readAsDataURL(s.response);
              }
            else
              o(
                "Failed to proxy resource " +
                  n +
                  " with status code " +
                  s.status
              );
          }),
            (s.onerror = o);
          var l = r.indexOf("?") > -1 ? "&" : "?";
          if (
            (s.open(
              "GET",
              "" + r + l + "url=" + encodeURIComponent(e) + "&responseType=" + a
            ),
            a !== "text" && s instanceof XMLHttpRequest && (s.responseType = a),
            t._options.imageTimeout)
          ) {
            var u = t._options.imageTimeout;
            (s.timeout = u),
              (s.ontimeout = function () {
                return o("Timed out (" + u + "ms) proxying " + n);
              });
          }
          s.send();
        });
      }),
      A
    );
  })(),
  NL = /^data:image\/svg\+xml/i,
  ML = /^data:image\/.*;base64,/i,
  _L = /^data:image\/.*/i,
  kL = function (A) {
    return se.SUPPORT_SVG_DRAWING || !VL(A);
  },
  Nc = function (A) {
    return _L.test(A);
  },
  PL = function (A) {
    return ML.test(A);
  },
  Mc = function (A) {
    return A.substr(0, 4) === "blob";
  },
  VL = function (A) {
    return A.substr(-3).toLowerCase() === "svg" || NL.test(A);
  },
  G = (function () {
    function A(e, t) {
      (this.type = 0), (this.x = e), (this.y = t);
    }
    return (
      (A.prototype.add = function (e, t) {
        return new A(this.x + e, this.y + t);
      }),
      A
    );
  })(),
  Tn = function (A, e, t) {
    return new G(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  },
  Cs = (function () {
    function A(e, t, r, n) {
      (this.type = 1),
        (this.start = e),
        (this.startControl = t),
        (this.endControl = r),
        (this.end = n);
    }
    return (
      (A.prototype.subdivide = function (e, t) {
        var r = Tn(this.start, this.startControl, e),
          n = Tn(this.startControl, this.endControl, e),
          i = Tn(this.endControl, this.end, e),
          o = Tn(r, n, e),
          a = Tn(n, i, e),
          s = Tn(o, a, e);
        return t ? new A(this.start, r, o, s) : new A(s, a, i, this.end);
      }),
      (A.prototype.add = function (e, t) {
        return new A(
          this.start.add(e, t),
          this.startControl.add(e, t),
          this.endControl.add(e, t),
          this.end.add(e, t)
        );
      }),
      (A.prototype.reverse = function () {
        return new A(this.end, this.endControl, this.startControl, this.start);
      }),
      A
    );
  })(),
  We = function (A) {
    return A.type === 1;
  },
  GL = (function () {
    function A(e) {
      var t = e.styles,
        r = e.bounds,
        n = to(t.borderTopLeftRadius, r.width, r.height),
        i = n[0],
        o = n[1],
        a = to(t.borderTopRightRadius, r.width, r.height),
        s = a[0],
        l = a[1],
        u = to(t.borderBottomRightRadius, r.width, r.height),
        c = u[0],
        f = u[1],
        h = to(t.borderBottomLeftRadius, r.width, r.height),
        g = h[0],
        p = h[1],
        F = [];
      F.push((i + s) / r.width),
        F.push((g + c) / r.width),
        F.push((o + p) / r.height),
        F.push((l + f) / r.height);
      var B = Math.max.apply(Math, F);
      B > 1 &&
        ((i /= B),
        (o /= B),
        (s /= B),
        (l /= B),
        (c /= B),
        (f /= B),
        (g /= B),
        (p /= B));
      var d = r.width - s,
        w = r.height - f,
        C = r.width - c,
        m = r.height - p,
        y = t.borderTopWidth,
        E = t.borderRightWidth,
        v = t.borderBottomWidth,
        x = t.borderLeftWidth,
        H = QA(t.paddingTop, e.bounds.width),
        L = QA(t.paddingRight, e.bounds.width),
        O = QA(t.paddingBottom, e.bounds.width),
        R = QA(t.paddingLeft, e.bounds.width);
      (this.topLeftBorderDoubleOuterBox =
        i > 0 || o > 0
          ? HA(r.left + x / 3, r.top + y / 3, i - x / 3, o - y / 3, hA.TOP_LEFT)
          : new G(r.left + x / 3, r.top + y / 3)),
        (this.topRightBorderDoubleOuterBox =
          i > 0 || o > 0
            ? HA(r.left + d, r.top + y / 3, s - E / 3, l - y / 3, hA.TOP_RIGHT)
            : new G(r.left + r.width - E / 3, r.top + y / 3)),
        (this.bottomRightBorderDoubleOuterBox =
          c > 0 || f > 0
            ? HA(r.left + C, r.top + w, c - E / 3, f - v / 3, hA.BOTTOM_RIGHT)
            : new G(r.left + r.width - E / 3, r.top + r.height - v / 3)),
        (this.bottomLeftBorderDoubleOuterBox =
          g > 0 || p > 0
            ? HA(
                r.left + x / 3,
                r.top + m,
                g - x / 3,
                p - v / 3,
                hA.BOTTOM_LEFT
              )
            : new G(r.left + x / 3, r.top + r.height - v / 3)),
        (this.topLeftBorderDoubleInnerBox =
          i > 0 || o > 0
            ? HA(
                r.left + (x * 2) / 3,
                r.top + (y * 2) / 3,
                i - (x * 2) / 3,
                o - (y * 2) / 3,
                hA.TOP_LEFT
              )
            : new G(r.left + (x * 2) / 3, r.top + (y * 2) / 3)),
        (this.topRightBorderDoubleInnerBox =
          i > 0 || o > 0
            ? HA(
                r.left + d,
                r.top + (y * 2) / 3,
                s - (E * 2) / 3,
                l - (y * 2) / 3,
                hA.TOP_RIGHT
              )
            : new G(r.left + r.width - (E * 2) / 3, r.top + (y * 2) / 3)),
        (this.bottomRightBorderDoubleInnerBox =
          c > 0 || f > 0
            ? HA(
                r.left + C,
                r.top + w,
                c - (E * 2) / 3,
                f - (v * 2) / 3,
                hA.BOTTOM_RIGHT
              )
            : new G(
                r.left + r.width - (E * 2) / 3,
                r.top + r.height - (v * 2) / 3
              )),
        (this.bottomLeftBorderDoubleInnerBox =
          g > 0 || p > 0
            ? HA(
                r.left + (x * 2) / 3,
                r.top + m,
                g - (x * 2) / 3,
                p - (v * 2) / 3,
                hA.BOTTOM_LEFT
              )
            : new G(r.left + (x * 2) / 3, r.top + r.height - (v * 2) / 3)),
        (this.topLeftBorderStroke =
          i > 0 || o > 0
            ? HA(
                r.left + x / 2,
                r.top + y / 2,
                i - x / 2,
                o - y / 2,
                hA.TOP_LEFT
              )
            : new G(r.left + x / 2, r.top + y / 2)),
        (this.topRightBorderStroke =
          i > 0 || o > 0
            ? HA(r.left + d, r.top + y / 2, s - E / 2, l - y / 2, hA.TOP_RIGHT)
            : new G(r.left + r.width - E / 2, r.top + y / 2)),
        (this.bottomRightBorderStroke =
          c > 0 || f > 0
            ? HA(r.left + C, r.top + w, c - E / 2, f - v / 2, hA.BOTTOM_RIGHT)
            : new G(r.left + r.width - E / 2, r.top + r.height - v / 2)),
        (this.bottomLeftBorderStroke =
          g > 0 || p > 0
            ? HA(
                r.left + x / 2,
                r.top + m,
                g - x / 2,
                p - v / 2,
                hA.BOTTOM_LEFT
              )
            : new G(r.left + x / 2, r.top + r.height - v / 2)),
        (this.topLeftBorderBox =
          i > 0 || o > 0
            ? HA(r.left, r.top, i, o, hA.TOP_LEFT)
            : new G(r.left, r.top)),
        (this.topRightBorderBox =
          s > 0 || l > 0
            ? HA(r.left + d, r.top, s, l, hA.TOP_RIGHT)
            : new G(r.left + r.width, r.top)),
        (this.bottomRightBorderBox =
          c > 0 || f > 0
            ? HA(r.left + C, r.top + w, c, f, hA.BOTTOM_RIGHT)
            : new G(r.left + r.width, r.top + r.height)),
        (this.bottomLeftBorderBox =
          g > 0 || p > 0
            ? HA(r.left, r.top + m, g, p, hA.BOTTOM_LEFT)
            : new G(r.left, r.top + r.height)),
        (this.topLeftPaddingBox =
          i > 0 || o > 0
            ? HA(
                r.left + x,
                r.top + y,
                Math.max(0, i - x),
                Math.max(0, o - y),
                hA.TOP_LEFT
              )
            : new G(r.left + x, r.top + y)),
        (this.topRightPaddingBox =
          s > 0 || l > 0
            ? HA(
                r.left + Math.min(d, r.width - E),
                r.top + y,
                d > r.width + E ? 0 : Math.max(0, s - E),
                Math.max(0, l - y),
                hA.TOP_RIGHT
              )
            : new G(r.left + r.width - E, r.top + y)),
        (this.bottomRightPaddingBox =
          c > 0 || f > 0
            ? HA(
                r.left + Math.min(C, r.width - x),
                r.top + Math.min(w, r.height - v),
                Math.max(0, c - E),
                Math.max(0, f - v),
                hA.BOTTOM_RIGHT
              )
            : new G(r.left + r.width - E, r.top + r.height - v)),
        (this.bottomLeftPaddingBox =
          g > 0 || p > 0
            ? HA(
                r.left + x,
                r.top + Math.min(m, r.height - v),
                Math.max(0, g - x),
                Math.max(0, p - v),
                hA.BOTTOM_LEFT
              )
            : new G(r.left + x, r.top + r.height - v)),
        (this.topLeftContentBox =
          i > 0 || o > 0
            ? HA(
                r.left + x + R,
                r.top + y + H,
                Math.max(0, i - (x + R)),
                Math.max(0, o - (y + H)),
                hA.TOP_LEFT
              )
            : new G(r.left + x + R, r.top + y + H)),
        (this.topRightContentBox =
          s > 0 || l > 0
            ? HA(
                r.left + Math.min(d, r.width + x + R),
                r.top + y + H,
                d > r.width + x + R ? 0 : s - x + R,
                l - (y + H),
                hA.TOP_RIGHT
              )
            : new G(r.left + r.width - (E + L), r.top + y + H)),
        (this.bottomRightContentBox =
          c > 0 || f > 0
            ? HA(
                r.left + Math.min(C, r.width - (x + R)),
                r.top + Math.min(w, r.height + y + H),
                Math.max(0, c - (E + L)),
                f - (v + O),
                hA.BOTTOM_RIGHT
              )
            : new G(r.left + r.width - (E + L), r.top + r.height - (v + O))),
        (this.bottomLeftContentBox =
          g > 0 || p > 0
            ? HA(
                r.left + x + R,
                r.top + m,
                Math.max(0, g - (x + R)),
                p - (v + O),
                hA.BOTTOM_LEFT
              )
            : new G(r.left + x + R, r.top + r.height - (v + O)));
    }
    return A;
  })(),
  hA;
(function (A) {
  (A[(A.TOP_LEFT = 0)] = "TOP_LEFT"),
    (A[(A.TOP_RIGHT = 1)] = "TOP_RIGHT"),
    (A[(A.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
    (A[(A.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
})(hA || (hA = {}));
var HA = function (A, e, t, r, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3),
      o = t * i,
      a = r * i,
      s = A + t,
      l = e + r;
    switch (n) {
      case hA.TOP_LEFT:
        return new Cs(
          new G(A, l),
          new G(A, l - a),
          new G(s - o, e),
          new G(s, e)
        );
      case hA.TOP_RIGHT:
        return new Cs(
          new G(A, e),
          new G(A + o, e),
          new G(s, l - a),
          new G(s, l)
        );
      case hA.BOTTOM_RIGHT:
        return new Cs(
          new G(s, e),
          new G(s, e + a),
          new G(A + o, l),
          new G(A, l)
        );
      case hA.BOTTOM_LEFT:
      default:
        return new Cs(
          new G(s, l),
          new G(s - o, l),
          new G(A, e + a),
          new G(A, e)
        );
    }
  },
  Dl = function (A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox,
    ];
  },
  jL = function (A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox,
    ];
  },
  bl = function (A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox,
    ];
  },
  WL = (function () {
    function A(e, t, r) {
      (this.offsetX = e),
        (this.offsetY = t),
        (this.matrix = r),
        (this.type = 0),
        (this.target = 6);
    }
    return A;
  })(),
  Qs = (function () {
    function A(e, t) {
      (this.path = e), (this.target = t), (this.type = 1);
    }
    return A;
  })(),
  XL = (function () {
    function A(e) {
      (this.opacity = e), (this.type = 2), (this.target = 6);
    }
    return A;
  })(),
  zL = function (A) {
    return A.type === 0;
  },
  RC = function (A) {
    return A.type === 1;
  },
  JL = function (A) {
    return A.type === 2;
  },
  w0 = function (A, e) {
    return A.length === e.length
      ? A.some(function (t, r) {
          return t === e[r];
        })
      : !1;
  },
  YL = function (A, e, t, r, n) {
    return A.map(function (i, o) {
      switch (o) {
        case 0:
          return i.add(e, t);
        case 1:
          return i.add(e + r, t);
        case 2:
          return i.add(e + r, t + n);
        case 3:
          return i.add(e, t + n);
      }
      return i;
    });
  },
  KC = (function () {
    function A(e) {
      (this.element = e),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
    return A;
  })(),
  NC = (function () {
    function A(e, t) {
      if (
        ((this.container = e),
        (this.parent = t),
        (this.effects = []),
        (this.curves = new GL(this.container)),
        this.container.styles.opacity < 1 &&
          this.effects.push(new XL(this.container.styles.opacity)),
        this.container.styles.transform !== null)
      ) {
        var r =
            this.container.bounds.left +
            this.container.styles.transformOrigin[0].number,
          n =
            this.container.bounds.top +
            this.container.styles.transformOrigin[1].number,
          i = this.container.styles.transform;
        this.effects.push(new WL(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = Dl(this.curves),
          a = bl(this.curves);
        w0(o, a)
          ? this.effects.push(new Qs(o, 6))
          : (this.effects.push(new Qs(o, 2)), this.effects.push(new Qs(a, 4)));
      }
    }
    return (
      (A.prototype.getEffects = function (e) {
        for (
          var t = [2, 3].indexOf(this.container.styles.position) === -1,
            r = this.parent,
            n = this.effects.slice(0);
          r;

        ) {
          var i = r.effects.filter(function (s) {
            return !RC(s);
          });
          if (t || r.container.styles.position !== 0 || !r.parent) {
            if (
              (n.unshift.apply(n, i),
              (t = [2, 3].indexOf(r.container.styles.position) === -1),
              r.container.styles.overflowX !== 0)
            ) {
              var o = Dl(r.curves),
                a = bl(r.curves);
              w0(o, a) || n.unshift(new Qs(a, 6));
            }
          } else n.unshift.apply(n, i);
          r = r.parent;
        }
        return n.filter(function (s) {
          return ee(s.target, e);
        });
      }),
      A
    );
  })(),
  gd = function (A, e, t, r) {
    A.container.elements.forEach(function (n) {
      var i = ee(n.flags, 4),
        o = ee(n.flags, 2),
        a = new NC(n, A);
      ee(n.styles.display, 2048) && r.push(a);
      var s = ee(n.flags, 8) ? [] : r;
      if (i || o) {
        var l = i || n.styles.isPositioned() ? t : e,
          u = new KC(a);
        if (
          n.styles.isPositioned() ||
          n.styles.opacity < 1 ||
          n.styles.isTransformed()
        ) {
          var c = n.styles.zIndex.order;
          if (c < 0) {
            var f = 0;
            l.negativeZIndex.some(function (g, p) {
              return c > g.element.container.styles.zIndex.order
                ? ((f = p), !1)
                : f > 0;
            }),
              l.negativeZIndex.splice(f, 0, u);
          } else if (c > 0) {
            var h = 0;
            l.positiveZIndex.some(function (g, p) {
              return c >= g.element.container.styles.zIndex.order
                ? ((h = p + 1), !1)
                : h > 0;
            }),
              l.positiveZIndex.splice(h, 0, u);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
        } else
          n.styles.isFloating()
            ? l.nonPositionedFloats.push(u)
            : l.nonPositionedInlineLevel.push(u);
        gd(a, u, i ? u : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), gd(a, e, t, s);
      ee(n.flags, 8) && MC(n, s);
    });
  },
  MC = function (A, e) {
    for (
      var t = A instanceof ud ? A.start : 1,
        r = A instanceof ud ? A.reversed : !1,
        n = 0;
      n < e.length;
      n++
    ) {
      var i = e[n];
      i.container instanceof QC &&
        typeof i.container.value == "number" &&
        i.container.value !== 0 &&
        (t = i.container.value),
        (i.listValue = Go(t, i.container.styles.listStyleType, !0)),
        (t += r ? -1 : 1);
    }
  },
  ZL = function (A) {
    var e = new NC(A, null),
      t = new KC(e),
      r = [];
    return gd(e, t, t, r), MC(e.container, r), t;
  },
  v0 = function (A, e) {
    switch (e) {
      case 0:
        return Ye(
          A.topLeftBorderBox,
          A.topLeftPaddingBox,
          A.topRightBorderBox,
          A.topRightPaddingBox
        );
      case 1:
        return Ye(
          A.topRightBorderBox,
          A.topRightPaddingBox,
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return Ye(
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return Ye(
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderBox,
          A.topLeftPaddingBox
        );
    }
  },
  $L = function (A, e) {
    switch (e) {
      case 0:
        return Ye(
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox,
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox
        );
      case 1:
        return Ye(
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox,
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox
        );
      case 2:
        return Ye(
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox,
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox
        );
      case 3:
      default:
        return Ye(
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox,
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox
        );
    }
  },
  qL = function (A, e) {
    switch (e) {
      case 0:
        return Ye(
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox,
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox
        );
      case 1:
        return Ye(
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox,
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return Ye(
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return Ye(
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox
        );
    }
  },
  AT = function (A, e) {
    switch (e) {
      case 0:
        return ys(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return ys(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return ys(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      case 3:
      default:
        return ys(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  },
  ys = function (A, e) {
    var t = [];
    return (
      We(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A),
      We(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e),
      t
    );
  },
  Ye = function (A, e, t, r) {
    var n = [];
    return (
      We(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A),
      We(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t),
      We(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
      We(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
      n
    );
  },
  _C = function (A) {
    var e = A.bounds,
      t = A.styles;
    return e.add(
      t.borderLeftWidth,
      t.borderTopWidth,
      -(t.borderRightWidth + t.borderLeftWidth),
      -(t.borderTopWidth + t.borderBottomWidth)
    );
  },
  Ol = function (A) {
    var e = A.styles,
      t = A.bounds,
      r = QA(e.paddingLeft, t.width),
      n = QA(e.paddingRight, t.width),
      i = QA(e.paddingTop, t.width),
      o = QA(e.paddingBottom, t.width);
    return t.add(
      r + e.borderLeftWidth,
      i + e.borderTopWidth,
      -(e.borderRightWidth + e.borderLeftWidth + r + n),
      -(e.borderTopWidth + e.borderBottomWidth + i + o)
    );
  },
  eT = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? Ol(e) : _C(e);
  },
  tT = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? Ol(e) : _C(e);
  },
  _c = function (A, e, t) {
    var r = eT(On(A.styles.backgroundOrigin, e), A),
      n = tT(On(A.styles.backgroundClip, e), A),
      i = rT(On(A.styles.backgroundSize, e), t, r),
      o = i[0],
      a = i[1],
      s = to(On(A.styles.backgroundPosition, e), r.width - o, r.height - a),
      l = nT(On(A.styles.backgroundRepeat, e), s, i, r, n),
      u = Math.round(r.left + s[0]),
      c = Math.round(r.top + s[1]);
    return [l, u, c, o, a];
  },
  Dn = function (A) {
    return CA(A) && A.value === ii.AUTO;
  },
  Us = function (A) {
    return typeof A == "number";
  },
  rT = function (A, e, t) {
    var r = e[0],
      n = e[1],
      i = e[2],
      o = A[0],
      a = A[1];
    if (!o) return [0, 0];
    if (ZA(o) && a && ZA(a)) return [QA(o, t.width), QA(a, t.height)];
    var s = Us(i);
    if (CA(o) && (o.value === ii.CONTAIN || o.value === ii.COVER)) {
      if (Us(i)) {
        var l = t.width / t.height;
        return l < i != (o.value === ii.COVER)
          ? [t.width, t.width / i]
          : [t.height * i, t.height];
      }
      return [t.width, t.height];
    }
    var u = Us(r),
      c = Us(n),
      f = u || c;
    if (Dn(o) && (!a || Dn(a))) {
      if (u && c) return [r, n];
      if (!s && !f) return [t.width, t.height];
      if (f && s) {
        var h = u ? r : n * i,
          g = c ? n : r / i;
        return [h, g];
      }
      var p = u ? r : t.width,
        F = c ? n : t.height;
      return [p, F];
    }
    if (s) {
      var B = 0,
        d = 0;
      return (
        ZA(o) ? (B = QA(o, t.width)) : ZA(a) && (d = QA(a, t.height)),
        Dn(o) ? (B = d * i) : (!a || Dn(a)) && (d = B / i),
        [B, d]
      );
    }
    var w = null,
      C = null;
    if (
      (ZA(o) ? (w = QA(o, t.width)) : a && ZA(a) && (C = QA(a, t.height)),
      w !== null && (!a || Dn(a)) && (C = u && c ? (w / r) * n : t.height),
      C !== null && Dn(o) && (w = u && c ? (C / n) * r : t.width),
      w !== null && C !== null)
    )
      return [w, C];
    throw new Error("Unable to calculate background-size for element");
  },
  On = function (A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  },
  nT = function (A, e, t, r, n) {
    var i = e[0],
      o = e[1],
      a = t[0],
      s = t[1];
    switch (A) {
      case 2:
        return [
          new G(Math.round(r.left), Math.round(r.top + o)),
          new G(Math.round(r.left + r.width), Math.round(r.top + o)),
          new G(Math.round(r.left + r.width), Math.round(s + r.top + o)),
          new G(Math.round(r.left), Math.round(s + r.top + o)),
        ];
      case 3:
        return [
          new G(Math.round(r.left + i), Math.round(r.top)),
          new G(Math.round(r.left + i + a), Math.round(r.top)),
          new G(Math.round(r.left + i + a), Math.round(r.height + r.top)),
          new G(Math.round(r.left + i), Math.round(r.height + r.top)),
        ];
      case 1:
        return [
          new G(Math.round(r.left + i), Math.round(r.top + o)),
          new G(Math.round(r.left + i + a), Math.round(r.top + o)),
          new G(Math.round(r.left + i + a), Math.round(r.top + o + s)),
          new G(Math.round(r.left + i), Math.round(r.top + o + s)),
        ];
      default:
        return [
          new G(Math.round(n.left), Math.round(n.top)),
          new G(Math.round(n.left + n.width), Math.round(n.top)),
          new G(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new G(Math.round(n.left), Math.round(n.height + n.top)),
        ];
    }
  },
  iT =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  m0 = "Hidden Text",
  oT = (function () {
    function A(e) {
      (this._data = {}), (this._document = e);
    }
    return (
      (A.prototype.parseMetrics = function (e, t) {
        var r = this._document.createElement("div"),
          n = this._document.createElement("img"),
          i = this._document.createElement("span"),
          o = this._document.body;
        (r.style.visibility = "hidden"),
          (r.style.fontFamily = e),
          (r.style.fontSize = t),
          (r.style.margin = "0"),
          (r.style.padding = "0"),
          (r.style.whiteSpace = "nowrap"),
          o.appendChild(r),
          (n.src = iT),
          (n.width = 1),
          (n.height = 1),
          (n.style.margin = "0"),
          (n.style.padding = "0"),
          (n.style.verticalAlign = "baseline"),
          (i.style.fontFamily = e),
          (i.style.fontSize = t),
          (i.style.margin = "0"),
          (i.style.padding = "0"),
          i.appendChild(this._document.createTextNode(m0)),
          r.appendChild(i),
          r.appendChild(n);
        var a = n.offsetTop - i.offsetTop + 2;
        r.removeChild(i),
          r.appendChild(this._document.createTextNode(m0)),
          (r.style.lineHeight = "normal"),
          (n.style.verticalAlign = "super");
        var s = n.offsetTop - r.offsetTop + 2;
        return o.removeChild(r), { baseline: a, middle: s };
      }),
      (A.prototype.getMetrics = function (e, t) {
        var r = e + " " + t;
        return (
          typeof this._data[r] > "u" &&
            (this._data[r] = this.parseMetrics(e, t)),
          this._data[r]
        );
      }),
      A
    );
  })(),
  kC = (function () {
    function A(e, t) {
      (this.context = e), (this.options = t);
    }
    return A;
  })(),
  aT = 1e4,
  sT = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n._activeEffects = []),
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        r.canvas ||
          ((n.canvas.width = Math.floor(r.width * r.scale)),
          (n.canvas.height = Math.floor(r.height * r.scale)),
          (n.canvas.style.width = r.width + "px"),
          (n.canvas.style.height = r.height + "px")),
        (n.fontMetrics = new oT(document)),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        (n.ctx.textBaseline = "bottom"),
        (n._activeEffects = []),
        n.context.logger.debug(
          "Canvas renderer initialized (" +
            r.width +
            "x" +
            r.height +
            ") with scale " +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.applyEffects = function (t) {
        for (var r = this; this._activeEffects.length; ) this.popEffect();
        t.forEach(function (n) {
          return r.applyEffect(n);
        });
      }),
      (e.prototype.applyEffect = function (t) {
        this.ctx.save(),
          JL(t) && (this.ctx.globalAlpha = t.opacity),
          zL(t) &&
            (this.ctx.translate(t.offsetX, t.offsetY),
            this.ctx.transform(
              t.matrix[0],
              t.matrix[1],
              t.matrix[2],
              t.matrix[3],
              t.matrix[4],
              t.matrix[5]
            ),
            this.ctx.translate(-t.offsetX, -t.offsetY)),
          RC(t) && (this.path(t.path), this.ctx.clip()),
          this._activeEffects.push(t);
      }),
      (e.prototype.popEffect = function () {
        this._activeEffects.pop(), this.ctx.restore();
      }),
      (e.prototype.renderStack = function (t) {
        return ve(this, void 0, void 0, function () {
          var r;
          return Be(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = t.element.container.styles),
                  r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderNode = function (t) {
        return ve(this, void 0, void 0, function () {
          return Be(this, function (r) {
            switch (r.label) {
              case 0:
                if (ee(t.container.flags, 16)) debugger;
                return t.container.styles.isVisible()
                  ? [4, this.renderNodeBackgroundAndBorders(t)]
                  : [3, 3];
              case 1:
                return r.sent(), [4, this.renderNodeContent(t)];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderTextWithLetterSpacing = function (t, r, n) {
        var i = this;
        if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
        else {
          var o = NB(t.text);
          o.reduce(function (a, s) {
            return (
              i.ctx.fillText(s, a, t.bounds.top + n),
              a + i.ctx.measureText(s).width
            );
          }, t.bounds.left);
        }
      }),
      (e.prototype.createFontStyle = function (t) {
        var r = t.fontVariant
            .filter(function (o) {
              return o === "normal" || o === "small-caps";
            })
            .join(""),
          n = dT(t.fontFamily).join(", "),
          i = da(t.fontSize)
            ? "" + t.fontSize.number + t.fontSize.unit
            : t.fontSize.number + "px";
        return [[t.fontStyle, r, t.fontWeight, i, n].join(" "), n, i];
      }),
      (e.prototype.renderTextNode = function (t, r) {
        return ve(this, void 0, void 0, function () {
          var n,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            f = this;
          return Be(this, function (h) {
            return (
              (n = this.createFontStyle(r)),
              (i = n[0]),
              (o = n[1]),
              (a = n[2]),
              (this.ctx.font = i),
              (this.ctx.direction = r.direction === 1 ? "rtl" : "ltr"),
              (this.ctx.textAlign = "left"),
              (this.ctx.textBaseline = "alphabetic"),
              (s = this.fontMetrics.getMetrics(o, a)),
              (l = s.baseline),
              (u = s.middle),
              (c = r.paintOrder),
              t.textBounds.forEach(function (g) {
                c.forEach(function (p) {
                  switch (p) {
                    case 0:
                      (f.ctx.fillStyle = ne(r.color)),
                        f.renderTextWithLetterSpacing(g, r.letterSpacing, l);
                      var F = r.textShadow;
                      F.length &&
                        g.text.trim().length &&
                        (F.slice(0)
                          .reverse()
                          .forEach(function (B) {
                            (f.ctx.shadowColor = ne(B.color)),
                              (f.ctx.shadowOffsetX =
                                B.offsetX.number * f.options.scale),
                              (f.ctx.shadowOffsetY =
                                B.offsetY.number * f.options.scale),
                              (f.ctx.shadowBlur = B.blur.number),
                              f.renderTextWithLetterSpacing(
                                g,
                                r.letterSpacing,
                                l
                              );
                          }),
                        (f.ctx.shadowColor = ""),
                        (f.ctx.shadowOffsetX = 0),
                        (f.ctx.shadowOffsetY = 0),
                        (f.ctx.shadowBlur = 0)),
                        r.textDecorationLine.length &&
                          ((f.ctx.fillStyle = ne(
                            r.textDecorationColor || r.color
                          )),
                          r.textDecorationLine.forEach(function (B) {
                            switch (B) {
                              case 1:
                                f.ctx.fillRect(
                                  g.bounds.left,
                                  Math.round(g.bounds.top + l),
                                  g.bounds.width,
                                  1
                                );
                                break;
                              case 2:
                                f.ctx.fillRect(
                                  g.bounds.left,
                                  Math.round(g.bounds.top),
                                  g.bounds.width,
                                  1
                                );
                                break;
                              case 3:
                                f.ctx.fillRect(
                                  g.bounds.left,
                                  Math.ceil(g.bounds.top + u),
                                  g.bounds.width,
                                  1
                                );
                                break;
                            }
                          }));
                      break;
                    case 1:
                      r.webkitTextStrokeWidth &&
                        g.text.trim().length &&
                        ((f.ctx.strokeStyle = ne(r.webkitTextStrokeColor)),
                        (f.ctx.lineWidth = r.webkitTextStrokeWidth),
                        (f.ctx.lineJoin = window.chrome ? "miter" : "round"),
                        f.ctx.strokeText(
                          g.text,
                          g.bounds.left,
                          g.bounds.top + l
                        )),
                        (f.ctx.strokeStyle = ""),
                        (f.ctx.lineWidth = 0),
                        (f.ctx.lineJoin = "miter");
                      break;
                  }
                });
              }),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderReplacedElement = function (t, r, n) {
        if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
          var i = Ol(t),
            o = bl(r);
          this.path(o),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(
              n,
              0,
              0,
              t.intrinsicWidth,
              t.intrinsicHeight,
              i.left,
              i.top,
              i.width,
              i.height
            ),
            this.ctx.restore();
        }
      }),
      (e.prototype.renderNodeContent = function (t) {
        return ve(this, void 0, void 0, function () {
          var r,
            n,
            i,
            o,
            a,
            s,
            d,
            d,
            l,
            u,
            c,
            f,
            C,
            h,
            g,
            m,
            p,
            F,
            B,
            d,
            w,
            C,
            m;
          return Be(this, function (y) {
            switch (y.label) {
              case 0:
                this.applyEffects(t.getEffects(4)),
                  (r = t.container),
                  (n = t.curves),
                  (i = r.styles),
                  (o = 0),
                  (a = r.textNodes),
                  (y.label = 1);
              case 1:
                return o < a.length
                  ? ((s = a[o]), [4, this.renderTextNode(s, i)])
                  : [3, 4];
              case 2:
                y.sent(), (y.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                if (!(r instanceof vC)) return [3, 8];
                y.label = 5;
              case 5:
                return (
                  y.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)]
                );
              case 6:
                return (
                  (d = y.sent()), this.renderReplacedElement(r, n, d), [3, 8]
                );
              case 7:
                return (
                  y.sent(),
                  this.context.logger.error("Error loading image " + r.src),
                  [3, 8]
                );
              case 8:
                if (
                  (r instanceof mC &&
                    this.renderReplacedElement(r, n, r.canvas),
                  !(r instanceof CC))
                )
                  return [3, 12];
                y.label = 9;
              case 9:
                return (
                  y.trys.push([9, 11, , 12]),
                  [4, this.context.cache.match(r.svg)]
                );
              case 10:
                return (
                  (d = y.sent()), this.renderReplacedElement(r, n, d), [3, 12]
                );
              case 11:
                return (
                  y.sent(),
                  this.context.logger.error(
                    "Error loading svg " + r.svg.substring(0, 255)
                  ),
                  [3, 12]
                );
              case 12:
                return r instanceof FC && r.tree
                  ? ((l = new e(this.context, {
                      scale: this.options.scale,
                      backgroundColor: r.backgroundColor,
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height,
                    })),
                    [4, l.render(r.tree)])
                  : [3, 14];
              case 13:
                (u = y.sent()),
                  r.width &&
                    r.height &&
                    this.ctx.drawImage(
                      u,
                      0,
                      0,
                      r.width,
                      r.height,
                      r.bounds.left,
                      r.bounds.top,
                      r.bounds.width,
                      r.bounds.height
                    ),
                  (y.label = 14);
              case 14:
                if (
                  (r instanceof MB &&
                    ((c = Math.min(r.bounds.width, r.bounds.height)),
                    r.type === Hl
                      ? r.checked &&
                        (this.ctx.save(),
                        this.path([
                          new G(
                            r.bounds.left + c * 0.39363,
                            r.bounds.top + c * 0.79
                          ),
                          new G(
                            r.bounds.left + c * 0.16,
                            r.bounds.top + c * 0.5549
                          ),
                          new G(
                            r.bounds.left + c * 0.27347,
                            r.bounds.top + c * 0.44071
                          ),
                          new G(
                            r.bounds.left + c * 0.39694,
                            r.bounds.top + c * 0.5649
                          ),
                          new G(
                            r.bounds.left + c * 0.72983,
                            r.bounds.top + c * 0.23
                          ),
                          new G(
                            r.bounds.left + c * 0.84,
                            r.bounds.top + c * 0.34085
                          ),
                          new G(
                            r.bounds.left + c * 0.39363,
                            r.bounds.top + c * 0.79
                          ),
                        ]),
                        (this.ctx.fillStyle = ne(a0)),
                        this.ctx.fill(),
                        this.ctx.restore())
                      : r.type === Sl &&
                        r.checked &&
                        (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(
                          r.bounds.left + c / 2,
                          r.bounds.top + c / 2,
                          c / 4,
                          0,
                          Math.PI * 2,
                          !0
                        ),
                        (this.ctx.fillStyle = ne(a0)),
                        this.ctx.fill(),
                        this.ctx.restore())),
                  lT(r) && r.value.length)
                ) {
                  switch (
                    ((f = this.createFontStyle(i)),
                    (C = f[0]),
                    (h = f[1]),
                    (g = this.fontMetrics.getMetrics(C, h).baseline),
                    (this.ctx.font = C),
                    (this.ctx.fillStyle = ne(i.color)),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = cT(r.styles.textAlign)),
                    (m = Ol(r)),
                    (p = 0),
                    r.styles.textAlign)
                  ) {
                    case 1:
                      p += m.width / 2;
                      break;
                    case 2:
                      p += m.width;
                      break;
                  }
                  (F = m.add(p, 0, 0, -m.height / 2 + 1)),
                    this.ctx.save(),
                    this.path([
                      new G(m.left, m.top),
                      new G(m.left + m.width, m.top),
                      new G(m.left + m.width, m.top + m.height),
                      new G(m.left, m.top + m.height),
                    ]),
                    this.ctx.clip(),
                    this.renderTextWithLetterSpacing(
                      new wo(r.value, F),
                      i.letterSpacing,
                      g
                    ),
                    this.ctx.restore(),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = "left");
                }
                if (!ee(r.styles.display, 2048)) return [3, 20];
                if (r.styles.listStyleImage === null) return [3, 19];
                if (((B = r.styles.listStyleImage), B.type !== 0))
                  return [3, 18];
                (d = void 0), (w = B.url), (y.label = 15);
              case 15:
                return (
                  y.trys.push([15, 17, , 18]), [4, this.context.cache.match(w)]
                );
              case 16:
                return (
                  (d = y.sent()),
                  this.ctx.drawImage(
                    d,
                    r.bounds.left - (d.width + 10),
                    r.bounds.top
                  ),
                  [3, 18]
                );
              case 17:
                return (
                  y.sent(),
                  this.context.logger.error(
                    "Error loading list-style-image " + w
                  ),
                  [3, 18]
                );
              case 18:
                return [3, 20];
              case 19:
                t.listValue &&
                  r.styles.listStyleType !== -1 &&
                  ((C = this.createFontStyle(i)[0]),
                  (this.ctx.font = C),
                  (this.ctx.fillStyle = ne(i.color)),
                  (this.ctx.textBaseline = "middle"),
                  (this.ctx.textAlign = "right"),
                  (m = new Yt(
                    r.bounds.left,
                    r.bounds.top + QA(r.styles.paddingTop, r.bounds.width),
                    r.bounds.width,
                    Gp(i.lineHeight, i.fontSize.number) / 2 + 1
                  )),
                  this.renderTextWithLetterSpacing(
                    new wo(t.listValue, m),
                    i.letterSpacing,
                    Gp(i.lineHeight, i.fontSize.number) / 2 + 2
                  ),
                  (this.ctx.textBaseline = "bottom"),
                  (this.ctx.textAlign = "left")),
                  (y.label = 20);
              case 20:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderStackContent = function (t) {
        return ve(this, void 0, void 0, function () {
          var r, n, B, i, o, B, a, s, B, l, u, B, c, f, B, h, g, B, p, F, B;
          return Be(this, function (d) {
            switch (d.label) {
              case 0:
                if (ee(t.element.container.flags, 16)) debugger;
                return [4, this.renderNodeBackgroundAndBorders(t.element)];
              case 1:
                d.sent(), (r = 0), (n = t.negativeZIndex), (d.label = 2);
              case 2:
                return r < n.length
                  ? ((B = n[r]), [4, this.renderStack(B)])
                  : [3, 5];
              case 3:
                d.sent(), (d.label = 4);
              case 4:
                return r++, [3, 2];
              case 5:
                return [4, this.renderNodeContent(t.element)];
              case 6:
                d.sent(), (i = 0), (o = t.nonInlineLevel), (d.label = 7);
              case 7:
                return i < o.length
                  ? ((B = o[i]), [4, this.renderNode(B)])
                  : [3, 10];
              case 8:
                d.sent(), (d.label = 9);
              case 9:
                return i++, [3, 7];
              case 10:
                (a = 0), (s = t.nonPositionedFloats), (d.label = 11);
              case 11:
                return a < s.length
                  ? ((B = s[a]), [4, this.renderStack(B)])
                  : [3, 14];
              case 12:
                d.sent(), (d.label = 13);
              case 13:
                return a++, [3, 11];
              case 14:
                (l = 0), (u = t.nonPositionedInlineLevel), (d.label = 15);
              case 15:
                return l < u.length
                  ? ((B = u[l]), [4, this.renderStack(B)])
                  : [3, 18];
              case 16:
                d.sent(), (d.label = 17);
              case 17:
                return l++, [3, 15];
              case 18:
                (c = 0), (f = t.inlineLevel), (d.label = 19);
              case 19:
                return c < f.length
                  ? ((B = f[c]), [4, this.renderNode(B)])
                  : [3, 22];
              case 20:
                d.sent(), (d.label = 21);
              case 21:
                return c++, [3, 19];
              case 22:
                (h = 0),
                  (g = t.zeroOrAutoZIndexOrTransformedOrOpacity),
                  (d.label = 23);
              case 23:
                return h < g.length
                  ? ((B = g[h]), [4, this.renderStack(B)])
                  : [3, 26];
              case 24:
                d.sent(), (d.label = 25);
              case 25:
                return h++, [3, 23];
              case 26:
                (p = 0), (F = t.positiveZIndex), (d.label = 27);
              case 27:
                return p < F.length
                  ? ((B = F[p]), [4, this.renderStack(B)])
                  : [3, 30];
              case 28:
                d.sent(), (d.label = 29);
              case 29:
                return p++, [3, 27];
              case 30:
                return [2];
            }
          });
        });
      }),
      (e.prototype.mask = function (t) {
        this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(this.canvas.width, 0),
          this.ctx.lineTo(this.canvas.width, this.canvas.height),
          this.ctx.lineTo(0, this.canvas.height),
          this.ctx.lineTo(0, 0),
          this.formatPath(t.slice(0).reverse()),
          this.ctx.closePath();
      }),
      (e.prototype.path = function (t) {
        this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
      }),
      (e.prototype.formatPath = function (t) {
        var r = this;
        t.forEach(function (n, i) {
          var o = We(n) ? n.start : n;
          i === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y),
            We(n) &&
              r.ctx.bezierCurveTo(
                n.startControl.x,
                n.startControl.y,
                n.endControl.x,
                n.endControl.y,
                n.end.x,
                n.end.y
              );
        });
      }),
      (e.prototype.renderRepeat = function (t, r, n, i) {
        this.path(t),
          (this.ctx.fillStyle = r),
          this.ctx.translate(n, i),
          this.ctx.fill(),
          this.ctx.translate(-n, -i);
      }),
      (e.prototype.resizeImage = function (t, r, n) {
        var i;
        if (t.width === r && t.height === n) return t;
        var o =
            (i = this.canvas.ownerDocument) !== null && i !== void 0
              ? i
              : document,
          a = o.createElement("canvas");
        (a.width = Math.max(1, r)), (a.height = Math.max(1, n));
        var s = a.getContext("2d");
        return s.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), a;
      }),
      (e.prototype.renderBackgroundImage = function (t) {
        return ve(this, void 0, void 0, function () {
          var r, n, i, o, a, s;
          return Be(this, function (l) {
            switch (l.label) {
              case 0:
                (r = t.styles.backgroundImage.length - 1),
                  (n = function (u) {
                    var c,
                      f,
                      h,
                      H,
                      eA,
                      tA,
                      R,
                      P,
                      v,
                      g,
                      H,
                      eA,
                      tA,
                      R,
                      P,
                      p,
                      F,
                      B,
                      d,
                      w,
                      C,
                      m,
                      y,
                      E,
                      v,
                      x,
                      H,
                      L,
                      O,
                      R,
                      P,
                      J,
                      eA,
                      tA,
                      b,
                      D,
                      T,
                      M,
                      j,
                      rA,
                      nA,
                      vA;
                    return Be(this, function (_) {
                      switch (_.label) {
                        case 0:
                          if (u.type !== 0) return [3, 5];
                          (c = void 0), (f = u.url), (_.label = 1);
                        case 1:
                          return (
                            _.trys.push([1, 3, , 4]),
                            [4, i.context.cache.match(f)]
                          );
                        case 2:
                          return (c = _.sent()), [3, 4];
                        case 3:
                          return (
                            _.sent(),
                            i.context.logger.error(
                              "Error loading background-image " + f
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            c &&
                              ((h = _c(t, r, [
                                c.width,
                                c.height,
                                c.width / c.height,
                              ])),
                              (H = h[0]),
                              (eA = h[1]),
                              (tA = h[2]),
                              (R = h[3]),
                              (P = h[4]),
                              (v = i.ctx.createPattern(
                                i.resizeImage(c, R, P),
                                "repeat"
                              )),
                              i.renderRepeat(H, v, eA, tA)),
                            [3, 6]
                          );
                        case 5:
                          zx(u)
                            ? ((g = _c(t, r, [null, null, null])),
                              (H = g[0]),
                              (eA = g[1]),
                              (tA = g[2]),
                              (R = g[3]),
                              (P = g[4]),
                              (p = Vx(u.angle, R, P)),
                              (F = p[0]),
                              (B = p[1]),
                              (d = p[2]),
                              (w = p[3]),
                              (C = p[4]),
                              (m = document.createElement("canvas")),
                              (m.width = R),
                              (m.height = P),
                              (y = m.getContext("2d")),
                              (E = y.createLinearGradient(B, w, d, C)),
                              Pp(u.stops, F).forEach(function (iA) {
                                return E.addColorStop(iA.stop, ne(iA.color));
                              }),
                              (y.fillStyle = E),
                              y.fillRect(0, 0, R, P),
                              R > 0 &&
                                P > 0 &&
                                ((v = i.ctx.createPattern(m, "repeat")),
                                i.renderRepeat(H, v, eA, tA)))
                            : Jx(u) &&
                              ((x = _c(t, r, [null, null, null])),
                              (H = x[0]),
                              (L = x[1]),
                              (O = x[2]),
                              (R = x[3]),
                              (P = x[4]),
                              (J = u.position.length === 0 ? [OB] : u.position),
                              (eA = QA(J[0], R)),
                              (tA = QA(J[J.length - 1], P)),
                              (b = Gx(u, eA, tA, R, P)),
                              (D = b[0]),
                              (T = b[1]),
                              D > 0 &&
                                T > 0 &&
                                ((M = i.ctx.createRadialGradient(
                                  L + eA,
                                  O + tA,
                                  0,
                                  L + eA,
                                  O + tA,
                                  D
                                )),
                                Pp(u.stops, D * 2).forEach(function (iA) {
                                  return M.addColorStop(iA.stop, ne(iA.color));
                                }),
                                i.path(H),
                                (i.ctx.fillStyle = M),
                                D !== T
                                  ? ((j = t.bounds.left + 0.5 * t.bounds.width),
                                    (rA = t.bounds.top + 0.5 * t.bounds.height),
                                    (nA = T / D),
                                    (vA = 1 / nA),
                                    i.ctx.save(),
                                    i.ctx.translate(j, rA),
                                    i.ctx.transform(1, 0, 0, nA, 0, 0),
                                    i.ctx.translate(-j, -rA),
                                    i.ctx.fillRect(
                                      L,
                                      vA * (O - rA) + rA,
                                      R,
                                      P * vA
                                    ),
                                    i.ctx.restore())
                                  : i.ctx.fill())),
                            (_.label = 6);
                        case 6:
                          return r--, [2];
                      }
                    });
                  }),
                  (i = this),
                  (o = 0),
                  (a = t.styles.backgroundImage.slice(0).reverse()),
                  (l.label = 1);
              case 1:
                return o < a.length ? ((s = a[o]), [5, n(s)]) : [3, 4];
              case 2:
                l.sent(), (l.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderSolidBorder = function (t, r, n) {
        return ve(this, void 0, void 0, function () {
          return Be(this, function (i) {
            return (
              this.path(v0(n, r)),
              (this.ctx.fillStyle = ne(t)),
              this.ctx.fill(),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderDoubleBorder = function (t, r, n, i) {
        return ve(this, void 0, void 0, function () {
          var o, a;
          return Be(this, function (s) {
            switch (s.label) {
              case 0:
                return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
              case 1:
                return s.sent(), [2];
              case 2:
                return (
                  (o = $L(i, n)),
                  this.path(o),
                  (this.ctx.fillStyle = ne(t)),
                  this.ctx.fill(),
                  (a = qL(i, n)),
                  this.path(a),
                  this.ctx.fill(),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.renderNodeBackgroundAndBorders = function (t) {
        return ve(this, void 0, void 0, function () {
          var r,
            n,
            i,
            o,
            a,
            s,
            l,
            u,
            c = this;
          return Be(this, function (f) {
            switch (f.label) {
              case 0:
                return (
                  this.applyEffects(t.getEffects(2)),
                  (r = t.container.styles),
                  (n = !Tr(r.backgroundColor) || r.backgroundImage.length),
                  (i = [
                    {
                      style: r.borderTopStyle,
                      color: r.borderTopColor,
                      width: r.borderTopWidth,
                    },
                    {
                      style: r.borderRightStyle,
                      color: r.borderRightColor,
                      width: r.borderRightWidth,
                    },
                    {
                      style: r.borderBottomStyle,
                      color: r.borderBottomColor,
                      width: r.borderBottomWidth,
                    },
                    {
                      style: r.borderLeftStyle,
                      color: r.borderLeftColor,
                      width: r.borderLeftWidth,
                    },
                  ]),
                  (o = uT(On(r.backgroundClip, 0), t.curves)),
                  n || r.boxShadow.length
                    ? (this.ctx.save(),
                      this.path(o),
                      this.ctx.clip(),
                      Tr(r.backgroundColor) ||
                        ((this.ctx.fillStyle = ne(r.backgroundColor)),
                        this.ctx.fill()),
                      [4, this.renderBackgroundImage(t.container)])
                    : [3, 2]
                );
              case 1:
                f.sent(),
                  this.ctx.restore(),
                  r.boxShadow
                    .slice(0)
                    .reverse()
                    .forEach(function (h) {
                      c.ctx.save();
                      var g = Dl(t.curves),
                        p = h.inset ? 0 : aT,
                        F = YL(
                          g,
                          -p + (h.inset ? 1 : -1) * h.spread.number,
                          (h.inset ? 1 : -1) * h.spread.number,
                          h.spread.number * (h.inset ? -2 : 2),
                          h.spread.number * (h.inset ? -2 : 2)
                        );
                      h.inset
                        ? (c.path(g), c.ctx.clip(), c.mask(F))
                        : (c.mask(g), c.ctx.clip(), c.path(F)),
                        (c.ctx.shadowOffsetX = h.offsetX.number + p),
                        (c.ctx.shadowOffsetY = h.offsetY.number),
                        (c.ctx.shadowColor = ne(h.color)),
                        (c.ctx.shadowBlur = h.blur.number),
                        (c.ctx.fillStyle = h.inset
                          ? ne(h.color)
                          : "rgba(0,0,0,1)"),
                        c.ctx.fill(),
                        c.ctx.restore();
                    }),
                  (f.label = 2);
              case 2:
                (a = 0), (s = 0), (l = i), (f.label = 3);
              case 3:
                return s < l.length
                  ? ((u = l[s]),
                    u.style !== 0 && !Tr(u.color) && u.width > 0
                      ? u.style !== 2
                        ? [3, 5]
                        : [
                            4,
                            this.renderDashedDottedBorder(
                              u.color,
                              u.width,
                              a,
                              t.curves,
                              2
                            ),
                          ]
                      : [3, 11])
                  : [3, 13];
              case 4:
                return f.sent(), [3, 11];
              case 5:
                return u.style !== 3
                  ? [3, 7]
                  : [
                      4,
                      this.renderDashedDottedBorder(
                        u.color,
                        u.width,
                        a,
                        t.curves,
                        3
                      ),
                    ];
              case 6:
                return f.sent(), [3, 11];
              case 7:
                return u.style !== 4
                  ? [3, 9]
                  : [4, this.renderDoubleBorder(u.color, u.width, a, t.curves)];
              case 8:
                return f.sent(), [3, 11];
              case 9:
                return [4, this.renderSolidBorder(u.color, a, t.curves)];
              case 10:
                f.sent(), (f.label = 11);
              case 11:
                a++, (f.label = 12);
              case 12:
                return s++, [3, 3];
              case 13:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderDashedDottedBorder = function (t, r, n, i, o) {
        return ve(this, void 0, void 0, function () {
          var a, s, l, u, c, f, h, g, p, F, B, d, w, C, m, y, m, y;
          return Be(this, function (E) {
            return (
              this.ctx.save(),
              (a = AT(i, n)),
              (s = v0(i, n)),
              o === 2 && (this.path(s), this.ctx.clip()),
              We(s[0])
                ? ((l = s[0].start.x), (u = s[0].start.y))
                : ((l = s[0].x), (u = s[0].y)),
              We(s[1])
                ? ((c = s[1].end.x), (f = s[1].end.y))
                : ((c = s[1].x), (f = s[1].y)),
              n === 0 || n === 2
                ? (h = Math.abs(l - c))
                : (h = Math.abs(u - f)),
              this.ctx.beginPath(),
              o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)),
              (g = r < 3 ? r * 3 : r * 2),
              (p = r < 3 ? r * 2 : r),
              o === 3 && ((g = r), (p = r)),
              (F = !0),
              h <= g * 2
                ? (F = !1)
                : h <= g * 2 + p
                ? ((B = h / (2 * g + p)), (g *= B), (p *= B))
                : ((d = Math.floor((h + p) / (g + p))),
                  (w = (h - d * g) / (d - 1)),
                  (C = (h - (d + 1) * g) / d),
                  (p = C <= 0 || Math.abs(p - w) < Math.abs(p - C) ? w : C)),
              F &&
                (o === 3
                  ? this.ctx.setLineDash([0, g + p])
                  : this.ctx.setLineDash([g, p])),
              o === 3
                ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = r))
                : (this.ctx.lineWidth = r * 2 + 1.1),
              (this.ctx.strokeStyle = ne(t)),
              this.ctx.stroke(),
              this.ctx.setLineDash([]),
              o === 2 &&
                (We(s[0]) &&
                  ((m = s[3]),
                  (y = s[0]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new G(m.end.x, m.end.y),
                    new G(y.start.x, y.start.y),
                  ]),
                  this.ctx.stroke()),
                We(s[1]) &&
                  ((m = s[1]),
                  (y = s[2]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new G(m.end.x, m.end.y),
                    new G(y.start.x, y.start.y),
                  ]),
                  this.ctx.stroke())),
              this.ctx.restore(),
              [2]
            );
          });
        });
      }),
      (e.prototype.render = function (t) {
        return ve(this, void 0, void 0, function () {
          var r;
          return Be(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = ne(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height
                    )),
                  (r = ZL(t)),
                  [4, this.renderStack(r)]
                );
              case 1:
                return n.sent(), this.applyEffects([]), [2, this.canvas];
            }
          });
        });
      }),
      e
    );
  })(kC),
  lT = function (A) {
    return A instanceof UC || A instanceof yC
      ? !0
      : A instanceof MB && A.type !== Sl && A.type !== Hl;
  },
  uT = function (A, e) {
    switch (A) {
      case 0:
        return Dl(e);
      case 2:
        return jL(e);
      case 1:
      default:
        return bl(e);
    }
  },
  cT = function (A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  fT = ["-apple-system", "system-ui"],
  dT = function (A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? A.filter(function (e) {
          return fT.indexOf(e) === -1;
        })
      : A;
  },
  BT = (function (A) {
    dt(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        (n.options = r),
        (n.canvas.width = Math.floor(r.width * r.scale)),
        (n.canvas.height = Math.floor(r.height * r.scale)),
        (n.canvas.style.width = r.width + "px"),
        (n.canvas.style.height = r.height + "px"),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug(
          "EXPERIMENTAL ForeignObject renderer initialized (" +
            r.width +
            "x" +
            r.height +
            " at " +
            r.x +
            "," +
            r.y +
            ") with scale " +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.render = function (t) {
        return ve(this, void 0, void 0, function () {
          var r, n;
          return Be(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (r = ld(
                    this.options.width * this.options.scale,
                    this.options.height * this.options.scale,
                    this.options.scale,
                    this.options.scale,
                    t
                  )),
                  [4, gT(r)]
                );
              case 1:
                return (
                  (n = i.sent()),
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = ne(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      0,
                      0,
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale
                    )),
                  this.ctx.drawImage(
                    n,
                    -this.options.x * this.options.scale,
                    -this.options.y * this.options.scale
                  ),
                  [2, this.canvas]
                );
            }
          });
        });
      }),
      e
    );
  })(kC),
  gT = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        e(r);
      }),
        (r.onerror = t),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  hT = (function () {
    function A(e) {
      var t = e.id,
        r = e.enabled;
      (this.id = t), (this.enabled = r), (this.start = Date.now());
    }
    return (
      (A.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.debug == "function"
            ? console.debug.apply(
                console,
                ts([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.getTime = function () {
        return Date.now() - this.start;
      }),
      (A.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          typeof window < "u" &&
          window.console &&
          typeof console.info == "function" &&
          console.info.apply(console, ts([this.id, this.getTime() + "ms"], e));
      }),
      (A.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.warn == "function"
            ? console.warn.apply(
                console,
                ts([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.error == "function"
            ? console.error.apply(
                console,
                ts([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.instances = {}),
      A
    );
  })(),
  pT = (function () {
    function A(e, t) {
      var r;
      (this.windowBounds = t),
        (this.instanceName = "#" + A.instanceCount++),
        (this.logger = new hT({ id: this.instanceName, enabled: e.logging })),
        (this.cache =
          (r = e.cache) !== null && r !== void 0 ? r : new KL(this, e));
    }
    return (A.instanceCount = 1), A;
  })(),
  wT = function (A, e) {
    return e === void 0 && (e = {}), vT(A, e);
  };
typeof window < "u" && OC.setContext(window);
var vT = function (A, e) {
    return ve(void 0, void 0, void 0, function () {
      var t,
        r,
        n,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f,
        h,
        g,
        p,
        F,
        B,
        d,
        w,
        C,
        m,
        E,
        y,
        E,
        v,
        x,
        H,
        L,
        O,
        R,
        P,
        J,
        eA,
        tA,
        b,
        D,
        T,
        M,
        j,
        rA,
        nA;
      return Be(this, function (vA) {
        switch (vA.label) {
          case 0:
            if (!A || typeof A != "object")
              return [
                2,
                Promise.reject("Invalid element provided as first argument"),
              ];
            if (((t = A.ownerDocument), !t))
              throw new Error("Element is not attached to a Document");
            if (((r = t.defaultView), !r))
              throw new Error("Document is not attached to a Window");
            return (
              (n = {
                allowTaint:
                  (v = e.allowTaint) !== null && v !== void 0 ? v : !1,
                imageTimeout:
                  (x = e.imageTimeout) !== null && x !== void 0 ? x : 15e3,
                proxy: e.proxy,
                useCORS: (H = e.useCORS) !== null && H !== void 0 ? H : !1,
              }),
              (i = zf(
                {
                  logging: (L = e.logging) !== null && L !== void 0 ? L : !0,
                  cache: e.cache,
                },
                n
              )),
              (o = {
                windowWidth:
                  (O = e.windowWidth) !== null && O !== void 0
                    ? O
                    : r.innerWidth,
                windowHeight:
                  (R = e.windowHeight) !== null && R !== void 0
                    ? R
                    : r.innerHeight,
                scrollX:
                  (P = e.scrollX) !== null && P !== void 0 ? P : r.pageXOffset,
                scrollY:
                  (J = e.scrollY) !== null && J !== void 0 ? J : r.pageYOffset,
              }),
              (a = new Yt(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight)),
              (s = new pT(i, a)),
              (l =
                (eA = e.foreignObjectRendering) !== null && eA !== void 0
                  ? eA
                  : !1),
              (u = {
                allowTaint:
                  (tA = e.allowTaint) !== null && tA !== void 0 ? tA : !1,
                onclone: e.onclone,
                ignoreElements: e.ignoreElements,
                inlineImages: l,
                copyStyles: l,
              }),
              s.logger.debug(
                "Starting document clone with size " +
                  a.width +
                  "x" +
                  a.height +
                  " scrolled to " +
                  -a.left +
                  "," +
                  -a.top
              ),
              (c = new h0(s, A, u)),
              (f = c.clonedReferenceElement),
              f
                ? [4, c.toIFrame(t, a)]
                : [2, Promise.reject("Unable to find element in cloned iframe")]
            );
          case 1:
            return (
              (h = vA.sent()),
              (g = _B(f) || mL(f) ? Y4(f.ownerDocument) : Bu(s, f)),
              (p = g.width),
              (F = g.height),
              (B = g.left),
              (d = g.top),
              (w = mT(s, f, e.backgroundColor)),
              (C = {
                canvas: e.canvas,
                backgroundColor: w,
                scale:
                  (D =
                    (b = e.scale) !== null && b !== void 0
                      ? b
                      : r.devicePixelRatio) !== null && D !== void 0
                    ? D
                    : 1,
                x: ((T = e.x) !== null && T !== void 0 ? T : 0) + B,
                y: ((M = e.y) !== null && M !== void 0 ? M : 0) + d,
                width:
                  (j = e.width) !== null && j !== void 0 ? j : Math.ceil(p),
                height:
                  (rA = e.height) !== null && rA !== void 0 ? rA : Math.ceil(F),
              }),
              l
                ? (s.logger.debug(
                    "Document cloned, using foreign object rendering"
                  ),
                  (E = new BT(s, C)),
                  [4, E.render(f)])
                : [3, 3]
            );
          case 2:
            return (m = vA.sent()), [3, 5];
          case 3:
            return (
              s.logger.debug(
                "Document cloned, element located at " +
                  B +
                  "," +
                  d +
                  " with size " +
                  p +
                  "x" +
                  F +
                  " using computed rendering"
              ),
              s.logger.debug("Starting DOM parsing"),
              (y = IC(s, f)),
              w === y.styles.backgroundColor &&
                (y.styles.backgroundColor = Vt.TRANSPARENT),
              s.logger.debug(
                "Starting renderer for element at " +
                  C.x +
                  "," +
                  C.y +
                  " with size " +
                  C.width +
                  "x" +
                  C.height
              ),
              (E = new sT(s, C)),
              [4, E.render(y)]
            );
          case 4:
            (m = vA.sent()), (vA.label = 5);
          case 5:
            return (
              (!((nA = e.removeContainer) !== null && nA !== void 0) || nA) &&
                (h0.destroy(h) ||
                  s.logger.error(
                    "Cannot detach cloned iframe as it is not in the DOM anymore"
                  )),
              s.logger.debug("Finished rendering"),
              [2, m]
            );
        }
      });
    });
  },
  mT = function (A, e, t) {
    var r = e.ownerDocument,
      n = r.documentElement
        ? ho(A, getComputedStyle(r.documentElement).backgroundColor)
        : Vt.TRANSPARENT,
      i = r.body
        ? ho(A, getComputedStyle(r.body).backgroundColor)
        : Vt.TRANSPARENT,
      o =
        typeof t == "string"
          ? ho(A, t)
          : t === null
          ? Vt.TRANSPARENT
          : 4294967295;
    return e === r.documentElement ? (Tr(n) ? (Tr(i) ? o : i) : n) : o;
  };
function CT(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(A, r.key, r);
  }
}
function QT(A, e, t) {
  return (
    e && CT(A.prototype, e),
    Object.defineProperty(A, "prototype", { writable: !1 }),
    A
  );
}
var C0 = "(prefers-reduced-motion: reduce)",
  $n = 1,
  yT = 2,
  pi = 3,
  Ii = 4,
  Ba = 5,
  Ws = 6,
  Rl = 7,
  UT = {
    CREATED: $n,
    MOUNTED: yT,
    IDLE: pi,
    MOVING: Ii,
    SCROLLING: Ba,
    DRAGGING: Ws,
    DESTROYED: Rl,
  };
function Zt(A) {
  A.length = 0;
}
function Pr(A, e, t) {
  return Array.prototype.slice.call(A, e, t);
}
function UA(A) {
  return A.bind.apply(A, [null].concat(Pr(arguments, 1)));
}
var PC = setTimeout,
  hd = function () {};
function Q0(A) {
  return requestAnimationFrame(A);
}
function Uu(A, e) {
  return typeof e === A;
}
function jo(A) {
  return !PB(A) && Uu("object", A);
}
var kB = Array.isArray,
  VC = UA(Uu, "function"),
  Rr = UA(Uu, "string"),
  ga = UA(Uu, "undefined");
function PB(A) {
  return A === null;
}
function GC(A) {
  try {
    return A instanceof (A.ownerDocument.defaultView || window).HTMLElement;
  } catch {
    return !1;
  }
}
function ha(A) {
  return kB(A) ? A : [A];
}
function et(A, e) {
  ha(A).forEach(e);
}
function VB(A, e) {
  return A.indexOf(e) > -1;
}
function Xs(A, e) {
  return A.push.apply(A, ha(e)), A;
}
function Mt(A, e, t) {
  A &&
    et(e, function (r) {
      r && A.classList[t ? "add" : "remove"](r);
    });
}
function Qt(A, e) {
  Mt(A, Rr(e) ? e.split(" ") : e, !0);
}
function pa(A, e) {
  et(e, A.appendChild.bind(A));
}
function GB(A, e) {
  et(A, function (t) {
    var r = (e || t).parentNode;
    r && r.insertBefore(t, e);
  });
}
function Wo(A, e) {
  return GC(A) && (A.msMatchesSelector || A.matches).call(A, e);
}
function jC(A, e) {
  var t = A ? Pr(A.children) : [];
  return e
    ? t.filter(function (r) {
        return Wo(r, e);
      })
    : t;
}
function wa(A, e) {
  return e ? jC(A, e)[0] : A.firstElementChild;
}
var Xo = Object.keys;
function un(A, e, t) {
  return (
    A &&
      (t ? Xo(A).reverse() : Xo(A)).forEach(function (r) {
        r !== "__proto__" && e(A[r], r);
      }),
    A
  );
}
function zo(A) {
  return (
    Pr(arguments, 1).forEach(function (e) {
      un(e, function (t, r) {
        A[r] = e[r];
      });
    }),
    A
  );
}
function Qr(A) {
  return (
    Pr(arguments, 1).forEach(function (e) {
      un(e, function (t, r) {
        kB(t)
          ? (A[r] = t.slice())
          : jo(t)
          ? (A[r] = Qr({}, jo(A[r]) ? A[r] : {}, t))
          : (A[r] = t);
      });
    }),
    A
  );
}
function y0(A, e) {
  et(e || Xo(A), function (t) {
    delete A[t];
  });
}
function yt(A, e) {
  et(A, function (t) {
    et(e, function (r) {
      t && t.removeAttribute(r);
    });
  });
}
function aA(A, e, t) {
  jo(e)
    ? un(e, function (r, n) {
        aA(A, n, r);
      })
    : et(A, function (r) {
        PB(t) || t === "" ? yt(r, e) : r.setAttribute(e, String(t));
      });
}
function oi(A, e, t) {
  var r = document.createElement(A);
  return e && (Rr(e) ? Qt(r, e) : aA(r, e)), t && pa(t, r), r;
}
function st(A, e, t) {
  if (ga(t)) return getComputedStyle(A)[e];
  PB(t) || (A.style[e] = "" + t);
}
function Jo(A, e) {
  st(A, "display", e);
}
function WC(A) {
  (A.setActive && A.setActive()) || A.focus({ preventScroll: !0 });
}
function lt(A, e) {
  return A.getAttribute(e);
}
function U0(A, e) {
  return A && A.classList.contains(e);
}
function Xe(A) {
  return A.getBoundingClientRect();
}
function pn(A) {
  et(A, function (e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  });
}
function XC(A) {
  return wa(new DOMParser().parseFromString(A, "text/html").body);
}
function Rt(A, e) {
  A.preventDefault(), e && (A.stopPropagation(), A.stopImmediatePropagation());
}
function zC(A, e) {
  return A && A.querySelector(e);
}
function jB(A, e) {
  return e ? Pr(A.querySelectorAll(e)) : [];
}
function _t(A, e) {
  Mt(A, e, !1);
}
function pd(A) {
  return A.timeStamp;
}
function Jr(A) {
  return Rr(A) ? A : A ? A + "px" : "";
}
var va = "splide",
  WB = "data-" + va;
function mo(A, e) {
  if (!A) throw new Error("[" + va + "] " + (e || ""));
}
var Kr = Math.min,
  Kl = Math.max,
  Nl = Math.floor,
  Yo = Math.ceil,
  Se = Math.abs;
function JC(A, e, t) {
  return Se(A - e) < t;
}
function zs(A, e, t, r) {
  var n = Kr(e, t),
    i = Kl(e, t);
  return r ? n < A && A < i : n <= A && A <= i;
}
function Rn(A, e, t) {
  var r = Kr(e, t),
    n = Kl(e, t);
  return Kr(Kl(r, A), n);
}
function wd(A) {
  return +(A > 0) - +(A < 0);
}
function vd(A, e) {
  return (
    et(e, function (t) {
      A = A.replace("%s", "" + t);
    }),
    A
  );
}
function XB(A) {
  return A < 10 ? "0" + A : "" + A;
}
var F0 = {};
function FT(A) {
  return "" + A + XB((F0[A] = (F0[A] || 0) + 1));
}
function YC() {
  var A = [];
  function e(o, a, s, l) {
    n(o, a, function (u, c, f) {
      var h = "addEventListener" in u,
        g = h
          ? u.removeEventListener.bind(u, c, s, l)
          : u.removeListener.bind(u, s);
      h ? u.addEventListener(c, s, l) : u.addListener(s),
        A.push([u, c, f, s, g]);
    });
  }
  function t(o, a, s) {
    n(o, a, function (l, u, c) {
      A = A.filter(function (f) {
        return f[0] === l && f[1] === u && f[2] === c && (!s || f[3] === s)
          ? (f[4](), !1)
          : !0;
      });
    });
  }
  function r(o, a, s) {
    var l,
      u = !0;
    return (
      typeof CustomEvent == "function"
        ? (l = new CustomEvent(a, { bubbles: u, detail: s }))
        : ((l = document.createEvent("CustomEvent")),
          l.initCustomEvent(a, u, !1, s)),
      o.dispatchEvent(l),
      l
    );
  }
  function n(o, a, s) {
    et(o, function (l) {
      l &&
        et(a, function (u) {
          u.split(" ").forEach(function (c) {
            var f = c.split(".");
            s(l, f[0], f[1]);
          });
        });
    });
  }
  function i() {
    A.forEach(function (o) {
      o[4]();
    }),
      Zt(A);
  }
  return { bind: e, unbind: t, dispatch: r, destroy: i };
}
var Vr = "mounted",
  md = "ready",
  $t = "move",
  xi = "moved",
  zB = "click",
  ZC = "active",
  $C = "inactive",
  qC = "visible",
  AQ = "hidden",
  qA = "refresh",
  ye = "updated",
  wi = "resize",
  Fu = "resized",
  eQ = "drag",
  tQ = "dragging",
  rQ = "dragged",
  Eu = "scroll",
  Un = "scrolled",
  ET = "overflow",
  JB = "destroy",
  nQ = "arrows:mounted",
  iQ = "arrows:updated",
  oQ = "pagination:mounted",
  aQ = "pagination:updated",
  YB = "navigation:mounted",
  ZB = "autoplay:play",
  sQ = "autoplay:playing",
  $B = "autoplay:pause",
  qB = "lazyload:loaded",
  lQ = "sk",
  uQ = "sh",
  Ml = "ei";
function KA(A) {
  var e = A ? A.event.bus : document.createDocumentFragment(),
    t = YC();
  function r(i, o) {
    t.bind(e, ha(i).join(" "), function (a) {
      o.apply(o, kB(a.detail) ? a.detail : []);
    });
  }
  function n(i) {
    t.dispatch(e, i, Pr(arguments, 1));
  }
  return (
    A && A.event.on(JB, t.destroy),
    zo(t, { bus: e, on: r, off: UA(t.unbind, e), emit: n })
  );
}
function Iu(A, e, t, r) {
  var n = Date.now,
    i,
    o = 0,
    a,
    s = !0,
    l = 0;
  function u() {
    if (!s) {
      if (
        ((o = A ? Kr((n() - i) / A, 1) : 1),
        t && t(o),
        o >= 1 && (e(), (i = n()), r && ++l >= r))
      )
        return f();
      a = Q0(u);
    }
  }
  function c(B) {
    B || g(), (i = n() - (B ? o * A : 0)), (s = !1), (a = Q0(u));
  }
  function f() {
    s = !0;
  }
  function h() {
    (i = n()), (o = 0), t && t(o);
  }
  function g() {
    a && cancelAnimationFrame(a), (o = 0), (a = 0), (s = !0);
  }
  function p(B) {
    A = B;
  }
  function F() {
    return s;
  }
  return { start: c, rewind: h, pause: f, cancel: g, set: p, isPaused: F };
}
function IT(A) {
  var e = A;
  function t(n) {
    e = n;
  }
  function r(n) {
    return VB(ha(n), e);
  }
  return { set: t, is: r };
}
function xT(A, e) {
  var t = Iu(0, A, null, 1);
  return function () {
    t.isPaused() && t.start();
  };
}
function HT(A, e, t) {
  var r = A.state,
    n = t.breakpoints || {},
    i = t.reducedMotion || {},
    o = YC(),
    a = [];
  function s() {
    var g = t.mediaQuery === "min";
    Xo(n)
      .sort(function (p, F) {
        return g ? +p - +F : +F - +p;
      })
      .forEach(function (p) {
        u(n[p], "(" + (g ? "min" : "max") + "-width:" + p + "px)");
      }),
      u(i, C0),
      c();
  }
  function l(g) {
    g && o.destroy();
  }
  function u(g, p) {
    var F = matchMedia(p);
    o.bind(F, "change", c), a.push([g, F]);
  }
  function c() {
    var g = r.is(Rl),
      p = t.direction,
      F = a.reduce(function (B, d) {
        return Qr(B, d[1].matches ? d[0] : {});
      }, {});
    y0(t),
      h(F),
      t.destroy
        ? A.destroy(t.destroy === "completely")
        : g
        ? (l(!0), A.mount())
        : p !== t.direction && A.refresh();
  }
  function f(g) {
    matchMedia(C0).matches && (g ? Qr(t, i) : y0(t, Xo(i)));
  }
  function h(g, p, F) {
    Qr(t, g),
      p && Qr(Object.getPrototypeOf(t), g),
      (F || !r.is($n)) && A.emit(ye, t);
  }
  return { setup: s, destroy: l, reduce: f, set: h };
}
var xu = "Arrow",
  Hu = xu + "Left",
  Su = xu + "Right",
  cQ = xu + "Up",
  fQ = xu + "Down",
  E0 = "rtl",
  Lu = "ttb",
  kc = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [cQ, Su],
    ArrowRight: [fQ, Hu],
  };
function ST(A, e, t) {
  function r(i, o, a) {
    a = a || t.direction;
    var s = a === E0 && !o ? 1 : a === Lu ? 0 : -1;
    return (
      (kc[i] && kc[i][s]) ||
      i.replace(/width|left|right/i, function (l, u) {
        var c = kc[l.toLowerCase()][s] || l;
        return u > 0 ? c.charAt(0).toUpperCase() + c.slice(1) : c;
      })
    );
  }
  function n(i) {
    return i * (t.direction === E0 ? 1 : -1);
  }
  return { resolve: r, orient: n };
}
var Gt = "role",
  ai = "tabindex",
  LT = "disabled",
  Bt = "aria-",
  ma = Bt + "controls",
  dQ = Bt + "current",
  I0 = Bt + "selected",
  Ze = Bt + "label",
  Ag = Bt + "labelledby",
  BQ = Bt + "hidden",
  eg = Bt + "orientation",
  Zo = Bt + "roledescription",
  x0 = Bt + "live",
  H0 = Bt + "busy",
  S0 = Bt + "atomic",
  tg = [Gt, ai, LT, ma, dQ, Ze, Ag, BQ, eg, Zo],
  It = va + "__",
  Gr = "is-",
  Pc = va,
  L0 = It + "track",
  TT = It + "list",
  Tu = It + "slide",
  gQ = Tu + "--clone",
  DT = Tu + "__container",
  rg = It + "arrows",
  Du = It + "arrow",
  hQ = Du + "--prev",
  pQ = Du + "--next",
  bu = It + "pagination",
  wQ = bu + "__page",
  bT = It + "progress",
  OT = bT + "__bar",
  RT = It + "toggle",
  KT = It + "spinner",
  NT = It + "sr",
  MT = Gr + "initialized",
  wn = Gr + "active",
  vQ = Gr + "prev",
  mQ = Gr + "next",
  Cd = Gr + "visible",
  Qd = Gr + "loading",
  CQ = Gr + "focus-in",
  QQ = Gr + "overflow",
  _T = [wn, Cd, vQ, mQ, Qd, CQ, QQ],
  kT = {
    slide: Tu,
    clone: gQ,
    arrows: rg,
    arrow: Du,
    prev: hQ,
    next: pQ,
    pagination: bu,
    page: wQ,
    spinner: KT,
  };
function PT(A, e) {
  if (VC(A.closest)) return A.closest(e);
  for (var t = A; t && t.nodeType === 1 && !Wo(t, e); ) t = t.parentElement;
  return t;
}
var VT = 5,
  T0 = 200,
  yQ = "touchstart mousedown",
  Vc = "touchmove mousemove",
  Gc = "touchend touchcancel mouseup click";
function GT(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.bind,
    o = A.root,
    a = t.i18n,
    s = {},
    l = [],
    u = [],
    c = [],
    f,
    h,
    g;
  function p() {
    w(), C(), d();
  }
  function F() {
    n(qA, B),
      n(qA, p),
      n(ye, d),
      i(
        document,
        yQ + " keydown",
        function (E) {
          g = E.type === "keydown";
        },
        { capture: !0 }
      ),
      i(o, "focusin", function () {
        Mt(o, CQ, !!g);
      });
  }
  function B(E) {
    var v = tg.concat("style");
    Zt(l), _t(o, u), _t(f, c), yt([f, h], v), yt(o, E ? v : ["style", Zo]);
  }
  function d() {
    _t(o, u),
      _t(f, c),
      (u = y(Pc)),
      (c = y(L0)),
      Qt(o, u),
      Qt(f, c),
      aA(o, Ze, t.label),
      aA(o, Ag, t.labelledby);
  }
  function w() {
    (f = m("." + L0)),
      (h = wa(f, "." + TT)),
      mo(f && h, "A track/list element is missing."),
      Xs(l, jC(h, "." + Tu + ":not(." + gQ + ")")),
      un(
        { arrows: rg, pagination: bu, prev: hQ, next: pQ, bar: OT, toggle: RT },
        function (E, v) {
          s[v] = m("." + E);
        }
      ),
      zo(s, { root: o, track: f, list: h, slides: l });
  }
  function C() {
    var E = o.id || FT(va),
      v = t.role;
    (o.id = E),
      (f.id = f.id || E + "-track"),
      (h.id = h.id || E + "-list"),
      !lt(o, Gt) && o.tagName !== "SECTION" && v && aA(o, Gt, v),
      aA(o, Zo, a.carousel),
      aA(h, Gt, "presentation");
  }
  function m(E) {
    var v = zC(o, E);
    return v && PT(v, "." + Pc) === o ? v : void 0;
  }
  function y(E) {
    return [
      E + "--" + t.type,
      E + "--" + t.direction,
      t.drag && E + "--draggable",
      t.isNavigation && E + "--nav",
      E === Pc && wn,
    ];
  }
  return zo(s, { setup: p, mount: F, destroy: B });
}
var vi = "slide",
  Hi = "loop",
  Ca = "fade";
function jT(A, e, t, r) {
  var n = KA(A),
    i = n.on,
    o = n.emit,
    a = n.bind,
    s = A.Components,
    l = A.root,
    u = A.options,
    c = u.isNavigation,
    f = u.updateOnMove,
    h = u.i18n,
    g = u.pagination,
    p = u.slideFocus,
    F = s.Direction.resolve,
    B = lt(r, "style"),
    d = lt(r, Ze),
    w = t > -1,
    C = wa(r, "." + DT),
    m;
  function y() {
    w ||
      ((r.id = l.id + "-slide" + XB(e + 1)),
      aA(r, Gt, g ? "tabpanel" : "group"),
      aA(r, Zo, h.slide),
      aA(r, Ze, d || vd(h.slideLabel, [e + 1, A.length]))),
      E();
  }
  function E() {
    a(r, "click", UA(o, zB, b)),
      a(r, "keydown", UA(o, lQ, b)),
      i([xi, uQ, Un], L),
      i(YB, x),
      f && i($t, H);
  }
  function v() {
    (m = !0),
      n.destroy(),
      _t(r, _T),
      yt(r, tg),
      aA(r, "style", B),
      aA(r, Ze, d || "");
  }
  function x() {
    var D = A.splides
      .map(function (T) {
        var M = T.splide.Components.Slides.getAt(e);
        return M ? M.slide.id : "";
      })
      .join(" ");
    aA(r, Ze, vd(h.slideX, (w ? t : e) + 1)),
      aA(r, ma, D),
      aA(r, Gt, p ? "button" : ""),
      p && yt(r, Zo);
  }
  function H() {
    m || L();
  }
  function L() {
    if (!m) {
      var D = A.index;
      O(), R(), Mt(r, vQ, e === D - 1), Mt(r, mQ, e === D + 1);
    }
  }
  function O() {
    var D = J();
    D !== U0(r, wn) &&
      (Mt(r, wn, D), aA(r, dQ, (c && D) || ""), o(D ? ZC : $C, b));
  }
  function R() {
    var D = eA(),
      T = !D && (!J() || w);
    if (
      (A.state.is([Ii, Ba]) || aA(r, BQ, T || ""),
      aA(jB(r, u.focusableNodes || ""), ai, T ? -1 : ""),
      p && aA(r, ai, T ? -1 : 0),
      D !== U0(r, Cd) && (Mt(r, Cd, D), o(D ? qC : AQ, b)),
      !D && document.activeElement === r)
    ) {
      var M = s.Slides.getAt(A.index);
      M && WC(M.slide);
    }
  }
  function P(D, T, M) {
    st((M && C) || r, D, T);
  }
  function J() {
    var D = A.index;
    return D === e || (u.cloneStatus && D === t);
  }
  function eA() {
    if (A.is(Ca)) return J();
    var D = Xe(s.Elements.track),
      T = Xe(r),
      M = F("left", !0),
      j = F("right", !0);
    return Nl(D[M]) <= Yo(T[M]) && Nl(T[j]) <= Yo(D[j]);
  }
  function tA(D, T) {
    var M = Se(D - e);
    return !w && (u.rewind || A.is(Hi)) && (M = Kr(M, A.length - M)), M <= T;
  }
  var b = {
    index: e,
    slideIndex: t,
    slide: r,
    container: C,
    isClone: w,
    mount: y,
    destroy: v,
    update: L,
    style: P,
    isWithin: tA,
  };
  return b;
}
function WT(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.emit,
    o = r.bind,
    a = e.Elements,
    s = a.slides,
    l = a.list,
    u = [];
  function c() {
    f(), n(qA, h), n(qA, f);
  }
  function f() {
    s.forEach(function (L, O) {
      p(L, O, -1);
    });
  }
  function h() {
    m(function (L) {
      L.destroy();
    }),
      Zt(u);
  }
  function g() {
    m(function (L) {
      L.update();
    });
  }
  function p(L, O, R) {
    var P = jT(A, O, R, L);
    P.mount(),
      u.push(P),
      u.sort(function (J, eA) {
        return J.index - eA.index;
      });
  }
  function F(L) {
    return L
      ? y(function (O) {
          return !O.isClone;
        })
      : u;
  }
  function B(L) {
    var O = e.Controller,
      R = O.toIndex(L),
      P = O.hasFocus() ? 1 : t.perPage;
    return y(function (J) {
      return zs(J.index, R, R + P - 1);
    });
  }
  function d(L) {
    return y(L)[0];
  }
  function w(L, O) {
    et(L, function (R) {
      if ((Rr(R) && (R = XC(R)), GC(R))) {
        var P = s[O];
        P ? GB(R, P) : pa(l, R), Qt(R, t.classes.slide), v(R, UA(i, wi));
      }
    }),
      i(qA);
  }
  function C(L) {
    pn(
      y(L).map(function (O) {
        return O.slide;
      })
    ),
      i(qA);
  }
  function m(L, O) {
    F(O).forEach(L);
  }
  function y(L) {
    return u.filter(
      VC(L)
        ? L
        : function (O) {
            return Rr(L) ? Wo(O.slide, L) : VB(ha(L), O.index);
          }
    );
  }
  function E(L, O, R) {
    m(function (P) {
      P.style(L, O, R);
    });
  }
  function v(L, O) {
    var R = jB(L, "img"),
      P = R.length;
    P
      ? R.forEach(function (J) {
          o(J, "load error", function () {
            --P || O();
          });
        })
      : O();
  }
  function x(L) {
    return L ? s.length : u.length;
  }
  function H() {
    return u.length > t.perPage;
  }
  return {
    mount: c,
    destroy: h,
    update: g,
    register: p,
    get: F,
    getIn: B,
    getAt: d,
    add: w,
    remove: C,
    forEach: m,
    filter: y,
    style: E,
    getLength: x,
    isEnough: H,
  };
}
function XT(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.bind,
    o = r.emit,
    a = e.Slides,
    s = e.Direction.resolve,
    l = e.Elements,
    u = l.root,
    c = l.track,
    f = l.list,
    h = a.getAt,
    g = a.style,
    p,
    F,
    B;
  function d() {
    w(), i(window, "resize load", xT(UA(o, wi))), n([ye, qA], w), n(wi, C);
  }
  function w() {
    (p = t.direction === Lu),
      st(u, "maxWidth", Jr(t.width)),
      st(c, s("paddingLeft"), m(!1)),
      st(c, s("paddingRight"), m(!0)),
      C(!0);
  }
  function C(b) {
    var D = Xe(u);
    (b || F.width !== D.width || F.height !== D.height) &&
      (st(c, "height", y()),
      g(s("marginRight"), Jr(t.gap)),
      g("width", v()),
      g("height", x(), !0),
      (F = D),
      o(Fu),
      B !== (B = tA()) && (Mt(u, QQ, B), o(ET, B)));
  }
  function m(b) {
    var D = t.padding,
      T = s(b ? "right" : "left");
    return (D && Jr(D[T] || (jo(D) ? 0 : D))) || "0px";
  }
  function y() {
    var b = "";
    return (
      p &&
        ((b = E()),
        mo(b, "height or heightRatio is missing."),
        (b = "calc(" + b + " - " + m(!1) + " - " + m(!0) + ")")),
      b
    );
  }
  function E() {
    return Jr(t.height || Xe(f).width * t.heightRatio);
  }
  function v() {
    return t.autoWidth ? null : Jr(t.fixedWidth) || (p ? "" : H());
  }
  function x() {
    return Jr(t.fixedHeight) || (p ? (t.autoHeight ? null : H()) : E());
  }
  function H() {
    var b = Jr(t.gap);
    return (
      "calc((100%" +
      (b && " + " + b) +
      ")/" +
      (t.perPage || 1) +
      (b && " - " + b) +
      ")"
    );
  }
  function L() {
    return Xe(f)[s("width")];
  }
  function O(b, D) {
    var T = h(b || 0);
    return T ? Xe(T.slide)[s("width")] + (D ? 0 : J()) : 0;
  }
  function R(b, D) {
    var T = h(b);
    if (T) {
      var M = Xe(T.slide)[s("right")],
        j = Xe(f)[s("left")];
      return Se(M - j) + (D ? 0 : J());
    }
    return 0;
  }
  function P(b) {
    return R(A.length - 1) - R(0) + O(0, b);
  }
  function J() {
    var b = h(0);
    return (b && parseFloat(st(b.slide, s("marginRight")))) || 0;
  }
  function eA(b) {
    return parseFloat(st(c, s("padding" + (b ? "Right" : "Left")))) || 0;
  }
  function tA() {
    return A.is(Ca) || P(!0) > L();
  }
  return {
    mount: d,
    resize: C,
    listSize: L,
    slideSize: O,
    sliderSize: P,
    totalSize: R,
    getPadding: eA,
    isOverflow: tA,
  };
}
var zT = 2;
function JT(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = e.Elements,
    o = e.Slides,
    a = e.Direction.resolve,
    s = [],
    l;
  function u() {
    n(qA, c), n([ye, wi], h), (l = F()) && (g(l), e.Layout.resize(!0));
  }
  function c() {
    f(), u();
  }
  function f() {
    pn(s), Zt(s), r.destroy();
  }
  function h() {
    var B = F();
    l !== B && (l < B || !B) && r.emit(qA);
  }
  function g(B) {
    var d = o.get().slice(),
      w = d.length;
    if (w) {
      for (; d.length < B; ) Xs(d, d);
      Xs(d.slice(-B), d.slice(0, B)).forEach(function (C, m) {
        var y = m < B,
          E = p(C.slide, m);
        y ? GB(E, d[0].slide) : pa(i.list, E),
          Xs(s, E),
          o.register(E, m - B + (y ? 0 : w), C.index);
      });
    }
  }
  function p(B, d) {
    var w = B.cloneNode(!0);
    return Qt(w, t.classes.clone), (w.id = A.root.id + "-clone" + XB(d + 1)), w;
  }
  function F() {
    var B = t.clones;
    if (!A.is(Hi)) B = 0;
    else if (ga(B)) {
      var d = t[a("fixedWidth")] && e.Layout.slideSize(0),
        w = d && Yo(Xe(i.track)[a("width")] / d);
      B = w || (t[a("autoWidth")] && A.length) || t.perPage * zT;
    }
    return B;
  }
  return { mount: u, destroy: f };
}
function YT(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.emit,
    o = A.state.set,
    a = e.Layout,
    s = a.slideSize,
    l = a.getPadding,
    u = a.totalSize,
    c = a.listSize,
    f = a.sliderSize,
    h = e.Direction,
    g = h.resolve,
    p = h.orient,
    F = e.Elements,
    B = F.list,
    d = F.track,
    w;
  function C() {
    (w = e.Transition), n([Vr, Fu, ye, qA], m);
  }
  function m() {
    e.Controller.isBusy() || (e.Scroll.cancel(), E(A.index), e.Slides.update());
  }
  function y(T, M, j, rA) {
    T !== M && b(T > j) && (L(), v(H(P(), T > j), !0)),
      o(Ii),
      i($t, M, j, T),
      w.start(M, function () {
        o(pi), i(xi, M, j, T), rA && rA();
      });
  }
  function E(T) {
    v(R(T, !0));
  }
  function v(T, M) {
    if (!A.is(Ca)) {
      var j = M ? T : x(T);
      st(B, "transform", "translate" + g("X") + "(" + j + "px)"),
        T !== j && i(uQ);
    }
  }
  function x(T) {
    if (A.is(Hi)) {
      var M = O(T),
        j = M > e.Controller.getEnd(),
        rA = M < 0;
      (rA || j) && (T = H(T, j));
    }
    return T;
  }
  function H(T, M) {
    var j = T - tA(M),
      rA = f();
    return (T -= p(rA * (Yo(Se(j) / rA) || 1)) * (M ? 1 : -1)), T;
  }
  function L() {
    v(P(), !0), w.cancel();
  }
  function O(T) {
    for (
      var M = e.Slides.get(), j = 0, rA = 1 / 0, nA = 0;
      nA < M.length;
      nA++
    ) {
      var vA = M[nA].index,
        _ = Se(R(vA, !0) - T);
      if (_ <= rA) (rA = _), (j = vA);
      else break;
    }
    return j;
  }
  function R(T, M) {
    var j = p(u(T - 1) - eA(T));
    return M ? J(j) : j;
  }
  function P() {
    var T = g("left");
    return Xe(B)[T] - Xe(d)[T] + p(l(!1));
  }
  function J(T) {
    return t.trimSpace && A.is(vi) && (T = Rn(T, 0, p(f(!0) - c()))), T;
  }
  function eA(T) {
    var M = t.focus;
    return M === "center" ? (c() - s(T, !0)) / 2 : +M * s(T) || 0;
  }
  function tA(T) {
    return R(T ? e.Controller.getEnd() : 0, !!t.trimSpace);
  }
  function b(T) {
    var M = p(H(P(), T));
    return T ? M >= 0 : M <= B[g("scrollWidth")] - Xe(d)[g("width")];
  }
  function D(T, M) {
    M = ga(M) ? P() : M;
    var j = T !== !0 && p(M) < p(tA(!1)),
      rA = T !== !1 && p(M) > p(tA(!0));
    return j || rA;
  }
  return {
    mount: C,
    move: y,
    jump: E,
    translate: v,
    shift: H,
    cancel: L,
    toIndex: O,
    toPosition: R,
    getPosition: P,
    getLimit: tA,
    exceededLimit: D,
    reposition: m,
  };
}
function ZT(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.emit,
    o = e.Move,
    a = o.getPosition,
    s = o.getLimit,
    l = o.toPosition,
    u = e.Slides,
    c = u.isEnough,
    f = u.getLength,
    h = t.omitEnd,
    g = A.is(Hi),
    p = A.is(vi),
    F = UA(P, !1),
    B = UA(P, !0),
    d = t.start || 0,
    w,
    C = d,
    m,
    y,
    E;
  function v() {
    x(), n([ye, qA, Ml], x), n(Fu, H);
  }
  function x() {
    (m = f(!0)), (y = t.perMove), (E = t.perPage), (w = b());
    var _ = Rn(d, 0, h ? w : m - 1);
    _ !== d && ((d = _), o.reposition());
  }
  function H() {
    w !== b() && i(Ml);
  }
  function L(_, iA, NA) {
    if (!vA()) {
      var MA = R(_),
        zA = tA(MA);
      zA > -1 && (iA || zA !== d) && (j(zA), o.move(MA, zA, C, NA));
    }
  }
  function O(_, iA, NA, MA) {
    e.Scroll.scroll(_, iA, NA, function () {
      var zA = tA(o.toIndex(a()));
      j(h ? Kr(zA, w) : zA), MA && MA();
    });
  }
  function R(_) {
    var iA = d;
    if (Rr(_)) {
      var NA = _.match(/([+\-<>])(\d+)?/) || [],
        MA = NA[1],
        zA = NA[2];
      MA === "+" || MA === "-"
        ? (iA = J(d + +("" + MA + (+zA || 1)), d))
        : MA === ">"
        ? (iA = zA ? D(+zA) : F(!0))
        : MA === "<" && (iA = B(!0));
    } else iA = g ? _ : Rn(_, 0, w);
    return iA;
  }
  function P(_, iA) {
    var NA = y || (nA() ? 1 : E),
      MA = J(d + NA * (_ ? -1 : 1), d, !(y || nA()));
    return MA === -1 && p && !JC(a(), s(!_), 1)
      ? _
        ? 0
        : w
      : iA
      ? MA
      : tA(MA);
  }
  function J(_, iA, NA) {
    if (c() || nA()) {
      var MA = eA(_);
      MA !== _ && ((iA = _), (_ = MA), (NA = !1)),
        _ < 0 || _ > w
          ? !y && (zs(0, _, iA, !0) || zs(w, iA, _, !0))
            ? (_ = D(T(_)))
            : g
            ? (_ = NA ? (_ < 0 ? -(m % E || E) : m) : _)
            : t.rewind
            ? (_ = _ < 0 ? w : 0)
            : (_ = -1)
          : NA && _ !== iA && (_ = D(T(iA) + (_ < iA ? -1 : 1)));
    } else _ = -1;
    return _;
  }
  function eA(_) {
    if (p && t.trimSpace === "move" && _ !== d)
      for (var iA = a(); iA === l(_, !0) && zs(_, 0, A.length - 1, !t.rewind); )
        _ < d ? --_ : ++_;
    return _;
  }
  function tA(_) {
    return g ? (_ + m) % m || 0 : _;
  }
  function b() {
    for (var _ = m - (nA() || (g && y) ? 1 : E); h && _-- > 0; )
      if (l(m - 1, !0) !== l(_, !0)) {
        _++;
        break;
      }
    return Rn(_, 0, m - 1);
  }
  function D(_) {
    return Rn(nA() ? _ : E * _, 0, w);
  }
  function T(_) {
    return nA() ? Kr(_, w) : Nl((_ >= w ? m - 1 : _) / E);
  }
  function M(_) {
    var iA = o.toIndex(_);
    return p ? Rn(iA, 0, w) : iA;
  }
  function j(_) {
    _ !== d && ((C = d), (d = _));
  }
  function rA(_) {
    return _ ? C : d;
  }
  function nA() {
    return !ga(t.focus) || t.isNavigation;
  }
  function vA() {
    return A.state.is([Ii, Ba]) && !!t.waitForTransition;
  }
  return {
    mount: v,
    go: L,
    scroll: O,
    getNext: F,
    getPrev: B,
    getAdjacent: P,
    getEnd: b,
    setIndex: j,
    getIndex: rA,
    toIndex: D,
    toPage: T,
    toDest: M,
    hasFocus: nA,
    isBusy: vA,
  };
}
var $T = "http://www.w3.org/2000/svg",
  qT =
    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  Fs = 40;
function AD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.bind,
    o = r.emit,
    a = t.classes,
    s = t.i18n,
    l = e.Elements,
    u = e.Controller,
    c = l.arrows,
    f = l.track,
    h = c,
    g = l.prev,
    p = l.next,
    F,
    B,
    d = {};
  function w() {
    m(), n(ye, C);
  }
  function C() {
    y(), w();
  }
  function m() {
    var O = t.arrows;
    O && !(g && p) && x(),
      g &&
        p &&
        (zo(d, { prev: g, next: p }),
        Jo(h, O ? "" : "none"),
        Qt(h, (B = rg + "--" + t.direction)),
        O && (E(), L(), aA([g, p], ma, f.id), o(nQ, g, p)));
  }
  function y() {
    r.destroy(),
      _t(h, B),
      F ? (pn(c ? [g, p] : h), (g = p = null)) : yt([g, p], tg);
  }
  function E() {
    n([Vr, xi, qA, Un, Ml], L),
      i(p, "click", UA(v, ">")),
      i(g, "click", UA(v, "<"));
  }
  function v(O) {
    u.go(O, !0);
  }
  function x() {
    (h = c || oi("div", a.arrows)),
      (g = H(!0)),
      (p = H(!1)),
      (F = !0),
      pa(h, [g, p]),
      !c && GB(h, f);
  }
  function H(O) {
    var R =
      '<button class="' +
      a.arrow +
      " " +
      (O ? a.prev : a.next) +
      '" type="button"><svg xmlns="' +
      $T +
      '" viewBox="0 0 ' +
      Fs +
      " " +
      Fs +
      '" width="' +
      Fs +
      '" height="' +
      Fs +
      '" focusable="false"><path d="' +
      (t.arrowPath || qT) +
      '" />';
    return XC(R);
  }
  function L() {
    if (g && p) {
      var O = A.index,
        R = u.getPrev(),
        P = u.getNext(),
        J = R > -1 && O < R ? s.last : s.prev,
        eA = P > -1 && O > P ? s.first : s.next;
      (g.disabled = R < 0),
        (p.disabled = P < 0),
        aA(g, Ze, J),
        aA(p, Ze, eA),
        o(iQ, g, p, R, P);
    }
  }
  return { arrows: d, mount: w, destroy: y, update: L };
}
var eD = WB + "-interval";
function tD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.bind,
    o = r.emit,
    a = Iu(t.interval, A.go.bind(A, ">"), E),
    s = a.isPaused,
    l = e.Elements,
    u = e.Elements,
    c = u.root,
    f = u.toggle,
    h = t.autoplay,
    g,
    p,
    F = h === "pause";
  function B() {
    h && (d(), f && aA(f, ma, l.track.id), F || w(), y());
  }
  function d() {
    t.pauseOnHover &&
      i(c, "mouseenter mouseleave", function (x) {
        (g = x.type === "mouseenter"), m();
      }),
      t.pauseOnFocus &&
        i(c, "focusin focusout", function (x) {
          (p = x.type === "focusin"), m();
        }),
      f &&
        i(f, "click", function () {
          F ? w() : C(!0);
        }),
      n([$t, Eu, qA], a.rewind),
      n($t, v);
  }
  function w() {
    s() &&
      e.Slides.isEnough() &&
      (a.start(!t.resetProgress), (p = g = F = !1), y(), o(ZB));
  }
  function C(x) {
    x === void 0 && (x = !0), (F = !!x), y(), s() || (a.pause(), o($B));
  }
  function m() {
    F || (g || p ? C(!1) : w());
  }
  function y() {
    f && (Mt(f, wn, !F), aA(f, Ze, t.i18n[F ? "play" : "pause"]));
  }
  function E(x) {
    var H = l.bar;
    H && st(H, "width", x * 100 + "%"), o(sQ, x);
  }
  function v(x) {
    var H = e.Slides.getAt(x);
    a.set((H && +lt(H.slide, eD)) || t.interval);
  }
  return { mount: B, destroy: a.cancel, play: w, pause: C, isPaused: s };
}
function rD(A, e, t) {
  var r = KA(A),
    n = r.on;
  function i() {
    t.cover && (n(qB, UA(a, !0)), n([Vr, ye, qA], UA(o, !0)));
  }
  function o(s) {
    e.Slides.forEach(function (l) {
      var u = wa(l.container || l.slide, "img");
      u && u.src && a(s, u, l);
    });
  }
  function a(s, l, u) {
    u.style(
      "background",
      s ? 'center/cover no-repeat url("' + l.src + '")' : "",
      !0
    ),
      Jo(l, s ? "none" : "");
  }
  return { mount: i, destroy: UA(o, !1) };
}
var nD = 10,
  iD = 600,
  oD = 0.6,
  aD = 1.5,
  sD = 800;
function lD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.emit,
    o = A.state.set,
    a = e.Move,
    s = a.getPosition,
    l = a.getLimit,
    u = a.exceededLimit,
    c = a.translate,
    f = A.is(vi),
    h,
    g,
    p = 1;
  function F() {
    n($t, C), n([ye, qA], m);
  }
  function B(E, v, x, H, L) {
    var O = s();
    if ((C(), x && (!f || !u()))) {
      var R = e.Layout.sliderSize(),
        P = wd(E) * R * Nl(Se(E) / R) || 0;
      E = a.toPosition(e.Controller.toDest(E % R)) + P;
    }
    var J = JC(O, E, 1);
    (p = 1),
      (v = J ? 0 : v || Kl(Se(E - O) / aD, sD)),
      (g = H),
      (h = Iu(v, d, UA(w, O, E, L), 1)),
      o(Ba),
      i(Eu),
      h.start();
  }
  function d() {
    o(pi), g && g(), i(Un);
  }
  function w(E, v, x, H) {
    var L = s(),
      O = E + (v - E) * y(H),
      R = (O - L) * p;
    c(L + R),
      f && !x && u() && ((p *= oD), Se(R) < nD && B(l(u(!0)), iD, !1, g, !0));
  }
  function C() {
    h && h.cancel();
  }
  function m() {
    h && !h.isPaused() && (C(), d());
  }
  function y(E) {
    var v = t.easingFunc;
    return v ? v(E) : 1 - Math.pow(1 - E, 4);
  }
  return { mount: F, destroy: C, scroll: B, cancel: m };
}
var Kn = { passive: !1, capture: !0 };
function uD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.emit,
    o = r.bind,
    a = r.unbind,
    s = A.state,
    l = e.Move,
    u = e.Scroll,
    c = e.Controller,
    f = e.Elements.track,
    h = e.Media.reduce,
    g = e.Direction,
    p = g.resolve,
    F = g.orient,
    B = l.getPosition,
    d = l.exceededLimit,
    w,
    C,
    m,
    y,
    E,
    v = !1,
    x,
    H,
    L;
  function O() {
    o(f, Vc, hd, Kn),
      o(f, Gc, hd, Kn),
      o(f, yQ, P, Kn),
      o(f, "click", tA, { capture: !0 }),
      o(f, "dragstart", Rt),
      n([Vr, ye], R);
  }
  function R() {
    var Y = t.drag;
    Qa(!Y), (y = Y === "free");
  }
  function P(Y) {
    if (((x = !1), !H)) {
      var sA = zA(Y);
      MA(Y.target) &&
        (sA || !Y.button) &&
        (c.isBusy()
          ? Rt(Y, !0)
          : ((L = sA ? f : window),
            (E = s.is([Ii, Ba])),
            (m = null),
            o(L, Vc, J, Kn),
            o(L, Gc, eA, Kn),
            l.cancel(),
            u.cancel(),
            b(Y)));
    }
  }
  function J(Y) {
    if ((s.is(Ws) || (s.set(Ws), i(eQ)), Y.cancelable))
      if (E) {
        l.translate(w + NA(nA(Y)));
        var sA = vA(Y) > T0,
          Ee = v !== (v = d());
        (sA || Ee) && b(Y), (x = !0), i(tQ), Rt(Y);
      } else M(Y) && ((E = T(Y)), Rt(Y));
  }
  function eA(Y) {
    s.is(Ws) && (s.set(pi), i(rQ)),
      E && (D(Y), Rt(Y)),
      a(L, Vc, J),
      a(L, Gc, eA),
      (E = !1);
  }
  function tA(Y) {
    !H && x && Rt(Y, !0);
  }
  function b(Y) {
    (m = C), (C = Y), (w = B());
  }
  function D(Y) {
    var sA = j(Y),
      Ee = rA(sA),
      Ar = t.rewind && t.rewindByDrag;
    h(!1),
      y
        ? c.scroll(Ee, 0, t.snap)
        : A.is(Ca)
        ? c.go(F(wd(sA)) < 0 ? (Ar ? "<" : "-") : Ar ? ">" : "+")
        : A.is(vi) && v && Ar
        ? c.go(d(!0) ? ">" : "<")
        : c.go(c.toDest(Ee), !0),
      h(!0);
  }
  function T(Y) {
    var sA = t.dragMinThreshold,
      Ee = jo(sA),
      Ar = (Ee && sA.mouse) || 0,
      Ru = (Ee ? sA.touch : +sA) || 10;
    return Se(nA(Y)) > (zA(Y) ? Ru : Ar);
  }
  function M(Y) {
    return Se(nA(Y)) > Se(nA(Y, !0));
  }
  function j(Y) {
    if (A.is(Hi) || !v) {
      var sA = vA(Y);
      if (sA && sA < T0) return nA(Y) / sA;
    }
    return 0;
  }
  function rA(Y) {
    return (
      B() +
      wd(Y) *
        Kr(
          Se(Y) * (t.flickPower || 600),
          y ? 1 / 0 : e.Layout.listSize() * (t.flickMaxPages || 1)
        )
    );
  }
  function nA(Y, sA) {
    return iA(Y, sA) - iA(_(Y), sA);
  }
  function vA(Y) {
    return pd(Y) - pd(_(Y));
  }
  function _(Y) {
    return (C === Y && m) || C;
  }
  function iA(Y, sA) {
    return (zA(Y) ? Y.changedTouches[0] : Y)["page" + p(sA ? "Y" : "X")];
  }
  function NA(Y) {
    return Y / (v && A.is(vi) ? VT : 1);
  }
  function MA(Y) {
    var sA = t.noDrag;
    return !Wo(Y, "." + wQ + ", ." + Du) && (!sA || !Wo(Y, sA));
  }
  function zA(Y) {
    return typeof TouchEvent < "u" && Y instanceof TouchEvent;
  }
  function Ou() {
    return E;
  }
  function Qa(Y) {
    H = Y;
  }
  return { mount: O, disable: Qa, isDragging: Ou };
}
var cD = { Spacebar: " ", Right: Su, Left: Hu, Up: cQ, Down: fQ };
function ng(A) {
  return (A = Rr(A) ? A : A.key), cD[A] || A;
}
var D0 = "keydown";
function fD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.bind,
    o = r.unbind,
    a = A.root,
    s = e.Direction.resolve,
    l,
    u;
  function c() {
    f(), n(ye, h), n(ye, f), n($t, p);
  }
  function f() {
    var B = t.keyboard;
    B && ((l = B === "global" ? window : a), i(l, D0, F));
  }
  function h() {
    o(l, D0);
  }
  function g(B) {
    u = B;
  }
  function p() {
    var B = u;
    (u = !0),
      PC(function () {
        u = B;
      });
  }
  function F(B) {
    if (!u) {
      var d = ng(B);
      d === s(Hu) ? A.go("<") : d === s(Su) && A.go(">");
    }
  }
  return { mount: c, destroy: h, disable: g };
}
var Co = WB + "-lazy",
  Js = Co + "-srcset",
  dD = "[" + Co + "], [" + Js + "]";
function BD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.off,
    o = r.bind,
    a = r.emit,
    s = t.lazyLoad === "sequential",
    l = [xi, Un],
    u = [];
  function c() {
    t.lazyLoad && (f(), n(qA, f));
  }
  function f() {
    Zt(u), h(), s ? B() : (i(l), n(l, g), g());
  }
  function h() {
    e.Slides.forEach(function (d) {
      jB(d.slide, dD).forEach(function (w) {
        var C = lt(w, Co),
          m = lt(w, Js);
        if (C !== w.src || m !== w.srcset) {
          var y = t.classes.spinner,
            E = w.parentElement,
            v = wa(E, "." + y) || oi("span", y, E);
          u.push([w, d, v]), w.src || Jo(w, "none");
        }
      });
    });
  }
  function g() {
    (u = u.filter(function (d) {
      var w = t.perPage * ((t.preloadPages || 1) + 1) - 1;
      return d[1].isWithin(A.index, w) ? p(d) : !0;
    })),
      u.length || i(l);
  }
  function p(d) {
    var w = d[0];
    Qt(d[1].slide, Qd),
      o(w, "load error", UA(F, d)),
      aA(w, "src", lt(w, Co)),
      aA(w, "srcset", lt(w, Js)),
      yt(w, Co),
      yt(w, Js);
  }
  function F(d, w) {
    var C = d[0],
      m = d[1];
    _t(m.slide, Qd),
      w.type !== "error" && (pn(d[2]), Jo(C, ""), a(qB, C, m), a(wi)),
      s && B();
  }
  function B() {
    u.length && p(u.shift());
  }
  return { mount: c, destroy: UA(Zt, u), check: g };
}
function gD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = r.emit,
    o = r.bind,
    a = e.Slides,
    s = e.Elements,
    l = e.Controller,
    u = l.hasFocus,
    c = l.getIndex,
    f = l.go,
    h = e.Direction.resolve,
    g = s.pagination,
    p = [],
    F,
    B;
  function d() {
    w(), n([ye, qA, Ml], d);
    var H = t.pagination;
    g && Jo(g, H ? "" : "none"),
      H &&
        (n([$t, Eu, Un], x),
        C(),
        x(),
        i(oQ, { list: F, items: p }, v(A.index)));
  }
  function w() {
    F && (pn(g ? Pr(F.children) : F), _t(F, B), Zt(p), (F = null)), r.destroy();
  }
  function C() {
    var H = A.length,
      L = t.classes,
      O = t.i18n,
      R = t.perPage,
      P = u() ? l.getEnd() + 1 : Yo(H / R);
    (F = g || oi("ul", L.pagination, s.track.parentElement)),
      Qt(F, (B = bu + "--" + E())),
      aA(F, Gt, "tablist"),
      aA(F, Ze, O.select),
      aA(F, eg, E() === Lu ? "vertical" : "");
    for (var J = 0; J < P; J++) {
      var eA = oi("li", null, F),
        tA = oi("button", { class: L.page, type: "button" }, eA),
        b = a.getIn(J).map(function (T) {
          return T.slide.id;
        }),
        D = !u() && R > 1 ? O.pageX : O.slideX;
      o(tA, "click", UA(m, J)),
        t.paginationKeyboard && o(tA, "keydown", UA(y, J)),
        aA(eA, Gt, "presentation"),
        aA(tA, Gt, "tab"),
        aA(tA, ma, b.join(" ")),
        aA(tA, Ze, vd(D, J + 1)),
        aA(tA, ai, -1),
        p.push({ li: eA, button: tA, page: J });
    }
  }
  function m(H) {
    f(">" + H, !0);
  }
  function y(H, L) {
    var O = p.length,
      R = ng(L),
      P = E(),
      J = -1;
    R === h(Su, !1, P)
      ? (J = ++H % O)
      : R === h(Hu, !1, P)
      ? (J = (--H + O) % O)
      : R === "Home"
      ? (J = 0)
      : R === "End" && (J = O - 1);
    var eA = p[J];
    eA && (WC(eA.button), f(">" + J), Rt(L, !0));
  }
  function E() {
    return t.paginationDirection || t.direction;
  }
  function v(H) {
    return p[l.toPage(H)];
  }
  function x() {
    var H = v(c(!0)),
      L = v(c());
    if (H) {
      var O = H.button;
      _t(O, wn), yt(O, I0), aA(O, ai, -1);
    }
    if (L) {
      var R = L.button;
      Qt(R, wn), aA(R, I0, !0), aA(R, ai, "");
    }
    i(aQ, { list: F, items: p }, H, L);
  }
  return { items: p, mount: d, destroy: w, getAt: v, update: x };
}
var hD = [" ", "Enter"];
function pD(A, e, t) {
  var r = t.isNavigation,
    n = t.slideFocus,
    i = [];
  function o() {
    A.splides.forEach(function (g) {
      g.isParent || (l(A, g.splide), l(g.splide, A));
    }),
      r && u();
  }
  function a() {
    i.forEach(function (g) {
      g.destroy();
    }),
      Zt(i);
  }
  function s() {
    a(), o();
  }
  function l(g, p) {
    var F = KA(g);
    F.on($t, function (B, d, w) {
      p.go(p.is(Hi) ? w : B);
    }),
      i.push(F);
  }
  function u() {
    var g = KA(A),
      p = g.on;
    p(zB, f), p(lQ, h), p([Vr, ye], c), i.push(g), g.emit(YB, A.splides);
  }
  function c() {
    aA(e.Elements.list, eg, t.direction === Lu ? "vertical" : "");
  }
  function f(g) {
    A.go(g.index);
  }
  function h(g, p) {
    VB(hD, ng(p)) && (f(g), Rt(p));
  }
  return {
    setup: UA(e.Media.set, { slideFocus: ga(n) ? r : n }, !0),
    mount: o,
    destroy: a,
    remount: s,
  };
}
function wD(A, e, t) {
  var r = KA(A),
    n = r.bind,
    i = 0;
  function o() {
    t.wheel && n(e.Elements.track, "wheel", a, Kn);
  }
  function a(l) {
    if (l.cancelable) {
      var u = l.deltaY,
        c = u < 0,
        f = pd(l),
        h = t.wheelMinThreshold || 0,
        g = t.wheelSleep || 0;
      Se(u) > h && f - i > g && (A.go(c ? "<" : ">"), (i = f)), s(c) && Rt(l);
    }
  }
  function s(l) {
    return (
      !t.releaseWheel || A.state.is(Ii) || e.Controller.getAdjacent(l) !== -1
    );
  }
  return { mount: o };
}
var vD = 90;
function mD(A, e, t) {
  var r = KA(A),
    n = r.on,
    i = e.Elements.track,
    o = t.live && !t.isNavigation,
    a = oi("span", NT),
    s = Iu(vD, UA(u, !1));
  function l() {
    o &&
      (f(!e.Autoplay.isPaused()),
      aA(i, S0, !0),
      (a.textContent = "…"),
      n(ZB, UA(f, !0)),
      n($B, UA(f, !1)),
      n([xi, Un], UA(u, !0)));
  }
  function u(h) {
    aA(i, H0, h), h ? (pa(i, a), s.start()) : (pn(a), s.cancel());
  }
  function c() {
    yt(i, [x0, S0, H0]), pn(a);
  }
  function f(h) {
    o && aA(i, x0, h ? "off" : "polite");
  }
  return { mount: l, disable: f, destroy: c };
}
var CD = Object.freeze({
    __proto__: null,
    Media: HT,
    Direction: ST,
    Elements: GT,
    Slides: WT,
    Layout: XT,
    Clones: JT,
    Move: YT,
    Controller: ZT,
    Arrows: AD,
    Autoplay: tD,
    Cover: rD,
    Scroll: lD,
    Drag: uD,
    Keyboard: fD,
    LazyLoad: BD,
    Pagination: gD,
    Sync: pD,
    Wheel: wD,
    Live: mD,
  }),
  QD = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  yD = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: kT,
    i18n: QD,
    reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
  };
function UD(A, e, t) {
  var r = e.Slides;
  function n() {
    KA(A).on([Vr, qA], i);
  }
  function i() {
    r.forEach(function (a) {
      a.style("transform", "translateX(-" + 100 * a.index + "%)");
    });
  }
  function o(a, s) {
    r.style("transition", "opacity " + t.speed + "ms " + t.easing), PC(s);
  }
  return { mount: n, start: o, cancel: hd };
}
function FD(A, e, t) {
  var r = e.Move,
    n = e.Controller,
    i = e.Scroll,
    o = e.Elements.list,
    a = UA(st, o, "transition"),
    s;
  function l() {
    KA(A).bind(o, "transitionend", function (h) {
      h.target === o && s && (c(), s());
    });
  }
  function u(h, g) {
    var p = r.toPosition(h, !0),
      F = r.getPosition(),
      B = f(h);
    Se(p - F) >= 1 && B >= 1
      ? t.useScroll
        ? i.scroll(p, B, !1, g)
        : (a("transform " + B + "ms " + t.easing), r.translate(p, !0), (s = g))
      : (r.jump(h), g());
  }
  function c() {
    a(""), i.cancel();
  }
  function f(h) {
    var g = t.rewindSpeed;
    if (A.is(vi) && g) {
      var p = n.getIndex(!0),
        F = n.getEnd();
      if ((p === 0 && h >= F) || (p >= F && h === 0)) return g;
    }
    return t.speed;
  }
  return { mount: l, start: u, cancel: c };
}
var ED = (function () {
    function A(t, r) {
      (this.event = KA()),
        (this.Components = {}),
        (this.state = IT($n)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var n = Rr(t) ? zC(document, t) : t;
      mo(n, n + " is invalid."),
        (this.root = n),
        (r = Qr(
          { label: lt(n, Ze) || "", labelledby: lt(n, Ag) || "" },
          yD,
          A.defaults,
          r || {}
        ));
      try {
        Qr(r, JSON.parse(lt(n, WB)));
      } catch {
        mo(!1, "Invalid JSON");
      }
      this._o = Object.create(Qr({}, r));
    }
    var e = A.prototype;
    return (
      (e.mount = function (r, n) {
        var i = this,
          o = this.state,
          a = this.Components;
        mo(o.is([$n, Rl]), "Already mounted!"),
          o.set($n),
          (this._C = a),
          (this._T = n || this._T || (this.is(Ca) ? UD : FD)),
          (this._E = r || this._E);
        var s = zo({}, CD, this._E, { Transition: this._T });
        return (
          un(s, function (l, u) {
            var c = l(i, a, i._o);
            (a[u] = c), c.setup && c.setup();
          }),
          un(a, function (l) {
            l.mount && l.mount();
          }),
          this.emit(Vr),
          Qt(this.root, MT),
          o.set(pi),
          this.emit(md),
          this
        );
      }),
      (e.sync = function (r) {
        return (
          this.splides.push({ splide: r }),
          r.splides.push({ splide: this, isParent: !0 }),
          this.state.is(pi) &&
            (this._C.Sync.remount(), r.Components.Sync.remount()),
          this
        );
      }),
      (e.go = function (r) {
        return this._C.Controller.go(r), this;
      }),
      (e.on = function (r, n) {
        return this.event.on(r, n), this;
      }),
      (e.off = function (r) {
        return this.event.off(r), this;
      }),
      (e.emit = function (r) {
        var n;
        return (
          (n = this.event).emit.apply(n, [r].concat(Pr(arguments, 1))), this
        );
      }),
      (e.add = function (r, n) {
        return this._C.Slides.add(r, n), this;
      }),
      (e.remove = function (r) {
        return this._C.Slides.remove(r), this;
      }),
      (e.is = function (r) {
        return this._o.type === r;
      }),
      (e.refresh = function () {
        return this.emit(qA), this;
      }),
      (e.destroy = function (r) {
        r === void 0 && (r = !0);
        var n = this.event,
          i = this.state;
        return (
          i.is($n)
            ? KA(this).on(md, this.destroy.bind(this, r))
            : (un(
                this._C,
                function (o) {
                  o.destroy && o.destroy(r);
                },
                !0
              ),
              n.emit(JB),
              n.destroy(),
              r && Zt(this.splides),
              i.set(Rl)),
          this
        );
      }),
      QT(A, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (r) {
            this._C.Media.set(r, !0, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      A
    );
  })(),
  ig = ED;
ig.defaults = {};
ig.STATES = UT;
var b0 = [
  [Vr, "onMounted"],
  [md, "onReady"],
  [$t, "onMove"],
  [xi, "onMoved"],
  [zB, "onClick"],
  [ZC, "onActive"],
  [$C, "onInactive"],
  [qC, "onVisible"],
  [AQ, "onHidden"],
  [qA, "onRefresh"],
  [ye, "onUpdated"],
  [wi, "onResize"],
  [Fu, "onResized"],
  [eQ, "onDrag"],
  [tQ, "onDragging"],
  [rQ, "onDragged"],
  [Eu, "onScroll"],
  [Un, "onScrolled"],
  [JB, "onDestroy"],
  [nQ, "onArrowsMounted"],
  [iQ, "onArrowsUpdated"],
  [oQ, "onPaginationMounted"],
  [aQ, "onPaginationUpdated"],
  [YB, "onNavigationMounted"],
  [ZB, "onAutoplayPlay"],
  [sQ, "onAutoplayPlaying"],
  [$B, "onAutoplayPause"],
  [qB, "onLazyLoadLoaded"],
];
function og(...A) {
  return A.filter(Boolean).join(" ");
}
function _l(A) {
  return A !== null && typeof A == "object";
}
function yd(A, e) {
  if (Array.isArray(A) && Array.isArray(e))
    return A.length === e.length && !A.some((t, r) => !yd(t, e[r]));
  if (_l(A) && _l(e)) {
    const t = Object.keys(A),
      r = Object.keys(e);
    return (
      t.length === r.length &&
      !t.some(
        (n) => !Object.prototype.hasOwnProperty.call(e, n) || !yd(A[n], e[n])
      )
    );
  }
  return A === e;
}
function ID(A, e) {
  return A.length === e.length && !A.some((t, r) => t !== e[r]);
}
function xD(A, e) {
  if (A) {
    const t = Object.keys(A);
    for (let r = 0; r < t.length; r++) {
      const n = t[r];
      if (n !== "__proto__" && e(A[n], n) === !1) break;
    }
  }
  return A;
}
function Ud(A, e) {
  const t = A;
  return (
    xD(e, (r, n) => {
      Array.isArray(r)
        ? (t[n] = r.slice())
        : _l(r)
        ? (t[n] = Ud(_l(t[n]) ? t[n] : {}, r))
        : (t[n] = r);
    }),
    t
  );
}
var HD = ({ children: A, className: e, ...t }) =>
    Ce.createElement(
      "div",
      { className: og("splide__track", e), ...t },
      Ce.createElement("ul", { className: "splide__list" }, A)
    ),
  Es = class extends Ce.Component {
    constructor() {
      super(...arguments),
        (this.splideRef = Ce.createRef()),
        (this.slides = []);
    }
    componentDidMount() {
      const { options: A, extensions: e, transition: t } = this.props,
        { current: r } = this.splideRef;
      r &&
        ((this.splide = new ig(r, A)),
        this.bind(this.splide),
        this.splide.mount(e, t),
        (this.options = Ud({}, A || {})),
        (this.slides = this.getSlides()));
    }
    componentWillUnmount() {
      this.splide && (this.splide.destroy(), (this.splide = void 0)),
        (this.options = void 0),
        (this.slides.length = 0);
    }
    componentDidUpdate() {
      if (!this.splide) return;
      const { options: A } = this.props;
      A &&
        !yd(this.options, A) &&
        ((this.splide.options = A), (this.options = Ud({}, A)));
      const e = this.getSlides();
      ID(this.slides, e) || (this.splide.refresh(), (this.slides = e));
    }
    sync(A) {
      var e;
      (e = this.splide) == null || e.sync(A);
    }
    go(A) {
      var e;
      (e = this.splide) == null || e.go(A);
    }
    getSlides() {
      var A;
      if (this.splide) {
        const e =
          (A = this.splide.Components.Elements) == null
            ? void 0
            : A.list.children;
        return (e && Array.prototype.slice.call(e)) || [];
      }
      return [];
    }
    bind(A) {
      b0.forEach(([e, t]) => {
        const r = this.props[t];
        typeof r == "function" &&
          A.on(e, (...n) => {
            r(A, ...n);
          });
      });
    }
    omit(A, e) {
      return (
        e.forEach((t) => {
          Object.prototype.hasOwnProperty.call(A, t) && delete A[t];
        }),
        A
      );
    }
    render() {
      const {
        className: A,
        tag: e = "div",
        hasTrack: t = !0,
        children: r,
        ...n
      } = this.props;
      return Ce.createElement(
        e,
        {
          className: og("splide", A),
          ref: this.splideRef,
          ...this.omit(n, ["options", ...b0.map((i) => i[1])]),
        },
        t ? Ce.createElement(HD, null, r) : r
      );
    }
  },
  Is = ({ children: A, className: e, ...t }) =>
    Ce.createElement("li", { className: og("splide__slide", e), ...t }, A);
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ const O0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABEwAAARMAQMAAAC5z5T5AAAAA1BMVEX///+nxBvIAAAAxElEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaU9OCABAAAAEPT/dTsCFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgJVYgAB7B4VJQAAAABJRU5ErkJggg==",
  SD = "/assets/Batman%20background-XWOo0Uzw.png",
  LD = "/assets/Blue%20speckled%20BG-BUMy7o2y.png",
  TD = "/assets/Boat%20BG-BcnnPjlN.png",
  DD = "/assets/Boxing%20BG-B93zgxeM.png",
  bD = "/assets/Bull%20run%20BG-BNrP_NSz.png",
  OD = "/assets/Chart%20BG-ChIAf0si.png",
  RD = "/assets/Circus%20BG-BPHO3bK_.png",
  KD = "/assets/DBZ%20background-vv5qxuBj.png",
  ND = "/assets/Farm%20BG-DsTutWD8.png",
  MD = "/assets/Hollywood%20BG-DroJbkSw.png",
  _D = "/assets/Lambo%20BG-pTIHtrmq.png",
  kD = "/assets/Money%20BG-B1B6-Eju.png",
  PD = "/assets/Moon%20BG-zioVniQw.png",
  VD = "/assets/SUI%20logo%20BG-Be8pd0BQ.png",
  GD = "/assets/Skydive%20BG-Bdzho00V.png",
  jD = "/assets/Space%20BG-D0JMJ7AO.png",
  WD = "/assets/SpongeBob%20BG-CIJMKznZ.png",
  XD = "/assets/Surf%20BG-5T5QTqBj.png",
  zD = "/assets/Underwater%20BG-D5-PC3L6.png",
  JD = "/assets/Wild%20West%20BG-BarPFDx4.png",
  YD = "/assets/Windows%20BG-CokC38JF.png",
  ZD = "/assets/XFILES%20BG-Cr79j1da.png",
  $D = "/assets/bg_25-D9W9SFhH.png",
  qD = "/assets/bg_26-Xtw5MzkB.png",
  A3 = "/assets/bg_27-B5JwwVsE.png",
  e3 = "/assets/bg_28-sZnYljqi.png",
  t3 = "/assets/bg_29-C5UQ87Wz.png",
  r3 = "/assets/bg_30-DCyv820d.png",
  jc = "/assets/Default%20hat-face-CHDtFdFS.png",
  n3 = "/assets/Angry%20face-DXWkItF0.png",
  i3 = "/assets/Blow%20steam%20face-Cl9W181K.png",
  o3 = "/assets/Fashion%20face-DVgnEMdy.png",
  a3 = "/assets/Goggles%20face-CjGDcYIN.png",
  s3 = "/assets/Gold%20nose%20face-D-ol7oJ3.png",
  l3 = "/assets/Happy%20face-fwMnNIIt.png",
  u3 = "/assets/Laser%20eyes%20face-orzcG99N.png",
  c3 = "/assets/Sweat%20face-__JtkPFE.png",
  f3 = "/assets/face_10-cSMtEKdo.png",
  d3 = "/assets/Bushybrows%20face-B9kTW28M.png",
  B3 = "/assets/Moustache%20face-B4Eql5aR.png",
  Wc = "/assets/Default%20hat-face-CHDtFdFS.png",
  g3 = "/assets/Astronaut%20hat-DQGx7uFM.png",
  h3 = "/assets/Batman%20hat-DfAAENql.png",
  p3 = "/assets/Charging%20hat-CCm_VMZT.png",
  w3 = "/assets/Cowboy%20hat-B_zvKOa-.png",
  v3 = "/assets/GN%20hat-CDcuAqdS.png",
  m3 = "/assets/Hunter%20hat-CtolLt5C.png",
  C3 = "/assets/Mohawk%20hat-Ykj1crBf.png",
  Q3 = "/assets/SUI%20hat-CrKpxnEK.png",
  y3 = "/assets/hat_10-jLN-0b3c.png",
  U3 = "/assets/hat_11-BGhn168c.png",
  F3 = "/assets/hat_12-CXrURw7_.png",
  E3 = "/assets/Bleach%20hat-B5_0fppp.png",
  Xc = "/assets/Default2%20body-D9zkiWC3.png",
  I3 = "/assets/Arms%20up%20body-DGq8-uZR.png",
  x3 = "/assets/Astronaut%20body-S3WmJwZW.png",
  H3 = "/assets/Bass%20guitar%20body-CthZ5pZe.png",
  S3 = "/assets/Batman%20body-CEENrpkE.png",
  L3 = "/assets/Cowboy%20body-DjmWfdpw.png",
  T3 = "/assets/Diamond%20hands%20body-DPmQofjD.png",
  D3 = "/assets/Doctor%20body-DO2_hx7K.png",
  b3 = "/assets/Fishing%20body-Whk2YNgb.png",
  O3 = "/assets/GM%20body-CmfrEVtn.png",
  R3 = "/assets/GN%20body-DrPpVrtl.png",
  K3 = "/assets/Guitar%20body-BA57SALs.png",
  N3 = "/assets/Guns%20body-D7BXglNZ.png",
  M3 = "/assets/Hunter%20body-DCV3-n-e.png",
  _3 = "/assets/Kill%20bill%20body-DKUAJe0u.png",
  k3 = "/assets/Pimp%20body-U8Iw2LLT.png",
  P3 = "/assets/Run%20body-mfB9O3EG.png",
  V3 = "/assets/SUI%20season%20body-C7S3krKI.png",
  G3 = "/assets/Singer%20body-CIukPKHx.png",
  j3 = "/assets/Skydive%20body-Ca-0S2eX.png",
  W3 = "/assets/Study%20body-URbR1lvO.png",
  X3 = "/assets/body_22-DDsDJCMv.png",
  z3 = "/assets/body_23-D-9pFZrR.png",
  J3 = "/assets/body_24-SGq573Wl.png",
  Y3 = "/assets/body_25-BGa4IaxH.png",
  Z3 = "/assets/Basketball%20body-BQO-XW65.png",
  $3 = "/assets/Bleach%20body-BXj9Pdt1.png",
  q3 = "/assets/Boxing%20body-mFsSfMTu.png";
function Ab() {
  const A = [
      O0,
      SD,
      LD,
      TD,
      DD,
      bD,
      OD,
      RD,
      KD,
      ND,
      MD,
      _D,
      kD,
      PD,
      VD,
      GD,
      jD,
      WD,
      XD,
      zD,
      JD,
      YD,
      ZD,
      $D,
      qD,
      A3,
      e3,
      t3,
      r3,
    ],
    e = [jc, n3, i3, o3, a3, s3, l3, u3, c3, f3, d3, B3],
    t = [Wc, g3, h3, p3, w3, v3, m3, C3, Q3, y3, U3, F3, E3],
    r = [
      Xc,
      I3,
      x3,
      H3,
      S3,
      L3,
      T3,
      D3,
      b3,
      O3,
      R3,
      K3,
      N3,
      M3,
      _3,
      k3,
      P3,
      V3,
      G3,
      j3,
      W3,
      X3,
      z3,
      J3,
      Y3,
      Z3,
      $3,
      q3,
    ],
    n = N.useRef(null),
    i = N.useRef(null),
    o = N.useRef(null),
    a = N.useRef(null),
    s = N.useRef(null),
    l = (C) => {
      let m = C.querySelector("img").getAttribute("src");
      i.current.src = m;
    },
    u = (C) => {
      let m = C.querySelector("img").getAttribute("src");
      o.current.src = m;
    },
    c = (C) => {
      let m = C.querySelector("img").getAttribute("src");
      a.current.src = m;
    },
    f = (C) => {
      let m = C.querySelector("img").getAttribute("src");
      s.current.src = m;
    },
    h = (C) => {
      let m = C.target.getAttribute("type");
      m === "background" && l(C.target),
        m === "face" && u(C.target),
        m === "hat" && c(C.target),
        m === "body" && f(C.target);
    },
    g = (C) => {
      (i.current.src = O0),
        (o.current.src = jc),
        (a.current.src = Wc),
        (s.current.src = Xc),
        document.querySelectorAll(".splide").forEach((m) => {
          (m.querySelector("input:checked").checked = !1),
            (m.querySelector("li:first-child input").checked = !0);
        });
    };
  function p(C, m) {
    return Math.floor(Math.random() * (m - C + 1) + C);
  }
  const F = (C) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      let m = [],
        y = [],
        E = [],
        v = [];
      document.querySelectorAll(".splide label").forEach((x) => {
        let H = x.getAttribute("type");
        H === "background" &&
          m.push(x.querySelector("img").getAttribute("src")),
          H === "face" && y.push(x.querySelector("img").getAttribute("src")),
          H === "hat" && E.push(x.querySelector("img").getAttribute("src")),
          H === "body" && v.push(x.querySelector("img").getAttribute("src"));
      }),
        (i.current.src = m[p(1, m.length)]),
        (o.current.src = y[p(1, y.length)]),
        (a.current.src = E[p(1, E.length)]),
        (s.current.src = v[p(1, v.length - 1)]);
    },
    B = (C) => {
      const m = n.current;
      (m.style.borderWidth = 0),
        (m.style.borderRadius = 0),
        (m.querySelector(".bg-area").style.borderRadius = 0),
        wT(m).then(function (y) {
          const E = y.toDataURL("image/png"),
            v = document.createElement("a");
          (v.href = E),
            (v.download = "SUI BULL Meme.png"),
            v.click(),
            setTimeout(() => {
              (m.style.borderWidth = "8px"),
                (m.style.borderRadius = "30px"),
                (m.querySelector(".bg-area").style.borderRadius = "20px");
            }, 0);
        });
    },
    d = () => {
      window.open(
        "https://twitter.com/intent/tweet?text=Just%20created%20my%20custom%20SUI%20Bull%20meme%20with%20The%20Bull%20Generator%21%20%f0%9f%92%a7%f0%9f%90%82%20Join%20the%20fun%20and%20make%20yours%20now%20at%20https%3a%2f%2fsuibull.lol%2fgenerator%20%f0%9f%92%a7%f0%9f%90%82%20%23SuiBull%20%24BULL%20%40suibullmeme",
        "_blank",
        "width=600,height=400"
      );
    },
    w = na();
  return (
    N.useEffect(() => {
      window.scrollTo(0, 0);
    }, [w]),
    Q.jsxs("section", {
      className: "bg-[#73CEE1] w-full min-h-[100vh]",
      children: [
        Q.jsx(Km, { className: "!absolute" }),
        Q.jsxs("div", {
          className: "max-w-[1680px] w-[90%] mx-auto py-10 pt-32 marker-page",
          children: [
            Q.jsx("h1", {
              className:
                "titan text-4xl md:text-[60px] text-[#fff] text-center mt-10 mb-10 leading-[1.3]",
              children: "The Bull Generator",
            }),
            Q.jsxs("div", {
              className:
                "grid lg:grid-cols-[500px_1fr] xl:grid-cols-[623px_1fr] gap-10 relative",
              children: [
                Q.jsx("img", {
                  src: X4,
                  className: "absolute left-[170px] -top-[60px]",
                  alt: "",
                }),
                Q.jsx("img", {
                  src: z4,
                  className: "absolute right-[170px] -top-[60px]",
                  alt: "",
                }),
                Q.jsxs("div", {
                  className: "lg:w-[500px] xl:w-[623px]",
                  children: [
                    Q.jsxs("div", {
                      ref: n,
                      className:
                        "border-[8px] h-[350px] md:h-[690px] xl:h-[623px] px-3 flex items-center justify-center border-[#fff] rounded-[30px] bg-cover bg-center main-box relative",
                      children: [
                        Q.jsx("img", {
                          src: J4,
                          className: "w-full absolute h-full left-0 top-0 z-10",
                          alt: "",
                        }),
                        Q.jsx("img", {
                          src: A[0],
                          className:
                            "w-full rounded-[20px] absolute bg-area left-0 top-0 z-0",
                          ref: i,
                          alt: "",
                        }),
                        Q.jsx("img", {
                          src: jc,
                          ref: o,
                          className:
                            "absolute h-full w-full face-pure left-0 top-0 z-20",
                          alt: "",
                        }),
                        Q.jsx("img", {
                          src: Wc,
                          ref: a,
                          className:
                            "absolute w-full h-full hat-pure left-0 top-0 z-10",
                          alt: "",
                        }),
                        Q.jsx("img", {
                          src: Xc,
                          ref: s,
                          className:
                            "absolute body-pure left-1/2 -translate-x-1/2 bottom-0 w-[100%] h-full z-10",
                          alt: "",
                        }),
                      ],
                    }),
                    Q.jsxs("div", {
                      className: "mt-[24px] hidden lg:flex flex-col gap-3",
                      children: [
                        Q.jsxs("button", {
                          onClick: g,
                          className:
                            "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 reset-mirch",
                          children: [
                            "Reset Bull",
                            Q.jsx("img", { src: wp, alt: "" }),
                          ],
                        }),
                        Q.jsxs("button", {
                          onClick: F,
                          className:
                            "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 gen-random",
                          children: [
                            "GENERATE RANDOM",
                            Q.jsx("img", { src: mp, alt: "" }),
                          ],
                        }),
                        Q.jsxs("button", {
                          onClick: B,
                          className:
                            "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 download-btn",
                          children: [
                            "Download",
                            Q.jsx("img", { src: vp, alt: "" }),
                          ],
                        }),
                        Q.jsxs("button", {
                          onClick: d,
                          className:
                            "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 download-btn",
                          children: [
                            "Share on X!",
                            Q.jsx("img", {
                              style: { width: "20px" },
                              src: Cp,
                              alt: "",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Q.jsx("section", {
                  children: Q.jsxs("div", {
                    className: "flex flex-col gap-10",
                    children: [
                      Q.jsxs("div", {
                        children: [
                          Q.jsx("h1", {
                            className:
                              "text-[28px] font-semibold poppins text-[#fff] uppercase mb-3",
                            children: "Background",
                          }),
                          Q.jsx(Es, {
                            options: { autoWidth: !0, pagination: !1, gap: 10 },
                            children: A.map((C, m) =>
                              Q.jsx(
                                Is,
                                {
                                  children: Q.jsxs("div", {
                                    children: [
                                      Q.jsx("input", {
                                        type: "radio",
                                        name: "bg",
                                        defaultChecked: m === 0,
                                        id: `bg${m}`,
                                        className: "hidden",
                                      }),
                                      Q.jsx("label", {
                                        type: "background",
                                        onClick: h,
                                        htmlFor: `bg${m}`,
                                        className:
                                          "w-[132px] h-[132px] flex items-center border-[2px] border-[#85D4E4] justify-center px-[10px] rounded-[24px] cursor-pointer",
                                        children: Q.jsx("img", {
                                          src: C,
                                          className:
                                            "w-full rounded-[24px] pointer-events-none",
                                          alt: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                m
                              )
                            ),
                          }),
                        ],
                      }),
                      Q.jsxs("div", {
                        children: [
                          Q.jsx("h1", {
                            className:
                              "text-[28px] font-semibold poppins text-[#fff] uppercase mb-3",
                            children: "Face",
                          }),
                          Q.jsx(Es, {
                            options: { autoWidth: !0, pagination: !1, gap: 10 },
                            children: e.map((C, m) =>
                              Q.jsx(
                                Is,
                                {
                                  children: Q.jsxs("div", {
                                    children: [
                                      Q.jsx("input", {
                                        type: "radio",
                                        name: "face",
                                        defaultChecked: m === 0,
                                        id: `face${m}`,
                                        className: "hidden",
                                      }),
                                      Q.jsx("label", {
                                        type: "face",
                                        onClick: h,
                                        htmlFor: `face${m}`,
                                        className:
                                          "w-[132px] h-[132px] flex items-center border-[2px] border-[#85D4E4] justify-center px-[10px] rounded-[24px] cursor-pointer",
                                        children: Q.jsx("img", {
                                          src: C,
                                          className: "w-full rounded-[24px]",
                                          alt: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                m
                              )
                            ),
                          }),
                        ],
                      }),
                      Q.jsxs("div", {
                        children: [
                          Q.jsx("h1", {
                            className:
                              "text-[28px] font-semibold poppins text-[#fff] uppercase mb-3",
                            children: "Hat",
                          }),
                          Q.jsx(Es, {
                            options: { autoWidth: !0, pagination: !1, gap: 10 },
                            children: t.map((C, m) =>
                              Q.jsx(
                                Is,
                                {
                                  children: Q.jsxs("div", {
                                    children: [
                                      Q.jsx("input", {
                                        type: "radio",
                                        name: "hat",
                                        defaultChecked: m === 0,
                                        id: `hat${m}`,
                                        className: "hidden",
                                      }),
                                      Q.jsx("label", {
                                        type: "hat",
                                        onClick: h,
                                        htmlFor: `hat${m}`,
                                        className:
                                          "w-[132px] h-[132px] flex items-center border-[2px] border-[#85D4E4] justify-center px-[10px] rounded-[24px] cursor-pointer",
                                        children: Q.jsx("img", {
                                          src: C,
                                          className: "w-full rounded-[24px]",
                                          alt: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                m
                              )
                            ),
                          }),
                        ],
                      }),
                      Q.jsxs("div", {
                        children: [
                          Q.jsx("h1", {
                            className:
                              "text-[28px] font-semibold poppins text-[#fff] uppercase mb-3",
                            children: "Body",
                          }),
                          Q.jsx(Es, {
                            options: { autoWidth: !0, pagination: !1, gap: 10 },
                            children: r.map((C, m) =>
                              Q.jsx(
                                Is,
                                {
                                  children: Q.jsxs("div", {
                                    children: [
                                      Q.jsx("input", {
                                        type: "radio",
                                        name: "body",
                                        defaultChecked: m === 0,
                                        id: `body${m}`,
                                        className: "hidden",
                                      }),
                                      Q.jsx("label", {
                                        type: "body",
                                        onClick: h,
                                        htmlFor: `body${m}`,
                                        className:
                                          "w-[132px] h-[132px] flex items-center border-[2px] border-[#85D4E4] justify-center px-[10px] rounded-[24px] cursor-pointer",
                                        children: Q.jsx("img", {
                                          src: C,
                                          className: "w-full rounded-[24px]",
                                          alt: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                m
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Q.jsxs("div", {
                  className: "mt-[24px] flex lg:hidden flex-col gap-3",
                  children: [
                    Q.jsxs("button", {
                      onClick: g,
                      className:
                        "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 reset-mirch",
                      children: [
                        "Reset Bull",
                        Q.jsx("img", { src: wp, alt: "" }),
                      ],
                    }),
                    Q.jsxs("button", {
                      onClick: F,
                      className:
                        "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 gen-random",
                      children: [
                        "GENERATE RANDOM",
                        Q.jsx("img", { src: mp, alt: "" }),
                      ],
                    }),
                    Q.jsxs("button", {
                      onClick: B,
                      className:
                        "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 download-btn",
                      children: [
                        "Download",
                        Q.jsx("img", { src: vp, alt: "" }),
                      ],
                    }),
                    Q.jsxs("button", {
                      onClick: d,
                      className:
                        "w-full bg-[#fff] h-[78px] flex items-center justify-center rounded-[16px] border-[1px] border-[#000] boxShadow font-semibold text-[20px] text-[#1B1B1B] uppercase poppins gap-3 download-btn",
                      children: [
                        "Share on X!",
                        Q.jsx("img", {
                          style: { width: "20px" },
                          src: Cp,
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function R0() {
  return Q.jsx("div", {
    className: "flex items-center justify-center h-screen",
    children: Q.jsx("h1", {
      className:
        "font-bold text-4xl text-red-400 !leading-normal tracking-wider",
      children: "Upps page not found",
    }),
  });
}
const eb = T1([
  { path: "/", element: Q.jsx(W4, {}), errorElement: Q.jsx(R0, {}) },
  { path: "/generator", element: Q.jsx(Ab, {}), errorElement: Q.jsx(R0, {}) },
]);
Zv(document.getElementById("root")).render(
  Q.jsx(N.StrictMode, { children: Q.jsx(k1, { router: eb }) })
);
