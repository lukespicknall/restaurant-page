/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Medium.ttf */ "./src/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Cherolina.ttf */ "./src/fonts/Cherolina.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Louis George Cafe.ttf */ "./src/fonts/Louis George Cafe.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Louis George Cafe Light.ttf */ "./src/fonts/Louis George Cafe Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --blue-theme: rgb(95, 113, 173);
    --tan-theme: rgb(255, 242, 227);
    --rose-theme: rgb(253, 235, 214);
}

@font-face {
    font-family: 'Robots';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
    font-family: 'fancy';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
@font-face {
    font-family: 'info1';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
@font-face {
    font-family: 'info2';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

body {
    margin: 0;
    background-color: #faf7f3;
}

#content {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 93px 1fr 46.5px;
}

#header {
    display: flex;
    justify-content: center;
    max-height: 93px;
}

#headerBox {
    display: flex;
    width: clamp(650px, 55vw, 1032px);
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 0 10px;
}

#logo {
    display: flex;
    align-items: center;
    font-family: 'fancy';
    color: var(--blue-theme);
    font-size: 80px;
    font-weight: bold
}

#nav {
    display: flex;
    gap: 25px;
    height: 25px;
}

.navBtn {
    font-family: 'info2';
    font-size: 25px;
    border: none;
    border-radius: 25px;
    background-color: transparent;
    transition: ease-out .3s;
    cursor: pointer;
}

.navBtn:hover {
    background-color: var(--tan-theme);
    box-shadow: 0px 0px 20px 20px var(--tan-theme);
}

#main {
    display: flex;
    flex-direction: column;
}
 
#footer {
    display: flex;
    justify-content: space-between;
    max-height: 46.5px;
    min-width: 650px;
    padding: 0 60px 0 60px;
}

#gitHub {
    display: flex;
    height: 100%;
    text-decoration: none;
}

#socials {
    display: flex;
    gap: 30px;
    height: 100%
}

.fa-foot {
    color: var(--blue-theme);
    font-size: 35px;
    border-radius: 25px;
    transition: ease-out .3s;
}

.fa-foot:hover {
    background-color: var(--rose-theme);
    box-shadow: 0px 0px 20px 20px var(--rose-theme);
}


/* HOME MODULE STYLE */
#home {
    display: flex;
    flex-direction: column;
    align-items: center; 
    height: 100%;
}

#cover {
    display: flex;
    
}

#coverImg {
    width: clamp(650px, 55vw, 1032px);
}

#welcome {
    display: block;
    margin: 35px 0 35px 0;
}

.welcome-text {
    font-family: 'info2';
    font-size: 23px;
    max-width: 650px;
    text-align: center;
    border-radius: 25px;
    background-color: transparent;
    transition: ease-out .3s;
}

.welcome-text:hover {
    background-color: var(--tan-theme);
    box-shadow: 0px 0px 20px 20px var(--tan-theme);
}

#wall {
    max-width: 100vw;
    min-width: 770px;
}

#wallImg {
    max-width: 100vw;
        min-width: 770px;
}

#info{
    font-family: 'info1';
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    margin: 35px 0 35px 0;
}

#address {
    display: block;
    font-size: 18px;
    margin-bottom: 20px;
}

#schedule {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 20px
}

.day {
    text-align: right;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,4CAAqC;AACzC;AACA;IACI,oBAAoB;IACpB,4CAAiC;AACrC;AACA;IACI,oBAAoB;IACpB,4CAA2C;AAC/C;AACA;IACI,oBAAoB;IACpB,4CAAkD;AACtD;;AAEA;IACI,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,wBAAwB;IACxB,eAAe;IACf;AACJ;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;IAC7B,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,SAAS;IACT;AACJ;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,+CAA+C;AACnD;;;AAGA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,wBAAwB;AAC5B;;AAEA;IACI,kCAAkC;IAClC,8CAA8C;AAClD;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;QACZ,gBAAgB;AACxB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B;AACJ;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\n    --blue-theme: rgb(95, 113, 173);\n    --tan-theme: rgb(255, 242, 227);\n    --rose-theme: rgb(253, 235, 214);\n}\n\n@font-face {\n    font-family: 'Robots';\n    src: url('./fonts/Roboto-Medium.ttf');\n}\n@font-face {\n    font-family: 'fancy';\n    src: url('./fonts/Cherolina.ttf');\n}\n@font-face {\n    font-family: 'info1';\n    src: url('./fonts/Louis\\ George\\ Cafe.ttf');\n}\n@font-face {\n    font-family: 'info2';\n    src: url('./fonts/Louis\\ George\\ Cafe\\ Light.ttf');\n}\n\nbody {\n    margin: 0;\n    background-color: #faf7f3;\n}\n\n#content {\n    display: grid;\n    min-height: 100vh;\n    grid-template-rows: 93px 1fr 46.5px;\n}\n\n#header {\n    display: flex;\n    justify-content: center;\n    max-height: 93px;\n}\n\n#headerBox {\n    display: flex;\n    width: clamp(650px, 55vw, 1032px);\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 10px 0 10px;\n}\n\n#logo {\n    display: flex;\n    align-items: center;\n    font-family: 'fancy';\n    color: var(--blue-theme);\n    font-size: 80px;\n    font-weight: bold\n}\n\n#nav {\n    display: flex;\n    gap: 25px;\n    height: 25px;\n}\n\n.navBtn {\n    font-family: 'info2';\n    font-size: 25px;\n    border: none;\n    border-radius: 25px;\n    background-color: transparent;\n    transition: ease-out .3s;\n    cursor: pointer;\n}\n\n.navBtn:hover {\n    background-color: var(--tan-theme);\n    box-shadow: 0px 0px 20px 20px var(--tan-theme);\n}\n\n#main {\n    display: flex;\n    flex-direction: column;\n}\n \n#footer {\n    display: flex;\n    justify-content: space-between;\n    max-height: 46.5px;\n    min-width: 650px;\n    padding: 0 60px 0 60px;\n}\n\n#gitHub {\n    display: flex;\n    height: 100%;\n    text-decoration: none;\n}\n\n#socials {\n    display: flex;\n    gap: 30px;\n    height: 100%\n}\n\n.fa-foot {\n    color: var(--blue-theme);\n    font-size: 35px;\n    border-radius: 25px;\n    transition: ease-out .3s;\n}\n\n.fa-foot:hover {\n    background-color: var(--rose-theme);\n    box-shadow: 0px 0px 20px 20px var(--rose-theme);\n}\n\n\n/* HOME MODULE STYLE */\n#home {\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    height: 100%;\n}\n\n#cover {\n    display: flex;\n    \n}\n\n#coverImg {\n    width: clamp(650px, 55vw, 1032px);\n}\n\n#welcome {\n    display: block;\n    margin: 35px 0 35px 0;\n}\n\n.welcome-text {\n    font-family: 'info2';\n    font-size: 23px;\n    max-width: 650px;\n    text-align: center;\n    border-radius: 25px;\n    background-color: transparent;\n    transition: ease-out .3s;\n}\n\n.welcome-text:hover {\n    background-color: var(--tan-theme);\n    box-shadow: 0px 0px 20px 20px var(--tan-theme);\n}\n\n#wall {\n    max-width: 100vw;\n    min-width: 770px;\n}\n\n#wallImg {\n    max-width: 100vw;\n        min-width: 770px;\n}\n\n#info{\n    font-family: 'info1';\n    font-weight: lighter;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    justify-content: center;\n    margin: 35px 0 35px 0;\n}\n\n#address {\n    display: block;\n    font-size: 18px;\n    margin-bottom: 20px;\n}\n\n#schedule {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 6px 20px\n}\n\n.day {\n    text-align: right;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContact = () => {
  const contact = document.createElement('div');
  contact.textContent = 'contact';
  contact.setAttribute('id', 'contact');
  return contact;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_bw_picnic_crop_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bw-picnic-crop.jpg */ "./src/images/bw-picnic-crop.jpg");
/* harmony import */ var _images_nationaal_park_veluwezoom_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/nationaal-park-veluwezoom.jpg */ "./src/images/nationaal-park-veluwezoom.jpg");



const createCover = () => {
  const cover = document.createElement('div');
  const coverImg = new Image();
  cover.setAttribute('id', 'cover');
  coverImg.setAttribute('id', 'coverImg');
  coverImg.src = _images_bw_picnic_crop_jpg__WEBPACK_IMPORTED_MODULE_0__;
  cover.appendChild(coverImg);
  return cover;
};

const createWelcome = () => {
  const welcome = document.createElement('div');
  welcome.setAttribute('id', 'welcome');
  const welcomeText = document.createElement('p');
  welcomeText.classList.add('welcome-text');
  welcomeText.textContent = 'Nestled in rolling hills and cradled by ancient wood and billowing lavender, Aterma is a nice place to have lunch. Join us for a lovely day on the grass with a picnic package of your choice. And bring any extras or compliments you like!';
  welcome.appendChild(welcomeText);
  return welcome;
};

const createWall = () => {
  const wall = document.createElement('div');
  const wallImg = new Image();
  wall.setAttribute('id', 'wall');
  wallImg.setAttribute('id', 'wallImg');
  wallImg.src = _images_nationaal_park_veluwezoom_jpg__WEBPACK_IMPORTED_MODULE_1__;
  wall.appendChild(wallImg);
  return wall;
};

const createInfo = () => {
  const info = document.createElement('div');
  const address = document.createElement('div');
  const schedule = document.createElement('div');
  info.setAttribute('id', 'info');
  address.setAttribute('id', 'address');
  schedule.setAttribute('id', 'schedule');
  address.textContent = 'BEEKHUIZENSEWEG 1, 6991 JM RHEDEN, NETHERLANDS';
  for (let i = 0; i < 7; i += 1) {
    const day = document.createElement('div');
    const hours = document.createElement('div');
    day.classList.add('day');
    hours.classList.add('hour');
    switch (i) {
      case 0:
        day.textContent = 'M O N';
        hours.textContent = '5 - 11 P';
        break;
      case 1:
        day.textContent = 'T U E S';
        hours.textContent = '5 - 11 P';
        break;
      case 2:
        day.textContent = 'W E D S';
        hours.textContent = '5 - 11 P';
        break;
      case 3:
        day.textContent = 'T H U R S';
        hours.textContent = '5 - 11 P';
        break;
      case 4:
        day.textContent = 'F R I';
        hours.textContent = '5 - 11 P';
        break;
      case 5:
        day.textContent = 'S A T';
        hours.textContent = '5 - 11 P';
        break;
      case 6:
        day.textContent = 'S U N';
        hours.textContent = 'C L O S E D';
        break;
      default:
        day.textContent = 'MON-SAT';
        hours.textContent = '5 - 11 P';
        break;
    }
    schedule.appendChild(day);
    schedule.appendChild(hours);
  }
  info.appendChild(address);
  info.appendChild(schedule);
  return info;
};

const createHome = () => {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  home.appendChild(createCover());
  home.appendChild(createWelcome());
  home.appendChild(createWall());
  home.appendChild(createInfo());
  return home;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



// import ghIcon from './images/github.svg';
// import instaIcon from './images/instagram.svg';
// import mailIcon from './images/email-outline.svg';
// import mapsIcon from './images/google-maps.svg';

// Pull our HTML tag into js
// const content = document.createElement('div');
// content.setAttribute('id', 'content');
const content = document.getElementById('content');

// Create Header div and append it to content
const createHeader = () => {
  const header = document.createElement('div');
  const headerBox = document.createElement('div');
  header.setAttribute('id', 'header');
  headerBox.setAttribute('id', 'headerBox');
  header.appendChild(headerBox);
  content.appendChild(header);
  return header;
};

const createLogo = () => {
  const headBox = document.getElementById('headerBox');
  const logo = document.createElement('div');
  logo.textContent = 'Aterma';
  logo.setAttribute('id', 'logo');
  headBox.appendChild(logo);
};

// Create Nav section of header and it's buttons, assign attributes, append
const createNav = () => {
  const headBox = document.getElementById('headerBox');
  const nav = document.createElement('div');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  nav.setAttribute('id', 'nav');
  home.setAttribute('id', 'homeBtn');
  menu.setAttribute('id', 'menuBtn');
  contact.setAttribute('id', 'contactBtn');
  home.classList.add('navBtn');
  menu.classList.add('navBtn');
  contact.classList.add('navBtn');
  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  contact.textContent = 'CONTACT';
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  headBox.appendChild(nav);
};

// Create Main div and append it to content
const createMain = () => {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  content.appendChild(main);
  return main;
};

// Create Footer div and append it to content
const createFooter = () => {
  const gitHub = document.createElement('a');
  const socials = document.createElement('div');
  gitHub.setAttribute('id', 'gitHub');
  gitHub.setAttribute('target', 'blank');
  gitHub.href = 'https://github.com/lukespicknall/restaurant-page';
  socials.setAttribute('id', 'socials');

  const ghLink = document.createElement('i');
  ghLink.classList.add('fa', 'fa-github', 'fa-foot');
  ghLink.setAttribute('aria-hidden', 'true');
  gitHub.appendChild(ghLink);

  const instaLink = document.createElement('i');
  instaLink.classList.add('fa-brands', 'fa-instagram', 'fa-foot');
  instaLink.setAttribute('aria-hidden', 'true');
  const instaShell = document.createElement('a');
  instaShell.setAttribute('target', 'blank');
  instaShell.href = 'https://www.instagram.com/explore/locations/242937426/veluwezoom-national-park/';
  instaShell.appendChild(instaLink);
  socials.appendChild(instaShell);

  const mailLink = document.createElement('i');
  mailLink.classList.add('fa-regular', 'fa-envelope', 'fa-foot');
  mailLink.setAttribute('aria-hidden', 'true');
  const mailShell = document.createElement('a');
  mailShell.setAttribute('target', 'blank');
  mailShell.href = 'https://github.com/lukespicknall/restaurant-page';
  mailShell.appendChild(mailLink);
  socials.appendChild(mailShell);

  const mapLink = document.createElement('i');
  mapLink.classList.add('fa', 'fa-location-dot', 'fa-foot');
  mapLink.setAttribute('aria-regular', 'true');
  const mapShell = document.createElement('a');
  mapShell.setAttribute('target', 'blank');
  mapShell.href = 'https://www.google.com/maps/place/Pavilion+De+Posbank/@52.0258309,6.0105784,13.09z/data=!4m14!1m7!3m6!1s0x47c7bcc9278a0a47:0x46a1476b7999402f!2sNationaal+Park+Veluwezoom!8m2!3d52.0483103!4d6.0198869!16s%2Fm%2F05m_gqg!3m5!1s0x47c7a32f28f0088f:0x905369d96e245648!8m2!3d52.029418!4d6.021811!16s%2Fg%2F1tgm22gt?entry=ttu';
  mapShell.appendChild(mapLink);
  socials.appendChild(mapShell);

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  footer.appendChild(gitHub);
  footer.appendChild(socials);
  content.appendChild(footer);
};

// Pulls the clicked navBtn page to display on div.main
const setMain = () => {
  const main = document.getElementById('main');
  const navBtn = document.querySelectorAll('.navBtn');
  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

  navBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      main.innerHTML = '';
      switch (e.target.id) {
        case 'homeBtn':
          main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
          break;
        case 'menuBtn':
          main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
          break;
        case 'contactBtn':
          main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
          break;
        default:
          main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
          break;
      }
    });
  });
};

// Pass all HTML skeleton elements to index.js
const load = () => {
  createHeader();
  createMain();
  createFooter();
  createLogo();
  createNav();
  setMain();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenu = () => {
  const menu = document.createElement('div');
  menu.textContent = 'menu';
  menu.setAttribute('id', 'menu');
  return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/fonts/Cherolina.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Cherolina.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a92877c75a7948fcdcc.ttf";

/***/ }),

/***/ "./src/fonts/Louis George Cafe Light.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/Louis George Cafe Light.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39945fcd312e86adc356.ttf";

/***/ }),

/***/ "./src/fonts/Louis George Cafe.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Louis George Cafe.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eacd87871e9a39013626.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2d7f0c01bffaa5ec8f7.ttf";

/***/ }),

/***/ "./src/images/bw-picnic-crop.jpg":
/*!***************************************!*\
  !*** ./src/images/bw-picnic-crop.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7514576e60192769bfe.jpg";

/***/ }),

/***/ "./src/images/nationaal-park-veluwezoom.jpg":
/*!**************************************************!*\
  !*** ./src/images/nationaal-park-veluwezoom.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a0cf33007e349d1a626.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./src/load.js");



(0,_load__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsbUpBQXNEO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEs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Q0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQb0I7QUFDWTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBTTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdNO0FBQ0E7QUFDTTtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBVTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBVTtBQUNyQztBQUNBO0FBQ0EsMkJBQTJCLGlEQUFVO0FBQ3JDO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQWE7QUFDeEM7QUFDQTtBQUNBLDJCQUEyQixpREFBVTtBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwSnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLOztBQUUxQixpREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DaGVyb2xpbmEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Mb3VpcyBHZW9yZ2UgQ2FmZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0xvdWlzIEdlb3JnZSBDYWZlIExpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYmx1ZS10aGVtZTogcmdiKDk1LCAxMTMsIDE3Myk7XG4gICAgLS10YW4tdGhlbWU6IHJnYigyNTUsIDI0MiwgMjI3KTtcbiAgICAtLXJvc2UtdGhlbWU6IHJnYigyNTMsIDIzNSwgMjE0KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdHMnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2luZm8xJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjdmMztcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5M3B4IDFmciA0Ni41cHg7XG59XG5cbiNoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogOTNweDtcbn1cblxuI2hlYWRlckJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogY2xhbXAoNjUwcHgsIDU1dncsIDEwMzJweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xufVxuXG4jbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnZmFuY3knO1xuICAgIGNvbG9yOiB2YXIoLS1ibHVlLXRoZW1lKTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuI25hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubmF2QnRuIHtcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdkJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFuLXRoZW1lKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjBweCB2YXIoLS10YW4tdGhlbWUpO1xufVxuXG4jbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIFxuI2Zvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWF4LWhlaWdodDogNDYuNXB4O1xuICAgIG1pbi13aWR0aDogNjUwcHg7XG4gICAgcGFkZGluZzogMCA2MHB4IDAgNjBweDtcbn1cblxuI2dpdEh1YiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jc29jaWFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbi5mYS1mb290IHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xufVxuXG4uZmEtZm9vdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tcm9zZS10aGVtZSk7XG59XG5cblxuLyogSE9NRSBNT0RVTEUgU1RZTEUgKi9cbiNob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY292ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG5cbiNjb3ZlckltZyB7XG4gICAgd2lkdGg6IGNsYW1wKDY1MHB4LCA1NXZ3LCAxMDMycHgpO1xufVxuXG4jd2VsY29tZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xufVxuXG4ud2VsY29tZS10ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuM3M7XG59XG5cbi53ZWxjb21lLXRleHQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi10aGVtZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tdGFuLXRoZW1lKTtcbn1cblxuI3dhbGwge1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWluLXdpZHRoOiA3NzBweDtcbn1cblxuI3dhbGxJbWcge1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIG1pbi13aWR0aDogNzcwcHg7XG59XG5cbiNpbmZve1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzEnO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDM1cHggMCAzNXB4IDA7XG59XG5cbiNhZGRyZXNzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3NjaGVkdWxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDZweCAyMHB4XG59XG5cbi5kYXkge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFxQztBQUN6QztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFpQztBQUNyQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEyQztBQUMvQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFrRDtBQUN0RDs7QUFFQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQywrQ0FBK0M7QUFDbkQ7OztBQUdBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtRQUNaLGdCQUFnQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibHVlLXRoZW1lOiByZ2IoOTUsIDExMywgMTczKTtcXG4gICAgLS10YW4tdGhlbWU6IHJnYigyNTUsIDI0MiwgMjI3KTtcXG4gICAgLS1yb3NlLXRoZW1lOiByZ2IoMjUzLCAyMzUsIDIxNCk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90cyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZhbmN5JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ2hlcm9saW5hLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmUudHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTG91aXNcXFxcIEdlb3JnZVxcXFwgQ2FmZVxcXFwgTGlnaHQudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY3ZjM7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTNweCAxZnIgNDYuNXB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDkzcHg7XFxufVxcblxcbiNoZWFkZXJCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY2xhbXAoNjUwcHgsIDU1dncsIDEwMzJweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmFuY3knO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuXFxuI25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ubmF2QnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tdGhlbWUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjBweCB2YXIoLS10YW4tdGhlbWUpO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiBcXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtaGVpZ2h0OiA0Ni41cHg7XFxuICAgIG1pbi13aWR0aDogNjUwcHg7XFxuICAgIHBhZGRpbmc6IDAgNjBweCAwIDYwcHg7XFxufVxcblxcbiNnaXRIdWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI3NvY2lhbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGhlaWdodDogMTAwJVxcbn1cXG5cXG4uZmEtZm9vdCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLXRoZW1lKTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuM3M7XFxufVxcblxcbi5mYS1mb290OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyMHB4IHZhcigtLXJvc2UtdGhlbWUpO1xcbn1cXG5cXG5cXG4vKiBIT01FIE1PRFVMRSBTVFlMRSAqL1xcbiNob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvdmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxufVxcblxcbiNjb3ZlckltZyB7XFxuICAgIHdpZHRoOiBjbGFtcCg2NTBweCwgNTV2dywgMTAzMnB4KTtcXG59XFxuXFxuI3dlbGNvbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFuLXRoZW1lKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tdGFuLXRoZW1lKTtcXG59XFxuXFxuI3dhbGwge1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4td2lkdGg6IDc3MHB4O1xcbn1cXG5cXG4jd2FsbEltZyB7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgICAgICBtaW4td2lkdGg6IDc3MHB4O1xcbn1cXG5cXG4jaW5mb3tcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMSc7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMzVweCAwIDM1cHggMDtcXG59XFxuXFxuI2FkZHJlc3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jc2NoZWR1bGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogNnB4IDIwcHhcXG59XFxuXFxuLmRheSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgcmV0dXJuIGNvbnRhY3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0O1xuIiwiaW1wb3J0IHBpY25pYyBmcm9tICcuL2ltYWdlcy9idy1waWNuaWMtY3JvcC5qcGcnO1xuaW1wb3J0IHBhcmtQaWMgZnJvbSAnLi9pbWFnZXMvbmF0aW9uYWFsLXBhcmstdmVsdXdlem9vbS5qcGcnO1xuXG5jb25zdCBjcmVhdGVDb3ZlciA9ICgpID0+IHtcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY292ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY292ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb3ZlcicpO1xuICBjb3ZlckltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvdmVySW1nJyk7XG4gIGNvdmVySW1nLnNyYyA9IHBpY25pYztcbiAgY292ZXIuYXBwZW5kQ2hpbGQoY292ZXJJbWcpO1xuICByZXR1cm4gY292ZXI7XG59O1xuXG5jb25zdCBjcmVhdGVXZWxjb21lID0gKCkgPT4ge1xuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlbGNvbWUuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWxjb21lJyk7XG4gIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lLXRleHQnKTtcbiAgd2VsY29tZVRleHQudGV4dENvbnRlbnQgPSAnTmVzdGxlZCBpbiByb2xsaW5nIGhpbGxzIGFuZCBjcmFkbGVkIGJ5IGFuY2llbnQgd29vZCBhbmQgYmlsbG93aW5nIGxhdmVuZGVyLCBBdGVybWEgaXMgYSBuaWNlIHBsYWNlIHRvIGhhdmUgbHVuY2guIEpvaW4gdXMgZm9yIGEgbG92ZWx5IGRheSBvbiB0aGUgZ3Jhc3Mgd2l0aCBhIHBpY25pYyBwYWNrYWdlIG9mIHlvdXIgY2hvaWNlLiBBbmQgYnJpbmcgYW55IGV4dHJhcyBvciBjb21wbGltZW50cyB5b3UgbGlrZSEnO1xuICB3ZWxjb21lLmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcbiAgcmV0dXJuIHdlbGNvbWU7XG59O1xuXG5jb25zdCBjcmVhdGVXYWxsID0gKCkgPT4ge1xuICBjb25zdCB3YWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHdhbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgd2FsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhbGwnKTtcbiAgd2FsbEltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhbGxJbWcnKTtcbiAgd2FsbEltZy5zcmMgPSBwYXJrUGljO1xuICB3YWxsLmFwcGVuZENoaWxkKHdhbGxJbWcpO1xuICByZXR1cm4gd2FsbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mbycpO1xuICBhZGRyZXNzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkcmVzcycpO1xuICBzY2hlZHVsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NjaGVkdWxlJyk7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnQkVFS0hVSVpFTlNFV0VHIDEsIDY5OTEgSk0gUkhFREVOLCBORVRIRVJMQU5EUyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cicpO1xuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnTSBPIE4nO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gMTEgUCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnVCBVIEUgUyc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdXIEUgRCBTJztcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSAnNSAtIDExIFAnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gJ1QgSCBVIFIgUyc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdGIFIgSSc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdTIEEgVCc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdTIFUgTic7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJ0MgTCBPIFMgRSBEJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnTU9OLVNBVCc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKGRheSk7XG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICB9XG4gIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuICByZXR1cm4gaW5mbztcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVDb3ZlcigpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVXZWxjb21lKCkpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVdhbGwoKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgcmV0dXJuIGhvbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuLy8gaW1wb3J0IGdoSWNvbiBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJztcbi8vIGltcG9ydCBpbnN0YUljb24gZnJvbSAnLi9pbWFnZXMvaW5zdGFncmFtLnN2Zyc7XG4vLyBpbXBvcnQgbWFpbEljb24gZnJvbSAnLi9pbWFnZXMvZW1haWwtb3V0bGluZS5zdmcnO1xuLy8gaW1wb3J0IG1hcHNJY29uIGZyb20gJy4vaW1hZ2VzL2dvb2dsZS1tYXBzLnN2Zyc7XG5cbi8vIFB1bGwgb3VyIEhUTUwgdGFnIGludG8ganNcbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gQ3JlYXRlIEhlYWRlciBkaXYgYW5kIGFwcGVuZCBpdCB0byBjb250ZW50XG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGhlYWRlckJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlckJveCcpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQm94KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlTG9nbyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJCb3gnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2dvLnRleHRDb250ZW50ID0gJ0F0ZXJtYSc7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gIGhlYWRCb3guYXBwZW5kQ2hpbGQobG9nbyk7XG59O1xuXG4vLyBDcmVhdGUgTmF2IHNlY3Rpb24gb2YgaGVhZGVyIGFuZCBpdCdzIGJ1dHRvbnMsIGFzc2lnbiBhdHRyaWJ1dGVzLCBhcHBlbmRcbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJCb3gnKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZUJ0bicpO1xuICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUJ0bicpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEJ0bicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdkJ0bicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ25hdkJ0bicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ25hdkJ0bicpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICBtZW51LnRleHRDb250ZW50ID0gJ01FTlUnO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBoZWFkQm94LmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG4vLyBDcmVhdGUgTWFpbiBkaXYgYW5kIGFwcGVuZCBpdCB0byBjb250ZW50XG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIHJldHVybiBtYWluO1xufTtcblxuLy8gQ3JlYXRlIEZvb3RlciBkaXYgYW5kIGFwcGVuZCBpdCB0byBjb250ZW50XG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdpdEh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3Qgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnaXRIdWIuc2V0QXR0cmlidXRlKCdpZCcsICdnaXRIdWInKTtcbiAgZ2l0SHViLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ2JsYW5rJyk7XG4gIGdpdEh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9sdWtlc3BpY2tuYWxsL3Jlc3RhdXJhbnQtcGFnZSc7XG4gIHNvY2lhbHMuc2V0QXR0cmlidXRlKCdpZCcsICdzb2NpYWxzJyk7XG5cbiAgY29uc3QgZ2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBnaExpbmsuY2xhc3NMaXN0LmFkZCgnZmEnLCAnZmEtZ2l0aHViJywgJ2ZhLWZvb3QnKTtcbiAgZ2hMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICBnaXRIdWIuYXBwZW5kQ2hpbGQoZ2hMaW5rKTtcblxuICBjb25zdCBpbnN0YUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGluc3RhTGluay5jbGFzc0xpc3QuYWRkKCdmYS1icmFuZHMnLCAnZmEtaW5zdGFncmFtJywgJ2ZhLWZvb3QnKTtcbiAgaW5zdGFMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICBjb25zdCBpbnN0YVNoZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBpbnN0YVNoZWxsLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ2JsYW5rJyk7XG4gIGluc3RhU2hlbGwuaHJlZiA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2V4cGxvcmUvbG9jYXRpb25zLzI0MjkzNzQyNi92ZWx1d2V6b29tLW5hdGlvbmFsLXBhcmsvJztcbiAgaW5zdGFTaGVsbC5hcHBlbmRDaGlsZChpbnN0YUxpbmspO1xuICBzb2NpYWxzLmFwcGVuZENoaWxkKGluc3RhU2hlbGwpO1xuXG4gIGNvbnN0IG1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtYWlsTGluay5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLWVudmVsb3BlJywgJ2ZhLWZvb3QnKTtcbiAgbWFpbExpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGNvbnN0IG1haWxTaGVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbWFpbFNoZWxsLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ2JsYW5rJyk7XG4gIG1haWxTaGVsbC5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9sdWtlc3BpY2tuYWxsL3Jlc3RhdXJhbnQtcGFnZSc7XG4gIG1haWxTaGVsbC5hcHBlbmRDaGlsZChtYWlsTGluayk7XG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQobWFpbFNoZWxsKTtcblxuICBjb25zdCBtYXBMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtYXBMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhJywgJ2ZhLWxvY2F0aW9uLWRvdCcsICdmYS1mb290Jyk7XG4gIG1hcExpbmsuc2V0QXR0cmlidXRlKCdhcmlhLXJlZ3VsYXInLCAndHJ1ZScpO1xuICBjb25zdCBtYXBTaGVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbWFwU2hlbGwuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnYmxhbmsnKTtcbiAgbWFwU2hlbGwuaHJlZiA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvUGF2aWxpb24rRGUrUG9zYmFuay9ANTIuMDI1ODMwOSw2LjAxMDU3ODQsMTMuMDl6L2RhdGE9ITRtMTQhMW03ITNtNiExczB4NDdjN2JjYzkyNzhhMGE0NzoweDQ2YTE0NzZiNzk5OTQwMmYhMnNOYXRpb25hYWwrUGFyaytWZWx1d2V6b29tIThtMiEzZDUyLjA0ODMxMDMhNGQ2LjAxOTg4NjkhMTZzJTJGbSUyRjA1bV9ncWchM201ITFzMHg0N2M3YTMyZjI4ZjAwODhmOjB4OTA1MzY5ZDk2ZTI0NTY0OCE4bTIhM2Q1Mi4wMjk0MTghNGQ2LjAyMTgxMSExNnMlMkZnJTJGMXRnbTIyZ3Q/ZW50cnk9dHR1JztcbiAgbWFwU2hlbGwuYXBwZW5kQ2hpbGQobWFwTGluayk7XG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQobWFwU2hlbGwpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1Yik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChzb2NpYWxzKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuLy8gUHVsbHMgdGhlIGNsaWNrZWQgbmF2QnRuIHBhZ2UgdG8gZGlzcGxheSBvbiBkaXYubWFpblxuY29uc3Qgc2V0TWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZCdG4nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuXG4gIG5hdkJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY2FzZSAnaG9tZUJ0bic6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51QnRuJzpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3RCdG4nOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gUGFzcyBhbGwgSFRNTCBza2VsZXRvbiBlbGVtZW50cyB0byBpbmRleC5qc1xuY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZU1haW4oKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG4gIGNyZWF0ZUxvZ28oKTtcbiAgY3JlYXRlTmF2KCk7XG4gIHNldE1haW4oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWQ7XG4iLCJjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnbWVudSc7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gIHJldHVybiBtZW51O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQnO1xuXG5sb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=