"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mac/Documents/Programming/bsc_ecommerce_project/ECOMMERCE_WEBSITE/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var products = _ref.products,\n      bannerData = _ref.bannerData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.HeroBanner, {\n      heroBanner: bannerData.length && bannerData[0]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"products-heading\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        children: \"Best selling products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: \"Speakers of many variations\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"products-container\",\n      children: products === null || products === void 0 ? void 0 : products.map(function (product) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Product, {\n          product: product\n        }, product._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.FooterBanner, {\n      footerBanner: bannerData.length && bannerData[0]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdBOzs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUN2QyxzQkFDSTtBQUFBLDRCQUNDLDhEQUFDLG1EQUFEO0FBQVksZ0JBQVUsRUFBRUEsVUFBVSxDQUFDQyxNQUFYLElBQXFCRCxVQUFVLENBQUMsQ0FBRDtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFHQztBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsZUFHRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELGVBU0M7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSxnQkFDSUQsUUFESixhQUNJQSxRQURKLHVCQUNJQSxRQUFRLENBQUVHLEdBQVYsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsNEJBQ2xCLDhEQUFDLGdEQUFEO0FBQTJCLGlCQUFPLEVBQUVBO0FBQXBDLFdBQWNBLE9BQU8sQ0FBQ0MsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEa0I7QUFBQSxPQUFyQjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURCxlQWVDLDhEQUFDLHFEQUFEO0FBQWMsa0JBQVksRUFBRUosVUFBVSxDQUFDQyxNQUFYLElBQXFCRCxVQUFVLENBQUMsQ0FBRDtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkQ7QUFBQSxrQkFESjtBQW1CSCxDQXBCRDs7S0FBTUY7O0FBcUNOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9saWIvY2xpZW50XCI7XG5cbmltcG9ydCB7IEZvb3RlckJhbm5lciwgSGVyb0Jhbm5lciwgUHJvZHVjdCB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5cbmNvbnN0IEhvbWUgPSAoeyBwcm9kdWN0cywgYmFubmVyRGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgIDxIZXJvQmFubmVyIGhlcm9CYW5uZXI9e2Jhbm5lckRhdGEubGVuZ3RoICYmIGJhbm5lckRhdGFbMF19IC8+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0cy1oZWFkaW5nJz5cbiAgICAgICAgICAgIDxoMj5CZXN0IHNlbGxpbmcgcHJvZHVjdHM8L2gyPlxuXG4gICAgICAgICAgICA8cD5TcGVha2VycyBvZiBtYW55IHZhcmlhdGlvbnM8L3A+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7cHJvZHVjdHM/Lm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuX2lkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPEZvb3RlckJhbm5lciBmb290ZXJCYW5uZXI9e2Jhbm5lckRhdGEubGVuZ3RoICYmIGJhbm5lckRhdGFbMF19IC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSAnKltfdHlwZSA9PSBcInByb2R1Y3RcIl0nO1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcblxuICAgIGNvbnN0IGJhbm5lclF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJiYW5uZXJcIl1gO1xuICAgIGNvbnN0IGJhbm5lckRhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2goYmFubmVyUXVlcnkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb2R1Y3RzLFxuICAgICAgICAgICAgYmFubmVyRGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9vdGVyQmFubmVyIiwiSGVyb0Jhbm5lciIsIlByb2R1Y3QiLCJIb21lIiwicHJvZHVjdHMiLCJiYW5uZXJEYXRhIiwibGVuZ3RoIiwibWFwIiwicHJvZHVjdCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});