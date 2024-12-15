"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(page)/page",{

/***/ "(app-pages-browser)/./src/components/grid/UploadSection.tsx":
/*!***********************************************!*\
  !*** ./src/components/grid/UploadSection.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// src/components/grid/UploadSection.tsx\n\n\nconst UploadSection = ()=>{\n    _s();\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleDragOver = (e)=>{\n        e.preventDefault();\n        setIsDragging(true);\n    };\n    const handleDragLeave = (e)=>{\n        e.preventDefault();\n        setIsDragging(false);\n    };\n    const handleDrop = (e)=>{\n        e.preventDefault();\n        setIsDragging(false);\n        if (e.dataTransfer.files && e.dataTransfer.files[0]) {\n            const droppedFile = e.dataTransfer.files[0];\n            setFile(droppedFile);\n            console.log('Archivo recibido:', droppedFile);\n        }\n    };\n    const handleFileInputChange = (e)=>{\n        if (e.target.files && e.target.files[0]) {\n            const selectedFile = e.target.files[0];\n            setFile(selectedFile);\n            console.log('Archivo seleccionado:', selectedFile);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"min-h-screen flex items-center justify-center bg-[#e4e4e4]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-6 flex flex-col md:flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/2 text-center md:text-left mb-8 md:mb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-semibold text-gray-800 mb-4\",\n                            children: \"Organiza tu claustro de forma eficiente\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-6\",\n                            children: \"Carga tu conjunto de datos para comenzar a aprovechar la IA en la gesti\\xf3n inteligente del claustro y obtener mejores an\\xe1lisis.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-2 border-dashed rounded-lg p-6 bg-white text-center transition-all duration-300 relative \".concat(isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-400'),\n                            onDragOver: handleDragOver,\n                            onDragLeave: handleDragLeave,\n                            onDrop: handleDrop,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 mb-2\",\n                                    children: file ? \"Archivo listo para cargar: \".concat(file.name) : 'Arrastra tu conjunto de datos aquí'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-400\",\n                                    children: \"Formatos aceptados: CSV, Excel, JSON\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    onChange: handleFileInputChange,\n                                    className: \"hidden\",\n                                    id: \"file-upload\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"file-upload\",\n                                    className: \"mt-4 inline-block cursor-pointer py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-800\",\n                                    children: \"Seleccionar archivo\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined),\n                                isDragging && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-black bg-opacity-30 pointer-events-none rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/2 flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/images/analytics-3291738.jpg\",\n                        alt: \"Ilustraci\\xf3n de organizaci\\xf3n del claustro con IA\",\n                        width: 500,\n                        height: 400,\n                        className: \"rounded-lg shadow-lg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\School\\\\Trabajo de Diploma\\\\forecedu\\\\src\\\\components\\\\grid\\\\UploadSection.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UploadSection, \"wVRaHdOLzAsLM1vJBYYCk0ambAw=\");\n_c = UploadSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadSection);\nvar _c;\n$RefreshReg$(_c, \"UploadSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2dyaWQvVXBsb2FkU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHdDQUF3QztBQUNBO0FBQ1Q7QUFFL0IsTUFBTUcsZ0JBQWdCOztJQUNsQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFjO0lBRTlDLE1BQU1PLGlCQUFpQixDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkwsY0FBYztJQUNsQjtJQUVBLE1BQU1NLGtCQUFrQixDQUFDRjtRQUNyQkEsRUFBRUMsY0FBYztRQUNoQkwsY0FBYztJQUNsQjtJQUVBLE1BQU1PLGFBQWEsQ0FBQ0g7UUFDaEJBLEVBQUVDLGNBQWM7UUFDaEJMLGNBQWM7UUFDZCxJQUFJSSxFQUFFSSxZQUFZLENBQUNDLEtBQUssSUFBSUwsRUFBRUksWUFBWSxDQUFDQyxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQ2pELE1BQU1DLGNBQWNOLEVBQUVJLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7WUFDM0NQLFFBQVFRO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJGO1FBQ3JDO0lBQ0o7SUFFQSxNQUFNRyx3QkFBd0IsQ0FBQ1Q7UUFDM0IsSUFBSUEsRUFBRVUsTUFBTSxDQUFDTCxLQUFLLElBQUlMLEVBQUVVLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNyQyxNQUFNTSxlQUFlWCxFQUFFVSxNQUFNLENBQUNMLEtBQUssQ0FBQyxFQUFFO1lBQ3RDUCxRQUFRYTtZQUNSSixRQUFRQyxHQUFHLENBQUMseUJBQXlCRztRQUN6QztJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQ0dDLFdBQVU7a0JBRVYsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUVYLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFHRixXQUFVO3NDQUE0Qzs7Ozs7O3NDQUMxRCw4REFBQ0c7NEJBQUVILFdBQVU7c0NBQTZCOzs7Ozs7c0NBRzFDLDhEQUFDQzs0QkFDR0QsV0FBVyxtR0FBa0ssT0FBL0RsQixhQUFhLGdDQUFnQzs0QkFDM0pzQixZQUFZbEI7NEJBQ1ptQixhQUFhaEI7NEJBQ2JpQixRQUFRaEI7OzhDQUVSLDhEQUFDYTtvQ0FBRUgsV0FBVTs4Q0FBc0JoQixPQUFPLDhCQUF3QyxPQUFWQSxLQUFLdUIsSUFBSSxJQUFLOzs7Ozs7OENBQ3RGLDhEQUFDSjtvQ0FBRUgsV0FBVTs4Q0FBd0I7Ozs7Ozs4Q0FDckMsOERBQUNRO29DQUNHQyxNQUFLO29DQUNMQyxVQUFVZDtvQ0FDVkksV0FBVTtvQ0FDVlcsSUFBRzs7Ozs7OzhDQUVQLDhEQUFDQztvQ0FBTUMsU0FBUTtvQ0FBY2IsV0FBVTs4Q0FBaUc7Ozs7OztnQ0FHdklsQiw0QkFDRyw4REFBQ21CO29DQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTNCLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ3BCLGtEQUFLQTt3QkFDRmtDLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JqQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDO0dBL0VNbkI7S0FBQUE7QUFpRk4saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxTY2hvb2xcXFRyYWJham8gZGUgRGlwbG9tYVxcZm9yZWNlZHVcXHNyY1xcY29tcG9uZW50c1xcZ3JpZFxcVXBsb2FkU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG4vLyBzcmMvY29tcG9uZW50cy9ncmlkL1VwbG9hZFNlY3Rpb24udHN4XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgVXBsb2FkU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNEcmFnZ2luZyh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJvcCA9IChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSk7XHJcbiAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyLmZpbGVzICYmIGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICAgICAgICAgIHNldEZpbGUoZHJvcHBlZEZpbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXJjaGl2byByZWNpYmlkbzonLCBkcm9wcGVkRmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FyY2hpdm8gc2VsZWNjaW9uYWRvOicsIHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctWyNlNGU0ZTRdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIEl6cXVpZXJkYTogVMOtdHVsbywgdGV4dG8geSDDoXJlYSBkZSBjYXJnYSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IG1iLTggbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPk9yZ2FuaXphIHR1IGNsYXVzdHJvIGRlIGZvcm1hIGVmaWNpZW50ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZ2EgdHUgY29uanVudG8gZGUgZGF0b3MgcGFyYSBjb21lbnphciBhIGFwcm92ZWNoYXIgbGEgSUEgZW4gbGEgZ2VzdGnDs24gaW50ZWxpZ2VudGUgZGVsIGNsYXVzdHJvIHkgb2J0ZW5lciBtZWpvcmVzIGFuw6FsaXNpcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCByb3VuZGVkLWxnIHAtNiBiZy13aGl0ZSB0ZXh0LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcmVsYXRpdmUgJHtpc0RyYWdnaW5nID8gJ2JvcmRlci1ibHVlLTUwMCBiZy1ibHVlLTEwMCcgOiAnYm9yZGVyLWdyYXktNDAwJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e2hhbmRsZURyYWdMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0yXCI+e2ZpbGUgPyBgQXJjaGl2byBsaXN0byBwYXJhIGNhcmdhcjogJHtmaWxlLm5hbWV9YCA6ICdBcnJhc3RyYSB0dSBjb25qdW50byBkZSBkYXRvcyBhcXXDrSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDBcIj5Gb3JtYXRvcyBhY2VwdGFkb3M6IENTViwgRXhjZWwsIEpTT048L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUlucHV0Q2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzTmFtZT1cIm10LTQgaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyIHB5LTIgcHgtNCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmFyIGFyY2hpdm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRHJhZ2dpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMzAgcG9pbnRlci1ldmVudHMtbm9uZSByb3VuZGVkLWxnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRGVyZWNoYTogSW1hZ2VuICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvYW5hbHl0aWNzLTMyOTE3MzguanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWx1c3RyYWNpw7NuIGRlIG9yZ2FuaXphY2nDs24gZGVsIGNsYXVzdHJvIGNvbiBJQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlVwbG9hZFNlY3Rpb24iLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImZpbGUiLCJzZXRGaWxlIiwiaGFuZGxlRHJhZ092ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcm9wIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJkcm9wcGVkRmlsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGaWxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJzZWxlY3RlZEZpbGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJwIiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wIiwibmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaWQiLCJsYWJlbCIsImh0bWxGb3IiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/grid/UploadSection.tsx\n"));

/***/ })

});