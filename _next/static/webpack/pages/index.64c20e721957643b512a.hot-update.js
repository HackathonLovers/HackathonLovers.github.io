webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/reto.js":
/*!******************************!*\
  !*** ./src/sections/reto.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reto; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/background-sections/bg-red-circles.png */ \"./src/assets/background-sections/bg-red-circles.png\");\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var components_reto_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/reto-card */ \"./src/components/reto-card.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/sections/reto.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n// import PatternBG from \"assets/patternBG.png\";\n\n\n\n\n\n\n\nvar packages = [{\n  name: \"Reglas\",\n  // description: \"De 09:30 a 15:00\",\n  // name: \"Día 15 de abril de 2023\",\n  // description: \"De 09:30 a 20:30\",\n  // buttonText: 'Signup Now',\n  points: [// {\n  //   icon: <IoIosArrowForward />,\n  //   text: \"Crear un minijuego tipo aventura escape room virtual, con un escenario del que hay que lograr salir resolviendo puzzles más o menos sencillas.\",\n  //   isAvailable: true,\n  // },\n  {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }),\n    text: \"La tecnología será HTML+CSS+JS. Se podrá usar algún framework de front tipo Angular, React o Vue, pero nunca un framework de desarrollo de juegos. Lo importante no es el juego en sí, aunque también, pero sobre todo que sea accesible.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }),\n    text: \"En el escenario habrá diversos objetos con los que el jugador puede interactuar de distintas formas. Una de las primeras cosas que deberán hacer es pensar en un método accesible de recorrer el escenario para descubrir e interactuar con los objetos.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }),\n    text: \"Las acciones obligatorias deberían ser al menos: mirar y usar; esta última acción debería permitir usar un objeto con otro.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }),\n    text: \"Todos los objetos deben de tener una respuesta para cada acción, aún cuando ese objeto no se pueda usar.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 15\n      }\n    }),\n    text: \"Ni que decir tiene que el reto es sobre accesibilidad, evidentemente también se valorarán otras cosas, como la jugabilidad, la historia, la dificultad, pero es preferible gráficos “cutres” y juego accesible antes que unos gráficos del copón y un juego inaccesible.\",\n    isAvailable: true\n  }]\n}, {\n  name: \"Reglas opcionales\",\n  description: \"\",\n  // name: \"Día 15 de abril de 2023\",\n  // description: \"De 09:30 a 20:30\",\n  // buttonText: 'Signup Now',\n  points: [{\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrán utilizar otras acciones en los objetos como coger, soltar, abrir, cerrar…\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrá tener un inventario de objetos, que el jugador puede consultar y recorrer para interactuar con ellos.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    }),\n    text: \"El escenario podrá ser una única habitación o más de una entre las cuales el jugador pueda moverse.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrán añadir efectos de sonido al realizar determinadas acciones con los objetos.\",\n    isAvailable: true\n  }]\n}];\nvar linkData = {\n  link: 'https://prueba-hackaccesibilidad.onrender.com/',\n  text: 'Os dejamos un ejemplo sencillo y no accesible del reto:'\n};\nfunction Reto() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"section\", {\n    id: \"reto\",\n    sx: styles.pricing,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    slogan: \"El reto\",\n    title: \"Crear un minijuego tipo aventura escape room virtual, con un escenario del que hay que lograr salir resolviendo puzzles m\\xE1s o menos sencillos.\",\n    isWhite: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }), linkData && Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 22\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 32\n    }\n  }, linkData.text, \" \"), \" \", Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: linkData.link,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 35\n    }\n  }, linkData.link)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    sx: {\n      width: \"100%\",\n      justifyContent: \"center\",\n      flexWrap: \"wrap\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }, packages.map(function (packageData) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_reto_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: packageData,\n      key: packageData.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Reto;\nvar styles = {\n  pricing: {\n    // backgroundColor: \"primary\",\n    // backgroundImage: `url(${PatternBG})`,\n    // backgroundRepeat: `no-repeat`,\n    // backgroundPosition: \"center center\",\n    // backgroundSize: \"cover\",\n    py: [8, null, 9, null, null, 10],\n    position: \"relative\",\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      top: 0,\n      right: 0,\n      // background:\n      //   \"linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)\",\n      width: \"100%\",\n      // backgroundSize: \"350px 350px\",\n      height: \"100%\",\n      opacity: 0.3,\n      zIndex: 0\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Reto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3JldG8uanM/YTI4NiJdLCJuYW1lcyI6WyJwYWNrYWdlcyIsIm5hbWUiLCJwb2ludHMiLCJpY29uIiwidGV4dCIsImlzQXZhaWxhYmxlIiwiZGVzY3JpcHRpb24iLCJsaW5rRGF0YSIsImxpbmsiLCJSZXRvIiwic3R5bGVzIiwicHJpY2luZyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsIm1hcCIsInBhY2thZ2VEYXRhIiwicHkiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJ0b3AiLCJyaWdodCIsImhlaWdodCIsIm9wYWNpdHkiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE1BQUksRUFBRSxRQURSO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsUUFBTSxFQUFFLENBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VDLFFBQUksRUFBRSxxREFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFI7QUFFRUMsUUFBSSxFQUFFLDJPQUZSO0FBR0VDLGVBQVcsRUFBRTtBQUhmLEdBTk0sRUFXTjtBQUNFRixRQUFJLEVBQUUscURBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUVDLFFBQUksRUFBRSwwUEFGUjtBQUdFQyxlQUFXLEVBQUU7QUFIZixHQVhNLEVBZ0JOO0FBQ0VGLFFBQUksRUFBRSxxREFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFI7QUFFRUMsUUFBSSxFQUFFLDZIQUZSO0FBR0VDLGVBQVcsRUFBRTtBQUhmLEdBaEJNLEVBcUJOO0FBQ0VGLFFBQUksRUFBRSxxREFBQyw0REFBRDtBQUFB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QUFNQyxNQUFNLEdBQUc7QUFDYkMsU0FBTyxFQUFFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCLENBTkc7QUFPUEMsWUFBUSxFQUFFLFVBUEg7QUFRUCxpQkFBYTtBQUNYQSxjQUFRLEVBQUUsVUFEQztBQUVYQyxhQUFPLEVBQUUsSUFGRTtBQUdYQyxTQUFHLEVBQUUsQ0FITTtBQUlYQyxXQUFLLEVBQUUsQ0FKSTtBQUtYO0FBQ0E7QUFDQVQsV0FBSyxFQUFFLE1BUEk7QUFRWDtBQUNBVSxZQUFNLEVBQUUsTUFURztBQVVYQyxhQUFPLEVBQUUsR0FWRTtBQVdYQyxZQUFNLEVBQUU7QUFYRztBQVJOO0FBREksQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9yZXRvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG4vLyBpbXBvcnQgUGF0dGVybkJHIGZyb20gXCJhc3NldHMvcGF0dGVybkJHLnBuZ1wiO1xuaW1wb3J0IFBhdHRlcm5CRyBmcm9tIFwiYXNzZXRzL2JhY2tncm91bmQtc2VjdGlvbnMvYmctcmVkLWNpcmNsZXMucG5nXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IFJldG9DYXJkIGZyb20gXCJjb21wb25lbnRzL3JldG8tY2FyZFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJb0lvc0Nsb2NrLCBJb0lvc0Fycm93Rm9yd2FyZCwgSW9Jb3NPcHRpb25zLCBJb0lvc0hlbHBCdW95LCBJb0lvc0hlbHBDaXJjbGUsIElvSW9zQ2hlY2ttYXJrLCBJb0lvc0NoZWNrYm94IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEZsZXgsIEJveCwgVGV4dCwganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmNvbnN0IHBhY2thZ2VzID0gW1xuICB7XG4gICAgbmFtZTogXCJSZWdsYXNcIixcbiAgICAvLyBkZXNjcmlwdGlvbjogXCJEZSAwOTozMCBhIDE1OjAwXCIsXG4gICAgLy8gbmFtZTogXCJEw61hIDE1IGRlIGFicmlsIGRlIDIwMjNcIixcbiAgICAvLyBkZXNjcmlwdGlvbjogXCJEZSAwOTozMCBhIDIwOjMwXCIsXG4gICAgLy8gYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxuICAgIHBvaW50czogW1xuICAgICAgLy8ge1xuICAgICAgLy8gICBpY29uOiA8SW9Jb3NBcnJvd0ZvcndhcmQgLz4sXG4gICAgICAvLyAgIHRleHQ6IFwiQ3JlYXIgdW4gbWluaWp1ZWdvIHRpcG8gYXZlbnR1cmEgZXNjYXBlIHJvb20gdmlydHVhbCwgY29uIHVuIGVzY2VuYXJpbyBkZWwgcXVlIGhheSBxdWUgbG9ncmFyIHNhbGlyIHJlc29sdmllbmRvIHB1enpsZXMgbcOhcyBvIG1lbm9zIHNlbmNpbGxhcy5cIixcbiAgICAgIC8vICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja2JveCAvPixcbiAgICAgICAgdGV4dDogXCJMYSB0ZWNub2xvZ8OtYSBzZXLDoSBIVE1MK0NTUytKUy4gU2UgcG9kcsOhIHVzYXIgYWxnw7puIGZyYW1ld29yayBkZSBmcm9udCB0aXBvIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLCBwZXJvIG51bmNhIHVuIGZyYW1ld29yayBkZSBkZXNhcnJvbGxvIGRlIGp1ZWdvcy4gTG8gaW1wb3J0YW50ZSBubyBlcyBlbCBqdWVnbyBlbiBzw60sIGF1bnF1ZSB0YW1iacOpbiwgcGVybyBzb2JyZSB0b2RvIHF1ZSBzZWEgYWNjZXNpYmxlLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrYm94IC8+LFxuICAgICAgICB0ZXh0OiBcIkVuIGVsIGVzY2VuYXJpbyBoYWJyw6EgZGl2ZXJzb3Mgb2JqZXRvcyBjb24gbG9zIHF1ZSBlbCBqdWdhZG9yIHB1ZWRlIGludGVyYWN0dWFyIGRlIGRpc3RpbnRhcyBmb3JtYXMuIFVuYSBkZSBsYXMgcHJpbWVyYXMgY29zYXMgcXVlIGRlYmVyw6FuIGhhY2VyIGVzIHBlbnNhciBlbiB1biBtw6l0b2RvIGFjY2VzaWJsZSBkZSByZWNvcnJlciBlbCBlc2NlbmFyaW8gcGFyYSBkZXNjdWJyaXIgZSBpbnRlcmFjdHVhciBjb24gbG9zIG9iamV0b3MuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2tib3ggLz4sXG4gICAgICAgIHRleHQ6IFwiTGFzIGFjY2lvbmVzIG9ibGlnYXRvcmlhcyBkZWJlcsOtYW4gc2VyIGFsIG1lbm9zOiBtaXJhciB5IHVzYXI7IGVzdGEgw7psdGltYSBhY2Npw7NuIGRlYmVyw61hIHBlcm1pdGlyIHVzYXIgdW4gb2JqZXRvIGNvbiBvdHJvLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrYm94IC8+LFxuICAgICAgICB0ZXh0OiBcIlRvZG9zIGxvcyBvYmpldG9zIGRlYmVuIGRlIHRlbmVyIHVuYSByZXNwdWVzdGEgcGFyYSBjYWRhIGFjY2nDs24sIGHDum4gY3VhbmRvIGVzZSBvYmpldG8gbm8gc2UgcHVlZGEgdXNhci5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja2JveCAvPixcbiAgICAgICAgdGV4dDogXCJOaSBxdWUgZGVjaXIgdGllbmUgcXVlIGVsIHJldG8gZXMgc29icmUgYWNjZXNpYmlsaWRhZCwgZXZpZGVudGVtZW50ZSB0YW1iacOpbiBzZSB2YWxvcmFyw6FuIG90cmFzIGNvc2FzLCBjb21vIGxhIGp1Z2FiaWxpZGFkLCBsYSBoaXN0b3JpYSwgbGEgZGlmaWN1bHRhZCwgcGVybyBlcyBwcmVmZXJpYmxlIGdyw6FmaWNvcyDigJxjdXRyZXPigJ0geSBqdWVnbyBhY2Nlc2libGUgYW50ZXMgcXVlIHVub3MgZ3LDoWZpY29zIGRlbCBjb3DDs24geSB1biBqdWVnbyBpbmFjY2VzaWJsZS5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVnbGFzIG9wY2lvbmFsZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAvLyBuYW1lOiBcIkTDrWEgMTUgZGUgYWJyaWwgZGUgMjAyM1wiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIkRlIDA5OjMwIGEgMjA6MzBcIixcbiAgICAvLyBidXR0b25UZXh0OiAnU2lnbnVwIE5vdycsXG4gICAgcG9pbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0hlbHBDaXJjbGUgLz4sXG4gICAgICAgIHRleHQ6IFwiU2UgcG9kcsOhbiB1dGlsaXphciBvdHJhcyBhY2Npb25lcyBlbiBsb3Mgb2JqZXRvcyBjb21vIGNvZ2VyLCBzb2x0YXIsIGFicmlyLCBjZXJyYXLigKZcIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NIZWxwQ2lyY2xlIC8+LFxuICAgICAgICB0ZXh0OiBcIlNlIHBvZHLDoSB0ZW5lciB1biBpbnZlbnRhcmlvIGRlIG9iamV0b3MsIHF1ZSBlbCBqdWdhZG9yIHB1ZWRlIGNvbnN1bHRhciB5IHJlY29ycmVyIHBhcmEgaW50ZXJhY3R1YXIgY29uIGVsbG9zLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0hlbHBDaXJjbGUgLz4sXG4gICAgICAgIHRleHQ6IFwiRWwgZXNjZW5hcmlvIHBvZHLDoSBzZXIgdW5hIMO6bmljYSBoYWJpdGFjacOzbiBvIG3DoXMgZGUgdW5hIGVudHJlIGxhcyBjdWFsZXMgZWwganVnYWRvciBwdWVkYSBtb3ZlcnNlLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0hlbHBDaXJjbGUgLz4sXG4gICAgICAgIHRleHQ6IFwiU2UgcG9kcsOhbiBhw7FhZGlyIGVmZWN0b3MgZGUgc29uaWRvIGFsIHJlYWxpemFyIGRldGVybWluYWRhcyBhY2Npb25lcyBjb24gbG9zIG9iamV0b3MuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbl1cblxuY29uc3QgbGlua0RhdGEgPSB7XG4gIGxpbms6ICdodHRwczovL3BydWViYS1oYWNrYWNjZXNpYmlsaWRhZC5vbnJlbmRlci5jb20vJyxcbiAgdGV4dDogJ09zIGRlamFtb3MgdW4gZWplbXBsbyBzZW5jaWxsbyB5IG5vIGFjY2VzaWJsZSBkZWwgcmV0bzonXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldG8oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJyZXRvXCIgc3g9e3N0eWxlcy5wcmljaW5nfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgc2xvZ2FuPVwiRWwgcmV0b1wiXG4gICAgICAgICAgdGl0bGU9XCJDcmVhciB1biBtaW5panVlZ28gdGlwbyBhdmVudHVyYSBlc2NhcGUgcm9vbSB2aXJ0dWFsLCBjb24gdW4gZXNjZW5hcmlvIGRlbCBxdWUgaGF5IHF1ZSBsb2dyYXIgc2FsaXIgcmVzb2x2aWVuZG8gcHV6emxlcyBtw6FzIG8gbWVub3Mgc2VuY2lsbG9zLlwiXG4gICAgICAgICAgaXNXaGl0ZT17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICAgIHtsaW5rRGF0YSAmJiA8RnJhZ21lbnQ+PFRleHQ+XG4gICAgICAgICAge2xpbmtEYXRhLnRleHR9IDwvVGV4dD4gPExpbmsgcGF0aD17bGlua0RhdGEubGlua30gdGFyZ2V0PSdfYmxhbmsnPntsaW5rRGF0YS5saW5rfTwvTGluaz48L0ZyYWdtZW50Pn1cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwYWNrYWdlcy5tYXAoKHBhY2thZ2VEYXRhKSA9PiAoXG4gICAgICAgICAgICA8UmV0b0NhcmQgZGF0YT17cGFja2FnZURhdGF9IGtleT17cGFja2FnZURhdGEubmFtZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uID5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nOiB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcbiAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgLy8gYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgLy8gYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAvLyBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgXCImOjpiZWZvcmVcIjoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgLy8gYmFja2dyb3VuZDpcbiAgICAgIC8vICAgXCJsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDQyLDcyLDEyNSwgMC4zKSA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudClcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIC8vIGJhY2tncm91bmRTaXplOiBcIjM1MHB4IDM1MHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgekluZGV4OiAwLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/reto.js\n");

/***/ })

})