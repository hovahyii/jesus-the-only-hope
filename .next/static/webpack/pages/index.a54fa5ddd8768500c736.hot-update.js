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
        className: "pl-3",
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
          className: "text-lg leading-none italic font-bold text-gray-400 mr-1 ",
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU0ZmE1ZGRkODc2ODUwMGM3MzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUE0QztBQUMxRCxzQkFDQztBQUFLLGFBQVMsRUFBQyw2RkFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLHdGQUFmO0FBQUEsK0JBQ0M7QUFBSyxhQUFHLEVBQUVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUF2QjtBQUErQixhQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0M7QUFBSSxtQkFBUyxFQUFDLDJDQUFkO0FBQUEsb0JBQ0VGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFXQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0M7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUEsZ0NBQ0M7QUFBTSxtQkFBUyxFQUFDLDJEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxFQUlFSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsV0FKZixlQUtDO0FBQU0sbUJBQVMsRUFBQywwREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBeUJBO0tBMUJ1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmF5ZXJDYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByYXllcn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmludGVyZmFjZSBQcmF5ZXJDYXJkUHJvcHMge1xyXG5cdHByYXllcjogcHJheWVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByYXllckNhcmQocHJvcHM6IFByYXllckNhcmRQcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHJvdW5kZWQtbGcgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTUgdGV4dC1ncmF5LTgwMCBmb250LWxpZ2h0IG1iLTZcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBtYi00IGl0ZW1zLWNlbnRlciBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIHctMTAgaC0xMCBiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17cHJvcHMucHJheWVyLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsLTNcIj5cclxuXHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgdGV4dC1ncmF5LTYwMFwiPlxyXG5cdFx0XHRcdFx0XHR7cHJvcHMucHJheWVyLm5hbWV9XHJcblx0XHRcdFx0XHQ8L2g2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctdGlnaHRcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1ub25lIGl0YWxpYyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBtci0xIFwiPlxyXG5cdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0e3Byb3BzLnByYXllci5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1ub25lIGl0YWxpYyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBtbC0xXCI+XHJcblx0XHRcdFx0XHRcdFwiXHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlByYXllckNhcmQiLCJwcm9wcyIsInByYXllciIsImF2YXRhciIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=