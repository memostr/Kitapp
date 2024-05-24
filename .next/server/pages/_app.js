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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/product.js":
/*!*****************************!*\
  !*** ./contexts/product.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductProvider\": () => (/* binding */ ProductProvider),\n/* harmony export */   \"useProduct\": () => (/* binding */ useProduct)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useProduct = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductContext);\n};\nconst ProductProvider = ({ children  })=>{\n    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"\\xdcr\\xfcn 1\",\n            brand: \"\\u015Eeker Portakal\\u0131\",\n            price: 120,\n            image: {\n                url: \"/product1.png\"\n            }\n        },\n        {\n            id: 2,\n            name: \"\\xdcr\\xfcn 2\",\n            brand: \"YKS Haz\\u0131rl\\u0131k\",\n            price: 110,\n            image: {\n                url: \"/product2.png\"\n            }\n        },\n        {\n            id: 3,\n            name: \"\\xdcr\\xfcn 3\",\n            brand: \"\\u0130ngilizce Konu\\u015Fma K\\u0131lavuzu\",\n            price: 100,\n            image: {\n                url: \"/product3.png\"\n            }\n        },\n        {\n            id: 4,\n            name: \"\\xdcr\\xfcn 4\",\n            brand: \"LGS Haz\\u0131rl\\u0131k\",\n            price: 99,\n            image: {\n                url: \"/product4.png\"\n            }\n        },\n        {\n            id: 5,\n            name: \"\\xdcr\\xfcn 5\",\n            brand: \"Harry Potter\",\n            price: 190,\n            image: {\n                url: \"/product6.png\"\n            }\n        },\n        {\n            id: 6,\n            name: \"\\xdcr\\xfcn 6\",\n            brand: \"\\u0130ngilizce S\\xf6zl\\xfck\",\n            price: 90,\n            image: {\n                url: \"/product7.png\"\n            }\n        },\n        {\n            id: 7,\n            name: \"\\xdcr\\xfcn 7\",\n            brand: \"Enkaz\",\n            price: 100,\n            image: {\n                url: \"/product8.png\"\n            }\n        },\n        {\n            id: 8,\n            name: \"\\xdcr\\xfcn 8\",\n            brand: \"Atat\\xfcrk Anat\\xfcrk\",\n            price: 80,\n            image: {\n                url: \"/product9.png\"\n            }\n        },\n        {\n            id: 9,\n            name: \"\\xdcr\\xfcn 9\",\n            brand: \"Yeralt\\u0131ndan Notlar\",\n            price: 88,\n            image: {\n                url: \"/product10.png\"\n            }\n        },\n        {\n            id: 10,\n            name: \"\\xdcr\\xfcn 10\",\n            brand: \"Galaksi Rehberi\",\n            price: 177,\n            image: {\n                url: \"/product5.png\"\n            }\n        },\n        {\n            id: 11,\n            name: \"\\xdcr\\xfcn 11\",\n            brand: \"Sadakat\",\n            price: 130,\n            image: {\n                url: \"/product11.png\"\n            }\n        }, \n    ]);\n    const addProduct = (product)=>{\n        console.log(\"Adding product:\", product); // Debugging log\n        setProducts((prevProducts)=>[\n                ...prevProducts,\n                {\n                    ...product,\n                    id: prevProducts.length + 1\n                }\n            ]\n        );\n        console.log(\"Products after adding:\", products); // Debugging log\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductContext.Provider, {\n        value: {\n            products,\n            addProduct\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/alifuzun/Desktop/Kitap-Proje-main/contexts/product.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtnQkFBRUMsR0FBRyxFQUFFLGdCQUFnQjthQUFFO1NBQUU7S0FDNUYsQ0FBQztJQUVGLE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxPQUFPLEdBQUs7UUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFRixPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtRQUN6RFIsV0FBVyxDQUFDLENBQUNXLFlBQVksR0FBSzttQkFBSUEsWUFBWTtnQkFBRTtvQkFBRSxHQUFHSCxPQUFPO29CQUFFUCxFQUFFLEVBQUVVLFlBQVksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7aUJBQUU7YUFBQztRQUFBLENBQUMsQ0FBQztRQUM5RkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVYLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0tBQ2xFO0lBRUQscUJBQ0UsOERBQUNKLGNBQWMsQ0FBQ2tCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVmLFFBQVE7WUFBRVEsVUFBVTtTQUFFO2tCQUNyRFQsUUFBUTs7Ozs7aUJBQ2UsQ0FDMUI7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvcHJvZHVjdC5qcz9jMDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9kdWN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IHVzZVByb2R1Y3QgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiw5xyw7xuIDFcIiwgYnJhbmQ6IFwixZ5la2VyIFBvcnRha2FsxLFcIiwgcHJpY2U6IDEyMCwgaW1hZ2U6IHsgdXJsOiBcIi9wcm9kdWN0MS5wbmdcIiB9IH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCLDnHLDvG4gMlwiLCBicmFuZDogXCJZS1MgSGF6xLFybMSxa1wiLCBwcmljZTogMTEwLCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3QyLnBuZ1wiIH0gfSxcbiAgICB7IGlkOiAzLCBuYW1lOiBcIsOccsO8biAzXCIsIGJyYW5kOiBcIsSwbmdpbGl6Y2UgS29udcWfbWEgS8SxbGF2dXp1XCIsIHByaWNlOiAxMDAsIGltYWdlOiB7IHVybDogXCIvcHJvZHVjdDMucG5nXCIgfSB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiw5xyw7xuIDRcIiwgYnJhbmQ6IFwiTEdTIEhhesSxcmzEsWtcIiwgcHJpY2U6IDk5LCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3Q0LnBuZ1wiIH0gfSxcbiAgICB7IGlkOiA1LCBuYW1lOiBcIsOccsO8biA1XCIsIGJyYW5kOiBcIkhhcnJ5IFBvdHRlclwiLCBwcmljZTogMTkwLCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3Q2LnBuZ1wiIH0gfSxcbiAgICB7IGlkOiA2LCBuYW1lOiBcIsOccsO8biA2XCIsIGJyYW5kOiBcIsSwbmdpbGl6Y2UgU8O2emzDvGtcIiwgcHJpY2U6IDkwLCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3Q3LnBuZ1wiIH0gfSxcbiAgICB7IGlkOiA3LCBuYW1lOiBcIsOccsO8biA3XCIsIGJyYW5kOiBcIkVua2F6XCIsIHByaWNlOiAxMDAsIGltYWdlOiB7IHVybDogXCIvcHJvZHVjdDgucG5nXCIgfSB9LFxuICAgIHsgaWQ6IDgsIG5hbWU6IFwiw5xyw7xuIDhcIiwgYnJhbmQ6IFwiQXRhdMO8cmsgQW5hdMO8cmtcIiwgcHJpY2U6IDgwLCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3Q5LnBuZ1wiIH0gfSxcbiAgICB7IGlkOiA5LCBuYW1lOiBcIsOccsO8biA5XCIsIGJyYW5kOiBcIlllcmFsdMSxbmRhbiBOb3RsYXJcIiwgcHJpY2U6IDg4LCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3QxMC5wbmdcIiB9IH0sXG4gICAgeyBpZDogMTAsIG5hbWU6IFwiw5xyw7xuIDEwXCIsIGJyYW5kOiBcIkdhbGFrc2kgUmVoYmVyaVwiLCBwcmljZTogMTc3LCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3Q1LnBuZ1wiIH0gfSxcbiAgICB7IGlkOiAxMSwgbmFtZTogXCLDnHLDvG4gMTFcIiwgYnJhbmQ6IFwiU2FkYWthdFwiLCBwcmljZTogMTMwLCBpbWFnZTogeyB1cmw6IFwiL3Byb2R1Y3QxMS5wbmdcIiB9IH0sXG4gIF0pO1xuXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHByb2R1Y3Q6XCIsIHByb2R1Y3QpOyAvLyBEZWJ1Z2dpbmcgbG9nXG4gICAgc2V0UHJvZHVjdHMoKHByZXZQcm9kdWN0cykgPT4gWy4uLnByZXZQcm9kdWN0cywgeyAuLi5wcm9kdWN0LCBpZDogcHJldlByb2R1Y3RzLmxlbmd0aCArIDEgfV0pO1xuICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdHMgYWZ0ZXIgYWRkaW5nOlwiLCBwcm9kdWN0cyk7IC8vIERlYnVnZ2luZyBsb2dcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9kdWN0cywgYWRkUHJvZHVjdCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Byb2R1Y3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJQcm9kdWN0Q29udGV4dCIsInVzZVByb2R1Y3QiLCJQcm9kdWN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJicmFuZCIsInByaWNlIiwiaW1hZ2UiLCJ1cmwiLCJhZGRQcm9kdWN0IiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2UHJvZHVjdHMiLCJsZW5ndGgiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/product.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/product */ \"./contexts/product.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_product__WEBPACK_IMPORTED_MODULE_2__.ProductProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/alifuzun/Desktop/Kitap-Proje-main/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                autoClose: 3000,\n                theme: \"colored\",\n                className: \"toastify\",\n                hideProgressBar: true,\n                pauseOnFocusLoss: false\n            }, void 0, false, {\n                fileName: \"/Users/alifuzun/Desktop/Kitap-Proje-main/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alifuzun/Desktop/Kitap-Proje-main/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUN1QjtBQUNOO0FBQ0Q7QUFFL0MsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNKLDhEQUFlOzswQkFDZCw4REFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTswQkFDNUIsOERBQUNILDBEQUFjO2dCQUNiSSxTQUFTLEVBQUUsSUFBSTtnQkFDZkMsS0FBSyxFQUFDLFNBQVM7Z0JBQ2ZDLFNBQVMsRUFBQyxVQUFVO2dCQUNwQkMsZUFBZTtnQkFDZkMsZ0JBQWdCLEVBQUUsS0FBSzs7Ozs7b0JBQ3ZCOzs7Ozs7WUFDYyxDQUNsQjtDQUNIO0FBRUQsaUVBQWVQLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCJcbmltcG9ydCB7IFByb2R1Y3RQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9wcm9kdWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgIGF1dG9DbG9zZT17MzAwMH1cbiAgICAgICAgdGhlbWU9XCJjb2xvcmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidG9hc3RpZnlcIlxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXJcbiAgICAgICAgcGF1c2VPbkZvY3VzTG9zcz17ZmFsc2V9XG4gICAgICAvPlxuICAgIDwvUHJvZHVjdFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJQcm9kdWN0UHJvdmlkZXIiLCJUb2FzdENvbnRhaW5lciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXV0b0Nsb3NlIiwidGhlbWUiLCJjbGFzc05hbWUiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJwYXVzZU9uRm9jdXNMb3NzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();