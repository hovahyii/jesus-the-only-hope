"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PrayerCard.tsx":
/*!***********************************!*\
  !*** ./components/PrayerCard.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PrayerCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\shado\\Desktop\\clone\\hovah-share\\components\\PrayerCard.tsx";


function PrayerCard(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full flex mb-4 items-center ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow-hidden object-cover rounded-full w-10 h-10 bg-gray-50 border border-gray-200 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: props.prayer.avatar,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pl-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "font-bold text-sm uppercase text-gray-600",
          children: props.prayer.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm leading-tight",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-lg leading-none italic font-bold text-gray-400 mr-1",
          children: "\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, this), props.prayer.description, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-lg leading-none italic font-bold text-gray-400 ml-1",
          children: "\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
_c = PrayerCard;

var _c;

$RefreshReg$(_c, "PrayerCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.tsx");
/* harmony import */ var _components_PrayerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/PrayerCard */ "./components/PrayerCard.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\shado\\Desktop\\clone\\hovah-share\\pages\\index.tsx",
    _s = $RefreshSig$();






var __N_SSP = true;
function Home(_ref) {
  _s();

  var _this = this;

  var initialPrayers = _ref.initialPrayers;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialPrayers),
      prayers = _useState[0],
      setPrayers = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "flex flex-col items-center  w-screen  overflow-x-hidden\t justify-center relative py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("script", {
        "data-name": "BMC-Widget",
        "data-cfasync": "false",
        src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
        "data-id": "hovahyii",
        "data-description": "Support me on Buy me a coffee!",
        "data-message": "",
        "data-color": "#FFDD00",
        "data-position": "Right",
        "data-x_margin": "18",
        "data-y_margin": "100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Jesus \u271D\uFE0F\uFE0F | The Only Hope"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: "Welcome to Prayer Room. \u201CPray in the Spirit, on all occasions, with all kinds of prayers and requests...\u201D - Ephesians 6:18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "keywords",
        content: "Prayer Room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "author",
        content: "Hovah Yii"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      className: "flex flex-col items-center justify-center w-full flex-1 px-10 text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        className: " text-4xl xl:text-6xl font-bold",
        children: ["Welcome to", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "text-blue-400",
          href: "https://nextjs.org",
          children: "Prayer Room"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "mt-3 xl:text-2xl  text-xl ",
        children: "\u201CPray in the Spirit, on all occasions, with all kinds of prayers and requests...\u201D - Ephesians 6:18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "flex flex-wrap items-center justify-around lg:max-w-4xl mt-6 max-w-xs ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "-mx-3 md:flex items-start",
          children: prayers.map(function (c, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "px-3 md:w-1/3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_PrayerCard__WEBPACK_IMPORTED_MODULE_2__.default, {
                  prayer: c
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

_s(Home, "e4nJzwS6qP2yj7UtHKhd41PobrA=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY3MGMyZGEzOGQ0ODI2Yjk5ZjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2UsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBNEM7QUFDMUQsc0JBQ087QUFBQSw0QkFDTDtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyx3RkFBZjtBQUFBLCtCQUNDO0FBQUssYUFBRyxFQUFFQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsTUFBdkI7QUFBK0IsYUFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNDO0FBQUksbUJBQVMsRUFBQywyQ0FBZDtBQUFBLG9CQUNFRixLQUFLLENBQUNDLE1BQU4sQ0FBYUU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBV0w7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBLGdDQUNDO0FBQU0sbUJBQVMsRUFBQywwREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsRUFJRUgsS0FBSyxDQUFDQyxNQUFOLENBQWFHLFdBSmYsZUFLQztBQUFNLG1CQUFTLEVBQUMsMERBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSztBQUFBLGtCQURQO0FBeUJBO0tBMUJ1Qkw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUNBO0FBQ0E7QUFDQTs7O0FBZ0JlLFNBQVNTLElBQVQsT0FBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCOztBQUM5QyxrQkFBOEJGLCtDQUFRLENBQVdFLGNBQVgsQ0FBdEM7QUFBQSxNQUFPQyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVELHNCQUNBO0FBQUssYUFBUyxFQUFDLHdGQUFmO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw4QkFDQztBQUNDLHFCQUFVLFlBRFg7QUFFQyx3QkFBYSxPQUZkO0FBR0MsV0FBRyxFQUFDLHlEQUhMO0FBSUMsbUJBQVEsVUFKVDtBQUtDLDRCQUFpQixnQ0FMbEI7QUFNQyx3QkFBYSxFQU5kO0FBT0Msc0JBQVcsU0FQWjtBQVFDLHlCQUFjLE9BUmY7QUFTQyx5QkFBYyxJQVRmO0FBVUMseUJBQWM7QUFWZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFjQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRELGVBZUM7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkQsZUFnQkM7QUFDQyxZQUFJLEVBQUMsYUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkQsZUFxQkM7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRCxlQXNCQztBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJELGVBdUJDO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQsZUF3QkM7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUErQkM7QUFBTSxlQUFTLEVBQUMsMkVBQWhCO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFDLGlDQUFkO0FBQUEsaUNBQ1ksR0FEWixlQUVDO0FBQUcsbUJBQVMsRUFBQyxlQUFiO0FBQTZCLGNBQUksRUFBQyxvQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFRQztBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRCxlQWFDO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLG9CQUNFRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxnQ0FDWjtBQUFLLHVCQUFTLEVBQUMsZUFBZjtBQUFBLHFDQUNDO0FBQUsseUJBQVMsRUFBQyw2RkFBZjtBQUFBLHVDQUNDLDhEQUFDLDJEQUFEO0FBQVksd0JBQU0sRUFBRUQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxlQUFvQ0MsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEWTtBQUFBLFdBQVo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CRCxlQW9FQyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBd0VEOztHQTNFdUJOOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ByYXllckNhcmQudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmF5ZXJ9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcblxyXG5pbnRlcmZhY2UgUHJheWVyQ2FyZFByb3BzIHtcclxuXHRwcmF5ZXI6IHByYXllclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmF5ZXJDYXJkKHByb3BzOiBQcmF5ZXJDYXJkUHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbWItNCBpdGVtcy1jZW50ZXIgXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCB3LTEwIGgtMTAgYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLnByYXllci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbC04XCI+XHJcblx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdXBwZXJjYXNlIHRleHQtZ3JheS02MDBcIj5cclxuXHRcdFx0XHRcdFx0e3Byb3BzLnByYXllci5uYW1lfVxyXG5cdFx0XHRcdFx0PC9oNj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLXRpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctbm9uZSBpdGFsaWMgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgbXItMVwiPlxyXG5cdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0e3Byb3BzLnByYXllci5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1ub25lIGl0YWxpYyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBtbC0xXCI+XHJcblx0XHRcdFx0XHRcdFwiXHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblx0KVxyXG59XHJcblxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFByYXllckNhcmQgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9QcmF5ZXJDYXJkXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFByYXllciwgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG5cdGNvbnN0IHByYXllcnM6IFByYXllcltdID0gYXdhaXQgcHJpc21hLnByYXllci5maW5kTWFueSgpXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGluaXRpYWxQcmF5ZXJzOiBwcmF5ZXJzXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGluaXRpYWxQcmF5ZXJzIH0pIHtcblx0ICBjb25zdCBbcHJheWVycywgc2V0UHJheWVyc10gPSB1c2VTdGF0ZTxQcmF5ZXJbXT4oaW5pdGlhbFByYXllcnMpXG5cbiAgcmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICB3LXNjcmVlbiAgb3ZlcmZsb3cteC1oaWRkZW5cdCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBweS0yXCI+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdGRhdGEtbmFtZT1cIkJNQy1XaWRnZXRcIlxuXHRcdFx0XHRcdGRhdGEtY2Zhc3luYz1cImZhbHNlXCJcblx0XHRcdFx0XHRzcmM9XCJodHRwczovL2NkbmpzLmJ1eW1lYWNvZmZlZS5jb20vMS4wLjAvd2lkZ2V0LnByb2QubWluLmpzXCJcblx0XHRcdFx0XHRkYXRhLWlkPVwiaG92YWh5aWlcIlxuXHRcdFx0XHRcdGRhdGEtZGVzY3JpcHRpb249XCJTdXBwb3J0IG1lIG9uIEJ1eSBtZSBhIGNvZmZlZSFcIlxuXHRcdFx0XHRcdGRhdGEtbWVzc2FnZT1cIlwiXG5cdFx0XHRcdFx0ZGF0YS1jb2xvcj1cIiNGRkREMDBcIlxuXHRcdFx0XHRcdGRhdGEtcG9zaXRpb249XCJSaWdodFwiXG5cdFx0XHRcdFx0ZGF0YS14X21hcmdpbj1cIjE4XCJcblx0XHRcdFx0XHRkYXRhLXlfbWFyZ2luPVwiMTAwXCJcblx0XHRcdFx0Pjwvc2NyaXB0PlxuXG5cdFx0XHRcdDx0aXRsZT5KZXN1cyDinJ3vuI/vuI8gfCBUaGUgT25seSBIb3BlPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cIlVURi04XCI+PC9tZXRhPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0Y29udGVudD1cIldlbGNvbWUgdG8gUHJheWVyIFJvb20uIOKAnFByYXkgaW4gdGhlIFNwaXJpdCwgb24gYWxsIG9jY2FzaW9ucywgd2l0aCBhbGwga2luZHMgb2YgcHJheWVycyBhbmRcblx0XHRcdFx0XHRyZXF1ZXN0cy4uLuKAnSAtIEVwaGVzaWFucyA2OjE4XCJcblx0XHRcdFx0PjwvbWV0YT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlByYXllciBSb29tXCI+PC9tZXRhPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkhvdmFoIFlpaVwiPjwvbWV0YT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0PjwvbWV0YT5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGZsZXgtMSBweC0xMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiIHRleHQtNHhsIHhsOnRleHQtNnhsIGZvbnQtYm9sZFwiPlxuXHRcdFx0XHRcdFdlbGNvbWUgdG97XCIgXCJ9XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5cblx0XHRcdFx0XHRcdFByYXllciBSb29tXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2gxPlxuXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTMgeGw6dGV4dC0yeGwgIHRleHQteGwgXCI+XG5cdFx0XHRcdFx04oCcUHJheSBpbiB0aGUgU3Bpcml0LCBvbiBhbGwgb2NjYXNpb25zLCB3aXRoIGFsbCBraW5kcyBvZiBwcmF5ZXJzIGFuZFxuXHRcdFx0XHRcdHJlcXVlc3RzLi4u4oCdIC0gRXBoZXNpYW5zIDY6MThcblx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIGxnOm1heC13LTR4bCBtdC02IG1heC13LXhzIFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiLW14LTMgbWQ6ZmxleCBpdGVtcy1zdGFydFwiPlxuXHRcdFx0XHRcdFx0e3ByYXllcnMubWFwKChjLCBpOiBudW1iZXIpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0zIG1kOnctMS8zXCIga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHJvdW5kZWQtbGcgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTUgdGV4dC1ncmF5LTgwMCBmb250LWxpZ2h0IG1iLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxQcmF5ZXJDYXJkIHByYXllcj17Y30gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCAgaC0yNCBcIj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG5cdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdFNwb25zb3JlZCBieXtcIiBcIn1cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkplc3VzIE9ubHkgSG9wZSBMb2dvXCIgY2xhc3NOYW1lPVwiaC02IG1sLTJcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Zvb3Rlcj4gKi99XG5cdFx0XHQ8TmF2YmFyIC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiJdLCJuYW1lcyI6WyJQcmF5ZXJDYXJkIiwicHJvcHMiLCJwcmF5ZXIiLCJhdmF0YXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJIZWFkIiwiTmF2YmFyIiwidXNlU3RhdGUiLCJIb21lIiwiaW5pdGlhbFByYXllcnMiLCJwcmF5ZXJzIiwic2V0UHJheWVycyIsIm1hcCIsImMiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==