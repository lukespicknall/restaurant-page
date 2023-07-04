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
    transition: ease-in-out .3s;
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
    width: clamp(598px, 55vw, 1032px);
}

#welcome {
    display: flex;
    justify-content: center;
    margin: 35px 0 35px 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 40px 50px 50px var(--body-theme);
    transition: ease-in-out .3s;
}

.welcome-text {
    font-family: 'info2';
    font-size: 23px;
    max-width: 650px;
    text-align: center;
    border-radius: 65px;
    background-color: transparent;
    transition: ease-in-out .3s;
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
    transition: ease-in-out .3s;
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

/* ----------CONTACT--------- */
#contact {
    display: flex;
    justify-content: center;
    height: 100%;

}

#contact-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(500px, 55vw, 1032px);
    transition: ease-in-out .3s;
}

#info-box {
    font-family: 'info1';
    width: clamp(320px, 55vw, 700px);
    padding: 15px 0 15px 0;
}

.contact-info {
    display: flex;
    font-size: 20px;
    gap: 20px;
    margin: 5px 0 15px 0;
}


.fa-contact {
    display: flex;
    align-items: center;
    color: var(--blue-theme);
    font-size: 25px;
    border-radius: 25px;
    transition: ease-out .3s;
}

#map {
    display: flex;
    justify-content: center;
    margin: 0 0 40px 0;
    height: 100%;
}

#map-iframe {
    width: clamp(320px, 55vw, 700px);
    height: clamp(200px, 100%, 450px);
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
        width: clamp(598px, 55vw, 1032px);
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
        width: clamp(320px, 75vw, 1032px);
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
        width: 60%;
    }
    .menu-description {
        font-size: 16px;
        width: clamp( 130px, 100%, 460px);
    }
    .item-title {
        font-size: 18px;
        margin: 0 0 0 0;
    }

    /* CONTACT */
    #contact-box {
        width: clamp(320px, 55vw, 1032px);
    }
    #info-box {
        padding: 15px 10px 15px 10px;
}
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,oBAAoB;AACxB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,iCAAiC;AACrC;;;AAGA,UAAU;AACV,UAAU;;AAEV,qCAAqC;AACrC;IACI,SAAS;IACT;QACI,iCAAiC;IACrC;IACA;;QAEI,eAAe;IACnB;IACA;QACI,QAAQ;IACZ;IACA;QACI,eAAe;IACnB;;KAEC,SAAS;IACV;QACI,iCAAiC;IACrC;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,gCAAgC;IACpC;IACA;QACI,eAAe;IACnB;;IAEA,SAAS;;AAEb;;;AAGA,mCAAmC;AACnC;IACI,SAAS;IACT;QACI,oCAAoC;IACxC;;IAEA;QACI,iBAAiB;QACjB,uBAAuB;IAC3B;IACA;QACI,sBAAsB;QACtB,iCAAiC;IACrC;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;KAClB;IACD;QACI,8CAA8C;IAClD;IACA;QACI,QAAQ;IACZ;IACA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;IACA;QACI,mCAAmC;QACnC,6CAA6C;IACjD;;IAEA,SAAS;IACT;QACI,iCAAiC;IACrC;IACA;QACI,eAAe;QACf,iCAAiC;QACjC,gBAAgB;IACpB;IACA;QACI,8CAA8C;IAClD;;IAEA;QACI,eAAe;IACnB;;IAEA,SAAS;IACT;QACI;IACJ;IACA;;QAEI,uBAAuB;QACvB,aAAa;QACb,oBAAoB;QACpB,kBAAkB;QAClB,WAAW;IACf;IACA;QACI,gCAAgC;IACpC;IACA;QACI,oBAAoB;QACpB,gBAAgB;QAChB,UAAU;IACd;IACA;QACI,eAAe;QACf,iCAAiC;IACrC;IACA;QACI,eAAe;QACf,eAAe;IACnB;;IAEA,YAAY;IACZ;QACI,iCAAiC;IACrC;IACA;QACI,4BAA4B;AACpC;AACA","sourcesContent":[":root {\n    --body-theme: #faf7f3;\n    --blue-theme: rgb(95, 113, 173);\n    --tan-theme: rgb(255, 242, 227);\n    --rose-theme: rgb(253, 235, 214);\n}\n\n@font-face {\n    font-family: 'Robots';\n    src: url('./fonts/Roboto-Medium.ttf');\n}\n@font-face {\n    font-family: 'fancy';\n    src: url('./fonts/Cherolina.ttf');\n}\n@font-face {\n    font-family: 'info1';\n    src: url('./fonts/Louis\\ George\\ Cafe.ttf');\n}\n@font-face {\n    font-family: 'info2';\n    src: url('./fonts/Louis\\ George\\ Cafe\\ Light.ttf');\n}\n\n/* ------------MAIN HTML BOXES------------ */\nbody {\n    margin: 0;\n    background-color: var(--body-theme);\n}\n\n#content {\n    display: grid;\n    min-height: 100vh;\n    max-width: 100vw;\n    grid-template-rows: 93px 1fr 46.5px;\n}\n\n/* ------------STATIC PAGE STLYES------------ */\n/* HEAD STYLES */\n#header {\n    display: flex;\n    justify-content: center;\n    max-height: 93px;\n    width: 100%\n}\n\n#headerBox {\n    display: flex;\n    width: clamp(500px, 55vw, 1032px);\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 10px 0 10px;\n}\n\n#logo,\n#infoLogo {\n    display: flex;\n    align-items: center;\n    font-family: 'fancy';\n    color: var(--blue-theme);\n    font-size: 80px;\n    font-weight: bold;\n    transition: ease-in-out .3s;\n}\n\n#infoLogo {\n    justify-content: center;\n    padding-bottom: 20px;\n}\n\n#nav {\n    display: flex;\n    gap: 25px;\n    height: 25px;\n}\n\n.navBtn {\n    font-family: 'info2';\n    font-size: 25px;\n    color: black;\n    border: none;\n    border-radius: 25px;\n    background-color: transparent;\n    transition: ease-out .3s;\n    cursor: pointer;\n}\n\n.navBtn:hover {\n    background-color: var(--tan-theme);\n    box-shadow: 0px 0px 20px 20px var(--tan-theme);\n}\n\n/* MAIN SECTION */\n#main {\n    display: flex;\n    flex-direction: column;\n}\n \n/* FOOT SECTION */\n#footer {\n    display: flex;\n    justify-content: space-between;\n    max-height: 46.5px;\n    min-width: 650px;\n}\n\n#gitHub {\n    display: flex;\n    height: 100%;\n    text-decoration: none;\n    margin: 0 0 0 60px;\n}\n\n#socials {\n    display: flex;\n    gap: 30px;\n    height: 100%;\n    margin: 0 60px 0 0;\n}\n\n.fa-foot {\n    color: var(--blue-theme);\n    font-size: 35px;\n    border-radius: 25px;\n    transition: ease-out .3s;\n}\n\n.fa-foot:hover {\n    background-color: var(--rose-theme);\n    box-shadow: 0px 0px 20px 20px var(--rose-theme);\n}\n\n\n/* ------------HOME MODULE STYLE------------ */\n#home {\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    height: 100%;\n}\n\n#cover {\n    display: flex;\n    \n}\n\n#coverImg {\n    width: clamp(598px, 55vw, 1032px);\n}\n\n#welcome {\n    display: flex;\n    justify-content: center;\n    margin: 35px 0 35px 0;\n    width: 100%;\n    z-index: 1;\n    box-shadow: 0 40px 50px 50px var(--body-theme);\n    transition: ease-in-out .3s;\n}\n\n.welcome-text {\n    font-family: 'info2';\n    font-size: 23px;\n    max-width: 650px;\n    text-align: center;\n    border-radius: 65px;\n    background-color: transparent;\n    transition: ease-in-out .3s;\n}\n\n.welcome-text:hover {\n    background-color: var(--tan-theme);\n    box-shadow: 0px 0px 20px 20px var(--tan-theme);\n}\n\n#wall {\n    max-width: 100vw;\n    min-width: 320px;\n    transition: ease-in-out .3s;\n}\n\n#wallImg {\n    max-width: 100%;\n    min-width: 320px;\n    min-width: 320px;\n    transition: ease-in-out .3s;\n}\n\n#info{\n    font-family: 'info1';\n    font-weight: lighter;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    justify-content: center;\n    padding: 35px 0 40px 0;\n    width: 100%;\n    height: 100%;\n    /* background-color: var(--rose-theme); */\n}\n\n#address {\n    display: block;\n    align-self: center;\n    font-size: 18px;\n    margin-bottom: 20px;\n    transition: ease-in-out .3s;\n}\n\n#schedule {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 6px 20px\n}\n\n.day {\n    text-align: right;\n}\n\n/* ------------MENU STYLE------------ */\n#menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    height: 100%;\n}\n\n#menu-list {\n    width: clamp(650px, 55vw, 1032px);\n    margin: 0 0 60px 0;\n}\n\n.menu-item-even,\n.menu-item-odd {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 100%;\n    height: 300px;\n    transition: ease-in-out .3s;\n}\n\n.menu-item-even {\n    background-color: var(--body-theme);\n    padding: 0 20px 0 0;\n}\n\n.menu-item-odd {\n    background-color: var(--rose-theme);\n    padding: 0 25px 0 25px;\n}\n\n.menu-image {\n    max-height: 250px;\n    transition: ease-in-out .3s;\n}\n.item-info{\n    font-family: 'info2';\n    padding: 0 20px 0 0;\n    width: 45%;\n    transition: ease-in-out .3s;\n}\n\n.item-title {\n    display: block;\n    font-size: 25px;\n    font-weight: bold;\n    margin: 0 0 20px 0;\n    transition: ease-in-out .3s;\n}\n\n.menu-description {\n    display: flex;\n    font-size: 20px;\n    align-items: center;\n    transition: ease-in-out .3s;\n\n}\n\n/* ----------CONTACT--------- */\n#contact {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n\n}\n\n#contact-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: clamp(500px, 55vw, 1032px);\n    transition: ease-in-out .3s;\n}\n\n#info-box {\n    font-family: 'info1';\n    width: clamp(320px, 55vw, 700px);\n    padding: 15px 0 15px 0;\n}\n\n.contact-info {\n    display: flex;\n    font-size: 20px;\n    gap: 20px;\n    margin: 5px 0 15px 0;\n}\n\n\n.fa-contact {\n    display: flex;\n    align-items: center;\n    color: var(--blue-theme);\n    font-size: 25px;\n    border-radius: 25px;\n    transition: ease-out .3s;\n}\n\n#map {\n    display: flex;\n    justify-content: center;\n    margin: 0 0 40px 0;\n    height: 100%;\n}\n\n#map-iframe {\n    width: clamp(320px, 55vw, 700px);\n    height: clamp(200px, 100%, 450px);\n}\n\n\n/* BREAK */\n/* BREAK */\n\n/* ------------NARROWER------------ */\n@media only screen and (max-width: 1000px) {\n    /* PAGE */\n    #headerBox {\n        width: clamp(400px, 55vw, 1032px);\n    }\n    #logo,\n    #infoLogo {\n        font-size: 70px;\n    }\n    #nav {\n        gap: 8px;\n    }\n    .navBtn {\n        font-size: 22px;\n    }\n\n     /* HOME */\n    #coverImg {\n        width: clamp(598px, 55vw, 1032px);\n    }\n    #footer {\n        min-width: 100%;\n    }\n    .welcome-text {\n        font-size: 20px;\n        width: clamp(399px, 55vw, 550px);\n    }\n    #address {\n        font-size: 16px;\n    }\n\n    /* MENU */\n\n}\n\n\n/* ------------MOBILE------------ */\n@media only screen and (max-width: 800px) { \n    /* PAGE */\n    #content {\n        grid-template-rows: 100px 1fr 46.5px;\n    }\n\n    #header {\n        max-height: 100px;\n        align-items: flex-start;\n    }\n    #headerBox {\n        flex-direction: column;\n        width: clamp(300px, 55vw, 1032px);\n    }\n    #logo {\n        font-size: 3.6em;\n    }\n    .navBtn {\n        font-size: 20px;\n     }\n    .navBtn:hover {\n        box-shadow: 0px 0px 10px 10px var(--tan-theme);\n    }\n    #nav {\n        gap: 3px;\n    }\n    #gitHub {\n        margin: 0 0 0 20px;\n    }\n\n    #socials {\n        margin: 0 20px 0 0;\n    }\n    .fa-foot:hover {\n        background-color: var(--rose-theme);\n        box-shadow: 0px 0px 8px 8px var(--rose-theme);\n    }\n\n    /* HOME */\n    #coverImg {\n        width: clamp(320px, 75vw, 1032px);\n    }\n    .welcome-text {\n        font-size: 18px;\n        width: clamp(300px, 55vw, 1032px);\n        min-width: 300px;\n    }\n    #welcome {\n        box-shadow: 0 40px 25px 25px var(--body-theme);\n    }\n    \n    #address {\n        font-size: 14px;\n    }\n\n    /* MENU */\n    #menu-list {\n        width: 100%\n    }\n    .menu-item-even,\n    .menu-item-odd {\n        justify-content: center;\n        height: 200px;\n        padding: 0 8px 0 8px;\n        margin: 0 0 15px 0;\n        gap: 0 15px;\n    }\n    .menu-image {\n        width: clamp( 130px, 40%, 250px);\n    }\n    .item-info{\n        font-family: 'info2';\n        padding: 0 0 0 0;\n        width: 60%;\n    }\n    .menu-description {\n        font-size: 16px;\n        width: clamp( 130px, 100%, 460px);\n    }\n    .item-title {\n        font-size: 18px;\n        margin: 0 0 0 0;\n    }\n\n    /* CONTACT */\n    #contact-box {\n        width: clamp(320px, 55vw, 1032px);\n    }\n    #info-box {\n        padding: 15px 10px 15px 10px;\n}\n}"],"sourceRoot":""}]);
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
const contactInfo = () => {
  const infoBox = document.createElement('div');
  infoBox.setAttribute('id', 'info-box');

  const contactAddress = document.createElement('div');
  contactAddress.classList.add('contact-info');
  const addressIcon = document.createElement('i');
  addressIcon.classList.add('fa', 'fa-location-dot', 'fa-contact');
  addressIcon.setAttribute('aria-hidden', 'true');
  const cAddress = document.createElement('div');
  cAddress.textContent = 'HEAUVENSEWEG 5A, 6991 JE RHEDEN, NETHERLANDS';
  contactAddress.appendChild(addressIcon);
  contactAddress.appendChild(cAddress);
  infoBox.appendChild(contactAddress);

  const contactEmail = document.createElement('div');
  contactEmail.classList.add('contact-info');
  const emailIcon = document.createElement('i');
  emailIcon.classList.add('fa-regular', 'fa-envelope', 'fa-contact');
  emailIcon.setAttribute('aria-hidden', 'true');
  const cEmail = document.createElement('div');
  cEmail.textContent = 'info@aterma.nl';
  contactEmail.appendChild(emailIcon);
  contactEmail.appendChild(cEmail);
  infoBox.appendChild(contactEmail);

  const contactPhone = document.createElement('div');
  contactPhone.classList.add('contact-info');
  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('fa-solid', 'fa-phone-volume', 'fa-contact');
  phoneIcon.setAttribute('aria-hidden', 'true');
  const cPhone = document.createElement('div');
  cPhone.textContent = '+31 123 4567';
  contactPhone.appendChild(phoneIcon);
  contactPhone.appendChild(cPhone);
  infoBox.appendChild(contactPhone);

  return infoBox;
};

const createMap = () => {
  const map = document.createElement('div');
  map.setAttribute('id', 'map');
  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56045.37126845338!2d5.978342553164783!3d52.04259074290867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7bcc9278a0a47%3A0x46a1476b7999402f!2sNationaal%20Park%20Veluwezoom!5e0!3m2!1sen!2sus!4v1688510380758!5m2!1sen!2sus"
      id="map-iframe"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;
  return map;
};

const createContactBox = () => {
  const contactBox = document.createElement('div');
  contactBox.setAttribute('id', 'contact-box');
  contactBox.appendChild(contactInfo());
  contactBox.appendChild(createMap());
  return contactBox;
};

const createContact = () => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  contact.appendChild(createContactBox());
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
  welcomeText.textContent = 'Nestled in rolling hills and cradled by ancient wood and billowing purple heath, Aterma is a nice place to have lunch. Join us for a lovely day on the grass with a picnic package of your choice. And bring any extras or compliments you like!';
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
  address.textContent = 'HEAUVENSEWEG 5A, 6991 JE RHEDEN, NETHERLANDS';
  for (let i = 0; i < 7; i += 1) {
    const day = document.createElement('div');
    const hours = document.createElement('div');
    day.classList.add('day');
    hours.classList.add('hour');
    switch (i) {
      case 0:
        day.textContent = 'M O N';
        hours.textContent = '5 - 9 P';
        break;
      case 1:
        day.textContent = 'T U E S';
        hours.textContent = '5 - 9 P';
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
  mapShell.href = 'https://www.google.com/maps/place/Nationaal+Park+Veluwezoom/@52.0473761,6.0054257,14z/data=!4m6!3m5!1s0x47c7bcc9278a0a47:0x46a1476b7999402f!8m2!3d52.0483103!4d6.0198869!16s%2Fm%2F05m_gqg?entry=ttu';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsbUpBQXNEO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxVQUFVLFdBQVcsWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLGdDQUFnQyw0QkFBNEIsc0NBQXNDLHNDQUFzQyx1Q0FBdUMsR0FBRyxnQkFBZ0IsNEJBQTRCLDRDQUE0QyxHQUFHLGNBQWMsMkJBQTJCLHdDQUF3QyxHQUFHLGNBQWMsMkJBQTJCLG9EQUFvRCxHQUFHLGNBQWMsMkJBQTJCLDREQUE0RCxHQUFHLHlEQUF5RCxnQkFBZ0IsMENBQTBDLEdBQUcsY0FBYyxvQkFBb0Isd0JBQXdCLHVCQUF1QiwwQ0FBMEMsR0FBRyxrRkFBa0Ysb0JBQW9CLDhCQUE4Qix1QkFBdUIsb0JBQW9CLGdCQUFnQixvQkFBb0Isd0NBQXdDLHFDQUFxQywwQkFBMEIsNEJBQTRCLEdBQUcsdUJBQXVCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLCtCQUErQixzQkFBc0Isd0JBQXdCLGtDQUFrQyxHQUFHLGVBQWUsOEJBQThCLDJCQUEyQixHQUFHLFVBQVUsb0JBQW9CLGdCQUFnQixtQkFBbUIsR0FBRyxhQUFhLDJCQUEyQixzQkFBc0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsb0NBQW9DLCtCQUErQixzQkFBc0IsR0FBRyxtQkFBbUIseUNBQXlDLHFEQUFxRCxHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLEdBQUcsa0NBQWtDLG9CQUFvQixxQ0FBcUMseUJBQXlCLHVCQUF1QixHQUFHLGFBQWEsb0JBQW9CLG1CQUFtQiw0QkFBNEIseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0IsZ0JBQWdCLG1CQUFtQix5QkFBeUIsR0FBRyxjQUFjLCtCQUErQixzQkFBc0IsMEJBQTBCLCtCQUErQixHQUFHLG9CQUFvQiwwQ0FBMEMsc0RBQXNELEdBQUcsOERBQThELG9CQUFvQiw2QkFBNkIsMkJBQTJCLG1CQUFtQixHQUFHLFlBQVksb0JBQW9CLFNBQVMsZUFBZSx3Q0FBd0MsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsNEJBQTRCLGtCQUFrQixpQkFBaUIscURBQXFELGtDQUFrQyxHQUFHLG1CQUFtQiwyQkFBMkIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsMEJBQTBCLG9DQUFvQyxrQ0FBa0MsR0FBRyx5QkFBeUIseUNBQXlDLHFEQUFxRCxHQUFHLFdBQVcsdUJBQXVCLHVCQUF1QixrQ0FBa0MsR0FBRyxjQUFjLHNCQUFzQix1QkFBdUIsdUJBQXVCLGtDQUFrQyxHQUFHLFVBQVUsMkJBQTJCLDJCQUEyQixvQkFBb0IsNkJBQTZCLHFCQUFxQiw4QkFBOEIsNkJBQTZCLGtCQUFrQixtQkFBbUIsOENBQThDLEtBQUssY0FBYyxxQkFBcUIseUJBQXlCLHNCQUFzQiwwQkFBMEIsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IscUNBQXFDLHNCQUFzQixVQUFVLHdCQUF3QixHQUFHLHFEQUFxRCxvQkFBb0IsNkJBQTZCLDJCQUEyQixtQkFBbUIsR0FBRyxnQkFBZ0Isd0NBQXdDLHlCQUF5QixHQUFHLHNDQUFzQyxvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0Isb0JBQW9CLGtDQUFrQyxHQUFHLHFCQUFxQiwwQ0FBMEMsMEJBQTBCLEdBQUcsb0JBQW9CLDBDQUEwQyw2QkFBNkIsR0FBRyxpQkFBaUIsd0JBQXdCLGtDQUFrQyxHQUFHLGFBQWEsMkJBQTJCLDBCQUEwQixpQkFBaUIsa0NBQWtDLEdBQUcsaUJBQWlCLHFCQUFxQixzQkFBc0Isd0JBQXdCLHlCQUF5QixrQ0FBa0MsR0FBRyx1QkFBdUIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsa0NBQWtDLEtBQUssZ0RBQWdELG9CQUFvQiw4QkFBOEIsbUJBQW1CLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix3Q0FBd0Msa0NBQWtDLEdBQUcsZUFBZSwyQkFBMkIsdUNBQXVDLDZCQUE2QixHQUFHLG1CQUFtQixvQkFBb0Isc0JBQXNCLGdCQUFnQiwyQkFBMkIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQiwrQkFBK0Isc0JBQXNCLDBCQUEwQiwrQkFBK0IsR0FBRyxVQUFVLG9CQUFvQiw4QkFBOEIseUJBQXlCLG1CQUFtQixHQUFHLGlCQUFpQix1Q0FBdUMsd0NBQXdDLEdBQUcsc0hBQXNILGtDQUFrQyw0Q0FBNEMsT0FBTyw2QkFBNkIsMEJBQTBCLE9BQU8sWUFBWSxtQkFBbUIsT0FBTyxlQUFlLDBCQUEwQixPQUFPLG9DQUFvQyw0Q0FBNEMsT0FBTyxlQUFlLDBCQUEwQixPQUFPLHFCQUFxQiwwQkFBMEIsMkNBQTJDLE9BQU8sZ0JBQWdCLDBCQUEwQixPQUFPLHVCQUF1Qix3RkFBd0YsZ0NBQWdDLCtDQUErQyxPQUFPLGlCQUFpQiw0QkFBNEIsa0NBQWtDLE9BQU8sa0JBQWtCLGlDQUFpQyw0Q0FBNEMsT0FBTyxhQUFhLDJCQUEyQixPQUFPLGVBQWUsMEJBQTBCLFFBQVEscUJBQXFCLHlEQUF5RCxPQUFPLFlBQVksbUJBQW1CLE9BQU8sZUFBZSw2QkFBNkIsT0FBTyxrQkFBa0IsNkJBQTZCLE9BQU8sc0JBQXNCLDhDQUE4Qyx3REFBd0QsT0FBTyxtQ0FBbUMsNENBQTRDLE9BQU8scUJBQXFCLDBCQUEwQiw0Q0FBNEMsMkJBQTJCLE9BQU8sZ0JBQWdCLHlEQUF5RCxPQUFPLHNCQUFzQiwwQkFBMEIsT0FBTyxvQ0FBb0MsNEJBQTRCLDRDQUE0QyxrQ0FBa0Msd0JBQXdCLCtCQUErQiw2QkFBNkIsc0JBQXNCLE9BQU8sbUJBQW1CLDJDQUEyQyxPQUFPLGlCQUFpQiwrQkFBK0IsMkJBQTJCLHFCQUFxQixPQUFPLHlCQUF5QiwwQkFBMEIsNENBQTRDLE9BQU8sbUJBQW1CLDBCQUEwQiwwQkFBMEIsT0FBTyx5Q0FBeUMsNENBQTRDLE9BQU8saUJBQWlCLHVDQUF1QyxHQUFHLEdBQUcsbUJBQW1CO0FBQ3p0WTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hlMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFb0I7QUFDWTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBTTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R007QUFDQTtBQUNNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFVOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFVO0FBQ3JDO0FBQ0E7QUFDQSwyQkFBMkIsaURBQVU7QUFDckM7QUFDQTtBQUNBLDJCQUEyQixvREFBYTtBQUN4QztBQUNBO0FBQ0EsMkJBQTJCLGlEQUFVO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEo0QjtBQUNBO0FBQ0Y7QUFDRTtBQUNNOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxzREFBWTtBQUM1Qyw0QkFBNEIsbURBQVM7QUFDckMsNEJBQTRCLGtEQUFRO0FBQ3BDLDRCQUE0QixtREFBUztBQUNyQyw2QkFBNkIsbURBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEUxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7O0FBRTFCLGlEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NoZXJvbGluYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0xvdWlzIEdlb3JnZSBDYWZlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvTG91aXMgR2VvcmdlIENhZmUgTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ib2R5LXRoZW1lOiAjZmFmN2YzO1xuICAgIC0tYmx1ZS10aGVtZTogcmdiKDk1LCAxMTMsIDE3Myk7XG4gICAgLS10YW4tdGhlbWU6IHJnYigyNTUsIDI0MiwgMjI3KTtcbiAgICAtLXJvc2UtdGhlbWU6IHJnYigyNTMsIDIzNSwgMjE0KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdHMnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdmYW5jeSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2luZm8xJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4vKiAtLS0tLS0tLS0tLS1NQUlOIEhUTUwgQk9YRVMtLS0tLS0tLS0tLS0gKi9cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LXRoZW1lKTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkzcHggMWZyIDQ2LjVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tU1RBVElDIFBBR0UgU1RMWUVTLS0tLS0tLS0tLS0tICovXG4vKiBIRUFEIFNUWUxFUyAqL1xuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiA5M3B4O1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbiNoZWFkZXJCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1NXZ3LCAxMDMycHgpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cblxuI2xvZ28sXG4jaW5mb0xvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ2ZhbmN5JztcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cblxuI2luZm9Mb2dvIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuI25hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubmF2QnRuIHtcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi10aGVtZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tdGFuLXRoZW1lKTtcbn1cblxuLyogTUFJTiBTRUNUSU9OICovXG4jbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIFxuLyogRk9PVCBTRUNUSU9OICovXG4jZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXgtaGVpZ2h0OiA0Ni41cHg7XG4gICAgbWluLXdpZHRoOiA2NTBweDtcbn1cblxuI2dpdEh1YiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAwIDAgNjBweDtcbn1cblxuI3NvY2lhbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgNjBweCAwIDA7XG59XG5cbi5mYS1mb290IHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xufVxuXG4uZmEtZm9vdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDIwcHggdmFyKC0tcm9zZS10aGVtZSk7XG59XG5cblxuLyogLS0tLS0tLS0tLS0tSE9NRSBNT0RVTEUgU1RZTEUtLS0tLS0tLS0tLS0gKi9cbiNob21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY292ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG5cbiNjb3ZlckltZyB7XG4gICAgd2lkdGg6IGNsYW1wKDU5OHB4LCA1NXZ3LCAxMDMycHgpO1xufVxuXG4jd2VsY29tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDM1cHggMCAzNXB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAwIDQwcHggNTBweCA1MHB4IHZhcigtLWJvZHktdGhlbWUpO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cblxuLndlbGNvbWUtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDY1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xufVxuXG4ud2VsY29tZS10ZXh0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YW4tdGhlbWUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyMHB4IHZhcigtLXRhbi10aGVtZSk7XG59XG5cbiN3YWxsIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xufVxuXG4jd2FsbEltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XG59XG5cbiNpbmZve1xuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzEnO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzNXB4IDAgNDBweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXRoZW1lKTsgKi9cbn1cblxuI2FkZHJlc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XG59XG5cbiNzY2hlZHVsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA2cHggMjBweFxufVxuXG4uZGF5IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogLS0tLS0tLS0tLS0tTUVOVSBTVFlMRS0tLS0tLS0tLS0tLSAqL1xuI21lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtZW51LWxpc3Qge1xuICAgIHdpZHRoOiBjbGFtcCg2NTBweCwgNTV2dywgMTAzMnB4KTtcbiAgICBtYXJnaW46IDAgMCA2MHB4IDA7XG59XG5cbi5tZW51LWl0ZW0tZXZlbixcbi5tZW51LWl0ZW0tb2RkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cblxuLm1lbnUtaXRlbS1ldmVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LXRoZW1lKTtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuXG4ubWVudS1pdGVtLW9kZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XG4gICAgcGFkZGluZzogMCAyNXB4IDAgMjVweDtcbn1cblxuLm1lbnUtaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cbi5pdGVtLWluZm97XG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XG4gICAgcGFkZGluZzogMCAyMHB4IDAgMDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcbn1cblxuLml0ZW0tdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xufVxuXG4ubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XG5cbn1cblxuLyogLS0tLS0tLS0tLUNPTlRBQ1QtLS0tLS0tLS0gKi9cbiNjb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4jY29udGFjdC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBjbGFtcCg1MDBweCwgNTV2dywgMTAzMnB4KTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XG59XG5cbiNpbmZvLWJveCB7XG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMSc7XG4gICAgd2lkdGg6IGNsYW1wKDMyMHB4LCA1NXZ3LCA3MDBweCk7XG4gICAgcGFkZGluZzogMTVweCAwIDE1cHggMDtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbjogNXB4IDAgMTVweCAwO1xufVxuXG5cbi5mYS1jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWJsdWUtdGhlbWUpO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcbn1cblxuI21hcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMCA0MHB4IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwLWlmcmFtZSB7XG4gICAgd2lkdGg6IGNsYW1wKDMyMHB4LCA1NXZ3LCA3MDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgyMDBweCwgMTAwJSwgNDUwcHgpO1xufVxuXG5cbi8qIEJSRUFLICovXG4vKiBCUkVBSyAqL1xuXG4vKiAtLS0tLS0tLS0tLS1OQVJST1dFUi0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAvKiBQQUdFICovXG4gICAgI2hlYWRlckJveCB7XG4gICAgICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgNTV2dywgMTAzMnB4KTtcbiAgICB9XG4gICAgI2xvZ28sXG4gICAgI2luZm9Mb2dvIHtcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xuICAgIH1cbiAgICAjbmF2IHtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICAgIC5uYXZCdG4ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgIC8qIEhPTUUgKi9cbiAgICAjY292ZXJJbWcge1xuICAgICAgICB3aWR0aDogY2xhbXAoNTk4cHgsIDU1dncsIDEwMzJweCk7XG4gICAgfVxuICAgICNmb290ZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC53ZWxjb21lLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiBjbGFtcCgzOTlweCwgNTV2dywgNTUwcHgpO1xuICAgIH1cbiAgICAjYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAvKiBNRU5VICovXG5cbn1cblxuXG4vKiAtLS0tLS0tLS0tLS1NT0JJTEUtLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHsgXG4gICAgLyogUEFHRSAqL1xuICAgICNjb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNDYuNXB4O1xuICAgIH1cblxuICAgICNoZWFkZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgICNoZWFkZXJCb3gge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDU1dncsIDEwMzJweCk7XG4gICAgfVxuICAgICNsb2dvIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjZlbTtcbiAgICB9XG4gICAgLm5hdkJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgfVxuICAgIC5uYXZCdG46aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMTBweCB2YXIoLS10YW4tdGhlbWUpO1xuICAgIH1cbiAgICAjbmF2IHtcbiAgICAgICAgZ2FwOiAzcHg7XG4gICAgfVxuICAgICNnaXRIdWIge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgfVxuXG4gICAgI3NvY2lhbHMge1xuICAgICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG4gICAgfVxuICAgIC5mYS1mb290OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS10aGVtZSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDhweCB2YXIoLS1yb3NlLXRoZW1lKTtcbiAgICB9XG5cbiAgICAvKiBIT01FICovXG4gICAgI2NvdmVySW1nIHtcbiAgICAgICAgd2lkdGg6IGNsYW1wKDMyMHB4LCA3NXZ3LCAxMDMycHgpO1xuICAgIH1cbiAgICAud2VsY29tZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDU1dncsIDEwMzJweCk7XG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgfVxuICAgICN3ZWxjb21lIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0MHB4IDI1cHggMjVweCB2YXIoLS1ib2R5LXRoZW1lKTtcbiAgICB9XG4gICAgXG4gICAgI2FkZHJlc3Mge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLyogTUVOVSAqL1xuICAgICNtZW51LWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cbiAgICAubWVudS1pdGVtLWV2ZW4sXG4gICAgLm1lbnUtaXRlbS1vZGQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHggMCA4cHg7XG4gICAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgICAgICAgZ2FwOiAwIDE1cHg7XG4gICAgfVxuICAgIC5tZW51LWltYWdlIHtcbiAgICAgICAgd2lkdGg6IGNsYW1wKCAxMzBweCwgNDAlLCAyNTBweCk7XG4gICAgfVxuICAgIC5pdGVtLWluZm97XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IGNsYW1wKCAxMzBweCwgMTAwJSwgNDYwcHgpO1xuICAgIH1cbiAgICAuaXRlbS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgIH1cblxuICAgIC8qIENPTlRBQ1QgKi9cbiAgICAjY29udGFjdC1ib3gge1xuICAgICAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDU1dncsIDEwMzJweCk7XG4gICAgfVxuICAgICNpbmZvLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwcHg7XG59XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFxQztBQUN6QztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFpQztBQUNyQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEyQztBQUMvQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFrRDtBQUN0RDs7QUFFQSw0Q0FBNEM7QUFDNUM7SUFDSSxTQUFTO0lBQ1QsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBLCtDQUErQztBQUMvQyxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNi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c0I7UUFDdEIsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7S0FDbEI7SUFDRDtRQUNJLDhDQUE4QztJQUNsRDtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1DQUFtQztRQUNuQyw2Q0FBNkM7SUFDakQ7O0lBRUEsU0FBUztJQUNUO1FBQ0ksaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksOENBQThDO0lBQ2xEOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQSxTQUFTO0lBQ1Q7UUFDSTtJQUNKO0lBQ0E7O1FBRUksdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlDQUFpQztJQUNyQztJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7O0lBRUEsWUFBWTtJQUNaO1FBQ0ksaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSw0QkFBNEI7QUFDcEM7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYm9keS10aGVtZTogI2ZhZjdmMztcXG4gICAgLS1ibHVlLXRoZW1lOiByZ2IoOTUsIDExMywgMTczKTtcXG4gICAgLS10YW4tdGhlbWU6IHJnYigyNTUsIDI0MiwgMjI3KTtcXG4gICAgLS1yb3NlLXRoZW1lOiByZ2IoMjUzLCAyMzUsIDIxNCk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90cyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZhbmN5JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ2hlcm9saW5hLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0xvdWlzXFxcXCBHZW9yZ2VcXFxcIENhZmUudHRmJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2luZm8yJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTG91aXNcXFxcIEdlb3JnZVxcXFwgQ2FmZVxcXFwgTGlnaHQudHRmJyk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLU1BSU4gSFRNTCBCT1hFUy0tLS0tLS0tLS0tLSAqL1xcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktdGhlbWUpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkzcHggMWZyIDQ2LjVweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tU1RBVElDIFBBR0UgU1RMWUVTLS0tLS0tLS0tLS0tICovXFxuLyogSEVBRCBTVFlMRVMgKi9cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDkzcHg7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcblxcbiNoZWFkZXJCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY2xhbXAoNTAwcHgsIDU1dncsIDEwMzJweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbn1cXG5cXG4jbG9nbyxcXG4jaW5mb0xvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ2ZhbmN5JztcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtdGhlbWUpO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XFxufVxcblxcbiNpbmZvTG9nbyB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ubmF2QnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdkJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi10aGVtZSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyMHB4IHZhcigtLXRhbi10aGVtZSk7XFxufVxcblxcbi8qIE1BSU4gU0VDVElPTiAqL1xcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuIFxcbi8qIEZPT1QgU0VDVElPTiAqL1xcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC1oZWlnaHQ6IDQ2LjVweDtcXG4gICAgbWluLXdpZHRoOiA2NTBweDtcXG59XFxuXFxuI2dpdEh1YiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBtYXJnaW46IDAgMCAwIDYwcHg7XFxufVxcblxcbiNzb2NpYWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMCA2MHB4IDAgMDtcXG59XFxuXFxuLmZhLWZvb3Qge1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10aGVtZSk7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjNzO1xcbn1cXG5cXG4uZmEtZm9vdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UtdGhlbWUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMjBweCB2YXIoLS1yb3NlLXRoZW1lKTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tSE9NRSBNT0RVTEUgU1RZTEUtLS0tLS0tLS0tLS0gKi9cXG4jaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb3ZlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbn1cXG5cXG4jY292ZXJJbWcge1xcbiAgICB3aWR0aDogY2xhbXAoNTk4cHgsIDU1dncsIDEwMzJweCk7XFxufVxcblxcbiN3ZWxjb21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMzVweCAwIDM1cHggMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IDAgNDBweCA1MHB4IDUwcHggdmFyKC0tYm9keS10aGVtZSk7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIG1heC13aWR0aDogNjUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IC4zcztcXG59XFxuXFxuLndlbGNvbWUtdGV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhbi10aGVtZSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAyMHB4IHZhcigtLXRhbi10aGVtZSk7XFxufVxcblxcbiN3YWxsIHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4jd2FsbEltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4jaW5mb3tcXG4gICAgZm9udC1mYW1pbHk6ICdpbmZvMSc7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDM1cHggMCA0MHB4IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UtdGhlbWUpOyAqL1xcbn1cXG5cXG4jYWRkcmVzcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4jc2NoZWR1bGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogNnB4IDIwcHhcXG59XFxuXFxuLmRheSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS1NRU5VIFNUWUxFLS0tLS0tLS0tLS0tICovXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbWVudS1saXN0IHtcXG4gICAgd2lkdGg6IGNsYW1wKDY1MHB4LCA1NXZ3LCAxMDMycHgpO1xcbiAgICBtYXJnaW46IDAgMCA2MHB4IDA7XFxufVxcblxcbi5tZW51LWl0ZW0tZXZlbixcXG4ubWVudS1pdGVtLW9kZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XFxufVxcblxcbi5tZW51LWl0ZW0tZXZlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktdGhlbWUpO1xcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcbn1cXG5cXG4ubWVudS1pdGVtLW9kZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UtdGhlbWUpO1xcbiAgICBwYWRkaW5nOiAwIDI1cHggMCAyNXB4O1xcbn1cXG5cXG4ubWVudS1pbWFnZSB7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XFxufVxcbi5pdGVtLWluZm97XFxuICAgIGZvbnQtZmFtaWx5OiAnaW5mbzInO1xcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAuM3M7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcblxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tQ09OVEFDVC0tLS0tLS0tLSAqL1xcbiNjb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuI2NvbnRhY3QtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCg1MDBweCwgNTV2dywgMTAzMnB4KTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgLjNzO1xcbn1cXG5cXG4jaW5mby1ib3gge1xcbiAgICBmb250LWZhbWlseTogJ2luZm8xJztcXG4gICAgd2lkdGg6IGNsYW1wKDMyMHB4LCA1NXZ3LCA3MDBweCk7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiA1cHggMCAxNXB4IDA7XFxufVxcblxcblxcbi5mYS1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtdGhlbWUpO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC4zcztcXG59XFxuXFxuI21hcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMCA0MHB4IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI21hcC1pZnJhbWUge1xcbiAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDU1dncsIDcwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyMDBweCwgMTAwJSwgNDUwcHgpO1xcbn1cXG5cXG5cXG4vKiBCUkVBSyAqL1xcbi8qIEJSRUFLICovXFxuXFxuLyogLS0tLS0tLS0tLS0tTkFSUk9XRVItLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAvKiBQQUdFICovXFxuICAgICNoZWFkZXJCb3gge1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDQwMHB4LCA1NXZ3LCAxMDMycHgpO1xcbiAgICB9XFxuICAgICNsb2dvLFxcbiAgICAjaW5mb0xvZ28ge1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICB9XFxuICAgICNuYXYge1xcbiAgICAgICAgZ2FwOiA4cHg7XFxuICAgIH1cXG4gICAgLm5hdkJ0biB7XFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgIH1cXG5cXG4gICAgIC8qIEhPTUUgKi9cXG4gICAgI2NvdmVySW1nIHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1OThweCwgNTV2dywgMTAzMnB4KTtcXG4gICAgfVxcbiAgICAjZm9vdGVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAud2VsY29tZS10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCgzOTlweCwgNTV2dywgNTUwcHgpO1xcbiAgICB9XFxuICAgICNhZGRyZXNzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAvKiBNRU5VICovXFxuXFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLU1PQklMRS0tLS0tLS0tLS0tLSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHsgXFxuICAgIC8qIFBBR0UgKi9cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNDYuNXB4O1xcbiAgICB9XFxuXFxuICAgICNoZWFkZXIge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcbiAgICAjaGVhZGVyQm94IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDU1dncsIDEwMzJweCk7XFxuICAgIH1cXG4gICAgI2xvZ28ge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjZlbTtcXG4gICAgfVxcbiAgICAubmF2QnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgIH1cXG4gICAgLm5hdkJ0bjpob3ZlciB7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMTBweCB2YXIoLS10YW4tdGhlbWUpO1xcbiAgICB9XFxuICAgICNuYXYge1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgIH1cXG4gICAgI2dpdEh1YiB7XFxuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxuICAgIH1cXG5cXG4gICAgI3NvY2lhbHMge1xcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xcbiAgICB9XFxuICAgIC5mYS1mb290OmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UtdGhlbWUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggOHB4IHZhcigtLXJvc2UtdGhlbWUpO1xcbiAgICB9XFxuXFxuICAgIC8qIEhPTUUgKi9cXG4gICAgI2NvdmVySW1nIHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCgzMjBweCwgNzV2dywgMTAzMnB4KTtcXG4gICAgfVxcbiAgICAud2VsY29tZS10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNTV2dywgMTAzMnB4KTtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIH1cXG4gICAgI3dlbGNvbWUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA0MHB4IDI1cHggMjVweCB2YXIoLS1ib2R5LXRoZW1lKTtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHJlc3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuXFxuICAgIC8qIE1FTlUgKi9cXG4gICAgI21lbnUtbGlzdCB7XFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICB9XFxuICAgIC5tZW51LWl0ZW0tZXZlbixcXG4gICAgLm1lbnUtaXRlbS1vZGQge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XFxuICAgICAgICBnYXA6IDAgMTVweDtcXG4gICAgfVxcbiAgICAubWVudS1pbWFnZSB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoIDEzMHB4LCA0MCUsIDI1MHB4KTtcXG4gICAgfVxcbiAgICAuaXRlbS1pbmZve1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdpbmZvMic7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcbiAgICAubWVudS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB3aWR0aDogY2xhbXAoIDEzMHB4LCAxMDAlLCA0NjBweCk7XFxuICAgIH1cXG4gICAgLml0ZW0tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xcbiAgICB9XFxuXFxuICAgIC8qIENPTlRBQ1QgKi9cXG4gICAgI2NvbnRhY3QtYm94IHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCgzMjBweCwgNTV2dywgMTAzMnB4KTtcXG4gICAgfVxcbiAgICAjaW5mby1ib3gge1xcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggMTBweDtcXG59XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm8tYm94Jyk7XG5cbiAgY29uc3QgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG4gIGNvbnN0IGFkZHJlc3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYScsICdmYS1sb2NhdGlvbi1kb3QnLCAnZmEtY29udGFjdCcpO1xuICBhZGRyZXNzSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgY29uc3QgY0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY0FkZHJlc3MudGV4dENvbnRlbnQgPSAnSEVBVVZFTlNFV0VHIDVBLCA2OTkxIEpFIFJIRURFTiwgTkVUSEVSTEFORFMnO1xuICBjb250YWN0QWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzSWNvbik7XG4gIGNvbnRhY3RBZGRyZXNzLmFwcGVuZENoaWxkKGNBZGRyZXNzKTtcbiAgaW5mb0JveC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG5cbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1lbnZlbG9wZScsICdmYS1jb250YWN0Jyk7XG4gIGVtYWlsSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgY29uc3QgY0VtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNFbWFpbC50ZXh0Q29udGVudCA9ICdpbmZvQGF0ZXJtYS5ubCc7XG4gIGNvbnRhY3RFbWFpbC5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xuICBjb250YWN0RW1haWwuYXBwZW5kQ2hpbGQoY0VtYWlsKTtcbiAgaW5mb0JveC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuXG4gIGNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0UGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG4gIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBob25lLXZvbHVtZScsICdmYS1jb250YWN0Jyk7XG4gIHBob25lSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgY29uc3QgY1Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNQaG9uZS50ZXh0Q29udGVudCA9ICcrMzEgMTIzIDQ1NjcnO1xuICBjb250YWN0UGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgY29udGFjdFBob25lLmFwcGVuZENoaWxkKGNQaG9uZSk7XG4gIGluZm9Cb3guYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcblxuICByZXR1cm4gaW5mb0JveDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1hcCA9ICgpID0+IHtcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1hcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hcCcpO1xuICBtYXAuaW5uZXJIVE1MID0gYFxuICAgIDxpZnJhbWVcbiAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDU2MDQ1LjM3MTI2ODQ1MzM4ITJkNS45NzgzNDI1NTMxNjQ3ODMhM2Q1Mi4wNDI1OTA3NDI5MDg2NyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDdjN2JjYzkyNzhhMGE0NyUzQTB4NDZhMTQ3NmI3OTk5NDAyZiEyc05hdGlvbmFhbCUyMFBhcmslMjBWZWx1d2V6b29tITVlMCEzbTIhMXNlbiEyc3VzITR2MTY4ODUxMDM4MDc1OCE1bTIhMXNlbiEyc3VzXCJcbiAgICAgIGlkPVwibWFwLWlmcmFtZVwiXG4gICAgICBzdHlsZT1cImJvcmRlcjowO1wiXG4gICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgPjwvaWZyYW1lPlxuICBgO1xuICByZXR1cm4gbWFwO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdEJveCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1ib3gnKTtcbiAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0SW5mbygpKTtcbiAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjcmVhdGVNYXAoKSk7XG4gIHJldHVybiBjb250YWN0Qm94O1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RCb3goKSk7XG4gIHJldHVybiBjb250YWN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCBwaWNuaWMgZnJvbSAnLi9pbWFnZXMvYnctcGljbmljLWNyb3AuanBnJztcbmltcG9ydCBwYXJrUGljIGZyb20gJy4vaW1hZ2VzL25hdGlvbmFhbC1wYXJrLXZlbHV3ZXpvb20uanBnJztcblxuY29uc3QgY3JlYXRlQ292ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvdmVySW1nID0gbmV3IEltYWdlKCk7XG4gIGNvdmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY292ZXInKTtcbiAgY292ZXJJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdjb3ZlckltZycpO1xuICBjb3ZlckltZy5zcmMgPSBwaWNuaWM7XG4gIGNvdmVyLmFwcGVuZENoaWxkKGNvdmVySW1nKTtcbiAgcmV0dXJuIGNvdmVyO1xufTtcblxuY29uc3QgY3JlYXRlV2VsY29tZSA9ICgpID0+IHtcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWxjb21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VsY29tZScpO1xuICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZCgnd2VsY29tZS10ZXh0Jyk7XG4gIHdlbGNvbWVUZXh0LnRleHRDb250ZW50ID0gJ05lc3RsZWQgaW4gcm9sbGluZyBoaWxscyBhbmQgY3JhZGxlZCBieSBhbmNpZW50IHdvb2QgYW5kIGJpbGxvd2luZyBwdXJwbGUgaGVhdGgsIEF0ZXJtYSBpcyBhIG5pY2UgcGxhY2UgdG8gaGF2ZSBsdW5jaC4gSm9pbiB1cyBmb3IgYSBsb3ZlbHkgZGF5IG9uIHRoZSBncmFzcyB3aXRoIGEgcGljbmljIHBhY2thZ2Ugb2YgeW91ciBjaG9pY2UuIEFuZCBicmluZyBhbnkgZXh0cmFzIG9yIGNvbXBsaW1lbnRzIHlvdSBsaWtlISc7XG4gIHdlbGNvbWUuYXBwZW5kQ2hpbGQod2VsY29tZVRleHQpO1xuICByZXR1cm4gd2VsY29tZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IHdhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd2FsbEltZyA9IG5ldyBJbWFnZSgpO1xuICB3YWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2FsbCcpO1xuICB3YWxsSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2FsbEltZycpO1xuICB3YWxsSW1nLnNyYyA9IHBhcmtQaWM7XG4gIHdhbGwuYXBwZW5kQ2hpbGQod2FsbEltZyk7XG4gIHJldHVybiB3YWxsO1xufTtcblxuY29uc3QgY3JlYXRlSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0xvZ28udGV4dENvbnRlbnQgPSAnQXRlcm1hJztcbiAgaW5mb0xvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdpbmZvTG9nbycpO1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm8nKTtcbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHJlc3MnKTtcbiAgc2NoZWR1bGUuc2V0QXR0cmlidXRlKCdpZCcsICdzY2hlZHVsZScpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0hFQVVWRU5TRVdFRyA1QSwgNjk5MSBKRSBSSEVERU4sIE5FVEhFUkxBTkRTJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VyJyk7XG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdNIE8gTic7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSA5IFAnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gJ1QgVSBFIFMnO1xuICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9ICc1IC0gOSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdXIEUgRCBTJztcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSAnNSAtIDExIFAnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gJ1QgSCBVIFIgUyc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdGIFIgSSc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdTIEEgVCc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9ICdTIFUgTic7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJ0MgTCBPIFMgRSBEJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnTU9OLVNBVCc7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gJzUgLSAxMSBQJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKGRheSk7XG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICB9XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0xvZ28pO1xuICBpbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBpbmZvLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcbiAgcmV0dXJuIGluZm87XG59O1xuXG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlQ292ZXIoKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlV2VsY29tZSgpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVXYWxsKCkpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oKSk7XG4gIHJldHVybiBob21lO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0Jztcbi8vIGltcG9ydCBnaEljb24gZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2Zyc7XG4vLyBpbXBvcnQgaW5zdGFJY29uIGZyb20gJy4vaW1hZ2VzL2luc3RhZ3JhbS5zdmcnO1xuLy8gaW1wb3J0IG1haWxJY29uIGZyb20gJy4vaW1hZ2VzL2VtYWlsLW91dGxpbmUuc3ZnJztcbi8vIGltcG9ydCBtYXBzSWNvbiBmcm9tICcuL2ltYWdlcy9nb29nbGUtbWFwcy5zdmcnO1xuXG4vLyBQdWxsIG91ciBIVE1MIHRhZyBpbnRvIGpzXG4vLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIENyZWF0ZSBIZWFkZXIgZGl2IGFuZCBhcHBlbmQgaXQgdG8gY29udGVudFxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICBoZWFkZXJCb3guc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJCb3gnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckJveCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUxvZ28gPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQm94Jyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nby50ZXh0Q29udGVudCA9ICdBdGVybWEnO1xuICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xuICBoZWFkQm94LmFwcGVuZENoaWxkKGxvZ28pO1xufTtcblxuLy8gQ3JlYXRlIE5hdiBzZWN0aW9uIG9mIGhlYWRlciBhbmQgaXQncyBidXR0b25zLCBhc3NpZ24gYXR0cmlidXRlcywgYXBwZW5kXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQm94Jyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcbiAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVCdG4nKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVCdG4nKTtcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RCdG4nKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIT01FJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgaGVhZEJveC5hcHBlbmRDaGlsZChuYXYpO1xufTtcblxuLy8gQ3JlYXRlIE1haW4gZGl2IGFuZCBhcHBlbmQgaXQgdG8gY29udGVudFxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbi8vIENyZWF0ZSBGb290ZXIgZGl2IGFuZCBhcHBlbmQgaXQgdG8gY29udGVudFxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBnaXRIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHNvY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2l0SHViLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0SHViJyk7XG4gIGdpdEh1Yi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdibGFuaycpO1xuICBnaXRIdWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbHVrZXNwaWNrbmFsbC9yZXN0YXVyYW50LXBhZ2UnO1xuICBzb2NpYWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc29jaWFscycpO1xuXG4gIGNvbnN0IGdoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZ2hMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhJywgJ2ZhLWdpdGh1YicsICdmYS1mb290Jyk7XG4gIGdoTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgZ2l0SHViLmFwcGVuZENoaWxkKGdoTGluayk7XG5cbiAgY29uc3QgaW5zdGFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpbnN0YUxpbmsuY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJywgJ2ZhLWluc3RhZ3JhbScsICdmYS1mb290Jyk7XG4gIGluc3RhTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgY29uc3QgaW5zdGFTaGVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaW5zdGFTaGVsbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdibGFuaycpO1xuICBpbnN0YVNoZWxsLmhyZWYgPSAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9leHBsb3JlL2xvY2F0aW9ucy8yNDI5Mzc0MjYvdmVsdXdlem9vbS1uYXRpb25hbC1wYXJrLyc7XG4gIGluc3RhU2hlbGwuYXBwZW5kQ2hpbGQoaW5zdGFMaW5rKTtcbiAgc29jaWFscy5hcHBlbmRDaGlsZChpbnN0YVNoZWxsKTtcblxuICBjb25zdCBtYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbWFpbExpbmsuY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS1lbnZlbG9wZScsICdmYS1mb290Jyk7XG4gIG1haWxMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICBjb25zdCBtYWlsU2hlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG1haWxTaGVsbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdibGFuaycpO1xuICBtYWlsU2hlbGwuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbHVrZXNwaWNrbmFsbC9yZXN0YXVyYW50LXBhZ2UnO1xuICBtYWlsU2hlbGwuYXBwZW5kQ2hpbGQobWFpbExpbmspO1xuICBzb2NpYWxzLmFwcGVuZENoaWxkKG1haWxTaGVsbCk7XG5cbiAgY29uc3QgbWFwTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbWFwTGluay5jbGFzc0xpc3QuYWRkKCdmYScsICdmYS1sb2NhdGlvbi1kb3QnLCAnZmEtZm9vdCcpO1xuICBtYXBMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1yZWd1bGFyJywgJ3RydWUnKTtcbiAgY29uc3QgbWFwU2hlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG1hcFNoZWxsLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ2JsYW5rJyk7XG4gIG1hcFNoZWxsLmhyZWYgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL05hdGlvbmFhbCtQYXJrK1ZlbHV3ZXpvb20vQDUyLjA0NzM3NjEsNi4wMDU0MjU3LDE0ei9kYXRhPSE0bTYhM201ITFzMHg0N2M3YmNjOTI3OGEwYTQ3OjB4NDZhMTQ3NmI3OTk5NDAyZiE4bTIhM2Q1Mi4wNDgzMTAzITRkNi4wMTk4ODY5ITE2cyUyRm0lMkYwNW1fZ3FnP2VudHJ5PXR0dSc7XG4gIG1hcFNoZWxsLmFwcGVuZENoaWxkKG1hcExpbmspO1xuICBzb2NpYWxzLmFwcGVuZENoaWxkKG1hcFNoZWxsKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFscyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbi8vIFB1bGxzIHRoZSBjbGlja2VkIG5hdkJ0biBwYWdlIHRvIGRpc3BsYXkgb24gZGl2Lm1haW5cbmNvbnN0IHNldE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2QnRuJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcblxuICBuYXZCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNhc2UgJ2hvbWVCdG4nOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudUJ0bic6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0QnRuJzpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIFBhc3MgYWxsIEhUTUwgc2tlbGV0b24gZWxlbWVudHMgdG8gaW5kZXguanNcbmNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVNYWluKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xuICBjcmVhdGVMb2dvKCk7XG4gIGNyZWF0ZU5hdigpO1xuICBzZXRNYWluKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkO1xuIiwiaW1wb3J0IHBpbm90UGFjayBmcm9tICcuL2ltYWdlcy9waW5vdC1wYWNrLmpwZyc7XG5pbXBvcnQgc25hY2tQYWNrIGZyb20gJy4vaW1hZ2VzL3NuYWNrLXBhY2suanBnJztcbmltcG9ydCB0YWNvUGFjayBmcm9tICcuL2ltYWdlcy90YWNvLXBhY2suanBnJztcbmltcG9ydCBmcnVpdFBhY2sgZnJvbSAnLi9pbWFnZXMvZnJ1aXQtcGFjay5qcGcnO1xuaW1wb3J0IHNhbmR3aWNoUGFjayBmcm9tICcuL2ltYWdlcy9zYW5kd2ljaC1wYWNrLmpwZyc7XG5cbmNvbnN0IGNyZWF0ZU1lbnVsaXN0ID0gKCkgPT4ge1xuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtbGlzdCcpO1xuXG4gIGNvbnN0IG1lbnVJdGVtRXZlbiA9IChhLCBiLCBjKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWV2ZW4nKTtcbiAgICBjb25zdCBtZW51SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51SW1hZ2Uuc3JjID0gYTtcbiAgICBtZW51SW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgIGNvbnN0IGl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUluZm8uY2xhc3NMaXN0LmFkZCgnaXRlbS1pbmZvJyk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBiO1xuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgbWVudURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYztcbiAgICBpdGVtSW5mby5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIGl0ZW1JbmZvLmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUluZm8pO1xuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIGNvbnN0IG1lbnVJdGVtT2RkID0gKGEsIGIsIGMpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tb2RkJyk7XG4gICAgY29uc3QgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUltYWdlLnNyYyA9IGE7XG4gICAgbWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1hZ2UnKTtcbiAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mbycpO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gYjtcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGM7XG4gICAgaXRlbUluZm8uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBpdGVtSW5mby5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUluZm8pO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBjb25zdCBzYW5kd2ljaCA9IG1lbnVJdGVtRXZlbihzYW5kd2ljaFBhY2ssICdTYW5kd2ljaCBQaWNuaWMnLCAnVGhlIGdvLXRvLiBTbW9rZWQgYmVlZiBhbmQgcG9yayB0ZW5kZXJsb2luIHNhbmR3aWNoZXMuIENoYXJjdXRlcmllIGJvYXJkIHdpdGggdW5wYXN0ZXVyaXplZCBnb2F0cyBtaWxrIGNoZWVzZSwgYXByaWNvdCBhbmQgZ2Vya2luLiBBIGNhcmFmZSBvZiBvdXIgaG91c2UgbGFnZXIuJyk7XG4gIGNvbnN0IHBpbm90ID0gbWVudUl0ZW1PZGQocGlub3RQYWNrLCAnVGhlIFBpbm90IFBhY2snLCAnT3VyIHBpbm90IHBhY2sgaXMgcGVyZmVjdCBmb3IgYSBtb3JlIHRyYWRpb25hbCBzcHJlYWQuIEx1c2Npb3VzIGZpZ3MgYW5kIGdyYXBlcyB3aXRoIGNyZWFteSBjb3dzIG1pbGsgY2hlZXNlLiBBIGJvdHRsZSBvZiBQaW5vdCBOb2lyLicpO1xuICBjb25zdCB0YWNvID0gbWVudUl0ZW1FdmVuKHRhY29QYWNrLCAnVGFjbyBQaWNuaWMnLCAnTkVXISBPdXIgVGFjbyBwaWNuaWMgaXMgdGhlIHBlcnBlY3QgcGljayBmb3IgYSBzcGxhc2ggb2Ygc3VtbWVyLiBCcmFpc2VkIGNoaWtlbiB0YWNvcyB3aXRoIGxpbWUgYW5kIGphbGVwZW5vLiBUZXF1aWxhIHNob3RzIHdpdGggZnJlc2ggc3RyYXdiZXJyeSBhbmQgbGltZS4nKTtcbiAgY29uc3QgZnJ1aXQgPSBtZW51SXRlbU9kZChmcnVpdFBhY2ssICdGcnVpdCBhbmQgUm9zZScsICdMb29raW5nIGZvciBzb21ldGhpbmcgbGlnaHQgYW5kIGVsZWdhbnQ/IFRoZSBmcnVpdCBhbmQgcm9zZSBwaWNuaWMgaXMgd2hlcmUgaXRzIGF0LiBBcHBsZSwgd2F0ZXJtZWxvbiBhbmQgcm9zZS4nKTtcbiAgY29uc3Qgc25hY2sgPSBtZW51SXRlbUV2ZW4oc25hY2tQYWNrLCAnVGhlIFNuYWNrIFBhY2snLCAnSnVzdCBuZWVkIHNvbWV0aGluZyB0byBuaWJibGUgd2hpbGUgeW91IGNoZXcgeW91ciBncmFwZXM/IFNhbHR5IHByZXR6ZWxzLCBmcmVzaCBiYWtlZCBjb29raWVzLCBhbmQgc3RyYXdiZXJyeS4nKTtcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoc2FuZHdpY2gpO1xuICBtZW51TGlzdC5hcHBlbmRDaGlsZChwaW5vdCk7XG4gIG1lbnVMaXN0LmFwcGVuZENoaWxkKHRhY28pO1xuICBtZW51TGlzdC5hcHBlbmRDaGlsZChmcnVpdCk7XG4gIG1lbnVMaXN0LmFwcGVuZENoaWxkKHNuYWNrKTtcbiAgcmV0dXJuIG1lbnVMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVsaXN0KCkpO1xuICByZXR1cm4gbWVudTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJztcblxubG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9