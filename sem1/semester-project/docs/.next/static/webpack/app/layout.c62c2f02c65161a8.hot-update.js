"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"17db70ddc735\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzJlZmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxN2RiNzBkZGM3MzVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Logo */ \"(app-pages-browser)/./components/Logo.tsx\");\n/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileNav */ \"(app-pages-browser)/./components/MobileNav.tsx\");\n/* harmony import */ var _MobileNavHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileNavHelp */ \"(app-pages-browser)/./components/MobileNavHelp.tsx\");\n/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar.css */ \"(app-pages-browser)/./components/NavBar.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Get this info from some external source (e.g. CMS)\nconst pages = [\n    {\n        href: \"/\",\n        title: \"Home\"\n    },\n    {\n        href: \"/pages/usluge\",\n        title: \"Usluge\"\n    },\n    {\n        href: \"/recenzije\",\n        title: \"Recenzije i osvrti\"\n    },\n    {\n        href: \"/about\",\n        title: \"O nama\"\n    }\n];\nconst NavBar = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handlePageClick = (href)=>{\n        setActivePage(href);\n        setOpen(false); // Zatvaramo mobilni meni nakon klika na link\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex items-center justify-between p-4 m-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomMainNav, {\n                pages: pages,\n                activePage: activePage,\n                handlePageClick: handlePageClick\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileNavHelp__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                open: open,\n                clickHandler: setOpen\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: open,\n                clickHandler: setOpen,\n                pages: pages\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"HWtCzKazjxRfbc0q4OJeDgr3Vko=\");\n_c = NavBar;\nconst CustomMainNav = (param)=>{\n    let { pages, activePage, handlePageClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"hidden lg:flex text-[18px]\",\n        children: pages.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: page.href,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"mx-4 p-2  \".concat(activePage !== page.href ? \"bg-brand-purple-50 rounded-sm text-[#09396d]\" : \"bg-white rounded-sm\", \" \"),\n                    onClick: ()=>handlePageClick(page.href),\n                    children: page.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\anja\\\\HCI\\\\semester-project\\\\components\\\\Navbar.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = CustomMainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"CustomMainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDaUM7QUFDSjtBQUVRO0FBQ0Q7QUFDUTtBQUN0QjtBQU90QixxREFBcUQ7QUFDckQsTUFBTUssUUFBZ0I7SUFDcEI7UUFBRUMsTUFBTTtRQUFLQyxPQUFPO0lBQU87SUFDM0I7UUFBRUQsTUFBTTtRQUFpQkMsT0FBTztJQUFTO0lBQ3pDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFxQjtJQUNsRDtRQUFFRCxNQUFNO1FBQVVDLE9BQU87SUFBUztDQUNuQztBQUVELE1BQU1DLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNYSxrQkFBa0IsQ0FBQ1A7UUFDdkJNLGNBQWNOO1FBQ2RJLFFBQVEsUUFBUSw2Q0FBNkM7SUFDL0Q7SUFFQSxxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDYix3REFBSUE7Ozs7OzBCQUNMLDhEQUFDYztnQkFDQ1gsT0FBT0E7Z0JBQ1BNLFlBQVlBO2dCQUNaRSxpQkFBaUJBOzs7Ozs7MEJBRW5CLDhEQUFDVCxzREFBYUE7Z0JBQUNLLE1BQU1BO2dCQUFNUSxjQUFjUDs7Ozs7OzBCQUN6Qyw4REFBQ1Asa0RBQVNBO2dCQUFDTSxNQUFNQTtnQkFBTVEsY0FBY1A7Z0JBQVNMLE9BQU9BOzs7Ozs7Ozs7Ozs7QUFHM0Q7R0FyQk1HO0tBQUFBO0FBdUJOLE1BQU1RLGdCQUFnQjtRQUFDLEVBQ3JCWCxLQUFLLEVBQ0xNLFVBQVUsRUFDVkUsZUFBZSxFQUtoQjtJQUNDLHFCQUNFLDhEQUFDSztRQUFJSCxXQUFVO2tCQUNaVixNQUFNYyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDcEIsa0RBQUlBO2dCQUFhSyxNQUFNYyxLQUFLZCxJQUFJOzBCQUMvQiw0RUFBQ2dCO29CQUNDUCxXQUFXLGFBQStHLE9BQWxHSixlQUFlUyxLQUFLZCxJQUFJLEdBQUcsaURBQWlELHVCQUFzQjtvQkFDMUhpQixTQUFTLElBQU1WLGdCQUFnQk8sS0FBS2QsSUFBSTs4QkFFdkNjLEtBQUtiLEtBQUs7Ozs7OztlQUxKYzs7Ozs7Ozs7OztBQVluQjtNQXhCTUw7QUEwQk4sK0RBQWVSLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBMb2dvIGZyb20gXCJAL2NvbXBvbmVudHMvTG9nb1wiO1xyXG5pbXBvcnQgTW9iaWxlTmF2IGZyb20gXCIuL01vYmlsZU5hdlwiO1xyXG5pbXBvcnQgTW9iaWxlTmF2SGVscCBmcm9tIFwiLi9Nb2JpbGVOYXZIZWxwXCI7XHJcbmltcG9ydCAnLi9OYXZCYXIuY3NzJztcclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2UgPSB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vLyBHZXQgdGhpcyBpbmZvIGZyb20gc29tZSBleHRlcm5hbCBzb3VyY2UgKGUuZy4gQ01TKVxyXG5jb25zdCBwYWdlczogUGFnZVtdID0gW1xyXG4gIHsgaHJlZjogXCIvXCIsIHRpdGxlOiBcIkhvbWVcIiB9LFxyXG4gIHsgaHJlZjogXCIvcGFnZXMvdXNsdWdlXCIsIHRpdGxlOiBcIlVzbHVnZVwiIH0sXHJcbiAgeyBocmVmOiBcIi9yZWNlbnppamVcIiwgdGl0bGU6IFwiUmVjZW56aWplIGkgb3N2cnRpXCIgfSxcclxuICB7IGhyZWY6IFwiL2Fib3V0XCIsIHRpdGxlOiBcIk8gbmFtYVwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAoaHJlZjogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQYWdlKGhyZWYpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7IC8vIFphdHZhcmFtbyBtb2JpbG5pIG1lbmkgbmFrb24ga2xpa2EgbmEgbGlua1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IG0tMlwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8Q3VzdG9tTWFpbk5hdlxyXG4gICAgICAgIHBhZ2VzPXtwYWdlc31cclxuICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxyXG4gICAgICAgIGhhbmRsZVBhZ2VDbGljaz17aGFuZGxlUGFnZUNsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgICA8TW9iaWxlTmF2SGVscCBvcGVuPXtvcGVufSBjbGlja0hhbmRsZXI9e3NldE9wZW59IC8+XHJcbiAgICAgIDxNb2JpbGVOYXYgb3Blbj17b3Blbn0gY2xpY2tIYW5kbGVyPXtzZXRPcGVufSBwYWdlcz17cGFnZXN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEN1c3RvbU1haW5OYXYgPSAoe1xyXG4gIHBhZ2VzLFxyXG4gIGFjdGl2ZVBhZ2UsXHJcbiAgaGFuZGxlUGFnZUNsaWNrLFxyXG59OiB7XHJcbiAgcGFnZXM6IFBhZ2VbXTtcclxuICBhY3RpdmVQYWdlOiBzdHJpbmc7XHJcbiAgaGFuZGxlUGFnZUNsaWNrOiAoaHJlZjogc3RyaW5nKSA9PiB2b2lkO1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggdGV4dC1bMThweF1cIj5cclxuICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPXtwYWdlLmhyZWZ9PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXgtNCBwLTIgICR7YWN0aXZlUGFnZSAhPT0gcGFnZS5ocmVmID8gXCJiZy1icmFuZC1wdXJwbGUtNTAgcm91bmRlZC1zbSB0ZXh0LVsjMDkzOTZkXVwiIDogXCJiZy13aGl0ZSByb3VuZGVkLXNtXCJ9IGB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDbGljayhwYWdlLmhyZWYpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cGFnZS50aXRsZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvbmF2ID5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiTG9nbyIsIk1vYmlsZU5hdiIsIk1vYmlsZU5hdkhlbHAiLCJwYWdlcyIsImhyZWYiLCJ0aXRsZSIsIk5hdkJhciIsIm9wZW4iLCJzZXRPcGVuIiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJoYW5kbGVQYWdlQ2xpY2siLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiQ3VzdG9tTWFpbk5hdiIsImNsaWNrSGFuZGxlciIsIm5hdiIsIm1hcCIsInBhZ2UiLCJpbmRleCIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});