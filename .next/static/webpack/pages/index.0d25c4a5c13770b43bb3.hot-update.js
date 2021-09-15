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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full flex mb-4 items-center ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow-hidden object-cover rounded-full w-10 h-10 bg-gray-50 border border-gray-200",
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
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, this);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\shado\\Desktop\\clone\\hovah-share\\pages\\index.tsx";




var __N_SSP = true;
function Home(_ref) {
  var _this = this;

  var initialPrayers = _ref.initialPrayers;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "flex flex-col items-center  w-screen  overflow-x-hidden\t justify-center relative py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
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
        lineNumber: 23,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Jesus \u271D\uFE0F\uFE0F | The Only Hope"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: "Welcome to Prayer Room. \u201CPray in the Spirit, on all occasions, with all kinds of prayers and requests...\u201D - Ephesians 6:18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "keywords",
        content: "Prayer Room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "author",
        content: "Hovah Yii"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      className: "flex flex-col items-center justify-center w-full flex-1 px-10 text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: " text-4xl xl:text-6xl font-bold",
        children: ["Welcome to", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "text-blue-400",
          href: "https://nextjs.org",
          children: "Prayer Room"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        className: "mt-3 xl:text-2xl  text-xl ",
        children: "\u201CPray in the Spirit, on all occasions, with all kinds of prayers and requests...\u201D - Ephesians 6:18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "flex flex-wrap items-center justify-around lg:max-w-4xl mt-6 max-w-xs ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "-mx-3 md:flex items-start",
          children: prayers.map(function (c, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "px-3 md:w-1/3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_PrayerCard__WEBPACK_IMPORTED_MODULE_2__.default, {
                contact: c
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQyNWM0YTVjMTM3NzBiNDNiYjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUE0QztBQUMxRCxzQkFDQztBQUFLLGFBQVMsRUFBQyw2RkFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLHVGQUFmO0FBQUEsK0JBQ0M7QUFBSyxhQUFHLEVBQUVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUF2QjtBQUErQixhQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0M7QUFBSSxtQkFBUyxFQUFDLDJDQUFkO0FBQUEsb0JBQ0VGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFXQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0M7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUEsZ0NBQ0M7QUFBTSxtQkFBUyxFQUFDLDBEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxFQUlFSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsV0FKZixlQUtDO0FBQU0sbUJBQVMsRUFBQywwREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBeUJBO0tBMUJ1Qkw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQ0E7QUFDQTs7O0FBZ0JlLFNBQVNRLElBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQy9DLHNCQUNBO0FBQUssYUFBUyxFQUFDLHdGQUFmO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBQSw4QkFDQztBQUNDLHFCQUFVLFlBRFg7QUFFQyx3QkFBYSxPQUZkO0FBR0MsV0FBRyxFQUFDLHlEQUhMO0FBSUMsbUJBQVEsVUFKVDtBQUtDLDRCQUFpQixnQ0FMbEI7QUFNQyx3QkFBYSxFQU5kO0FBT0Msc0JBQVcsU0FQWjtBQVFDLHlCQUFjLE9BUmY7QUFTQyx5QkFBYyxJQVRmO0FBVUMseUJBQWM7QUFWZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFjQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRELGVBZUM7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkQsZUFnQkM7QUFDQyxZQUFJLEVBQUMsYUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkQsZUFxQkM7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRCxlQXNCQztBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJELGVBdUJDO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQsZUF3QkM7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUErQkM7QUFBTSxlQUFTLEVBQUMsMkVBQWhCO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFDLGlDQUFkO0FBQUEsaUNBQ1ksR0FEWixlQUVDO0FBQUcsbUJBQVMsRUFBQyxlQUFiO0FBQTZCLGNBQUksRUFBQyxvQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFRQztBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRCxlQWFDO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLG9CQUNFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxnQ0FDWjtBQUFLLHVCQUFTLEVBQUMsZUFBZjtBQUFBLHFDQUNDLDhEQUFDLDJEQUFEO0FBQVksdUJBQU8sRUFBRUQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGVBQW9DQyxDQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsV0FBWjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JELGVBa0VDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFzRUQ7S0F2RXVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ByYXllckNhcmQudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmF5ZXJ9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcblxyXG5pbnRlcmZhY2UgUHJheWVyQ2FyZFByb3BzIHtcclxuXHRwcmF5ZXI6IHByYXllclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmF5ZXJDYXJkKHByb3BzOiBQcmF5ZXJDYXJkUHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byByb3VuZGVkLWxnIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcC01IHRleHQtZ3JheS04MDAgZm9udC1saWdodCBtYi02XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbWItNCBpdGVtcy1jZW50ZXIgXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCB3LTEwIGgtMTAgYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvcHMucHJheWVyLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsLThcIj5cclxuXHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMFwiPlxyXG5cdFx0XHRcdFx0XHR7cHJvcHMucHJheWVyLm5hbWV9XHJcblx0XHRcdFx0XHQ8L2g2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctdGlnaHRcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1ub25lIGl0YWxpYyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBtci0xXCI+XHJcblx0XHRcdFx0XHRcdFwiXHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHR7cHJvcHMucHJheWVyLmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLW5vbmUgaXRhbGljIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIG1sLTFcIj5cclxuXHRcdFx0XHRcdFx0XCJcclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFByYXllckNhcmQgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9QcmF5ZXJDYXJkXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG5cdGNvbnN0IHByYXllcnMgPSBhd2FpdCBwcmlzbWEucHJheWVyLmZpbmRNYW55KClcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0aW5pdGlhbFByYXllcnM6IHByYXllcnNcblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaW5pdGlhbFByYXllcnMgfSkge1xuICByZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgIHctc2NyZWVuICBvdmVyZmxvdy14LWhpZGRlblx0IGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIHB5LTJcIj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8c2NyaXB0XG5cdFx0XHRcdFx0ZGF0YS1uYW1lPVwiQk1DLVdpZGdldFwiXG5cdFx0XHRcdFx0ZGF0YS1jZmFzeW5jPVwiZmFsc2VcIlxuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vY2RuanMuYnV5bWVhY29mZmVlLmNvbS8xLjAuMC93aWRnZXQucHJvZC5taW4uanNcIlxuXHRcdFx0XHRcdGRhdGEtaWQ9XCJob3ZhaHlpaVwiXG5cdFx0XHRcdFx0ZGF0YS1kZXNjcmlwdGlvbj1cIlN1cHBvcnQgbWUgb24gQnV5IG1lIGEgY29mZmVlIVwiXG5cdFx0XHRcdFx0ZGF0YS1tZXNzYWdlPVwiXCJcblx0XHRcdFx0XHRkYXRhLWNvbG9yPVwiI0ZGREQwMFwiXG5cdFx0XHRcdFx0ZGF0YS1wb3NpdGlvbj1cIlJpZ2h0XCJcblx0XHRcdFx0XHRkYXRhLXhfbWFyZ2luPVwiMThcIlxuXHRcdFx0XHRcdGRhdGEteV9tYXJnaW49XCIxMDBcIlxuXHRcdFx0XHQ+PC9zY3JpcHQ+XG5cblx0XHRcdFx0PHRpdGxlPkplc3VzIOKcne+4j++4jyB8IFRoZSBPbmx5IEhvcGU8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwiVVRGLThcIj48L21ldGE+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRjb250ZW50PVwiV2VsY29tZSB0byBQcmF5ZXIgUm9vbS4g4oCcUHJheSBpbiB0aGUgU3Bpcml0LCBvbiBhbGwgb2NjYXNpb25zLCB3aXRoIGFsbCBraW5kcyBvZiBwcmF5ZXJzIGFuZFxuXHRcdFx0XHRcdHJlcXVlc3RzLi4u4oCdIC0gRXBoZXNpYW5zIDY6MThcIlxuXHRcdFx0XHQ+PC9tZXRhPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiUHJheWVyIFJvb21cIj48L21ldGE+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiSG92YWggWWlpXCI+PC9tZXRhPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0XHQ+PC9tZXRhPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgZmxleC0xIHB4LTEwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCIgdGV4dC00eGwgeGw6dGV4dC02eGwgZm9udC1ib2xkXCI+XG5cdFx0XHRcdFx0V2VsY29tZSB0b3tcIiBcIn1cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCIgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPlxuXHRcdFx0XHRcdFx0UHJheWVyIFJvb21cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvaDE+XG5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMyB4bDp0ZXh0LTJ4bCAgdGV4dC14bCBcIj5cblx0XHRcdFx0XHTigJxQcmF5IGluIHRoZSBTcGlyaXQsIG9uIGFsbCBvY2Nhc2lvbnMsIHdpdGggYWxsIGtpbmRzIG9mIHByYXllcnMgYW5kXG5cdFx0XHRcdFx0cmVxdWVzdHMuLi7igJ0gLSBFcGhlc2lhbnMgNjoxOFxuXHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgbGc6bWF4LXctNHhsIG10LTYgbWF4LXcteHMgXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCItbXgtMyBtZDpmbGV4IGl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0XHR7cHJheWVycy5tYXAoKGMsIGk6IG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTMgbWQ6dy0xLzNcIiBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdDxQcmF5ZXJDYXJkIGNvbnRhY3Q9e2N9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHR7LyogPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgIGgtMjQgXCI+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuXHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRTcG9uc29yZWQgYnl7XCIgXCJ9XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJKZXN1cyBPbmx5IEhvcGUgTG9nb1wiIGNsYXNzTmFtZT1cImgtNiBtbC0yXCIgLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9mb290ZXI+ICovfVxuXHRcdFx0PE5hdmJhciAvPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwibmFtZXMiOlsiUHJheWVyQ2FyZCIsInByb3BzIiwicHJheWVyIiwiYXZhdGFyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiSGVhZCIsIk5hdmJhciIsIkhvbWUiLCJpbml0aWFsUHJheWVycyIsInByYXllcnMiLCJtYXAiLCJjIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=