/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/carousel.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/carousel.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".carousel {\n  padding: 20px;\n  height: 100%;\n  background-color: #f5f5de;\n  perspective: 1000px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.carousel > * {\n  flex: 0 0 auto;\n}\n.carousel figure {\n  margin: 0;\n  width: 60%;\n  transform-style: preserve-3d;\n  transition: transform 0.5s;\n}\n.carousel figure img {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0px;\n}\n.carousel figure img:not(:first-of-type) {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.carousel nav {\n  display: flex;\n  position: absolute;\n  top: 20%;\n  height: 50%;\n  z-index: 10;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0 0;\n}\n.carousel nav button {\n  flex: 0 0 auto;\n  margin: 0 10px;\n  opacity: 0.8;\n  cursor: pointer;\n  color: #333;\n  background: white;\n  border: 1px dashed red;\n  font-size: 1.5rem;\n  letter-spacing: 1px;\n  padding: 5px 10px;\n}\n.carousel nav button:hover {\n  transform: scale(1.05);\n}", "",{"version":3,"sources":["webpack://./src/css/carousel.scss"],"names":[],"mappings":"AAKE;EACE,aAAA;EACA,YAAA;EACA,yBAAA;EAEA,mBAPgB;EAQhB,gBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;AANJ;AAOI;EACE,cAAA;AALN;AAQI;EACE,SAAA;EAEA,UAtBS;EAuBT,4BAAA;EACA,0BAAA;AAPN;AASM;EACE,WAAA;EACA,sBAAA;EACA,cAAA;AAPR;AASQ;EACE,kBAAA;EACA,OAAA;EACA,MAAA;AAPV;AAYI;EACE,aAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EAEA,8BAAA;EACA,gBAAA;AAXN;AAaM;EACE,cAAA;EACA,cAAA;EACA,YAAA;EAEA,eAAA;EAEA,WAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AAbR;AAgBM;EACE,sBAAA;AAdR","sourcesContent":["  // Carousel configuration parameters\n  $item-width: 60%; // Now we can use percentages!\n  $item-separation: 0px; // This now is set with Js\n  $viewer-distance: 1000px;\n  \n  .carousel {\n    padding: 20px;\n    height: 100%;\n    background-color: rgb(245, 245, 222);\n  \n    perspective: $viewer-distance;\n    overflow: hidden;\n  \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    > * {\n      flex: 0 0 auto;\n    }\n  \n    figure {\n      margin: 0;\n  \n      width: $item-width;\n      transform-style: preserve-3d;\n      transition: transform 0.5s;\n  \n      img {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 0 $item-separation / 2;\n  \n        &:not(:first-of-type) {\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n      }\n    }\n  \n    nav {\n      display: flex;\n      position: absolute;\n      top: 20%;\n      height: 50%;\n      z-index: 10;\n      width: 100%;\n\n      justify-content: space-between;\n      margin: 20px 0 0;\n  \n      button {\n        flex: 0 0 auto;\n        margin: 0 10px;\n        opacity: 0.8;\n  \n        cursor: pointer;\n  \n        color: #333;\n        background: white;\n        border: 1px dashed red;\n        font-size: 1.5rem;\n        letter-spacing: 1px;\n        padding: 5px 10px;\n      }\n\n      button:hover {\n        transform: scale(1.05);\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/gallery.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/gallery.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#pix {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#gallery {\n  aspect-ratio: 1/1;\n  max-width: 90%;\n  max-height: 90%;\n  display: grid;\n  justify-content: center;\n  gap: 2px;\n  grid-template-columns: repeat(6, 1fr);\n  border: 1px dashed red;\n  padding: 3px;\n  margin-bottom: 20px;\n}\n\n.frame {\n  height: 70px;\n  width: 70px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.picture {\n  height: 100%;\n  width: 100%;\n}\n\n.picture:hover {\n  filter: saturate(10);\n  cursor: pointer;\n}\n\n.hidden {\n  opacity: 0.01;\n}", "",{"version":3,"sources":["webpack://./src/css/gallery.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,QAAA;EACA,qCAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;AACJ;;AAEA;EACI,oBAAA;EACA,eAAA;AACJ;;AAEA;EACI,aAAA;AACJ","sourcesContent":["#pix {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#gallery {\n    aspect-ratio: 1/1;\n    max-width: 90%;\n    max-height: 90%;\n    display: grid;\n    justify-content: center;\n    gap: 2px;\n    grid-template-columns: repeat(6, 1fr);\n    border: 1px dashed red;\n    padding: 3px;    \n    margin-bottom: 20px;\n}\n\n.frame {\n    height: 70px;\n    width: 70px;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.picture {\n    height: 100%;\n    width: 100%;\n}\n\n.picture:hover {\n    filter: saturate(10);\n    cursor: pointer;\n}\n\n.hidden {\n    opacity: 0.01;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/map.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/map.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#library::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 -2rem 2rem 0 white;\n  pointer-events: none;\n}\n\n#library {\n  padding-left: 3rem;\n  width: 95%;\n  white-space: pre-wrap;\n  overflow: scroll;\n  overflow-x: hidden;\n  line-height: 2rem;\n  font-size: 1.5rem;\n  font-family: \"Crimsom Text\", serif;\n  padding-bottom: 4rem;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#library::-webkit-scrollbar {\n  display: none;\n}\n\n.mapa {\n  margin-top: 20px;\n  margin-bottom: 50px;\n  width: 100%;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/css/map.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sCAAA;EACA,oBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kCAAA;EACA,oBAAA;EACA,4CAAA;EACA,wBAAA;EAA2B,gBAAA;EAC3B,qBAAA;EAAwB,YAAA;AAG5B;;AAAA,gDAAA;AACA;EACI,aAAA;AAGJ;;AAAA;EACI,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAGJ","sourcesContent":["#library::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 -2rem 2rem 0 white;\n    pointer-events: none;\n}\n\n#library {\n    padding-left: 3rem;\n    width: 95%;\n    white-space: pre-wrap;\n    overflow: scroll;\n    overflow-x: hidden;\n    line-height: 2rem;\n    font-size: 1.5rem;\n    font-family: \"Crimsom Text\", serif;\n    padding-bottom: 4rem;\n    /* Hide scrollbar for IE, Edge and Firefox */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#library::-webkit-scrollbar {\n    display: none;\n}\n\n.mapa {\n    margin-top: 20px;\n    margin-bottom: 50px;\n    width: 100%;\n    height: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/modal.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/modal.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 50px;\n  /* Location of the box */\n  padding-bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #ffffff;\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  aspect-ratio: 1/1;\n  max-width: 80%;\n  max-height: 80%;\n}\n\n/* Caption of Modal Image */\n#caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, #caption {\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0.1);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #5c5c5c;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n#view {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: white;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n#view-content {\n  display: flex;\n  height: 80%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #6b6b6b;\n  animation-name: fadein;\n  animation-duration: 2s;\n}\n\n@keyframes change-color {\n  20% {\n    background-color: #ca6565;\n  }\n  40% {\n    background-color: #6767b6;\n  }\n  80% {\n    background-color: #93d193;\n  }\n  100% {\n    background-color: #d3d35b;\n  }\n}\n@keyframes change-size {\n  0% {\n    transform: scale(0.25);\n  }\n  50% {\n    transform: scale(1);\n    background-color: #ca6565;\n  }\n  100% {\n    transform: scale(0.25);\n    background-color: #93d193;\n  }\n}\n.animated-point {\n  margin-top: 20px;\n  height: 100px;\n  width: 100px;\n  background-color: #93d193;\n  animation-name: change-color;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACI,aAAA;EAAe,sBAAA;EACf,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,iBAAA;EAAmB,wBAAA;EACnB,oBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,yBAAA;AAQJ;;AALA,0BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AAQJ;;AALA,2BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;AAQJ;;AALA,kBAAA;AACA;EACI,oBAAA;EACA,wBAAA;AAQJ;;AALA;EACI;IAAM,qBAAA;EASR;EARE;IAAI,mBAAA;EAWN;AACF;AATA,qBAAA;AACA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAWJ;;AARA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAWJ;;AARA,wCAAA;AACA;EACI;IACI,WAAA;EAWN;AACF;AAPA;EACI,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,uBAAA;AAcJ;;AAXA;EACI;IAAM,UAAA;EAeR;EAdE;IAAI,UAAA;EAiBN;AACF;AAfA;EACI;IAAM,UAAA;EAkBR;EAjBE;IAAI,UAAA;EAoBN;AACF;AAlBA;EACI,aAAA;EACA,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,sBAAA;EACA,sBAAA;AAoBJ;;AAjBA;EACI;IAAK,yBAAA;EAqBP;EApBE;IAAK,yBAAA;EAuBP;EAtBE;IAAK,yBAAA;EAyBP;EAxBE;IAAM,yBAAA;EA2BR;AACF;AAzBA;EACI;IAAI,sBAAA;EA4BN;EA3BE;IAAK,mBAAA;IAAqB,yBAAA;EA+B5B;EA9BE;IAAM,sBAAA;IAAwB,yBAAA;EAkChC;AACF;AAhCA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,sBAAA;EACA,mCAAA;EACA,eAAA;AAkCJ","sourcesContent":["/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 50px; /* Location of the box */\n    padding-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #ffffff;\n  }\n  \n/* Modal Content (image) */\n.modal-content {\n    margin: auto;\n    display: block;\n    aspect-ratio: 1/1;\n    max-width: 80%;\n    max-height: 80%;\n}\n  \n/* Caption of Modal Image */\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n  \n/* Add Animation */\n.modal-content, #caption {  \n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n  \n@keyframes zoom {\n    from {transform: scale(0.1)} \n    to {transform: scale(1)}\n}\n  \n/* The Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #5c5c5c;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n  \n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n  \n#view {\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(255, 255, 255);\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n#view-content {\n    display: flex;\n    height: 80%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color:rgb(107, 107, 107);    \n    animation-name: fadein;\n    animation-duration: 2s;\n}\n\n@keyframes change-color {\n    20% {background-color: rgb(202, 101, 101);}\n    40% {background-color: rgb(103, 103, 182);}\n    80% {background-color: rgb(147, 209, 147);}\n    100% {background-color: rgb(211, 211, 91);}\n}\n\n@keyframes change-size {\n    0% {transform: scale(0.25);}\n    50% {transform: scale(1); background-color: rgb(202, 101, 101);}\n    100% {transform: scale(0.25); background-color: rgb(147, 209, 147);}\n}\n\n.animated-point {\n    margin-top: 20px;\n    height: 100px;\n    width: 100px;\n    background-color: rgb(147, 209, 147);\n    animation-name: change-color;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    cursor: pointer\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n}\n\n#navmenu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100px;\n  border-bottom: 1px dashed red;\n  text-transform: uppercase;\n  font-family: \"Titillium Web\", sans-serif;\n}\n\nh1 {\n  font-size: 2.3rem;\n  text-transform: uppercase;\n  font-family: \"Titillium Web\", sans-serif;\n  user-select: none;\n}\n\n.menu {\n  display: flex;\n  justify-content: space-evenly;\n  width: fit-content;\n}\n\n.menu-item {\n  cursor: pointer;\n  user-select: none;\n  width: fit-content;\n  text-align: center;\n  font-size: 1.3rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.menu-item:hover {\n  color: red;\n}\n\n#wrapper {\n  width: 100%;\n  height: calc(100% - 101px);\n}\n\n/* #header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-align: center;\n    height: 10%;\n} */\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACI,SAAA;AAAJ;;AAGA;EACI,YAAA;EACA,aAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,WAAA;EACA,aAAA;EACA,6BAAA;EACA,yBAAA;EACA,wCAAA;AAAJ;;AAGA;EACI,iBAAA;EACA,yBAAA;EACA,wCAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,6BAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,UAAA;AAAJ;;AAGA;EACI,WAAA;EACA,0BAAA;AAAJ;;AAGA;;;;;;;GAAA;AASA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');\n\n* {\n    margin: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n}\n\n#navmenu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 100px;\n    border-bottom: 1px dashed red;\n    text-transform: uppercase;\n    font-family: 'Titillium Web', sans-serif;\n}\n\nh1 {\n    font-size: 2.3rem;\n    text-transform: uppercase;\n    font-family: 'Titillium Web', sans-serif;\n    user-select: none;\n}\n\n.menu {\n    display: flex;\n    justify-content: space-evenly;\n    width: fit-content;\n}\n\n.menu-item {\n    cursor: pointer;\n    user-select: none;\n    width: fit-content;\n    text-align: center;\n    font-size: 1.3rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n\n.menu-item:hover {\n    color: red;\n}\n\n#wrapper {\n    width: 100%;\n    height: calc(100% - 101px);\n}\n\n/* #header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-align: center;\n    height: 10%;\n} */\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/textcontent.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/textcontent.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#text-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 -4rem 4rem 0 white;\n  pointer-events: none;\n}\n\n#text-container {\n  padding-left: 3rem;\n  width: 50%;\n  white-space: pre-wrap;\n  overflow: scroll;\n  overflow-x: hidden;\n  line-height: 2rem;\n  font-size: 1.5rem;\n  font-family: \"Crimsom Text\", serif;\n  padding-bottom: 4rem;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#text-container::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/textcontent.css"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sCAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kCAAA;EACA,oBAAA;EACA,4CAAA;EACA,wBAAA;EAA2B,gBAAA;EAC3B,qBAAA;EAAwB,YAAA;AAE5B;;AACA,gDAAA;AACA;EACI,aAAA;AAEJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');\n\n#text-container::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 -4rem 4rem 0 white;\n    pointer-events: none;\n}\n\n#text-container {\n    padding-left: 3rem;\n    width: 50%;\n    white-space: pre-wrap;\n    overflow: scroll;\n    overflow-x: hidden;\n    line-height: 2rem;\n    font-size: 1.5rem;\n    font-family: \"Crimsom Text\", serif;\n    padding-bottom: 4rem;\n    /* Hide scrollbar for IE, Edge and Firefox */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#text-container::-webkit-scrollbar {\n    display: none;\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/carousel.scss":
/*!*******************************!*\
  !*** ./src/css/carousel.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/carousel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/gallery.css":
/*!*****************************!*\
  !*** ./src/css/gallery.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./gallery.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/gallery.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/map.css":
/*!*************************!*\
  !*** ./src/css/map.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./map.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/map.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_map_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/textcontent.css":
/*!*********************************!*\
  !*** ./src/css/textcontent.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textcontent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./textcontent.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/textcontent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textcontent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textcontent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textcontent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_textcontent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCarousel": () => (/* binding */ createCarousel),
/* harmony export */   "carouselFunction": () => (/* binding */ carouselFunction)
/* harmony export */ });
/* harmony import */ var _imgdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgdata */ "./src/imgdata.js");
/* harmony import */ var _css_carousel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/carousel.scss */ "./src/css/carousel.scss");




function createCarousel () {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.dataset.gap = 20;
    carousel.dataset.bfc;

    const figure = document.createElement("figure");
    for (let i = 0; i < _imgdata__WEBPACK_IMPORTED_MODULE_0__.imgs.length; i++) {
        const image = document.createElement("img");
        image.src = _imgdata__WEBPACK_IMPORTED_MODULE_0__.imgs[i];
        figure.appendChild(image);
    }
    carousel.appendChild(figure);

    const nav = document.createElement("nav");
    const buttonPrev = document.createElement("button");
    buttonPrev.classList.add("nav", "prev");
    buttonPrev.textContent = "Prev";
    
    const buttonNext = document.createElement("button");
    buttonNext.classList.add("nav", "next");
    buttonNext.textContent = "Next";

    nav.appendChild(buttonPrev);
    nav.appendChild(buttonNext);

    carousel.appendChild(nav);
    return carousel
};
  
function carouselFunction() {
    const carousel = document.querySelector(".carousel");
    var figure = carousel.querySelector("figure"),
      nav = carousel.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = carousel.dataset.gap || 0,
      bfc = true,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
  
      rotateCarousel(currImage);
    }
  
    function setupNavigation() {
      nav.addEventListener("click", onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;
  
        if (t.classList.contains("next")) {
          currImage++;
        } else {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
    }
  
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  }
  

/***/ }),

/***/ "./src/firstview.js":
/*!**************************!*\
  !*** ./src/firstview.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createView": () => (/* binding */ createView)
/* harmony export */ });
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");


function createView() {
    const view = document.createElement("div");
    view.id = "view";

    const viewContent = document.createElement("div");
    viewContent.id = "view-content";
    view.appendChild(viewContent);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = "Superficies";
    projectTitle.classList.add("project");
    viewContent.appendChild(projectTitle);

    const animatedPoint = document.createElement("div");
    animatedPoint.classList.add("animated-point");
    animatedPoint.addEventListener("click", function () {
        view.style.animationName = "fadeout";
        view.style.animationDuration = "0.6s";
        setTimeout (function () {
            view.parentNode.removeChild(view);
        }, 500)
            
    })
    viewContent.appendChild(animatedPoint);

    return view
}

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "galleryContent": () => (/* binding */ galleryContent)
/* harmony export */ });
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _videodata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videodata */ "./src/videodata.js");
/* harmony import */ var _css_gallery_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/gallery.css */ "./src/css/gallery.css");




function galleryContent() {
    const gallery = document.createElement("div");
    gallery.id = "gallery";

    const createDivFrame = (video) => {
        const divTag = document.createElement("div");
        divTag.classList.add("frame");
        divTag.append(video);
        return divTag
    }

    const createVid = (src, color, index) => {
        const vidTag = document.createElement("div");
        vidTag.id = index;
        vidTag.classList.add("picture", "hidden");
        vidTag.style.backgroundColor = color;
        vidTag.addEventListener("mouseover", (e) => {
            e.target.classList.remove("hidden");
        });
        vidTag.addEventListener("click", (e) => {
            _modal_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = "block";
            
            const modalContent = document.createElement("video");
            modalContent.classList.add("modal-content");
            const videoSource = document.createElement("source");
            videoSource.src = src;
            console.log(src)
            videoSource.type = "video/mp4";
            if (modalContent.childNodes[0]) {
                modalContent.childNodes[0].remove();
            };
            modalContent.autoplay = true;
            modalContent.loop = true;
            modalContent.muted = true;
            modalContent.style.width = "600px";
            modalContent.style.height = "600px";
            modalContent.appendChild(videoSource);
            _modal_js__WEBPACK_IMPORTED_MODULE_0__.modal.appendChild(modalContent);
        })
        return vidTag
    }

    for (let i = 0; i < _videodata__WEBPACK_IMPORTED_MODULE_1__.videos.length; i++) {
        const vidsrc = _videodata__WEBPACK_IMPORTED_MODULE_1__.videos[i].src;
        const vidColor = _videodata__WEBPACK_IMPORTED_MODULE_1__.videos[i].rgb;
        
        const vidPicture = createVid(vidsrc, vidColor, i);
        const divFrame = createDivFrame(vidPicture);
        
        gallery.appendChild(divFrame);
    }

    const reset = document.createElement("button");
    reset.id = "reset";
    reset.type = "button";
    reset.textContent = "Reset";
    reset.addEventListener("click", () => {
        const pictures = document.querySelectorAll(".picture");
        pictures.forEach(picture => {
            picture.classList.add("hidden");
        })
    })

    const pix = document.createElement("div");
    pix.id = "pix";
    pix.appendChild(gallery);
    pix.appendChild(reset);

    return pix
}

/***/ }),

/***/ "./src/imgdata.js":
/*!************************!*\
  !*** ./src/imgdata.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imgs": () => (/* binding */ imgs),
/* harmony export */   "mapas": () => (/* binding */ mapas)
/* harmony export */ });
/* harmony import */ var _images_a_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/a.jpg */ "./src/images/a.jpg");
/* harmony import */ var _images_b_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/b.jpg */ "./src/images/b.jpg");
/* harmony import */ var _images_c_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/c.jpg */ "./src/images/c.jpg");
/* harmony import */ var _images_d_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/d.jpg */ "./src/images/d.jpg");
/* harmony import */ var _images_e_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/e.jpg */ "./src/images/e.jpg");
/* harmony import */ var _images_f_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/f.jpg */ "./src/images/f.jpg");
/* harmony import */ var _images_g_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/g.jpg */ "./src/images/g.jpg");
/* harmony import */ var _images_h_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/h.jpg */ "./src/images/h.jpg");
/* harmony import */ var _images_i_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/i.jpg */ "./src/images/i.jpg");
/* harmony import */ var _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/carousel-1.jpg */ "./src/images/carousel-1.jpg");
/* harmony import */ var _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/mapa-1.jpg */ "./src/images/mapa-1.jpg");











const imgs = [
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__,
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__,
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__,
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__,
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, 
    // imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
    // imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
    // imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
    // imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI,
];



const mapas = [
    _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_10__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_10__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_10__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_10__,
]

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMapsLibrary": () => (/* binding */ createMapsLibrary)
/* harmony export */ });
/* harmony import */ var _imgdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgdata */ "./src/imgdata.js");
/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/map.css */ "./src/css/map.css");



function createMapsLibrary() {
    const library = document.createElement("div");
    library.id = "library";

    for (let i = 0; i < _imgdata__WEBPACK_IMPORTED_MODULE_0__.mapas.length; i++) {
        const img = document.createElement("img");
        img.classList.add("mapa");
        img.src = _imgdata__WEBPACK_IMPORTED_MODULE_0__.mapas[i];
        library.appendChild(img);
    }

    return library
}

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");


const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");

const closeButton = document.createElement("span")
closeButton.classList.add("close");
closeButton.addEventListener("click", function() { 
    modal.style.display = "none";
    modal.childNodes[1].remove();
})
closeButton.textContent = "×"
modal.appendChild(closeButton);



/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textContent": () => (/* binding */ textContent)
/* harmony export */ });
/* harmony import */ var _css_textcontent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/textcontent.css */ "./src/css/textcontent.css");


const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas elit a ligula condimentum, vitae ultrices enim venenatis. Curabitur sit amet elementum lorem, in lobortis purus. Donec turpis nibh, imperdiet et tellus sit amet, euismod euismod sem. Praesent nunc erat, ornare sed malesuada et, varius quis arcu. Vivamus urna lacus, interdum at lacus quis, finibus vehicula dolor. In consectetur accumsan blandit. Sed id turpis vitae eros feugiat aliquam id nec massa. Sed vitae faucibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque bibendum gravida neque.

Curabitur aliquet sed justo nec pharetra. Vivamus vitae erat ac nibh consequat imperdiet non condimentum felis. Etiam eu sollicitudin nulla. Nam mollis facilisis mi, id eleifend enim faucibus placerat. Suspendisse velit purus, pellentesque et lacus molestie, hendrerit suscipit nulla. Vivamus purus urna, interdum ut sodales et, facilisis vel mi. Etiam lacinia porttitor imperdiet. Quisque gravida elit eu purus lobortis tempus. Sed sit amet lacus tristique mauris efficitur faucibus sed eget lorem. Cras sit amet lectus in leo scelerisque convallis. Curabitur sed lacus non ligula aliquam eleifend sed a purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sed vulputate enim. Vivamus sit amet egestas arcu. Morbi nulla felis, suscipit cursus nisi ac, sodales mollis ligula. Praesent congue molestie molestie.

Duis magna lectus, blandit vel erat eget, molestie pulvinar nunc. Sed aliquam ultricies nulla, eget consequat tellus porta vel. Curabitur quam nulla, facilisis vitae est vitae, finibus consectetur lorem. Proin viverra massa non est pretium ornare. Nullam sit amet felis eget tellus bibendum tincidunt et quis leo. Ut porta at nisi vitae scelerisque. Nam a quam malesuada, tempor risus eu, iaculis est.

Morbi hendrerit sagittis tempus. Praesent tempus ligula sit amet velit euismod, mollis consequat dui mattis. Nullam id feugiat urna. Phasellus vel egestas libero. Sed et placerat odio. Cras pulvinar vehicula arcu, sed blandit ipsum laoreet eget. Nullam maximus, odio ac sollicitudin pretium, mauris erat viverra arcu, non gravida odio felis fringilla nibh.

Proin in velit vehicula, tempor metus et, sodales lectus. Integer eget ante ac lorem auctor sagittis. Donec nulla nisi, dictum vel metus ac, accumsan vulputate massa. Proin vel consectetur lacus, quis viverra ante. Vivamus in felis a erat luctus vehicula. Mauris et massa sed elit mattis tempus. Mauris odio sapien, tempor eu venenatis a, interdum sed velit.
`;

function textContent() {
    const textContainer = document.createElement("article");
    textContainer.id = "text-container";
    textContainer.textContent = text;

    return textContainer
}

/***/ }),

/***/ "./src/videodata.js":
/*!**************************!*\
  !*** ./src/videodata.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videos": () => (/* binding */ videos)
/* harmony export */ });
/* harmony import */ var _video_1_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/1.mp4 */ "./src/video/1.mp4");
/* harmony import */ var _video_2_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video/2.mp4 */ "./src/video/2.mp4");
/* harmony import */ var _video_3_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video/3.mp4 */ "./src/video/3.mp4");
/* harmony import */ var _video_4_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video/4.mp4 */ "./src/video/4.mp4");
/* harmony import */ var _video_5_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video/5.mp4 */ "./src/video/5.mp4");
/* harmony import */ var _video_6_mp4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video/6.mp4 */ "./src/video/6.mp4");
/* harmony import */ var _video_7_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video/7.mp4 */ "./src/video/7.mp4");
/* harmony import */ var _video_8_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video/8.mp4 */ "./src/video/8.mp4");
/* harmony import */ var _video_9_mp4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video/9.mp4 */ "./src/video/9.mp4");
/* harmony import */ var _video_10_mp4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video/10.mp4 */ "./src/video/10.mp4");
/* harmony import */ var _video_11_mp4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./video/11.mp4 */ "./src/video/11.mp4");
/* harmony import */ var _video_12_mp4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video/12.mp4 */ "./src/video/12.mp4");
/* harmony import */ var _video_13_mp4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/13.mp4 */ "./src/video/13.mp4");
/* harmony import */ var _video_14_mp4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video/14.mp4 */ "./src/video/14.mp4");















const videos = [
    {src: _video_1_mp4__WEBPACK_IMPORTED_MODULE_0__, rgb: "rgb(110, 6, 36)"},
    {src: _video_2_mp4__WEBPACK_IMPORTED_MODULE_1__, rgb: "rgb(123, 154, 134)"},
    {src: _video_3_mp4__WEBPACK_IMPORTED_MODULE_2__, rgb: "rgb(94, 93, 113)"},
    {src: _video_4_mp4__WEBPACK_IMPORTED_MODULE_3__, rgb: "rgb(184, 150, 135)"},
    {src: _video_5_mp4__WEBPACK_IMPORTED_MODULE_4__, rgb: "rgb(154, 159, 156)"},
    {src: _video_6_mp4__WEBPACK_IMPORTED_MODULE_5__, rgb: "rgb(46, 99, 93)"},
    {src: _video_7_mp4__WEBPACK_IMPORTED_MODULE_6__, rgb: "rgb(137, 141, 184)"},
    {src: _video_8_mp4__WEBPACK_IMPORTED_MODULE_7__, rgb: "rgb(206, 179, 207)"},
    {src: _video_9_mp4__WEBPACK_IMPORTED_MODULE_8__, rgb: "rgb(142, 163, 197)"},
    {src: _video_10_mp4__WEBPACK_IMPORTED_MODULE_9__, rgb: "rgb(178, 14, 3)"},
    {src: _video_11_mp4__WEBPACK_IMPORTED_MODULE_10__, rgb: "rgb(0, 88, 125)"},
    {src: _video_12_mp4__WEBPACK_IMPORTED_MODULE_11__, rgb: "rgb(85, 130, 184)"},
    {src: _video_13_mp4__WEBPACK_IMPORTED_MODULE_12__, rgb: "rgb(59, 92, 202)"},
    {src: _video_14_mp4__WEBPACK_IMPORTED_MODULE_13__, rgb: "rgb(207, 145, 63)"},
    {src: _video_1_mp4__WEBPACK_IMPORTED_MODULE_0__, rgb: "rgb(110, 6, 36)"},
    {src: _video_2_mp4__WEBPACK_IMPORTED_MODULE_1__, rgb: "rgb(123, 154, 134)"},
    {src: _video_3_mp4__WEBPACK_IMPORTED_MODULE_2__, rgb: "rgb(94, 93, 113)"},
    {src: _video_4_mp4__WEBPACK_IMPORTED_MODULE_3__, rgb: "rgb(184, 150, 135)"},
    {src: _video_5_mp4__WEBPACK_IMPORTED_MODULE_4__, rgb: "rgb(154, 159, 156)"},
    {src: _video_6_mp4__WEBPACK_IMPORTED_MODULE_5__, rgb: "rgb(46, 99, 93)"},
    {src: _video_7_mp4__WEBPACK_IMPORTED_MODULE_6__, rgb: "rgb(137, 141, 184)"},
    {src: _video_8_mp4__WEBPACK_IMPORTED_MODULE_7__, rgb: "rgb(206, 179, 207)"},
    {src: _video_9_mp4__WEBPACK_IMPORTED_MODULE_8__, rgb: "rgb(142, 163, 197)"},
    {src: _video_10_mp4__WEBPACK_IMPORTED_MODULE_9__, rgb: "rgb(178, 14, 3)"},
    {src: _video_11_mp4__WEBPACK_IMPORTED_MODULE_10__, rgb: "rgb(0, 88, 125)"},
    {src: _video_12_mp4__WEBPACK_IMPORTED_MODULE_11__, rgb: "rgb(85, 130, 184)"},
    {src: _video_13_mp4__WEBPACK_IMPORTED_MODULE_12__, rgb: "rgb(59, 92, 202)"},
    {src: _video_14_mp4__WEBPACK_IMPORTED_MODULE_13__, rgb: "rgb(207, 145, 63)"},
    {src: _video_1_mp4__WEBPACK_IMPORTED_MODULE_0__, rgb: "rgb(110, 6, 36)"},
    {src: _video_2_mp4__WEBPACK_IMPORTED_MODULE_1__, rgb: "rgb(123, 154, 134)"},
    {src: _video_3_mp4__WEBPACK_IMPORTED_MODULE_2__, rgb: "rgb(94, 93, 113)"},
    {src: _video_4_mp4__WEBPACK_IMPORTED_MODULE_3__, rgb: "rgb(184, 150, 135)"},
    {src: _video_5_mp4__WEBPACK_IMPORTED_MODULE_4__, rgb: "rgb(154, 159, 156)"},
    {src: _video_6_mp4__WEBPACK_IMPORTED_MODULE_5__, rgb: "rgb(46, 99, 93)"},
    {src: _video_7_mp4__WEBPACK_IMPORTED_MODULE_6__, rgb: "rgb(137, 141, 184)"},
    {src: _video_8_mp4__WEBPACK_IMPORTED_MODULE_7__, rgb: "rgb(206, 179, 207)"},
]

/***/ }),

/***/ "./src/images/a.jpg":
/*!**************************!*\
  !*** ./src/images/a.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a87ff0e4fa6e08fe9d5e.jpg";

/***/ }),

/***/ "./src/images/b.jpg":
/*!**************************!*\
  !*** ./src/images/b.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20f4e2bce1d582994bc5.jpg";

/***/ }),

/***/ "./src/images/c.jpg":
/*!**************************!*\
  !*** ./src/images/c.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f44c72f982fe714d3bd.jpg";

/***/ }),

/***/ "./src/images/carousel-1.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3480c1d7e29c67dde427.jpg";

/***/ }),

/***/ "./src/images/d.jpg":
/*!**************************!*\
  !*** ./src/images/d.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19b4b2f444ceb834115a.jpg";

/***/ }),

/***/ "./src/images/e.jpg":
/*!**************************!*\
  !*** ./src/images/e.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e56a91fae1eba95f739.jpg";

/***/ }),

/***/ "./src/images/f.jpg":
/*!**************************!*\
  !*** ./src/images/f.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "596873113df2bfa91302.jpg";

/***/ }),

/***/ "./src/images/g.jpg":
/*!**************************!*\
  !*** ./src/images/g.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b69f479adf64ba44467.jpg";

/***/ }),

/***/ "./src/images/h.jpg":
/*!**************************!*\
  !*** ./src/images/h.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7565720a00ad25f2a2c.jpg";

/***/ }),

/***/ "./src/images/i.jpg":
/*!**************************!*\
  !*** ./src/images/i.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2cab6a0442172f8a602.jpg";

/***/ }),

/***/ "./src/images/mapa-1.jpg":
/*!*******************************!*\
  !*** ./src/images/mapa-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fdca4771d5efda60065.jpg";

/***/ }),

/***/ "./src/video/1.mp4":
/*!*************************!*\
  !*** ./src/video/1.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90d29d78dfaf0545d12.mp4";

/***/ }),

/***/ "./src/video/10.mp4":
/*!**************************!*\
  !*** ./src/video/10.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10fae5a597f892a21edf.mp4";

/***/ }),

/***/ "./src/video/11.mp4":
/*!**************************!*\
  !*** ./src/video/11.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4971f3151b17e11fc705.mp4";

/***/ }),

/***/ "./src/video/12.mp4":
/*!**************************!*\
  !*** ./src/video/12.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3ab0d3340f60dc5bbf6.mp4";

/***/ }),

/***/ "./src/video/13.mp4":
/*!**************************!*\
  !*** ./src/video/13.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdac057a3226b5928f89.mp4";

/***/ }),

/***/ "./src/video/14.mp4":
/*!**************************!*\
  !*** ./src/video/14.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "580f6b40186130098bd7.mp4";

/***/ }),

/***/ "./src/video/2.mp4":
/*!*************************!*\
  !*** ./src/video/2.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e592cd55f46e9bd1b87.mp4";

/***/ }),

/***/ "./src/video/3.mp4":
/*!*************************!*\
  !*** ./src/video/3.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69cad060f6dbb4fb72e0.mp4";

/***/ }),

/***/ "./src/video/4.mp4":
/*!*************************!*\
  !*** ./src/video/4.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08d13765c69da88f1e3d.mp4";

/***/ }),

/***/ "./src/video/5.mp4":
/*!*************************!*\
  !*** ./src/video/5.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0530b49b9fa524a8a2bf.mp4";

/***/ }),

/***/ "./src/video/6.mp4":
/*!*************************!*\
  !*** ./src/video/6.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "339b72ba2123445e439e.mp4";

/***/ }),

/***/ "./src/video/7.mp4":
/*!*************************!*\
  !*** ./src/video/7.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75c3567685a8d832a026.mp4";

/***/ }),

/***/ "./src/video/8.mp4":
/*!*************************!*\
  !*** ./src/video/8.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "390cea7e83164e45e2e1.mp4";

/***/ }),

/***/ "./src/video/9.mp4":
/*!*************************!*\
  !*** ./src/video/9.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "288f8cf5edc234a20da8.mp4";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _firstview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firstview */ "./src/firstview.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel */ "./src/carousel.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map */ "./src/map.js");








const body = document.body;

body.appendChild((0,_firstview__WEBPACK_IMPORTED_MODULE_4__.createView)())

const navmenu = document.createElement("div");
navmenu.id = "navmenu";

const title = document.createElement("h1");
title.classList.add("project");
title.textContent = "Superficies";
navmenu.appendChild(title);

const pages = document.createElement("div");
pages.classList.add("menu");
const pageNames = [
    {title: "Pix", content: (0,_gallery_js__WEBPACK_IMPORTED_MODULE_1__.galleryContent)()},
    {title: "Texto", content: (0,_text__WEBPACK_IMPORTED_MODULE_3__.textContent)()}, 
    {title: "Mapa", content: (0,_map__WEBPACK_IMPORTED_MODULE_6__.createMapsLibrary)()},
    // {title: "Superficies", content: createCarousel(), second: carouselFunction()}
];
pageNames.forEach(page => {
    const menu = document.createElement("span");
    menu.classList.add("menu-item");
    menu.id = page.title;
    menu.textContent = page.title;
    menu.addEventListener("click", function() {
        content.innerHTML = "";
        content.appendChild(page.content)
    })
    pages.appendChild(menu);
})

const superficiesMenu = document.createElement("span");
superficiesMenu.classList.add("menu-item");
superficiesMenu.id = "Superficies";
superficiesMenu.textContent = "Superficies";
superficiesMenu.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild((0,_carousel__WEBPACK_IMPORTED_MODULE_5__.createCarousel)());
    setTimeout(() => {
        (0,_carousel__WEBPACK_IMPORTED_MODULE_5__.carouselFunction)();
    }, 500);
})
pages.appendChild(superficiesMenu)
navmenu.appendChild(pages);

body.appendChild(navmenu);

const wrapper = document.createElement("div");
wrapper.id = "wrapper";

// const header = document.createElement("div");
// header.id = "header";
// const h1 = document.createElement("h1");
// h1.textContent = "Galeria";
// header.appendChild(h1);

// wrapper.appendChild(header);

const content = document.createElement("div");
content.id = "content";
wrapper.appendChild(content);

body.appendChild(wrapper);

content.appendChild((0,_gallery_js__WEBPACK_IMPORTED_MODULE_1__.galleryContent)());

wrapper.appendChild(_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnlCO0FBQ21CO0FBQ1Q7QUFDRTtBQUNJO0FBQ3FCO0FBQ3BCOztBQUUxQzs7QUFFQSxpQkFBaUIsc0RBQVU7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUIsMkRBQWMsR0FBRztBQUM3QyxLQUFLLHlCQUF5QixrREFBVyxHQUFHO0FBQzVDLEtBQUssd0JBQXdCLHVEQUFpQixHQUFHO0FBQ2pELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBYztBQUN0QztBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiwyREFBYzs7QUFFbEMsb0JBQW9CLDRDQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9nYWxsZXJ5LmNzcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL21hcC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy90ZXh0Y29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3M/ZGU2NSIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2dhbGxlcnkuY3NzPzYzNGIiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tYXAuY3NzP2RlZmQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3M/YTBhYyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz9iY2JjIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvdGV4dGNvbnRlbnQuY3NzP2E3M2UiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2ZpcnN0dmlldy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvaW1nZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvbWFwLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvdmlkZW9kYXRhLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcm91c2VsIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWRlO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJvdXNlbCA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5jYXJvdXNlbCBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG59XFxuLmNhcm91c2VsIGZpZ3VyZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMCAwcHg7XFxufVxcbi5jYXJvdXNlbCBmaWd1cmUgaW1nOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuLmNhcm91c2VsIG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDIwcHggMCAwO1xcbn1cXG4uY2Fyb3VzZWwgbmF2IGJ1dHRvbiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuLmNhcm91c2VsIG5hdiBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jYXJvdXNlbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQVBnQjtFQVFoQixnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFPSTtFQUNFLGNBQUE7QUFMTjtBQVFJO0VBQ0UsU0FBQTtFQUVBLFVBdEJTO0VBdUJULDRCQUFBO0VBQ0EsMEJBQUE7QUFQTjtBQVNNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVBSO0FBU1E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBUFY7QUFZSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSw4QkFBQTtFQUNBLGdCQUFBO0FBWE47QUFhTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWJSO0FBZ0JNO0VBQ0Usc0JBQUE7QUFkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgIC8vIENhcm91c2VsIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xcbiAgJGl0ZW0td2lkdGg6IDYwJTsgLy8gTm93IHdlIGNhbiB1c2UgcGVyY2VudGFnZXMhXFxuICAkaXRlbS1zZXBhcmF0aW9uOiAwcHg7IC8vIFRoaXMgbm93IGlzIHNldCB3aXRoIEpzXFxuICAkdmlld2VyLWRpc3RhbmNlOiAxMDAwcHg7XFxuICBcXG4gIC5jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyMjIpO1xcbiAgXFxuICAgIHBlcnNwZWN0aXZlOiAkdmlld2VyLWRpc3RhbmNlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgID4gKiB7XFxuICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgIH1cXG4gIFxcbiAgICBmaWd1cmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gIFxcbiAgICAgIHdpZHRoOiAkaXRlbS13aWR0aDtcXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbiAgXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmc6IDAgJGl0ZW0tc2VwYXJhdGlvbiAvIDI7XFxuICBcXG4gICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgXFxuICAgIG5hdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAyMCU7XFxuICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIG1hcmdpbjogMjBweCAwIDA7XFxuICBcXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgICAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gIFxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAgICAgICBjb2xvcjogIzMzMztcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNwaXgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2dhbGxlcnkge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBpY3R1cmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWN0dXJlOmhvdmVyIHtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDAuMDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FsbGVyeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BpeCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FsbGVyeSB7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICAgIHBhZGRpbmc6IDNweDsgICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWN0dXJlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDAuMDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsaWJyYXJ5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycmVtIDJyZW0gMCB3aGl0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICB3aWR0aDogOTUlO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIkNyaW1zb20gVGV4dFxcXCIsIHNlcmlmO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4jbGlicmFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hcGEge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBRzVCOztBQUFBLGdEQUFBO0FBQ0E7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGlicmFyeTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycmVtIDJyZW0gMCB3aGl0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNsaWJyYXJ5IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNyaW1zb20gVGV4dFxcXCIsIHNlcmlmO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiNsaWJyYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXBhIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLyogQ2FwdGlvbiBvZiBNb2RhbCBJbWFnZSAqL1xcbiNjYXB0aW9uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2NjYztcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi8qIEFkZCBBbmltYXRpb24gKi9cXG4ubW9kYWwtY29udGVudCwgI2NhcHRpb24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb207XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgY29sb3I6ICM1YzVjNWM7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICNiYmI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI3ZpZXcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuI3ZpZXctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2YjZiNmI7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcbiAgMjAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhNjU2NTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzY3YjY7XFxuICB9XFxuICA4MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMTkzO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzNWI7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hhbmdlLXNpemUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhNjU2NTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMTkzO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZWQtcG9pbnQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMTkzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZS1jb2xvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQUE7QUFDQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixpQkFBQTtFQUFtQix3QkFBQTtFQUNuQixvQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHlCQUFBO0FBUUo7O0FBTEEsMEJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVFKOztBQUxBLDJCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTEEsa0JBQUE7QUFDQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7QUFRSjs7QUFMQTtFQUNJO0lBQU0scUJBQUE7RUFTUjtFQVJFO0lBQUksbUJBQUE7RUFXTjtBQUNGO0FBVEEscUJBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFSQTs7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUkEsd0NBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtFQVdOO0FBQ0Y7QUFQQTtFQUNJLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtBQWNKOztBQVhBO0VBQ0k7SUFBTSxVQUFBO0VBZVI7RUFkRTtJQUFJLFVBQUE7RUFpQk47QUFDRjtBQWZBO0VBQ0k7SUFBTSxVQUFBO0VBa0JSO0VBakJFO0lBQUksVUFBQTtFQW9CTjtBQUNGO0FBbEJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQW9CSjs7QUFqQkE7RUFDSTtJQUFLLHlCQUFBO0VBcUJQO0VBcEJFO0lBQUsseUJBQUE7RUF1QlA7RUF0QkU7SUFBSyx5QkFBQTtFQXlCUDtFQXhCRTtJQUFNLHlCQUFBO0VBMkJSO0FBQ0Y7QUF6QkE7RUFDSTtJQUFJLHNCQUFBO0VBNEJOO0VBM0JFO0lBQUssbUJBQUE7SUFBcUIseUJBQUE7RUErQjVCO0VBOUJFO0lBQU0sc0JBQUE7SUFBd0IseUJBQUE7RUFrQ2hDO0FBQ0Y7QUFoQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBa0NKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcbiAgXFxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXG59XFxuICBcXG4vKiBDYXB0aW9uIG9mIE1vZGFsIEltYWdlICovXFxuI2NhcHRpb24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcbiAgXFxuLyogQWRkIEFuaW1hdGlvbiAqL1xcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7ICBcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb207XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuICBcXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDAuMSl9IFxcbiAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cXG59XFxuICBcXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OiAzNXB4O1xcbiAgICBjb2xvcjogIzVjNWM1YztcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuICBcXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gICAgY29sb3I6ICNiYmI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4gIFxcbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbiAgXFxuI3ZpZXcge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAxO31cXG4gICAgdG8ge29wYWNpdHk6IDA7fVxcbn1cXG5cXG4jdmlldy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjpyZ2IoMTA3LCAxMDcsIDEwNyk7ICAgIFxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxuICAgIDIwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTAxLCAxMDEpO31cXG4gICAgNDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDE4Mik7fVxcbiAgICA4MCUge2JhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDIwOSwgMTQ3KTt9XFxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgOTEpO31cXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2Utc2l6ZSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO31cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxMDEsIDEwMSk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuMjUpOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMDksIDE0Nyk7fVxcbn1cXG5cXG4uYW5pbWF0ZWQtcG9pbnQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDIwOSwgMTQ3KTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZS1jb2xvcjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZWQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRpbGxpdW0gV2ViXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRpbGxpdW0gV2ViXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDFweCk7XFxufVxcblxcbi8qICNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxufSAqL1xcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7Ozs7Ozs7R0FBQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJlZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAxcHgpO1xcbn1cXG5cXG4vKiAjaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlO1xcbn0gKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNyaW1zb24rVGV4dCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGV4dC1jb250YWluZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRyZW0gNHJlbSAwIHdoaXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiN0ZXh0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIkNyaW1zb20gVGV4dFxcXCIsIHNlcmlmO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4jdGV4dC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGV4dGNvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBRTVCOztBQUNBLGdEQUFBO0FBQ0E7RUFDSSxhQUFBO0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q3JpbXNvbitUZXh0JmRpc3BsYXk9c3dhcCcpO1xcblxcbiN0ZXh0LWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDRyZW0gMCB3aGl0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiN0ZXh0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmltc29tIFRleHRcXFwiLCBzZXJpZjtcXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4jdGV4dC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nhcm91c2VsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbGxlcnkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RleHRjb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RleHRjb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW1ncyB9IGZyb20gJy4vaW1nZGF0YSc7XG5pbXBvcnQgJy4vY3NzL2Nhcm91c2VsLnNjc3MnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCAoKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbFwiKTtcbiAgICBjYXJvdXNlbC5kYXRhc2V0LmdhcCA9IDIwO1xuICAgIGNhcm91c2VsLmRhdGFzZXQuYmZjO1xuXG4gICAgY29uc3QgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWdzW2ldO1xuICAgICAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIH1cbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChmaWd1cmUpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBidXR0b25QcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25QcmV2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIiwgXCJwcmV2XCIpO1xuICAgIGJ1dHRvblByZXYudGV4dENvbnRlbnQgPSBcIlByZXZcIjtcbiAgICBcbiAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b25OZXh0LmNsYXNzTGlzdC5hZGQoXCJuYXZcIiwgXCJuZXh0XCIpO1xuICAgIGJ1dHRvbk5leHQudGV4dENvbnRlbnQgPSBcIk5leHRcIjtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChidXR0b25QcmV2KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uTmV4dCk7XG5cbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChuYXYpO1xuICAgIHJldHVybiBjYXJvdXNlbFxufTtcbiAgXG5leHBvcnQgZnVuY3Rpb24gY2Fyb3VzZWxGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIik7XG4gICAgdmFyIGZpZ3VyZSA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCJmaWd1cmVcIiksXG4gICAgICBuYXYgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLFxuICAgICAgaW1hZ2VzID0gZmlndXJlLmNoaWxkcmVuLFxuICAgICAgbiA9IGltYWdlcy5sZW5ndGgsXG4gICAgICBnYXAgPSBjYXJvdXNlbC5kYXRhc2V0LmdhcCB8fCAwLFxuICAgICAgYmZjID0gdHJ1ZSxcbiAgICAgIHRoZXRhID0gKDIgKiBNYXRoLlBJKSAvIG4sXG4gICAgICBjdXJySW1hZ2UgPSAwO1xuICAgIHNldHVwQ2Fyb3VzZWwobiwgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGltYWdlc1swXSkud2lkdGgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBzZXR1cENhcm91c2VsKG4sIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShpbWFnZXNbMF0pLndpZHRoKSk7XG4gICAgfSk7XG4gIFxuICAgIHNldHVwTmF2aWdhdGlvbigpO1xuICBcbiAgICBmdW5jdGlvbiBzZXR1cENhcm91c2VsKG4sIHMpIHtcbiAgICAgIHZhciBhcG90aGVtID0gcyAvICgyICogTWF0aC50YW4oTWF0aC5QSSAvIG4pKTtcbiAgICAgIGZpZ3VyZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgNTAlIDUwJSAkey1hcG90aGVtfXB4YDtcbiAgXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgaW1hZ2VzW2ldLnN0eWxlLnBhZGRpbmcgPSBgJHtnYXB9cHhgO1xuICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICBpbWFnZXNbaV0uc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYDUwJSA1MCUgJHstYXBvdGhlbX1weGA7XG4gICAgICAgIGltYWdlc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke2kgKiB0aGV0YX1yYWQpYDtcbiAgICAgIH1cbiAgICAgIGlmIChiZmMpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIGltYWdlc1tpXS5zdHlsZS5iYWNrZmFjZVZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBcbiAgICAgIHJvdGF0ZUNhcm91c2VsKGN1cnJJbWFnZSk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBzZXR1cE5hdmlnYXRpb24oKSB7XG4gICAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2ssIHRydWUpO1xuICBcbiAgICAgIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBcbiAgICAgICAgdmFyIHQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpICE9IFwiQlVUVE9OXCIpIHJldHVybjtcbiAgXG4gICAgICAgIGlmICh0LmNsYXNzTGlzdC5jb250YWlucyhcIm5leHRcIikpIHtcbiAgICAgICAgICBjdXJySW1hZ2UrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJySW1hZ2UtLTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgcm90YXRlQ2Fyb3VzZWwoY3VyckltYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHJvdGF0ZUNhcm91c2VsKGltYWdlSW5kZXgpIHtcbiAgICAgIGZpZ3VyZS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke2ltYWdlSW5kZXggKiAtdGhldGF9cmFkKWA7XG4gICAgfVxuICB9XG4gICIsImltcG9ydCAnLi9jc3MvbW9kYWwuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZXcoKSB7XG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlldy5pZCA9IFwidmlld1wiO1xuXG4gICAgY29uc3Qgdmlld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZpZXdDb250ZW50LmlkID0gXCJ2aWV3LWNvbnRlbnRcIjtcbiAgICB2aWV3LmFwcGVuZENoaWxkKHZpZXdDb250ZW50KTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlN1cGVyZmljaWVzXCI7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBhbmltYXRlZFBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbmltYXRlZFBvaW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZC1wb2ludFwiKTtcbiAgICBhbmltYXRlZFBvaW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpZXcuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICB2aWV3LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjZzXCI7XG4gICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZXcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgfSlcbiAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChhbmltYXRlZFBvaW50KTtcblxuICAgIHJldHVybiB2aWV3XG59IiwiaW1wb3J0IHttb2RhbH0gZnJvbSAnLi9tb2RhbC5qcyc7XG5pbXBvcnQgeyB2aWRlb3MgfSBmcm9tICcuL3ZpZGVvZGF0YSc7XG5pbXBvcnQgJy4vY3NzL2dhbGxlcnkuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2FsbGVyeUNvbnRlbnQoKSB7XG4gICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FsbGVyeS5pZCA9IFwiZ2FsbGVyeVwiO1xuXG4gICAgY29uc3QgY3JlYXRlRGl2RnJhbWUgPSAodmlkZW8pID0+IHtcbiAgICAgICAgY29uc3QgZGl2VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2VGFnLmNsYXNzTGlzdC5hZGQoXCJmcmFtZVwiKTtcbiAgICAgICAgZGl2VGFnLmFwcGVuZCh2aWRlbyk7XG4gICAgICAgIHJldHVybiBkaXZUYWdcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVWaWQgPSAoc3JjLCBjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmlkVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmlkVGFnLmlkID0gaW5kZXg7XG4gICAgICAgIHZpZFRhZy5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgdmlkVGFnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICB2aWRUYWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZFRhZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvU291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgICAgICAgICAgIHZpZGVvU291cmNlLnNyYyA9IHNyYztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNyYylcbiAgICAgICAgICAgIHZpZGVvU291cmNlLnR5cGUgPSBcInZpZGVvL21wNFwiO1xuICAgICAgICAgICAgaWYgKG1vZGFsQ29udGVudC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgICAgICAgICAgbW9kYWxDb250ZW50LmNoaWxkTm9kZXNbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuc3R5bGUud2lkdGggPSBcIjYwMHB4XCI7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCI2MDBweFwiO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHZpZGVvU291cmNlKTtcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB2aWRUYWdcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2aWRzcmMgPSB2aWRlb3NbaV0uc3JjO1xuICAgICAgICBjb25zdCB2aWRDb2xvciA9IHZpZGVvc1tpXS5yZ2I7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB2aWRQaWN0dXJlID0gY3JlYXRlVmlkKHZpZHNyYywgdmlkQ29sb3IsIGkpO1xuICAgICAgICBjb25zdCBkaXZGcmFtZSA9IGNyZWF0ZURpdkZyYW1lKHZpZFBpY3R1cmUpO1xuICAgICAgICBcbiAgICAgICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChkaXZGcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0LmlkID0gXCJyZXNldFwiO1xuICAgIHJlc2V0LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHJlc2V0LnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpY3R1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waWN0dXJlXCIpO1xuICAgICAgICBwaWN0dXJlcy5mb3JFYWNoKHBpY3R1cmUgPT4ge1xuICAgICAgICAgICAgcGljdHVyZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBwaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpeC5pZCA9IFwicGl4XCI7XG4gICAgcGl4LmFwcGVuZENoaWxkKGdhbGxlcnkpO1xuICAgIHBpeC5hcHBlbmRDaGlsZChyZXNldCk7XG5cbiAgICByZXR1cm4gcGl4XG59IiwiaW1wb3J0IGltZ0EgZnJvbSAnLi9pbWFnZXMvYS5qcGcnO1xuaW1wb3J0IGltZ0IgZnJvbSAnLi9pbWFnZXMvYi5qcGcnO1xuaW1wb3J0IGltZ0MgZnJvbSAnLi9pbWFnZXMvYy5qcGcnO1xuaW1wb3J0IGltZ0QgZnJvbSAnLi9pbWFnZXMvZC5qcGcnO1xuaW1wb3J0IGltZ0UgZnJvbSAnLi9pbWFnZXMvZS5qcGcnO1xuaW1wb3J0IGltZ0YgZnJvbSAnLi9pbWFnZXMvZi5qcGcnO1xuaW1wb3J0IGltZ0cgZnJvbSAnLi9pbWFnZXMvZy5qcGcnO1xuaW1wb3J0IGltZ0ggZnJvbSAnLi9pbWFnZXMvaC5qcGcnO1xuaW1wb3J0IGltZ0kgZnJvbSAnLi9pbWFnZXMvaS5qcGcnO1xuaW1wb3J0IGNhcm91c2VsMSBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC0xLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBpbWdzID0gW1xuICAgIGNhcm91c2VsMSwgY2Fyb3VzZWwxLCBjYXJvdXNlbDEsIGNhcm91c2VsMSxcbiAgICBjYXJvdXNlbDEsIGNhcm91c2VsMSwgY2Fyb3VzZWwxLCBjYXJvdXNlbDEsXG4gICAgY2Fyb3VzZWwxLCBjYXJvdXNlbDEsIGNhcm91c2VsMSwgY2Fyb3VzZWwxLFxuICAgIGNhcm91c2VsMSwgY2Fyb3VzZWwxLCBjYXJvdXNlbDEsIGNhcm91c2VsMSxcbiAgICBjYXJvdXNlbDEsIGNhcm91c2VsMSwgY2Fyb3VzZWwxLCBjYXJvdXNlbDEsIFxuICAgIC8vIGltZ0IsIGltZ0MsIGltZ0QsIGltZ0UsIGltZ0YsIGltZ0csIGltZ0gsIGltZ0ksXG4gICAgLy8gaW1nQSwgaW1nQiwgaW1nQywgaW1nRCwgaW1nRSwgaW1nRiwgaW1nRywgaW1nSCwgaW1nSSxcbiAgICAvLyBpbWdBLCBpbWdCLCBpbWdDLCBpbWdELCBpbWdFLCBpbWdGLCBpbWdHLCBpbWdILCBpbWdJLFxuICAgIC8vIGltZ0EsIGltZ0IsIGltZ0MsIGltZ0QsIGltZ0UsIGltZ0YsIGltZ0csIGltZ0gsIGltZ0ksXG5dO1xuXG5pbXBvcnQgbWFwYTEgZnJvbSAnLi9pbWFnZXMvbWFwYS0xLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtYXBhcyA9IFtcbiAgICBtYXBhMSwgbWFwYTEsIG1hcGExLCBtYXBhMSxcbl0iLCJpbXBvcnQgeyBtYXBhcyB9IGZyb20gJy4vaW1nZGF0YSc7XG5pbXBvcnQgJy4vY3NzL21hcC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFwc0xpYnJhcnkoKSB7XG4gICAgY29uc3QgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlicmFyeS5pZCA9IFwibGlicmFyeVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcIm1hcGFcIik7XG4gICAgICAgIGltZy5zcmMgPSBtYXBhc1tpXTtcbiAgICAgICAgbGlicmFyeS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH1cblxuICAgIHJldHVybiBsaWJyYXJ5XG59IiwiaW1wb3J0ICcuL2Nzcy9tb2RhbC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubW9kYWwuaWQgPSBcIm1vZGFsXCI7XG5tb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG1vZGFsLmNoaWxkTm9kZXNbMV0ucmVtb3ZlKCk7XG59KVxuY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCJcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuIiwiaW1wb3J0ICcuL2Nzcy90ZXh0Y29udGVudC5jc3MnO1xuXG5jb25zdCB0ZXh0ID0gYFxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGVnZXN0YXMgZWxpdCBhIGxpZ3VsYSBjb25kaW1lbnR1bSwgdml0YWUgdWx0cmljZXMgZW5pbSB2ZW5lbmF0aXMuIEN1cmFiaXR1ciBzaXQgYW1ldCBlbGVtZW50dW0gbG9yZW0sIGluIGxvYm9ydGlzIHB1cnVzLiBEb25lYyB0dXJwaXMgbmliaCwgaW1wZXJkaWV0IGV0IHRlbGx1cyBzaXQgYW1ldCwgZXVpc21vZCBldWlzbW9kIHNlbS4gUHJhZXNlbnQgbnVuYyBlcmF0LCBvcm5hcmUgc2VkIG1hbGVzdWFkYSBldCwgdmFyaXVzIHF1aXMgYXJjdS4gVml2YW11cyB1cm5hIGxhY3VzLCBpbnRlcmR1bSBhdCBsYWN1cyBxdWlzLCBmaW5pYnVzIHZlaGljdWxhIGRvbG9yLiBJbiBjb25zZWN0ZXR1ciBhY2N1bXNhbiBibGFuZGl0LiBTZWQgaWQgdHVycGlzIHZpdGFlIGVyb3MgZmV1Z2lhdCBhbGlxdWFtIGlkIG5lYyBtYXNzYS4gU2VkIHZpdGFlIGZhdWNpYnVzIGp1c3RvLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gUXVpc3F1ZSBiaWJlbmR1bSBncmF2aWRhIG5lcXVlLlxuXG5DdXJhYml0dXIgYWxpcXVldCBzZWQganVzdG8gbmVjIHBoYXJldHJhLiBWaXZhbXVzIHZpdGFlIGVyYXQgYWMgbmliaCBjb25zZXF1YXQgaW1wZXJkaWV0IG5vbiBjb25kaW1lbnR1bSBmZWxpcy4gRXRpYW0gZXUgc29sbGljaXR1ZGluIG51bGxhLiBOYW0gbW9sbGlzIGZhY2lsaXNpcyBtaSwgaWQgZWxlaWZlbmQgZW5pbSBmYXVjaWJ1cyBwbGFjZXJhdC4gU3VzcGVuZGlzc2UgdmVsaXQgcHVydXMsIHBlbGxlbnRlc3F1ZSBldCBsYWN1cyBtb2xlc3RpZSwgaGVuZHJlcml0IHN1c2NpcGl0IG51bGxhLiBWaXZhbXVzIHB1cnVzIHVybmEsIGludGVyZHVtIHV0IHNvZGFsZXMgZXQsIGZhY2lsaXNpcyB2ZWwgbWkuIEV0aWFtIGxhY2luaWEgcG9ydHRpdG9yIGltcGVyZGlldC4gUXVpc3F1ZSBncmF2aWRhIGVsaXQgZXUgcHVydXMgbG9ib3J0aXMgdGVtcHVzLiBTZWQgc2l0IGFtZXQgbGFjdXMgdHJpc3RpcXVlIG1hdXJpcyBlZmZpY2l0dXIgZmF1Y2lidXMgc2VkIGVnZXQgbG9yZW0uIENyYXMgc2l0IGFtZXQgbGVjdHVzIGluIGxlbyBzY2VsZXJpc3F1ZSBjb252YWxsaXMuIEN1cmFiaXR1ciBzZWQgbGFjdXMgbm9uIGxpZ3VsYSBhbGlxdWFtIGVsZWlmZW5kIHNlZCBhIHB1cnVzLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gU3VzcGVuZGlzc2Ugc2VkIHZ1bHB1dGF0ZSBlbmltLiBWaXZhbXVzIHNpdCBhbWV0IGVnZXN0YXMgYXJjdS4gTW9yYmkgbnVsbGEgZmVsaXMsIHN1c2NpcGl0IGN1cnN1cyBuaXNpIGFjLCBzb2RhbGVzIG1vbGxpcyBsaWd1bGEuIFByYWVzZW50IGNvbmd1ZSBtb2xlc3RpZSBtb2xlc3RpZS5cblxuRHVpcyBtYWduYSBsZWN0dXMsIGJsYW5kaXQgdmVsIGVyYXQgZWdldCwgbW9sZXN0aWUgcHVsdmluYXIgbnVuYy4gU2VkIGFsaXF1YW0gdWx0cmljaWVzIG51bGxhLCBlZ2V0IGNvbnNlcXVhdCB0ZWxsdXMgcG9ydGEgdmVsLiBDdXJhYml0dXIgcXVhbSBudWxsYSwgZmFjaWxpc2lzIHZpdGFlIGVzdCB2aXRhZSwgZmluaWJ1cyBjb25zZWN0ZXR1ciBsb3JlbS4gUHJvaW4gdml2ZXJyYSBtYXNzYSBub24gZXN0IHByZXRpdW0gb3JuYXJlLiBOdWxsYW0gc2l0IGFtZXQgZmVsaXMgZWdldCB0ZWxsdXMgYmliZW5kdW0gdGluY2lkdW50IGV0IHF1aXMgbGVvLiBVdCBwb3J0YSBhdCBuaXNpIHZpdGFlIHNjZWxlcmlzcXVlLiBOYW0gYSBxdWFtIG1hbGVzdWFkYSwgdGVtcG9yIHJpc3VzIGV1LCBpYWN1bGlzIGVzdC5cblxuTW9yYmkgaGVuZHJlcml0IHNhZ2l0dGlzIHRlbXB1cy4gUHJhZXNlbnQgdGVtcHVzIGxpZ3VsYSBzaXQgYW1ldCB2ZWxpdCBldWlzbW9kLCBtb2xsaXMgY29uc2VxdWF0IGR1aSBtYXR0aXMuIE51bGxhbSBpZCBmZXVnaWF0IHVybmEuIFBoYXNlbGx1cyB2ZWwgZWdlc3RhcyBsaWJlcm8uIFNlZCBldCBwbGFjZXJhdCBvZGlvLiBDcmFzIHB1bHZpbmFyIHZlaGljdWxhIGFyY3UsIHNlZCBibGFuZGl0IGlwc3VtIGxhb3JlZXQgZWdldC4gTnVsbGFtIG1heGltdXMsIG9kaW8gYWMgc29sbGljaXR1ZGluIHByZXRpdW0sIG1hdXJpcyBlcmF0IHZpdmVycmEgYXJjdSwgbm9uIGdyYXZpZGEgb2RpbyBmZWxpcyBmcmluZ2lsbGEgbmliaC5cblxuUHJvaW4gaW4gdmVsaXQgdmVoaWN1bGEsIHRlbXBvciBtZXR1cyBldCwgc29kYWxlcyBsZWN0dXMuIEludGVnZXIgZWdldCBhbnRlIGFjIGxvcmVtIGF1Y3RvciBzYWdpdHRpcy4gRG9uZWMgbnVsbGEgbmlzaSwgZGljdHVtIHZlbCBtZXR1cyBhYywgYWNjdW1zYW4gdnVscHV0YXRlIG1hc3NhLiBQcm9pbiB2ZWwgY29uc2VjdGV0dXIgbGFjdXMsIHF1aXMgdml2ZXJyYSBhbnRlLiBWaXZhbXVzIGluIGZlbGlzIGEgZXJhdCBsdWN0dXMgdmVoaWN1bGEuIE1hdXJpcyBldCBtYXNzYSBzZWQgZWxpdCBtYXR0aXMgdGVtcHVzLiBNYXVyaXMgb2RpbyBzYXBpZW4sIHRlbXBvciBldSB2ZW5lbmF0aXMgYSwgaW50ZXJkdW0gc2VkIHZlbGl0LlxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRDb250ZW50KCkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICB0ZXh0Q29udGFpbmVyLmlkID0gXCJ0ZXh0LWNvbnRhaW5lclwiO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRleHRDb250YWluZXJcbn0iLCJpbXBvcnQgdmlkMSBmcm9tICcuL3ZpZGVvLzEubXA0JztcbmltcG9ydCB2aWQyIGZyb20gJy4vdmlkZW8vMi5tcDQnO1xuaW1wb3J0IHZpZDMgZnJvbSAnLi92aWRlby8zLm1wNCc7XG5pbXBvcnQgdmlkNCBmcm9tICcuL3ZpZGVvLzQubXA0JztcbmltcG9ydCB2aWQ1IGZyb20gJy4vdmlkZW8vNS5tcDQnO1xuaW1wb3J0IHZpZDYgZnJvbSAnLi92aWRlby82Lm1wNCc7XG5pbXBvcnQgdmlkNyBmcm9tICcuL3ZpZGVvLzcubXA0JztcbmltcG9ydCB2aWQ4IGZyb20gJy4vdmlkZW8vOC5tcDQnO1xuaW1wb3J0IHZpZDkgZnJvbSAnLi92aWRlby85Lm1wNCc7XG5pbXBvcnQgdmlkMTAgZnJvbSAnLi92aWRlby8xMC5tcDQnO1xuaW1wb3J0IHZpZDExIGZyb20gJy4vdmlkZW8vMTEubXA0JztcbmltcG9ydCB2aWQxMiBmcm9tICcuL3ZpZGVvLzEyLm1wNCc7XG5pbXBvcnQgdmlkMTMgZnJvbSAnLi92aWRlby8xMy5tcDQnO1xuaW1wb3J0IHZpZDE0IGZyb20gJy4vdmlkZW8vMTQubXA0JztcblxuZXhwb3J0IGNvbnN0IHZpZGVvcyA9IFtcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuICAgIHtzcmM6IHZpZDksIHJnYjogXCJyZ2IoMTQyLCAxNjMsIDE5NylcIn0sXG4gICAge3NyYzogdmlkMTAsIHJnYjogXCJyZ2IoMTc4LCAxNCwgMylcIn0sXG4gICAge3NyYzogdmlkMTEsIHJnYjogXCJyZ2IoMCwgODgsIDEyNSlcIn0sXG4gICAge3NyYzogdmlkMTIsIHJnYjogXCJyZ2IoODUsIDEzMCwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQxMywgcmdiOiBcInJnYig1OSwgOTIsIDIwMilcIn0sXG4gICAge3NyYzogdmlkMTQsIHJnYjogXCJyZ2IoMjA3LCAxNDUsIDYzKVwifSxcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuICAgIHtzcmM6IHZpZDksIHJnYjogXCJyZ2IoMTQyLCAxNjMsIDE5NylcIn0sXG4gICAge3NyYzogdmlkMTAsIHJnYjogXCJyZ2IoMTc4LCAxNCwgMylcIn0sXG4gICAge3NyYzogdmlkMTEsIHJnYjogXCJyZ2IoMCwgODgsIDEyNSlcIn0sXG4gICAge3NyYzogdmlkMTIsIHJnYjogXCJyZ2IoODUsIDEzMCwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQxMywgcmdiOiBcInJnYig1OSwgOTIsIDIwMilcIn0sXG4gICAge3NyYzogdmlkMTQsIHJnYjogXCJyZ2IoMjA3LCAxNDUsIDYzKVwifSxcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHtnYWxsZXJ5Q29udGVudH0gZnJvbSAnLi9nYWxsZXJ5LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7XG5pbXBvcnQgeyB0ZXh0Q29udGVudCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3IH0gZnJvbSAnLi9maXJzdHZpZXcnO1xuaW1wb3J0IHsgY3JlYXRlQ2Fyb3VzZWwsIGNhcm91c2VsRnVuY3Rpb24gfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IGNyZWF0ZU1hcHNMaWJyYXJ5IH0gZnJvbSAnLi9tYXAnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVWaWV3KCkpXG5cbmNvbnN0IG5hdm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubmF2bWVudS5pZCA9IFwibmF2bWVudVwiO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIlN1cGVyZmljaWVzXCI7XG5uYXZtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5jb25zdCBwYWdlTmFtZXMgPSBbXG4gICAge3RpdGxlOiBcIlBpeFwiLCBjb250ZW50OiBnYWxsZXJ5Q29udGVudCgpfSxcbiAgICB7dGl0bGU6IFwiVGV4dG9cIiwgY29udGVudDogdGV4dENvbnRlbnQoKX0sIFxuICAgIHt0aXRsZTogXCJNYXBhXCIsIGNvbnRlbnQ6IGNyZWF0ZU1hcHNMaWJyYXJ5KCl9LFxuICAgIC8vIHt0aXRsZTogXCJTdXBlcmZpY2llc1wiLCBjb250ZW50OiBjcmVhdGVDYXJvdXNlbCgpLCBzZWNvbmQ6IGNhcm91c2VsRnVuY3Rpb24oKX1cbl07XG5wYWdlTmFtZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1lbnUuaWQgPSBwYWdlLnRpdGxlO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBwYWdlLnRpdGxlO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZS5jb250ZW50KVxuICAgIH0pXG4gICAgcGFnZXMuYXBwZW5kQ2hpbGQobWVudSk7XG59KVxuXG5jb25zdCBzdXBlcmZpY2llc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnN1cGVyZmljaWVzTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuc3VwZXJmaWNpZXNNZW51LmlkID0gXCJTdXBlcmZpY2llc1wiO1xuc3VwZXJmaWNpZXNNZW51LnRleHRDb250ZW50ID0gXCJTdXBlcmZpY2llc1wiO1xuc3VwZXJmaWNpZXNNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ2Fyb3VzZWwoKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhcm91c2VsRnVuY3Rpb24oKTtcbiAgICB9LCA1MDApO1xufSlcbnBhZ2VzLmFwcGVuZENoaWxkKHN1cGVyZmljaWVzTWVudSlcbm5hdm1lbnUuYXBwZW5kQ2hpbGQocGFnZXMpO1xuXG5ib2R5LmFwcGVuZENoaWxkKG5hdm1lbnUpO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbndyYXBwZXIuaWQgPSBcIndyYXBwZXJcIjtcblxuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4vLyBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbi8vIGgxLnRleHRDb250ZW50ID0gXCJHYWxlcmlhXCI7XG4vLyBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4vLyB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xud3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChnYWxsZXJ5Q29udGVudCgpKTtcblxud3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9