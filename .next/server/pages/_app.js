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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/apolloClient.ts":
/*!*****************************!*\
  !*** ./lib/apolloClient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: '/api/graphql',\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9hcG9sbG9DbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBRXRELE1BQU1FLFNBQVMsSUFBSUYsd0RBQVlBLENBQUM7SUFDckNHLEtBQUs7SUFDTEMsT0FBTyxJQUFJSCx5REFBYUE7QUFDMUIsR0FBRyIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RzXFxpbnZlbnRvcnktc3lzdGVtXFxsaWJcXGFwb2xsb0NsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgdXJpOiAnL2FwaS9ncmFwaHFsJywgLy8gdGhpcyBwb2ludHMgdG8geW91ciBBUEkgcm91dGVcclxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/apolloClient.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"(pages-dir-node)/./store/index.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apolloClient */ \"(pages-dir-node)/./lib/apolloClient.ts\");\n\n\n\n\n\n // <-- we'll define this\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n            session: pageProps.session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                store: _store__WEBPACK_IMPORTED_MODULE_3__.store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\inventory-system\\\\pages\\\\_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\inventory-system\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\projects\\\\inventory-system\\\\pages\\\\_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\inventory-system\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNnRDtBQUNUO0FBQ047QUFDaUI7QUFDTCxDQUFDLHdCQUF3QjtBQUV2RCxTQUFTSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFZO0lBQ3ZGLHFCQUNFLDhEQUFDUCwwREFBY0E7UUFBQ0ksUUFBUUEscURBQU1BO2tCQUM1Qiw0RUFBQ0QsNERBQWVBO1lBQUNLLFNBQVNELFVBQVVDLE9BQU87c0JBQ3pDLDRFQUFDUCxpREFBUUE7Z0JBQUNDLE9BQU9BLHlDQUFLQTswQkFDcEIsNEVBQUNJO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RzXFxpbnZlbnRvcnktc3lzdGVtXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vbGliL2Fwb2xsb0NsaWVudCc7IC8vIDwtLSB3ZSdsbCBkZWZpbmUgdGhpc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwiUHJvdmlkZXIiLCJzdG9yZSIsIlNlc3Npb25Qcm92aWRlciIsImNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_instrumentSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/instrumentSlice */ \"(pages-dir-node)/./store/slices/instrumentSlice.ts\");\n/* harmony import */ var _slices_assigmentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/assigmentSlice */ \"(pages-dir-node)/./store/slices/assigmentSlice.ts\");\n/* harmony import */ var _slices_itemSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/itemSlice */ \"(pages-dir-node)/./store/slices/itemSlice.ts\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        instruments: _slices_instrumentSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        assignments: _slices_assigmentSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        items: _slices_itemSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNPO0FBQ0Q7QUFDWDtBQUV0QyxNQUFNSSxRQUFRSixnRUFBY0EsQ0FBQztJQUNsQ0ssU0FBUztRQUNQQyxhQUFhTCwrREFBaUJBO1FBQzlCTSxhQUFhTCw4REFBaUJBO1FBQzlCTSxPQUFPTCx5REFBV0E7SUFDcEI7QUFDRixHQUFHIiwic291cmNlcyI6WyJDOlxccHJvamVjdHNcXGludmVudG9yeS1zeXN0ZW1cXHN0b3JlXFxpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgaW5zdHJ1bWVudFJlZHVjZXIgZnJvbSAnLi9zbGljZXMvaW5zdHJ1bWVudFNsaWNlJztcclxuaW1wb3J0IGFzc2lnbm1lbnRSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2Fzc2lnbWVudFNsaWNlJztcclxuaW1wb3J0IGl0ZW1SZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2l0ZW1TbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgaW5zdHJ1bWVudHM6IGluc3RydW1lbnRSZWR1Y2VyLFxyXG4gICAgYXNzaWdubWVudHM6IGFzc2lnbm1lbnRSZWR1Y2VyLFxyXG4gICAgaXRlbXM6IGl0ZW1SZWR1Y2VyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiaW5zdHJ1bWVudFJlZHVjZXIiLCJhc3NpZ25tZW50UmVkdWNlciIsIml0ZW1SZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiaW5zdHJ1bWVudHMiLCJhc3NpZ25tZW50cyIsIml0ZW1zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store/index.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./store/slices/assigmentSlice.ts":
/*!****************************************!*\
  !*** ./store/slices/assigmentSlice.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAssignment: () => (/* binding */ addAssignment),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setAssignments: () => (/* binding */ setAssignments)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst assignmentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'assignments',\n    initialState,\n    reducers: {\n        setAssignments (state, action) {\n            state.items = action.payload;\n        },\n        addAssignment (state, action) {\n            state.items.push(action.payload);\n        }\n    }\n});\nconst { setAssignments, addAssignment } = assignmentSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignmentSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlL3NsaWNlcy9hc3NpZ21lbnRTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4RDtBQWU5RCxNQUFNQyxlQUFnQztJQUNwQ0MsT0FBTyxFQUFFO0FBQ1g7QUFFQSxNQUFNQyxrQkFBa0JILDZEQUFXQSxDQUFDO0lBQ2xDSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsZ0JBQWVDLEtBQUssRUFBRUMsTUFBbUM7WUFDdkRELE1BQU1MLEtBQUssR0FBR00sT0FBT0MsT0FBTztRQUM5QjtRQUNBQyxlQUFjSCxLQUFLLEVBQUVDLE1BQWlDO1lBQ3BERCxNQUFNTCxLQUFLLENBQUNTLElBQUksQ0FBQ0gsT0FBT0MsT0FBTztRQUNqQztJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQUVILGNBQWMsRUFBRUksYUFBYSxFQUFFLEdBQUdQLGdCQUFnQlMsT0FBTyxDQUFDO0FBQ3pFLGlFQUFlVCxnQkFBZ0JVLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RzXFxpbnZlbnRvcnktc3lzdGVtXFxzdG9yZVxcc2xpY2VzXFxhc3NpZ21lbnRTbGljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW50ZXJmYWNlIEFzc2lnbm1lbnQge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgaW5zdHJ1bWVudElkOiBudW1iZXI7XHJcbiAgc3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgZW5kRGF0ZTogc3RyaW5nO1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXNzaWdubWVudFN0YXRlIHtcclxuICBpdGVtczogQXNzaWdubWVudFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEFzc2lnbm1lbnRTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCBhc3NpZ25tZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2Fzc2lnbm1lbnRzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEFzc2lnbm1lbnRzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXNzaWdubWVudFtdPikge1xyXG4gICAgICBzdGF0ZS5pdGVtcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGFkZEFzc2lnbm1lbnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBc3NpZ25tZW50Pikge1xyXG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRBc3NpZ25tZW50cywgYWRkQXNzaWdubWVudCB9ID0gYXNzaWdubWVudFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGFzc2lnbm1lbnRTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImFzc2lnbm1lbnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEFzc2lnbm1lbnRzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkQXNzaWdubWVudCIsInB1c2giLCJhY3Rpb25zIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store/slices/assigmentSlice.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./store/slices/instrumentSlice.ts":
/*!*****************************************!*\
  !*** ./store/slices/instrumentSlice.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addInstrument: () => (/* binding */ addInstrument),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setInstruments: () => (/* binding */ setInstruments)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst instrumentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'instruments',\n    initialState,\n    reducers: {\n        setInstruments (state, action) {\n            state.items = action.payload;\n        },\n        addInstrument (state, action) {\n            state.items.push(action.payload);\n        }\n    }\n});\nconst { setInstruments, addInstrument } = instrumentSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instrumentSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlL3NsaWNlcy9pbnN0cnVtZW50U2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEQ7QUFlOUQsTUFBTUMsZUFBZ0M7SUFDcENDLE9BQU8sRUFBRTtBQUNYO0FBRUEsTUFBTUMsa0JBQWtCSCw2REFBV0EsQ0FBQztJQUNsQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLGdCQUFlQyxLQUFLLEVBQUVDLE1BQW1DO1lBQ3ZERCxNQUFNTCxLQUFLLEdBQUdNLE9BQU9DLE9BQU87UUFDOUI7UUFDQUMsZUFBY0gsS0FBSyxFQUFFQyxNQUFpQztZQUNwREQsTUFBTUwsS0FBSyxDQUFDUyxJQUFJLENBQUNILE9BQU9DLE9BQU87UUFDakM7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSCxjQUFjLEVBQUVJLGFBQWEsRUFBRSxHQUFHUCxnQkFBZ0JTLE9BQU8sQ0FBQztBQUN6RSxpRUFBZVQsZ0JBQWdCVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcaW52ZW50b3J5LXN5c3RlbVxcc3RvcmVcXHNsaWNlc1xcaW5zdHJ1bWVudFNsaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbnRlcmZhY2UgSW5zdHJ1bWVudCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgcGxhY2VtZW50czogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSW5zdHJ1bWVudFN0YXRlIHtcclxuICBpdGVtczogSW5zdHJ1bWVudFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluc3RydW1lbnRTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCBpbnN0cnVtZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2luc3RydW1lbnRzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEluc3RydW1lbnRzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SW5zdHJ1bWVudFtdPikge1xyXG4gICAgICBzdGF0ZS5pdGVtcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGFkZEluc3RydW1lbnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJbnN0cnVtZW50Pikge1xyXG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRJbnN0cnVtZW50cywgYWRkSW5zdHJ1bWVudCB9ID0gaW5zdHJ1bWVudFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGluc3RydW1lbnRTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImluc3RydW1lbnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEluc3RydW1lbnRzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkSW5zdHJ1bWVudCIsInB1c2giLCJhY3Rpb25zIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store/slices/instrumentSlice.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./store/slices/itemSlice.ts":
/*!***********************************!*\
  !*** ./store/slices/itemSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: () => (/* binding */ addItem),\n/* harmony export */   addItems: () => (/* binding */ addItems),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   removeItem: () => (/* binding */ removeItem),\n/* harmony export */   selectAllItems: () => (/* binding */ selectAllItems),\n/* harmony export */   selectItemById: () => (/* binding */ selectItemById),\n/* harmony export */   selectItemIds: () => (/* binding */ selectItemIds),\n/* harmony export */   setItems: () => (/* binding */ setItems),\n/* harmony export */   updateItem: () => (/* binding */ updateItem)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst itemAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)();\nconst initialState = itemAdapter.getInitialState();\nconst itemSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'items',\n    initialState,\n    reducers: {\n        setItems: itemAdapter.setAll,\n        addItem: itemAdapter.addOne,\n        addItems: itemAdapter.addMany,\n        updateItem: itemAdapter.updateOne,\n        removeItem: itemAdapter.removeOne // Remove by id\n    }\n});\nconst { setItems, addItem, addItems, updateItem, removeItem } = itemSlice.actions;\nconst { selectAll: selectAllItems, selectById: selectItemById, selectIds: selectItemIds } = itemAdapter.getSelectors((state)=>state.items);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlL3NsaWNlcy9pdGVtU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0U7QUFXcEUsTUFBTUUsY0FBY0QscUVBQW1CQTtBQUV2QyxNQUFNRSxlQUFlRCxZQUFZRSxlQUFlO0FBR2hELE1BQU1DLFlBQVlMLDZEQUFXQSxDQUFDO0lBQzVCTSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsVUFBVU4sWUFBWU8sTUFBTTtRQUM1QkMsU0FBU1IsWUFBWVMsTUFBTTtRQUMzQkMsVUFBVVYsWUFBWVcsT0FBTztRQUM3QkMsWUFBWVosWUFBWWEsU0FBUztRQUNqQ0MsWUFBWWQsWUFBWWUsU0FBUyxDQUFNLGVBQWU7SUFDeEQ7QUFDRjtBQUVPLE1BQU0sRUFBRVQsUUFBUSxFQUFFRSxPQUFPLEVBQUVFLFFBQVEsRUFBRUUsVUFBVSxFQUFFRSxVQUFVLEVBQUUsR0FBR1gsVUFBVWEsT0FBTyxDQUFDO0FBQ2xGLE1BQU0sRUFDWEMsV0FBV0MsY0FBYyxFQUN6QkMsWUFBWUMsY0FBYyxFQUMxQkMsV0FBV0MsYUFBYSxFQUN6QixHQUFHdEIsWUFBWXVCLFlBQVksQ0FBQyxDQUFDQyxRQUFxQkEsTUFBTUMsS0FBSyxFQUFFO0FBRWhFLGlFQUFldEIsVUFBVXVCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RzXFxpbnZlbnRvcnktc3lzdGVtXFxzdG9yZVxcc2xpY2VzXFxpdGVtU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUVudGl0eUFkYXB0ZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vaW5kZXgnOyAvLyBhZGp1c3QgcGF0aCBhcyBuZWVkZWRcclxuXHJcblxyXG5pbnRlcmZhY2UgSXRlbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxuICBzaGlwbWVudElkOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1BZGFwdGVyID0gY3JlYXRlRW50aXR5QWRhcHRlcjxJdGVtPigpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gaXRlbUFkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKCk7XHJcblxyXG5cclxuY29uc3QgaXRlbVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdpdGVtcycsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRJdGVtczogaXRlbUFkYXB0ZXIuc2V0QWxsLCAgICAgICAgICAvLyBSZXBsYWNlIGFsbCBpdGVtc1xyXG4gICAgYWRkSXRlbTogaXRlbUFkYXB0ZXIuYWRkT25lLCAgICAgICAgICAgLy8gQWRkIG9uZSBpdGVtXHJcbiAgICBhZGRJdGVtczogaXRlbUFkYXB0ZXIuYWRkTWFueSwgICAgICAgICAvLyBBZGQgbXVsdGlwbGUgaXRlbXNcclxuICAgIHVwZGF0ZUl0ZW06IGl0ZW1BZGFwdGVyLnVwZGF0ZU9uZSwgICAgIC8vIFVwZGF0ZSBpdGVtIGJ5IGlkXHJcbiAgICByZW1vdmVJdGVtOiBpdGVtQWRhcHRlci5yZW1vdmVPbmUgICAgICAvLyBSZW1vdmUgYnkgaWRcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEl0ZW1zLCBhZGRJdGVtLCBhZGRJdGVtcywgdXBkYXRlSXRlbSwgcmVtb3ZlSXRlbSB9ID0gaXRlbVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgc2VsZWN0QWxsOiBzZWxlY3RBbGxJdGVtcyxcclxuICBzZWxlY3RCeUlkOiBzZWxlY3RJdGVtQnlJZCxcclxuICBzZWxlY3RJZHM6IHNlbGVjdEl0ZW1JZHMsXHJcbn0gPSBpdGVtQWRhcHRlci5nZXRTZWxlY3RvcnMoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLml0ZW1zKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGl0ZW1TbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVFbnRpdHlBZGFwdGVyIiwiaXRlbUFkYXB0ZXIiLCJpbml0aWFsU3RhdGUiLCJnZXRJbml0aWFsU3RhdGUiLCJpdGVtU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRJdGVtcyIsInNldEFsbCIsImFkZEl0ZW0iLCJhZGRPbmUiLCJhZGRJdGVtcyIsImFkZE1hbnkiLCJ1cGRhdGVJdGVtIiwidXBkYXRlT25lIiwicmVtb3ZlSXRlbSIsInJlbW92ZU9uZSIsImFjdGlvbnMiLCJzZWxlY3RBbGwiLCJzZWxlY3RBbGxJdGVtcyIsInNlbGVjdEJ5SWQiLCJzZWxlY3RJdGVtQnlJZCIsInNlbGVjdElkcyIsInNlbGVjdEl0ZW1JZHMiLCJnZXRTZWxlY3RvcnMiLCJzdGF0ZSIsIml0ZW1zIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store/slices/itemSlice.ts\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();