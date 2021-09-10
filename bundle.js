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
___CSS_LOADER_EXPORT___.push([module.id, ".carousel {\n  padding: 20px;\n  height: 100%;\n  background-color: #f5f5de;\n  perspective: 1000px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.carousel > * {\n  flex: 0 0 auto;\n}\n.carousel figure {\n  margin: 0;\n  width: 60%;\n  transform-style: preserve-3d;\n  transition: transform 0.5s;\n}\n.carousel figure img {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px;\n}\n.carousel figure img:not(:first-of-type) {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.carousel nav {\n  display: flex;\n  position: absolute;\n  top: 20%;\n  height: 50%;\n  z-index: 10;\n  width: 100%;\n  justify-content: space-between;\n  margin: 20px 0 0;\n}\n.carousel nav button {\n  flex: 0 0 auto;\n  margin: 0 10px;\n  opacity: 0.8;\n  cursor: pointer;\n  color: #333;\n  background: white;\n  border: 1px dashed red;\n  font-size: 1.5rem;\n  letter-spacing: 1px;\n  padding: 5px 10px;\n}\n.carousel nav button:hover {\n  transform: scale(1.05);\n}", "",{"version":3,"sources":["webpack://./src/css/carousel.scss"],"names":[],"mappings":"AAOE;EACE,aAAA;EACA,YAAA;EACA,yBAAA;EAEA,mBAPgB;EAQhB,gBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;AARJ;AASI;EACE,cAAA;AAPN;AAUI;EACE,SAAA;EAEA,UAtBS;EAuBT,4BAAA;EACA,0BAAA;AATN;AAWM;EACE,WAAA;EACA,sBAAA;EACA,YAAA;AATR;AAWQ;EACE,kBAAA;EACA,OAAA;EACA,MAAA;AATV;AAcI;EACE,aAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EAEA,8BAAA;EACA,gBAAA;AAbN;AAeM;EACE,cAAA;EACA,cAAA;EACA,YAAA;EAEA,eAAA;EAEA,WAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AAfR;AAkBM;EACE,sBAAA;AAhBR","sourcesContent":["@use 'sass:math';\n  \n  // Carousel configuration parameters\n  $item-width: 60%; // Now we can use percentages!\n  $item-separation: 0px; // This now is set with Js\n  $viewer-distance: 1000px;\n  \n  .carousel {\n    padding: 20px;\n    height: 100%;\n    background-color: rgb(245, 245, 222);\n  \n    perspective: $viewer-distance;\n    overflow: hidden;\n  \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    > * {\n      flex: 0 0 auto;\n    }\n  \n    figure {\n      margin: 0;\n  \n      width: $item-width;\n      transform-style: preserve-3d;\n      transition: transform 0.5s;\n  \n      img {\n        width: 100%;\n        box-sizing: border-box;\n        padding: math.div($item-separation, 2);\n  \n        &:not(:first-of-type) {\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n      }\n    }\n  \n    nav {\n      display: flex;\n      position: absolute;\n      top: 20%;\n      height: 50%;\n      z-index: 10;\n      width: 100%;\n\n      justify-content: space-between;\n      margin: 20px 0 0;\n  \n      button {\n        flex: 0 0 auto;\n        margin: 0 10px;\n        opacity: 0.8;\n  \n        cursor: pointer;\n  \n        color: #333;\n        background: white;\n        border: 1px dashed red;\n        font-size: 1.5rem;\n        letter-spacing: 1px;\n        padding: 5px 10px;\n      }\n\n      button:hover {\n        transform: scale(1.05);\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#pix {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#gallery {\n  aspect-ratio: 1/1;\n  max-width: 90%;\n  max-height: 90%;\n  display: grid;\n  justify-content: center;\n  gap: 2px;\n  grid-template-columns: repeat(6, 1fr);\n  border: 1px dashed red;\n  padding: 3px;\n  margin-bottom: 20px;\n}\n\n.frame {\n  height: 70px;\n  width: 70px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.frame:hover {\n  transform: scale(1.05);\n}\n\n.picture {\n  height: 100%;\n  width: 100%;\n}\n\n.picture:hover {\n  filter: saturate(10);\n  cursor: pointer;\n}\n\n.hidden {\n  opacity: 0.01;\n}\n\n@keyframes rotate360 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-359deg);\n  }\n}\n/* #reset:hover {\n    animation-name: rotate360;\n    animation-duration: 2s;\n} */", "",{"version":3,"sources":["webpack://./src/css/gallery.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,QAAA;EACA,qCAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,sBAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;AACJ;;AAEA;EACI,oBAAA;EACA,eAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI;IAAM,uBAAA;EAER;EADE;IAAI,0BAAA;EAIN;AACF;AAFA;;;GAAA","sourcesContent":["#pix {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#gallery {\n    aspect-ratio: 1/1;\n    max-width: 90%;\n    max-height: 90%;\n    display: grid;\n    justify-content: center;\n    gap: 2px;\n    grid-template-columns: repeat(6, 1fr);\n    border: 1px dashed red;\n    padding: 3px;    \n    margin-bottom: 20px;\n}\n\n.frame {\n    height: 70px;\n    width: 70px;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.frame:hover {\n    transform: scale(1.05);\n}\n\n.picture {\n    height: 100%;\n    width: 100%;\n}\n\n.picture:hover {\n    filter: saturate(10);\n    cursor: pointer;\n}\n\n.hidden {\n    opacity: 0.01;\n}\n\n@keyframes rotate360 {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(-359deg);}\n}\n\n/* #reset:hover {\n    animation-name: rotate360;\n    animation-duration: 2s;\n} */"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#library::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 -0.5rem 0.5rem 0 white;\n  pointer-events: none;\n}\n\n#library {\n  width: 90%;\n  overflow: scroll;\n  overflow-x: hidden;\n  font-size: 1.5rem;\n  padding-bottom: 2rem;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#library::-webkit-scrollbar {\n  display: none;\n}\n\n.mapa {\n  margin-top: 20px;\n  margin-bottom: 50px;\n  width: 100%;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/css/map.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,0CAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,4CAAA;EACA,wBAAA;EAA2B,gBAAA;EAC3B,qBAAA;EAAwB,YAAA;AAG5B;;AAAA,gDAAA;AACA;EACI,aAAA;AAGJ;;AAAA;EACI,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAGJ","sourcesContent":["#library::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 -0.5rem 0.5rem 0 white;\n    pointer-events: none;\n}\n\n#library {\n    width: 90%;\n    overflow: scroll;\n    overflow-x: hidden;\n    font-size: 1.5rem;\n    padding-bottom: 2rem;\n    /* Hide scrollbar for IE, Edge and Firefox */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#library::-webkit-scrollbar {\n    display: none;\n}\n\n.mapa {\n    margin-top: 20px;\n    margin-bottom: 50px;\n    width: 100%;\n    height: auto;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 50px;\n  /* Location of the box */\n  padding-bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #ffffff;\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  aspect-ratio: 1/1;\n  max-width: 80%;\n  max-height: 80%;\n}\n\n/* Caption of Modal Image */\n#caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, #caption {\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0.1);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #5c5c5c;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n#view {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: white;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n#view-content {\n  display: flex;\n  height: 80%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #6b6b6b;\n  animation-name: fadein;\n  animation-duration: 2s;\n}\n\n@keyframes change-color {\n  20% {\n    background-color: #ca6565;\n  }\n  40% {\n    background-color: #6767b6;\n  }\n  80% {\n    background-color: #93d193;\n  }\n  100% {\n    background-color: #d3d35b;\n  }\n}\n@keyframes change-size {\n  0% {\n    transform: scale(0.25);\n  }\n  50% {\n    transform: scale(1);\n    background-color: #ca6565;\n  }\n  100% {\n    transform: scale(0.25);\n    background-color: #93d193;\n  }\n}\n.animated-point {\n  margin-top: 20px;\n  height: 100px;\n  width: 100px;\n  background-color: #93d193;\n  animation-name: change-color;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  cursor: pointer;\n}\n\n.animated-point:hover {\n  transform: scale(1.05);\n}\n\n#after-text {\n  width: 70%;\n  font-family: \"Glory\", sans-serif;\n  font-size: 1.5rem;\n  margin: 10px;\n  cursor: default;\n  text-align: justify;\n  white-space: pre-wrap;\n}\n\n.closeX {\n  color: #5c5c5c;\n  font-family: \"Glory\", sans-serif;\n  font-size: 3rem;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.closeX:hover,\n.closeX:focus {\n  color: #bbb;\n  cursor: pointer;\n  transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACI,aAAA;EAAe,sBAAA;EACf,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,iBAAA;EAAmB,wBAAA;EACnB,oBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,yBAAA;AASJ;;AANA,0BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AASJ;;AANA,2BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;AASJ;;AANA,kBAAA;AACA;EACI,oBAAA;EACA,wBAAA;AASJ;;AANA;EACI;IAAM,qBAAA;EAUR;EATE;IAAI,mBAAA;EAYN;AACF;AAVA,qBAAA;AACA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAYJ;;AATA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAYJ;;AATA,wCAAA;AACA;EACI;IACI,WAAA;EAYN;AACF;AARA;EACI,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,uBAAA;AAeJ;;AAZA;EACI;IAAM,UAAA;EAgBR;EAfE;IAAI,UAAA;EAkBN;AACF;AAhBA;EACI;IAAM,UAAA;EAmBR;EAlBE;IAAI,UAAA;EAqBN;AACF;AAnBA;EACI,aAAA;EACA,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,sBAAA;EACA,sBAAA;AAqBJ;;AAlBA;EACI;IAAK,yBAAA;EAsBP;EArBE;IAAK,yBAAA;EAwBP;EAvBE;IAAK,yBAAA;EA0BP;EAzBE;IAAM,yBAAA;EA4BR;AACF;AA1BA;EACI;IAAI,sBAAA;EA6BN;EA5BE;IAAK,mBAAA;IAAqB,yBAAA;EAgC5B;EA/BE;IAAM,sBAAA;IAAwB,yBAAA;EAmChC;AACF;AAjCA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,sBAAA;EACA,mCAAA;EACA,eAAA;AAmCJ;;AAhCA;EACI,sBAAA;AAmCJ;;AA9BA;EACI,UAAA;EACA,gCAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;AAiCJ;;AA9BA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAiCJ;;AA9BA;;EAEI,WAAA;EACA,eAAA;EACA,qBAAA;AAiCJ","sourcesContent":["/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 50px; /* Location of the box */\n    padding-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #ffffff;\n  }\n  \n/* Modal Content (image) */\n.modal-content {\n    margin: auto;\n    display: block;\n    aspect-ratio: 1/1;\n    max-width: 80%;\n    max-height: 80%;\n}\n  \n/* Caption of Modal Image */\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n  \n/* Add Animation */\n.modal-content, #caption {  \n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n  \n@keyframes zoom {\n    from {transform: scale(0.1)} \n    to {transform: scale(1)}\n}\n  \n/* The Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #5c5c5c;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n  \n#view {\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(255, 255, 255);\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n#view-content {\n    display: flex;\n    height: 80%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color:rgb(107, 107, 107);    \n    animation-name: fadein;\n    animation-duration: 2s;\n}\n\n@keyframes change-color {\n    20% {background-color: rgb(202, 101, 101);}\n    40% {background-color: rgb(103, 103, 182);}\n    80% {background-color: rgb(147, 209, 147);}\n    100% {background-color: rgb(211, 211, 91);}\n}\n\n@keyframes change-size {\n    0% {transform: scale(0.25);}\n    50% {transform: scale(1); background-color: rgb(202, 101, 101);}\n    100% {transform: scale(0.25); background-color: rgb(147, 209, 147);}\n}\n\n.animated-point {\n    margin-top: 20px;\n    height: 100px;\n    width: 100px;\n    background-color: rgb(147, 209, 147);\n    animation-name: change-color;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    cursor: pointer\n}\n\n.animated-point:hover {\n    transform: scale(1.05);\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap');\n\n#after-text {\n    width: 70%;\n    font-family: 'Glory', sans-serif;\n    font-size: 1.5rem;\n    margin: 10px;\n    cursor: default;\n    text-align: justify;    \n    white-space: pre-wrap;\n}\n\n.closeX {\n    color:#5c5c5c;\n    font-family: 'Glory', sans-serif;\n    font-size: 3rem;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.closeX:hover,\n.closeX:focus {\n    color: #bbb;\n    cursor: pointer;\n    transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n}\n\n#navmenu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100px;\n  border-bottom: 1px dashed red;\n  text-transform: uppercase;\n  font-family: \"Titillium Web\", sans-serif;\n}\n\nh1 {\n  font-size: 2.3rem;\n  text-transform: uppercase;\n  font-family: \"Titillium Web\", sans-serif;\n  user-select: none;\n}\n\n.menu {\n  display: flex;\n  justify-content: space-evenly;\n  width: fit-content;\n}\n\n.menu-item {\n  cursor: pointer;\n  user-select: none;\n  width: fit-content;\n  text-align: center;\n  font-size: 1.3rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.menu-item:hover {\n  color: red;\n}\n\n.active {\n  color: red;\n}\n\n#wrapper {\n  width: 100%;\n  height: calc(100% - 101px);\n}\n\n/* #header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-align: center;\n    height: 10%;\n} */\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACI,SAAA;AAAJ;;AAGA;EACI,YAAA;EACA,aAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,WAAA;EACA,aAAA;EACA,6BAAA;EACA,yBAAA;EACA,wCAAA;AAAJ;;AAGA;EACI,iBAAA;EACA,yBAAA;EACA,wCAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,6BAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,UAAA;AAAJ;;AAGA;EACI,UAAA;AAAJ;;AAGA;EACI,WAAA;EACA,0BAAA;AAAJ;;AAGA;;;;;;;GAAA;AASA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADJ;;AAIA;EACI;IAAM,UAAA;EAAR;EACE;IAAI,UAAA;EAEN;AACF;AAAA;EACI;IAAM,UAAA;EAGR;EAFE;IAAI,UAAA;EAKN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');\n\n* {\n    margin: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n}\n\n#navmenu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 100px;\n    border-bottom: 1px dashed red;\n    text-transform: uppercase;\n    font-family: 'Titillium Web', sans-serif;\n}\n\nh1 {\n    font-size: 2.3rem;\n    text-transform: uppercase;\n    font-family: 'Titillium Web', sans-serif;\n    user-select: none;\n}\n\n.menu {\n    display: flex;\n    justify-content: space-evenly;\n    width: fit-content;\n}\n\n.menu-item {\n    cursor: pointer;\n    user-select: none;\n    width: fit-content;\n    text-align: center;\n    font-size: 1.3rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n\n.menu-item:hover {\n    color: red;\n}\n\n.active {\n    color: red;\n}\n\n#wrapper {\n    width: 100%;\n    height: calc(100% - 101px);\n}\n\n/* #header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-align: center;\n    height: 10%;\n} */\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#text-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 -4rem 4rem 0 white;\n  pointer-events: none;\n}\n\n#text-container {\n  padding-left: 3rem;\n  width: 90%;\n  white-space: pre-wrap;\n  overflow: scroll;\n  overflow-x: hidden;\n  line-height: 2rem;\n  font-size: 1.5rem;\n  font-family: \"Glory\", sans-serif;\n  padding-bottom: 4rem;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  text-align: justify;\n}\n\nh2 {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: red;\n  width: 65%;\n  margin: 0 auto;\n}\n\nh3 {\n  font-size: 1.4rem;\n  line-height: 1.5rem;\n  color: red;\n  width: 65%;\n  margin: 0 auto;\n}\n\np {\n  margin: 0 auto;\n  padding-right: 2rem;\n  padding-left: 0.5rem;\n  width: 60%;\n}\n\nblockquote {\n  margin-top: -1.5rem;\n  width: 55%;\n  margin: 0 auto;\n}\n\narticle img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#text-container::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/textcontent.css"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sCAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gCAAA;EACA,oBAAA;EACA,4CAAA;EACA,wBAAA;EAA2B,gBAAA;EAC3B,qBAAA;EAAwB,YAAA;EACxB,mBAAA;AAEJ;;AACA;EACI,iBAAA;EACA,iBAAA;EACA,UAAA;EACA,UAAA;EACA,cAAA;AAEJ;;AACA;EACI,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,UAAA;EACA,cAAA;AAEJ;;AACA;EACI,cAAA;EACA,mBAAA;EACA,oBAAA;EACA,UAAA;AAEJ;;AACA;EACI,mBAAA;EACA,UAAA;EACA,cAAA;AAEJ;;AACA;EACI,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AAEJ;;AAEA,gDAAA;AACA;EACI,aAAA;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap');\n\n#text-container::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 -4rem 4rem 0 white;\n    pointer-events: none;\n}\n\n#text-container {\n    padding-left: 3rem;\n    width: 90%;\n    white-space: pre-wrap;\n    overflow: scroll;\n    overflow-x: hidden;\n    line-height: 2rem;\n    font-size: 1.5rem;\n    font-family: 'Glory', sans-serif;\n    padding-bottom: 4rem;\n    /* Hide scrollbar for IE, Edge and Firefox */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n    text-align: justify;\n}\n\nh2 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: red;\n    width: 65%;\n    margin: 0 auto;\n}\n\nh3 {\n    font-size: 1.4rem;\n    line-height: 1.5rem;\n    color: red;\n    width: 65%;\n    margin: 0 auto;\n}\n\np {\n    margin: 0 auto;\n    padding-right: 2rem;\n    padding-left: 0.5rem;\n    width: 60%;\n}\n\nblockquote {\n    margin-top: -1.5rem;\n    width: 55%;\n    margin: 0 auto;\n}\n\narticle img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#text-container::-webkit-scrollbar {\n    display: none;\n}"],"sourceRoot":""}]);
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
    projectTitle.textContent = "El lugar de las Superficies";
    projectTitle.classList.add("project");
    viewContent.appendChild(projectTitle);

    const closeButton = document.createElement("span");
    closeButton.textContent = "×";
    const afterText = document.createElement("article");
    afterText.id = "after-text";

    const text = `
    Partir de una imagen, recomponer, reconfigurar, extraer de ella su mínimo punto de homogeneidad, vacilar a partir de la saturación, el matiz, el aspecto cromático, su intensidad y encontrar la posición enriquecida en la cual la mirada acude a la inquietud, a la ambigüedad de lo eventual, ya no en movimiento, sino como un hecho capturado en el instante que se prolonga en el tiempo. Un punto de la imagen que se correlaciona directamente con otros mínimos elementos.

    El cuerpo urbano nos posiciona constantemente como espectadores de pequeñas realidades fragmentadas de la ciudad, al tiempo en que estas orgánicamente se van posicionando en la superficie del escenario social. El lugar de las superficies, es un espacio desde el cual se hace una serie de consideraciones teóricas y visuales, alrededor de algunas dinámicas socio- espaciales, que manifiestan la disonancia en que se revela la urbe; con la intención de construir nuevas significaciones e interrelaciones de la realidad concreta de la ciudad de Medellín, específicamente en los sectores patrimoniales, Prado Centro, Boston, y Los Ángeles y las formas espaciales que se generan allí. Tomando como medio el aspecto comunicativo del color, como marcaje urbano y como elemento que se yuxtapone constantemente entre las dinámicas urbanas del patrimonio habitado y arquitectónico.
    `;

    afterText.textContent = text;
    const closeX = document.createElement("span");
    closeX.classList.add("closeX");
    closeX.textContent = "×"

    const animatedPoint = document.createElement("div");
    animatedPoint.classList.add("animated-point");
    animatedPoint.addEventListener("click", function () {
        animatedPoint.style.animationName = "fadeout";
        animatedPoint.style.animationDuration = "0.5s";
        setTimeout (function () {
            viewContent.removeChild(animatedPoint);          
        }, 490)
        projectTitle.style.animationName = "fadeout";
        projectTitle.style.animationDuration = "0.5s";
        setTimeout (function () {
            projectTitle.style.visibility = "hidden";   
        }, 500)
        arrow.style.animationName = "fadeout";
        arrow.style.animationDuration = "0.5s";
        setTimeout (function () {
            viewContent.removeChild(arrow);
            viewContent.appendChild(afterText);
            viewContent.appendChild(closeX);
            afterText.style.animationName = "fadein";
            afterText.style.animationDuration = "0.5s";
        }, 500)
        setTimeout (function () {
            closeX.style.animationName = "fadein";
            closeX.style.animationDuration = "0.5s";     
        }, 500)
            
    })
    viewContent.appendChild(animatedPoint);

    setTimeout(function () {
        closeX.addEventListener("click", function() {
            viewContent.style.animationName = "fadeout";
            viewContent.style.animationDuration = "0.5s";

            setTimeout(function() {
                view.removeChild(viewContent);
                view.style.animationName = "fadeout";
                view.style.animationDuration = "0.5s";
                setTimeout (function () {
                    view.parentNode.removeChild(view);
                }, 490)
            }, 490)
        })
    }, 1000)

    const arrow = document.createElement("img");
    arrow.src = "http://a1sites.com/FreeImages/Free_Clip_Art/images/arrow/up_arrow_clip.png";
    arrow.style.width = "20px";
    arrow.style.marginTop = "20px";
    viewContent.appendChild(arrow);

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

    const reset = document.createElement("img");
    reset.id = "reset";
    // reset.type = "button";
    reset.src = "https://furtaev.ru/preview/undo_small.png";
    reset.style.width = "50px"
    reset.style.cursor = "pointer";
    // reset.textContent = "Reset";
    reset.addEventListener("click", () => {
        reset.style.animationName = "rotate360";
        reset.style.animationDuration = "0.5s";
        const pictures = document.querySelectorAll(".picture");
        pictures.forEach(picture => {
            picture.classList.add("hidden");
        })
        setTimeout(() => {
            reset.style.animationName = "";
            reset.style.animationDuration = "";
        }, 1000);
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
/* harmony import */ var _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/carousel-1.jpg */ "./src/images/carousel-1.jpg");
/* harmony import */ var _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/carousel-2.jpg */ "./src/images/carousel-2.jpg");
/* harmony import */ var _images_carousel_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/carousel-3.jpg */ "./src/images/carousel-3.jpg");
/* harmony import */ var _images_carousel_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/carousel-4.jpg */ "./src/images/carousel-4.jpg");
/* harmony import */ var _images_carousel_6_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/carousel-6.jpg */ "./src/images/carousel-6.jpg");
/* harmony import */ var _images_carousel_7_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/carousel-7.jpg */ "./src/images/carousel-7.jpg");
/* harmony import */ var _images_carousel_8_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/carousel-8.jpg */ "./src/images/carousel-8.jpg");
/* harmony import */ var _images_mapa_0_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/mapa-0.jpg */ "./src/images/mapa-0.jpg");
/* harmony import */ var _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/mapa-1.jpg */ "./src/images/mapa-1.jpg");
/* harmony import */ var _images_mapa_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/mapa-2.jpg */ "./src/images/mapa-2.jpg");








const imgs = [
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_carousel_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_carousel_4_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_carousel_6_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _images_carousel_7_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_carousel_8_jpg__WEBPACK_IMPORTED_MODULE_6__,
];





const mapas = [
    _images_mapa_0_jpg__WEBPACK_IMPORTED_MODULE_7__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_8__, _images_mapa_2_jpg__WEBPACK_IMPORTED_MODULE_9__,
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
/* harmony import */ var _images_inicio_text_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/inicio-text-1.jpg */ "./src/images/inicio-text-1.jpg");



const text = `
<h2>Reflexiones a propósito de habitar el espacio público como acto disruptivo frente a la planificación urbana, en los barrios patrimoniales de la ciudad de Medellín- Prado centro, Boston, y Los Ángeles.</h2>
<img src=${_images_inicio_text_1_jpg__WEBPACK_IMPORTED_MODULE_1__}> 
<p>Este proyecto investigativo, surge durante mi permanencia en la ciudad de Medellín, a partir de la atención en algunas dinámicas socio - espaciales, que manifiestan la disonancia en que se revela la urbe y las cuales permiten construir nuevas significaciones, e interpretaciones de la realidad concreta.</p>
<p>La ciudad se presenta como un sistema complejo, en el cual confluyen un sinnúmero de categorías sociales, económicas y políticas; una multiplicidad de esferas urbanas y prácticas cotidianas contrarias, en permanente transformación.  Esta manifestación heteróclita de la sociedad oscila entre la contención y el acontecer de lo espontáneo que emerge de escenarios alternos, y sirve como punto de partida de una serie de consideraciones, en torno a la ocupación del espacio público, y las formas espaciales que se generan allí.</p>
<p>Teniendo como referencia algunas problemáticas sociales; como la notable presencia de personas en condición de calle &lt habitante de calle &gt,  el microtráfico, la prostitución, el comercio informal, entre otras prácticas irregulares, en relación con el lugar que ocupan, encuentro una notable correspondencia con el sector patrimonial de Medellín. El barrio Prado centro, Los Ángeles y parte del sector de Boston. Allí se presentan vínculos que evidencian los contrastes y desarticulan la imagen de la ciudad, cuestionando la igualdad de acceso al espacio público, el desplazamiento constante del patrimonio habitado, el arquitectónico y la pérdida de la memoria urbana.</p>
<p>El color deviene a modo de paleta de ciudad, como marcaje urbano, fachada y como elemento que se yuxtapone constantemente entre las dinámicas urbanas del patrimonio habitado y arquitectónico.</p>
<p>*</p>
<p>El espacio público y cada uno de los elementos urbanos que lo componen, se ha ido convirtiendo cada vez más, en un medio pertinente en el cual se exponen las problemáticas y las condiciones sociales de un lugar; allí, se revelan las inconsistencias que desde antes han existido, incontenibles en el devenir de nuestra sociedad.</p>
<p>A modo de apropiaciones del espacio, como marcajes, ocupaciones temporales del espacio público o a través de pintadas o grafitis callejeros, que alteran el paisaje urbano, desarticulando así, las políticas de linealidad y regulación frente a la ocupación de este; adquieren un poder esencial, los elementos urbanos, como vinculación especifica entre la necesidad de denunciar y a la vez transformar. </p>
<p>**</p>
<p>En medio de algunas estrategias de recuperación e intervención, de las fachadas de las antiguas casas del barrio Prado Centro en Medellín, que se han hecho a través de la administración municipal; como procesos de peatonalización, pintura de fachadas y recuperación del color; emergen grafitis callejeros, a partir de gestos espontáneos y veloces; estas expresiones visuales, se yuxtaponen sobre el paisaje arquitectónico, transformándolo y  apoderándose paulatinamente de él, como un medio transgresor y de denuncia, casi propiciando un recorrido espacial que agita visualmente  la aparente rectitud de la estética arquitectónica y el mobiliario urbano, que se intenta reservar y mantener hermético ante cualquier asomo de contrariedad.</p>
<p>Las pintadas o grafitis, visibilizan el estado de la sociedad inconforme, que se proyecta por fuera de lo apropiado y lo hegemónico, reconfigurando el espacio al paso de los días, de manera orgánica y en sintonía a los sentimientos de sus realizadores; de este mismo modo, empiezan a resistirse a los principios del urbanismo, personas que acogen y crean nuevas formas de urbanismo y estéticas urbanas, paralelas a las de la ciudad planificada. Contrarrestando así, la imposición institucional, a través de equipamientos no convencionales que se despliegan ocasionalmente en el espacio y doblegan las políticas de orden público, de manera disruptiva.</p>
<p>Pero estos modos de ocupación temporal del espacio público, que en algunos casos se pueden manifestar como un gesto libre, de simple irreverencia,  le hacen frente a profundas problemáticas sociales de desigualdad e inestabilidad, a una precariedad política y económica, que de algún modo se encuentra normalizada, y de la cual surgen soluciones por instinto de supervivencia.</p>
<blockquote>
&quotVivimos en una era en la que los ideales de los derechos humanos se han colocado en el centro de la escena tanto política como éticamente. Se ha gastado una gran cantidad de energía en promover su significado para la construcción de un mundo mejor, aunque la mayoría de los conceptos que circulan no desafían fundamentalmente las lógicas de mercado liberales y neoliberales o los modos dominantes de legalidad y de acción estatal. Vivimos, después de todo, en un mundo en el que los derechos a la propiedad privada y el beneficio aplastan todas las demás nociones de derechos.&quot

    -David Harvey, el derecho a la ciudad.
</blockquote>
<p>La presencia de estas personas y sus ocupaciones, se convierte en un marcaje social, que señala, provee de ciertas características y configura la relación del resto de los habitantes de la ciudad con el barrio. Son estas prácticas irregulares, las que acentúan de algún modo el patrimonio habitado de un lugar en el que las viviendas han quedado relegadas a instituciones, donde de puertas para adentro se tejen relaciones, pero que en sus calles, no existe necesariamente un vínculo comunitario.  Con todo esto se crean limitantes que hacen parte de la construcción social,  una sensación de inseguridad, que como lo señala Jane Jacobs acerca de los ojos en la calle, determinan la postura que se tiene con las calles del barrio y con estas mismas prácticas y personas, que de algún modo se les margina.</p>
<p>***</p>
<h3>En tiempos de pandemia.</h3>
<p>El contexto de la emergencia sanitaria por Covid 19, evidentemente condicionó la manera como nos relacionamos con el espacio público y con los demás habitantes de la ciudad.</p>
<p>Este ha sido un detonante que ha permitido mayor visibilidad a  las diversas problemáticas sociales que se intensificaron en medio de la situación, en temas económicos y espaciales.</p>
<p>Es de allí, como el andén del espacio público en el barrio, que permanece dispuesto, pasa de contemplar y de ser el escenario desde donde se atiborra y sucede la cotidianidad social inmediata, a ser contemplado, queda desprovisto de todo tipo de comercio. Los condicionamientos de este espacio, se hacen más notables, se acentúa la negación de un espacio público para el vendedor ambulante, donde sobresale el rígido control que siempre ha existido frente a este elemento del urbanismo que se supone para ser vivenciado.</p> 
<p>A fuerza, se enfatiza el ejercicio de rebeldía, que hace cotidianamente el habitante - vendedor ambulante, que en su práctica genera lazos sociales y desde donde se tejen confrontaciones y convivencias espaciales, que posibilitan la experiencia social del vecindario.</p>
<p>De modo contrario, este andén del espacio público para los habitantes de la calle, las personas que deben vivir allí,  se ha vuelto un espacio de refugio ocasional, su acto de rebeldía frente a la negación del habitar la calle en tiempos de pandemia, es sencillamente una presentación de la marginalidad. La ocupación efímera y cambiante que hace el habitante de este sitio, transgrede la expectativa social.</p>
<p>En medio del eclecticismo arquitectónico de barrio, se presenta el suelo como refugio, sombra y descanso, acoge una presencia tan solo vista, siquiera capaz de ser percibida, como un sobresalto a la vista, que particularmente rompe la continuidad y produce precaución en el transeúnte.</p>
<p>****</p>
<p>En épocas de conectividad virtual, el servidor web Street view encapsula, y eterniza por tiempos medianamente duraderos, acontecimientos del espacio público habitado que ideológicamente han intentado ser disimulados en la realidad concreta. Como una galería de la realidad tal cual es, sin desaprobación alguna, fragmentos de vivencias espaciales y acontecimientos espontáneos de la sociedad, quedan congelados y se vuelven universales.</p>
<p>Desde lo medianamente lejano, surgen formas, que tienden a volverse indescifrables, como pequeñas insinuaciones de color, casi con un aspecto de código de ciudad, multiforme, y empiezan a adquirir un aspecto de señalamiento sobre el paisaje urbano, que sobresale. Pasajes de seres humanos en situaciones que enaltecen la subjetividad que los compone, o formas semiescondidas detrás de árboles, escalones, bolsas, entre otros; que sugieren la presencia de un cuerpo humano apropiado a su antojo del espacio público. Algunas de estas personas, traen consigo elementos, que de modo ingenioso se convierten en construcciones habitables temporales y transportables, que sugieren quizás una pregunta por lo escultórico, quizás como otra posibilidad entre la arquitectura y el paisaje, sobre las que alguna vez intentó cartografiar Rosalind Krauss.</p>
<p>Emplazamientos efímeros a partir de elementos reciclados, transformados, relocalizados, recontextualizados, que genera una heterotopìa espacial, y se yuxtapone al paisaje arquitectónico regular.</p>
<h3>Aproximaciones al color.</h3>
<p>La experiencia que existe a través del color es producto directo de la presencialidad. Necesariamente la manera como percibimos las pulsiones del color, están profundamente ligadas a atributos culturales y a la propia manera de relacionarnos con el color en nuestro entorno cultural. Incluso aspectos de la geografía de un lugar, relacionado a condiciones específicas del clima, atmosféricas, entre otros; condicionan el comportamiento de un territorio, aportando significativamente a los valores estéticos de cada cultura.</p>
<p>Aun así, la experiencia que tenemos con el color es necesariamente particular. Olafur Eliasson menciona, “El color tiene un enorme potencial psicológico y asociativo: aun cuando se ha cultivado hasta el extremo, la experiencia de los colores es así mismo extremadamente individual.” (O, Eliasson, 2012)</p>
<p>Partir de una imagen, recomponer, reconfigurar, extraer de ella su mínimo punto de homogeneidad, vacilar a partir de la saturación, el matiz, el aspecto cromático, su intensidad y encontrar la posición enriquecida en la cual la mirada acude a la inquietud, a la ambigüedad de lo eventual, ya no en movimiento, sino como un hecho capturado en el instante que se prolonga en el tiempo. Un punto de la imagen que se correlaciona directamente con otros mínimos elementos, y en esa interrelación, surge una exploración visual, que golpea el ojo al contacto.</p>
<p>Estamos aprehendidos a lo móvil, al evento furtivo y pasajero, pestañeamos al tiempo en que se reconfigura el espacio con sus eventualidades, y la imagen pocas veces se adhiere, pocas veces trasciende y se expande en el tiempo. Recorrer la ciudad, optar por una posición receptiva en sus calles, en ocasiones produce desgaste, debido a la sonoridad visual y la facilidad en la que se pasa de una imagen a otra. Los eventos dejan de ser eventos, para convertirse en presunciones cotidianas, banales, que pierden la calidad para ser exploradas, más allá de la forma.</p>
<p>A partir del mínimo elemento de color que compone una imagen digital enmarcada de la realidad, se reconstruye su significado, el desvanecimiento de la figuración señala el color por sí mismo.</p>
<p>El cuerpo urbano nos posiciona constantemente como espectadores de pequeñas realidades fragmentadas de la ciudad, al tiempo en que estas orgánicamente se van posicionando en la superficie del escenario social; por otro lado se les impide fluir, en medio de la vigilancia que bajo nociones del bien común y un marketing urbanístico en el cual prima la estética y al armonía visual, se esconden marginalidades, que se disimulan constantemente dentro del aparataje político, desvaneciendo estas realidades específicas. La presencia de estos hechos cotidianos, en el acontecer diario, empiezan a perder relevancia para el usuario de la ciudad.</p>
<p>La codificación de la imagen permite señalar estas prácticas, potenciando el valor de la inaceptación, negación y camuflaje.  El carácter silencioso que han adquirido estas prácticas se trastoca con la necesidad de ocultación de la imagen que incomoda, con el interés de deslocalizar y resituar en el plano social, la posición de estas prácticas con el espacio que ocupan.</p>
<p>El aspecto comunicativo del color atribuye otra mirada de la realidad, al yuxtaponerse a la estandarización cromática del entorno urbano. La instrumentación y los elementos requeridos por estas personas para sobrellevar los aspectos más básicos de la subsistencia en el entorno urbano empiezan a generar contrastes visuales. En la proximidad de los espacios temporales que se van generando, los cuales les permiten acudir y gestionar sus necesidades más cercanas.</p>
`;

function textContent() {
    const textContainer = document.createElement("article");
    textContainer.id = "text-container";
    textContainer.innerHTML = text;

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

/***/ "./src/images/carousel-1.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "405dcde919deb3019c15.jpg";

/***/ }),

/***/ "./src/images/carousel-2.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2d37b7bf05aa536d893.jpg";

/***/ }),

/***/ "./src/images/carousel-3.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90cf6c0a8927525746ea.jpg";

/***/ }),

/***/ "./src/images/carousel-4.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-4.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d056dd61b762a183c4f.jpg";

/***/ }),

/***/ "./src/images/carousel-6.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-6.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c445d3e7a949e56d03a.jpg";

/***/ }),

/***/ "./src/images/carousel-7.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-7.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3480c1d7e29c67dde427.jpg";

/***/ }),

/***/ "./src/images/carousel-8.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-8.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e6fbcb8266af9487157.jpg";

/***/ }),

/***/ "./src/images/inicio-text-1.jpg":
/*!**************************************!*\
  !*** ./src/images/inicio-text-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b7dfa3b072ca75f1631.jpg";

/***/ }),

/***/ "./src/images/mapa-0.jpg":
/*!*******************************!*\
  !*** ./src/images/mapa-0.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a204af7db92f9cbc49c.jpg";

/***/ }),

/***/ "./src/images/mapa-1.jpg":
/*!*******************************!*\
  !*** ./src/images/mapa-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4ff04c98fdedc6b20ea.jpg";

/***/ }),

/***/ "./src/images/mapa-2.jpg":
/*!*******************************!*\
  !*** ./src/images/mapa-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50e465c4b71f3ce465cf.jpg";

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
    {title: "Algunos escritos", content: (0,_text__WEBPACK_IMPORTED_MODULE_3__.textContent)()}, 
    {title: "Recorridos", content: (0,_map__WEBPACK_IMPORTED_MODULE_6__.createMapsLibrary)()},
    // {title: "Superficies", content: createCarousel(), second: carouselFunction()}
];
pageNames.forEach(page => {
    const menu = document.createElement("span");
    menu.classList.add("menu-item");
    menu.id = page.title;
    menu.textContent = page.title;
    menu.addEventListener("click", function() {
        wrapper.style.animationName = "fadeout";
        wrapper.style.animationDuration = "1s";
        setTimeout(() => {
            content.innerHTML = "";
            content.appendChild(page.content);
            wrapper.style.animationName = "fadein";
            wrapper.style.animationDuration = "1s"
        }, 990);
    })
    pages.appendChild(menu);
})

const superficiesMenu = document.createElement("span");
superficiesMenu.classList.add("menu-item");
superficiesMenu.id = "Superficies";
superficiesMenu.textContent = "Superficies";
superficiesMenu.addEventListener("click", () => {
    wrapper.style.animationName = "fadeout";
    wrapper.style.animationDuration = "0.5s";
    setTimeout(function() {
        content.innerHTML = "";
        content.style.visibility = "hidden";
        content.appendChild((0,_carousel__WEBPACK_IMPORTED_MODULE_5__.createCarousel)());
        setTimeout(function() {
            content.style.visibility = "visible";
            wrapper.style.animationName = "fadein";
            wrapper.style.animationDuration = "1s"
            ;(0,_carousel__WEBPACK_IMPORTED_MODULE_5__.carouselFunction)();
        }, 1490);
    }, 490);
})
pages.appendChild(superficiesMenu)
navmenu.appendChild(pages);

body.appendChild(navmenu);

const menus = document.querySelectorAll(".menu-item");
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function() {
        for (let j = 0; j < menus.length; j++) {
            menus[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}

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
menus[0].classList.add("active");

wrapper.appendChild(_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDJEQUFjO0FBQ2xDOztBQUVBLG9CQUFvQiw0Q0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9jYXJvdXNlbC5zY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvZ2FsbGVyeS5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tYXAuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvbW9kYWwuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvdGV4dGNvbnRlbnQuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9jYXJvdXNlbC5zY3NzP2RlNjUiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9nYWxsZXJ5LmNzcz82MzRiIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvbWFwLmNzcz9kZWZkIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvbW9kYWwuY3NzP2EwYWMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/YmNiYyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL3RleHRjb250ZW50LmNzcz9hNzNlIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9maXJzdHZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2ltZ2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL3ZpZGVvZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJvdXNlbCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVkZTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2Fyb3VzZWwgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uY2Fyb3VzZWwgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA2MCU7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxufVxcbi5jYXJvdXNlbCBmaWd1cmUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLmNhcm91c2VsIGZpZ3VyZSBpbWc6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uY2Fyb3VzZWwgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxufVxcbi5jYXJvdXNlbCBuYXYgYnV0dG9uIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG4uY2Fyb3VzZWwgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBUGdCO0VBUWhCLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVNJO0VBQ0UsY0FBQTtBQVBOO0FBVUk7RUFDRSxTQUFBO0VBRUEsVUF0QlM7RUF1QlQsNEJBQUE7RUFDQSwwQkFBQTtBQVROO0FBV007RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBVFI7QUFXUTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFUVjtBQWNJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWVNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZlI7QUFrQk07RUFDRSxzQkFBQTtBQWhCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcbiAgXFxuICAvLyBDYXJvdXNlbCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnNcXG4gICRpdGVtLXdpZHRoOiA2MCU7IC8vIE5vdyB3ZSBjYW4gdXNlIHBlcmNlbnRhZ2VzIVxcbiAgJGl0ZW0tc2VwYXJhdGlvbjogMHB4OyAvLyBUaGlzIG5vdyBpcyBzZXQgd2l0aCBKc1xcbiAgJHZpZXdlci1kaXN0YW5jZTogMTAwMHB4O1xcbiAgXFxuICAuY2Fyb3VzZWwge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjIyKTtcXG4gIFxcbiAgICBwZXJzcGVjdGl2ZTogJHZpZXdlci1kaXN0YW5jZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA+ICoge1xcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB9XFxuICBcXG4gICAgZmlndXJlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICBcXG4gICAgICB3aWR0aDogJGl0ZW0td2lkdGg7XFxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG4gIFxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiBtYXRoLmRpdigkaXRlbS1zZXBhcmF0aW9uLCAyKTtcXG4gIFxcbiAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICBcXG4gICAgbmF2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDIwJTtcXG4gICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICB6LWluZGV4OiAxMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcXG4gIFxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICBcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3BpeCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FsbGVyeSB7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mcmFtZSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBpY3R1cmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWN0dXJlOmhvdmVyIHtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDAuMDE7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlMzYwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1OWRlZyk7XFxuICB9XFxufVxcbi8qICNyZXNldDpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUzNjA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FsbGVyeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFBTSx1QkFBQTtFQUVSO0VBREU7SUFBSSwwQkFBQTtFQUlOO0FBQ0Y7QUFGQTs7O0dBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BpeCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FsbGVyeSB7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICAgIHBhZGRpbmc6IDNweDsgICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWN0dXJlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDAuMDE7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlMzYwIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoLTM1OWRlZyk7fVxcbn1cXG5cXG4vKiAjcmVzZXQ6aG92ZXIge1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlMzYwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbGlicmFyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMC41cmVtIDAuNXJlbSAwIHdoaXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNsaWJyYXJ5IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiNsaWJyYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFwYSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21hcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBRzVCOztBQUFBLGdEQUFBO0FBQ0E7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGlicmFyeTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjVyZW0gMC41cmVtIDAgd2hpdGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI2xpYnJhcnk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hcGEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HbG9yeTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgbWF4LWhlaWdodDogODAlO1xcbn1cXG5cXG4vKiBDYXB0aW9uIG9mIE1vZGFsIEltYWdlICovXFxuI2NhcHRpb24ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLyogQWRkIEFuaW1hdGlvbiAqL1xcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7XFxuICBhbmltYXRpb24tbmFtZTogem9vbTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDM1cHg7XFxuICBjb2xvcjogIzVjNWM1YztcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogI2JiYjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4jdmlldyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4jdmlldy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzZiNmI2YjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxuICAyMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E2NTY1O1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NjdiNjtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2QxOTM7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDM1YjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGFuZ2Utc2l6ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E2NTY1O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2QxOTM7XFxuICB9XFxufVxcbi5hbmltYXRlZC1wb2ludCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2QxOTM7XFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYW5pbWF0ZWQtcG9pbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI2FmdGVyLXRleHQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2xvcnlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDEwcHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4uY2xvc2VYIHtcXG4gIGNvbG9yOiAjNWM1YzVjO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHbG9yeVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jbG9zZVg6aG92ZXIsXFxuLmNsb3NlWDpmb2N1cyB7XFxuICBjb2xvcjogI2JiYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQUE7QUFDQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixpQkFBQTtFQUFtQix3QkFBQTtFQUNuQixvQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHlCQUFBO0FBU0o7O0FBTkEsMEJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVNKOztBQU5BLDJCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBU0o7O0FBTkEsa0JBQUE7QUFDQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7QUFTSjs7QUFOQTtFQUNJO0lBQU0scUJBQUE7RUFVUjtFQVRFO0lBQUksbUJBQUE7RUFZTjtBQUNGO0FBVkEscUJBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFUQTs7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVEEsd0NBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtFQVlOO0FBQ0Y7QUFSQTtFQUNJLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtBQWVKOztBQVpBO0VBQ0k7SUFBTSxVQUFBO0VBZ0JSO0VBZkU7SUFBSSxVQUFBO0VBa0JOO0FBQ0Y7QUFoQkE7RUFDSTtJQUFNLFVBQUE7RUFtQlI7RUFsQkU7SUFBSSxVQUFBO0VBcUJOO0FBQ0Y7QUFuQkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBcUJKOztBQWxCQTtFQUNJO0lBQUsseUJBQUE7RUFzQlA7RUFyQkU7SUFBSyx5QkFBQTtFQXdCUDtFQXZCRTtJQUFLLHlCQUFBO0VBMEJQO0VBekJFO0lBQU0seUJBQUE7RUE0QlI7QUFDRjtBQTFCQTtFQUNJO0lBQUksc0JBQUE7RUE2Qk47RUE1QkU7SUFBSyxtQkFBQTtJQUFxQix5QkFBQTtFQWdDNUI7RUEvQkU7SUFBTSxzQkFBQTtJQUF3Qix5QkFBQTtFQW1DaEM7QUFDRjtBQWpDQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFtQ0o7O0FBaENBO0VBQ0ksc0JBQUE7QUFtQ0o7O0FBOUJBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFpQ0o7O0FBOUJBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFpQ0o7O0FBOUJBOztFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFpQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICBcXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgbWF4LWhlaWdodDogODAlO1xcbn1cXG4gIFxcbi8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKi9cXG4jY2FwdGlvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNjY2M7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuICBcXG4vKiBBZGQgQW5pbWF0aW9uICovXFxuLm1vZGFsLWNvbnRlbnQsICNjYXB0aW9uIHsgIFxcbiAgICBhbmltYXRpb24tbmFtZTogem9vbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbn1cXG4gIFxcbkBrZXlmcmFtZXMgem9vbSB7XFxuICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMC4xKX0gXFxuICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxcbn1cXG4gIFxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6IDM1cHg7XFxuICAgIGNvbG9yOiAjNWM1YzVjO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4gIFxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogI2JiYjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbiAgXFxuI3ZpZXcge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAxO31cXG4gICAgdG8ge29wYWNpdHk6IDA7fVxcbn1cXG5cXG4jdmlldy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjpyZ2IoMTA3LCAxMDcsIDEwNyk7ICAgIFxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxuICAgIDIwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTAxLCAxMDEpO31cXG4gICAgNDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDE4Mik7fVxcbiAgICA4MCUge2JhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDIwOSwgMTQ3KTt9XFxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgOTEpO31cXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2Utc2l6ZSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO31cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxMDEsIDEwMSk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuMjUpOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMDksIDE0Nyk7fVxcbn1cXG5cXG4uYW5pbWF0ZWQtcG9pbnQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDIwOSwgMTQ3KTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZS1jb2xvcjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uYW5pbWF0ZWQtcG9pbnQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HbG9yeTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4jYWZ0ZXItdGV4dCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2xvcnknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7ICAgIFxcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5jbG9zZVgge1xcbiAgICBjb2xvcjojNWM1YzVjO1xcbiAgICBmb250LWZhbWlseTogJ0dsb3J5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuICBcXG4uY2xvc2VYOmhvdmVyLFxcbi5jbG9zZVg6Zm9jdXMge1xcbiAgICBjb2xvcjogI2JiYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdm1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJlZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIlRpdGlsbGl1bSBXZWJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIlRpdGlsbGl1bSBXZWJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAxcHgpO1xcbn1cXG5cXG4vKiAjaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlO1xcbn0gKi9cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBOzs7Ozs7O0dBQUE7QUFTQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSTtJQUFNLFVBQUE7RUFBUjtFQUNFO0lBQUksVUFBQTtFQUVOO0FBQ0Y7QUFBQTtFQUNJO0lBQU0sVUFBQTtFQUdSO0VBRkU7SUFBSSxVQUFBO0VBS047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJlZDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMXB4KTtcXG59XFxuXFxuLyogI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG59ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZW91dCB7XFxuICAgIGZyb20ge29wYWNpdHk6IDE7fVxcbiAgICB0byB7b3BhY2l0eTogMDt9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdsb3J5OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiN0ZXh0LWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHJlbSA0cmVtIDAgd2hpdGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI3RleHQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2xvcnlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbmJsb2NrcXVvdGUge1xcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcXG4gIHdpZHRoOiA1NSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuYXJ0aWNsZSBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI3RleHQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RleHRjb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFBd0IsWUFBQTtFQUN4QixtQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFFQSxnREFBQTtBQUNBO0VBQ0ksYUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdsb3J5OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiN0ZXh0LWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDRyZW0gMCB3aGl0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiN0ZXh0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdHbG9yeScsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG5ibG9ja3F1b3RlIHtcXG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmFydGljbGUgaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI3RleHQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Y29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Y29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGltZ3MgfSBmcm9tICcuL2ltZ2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9jYXJvdXNlbC5zY3NzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwgKCkge1xuICAgIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gICAgY2Fyb3VzZWwuZGF0YXNldC5nYXAgPSAyMDtcbiAgICBjYXJvdXNlbC5kYXRhc2V0LmJmYztcblxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1nc1tpXTtcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoZmlndXJlKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgYnV0dG9uUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uUHJldi5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwicHJldlwiKTtcbiAgICBidXR0b25QcmV2LnRleHRDb250ZW50ID0gXCJQcmV2XCI7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmV4dC5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwibmV4dFwiKTtcbiAgICBidXR0b25OZXh0LnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uUHJldik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk5leHQpO1xuXG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICByZXR1cm4gY2Fyb3VzZWxcbn07XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIGNhcm91c2VsRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuICAgIHZhciBmaWd1cmUgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiZmlndXJlXCIpLFxuICAgICAgbmF2ID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIm5hdlwiKSxcbiAgICAgIGltYWdlcyA9IGZpZ3VyZS5jaGlsZHJlbixcbiAgICAgIG4gPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgZ2FwID0gY2Fyb3VzZWwuZGF0YXNldC5nYXAgfHwgMCxcbiAgICAgIGJmYyA9IHRydWUsXG4gICAgICB0aGV0YSA9ICgyICogTWF0aC5QSSkgLyBuLFxuICAgICAgY3VyckltYWdlID0gMDtcbiAgICBzZXR1cENhcm91c2VsKG4sIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShpbWFnZXNbMF0pLndpZHRoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0dXBDYXJvdXNlbChuLCBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoaW1hZ2VzWzBdKS53aWR0aCkpO1xuICAgIH0pO1xuICBcbiAgICBzZXR1cE5hdmlnYXRpb24oKTtcbiAgXG4gICAgZnVuY3Rpb24gc2V0dXBDYXJvdXNlbChuLCBzKSB7XG4gICAgICB2YXIgYXBvdGhlbSA9IHMgLyAoMiAqIE1hdGgudGFuKE1hdGguUEkgLyBuKSk7XG4gICAgICBmaWd1cmUuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYDUwJSA1MCUgJHstYXBvdGhlbX1weGA7XG4gIFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGltYWdlc1tpXS5zdHlsZS5wYWRkaW5nID0gYCR7Z2FwfXB4YDtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaW1hZ2VzW2ldLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGA1MCUgNTAlICR7LWFwb3RoZW19cHhgO1xuICAgICAgICBpbWFnZXNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpICogdGhldGF9cmFkKWA7XG4gICAgICB9XG4gICAgICBpZiAoYmZjKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBpbWFnZXNbaV0uc3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgXG4gICAgICByb3RhdGVDYXJvdXNlbChjdXJySW1hZ2UpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gc2V0dXBOYXZpZ2F0aW9uKCkge1xuICAgICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrLCB0cnVlKTtcbiAgXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgIHZhciB0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0LnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPSBcIkJVVFRPTlwiKSByZXR1cm47XG4gIFxuICAgICAgICBpZiAodC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXh0XCIpKSB7XG4gICAgICAgICAgY3VyckltYWdlKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyckltYWdlLS07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHJvdGF0ZUNhcm91c2VsKGN1cnJJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiByb3RhdGVDYXJvdXNlbChpbWFnZUluZGV4KSB7XG4gICAgICBmaWd1cmUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpbWFnZUluZGV4ICogLXRoZXRhfXJhZClgO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgJy4vY3NzL21vZGFsLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWV3KCkge1xuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZpZXcuaWQgPSBcInZpZXdcIjtcblxuICAgIGNvbnN0IHZpZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2aWV3Q29udGVudC5pZCA9IFwidmlldy1jb250ZW50XCI7XG4gICAgdmlldy5hcHBlbmRDaGlsZCh2aWV3Q29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJFbCBsdWdhciBkZSBsYXMgU3VwZXJmaWNpZXNcIjtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCI7XG4gICAgY29uc3QgYWZ0ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgYWZ0ZXJUZXh0LmlkID0gXCJhZnRlci10ZXh0XCI7XG5cbiAgICBjb25zdCB0ZXh0ID0gYFxuICAgIFBhcnRpciBkZSB1bmEgaW1hZ2VuLCByZWNvbXBvbmVyLCByZWNvbmZpZ3VyYXIsIGV4dHJhZXIgZGUgZWxsYSBzdSBtw61uaW1vIHB1bnRvIGRlIGhvbW9nZW5laWRhZCwgdmFjaWxhciBhIHBhcnRpciBkZSBsYSBzYXR1cmFjacOzbiwgZWwgbWF0aXosIGVsIGFzcGVjdG8gY3JvbcOhdGljbywgc3UgaW50ZW5zaWRhZCB5IGVuY29udHJhciBsYSBwb3NpY2nDs24gZW5yaXF1ZWNpZGEgZW4gbGEgY3VhbCBsYSBtaXJhZGEgYWN1ZGUgYSBsYSBpbnF1aWV0dWQsIGEgbGEgYW1iaWfDvGVkYWQgZGUgbG8gZXZlbnR1YWwsIHlhIG5vIGVuIG1vdmltaWVudG8sIHNpbm8gY29tbyB1biBoZWNobyBjYXB0dXJhZG8gZW4gZWwgaW5zdGFudGUgcXVlIHNlIHByb2xvbmdhIGVuIGVsIHRpZW1wby4gVW4gcHVudG8gZGUgbGEgaW1hZ2VuIHF1ZSBzZSBjb3JyZWxhY2lvbmEgZGlyZWN0YW1lbnRlIGNvbiBvdHJvcyBtw61uaW1vcyBlbGVtZW50b3MuXG5cbiAgICBFbCBjdWVycG8gdXJiYW5vIG5vcyBwb3NpY2lvbmEgY29uc3RhbnRlbWVudGUgY29tbyBlc3BlY3RhZG9yZXMgZGUgcGVxdWXDsWFzIHJlYWxpZGFkZXMgZnJhZ21lbnRhZGFzIGRlIGxhIGNpdWRhZCwgYWwgdGllbXBvIGVuIHF1ZSBlc3RhcyBvcmfDoW5pY2FtZW50ZSBzZSB2YW4gcG9zaWNpb25hbmRvIGVuIGxhIHN1cGVyZmljaWUgZGVsIGVzY2VuYXJpbyBzb2NpYWwuIEVsIGx1Z2FyIGRlIGxhcyBzdXBlcmZpY2llcywgZXMgdW4gZXNwYWNpbyBkZXNkZSBlbCBjdWFsIHNlIGhhY2UgdW5hIHNlcmllIGRlIGNvbnNpZGVyYWNpb25lcyB0ZcOzcmljYXMgeSB2aXN1YWxlcywgYWxyZWRlZG9yIGRlIGFsZ3VuYXMgZGluw6FtaWNhcyBzb2Npby0gZXNwYWNpYWxlcywgcXVlIG1hbmlmaWVzdGFuIGxhIGRpc29uYW5jaWEgZW4gcXVlIHNlIHJldmVsYSBsYSB1cmJlOyBjb24gbGEgaW50ZW5jacOzbiBkZSBjb25zdHJ1aXIgbnVldmFzIHNpZ25pZmljYWNpb25lcyBlIGludGVycmVsYWNpb25lcyBkZSBsYSByZWFsaWRhZCBjb25jcmV0YSBkZSBsYSBjaXVkYWQgZGUgTWVkZWxsw61uLCBlc3BlY8OtZmljYW1lbnRlIGVuIGxvcyBzZWN0b3JlcyBwYXRyaW1vbmlhbGVzLCBQcmFkbyBDZW50cm8sIEJvc3RvbiwgeSBMb3Mgw4FuZ2VsZXMgeSBsYXMgZm9ybWFzIGVzcGFjaWFsZXMgcXVlIHNlIGdlbmVyYW4gYWxsw60uIFRvbWFuZG8gY29tbyBtZWRpbyBlbCBhc3BlY3RvIGNvbXVuaWNhdGl2byBkZWwgY29sb3IsIGNvbW8gbWFyY2FqZSB1cmJhbm8geSBjb21vIGVsZW1lbnRvIHF1ZSBzZSB5dXh0YXBvbmUgY29uc3RhbnRlbWVudGUgZW50cmUgbGFzIGRpbsOhbWljYXMgdXJiYW5hcyBkZWwgcGF0cmltb25pbyBoYWJpdGFkbyB5IGFycXVpdGVjdMOzbmljby5cbiAgICBgO1xuXG4gICAgYWZ0ZXJUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBjb25zdCBjbG9zZVggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjbG9zZVguY2xhc3NMaXN0LmFkZChcImNsb3NlWFwiKTtcbiAgICBjbG9zZVgudGV4dENvbnRlbnQgPSBcIsOXXCJcblxuICAgIGNvbnN0IGFuaW1hdGVkUG9pbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFuaW1hdGVkUG9pbnQuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkLXBvaW50XCIpO1xuICAgIGFuaW1hdGVkUG9pbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0ZWRQb2ludC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgICAgIGFuaW1hdGVkUG9pbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmlld0NvbnRlbnQucmVtb3ZlQ2hpbGQoYW5pbWF0ZWRQb2ludCk7ICAgICAgICAgIFxuICAgICAgICB9LCA0OTApXG4gICAgICAgIHByb2plY3RUaXRsZS5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgICAgIHByb2plY3RUaXRsZS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7ICAgXG4gICAgICAgIH0sIDUwMClcbiAgICAgICAgYXJyb3cuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICBhcnJvdy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChhZnRlclRleHQpO1xuICAgICAgICAgICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VYKTtcbiAgICAgICAgICAgIGFmdGVyVGV4dC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlaW5cIjtcbiAgICAgICAgICAgIGFmdGVyVGV4dC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICB9LCA1MDApXG4gICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsb3NlWC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlaW5cIjtcbiAgICAgICAgICAgIGNsb3NlWC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiOyAgICAgXG4gICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIFxuICAgIH0pXG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoYW5pbWF0ZWRQb2ludCk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xvc2VYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmlldy5yZW1vdmVDaGlsZCh2aWV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgICAgICAgICAgICAgdmlldy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZpZXcpO1xuICAgICAgICAgICAgICAgIH0sIDQ5MClcbiAgICAgICAgICAgIH0sIDQ5MClcbiAgICAgICAgfSlcbiAgICB9LCAxMDAwKVxuXG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFycm93LnNyYyA9IFwiaHR0cDovL2Exc2l0ZXMuY29tL0ZyZWVJbWFnZXMvRnJlZV9DbGlwX0FydC9pbWFnZXMvYXJyb3cvdXBfYXJyb3dfY2xpcC5wbmdcIjtcbiAgICBhcnJvdy5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICAgIGFycm93LnN0eWxlLm1hcmdpblRvcCA9IFwiMjBweFwiO1xuICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGFycm93KTtcblxuICAgIHJldHVybiB2aWV3XG59IiwiaW1wb3J0IHttb2RhbH0gZnJvbSAnLi9tb2RhbC5qcyc7XG5pbXBvcnQgeyB2aWRlb3MgfSBmcm9tICcuL3ZpZGVvZGF0YSc7XG5pbXBvcnQgJy4vY3NzL2dhbGxlcnkuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2FsbGVyeUNvbnRlbnQoKSB7XG4gICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FsbGVyeS5pZCA9IFwiZ2FsbGVyeVwiO1xuXG4gICAgY29uc3QgY3JlYXRlRGl2RnJhbWUgPSAodmlkZW8pID0+IHtcbiAgICAgICAgY29uc3QgZGl2VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2VGFnLmNsYXNzTGlzdC5hZGQoXCJmcmFtZVwiKTtcbiAgICAgICAgZGl2VGFnLmFwcGVuZCh2aWRlbyk7XG4gICAgICAgIHJldHVybiBkaXZUYWdcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVWaWQgPSAoc3JjLCBjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdmlkVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmlkVGFnLmlkID0gaW5kZXg7XG4gICAgICAgIHZpZFRhZy5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgdmlkVGFnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICB2aWRUYWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZFRhZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvU291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgICAgICAgICAgIHZpZGVvU291cmNlLnNyYyA9IHNyYztcbiAgICAgICAgICAgIHZpZGVvU291cmNlLnR5cGUgPSBcInZpZGVvL21wNFwiO1xuICAgICAgICAgICAgaWYgKG1vZGFsQ29udGVudC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgICAgICAgICAgbW9kYWxDb250ZW50LmNoaWxkTm9kZXNbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuc3R5bGUud2lkdGggPSBcIjYwMHB4XCI7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCI2MDBweFwiO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHZpZGVvU291cmNlKTtcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB2aWRUYWdcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2aWRzcmMgPSB2aWRlb3NbaV0uc3JjO1xuICAgICAgICBjb25zdCB2aWRDb2xvciA9IHZpZGVvc1tpXS5yZ2I7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB2aWRQaWN0dXJlID0gY3JlYXRlVmlkKHZpZHNyYywgdmlkQ29sb3IsIGkpO1xuICAgICAgICBjb25zdCBkaXZGcmFtZSA9IGNyZWF0ZURpdkZyYW1lKHZpZFBpY3R1cmUpO1xuICAgICAgICBcbiAgICAgICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChkaXZGcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJlc2V0LmlkID0gXCJyZXNldFwiO1xuICAgIC8vIHJlc2V0LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHJlc2V0LnNyYyA9IFwiaHR0cHM6Ly9mdXJ0YWV2LnJ1L3ByZXZpZXcvdW5kb19zbWFsbC5wbmdcIjtcbiAgICByZXNldC5zdHlsZS53aWR0aCA9IFwiNTBweFwiXG4gICAgcmVzZXQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgLy8gcmVzZXQudGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG4gICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVzZXQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwicm90YXRlMzYwXCI7XG4gICAgICAgIHJlc2V0LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgIGNvbnN0IHBpY3R1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waWN0dXJlXCIpO1xuICAgICAgICBwaWN0dXJlcy5mb3JFYWNoKHBpY3R1cmUgPT4ge1xuICAgICAgICAgICAgcGljdHVyZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc2V0LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgcmVzZXQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIlwiO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcGl4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaXguaWQgPSBcInBpeFwiO1xuICAgIHBpeC5hcHBlbmRDaGlsZChnYWxsZXJ5KTtcbiAgICBwaXguYXBwZW5kQ2hpbGQocmVzZXQpO1xuXG4gICAgcmV0dXJuIHBpeFxufSIsImltcG9ydCBjYXJvdXNlbDEgZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtMS5qcGcnO1xuaW1wb3J0IGNhcm91c2VsMiBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC0yLmpwZyc7XG5pbXBvcnQgY2Fyb3VzZWwzIGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTMuanBnJztcbmltcG9ydCBjYXJvdXNlbDQgZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtNC5qcGcnO1xuaW1wb3J0IGNhcm91c2VsNiBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC02LmpwZyc7XG5pbXBvcnQgY2Fyb3VzZWw3IGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTcuanBnJztcbmltcG9ydCBjYXJvdXNlbDggZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtOC5qcGcnO1xuXG5leHBvcnQgY29uc3QgaW1ncyA9IFtcbiAgICBjYXJvdXNlbDEsIGNhcm91c2VsMiwgY2Fyb3VzZWwzLCBjYXJvdXNlbDQsIGNhcm91c2VsNixcbiAgICBjYXJvdXNlbDcsIGNhcm91c2VsOCxcbl07XG5cbmltcG9ydCBtYXBhMCBmcm9tICcuL2ltYWdlcy9tYXBhLTAuanBnJztcbmltcG9ydCBtYXBhMSBmcm9tICcuL2ltYWdlcy9tYXBhLTEuanBnJztcbmltcG9ydCBtYXBhMiBmcm9tICcuL2ltYWdlcy9tYXBhLTIuanBnJztcblxuZXhwb3J0IGNvbnN0IG1hcGFzID0gW1xuICAgIG1hcGEwLCBtYXBhMSwgbWFwYTIsXG5dIiwiaW1wb3J0IHsgbWFwYXMgfSBmcm9tICcuL2ltZ2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9tYXAuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hcHNMaWJyYXJ5KCkge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpYnJhcnkuaWQgPSBcImxpYnJhcnlcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJtYXBhXCIpO1xuICAgICAgICBpbWcuc3JjID0gbWFwYXNbaV07XG4gICAgICAgIGxpYnJhcnkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlicmFyeVxufSIsImltcG9ydCAnLi9jc3MvbW9kYWwuY3NzJztcblxuZXhwb3J0IGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1vZGFsLmlkID0gXCJtb2RhbFwiO1xubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBtb2RhbC5jaGlsZE5vZGVzWzFdLnJlbW92ZSgpO1xufSlcbmNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCLDl1wiXG5tb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiIsImltcG9ydCAnLi9jc3MvdGV4dGNvbnRlbnQuY3NzJztcbmltcG9ydCBpbWdUZXh0IGZyb20gJy4vaW1hZ2VzL2luaWNpby10ZXh0LTEuanBnJztcblxuY29uc3QgdGV4dCA9IGBcbjxoMj5SZWZsZXhpb25lcyBhIHByb3DDs3NpdG8gZGUgaGFiaXRhciBlbCBlc3BhY2lvIHDDumJsaWNvIGNvbW8gYWN0byBkaXNydXB0aXZvIGZyZW50ZSBhIGxhIHBsYW5pZmljYWNpw7NuIHVyYmFuYSwgZW4gbG9zIGJhcnJpb3MgcGF0cmltb25pYWxlcyBkZSBsYSBjaXVkYWQgZGUgTWVkZWxsw61uLSBQcmFkbyBjZW50cm8sIEJvc3RvbiwgeSBMb3Mgw4FuZ2VsZXMuPC9oMj5cbjxpbWcgc3JjPSR7aW1nVGV4dH0+IFxuPHA+RXN0ZSBwcm95ZWN0byBpbnZlc3RpZ2F0aXZvLCBzdXJnZSBkdXJhbnRlIG1pIHBlcm1hbmVuY2lhIGVuIGxhIGNpdWRhZCBkZSBNZWRlbGzDrW4sIGEgcGFydGlyIGRlIGxhIGF0ZW5jacOzbiBlbiBhbGd1bmFzIGRpbsOhbWljYXMgc29jaW8gLSBlc3BhY2lhbGVzLCBxdWUgbWFuaWZpZXN0YW4gbGEgZGlzb25hbmNpYSBlbiBxdWUgc2UgcmV2ZWxhIGxhIHVyYmUgeSBsYXMgY3VhbGVzIHBlcm1pdGVuIGNvbnN0cnVpciBudWV2YXMgc2lnbmlmaWNhY2lvbmVzLCBlIGludGVycHJldGFjaW9uZXMgZGUgbGEgcmVhbGlkYWQgY29uY3JldGEuPC9wPlxuPHA+TGEgY2l1ZGFkIHNlIHByZXNlbnRhIGNvbW8gdW4gc2lzdGVtYSBjb21wbGVqbywgZW4gZWwgY3VhbCBjb25mbHV5ZW4gdW4gc2lubsO6bWVybyBkZSBjYXRlZ29yw61hcyBzb2NpYWxlcywgZWNvbsOzbWljYXMgeSBwb2zDrXRpY2FzOyB1bmEgbXVsdGlwbGljaWRhZCBkZSBlc2ZlcmFzIHVyYmFuYXMgeSBwcsOhY3RpY2FzIGNvdGlkaWFuYXMgY29udHJhcmlhcywgZW4gcGVybWFuZW50ZSB0cmFuc2Zvcm1hY2nDs24uICBFc3RhIG1hbmlmZXN0YWNpw7NuIGhldGVyw7NjbGl0YSBkZSBsYSBzb2NpZWRhZCBvc2NpbGEgZW50cmUgbGEgY29udGVuY2nDs24geSBlbCBhY29udGVjZXIgZGUgbG8gZXNwb250w6FuZW8gcXVlIGVtZXJnZSBkZSBlc2NlbmFyaW9zIGFsdGVybm9zLCB5IHNpcnZlIGNvbW8gcHVudG8gZGUgcGFydGlkYSBkZSB1bmEgc2VyaWUgZGUgY29uc2lkZXJhY2lvbmVzLCBlbiB0b3JubyBhIGxhIG9jdXBhY2nDs24gZGVsIGVzcGFjaW8gcMO6YmxpY28sIHkgbGFzIGZvcm1hcyBlc3BhY2lhbGVzIHF1ZSBzZSBnZW5lcmFuIGFsbMOtLjwvcD5cbjxwPlRlbmllbmRvIGNvbW8gcmVmZXJlbmNpYSBhbGd1bmFzIHByb2JsZW3DoXRpY2FzIHNvY2lhbGVzOyBjb21vIGxhIG5vdGFibGUgcHJlc2VuY2lhIGRlIHBlcnNvbmFzIGVuIGNvbmRpY2nDs24gZGUgY2FsbGUgJmx0IGhhYml0YW50ZSBkZSBjYWxsZSAmZ3QsICBlbCBtaWNyb3Ryw6FmaWNvLCBsYSBwcm9zdGl0dWNpw7NuLCBlbCBjb21lcmNpbyBpbmZvcm1hbCwgZW50cmUgb3RyYXMgcHLDoWN0aWNhcyBpcnJlZ3VsYXJlcywgZW4gcmVsYWNpw7NuIGNvbiBlbCBsdWdhciBxdWUgb2N1cGFuLCBlbmN1ZW50cm8gdW5hIG5vdGFibGUgY29ycmVzcG9uZGVuY2lhIGNvbiBlbCBzZWN0b3IgcGF0cmltb25pYWwgZGUgTWVkZWxsw61uLiBFbCBiYXJyaW8gUHJhZG8gY2VudHJvLCBMb3Mgw4FuZ2VsZXMgeSBwYXJ0ZSBkZWwgc2VjdG9yIGRlIEJvc3Rvbi4gQWxsw60gc2UgcHJlc2VudGFuIHbDrW5jdWxvcyBxdWUgZXZpZGVuY2lhbiBsb3MgY29udHJhc3RlcyB5IGRlc2FydGljdWxhbiBsYSBpbWFnZW4gZGUgbGEgY2l1ZGFkLCBjdWVzdGlvbmFuZG8gbGEgaWd1YWxkYWQgZGUgYWNjZXNvIGFsIGVzcGFjaW8gcMO6YmxpY28sIGVsIGRlc3BsYXphbWllbnRvIGNvbnN0YW50ZSBkZWwgcGF0cmltb25pbyBoYWJpdGFkbywgZWwgYXJxdWl0ZWN0w7NuaWNvIHkgbGEgcMOpcmRpZGEgZGUgbGEgbWVtb3JpYSB1cmJhbmEuPC9wPlxuPHA+RWwgY29sb3IgZGV2aWVuZSBhIG1vZG8gZGUgcGFsZXRhIGRlIGNpdWRhZCwgY29tbyBtYXJjYWplIHVyYmFubywgZmFjaGFkYSB5IGNvbW8gZWxlbWVudG8gcXVlIHNlIHl1eHRhcG9uZSBjb25zdGFudGVtZW50ZSBlbnRyZSBsYXMgZGluw6FtaWNhcyB1cmJhbmFzIGRlbCBwYXRyaW1vbmlvIGhhYml0YWRvIHkgYXJxdWl0ZWN0w7NuaWNvLjwvcD5cbjxwPio8L3A+XG48cD5FbCBlc3BhY2lvIHDDumJsaWNvIHkgY2FkYSB1bm8gZGUgbG9zIGVsZW1lbnRvcyB1cmJhbm9zIHF1ZSBsbyBjb21wb25lbiwgc2UgaGEgaWRvIGNvbnZpcnRpZW5kbyBjYWRhIHZleiBtw6FzLCBlbiB1biBtZWRpbyBwZXJ0aW5lbnRlIGVuIGVsIGN1YWwgc2UgZXhwb25lbiBsYXMgcHJvYmxlbcOhdGljYXMgeSBsYXMgY29uZGljaW9uZXMgc29jaWFsZXMgZGUgdW4gbHVnYXI7IGFsbMOtLCBzZSByZXZlbGFuIGxhcyBpbmNvbnNpc3RlbmNpYXMgcXVlIGRlc2RlIGFudGVzIGhhbiBleGlzdGlkbywgaW5jb250ZW5pYmxlcyBlbiBlbCBkZXZlbmlyIGRlIG51ZXN0cmEgc29jaWVkYWQuPC9wPlxuPHA+QSBtb2RvIGRlIGFwcm9waWFjaW9uZXMgZGVsIGVzcGFjaW8sIGNvbW8gbWFyY2FqZXMsIG9jdXBhY2lvbmVzIHRlbXBvcmFsZXMgZGVsIGVzcGFjaW8gcMO6YmxpY28gbyBhIHRyYXbDqXMgZGUgcGludGFkYXMgbyBncmFmaXRpcyBjYWxsZWplcm9zLCBxdWUgYWx0ZXJhbiBlbCBwYWlzYWplIHVyYmFubywgZGVzYXJ0aWN1bGFuZG8gYXPDrSwgbGFzIHBvbMOtdGljYXMgZGUgbGluZWFsaWRhZCB5IHJlZ3VsYWNpw7NuIGZyZW50ZSBhIGxhIG9jdXBhY2nDs24gZGUgZXN0ZTsgYWRxdWllcmVuIHVuIHBvZGVyIGVzZW5jaWFsLCBsb3MgZWxlbWVudG9zIHVyYmFub3MsIGNvbW8gdmluY3VsYWNpw7NuIGVzcGVjaWZpY2EgZW50cmUgbGEgbmVjZXNpZGFkIGRlIGRlbnVuY2lhciB5IGEgbGEgdmV6IHRyYW5zZm9ybWFyLiA8L3A+XG48cD4qKjwvcD5cbjxwPkVuIG1lZGlvIGRlIGFsZ3VuYXMgZXN0cmF0ZWdpYXMgZGUgcmVjdXBlcmFjacOzbiBlIGludGVydmVuY2nDs24sIGRlIGxhcyBmYWNoYWRhcyBkZSBsYXMgYW50aWd1YXMgY2FzYXMgZGVsIGJhcnJpbyBQcmFkbyBDZW50cm8gZW4gTWVkZWxsw61uLCBxdWUgc2UgaGFuIGhlY2hvIGEgdHJhdsOpcyBkZSBsYSBhZG1pbmlzdHJhY2nDs24gbXVuaWNpcGFsOyBjb21vIHByb2Nlc29zIGRlIHBlYXRvbmFsaXphY2nDs24sIHBpbnR1cmEgZGUgZmFjaGFkYXMgeSByZWN1cGVyYWNpw7NuIGRlbCBjb2xvcjsgZW1lcmdlbiBncmFmaXRpcyBjYWxsZWplcm9zLCBhIHBhcnRpciBkZSBnZXN0b3MgZXNwb250w6FuZW9zIHkgdmVsb2NlczsgZXN0YXMgZXhwcmVzaW9uZXMgdmlzdWFsZXMsIHNlIHl1eHRhcG9uZW4gc29icmUgZWwgcGFpc2FqZSBhcnF1aXRlY3TDs25pY28sIHRyYW5zZm9ybcOhbmRvbG8geSAgYXBvZGVyw6FuZG9zZSBwYXVsYXRpbmFtZW50ZSBkZSDDqWwsIGNvbW8gdW4gbWVkaW8gdHJhbnNncmVzb3IgeSBkZSBkZW51bmNpYSwgY2FzaSBwcm9waWNpYW5kbyB1biByZWNvcnJpZG8gZXNwYWNpYWwgcXVlIGFnaXRhIHZpc3VhbG1lbnRlICBsYSBhcGFyZW50ZSByZWN0aXR1ZCBkZSBsYSBlc3TDqXRpY2EgYXJxdWl0ZWN0w7NuaWNhIHkgZWwgbW9iaWxpYXJpbyB1cmJhbm8sIHF1ZSBzZSBpbnRlbnRhIHJlc2VydmFyIHkgbWFudGVuZXIgaGVybcOpdGljbyBhbnRlIGN1YWxxdWllciBhc29tbyBkZSBjb250cmFyaWVkYWQuPC9wPlxuPHA+TGFzIHBpbnRhZGFzIG8gZ3JhZml0aXMsIHZpc2liaWxpemFuIGVsIGVzdGFkbyBkZSBsYSBzb2NpZWRhZCBpbmNvbmZvcm1lLCBxdWUgc2UgcHJveWVjdGEgcG9yIGZ1ZXJhIGRlIGxvIGFwcm9waWFkbyB5IGxvIGhlZ2Vtw7NuaWNvLCByZWNvbmZpZ3VyYW5kbyBlbCBlc3BhY2lvIGFsIHBhc28gZGUgbG9zIGTDrWFzLCBkZSBtYW5lcmEgb3Jnw6FuaWNhIHkgZW4gc2ludG9uw61hIGEgbG9zIHNlbnRpbWllbnRvcyBkZSBzdXMgcmVhbGl6YWRvcmVzOyBkZSBlc3RlIG1pc21vIG1vZG8sIGVtcGllemFuIGEgcmVzaXN0aXJzZSBhIGxvcyBwcmluY2lwaW9zIGRlbCB1cmJhbmlzbW8sIHBlcnNvbmFzIHF1ZSBhY29nZW4geSBjcmVhbiBudWV2YXMgZm9ybWFzIGRlIHVyYmFuaXNtbyB5IGVzdMOpdGljYXMgdXJiYW5hcywgcGFyYWxlbGFzIGEgbGFzIGRlIGxhIGNpdWRhZCBwbGFuaWZpY2FkYS4gQ29udHJhcnJlc3RhbmRvIGFzw60sIGxhIGltcG9zaWNpw7NuIGluc3RpdHVjaW9uYWwsIGEgdHJhdsOpcyBkZSBlcXVpcGFtaWVudG9zIG5vIGNvbnZlbmNpb25hbGVzIHF1ZSBzZSBkZXNwbGllZ2FuIG9jYXNpb25hbG1lbnRlIGVuIGVsIGVzcGFjaW8geSBkb2JsZWdhbiBsYXMgcG9sw610aWNhcyBkZSBvcmRlbiBww7pibGljbywgZGUgbWFuZXJhIGRpc3J1cHRpdmEuPC9wPlxuPHA+UGVybyBlc3RvcyBtb2RvcyBkZSBvY3VwYWNpw7NuIHRlbXBvcmFsIGRlbCBlc3BhY2lvIHDDumJsaWNvLCBxdWUgZW4gYWxndW5vcyBjYXNvcyBzZSBwdWVkZW4gbWFuaWZlc3RhciBjb21vIHVuIGdlc3RvIGxpYnJlLCBkZSBzaW1wbGUgaXJyZXZlcmVuY2lhLCAgbGUgaGFjZW4gZnJlbnRlIGEgcHJvZnVuZGFzIHByb2JsZW3DoXRpY2FzIHNvY2lhbGVzIGRlIGRlc2lndWFsZGFkIGUgaW5lc3RhYmlsaWRhZCwgYSB1bmEgcHJlY2FyaWVkYWQgcG9sw610aWNhIHkgZWNvbsOzbWljYSwgcXVlIGRlIGFsZ8O6biBtb2RvIHNlIGVuY3VlbnRyYSBub3JtYWxpemFkYSwgeSBkZSBsYSBjdWFsIHN1cmdlbiBzb2x1Y2lvbmVzIHBvciBpbnN0aW50byBkZSBzdXBlcnZpdmVuY2lhLjwvcD5cbjxibG9ja3F1b3RlPlxuJnF1b3RWaXZpbW9zIGVuIHVuYSBlcmEgZW4gbGEgcXVlIGxvcyBpZGVhbGVzIGRlIGxvcyBkZXJlY2hvcyBodW1hbm9zIHNlIGhhbiBjb2xvY2FkbyBlbiBlbCBjZW50cm8gZGUgbGEgZXNjZW5hIHRhbnRvIHBvbMOtdGljYSBjb21vIMOpdGljYW1lbnRlLiBTZSBoYSBnYXN0YWRvIHVuYSBncmFuIGNhbnRpZGFkIGRlIGVuZXJnw61hIGVuIHByb21vdmVyIHN1IHNpZ25pZmljYWRvIHBhcmEgbGEgY29uc3RydWNjacOzbiBkZSB1biBtdW5kbyBtZWpvciwgYXVucXVlIGxhIG1heW9yw61hIGRlIGxvcyBjb25jZXB0b3MgcXVlIGNpcmN1bGFuIG5vIGRlc2Fmw61hbiBmdW5kYW1lbnRhbG1lbnRlIGxhcyBsw7NnaWNhcyBkZSBtZXJjYWRvIGxpYmVyYWxlcyB5IG5lb2xpYmVyYWxlcyBvIGxvcyBtb2RvcyBkb21pbmFudGVzIGRlIGxlZ2FsaWRhZCB5IGRlIGFjY2nDs24gZXN0YXRhbC4gVml2aW1vcywgZGVzcHXDqXMgZGUgdG9kbywgZW4gdW4gbXVuZG8gZW4gZWwgcXVlIGxvcyBkZXJlY2hvcyBhIGxhIHByb3BpZWRhZCBwcml2YWRhIHkgZWwgYmVuZWZpY2lvIGFwbGFzdGFuIHRvZGFzIGxhcyBkZW3DoXMgbm9jaW9uZXMgZGUgZGVyZWNob3MuJnF1b3RcblxuICAgIC1EYXZpZCBIYXJ2ZXksIGVsIGRlcmVjaG8gYSBsYSBjaXVkYWQuXG48L2Jsb2NrcXVvdGU+XG48cD5MYSBwcmVzZW5jaWEgZGUgZXN0YXMgcGVyc29uYXMgeSBzdXMgb2N1cGFjaW9uZXMsIHNlIGNvbnZpZXJ0ZSBlbiB1biBtYXJjYWplIHNvY2lhbCwgcXVlIHNlw7FhbGEsIHByb3ZlZSBkZSBjaWVydGFzIGNhcmFjdGVyw61zdGljYXMgeSBjb25maWd1cmEgbGEgcmVsYWNpw7NuIGRlbCByZXN0byBkZSBsb3MgaGFiaXRhbnRlcyBkZSBsYSBjaXVkYWQgY29uIGVsIGJhcnJpby4gU29uIGVzdGFzIHByw6FjdGljYXMgaXJyZWd1bGFyZXMsIGxhcyBxdWUgYWNlbnTDumFuIGRlIGFsZ8O6biBtb2RvIGVsIHBhdHJpbW9uaW8gaGFiaXRhZG8gZGUgdW4gbHVnYXIgZW4gZWwgcXVlIGxhcyB2aXZpZW5kYXMgaGFuIHF1ZWRhZG8gcmVsZWdhZGFzIGEgaW5zdGl0dWNpb25lcywgZG9uZGUgZGUgcHVlcnRhcyBwYXJhIGFkZW50cm8gc2UgdGVqZW4gcmVsYWNpb25lcywgcGVybyBxdWUgZW4gc3VzIGNhbGxlcywgbm8gZXhpc3RlIG5lY2VzYXJpYW1lbnRlIHVuIHbDrW5jdWxvIGNvbXVuaXRhcmlvLiAgQ29uIHRvZG8gZXN0byBzZSBjcmVhbiBsaW1pdGFudGVzIHF1ZSBoYWNlbiBwYXJ0ZSBkZSBsYSBjb25zdHJ1Y2Npw7NuIHNvY2lhbCwgIHVuYSBzZW5zYWNpw7NuIGRlIGluc2VndXJpZGFkLCBxdWUgY29tbyBsbyBzZcOxYWxhIEphbmUgSmFjb2JzIGFjZXJjYSBkZSBsb3Mgb2pvcyBlbiBsYSBjYWxsZSwgZGV0ZXJtaW5hbiBsYSBwb3N0dXJhIHF1ZSBzZSB0aWVuZSBjb24gbGFzIGNhbGxlcyBkZWwgYmFycmlvIHkgY29uIGVzdGFzIG1pc21hcyBwcsOhY3RpY2FzIHkgcGVyc29uYXMsIHF1ZSBkZSBhbGfDum4gbW9kbyBzZSBsZXMgbWFyZ2luYS48L3A+XG48cD4qKio8L3A+XG48aDM+RW4gdGllbXBvcyBkZSBwYW5kZW1pYS48L2gzPlxuPHA+RWwgY29udGV4dG8gZGUgbGEgZW1lcmdlbmNpYSBzYW5pdGFyaWEgcG9yIENvdmlkIDE5LCBldmlkZW50ZW1lbnRlIGNvbmRpY2lvbsOzIGxhIG1hbmVyYSBjb21vIG5vcyByZWxhY2lvbmFtb3MgY29uIGVsIGVzcGFjaW8gcMO6YmxpY28geSBjb24gbG9zIGRlbcOhcyBoYWJpdGFudGVzIGRlIGxhIGNpdWRhZC48L3A+XG48cD5Fc3RlIGhhIHNpZG8gdW4gZGV0b25hbnRlIHF1ZSBoYSBwZXJtaXRpZG8gbWF5b3IgdmlzaWJpbGlkYWQgYSAgbGFzIGRpdmVyc2FzIHByb2JsZW3DoXRpY2FzIHNvY2lhbGVzIHF1ZSBzZSBpbnRlbnNpZmljYXJvbiBlbiBtZWRpbyBkZSBsYSBzaXR1YWNpw7NuLCBlbiB0ZW1hcyBlY29uw7NtaWNvcyB5IGVzcGFjaWFsZXMuPC9wPlxuPHA+RXMgZGUgYWxsw60sIGNvbW8gZWwgYW5kw6luIGRlbCBlc3BhY2lvIHDDumJsaWNvIGVuIGVsIGJhcnJpbywgcXVlIHBlcm1hbmVjZSBkaXNwdWVzdG8sIHBhc2EgZGUgY29udGVtcGxhciB5IGRlIHNlciBlbCBlc2NlbmFyaW8gZGVzZGUgZG9uZGUgc2UgYXRpYm9ycmEgeSBzdWNlZGUgbGEgY290aWRpYW5pZGFkIHNvY2lhbCBpbm1lZGlhdGEsIGEgc2VyIGNvbnRlbXBsYWRvLCBxdWVkYSBkZXNwcm92aXN0byBkZSB0b2RvIHRpcG8gZGUgY29tZXJjaW8uIExvcyBjb25kaWNpb25hbWllbnRvcyBkZSBlc3RlIGVzcGFjaW8sIHNlIGhhY2VuIG3DoXMgbm90YWJsZXMsIHNlIGFjZW50w7phIGxhIG5lZ2FjacOzbiBkZSB1biBlc3BhY2lvIHDDumJsaWNvIHBhcmEgZWwgdmVuZGVkb3IgYW1idWxhbnRlLCBkb25kZSBzb2JyZXNhbGUgZWwgcsOtZ2lkbyBjb250cm9sIHF1ZSBzaWVtcHJlIGhhIGV4aXN0aWRvIGZyZW50ZSBhIGVzdGUgZWxlbWVudG8gZGVsIHVyYmFuaXNtbyBxdWUgc2Ugc3Vwb25lIHBhcmEgc2VyIHZpdmVuY2lhZG8uPC9wPiBcbjxwPkEgZnVlcnphLCBzZSBlbmZhdGl6YSBlbCBlamVyY2ljaW8gZGUgcmViZWxkw61hLCBxdWUgaGFjZSBjb3RpZGlhbmFtZW50ZSBlbCBoYWJpdGFudGUgLSB2ZW5kZWRvciBhbWJ1bGFudGUsIHF1ZSBlbiBzdSBwcsOhY3RpY2EgZ2VuZXJhIGxhem9zIHNvY2lhbGVzIHkgZGVzZGUgZG9uZGUgc2UgdGVqZW4gY29uZnJvbnRhY2lvbmVzIHkgY29udml2ZW5jaWFzIGVzcGFjaWFsZXMsIHF1ZSBwb3NpYmlsaXRhbiBsYSBleHBlcmllbmNpYSBzb2NpYWwgZGVsIHZlY2luZGFyaW8uPC9wPlxuPHA+RGUgbW9kbyBjb250cmFyaW8sIGVzdGUgYW5kw6luIGRlbCBlc3BhY2lvIHDDumJsaWNvIHBhcmEgbG9zIGhhYml0YW50ZXMgZGUgbGEgY2FsbGUsIGxhcyBwZXJzb25hcyBxdWUgZGViZW4gdml2aXIgYWxsw60sICBzZSBoYSB2dWVsdG8gdW4gZXNwYWNpbyBkZSByZWZ1Z2lvIG9jYXNpb25hbCwgc3UgYWN0byBkZSByZWJlbGTDrWEgZnJlbnRlIGEgbGEgbmVnYWNpw7NuIGRlbCBoYWJpdGFyIGxhIGNhbGxlIGVuIHRpZW1wb3MgZGUgcGFuZGVtaWEsIGVzIHNlbmNpbGxhbWVudGUgdW5hIHByZXNlbnRhY2nDs24gZGUgbGEgbWFyZ2luYWxpZGFkLiBMYSBvY3VwYWNpw7NuIGVmw61tZXJhIHkgY2FtYmlhbnRlIHF1ZSBoYWNlIGVsIGhhYml0YW50ZSBkZSBlc3RlIHNpdGlvLCB0cmFuc2dyZWRlIGxhIGV4cGVjdGF0aXZhIHNvY2lhbC48L3A+XG48cD5FbiBtZWRpbyBkZWwgZWNsZWN0aWNpc21vIGFycXVpdGVjdMOzbmljbyBkZSBiYXJyaW8sIHNlIHByZXNlbnRhIGVsIHN1ZWxvIGNvbW8gcmVmdWdpbywgc29tYnJhIHkgZGVzY2Fuc28sIGFjb2dlIHVuYSBwcmVzZW5jaWEgdGFuIHNvbG8gdmlzdGEsIHNpcXVpZXJhIGNhcGF6IGRlIHNlciBwZXJjaWJpZGEsIGNvbW8gdW4gc29icmVzYWx0byBhIGxhIHZpc3RhLCBxdWUgcGFydGljdWxhcm1lbnRlIHJvbXBlIGxhIGNvbnRpbnVpZGFkIHkgcHJvZHVjZSBwcmVjYXVjacOzbiBlbiBlbCB0cmFuc2XDum50ZS48L3A+XG48cD4qKioqPC9wPlxuPHA+RW4gw6lwb2NhcyBkZSBjb25lY3RpdmlkYWQgdmlydHVhbCwgZWwgc2Vydmlkb3Igd2ViIFN0cmVldCB2aWV3IGVuY2Fwc3VsYSwgeSBldGVybml6YSBwb3IgdGllbXBvcyBtZWRpYW5hbWVudGUgZHVyYWRlcm9zLCBhY29udGVjaW1pZW50b3MgZGVsIGVzcGFjaW8gcMO6YmxpY28gaGFiaXRhZG8gcXVlIGlkZW9sw7NnaWNhbWVudGUgaGFuIGludGVudGFkbyBzZXIgZGlzaW11bGFkb3MgZW4gbGEgcmVhbGlkYWQgY29uY3JldGEuIENvbW8gdW5hIGdhbGVyw61hIGRlIGxhIHJlYWxpZGFkIHRhbCBjdWFsIGVzLCBzaW4gZGVzYXByb2JhY2nDs24gYWxndW5hLCBmcmFnbWVudG9zIGRlIHZpdmVuY2lhcyBlc3BhY2lhbGVzIHkgYWNvbnRlY2ltaWVudG9zIGVzcG9udMOhbmVvcyBkZSBsYSBzb2NpZWRhZCwgcXVlZGFuIGNvbmdlbGFkb3MgeSBzZSB2dWVsdmVuIHVuaXZlcnNhbGVzLjwvcD5cbjxwPkRlc2RlIGxvIG1lZGlhbmFtZW50ZSBsZWphbm8sIHN1cmdlbiBmb3JtYXMsIHF1ZSB0aWVuZGVuIGEgdm9sdmVyc2UgaW5kZXNjaWZyYWJsZXMsIGNvbW8gcGVxdWXDsWFzIGluc2ludWFjaW9uZXMgZGUgY29sb3IsIGNhc2kgY29uIHVuIGFzcGVjdG8gZGUgY8OzZGlnbyBkZSBjaXVkYWQsIG11bHRpZm9ybWUsIHkgZW1waWV6YW4gYSBhZHF1aXJpciB1biBhc3BlY3RvIGRlIHNlw7FhbGFtaWVudG8gc29icmUgZWwgcGFpc2FqZSB1cmJhbm8sIHF1ZSBzb2JyZXNhbGUuIFBhc2FqZXMgZGUgc2VyZXMgaHVtYW5vcyBlbiBzaXR1YWNpb25lcyBxdWUgZW5hbHRlY2VuIGxhIHN1YmpldGl2aWRhZCBxdWUgbG9zIGNvbXBvbmUsIG8gZm9ybWFzIHNlbWllc2NvbmRpZGFzIGRldHLDoXMgZGUgw6FyYm9sZXMsIGVzY2Fsb25lcywgYm9sc2FzLCBlbnRyZSBvdHJvczsgcXVlIHN1Z2llcmVuIGxhIHByZXNlbmNpYSBkZSB1biBjdWVycG8gaHVtYW5vIGFwcm9waWFkbyBhIHN1IGFudG9qbyBkZWwgZXNwYWNpbyBww7pibGljby4gQWxndW5hcyBkZSBlc3RhcyBwZXJzb25hcywgdHJhZW4gY29uc2lnbyBlbGVtZW50b3MsIHF1ZSBkZSBtb2RvIGluZ2VuaW9zbyBzZSBjb252aWVydGVuIGVuIGNvbnN0cnVjY2lvbmVzIGhhYml0YWJsZXMgdGVtcG9yYWxlcyB5IHRyYW5zcG9ydGFibGVzLCBxdWUgc3VnaWVyZW4gcXVpesOhcyB1bmEgcHJlZ3VudGEgcG9yIGxvIGVzY3VsdMOzcmljbywgcXVpesOhcyBjb21vIG90cmEgcG9zaWJpbGlkYWQgZW50cmUgbGEgYXJxdWl0ZWN0dXJhIHkgZWwgcGFpc2FqZSwgc29icmUgbGFzIHF1ZSBhbGd1bmEgdmV6IGludGVudMOzIGNhcnRvZ3JhZmlhciBSb3NhbGluZCBLcmF1c3MuPC9wPlxuPHA+RW1wbGF6YW1pZW50b3MgZWbDrW1lcm9zIGEgcGFydGlyIGRlIGVsZW1lbnRvcyByZWNpY2xhZG9zLCB0cmFuc2Zvcm1hZG9zLCByZWxvY2FsaXphZG9zLCByZWNvbnRleHR1YWxpemFkb3MsIHF1ZSBnZW5lcmEgdW5hIGhldGVyb3RvcMOsYSBlc3BhY2lhbCwgeSBzZSB5dXh0YXBvbmUgYWwgcGFpc2FqZSBhcnF1aXRlY3TDs25pY28gcmVndWxhci48L3A+XG48aDM+QXByb3hpbWFjaW9uZXMgYWwgY29sb3IuPC9oMz5cbjxwPkxhIGV4cGVyaWVuY2lhIHF1ZSBleGlzdGUgYSB0cmF2w6lzIGRlbCBjb2xvciBlcyBwcm9kdWN0byBkaXJlY3RvIGRlIGxhIHByZXNlbmNpYWxpZGFkLiBOZWNlc2FyaWFtZW50ZSBsYSBtYW5lcmEgY29tbyBwZXJjaWJpbW9zIGxhcyBwdWxzaW9uZXMgZGVsIGNvbG9yLCBlc3TDoW4gcHJvZnVuZGFtZW50ZSBsaWdhZGFzIGEgYXRyaWJ1dG9zIGN1bHR1cmFsZXMgeSBhIGxhIHByb3BpYSBtYW5lcmEgZGUgcmVsYWNpb25hcm5vcyBjb24gZWwgY29sb3IgZW4gbnVlc3RybyBlbnRvcm5vIGN1bHR1cmFsLiBJbmNsdXNvIGFzcGVjdG9zIGRlIGxhIGdlb2dyYWbDrWEgZGUgdW4gbHVnYXIsIHJlbGFjaW9uYWRvIGEgY29uZGljaW9uZXMgZXNwZWPDrWZpY2FzIGRlbCBjbGltYSwgYXRtb3Nmw6lyaWNhcywgZW50cmUgb3Ryb3M7IGNvbmRpY2lvbmFuIGVsIGNvbXBvcnRhbWllbnRvIGRlIHVuIHRlcnJpdG9yaW8sIGFwb3J0YW5kbyBzaWduaWZpY2F0aXZhbWVudGUgYSBsb3MgdmFsb3JlcyBlc3TDqXRpY29zIGRlIGNhZGEgY3VsdHVyYS48L3A+XG48cD5BdW4gYXPDrSwgbGEgZXhwZXJpZW5jaWEgcXVlIHRlbmVtb3MgY29uIGVsIGNvbG9yIGVzIG5lY2VzYXJpYW1lbnRlIHBhcnRpY3VsYXIuIE9sYWZ1ciBFbGlhc3NvbiBtZW5jaW9uYSwg4oCcRWwgY29sb3IgdGllbmUgdW4gZW5vcm1lIHBvdGVuY2lhbCBwc2ljb2zDs2dpY28geSBhc29jaWF0aXZvOiBhdW4gY3VhbmRvIHNlIGhhIGN1bHRpdmFkbyBoYXN0YSBlbCBleHRyZW1vLCBsYSBleHBlcmllbmNpYSBkZSBsb3MgY29sb3JlcyBlcyBhc8OtIG1pc21vIGV4dHJlbWFkYW1lbnRlIGluZGl2aWR1YWwu4oCdIChPLCBFbGlhc3NvbiwgMjAxMik8L3A+XG48cD5QYXJ0aXIgZGUgdW5hIGltYWdlbiwgcmVjb21wb25lciwgcmVjb25maWd1cmFyLCBleHRyYWVyIGRlIGVsbGEgc3UgbcOtbmltbyBwdW50byBkZSBob21vZ2VuZWlkYWQsIHZhY2lsYXIgYSBwYXJ0aXIgZGUgbGEgc2F0dXJhY2nDs24sIGVsIG1hdGl6LCBlbCBhc3BlY3RvIGNyb23DoXRpY28sIHN1IGludGVuc2lkYWQgeSBlbmNvbnRyYXIgbGEgcG9zaWNpw7NuIGVucmlxdWVjaWRhIGVuIGxhIGN1YWwgbGEgbWlyYWRhIGFjdWRlIGEgbGEgaW5xdWlldHVkLCBhIGxhIGFtYmlnw7xlZGFkIGRlIGxvIGV2ZW50dWFsLCB5YSBubyBlbiBtb3ZpbWllbnRvLCBzaW5vIGNvbW8gdW4gaGVjaG8gY2FwdHVyYWRvIGVuIGVsIGluc3RhbnRlIHF1ZSBzZSBwcm9sb25nYSBlbiBlbCB0aWVtcG8uIFVuIHB1bnRvIGRlIGxhIGltYWdlbiBxdWUgc2UgY29ycmVsYWNpb25hIGRpcmVjdGFtZW50ZSBjb24gb3Ryb3MgbcOtbmltb3MgZWxlbWVudG9zLCB5IGVuIGVzYSBpbnRlcnJlbGFjacOzbiwgc3VyZ2UgdW5hIGV4cGxvcmFjacOzbiB2aXN1YWwsIHF1ZSBnb2xwZWEgZWwgb2pvIGFsIGNvbnRhY3RvLjwvcD5cbjxwPkVzdGFtb3MgYXByZWhlbmRpZG9zIGEgbG8gbcOzdmlsLCBhbCBldmVudG8gZnVydGl2byB5IHBhc2FqZXJvLCBwZXN0YcOxZWFtb3MgYWwgdGllbXBvIGVuIHF1ZSBzZSByZWNvbmZpZ3VyYSBlbCBlc3BhY2lvIGNvbiBzdXMgZXZlbnR1YWxpZGFkZXMsIHkgbGEgaW1hZ2VuIHBvY2FzIHZlY2VzIHNlIGFkaGllcmUsIHBvY2FzIHZlY2VzIHRyYXNjaWVuZGUgeSBzZSBleHBhbmRlIGVuIGVsIHRpZW1wby4gUmVjb3JyZXIgbGEgY2l1ZGFkLCBvcHRhciBwb3IgdW5hIHBvc2ljacOzbiByZWNlcHRpdmEgZW4gc3VzIGNhbGxlcywgZW4gb2Nhc2lvbmVzIHByb2R1Y2UgZGVzZ2FzdGUsIGRlYmlkbyBhIGxhIHNvbm9yaWRhZCB2aXN1YWwgeSBsYSBmYWNpbGlkYWQgZW4gbGEgcXVlIHNlIHBhc2EgZGUgdW5hIGltYWdlbiBhIG90cmEuIExvcyBldmVudG9zIGRlamFuIGRlIHNlciBldmVudG9zLCBwYXJhIGNvbnZlcnRpcnNlIGVuIHByZXN1bmNpb25lcyBjb3RpZGlhbmFzLCBiYW5hbGVzLCBxdWUgcGllcmRlbiBsYSBjYWxpZGFkIHBhcmEgc2VyIGV4cGxvcmFkYXMsIG3DoXMgYWxsw6EgZGUgbGEgZm9ybWEuPC9wPlxuPHA+QSBwYXJ0aXIgZGVsIG3DrW5pbW8gZWxlbWVudG8gZGUgY29sb3IgcXVlIGNvbXBvbmUgdW5hIGltYWdlbiBkaWdpdGFsIGVubWFyY2FkYSBkZSBsYSByZWFsaWRhZCwgc2UgcmVjb25zdHJ1eWUgc3Ugc2lnbmlmaWNhZG8sIGVsIGRlc3ZhbmVjaW1pZW50byBkZSBsYSBmaWd1cmFjacOzbiBzZcOxYWxhIGVsIGNvbG9yIHBvciBzw60gbWlzbW8uPC9wPlxuPHA+RWwgY3VlcnBvIHVyYmFubyBub3MgcG9zaWNpb25hIGNvbnN0YW50ZW1lbnRlIGNvbW8gZXNwZWN0YWRvcmVzIGRlIHBlcXVlw7FhcyByZWFsaWRhZGVzIGZyYWdtZW50YWRhcyBkZSBsYSBjaXVkYWQsIGFsIHRpZW1wbyBlbiBxdWUgZXN0YXMgb3Jnw6FuaWNhbWVudGUgc2UgdmFuIHBvc2ljaW9uYW5kbyBlbiBsYSBzdXBlcmZpY2llIGRlbCBlc2NlbmFyaW8gc29jaWFsOyBwb3Igb3RybyBsYWRvIHNlIGxlcyBpbXBpZGUgZmx1aXIsIGVuIG1lZGlvIGRlIGxhIHZpZ2lsYW5jaWEgcXVlIGJham8gbm9jaW9uZXMgZGVsIGJpZW4gY29tw7puIHkgdW4gbWFya2V0aW5nIHVyYmFuw61zdGljbyBlbiBlbCBjdWFsIHByaW1hIGxhIGVzdMOpdGljYSB5IGFsIGFybW9uw61hIHZpc3VhbCwgc2UgZXNjb25kZW4gbWFyZ2luYWxpZGFkZXMsIHF1ZSBzZSBkaXNpbXVsYW4gY29uc3RhbnRlbWVudGUgZGVudHJvIGRlbCBhcGFyYXRhamUgcG9sw610aWNvLCBkZXN2YW5lY2llbmRvIGVzdGFzIHJlYWxpZGFkZXMgZXNwZWPDrWZpY2FzLiBMYSBwcmVzZW5jaWEgZGUgZXN0b3MgaGVjaG9zIGNvdGlkaWFub3MsIGVuIGVsIGFjb250ZWNlciBkaWFyaW8sIGVtcGllemFuIGEgcGVyZGVyIHJlbGV2YW5jaWEgcGFyYSBlbCB1c3VhcmlvIGRlIGxhIGNpdWRhZC48L3A+XG48cD5MYSBjb2RpZmljYWNpw7NuIGRlIGxhIGltYWdlbiBwZXJtaXRlIHNlw7FhbGFyIGVzdGFzIHByw6FjdGljYXMsIHBvdGVuY2lhbmRvIGVsIHZhbG9yIGRlIGxhIGluYWNlcHRhY2nDs24sIG5lZ2FjacOzbiB5IGNhbXVmbGFqZS4gIEVsIGNhcsOhY3RlciBzaWxlbmNpb3NvIHF1ZSBoYW4gYWRxdWlyaWRvIGVzdGFzIHByw6FjdGljYXMgc2UgdHJhc3RvY2EgY29uIGxhIG5lY2VzaWRhZCBkZSBvY3VsdGFjacOzbiBkZSBsYSBpbWFnZW4gcXVlIGluY29tb2RhLCBjb24gZWwgaW50ZXLDqXMgZGUgZGVzbG9jYWxpemFyIHkgcmVzaXR1YXIgZW4gZWwgcGxhbm8gc29jaWFsLCBsYSBwb3NpY2nDs24gZGUgZXN0YXMgcHLDoWN0aWNhcyBjb24gZWwgZXNwYWNpbyBxdWUgb2N1cGFuLjwvcD5cbjxwPkVsIGFzcGVjdG8gY29tdW5pY2F0aXZvIGRlbCBjb2xvciBhdHJpYnV5ZSBvdHJhIG1pcmFkYSBkZSBsYSByZWFsaWRhZCwgYWwgeXV4dGFwb25lcnNlIGEgbGEgZXN0YW5kYXJpemFjacOzbiBjcm9tw6F0aWNhIGRlbCBlbnRvcm5vIHVyYmFuby4gTGEgaW5zdHJ1bWVudGFjacOzbiB5IGxvcyBlbGVtZW50b3MgcmVxdWVyaWRvcyBwb3IgZXN0YXMgcGVyc29uYXMgcGFyYSBzb2JyZWxsZXZhciBsb3MgYXNwZWN0b3MgbcOhcyBiw6FzaWNvcyBkZSBsYSBzdWJzaXN0ZW5jaWEgZW4gZWwgZW50b3JubyB1cmJhbm8gZW1waWV6YW4gYSBnZW5lcmFyIGNvbnRyYXN0ZXMgdmlzdWFsZXMuIEVuIGxhIHByb3hpbWlkYWQgZGUgbG9zIGVzcGFjaW9zIHRlbXBvcmFsZXMgcXVlIHNlIHZhbiBnZW5lcmFuZG8sIGxvcyBjdWFsZXMgbGVzIHBlcm1pdGVuIGFjdWRpciB5IGdlc3Rpb25hciBzdXMgbmVjZXNpZGFkZXMgbcOhcyBjZXJjYW5hcy48L3A+XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gdGV4dENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRleHRDb250YWluZXJcbn0iLCJpbXBvcnQgdmlkMSBmcm9tICcuL3ZpZGVvLzEubXA0JztcbmltcG9ydCB2aWQyIGZyb20gJy4vdmlkZW8vMi5tcDQnO1xuaW1wb3J0IHZpZDMgZnJvbSAnLi92aWRlby8zLm1wNCc7XG5pbXBvcnQgdmlkNCBmcm9tICcuL3ZpZGVvLzQubXA0JztcbmltcG9ydCB2aWQ1IGZyb20gJy4vdmlkZW8vNS5tcDQnO1xuaW1wb3J0IHZpZDYgZnJvbSAnLi92aWRlby82Lm1wNCc7XG5pbXBvcnQgdmlkNyBmcm9tICcuL3ZpZGVvLzcubXA0JztcbmltcG9ydCB2aWQ4IGZyb20gJy4vdmlkZW8vOC5tcDQnO1xuaW1wb3J0IHZpZDkgZnJvbSAnLi92aWRlby85Lm1wNCc7XG5pbXBvcnQgdmlkMTAgZnJvbSAnLi92aWRlby8xMC5tcDQnO1xuaW1wb3J0IHZpZDExIGZyb20gJy4vdmlkZW8vMTEubXA0JztcbmltcG9ydCB2aWQxMiBmcm9tICcuL3ZpZGVvLzEyLm1wNCc7XG5pbXBvcnQgdmlkMTMgZnJvbSAnLi92aWRlby8xMy5tcDQnO1xuaW1wb3J0IHZpZDE0IGZyb20gJy4vdmlkZW8vMTQubXA0JztcblxuZXhwb3J0IGNvbnN0IHZpZGVvcyA9IFtcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuICAgIHtzcmM6IHZpZDksIHJnYjogXCJyZ2IoMTQyLCAxNjMsIDE5NylcIn0sXG4gICAge3NyYzogdmlkMTAsIHJnYjogXCJyZ2IoMTc4LCAxNCwgMylcIn0sXG4gICAge3NyYzogdmlkMTEsIHJnYjogXCJyZ2IoMCwgODgsIDEyNSlcIn0sXG4gICAge3NyYzogdmlkMTIsIHJnYjogXCJyZ2IoODUsIDEzMCwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQxMywgcmdiOiBcInJnYig1OSwgOTIsIDIwMilcIn0sXG4gICAge3NyYzogdmlkMTQsIHJnYjogXCJyZ2IoMjA3LCAxNDUsIDYzKVwifSxcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuICAgIHtzcmM6IHZpZDksIHJnYjogXCJyZ2IoMTQyLCAxNjMsIDE5NylcIn0sXG4gICAge3NyYzogdmlkMTAsIHJnYjogXCJyZ2IoMTc4LCAxNCwgMylcIn0sXG4gICAge3NyYzogdmlkMTEsIHJnYjogXCJyZ2IoMCwgODgsIDEyNSlcIn0sXG4gICAge3NyYzogdmlkMTIsIHJnYjogXCJyZ2IoODUsIDEzMCwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQxMywgcmdiOiBcInJnYig1OSwgOTIsIDIwMilcIn0sXG4gICAge3NyYzogdmlkMTQsIHJnYjogXCJyZ2IoMjA3LCAxNDUsIDYzKVwifSxcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHtnYWxsZXJ5Q29udGVudH0gZnJvbSAnLi9nYWxsZXJ5LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7XG5pbXBvcnQgeyB0ZXh0Q29udGVudCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3IH0gZnJvbSAnLi9maXJzdHZpZXcnO1xuaW1wb3J0IHsgY3JlYXRlQ2Fyb3VzZWwsIGNhcm91c2VsRnVuY3Rpb24gfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IGNyZWF0ZU1hcHNMaWJyYXJ5IH0gZnJvbSAnLi9tYXAnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVWaWV3KCkpXG5cbmNvbnN0IG5hdm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubmF2bWVudS5pZCA9IFwibmF2bWVudVwiO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIlN1cGVyZmljaWVzXCI7XG5uYXZtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5jb25zdCBwYWdlTmFtZXMgPSBbXG4gICAge3RpdGxlOiBcIlBpeFwiLCBjb250ZW50OiBnYWxsZXJ5Q29udGVudCgpfSxcbiAgICB7dGl0bGU6IFwiQWxndW5vcyBlc2NyaXRvc1wiLCBjb250ZW50OiB0ZXh0Q29udGVudCgpfSwgXG4gICAge3RpdGxlOiBcIlJlY29ycmlkb3NcIiwgY29udGVudDogY3JlYXRlTWFwc0xpYnJhcnkoKX0sXG4gICAgLy8ge3RpdGxlOiBcIlN1cGVyZmljaWVzXCIsIGNvbnRlbnQ6IGNyZWF0ZUNhcm91c2VsKCksIHNlY29uZDogY2Fyb3VzZWxGdW5jdGlvbigpfVxuXTtcbnBhZ2VOYW1lcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudS5pZCA9IHBhZ2UudGl0bGU7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IHBhZ2UudGl0bGU7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIxc1wiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZS5jb250ZW50KTtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZWluXCI7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIxc1wiXG4gICAgICAgIH0sIDk5MCk7XG4gICAgfSlcbiAgICBwYWdlcy5hcHBlbmRDaGlsZChtZW51KTtcbn0pXG5cbmNvbnN0IHN1cGVyZmljaWVzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc3VwZXJmaWNpZXNNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5zdXBlcmZpY2llc01lbnUuaWQgPSBcIlN1cGVyZmljaWVzXCI7XG5zdXBlcmZpY2llc01lbnUudGV4dENvbnRlbnQgPSBcIlN1cGVyZmljaWVzXCI7XG5zdXBlcmZpY2llc01lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNhcm91c2VsKCkpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVpblwiO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMXNcIlxuICAgICAgICAgICAgY2Fyb3VzZWxGdW5jdGlvbigpO1xuICAgICAgICB9LCAxNDkwKTtcbiAgICB9LCA0OTApO1xufSlcbnBhZ2VzLmFwcGVuZENoaWxkKHN1cGVyZmljaWVzTWVudSlcbm5hdm1lbnUuYXBwZW5kQ2hpbGQocGFnZXMpO1xuXG5ib2R5LmFwcGVuZENoaWxkKG5hdm1lbnUpO1xuXG5jb25zdCBtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtXCIpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51cy5sZW5ndGg7IGkrKykge1xuICAgIG1lbnVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtZW51cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbWVudXNbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSlcbn1cblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG53cmFwcGVyLmlkID0gXCJ3cmFwcGVyXCI7XG5cbi8vIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuLy8gY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4vLyBoMS50ZXh0Q29udGVudCA9IFwiR2FsZXJpYVwiO1xuLy8gaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuLy8gd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbndyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FsbGVyeUNvbnRlbnQoKSk7XG5tZW51c1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG53cmFwcGVyLmFwcGVuZENoaWxkKG1vZGFsKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=