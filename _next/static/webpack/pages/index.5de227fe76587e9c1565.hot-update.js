webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/reto.js":
/*!******************************!*\
  !*** ./src/sections/reto.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reto; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/background-sections/bg-red-circles.png */ \"./src/assets/background-sections/bg-red-circles.png\");\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var components_reto_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/reto-card */ \"./src/components/reto-card.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/sections/reto.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n// import PatternBG from \"assets/patternBG.png\";\n\n\n\n\n\n\nvar packages = [{\n  name: \"Reglas\",\n  // description: \"De 09:30 a 15:00\",\n  // name: \"Día 15 de abril de 2023\",\n  // description: \"De 09:30 a 20:30\",\n  // buttonText: 'Signup Now',\n  points: [// {\n  //   icon: <IoIosArrowForward />,\n  //   text: \"Crear un minijuego tipo aventura escape room virtual, con un escenario del que hay que lograr salir resolviendo puzzles más o menos sencillas.\",\n  //   isAvailable: true,\n  // },\n  {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 15\n      }\n    }),\n    text: \"La tecnología será HTML+CSS+JS. Se podrá usar algún framework de front tipo Angular, React o Vue, pero nunca un framework de desarrollo de juegos. Lo importante no es el juego en sí, aunque también, pero sobre todo que sea accesible.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }),\n    text: \"En el escenario habrá diversos objetos con los que el jugador puede interactuar de distintas formas. Una de las primeras cosas que deberán hacer es pensar en un método accesible de recorrer el escenario para descubrir e interactuar con los objetos.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }),\n    text: \"Las acciones obligatorias deberían ser al menos: mirar y usar; esta última acción debería permitir usar un objeto con otro.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }),\n    text: \"Todos los objetos deben de tener una respuesta para cada acción, aún cuando ese objeto no se pueda usar.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }\n    }),\n    text: \"Ni que decir tiene que el reto es sobre accesibilidad, evidentemente también se valorarán otras cosas, como la jugabilidad, la historia, la dificultad, pero es preferible gráficos “cutres” y juego accesible antes que unos gráficos del copón y un juego inaccesible.\",\n    isAvailable: true\n  }]\n}, {\n  name: \"Reglas opcionales\",\n  description: \"\",\n  // name: \"Día 15 de abril de 2023\",\n  // description: \"De 09:30 a 20:30\",\n  // buttonText: 'Signup Now',\n  points: [{\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrán utilizar otras acciones en los objetos como coger, soltar, abrir, cerrar…\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrá tener un inventario de objetos, que el jugador puede consultar y recorrer para interactuar con ellos.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 15\n      }\n    }),\n    text: \"El escenario podrá ser una única habitación o más de una entre las cuales el jugador pueda moverse.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrán añadir efectos de sonido al realizar determinadas acciones con los objetos.\",\n    isAvailable: true\n  }]\n}];\nvar linkData = {\n  link: 'https://prueba-hackaccesibilidad.onrender.com/',\n  text: 'Os dejamos un ejemplo sencillo y no accesible del reto:'\n};\nfunction Reto() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"section\", {\n    id: \"reto\",\n    sx: styles.pricing,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    slogan: \"El reto\",\n    title: \"Crear un minijuego tipo aventura escape room virtual, con un escenario del que hay que lograr salir resolviendo puzzles m\\xE1s o menos sencillos.\",\n    isWhite: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }), linkData && Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 22\n    }\n  }, linkData.text, \" \", Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: linkData.link,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 27\n    }\n  }, linkData.link)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    sx: {\n      width: \"100%\",\n      justifyContent: \"center\",\n      flexWrap: \"wrap\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }, packages.map(function (packageData) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_reto_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: packageData,\n      key: packageData.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Reto;\nvar styles = {\n  pricing: {\n    // backgroundColor: \"primary\",\n    // backgroundImage: `url(${PatternBG})`,\n    // backgroundRepeat: `no-repeat`,\n    // backgroundPosition: \"center center\",\n    // backgroundSize: \"cover\",\n    py: [8, null, 9, null, null, 10],\n    position: \"relative\",\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      top: 0,\n      right: 0,\n      // background:\n      //   \"linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)\",\n      width: \"100%\",\n      // backgroundSize: \"350px 350px\",\n      height: \"100%\",\n      opacity: 0.3,\n      zIndex: 0\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Reto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3JldG8uanM/YTI4NiJdLCJuYW1lcyI6WyJwYWNrYWdlcyIsIm5hbWUiLCJwb2ludHMiLCJpY29uIiwidGV4dCIsImlzQXZhaWxhYmxlIiwiZGVzY3JpcHRpb24iLCJsaW5rRGF0YSIsImxpbmsiLCJSZXRvIiwic3R5bGVzIiwicHJpY2luZyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsIm1hcCIsInBhY2thZ2VEYXRhIiwicHkiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJyaWdodCIsImhlaWdodCIsIm9wYWNpdHkiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsUUFEUjtBQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFFBQU0sRUFBRSxDQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxRQUFJLEVBQUUscURBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUVDLFFBQUksRUFBRSwyT0FGUjtBQUdFQyxlQUFXLEVBQUU7QUFIZixHQU5NLEVBV047QUFDRUYsUUFBSSxFQUFFLHFEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUjtBQUVFQyxRQUFJLEVBQUUsMFBBRlI7QUFHRUMsZUFBVyxFQUFFO0FBSGYsR0FYTSxFQWdCTjtBQUNFRixRQUFJLEVBQUUscURBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUVDLFFBQUksRUFBRSw2SEFGUjtBQUdFQyxlQUFXLEVBQUU7QUFIZixHQWhCTSxFQXFCTjtBQUNFRixRQUFJLEVBQUUscURBQUMsNERBQUQ7QUFBQTtBQUFB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QUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCLENBTkc7QUFPUEMsWUFBUSxFQUFFLFVBUEg7QUFRUCxpQkFBYTtBQUNYQSxjQUFRLEVBQUUsVUFEQztBQUVYQyxhQUFPLEVBQUUsSUFGRTtBQUdYQyxTQUFHLEVBQUUsQ0FITTtBQUlYQyxXQUFLLEVBQUUsQ0FKSTtBQUtYO0FBQ0E7QUFDQVQsV0FBSyxFQUFFLE1BUEk7QUFRWDtBQUNBVSxZQUFNLEVBQUUsTUFURztBQVVYQyxhQUFPLEVBQUUsR0FWRTtBQVdYQyxZQUFNLEVBQUU7QUFYRztBQVJOO0FBREksQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9yZXRvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG4vLyBpbXBvcnQgUGF0dGVybkJHIGZyb20gXCJhc3NldHMvcGF0dGVybkJHLnBuZ1wiO1xuaW1wb3J0IFBhdHRlcm5CRyBmcm9tIFwiYXNzZXRzL2JhY2tncm91bmQtc2VjdGlvbnMvYmctcmVkLWNpcmNsZXMucG5nXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IFJldG9DYXJkIGZyb20gXCJjb21wb25lbnRzL3JldG8tY2FyZFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCB7IElvSW9zQ2xvY2ssIElvSW9zQXJyb3dGb3J3YXJkLCBJb0lvc09wdGlvbnMsIElvSW9zSGVscEJ1b3ksIElvSW9zSGVscENpcmNsZSwgSW9Jb3NDaGVja21hcmssIElvSW9zQ2hlY2tib3ggfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgQm94LCBUZXh0LCBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuY29uc3QgcGFja2FnZXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlJlZ2xhc1wiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIkRlIDA5OjMwIGEgMTU6MDBcIixcbiAgICAvLyBuYW1lOiBcIkTDrWEgMTUgZGUgYWJyaWwgZGUgMjAyM1wiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIkRlIDA5OjMwIGEgMjA6MzBcIixcbiAgICAvLyBidXR0b25UZXh0OiAnU2lnbnVwIE5vdycsXG4gICAgcG9pbnRzOiBbXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGljb246IDxJb0lvc0Fycm93Rm9yd2FyZCAvPixcbiAgICAgIC8vICAgdGV4dDogXCJDcmVhciB1biBtaW5panVlZ28gdGlwbyBhdmVudHVyYSBlc2NhcGUgcm9vbSB2aXJ0dWFsLCBjb24gdW4gZXNjZW5hcmlvIGRlbCBxdWUgaGF5IHF1ZSBsb2dyYXIgc2FsaXIgcmVzb2x2aWVuZG8gcHV6emxlcyBtw6FzIG8gbWVub3Mgc2VuY2lsbGFzLlwiLFxuICAgICAgLy8gICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrYm94IC8+LFxuICAgICAgICB0ZXh0OiBcIkxhIHRlY25vbG9nw61hIHNlcsOhIEhUTUwrQ1NTK0pTLiBTZSBwb2Ryw6EgdXNhciBhbGfDum4gZnJhbWV3b3JrIGRlIGZyb250IHRpcG8gQW5ndWxhciwgUmVhY3QgbyBWdWUsIHBlcm8gbnVuY2EgdW4gZnJhbWV3b3JrIGRlIGRlc2Fycm9sbG8gZGUganVlZ29zLiBMbyBpbXBvcnRhbnRlIG5vIGVzIGVsIGp1ZWdvIGVuIHPDrSwgYXVucXVlIHRhbWJpw6luLCBwZXJvIHNvYnJlIHRvZG8gcXVlIHNlYSBhY2Nlc2libGUuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2tib3ggLz4sXG4gICAgICAgIHRleHQ6IFwiRW4gZWwgZXNjZW5hcmlvIGhhYnLDoSBkaXZlcnNvcyBvYmpldG9zIGNvbiBsb3MgcXVlIGVsIGp1Z2Fkb3IgcHVlZGUgaW50ZXJhY3R1YXIgZGUgZGlzdGludGFzIGZvcm1hcy4gVW5hIGRlIGxhcyBwcmltZXJhcyBjb3NhcyBxdWUgZGViZXLDoW4gaGFjZXIgZXMgcGVuc2FyIGVuIHVuIG3DqXRvZG8gYWNjZXNpYmxlIGRlIHJlY29ycmVyIGVsIGVzY2VuYXJpbyBwYXJhIGRlc2N1YnJpciBlIGludGVyYWN0dWFyIGNvbiBsb3Mgb2JqZXRvcy5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja2JveCAvPixcbiAgICAgICAgdGV4dDogXCJMYXMgYWNjaW9uZXMgb2JsaWdhdG9yaWFzIGRlYmVyw61hbiBzZXIgYWwgbWVub3M6IG1pcmFyIHkgdXNhcjsgZXN0YSDDumx0aW1hIGFjY2nDs24gZGViZXLDrWEgcGVybWl0aXIgdXNhciB1biBvYmpldG8gY29uIG90cm8uXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2tib3ggLz4sXG4gICAgICAgIHRleHQ6IFwiVG9kb3MgbG9zIG9iamV0b3MgZGViZW4gZGUgdGVuZXIgdW5hIHJlc3B1ZXN0YSBwYXJhIGNhZGEgYWNjacOzbiwgYcO6biBjdWFuZG8gZXNlIG9iamV0byBubyBzZSBwdWVkYSB1c2FyLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrYm94IC8+LFxuICAgICAgICB0ZXh0OiBcIk5pIHF1ZSBkZWNpciB0aWVuZSBxdWUgZWwgcmV0byBlcyBzb2JyZSBhY2Nlc2liaWxpZGFkLCBldmlkZW50ZW1lbnRlIHRhbWJpw6luIHNlIHZhbG9yYXLDoW4gb3RyYXMgY29zYXMsIGNvbW8gbGEganVnYWJpbGlkYWQsIGxhIGhpc3RvcmlhLCBsYSBkaWZpY3VsdGFkLCBwZXJvIGVzIHByZWZlcmlibGUgZ3LDoWZpY29zIOKAnGN1dHJlc+KAnSB5IGp1ZWdvIGFjY2VzaWJsZSBhbnRlcyBxdWUgdW5vcyBncsOhZmljb3MgZGVsIGNvcMOzbiB5IHVuIGp1ZWdvIGluYWNjZXNpYmxlLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZWdsYXMgb3BjaW9uYWxlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIC8vIG5hbWU6IFwiRMOtYSAxNSBkZSBhYnJpbCBkZSAyMDIzXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiRGUgMDk6MzAgYSAyMDozMFwiLFxuICAgIC8vIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcbiAgICBwb2ludHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zSGVscENpcmNsZSAvPixcbiAgICAgICAgdGV4dDogXCJTZSBwb2Ryw6FuIHV0aWxpemFyIG90cmFzIGFjY2lvbmVzIGVuIGxvcyBvYmpldG9zIGNvbW8gY29nZXIsIHNvbHRhciwgYWJyaXIsIGNlcnJhcuKAplwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0hlbHBDaXJjbGUgLz4sXG4gICAgICAgIHRleHQ6IFwiU2UgcG9kcsOhIHRlbmVyIHVuIGludmVudGFyaW8gZGUgb2JqZXRvcywgcXVlIGVsIGp1Z2Fkb3IgcHVlZGUgY29uc3VsdGFyIHkgcmVjb3JyZXIgcGFyYSBpbnRlcmFjdHVhciBjb24gZWxsb3MuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zSGVscENpcmNsZSAvPixcbiAgICAgICAgdGV4dDogXCJFbCBlc2NlbmFyaW8gcG9kcsOhIHNlciB1bmEgw7puaWNhIGhhYml0YWNpw7NuIG8gbcOhcyBkZSB1bmEgZW50cmUgbGFzIGN1YWxlcyBlbCBqdWdhZG9yIHB1ZWRhIG1vdmVyc2UuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zSGVscENpcmNsZSAvPixcbiAgICAgICAgdGV4dDogXCJTZSBwb2Ryw6FuIGHDsWFkaXIgZWZlY3RvcyBkZSBzb25pZG8gYWwgcmVhbGl6YXIgZGV0ZXJtaW5hZGFzIGFjY2lvbmVzIGNvbiBsb3Mgb2JqZXRvcy5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXVxuXG5jb25zdCBsaW5rRGF0YSA9IHtcbiAgbGluazogJ2h0dHBzOi8vcHJ1ZWJhLWhhY2thY2Nlc2liaWxpZGFkLm9ucmVuZGVyLmNvbS8nLFxuICB0ZXh0OiAnT3MgZGVqYW1vcyB1biBlamVtcGxvIHNlbmNpbGxvIHkgbm8gYWNjZXNpYmxlIGRlbCByZXRvOidcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmV0bygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInJldG9cIiBzeD17c3R5bGVzLnByaWNpbmd9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBzbG9nYW49XCJFbCByZXRvXCJcbiAgICAgICAgICB0aXRsZT1cIkNyZWFyIHVuIG1pbmlqdWVnbyB0aXBvIGF2ZW50dXJhIGVzY2FwZSByb29tIHZpcnR1YWwsIGNvbiB1biBlc2NlbmFyaW8gZGVsIHF1ZSBoYXkgcXVlIGxvZ3JhciBzYWxpciByZXNvbHZpZW5kbyBwdXp6bGVzIG3DoXMgbyBtZW5vcyBzZW5jaWxsb3MuXCJcbiAgICAgICAgICBpc1doaXRlPXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgICAge2xpbmtEYXRhICYmIDxUZXh0PlxuICAgICAgICAgIHtsaW5rRGF0YS50ZXh0fSA8TGluayB0bz17bGlua0RhdGEubGlua30gdGFyZ2V0PSdfYmxhbmsnPntsaW5rRGF0YS5saW5rfTwvTGluaz5cbiAgICAgICAgPC9UZXh0Pn1cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwYWNrYWdlcy5tYXAoKHBhY2thZ2VEYXRhKSA9PiAoXG4gICAgICAgICAgICA8UmV0b0NhcmQgZGF0YT17cGFja2FnZURhdGF9IGtleT17cGFja2FnZURhdGEubmFtZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uID5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nOiB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcbiAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgLy8gYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgLy8gYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAvLyBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgXCImOjpiZWZvcmVcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgLy8gYmFja2dyb3VuZDpcbiAgICAgIC8vICAgXCJsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudClcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIC8vIGJhY2tncm91bmRTaXplOiBcIjM1MHB4IDM1MHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgekluZGV4OiAwLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/reto.js\n");

/***/ })

})