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
    --body-theme: #faf7f3;
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

/* ------------MAIN HTML BOXES------------ */
body {
    margin: 0;
    background-color: var(--body-theme);
}

#content {
    display: grid;
    min-height: 100vh;
    max-width: 100vw;
    grid-template-rows: 93px 1fr 46.5px;
}

/* ------------STATIC PAGE STLYES------------ */
/* HEAD STYLES */
#header {
    display: flex;
    justify-content: center;
    max-height: 93px;
    width: 100%
}

#headerBox {
    display: flex;
    width: clamp(500px, 55vw, 1032px);
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 0 10px;
}

#logo,
#infoLogo {
    display: flex;
    align-items: center;
    font-family: 'fancy';
    color: var(--blue-theme);
    font-size: 80px;
    font-weight: bold;
    transition: ease-out .3s;
}

#infoLogo {
    justify-content: center;
    padding-bottom: 20px;
}

#nav {
    display: flex;
    gap: 25px;
    height: 25px;
}

.navBtn {
    font-family: 'info2';
    font-size: 25px;
    color: black;
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

/* MAIN SECTION */
#main {
    display: flex;
    flex-direction: column;
}
 
/* FOOT SECTION */
#footer {
    display: flex;
    justify-content: space-between;
    max-height: 46.5px;
    min-width: 650px;
}

#gitHub {
    display: flex;
    height: 100%;
    text-decoration: none;
    margin: 0 0 0 60px;
}

#socials {
    display: flex;
    gap: 30px;
    height: 100%;
    margin: 0 60px 0 0;
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


/* ------------HOME MODULE STYLE------------ */
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
    width: clamp(500px, 55vw, 1032px);
}

#welcome {
    display: flex;
    justify-content: center;
    margin: 35px 0 35px 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 40px 50px 50px var(--body-theme);
    transition: ease-out .3s;
}

.welcome-text {
    font-family: 'info2';
    font-size: 23px;
    max-width: 650px;
    text-align: center;
    border-radius: 65px;
    background-color: transparent;
    transition: ease-out .3s;
}

.welcome-text:hover {
    background-color: var(--tan-theme);
    box-shadow: 0px 0px 20px 20px var(--tan-theme);
}

#wall {
    max-width: 100vw;
    min-width: 320px;
    transition: ease-in-out .3s;
}

#wallImg {
    max-width: 100%;
    min-width: 320px;
    min-width: 320px;
    transition: ease-in-out .3s;
}

#info{
    font-family: 'info1';
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    padding: 35px 0 40px 0;
    width: 100%;
    height: 100%;
    /* background-color: var(--rose-theme); */
}

#address {
    display: block;
    align-self: center;
    font-size: 18px;
    margin-bottom: 20px;
    transition: ease-out .3s;
}

#schedule {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px 20px
}

.day {
    text-align: right;
}

/* ------------MENU STYLE------------ */
#menu {
    display: flex;
    flex-direction: column;
    align-items: center; 
    height: 100%;
}

#menu-list {
    width: clamp(650px, 55vw, 1032px);
    margin: 0 0 60px 0;
}

.menu-item-even,
.menu-item-odd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 300px;
    transition: ease-in-out .3s;
}

.menu-item-even {
    background-color: var(--body-theme);
    padding: 0 20px 0 0;
}

.menu-item-odd {
    background-color: var(--rose-theme);
    padding: 0 25px 0 25px;
}

.menu-image {
    max-height: 250px;
    transition: ease-in-out .3s;
}
.item-info{
    font-family: 'info2';
    padding: 0 20px 0 0;
    width: 45%;
    transition: ease-in-out .3s;
}

.item-title {
    display: block;
    font-size: 25px;
    font-weight: bold;
    margin: 0 0 20px 0;
    transition: ease-in-out .3s;
}

.menu-description {
    display: flex;
    font-size: 20px;
    align-items: center;
    transition: ease-in-out .3s;

}

/* BREAK */
/* BREAK */

/* ------------NARROWER------------ */
@media only screen and (max-width: 1000px) {
    /* PAGE */
    #headerBox {
        width: clamp(400px, 55vw, 1032px);
    }
    #logo,
    #infoLogo {
        font-size: 70px;
    }
    #nav {
        gap: 8px;
    }
    .navBtn {
        font-size: 22px;
    }

     /* HOME */
    #coverImg {
        width: clamp(400px, 55vw, 1032px);
    }
    #footer {
        min-width: 100%;
    }
    .welcome-text {
        font-size: 20px;
        width: clamp(399px, 55vw, 550px);
    }
    #address {
        font-size: 16px;
    }

    /* MENU */

}


/* ------------MOBILE------------ */
@media only screen and (max-width: 800px) { 
    /* PAGE */
    #content {
        grid-template-rows: 100px 1fr 46.5px;
    }

    #header {
        max-height: 100px;
        align-items: flex-start;
    }
    #headerBox {
        flex-direction: column;
        width: clamp(300px, 55vw, 1032px);
    }
    #logo {
        font-size: 3.6em;
    }
    .navBtn {
        font-size: 20px;
     }
    .navBtn:hover {
        box-shadow: 0px 0px 10px 10px var(--tan-theme);
    }
    #nav {
        gap: 3px;
    }
    #gitHub {
        margin: 0 0 0 20px;
    }

    #socials {
        margin: 0 20px 0 0;
    }
    .fa-foot:hover {
        background-color: var(--rose-theme);
        box-shadow: 0px 0px 8px 8px var(--rose-theme);
    }

    /* HOME */
    #coverImg {
        width: clamp(320px, 55vw, 1032px);
    }
    .welcome-text {
        font-size: 18px;
        width: clamp(300px, 55vw, 1032px);
        min-width: 300px;
    }
    #welcome {
        box-shadow: 0 40px 25px 25px var(--body-theme);
    }
    
    #address {
        font-size: 14px;
    }

    /* MENU */
    #menu-list {
        width: 100%
    }
    .menu-item-even,
    .menu-item-odd {
        justify-content: center;
        height: 200px;
        padding: 0 8px 0 8px;
        margin: 0 0 15px 0;
        gap: 0 15px;
    }
    .menu-image {
    width: clamp( 130px, 40%, 250px);
    }
    .item-info{
    font-family: 'info2';
    padding: 0 0 0 0;
    width: 60%
    }
    .menu-description {
    font-size: 16px;
    width: clamp( 130px, 100%, 460px);
    }
    .item-title {
        font-size: 18px;
        margin: 0 0 0 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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,eAAe;IACnB;IACA;QACI,QAAQ;IACZ;IACA;QACI,eAAe;IACnB;;KAEC,SAAS;IACV;QACI,iCAAiC;IACrC;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,gCAAgC;IACpC;IACA;QACI,eAAe;IACnB;;IAEA,SAAS;;AAEb;;;AAGA,mCAAmC;AACnC;IACI,SAAS;IACT;QACI,oCAAoC;IACxC;;IAEA;QACI,iBAAiB;QACjB,uBAAuB;IAC3B;IACA;QACI,sBAAsB;QACtB,iCAAiC;IACrC;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;KAClB;IACD;QACI,8CAA8C;IAClD;IACA;QACI,QAAQ;IACZ;IACA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;IACA;QACI,mCAAmC;QACnC,6CAA6C;IACjD;;IAEA,SAAS;IACT;QACI,iCAAiC;IACrC;IACA;QACI,eAAe;QACf,iCAAiC;QACjC,gBAAgB;IACpB;IACA;QACI,8CAA8C;IAClD;;IAEA;QACI,eAAe;IACnB;;IAEA,SAAS;IACT;QACI;IACJ;IACA;;QAEI,uBAAuB;QACvB,aAAa;QACb,oBAAoB;QACpB,kBAAkB;QAClB,WAAW;IACf;IACA;IACA,gCAAgC;IAChC;IACA;IACA,oBAAoB;IACpB,gBAAgB;IAChB;IACA;IACA;IACA,eAAe;IACf,iCAAiC;IACjC;IACA;QACI,eAAe;QACf,eAAe;IACnB;AACJ","sourcesContent":[":root {\n    --body-theme: #faf7f3;\n    --blue-theme: rgb(95, 113, 173);\n    --tan-theme: rgb(255, 242, 227);\n    --rose-theme: rgb(253, 235, 214);\n}\n\n@font-face {\n    font-family: 'Robots';\n    src: url('./fonts/Roboto-Medium.ttf');\n}\n@font-face {\n    font-family: 'fancy';\n    src: url('./fonts/Cherolina.ttf');\n}\n@font-face {\n    font-family: 'info1';\n    src: url('./fonts/Louis\\ George\\ Cafe.ttf');\n}\n@font-face {\n    font-family: 'info2';\n    src: url('./fonts/Louis\\ George\\ Cafe\\ Light.ttf');\n}\n\n/* ------------MAIN HTML BOXES------------ */\nbody {\n    margin: 0;\n    background-color: var(--body-theme);\n}\n\n#content {\n    display: grid;\n    min-height: 100vh;\n    max-width: 100vw;\n    grid-template-rows: 93px 1fr 46.5px;\n}\n\n/* ------------STATIC PAGE STLYES------------ */\n/* HEAD STYLES */\n#header {\n    display: flex;\n    justify-content: center;\n    max-height: 93px;\n    width: 100%\n}\n\n#headerBox {\n    display: flex;\n    width: clamp(500px, 55vw, 1032px);\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 10px 0 10px;\n}\n\n#logo,\n#infoLogo {\n    display: flex;\n    align-items: center;\n    font-family: 'fancy';\n    color: var(--blue-theme);\n    font-size: 80px;\n    font-weight: bold;\n    transition: ease-out .3s;\n}\n\n#infoLogo {\n    justify-content: center;\n    padding-bottom: 20px;\n}\n\n#nav {\n    display: flex;\n    gap: 25px;\n    height: 25px;\n}\n\n.navBtn {\n    font-family: 'info2';\n    font-size: 25px;\n    color: black;\n    border: none;\n    border-radius: 25px;\n    background-color: transparent;\n    transition: ease-out .3s;\n    cursor: pointer;\n}\n\n.navBtn:hover {\n    background-color: var(--tan-theme);\n    box-shadow: 0px 0px 20px 20px var(--tan-theme);\n}\n\n/* MAIN SECTION */\n#main {\n    display: flex;\n    flex-direction: column;\n}\n \n/* FOOT SECTION */\n#footer {\n    display: flex;\n    justify-content: space-between;\n    max-height: 46.5px;\n    min-width: 650px;\n}\n\n#gitHub {\n    display: flex;\n    height: 100%;\n    text-decoration: none;\n    margin: 0 0 0 60px;\n}\n\n#socials {\n    display: flex;\n    gap: 30px;\n    height: 100%;\n    margin: 0 60px 0 0;\n}\n\n.fa-foot {\n    color: var(--blue-theme);\n    font-size: 35px;\n    border-radius: 25px;\n    transition: ease-out .3s;\n}\n\n.fa-foot:hover {\n    background-color: var(--rose-theme);\n    box-shadow: 0px 0px 20px 20px var(--rose-theme);\n}\n\n\n/* ------------HOME MODULE STYLE------------ */\n#home {\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    height: 100%;\n}\n\n#cover {\n    display: flex;\n    \n}\n\n#coverImg {\n    width: clamp(500px, 55vw, 1032px);\n}\n\n#welcome {\n    display: flex;\n    justify-content: center;\n    margin: 35px 0 35px 0;\n    width: 100%;\n    z-index: 1;\n    box-shadow: 0 40px 50px 50px var(--body-theme);\n    transition: ease-out .3s;\n}\n\n.welcome-text {\n    font-family: 'info2';\n    font-size: 23px;\n    max-width: 650px;\n    text-align: center;\n    border-radius: 65px;\n    background-color: transparent;\n    transition: ease-out .3s;\n}\n\n.welcome-text:hover {\n    background-color: var(--tan-theme);\n    box-shadow: 0px 0px 20px 20px var(--tan-theme);\n}\n\n#wall {\n    max-width: 100vw;\n    min-width: 320px;\n    transition: ease-in-out .3s;\n}\n\n#wallImg {\n    max-width: 100%;\n    min-width: 320px;\n    min-width: 320px;\n    transition: ease-in-out .3s;\n}\n\n#info{\n    font-family: 'info1';\n    font-weight: lighter;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    justify-content: center;\n    padding: 35px 0 40px 0;\n    width: 100%;\n    height: 100%;\n    /* background-color: var(--rose-theme); */\n}\n\n#address {\n    display: block;\n    align-self: center;\n    font-size: 18px;\n    margin-bottom: 20px;\n    transition: ease-out .3s;\n}\n\n#schedule {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 6px 20px\n}\n\n.day {\n    text-align: right;\n}\n\n/* ------------MENU STYLE------------ */\n#menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    height: 100%;\n}\n\n#menu-list {\n    width: clamp(650px, 55vw, 1032px);\n    margin: 0 0 60px 0;\n}\n\n.menu-item-even,\n.menu-item-odd {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 100%;\n    height: 300px;\n    transition: ease-in-out .3s;\n}\n\n.menu-item-even {\n    background-color: var(--body-theme);\n    padding: 0 20px 0 0;\n}\n\n.menu-item-odd {\n    background-color: var(--rose-theme);\n    padding: 0 25px 0 25px;\n}\n\n.menu-image {\n    max-height: 250px;\n    transition: ease-in-out .3s;\n}\n.item-info{\n    font-family: 'info2';\n    padding: 0 20px 0 0;\n    width: 45%;\n    transition: ease-in-out .3s;\n}\n\n.item-title {\n    display: block;\n    font-size: 25px;\n    font-weight: bold;\n    margin: 0 0 20px 0;\n    transition: ease-in-out .3s;\n}\n\n.menu-description {\n    display: flex;\n    font-size: 20px;\n    align-items: center;\n    transition: ease-in-out .3s;\n\n}\n\n/* BREAK */\n/* BREAK */\n\n/* ------------NARROWER------------ */\n@media only screen and (max-width: 1000px) {\n    /* PAGE */\n    #headerBox {\n        width: clamp(400px, 55vw, 1032px);\n    }\n    #logo,\n    #infoLogo {\n        font-size: 70px;\n    }\n    #nav {\n        gap: 8px;\n    }\n    .navBtn {\n        font-size: 22px;\n    }\n\n     /* HOME */\n    #coverImg {\n        width: clamp(400px, 55vw, 1032px);\n    }\n    #footer {\n        min-width: 100%;\n    }\n    .welcome-text {\n        font-size: 20px;\n        width: clamp(399px, 55vw, 550px);\n    }\n    #address {\n        font-size: 16px;\n    }\n\n    /* MENU */\n\n}\n\n\n/* ------------MOBILE------------ */\n@media only screen and (max-width: 800px) { \n    /* PAGE */\n    #content {\n        grid-template-rows: 100px 1fr 46.5px;\n    }\n\n    #header {\n        max-height: 100px;\n        align-items: flex-start;\n    }\n    #headerBox {\n        flex-direction: column;\n        width: clamp(300px, 55vw, 1032px);\n    }\n    #logo {\n        font-size: 3.6em;\n    }\n    .navBtn {\n        font-size: 20px;\n     }\n    .navBtn:hover {\n        box-shadow: 0px 0px 10px 10px var(--tan-theme);\n    }\n    #nav {\n        gap: 3px;\n    }\n    #gitHub {\n        margin: 0 0 0 20px;\n    }\n\n    #socials {\n        margin: 0 20px 0 0;\n    }\n    .fa-foot:hover {\n        background-color: var(--rose-theme);\n        box-shadow: 0px 0px 8px 8px var(--rose-theme);\n    }\n\n    /* HOME */\n    #coverImg {\n        width: clamp(320px, 55vw, 1032px);\n    }\n    .welcome-text {\n        font-size: 18px;\n        width: clamp(300px, 55vw, 1032px);\n        min-width: 300px;\n    }\n    #welcome {\n        box-shadow: 0 40px 25px 25px var(--body-theme);\n    }\n    \n    #address {\n        font-size: 14px;\n    }\n\n    /* MENU */\n    #menu-list {\n        width: 100%\n    }\n    .menu-item-even,\n    .menu-item-odd {\n        justify-content: center;\n        height: 200px;\n        padding: 0 8px 0 8px;\n        margin: 0 0 15px 0;\n        gap: 0 15px;\n    }\n    .menu-image {\n    width: clamp( 130px, 40%, 250px);\n    }\n    .item-info{\n    font-family: 'info2';\n    padding: 0 0 0 0;\n    width: 60%\n    }\n    .menu-description {\n    font-size: 16px;\n    width: clamp( 130px, 100%, 460px);\n    }\n    .item-title {\n        font-size: 18px;\n        margin: 0 0 0 0;\n    }\n}"],"sourceRoot":""}]);
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
  const infoLogo = document.createElement('div');
  infoLogo.textContent = 'Aterma';
  infoLogo.setAttribute('id', 'infoLogo');
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
  info.appendChild(infoLogo);
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
/* harmony import */ var _images_pinot_pack_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pinot-pack.jpg */ "./src/images/pinot-pack.jpg");
/* harmony import */ var _images_snack_pack_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/snack-pack.jpg */ "./src/images/snack-pack.jpg");
/* harmony import */ var _images_taco_pack_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/taco-pack.jpg */ "./src/images/taco-pack.jpg");
/* harmony import */ var _images_fruit_pack_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fruit-pack.jpg */ "./src/images/fruit-pack.jpg");
/* harmony import */ var _images_sandwich_pack_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sandwich-pack.jpg */ "./src/images/sandwich-pack.jpg");






const createMenulist = () => {
  const menuList = document.createElement('div');
  menuList.setAttribute('id', 'menu-list');

  const menuItemEven = (a, b, c) => {
    const item = document.createElement('div');
    item.classList.add('menu-item-even');
    const menuImage = new Image();
    menuImage.src = a;
    menuImage.classList.add('menu-image');
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = b;
    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-description');
    menuDescription.textContent = c;
    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(menuDescription);
    item.appendChild(menuImage);
    item.appendChild(itemInfo);
    return item;
  };

  const menuItemOdd = (a, b, c) => {
    const item = document.createElement('div');
    item.classList.add('menu-item-odd');
    const menuImage = new Image();
    menuImage.src = a;
    menuImage.classList.add('menu-image');
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = b;
    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-description');
    menuDescription.textContent = c;
    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(menuDescription);
    item.appendChild(itemInfo);
    item.appendChild(menuImage);
    return item;
  };

  const sandwich = menuItemEven(_images_sandwich_pack_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Sandwich Picnic', 'The go-to. Smoked beef and pork tenderloin sandwiches. Charcuterie board with unpasteurized goats milk cheese, apricot and gerkin. A carafe of our house lager.');
  const pinot = menuItemOdd(_images_pinot_pack_jpg__WEBPACK_IMPORTED_MODULE_0__, 'The Pinot Pack', 'Our pinot pack is perfect for a more tradional spread. Luscious figs and grapes with creamy cows milk cheese. A bottle of Pinot Noir.');
  const taco = menuItemEven(_images_taco_pack_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Taco Picnic', 'NEW! Our Taco picnic is the perpect pick for a splash of summer. Braised chiken tacos with lime and jalepeno. Tequila shots with fresh strawberry and lime.');
  const fruit = menuItemOdd(_images_fruit_pack_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Fruit and Rose', 'Looking for something light and elegant? The fruit and rose picnic is where its at. Apple, watermelon and rose.');
  const snack = menuItemEven(_images_snack_pack_jpg__WEBPACK_IMPORTED_MODULE_1__, 'The Snack Pack', 'Just need something to nibble while you chew your grapes? Salty pretzels, fresh baked cookies, and strawberry.');
  menuList.appendChild(sandwich);
  menuList.appendChild(pinot);
  menuList.appendChild(taco);
  menuList.appendChild(fruit);
  menuList.appendChild(snack);
  return menuList;
};

const createMenu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.appendChild(createMenulist());
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

/***/ "./src/images/fruit-pack.jpg":
/*!***********************************!*\
  !*** ./src/images/fruit-pack.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91b0189a3d9b07b93aed.jpg";

/***/ }),

/***/ "./src/images/nationaal-park-veluwezoom.jpg":
/*!**************************************************!*\
  !*** ./src/images/nationaal-park-veluwezoom.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a0cf33007e349d1a626.jpg";

/***/ }),

/***/ "./src/images/pinot-pack.jpg":
/*!***********************************!*\
  !*** ./src/images/pinot-pack.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8be285468d6c0c2cfd2d.jpg";

/***/ }),

/***/ "./src/images/sandwich-pack.jpg":
/*!**************************************!*\
  !*** ./src/images/sandwich-pack.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47e5ac52fe54fa3913d2.jpg";

/***/ }),

/***/ "./src/images/snack-pack.jpg":
/*!***********************************!*\
  !*** ./src/images/snack-pack.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6df9a81d8eca3fad4845.jpg";

/***/ }),

/***/ "./src/images/taco-pack.jpg":
/*!**********************************!*\
  !*** ./src/images/taco-pack.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7679c1a57fa94598b7c1.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsbUpBQXNEO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sVUFBVSxXQUFXLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxN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QUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7O0FBRTFCLGlEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NoZXJvbGluYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0xvdWlzIEdlb3JnZSBDYWZlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvTG91aXMgR2VvcmdlIENhZmUgTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ib2R5LXRoZW1lOiAjZmFmN2YzO1xuICAgIC0tYmx1ZS10aGVtZTogcmdiKDk1LCAxMTMsIDE3Myk7XG4gICAgLS10YW4tdGhlbWU6IHJnYigyNTUsIDI0MiwgMjI3KTtcbiAgICAtLXJvc2UtdGhlbWU6IHJnYigyNTMsIDIzNSwgMjE0KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdHMnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2luZm8xJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4vKiAtLS0tLS0tLS0tLS1NQUlOIEhUTUwgQk9YRVMtLS0tLS0tLS0tLS0gKi9cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LXRoZW1lKTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkzcHggMWZyIDQ2LjVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tU1RBVElDIFBBR0UgU1RMWUVTLS0tLS0tLS0tLS0tICovXG4vKiBIRUFEIFNUWUxFUyAqL1xuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiA5M3B4O1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbiNoZWFkZXJCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1NXZ3LCAxMDMycHgpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cblxuI2xvZ28sXG4jaW5mb0xvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ2ZhbmN5JztcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbn1cblxuI2luZm9Mb2dvIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuI25hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubmF2QnRuIHtcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi10aGVtZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tdGFuLXRoZW1lKTtcbn1cblxuLyogTUFJTiBTRUNUSU9OICovXG4jbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIFxuLyogRk9PVCBTRUNUSU9OICovXG4jZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXgtaGVpZ2h0OiA0Ni41cHg7XG4gICAgbWluLXdpZHRoOiA2NTBweDtcbn1cblxuI2dpdEh1YiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAwIDAgNjBweDtcbn1cblxuI3NvY2lhbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgNjBweCAwIDA7XG59XG5cbi5mYS1mb290IHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xufVxuXG4uZmEtZm9vdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tcm9zZS10aGVtZSk7XG59XG5cblxuLyogLS0tLS0tLS0tLS0tSE9NRSBNT0RVTEUgU1RZTEUtLS0tLS0tLS0tLS0gKi9cbiNob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY292ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG5cbiNjb3ZlckltZyB7XG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1NXZ3LCAxMDMycHgpO1xufVxuXG4jd2VsY29tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDM1cHggMCAzNXB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAwIDQwcHggNTBweCA1MHB4IHZhcigtLWJvZHktdGhlbWUpO1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbn1cblxuLndlbGNvbWUtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDY1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xufVxuXG4ud2VsY29tZS10ZXh0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tdGhlbWUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyMHB4IHZhcigtLXRhbi10aGVtZSk7XG59XG5cbiN3YWxsIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xufVxuXG4jd2FsbEltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XG59XG5cbiNpbmZve1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzEnO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzNXB4IDAgNDBweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTsgKi9cbn1cblxuI2FkZHJlc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuM3M7XG59XG5cbiNzY2hlZHVsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA2cHggMjBweFxufVxuXG4uZGF5IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogLS0tLS0tLS0tLS0tTUVOVSBTVFlMRS0tLS0tLS0tLS0tLSAqL1xuI21lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtZW51LWxpc3Qge1xuICAgIHdpZHRoOiBjbGFtcCg2NTBweCwgNTV2dywgMTAzMnB4KTtcbiAgICBtYXJnaW46IDAgMCA2MHB4IDA7XG59XG5cbi5tZW51LWl0ZW0tZXZlbixcbi5tZW51LWl0ZW0tb2RkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cblxuLm1lbnUtaXRlbS1ldmVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LXRoZW1lKTtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuXG4ubWVudS1pdGVtLW9kZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XG4gICAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcbn1cblxuLm1lbnUtaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cbi5pdGVtLWluZm97XG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XG4gICAgcGFkZGluZzogMCAyMHB4IDAgMDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cblxuLml0ZW0tdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xufVxuXG4ubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XG5cbn1cblxuLyogQlJFQUsgKi9cbi8qIEJSRUFLICovXG5cbi8qIC0tLS0tLS0tLS0tLU5BUlJPV0VSLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC8qIFBBR0UgKi9cbiAgICAjaGVhZGVyQm94IHtcbiAgICAgICAgd2lkdGg6IGNsYW1wKDQwMHB4LCA1NXZ3LCAxMDMycHgpO1xuICAgIH1cbiAgICAjbG9nbyxcbiAgICAjaW5mb0xvZ28ge1xuICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgfVxuICAgICNuYXYge1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG4gICAgLm5hdkJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICAgLyogSE9NRSAqL1xuICAgICNjb3ZlckltZyB7XG4gICAgICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgNTV2dywgMTAzMnB4KTtcbiAgICB9XG4gICAgI2Zvb3RlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLndlbGNvbWUtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IGNsYW1wKDM5OXB4LCA1NXZ3LCA1NTBweCk7XG4gICAgfVxuICAgICNhZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC8qIE1FTlUgKi9cblxufVxuXG5cbi8qIC0tLS0tLS0tLS0tLU1PQklMRS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgeyBcbiAgICAvKiBQQUdFICovXG4gICAgI2NvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0Ni41cHg7XG4gICAgfVxuXG4gICAgI2hlYWRlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG4gICAgI2hlYWRlckJveCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNTV2dywgMTAzMnB4KTtcbiAgICB9XG4gICAgI2xvZ28ge1xuICAgICAgICBmb250LXNpemU6IDMuNmVtO1xuICAgIH1cbiAgICAubmF2QnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICB9XG4gICAgLm5hdkJ0bjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxMHB4IHZhcigtLXRhbi10aGVtZSk7XG4gICAgfVxuICAgICNuYXYge1xuICAgICAgICBnYXA6IDNweDtcbiAgICB9XG4gICAgI2dpdEh1YiB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgICB9XG5cbiAgICAjc29jaWFscyB7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgICB9XG4gICAgLmZhLWZvb3Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggOHB4IHZhcigtLXJvc2UtdGhlbWUpO1xuICAgIH1cblxuICAgIC8qIEhPTUUgKi9cbiAgICAjY292ZXJJbWcge1xuICAgICAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDU1dncsIDEwMzJweCk7XG4gICAgfVxuICAgIC53ZWxjb21lLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNTV2dywgMTAzMnB4KTtcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICB9XG4gICAgI3dlbGNvbWUge1xuICAgICAgICBib3gtc2hhZG93OiAwIDQwcHggMjVweCAyNXB4IHZhcigtLWJvZHktdGhlbWUpO1xuICAgIH1cbiAgICBcbiAgICAjYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAvKiBNRU5VICovXG4gICAgI21lbnUtbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuICAgIC5tZW51LWl0ZW0tZXZlbixcbiAgICAubWVudS1pdGVtLW9kZCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICAgICAgICBnYXA6IDAgMTVweDtcbiAgICB9XG4gICAgLm1lbnUtaW1hZ2Uge1xuICAgIHdpZHRoOiBjbGFtcCggMTMwcHgsIDQwJSwgMjUwcHgpO1xuICAgIH1cbiAgICAuaXRlbS1pbmZve1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgd2lkdGg6IDYwJVxuICAgIH1cbiAgICAubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiBjbGFtcCggMTMwcHgsIDEwMCUsIDQ2MHB4KTtcbiAgICB9XG4gICAgLml0ZW0tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMv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QXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLDhDQUE4QztJQUNsRDtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1DQUFtQztRQUNuQyw2Q0FBNkM7SUFDakQ7O0lBRUEsU0FBUztJQUNUO1FBQ0ksaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksOENBQThDO0lBQ2xEOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQSxTQUFTO0lBQ1Q7UUFDSTtJQUNKO0lBQ0E7O1FBRUksdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtJQUNBO0lBQ0EsZ0NBQWdDO0lBQ2hDO0lBQ0E7SUFDQSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBLGVBQWU7SUFDZixpQ0FBaUM7SUFDakM7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJvZHktdGhlbWU6ICNmYWY3ZjM7XFxuICAgIC0tYmx1ZS10aGVtZTogcmdiKDk1LCAxMTMsIDE3Myk7XFxuICAgIC0tdGFuLXRoZW1lOiByZ2IoMjU1LCAyNDIsIDIyNyk7XFxuICAgIC0tcm9zZS10aGVtZTogcmdiKDI1MywgMjM1LCAyMTQpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdHMnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0NoZXJvbGluYS50dGYnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzEnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Mb3Vpc1xcXFwgR2VvcmdlXFxcXCBDYWZlLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmVcXFxcIExpZ2h0LnR0ZicpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS1NQUlOIEhUTUwgQk9YRVMtLS0tLS0tLS0tLS0gKi9cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LXRoZW1lKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5M3B4IDFmciA0Ni41cHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLVNUQVRJQyBQQUdFIFNUTFlFUy0tLS0tLS0tLS0tLSAqL1xcbi8qIEhFQUQgU1RZTEVTICovXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA5M3B4O1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG5cXG4jaGVhZGVyQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1NXZ3LCAxMDMycHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG59XFxuXFxuI2xvZ28sXFxuI2luZm9Mb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeSc7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLXRoZW1lKTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xcbn1cXG5cXG4jaW5mb0xvZ28ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLm5hdkJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tdGhlbWUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjBweCB2YXIoLS10YW4tdGhlbWUpO1xcbn1cXG5cXG4vKiBNQUlOIFNFQ1RJT04gKi9cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiBcXG4vKiBGT09UIFNFQ1RJT04gKi9cXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtaGVpZ2h0OiA0Ni41cHg7XFxuICAgIG1pbi13aWR0aDogNjUwcHg7XFxufVxcblxcbiNnaXRIdWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWFyZ2luOiAwIDAgMCA2MHB4O1xcbn1cXG5cXG4jc29jaWFscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDAgNjBweCAwIDA7XFxufVxcblxcbi5mYS1mb290IHtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtdGhlbWUpO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcXG59XFxuXFxuLmZhLWZvb3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tcm9zZS10aGVtZSk7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLUhPTUUgTU9EVUxFIFNUWUxFLS0tLS0tLS0tLS0tICovXFxuI2hvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY292ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG59XFxuXFxuI2NvdmVySW1nIHtcXG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1NXZ3LCAxMDMycHgpO1xcbn1cXG5cXG4jd2VsY29tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDM1cHggMCAzNXB4IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDQwcHggNTBweCA1MHB4IHZhcigtLWJvZHktdGhlbWUpO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuM3M7XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDY1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuM3M7XFxufVxcblxcbi53ZWxjb21lLXRleHQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tdGhlbWUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjBweCB2YXIoLS10YW4tdGhlbWUpO1xcbn1cXG5cXG4jd2FsbCB7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcXG59XFxuXFxuI3dhbGxJbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcXG59XFxuXFxuI2luZm97XFxuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzEnO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzNXB4IDAgNDBweCAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTsgKi9cXG59XFxuXFxuI2FkZHJlc3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcXG59XFxuXFxuI3NjaGVkdWxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDZweCAyMHB4XFxufVxcblxcbi5kYXkge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tTUVOVSBTVFlMRS0tLS0tLS0tLS0tLSAqL1xcbiNtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI21lbnUtbGlzdCB7XFxuICAgIHdpZHRoOiBjbGFtcCg2NTBweCwgNTV2dywgMTAzMnB4KTtcXG4gICAgbWFyZ2luOiAwIDAgNjBweCAwO1xcbn1cXG5cXG4ubWVudS1pdGVtLWV2ZW4sXFxuLm1lbnUtaXRlbS1vZGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4ubWVudS1pdGVtLWV2ZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LXRoZW1lKTtcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMDtcXG59XFxuXFxuLm1lbnUtaXRlbS1vZGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTtcXG4gICAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcXG59XFxuXFxuLm1lbnUtaW1hZ2Uge1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG4uaXRlbS1pbmZve1xcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMDtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcXG59XFxuXFxuLm1lbnUtZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcXG5cXG59XFxuXFxuLyogQlJFQUsgKi9cXG4vKiBCUkVBSyAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLU5BUlJPV0VSLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLyogUEFHRSAqL1xcbiAgICAjaGVhZGVyQm94IHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgNTV2dywgMTAzMnB4KTtcXG4gICAgfVxcbiAgICAjbG9nbyxcXG4gICAgI2luZm9Mb2dvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgfVxcbiAgICAjbmF2IHtcXG4gICAgICAgIGdhcDogOHB4O1xcbiAgICB9XFxuICAgIC5uYXZCdG4ge1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB9XFxuXFxuICAgICAvKiBIT01FICovXFxuICAgICNjb3ZlckltZyB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoNDAwcHgsIDU1dncsIDEwMzJweCk7XFxuICAgIH1cXG4gICAgI2Zvb3RlciB7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLndlbGNvbWUtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB3aWR0aDogY2xhbXAoMzk5cHgsIDU1dncsIDU1MHB4KTtcXG4gICAgfVxcbiAgICAjYWRkcmVzcyB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLyogTUVOVSAqL1xcblxcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS1NT0JJTEUtLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7IFxcbiAgICAvKiBQQUdFICovXFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDQ2LjVweDtcXG4gICAgfVxcblxcbiAgICAjaGVhZGVyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gICAgI2hlYWRlckJveCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1NXZ3LCAxMDMycHgpO1xcbiAgICB9XFxuICAgICNsb2dvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy42ZW07XFxuICAgIH1cXG4gICAgLm5hdkJ0biB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICB9XFxuICAgIC5uYXZCdG46aG92ZXIge1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDEwcHggdmFyKC0tdGFuLXRoZW1lKTtcXG4gICAgfVxcbiAgICAjbmF2IHtcXG4gICAgICAgIGdhcDogM3B4O1xcbiAgICB9XFxuICAgICNnaXRIdWIge1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcbiAgICB9XFxuXFxuICAgICNzb2NpYWxzIHtcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcXG4gICAgfVxcbiAgICAuZmEtZm9vdDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDhweCB2YXIoLS1yb3NlLXRoZW1lKTtcXG4gICAgfVxcblxcbiAgICAvKiBIT01FICovXFxuICAgICNjb3ZlckltZyB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDU1dncsIDEwMzJweCk7XFxuICAgIH1cXG4gICAgLndlbGNvbWUtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDU1dncsIDEwMzJweCk7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuICAgICN3ZWxjb21lIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNDBweCAyNXB4IDI1cHggdmFyKC0tYm9keS10aGVtZSk7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGRyZXNzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcblxcbiAgICAvKiBNRU5VICovXFxuICAgICNtZW51LWxpc3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgfVxcbiAgICAubWVudS1pdGVtLWV2ZW4sXFxuICAgIC5tZW51LWl0ZW0tb2RkIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xcbiAgICAgICAgZ2FwOiAwIDE1cHg7XFxuICAgIH1cXG4gICAgLm1lbnUtaW1hZ2Uge1xcbiAgICB3aWR0aDogY2xhbXAoIDEzMHB4LCA0MCUsIDI1MHB4KTtcXG4gICAgfVxcbiAgICAuaXRlbS1pbmZve1xcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcXG4gICAgcGFkZGluZzogMCAwIDAgMDtcXG4gICAgd2lkdGg6IDYwJVxcbiAgICB9XFxuICAgIC5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogY2xhbXAoIDEzMHB4LCAxMDAlLCA0NjBweCk7XFxuICAgIH1cXG4gICAgLml0ZW0tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gJ2NvbnRhY3QnO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICByZXR1cm4gY29udGFjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XG4iLCJpbXBvcnQgcGljbmljIGZyb20gJy4vaW1hZ2VzL2J3LXBpY25pYy1jcm9wLmpwZyc7XG5pbXBvcnQgcGFya1BpYyBmcm9tICcuL2ltYWdlcy9uYXRpb25hYWwtcGFyay12ZWx1d2V6b29tLmpwZyc7XG5cbmNvbnN0IGNyZWF0ZUNvdmVyID0gKCkgPT4ge1xuICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb3ZlckltZyA9IG5ldyBJbWFnZSgpO1xuICBjb3Zlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvdmVyJyk7XG4gIGNvdmVySW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY292ZXJJbWcnKTtcbiAgY292ZXJJbWcuc3JjID0gcGljbmljO1xuICBjb3Zlci5hcHBlbmRDaGlsZChjb3ZlckltZyk7XG4gIHJldHVybiBjb3Zlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVdlbGNvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VsY29tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlbGNvbWUnKTtcbiAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUtdGV4dCcpO1xuICB3ZWxjb21lVGV4dC50ZXh0Q29udGVudCA9ICdOZXN0bGVkIGluIHJvbGxpbmcgaGlsbHMgYW5kIGNyYWRsZWQgYnkgYW5jaWVudCB3b29kIGFuZCBiaWxsb3dpbmcgbGF2ZW5kZXIsIEF0ZXJtYSBpcyBhIG5pY2UgcGxhY2UgdG8gaGF2ZSBsdW5jaC4gSm9pbiB1cyBmb3IgYSBsb3ZlbHkgZGF5IG9uIHRoZSBncmFzcyB3aXRoIGEgcGljbmljIHBhY2thZ2Ugb2YgeW91ciBjaG9pY2UuIEFuZCBicmluZyBhbnkgZXh0cmFzIG9yIGNvbXBsaW1lbnRzIHlvdSBsaWtlISc7XG4gIHdlbGNvbWUuYXBwZW5kQ2hpbGQod2VsY29tZVRleHQpO1xuICByZXR1cm4gd2VsY29tZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IHdhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd2FsbEltZyA9IG5ldyBJbWFnZSgpO1xuICB3YWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2FsbCcpO1xuICB3YWxsSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2FsbEltZycpO1xuICB3YWxsSW1nLnNyYyA9IHBhcmtQaWM7XG4gIHdhbGwuYXBwZW5kQ2hpbGQod2FsbEltZyk7XG4gIHJldHVybiB3YWxsO1xufTtcblxuY29uc3QgY3JlYXRlSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0xvZ28udGV4dENvbnRlbnQgPSAnQXRlcm1hJztcbiAgaW5mb0xvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvTG9nbycpO1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm8nKTtcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHJlc3MnKTtcbiAgc2NoZWR1bGUuc2V0QXR0cmlidXRlKCdpZCcsICdzY2hlZHVsZScpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0JFRUtIVUlaRU5TRVdFRyAxLCA2OTkxIEpNIFJIRURFTiwgTkVUSEVSTEFORFMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXInKTtcbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gJ00gTyBOJztcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSAnNSAtIDExIFAnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gJ1QgVSBFIFMnO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gMTEgUCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnVyBFIEQgUyc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdUIEggVSBSIFMnO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gMTEgUCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnRiBSIEknO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gMTEgUCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnUyBBIFQnO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gMTEgUCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnUyBVIE4nO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICdDIEwgTyBTIEUgRCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gJ01PTi1TQVQnO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gMTEgUCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzY2hlZHVsZS5hcHBlbmRDaGlsZChkYXkpO1xuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgfVxuICBpbmZvLmFwcGVuZENoaWxkKGluZm9Mb2dvKTtcbiAgaW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgaW5mby5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG4gIHJldHVybiBpbmZvO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUNvdmVyKCkpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVdlbGNvbWUoKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlV2FsbCgpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKCkpO1xuICByZXR1cm4gaG9tZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG4vLyBpbXBvcnQgZ2hJY29uIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuLy8gaW1wb3J0IGluc3RhSWNvbiBmcm9tICcuL2ltYWdlcy9pbnN0YWdyYW0uc3ZnJztcbi8vIGltcG9ydCBtYWlsSWNvbiBmcm9tICcuL2ltYWdlcy9lbWFpbC1vdXRsaW5lLnN2Zyc7XG4vLyBpbXBvcnQgbWFwc0ljb24gZnJvbSAnLi9pbWFnZXMvZ29vZ2xlLW1hcHMuc3ZnJztcblxuLy8gUHVsbCBvdXIgSFRNTCB0YWcgaW50byBqc1xuLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyBDcmVhdGUgSGVhZGVyIGRpdiBhbmQgYXBwZW5kIGl0IHRvIGNvbnRlbnRcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgaGVhZGVyQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyQm94Jyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCb3gpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVMb2dvID0gKCkgPT4ge1xuICBjb25zdCBoZWFkQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckJveCcpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ28udGV4dENvbnRlbnQgPSAnQXRlcm1hJztcbiAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbiAgaGVhZEJveC5hcHBlbmRDaGlsZChsb2dvKTtcbn07XG5cbi8vIENyZWF0ZSBOYXYgc2VjdGlvbiBvZiBoZWFkZXIgYW5kIGl0J3MgYnV0dG9ucywgYXNzaWduIGF0dHJpYnV0ZXMsIGFwcGVuZFxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckJveCcpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XG4gIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnRuJyk7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnRuJyk7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0QnRuJyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2QnRuJyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2QnRuJyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2QnRuJyk7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIGhlYWRCb3guYXBwZW5kQ2hpbGQobmF2KTtcbn07XG5cbi8vIENyZWF0ZSBNYWluIGRpdiBhbmQgYXBwZW5kIGl0IHRvIGNvbnRlbnRcbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG4vLyBDcmVhdGUgRm9vdGVyIGRpdiBhbmQgYXBwZW5kIGl0IHRvIGNvbnRlbnRcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZ2l0SHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdpdEh1Yi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdEh1YicpO1xuICBnaXRIdWIuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnYmxhbmsnKTtcbiAgZ2l0SHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2x1a2VzcGlja25hbGwvcmVzdGF1cmFudC1wYWdlJztcbiAgc29jaWFscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NvY2lhbHMnKTtcblxuICBjb25zdCBnaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGdoTGluay5jbGFzc0xpc3QuYWRkKCdmYScsICdmYS1naXRodWInLCAnZmEtZm9vdCcpO1xuICBnaExpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGdpdEh1Yi5hcHBlbmRDaGlsZChnaExpbmspO1xuXG4gIGNvbnN0IGluc3RhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaW5zdGFMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycsICdmYS1pbnN0YWdyYW0nLCAnZmEtZm9vdCcpO1xuICBpbnN0YUxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGNvbnN0IGluc3RhU2hlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGluc3RhU2hlbGwuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnYmxhbmsnKTtcbiAgaW5zdGFTaGVsbC5ocmVmID0gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXhwbG9yZS9sb2NhdGlvbnMvMjQyOTM3NDI2L3ZlbHV3ZXpvb20tbmF0aW9uYWwtcGFyay8nO1xuICBpbnN0YVNoZWxsLmFwcGVuZENoaWxkKGluc3RhTGluayk7XG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQoaW5zdGFTaGVsbCk7XG5cbiAgY29uc3QgbWFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG1haWxMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCAnZmEtZW52ZWxvcGUnLCAnZmEtZm9vdCcpO1xuICBtYWlsTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgY29uc3QgbWFpbFNoZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBtYWlsU2hlbGwuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnYmxhbmsnKTtcbiAgbWFpbFNoZWxsLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2x1a2VzcGlja25hbGwvcmVzdGF1cmFudC1wYWdlJztcbiAgbWFpbFNoZWxsLmFwcGVuZENoaWxkKG1haWxMaW5rKTtcbiAgc29jaWFscy5hcHBlbmRDaGlsZChtYWlsU2hlbGwpO1xuXG4gIGNvbnN0IG1hcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG1hcExpbmsuY2xhc3NMaXN0LmFkZCgnZmEnLCAnZmEtbG9jYXRpb24tZG90JywgJ2ZhLWZvb3QnKTtcbiAgbWFwTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVndWxhcicsICd0cnVlJyk7XG4gIGNvbnN0IG1hcFNoZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBtYXBTaGVsbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdibGFuaycpO1xuICBtYXBTaGVsbC5ocmVmID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9QYXZpbGlvbitEZStQb3NiYW5rL0A1Mi4wMjU4MzA5LDYuMDEwNTc4NCwxMy4wOXovZGF0YT0hNG0xNCExbTchM202ITFzMHg0N2M3YmNjOTI3OGEwYTQ3OjB4NDZhMTQ3NmI3OTk5NDAyZiEyc05hdGlvbmFhbCtQYXJrK1ZlbHV3ZXpvb20hOG0yITNkNTIuMDQ4MzEwMyE0ZDYuMDE5ODg2OSExNnMlMkZtJTJGMDVtX2dxZyEzbTUhMXMweDQ3YzdhMzJmMjhmMDA4OGY6MHg5MDUzNjlkOTZlMjQ1NjQ4IThtMiEzZDUyLjAyOTQxOCE0ZDYuMDIxODExITE2cyUyRmclMkYxdGdtMjJndD9lbnRyeT10dHUnO1xuICBtYXBTaGVsbC5hcHBlbmRDaGlsZChtYXBMaW5rKTtcbiAgc29jaWFscy5hcHBlbmRDaGlsZChtYXBTaGVsbCk7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHNvY2lhbHMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG4vLyBQdWxscyB0aGUgY2xpY2tlZCBuYXZCdG4gcGFnZSB0byBkaXNwbGF5IG9uIGRpdi5tYWluXG5jb25zdCBzZXRNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdkJ0bicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG5cbiAgbmF2QnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgICBjYXNlICdob21lQnRuJzpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnVCdG4nOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdEJ0bic6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBQYXNzIGFsbCBIVE1MIHNrZWxldG9uIGVsZW1lbnRzIHRvIGluZGV4LmpzXG5jb25zdCBsb2FkID0gKCkgPT4ge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWFpbigpO1xuICBjcmVhdGVGb290ZXIoKTtcbiAgY3JlYXRlTG9nbygpO1xuICBjcmVhdGVOYXYoKTtcbiAgc2V0TWFpbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZDtcbiIsImltcG9ydCBwaW5vdFBhY2sgZnJvbSAnLi9pbWFnZXMvcGlub3QtcGFjay5qcGcnO1xuaW1wb3J0IHNuYWNrUGFjayBmcm9tICcuL2ltYWdlcy9zbmFjay1wYWNrLmpwZyc7XG5pbXBvcnQgdGFjb1BhY2sgZnJvbSAnLi9pbWFnZXMvdGFjby1wYWNrLmpwZyc7XG5pbXBvcnQgZnJ1aXRQYWNrIGZyb20gJy4vaW1hZ2VzL2ZydWl0LXBhY2suanBnJztcbmltcG9ydCBzYW5kd2ljaFBhY2sgZnJvbSAnLi9pbWFnZXMvc2FuZHdpY2gtcGFjay5qcGcnO1xuXG5jb25zdCBjcmVhdGVNZW51bGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxpc3QnKTtcblxuICBjb25zdCBtZW51SXRlbUV2ZW4gPSAoYSwgYiwgYykgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1ldmVuJyk7XG4gICAgY29uc3QgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUltYWdlLnNyYyA9IGE7XG4gICAgbWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mbycpO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gYjtcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGM7XG4gICAgaXRlbUluZm8uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBpdGVtSW5mby5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBjb25zdCBtZW51SXRlbU9kZCA9IChhLCBiLCBjKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW9kZCcpO1xuICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnVJbWFnZS5zcmMgPSBhO1xuICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgY29uc3QgaXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtSW5mby5jbGFzc0xpc3QuYWRkKCdpdGVtLWluZm8nKTtcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGI7XG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICBtZW51RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjO1xuICAgIGl0ZW1JbmZvLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgaXRlbUluZm8uYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgY29uc3Qgc2FuZHdpY2ggPSBtZW51SXRlbUV2ZW4oc2FuZHdpY2hQYWNrLCAnU2FuZHdpY2ggUGljbmljJywgJ1RoZSBnby10by4gU21va2VkIGJlZWYgYW5kIHBvcmsgdGVuZGVybG9pbiBzYW5kd2ljaGVzLiBDaGFyY3V0ZXJpZSBib2FyZCB3aXRoIHVucGFzdGV1cml6ZWQgZ29hdHMgbWlsayBjaGVlc2UsIGFwcmljb3QgYW5kIGdlcmtpbi4gQSBjYXJhZmUgb2Ygb3VyIGhvdXNlIGxhZ2VyLicpO1xuICBjb25zdCBwaW5vdCA9IG1lbnVJdGVtT2RkKHBpbm90UGFjaywgJ1RoZSBQaW5vdCBQYWNrJywgJ091ciBwaW5vdCBwYWNrIGlzIHBlcmZlY3QgZm9yIGEgbW9yZSB0cmFkaW9uYWwgc3ByZWFkLiBMdXNjaW91cyBmaWdzIGFuZCBncmFwZXMgd2l0aCBjcmVhbXkgY293cyBtaWxrIGNoZWVzZS4gQSBib3R0bGUgb2YgUGlub3QgTm9pci4nKTtcbiAgY29uc3QgdGFjbyA9IG1lbnVJdGVtRXZlbih0YWNvUGFjaywgJ1RhY28gUGljbmljJywgJ05FVyEgT3VyIFRhY28gcGljbmljIGlzIHRoZSBwZXJwZWN0IHBpY2sgZm9yIGEgc3BsYXNoIG9mIHN1bW1lci4gQnJhaXNlZCBjaGlrZW4gdGFjb3Mgd2l0aCBsaW1lIGFuZCBqYWxlcGVuby4gVGVxdWlsYSBzaG90cyB3aXRoIGZyZXNoIHN0cmF3YmVycnkgYW5kIGxpbWUuJyk7XG4gIGNvbnN0IGZydWl0ID0gbWVudUl0ZW1PZGQoZnJ1aXRQYWNrLCAnRnJ1aXQgYW5kIFJvc2UnLCAnTG9va2luZyBmb3Igc29tZXRoaW5nIGxpZ2h0IGFuZCBlbGVnYW50PyBUaGUgZnJ1aXQgYW5kIHJvc2UgcGljbmljIGlzIHdoZXJlIGl0cyBhdC4gQXBwbGUsIHdhdGVybWVsb24gYW5kIHJvc2UuJyk7XG4gIGNvbnN0IHNuYWNrID0gbWVudUl0ZW1FdmVuKHNuYWNrUGFjaywgJ1RoZSBTbmFjayBQYWNrJywgJ0p1c3QgbmVlZCBzb21ldGhpbmcgdG8gbmliYmxlIHdoaWxlIHlvdSBjaGV3IHlvdXIgZ3JhcGVzPyBTYWx0eSBwcmV0emVscywgZnJlc2ggYmFrZWQgY29va2llcywgYW5kIHN0cmF3YmVycnkuJyk7XG4gIG1lbnVMaXN0LmFwcGVuZENoaWxkKHNhbmR3aWNoKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQocGlub3QpO1xuICBtZW51TGlzdC5hcHBlbmRDaGlsZCh0YWNvKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoZnJ1aXQpO1xuICBtZW51TGlzdC5hcHBlbmRDaGlsZChzbmFjayk7XG4gIHJldHVybiBtZW51TGlzdDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51bGlzdCgpKTtcbiAgcmV0dXJuIG1lbnU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCc7XG5cbmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==