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
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 50px;\n  /* Location of the box */\n  padding-bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #ffffff;\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  aspect-ratio: 1/1;\n  max-width: 80%;\n  max-height: 80%;\n}\n\n/* Caption of Modal Image */\n#caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, #caption {\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0.1);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #5c5c5c;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n#view {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: white;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n#view-content {\n  display: flex;\n  height: 80%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #6b6b6b;\n  animation-name: fadein;\n  animation-duration: 2s;\n}\n\n@keyframes change-color {\n  20% {\n    background-color: #ca6565;\n  }\n  40% {\n    background-color: #6767b6;\n  }\n  80% {\n    background-color: #93d193;\n  }\n  100% {\n    background-color: #d3d35b;\n  }\n}\n@keyframes change-size {\n  0% {\n    transform: scale(0.25);\n  }\n  50% {\n    transform: scale(1);\n    background-color: #ca6565;\n  }\n  100% {\n    transform: scale(0.25);\n    background-color: #93d193;\n  }\n}\n.animated-point {\n  margin-top: 20px;\n  height: 100px;\n  width: 100px;\n  background-color: #93d193;\n  animation-name: change-color;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  cursor: pointer;\n}\n\n.animated-point:hover {\n  transform: scale(1.05);\n}\n\n#after-text {\n  width: 70%;\n  font-family: \"Glory\", sans-serif;\n  font-size: 1.5rem;\n  margin: 10px;\n  cursor: default;\n  text-align: justify;\n  white-space: pre-wrap;\n}\n\n.closeX {\n  color: red;\n  text-decoration: underline;\n  font-family: \"Glory\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.closeX:hover,\n.closeX:focus {\n  color: #bbb;\n  text-decoration: underline;\n  cursor: pointer;\n  transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACI,aAAA;EAAe,sBAAA;EACf,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,iBAAA;EAAmB,wBAAA;EACnB,oBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,yBAAA;AASJ;;AANA,0BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AASJ;;AANA,2BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;AASJ;;AANA,kBAAA;AACA;EACI,oBAAA;EACA,wBAAA;AASJ;;AANA;EACI;IAAM,qBAAA;EAUR;EATE;IAAI,mBAAA;EAYN;AACF;AAVA,qBAAA;AACA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAYJ;;AATA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAYJ;;AATA,wCAAA;AACA;EACI;IACI,WAAA;EAYN;AACF;AARA;EACI,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,uBAAA;AAeJ;;AAZA;EACI;IAAM,UAAA;EAgBR;EAfE;IAAI,UAAA;EAkBN;AACF;AAhBA;EACI;IAAM,UAAA;EAmBR;EAlBE;IAAI,UAAA;EAqBN;AACF;AAnBA;EACI,aAAA;EACA,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,sBAAA;EACA,sBAAA;AAqBJ;;AAlBA;EACI;IAAK,yBAAA;EAsBP;EArBE;IAAK,yBAAA;EAwBP;EAvBE;IAAK,yBAAA;EA0BP;EAzBE;IAAM,yBAAA;EA4BR;AACF;AA1BA;EACI;IAAI,sBAAA;EA6BN;EA5BE;IAAK,mBAAA;IAAqB,yBAAA;EAgC5B;EA/BE;IAAM,sBAAA;IAAwB,yBAAA;EAmChC;AACF;AAjCA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,sBAAA;EACA,mCAAA;EACA,eAAA;AAmCJ;;AAhCA;EACI,sBAAA;AAmCJ;;AA9BA;EACI,UAAA;EACA,gCAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;AAiCJ;;AA9BA;EACI,UAAA;EACA,0BAAA;EACA,gCAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AAiCJ;;AA9BA;;EAEI,WAAA;EACA,0BAAA;EACA,eAAA;EACA,qBAAA;AAiCJ","sourcesContent":["/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 50px; /* Location of the box */\n    padding-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #ffffff;\n  }\n  \n/* Modal Content (image) */\n.modal-content {\n    margin: auto;\n    display: block;\n    aspect-ratio: 1/1;\n    max-width: 80%;\n    max-height: 80%;\n}\n  \n/* Caption of Modal Image */\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n  \n/* Add Animation */\n.modal-content, #caption {  \n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n  \n@keyframes zoom {\n    from {transform: scale(0.1)} \n    to {transform: scale(1)}\n}\n  \n/* The Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #5c5c5c;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n  \n#view {\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(255, 255, 255);\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n#view-content {\n    display: flex;\n    height: 80%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color:rgb(107, 107, 107);    \n    animation-name: fadein;\n    animation-duration: 2s;\n}\n\n@keyframes change-color {\n    20% {background-color: rgb(202, 101, 101);}\n    40% {background-color: rgb(103, 103, 182);}\n    80% {background-color: rgb(147, 209, 147);}\n    100% {background-color: rgb(211, 211, 91);}\n}\n\n@keyframes change-size {\n    0% {transform: scale(0.25);}\n    50% {transform: scale(1); background-color: rgb(202, 101, 101);}\n    100% {transform: scale(0.25); background-color: rgb(147, 209, 147);}\n}\n\n.animated-point {\n    margin-top: 20px;\n    height: 100px;\n    width: 100px;\n    background-color: rgb(147, 209, 147);\n    animation-name: change-color;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    cursor: pointer\n}\n\n.animated-point:hover {\n    transform: scale(1.05);\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap');\n\n#after-text {\n    width: 70%;\n    font-family: 'Glory', sans-serif;\n    font-size: 1.5rem;\n    margin: 10px;\n    cursor: default;\n    text-align: justify;    \n    white-space: pre-wrap;\n}\n\n.closeX {\n    color: red;\n    text-decoration: underline;\n    font-family: 'Glory', sans-serif;\n    font-size: 1.5rem;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.closeX:hover,\n.closeX:focus {\n    color: #bbb;\n    text-decoration: underline;\n    cursor: pointer;\n    transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#text-container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 -4rem 4rem 0 white;\n  pointer-events: none;\n}\n\n#text-container {\n  padding-left: 3rem;\n  width: 90%;\n  white-space: pre-wrap;\n  overflow: scroll;\n  overflow-x: hidden;\n  line-height: 2rem;\n  font-size: 1.5rem;\n  font-family: \"Glory\", sans-serif;\n  padding-bottom: 4rem;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n  text-align: justify;\n}\n\nh2 {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: red;\n  width: 65%;\n  margin: 0 auto;\n}\n\nh3 {\n  font-size: 1.4rem;\n  line-height: 1.5rem;\n  color: red;\n  width: 65%;\n  margin: 0 auto;\n}\n\np {\n  margin: 0 auto;\n  padding-right: 2rem;\n  padding-left: 0.5rem;\n  width: 60%;\n}\n\nblockquote {\n  margin-top: -1.5rem;\n  width: 55%;\n  margin: 0 auto;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#text-container::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/textcontent.css"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sCAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,UAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gCAAA;EACA,oBAAA;EACA,4CAAA;EACA,wBAAA;EAA2B,gBAAA;EAC3B,qBAAA;EAAwB,YAAA;EACxB,mBAAA;AAEJ;;AACA;EACI,iBAAA;EACA,iBAAA;EACA,UAAA;EACA,UAAA;EACA,cAAA;AAEJ;;AACA;EACI,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,UAAA;EACA,cAAA;AAEJ;;AACA;EACI,cAAA;EACA,mBAAA;EACA,oBAAA;EACA,UAAA;AAEJ;;AACA;EACI,mBAAA;EACA,UAAA;EACA,cAAA;AAEJ;;AACA,gDAAA;AACA;EACI,aAAA;AAEJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap');\n\n#text-container::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 -4rem 4rem 0 white;\n    pointer-events: none;\n}\n\n#text-container {\n    padding-left: 3rem;\n    width: 90%;\n    white-space: pre-wrap;\n    overflow: scroll;\n    overflow-x: hidden;\n    line-height: 2rem;\n    font-size: 1.5rem;\n    font-family: 'Glory', sans-serif;\n    padding-bottom: 4rem;\n    /* Hide scrollbar for IE, Edge and Firefox */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n    text-align: justify;\n}\n\nh2 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    color: red;\n    width: 65%;\n    margin: 0 auto;\n}\n\nh3 {\n    font-size: 1.4rem;\n    line-height: 1.5rem;\n    color: red;\n    width: 65%;\n    margin: 0 auto;\n}\n\np {\n    margin: 0 auto;\n    padding-right: 2rem;\n    padding-left: 0.5rem;\n    width: 60%;\n}\n\nblockquote {\n    margin-top: -1.5rem;\n    width: 55%;\n    margin: 0 auto;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#text-container::-webkit-scrollbar {\n    display: none;\n}"],"sourceRoot":""}]);
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
    closeX.textContent = "Continuar"

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
/* harmony import */ var _images_carousel_6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/carousel-6.jpg */ "./src/images/carousel-6.jpg");
/* harmony import */ var _images_carousel_7_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/carousel-7.jpg */ "./src/images/carousel-7.jpg");
/* harmony import */ var _images_carousel_8_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/carousel-8.jpg */ "./src/images/carousel-8.jpg");
/* harmony import */ var _images_mapa_0_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/mapa-0.jpg */ "./src/images/mapa-0.jpg");
/* harmony import */ var _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/mapa-1.jpg */ "./src/images/mapa-1.jpg");
/* harmony import */ var _images_mapa_2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/mapa-2.jpg */ "./src/images/mapa-2.jpg");







const imgs = [
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_carousel_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_carousel_6_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _images_carousel_7_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_carousel_8_jpg__WEBPACK_IMPORTED_MODULE_5__,
];





const mapas = [
    _images_mapa_0_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_7__, _images_mapa_2_jpg__WEBPACK_IMPORTED_MODULE_8__,
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
<h2>Reflexiones a propósito de habitar el espacio público como acto disruptivo frente a la planificación urbana, en los barrios patrimoniales de la ciudad de Medellín- Prado centro, Boston, y Los Ángeles.</h2>
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
<h3>Aquí va- Esquema de desfiguración de la imagen.</h3>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxxREFBcUQsa0JBQWtCLGlCQUFpQiw4QkFBOEIsd0JBQXdCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxvQkFBb0IsY0FBYyxlQUFlLGlDQUFpQywrQkFBK0IsR0FBRyx3QkFBd0IsZ0JBQWdCLDJCQUEyQixpQkFBaUIsR0FBRyw0Q0FBNEMsdUJBQXVCLFlBQVksV0FBVyxHQUFHLGlCQUFpQixrQkFBa0IsdUJBQXVCLGFBQWEsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsbUNBQW1DLHFCQUFxQixHQUFHLHdCQUF3QixtQkFBbUIsbUJBQW1CLGlCQUFpQixvQkFBb0IsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHdCQUF3QixzQkFBc0IsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsT0FBTyx3RkFBd0YsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVywyQ0FBMkMsa0VBQWtFLHlEQUF5RCx1REFBdUQsbUJBQW1CLG9CQUFvQixtQkFBbUIsMkNBQTJDLHdDQUF3Qyx1QkFBdUIsd0JBQXdCLDZCQUE2QiwwQkFBMEIsV0FBVyx1QkFBdUIsT0FBTyxrQkFBa0Isa0JBQWtCLCtCQUErQixxQ0FBcUMsbUNBQW1DLGlCQUFpQixzQkFBc0IsaUNBQWlDLGlEQUFpRCxxQ0FBcUMsK0JBQStCLG9CQUFvQixtQkFBbUIsV0FBVyxTQUFTLE9BQU8sZUFBZSxzQkFBc0IsMkJBQTJCLGlCQUFpQixvQkFBb0Isb0JBQW9CLG9CQUFvQix5Q0FBeUMseUJBQXlCLG9CQUFvQix5QkFBeUIseUJBQXlCLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLDRCQUE0QixpQ0FBaUMsNEJBQTRCLDhCQUE4Qiw0QkFBNEIsU0FBUyx3QkFBd0IsaUNBQWlDLFNBQVMsT0FBTyxLQUFLLHVCQUF1QjtBQUNuakc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLEdBQUcsY0FBYyxzQkFBc0IsbUJBQW1CLG9CQUFvQixrQkFBa0IsNEJBQTRCLGFBQWEsMENBQTBDLDJCQUEyQixpQkFBaUIsd0JBQXdCLEdBQUcsWUFBWSxpQkFBaUIsZ0JBQWdCLHFCQUFxQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0IsR0FBRyxvQkFBb0IseUJBQXlCLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsMEJBQTBCLFVBQVUsOEJBQThCLEtBQUssUUFBUSxpQ0FBaUMsS0FBSyxHQUFHLG1CQUFtQixnQ0FBZ0MsNkJBQTZCLElBQUksU0FBUyxzRkFBc0YsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxPQUFPLCtCQUErQixrQkFBa0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDZCQUE2QixHQUFHLGNBQWMsd0JBQXdCLHFCQUFxQixzQkFBc0Isb0JBQW9CLDhCQUE4QixlQUFlLDRDQUE0Qyw2QkFBNkIsdUJBQXVCLDBCQUEwQixHQUFHLFlBQVksbUJBQW1CLGtCQUFrQix1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLEdBQUcsb0JBQW9CLDJCQUEyQixzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQixHQUFHLDBCQUEwQixZQUFZLHlCQUF5QixVQUFVLDRCQUE0QixHQUFHLHFCQUFxQixnQ0FBZ0MsNkJBQTZCLElBQUkscUJBQXFCO0FBQy84RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0REFBNEQsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLCtDQUErQyx5QkFBeUIsR0FBRyxjQUFjLGVBQWUscUJBQXFCLHVCQUF1QixzQkFBc0IseUJBQXlCLDhFQUE4RSwrQ0FBK0Msb0JBQW9CLG9GQUFvRixrQkFBa0IsR0FBRyxXQUFXLHFCQUFxQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixHQUFHLE9BQU8sa0ZBQWtGLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLDJDQUEyQyxrQkFBa0IseUJBQXlCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixpREFBaUQsMkJBQTJCLEdBQUcsY0FBYyxpQkFBaUIsdUJBQXVCLHlCQUF5Qix3QkFBd0IsMkJBQTJCLG9GQUFvRiwrQ0FBK0MsZ0JBQWdCLG9GQUFvRixvQkFBb0IsR0FBRyxXQUFXLHVCQUF1QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixHQUFHLG1CQUFtQjtBQUNsd0Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLDRIQUE0SDtBQUM1SDtBQUNBLGdGQUFnRixrQkFBa0IsK0NBQStDLHNDQUFzQywwQ0FBMEMsc0RBQXNELFlBQVksV0FBVyxnQkFBZ0IscUNBQXFDLHdDQUF3QywrREFBK0QsR0FBRyxpREFBaUQsaUJBQWlCLG1CQUFtQixzQkFBc0IsbUJBQW1CLG9CQUFvQixHQUFHLDRDQUE0QyxpQkFBaUIsbUJBQW1CLGVBQWUscUJBQXFCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLGtCQUFrQixHQUFHLG1EQUFtRCx5QkFBeUIsNkJBQTZCLEdBQUcscUJBQXFCLFVBQVUsNEJBQTRCLEtBQUssUUFBUSwwQkFBMEIsS0FBSyxHQUFHLGtDQUFrQyx1QkFBdUIsY0FBYyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixzQkFBc0IscUJBQXFCLEdBQUcsaUNBQWlDLGdCQUFnQiwwQkFBMEIsb0JBQW9CLEdBQUcsMEZBQTBGLG9CQUFvQixrQkFBa0IsS0FBSyxHQUFHLFNBQVMsb0JBQW9CLHNDQUFzQyxnQ0FBZ0MsV0FBVyxnQkFBZ0IscUNBQXFDLHdDQUF3Qyw2REFBNkQsR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsS0FBSyxRQUFRLGlCQUFpQixLQUFLLEdBQUcsc0JBQXNCLFVBQVUsaUJBQWlCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxHQUFHLGlCQUFpQixrQkFBa0IsZ0JBQWdCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLEdBQUcsNkJBQTZCLFNBQVMsZ0NBQWdDLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRywwQkFBMEIsUUFBUSw2QkFBNkIsS0FBSyxTQUFTLDBCQUEwQixnQ0FBZ0MsS0FBSyxVQUFVLDZCQUE2QixnQ0FBZ0MsS0FBSyxHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLGlCQUFpQiw4QkFBOEIsaUNBQWlDLDJCQUEyQix3Q0FBd0Msb0JBQW9CLEdBQUcsMkJBQTJCLDJCQUEyQixHQUFHLGlCQUFpQixlQUFlLHVDQUF1QyxzQkFBc0IsaUJBQWlCLG9CQUFvQix3QkFBd0IsMEJBQTBCLEdBQUcsYUFBYSxlQUFlLCtCQUErQix1Q0FBdUMsc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRyxtQ0FBbUMsZ0JBQWdCLCtCQUErQixvQkFBb0IsMEJBQTBCLEdBQUcsT0FBTywwRkFBMEYsS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLGdFQUFnRSxxQkFBcUIsOENBQThDLHFDQUFxQyx5Q0FBeUMsb0RBQW9ELGNBQWMsYUFBYSxtQkFBbUIsb0NBQW9DLHVDQUF1Qyw2REFBNkQsS0FBSyxtREFBbUQsbUJBQW1CLHFCQUFxQix3QkFBd0IscUJBQXFCLHNCQUFzQixHQUFHLDhDQUE4QyxtQkFBbUIscUJBQXFCLGlCQUFpQix1QkFBdUIseUJBQXlCLGtCQUFrQixzQkFBc0Isb0JBQW9CLEdBQUcsdURBQXVELDJCQUEyQiwrQkFBK0IsR0FBRyx1QkFBdUIsWUFBWSx1QkFBdUIsVUFBVSxvQkFBb0IsR0FBRyxzQ0FBc0MseUJBQXlCLGdCQUFnQixrQkFBa0IscUJBQXFCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQiw0QkFBNEIsc0JBQXNCLEdBQUcseUZBQXlGLHNCQUFzQixzQkFBc0IsT0FBTyxHQUFHLGVBQWUsdUJBQXVCLHFDQUFxQyw4QkFBOEIsYUFBYSxtQkFBbUIsb0NBQW9DLHVDQUF1Qyx3RUFBd0UsR0FBRyx1QkFBdUIsWUFBWSxZQUFZLFVBQVUsWUFBWSxHQUFHLHdCQUF3QixZQUFZLFlBQVksVUFBVSxZQUFZLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsbUNBQW1DLDZCQUE2Qiw2QkFBNkIsR0FBRyw2QkFBNkIsV0FBVyxzQ0FBc0MsV0FBVyxzQ0FBc0MsV0FBVyxzQ0FBc0MsWUFBWSxxQ0FBcUMsR0FBRyw0QkFBNEIsVUFBVSx3QkFBd0IsV0FBVyxxQkFBcUIsc0NBQXNDLFlBQVksd0JBQXdCLHNDQUFzQyxHQUFHLHFCQUFxQix1QkFBdUIsb0JBQW9CLG1CQUFtQiwyQ0FBMkMsbUNBQW1DLDZCQUE2QiwwQ0FBMEMsd0JBQXdCLDJCQUEyQiw2QkFBNkIsR0FBRyx3RkFBd0YsaUJBQWlCLGlCQUFpQix1Q0FBdUMsd0JBQXdCLG1CQUFtQixzQkFBc0IsOEJBQThCLDRCQUE0QixHQUFHLGFBQWEsaUJBQWlCLGlDQUFpQyx1Q0FBdUMsd0JBQXdCLHdCQUF3Qix1QkFBdUIsR0FBRyxxQ0FBcUMsa0JBQWtCLGlDQUFpQyxzQkFBc0IsNEJBQTRCLEdBQUcscUJBQXFCO0FBQ3p2UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysb0lBQW9JO0FBQ3BJO0FBQ0EsNkNBQTZDLGNBQWMsR0FBRyxVQUFVLGlCQUFpQixrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGtDQUFrQyxnQkFBZ0Isa0JBQWtCLGtDQUFrQyw4QkFBOEIsK0NBQStDLEdBQUcsUUFBUSxzQkFBc0IsOEJBQThCLCtDQUErQyxzQkFBc0IsR0FBRyxXQUFXLGtCQUFrQixrQ0FBa0MsdUJBQXVCLEdBQUcsZ0JBQWdCLG9CQUFvQixzQkFBc0IsdUJBQXVCLHVCQUF1QixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLHNCQUFzQixlQUFlLEdBQUcsYUFBYSxlQUFlLEdBQUcsY0FBYyxnQkFBZ0IsK0JBQStCLEdBQUcsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLElBQUksY0FBYyxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsdUJBQXVCLFVBQVUsaUJBQWlCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxHQUFHLHNCQUFzQixVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxPQUFPLG9GQUFvRixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUsscUhBQXFILE9BQU8sZ0JBQWdCLEdBQUcsVUFBVSxtQkFBbUIsb0JBQW9CLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLDBCQUEwQixvQ0FBb0Msa0JBQWtCLG9CQUFvQixvQ0FBb0MsZ0NBQWdDLCtDQUErQyxHQUFHLFFBQVEsd0JBQXdCLGdDQUFnQywrQ0FBK0Msd0JBQXdCLEdBQUcsV0FBVyxvQkFBb0Isb0NBQW9DLHlCQUF5QixHQUFHLGdCQUFnQixzQkFBc0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQixpQ0FBaUMsR0FBRyxnQkFBZ0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsd0JBQXdCLHlCQUF5QixrQkFBa0IsSUFBSSxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLHVCQUF1QixZQUFZLFlBQVksVUFBVSxZQUFZLEdBQUcsd0JBQXdCLFlBQVksWUFBWSxVQUFVLFlBQVksR0FBRyxtQkFBbUI7QUFDMytHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdkM7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiw0SEFBNEg7QUFDNUg7QUFDQSxtRUFBbUUsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLDJDQUEyQyx5QkFBeUIsR0FBRyxxQkFBcUIsdUJBQXVCLGVBQWUsMEJBQTBCLHFCQUFxQix1QkFBdUIsc0JBQXNCLHNCQUFzQix1Q0FBdUMseUJBQXlCLDhFQUE4RSwrQ0FBK0MseUNBQXlDLEdBQUcsUUFBUSxzQkFBc0Isc0JBQXNCLGVBQWUsZUFBZSxtQkFBbUIsR0FBRyxRQUFRLHNCQUFzQix3QkFBd0IsZUFBZSxlQUFlLG1CQUFtQixHQUFHLE9BQU8sbUJBQW1CLHdCQUF3Qix5QkFBeUIsZUFBZSxHQUFHLGdCQUFnQix3QkFBd0IsZUFBZSxtQkFBbUIsR0FBRywyRkFBMkYsa0JBQWtCLEdBQUcsT0FBTywwRkFBMEYsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsNkdBQTZHLDZCQUE2QixrQkFBa0IseUJBQXlCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQiw2Q0FBNkMsMkJBQTJCLEdBQUcscUJBQXFCLHlCQUF5QixpQkFBaUIsNEJBQTRCLHVCQUF1Qix5QkFBeUIsd0JBQXdCLHdCQUF3Qix1Q0FBdUMsMkJBQTJCLG9GQUFvRiwrQ0FBK0MsdUNBQXVDLEdBQUcsUUFBUSx3QkFBd0Isd0JBQXdCLGlCQUFpQixpQkFBaUIscUJBQXFCLEdBQUcsUUFBUSx3QkFBd0IsMEJBQTBCLGlCQUFpQixpQkFBaUIscUJBQXFCLEdBQUcsT0FBTyxxQkFBcUIsMEJBQTBCLDJCQUEyQixpQkFBaUIsR0FBRyxnQkFBZ0IsMEJBQTBCLGlCQUFpQixxQkFBcUIsR0FBRywyRkFBMkYsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ2o5RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6Syx5Q0FBeUMsMEdBQTBHLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUVuZixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFKO0FBQ3JKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0hBQU87Ozs7QUFJK0Y7QUFDdkgsT0FBTyxpRUFBZSwrSEFBTyxJQUFJLHNJQUFjLEdBQUcsc0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBbUo7QUFDbko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SEFBTzs7OztBQUk2RjtBQUNySCxPQUFPLGlFQUFlLDZIQUFPLElBQUksb0lBQWMsR0FBRyxvSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUErSTtBQUMvSTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHlIQUFPOzs7O0FBSXlGO0FBQ2pILE9BQU8saUVBQWUseUhBQU8sSUFBSSxnSUFBYyxHQUFHLGdJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLGtJQUFjLEdBQUcsa0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBaUo7QUFDako7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUkyRjtBQUNuSCxPQUFPLGlFQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1SjtBQUN2SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlJQUFPOzs7O0FBSWlHO0FBQ3pILE9BQU8saUVBQWUsaUlBQU8sSUFBSSx3SUFBYyxHQUFHLHdJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNKOzs7QUFHdEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixJQUFJLGlEQUFXLEVBQUU7QUFDckM7QUFDQSxvQkFBb0IsMENBQUk7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBLHNCQUFzQixPQUFPLGtDQUFrQyxJQUFJO0FBQ25FLGtCQUFrQixPQUFPO0FBQ3pCLHFEQUFxRCxTQUFTO0FBQzlELCtDQUErQyxVQUFVO0FBQ3pEO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvQkFBb0I7QUFDOUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RnlCOztBQUVsQjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbWJBQW1iO0FBQ25iOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGaUM7QUFDSTtBQUNYOztBQUVuQjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSwwREFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBaUI7QUFDN0IsU0FBUztBQUNUO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUkscURBQWEsRUFBRTtBQUN2Qyx1QkFBdUIsOENBQU07QUFDN0IseUJBQXlCLDhDQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRmdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFekM7QUFDUCxJQUFJLG1EQUFTLEVBQUUsbURBQVMsRUFBRSxtREFBUyxFQUFFLG1EQUFTO0FBQzlDLElBQUksbURBQVMsRUFBRSxtREFBUztBQUN4Qjs7QUFFd0M7QUFDQTtBQUNBOztBQUVqQztBQUNQLElBQUksK0NBQUssRUFBRSwrQ0FBSyxFQUFFLCtDQUFLO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJrQztBQUNYOztBQUVoQjtBQUNQO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksa0RBQVksRUFBRTtBQUN0QztBQUNBO0FBQ0Esa0JBQWtCLDJDQUFLO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnlCOztBQUVsQjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IrQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EscUlBQXFJO0FBQ3JJLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0EsdU5BQXVOO0FBQ3ZOLDJRQUEyUTtBQUMzUTtBQUNBLHdNQUF3TSxnRkFBZ0YsdUVBQXVFO0FBQy9WLGdRQUFnUTtBQUNoUTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2YUFBNmE7QUFDN2E7QUFDQTtBQUNBLHlaQUF5WjtBQUN6WjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFOQUFxTjtBQUNyTjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRpQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU1QjtBQUNQLEtBQUssS0FBSyx5Q0FBSSx5QkFBeUI7QUFDdkMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksMEJBQTBCO0FBQ3hDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUkseUJBQXlCO0FBQ3ZDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSywwQ0FBSyx5QkFBeUI7QUFDeEMsS0FBSyxLQUFLLDJDQUFLLHlCQUF5QjtBQUN4QyxLQUFLLEtBQUssMkNBQUssMkJBQTJCO0FBQzFDLEtBQUssS0FBSywyQ0FBSywwQkFBMEI7QUFDekMsS0FBSyxLQUFLLDJDQUFLLDJCQUEyQjtBQUMxQyxLQUFLLEtBQUsseUNBQUkseUJBQXlCO0FBQ3ZDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLDBCQUEwQjtBQUN4QyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLHlCQUF5QjtBQUN2QyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUssMENBQUsseUJBQXlCO0FBQ3hDLEtBQUssS0FBSywyQ0FBSyx5QkFBeUI7QUFDeEMsS0FBSyxLQUFLLDJDQUFLLDJCQUEyQjtBQUMxQyxLQUFLLEtBQUssMkNBQUssMEJBQTBCO0FBQ3pDLEtBQUssS0FBSywyQ0FBSywyQkFBMkI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLHlCQUF5QjtBQUN2QyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSwwQkFBMEI7QUFDeEMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSx5QkFBeUI7QUFDdkMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnlCO0FBQ21CO0FBQ1Q7QUFDRTtBQUNJO0FBQ3FCO0FBQ3BCOztBQUUxQzs7QUFFQSxpQkFBaUIsc0RBQVU7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUIsMkRBQWMsR0FBRztBQUM3QyxLQUFLLG9DQUFvQyxrREFBVyxHQUFHO0FBQ3ZELEtBQUssOEJBQThCLHVEQUFpQixHQUFHO0FBQ3ZELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseURBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFnQjtBQUM1QixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDJEQUFjO0FBQ2xDOztBQUVBLG9CQUFvQiw0Q0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9jYXJvdXNlbC5zY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvZ2FsbGVyeS5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tYXAuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvbW9kYWwuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvdGV4dGNvbnRlbnQuY3NzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9jYXJvdXNlbC5zY3NzP2RlNjUiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9nYWxsZXJ5LmNzcz82MzRiIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvbWFwLmNzcz9kZWZkIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvbW9kYWwuY3NzP2EwYWMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/YmNiYyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL3RleHRjb250ZW50LmNzcz9hNzNlIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9maXJzdHZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2ltZ2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL3ZpZGVvZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJvdXNlbCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVkZTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2Fyb3VzZWwgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uY2Fyb3VzZWwgZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA2MCU7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxufVxcbi5jYXJvdXNlbCBmaWd1cmUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLmNhcm91c2VsIGZpZ3VyZSBpbWc6bm90KDpmaXJzdC1vZi10eXBlKSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uY2Fyb3VzZWwgbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxufVxcbi5jYXJvdXNlbCBuYXYgYnV0dG9uIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG4uY2Fyb3VzZWwgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBUGdCO0VBUWhCLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVNJO0VBQ0UsY0FBQTtBQVBOO0FBVUk7RUFDRSxTQUFBO0VBRUEsVUF0QlM7RUF1QlQsNEJBQUE7RUFDQSwwQkFBQTtBQVROO0FBV007RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBVFI7QUFXUTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFUVjtBQWNJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWVNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZlI7QUFrQk07RUFDRSxzQkFBQTtBQWhCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcbiAgXFxuICAvLyBDYXJvdXNlbCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnNcXG4gICRpdGVtLXdpZHRoOiA2MCU7IC8vIE5vdyB3ZSBjYW4gdXNlIHBlcmNlbnRhZ2VzIVxcbiAgJGl0ZW0tc2VwYXJhdGlvbjogMHB4OyAvLyBUaGlzIG5vdyBpcyBzZXQgd2l0aCBKc1xcbiAgJHZpZXdlci1kaXN0YW5jZTogMTAwMHB4O1xcbiAgXFxuICAuY2Fyb3VzZWwge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjIyKTtcXG4gIFxcbiAgICBwZXJzcGVjdGl2ZTogJHZpZXdlci1kaXN0YW5jZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICA+ICoge1xcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB9XFxuICBcXG4gICAgZmlndXJlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICBcXG4gICAgICB3aWR0aDogJGl0ZW0td2lkdGg7XFxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG4gIFxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiBtYXRoLmRpdigkaXRlbS1zZXBhcmF0aW9uLCAyKTtcXG4gIFxcbiAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICBcXG4gICAgbmF2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDIwJTtcXG4gICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICB6LWluZGV4OiAxMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcXG4gIFxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICBcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3BpeCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FsbGVyeSB7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mcmFtZSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnBpY3R1cmUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWN0dXJlOmhvdmVyIHtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDAuMDE7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlMzYwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1OWRlZyk7XFxuICB9XFxufVxcbi8qICNyZXNldDpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUzNjA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FsbGVyeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFBTSx1QkFBQTtFQUVSO0VBREU7SUFBSSwwQkFBQTtFQUlOO0FBQ0Y7QUFGQTs7O0dBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BpeCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FsbGVyeSB7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICAgIHBhZGRpbmc6IDNweDsgICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWN0dXJlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxMCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDAuMDE7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlMzYwIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoLTM1OWRlZyk7fVxcbn1cXG5cXG4vKiAjcmVzZXQ6aG92ZXIge1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlMzYwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbGlicmFyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMC41cmVtIDAuNXJlbSAwIHdoaXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNsaWJyYXJ5IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiNsaWJyYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFwYSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21hcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBRzVCOztBQUFBLGdEQUFBO0FBQ0E7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGlicmFyeTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjVyZW0gMC41cmVtIDAgd2hpdGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI2xpYnJhcnk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hcGEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HbG9yeTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgbWF4LWhlaWdodDogODAlO1xcbn1cXG5cXG4vKiBDYXB0aW9uIG9mIE1vZGFsIEltYWdlICovXFxuI2NhcHRpb24ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLyogQWRkIEFuaW1hdGlvbiAqL1xcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7XFxuICBhbmltYXRpb24tbmFtZTogem9vbTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDM1cHg7XFxuICBjb2xvcjogIzVjNWM1YztcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogI2JiYjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4jdmlldyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4jdmlldy1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzZiNmI2YjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxuICAyMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E2NTY1O1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NjdiNjtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2QxOTM7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDM1YjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjaGFuZ2Utc2l6ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E2NTY1O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2QxOTM7XFxuICB9XFxufVxcbi5hbmltYXRlZC1wb2ludCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2QxOTM7XFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYW5pbWF0ZWQtcG9pbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI2FmdGVyLXRleHQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2xvcnlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDEwcHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4uY2xvc2VYIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2xvcnlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jbG9zZVg6aG92ZXIsXFxuLmNsb3NlWDpmb2N1cyB7XFxuICBjb2xvcjogI2JiYjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGlCQUFBO0VBQW1CLHdCQUFBO0VBQ25CLG9CQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIseUJBQUE7QUFTSjs7QUFOQSwwQkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBU0o7O0FBTkEsMkJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFTSjs7QUFOQSxrQkFBQTtBQUNBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtBQVNKOztBQU5BO0VBQ0k7SUFBTSxxQkFBQTtFQVVSO0VBVEU7SUFBSSxtQkFBQTtFQVlOO0FBQ0Y7QUFWQSxxQkFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVRBOztFQUVJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFUQSx3Q0FBQTtBQUNBO0VBQ0k7SUFDSSxXQUFBO0VBWU47QUFDRjtBQVJBO0VBQ0ksZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0FBZUo7O0FBWkE7RUFDSTtJQUFNLFVBQUE7RUFnQlI7RUFmRTtJQUFJLFVBQUE7RUFrQk47QUFDRjtBQWhCQTtFQUNJO0lBQU0sVUFBQTtFQW1CUjtFQWxCRTtJQUFJLFVBQUE7RUFxQk47QUFDRjtBQW5CQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFxQko7O0FBbEJBO0VBQ0k7SUFBSyx5QkFBQTtFQXNCUDtFQXJCRTtJQUFLLHlCQUFBO0VBd0JQO0VBdkJFO0lBQUsseUJBQUE7RUEwQlA7RUF6QkU7SUFBTSx5QkFBQTtFQTRCUjtBQUNGO0FBMUJBO0VBQ0k7SUFBSSxzQkFBQTtFQTZCTjtFQTVCRTtJQUFLLG1CQUFBO0lBQXFCLHlCQUFBO0VBZ0M1QjtFQS9CRTtJQUFNLHNCQUFBO0lBQXdCLHlCQUFBO0VBbUNoQztBQUNGO0FBakNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQW1DSjs7QUFoQ0E7RUFDSSxzQkFBQTtBQW1DSjs7QUE5QkE7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWlDSjs7QUE5QkE7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWlDSjs7QUE5QkE7O0VBRUksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBaUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcbiAgXFxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXG59XFxuICBcXG4vKiBDYXB0aW9uIG9mIE1vZGFsIEltYWdlICovXFxuI2NhcHRpb24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcbiAgXFxuLyogQWRkIEFuaW1hdGlvbiAqL1xcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7ICBcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb207XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcXG59XFxuICBcXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDAuMSl9IFxcbiAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cXG59XFxuICBcXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OiAzNXB4O1xcbiAgICBjb2xvcjogIzVjNWM1YztcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuICBcXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gICAgY29sb3I6ICNiYmI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAubW9kYWwtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4gIFxcbiN2aWV3IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMTt9XFxuICAgIHRvIHtvcGFjaXR5OiAwO31cXG59XFxuXFxuI3ZpZXctY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiKDEwNywgMTA3LCAxMDcpOyAgICBcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcbiAgICAyMCUge2JhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDEwMSwgMTAxKTt9XFxuICAgIDQwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAxODIpO31cXG4gICAgODAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMDksIDE0Nyk7fVxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDkxKTt9XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlLXNpemUge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjI1KTt9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTAxLCAxMDEpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjI1KTsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMjA5LCAxNDcpO31cXG59XFxuXFxuLmFuaW1hdGVkLXBvaW50IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMDksIDE0Nyk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2UtY29sb3I7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG59XFxuXFxuLmFuaW1hdGVkLXBvaW50OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2xvcnk6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuI2FmdGVyLXRleHQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LWZhbWlseTogJ0dsb3J5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyAgICBcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4uY2xvc2VYIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2xvcnknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbiAgXFxuLmNsb3NlWDpob3ZlcixcXG4uY2xvc2VYOmZvY3VzIHtcXG4gICAgY29sb3I6ICNiYmI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2bWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgcmVkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGl0aWxsaXVtIFdlYlxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGl0aWxsaXVtIFdlYlxcXCIsIHNhbnMtc2VyaWY7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDFweCk7XFxufVxcblxcbi8qICNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxufSAqL1xcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7Ozs7Ozs7R0FBQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJO0lBQU0sVUFBQTtFQUFSO0VBQ0U7SUFBSSxVQUFBO0VBRU47QUFDRjtBQUFBO0VBQ0k7SUFBTSxVQUFBO0VBR1I7RUFGRTtJQUFJLFVBQUE7RUFLTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgcmVkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAxcHgpO1xcbn1cXG5cXG4vKiAjaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlO1xcbn0gKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMTt9XFxuICAgIHRvIHtvcGFjaXR5OiAwO31cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2xvcnk6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RleHQtY29udGFpbmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDRyZW0gMCB3aGl0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jdGV4dC1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHbG9yeVxcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIC8qIEZpcmVmb3ggKi9cXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBjb2xvcjogcmVkO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBjb2xvcjogcmVkO1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuYmxvY2txdW90ZSB7XFxuICBtYXJnaW4tdG9wOiAtMS41cmVtO1xcbiAgd2lkdGg6IDU1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI3RleHQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RleHRjb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFBd0IsWUFBQTtFQUN4QixtQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0EsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HbG9yeTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4jdGV4dC1jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHJlbSA0cmVtIDAgd2hpdGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jdGV4dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnR2xvcnknLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuYmxvY2txdW90ZSB7XFxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI3RleHQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Y29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Y29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGltZ3MgfSBmcm9tICcuL2ltZ2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9jYXJvdXNlbC5zY3NzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwgKCkge1xuICAgIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gICAgY2Fyb3VzZWwuZGF0YXNldC5nYXAgPSAyMDtcbiAgICBjYXJvdXNlbC5kYXRhc2V0LmJmYztcblxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1nc1tpXTtcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoZmlndXJlKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgYnV0dG9uUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uUHJldi5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwicHJldlwiKTtcbiAgICBidXR0b25QcmV2LnRleHRDb250ZW50ID0gXCJQcmV2XCI7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmV4dC5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwibmV4dFwiKTtcbiAgICBidXR0b25OZXh0LnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uUHJldik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk5leHQpO1xuXG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICByZXR1cm4gY2Fyb3VzZWxcbn07XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIGNhcm91c2VsRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuICAgIHZhciBmaWd1cmUgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiZmlndXJlXCIpLFxuICAgICAgbmF2ID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIm5hdlwiKSxcbiAgICAgIGltYWdlcyA9IGZpZ3VyZS5jaGlsZHJlbixcbiAgICAgIG4gPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgZ2FwID0gY2Fyb3VzZWwuZGF0YXNldC5nYXAgfHwgMCxcbiAgICAgIGJmYyA9IHRydWUsXG4gICAgICB0aGV0YSA9ICgyICogTWF0aC5QSSkgLyBuLFxuICAgICAgY3VyckltYWdlID0gMDtcbiAgICBzZXR1cENhcm91c2VsKG4sIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShpbWFnZXNbMF0pLndpZHRoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0dXBDYXJvdXNlbChuLCBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoaW1hZ2VzWzBdKS53aWR0aCkpO1xuICAgIH0pO1xuICBcbiAgICBzZXR1cE5hdmlnYXRpb24oKTtcbiAgXG4gICAgZnVuY3Rpb24gc2V0dXBDYXJvdXNlbChuLCBzKSB7XG4gICAgICB2YXIgYXBvdGhlbSA9IHMgLyAoMiAqIE1hdGgudGFuKE1hdGguUEkgLyBuKSk7XG4gICAgICBmaWd1cmUuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYDUwJSA1MCUgJHstYXBvdGhlbX1weGA7XG4gIFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGltYWdlc1tpXS5zdHlsZS5wYWRkaW5nID0gYCR7Z2FwfXB4YDtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaW1hZ2VzW2ldLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGA1MCUgNTAlICR7LWFwb3RoZW19cHhgO1xuICAgICAgICBpbWFnZXNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpICogdGhldGF9cmFkKWA7XG4gICAgICB9XG4gICAgICBpZiAoYmZjKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBpbWFnZXNbaV0uc3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgXG4gICAgICByb3RhdGVDYXJvdXNlbChjdXJySW1hZ2UpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gc2V0dXBOYXZpZ2F0aW9uKCkge1xuICAgICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrLCB0cnVlKTtcbiAgXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgIHZhciB0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0LnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPSBcIkJVVFRPTlwiKSByZXR1cm47XG4gIFxuICAgICAgICBpZiAodC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXh0XCIpKSB7XG4gICAgICAgICAgY3VyckltYWdlKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyckltYWdlLS07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHJvdGF0ZUNhcm91c2VsKGN1cnJJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiByb3RhdGVDYXJvdXNlbChpbWFnZUluZGV4KSB7XG4gICAgICBmaWd1cmUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpbWFnZUluZGV4ICogLXRoZXRhfXJhZClgO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgJy4vY3NzL21vZGFsLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWV3KCkge1xuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZpZXcuaWQgPSBcInZpZXdcIjtcblxuICAgIGNvbnN0IHZpZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2aWV3Q29udGVudC5pZCA9IFwidmlldy1jb250ZW50XCI7XG4gICAgdmlldy5hcHBlbmRDaGlsZCh2aWV3Q29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJFbCBsdWdhciBkZSBsYXMgU3VwZXJmaWNpZXNcIjtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCI7XG4gICAgY29uc3QgYWZ0ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgYWZ0ZXJUZXh0LmlkID0gXCJhZnRlci10ZXh0XCI7XG5cbiAgICBjb25zdCB0ZXh0ID0gYFxuICAgIFBhcnRpciBkZSB1bmEgaW1hZ2VuLCByZWNvbXBvbmVyLCByZWNvbmZpZ3VyYXIsIGV4dHJhZXIgZGUgZWxsYSBzdSBtw61uaW1vIHB1bnRvIGRlIGhvbW9nZW5laWRhZCwgdmFjaWxhciBhIHBhcnRpciBkZSBsYSBzYXR1cmFjacOzbiwgZWwgbWF0aXosIGVsIGFzcGVjdG8gY3JvbcOhdGljbywgc3UgaW50ZW5zaWRhZCB5IGVuY29udHJhciBsYSBwb3NpY2nDs24gZW5yaXF1ZWNpZGEgZW4gbGEgY3VhbCBsYSBtaXJhZGEgYWN1ZGUgYSBsYSBpbnF1aWV0dWQsIGEgbGEgYW1iaWfDvGVkYWQgZGUgbG8gZXZlbnR1YWwsIHlhIG5vIGVuIG1vdmltaWVudG8sIHNpbm8gY29tbyB1biBoZWNobyBjYXB0dXJhZG8gZW4gZWwgaW5zdGFudGUgcXVlIHNlIHByb2xvbmdhIGVuIGVsIHRpZW1wby4gVW4gcHVudG8gZGUgbGEgaW1hZ2VuIHF1ZSBzZSBjb3JyZWxhY2lvbmEgZGlyZWN0YW1lbnRlIGNvbiBvdHJvcyBtw61uaW1vcyBlbGVtZW50b3MuXG5cbiAgICBFbCBjdWVycG8gdXJiYW5vIG5vcyBwb3NpY2lvbmEgY29uc3RhbnRlbWVudGUgY29tbyBlc3BlY3RhZG9yZXMgZGUgcGVxdWXDsWFzIHJlYWxpZGFkZXMgZnJhZ21lbnRhZGFzIGRlIGxhIGNpdWRhZCwgYWwgdGllbXBvIGVuIHF1ZSBlc3RhcyBvcmfDoW5pY2FtZW50ZSBzZSB2YW4gcG9zaWNpb25hbmRvIGVuIGxhIHN1cGVyZmljaWUgZGVsIGVzY2VuYXJpbyBzb2NpYWwuIEVsIGx1Z2FyIGRlIGxhcyBzdXBlcmZpY2llcywgZXMgdW4gZXNwYWNpbyBkZXNkZSBlbCBjdWFsIHNlIGhhY2UgdW5hIHNlcmllIGRlIGNvbnNpZGVyYWNpb25lcyB0ZcOzcmljYXMgeSB2aXN1YWxlcywgYWxyZWRlZG9yIGRlIGFsZ3VuYXMgZGluw6FtaWNhcyBzb2Npby0gZXNwYWNpYWxlcywgcXVlIG1hbmlmaWVzdGFuIGxhIGRpc29uYW5jaWEgZW4gcXVlIHNlIHJldmVsYSBsYSB1cmJlOyBjb24gbGEgaW50ZW5jacOzbiBkZSBjb25zdHJ1aXIgbnVldmFzIHNpZ25pZmljYWNpb25lcyBlIGludGVycmVsYWNpb25lcyBkZSBsYSByZWFsaWRhZCBjb25jcmV0YSBkZSBsYSBjaXVkYWQgZGUgTWVkZWxsw61uLCBlc3BlY8OtZmljYW1lbnRlIGVuIGxvcyBzZWN0b3JlcyBwYXRyaW1vbmlhbGVzLCBQcmFkbyBDZW50cm8sIEJvc3RvbiwgeSBMb3Mgw4FuZ2VsZXMgeSBsYXMgZm9ybWFzIGVzcGFjaWFsZXMgcXVlIHNlIGdlbmVyYW4gYWxsw60uIFRvbWFuZG8gY29tbyBtZWRpbyBlbCBhc3BlY3RvIGNvbXVuaWNhdGl2byBkZWwgY29sb3IsIGNvbW8gbWFyY2FqZSB1cmJhbm8geSBjb21vIGVsZW1lbnRvIHF1ZSBzZSB5dXh0YXBvbmUgY29uc3RhbnRlbWVudGUgZW50cmUgbGFzIGRpbsOhbWljYXMgdXJiYW5hcyBkZWwgcGF0cmltb25pbyBoYWJpdGFkbyB5IGFycXVpdGVjdMOzbmljby5cbiAgICBgO1xuXG4gICAgYWZ0ZXJUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBjb25zdCBjbG9zZVggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjbG9zZVguY2xhc3NMaXN0LmFkZChcImNsb3NlWFwiKTtcbiAgICBjbG9zZVgudGV4dENvbnRlbnQgPSBcIkNvbnRpbnVhclwiXG5cbiAgICBjb25zdCBhbmltYXRlZFBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbmltYXRlZFBvaW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZC1wb2ludFwiKTtcbiAgICBhbmltYXRlZFBvaW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGVkUG9pbnQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICBhbmltYXRlZFBvaW50LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LnJlbW92ZUNoaWxkKGFuaW1hdGVkUG9pbnQpOyAgICAgICAgICBcbiAgICAgICAgfSwgNDkwKVxuICAgICAgICBwcm9qZWN0VGl0bGUuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICBwcm9qZWN0VGl0bGUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiOyAgIFxuICAgICAgICB9LCA1MDApXG4gICAgICAgIGFycm93LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgYXJyb3cuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmlld0NvbnRlbnQucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoYWZ0ZXJUZXh0KTtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlWCk7XG4gICAgICAgICAgICBhZnRlclRleHQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZWluXCI7XG4gICAgICAgICAgICBhZnRlclRleHQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgfSwgNTAwKVxuICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbG9zZVguc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZWluXCI7XG4gICAgICAgICAgICBjbG9zZVguc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjsgICAgIFxuICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICBcbiAgICB9KVxuICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGFuaW1hdGVkUG9pbnQpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZpZXcucmVtb3ZlQ2hpbGQodmlld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgICAgICAgICB9LCA0OTApXG4gICAgICAgICAgICB9LCA0OTApXG4gICAgICAgIH0pXG4gICAgfSwgMTAwMClcblxuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhcnJvdy5zcmMgPSBcImh0dHA6Ly9hMXNpdGVzLmNvbS9GcmVlSW1hZ2VzL0ZyZWVfQ2xpcF9BcnQvaW1hZ2VzL2Fycm93L3VwX2Fycm93X2NsaXAucG5nXCI7XG4gICAgYXJyb3cuc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcbiAgICBhcnJvdy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChhcnJvdyk7XG5cbiAgICByZXR1cm4gdmlld1xufSIsImltcG9ydCB7bW9kYWx9IGZyb20gJy4vbW9kYWwuanMnO1xuaW1wb3J0IHsgdmlkZW9zIH0gZnJvbSAnLi92aWRlb2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9nYWxsZXJ5LmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbGxlcnlDb250ZW50KCkge1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbGxlcnkuaWQgPSBcImdhbGxlcnlcIjtcblxuICAgIGNvbnN0IGNyZWF0ZURpdkZyYW1lID0gKHZpZGVvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdlRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdlRhZy5jbGFzc0xpc3QuYWRkKFwiZnJhbWVcIik7XG4gICAgICAgIGRpdlRhZy5hcHBlbmQodmlkZW8pO1xuICAgICAgICByZXR1cm4gZGl2VGFnXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVmlkID0gKHNyYywgY29sb3IsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZpZFRhZy5pZCA9IGluZGV4O1xuICAgICAgICB2aWRUYWcuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIHZpZFRhZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdmlkVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRUYWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG4gICAgICAgICAgICBjb25zdCB2aWRlb1NvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gICAgICAgICAgICB2aWRlb1NvdXJjZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICB2aWRlb1NvdXJjZS50eXBlID0gXCJ2aWRlby9tcDRcIjtcbiAgICAgICAgICAgIGlmIChtb2RhbENvbnRlbnQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgICAgICAgICAgIG1vZGFsQ29udGVudC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQubG9vcCA9IHRydWU7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LnN0eWxlLndpZHRoID0gXCI2MDBweFwiO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LnN0eWxlLmhlaWdodCA9IFwiNjAwcHhcIjtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh2aWRlb1NvdXJjZSk7XG4gICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdmlkVGFnXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWRlb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgdmlkc3JjID0gdmlkZW9zW2ldLnNyYztcbiAgICAgICAgY29uc3QgdmlkQ29sb3IgPSB2aWRlb3NbaV0ucmdiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdmlkUGljdHVyZSA9IGNyZWF0ZVZpZCh2aWRzcmMsIHZpZENvbG9yLCBpKTtcbiAgICAgICAgY29uc3QgZGl2RnJhbWUgPSBjcmVhdGVEaXZGcmFtZSh2aWRQaWN0dXJlKTtcbiAgICAgICAgXG4gICAgICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoZGl2RnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZXNldC5pZCA9IFwicmVzZXRcIjtcbiAgICAvLyByZXNldC50eXBlID0gXCJidXR0b25cIjtcbiAgICByZXNldC5zcmMgPSBcImh0dHBzOi8vZnVydGFldi5ydS9wcmV2aWV3L3VuZG9fc21hbGwucG5nXCI7XG4gICAgcmVzZXQuc3R5bGUud2lkdGggPSBcIjUwcHhcIlxuICAgIHJlc2V0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIC8vIHJlc2V0LnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlc2V0LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcInJvdGF0ZTM2MFwiO1xuICAgICAgICByZXNldC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICBjb25zdCBwaWN0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGljdHVyZVwiKTtcbiAgICAgICAgcGljdHVyZXMuZm9yRWFjaChwaWN0dXJlID0+IHtcbiAgICAgICAgICAgIHBpY3R1cmUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNldC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHJlc2V0LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCJcIjtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHBpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGl4LmlkID0gXCJwaXhcIjtcbiAgICBwaXguYXBwZW5kQ2hpbGQoZ2FsbGVyeSk7XG4gICAgcGl4LmFwcGVuZENoaWxkKHJlc2V0KTtcblxuICAgIHJldHVybiBwaXhcbn0iLCJpbXBvcnQgY2Fyb3VzZWwxIGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTEuanBnJztcbmltcG9ydCBjYXJvdXNlbDIgZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtMi5qcGcnO1xuaW1wb3J0IGNhcm91c2VsMyBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC0zLmpwZyc7XG5pbXBvcnQgY2Fyb3VzZWw2IGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTYuanBnJztcbmltcG9ydCBjYXJvdXNlbDcgZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtNy5qcGcnO1xuaW1wb3J0IGNhcm91c2VsOCBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC04LmpwZyc7XG5cbmV4cG9ydCBjb25zdCBpbWdzID0gW1xuICAgIGNhcm91c2VsMSwgY2Fyb3VzZWwyLCBjYXJvdXNlbDMsIGNhcm91c2VsNixcbiAgICBjYXJvdXNlbDcsIGNhcm91c2VsOCxcbl07XG5cbmltcG9ydCBtYXBhMCBmcm9tICcuL2ltYWdlcy9tYXBhLTAuanBnJztcbmltcG9ydCBtYXBhMSBmcm9tICcuL2ltYWdlcy9tYXBhLTEuanBnJztcbmltcG9ydCBtYXBhMiBmcm9tICcuL2ltYWdlcy9tYXBhLTIuanBnJztcblxuZXhwb3J0IGNvbnN0IG1hcGFzID0gW1xuICAgIG1hcGEwLCBtYXBhMSwgbWFwYTIsXG5dIiwiaW1wb3J0IHsgbWFwYXMgfSBmcm9tICcuL2ltZ2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9tYXAuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hcHNMaWJyYXJ5KCkge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpYnJhcnkuaWQgPSBcImxpYnJhcnlcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJtYXBhXCIpO1xuICAgICAgICBpbWcuc3JjID0gbWFwYXNbaV07XG4gICAgICAgIGxpYnJhcnkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlicmFyeVxufSIsImltcG9ydCAnLi9jc3MvbW9kYWwuY3NzJztcblxuZXhwb3J0IGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1vZGFsLmlkID0gXCJtb2RhbFwiO1xubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBtb2RhbC5jaGlsZE5vZGVzWzFdLnJlbW92ZSgpO1xufSlcbmNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCLDl1wiXG5tb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiIsImltcG9ydCAnLi9jc3MvdGV4dGNvbnRlbnQuY3NzJztcblxuY29uc3QgdGV4dCA9IGBcbjxoMj5SZWZsZXhpb25lcyBhIHByb3DDs3NpdG8gZGUgaGFiaXRhciBlbCBlc3BhY2lvIHDDumJsaWNvIGNvbW8gYWN0byBkaXNydXB0aXZvIGZyZW50ZSBhIGxhIHBsYW5pZmljYWNpw7NuIHVyYmFuYSwgZW4gbG9zIGJhcnJpb3MgcGF0cmltb25pYWxlcyBkZSBsYSBjaXVkYWQgZGUgTWVkZWxsw61uLSBQcmFkbyBjZW50cm8sIEJvc3RvbiwgeSBMb3Mgw4FuZ2VsZXMuPC9oMj5cbjxwPkVzdGUgcHJveWVjdG8gaW52ZXN0aWdhdGl2bywgc3VyZ2UgZHVyYW50ZSBtaSBwZXJtYW5lbmNpYSBlbiBsYSBjaXVkYWQgZGUgTWVkZWxsw61uLCBhIHBhcnRpciBkZSBsYSBhdGVuY2nDs24gZW4gYWxndW5hcyBkaW7DoW1pY2FzIHNvY2lvIC0gZXNwYWNpYWxlcywgcXVlIG1hbmlmaWVzdGFuIGxhIGRpc29uYW5jaWEgZW4gcXVlIHNlIHJldmVsYSBsYSB1cmJlIHkgbGFzIGN1YWxlcyBwZXJtaXRlbiBjb25zdHJ1aXIgbnVldmFzIHNpZ25pZmljYWNpb25lcywgZSBpbnRlcnByZXRhY2lvbmVzIGRlIGxhIHJlYWxpZGFkIGNvbmNyZXRhLjwvcD5cbjxwPkxhIGNpdWRhZCBzZSBwcmVzZW50YSBjb21vIHVuIHNpc3RlbWEgY29tcGxlam8sIGVuIGVsIGN1YWwgY29uZmx1eWVuIHVuIHNpbm7Dum1lcm8gZGUgY2F0ZWdvcsOtYXMgc29jaWFsZXMsIGVjb27Ds21pY2FzIHkgcG9sw610aWNhczsgdW5hIG11bHRpcGxpY2lkYWQgZGUgZXNmZXJhcyB1cmJhbmFzIHkgcHLDoWN0aWNhcyBjb3RpZGlhbmFzIGNvbnRyYXJpYXMsIGVuIHBlcm1hbmVudGUgdHJhbnNmb3JtYWNpw7NuLiAgRXN0YSBtYW5pZmVzdGFjacOzbiBoZXRlcsOzY2xpdGEgZGUgbGEgc29jaWVkYWQgb3NjaWxhIGVudHJlIGxhIGNvbnRlbmNpw7NuIHkgZWwgYWNvbnRlY2VyIGRlIGxvIGVzcG9udMOhbmVvIHF1ZSBlbWVyZ2UgZGUgZXNjZW5hcmlvcyBhbHRlcm5vcywgeSBzaXJ2ZSBjb21vIHB1bnRvIGRlIHBhcnRpZGEgZGUgdW5hIHNlcmllIGRlIGNvbnNpZGVyYWNpb25lcywgZW4gdG9ybm8gYSBsYSBvY3VwYWNpw7NuIGRlbCBlc3BhY2lvIHDDumJsaWNvLCB5IGxhcyBmb3JtYXMgZXNwYWNpYWxlcyBxdWUgc2UgZ2VuZXJhbiBhbGzDrS48L3A+XG48cD5UZW5pZW5kbyBjb21vIHJlZmVyZW5jaWEgYWxndW5hcyBwcm9ibGVtw6F0aWNhcyBzb2NpYWxlczsgY29tbyBsYSBub3RhYmxlIHByZXNlbmNpYSBkZSBwZXJzb25hcyBlbiBjb25kaWNpw7NuIGRlIGNhbGxlICZsdCBoYWJpdGFudGUgZGUgY2FsbGUgJmd0LCAgZWwgbWljcm90csOhZmljbywgbGEgcHJvc3RpdHVjacOzbiwgZWwgY29tZXJjaW8gaW5mb3JtYWwsIGVudHJlIG90cmFzIHByw6FjdGljYXMgaXJyZWd1bGFyZXMsIGVuIHJlbGFjacOzbiBjb24gZWwgbHVnYXIgcXVlIG9jdXBhbiwgZW5jdWVudHJvIHVuYSBub3RhYmxlIGNvcnJlc3BvbmRlbmNpYSBjb24gZWwgc2VjdG9yIHBhdHJpbW9uaWFsIGRlIE1lZGVsbMOtbi4gRWwgYmFycmlvIFByYWRvIGNlbnRybywgTG9zIMOBbmdlbGVzIHkgcGFydGUgZGVsIHNlY3RvciBkZSBCb3N0b24uIEFsbMOtIHNlIHByZXNlbnRhbiB2w61uY3Vsb3MgcXVlIGV2aWRlbmNpYW4gbG9zIGNvbnRyYXN0ZXMgeSBkZXNhcnRpY3VsYW4gbGEgaW1hZ2VuIGRlIGxhIGNpdWRhZCwgY3Vlc3Rpb25hbmRvIGxhIGlndWFsZGFkIGRlIGFjY2VzbyBhbCBlc3BhY2lvIHDDumJsaWNvLCBlbCBkZXNwbGF6YW1pZW50byBjb25zdGFudGUgZGVsIHBhdHJpbW9uaW8gaGFiaXRhZG8sIGVsIGFycXVpdGVjdMOzbmljbyB5IGxhIHDDqXJkaWRhIGRlIGxhIG1lbW9yaWEgdXJiYW5hLjwvcD5cbjxwPkVsIGNvbG9yIGRldmllbmUgYSBtb2RvIGRlIHBhbGV0YSBkZSBjaXVkYWQsIGNvbW8gbWFyY2FqZSB1cmJhbm8sIGZhY2hhZGEgeSBjb21vIGVsZW1lbnRvIHF1ZSBzZSB5dXh0YXBvbmUgY29uc3RhbnRlbWVudGUgZW50cmUgbGFzIGRpbsOhbWljYXMgdXJiYW5hcyBkZWwgcGF0cmltb25pbyBoYWJpdGFkbyB5IGFycXVpdGVjdMOzbmljby48L3A+XG48cD4qPC9wPlxuPHA+RWwgZXNwYWNpbyBww7pibGljbyB5IGNhZGEgdW5vIGRlIGxvcyBlbGVtZW50b3MgdXJiYW5vcyBxdWUgbG8gY29tcG9uZW4sIHNlIGhhIGlkbyBjb252aXJ0aWVuZG8gY2FkYSB2ZXogbcOhcywgZW4gdW4gbWVkaW8gcGVydGluZW50ZSBlbiBlbCBjdWFsIHNlIGV4cG9uZW4gbGFzIHByb2JsZW3DoXRpY2FzIHkgbGFzIGNvbmRpY2lvbmVzIHNvY2lhbGVzIGRlIHVuIGx1Z2FyOyBhbGzDrSwgc2UgcmV2ZWxhbiBsYXMgaW5jb25zaXN0ZW5jaWFzIHF1ZSBkZXNkZSBhbnRlcyBoYW4gZXhpc3RpZG8sIGluY29udGVuaWJsZXMgZW4gZWwgZGV2ZW5pciBkZSBudWVzdHJhIHNvY2llZGFkLjwvcD5cbjxwPkEgbW9kbyBkZSBhcHJvcGlhY2lvbmVzIGRlbCBlc3BhY2lvLCBjb21vIG1hcmNhamVzLCBvY3VwYWNpb25lcyB0ZW1wb3JhbGVzIGRlbCBlc3BhY2lvIHDDumJsaWNvIG8gYSB0cmF2w6lzIGRlIHBpbnRhZGFzIG8gZ3JhZml0aXMgY2FsbGVqZXJvcywgcXVlIGFsdGVyYW4gZWwgcGFpc2FqZSB1cmJhbm8sIGRlc2FydGljdWxhbmRvIGFzw60sIGxhcyBwb2zDrXRpY2FzIGRlIGxpbmVhbGlkYWQgeSByZWd1bGFjacOzbiBmcmVudGUgYSBsYSBvY3VwYWNpw7NuIGRlIGVzdGU7IGFkcXVpZXJlbiB1biBwb2RlciBlc2VuY2lhbCwgbG9zIGVsZW1lbnRvcyB1cmJhbm9zLCBjb21vIHZpbmN1bGFjacOzbiBlc3BlY2lmaWNhIGVudHJlIGxhIG5lY2VzaWRhZCBkZSBkZW51bmNpYXIgeSBhIGxhIHZleiB0cmFuc2Zvcm1hci4gPC9wPlxuPHA+Kio8L3A+XG48cD5FbiBtZWRpbyBkZSBhbGd1bmFzIGVzdHJhdGVnaWFzIGRlIHJlY3VwZXJhY2nDs24gZSBpbnRlcnZlbmNpw7NuLCBkZSBsYXMgZmFjaGFkYXMgZGUgbGFzIGFudGlndWFzIGNhc2FzIGRlbCBiYXJyaW8gUHJhZG8gQ2VudHJvIGVuIE1lZGVsbMOtbiwgcXVlIHNlIGhhbiBoZWNobyBhIHRyYXbDqXMgZGUgbGEgYWRtaW5pc3RyYWNpw7NuIG11bmljaXBhbDsgY29tbyBwcm9jZXNvcyBkZSBwZWF0b25hbGl6YWNpw7NuLCBwaW50dXJhIGRlIGZhY2hhZGFzIHkgcmVjdXBlcmFjacOzbiBkZWwgY29sb3I7IGVtZXJnZW4gZ3JhZml0aXMgY2FsbGVqZXJvcywgYSBwYXJ0aXIgZGUgZ2VzdG9zIGVzcG9udMOhbmVvcyB5IHZlbG9jZXM7IGVzdGFzIGV4cHJlc2lvbmVzIHZpc3VhbGVzLCBzZSB5dXh0YXBvbmVuIHNvYnJlIGVsIHBhaXNhamUgYXJxdWl0ZWN0w7NuaWNvLCB0cmFuc2Zvcm3DoW5kb2xvIHkgIGFwb2RlcsOhbmRvc2UgcGF1bGF0aW5hbWVudGUgZGUgw6lsLCBjb21vIHVuIG1lZGlvIHRyYW5zZ3Jlc29yIHkgZGUgZGVudW5jaWEsIGNhc2kgcHJvcGljaWFuZG8gdW4gcmVjb3JyaWRvIGVzcGFjaWFsIHF1ZSBhZ2l0YSB2aXN1YWxtZW50ZSAgbGEgYXBhcmVudGUgcmVjdGl0dWQgZGUgbGEgZXN0w6l0aWNhIGFycXVpdGVjdMOzbmljYSB5IGVsIG1vYmlsaWFyaW8gdXJiYW5vLCBxdWUgc2UgaW50ZW50YSByZXNlcnZhciB5IG1hbnRlbmVyIGhlcm3DqXRpY28gYW50ZSBjdWFscXVpZXIgYXNvbW8gZGUgY29udHJhcmllZGFkLjwvcD5cbjxwPkxhcyBwaW50YWRhcyBvIGdyYWZpdGlzLCB2aXNpYmlsaXphbiBlbCBlc3RhZG8gZGUgbGEgc29jaWVkYWQgaW5jb25mb3JtZSwgcXVlIHNlIHByb3llY3RhIHBvciBmdWVyYSBkZSBsbyBhcHJvcGlhZG8geSBsbyBoZWdlbcOzbmljbywgcmVjb25maWd1cmFuZG8gZWwgZXNwYWNpbyBhbCBwYXNvIGRlIGxvcyBkw61hcywgZGUgbWFuZXJhIG9yZ8OhbmljYSB5IGVuIHNpbnRvbsOtYSBhIGxvcyBzZW50aW1pZW50b3MgZGUgc3VzIHJlYWxpemFkb3JlczsgZGUgZXN0ZSBtaXNtbyBtb2RvLCBlbXBpZXphbiBhIHJlc2lzdGlyc2UgYSBsb3MgcHJpbmNpcGlvcyBkZWwgdXJiYW5pc21vLCBwZXJzb25hcyBxdWUgYWNvZ2VuIHkgY3JlYW4gbnVldmFzIGZvcm1hcyBkZSB1cmJhbmlzbW8geSBlc3TDqXRpY2FzIHVyYmFuYXMsIHBhcmFsZWxhcyBhIGxhcyBkZSBsYSBjaXVkYWQgcGxhbmlmaWNhZGEuIENvbnRyYXJyZXN0YW5kbyBhc8OtLCBsYSBpbXBvc2ljacOzbiBpbnN0aXR1Y2lvbmFsLCBhIHRyYXbDqXMgZGUgZXF1aXBhbWllbnRvcyBubyBjb252ZW5jaW9uYWxlcyBxdWUgc2UgZGVzcGxpZWdhbiBvY2FzaW9uYWxtZW50ZSBlbiBlbCBlc3BhY2lvIHkgZG9ibGVnYW4gbGFzIHBvbMOtdGljYXMgZGUgb3JkZW4gcMO6YmxpY28sIGRlIG1hbmVyYSBkaXNydXB0aXZhLjwvcD5cbjxwPlBlcm8gZXN0b3MgbW9kb3MgZGUgb2N1cGFjacOzbiB0ZW1wb3JhbCBkZWwgZXNwYWNpbyBww7pibGljbywgcXVlIGVuIGFsZ3Vub3MgY2Fzb3Mgc2UgcHVlZGVuIG1hbmlmZXN0YXIgY29tbyB1biBnZXN0byBsaWJyZSwgZGUgc2ltcGxlIGlycmV2ZXJlbmNpYSwgIGxlIGhhY2VuIGZyZW50ZSBhIHByb2Z1bmRhcyBwcm9ibGVtw6F0aWNhcyBzb2NpYWxlcyBkZSBkZXNpZ3VhbGRhZCBlIGluZXN0YWJpbGlkYWQsIGEgdW5hIHByZWNhcmllZGFkIHBvbMOtdGljYSB5IGVjb27Ds21pY2EsIHF1ZSBkZSBhbGfDum4gbW9kbyBzZSBlbmN1ZW50cmEgbm9ybWFsaXphZGEsIHkgZGUgbGEgY3VhbCBzdXJnZW4gc29sdWNpb25lcyBwb3IgaW5zdGludG8gZGUgc3VwZXJ2aXZlbmNpYS48L3A+XG48YmxvY2txdW90ZT5cbiZxdW90Vml2aW1vcyBlbiB1bmEgZXJhIGVuIGxhIHF1ZSBsb3MgaWRlYWxlcyBkZSBsb3MgZGVyZWNob3MgaHVtYW5vcyBzZSBoYW4gY29sb2NhZG8gZW4gZWwgY2VudHJvIGRlIGxhIGVzY2VuYSB0YW50byBwb2zDrXRpY2EgY29tbyDDqXRpY2FtZW50ZS4gU2UgaGEgZ2FzdGFkbyB1bmEgZ3JhbiBjYW50aWRhZCBkZSBlbmVyZ8OtYSBlbiBwcm9tb3ZlciBzdSBzaWduaWZpY2FkbyBwYXJhIGxhIGNvbnN0cnVjY2nDs24gZGUgdW4gbXVuZG8gbWVqb3IsIGF1bnF1ZSBsYSBtYXlvcsOtYSBkZSBsb3MgY29uY2VwdG9zIHF1ZSBjaXJjdWxhbiBubyBkZXNhZsOtYW4gZnVuZGFtZW50YWxtZW50ZSBsYXMgbMOzZ2ljYXMgZGUgbWVyY2FkbyBsaWJlcmFsZXMgeSBuZW9saWJlcmFsZXMgbyBsb3MgbW9kb3MgZG9taW5hbnRlcyBkZSBsZWdhbGlkYWQgeSBkZSBhY2Npw7NuIGVzdGF0YWwuIFZpdmltb3MsIGRlc3B1w6lzIGRlIHRvZG8sIGVuIHVuIG11bmRvIGVuIGVsIHF1ZSBsb3MgZGVyZWNob3MgYSBsYSBwcm9waWVkYWQgcHJpdmFkYSB5IGVsIGJlbmVmaWNpbyBhcGxhc3RhbiB0b2RhcyBsYXMgZGVtw6FzIG5vY2lvbmVzIGRlIGRlcmVjaG9zLiZxdW90XG5cbiAgICAtRGF2aWQgSGFydmV5LCBlbCBkZXJlY2hvIGEgbGEgY2l1ZGFkLlxuPC9ibG9ja3F1b3RlPlxuPHA+TGEgcHJlc2VuY2lhIGRlIGVzdGFzIHBlcnNvbmFzIHkgc3VzIG9jdXBhY2lvbmVzLCBzZSBjb252aWVydGUgZW4gdW4gbWFyY2FqZSBzb2NpYWwsIHF1ZSBzZcOxYWxhLCBwcm92ZWUgZGUgY2llcnRhcyBjYXJhY3RlcsOtc3RpY2FzIHkgY29uZmlndXJhIGxhIHJlbGFjacOzbiBkZWwgcmVzdG8gZGUgbG9zIGhhYml0YW50ZXMgZGUgbGEgY2l1ZGFkIGNvbiBlbCBiYXJyaW8uIFNvbiBlc3RhcyBwcsOhY3RpY2FzIGlycmVndWxhcmVzLCBsYXMgcXVlIGFjZW50w7phbiBkZSBhbGfDum4gbW9kbyBlbCBwYXRyaW1vbmlvIGhhYml0YWRvIGRlIHVuIGx1Z2FyIGVuIGVsIHF1ZSBsYXMgdml2aWVuZGFzIGhhbiBxdWVkYWRvIHJlbGVnYWRhcyBhIGluc3RpdHVjaW9uZXMsIGRvbmRlIGRlIHB1ZXJ0YXMgcGFyYSBhZGVudHJvIHNlIHRlamVuIHJlbGFjaW9uZXMsIHBlcm8gcXVlIGVuIHN1cyBjYWxsZXMsIG5vIGV4aXN0ZSBuZWNlc2FyaWFtZW50ZSB1biB2w61uY3VsbyBjb211bml0YXJpby4gIENvbiB0b2RvIGVzdG8gc2UgY3JlYW4gbGltaXRhbnRlcyBxdWUgaGFjZW4gcGFydGUgZGUgbGEgY29uc3RydWNjacOzbiBzb2NpYWwsICB1bmEgc2Vuc2FjacOzbiBkZSBpbnNlZ3VyaWRhZCwgcXVlIGNvbW8gbG8gc2XDsWFsYSBKYW5lIEphY29icyBhY2VyY2EgZGUgbG9zIG9qb3MgZW4gbGEgY2FsbGUsIGRldGVybWluYW4gbGEgcG9zdHVyYSBxdWUgc2UgdGllbmUgY29uIGxhcyBjYWxsZXMgZGVsIGJhcnJpbyB5IGNvbiBlc3RhcyBtaXNtYXMgcHLDoWN0aWNhcyB5IHBlcnNvbmFzLCBxdWUgZGUgYWxnw7puIG1vZG8gc2UgbGVzIG1hcmdpbmEuPC9wPlxuPHA+KioqPC9wPlxuPGgzPkVuIHRpZW1wb3MgZGUgcGFuZGVtaWEuPC9oMz5cbjxwPkVsIGNvbnRleHRvIGRlIGxhIGVtZXJnZW5jaWEgc2FuaXRhcmlhIHBvciBDb3ZpZCAxOSwgZXZpZGVudGVtZW50ZSBjb25kaWNpb27DsyBsYSBtYW5lcmEgY29tbyBub3MgcmVsYWNpb25hbW9zIGNvbiBlbCBlc3BhY2lvIHDDumJsaWNvIHkgY29uIGxvcyBkZW3DoXMgaGFiaXRhbnRlcyBkZSBsYSBjaXVkYWQuPC9wPlxuPHA+RXN0ZSBoYSBzaWRvIHVuIGRldG9uYW50ZSBxdWUgaGEgcGVybWl0aWRvIG1heW9yIHZpc2liaWxpZGFkIGEgIGxhcyBkaXZlcnNhcyBwcm9ibGVtw6F0aWNhcyBzb2NpYWxlcyBxdWUgc2UgaW50ZW5zaWZpY2Fyb24gZW4gbWVkaW8gZGUgbGEgc2l0dWFjacOzbiwgZW4gdGVtYXMgZWNvbsOzbWljb3MgeSBlc3BhY2lhbGVzLjwvcD5cbjxwPkVzIGRlIGFsbMOtLCBjb21vIGVsIGFuZMOpbiBkZWwgZXNwYWNpbyBww7pibGljbyBlbiBlbCBiYXJyaW8sIHF1ZSBwZXJtYW5lY2UgZGlzcHVlc3RvLCBwYXNhIGRlIGNvbnRlbXBsYXIgeSBkZSBzZXIgZWwgZXNjZW5hcmlvIGRlc2RlIGRvbmRlIHNlIGF0aWJvcnJhIHkgc3VjZWRlIGxhIGNvdGlkaWFuaWRhZCBzb2NpYWwgaW5tZWRpYXRhLCBhIHNlciBjb250ZW1wbGFkbywgcXVlZGEgZGVzcHJvdmlzdG8gZGUgdG9kbyB0aXBvIGRlIGNvbWVyY2lvLiBMb3MgY29uZGljaW9uYW1pZW50b3MgZGUgZXN0ZSBlc3BhY2lvLCBzZSBoYWNlbiBtw6FzIG5vdGFibGVzLCBzZSBhY2VudMO6YSBsYSBuZWdhY2nDs24gZGUgdW4gZXNwYWNpbyBww7pibGljbyBwYXJhIGVsIHZlbmRlZG9yIGFtYnVsYW50ZSwgZG9uZGUgc29icmVzYWxlIGVsIHLDrWdpZG8gY29udHJvbCBxdWUgc2llbXByZSBoYSBleGlzdGlkbyBmcmVudGUgYSBlc3RlIGVsZW1lbnRvIGRlbCB1cmJhbmlzbW8gcXVlIHNlIHN1cG9uZSBwYXJhIHNlciB2aXZlbmNpYWRvLjwvcD4gXG48cD5BIGZ1ZXJ6YSwgc2UgZW5mYXRpemEgZWwgZWplcmNpY2lvIGRlIHJlYmVsZMOtYSwgcXVlIGhhY2UgY290aWRpYW5hbWVudGUgZWwgaGFiaXRhbnRlIC0gdmVuZGVkb3IgYW1idWxhbnRlLCBxdWUgZW4gc3UgcHLDoWN0aWNhIGdlbmVyYSBsYXpvcyBzb2NpYWxlcyB5IGRlc2RlIGRvbmRlIHNlIHRlamVuIGNvbmZyb250YWNpb25lcyB5IGNvbnZpdmVuY2lhcyBlc3BhY2lhbGVzLCBxdWUgcG9zaWJpbGl0YW4gbGEgZXhwZXJpZW5jaWEgc29jaWFsIGRlbCB2ZWNpbmRhcmlvLjwvcD5cbjxwPkRlIG1vZG8gY29udHJhcmlvLCBlc3RlIGFuZMOpbiBkZWwgZXNwYWNpbyBww7pibGljbyBwYXJhIGxvcyBoYWJpdGFudGVzIGRlIGxhIGNhbGxlLCBsYXMgcGVyc29uYXMgcXVlIGRlYmVuIHZpdmlyIGFsbMOtLCAgc2UgaGEgdnVlbHRvIHVuIGVzcGFjaW8gZGUgcmVmdWdpbyBvY2FzaW9uYWwsIHN1IGFjdG8gZGUgcmViZWxkw61hIGZyZW50ZSBhIGxhIG5lZ2FjacOzbiBkZWwgaGFiaXRhciBsYSBjYWxsZSBlbiB0aWVtcG9zIGRlIHBhbmRlbWlhLCBlcyBzZW5jaWxsYW1lbnRlIHVuYSBwcmVzZW50YWNpw7NuIGRlIGxhIG1hcmdpbmFsaWRhZC4gTGEgb2N1cGFjacOzbiBlZsOtbWVyYSB5IGNhbWJpYW50ZSBxdWUgaGFjZSBlbCBoYWJpdGFudGUgZGUgZXN0ZSBzaXRpbywgdHJhbnNncmVkZSBsYSBleHBlY3RhdGl2YSBzb2NpYWwuPC9wPlxuPHA+RW4gbWVkaW8gZGVsIGVjbGVjdGljaXNtbyBhcnF1aXRlY3TDs25pY28gZGUgYmFycmlvLCBzZSBwcmVzZW50YSBlbCBzdWVsbyBjb21vIHJlZnVnaW8sIHNvbWJyYSB5IGRlc2NhbnNvLCBhY29nZSB1bmEgcHJlc2VuY2lhIHRhbiBzb2xvIHZpc3RhLCBzaXF1aWVyYSBjYXBheiBkZSBzZXIgcGVyY2liaWRhLCBjb21vIHVuIHNvYnJlc2FsdG8gYSBsYSB2aXN0YSwgcXVlIHBhcnRpY3VsYXJtZW50ZSByb21wZSBsYSBjb250aW51aWRhZCB5IHByb2R1Y2UgcHJlY2F1Y2nDs24gZW4gZWwgdHJhbnNlw7pudGUuPC9wPlxuPHA+KioqKjwvcD5cbjxwPkVuIMOpcG9jYXMgZGUgY29uZWN0aXZpZGFkIHZpcnR1YWwsIGVsIHNlcnZpZG9yIHdlYiBTdHJlZXQgdmlldyBlbmNhcHN1bGEsIHkgZXRlcm5pemEgcG9yIHRpZW1wb3MgbWVkaWFuYW1lbnRlIGR1cmFkZXJvcywgYWNvbnRlY2ltaWVudG9zIGRlbCBlc3BhY2lvIHDDumJsaWNvIGhhYml0YWRvIHF1ZSBpZGVvbMOzZ2ljYW1lbnRlIGhhbiBpbnRlbnRhZG8gc2VyIGRpc2ltdWxhZG9zIGVuIGxhIHJlYWxpZGFkIGNvbmNyZXRhLiBDb21vIHVuYSBnYWxlcsOtYSBkZSBsYSByZWFsaWRhZCB0YWwgY3VhbCBlcywgc2luIGRlc2Fwcm9iYWNpw7NuIGFsZ3VuYSwgZnJhZ21lbnRvcyBkZSB2aXZlbmNpYXMgZXNwYWNpYWxlcyB5IGFjb250ZWNpbWllbnRvcyBlc3BvbnTDoW5lb3MgZGUgbGEgc29jaWVkYWQsIHF1ZWRhbiBjb25nZWxhZG9zIHkgc2UgdnVlbHZlbiB1bml2ZXJzYWxlcy48L3A+XG48cD5EZXNkZSBsbyBtZWRpYW5hbWVudGUgbGVqYW5vLCBzdXJnZW4gZm9ybWFzLCBxdWUgdGllbmRlbiBhIHZvbHZlcnNlIGluZGVzY2lmcmFibGVzLCBjb21vIHBlcXVlw7FhcyBpbnNpbnVhY2lvbmVzIGRlIGNvbG9yLCBjYXNpIGNvbiB1biBhc3BlY3RvIGRlIGPDs2RpZ28gZGUgY2l1ZGFkLCBtdWx0aWZvcm1lLCB5IGVtcGllemFuIGEgYWRxdWlyaXIgdW4gYXNwZWN0byBkZSBzZcOxYWxhbWllbnRvIHNvYnJlIGVsIHBhaXNhamUgdXJiYW5vLCBxdWUgc29icmVzYWxlLiBQYXNhamVzIGRlIHNlcmVzIGh1bWFub3MgZW4gc2l0dWFjaW9uZXMgcXVlIGVuYWx0ZWNlbiBsYSBzdWJqZXRpdmlkYWQgcXVlIGxvcyBjb21wb25lLCBvIGZvcm1hcyBzZW1pZXNjb25kaWRhcyBkZXRyw6FzIGRlIMOhcmJvbGVzLCBlc2NhbG9uZXMsIGJvbHNhcywgZW50cmUgb3Ryb3M7IHF1ZSBzdWdpZXJlbiBsYSBwcmVzZW5jaWEgZGUgdW4gY3VlcnBvIGh1bWFubyBhcHJvcGlhZG8gYSBzdSBhbnRvam8gZGVsIGVzcGFjaW8gcMO6YmxpY28uIEFsZ3VuYXMgZGUgZXN0YXMgcGVyc29uYXMsIHRyYWVuIGNvbnNpZ28gZWxlbWVudG9zLCBxdWUgZGUgbW9kbyBpbmdlbmlvc28gc2UgY29udmllcnRlbiBlbiBjb25zdHJ1Y2Npb25lcyBoYWJpdGFibGVzIHRlbXBvcmFsZXMgeSB0cmFuc3BvcnRhYmxlcywgcXVlIHN1Z2llcmVuIHF1aXrDoXMgdW5hIHByZWd1bnRhIHBvciBsbyBlc2N1bHTDs3JpY28sIHF1aXrDoXMgY29tbyBvdHJhIHBvc2liaWxpZGFkIGVudHJlIGxhIGFycXVpdGVjdHVyYSB5IGVsIHBhaXNhamUsIHNvYnJlIGxhcyBxdWUgYWxndW5hIHZleiBpbnRlbnTDsyBjYXJ0b2dyYWZpYXIgUm9zYWxpbmQgS3JhdXNzLjwvcD5cbjxwPkVtcGxhemFtaWVudG9zIGVmw61tZXJvcyBhIHBhcnRpciBkZSBlbGVtZW50b3MgcmVjaWNsYWRvcywgdHJhbnNmb3JtYWRvcywgcmVsb2NhbGl6YWRvcywgcmVjb250ZXh0dWFsaXphZG9zLCBxdWUgZ2VuZXJhIHVuYSBoZXRlcm90b3DDrGEgZXNwYWNpYWwsIHkgc2UgeXV4dGFwb25lIGFsIHBhaXNhamUgYXJxdWl0ZWN0w7NuaWNvIHJlZ3VsYXIuPC9wPlxuPGgzPkFwcm94aW1hY2lvbmVzIGFsIGNvbG9yLjwvaDM+XG48cD5MYSBleHBlcmllbmNpYSBxdWUgZXhpc3RlIGEgdHJhdsOpcyBkZWwgY29sb3IgZXMgcHJvZHVjdG8gZGlyZWN0byBkZSBsYSBwcmVzZW5jaWFsaWRhZC4gTmVjZXNhcmlhbWVudGUgbGEgbWFuZXJhIGNvbW8gcGVyY2liaW1vcyBsYXMgcHVsc2lvbmVzIGRlbCBjb2xvciwgZXN0w6FuIHByb2Z1bmRhbWVudGUgbGlnYWRhcyBhIGF0cmlidXRvcyBjdWx0dXJhbGVzIHkgYSBsYSBwcm9waWEgbWFuZXJhIGRlIHJlbGFjaW9uYXJub3MgY29uIGVsIGNvbG9yIGVuIG51ZXN0cm8gZW50b3JubyBjdWx0dXJhbC4gSW5jbHVzbyBhc3BlY3RvcyBkZSBsYSBnZW9ncmFmw61hIGRlIHVuIGx1Z2FyLCByZWxhY2lvbmFkbyBhIGNvbmRpY2lvbmVzIGVzcGVjw61maWNhcyBkZWwgY2xpbWEsIGF0bW9zZsOpcmljYXMsIGVudHJlIG90cm9zOyBjb25kaWNpb25hbiBlbCBjb21wb3J0YW1pZW50byBkZSB1biB0ZXJyaXRvcmlvLCBhcG9ydGFuZG8gc2lnbmlmaWNhdGl2YW1lbnRlIGEgbG9zIHZhbG9yZXMgZXN0w6l0aWNvcyBkZSBjYWRhIGN1bHR1cmEuPC9wPlxuPHA+QXVuIGFzw60sIGxhIGV4cGVyaWVuY2lhIHF1ZSB0ZW5lbW9zIGNvbiBlbCBjb2xvciBlcyBuZWNlc2FyaWFtZW50ZSBwYXJ0aWN1bGFyLiBPbGFmdXIgRWxpYXNzb24gbWVuY2lvbmEsIOKAnEVsIGNvbG9yIHRpZW5lIHVuIGVub3JtZSBwb3RlbmNpYWwgcHNpY29sw7NnaWNvIHkgYXNvY2lhdGl2bzogYXVuIGN1YW5kbyBzZSBoYSBjdWx0aXZhZG8gaGFzdGEgZWwgZXh0cmVtbywgbGEgZXhwZXJpZW5jaWEgZGUgbG9zIGNvbG9yZXMgZXMgYXPDrSBtaXNtbyBleHRyZW1hZGFtZW50ZSBpbmRpdmlkdWFsLuKAnSAoTywgRWxpYXNzb24sIDIwMTIpPC9wPlxuPHA+UGFydGlyIGRlIHVuYSBpbWFnZW4sIHJlY29tcG9uZXIsIHJlY29uZmlndXJhciwgZXh0cmFlciBkZSBlbGxhIHN1IG3DrW5pbW8gcHVudG8gZGUgaG9tb2dlbmVpZGFkLCB2YWNpbGFyIGEgcGFydGlyIGRlIGxhIHNhdHVyYWNpw7NuLCBlbCBtYXRpeiwgZWwgYXNwZWN0byBjcm9tw6F0aWNvLCBzdSBpbnRlbnNpZGFkIHkgZW5jb250cmFyIGxhIHBvc2ljacOzbiBlbnJpcXVlY2lkYSBlbiBsYSBjdWFsIGxhIG1pcmFkYSBhY3VkZSBhIGxhIGlucXVpZXR1ZCwgYSBsYSBhbWJpZ8O8ZWRhZCBkZSBsbyBldmVudHVhbCwgeWEgbm8gZW4gbW92aW1pZW50bywgc2lubyBjb21vIHVuIGhlY2hvIGNhcHR1cmFkbyBlbiBlbCBpbnN0YW50ZSBxdWUgc2UgcHJvbG9uZ2EgZW4gZWwgdGllbXBvLiBVbiBwdW50byBkZSBsYSBpbWFnZW4gcXVlIHNlIGNvcnJlbGFjaW9uYSBkaXJlY3RhbWVudGUgY29uIG90cm9zIG3DrW5pbW9zIGVsZW1lbnRvcywgeSBlbiBlc2EgaW50ZXJyZWxhY2nDs24sIHN1cmdlIHVuYSBleHBsb3JhY2nDs24gdmlzdWFsLCBxdWUgZ29scGVhIGVsIG9qbyBhbCBjb250YWN0by48L3A+XG48cD5Fc3RhbW9zIGFwcmVoZW5kaWRvcyBhIGxvIG3Ds3ZpbCwgYWwgZXZlbnRvIGZ1cnRpdm8geSBwYXNhamVybywgcGVzdGHDsWVhbW9zIGFsIHRpZW1wbyBlbiBxdWUgc2UgcmVjb25maWd1cmEgZWwgZXNwYWNpbyBjb24gc3VzIGV2ZW50dWFsaWRhZGVzLCB5IGxhIGltYWdlbiBwb2NhcyB2ZWNlcyBzZSBhZGhpZXJlLCBwb2NhcyB2ZWNlcyB0cmFzY2llbmRlIHkgc2UgZXhwYW5kZSBlbiBlbCB0aWVtcG8uIFJlY29ycmVyIGxhIGNpdWRhZCwgb3B0YXIgcG9yIHVuYSBwb3NpY2nDs24gcmVjZXB0aXZhIGVuIHN1cyBjYWxsZXMsIGVuIG9jYXNpb25lcyBwcm9kdWNlIGRlc2dhc3RlLCBkZWJpZG8gYSBsYSBzb25vcmlkYWQgdmlzdWFsIHkgbGEgZmFjaWxpZGFkIGVuIGxhIHF1ZSBzZSBwYXNhIGRlIHVuYSBpbWFnZW4gYSBvdHJhLiBMb3MgZXZlbnRvcyBkZWphbiBkZSBzZXIgZXZlbnRvcywgcGFyYSBjb252ZXJ0aXJzZSBlbiBwcmVzdW5jaW9uZXMgY290aWRpYW5hcywgYmFuYWxlcywgcXVlIHBpZXJkZW4gbGEgY2FsaWRhZCBwYXJhIHNlciBleHBsb3JhZGFzLCBtw6FzIGFsbMOhIGRlIGxhIGZvcm1hLjwvcD5cbjxwPkEgcGFydGlyIGRlbCBtw61uaW1vIGVsZW1lbnRvIGRlIGNvbG9yIHF1ZSBjb21wb25lIHVuYSBpbWFnZW4gZGlnaXRhbCBlbm1hcmNhZGEgZGUgbGEgcmVhbGlkYWQsIHNlIHJlY29uc3RydXllIHN1IHNpZ25pZmljYWRvLCBlbCBkZXN2YW5lY2ltaWVudG8gZGUgbGEgZmlndXJhY2nDs24gc2XDsWFsYSBlbCBjb2xvciBwb3Igc8OtIG1pc21vLjwvcD5cbjxwPkVsIGN1ZXJwbyB1cmJhbm8gbm9zIHBvc2ljaW9uYSBjb25zdGFudGVtZW50ZSBjb21vIGVzcGVjdGFkb3JlcyBkZSBwZXF1ZcOxYXMgcmVhbGlkYWRlcyBmcmFnbWVudGFkYXMgZGUgbGEgY2l1ZGFkLCBhbCB0aWVtcG8gZW4gcXVlIGVzdGFzIG9yZ8OhbmljYW1lbnRlIHNlIHZhbiBwb3NpY2lvbmFuZG8gZW4gbGEgc3VwZXJmaWNpZSBkZWwgZXNjZW5hcmlvIHNvY2lhbDsgcG9yIG90cm8gbGFkbyBzZSBsZXMgaW1waWRlIGZsdWlyLCBlbiBtZWRpbyBkZSBsYSB2aWdpbGFuY2lhIHF1ZSBiYWpvIG5vY2lvbmVzIGRlbCBiaWVuIGNvbcO6biB5IHVuIG1hcmtldGluZyB1cmJhbsOtc3RpY28gZW4gZWwgY3VhbCBwcmltYSBsYSBlc3TDqXRpY2EgeSBhbCBhcm1vbsOtYSB2aXN1YWwsIHNlIGVzY29uZGVuIG1hcmdpbmFsaWRhZGVzLCBxdWUgc2UgZGlzaW11bGFuIGNvbnN0YW50ZW1lbnRlIGRlbnRybyBkZWwgYXBhcmF0YWplIHBvbMOtdGljbywgZGVzdmFuZWNpZW5kbyBlc3RhcyByZWFsaWRhZGVzIGVzcGVjw61maWNhcy4gTGEgcHJlc2VuY2lhIGRlIGVzdG9zIGhlY2hvcyBjb3RpZGlhbm9zLCBlbiBlbCBhY29udGVjZXIgZGlhcmlvLCBlbXBpZXphbiBhIHBlcmRlciByZWxldmFuY2lhIHBhcmEgZWwgdXN1YXJpbyBkZSBsYSBjaXVkYWQuPC9wPlxuPHA+TGEgY29kaWZpY2FjacOzbiBkZSBsYSBpbWFnZW4gcGVybWl0ZSBzZcOxYWxhciBlc3RhcyBwcsOhY3RpY2FzLCBwb3RlbmNpYW5kbyBlbCB2YWxvciBkZSBsYSBpbmFjZXB0YWNpw7NuLCBuZWdhY2nDs24geSBjYW11ZmxhamUuICBFbCBjYXLDoWN0ZXIgc2lsZW5jaW9zbyBxdWUgaGFuIGFkcXVpcmlkbyBlc3RhcyBwcsOhY3RpY2FzIHNlIHRyYXN0b2NhIGNvbiBsYSBuZWNlc2lkYWQgZGUgb2N1bHRhY2nDs24gZGUgbGEgaW1hZ2VuIHF1ZSBpbmNvbW9kYSwgY29uIGVsIGludGVyw6lzIGRlIGRlc2xvY2FsaXphciB5IHJlc2l0dWFyIGVuIGVsIHBsYW5vIHNvY2lhbCwgbGEgcG9zaWNpw7NuIGRlIGVzdGFzIHByw6FjdGljYXMgY29uIGVsIGVzcGFjaW8gcXVlIG9jdXBhbi48L3A+XG48aDM+QXF1w60gdmEtIEVzcXVlbWEgZGUgZGVzZmlndXJhY2nDs24gZGUgbGEgaW1hZ2VuLjwvaDM+XG48cD5FbCBhc3BlY3RvIGNvbXVuaWNhdGl2byBkZWwgY29sb3IgYXRyaWJ1eWUgb3RyYSBtaXJhZGEgZGUgbGEgcmVhbGlkYWQsIGFsIHl1eHRhcG9uZXJzZSBhIGxhIGVzdGFuZGFyaXphY2nDs24gY3JvbcOhdGljYSBkZWwgZW50b3JubyB1cmJhbm8uIExhIGluc3RydW1lbnRhY2nDs24geSBsb3MgZWxlbWVudG9zIHJlcXVlcmlkb3MgcG9yIGVzdGFzIHBlcnNvbmFzIHBhcmEgc29icmVsbGV2YXIgbG9zIGFzcGVjdG9zIG3DoXMgYsOhc2ljb3MgZGUgbGEgc3Vic2lzdGVuY2lhIGVuIGVsIGVudG9ybm8gdXJiYW5vIGVtcGllemFuIGEgZ2VuZXJhciBjb250cmFzdGVzIHZpc3VhbGVzLiBFbiBsYSBwcm94aW1pZGFkIGRlIGxvcyBlc3BhY2lvcyB0ZW1wb3JhbGVzIHF1ZSBzZSB2YW4gZ2VuZXJhbmRvLCBsb3MgY3VhbGVzIGxlcyBwZXJtaXRlbiBhY3VkaXIgeSBnZXN0aW9uYXIgc3VzIG5lY2VzaWRhZGVzIG3DoXMgY2VyY2FuYXMuPC9wPlxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRDb250ZW50KCkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICB0ZXh0Q29udGFpbmVyLmlkID0gXCJ0ZXh0LWNvbnRhaW5lclwiO1xuICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGV4dDtcblxuICAgIHJldHVybiB0ZXh0Q29udGFpbmVyXG59IiwiaW1wb3J0IHZpZDEgZnJvbSAnLi92aWRlby8xLm1wNCc7XG5pbXBvcnQgdmlkMiBmcm9tICcuL3ZpZGVvLzIubXA0JztcbmltcG9ydCB2aWQzIGZyb20gJy4vdmlkZW8vMy5tcDQnO1xuaW1wb3J0IHZpZDQgZnJvbSAnLi92aWRlby80Lm1wNCc7XG5pbXBvcnQgdmlkNSBmcm9tICcuL3ZpZGVvLzUubXA0JztcbmltcG9ydCB2aWQ2IGZyb20gJy4vdmlkZW8vNi5tcDQnO1xuaW1wb3J0IHZpZDcgZnJvbSAnLi92aWRlby83Lm1wNCc7XG5pbXBvcnQgdmlkOCBmcm9tICcuL3ZpZGVvLzgubXA0JztcbmltcG9ydCB2aWQ5IGZyb20gJy4vdmlkZW8vOS5tcDQnO1xuaW1wb3J0IHZpZDEwIGZyb20gJy4vdmlkZW8vMTAubXA0JztcbmltcG9ydCB2aWQxMSBmcm9tICcuL3ZpZGVvLzExLm1wNCc7XG5pbXBvcnQgdmlkMTIgZnJvbSAnLi92aWRlby8xMi5tcDQnO1xuaW1wb3J0IHZpZDEzIGZyb20gJy4vdmlkZW8vMTMubXA0JztcbmltcG9ydCB2aWQxNCBmcm9tICcuL3ZpZGVvLzE0Lm1wNCc7XG5cbmV4cG9ydCBjb25zdCB2aWRlb3MgPSBbXG4gICAge3NyYzogdmlkMSwgcmdiOiBcInJnYigxMTAsIDYsIDM2KVwifSxcbiAgICB7c3JjOiB2aWQyLCByZ2I6IFwicmdiKDEyMywgMTU0LCAxMzQpXCJ9LFxuICAgIHtzcmM6IHZpZDMsIHJnYjogXCJyZ2IoOTQsIDkzLCAxMTMpXCJ9LFxuICAgIHtzcmM6IHZpZDQsIHJnYjogXCJyZ2IoMTg0LCAxNTAsIDEzNSlcIn0sXG4gICAge3NyYzogdmlkNSwgcmdiOiBcInJnYigxNTQsIDE1OSwgMTU2KVwifSxcbiAgICB7c3JjOiB2aWQ2LCByZ2I6IFwicmdiKDQ2LCA5OSwgOTMpXCJ9LFxuICAgIHtzcmM6IHZpZDcsIHJnYjogXCJyZ2IoMTM3LCAxNDEsIDE4NClcIn0sXG4gICAge3NyYzogdmlkOCwgcmdiOiBcInJnYigyMDYsIDE3OSwgMjA3KVwifSxcbiAgICB7c3JjOiB2aWQ5LCByZ2I6IFwicmdiKDE0MiwgMTYzLCAxOTcpXCJ9LFxuICAgIHtzcmM6IHZpZDEwLCByZ2I6IFwicmdiKDE3OCwgMTQsIDMpXCJ9LFxuICAgIHtzcmM6IHZpZDExLCByZ2I6IFwicmdiKDAsIDg4LCAxMjUpXCJ9LFxuICAgIHtzcmM6IHZpZDEyLCByZ2I6IFwicmdiKDg1LCAxMzAsIDE4NClcIn0sXG4gICAge3NyYzogdmlkMTMsIHJnYjogXCJyZ2IoNTksIDkyLCAyMDIpXCJ9LFxuICAgIHtzcmM6IHZpZDE0LCByZ2I6IFwicmdiKDIwNywgMTQ1LCA2MylcIn0sXG4gICAge3NyYzogdmlkMSwgcmdiOiBcInJnYigxMTAsIDYsIDM2KVwifSxcbiAgICB7c3JjOiB2aWQyLCByZ2I6IFwicmdiKDEyMywgMTU0LCAxMzQpXCJ9LFxuICAgIHtzcmM6IHZpZDMsIHJnYjogXCJyZ2IoOTQsIDkzLCAxMTMpXCJ9LFxuICAgIHtzcmM6IHZpZDQsIHJnYjogXCJyZ2IoMTg0LCAxNTAsIDEzNSlcIn0sXG4gICAge3NyYzogdmlkNSwgcmdiOiBcInJnYigxNTQsIDE1OSwgMTU2KVwifSxcbiAgICB7c3JjOiB2aWQ2LCByZ2I6IFwicmdiKDQ2LCA5OSwgOTMpXCJ9LFxuICAgIHtzcmM6IHZpZDcsIHJnYjogXCJyZ2IoMTM3LCAxNDEsIDE4NClcIn0sXG4gICAge3NyYzogdmlkOCwgcmdiOiBcInJnYigyMDYsIDE3OSwgMjA3KVwifSxcbiAgICB7c3JjOiB2aWQ5LCByZ2I6IFwicmdiKDE0MiwgMTYzLCAxOTcpXCJ9LFxuICAgIHtzcmM6IHZpZDEwLCByZ2I6IFwicmdiKDE3OCwgMTQsIDMpXCJ9LFxuICAgIHtzcmM6IHZpZDExLCByZ2I6IFwicmdiKDAsIDg4LCAxMjUpXCJ9LFxuICAgIHtzcmM6IHZpZDEyLCByZ2I6IFwicmdiKDg1LCAxMzAsIDE4NClcIn0sXG4gICAge3NyYzogdmlkMTMsIHJnYjogXCJyZ2IoNTksIDkyLCAyMDIpXCJ9LFxuICAgIHtzcmM6IHZpZDE0LCByZ2I6IFwicmdiKDIwNywgMTQ1LCA2MylcIn0sXG4gICAge3NyYzogdmlkMSwgcmdiOiBcInJnYigxMTAsIDYsIDM2KVwifSxcbiAgICB7c3JjOiB2aWQyLCByZ2I6IFwicmdiKDEyMywgMTU0LCAxMzQpXCJ9LFxuICAgIHtzcmM6IHZpZDMsIHJnYjogXCJyZ2IoOTQsIDkzLCAxMTMpXCJ9LFxuICAgIHtzcmM6IHZpZDQsIHJnYjogXCJyZ2IoMTg0LCAxNTAsIDEzNSlcIn0sXG4gICAge3NyYzogdmlkNSwgcmdiOiBcInJnYigxNTQsIDE1OSwgMTU2KVwifSxcbiAgICB7c3JjOiB2aWQ2LCByZ2I6IFwicmdiKDQ2LCA5OSwgOTMpXCJ9LFxuICAgIHtzcmM6IHZpZDcsIHJnYjogXCJyZ2IoMTM3LCAxNDEsIDE4NClcIn0sXG4gICAge3NyYzogdmlkOCwgcmdiOiBcInJnYigyMDYsIDE3OSwgMjA3KVwifSxcbl0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7Z2FsbGVyeUNvbnRlbnR9IGZyb20gJy4vZ2FsbGVyeS5qcyc7XG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gJy4vbW9kYWwuanMnO1xuaW1wb3J0IHsgdGV4dENvbnRlbnQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgY3JlYXRlVmlldyB9IGZyb20gJy4vZmlyc3R2aWV3JztcbmltcG9ydCB7IGNyZWF0ZUNhcm91c2VsLCBjYXJvdXNlbEZ1bmN0aW9uIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBjcmVhdGVNYXBzTGlicmFyeSB9IGZyb20gJy4vbWFwJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlVmlldygpKVxuXG5jb25zdCBuYXZtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5hdm1lbnUuaWQgPSBcIm5hdm1lbnVcIjtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJTdXBlcmZpY2llc1wiO1xubmF2bWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuY29uc3QgcGFnZU5hbWVzID0gW1xuICAgIHt0aXRsZTogXCJQaXhcIiwgY29udGVudDogZ2FsbGVyeUNvbnRlbnQoKX0sXG4gICAge3RpdGxlOiBcIkFsZ3Vub3MgZXNjcml0b3NcIiwgY29udGVudDogdGV4dENvbnRlbnQoKX0sIFxuICAgIHt0aXRsZTogXCJSZWNvcnJpZG9zXCIsIGNvbnRlbnQ6IGNyZWF0ZU1hcHNMaWJyYXJ5KCl9LFxuICAgIC8vIHt0aXRsZTogXCJTdXBlcmZpY2llc1wiLCBjb250ZW50OiBjcmVhdGVDYXJvdXNlbCgpLCBzZWNvbmQ6IGNhcm91c2VsRnVuY3Rpb24oKX1cbl07XG5wYWdlTmFtZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1lbnUuaWQgPSBwYWdlLnRpdGxlO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBwYWdlLnRpdGxlO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMXNcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UuY29udGVudCk7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVpblwiO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMXNcIlxuICAgICAgICB9LCA5OTApO1xuICAgIH0pXG4gICAgcGFnZXMuYXBwZW5kQ2hpbGQobWVudSk7XG59KVxuXG5jb25zdCBzdXBlcmZpY2llc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnN1cGVyZmljaWVzTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuc3VwZXJmaWNpZXNNZW51LmlkID0gXCJTdXBlcmZpY2llc1wiO1xuc3VwZXJmaWNpZXNNZW51LnRleHRDb250ZW50ID0gXCJTdXBlcmZpY2llc1wiO1xuc3VwZXJmaWNpZXNNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJvdXNlbCgpKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlaW5cIjtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjFzXCJcbiAgICAgICAgICAgIGNhcm91c2VsRnVuY3Rpb24oKTtcbiAgICAgICAgfSwgMTQ5MCk7XG4gICAgfSwgNDkwKTtcbn0pXG5wYWdlcy5hcHBlbmRDaGlsZChzdXBlcmZpY2llc01lbnUpXG5uYXZtZW51LmFwcGVuZENoaWxkKHBhZ2VzKTtcblxuYm9keS5hcHBlbmRDaGlsZChuYXZtZW51KTtcblxuY29uc3QgbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbVwiKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICBtZW51c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVudXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG1lbnVzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pXG59XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xud3JhcHBlci5pZCA9IFwid3JhcHBlclwiO1xuXG4vLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbi8vIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuLy8gaDEudGV4dENvbnRlbnQgPSBcIkdhbGVyaWFcIjtcbi8vIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbi8vIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XG53cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGdhbGxlcnlDb250ZW50KCkpO1xubWVudXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxud3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9