"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/PrayerCard.tsx":
/*!***********************************!*\
  !*** ./components/PrayerCard.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrayerCard)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ }),

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\shado\\Desktop\\clone\\hovah-share\\components\\navbar.tsx";


function Navbar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "fixed bottom-0  border bg-white flex",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bottom-appbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "tabs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tab  tab--left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            id: "bible",
            "enable-background": "new 0 0 300 300",
            height: "150",
            viewBox: "0 0 300 300",
            width: "150",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m119.171 46.828c.782.781 1.805 1.172 2.829 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-12-12c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m154 48c1.023 0 2.047-.391 2.828-1.172l12-12c1.562-1.562 1.562-4.094 0-5.656s-4.094-1.562-5.656 0l-12 12c-1.562 1.562-1.562 4.094 0 5.656.781.781 1.804 1.172 2.828 1.172z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m138 48c2.209 0 4-1.791 4-4v-16c0-2.209-1.791-4-4-4s-4 1.791-4 4v16c0 2.209 1.791 4 4 4z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m77.504 107.988 12.496 1.562v38.45c0 2.209 1.791 4 4 4s4-1.791 4-4v-37.45l11.504 1.438c.168.021.336.031.502.031 1.986 0 3.711-1.48 3.963-3.504.273-2.191-1.281-4.191-3.473-4.465l-12.496-1.561v-10.489c0-2.209-1.791-4-4-4s-4 1.791-4 4v9.489l-11.504-1.438c-2.18-.283-4.193 1.279-4.465 3.473-.274 2.191 1.281 4.191 3.473 4.464z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m136.369 235.727c-1.561-1.568-4.096-1.568-5.656-.012l-4.529 4.512-4.51-4.527c-1.559-1.568-4.094-1.568-5.656-.012-1.566 1.559-1.57 4.092-.012 5.656l4.512 4.529-4.527 4.51c-1.566 1.559-1.57 4.092-.012 5.656.781.785 1.809 1.178 2.834 1.178 1.021 0 2.043-.389 2.822-1.166l4.529-4.512 4.51 4.527c.781.785 1.809 1.178 2.834 1.178 1.021 0 2.043-.389 2.822-1.166 1.566-1.559 1.57-4.092.012-5.656l-4.512-4.529 4.527-4.51c1.566-1.559 1.57-4.092.012-5.656z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m265.879 195.494c-.27-1.066-.967-1.975-1.926-2.512l-21.953-12.281v-95.65c0-7.512-4.996-14.061-12.053-16.238v-18.665c0-1.928-1.377-3.582-3.273-3.934-49.205-9.089-79.577 11.974-88.674 19.598-9.102-7.626-39.495-28.7-88.726-19.598-1.897.352-3.274 2.005-3.274 3.934v18.682c-7.029 2.192-12 8.728-12 16.221v109.898c0 9.403 7.648 17.051 17.05 17.051h86.98c4.612 9.147 14.264 21.323 34.239 27.98.387.129.826.197 1.232.205.058 0 5.306.175 11.786 4.172l-3.184 4.824c-1.182 1.789-.742 4.191.996 5.447l28.559 20.615c.688.494 1.508.756 2.342.756.252 0 .504-.023.754-.072 1.082-.207 2.031-.852 2.621-1.781l48-75.529c.591-.928.773-2.056.504-3.123zm-31.879-110.443v91.29c-1.406-.553-2.942-.273-4.053.707v-99.516c2.455 1.641 4.053 4.426 4.053 7.519zm-12.053-31.531v116.939c-1.28-3.341-1.994-6.908-1.994-10.572 0-6.094-.977-12.117-2.904-17.904l-9.463-28.385c-2.771-8.318-11.346-13.281-19.936-11.568-4.895.979-9.139 4.016-11.646 8.334-2.506 4.318-3.037 9.51-1.459 14.248l10.414 31.24-1.111 1.391c-5.67 7.086-7.739 15.882-7.334 24.404-12.978 3.055-24.586 7.584-34.513 13.629v-122.335c5.825-5.123 33.62-26.767 79.946-19.421zm-167.947 0c46.187-7.305 74.15 14.33 80 19.432v122.324c-25.627-15.623-56.096-18.047-72.531-18.047-2.992 0-5.521.08-7.469.176zm-12 141.429v-109.898c0-3.068 1.575-5.833 4-7.479v104.12c0 1.131.479 2.209 1.318 2.969.84.756 1.963 1.119 3.086 1.012.49-.053 47.954-4.551 82.385 18.328h-81.739c-4.99-.001-9.05-4.062-9.05-9.052zm132.289 37.27c-20.648-7.063-28.29-20.646-31.031-28.224 9.648-6.415 21.171-11.253 34.34-14.427 1.051 4.569 2.765 8.86 4.983 12.51.752 1.238 2.07 1.922 3.422 1.922.707 0 1.424-.188 2.074-.582 1.887-1.146 2.488-3.607 1.34-5.496-5.832-9.598-7.578-25.367.678-35.684l2.471-3.09c.846-1.059 1.1-2.477.67-3.764l-11.102-33.303c-.854-2.562-.566-5.369.789-7.703s3.65-3.977 6.297-4.506c4.627-.926 9.275 1.756 10.775 6.254l9.463 28.385c1.654 4.969 2.494 10.143 2.494 15.375 0 10.162 4.141 19.801 11.362 26.852l-33.618 50.937c-7.133-4.463-13.308-5.308-15.407-5.456zm38.611 34.054-22.008-15.887 42.953-65.082 22.51 12.594z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m208 246.293c-2.047 0-3.707 1.66-3.707 3.707s1.659 3.707 3.707 3.707 3.707-1.659 3.707-3.707-1.66-3.707-3.707-3.707z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "m64 234.293c-2.047 0-3.707 1.66-3.707 3.707s1.659 3.707 3.707 3.707c2.047 0 3.707-1.659 3.707-3.707s-1.66-3.707-3.707-3.707z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Devotion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tab tab--fab",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "top",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fab",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                version: "1.1",
                id: "Layer_1",
                x: "0px",
                y: "0px",
                viewBox: "-80 -50 700 600",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M438.059,257.965c-9.593-9.593-15.469-22.324-16.548-35.849l-1.207-15.153c-3.218-40.387-20.768-78.408-49.416-107.057\r L322.699,51.72c-3.253-3.253-8.528-3.253-11.78,0c-10.807,10.807-16.249,24.973-16.341,39.168l-82.001-82\r c-11.852-11.852-31.135-11.852-42.988,0c-3.494,3.494-5.95,7.637-7.384,12.044l-0.486-0.486\r c-11.851-11.852-31.135-11.852-42.988,0c-5.741,5.741-8.903,13.374-8.903,21.494c0,0.227,0.011,0.451,0.017,0.676\r c-0.36-0.012-0.721-0.027-1.083-0.027c-8.12,0-15.752,3.162-21.493,8.903s-8.903,13.374-8.903,21.493s3.162,15.752,8.903,21.495\r l5.168,5.168c-4.406,1.434-8.549,3.89-12.044,7.384c-11.851,11.852-11.851,31.136,0,42.988l12.422,12.422\r c-4.485,1.464-8.596,3.966-12.028,7.398c-5.741,5.741-8.903,13.375-8.903,21.495c0,8.12,3.162,15.752,8.903,21.494L204.37,336.413\r c12.493,12.494,29.05,20.385,46.622,22.22c2.059,0.215,4.098,0.549,6.114,0.973c-10.967,23.129-21.132,40.389-28.805,52.152\r c-4.866,7.459-9.153,13.379-12.607,17.862c-6.595-20.898-18.235-61.26-20.997-93.742c-0.39-4.584-4.411-7.976-9.005-7.595\r c-4.584,0.39-7.983,4.422-7.595,9.005c3.787,44.546,22.692,100.86,26.02,110.511v10.894h-7.775c-4.6,0-8.33,3.73-8.33,8.33\r c0,4.6,3.73,8.33,8.33,8.33h7.775v28.322c0,4.6,3.73,8.33,8.33,8.33c4.6,0,8.33-3.73,8.33-8.33v-28.322h7.775\r c4.6,0,8.33-3.73,8.33-8.33c0-4.6-3.73-8.33-8.33-8.33h-7.775v-9.024c7.084-7.903,28.397-33.915,52.105-84.394\r c5.38,2.824,10.345,6.452,14.683,10.789l15.99,15.991c1.626,1.627,3.758,2.44,5.89,2.44s4.264-0.813,5.89-2.44\r c3.253-3.253,3.253-8.526,0-11.78l-15.99-15.991c-5.763-5.763-12.399-10.532-19.594-14.195c2.955-6.785,5.931-13.956,8.902-21.511\r c11.445,2.421,22.06,8.124,30.374,16.44l15.99,15.991c1.626,1.627,3.758,2.44,5.89,2.44s4.264-0.813,5.89-2.44\r c3.253-3.253,3.253-8.526,0-11.78l-15.99-15.991c-9.997-9.998-22.602-17.039-36.244-20.397\r c23.268-65.831,28.869-135.074,30.188-168.212l12.602,12.601c1.626,1.626,3.758,2.44,5.89,2.44c2.131,0,4.264-0.813,5.89-2.44\r c3.253-3.253,3.253-8.528,0-11.78l-8.069-8.069c-0.002-0.002-0.003-0.003-0.006-0.006l-18.36-18.36\r c-7.414-7.414-11.496-17.27-11.496-27.754c0-7.65,2.174-14.966,6.229-21.241l41.674,41.674c25.85,25.85,41.686,60.157,44.589,96.6\r l1.207,15.153c1.392,17.469,8.983,33.915,21.375,46.305c1.626,1.627,3.758,2.44,5.89,2.44s4.264-0.813,5.89-2.44\r C441.312,266.493,441.312,261.218,438.059,257.965z M99.052,63.273c2.593-2.594,6.043-4.024,9.713-4.024\r c3.67,0,7.119,1.429,9.714,4.024l5.351,5.351c-4.379,1.437-8.495,3.885-11.972,7.36c-3.451,3.451-5.962,7.588-7.422,12.101\r l-5.386-5.386c-2.594-2.594-4.024-6.044-4.024-9.714S96.457,65.866,99.052,63.273z M92.176,138.239\r c-5.357-5.357-5.357-14.071,0-19.428c5.356-5.356,14.07-5.356,19.428,0l0.001,0.001c0.242,0.242,0.499,0.461,0.761,0.666\r l11.93,11.93c-4.406,1.434-8.549,3.89-12.044,7.384c-3.451,3.451-5.961,7.587-7.422,12.099L92.176,138.239z M277.885,309.999\r c-11.404-2.433-21.98-8.128-30.27-16.418l-53.328-53.328c-3.252-3.253-8.526-3.253-11.78,0s-3.253,8.526,0,11.78l53.328,53.328\r c9.947,9.948,22.475,16.964,36.036,20.343c-2.583,6.46-5.165,12.611-7.721,18.449c-3.741-0.974-7.556-1.689-11.426-2.094\r c-13.785-1.439-26.773-7.63-36.574-17.431L92.568,201.045c-2.594-2.594-4.024-6.044-4.024-9.714s1.429-7.119,4.024-9.714\r c2.593-2.594,6.043-4.024,9.713-4.024s7.119,1.429,9.714,4.024l0.002,0.002c0.241,0.242,0.498,0.46,0.76,0.665l48.094,48.094\r c1.626,1.626,3.758,2.44,5.89,2.44s4.264-0.813,5.89-2.44c3.253-3.253,3.253-8.528,0-11.78l-48.6-48.6\r c-2.594-2.594-4.024-6.044-4.024-9.714c0-3.67,1.429-7.119,4.024-9.714c5.357-5.356,14.072-5.354,19.428,0\r c0.001,0.001,0.002,0.002,0.003,0.003l68.29,68.29c1.626,1.627,3.758,2.44,5.89,2.44c2.131,0,4.264-0.813,5.89-2.44\r c3.253-3.253,3.253-8.528,0-11.78l-99.892-99.893c-2.594-2.593-4.024-6.043-4.024-9.713c0-3.67,1.429-7.119,4.024-9.714\r c5.356-5.356,14.071-5.357,19.428,0l93.362,93.362c1.626,1.626,3.758,2.44,5.89,2.44s4.264-0.813,5.89-2.44\r c3.253-3.253,3.253-8.528,0-11.78L130.514,51.653c-2.594-2.594-4.024-6.044-4.024-9.714c0-3.67,1.429-7.119,4.024-9.714\r c5.357-5.356,14.072-5.354,19.428,0l122.774,122.773c3.253,3.253,8.528,3.253,11.78,0c3.253-3.253,3.253-8.528,0-11.78\r L181.372,40.096c-5.356-5.356-5.356-14.071,0-19.428c5.357-5.354,14.071-5.356,19.428,0l107.673,107.673\r C308.311,146.144,306.02,232.138,277.885,309.999z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 13
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 12
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "tab tab--right",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            height: "150",
            viewBox: "0 -80 500 700",
            width: "150",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m67.179688 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m116.710938 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m166.242188 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m444.308594 48.394531h-192.929688c-5.523437 0-10 4.476563-10 10 0 5.519531 4.476563 10 10 10h192.929688c5.523437 0 10-4.480469 10-10 0-5.523437-4.476563-10-10-10zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m262.890625 452.4375c-2.628906 0-5.199219 1.070312-7.070313 2.929688-1.859374 1.859374-2.929687 4.441406-2.929687 7.070312s1.070313 5.210938 2.929687 7.070312c1.871094 1.859376 4.441407 2.929688 7.070313 2.929688s5.210937-1.070312 7.070313-2.929688c1.867187-1.859374 2.929687-4.441406 2.929687-7.070312s-1.0625-5.210938-2.929687-7.070312c-1.859376-1.859376-4.441407-2.929688-7.070313-2.929688zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m480.230469.5h-448.460938c-17.515625 0-31.769531 14.253906-31.769531 31.769531v408.398438c0 17.519531 14.253906 31.769531 31.769531 31.769531h189.230469c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-189.230469c-6.488281 0-11.769531-5.277344-11.769531-11.769531v-324.378907h472v324.378907c0 6.488281-5.28125 11.769531-11.769531 11.769531h-176.5625c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h176.5625c17.515625 0 31.769531-14.25 31.769531-31.769531v-408.398438c0-17.515625-14.253906-31.769531-31.769531-31.769531zm-460.230469 95.785156v-64.015625c0-6.488281 5.28125-11.769531 11.769531-11.769531h448.460938c6.488281 0 11.769531 5.28125 11.769531 11.769531v64.019531h-472zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m178.039062 230.5c0-19.851562-16.148437-36-36-36h-33.667968c-5.523438 0-10 4.476562-10 10v104c0 5.523438 4.476562 10 10 10h33.667968c19.851563 0 36-16.148438 36-36 0-10.214844-4.28125-19.441406-11.140624-26 6.859374-6.558594 11.140624-15.785156 11.140624-26zm-20 52c0 8.820312-7.179687 16-16 16h-23.667968v-32h23.667968c8.820313 0 16 7.175781 16 16zm-39.667968-36v-32h23.667968c8.824219 0 16 7.179688 16 16s-7.175781 16-16 16zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m206.648438 194.5c-5.523438 0-10 4.476562-10 10v80.871094c0 18.269531 14.863281 33.128906 33.128906 33.128906 5.523437 0 10-4.476562 10-10s-4.476563-10-10-10c-7.238282 0-13.128906-5.890625-13.128906-13.128906v-80.871094c0-5.523438-4.476563-10-10-10zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m324.867188 282.289062c0-19.96875-16.242188-36.214843-36.210938-36.214843s-36.210938 16.246093-36.210938 36.214843 16.246094 36.210938 36.210938 36.210938c19.96875 0 36.210938-16.242188 36.210938-36.210938zm-52.421876 0c0-8.941406 7.273438-16.214843 16.210938-16.214843s16.210938 7.273437 16.210938 16.214843c0 8.9375-7.269532 16.210938-16.210938 16.210938s-16.210938-7.273438-16.210938-16.210938zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m377.414062 346.5c-8.9375 0-16.210937-7.273438-16.210937-16.210938 0-5.523437-4.476563-10-10-10s-10 4.476563-10 10c0 19.96875 16.246094 36.210938 36.210937 36.210938 19.96875 0 36.214844-16.242188 36.214844-36.210938v-48c0-19.96875-16.246094-36.214843-36.214844-36.214843-19.964843 0-36.210937 16.246093-36.210937 36.214843s16.246094 36.210938 36.210937 36.210938c5.828126 0 11.332032-1.390625 16.214844-3.847656v15.636718c0 8.9375-7.273437 16.210938-16.214844 16.210938zm0-48c-8.9375 0-16.210937-7.273438-16.210937-16.210938 0-8.941406 7.273437-16.214843 16.210937-16.214843 8.941407 0 16.214844 7.273437 16.214844 16.214843 0 8.9375-7.273437 16.210938-16.214844 16.210938zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "m108.371094 416.5h295.257812c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-295.257812c-5.519532 0-10 4.476562-10 10s4.480468 10 10 10zm0 0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 11
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.tsx");
/* harmony import */ var _components_PrayerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/PrayerCard */ "./components/PrayerCard.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\shado\\Desktop\\clone\\hovah-share\\pages\\index.tsx";






const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_4__.PrismaClient();
async function getServerSideProps() {
  const prayers = await prisma.prayer.findMany();
  return {
    props: {
      initialPrayers: prayers
    }
  };
}
function Home({
  initialPrayers
}) {
  const {
    0: prayers,
    1: setPrayers
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialPrayers);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "flex flex-col items-center  w-screen  overflow-x-hidden\t justify-center relative py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("script", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Jesus \u271D\uFE0F\uFE0F | The Only Hope"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "description",
        content: "Welcome to Prayer Room. \u201CPray in the Spirit, on all occasions, with all kinds of prayers and requests...\u201D - Ephesians 6:18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "keywords",
        content: "Prayer Room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "author",
        content: "Hovah Yii"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: "flex flex-col items-center justify-center w-full flex-1 px-10 text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        className: " text-4xl xl:text-6xl font-bold",
        children: ["Welcome to", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
        className: "mt-3 xl:text-2xl  text-xl ",
        children: "\u201CPray in the Spirit, on all occasions, with all kinds of prayers and requests...\u201D - Ephesians 6:18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "-mx-3 md:flex items-start w-full mt-6 ",
        children: prayers.map((c, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "px-3 md:w-1/3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_PrayerCard__WEBPACK_IMPORTED_MODULE_2__.default, {
            prayer: c
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }, this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 8
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2UsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBNEM7QUFDMUQsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsNkZBQWY7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyx1RkFBZjtBQUFBLCtCQUNDO0FBQUssYUFBRyxFQUFFQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsTUFBdkI7QUFBK0IsYUFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNDO0FBQUksbUJBQVMsRUFBQywyQ0FBZDtBQUFBLG9CQUNFRixLQUFLLENBQUNDLE1BQU4sQ0FBYUU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBV0M7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBLGdDQUNDO0FBQU0sbUJBQVMsRUFBQywwREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsRUFJRUgsS0FBSyxDQUFDQyxNQUFOLENBQWFHLFdBSmYsZUFLQztBQUFNLG1CQUFTLEVBQUMsMERBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRCxTQUFTQyxNQUFULEdBQWtCO0FBRWQsc0JBQ007QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQSwyQkFDTjtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDQztBQUFRLG1CQUFTLEVBQUMsZ0JBQWxCO0FBQUEsa0NBQ0M7QUFDQyxjQUFFLEVBQUMsT0FESjtBQUVDLGlDQUFrQixpQkFGbkI7QUFHQyxrQkFBTSxFQUFDLEtBSFI7QUFJQyxtQkFBTyxFQUFDLGFBSlQ7QUFLQyxpQkFBSyxFQUFDLEtBTFA7QUFNQyxpQkFBSyxFQUFDLDRCQU5QO0FBQUEsbUNBUUM7QUFBQSxzQ0FDQztBQUFNLGlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUM7QUFBTSxpQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUdDO0FBQU0saUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEQsZUFJQztBQUFNLGlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpELGVBS0M7QUFBTSxpQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRCxlQU1DO0FBQU0saUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQsZUFPQztBQUFNLGlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBELGVBUUM7QUFBTSxpQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBcUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUF3QkM7QUFBUSxtQkFBUyxFQUFDLGNBQWxCO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDQztBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHFDQUNDO0FBQ0MsdUJBQU8sRUFBQyxLQURUO0FBRUMsa0JBQUUsRUFBQyxTQUZKO0FBR0MsaUJBQUMsRUFBQyxLQUhIO0FBSUMsaUJBQUMsRUFBQyxLQUpIO0FBS0MsdUJBQU8sRUFBQyxpQkFMVDtBQUFBLHdDQU9DO0FBQUEseUNBQ0M7QUFBQSwyQ0FDQztBQUNDLHVCQUFDLEVBQUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEQsZUFtREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFuREQsZUFvREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFwREQsZUFxREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyREQsZUFzREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF0REQsZUF1REM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF2REQsZUF3REM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF4REQsZUF5REM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF6REQsZUEwREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkExREQsZUEyREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzREQsZUE0REM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkE1REQsZUE2REM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkE3REQsZUE4REM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkE5REQsZUErREM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEvREQsZUFnRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoRUQsZUFpRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFqRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhCRCxlQWlHQztBQUFRLG1CQUFTLEVBQUMsZ0JBQWxCO0FBQUEsa0NBQ0M7QUFDQyxrQkFBTSxFQUFDLEtBRFI7QUFFQyxtQkFBTyxFQUFDLGVBRlQ7QUFHQyxpQkFBSyxFQUFDLEtBSFA7QUFJQyxpQkFBSyxFQUFDLDRCQUpQO0FBQUEsb0NBTUM7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5ELGVBT0M7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBELGVBUUM7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJELGVBU0M7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRELGVBVUM7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZELGVBV0M7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhELGVBWUM7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpELGVBYUM7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJELGVBY0M7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRELGVBZUM7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZELGVBZ0JDO0FBQU0sZUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBbUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE47QUE4SEg7O0FBRUQsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUksTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFTyxlQUFlRSxrQkFBZixHQUFtQztBQUN6QyxRQUFNQyxPQUFpQixHQUFHLE1BQU1GLE1BQU0sQ0FBQ1IsTUFBUCxDQUFjVyxRQUFkLEVBQWhDO0FBQ0EsU0FBTztBQUNOWixJQUFBQSxLQUFLLEVBQUU7QUFDTmEsTUFBQUEsY0FBYyxFQUFFRjtBQURWO0FBREQsR0FBUDtBQUtBO0FBR2MsU0FBU0csSUFBVCxDQUFjO0FBQUVELEVBQUFBO0FBQUYsQ0FBZCxFQUFrQztBQUM5QyxRQUFNO0FBQUEsT0FBQ0YsT0FBRDtBQUFBLE9BQVVJO0FBQVYsTUFBd0JSLCtDQUFRLENBQVdNLGNBQVgsQ0FBdEM7QUFFRCxzQkFDQTtBQUFLLGFBQVMsRUFBQyx3RkFBZjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0M7QUFDQyxxQkFBVSxZQURYO0FBRUMsd0JBQWEsT0FGZDtBQUdDLFdBQUcsRUFBQyx5REFITDtBQUlDLG1CQUFRLFVBSlQ7QUFLQyw0QkFBaUIsZ0NBTGxCO0FBTUMsd0JBQWEsRUFOZDtBQU9DLHNCQUFXLFNBUFo7QUFRQyx5QkFBYyxPQVJmO0FBU0MseUJBQWMsSUFUZjtBQVVDLHlCQUFjO0FBVmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRCxlQWVDO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZELGVBZ0JDO0FBQ0MsWUFBSSxFQUFDLGFBRE47QUFFQyxlQUFPLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJELGVBcUJDO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkQsZUFzQkM7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixlQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRCxlQXVCQztBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJELGVBd0JDO0FBQ0MsWUFBSSxFQUFDLFVBRE47QUFFQyxlQUFPLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBK0JDO0FBQU0sZUFBUyxFQUFDLDJFQUFoQjtBQUFBLDhCQUNDO0FBQUksaUJBQVMsRUFBQyxpQ0FBZDtBQUFBLGlDQUNZLEdBRFosZUFFQztBQUFHLG1CQUFTLEVBQUMsZUFBYjtBQUE2QixjQUFJLEVBQUMsb0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBUUM7QUFBRyxpQkFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkQsZUFhRTtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxrQkFDRUYsT0FBTyxDQUFDSyxHQUFSLENBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLGtCQUNaO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0MsOERBQUMsMkRBQUQ7QUFBWSxrQkFBTSxFQUFFRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsV0FBb0NDLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JELGVBZ0VDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFvRUQ7Ozs7Ozs7Ozs7QUMxRkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByYXllckNhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJheWVyfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5cclxuaW50ZXJmYWNlIFByYXllckNhcmRQcm9wcyB7XHJcblx0cHJheWVyOiBwcmF5ZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJheWVyQ2FyZChwcm9wczogUHJheWVyQ2FyZFByb3BzKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gcm91bmRlZC1sZyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNSB0ZXh0LWdyYXktODAwIGZvbnQtbGlnaHQgbWItNlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG1iLTQgaXRlbXMtY2VudGVyIFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgdy0xMCBoLTEwIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLnByYXllci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbC0zXCI+XHJcblx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdXBwZXJjYXNlIHRleHQtZ3JheS02MDBcIj5cclxuXHRcdFx0XHRcdFx0e3Byb3BzLnByYXllci5uYW1lfVxyXG5cdFx0XHRcdFx0PC9oNj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLXRpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctbm9uZSBpdGFsaWMgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgbXItMVwiPlxyXG5cdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0e3Byb3BzLnByYXllci5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1ub25lIGl0YWxpYyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBtbC0xXCI+XHJcblx0XHRcdFx0XHRcdFwiXHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuIiwiZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHRcdDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgIGJvcmRlciBiZy13aGl0ZSBmbGV4XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b20tYXBwYmFyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWIgIHRhYi0tbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdmdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiYmlibGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDMwMCAzMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTUwXCJcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMzAwIDMwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE1MFwiXHJcblx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xMTkuMTcxIDQ2LjgyOGMuNzgyLjc4MSAxLjgwNSAxLjE3MiAyLjgyOSAxLjE3MnMyLjA0Ny0uMzkxIDIuODI4LTEuMTcyYzEuNTYyLTEuNTYyIDEuNTYyLTQuMDk0IDAtNS42NTZsLTEyLTEyYy0xLjU2Mi0xLjU2Mi00LjA5NC0xLjU2Mi01LjY1NiAwcy0xLjU2MiA0LjA5NCAwIDUuNjU2elwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtMTU0IDQ4YzEuMDIzIDAgMi4wNDctLjM5MSAyLjgyOC0xLjE3MmwxMi0xMmMxLjU2Mi0xLjU2MiAxLjU2Mi00LjA5NCAwLTUuNjU2cy00LjA5NC0xLjU2Mi01LjY1NiAwbC0xMiAxMmMtMS41NjIgMS41NjItMS41NjIgNC4wOTQgMCA1LjY1Ni43ODEuNzgxIDEuODA0IDEuMTcyIDIuODI4IDEuMTcyelwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtMTM4IDQ4YzIuMjA5IDAgNC0xLjc5MSA0LTR2LTE2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0djE2YzAgMi4yMDkgMS43OTEgNCA0IDR6XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm03Ny41MDQgMTA3Ljk4OCAxMi40OTYgMS41NjJ2MzguNDVjMCAyLjIwOSAxLjc5MSA0IDQgNHM0LTEuNzkxIDQtNHYtMzcuNDVsMTEuNTA0IDEuNDM4Yy4xNjguMDIxLjMzNi4wMzEuNTAyLjAzMSAxLjk4NiAwIDMuNzExLTEuNDggMy45NjMtMy41MDQuMjczLTIuMTkxLTEuMjgxLTQuMTkxLTMuNDczLTQuNDY1bC0xMi40OTYtMS41NjF2LTEwLjQ4OWMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNHY5LjQ4OWwtMTEuNTA0LTEuNDM4Yy0yLjE4LS4yODMtNC4xOTMgMS4yNzktNC40NjUgMy40NzMtLjI3NCAyLjE5MSAxLjI4MSA0LjE5MSAzLjQ3MyA0LjQ2NHpcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTEzNi4zNjkgMjM1LjcyN2MtMS41NjEtMS41NjgtNC4wOTYtMS41NjgtNS42NTYtLjAxMmwtNC41MjkgNC41MTItNC41MS00LjUyN2MtMS41NTktMS41NjgtNC4wOTQtMS41NjgtNS42NTYtLjAxMi0xLjU2NiAxLjU1OS0xLjU3IDQuMDkyLS4wMTIgNS42NTZsNC41MTIgNC41MjktNC41MjcgNC41MWMtMS41NjYgMS41NTktMS41NyA0LjA5Mi0uMDEyIDUuNjU2Ljc4MS43ODUgMS44MDkgMS4xNzggMi44MzQgMS4xNzggMS4wMjEgMCAyLjA0My0uMzg5IDIuODIyLTEuMTY2bDQuNTI5LTQuNTEyIDQuNTEgNC41MjdjLjc4MS43ODUgMS44MDkgMS4xNzggMi44MzQgMS4xNzggMS4wMjEgMCAyLjA0My0uMzg5IDIuODIyLTEuMTY2IDEuNTY2LTEuNTU5IDEuNTctNC4wOTIuMDEyLTUuNjU2bC00LjUxMi00LjUyOSA0LjUyNy00LjUxYzEuNTY2LTEuNTU5IDEuNTctNC4wOTIuMDEyLTUuNjU2elwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtMjY1Ljg3OSAxOTUuNDk0Yy0uMjctMS4wNjYtLjk2Ny0xLjk3NS0xLjkyNi0yLjUxMmwtMjEuOTUzLTEyLjI4MXYtOTUuNjVjMC03LjUxMi00Ljk5Ni0xNC4wNjEtMTIuMDUzLTE2LjIzOHYtMTguNjY1YzAtMS45MjgtMS4zNzctMy41ODItMy4yNzMtMy45MzQtNDkuMjA1LTkuMDg5LTc5LjU3NyAxMS45NzQtODguNjc0IDE5LjU5OC05LjEwMi03LjYyNi0zOS40OTUtMjguNy04OC43MjYtMTkuNTk4LTEuODk3LjM1Mi0zLjI3NCAyLjAwNS0zLjI3NCAzLjkzNHYxOC42ODJjLTcuMDI5IDIuMTkyLTEyIDguNzI4LTEyIDE2LjIyMXYxMDkuODk4YzAgOS40MDMgNy42NDggMTcuMDUxIDE3LjA1IDE3LjA1MWg4Ni45OGM0LjYxMiA5LjE0NyAxNC4yNjQgMjEuMzIzIDM0LjIzOSAyNy45OC4zODcuMTI5LjgyNi4xOTcgMS4yMzIuMjA1LjA1OCAwIDUuMzA2LjE3NSAxMS43ODYgNC4xNzJsLTMuMTg0IDQuODI0Yy0xLjE4MiAxLjc4OS0uNzQyIDQuMTkxLjk5NiA1LjQ0N2wyOC41NTkgMjAuNjE1Yy42ODguNDk0IDEuNTA4Ljc1NiAyLjM0Mi43NTYuMjUyIDAgLjUwNC0uMDIzLjc1NC0uMDcyIDEuMDgyLS4yMDcgMi4wMzEtLjg1MiAyLjYyMS0xLjc4MWw0OC03NS41MjljLjU5MS0uOTI4Ljc3My0yLjA1Ni41MDQtMy4xMjN6bS0zMS44NzktMTEwLjQ0M3Y5MS4yOWMtMS40MDYtLjU1My0yLjk0Mi0uMjczLTQuMDUzLjcwN3YtOTkuNTE2YzIuNDU1IDEuNjQxIDQuMDUzIDQuNDI2IDQuMDUzIDcuNTE5em0tMTIuMDUzLTMxLjUzMXYxMTYuOTM5Yy0xLjI4LTMuMzQxLTEuOTk0LTYuOTA4LTEuOTk0LTEwLjU3MiAwLTYuMDk0LS45NzctMTIuMTE3LTIuOTA0LTE3LjkwNGwtOS40NjMtMjguMzg1Yy0yLjc3MS04LjMxOC0xMS4zNDYtMTMuMjgxLTE5LjkzNi0xMS41NjgtNC44OTUuOTc5LTkuMTM5IDQuMDE2LTExLjY0NiA4LjMzNC0yLjUwNiA0LjMxOC0zLjAzNyA5LjUxLTEuNDU5IDE0LjI0OGwxMC40MTQgMzEuMjQtMS4xMTEgMS4zOTFjLTUuNjcgNy4wODYtNy43MzkgMTUuODgyLTcuMzM0IDI0LjQwNC0xMi45NzggMy4wNTUtMjQuNTg2IDcuNTg0LTM0LjUxMyAxMy42Mjl2LTEyMi4zMzVjNS44MjUtNS4xMjMgMzMuNjItMjYuNzY3IDc5Ljk0Ni0xOS40MjF6bS0xNjcuOTQ3IDBjNDYuMTg3LTcuMzA1IDc0LjE1IDE0LjMzIDgwIDE5LjQzMnYxMjIuMzI0Yy0yNS42MjctMTUuNjIzLTU2LjA5Ni0xOC4wNDctNzIuNTMxLTE4LjA0Ny0yLjk5MiAwLTUuNTIxLjA4LTcuNDY5LjE3NnptLTEyIDE0MS40Mjl2LTEwOS44OThjMC0zLjA2OCAxLjU3NS01LjgzMyA0LTcuNDc5djEwNC4xMmMwIDEuMTMxLjQ3OSAyLjIwOSAxLjMxOCAyLjk2OS44NC43NTYgMS45NjMgMS4xMTkgMy4wODYgMS4wMTIuNDktLjA1MyA0Ny45NTQtNC41NTEgODIuMzg1IDE4LjMyOGgtODEuNzM5Yy00Ljk5LS4wMDEtOS4wNS00LjA2Mi05LjA1LTkuMDUyem0xMzIuMjg5IDM3LjI3Yy0yMC42NDgtNy4wNjMtMjguMjktMjAuNjQ2LTMxLjAzMS0yOC4yMjQgOS42NDgtNi40MTUgMjEuMTcxLTExLjI1MyAzNC4zNC0xNC40MjcgMS4wNTEgNC41NjkgMi43NjUgOC44NiA0Ljk4MyAxMi41MS43NTIgMS4yMzggMi4wNyAxLjkyMiAzLjQyMiAxLjkyMi43MDcgMCAxLjQyNC0uMTg4IDIuMDc0LS41ODIgMS44ODctMS4xNDYgMi40ODgtMy42MDcgMS4zNC01LjQ5Ni01LjgzMi05LjU5OC03LjU3OC0yNS4zNjcuNjc4LTM1LjY4NGwyLjQ3MS0zLjA5Yy44NDYtMS4wNTkgMS4xLTIuNDc3LjY3LTMuNzY0bC0xMS4xMDItMzMuMzAzYy0uODU0LTIuNTYyLS41NjYtNS4zNjkuNzg5LTcuNzAzczMuNjUtMy45NzcgNi4yOTctNC41MDZjNC42MjctLjkyNiA5LjI3NSAxLjc1NiAxMC43NzUgNi4yNTRsOS40NjMgMjguMzg1YzEuNjU0IDQuOTY5IDIuNDk0IDEwLjE0MyAyLjQ5NCAxNS4zNzUgMCAxMC4xNjIgNC4xNDEgMTkuODAxIDExLjM2MiAyNi44NTJsLTMzLjYxOCA1MC45MzdjLTcuMTMzLTQuNDYzLTEzLjMwOC01LjMwOC0xNS40MDctNS40NTZ6bTM4LjYxMSAzNC4wNTQtMjIuMDA4LTE1Ljg4NyA0Mi45NTMtNjUuMDgyIDIyLjUxIDEyLjU5NHpcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTIwOCAyNDYuMjkzYy0yLjA0NyAwLTMuNzA3IDEuNjYtMy43MDcgMy43MDdzMS42NTkgMy43MDcgMy43MDcgMy43MDcgMy43MDctMS42NTkgMy43MDctMy43MDctMS42Ni0zLjcwNy0zLjcwNy0zLjcwN3pcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTY0IDIzNC4yOTNjLTIuMDQ3IDAtMy43MDcgMS42Ni0zLjcwNyAzLjcwN3MxLjY1OSAzLjcwNyAzLjcwNyAzLjcwN2MyLjA0NyAwIDMuNzA3LTEuNjU5IDMuNzA3LTMuNzA3cy0xLjY2LTMuNzA3LTMuNzA3LTMuNzA3elwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2c+XHJcblx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkRldm90aW9uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWIgdGFiLS1mYWJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmYWJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZlcnNpb249XCIxLjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiTGF5ZXJfMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eD1cIjBweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eT1cIjBweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIi04MCAtNTAgNzAwIDYwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNNDM4LjA1OSwyNTcuOTY1Yy05LjU5My05LjU5My0xNS40NjktMjIuMzI0LTE2LjU0OC0zNS44NDlsLTEuMjA3LTE1LjE1M2MtMy4yMTgtNDAuMzg3LTIwLjc2OC03OC40MDgtNDkuNDE2LTEwNy4wNTdcclxuXHRcdFx0TDMyMi42OTksNTEuNzJjLTMuMjUzLTMuMjUzLTguNTI4LTMuMjUzLTExLjc4LDBjLTEwLjgwNywxMC44MDctMTYuMjQ5LDI0Ljk3My0xNi4zNDEsMzkuMTY4bC04Mi4wMDEtODJcclxuXHRcdFx0Yy0xMS44NTItMTEuODUyLTMxLjEzNS0xMS44NTItNDIuOTg4LDBjLTMuNDk0LDMuNDk0LTUuOTUsNy42MzctNy4zODQsMTIuMDQ0bC0wLjQ4Ni0wLjQ4NlxyXG5cdFx0XHRjLTExLjg1MS0xMS44NTItMzEuMTM1LTExLjg1Mi00Mi45ODgsMGMtNS43NDEsNS43NDEtOC45MDMsMTMuMzc0LTguOTAzLDIxLjQ5NGMwLDAuMjI3LDAuMDExLDAuNDUxLDAuMDE3LDAuNjc2XHJcblx0XHRcdGMtMC4zNi0wLjAxMi0wLjcyMS0wLjAyNy0xLjA4My0wLjAyN2MtOC4xMiwwLTE1Ljc1MiwzLjE2Mi0yMS40OTMsOC45MDNzLTguOTAzLDEzLjM3NC04LjkwMywyMS40OTNzMy4xNjIsMTUuNzUyLDguOTAzLDIxLjQ5NVxyXG5cdFx0XHRsNS4xNjgsNS4xNjhjLTQuNDA2LDEuNDM0LTguNTQ5LDMuODktMTIuMDQ0LDcuMzg0Yy0xMS44NTEsMTEuODUyLTExLjg1MSwzMS4xMzYsMCw0Mi45ODhsMTIuNDIyLDEyLjQyMlxyXG5cdFx0XHRjLTQuNDg1LDEuNDY0LTguNTk2LDMuOTY2LTEyLjAyOCw3LjM5OGMtNS43NDEsNS43NDEtOC45MDMsMTMuMzc1LTguOTAzLDIxLjQ5NWMwLDguMTIsMy4xNjIsMTUuNzUyLDguOTAzLDIxLjQ5NEwyMDQuMzcsMzM2LjQxM1xyXG5cdFx0XHRjMTIuNDkzLDEyLjQ5NCwyOS4wNSwyMC4zODUsNDYuNjIyLDIyLjIyYzIuMDU5LDAuMjE1LDQuMDk4LDAuNTQ5LDYuMTE0LDAuOTczYy0xMC45NjcsMjMuMTI5LTIxLjEzMiw0MC4zODktMjguODA1LDUyLjE1MlxyXG5cdFx0XHRjLTQuODY2LDcuNDU5LTkuMTUzLDEzLjM3OS0xMi42MDcsMTcuODYyYy02LjU5NS0yMC44OTgtMTguMjM1LTYxLjI2LTIwLjk5Ny05My43NDJjLTAuMzktNC41ODQtNC40MTEtNy45NzYtOS4wMDUtNy41OTVcclxuXHRcdFx0Yy00LjU4NCwwLjM5LTcuOTgzLDQuNDIyLTcuNTk1LDkuMDA1YzMuNzg3LDQ0LjU0NiwyMi42OTIsMTAwLjg2LDI2LjAyLDExMC41MTF2MTAuODk0aC03Ljc3NWMtNC42LDAtOC4zMywzLjczLTguMzMsOC4zM1xyXG5cdFx0XHRjMCw0LjYsMy43Myw4LjMzLDguMzMsOC4zM2g3Ljc3NXYyOC4zMjJjMCw0LjYsMy43Myw4LjMzLDguMzMsOC4zM2M0LjYsMCw4LjMzLTMuNzMsOC4zMy04LjMzdi0yOC4zMjJoNy43NzVcclxuXHRcdFx0YzQuNiwwLDguMzMtMy43Myw4LjMzLTguMzNjMC00LjYtMy43My04LjMzLTguMzMtOC4zM2gtNy43NzV2LTkuMDI0YzcuMDg0LTcuOTAzLDI4LjM5Ny0zMy45MTUsNTIuMTA1LTg0LjM5NFxyXG5cdFx0XHRjNS4zOCwyLjgyNCwxMC4zNDUsNi40NTIsMTQuNjgzLDEwLjc4OWwxNS45OSwxNS45OTFjMS42MjYsMS42MjcsMy43NTgsMi40NCw1Ljg5LDIuNDRzNC4yNjQtMC44MTMsNS44OS0yLjQ0XHJcblx0XHRcdGMzLjI1My0zLjI1MywzLjI1My04LjUyNiwwLTExLjc4bC0xNS45OS0xNS45OTFjLTUuNzYzLTUuNzYzLTEyLjM5OS0xMC41MzItMTkuNTk0LTE0LjE5NWMyLjk1NS02Ljc4NSw1LjkzMS0xMy45NTYsOC45MDItMjEuNTExXHJcblx0XHRcdGMxMS40NDUsMi40MjEsMjIuMDYsOC4xMjQsMzAuMzc0LDE2LjQ0bDE1Ljk5LDE1Ljk5MWMxLjYyNiwxLjYyNywzLjc1OCwyLjQ0LDUuODksMi40NHM0LjI2NC0wLjgxMyw1Ljg5LTIuNDRcclxuXHRcdFx0YzMuMjUzLTMuMjUzLDMuMjUzLTguNTI2LDAtMTEuNzhsLTE1Ljk5LTE1Ljk5MWMtOS45OTctOS45OTgtMjIuNjAyLTE3LjAzOS0zNi4yNDQtMjAuMzk3XHJcblx0XHRcdGMyMy4yNjgtNjUuODMxLDI4Ljg2OS0xMzUuMDc0LDMwLjE4OC0xNjguMjEybDEyLjYwMiwxMi42MDFjMS42MjYsMS42MjYsMy43NTgsMi40NCw1Ljg5LDIuNDRjMi4xMzEsMCw0LjI2NC0wLjgxMyw1Ljg5LTIuNDRcclxuXHRcdFx0YzMuMjUzLTMuMjUzLDMuMjUzLTguNTI4LDAtMTEuNzhsLTguMDY5LTguMDY5Yy0wLjAwMi0wLjAwMi0wLjAwMy0wLjAwMy0wLjAwNi0wLjAwNmwtMTguMzYtMTguMzZcclxuXHRcdFx0Yy03LjQxNC03LjQxNC0xMS40OTYtMTcuMjctMTEuNDk2LTI3Ljc1NGMwLTcuNjUsMi4xNzQtMTQuOTY2LDYuMjI5LTIxLjI0MWw0MS42NzQsNDEuNjc0YzI1Ljg1LDI1Ljg1LDQxLjY4Niw2MC4xNTcsNDQuNTg5LDk2LjZcclxuXHRcdFx0bDEuMjA3LDE1LjE1M2MxLjM5MiwxNy40NjksOC45ODMsMzMuOTE1LDIxLjM3NSw0Ni4zMDVjMS42MjYsMS42MjcsMy43NTgsMi40NCw1Ljg5LDIuNDRzNC4yNjQtMC44MTMsNS44OS0yLjQ0XHJcblx0XHRcdEM0NDEuMzEyLDI2Ni40OTMsNDQxLjMxMiwyNjEuMjE4LDQzOC4wNTksMjU3Ljk2NXogTTk5LjA1Miw2My4yNzNjMi41OTMtMi41OTQsNi4wNDMtNC4wMjQsOS43MTMtNC4wMjRcclxuXHRcdFx0YzMuNjcsMCw3LjExOSwxLjQyOSw5LjcxNCw0LjAyNGw1LjM1MSw1LjM1MWMtNC4zNzksMS40MzctOC40OTUsMy44ODUtMTEuOTcyLDcuMzZjLTMuNDUxLDMuNDUxLTUuOTYyLDcuNTg4LTcuNDIyLDEyLjEwMVxyXG5cdFx0XHRsLTUuMzg2LTUuMzg2Yy0yLjU5NC0yLjU5NC00LjAyNC02LjA0NC00LjAyNC05LjcxNFM5Ni40NTcsNjUuODY2LDk5LjA1Miw2My4yNzN6IE05Mi4xNzYsMTM4LjIzOVxyXG5cdFx0XHRjLTUuMzU3LTUuMzU3LTUuMzU3LTE0LjA3MSwwLTE5LjQyOGM1LjM1Ni01LjM1NiwxNC4wNy01LjM1NiwxOS40MjgsMGwwLjAwMSwwLjAwMWMwLjI0MiwwLjI0MiwwLjQ5OSwwLjQ2MSwwLjc2MSwwLjY2NlxyXG5cdFx0XHRsMTEuOTMsMTEuOTNjLTQuNDA2LDEuNDM0LTguNTQ5LDMuODktMTIuMDQ0LDcuMzg0Yy0zLjQ1MSwzLjQ1MS01Ljk2MSw3LjU4Ny03LjQyMiwxMi4wOTlMOTIuMTc2LDEzOC4yMzl6IE0yNzcuODg1LDMwOS45OTlcclxuXHRcdFx0Yy0xMS40MDQtMi40MzMtMjEuOTgtOC4xMjgtMzAuMjctMTYuNDE4bC01My4zMjgtNTMuMzI4Yy0zLjI1Mi0zLjI1My04LjUyNi0zLjI1My0xMS43OCwwcy0zLjI1Myw4LjUyNiwwLDExLjc4bDUzLjMyOCw1My4zMjhcclxuXHRcdFx0YzkuOTQ3LDkuOTQ4LDIyLjQ3NSwxNi45NjQsMzYuMDM2LDIwLjM0M2MtMi41ODMsNi40Ni01LjE2NSwxMi42MTEtNy43MjEsMTguNDQ5Yy0zLjc0MS0wLjk3NC03LjU1Ni0xLjY4OS0xMS40MjYtMi4wOTRcclxuXHRcdFx0Yy0xMy43ODUtMS40MzktMjYuNzczLTcuNjMtMzYuNTc0LTE3LjQzMUw5Mi41NjgsMjAxLjA0NWMtMi41OTQtMi41OTQtNC4wMjQtNi4wNDQtNC4wMjQtOS43MTRzMS40MjktNy4xMTksNC4wMjQtOS43MTRcclxuXHRcdFx0YzIuNTkzLTIuNTk0LDYuMDQzLTQuMDI0LDkuNzEzLTQuMDI0czcuMTE5LDEuNDI5LDkuNzE0LDQuMDI0bDAuMDAyLDAuMDAyYzAuMjQxLDAuMjQyLDAuNDk4LDAuNDYsMC43NiwwLjY2NWw0OC4wOTQsNDguMDk0XHJcblx0XHRcdGMxLjYyNiwxLjYyNiwzLjc1OCwyLjQ0LDUuODksMi40NHM0LjI2NC0wLjgxMyw1Ljg5LTIuNDRjMy4yNTMtMy4yNTMsMy4yNTMtOC41MjgsMC0xMS43OGwtNDguNi00OC42XHJcblx0XHRcdGMtMi41OTQtMi41OTQtNC4wMjQtNi4wNDQtNC4wMjQtOS43MTRjMC0zLjY3LDEuNDI5LTcuMTE5LDQuMDI0LTkuNzE0YzUuMzU3LTUuMzU2LDE0LjA3Mi01LjM1NCwxOS40MjgsMFxyXG5cdFx0XHRjMC4wMDEsMC4wMDEsMC4wMDIsMC4wMDIsMC4wMDMsMC4wMDNsNjguMjksNjguMjljMS42MjYsMS42MjcsMy43NTgsMi40NCw1Ljg5LDIuNDRjMi4xMzEsMCw0LjI2NC0wLjgxMyw1Ljg5LTIuNDRcclxuXHRcdFx0YzMuMjUzLTMuMjUzLDMuMjUzLTguNTI4LDAtMTEuNzhsLTk5Ljg5Mi05OS44OTNjLTIuNTk0LTIuNTkzLTQuMDI0LTYuMDQzLTQuMDI0LTkuNzEzYzAtMy42NywxLjQyOS03LjExOSw0LjAyNC05LjcxNFxyXG5cdFx0XHRjNS4zNTYtNS4zNTYsMTQuMDcxLTUuMzU3LDE5LjQyOCwwbDkzLjM2Miw5My4zNjJjMS42MjYsMS42MjYsMy43NTgsMi40NCw1Ljg5LDIuNDRzNC4yNjQtMC44MTMsNS44OS0yLjQ0XHJcblx0XHRcdGMzLjI1My0zLjI1MywzLjI1My04LjUyOCwwLTExLjc4TDEzMC41MTQsNTEuNjUzYy0yLjU5NC0yLjU5NC00LjAyNC02LjA0NC00LjAyNC05LjcxNGMwLTMuNjcsMS40MjktNy4xMTksNC4wMjQtOS43MTRcclxuXHRcdFx0YzUuMzU3LTUuMzU2LDE0LjA3Mi01LjM1NCwxOS40MjgsMGwxMjIuNzc0LDEyMi43NzNjMy4yNTMsMy4yNTMsOC41MjgsMy4yNTMsMTEuNzgsMGMzLjI1My0zLjI1MywzLjI1My04LjUyOCwwLTExLjc4XHJcblx0XHRcdEwxODEuMzcyLDQwLjA5NmMtNS4zNTYtNS4zNTYtNS4zNTYtMTQuMDcxLDAtMTkuNDI4YzUuMzU3LTUuMzU0LDE0LjA3MS01LjM1NiwxOS40MjgsMGwxMDcuNjczLDEwNy42NzNcclxuXHRcdFx0QzMwOC4zMTEsMTQ2LjE0NCwzMDYuMDIsMjMyLjEzOCwyNzcuODg1LDMwOS45OTl6XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGc+PC9nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnPjwvZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zz48L2c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGc+PC9nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnPjwvZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zz48L2c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGc+PC9nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnPjwvZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zz48L2c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGc+PC9nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnPjwvZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zz48L2c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGc+PC9nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnPjwvZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zz48L2c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInRhYiB0YWItLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHN2Z1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTUwXCJcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIC04MCA1MDAgNzAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTUwXCJcclxuXHRcdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtNjcuMTc5Njg4IDQ4LjM5NDUzMWgtLjEwMTU2M2MtNS41MjM0MzcgMC0xMCA0LjQ3NjU2My0xMCAxMCAwIDUuNTIzNDM4IDQuNDc2NTYzIDEwIDEwIDEwaC4xMDE1NjNjNS41MjM0MzcgMCAxMC00LjQ3NjU2MiAxMC0xMCAwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xMTYuNzEwOTM4IDQ4LjM5NDUzMWgtLjEwMTU2M2MtNS41MjM0MzcgMC0xMCA0LjQ3NjU2My0xMCAxMCAwIDUuNTIzNDM4IDQuNDc2NTYzIDEwIDEwIDEwaC4xMDE1NjNjNS41MjM0MzcgMCAxMC00LjQ3NjU2MiAxMC0xMCAwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xNjYuMjQyMTg4IDQ4LjM5NDUzMWgtLjEwMTU2M2MtNS41MjM0MzcgMC0xMCA0LjQ3NjU2My0xMCAxMCAwIDUuNTIzNDM4IDQuNDc2NTYzIDEwIDEwIDEwaC4xMDE1NjNjNS41MjM0MzcgMCAxMC00LjQ3NjU2MiAxMC0xMCAwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm00NDQuMzA4NTk0IDQ4LjM5NDUzMWgtMTkyLjkyOTY4OGMtNS41MjM0MzcgMC0xMCA0LjQ3NjU2My0xMCAxMCAwIDUuNTE5NTMxIDQuNDc2NTYzIDEwIDEwIDEwaDE5Mi45Mjk2ODhjNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMCAwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0yNjIuODkwNjI1IDQ1Mi40Mzc1Yy0yLjYyODkwNiAwLTUuMTk5MjE5IDEuMDcwMzEyLTcuMDcwMzEzIDIuOTI5Njg4LTEuODU5Mzc0IDEuODU5Mzc0LTIuOTI5Njg3IDQuNDQxNDA2LTIuOTI5Njg3IDcuMDcwMzEyczEuMDcwMzEzIDUuMjEwOTM4IDIuOTI5Njg3IDcuMDcwMzEyYzEuODcxMDk0IDEuODU5Mzc2IDQuNDQxNDA3IDIuOTI5Njg4IDcuMDcwMzEzIDIuOTI5Njg4czUuMjEwOTM3LTEuMDcwMzEyIDcuMDcwMzEzLTIuOTI5Njg4YzEuODY3MTg3LTEuODU5Mzc0IDIuOTI5Njg3LTQuNDQxNDA2IDIuOTI5Njg3LTcuMDcwMzEycy0xLjA2MjUtNS4yMTA5MzgtMi45Mjk2ODctNy4wNzAzMTJjLTEuODU5Mzc2LTEuODU5Mzc2LTQuNDQxNDA3LTIuOTI5Njg4LTcuMDcwMzEzLTIuOTI5Njg4em0wIDBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm00ODAuMjMwNDY5LjVoLTQ0OC40NjA5MzhjLTE3LjUxNTYyNSAwLTMxLjc2OTUzMSAxNC4yNTM5MDYtMzEuNzY5NTMxIDMxLjc2OTUzMXY0MDguMzk4NDM4YzAgMTcuNTE5NTMxIDE0LjI1MzkwNiAzMS43Njk1MzEgMzEuNzY5NTMxIDMxLjc2OTUzMWgxODkuMjMwNDY5YzUuNTIzNDM4IDAgMTAtNC40NzY1NjIgMTAtMTBzLTQuNDc2NTYyLTEwLTEwLTEwaC0xODkuMjMwNDY5Yy02LjQ4ODI4MSAwLTExLjc2OTUzMS01LjI3NzM0NC0xMS43Njk1MzEtMTEuNzY5NTMxdi0zMjQuMzc4OTA3aDQ3MnYzMjQuMzc4OTA3YzAgNi40ODgyODEtNS4yODEyNSAxMS43Njk1MzEtMTEuNzY5NTMxIDExLjc2OTUzMWgtMTc2LjU2MjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjItMTAgMTBzNC40NzY1NjIgMTAgMTAgMTBoMTc2LjU2MjVjMTcuNTE1NjI1IDAgMzEuNzY5NTMxLTE0LjI1IDMxLjc2OTUzMS0zMS43Njk1MzF2LTQwOC4zOTg0MzhjMC0xNy41MTU2MjUtMTQuMjUzOTA2LTMxLjc2OTUzMS0zMS43Njk1MzEtMzEuNzY5NTMxem0tNDYwLjIzMDQ2OSA5NS43ODUxNTZ2LTY0LjAxNTYyNWMwLTYuNDg4MjgxIDUuMjgxMjUtMTEuNzY5NTMxIDExLjc2OTUzMS0xMS43Njk1MzFoNDQ4LjQ2MDkzOGM2LjQ4ODI4MSAwIDExLjc2OTUzMSA1LjI4MTI1IDExLjc2OTUzMSAxMS43Njk1MzF2NjQuMDE5NTMxaC00NzJ6bTAgMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTE3OC4wMzkwNjIgMjMwLjVjMC0xOS44NTE1NjItMTYuMTQ4NDM3LTM2LTM2LTM2aC0zMy42Njc5NjhjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjItMTAgMTB2MTA0YzAgNS41MjM0MzggNC40NzY1NjIgMTAgMTAgMTBoMzMuNjY3OTY4YzE5Ljg1MTU2MyAwIDM2LTE2LjE0ODQzOCAzNi0zNiAwLTEwLjIxNDg0NC00LjI4MTI1LTE5LjQ0MTQwNi0xMS4xNDA2MjQtMjYgNi44NTkzNzQtNi41NTg1OTQgMTEuMTQwNjI0LTE1Ljc4NTE1NiAxMS4xNDA2MjQtMjZ6bS0yMCA1MmMwIDguODIwMzEyLTcuMTc5Njg3IDE2LTE2IDE2aC0yMy42Njc5Njh2LTMyaDIzLjY2Nzk2OGM4LjgyMDMxMyAwIDE2IDcuMTc1NzgxIDE2IDE2em0tMzkuNjY3OTY4LTM2di0zMmgyMy42Njc5NjhjOC44MjQyMTkgMCAxNiA3LjE3OTY4OCAxNiAxNnMtNy4xNzU3ODEgMTYtMTYgMTZ6bTAgMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTIwNi42NDg0MzggMTk0LjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjItMTAgMTB2ODAuODcxMDk0YzAgMTguMjY5NTMxIDE0Ljg2MzI4MSAzMy4xMjg5MDYgMzMuMTI4OTA2IDMzLjEyODkwNiA1LjUyMzQzNyAwIDEwLTQuNDc2NTYyIDEwLTEwcy00LjQ3NjU2My0xMC0xMC0xMGMtNy4yMzgyODIgMC0xMy4xMjg5MDYtNS44OTA2MjUtMTMuMTI4OTA2LTEzLjEyODkwNnYtODAuODcxMDk0YzAtNS41MjM0MzgtNC40NzY1NjMtMTAtMTAtMTB6bTAgMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTMyNC44NjcxODggMjgyLjI4OTA2MmMwLTE5Ljk2ODc1LTE2LjI0MjE4OC0zNi4yMTQ4NDMtMzYuMjEwOTM4LTM2LjIxNDg0M3MtMzYuMjEwOTM4IDE2LjI0NjA5My0zNi4yMTA5MzggMzYuMjE0ODQzIDE2LjI0NjA5NCAzNi4yMTA5MzggMzYuMjEwOTM4IDM2LjIxMDkzOGMxOS45Njg3NSAwIDM2LjIxMDkzOC0xNi4yNDIxODggMzYuMjEwOTM4LTM2LjIxMDkzOHptLTUyLjQyMTg3NiAwYzAtOC45NDE0MDYgNy4yNzM0MzgtMTYuMjE0ODQzIDE2LjIxMDkzOC0xNi4yMTQ4NDNzMTYuMjEwOTM4IDcuMjczNDM3IDE2LjIxMDkzOCAxNi4yMTQ4NDNjMCA4LjkzNzUtNy4yNjk1MzIgMTYuMjEwOTM4LTE2LjIxMDkzOCAxNi4yMTA5MzhzLTE2LjIxMDkzOC03LjI3MzQzOC0xNi4yMTA5MzgtMTYuMjEwOTM4em0wIDBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0zNzcuNDE0MDYyIDM0Ni41Yy04LjkzNzUgMC0xNi4yMTA5MzctNy4yNzM0MzgtMTYuMjEwOTM3LTE2LjIxMDkzOCAwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwcy0xMCA0LjQ3NjU2My0xMCAxMGMwIDE5Ljk2ODc1IDE2LjI0NjA5NCAzNi4yMTA5MzggMzYuMjEwOTM3IDM2LjIxMDkzOCAxOS45Njg3NSAwIDM2LjIxNDg0NC0xNi4yNDIxODggMzYuMjE0ODQ0LTM2LjIxMDkzOHYtNDhjMC0xOS45Njg3NS0xNi4yNDYwOTQtMzYuMjE0ODQzLTM2LjIxNDg0NC0zNi4yMTQ4NDMtMTkuOTY0ODQzIDAtMzYuMjEwOTM3IDE2LjI0NjA5My0zNi4yMTA5MzcgMzYuMjE0ODQzczE2LjI0NjA5NCAzNi4yMTA5MzggMzYuMjEwOTM3IDM2LjIxMDkzOGM1LjgyODEyNiAwIDExLjMzMjAzMi0xLjM5MDYyNSAxNi4yMTQ4NDQtMy44NDc2NTZ2MTUuNjM2NzE4YzAgOC45Mzc1LTcuMjczNDM3IDE2LjIxMDkzOC0xNi4yMTQ4NDQgMTYuMjEwOTM4em0wLTQ4Yy04LjkzNzUgMC0xNi4yMTA5MzctNy4yNzM0MzgtMTYuMjEwOTM3LTE2LjIxMDkzOCAwLTguOTQxNDA2IDcuMjczNDM3LTE2LjIxNDg0MyAxNi4yMTA5MzctMTYuMjE0ODQzIDguOTQxNDA3IDAgMTYuMjE0ODQ0IDcuMjczNDM3IDE2LjIxNDg0NCAxNi4yMTQ4NDMgMCA4LjkzNzUtNy4yNzM0MzcgMTYuMjEwOTM4LTE2LjIxNDg0NCAxNi4yMTA5Mzh6bTAgMFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTEwOC4zNzEwOTQgNDE2LjVoMjk1LjI1NzgxMmM1LjUyMzQzOCAwIDEwLTQuNDc2NTYyIDEwLTEwcy00LjQ3NjU2Mi0xMC0xMC0xMGgtMjk1LjI1NzgxMmMtNS41MTk1MzIgMC0xMCA0LjQ3NjU2Mi0xMCAxMHM0LjQ4MDQ2OCAxMCAxMCAxMHptMCAwXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5CbG9nPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuICAgKVxyXG5cclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFByYXllckNhcmQgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9QcmF5ZXJDYXJkXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQsIFByYXllciwgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XG5cdGNvbnN0IHByYXllcnM6IFByYXllcltdID0gYXdhaXQgcHJpc21hLnByYXllci5maW5kTWFueSgpXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGluaXRpYWxQcmF5ZXJzOiBwcmF5ZXJzXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGluaXRpYWxQcmF5ZXJzIH0pIHtcblx0ICBjb25zdCBbcHJheWVycywgc2V0UHJheWVyc10gPSB1c2VTdGF0ZTxQcmF5ZXJbXT4oaW5pdGlhbFByYXllcnMpXG5cbiAgcmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICB3LXNjcmVlbiAgb3ZlcmZsb3cteC1oaWRkZW5cdCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBweS0yXCI+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRcdGRhdGEtbmFtZT1cIkJNQy1XaWRnZXRcIlxuXHRcdFx0XHRcdGRhdGEtY2Zhc3luYz1cImZhbHNlXCJcblx0XHRcdFx0XHRzcmM9XCJodHRwczovL2NkbmpzLmJ1eW1lYWNvZmZlZS5jb20vMS4wLjAvd2lkZ2V0LnByb2QubWluLmpzXCJcblx0XHRcdFx0XHRkYXRhLWlkPVwiaG92YWh5aWlcIlxuXHRcdFx0XHRcdGRhdGEtZGVzY3JpcHRpb249XCJTdXBwb3J0IG1lIG9uIEJ1eSBtZSBhIGNvZmZlZSFcIlxuXHRcdFx0XHRcdGRhdGEtbWVzc2FnZT1cIlwiXG5cdFx0XHRcdFx0ZGF0YS1jb2xvcj1cIiNGRkREMDBcIlxuXHRcdFx0XHRcdGRhdGEtcG9zaXRpb249XCJSaWdodFwiXG5cdFx0XHRcdFx0ZGF0YS14X21hcmdpbj1cIjE4XCJcblx0XHRcdFx0XHRkYXRhLXlfbWFyZ2luPVwiMTAwXCJcblx0XHRcdFx0Pjwvc2NyaXB0PlxuXG5cdFx0XHRcdDx0aXRsZT5KZXN1cyDinJ3vuI/vuI8gfCBUaGUgT25seSBIb3BlPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cIlVURi04XCI+PC9tZXRhPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0Y29udGVudD1cIldlbGNvbWUgdG8gUHJheWVyIFJvb20uIOKAnFByYXkgaW4gdGhlIFNwaXJpdCwgb24gYWxsIG9jY2FzaW9ucywgd2l0aCBhbGwga2luZHMgb2YgcHJheWVycyBhbmRcblx0XHRcdFx0XHRyZXF1ZXN0cy4uLuKAnSAtIEVwaGVzaWFucyA2OjE4XCJcblx0XHRcdFx0PjwvbWV0YT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlByYXllciBSb29tXCI+PC9tZXRhPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkhvdmFoIFlpaVwiPjwvbWV0YT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0PjwvbWV0YT5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGZsZXgtMSBweC0xMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiIHRleHQtNHhsIHhsOnRleHQtNnhsIGZvbnQtYm9sZFwiPlxuXHRcdFx0XHRcdFdlbGNvbWUgdG97XCIgXCJ9XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5cblx0XHRcdFx0XHRcdFByYXllciBSb29tXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2gxPlxuXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTMgeGw6dGV4dC0yeGwgIHRleHQteGwgXCI+XG5cdFx0XHRcdFx04oCcUHJheSBpbiB0aGUgU3Bpcml0LCBvbiBhbGwgb2NjYXNpb25zLCB3aXRoIGFsbCBraW5kcyBvZiBwcmF5ZXJzIGFuZFxuXHRcdFx0XHRcdHJlcXVlc3RzLi4u4oCdIC0gRXBoZXNpYW5zIDY6MThcblx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCItbXgtMyBtZDpmbGV4IGl0ZW1zLXN0YXJ0IHctZnVsbCBtdC02IFwiPlxuXHRcdFx0XHRcdFx0e3ByYXllcnMubWFwKChjLCBpOiBudW1iZXIpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0zIG1kOnctMS8zXCIga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHQ8UHJheWVyQ2FyZCBwcmF5ZXI9e2N9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCAgaC0yNCBcIj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG5cdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdFNwb25zb3JlZCBieXtcIiBcIn1cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkplc3VzIE9ubHkgSG9wZSBMb2dvXCIgY2xhc3NOYW1lPVwiaC02IG1sLTJcIiAvPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Zvb3Rlcj4gKi99XG5cdFx0XHQ8TmF2YmFyIC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlByYXllckNhcmQiLCJwcm9wcyIsInByYXllciIsImF2YXRhciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIk5hdmJhciIsIkhlYWQiLCJ1c2VTdGF0ZSIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByYXllcnMiLCJmaW5kTWFueSIsImluaXRpYWxQcmF5ZXJzIiwiSG9tZSIsInNldFByYXllcnMiLCJtYXAiLCJjIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=