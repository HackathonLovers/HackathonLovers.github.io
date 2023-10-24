webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/jurado.jsx":
/*!***********************************!*\
  !*** ./src/components/jurado.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/components/jurado.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar sizes = {\n  platinum: \"200px\",\n  gold: \"175px\",\n  silver: \"150px\",\n  colaboradores: \"100px\"\n};\nvar bgColors = {\n  platinum: \"#313131\",\n  gold: \"#313131\",\n  silver: \"#313131\",\n  colaboradores: \"white\"\n};\n\nvar Jurado = function Jurado(_ref) {\n  var img = _ref.img,\n      level = _ref.level,\n      link = _ref.link,\n      descripcion = _ref.descripcion,\n      alt = _ref.alt,\n      bgColor = _ref.bgColor;\n  console.log(sizes[level]);\n  return (// <Link\n    //   href={link}\n    //   target=\"_blank\"\n    //   sx={{ ...styles.sponsor, width: sizes[level], height: sizes[level], backgroundColor: bgColor }}\n    // >\n    __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      sx: {\n        width: '40%',\n        textAlign: 'center',\n        justifyContent: 'center',\n        flexDirection: 'column'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      sx: _objectSpread({}, styles.sponsor) // sx={{ overflow: 'hidden', width: '100%', height: '100%' }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      src: img,\n      alt: alt,\n      sx: {\n        width: '100%',\n        height: '100%',\n        objectFit: 'contain',\n        transform: 'scale(0.8)'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      as: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, descripcion))) // </Link>\n\n  );\n};\n\n_c = Jurado;\nvar styles = {\n  sponsor: {\n    backgroundColor: \"white\",\n    // border: \"1px solid black\",\n    boxShadow: \"0 0 15px black\",\n    borderRadius: \"50%\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    padding: \"15px\",\n    margin: \"20px\",\n    transition: \"all 0.25s\",\n    \"&:hover\": {\n      transform: \"scale(1.1, 1.1)\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jurado);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jurado\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvanVyYWRvLmpzeD9jMjVmIl0sIm5hbWVzIjpbInNpemVzIiwicGxhdGludW0iLCJnb2xkIiwic2lsdmVyIiwiY29sYWJvcmFkb3JlcyIsImJnQ29sb3JzIiwiSnVyYWRvIiwiaW1nIiwibGV2ZWwiLCJsaW5rIiwiZGVzY3JpcGNpb24iLCJhbHQiLCJiZ0NvbG9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwidGV4dEFsaWduIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwic3R5bGVzIiwic3BvbnNvciIsImhlaWdodCIsIm9iamVjdEZpdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsIm1hcmdpbiIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsVUFBUSxFQUFFLE9BREU7QUFFWkMsTUFBSSxFQUFFLE9BRk07QUFHWkMsUUFBTSxFQUFFLE9BSEk7QUFJWkMsZUFBYSxFQUFFO0FBSkgsQ0FBZDtBQU9BLElBQU1DLFFBQVEsR0FBRztBQUNmSixVQUFRLEVBQUUsU0FESztBQUVmQyxNQUFJLEVBQUUsU0FGUztBQUdmQyxRQUFNLEVBQUUsU0FITztBQUlmQyxlQUFhLEVBQUU7QUFKQSxDQUFqQjs7QUFPQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxRDtBQUFBLE1BQWxEQyxHQUFrRCxRQUFsREEsR0FBa0Q7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsR0FBbUIsUUFBbkJBLEdBQW1CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBSyxDQUFDUSxLQUFELENBQWpCO0FBQ0EsU0FDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBRTtBQUFFTyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsaUJBQVMsRUFBRSxRQUEzQjtBQUFxQ0Msc0JBQWMsRUFBRSxRQUFyRDtBQUErREMscUJBQWEsRUFBRTtBQUE5RSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDRDQUFEO0FBQ0UsUUFBRSxvQkFBT0MsTUFBTSxDQUFDQyxPQUFkLENBREosQ0FFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRSxNQUFDLDhDQUFEO0FBQU8sU0FBRyxFQUFFYixHQUFaO0FBQWlCLFNBQUcsRUFBRUksR0FBdEI7QUFBMkIsUUFBRSxFQUFFO0FBQUVJLGFBQUssRUFBRSxNQUFUO0FBQWlCTSxjQUFNLEVBQUUsTUFBekI7QUFBaUNDLGlCQUFTLEVBQUUsU0FBNUM7QUFBdURDLGlCQUFTLEVBQUU7QUFBbEUsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBREYsRUFPRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZDQUFEO0FBQU0sUUFBRSxFQUFDLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjYixXQUFkLENBREYsQ0FQRixDQU5GLENBaUJFOztBQWpCRjtBQW1CRCxDQXJCRDs7S0FBTUosTTtBQXVCTixJQUFNYSxNQUFNLEdBQUc7QUFDYkMsU0FBTyxFQUFFO0FBQ1BJLG1CQUFlLEVBQUUsT0FEVjtBQUVQO0FBQ0FDLGFBQVMsRUFBRSxnQkFISjtBQUlQQyxnQkFBWSxFQUFFLEtBSlA7QUFLUEMsV0FBTyxFQUFFLE1BTEY7QUFNUFYsa0JBQWMsRUFBRSxRQU5UO0FBT1BXLGNBQVUsRUFBRSxRQVBMO0FBUVBDLFdBQU8sRUFBRSxNQVJGO0FBU1BDLFVBQU0sRUFBRSxNQVREO0FBVVBDLGNBQVUsRUFBRSxXQVZMO0FBV1AsZUFBVztBQUNUUixlQUFTLEVBQUU7QUFERjtBQVhKO0FBREksQ0FBZjtBQWtCZWpCLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvanVyYWRvLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIExpbmssIEZsZXggfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHBsYXRpbnVtOiBcIjIwMHB4XCIsXG4gIGdvbGQ6IFwiMTc1cHhcIixcbiAgc2lsdmVyOiBcIjE1MHB4XCIsXG4gIGNvbGFib3JhZG9yZXM6IFwiMTAwcHhcIlxufTtcblxuY29uc3QgYmdDb2xvcnMgPSB7XG4gIHBsYXRpbnVtOiBcIiMzMTMxMzFcIixcbiAgZ29sZDogXCIjMzEzMTMxXCIsXG4gIHNpbHZlcjogXCIjMzEzMTMxXCIsXG4gIGNvbGFib3JhZG9yZXM6IFwid2hpdGVcIlxufTtcblxuY29uc3QgSnVyYWRvID0gKHsgaW1nLCBsZXZlbCwgbGluaywgZGVzY3JpcGNpb24sIGFsdCwgYmdDb2xvciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHNpemVzW2xldmVsXSk7XG4gIHJldHVybiAoXG4gICAgLy8gPExpbmtcbiAgICAvLyAgIGhyZWY9e2xpbmt9XG4gICAgLy8gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgIC8vICAgc3g9e3sgLi4uc3R5bGVzLnNwb25zb3IsIHdpZHRoOiBzaXplc1tsZXZlbF0sIGhlaWdodDogc2l6ZXNbbGV2ZWxdLCBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfX1cbiAgICAvLyA+XG4gICAgPEZsZXggc3g9e3sgd2lkdGg6ICc0MCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgPEJveFxuICAgICAgICBzeD17eyAuLi5zdHlsZXMuc3BvbnNvciB9fVxuICAgICAgLy8gc3g9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWd9IGFsdD17YWx0fSBzeD17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY29udGFpbicsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknIH19IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxUZXh0IGFzPVwicFwiPntkZXNjcmlwY2lvbn08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0ZsZXg+XG4gICAgLy8gPC9MaW5rPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzcG9uc29yOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgLy8gYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgIGJveFNoYWRvdzogXCIwIDAgMTVweCBibGFja1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgIG1hcmdpbjogXCIyMHB4XCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMSwgMS4xKVwiLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBKdXJhZG87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/jurado.jsx\n");

/***/ })

})