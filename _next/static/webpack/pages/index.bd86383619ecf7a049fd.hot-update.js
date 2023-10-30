webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/jurado.jsx":
/*!***********************************!*\
  !*** ./src/components/jurado.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/components/jurado.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar sizes = {\n  platinum: \"200px\",\n  gold: \"175px\",\n  silver: \"150px\",\n  colaboradores: \"100px\"\n};\nvar bgColors = {\n  platinum: \"#313131\",\n  gold: \"#313131\",\n  silver: \"#313131\",\n  colaboradores: \"white\"\n};\n\nvar Jurado = function Jurado(_ref) {\n  var img = _ref.img,\n      level = _ref.level,\n      link = _ref.link,\n      descripcion = _ref.descripcion,\n      alt = _ref.alt,\n      bgColor = _ref.bgColor;\n  console.log(sizes[level]);\n  return (// <Link\n    //   href={link}\n    //   target=\"_blank\"\n    //   sx={{ ...styles.sponsor, width: sizes[level], height: sizes[level], backgroundColor: bgColor }}\n    // >\n    __jsx(Flex, {\n      sx: {\n        width: '40%',\n        textAlign: 'center'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      sx: _objectSpread(_objectSpread({}, styles.sponsor), {}, {\n        width: sizes[level],\n        height: sizes[level]\n      }) // sx={{ overflow: 'hidden', width: '100%', height: '100%' }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      src: img,\n      alt: alt,\n      sx: {\n        width: '100%',\n        height: '100%',\n        objectFit: 'contain',\n        transform: 'scale(0.8)'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      as: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, descripcion))) // </Link>\n\n  );\n};\n\n_c = Jurado;\nvar styles = {\n  sponsor: {\n    backgroundColor: \"white\",\n    // border: \"1px solid black\",\n    boxShadow: \"0 0 15px black\",\n    borderRadius: \"50%\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    padding: \"15px\",\n    margin: \"20px\",\n    transition: \"all 0.25s\",\n    \"&:hover\": {\n      transform: \"scale(1.1, 1.1)\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jurado);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jurado\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvanVyYWRvLmpzeD9jMjVmIl0sIm5hbWVzIjpbInNpemVzIiwicGxhdGludW0iLCJnb2xkIiwic2lsdmVyIiwiY29sYWJvcmFkb3JlcyIsImJnQ29sb3JzIiwiSnVyYWRvIiwiaW1nIiwibGV2ZWwiLCJsaW5rIiwiZGVzY3JpcGNpb24iLCJhbHQiLCJiZ0NvbG9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwidGV4dEFsaWduIiwic3R5bGVzIiwic3BvbnNvciIsImhlaWdodCIsIm9iamVjdEZpdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWFyZ2luIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNaQyxVQUFRLEVBQUUsT0FERTtBQUVaQyxNQUFJLEVBQUUsT0FGTTtBQUdaQyxRQUFNLEVBQUUsT0FISTtBQUlaQyxlQUFhLEVBQUU7QUFKSCxDQUFkO0FBT0EsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZKLFVBQVEsRUFBRSxTQURLO0FBRWZDLE1BQUksRUFBRSxTQUZTO0FBR2ZDLFFBQU0sRUFBRSxTQUhPO0FBSWZDLGVBQWEsRUFBRTtBQUpBLENBQWpCOztBQU9BLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFEO0FBQUEsTUFBbERDLEdBQWtELFFBQWxEQSxHQUFrRDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxHQUFtQixRQUFuQkEsR0FBbUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDbEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFLLENBQUNRLEtBQUQsQ0FBakI7QUFDQSxTQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFDLElBQUQ7QUFBTSxRQUFFLEVBQUU7QUFBRU8sYUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLGlCQUFTLEVBQUU7QUFBM0IsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0Q0FBRDtBQUNFLFFBQUUsa0NBQU9DLE1BQU0sQ0FBQ0MsT0FBZDtBQUF1QkgsYUFBSyxFQUFFZixLQUFLLENBQUNRLEtBQUQsQ0FBbkM7QUFBNENXLGNBQU0sRUFBRW5CLEtBQUssQ0FBQ1EsS0FBRDtBQUF6RCxRQURKLENBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRUQsR0FBWjtBQUFpQixTQUFHLEVBQUVJLEdBQXRCO0FBQTJCLFFBQUUsRUFBRTtBQUFFSSxhQUFLLEVBQUUsTUFBVDtBQUFpQkksY0FBTSxFQUFFLE1BQXpCO0FBQWlDQyxpQkFBUyxFQUFFLFNBQTVDO0FBQXVEQyxpQkFBUyxFQUFFO0FBQWxFLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURGLEVBT0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBY1gsV0FBZCxDQURGLENBUEYsQ0FORixDQWlCRTs7QUFqQkY7QUFtQkQsQ0FyQkQ7O0tBQU1KLE07QUF1Qk4sSUFBTVcsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNQSSxtQkFBZSxFQUFFLE9BRFY7QUFFUDtBQUNBQyxhQUFTLEVBQUUsZ0JBSEo7QUFJUEMsZ0JBQVksRUFBRSxLQUpQO0FBS1BDLFdBQU8sRUFBRSxNQUxGO0FBTVBDLGtCQUFjLEVBQUUsUUFOVDtBQU9QQyxjQUFVLEVBQUUsUUFQTDtBQVFQQyxXQUFPLEVBQUUsTUFSRjtBQVNQQyxVQUFNLEVBQUUsTUFURDtBQVVQQyxjQUFVLEVBQUUsV0FWTDtBQVdQLGVBQVc7QUFDVFQsZUFBUyxFQUFFO0FBREY7QUFYSjtBQURJLENBQWY7QUFrQmVmLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvanVyYWRvLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIExpbmsgfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHBsYXRpbnVtOiBcIjIwMHB4XCIsXG4gIGdvbGQ6IFwiMTc1cHhcIixcbiAgc2lsdmVyOiBcIjE1MHB4XCIsXG4gIGNvbGFib3JhZG9yZXM6IFwiMTAwcHhcIlxufTtcblxuY29uc3QgYmdDb2xvcnMgPSB7XG4gIHBsYXRpbnVtOiBcIiMzMTMxMzFcIixcbiAgZ29sZDogXCIjMzEzMTMxXCIsXG4gIHNpbHZlcjogXCIjMzEzMTMxXCIsXG4gIGNvbGFib3JhZG9yZXM6IFwid2hpdGVcIlxufTtcblxuY29uc3QgSnVyYWRvID0gKHsgaW1nLCBsZXZlbCwgbGluaywgZGVzY3JpcGNpb24sIGFsdCwgYmdDb2xvciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHNpemVzW2xldmVsXSk7XG4gIHJldHVybiAoXG4gICAgLy8gPExpbmtcbiAgICAvLyAgIGhyZWY9e2xpbmt9XG4gICAgLy8gICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgIC8vICAgc3g9e3sgLi4uc3R5bGVzLnNwb25zb3IsIHdpZHRoOiBzaXplc1tsZXZlbF0sIGhlaWdodDogc2l6ZXNbbGV2ZWxdLCBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfX1cbiAgICAvLyA+XG4gICAgPEZsZXggc3g9e3sgd2lkdGg6ICc0MCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPEJveFxuICAgICAgICBzeD17eyAuLi5zdHlsZXMuc3BvbnNvciwgd2lkdGg6IHNpemVzW2xldmVsXSwgaGVpZ2h0OiBzaXplc1tsZXZlbF0gfX1cbiAgICAgIC8vIHN4PXt7IG92ZXJmbG93OiAnaGlkZGVuJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgID5cbiAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9e2FsdH0gc3g9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvbnRhaW4nLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyB9fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBhcz1cInBcIj57ZGVzY3JpcGNpb259PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9GbGV4PlxuICAgIC8vIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3BvbnNvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIC8vIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICBib3hTaGFkb3c6IFwiMCAwIDE1cHggYmxhY2tcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICBtYXJnaW46IFwiMjBweFwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjEsIDEuMSlcIixcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSnVyYWRvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/jurado.jsx\n");

/***/ })

})