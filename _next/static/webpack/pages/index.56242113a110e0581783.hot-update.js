webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/jurado.jsx":
/*!***********************************!*\
  !*** ./src/components/jurado.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/components/jurado.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar sizes = {\n  platinum: \"200px\",\n  gold: \"175px\",\n  silver: \"150px\",\n  colaboradores: \"100px\"\n};\nvar bgColors = {\n  platinum: \"#313131\",\n  gold: \"#313131\",\n  silver: \"#313131\",\n  colaboradores: \"white\"\n};\n\nvar Jurado = function Jurado(_ref) {\n  var img = _ref.img,\n      level = _ref.level,\n      link = _ref.link,\n      descripcion = _ref.descripcion,\n      alt = _ref.alt,\n      bgColor = _ref.bgColor;\n  console.log(sizes[level]);\n  return (// <Link\n    //   href={link}\n    //   target=\"_blank\"\n    //   sx={{ ...styles.sponsor, width: sizes[level], height: sizes[level], backgroundColor: bgColor }}\n    // >\n    __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      sx: {\n        width: '40%',\n        textAlign: 'center',\n        justifyContent: 'center'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      sx: _objectSpread(_objectSpread({}, styles.sponsor), {}, {\n        width: sizes[level],\n        height: sizes[level]\n      }) // sx={{ overflow: 'hidden', width: '100%', height: '100%' }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      src: img,\n      alt: alt,\n      sx: {\n        width: '100%',\n        height: '100%',\n        objectFit: 'contain',\n        transform: 'scale(0.8)'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      as: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, descripcion))) // </Link>\n\n  );\n};\n\n_c = Jurado;\nvar styles = {\n  sponsor: {\n    backgroundColor: \"white\",\n    // border: \"1px solid black\",\n    boxShadow: \"0 0 15px black\",\n    borderRadius: \"50%\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    padding: \"15px\",\n    margin: \"20px\",\n    transition: \"all 0.25s\",\n    \"&:hover\": {\n      transform: \"scale(1.1, 1.1)\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jurado);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jurado\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvanVyYWRvLmpzeD9jMjVmIl0sIm5hbWVzIjpbInNpemVzIiwicGxhdGludW0iLCJnb2xkIiwic2lsdmVyIiwiY29sYWJvcmFkb3JlcyIsImJnQ29sb3JzIiwiSnVyYWRvIiwiaW1nIiwibGV2ZWwiLCJsaW5rIiwiZGVzY3JpcGNpb24iLCJhbHQiLCJiZ0NvbG9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwidGV4dEFsaWduIiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZXMiLCJzcG9uc29yIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWFyZ2luIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNaQyxVQUFRLEVBQUUsT0FERTtBQUVaQyxNQUFJLEVBQUUsT0FGTTtBQUdaQyxRQUFNLEVBQUUsT0FISTtBQUlaQyxlQUFhLEVBQUU7QUFKSCxDQUFkO0FBT0EsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZKLFVBQVEsRUFBRSxTQURLO0FBRWZDLE1BQUksRUFBRSxTQUZTO0FBR2ZDLFFBQU0sRUFBRSxTQUhPO0FBSWZDLGVBQWEsRUFBRTtBQUpBLENBQWpCOztBQU9BLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFEO0FBQUEsTUFBbERDLEdBQWtELFFBQWxEQSxHQUFrRDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxHQUFtQixRQUFuQkEsR0FBbUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDbEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFLLENBQUNRLEtBQUQsQ0FBakI7QUFDQSxTQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFDLDZDQUFEO0FBQU0sUUFBRSxFQUFFO0FBQUVPLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxpQkFBUyxFQUFFLFFBQTNCO0FBQXFDQyxzQkFBYyxFQUFFO0FBQXJELE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNENBQUQ7QUFDRSxRQUFFLGtDQUFPQyxNQUFNLENBQUNDLE9BQWQ7QUFBdUJKLGFBQUssRUFBRWYsS0FBSyxDQUFDUSxLQUFELENBQW5DO0FBQTRDWSxjQUFNLEVBQUVwQixLQUFLLENBQUNRLEtBQUQ7QUFBekQsUUFESixDQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLE1BQUMsOENBQUQ7QUFBTyxTQUFHLEVBQUVELEdBQVo7QUFBaUIsU0FBRyxFQUFFSSxHQUF0QjtBQUEyQixRQUFFLEVBQUU7QUFBRUksYUFBSyxFQUFFLE1BQVQ7QUFBaUJLLGNBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsaUJBQVMsRUFBRSxTQUE1QztBQUF1REMsaUJBQVMsRUFBRTtBQUFsRSxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FERixFQU9FLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNkNBQUQ7QUFBTSxRQUFFLEVBQUMsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNaLFdBQWQsQ0FERixDQVBGLENBTkYsQ0FpQkU7O0FBakJGO0FBbUJELENBckJEOztLQUFNSixNO0FBdUJOLElBQU1ZLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUU7QUFDUEksbUJBQWUsRUFBRSxPQURWO0FBRVA7QUFDQUMsYUFBUyxFQUFFLGdCQUhKO0FBSVBDLGdCQUFZLEVBQUUsS0FKUDtBQUtQQyxXQUFPLEVBQUUsTUFMRjtBQU1QVCxrQkFBYyxFQUFFLFFBTlQ7QUFPUFUsY0FBVSxFQUFFLFFBUEw7QUFRUEMsV0FBTyxFQUFFLE1BUkY7QUFTUEMsVUFBTSxFQUFFLE1BVEQ7QUFVUEMsY0FBVSxFQUFFLFdBVkw7QUFXUCxlQUFXO0FBQ1RSLGVBQVMsRUFBRTtBQURGO0FBWEo7QUFESSxDQUFmO0FBa0JlaEIscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qdXJhZG8uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCwgTGluaywgRmxleCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG5jb25zdCBzaXplcyA9IHtcbiAgcGxhdGludW06IFwiMjAwcHhcIixcbiAgZ29sZDogXCIxNzVweFwiLFxuICBzaWx2ZXI6IFwiMTUwcHhcIixcbiAgY29sYWJvcmFkb3JlczogXCIxMDBweFwiXG59O1xuXG5jb25zdCBiZ0NvbG9ycyA9IHtcbiAgcGxhdGludW06IFwiIzMxMzEzMVwiLFxuICBnb2xkOiBcIiMzMTMxMzFcIixcbiAgc2lsdmVyOiBcIiMzMTMxMzFcIixcbiAgY29sYWJvcmFkb3JlczogXCJ3aGl0ZVwiXG59O1xuXG5jb25zdCBKdXJhZG8gPSAoeyBpbWcsIGxldmVsLCBsaW5rLCBkZXNjcmlwY2lvbiwgYWx0LCBiZ0NvbG9yIH0pID0+IHtcbiAgY29uc29sZS5sb2coc2l6ZXNbbGV2ZWxdKTtcbiAgcmV0dXJuIChcbiAgICAvLyA8TGlua1xuICAgIC8vICAgaHJlZj17bGlua31cbiAgICAvLyAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgLy8gICBzeD17eyAuLi5zdHlsZXMuc3BvbnNvciwgd2lkdGg6IHNpemVzW2xldmVsXSwgaGVpZ2h0OiBzaXplc1tsZXZlbF0sIGJhY2tncm91bmRDb2xvcjogYmdDb2xvciB9fVxuICAgIC8vID5cbiAgICA8RmxleCBzeD17eyB3aWR0aDogJzQwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3sgLi4uc3R5bGVzLnNwb25zb3IsIHdpZHRoOiBzaXplc1tsZXZlbF0sIGhlaWdodDogc2l6ZXNbbGV2ZWxdIH19XG4gICAgICAvLyBzeD17eyBvdmVyZmxvdzogJ2hpZGRlbicsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PXthbHR9IHN4PXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb250YWluJywgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScgfX0gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveD5cbiAgICAgICAgPFRleHQgYXM9XCJwXCI+e2Rlc2NyaXBjaW9ufTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvRmxleD5cbiAgICAvLyA8L0xpbms+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNwb25zb3I6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAvLyBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgYm94U2hhZG93OiBcIjAgMCAxNXB4IGJsYWNrXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgbWFyZ2luOiBcIjIwcHhcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4xLCAxLjEpXCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEp1cmFkbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/jurado.jsx\n");

/***/ })

})