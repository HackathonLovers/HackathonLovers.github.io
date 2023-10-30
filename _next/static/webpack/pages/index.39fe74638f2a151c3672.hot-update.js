webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/jurado.jsx":
/*!***********************************!*\
  !*** ./src/components/jurado.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/components/jurado.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar sizes = {\n  platinum: \"200px\",\n  gold: \"175px\",\n  silver: \"150px\",\n  colaboradores: \"100px\"\n};\nvar bgColors = {\n  platinum: \"#313131\",\n  gold: \"#313131\",\n  silver: \"#313131\",\n  colaboradores: \"white\"\n};\n\nvar Jurado = function Jurado(_ref) {\n  var img = _ref.img,\n      level = _ref.level,\n      link = _ref.link,\n      descripcion = _ref.descripcion,\n      alt = _ref.alt,\n      bgColor = _ref.bgColor;\n  console.log(sizes[level]);\n  return (// <Link\n    //   href={link}\n    //   target=\"_blank\"\n    //   sx={{ ...styles.sponsor, width: sizes[level], height: sizes[level], backgroundColor: bgColor }}\n    // >\n    __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      sx: {\n        width: '40%',\n        textAlign: 'center',\n        justifyContent: 'center',\n        flexDirection: 'column'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      sx: _objectSpread(_objectSpread({}, styles.sponsor), {}, {\n        width: '300px',\n        height: '300px'\n      }) // sx={{ overflow: 'hidden', width: '100%', height: '100%' }}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      src: img,\n      alt: alt,\n      sx: {\n        width: '100%',\n        height: '100%',\n        objectFit: 'contain',\n        transform: 'scale(0.8)'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      as: \"p\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, descripcion))) // </Link>\n\n  );\n};\n\n_c = Jurado;\nvar styles = {\n  sponsor: {\n    backgroundColor: \"white\",\n    // border: \"1px solid black\",\n    boxShadow: \"0 0 15px black\",\n    borderRadius: \"50%\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    padding: \"15px\",\n    margin: \"20px\",\n    transition: \"all 0.25s\",\n    \"&:hover\": {\n      transform: \"scale(1.1, 1.1)\"\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jurado);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jurado\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvanVyYWRvLmpzeD9jMjVmIl0sIm5hbWVzIjpbInNpemVzIiwicGxhdGludW0iLCJnb2xkIiwic2lsdmVyIiwiY29sYWJvcmFkb3JlcyIsImJnQ29sb3JzIiwiSnVyYWRvIiwiaW1nIiwibGV2ZWwiLCJsaW5rIiwiZGVzY3JpcGNpb24iLCJhbHQiLCJiZ0NvbG9yIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwidGV4dEFsaWduIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwic3R5bGVzIiwic3BvbnNvciIsImhlaWdodCIsIm9iamVjdEZpdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsIm1hcmdpbiIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsVUFBUSxFQUFFLE9BREU7QUFFWkMsTUFBSSxFQUFFLE9BRk07QUFHWkMsUUFBTSxFQUFFLE9BSEk7QUFJWkMsZUFBYSxFQUFFO0FBSkgsQ0FBZDtBQU9BLElBQU1DLFFBQVEsR0FBRztBQUNmSixVQUFRLEVBQUUsU0FESztBQUVmQyxNQUFJLEVBQUUsU0FGUztBQUdmQyxRQUFNLEVBQUUsU0FITztBQUlmQyxlQUFhLEVBQUU7QUFKQSxDQUFqQjs7QUFPQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxRDtBQUFBLE1BQWxEQyxHQUFrRCxRQUFsREEsR0FBa0Q7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsR0FBbUIsUUFBbkJBLEdBQW1CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBSyxDQUFDUSxLQUFELENBQWpCO0FBQ0EsU0FDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBRTtBQUFFTyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsaUJBQVMsRUFBRSxRQUEzQjtBQUFxQ0Msc0JBQWMsRUFBRSxRQUFyRDtBQUErREMscUJBQWEsRUFBRTtBQUE5RSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDRDQUFEO0FBQ0UsUUFBRSxrQ0FBT0MsTUFBTSxDQUFDQyxPQUFkO0FBQXVCTCxhQUFLLEVBQUUsT0FBOUI7QUFBdUNNLGNBQU0sRUFBRTtBQUEvQyxRQURKLENBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRWQsR0FBWjtBQUFpQixTQUFHLEVBQUVJLEdBQXRCO0FBQTJCLFFBQUUsRUFBRTtBQUFFSSxhQUFLLEVBQUUsTUFBVDtBQUFpQk0sY0FBTSxFQUFFLE1BQXpCO0FBQWlDQyxpQkFBUyxFQUFFLFNBQTVDO0FBQXVEQyxpQkFBUyxFQUFFO0FBQWxFLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURGLEVBT0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBY2IsV0FBZCxDQURGLENBUEYsQ0FORixDQWlCRTs7QUFqQkY7QUFtQkQsQ0FyQkQ7O0tBQU1KLE07QUF1Qk4sSUFBTWEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNQSSxtQkFBZSxFQUFFLE9BRFY7QUFFUDtBQUNBQyxhQUFTLEVBQUUsZ0JBSEo7QUFJUEMsZ0JBQVksRUFBRSxLQUpQO0FBS1BDLFdBQU8sRUFBRSxNQUxGO0FBTVBWLGtCQUFjLEVBQUUsUUFOVDtBQU9QVyxjQUFVLEVBQUUsUUFQTDtBQVFQQyxXQUFPLEVBQUUsTUFSRjtBQVNQQyxVQUFNLEVBQUUsTUFURDtBQVVQQyxjQUFVLEVBQUUsV0FWTDtBQVdQLGVBQVc7QUFDVFIsZUFBUyxFQUFFO0FBREY7QUFYSjtBQURJLENBQWY7QUFrQmVqQixxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2p1cmFkby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlLCBUZXh0LCBMaW5rLCBGbGV4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmNvbnN0IHNpemVzID0ge1xuICBwbGF0aW51bTogXCIyMDBweFwiLFxuICBnb2xkOiBcIjE3NXB4XCIsXG4gIHNpbHZlcjogXCIxNTBweFwiLFxuICBjb2xhYm9yYWRvcmVzOiBcIjEwMHB4XCJcbn07XG5cbmNvbnN0IGJnQ29sb3JzID0ge1xuICBwbGF0aW51bTogXCIjMzEzMTMxXCIsXG4gIGdvbGQ6IFwiIzMxMzEzMVwiLFxuICBzaWx2ZXI6IFwiIzMxMzEzMVwiLFxuICBjb2xhYm9yYWRvcmVzOiBcIndoaXRlXCJcbn07XG5cbmNvbnN0IEp1cmFkbyA9ICh7IGltZywgbGV2ZWwsIGxpbmssIGRlc2NyaXBjaW9uLCBhbHQsIGJnQ29sb3IgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhzaXplc1tsZXZlbF0pO1xuICByZXR1cm4gKFxuICAgIC8vIDxMaW5rXG4gICAgLy8gICBocmVmPXtsaW5rfVxuICAgIC8vICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAvLyAgIHN4PXt7IC4uLnN0eWxlcy5zcG9uc29yLCB3aWR0aDogc2l6ZXNbbGV2ZWxdLCBoZWlnaHQ6IHNpemVzW2xldmVsXSwgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yIH19XG4gICAgLy8gPlxuICAgIDxGbGV4IHN4PXt7IHdpZHRoOiAnNDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3sgLi4uc3R5bGVzLnNwb25zb3IsIHdpZHRoOiAnMzAwcHgnLCBoZWlnaHQ6ICczMDBweCcgfX1cbiAgICAgIC8vIHN4PXt7IG92ZXJmbG93OiAnaGlkZGVuJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgID5cbiAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9e2FsdH0gc3g9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvbnRhaW4nLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyB9fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBhcz1cInBcIj57ZGVzY3JpcGNpb259PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9GbGV4PlxuICAgIC8vIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3BvbnNvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIC8vIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICBib3hTaGFkb3c6IFwiMCAwIDE1cHggYmxhY2tcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICBtYXJnaW46IFwiMjBweFwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjEsIDEuMSlcIixcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSnVyYWRvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/jurado.jsx\n");

/***/ })

})