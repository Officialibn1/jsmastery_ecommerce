"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(\"sk_test_51Mj5OmBF5mBg7x1OkDhDENHTf4Vue5N0TnvXW00fdAAXpyc1KjSTGj1BOZ3UalaJjtUPXW8GYBH37WLVKKLSCGCn00jIwQSp9L\");\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    console.log(req.body);\n\n    try {\n      const params = {\n        submit_type: 'pay',\n        mode: 'payment',\n        payment_method_types: ['card'],\n        billing_address_collection: 'auto',\n        shipping_options: [{\n          shipping_rate: 'shr_1NkUjSBF5mBg7x1OrsDCTdDH'\n        }, {\n          shipping_rate: 'shr_1NkUkMBF5mBg7x1OKbFTGGnQ'\n        }],\n        line_items: req.body.map(item => {\n          const img = item.image[0].asset._ref;\n          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/3dyt5v32/production/').replace('-webp', '.webp');\n          return {\n            price_data: {\n              currency: 'usd',\n              product_data: {\n                name: item.name,\n                images: [newImage]\n              },\n              unit_amount: item.price * 100\n            },\n            adjustable_quantity: {\n              enabled: true,\n              minimum: 1\n            },\n            quantity: item.quantity\n          };\n        }),\n        success_url: `${req.headers.origin}/?success=true`,\n        cancel_url: `${req.headers.origin}/?canceled=true`\n      }; // Create Checkout Sessions from body params.\n\n      const session = await stripe.checkout.sessions.create(params);\n      res.redirect(303, session.url);\n    } catch (err) {\n      res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfU0VDUkVUX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN1Ym1pdF90eXBlOiAncGF5JyxcbiAgICAgICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAnYXV0bycsXG4gICAgICAgICAgICBzaGlwcGluZ19vcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBzaGlwcGluZ19yYXRlOiAnc2hyXzFOa1VqU0JGNW1CZzd4MU9yc0RDVGRESCd9LFxuICAgICAgICAgICAgICAgIHsgc2hpcHBpbmdfcmF0ZTogJ3Nocl8xTmtVa01CRjVtQmc3eDFPS2JGVEdHblEnfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaW5lX2l0ZW1zOiByZXEuYm9keS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gaXRlbS5pbWFnZVswXS5hc3NldC5fcmVmO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gaW1nLnJlcGxhY2UoJ2ltYWdlLScsICdodHRwczovL2Nkbi5zYW5pdHkuaW8vaW1hZ2VzLzNkeXQ1djMyL3Byb2R1Y3Rpb24vJykucmVwbGFjZSgnLXdlYnAnLCAnLndlYnAnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlX2RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAndXNkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IFtuZXdJbWFnZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RhYmxlX3F1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP3N1Y2Nlc3M9dHJ1ZWAsXG4gICAgICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59Lz9jYW5jZWxlZD10cnVlYCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUocGFyYW1zKTtcbiAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgzMDMsIHNlc3Npb24udXJsKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1NFQ1JFVF9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJwYXJhbXMiLCJzdWJtaXRfdHlwZSIsIm1vZGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwic2hpcHBpbmdfb3B0aW9ucyIsInNoaXBwaW5nX3JhdGUiLCJsaW5lX2l0ZW1zIiwibWFwIiwiaXRlbSIsImltZyIsImltYWdlIiwiYXNzZXQiLCJfcmVmIiwibmV3SW1hZ2UiLCJyZXBsYWNlIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsImltYWdlcyIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJhZGp1c3RhYmxlX3F1YW50aXR5IiwiZW5hYmxlZCIsIm1pbmltdW0iLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInJlZGlyZWN0IiwidXJsIiwiZXJyIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();