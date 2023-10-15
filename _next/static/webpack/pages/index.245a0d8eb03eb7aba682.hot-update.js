webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/reto.js":
/*!******************************!*\
  !*** ./src/sections/reto.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reto; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/background-sections/bg-red-circles.png */ \"./src/assets/background-sections/bg-red-circles.png\");\n/* harmony import */ var assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_background_sections_bg_red_circles_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var components_reto_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/reto-card */ \"./src/components/reto-card.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/angelisco/Documents/Angelisco/github/el-hackathon-de-hl/src/sections/reto.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n// import PatternBG from \"assets/patternBG.png\";\n\n\n\n\n\n\n\nvar packages = [{\n  name: \"Reglas\",\n  // description: \"De 09:30 a 15:00\",\n  // name: \"Día 15 de abril de 2023\",\n  // description: \"De 09:30 a 20:30\",\n  // buttonText: 'Signup Now',\n  points: [// {\n  //   icon: <IoIosArrowForward />,\n  //   text: \"Crear un minijuego tipo aventura escape room virtual, con un escenario del que hay que lograr salir resolviendo puzzles más o menos sencillas.\",\n  //   isAvailable: true,\n  // },\n  {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }),\n    text: \"La tecnología será HTML+CSS+JS. Se podrá usar algún framework de front tipo Angular, React o Vue, pero nunca un framework de desarrollo de juegos. Lo importante no es el juego en sí, aunque también, pero sobre todo que sea accesible.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }),\n    text: \"En el escenario habrá diversos objetos con los que el jugador puede interactuar de distintas formas. Una de las primeras cosas que deberán hacer es pensar en un método accesible de recorrer el escenario para descubrir e interactuar con los objetos.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }),\n    text: \"Las acciones obligatorias deberían ser al menos: mirar y usar; esta última acción debería permitir usar un objeto con otro.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }),\n    text: \"Todos los objetos deben de tener una respuesta para cada acción, aún cuando ese objeto no se pueda usar.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosCheckbox\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 15\n      }\n    }),\n    text: \"Ni que decir tiene que el reto es sobre accesibilidad, evidentemente también se valorarán otras cosas, como la jugabilidad, la historia, la dificultad, pero es preferible gráficos “cutres” y juego accesible antes que unos gráficos del copón y un juego inaccesible.\",\n    isAvailable: true\n  }]\n}, {\n  name: \"Reglas opcionales\",\n  description: \"\",\n  // name: \"Día 15 de abril de 2023\",\n  // description: \"De 09:30 a 20:30\",\n  // buttonText: 'Signup Now',\n  points: [{\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrán utilizar otras acciones en los objetos como coger, soltar, abrir, cerrar…\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrá tener un inventario de objetos, que el jugador puede consultar y recorrer para interactuar con ellos.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    }),\n    text: \"El escenario podrá ser una única habitación o más de una entre las cuales el jugador pueda moverse.\",\n    isAvailable: true\n  }, {\n    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__[\"IoIosHelpCircle\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 15\n      }\n    }),\n    text: \"Se podrán añadir efectos de sonido al realizar determinadas acciones con los objetos.\",\n    isAvailable: true\n  }]\n}];\nvar linkData = {\n  link: 'https://prueba-hackaccesibilidad.onrender.com/',\n  text: 'Os dejamos un ejemplo sencillo y no accesible del reto:'\n};\nfunction Reto() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"section\", {\n    id: \"reto\",\n    sx: styles.pricing,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    slogan: \"El reto\",\n    title: \"Crear un minijuego tipo aventura escape room virtual, con un escenario del que hay que lograr salir resolviendo puzzles m\\xE1s o menos sencillos.\",\n    isWhite: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    sx: {\n      width: \"100%\",\n      justifyContent: \"center\",\n      flexWrap: \"wrap\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, packages.map(function (packageData) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_reto_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: packageData,\n      key: packageData.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 13\n      }\n    });\n  })), linkData && Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Flex\"], {\n    sx: {\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 22\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    sx: {\n      fontWeigth: 'bold'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 12\n    }\n  }, linkData.text, \" \", Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    path: linkData.link,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 29\n    }\n  }, linkData.link)))));\n}\n_c = Reto;\nvar styles = {\n  pricing: {\n    // backgroundColor: \"primary\",\n    // backgroundImage: `url(${PatternBG})`,\n    // backgroundRepeat: `no-repeat`,\n    // backgroundPosition: \"center center\",\n    // backgroundSize: \"cover\",\n    py: [8, null, 9, null, null, 10],\n    position: \"relative\",\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      top: 0,\n      right: 0,\n      // background:\n      //   \"linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)\",\n      width: \"100%\",\n      // backgroundSize: \"350px 350px\",\n      // height: \"100%\",\n      opacity: 0.3,\n      zIndex: 0\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Reto\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3JldG8uanM/YTI4NiJdLCJuYW1lcyI6WyJwYWNrYWdlcyIsIm5hbWUiLCJwb2ludHMiLCJpY29uIiwidGV4dCIsImlzQXZhaWxhYmxlIiwiZGVzY3JpcHRpb24iLCJsaW5rRGF0YSIsImxpbmsiLCJSZXRvIiwic3R5bGVzIiwicHJpY2luZyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsIm1hcCIsInBhY2thZ2VEYXRhIiwiZm9udFdlaWd0aCIsInB5IiwicG9zaXRpb24iLCJjb250ZW50IiwidG9wIiwicmlnaHQiLCJvcGFjaXR5IiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsUUFEUjtBQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFFBQU0sRUFBRSxDQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxRQUFJLEVBQUUscURBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUVDLFFBQUksRUFBRSwyT0FGUjtBQUdFQyxlQUFXLEVBQUU7QUFIZixHQU5NLEVBV047QUFDRUYsUUFBSSxFQUFFLHFEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUjtBQUVFQyxRQUFJLEVBQUUsMFBBRlI7QUFHRUMsZUFBVyxFQUFFO0FBSGYsR0FYTSxFQWdCTjtBQUNFRixRQUFJLEVBQUUscURBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUVDLFFBQUksRUFBRSw2SEFGUjtBQUdFQyxlQUFXLEVBQUU7QUFIZixHQWhCTSxFQXFCTjtBQUNFRixRQUFJLEVBQUUscURBQUMsNERBQUQ7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QTtBQUFBO0FBQUE7QUFBQSxLQUE0Q0QsUUFBUSxDQUFDQyxJQUFyRCxDQURqQixDQUZVLENBakJmLENBREYsQ0FERjtBQTBCRDtLQTNCdUJDLEk7QUE2QnhCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FPLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekIsQ0FORztBQU9QQyxZQUFRLEVBQUUsVUFQSDtBQVFQLGlCQUFhO0FBQ1hBLGNBQVEsRUFBRSxVQURDO0FBRVhDLGFBQU8sRUFBRSxJQUZFO0FBR1hDLFNBQUcsRUFBRSxDQUhNO0FBSVhDLFdBQUssRUFBRSxDQUpJO0FBS1g7QUFDQTtBQUNBVixXQUFLLEVBQUUsTUFQSTtBQVFYO0FBQ0E7QUFDQVcsYUFBTyxFQUFFLEdBVkU7QUFXWEMsWUFBTSxFQUFFO0FBWEc7QUFSTjtBQURJLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvcmV0by5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuLy8gaW1wb3J0IFBhdHRlcm5CRyBmcm9tIFwiYXNzZXRzL3BhdHRlcm5CRy5wbmdcIjtcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSBcImFzc2V0cy9iYWNrZ3JvdW5kLXNlY3Rpb25zL2JnLXJlZC1jaXJjbGVzLnBuZ1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJjb21wb25lbnRzL2xpbmtcIjtcbmltcG9ydCBSZXRvQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9yZXRvLWNhcmRcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NDbG9jaywgSW9Jb3NBcnJvd0ZvcndhcmQsIElvSW9zT3B0aW9ucywgSW9Jb3NIZWxwQnVveSwgSW9Jb3NIZWxwQ2lyY2xlLCBJb0lvc0NoZWNrbWFyaywgSW9Jb3NDaGVja2JveCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIFRleHQsIGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG5jb25zdCBwYWNrYWdlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiUmVnbGFzXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiRGUgMDk6MzAgYSAxNTowMFwiLFxuICAgIC8vIG5hbWU6IFwiRMOtYSAxNSBkZSBhYnJpbCBkZSAyMDIzXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiRGUgMDk6MzAgYSAyMDozMFwiLFxuICAgIC8vIGJ1dHRvblRleHQ6ICdTaWdudXAgTm93JyxcbiAgICBwb2ludHM6IFtcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgaWNvbjogPElvSW9zQXJyb3dGb3J3YXJkIC8+LFxuICAgICAgLy8gICB0ZXh0OiBcIkNyZWFyIHVuIG1pbmlqdWVnbyB0aXBvIGF2ZW50dXJhIGVzY2FwZSByb29tIHZpcnR1YWwsIGNvbiB1biBlc2NlbmFyaW8gZGVsIHF1ZSBoYXkgcXVlIGxvZ3JhciBzYWxpciByZXNvbHZpZW5kbyBwdXp6bGVzIG3DoXMgbyBtZW5vcyBzZW5jaWxsYXMuXCIsXG4gICAgICAvLyAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2tib3ggLz4sXG4gICAgICAgIHRleHQ6IFwiTGEgdGVjbm9sb2fDrWEgc2Vyw6EgSFRNTCtDU1MrSlMuIFNlIHBvZHLDoSB1c2FyIGFsZ8O6biBmcmFtZXdvcmsgZGUgZnJvbnQgdGlwbyBBbmd1bGFyLCBSZWFjdCBvIFZ1ZSwgcGVybyBudW5jYSB1biBmcmFtZXdvcmsgZGUgZGVzYXJyb2xsbyBkZSBqdWVnb3MuIExvIGltcG9ydGFudGUgbm8gZXMgZWwganVlZ28gZW4gc8OtLCBhdW5xdWUgdGFtYmnDqW4sIHBlcm8gc29icmUgdG9kbyBxdWUgc2VhIGFjY2VzaWJsZS5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja2JveCAvPixcbiAgICAgICAgdGV4dDogXCJFbiBlbCBlc2NlbmFyaW8gaGFicsOhIGRpdmVyc29zIG9iamV0b3MgY29uIGxvcyBxdWUgZWwganVnYWRvciBwdWVkZSBpbnRlcmFjdHVhciBkZSBkaXN0aW50YXMgZm9ybWFzLiBVbmEgZGUgbGFzIHByaW1lcmFzIGNvc2FzIHF1ZSBkZWJlcsOhbiBoYWNlciBlcyBwZW5zYXIgZW4gdW4gbcOpdG9kbyBhY2Nlc2libGUgZGUgcmVjb3JyZXIgZWwgZXNjZW5hcmlvIHBhcmEgZGVzY3VicmlyIGUgaW50ZXJhY3R1YXIgY29uIGxvcyBvYmpldG9zLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IDxJb0lvc0NoZWNrYm94IC8+LFxuICAgICAgICB0ZXh0OiBcIkxhcyBhY2Npb25lcyBvYmxpZ2F0b3JpYXMgZGViZXLDrWFuIHNlciBhbCBtZW5vczogbWlyYXIgeSB1c2FyOyBlc3RhIMO6bHRpbWEgYWNjacOzbiBkZWJlcsOtYSBwZXJtaXRpciB1c2FyIHVuIG9iamV0byBjb24gb3Ryby5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NDaGVja2JveCAvPixcbiAgICAgICAgdGV4dDogXCJUb2RvcyBsb3Mgb2JqZXRvcyBkZWJlbiBkZSB0ZW5lciB1bmEgcmVzcHVlc3RhIHBhcmEgY2FkYSBhY2Npw7NuLCBhw7puIGN1YW5kbyBlc2Ugb2JqZXRvIG5vIHNlIHB1ZWRhIHVzYXIuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zQ2hlY2tib3ggLz4sXG4gICAgICAgIHRleHQ6IFwiTmkgcXVlIGRlY2lyIHRpZW5lIHF1ZSBlbCByZXRvIGVzIHNvYnJlIGFjY2VzaWJpbGlkYWQsIGV2aWRlbnRlbWVudGUgdGFtYmnDqW4gc2UgdmFsb3JhcsOhbiBvdHJhcyBjb3NhcywgY29tbyBsYSBqdWdhYmlsaWRhZCwgbGEgaGlzdG9yaWEsIGxhIGRpZmljdWx0YWQsIHBlcm8gZXMgcHJlZmVyaWJsZSBncsOhZmljb3Mg4oCcY3V0cmVz4oCdIHkganVlZ28gYWNjZXNpYmxlIGFudGVzIHF1ZSB1bm9zIGdyw6FmaWNvcyBkZWwgY29ww7NuIHkgdW4ganVlZ28gaW5hY2Nlc2libGUuXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlZ2xhcyBvcGNpb25hbGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgLy8gbmFtZTogXCJEw61hIDE1IGRlIGFicmlsIGRlIDIwMjNcIixcbiAgICAvLyBkZXNjcmlwdGlvbjogXCJEZSAwOTozMCBhIDIwOjMwXCIsXG4gICAgLy8gYnV0dG9uVGV4dDogJ1NpZ251cCBOb3cnLFxuICAgIHBvaW50czogW1xuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NIZWxwQ2lyY2xlIC8+LFxuICAgICAgICB0ZXh0OiBcIlNlIHBvZHLDoW4gdXRpbGl6YXIgb3RyYXMgYWNjaW9uZXMgZW4gbG9zIG9iamV0b3MgY29tbyBjb2dlciwgc29sdGFyLCBhYnJpciwgY2VycmFy4oCmXCIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogPElvSW9zSGVscENpcmNsZSAvPixcbiAgICAgICAgdGV4dDogXCJTZSBwb2Ryw6EgdGVuZXIgdW4gaW52ZW50YXJpbyBkZSBvYmpldG9zLCBxdWUgZWwganVnYWRvciBwdWVkZSBjb25zdWx0YXIgeSByZWNvcnJlciBwYXJhIGludGVyYWN0dWFyIGNvbiBlbGxvcy5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NIZWxwQ2lyY2xlIC8+LFxuICAgICAgICB0ZXh0OiBcIkVsIGVzY2VuYXJpbyBwb2Ryw6Egc2VyIHVuYSDDum5pY2EgaGFiaXRhY2nDs24gbyBtw6FzIGRlIHVuYSBlbnRyZSBsYXMgY3VhbGVzIGVsIGp1Z2Fkb3IgcHVlZGEgbW92ZXJzZS5cIixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiA8SW9Jb3NIZWxwQ2lyY2xlIC8+LFxuICAgICAgICB0ZXh0OiBcIlNlIHBvZHLDoW4gYcOxYWRpciBlZmVjdG9zIGRlIHNvbmlkbyBhbCByZWFsaXphciBkZXRlcm1pbmFkYXMgYWNjaW9uZXMgY29uIGxvcyBvYmpldG9zLlwiLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXVxuICB9XG5dXG5cbmNvbnN0IGxpbmtEYXRhID0ge1xuICBsaW5rOiAnaHR0cHM6Ly9wcnVlYmEtaGFja2FjY2VzaWJpbGlkYWQub25yZW5kZXIuY29tLycsXG4gIHRleHQ6ICdPcyBkZWphbW9zIHVuIGVqZW1wbG8gc2VuY2lsbG8geSBubyBhY2Nlc2libGUgZGVsIHJldG86J1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXRvKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicmV0b1wiIHN4PXtzdHlsZXMucHJpY2luZ30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIkVsIHJldG9cIlxuICAgICAgICAgIHRpdGxlPVwiQ3JlYXIgdW4gbWluaWp1ZWdvIHRpcG8gYXZlbnR1cmEgZXNjYXBlIHJvb20gdmlydHVhbCwgY29uIHVuIGVzY2VuYXJpbyBkZWwgcXVlIGhheSBxdWUgbG9ncmFyIHNhbGlyIHJlc29sdmllbmRvIHB1enpsZXMgbcOhcyBvIG1lbm9zIHNlbmNpbGxvcy5cIlxuICAgICAgICAgIGlzV2hpdGU9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgICA8RmxleFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3BhY2thZ2VzLm1hcCgocGFja2FnZURhdGEpID0+IChcbiAgICAgICAgICAgIDxSZXRvQ2FyZCBkYXRhPXtwYWNrYWdlRGF0YX0ga2V5PXtwYWNrYWdlRGF0YS5uYW1lfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIHtsaW5rRGF0YSAmJiA8RmxleCBzeD17e1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgfX0+PFRleHQgc3g9e3sgZm9udFdlaWd0aDogJ2JvbGQnIH19PlxuICAgICAgICAgICAge2xpbmtEYXRhLnRleHR9IDxMaW5rIHBhdGg9e2xpbmtEYXRhLmxpbmt9IHRhcmdldD0nX2JsYW5rJz57bGlua0RhdGEubGlua308L0xpbms+PC9UZXh0PjwvRmxleD59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24gPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmc6IHtcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeVwiLFxuICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICAvLyBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAvLyBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgIC8vIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBcIiY6OmJlZm9yZVwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICAvLyBiYWNrZ3JvdW5kOlxuICAgICAgLy8gICBcImxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoNDIsNzIsMTI1LCAwLjMpIDUwJSwgcmdiYSg0Miw3MiwxMjUsIDAuMykgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgLy8gYmFja2dyb3VuZFNpemU6IFwiMzUwcHggMzUwcHhcIixcbiAgICAgIC8vIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICB6SW5kZXg6IDAsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/reto.js\n");

/***/ })

})