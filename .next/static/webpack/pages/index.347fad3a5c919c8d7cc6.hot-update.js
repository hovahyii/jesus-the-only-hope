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
        className: "flex-grow pl-8",
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ3ZmFkM2E1YzkxOWM4ZDdjYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2UsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBNEM7QUFDMUQsc0JBQ087QUFBQSw0QkFDTDtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyx3RkFBZjtBQUFBLCtCQUNDO0FBQUssYUFBRyxFQUFFQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsTUFBdkI7QUFBK0IsYUFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDQztBQUFJLG1CQUFTLEVBQUMsMkNBQWQ7QUFBQSxvQkFDRUYsS0FBSyxDQUFDQyxNQUFOLENBQWFFO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQVdMO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsdUJBQWI7QUFBQSxnQ0FDQztBQUFNLG1CQUFTLEVBQUMsMERBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEVBSUVILEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxXQUpmLGVBS0M7QUFBTSxtQkFBUyxFQUFDLDBEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEs7QUFBQSxrQkFEUDtBQXlCQTtLQTFCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJheWVyQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmF5ZXJ9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcblxyXG5pbnRlcmZhY2UgUHJheWVyQ2FyZFByb3BzIHtcclxuXHRwcmF5ZXI6IHByYXllclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmF5ZXJDYXJkKHByb3BzOiBQcmF5ZXJDYXJkUHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbWItNCBpdGVtcy1jZW50ZXIgXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCB3LTEwIGgtMTAgYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLnByYXllci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcGwtOFwiPlxyXG5cdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSB0ZXh0LWdyYXktNjAwXCI+XHJcblx0XHRcdFx0XHRcdHtwcm9wcy5wcmF5ZXIubmFtZX1cclxuXHRcdFx0XHRcdDwvaDY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy10aWdodFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLW5vbmUgaXRhbGljIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIG1yLTFcIj5cclxuXHRcdFx0XHRcdFx0XCJcclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdHtwcm9wcy5wcmF5ZXIuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctbm9uZSBpdGFsaWMgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgbWwtMVwiPlxyXG5cdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG5cdClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlByYXllckNhcmQiLCJwcm9wcyIsInByYXllciIsImF2YXRhciIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=