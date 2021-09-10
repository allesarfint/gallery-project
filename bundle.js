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
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 50px;\n  /* Location of the box */\n  padding-bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #ffffff;\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  aspect-ratio: 1/1;\n  max-width: 80%;\n  max-height: 80%;\n}\n\n/* Caption of Modal Image */\n#caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, #caption {\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0.1);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #5c5c5c;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n#view {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: white;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n#view-content {\n  display: flex;\n  height: 80%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #6b6b6b;\n  animation-name: fadein;\n  animation-duration: 2s;\n}\n\n@keyframes change-color {\n  20% {\n    background-color: #ca6565;\n  }\n  40% {\n    background-color: #6767b6;\n  }\n  80% {\n    background-color: #93d193;\n  }\n  100% {\n    background-color: #d3d35b;\n  }\n}\n@keyframes change-size {\n  0% {\n    transform: scale(0.25);\n  }\n  50% {\n    transform: scale(1);\n    background-color: #ca6565;\n  }\n  100% {\n    transform: scale(0.25);\n    background-color: #93d193;\n  }\n}\n.animated-point {\n  margin-top: 20px;\n  height: 100px;\n  width: 100px;\n  background-color: #93d193;\n  animation-name: change-color;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  cursor: pointer;\n}\n\n.animated-point:hover {\n  transform: scale(1.05);\n}\n\n#after-text {\n  width: 70%;\n  font-family: \"Glory\", sans-serif;\n  font-size: 1.5rem;\n  margin: 10px;\n  cursor: default;\n  white-space: pre-wrap;\n}\n\n.closeX {\n  color: #5c5c5c;\n  font-family: \"Glory\", sans-serif;\n  font-size: 3rem;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.closeX:hover,\n.closeX:focus {\n  color: #bbb;\n  cursor: pointer;\n  transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACI,aAAA;EAAe,sBAAA;EACf,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,iBAAA;EAAmB,wBAAA;EACnB,oBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,yBAAA;AASJ;;AANA,0BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AASJ;;AANA,2BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;AASJ;;AANA,kBAAA;AACA;EACI,oBAAA;EACA,wBAAA;AASJ;;AANA;EACI;IAAM,qBAAA;EAUR;EATE;IAAI,mBAAA;EAYN;AACF;AAVA,qBAAA;AACA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAYJ;;AATA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAYJ;;AATA,wCAAA;AACA;EACI;IACI,WAAA;EAYN;AACF;AARA;EACI,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,uBAAA;AAeJ;;AAZA;EACI;IAAM,UAAA;EAgBR;EAfE;IAAI,UAAA;EAkBN;AACF;AAhBA;EACI;IAAM,UAAA;EAmBR;EAlBE;IAAI,UAAA;EAqBN;AACF;AAnBA;EACI,aAAA;EACA,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,sBAAA;EACA,sBAAA;AAqBJ;;AAlBA;EACI;IAAK,yBAAA;EAsBP;EArBE;IAAK,yBAAA;EAwBP;EAvBE;IAAK,yBAAA;EA0BP;EAzBE;IAAM,yBAAA;EA4BR;AACF;AA1BA;EACI;IAAI,sBAAA;EA6BN;EA5BE;IAAK,mBAAA;IAAqB,yBAAA;EAgC5B;EA/BE;IAAM,sBAAA;IAAwB,yBAAA;EAmChC;AACF;AAjCA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,sBAAA;EACA,mCAAA;EACA,eAAA;AAmCJ;;AAhCA;EACI,sBAAA;AAmCJ;;AA9BA;EACI,UAAA;EACA,gCAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;AAiCJ;;AA9BA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAiCJ;;AA9BA;;EAEI,WAAA;EACA,eAAA;EACA,qBAAA;AAiCJ","sourcesContent":["/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 50px; /* Location of the box */\n    padding-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #ffffff;\n  }\n  \n/* Modal Content (image) */\n.modal-content {\n    margin: auto;\n    display: block;\n    aspect-ratio: 1/1;\n    max-width: 80%;\n    max-height: 80%;\n}\n  \n/* Caption of Modal Image */\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n  \n/* Add Animation */\n.modal-content, #caption {  \n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n  \n@keyframes zoom {\n    from {transform: scale(0.1)} \n    to {transform: scale(1)}\n}\n  \n/* The Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #5c5c5c;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n  \n#view {\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(255, 255, 255);\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n#view-content {\n    display: flex;\n    height: 80%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color:rgb(107, 107, 107);    \n    animation-name: fadein;\n    animation-duration: 2s;\n}\n\n@keyframes change-color {\n    20% {background-color: rgb(202, 101, 101);}\n    40% {background-color: rgb(103, 103, 182);}\n    80% {background-color: rgb(147, 209, 147);}\n    100% {background-color: rgb(211, 211, 91);}\n}\n\n@keyframes change-size {\n    0% {transform: scale(0.25);}\n    50% {transform: scale(1); background-color: rgb(202, 101, 101);}\n    100% {transform: scale(0.25); background-color: rgb(147, 209, 147);}\n}\n\n.animated-point {\n    margin-top: 20px;\n    height: 100px;\n    width: 100px;\n    background-color: rgb(147, 209, 147);\n    animation-name: change-color;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    cursor: pointer\n}\n\n.animated-point:hover {\n    transform: scale(1.05);\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap');\n\n#after-text {\n    width: 70%;\n    font-family: 'Glory', sans-serif;\n    font-size: 1.5rem;\n    margin: 10px;\n    cursor: default;   \n    white-space: pre-wrap;\n}\n\n.closeX {\n    color:#5c5c5c;\n    font-family: 'Glory', sans-serif;\n    font-size: 3rem;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.closeX:hover,\n.closeX:focus {\n    color: #bbb;\n    cursor: pointer;\n    transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQSxvQkFBb0IsMkRBQWM7QUFDbEM7O0FBRUEsb0JBQW9CLDRDQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9nYWxsZXJ5LmNzcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL21hcC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy90ZXh0Y29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3M/ZGU2NSIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2dhbGxlcnkuY3NzPzYzNGIiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tYXAuY3NzP2RlZmQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3M/YTBhYyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz9iY2JjIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvdGV4dGNvbnRlbnQuY3NzP2E3M2UiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2ZpcnN0dmlldy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvaW1nZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvbWFwLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvdmlkZW9kYXRhLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcm91c2VsIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWRlO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJvdXNlbCA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5jYXJvdXNlbCBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG59XFxuLmNhcm91c2VsIGZpZ3VyZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4uY2Fyb3VzZWwgZmlndXJlIGltZzpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5jYXJvdXNlbCBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAyMHB4IDAgMDtcXG59XFxuLmNhcm91c2VsIG5hdiBidXR0b24ge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbi5jYXJvdXNlbCBuYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY2Fyb3VzZWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFQZ0I7RUFRaEIsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJKO0FBU0k7RUFDRSxjQUFBO0FBUE47QUFVSTtFQUNFLFNBQUE7RUFFQSxVQXRCUztFQXVCVCw0QkFBQTtFQUNBLDBCQUFBO0FBVE47QUFXTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFUUjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQVRWO0FBY0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7RUFDQSxnQkFBQTtBQWJOO0FBZU07RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFmUjtBQWtCTTtFQUNFLHNCQUFBO0FBaEJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxuICBcXG4gIC8vIENhcm91c2VsIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xcbiAgJGl0ZW0td2lkdGg6IDYwJTsgLy8gTm93IHdlIGNhbiB1c2UgcGVyY2VudGFnZXMhXFxuICAkaXRlbS1zZXBhcmF0aW9uOiAwcHg7IC8vIFRoaXMgbm93IGlzIHNldCB3aXRoIEpzXFxuICAkdmlld2VyLWRpc3RhbmNlOiAxMDAwcHg7XFxuICBcXG4gIC5jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyMjIpO1xcbiAgXFxuICAgIHBlcnNwZWN0aXZlOiAkdmlld2VyLWRpc3RhbmNlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgID4gKiB7XFxuICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgIH1cXG4gIFxcbiAgICBmaWd1cmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gIFxcbiAgICAgIHdpZHRoOiAkaXRlbS13aWR0aDtcXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbiAgXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmc6IG1hdGguZGl2KCRpdGVtLXNlcGFyYXRpb24sIDIpO1xcbiAgXFxuICAgICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICBuYXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMjAlO1xcbiAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBtYXJnaW46IDIwcHggMCAwO1xcbiAgXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICBcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcGl4IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNnYWxsZXJ5IHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZyYW1lIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBpY3R1cmU6aG92ZXIge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMC4wMTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUzNjAge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzU5ZGVnKTtcXG4gIH1cXG59XFxuLyogI3Jlc2V0OmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTM2MDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYWxsZXJ5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUFNLHVCQUFBO0VBRVI7RUFERTtJQUFJLDBCQUFBO0VBSU47QUFDRjtBQUZBOzs7R0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGl4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNnYWxsZXJ5IHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gICAgcGFkZGluZzogM3B4OyAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZyYW1lIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5waWN0dXJlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBpY3R1cmU6aG92ZXIge1xcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMC4wMTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUzNjAge1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMzU5ZGVnKTt9XFxufVxcblxcbi8qICNyZXNldDpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUzNjA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsaWJyYXJ5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjVyZW0gMC41cmVtIDAgd2hpdGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2xpYnJhcnkge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI2xpYnJhcnk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXBhIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7QUFHNUI7O0FBQUEsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFHSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNsaWJyYXJ5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTAuNXJlbSAwLjVyZW0gMCB3aGl0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNsaWJyYXJ5IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4jbGlicmFyeTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFwYSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdsb3J5OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxufVxcblxcbi8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKi9cXG4jY2FwdGlvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNjY2M7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4vKiBBZGQgQW5pbWF0aW9uICovXFxuLm1vZGFsLWNvbnRlbnQsICNjYXB0aW9uIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMzVweDtcXG4gIGNvbG9yOiAjNWM1YzVjO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiAjYmJiO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiN2aWV3IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbiN2aWV3LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNmI2YjZiO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlLWNvbG9yIHtcXG4gIDIwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTY1NjU7XFxuICB9XFxuICA0MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc2N2I2O1xcbiAgfVxcbiAgODAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDE5MztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkMzViO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNoYW5nZS1zaXplIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTY1NjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDE5MztcXG4gIH1cXG59XFxuLmFuaW1hdGVkLXBvaW50IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDE5MztcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2UtY29sb3I7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbmltYXRlZC1wb2ludDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jYWZ0ZXItdGV4dCB7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHbG9yeVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLmNsb3NlWCB7XFxuICBjb2xvcjogIzVjNWM1YztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2xvcnlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2xvc2VYOmhvdmVyLFxcbi5jbG9zZVg6Zm9jdXMge1xcbiAgY29sb3I6ICNiYmI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osaUJBQUE7RUFBbUIsd0JBQUE7RUFDbkIsb0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix5QkFBQTtBQVNKOztBQU5BLDBCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFOQSwyQkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVNKOztBQU5BLGtCQUFBO0FBQ0E7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0FBU0o7O0FBTkE7RUFDSTtJQUFNLHFCQUFBO0VBVVI7RUFURTtJQUFJLG1CQUFBO0VBWU47QUFDRjtBQVZBLHFCQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVEE7O0VBRUksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVRBLHdDQUFBO0FBQ0E7RUFDSTtJQUNJLFdBQUE7RUFZTjtBQUNGO0FBUkE7RUFDSSxlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsdUJBQUE7QUFlSjs7QUFaQTtFQUNJO0lBQU0sVUFBQTtFQWdCUjtFQWZFO0lBQUksVUFBQTtFQWtCTjtBQUNGO0FBaEJBO0VBQ0k7SUFBTSxVQUFBO0VBbUJSO0VBbEJFO0lBQUksVUFBQTtFQXFCTjtBQUNGO0FBbkJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQXFCSjs7QUFsQkE7RUFDSTtJQUFLLHlCQUFBO0VBc0JQO0VBckJFO0lBQUsseUJBQUE7RUF3QlA7RUF2QkU7SUFBSyx5QkFBQTtFQTBCUDtFQXpCRTtJQUFNLHlCQUFBO0VBNEJSO0FBQ0Y7QUExQkE7RUFDSTtJQUFJLHNCQUFBO0VBNkJOO0VBNUJFO0lBQUssbUJBQUE7SUFBcUIseUJBQUE7RUFnQzVCO0VBL0JFO0lBQU0sc0JBQUE7SUFBd0IseUJBQUE7RUFtQ2hDO0FBQ0Y7QUFqQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBbUNKOztBQWhDQTtFQUNJLHNCQUFBO0FBbUNKOztBQTlCQTtFQUNJLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWlDSjs7QUE5QkE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWlDSjs7QUE5QkE7O0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWlDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG4gIFxcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxufVxcbiAgXFxuLyogQ2FwdGlvbiBvZiBNb2RhbCBJbWFnZSAqL1xcbiNjYXB0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2NjYztcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4gIFxcbi8qIEFkZCBBbmltYXRpb24gKi9cXG4ubW9kYWwtY29udGVudCwgI2NhcHRpb24geyAgXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XFxufVxcbiAgXFxuQGtleWZyYW1lcyB6b29tIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwLjEpfSBcXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XFxufVxcbiAgXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMzVweDtcXG4gICAgY29sb3I6ICM1YzVjNWM7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbiAgXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuICBcXG4jdmlldyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZW91dCB7XFxuICAgIGZyb20ge29wYWNpdHk6IDE7fVxcbiAgICB0byB7b3BhY2l0eTogMDt9XFxufVxcblxcbiN2aWV3LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOnJnYigxMDcsIDEwNywgMTA3KTsgICAgXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlLWNvbG9yIHtcXG4gICAgMjAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxMDEsIDEwMSk7fVxcbiAgICA0MCUge2JhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMywgMTgyKTt9XFxuICAgIDgwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMjA5LCAxNDcpO31cXG4gICAgMTAwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCA5MSk7fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZS1zaXplIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMC4yNSk7fVxcbiAgICA1MCUge3RyYW5zZm9ybTogc2NhbGUoMSk7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDEwMSwgMTAxKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMC4yNSk7IGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDIwOSwgMTQ3KTt9XFxufVxcblxcbi5hbmltYXRlZC1wb2ludCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMjA5LCAxNDcpO1xcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5hbmltYXRlZC1wb2ludDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdsb3J5OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiNhZnRlci10ZXh0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdHbG9yeScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgICBcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4uY2xvc2VYIHtcXG4gICAgY29sb3I6IzVjNWM1YztcXG4gICAgZm9udC1mYW1pbHk6ICdHbG9yeScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbiAgXFxuLmNsb3NlWDpob3ZlcixcXG4uY2xvc2VYOmZvY3VzIHtcXG4gICAgY29sb3I6ICNiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZWQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRpbGxpdW0gV2ViXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRpbGxpdW0gV2ViXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMXB4KTtcXG59XFxuXFxuLyogI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG59ICovXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksU0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTs7Ozs7OztHQUFBO0FBU0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0k7SUFBTSxVQUFBO0VBQVI7RUFDRTtJQUFJLFVBQUE7RUFFTjtBQUNGO0FBQUE7RUFDSTtJQUFNLFVBQUE7RUFHUjtFQUZFO0lBQUksVUFBQTtFQUtOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2bWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZWQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDFweCk7XFxufVxcblxcbi8qICNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxufSAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAxO31cXG4gICAgdG8ge29wYWNpdHk6IDA7fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HbG9yeTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGV4dC1jb250YWluZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRyZW0gNHJlbSAwIHdoaXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiN0ZXh0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIkdsb3J5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGNvbG9yOiByZWQ7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiByZWQ7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG5ibG9ja3F1b3RlIHtcXG4gIG1hcmdpbi10b3A6IC0xLjVyZW07XFxuICB3aWR0aDogNTUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmFydGljbGUgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiN0ZXh0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90ZXh0Y29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7RUFDeEIsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBRUEsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HbG9yeTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4jdGV4dC1jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHJlbSA0cmVtIDAgd2hpdGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jdGV4dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnR2xvcnknLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuYmxvY2txdW90ZSB7XFxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5hcnRpY2xlIGltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiN0ZXh0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nhcm91c2VsLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbGxlcnkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGV4dGNvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGV4dGNvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpbWdzIH0gZnJvbSAnLi9pbWdkYXRhJztcbmltcG9ydCAnLi9jc3MvY2Fyb3VzZWwuc2Nzcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsICgpIHtcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuICAgIGNhcm91c2VsLmRhdGFzZXQuZ2FwID0gMjA7XG4gICAgY2Fyb3VzZWwuZGF0YXNldC5iZmM7XG5cbiAgICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltYWdlLnNyYyA9IGltZ3NbaV07XG4gICAgICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgfVxuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKGZpZ3VyZSk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IGJ1dHRvblByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvblByZXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiLCBcInByZXZcIik7XG4gICAgYnV0dG9uUHJldi50ZXh0Q29udGVudCA9IFwiUHJldlwiO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbk5leHQuY2xhc3NMaXN0LmFkZChcIm5hdlwiLCBcIm5leHRcIik7XG4gICAgYnV0dG9uTmV4dC50ZXh0Q29udGVudCA9IFwiTmV4dFwiO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvblByZXYpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChidXR0b25OZXh0KTtcblxuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKG5hdik7XG4gICAgcmV0dXJuIGNhcm91c2VsXG59O1xuICBcbmV4cG9ydCBmdW5jdGlvbiBjYXJvdXNlbEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbFwiKTtcbiAgICB2YXIgZmlndXJlID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcImZpZ3VyZVwiKSxcbiAgICAgIG5hdiA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIiksXG4gICAgICBpbWFnZXMgPSBmaWd1cmUuY2hpbGRyZW4sXG4gICAgICBuID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgIGdhcCA9IGNhcm91c2VsLmRhdGFzZXQuZ2FwIHx8IDAsXG4gICAgICBiZmMgPSB0cnVlLFxuICAgICAgdGhldGEgPSAoMiAqIE1hdGguUEkpIC8gbixcbiAgICAgIGN1cnJJbWFnZSA9IDA7XG4gICAgc2V0dXBDYXJvdXNlbChuLCBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoaW1hZ2VzWzBdKS53aWR0aCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHNldHVwQ2Fyb3VzZWwobiwgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGltYWdlc1swXSkud2lkdGgpKTtcbiAgICB9KTtcbiAgXG4gICAgc2V0dXBOYXZpZ2F0aW9uKCk7XG4gIFxuICAgIGZ1bmN0aW9uIHNldHVwQ2Fyb3VzZWwobiwgcykge1xuICAgICAgdmFyIGFwb3RoZW0gPSBzIC8gKDIgKiBNYXRoLnRhbihNYXRoLlBJIC8gbikpO1xuICAgICAgZmlndXJlLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGA1MCUgNTAlICR7LWFwb3RoZW19cHhgO1xuICBcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBpbWFnZXNbaV0uc3R5bGUucGFkZGluZyA9IGAke2dhcH1weGA7XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGltYWdlc1tpXS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgNTAlIDUwJSAkey1hcG90aGVtfXB4YDtcbiAgICAgICAgaW1hZ2VzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7aSAqIHRoZXRhfXJhZClgO1xuICAgICAgfVxuICAgICAgaWYgKGJmYylcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykgaW1hZ2VzW2ldLnN0eWxlLmJhY2tmYWNlVmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIFxuICAgICAgcm90YXRlQ2Fyb3VzZWwoY3VyckltYWdlKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHNldHVwTmF2aWdhdGlvbigpIHtcbiAgICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljaywgdHJ1ZSk7XG4gIFxuICAgICAgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICAgICAgICB2YXIgdCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAodC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgIT0gXCJCVVRUT05cIikgcmV0dXJuO1xuICBcbiAgICAgICAgaWYgKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV4dFwiKSkge1xuICAgICAgICAgIGN1cnJJbWFnZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJJbWFnZS0tO1xuICAgICAgICB9XG4gIFxuICAgICAgICByb3RhdGVDYXJvdXNlbChjdXJySW1hZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gcm90YXRlQ2Fyb3VzZWwoaW1hZ2VJbmRleCkge1xuICAgICAgZmlndXJlLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7aW1hZ2VJbmRleCAqIC10aGV0YX1yYWQpYDtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0ICcuL2Nzcy9tb2RhbC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlldygpIHtcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2aWV3LmlkID0gXCJ2aWV3XCI7XG5cbiAgICBjb25zdCB2aWV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlld0NvbnRlbnQuaWQgPSBcInZpZXctY29udGVudFwiO1xuICAgIHZpZXcuYXBwZW5kQ2hpbGQodmlld0NvbnRlbnQpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRWwgbHVnYXIgZGUgbGFzIFN1cGVyZmljaWVzXCI7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCLDl1wiO1xuICAgIGNvbnN0IGFmdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIGFmdGVyVGV4dC5pZCA9IFwiYWZ0ZXItdGV4dFwiO1xuXG4gICAgY29uc3QgdGV4dCA9IGBcbiAgICBQYXJ0aXIgZGUgdW5hIGltYWdlbiwgcmVjb21wb25lciwgcmVjb25maWd1cmFyLCBleHRyYWVyIGRlIGVsbGEgc3UgbcOtbmltbyBwdW50byBkZSBob21vZ2VuZWlkYWQsIHZhY2lsYXIgYSBwYXJ0aXIgZGUgbGEgc2F0dXJhY2nDs24sIGVsIG1hdGl6LCBlbCBhc3BlY3RvIGNyb23DoXRpY28sIHN1IGludGVuc2lkYWQgeSBlbmNvbnRyYXIgbGEgcG9zaWNpw7NuIGVucmlxdWVjaWRhIGVuIGxhIGN1YWwgbGEgbWlyYWRhIGFjdWRlIGEgbGEgaW5xdWlldHVkLCBhIGxhIGFtYmlnw7xlZGFkIGRlIGxvIGV2ZW50dWFsLCB5YSBubyBlbiBtb3ZpbWllbnRvLCBzaW5vIGNvbW8gdW4gaGVjaG8gY2FwdHVyYWRvIGVuIGVsIGluc3RhbnRlIHF1ZSBzZSBwcm9sb25nYSBlbiBlbCB0aWVtcG8uIFVuIHB1bnRvIGRlIGxhIGltYWdlbiBxdWUgc2UgY29ycmVsYWNpb25hIGRpcmVjdGFtZW50ZSBjb24gb3Ryb3MgbcOtbmltb3MgZWxlbWVudG9zLlxuXG4gICAgRWwgY3VlcnBvIHVyYmFubyBub3MgcG9zaWNpb25hIGNvbnN0YW50ZW1lbnRlIGNvbW8gZXNwZWN0YWRvcmVzIGRlIHBlcXVlw7FhcyByZWFsaWRhZGVzIGZyYWdtZW50YWRhcyBkZSBsYSBjaXVkYWQsIGFsIHRpZW1wbyBlbiBxdWUgZXN0YXMgb3Jnw6FuaWNhbWVudGUgc2UgdmFuIHBvc2ljaW9uYW5kbyBlbiBsYSBzdXBlcmZpY2llIGRlbCBlc2NlbmFyaW8gc29jaWFsLiBFbCBsdWdhciBkZSBsYXMgc3VwZXJmaWNpZXMsIGVzIHVuIGVzcGFjaW8gZGVzZGUgZWwgY3VhbCBzZSBoYWNlIHVuYSBzZXJpZSBkZSBjb25zaWRlcmFjaW9uZXMgdGXDs3JpY2FzIHkgdmlzdWFsZXMsIGFscmVkZWRvciBkZSBhbGd1bmFzIGRpbsOhbWljYXMgc29jaW8tIGVzcGFjaWFsZXMsIHF1ZSBtYW5pZmllc3RhbiBsYSBkaXNvbmFuY2lhIGVuIHF1ZSBzZSByZXZlbGEgbGEgdXJiZTsgY29uIGxhIGludGVuY2nDs24gZGUgY29uc3RydWlyIG51ZXZhcyBzaWduaWZpY2FjaW9uZXMgZSBpbnRlcnJlbGFjaW9uZXMgZGUgbGEgcmVhbGlkYWQgY29uY3JldGEgZGUgbGEgY2l1ZGFkIGRlIE1lZGVsbMOtbiwgZXNwZWPDrWZpY2FtZW50ZSBlbiBsb3Mgc2VjdG9yZXMgcGF0cmltb25pYWxlcywgUHJhZG8gQ2VudHJvLCBCb3N0b24sIHkgTG9zIMOBbmdlbGVzIHkgbGFzIGZvcm1hcyBlc3BhY2lhbGVzIHF1ZSBzZSBnZW5lcmFuIGFsbMOtLiBUb21hbmRvIGNvbW8gbWVkaW8gZWwgYXNwZWN0byBjb211bmljYXRpdm8gZGVsIGNvbG9yLCBjb21vIG1hcmNhamUgdXJiYW5vIHkgY29tbyBlbGVtZW50byBxdWUgc2UgeXV4dGFwb25lIGNvbnN0YW50ZW1lbnRlIGVudHJlIGxhcyBkaW7DoW1pY2FzIHVyYmFuYXMgZGVsIHBhdHJpbW9uaW8gaGFiaXRhZG8geSBhcnF1aXRlY3TDs25pY28uXG4gICAgYDtcblxuICAgIGFmdGVyVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgY29uc3QgY2xvc2VYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2xvc2VYLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVhcIik7XG4gICAgY2xvc2VYLnRleHRDb250ZW50ID0gXCLDl1wiXG5cbiAgICBjb25zdCBhbmltYXRlZFBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbmltYXRlZFBvaW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZC1wb2ludFwiKTtcbiAgICBhbmltYXRlZFBvaW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGVkUG9pbnQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICBhbmltYXRlZFBvaW50LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LnJlbW92ZUNoaWxkKGFuaW1hdGVkUG9pbnQpOyAgICAgICAgICBcbiAgICAgICAgfSwgNDkwKVxuICAgICAgICBwcm9qZWN0VGl0bGUuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICBwcm9qZWN0VGl0bGUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiOyAgIFxuICAgICAgICB9LCA1MDApXG4gICAgICAgIGFycm93LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgYXJyb3cuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmlld0NvbnRlbnQucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoYWZ0ZXJUZXh0KTtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlWCk7XG4gICAgICAgICAgICBhZnRlclRleHQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZWluXCI7XG4gICAgICAgICAgICBhZnRlclRleHQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgfSwgNTAwKVxuICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbG9zZVguc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZWluXCI7XG4gICAgICAgICAgICBjbG9zZVguc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjsgICAgIFxuICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICBcbiAgICB9KVxuICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGFuaW1hdGVkUG9pbnQpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZpZXcucmVtb3ZlQ2hpbGQodmlld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICAgICAgICAgIHZpZXcuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2aWV3KTtcbiAgICAgICAgICAgICAgICB9LCA0OTApXG4gICAgICAgICAgICB9LCA0OTApXG4gICAgICAgIH0pXG4gICAgfSwgMTAwMClcblxuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhcnJvdy5zcmMgPSBcImh0dHA6Ly9hMXNpdGVzLmNvbS9GcmVlSW1hZ2VzL0ZyZWVfQ2xpcF9BcnQvaW1hZ2VzL2Fycm93L3VwX2Fycm93X2NsaXAucG5nXCI7XG4gICAgYXJyb3cuc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcbiAgICBhcnJvdy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChhcnJvdyk7XG5cbiAgICByZXR1cm4gdmlld1xufSIsImltcG9ydCB7bW9kYWx9IGZyb20gJy4vbW9kYWwuanMnO1xuaW1wb3J0IHsgdmlkZW9zIH0gZnJvbSAnLi92aWRlb2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9nYWxsZXJ5LmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbGxlcnlDb250ZW50KCkge1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbGxlcnkuaWQgPSBcImdhbGxlcnlcIjtcblxuICAgIGNvbnN0IGNyZWF0ZURpdkZyYW1lID0gKHZpZGVvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdlRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdlRhZy5jbGFzc0xpc3QuYWRkKFwiZnJhbWVcIik7XG4gICAgICAgIGRpdlRhZy5hcHBlbmQodmlkZW8pO1xuICAgICAgICByZXR1cm4gZGl2VGFnXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVmlkID0gKHNyYywgY29sb3IsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZpZFRhZy5pZCA9IGluZGV4O1xuICAgICAgICB2aWRUYWcuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIHZpZFRhZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdmlkVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRUYWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG4gICAgICAgICAgICBjb25zdCB2aWRlb1NvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gICAgICAgICAgICB2aWRlb1NvdXJjZS5zcmMgPSBzcmM7XG4gICAgICAgICAgICB2aWRlb1NvdXJjZS50eXBlID0gXCJ2aWRlby9tcDRcIjtcbiAgICAgICAgICAgIGlmIChtb2RhbENvbnRlbnQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgICAgICAgICAgIG1vZGFsQ29udGVudC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQubG9vcCA9IHRydWU7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LnN0eWxlLndpZHRoID0gXCI2MDBweFwiO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LnN0eWxlLmhlaWdodCA9IFwiNjAwcHhcIjtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh2aWRlb1NvdXJjZSk7XG4gICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdmlkVGFnXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWRlb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgdmlkc3JjID0gdmlkZW9zW2ldLnNyYztcbiAgICAgICAgY29uc3QgdmlkQ29sb3IgPSB2aWRlb3NbaV0ucmdiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdmlkUGljdHVyZSA9IGNyZWF0ZVZpZCh2aWRzcmMsIHZpZENvbG9yLCBpKTtcbiAgICAgICAgY29uc3QgZGl2RnJhbWUgPSBjcmVhdGVEaXZGcmFtZSh2aWRQaWN0dXJlKTtcbiAgICAgICAgXG4gICAgICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoZGl2RnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZXNldC5pZCA9IFwicmVzZXRcIjtcbiAgICAvLyByZXNldC50eXBlID0gXCJidXR0b25cIjtcbiAgICByZXNldC5zcmMgPSBcImh0dHBzOi8vZnVydGFldi5ydS9wcmV2aWV3L3VuZG9fc21hbGwucG5nXCI7XG4gICAgcmVzZXQuc3R5bGUud2lkdGggPSBcIjUwcHhcIlxuICAgIHJlc2V0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIC8vIHJlc2V0LnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlc2V0LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcInJvdGF0ZTM2MFwiO1xuICAgICAgICByZXNldC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICBjb25zdCBwaWN0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGljdHVyZVwiKTtcbiAgICAgICAgcGljdHVyZXMuZm9yRWFjaChwaWN0dXJlID0+IHtcbiAgICAgICAgICAgIHBpY3R1cmUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNldC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHJlc2V0LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCJcIjtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHBpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGl4LmlkID0gXCJwaXhcIjtcbiAgICBwaXguYXBwZW5kQ2hpbGQoZ2FsbGVyeSk7XG4gICAgcGl4LmFwcGVuZENoaWxkKHJlc2V0KTtcblxuICAgIHJldHVybiBwaXhcbn0iLCJpbXBvcnQgY2Fyb3VzZWwxIGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTEuanBnJztcbmltcG9ydCBjYXJvdXNlbDIgZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtMi5qcGcnO1xuaW1wb3J0IGNhcm91c2VsMyBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC0zLmpwZyc7XG5pbXBvcnQgY2Fyb3VzZWw0IGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTQuanBnJztcbmltcG9ydCBjYXJvdXNlbDYgZnJvbSAnLi9pbWFnZXMvY2Fyb3VzZWwtNi5qcGcnO1xuaW1wb3J0IGNhcm91c2VsNyBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC03LmpwZyc7XG5pbXBvcnQgY2Fyb3VzZWw4IGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTguanBnJztcblxuZXhwb3J0IGNvbnN0IGltZ3MgPSBbXG4gICAgY2Fyb3VzZWwxLCBjYXJvdXNlbDIsIGNhcm91c2VsMywgY2Fyb3VzZWw0LCBjYXJvdXNlbDYsXG4gICAgY2Fyb3VzZWw3LCBjYXJvdXNlbDgsXG5dO1xuXG5pbXBvcnQgbWFwYTAgZnJvbSAnLi9pbWFnZXMvbWFwYS0wLmpwZyc7XG5pbXBvcnQgbWFwYTEgZnJvbSAnLi9pbWFnZXMvbWFwYS0xLmpwZyc7XG5pbXBvcnQgbWFwYTIgZnJvbSAnLi9pbWFnZXMvbWFwYS0yLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtYXBhcyA9IFtcbiAgICBtYXBhMCwgbWFwYTEsIG1hcGEyLFxuXSIsImltcG9ydCB7IG1hcGFzIH0gZnJvbSAnLi9pbWdkYXRhJztcbmltcG9ydCAnLi9jc3MvbWFwLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXBzTGlicmFyeSgpIHtcbiAgICBjb25zdCBsaWJyYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaWJyYXJ5LmlkID0gXCJsaWJyYXJ5XCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwibWFwYVwiKTtcbiAgICAgICAgaW1nLnNyYyA9IG1hcGFzW2ldO1xuICAgICAgICBsaWJyYXJ5LmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpYnJhcnlcbn0iLCJpbXBvcnQgJy4vY3NzL21vZGFsLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5pZCA9IFwibW9kYWxcIjtcbm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbW9kYWwuY2hpbGROb2Rlc1sxXS5yZW1vdmUoKTtcbn0pXG5jbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiw5dcIlxubW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4iLCJpbXBvcnQgJy4vY3NzL3RleHRjb250ZW50LmNzcyc7XG5pbXBvcnQgaW1nVGV4dCBmcm9tICcuL2ltYWdlcy9pbmljaW8tdGV4dC0xLmpwZyc7XG5cbmNvbnN0IHRleHQgPSBgXG48aDI+UmVmbGV4aW9uZXMgYSBwcm9ww7NzaXRvIGRlIGhhYml0YXIgZWwgZXNwYWNpbyBww7pibGljbyBjb21vIGFjdG8gZGlzcnVwdGl2byBmcmVudGUgYSBsYSBwbGFuaWZpY2FjacOzbiB1cmJhbmEsIGVuIGxvcyBiYXJyaW9zIHBhdHJpbW9uaWFsZXMgZGUgbGEgY2l1ZGFkIGRlIE1lZGVsbMOtbi0gUHJhZG8gY2VudHJvLCBCb3N0b24sIHkgTG9zIMOBbmdlbGVzLjwvaDI+XG48aW1nIHNyYz0ke2ltZ1RleHR9PiBcbjxwPkVzdGUgcHJveWVjdG8gaW52ZXN0aWdhdGl2bywgc3VyZ2UgZHVyYW50ZSBtaSBwZXJtYW5lbmNpYSBlbiBsYSBjaXVkYWQgZGUgTWVkZWxsw61uLCBhIHBhcnRpciBkZSBsYSBhdGVuY2nDs24gZW4gYWxndW5hcyBkaW7DoW1pY2FzIHNvY2lvIC0gZXNwYWNpYWxlcywgcXVlIG1hbmlmaWVzdGFuIGxhIGRpc29uYW5jaWEgZW4gcXVlIHNlIHJldmVsYSBsYSB1cmJlIHkgbGFzIGN1YWxlcyBwZXJtaXRlbiBjb25zdHJ1aXIgbnVldmFzIHNpZ25pZmljYWNpb25lcywgZSBpbnRlcnByZXRhY2lvbmVzIGRlIGxhIHJlYWxpZGFkIGNvbmNyZXRhLjwvcD5cbjxwPkxhIGNpdWRhZCBzZSBwcmVzZW50YSBjb21vIHVuIHNpc3RlbWEgY29tcGxlam8sIGVuIGVsIGN1YWwgY29uZmx1eWVuIHVuIHNpbm7Dum1lcm8gZGUgY2F0ZWdvcsOtYXMgc29jaWFsZXMsIGVjb27Ds21pY2FzIHkgcG9sw610aWNhczsgdW5hIG11bHRpcGxpY2lkYWQgZGUgZXNmZXJhcyB1cmJhbmFzIHkgcHLDoWN0aWNhcyBjb3RpZGlhbmFzIGNvbnRyYXJpYXMsIGVuIHBlcm1hbmVudGUgdHJhbnNmb3JtYWNpw7NuLiAgRXN0YSBtYW5pZmVzdGFjacOzbiBoZXRlcsOzY2xpdGEgZGUgbGEgc29jaWVkYWQgb3NjaWxhIGVudHJlIGxhIGNvbnRlbmNpw7NuIHkgZWwgYWNvbnRlY2VyIGRlIGxvIGVzcG9udMOhbmVvIHF1ZSBlbWVyZ2UgZGUgZXNjZW5hcmlvcyBhbHRlcm5vcywgeSBzaXJ2ZSBjb21vIHB1bnRvIGRlIHBhcnRpZGEgZGUgdW5hIHNlcmllIGRlIGNvbnNpZGVyYWNpb25lcywgZW4gdG9ybm8gYSBsYSBvY3VwYWNpw7NuIGRlbCBlc3BhY2lvIHDDumJsaWNvLCB5IGxhcyBmb3JtYXMgZXNwYWNpYWxlcyBxdWUgc2UgZ2VuZXJhbiBhbGzDrS48L3A+XG48cD5UZW5pZW5kbyBjb21vIHJlZmVyZW5jaWEgYWxndW5hcyBwcm9ibGVtw6F0aWNhcyBzb2NpYWxlczsgY29tbyBsYSBub3RhYmxlIHByZXNlbmNpYSBkZSBwZXJzb25hcyBlbiBjb25kaWNpw7NuIGRlIGNhbGxlICZsdCBoYWJpdGFudGUgZGUgY2FsbGUgJmd0LCAgZWwgbWljcm90csOhZmljbywgbGEgcHJvc3RpdHVjacOzbiwgZWwgY29tZXJjaW8gaW5mb3JtYWwsIGVudHJlIG90cmFzIHByw6FjdGljYXMgaXJyZWd1bGFyZXMsIGVuIHJlbGFjacOzbiBjb24gZWwgbHVnYXIgcXVlIG9jdXBhbiwgZW5jdWVudHJvIHVuYSBub3RhYmxlIGNvcnJlc3BvbmRlbmNpYSBjb24gZWwgc2VjdG9yIHBhdHJpbW9uaWFsIGRlIE1lZGVsbMOtbi4gRWwgYmFycmlvIFByYWRvIGNlbnRybywgTG9zIMOBbmdlbGVzIHkgcGFydGUgZGVsIHNlY3RvciBkZSBCb3N0b24uIEFsbMOtIHNlIHByZXNlbnRhbiB2w61uY3Vsb3MgcXVlIGV2aWRlbmNpYW4gbG9zIGNvbnRyYXN0ZXMgeSBkZXNhcnRpY3VsYW4gbGEgaW1hZ2VuIGRlIGxhIGNpdWRhZCwgY3Vlc3Rpb25hbmRvIGxhIGlndWFsZGFkIGRlIGFjY2VzbyBhbCBlc3BhY2lvIHDDumJsaWNvLCBlbCBkZXNwbGF6YW1pZW50byBjb25zdGFudGUgZGVsIHBhdHJpbW9uaW8gaGFiaXRhZG8sIGVsIGFycXVpdGVjdMOzbmljbyB5IGxhIHDDqXJkaWRhIGRlIGxhIG1lbW9yaWEgdXJiYW5hLjwvcD5cbjxwPkVsIGNvbG9yIGRldmllbmUgYSBtb2RvIGRlIHBhbGV0YSBkZSBjaXVkYWQsIGNvbW8gbWFyY2FqZSB1cmJhbm8sIGZhY2hhZGEgeSBjb21vIGVsZW1lbnRvIHF1ZSBzZSB5dXh0YXBvbmUgY29uc3RhbnRlbWVudGUgZW50cmUgbGFzIGRpbsOhbWljYXMgdXJiYW5hcyBkZWwgcGF0cmltb25pbyBoYWJpdGFkbyB5IGFycXVpdGVjdMOzbmljby48L3A+XG48cD4qPC9wPlxuPHA+RWwgZXNwYWNpbyBww7pibGljbyB5IGNhZGEgdW5vIGRlIGxvcyBlbGVtZW50b3MgdXJiYW5vcyBxdWUgbG8gY29tcG9uZW4sIHNlIGhhIGlkbyBjb252aXJ0aWVuZG8gY2FkYSB2ZXogbcOhcywgZW4gdW4gbWVkaW8gcGVydGluZW50ZSBlbiBlbCBjdWFsIHNlIGV4cG9uZW4gbGFzIHByb2JsZW3DoXRpY2FzIHkgbGFzIGNvbmRpY2lvbmVzIHNvY2lhbGVzIGRlIHVuIGx1Z2FyOyBhbGzDrSwgc2UgcmV2ZWxhbiBsYXMgaW5jb25zaXN0ZW5jaWFzIHF1ZSBkZXNkZSBhbnRlcyBoYW4gZXhpc3RpZG8sIGluY29udGVuaWJsZXMgZW4gZWwgZGV2ZW5pciBkZSBudWVzdHJhIHNvY2llZGFkLjwvcD5cbjxwPkEgbW9kbyBkZSBhcHJvcGlhY2lvbmVzIGRlbCBlc3BhY2lvLCBjb21vIG1hcmNhamVzLCBvY3VwYWNpb25lcyB0ZW1wb3JhbGVzIGRlbCBlc3BhY2lvIHDDumJsaWNvIG8gYSB0cmF2w6lzIGRlIHBpbnRhZGFzIG8gZ3JhZml0aXMgY2FsbGVqZXJvcywgcXVlIGFsdGVyYW4gZWwgcGFpc2FqZSB1cmJhbm8sIGRlc2FydGljdWxhbmRvIGFzw60sIGxhcyBwb2zDrXRpY2FzIGRlIGxpbmVhbGlkYWQgeSByZWd1bGFjacOzbiBmcmVudGUgYSBsYSBvY3VwYWNpw7NuIGRlIGVzdGU7IGFkcXVpZXJlbiB1biBwb2RlciBlc2VuY2lhbCwgbG9zIGVsZW1lbnRvcyB1cmJhbm9zLCBjb21vIHZpbmN1bGFjacOzbiBlc3BlY2lmaWNhIGVudHJlIGxhIG5lY2VzaWRhZCBkZSBkZW51bmNpYXIgeSBhIGxhIHZleiB0cmFuc2Zvcm1hci4gPC9wPlxuPHA+Kio8L3A+XG48cD5FbiBtZWRpbyBkZSBhbGd1bmFzIGVzdHJhdGVnaWFzIGRlIHJlY3VwZXJhY2nDs24gZSBpbnRlcnZlbmNpw7NuLCBkZSBsYXMgZmFjaGFkYXMgZGUgbGFzIGFudGlndWFzIGNhc2FzIGRlbCBiYXJyaW8gUHJhZG8gQ2VudHJvIGVuIE1lZGVsbMOtbiwgcXVlIHNlIGhhbiBoZWNobyBhIHRyYXbDqXMgZGUgbGEgYWRtaW5pc3RyYWNpw7NuIG11bmljaXBhbDsgY29tbyBwcm9jZXNvcyBkZSBwZWF0b25hbGl6YWNpw7NuLCBwaW50dXJhIGRlIGZhY2hhZGFzIHkgcmVjdXBlcmFjacOzbiBkZWwgY29sb3I7IGVtZXJnZW4gZ3JhZml0aXMgY2FsbGVqZXJvcywgYSBwYXJ0aXIgZGUgZ2VzdG9zIGVzcG9udMOhbmVvcyB5IHZlbG9jZXM7IGVzdGFzIGV4cHJlc2lvbmVzIHZpc3VhbGVzLCBzZSB5dXh0YXBvbmVuIHNvYnJlIGVsIHBhaXNhamUgYXJxdWl0ZWN0w7NuaWNvLCB0cmFuc2Zvcm3DoW5kb2xvIHkgIGFwb2RlcsOhbmRvc2UgcGF1bGF0aW5hbWVudGUgZGUgw6lsLCBjb21vIHVuIG1lZGlvIHRyYW5zZ3Jlc29yIHkgZGUgZGVudW5jaWEsIGNhc2kgcHJvcGljaWFuZG8gdW4gcmVjb3JyaWRvIGVzcGFjaWFsIHF1ZSBhZ2l0YSB2aXN1YWxtZW50ZSAgbGEgYXBhcmVudGUgcmVjdGl0dWQgZGUgbGEgZXN0w6l0aWNhIGFycXVpdGVjdMOzbmljYSB5IGVsIG1vYmlsaWFyaW8gdXJiYW5vLCBxdWUgc2UgaW50ZW50YSByZXNlcnZhciB5IG1hbnRlbmVyIGhlcm3DqXRpY28gYW50ZSBjdWFscXVpZXIgYXNvbW8gZGUgY29udHJhcmllZGFkLjwvcD5cbjxwPkxhcyBwaW50YWRhcyBvIGdyYWZpdGlzLCB2aXNpYmlsaXphbiBlbCBlc3RhZG8gZGUgbGEgc29jaWVkYWQgaW5jb25mb3JtZSwgcXVlIHNlIHByb3llY3RhIHBvciBmdWVyYSBkZSBsbyBhcHJvcGlhZG8geSBsbyBoZWdlbcOzbmljbywgcmVjb25maWd1cmFuZG8gZWwgZXNwYWNpbyBhbCBwYXNvIGRlIGxvcyBkw61hcywgZGUgbWFuZXJhIG9yZ8OhbmljYSB5IGVuIHNpbnRvbsOtYSBhIGxvcyBzZW50aW1pZW50b3MgZGUgc3VzIHJlYWxpemFkb3JlczsgZGUgZXN0ZSBtaXNtbyBtb2RvLCBlbXBpZXphbiBhIHJlc2lzdGlyc2UgYSBsb3MgcHJpbmNpcGlvcyBkZWwgdXJiYW5pc21vLCBwZXJzb25hcyBxdWUgYWNvZ2VuIHkgY3JlYW4gbnVldmFzIGZvcm1hcyBkZSB1cmJhbmlzbW8geSBlc3TDqXRpY2FzIHVyYmFuYXMsIHBhcmFsZWxhcyBhIGxhcyBkZSBsYSBjaXVkYWQgcGxhbmlmaWNhZGEuIENvbnRyYXJyZXN0YW5kbyBhc8OtLCBsYSBpbXBvc2ljacOzbiBpbnN0aXR1Y2lvbmFsLCBhIHRyYXbDqXMgZGUgZXF1aXBhbWllbnRvcyBubyBjb252ZW5jaW9uYWxlcyBxdWUgc2UgZGVzcGxpZWdhbiBvY2FzaW9uYWxtZW50ZSBlbiBlbCBlc3BhY2lvIHkgZG9ibGVnYW4gbGFzIHBvbMOtdGljYXMgZGUgb3JkZW4gcMO6YmxpY28sIGRlIG1hbmVyYSBkaXNydXB0aXZhLjwvcD5cbjxwPlBlcm8gZXN0b3MgbW9kb3MgZGUgb2N1cGFjacOzbiB0ZW1wb3JhbCBkZWwgZXNwYWNpbyBww7pibGljbywgcXVlIGVuIGFsZ3Vub3MgY2Fzb3Mgc2UgcHVlZGVuIG1hbmlmZXN0YXIgY29tbyB1biBnZXN0byBsaWJyZSwgZGUgc2ltcGxlIGlycmV2ZXJlbmNpYSwgIGxlIGhhY2VuIGZyZW50ZSBhIHByb2Z1bmRhcyBwcm9ibGVtw6F0aWNhcyBzb2NpYWxlcyBkZSBkZXNpZ3VhbGRhZCBlIGluZXN0YWJpbGlkYWQsIGEgdW5hIHByZWNhcmllZGFkIHBvbMOtdGljYSB5IGVjb27Ds21pY2EsIHF1ZSBkZSBhbGfDum4gbW9kbyBzZSBlbmN1ZW50cmEgbm9ybWFsaXphZGEsIHkgZGUgbGEgY3VhbCBzdXJnZW4gc29sdWNpb25lcyBwb3IgaW5zdGludG8gZGUgc3VwZXJ2aXZlbmNpYS48L3A+XG48YmxvY2txdW90ZT5cbiZxdW90Vml2aW1vcyBlbiB1bmEgZXJhIGVuIGxhIHF1ZSBsb3MgaWRlYWxlcyBkZSBsb3MgZGVyZWNob3MgaHVtYW5vcyBzZSBoYW4gY29sb2NhZG8gZW4gZWwgY2VudHJvIGRlIGxhIGVzY2VuYSB0YW50byBwb2zDrXRpY2EgY29tbyDDqXRpY2FtZW50ZS4gU2UgaGEgZ2FzdGFkbyB1bmEgZ3JhbiBjYW50aWRhZCBkZSBlbmVyZ8OtYSBlbiBwcm9tb3ZlciBzdSBzaWduaWZpY2FkbyBwYXJhIGxhIGNvbnN0cnVjY2nDs24gZGUgdW4gbXVuZG8gbWVqb3IsIGF1bnF1ZSBsYSBtYXlvcsOtYSBkZSBsb3MgY29uY2VwdG9zIHF1ZSBjaXJjdWxhbiBubyBkZXNhZsOtYW4gZnVuZGFtZW50YWxtZW50ZSBsYXMgbMOzZ2ljYXMgZGUgbWVyY2FkbyBsaWJlcmFsZXMgeSBuZW9saWJlcmFsZXMgbyBsb3MgbW9kb3MgZG9taW5hbnRlcyBkZSBsZWdhbGlkYWQgeSBkZSBhY2Npw7NuIGVzdGF0YWwuIFZpdmltb3MsIGRlc3B1w6lzIGRlIHRvZG8sIGVuIHVuIG11bmRvIGVuIGVsIHF1ZSBsb3MgZGVyZWNob3MgYSBsYSBwcm9waWVkYWQgcHJpdmFkYSB5IGVsIGJlbmVmaWNpbyBhcGxhc3RhbiB0b2RhcyBsYXMgZGVtw6FzIG5vY2lvbmVzIGRlIGRlcmVjaG9zLiZxdW90XG5cbiAgICAtRGF2aWQgSGFydmV5LCBlbCBkZXJlY2hvIGEgbGEgY2l1ZGFkLlxuPC9ibG9ja3F1b3RlPlxuPHA+TGEgcHJlc2VuY2lhIGRlIGVzdGFzIHBlcnNvbmFzIHkgc3VzIG9jdXBhY2lvbmVzLCBzZSBjb252aWVydGUgZW4gdW4gbWFyY2FqZSBzb2NpYWwsIHF1ZSBzZcOxYWxhLCBwcm92ZWUgZGUgY2llcnRhcyBjYXJhY3RlcsOtc3RpY2FzIHkgY29uZmlndXJhIGxhIHJlbGFjacOzbiBkZWwgcmVzdG8gZGUgbG9zIGhhYml0YW50ZXMgZGUgbGEgY2l1ZGFkIGNvbiBlbCBiYXJyaW8uIFNvbiBlc3RhcyBwcsOhY3RpY2FzIGlycmVndWxhcmVzLCBsYXMgcXVlIGFjZW50w7phbiBkZSBhbGfDum4gbW9kbyBlbCBwYXRyaW1vbmlvIGhhYml0YWRvIGRlIHVuIGx1Z2FyIGVuIGVsIHF1ZSBsYXMgdml2aWVuZGFzIGhhbiBxdWVkYWRvIHJlbGVnYWRhcyBhIGluc3RpdHVjaW9uZXMsIGRvbmRlIGRlIHB1ZXJ0YXMgcGFyYSBhZGVudHJvIHNlIHRlamVuIHJlbGFjaW9uZXMsIHBlcm8gcXVlIGVuIHN1cyBjYWxsZXMsIG5vIGV4aXN0ZSBuZWNlc2FyaWFtZW50ZSB1biB2w61uY3VsbyBjb211bml0YXJpby4gIENvbiB0b2RvIGVzdG8gc2UgY3JlYW4gbGltaXRhbnRlcyBxdWUgaGFjZW4gcGFydGUgZGUgbGEgY29uc3RydWNjacOzbiBzb2NpYWwsICB1bmEgc2Vuc2FjacOzbiBkZSBpbnNlZ3VyaWRhZCwgcXVlIGNvbW8gbG8gc2XDsWFsYSBKYW5lIEphY29icyBhY2VyY2EgZGUgbG9zIG9qb3MgZW4gbGEgY2FsbGUsIGRldGVybWluYW4gbGEgcG9zdHVyYSBxdWUgc2UgdGllbmUgY29uIGxhcyBjYWxsZXMgZGVsIGJhcnJpbyB5IGNvbiBlc3RhcyBtaXNtYXMgcHLDoWN0aWNhcyB5IHBlcnNvbmFzLCBxdWUgZGUgYWxnw7puIG1vZG8gc2UgbGVzIG1hcmdpbmEuPC9wPlxuPHA+KioqPC9wPlxuPGgzPkVuIHRpZW1wb3MgZGUgcGFuZGVtaWEuPC9oMz5cbjxwPkVsIGNvbnRleHRvIGRlIGxhIGVtZXJnZW5jaWEgc2FuaXRhcmlhIHBvciBDb3ZpZCAxOSwgZXZpZGVudGVtZW50ZSBjb25kaWNpb27DsyBsYSBtYW5lcmEgY29tbyBub3MgcmVsYWNpb25hbW9zIGNvbiBlbCBlc3BhY2lvIHDDumJsaWNvIHkgY29uIGxvcyBkZW3DoXMgaGFiaXRhbnRlcyBkZSBsYSBjaXVkYWQuPC9wPlxuPHA+RXN0ZSBoYSBzaWRvIHVuIGRldG9uYW50ZSBxdWUgaGEgcGVybWl0aWRvIG1heW9yIHZpc2liaWxpZGFkIGEgIGxhcyBkaXZlcnNhcyBwcm9ibGVtw6F0aWNhcyBzb2NpYWxlcyBxdWUgc2UgaW50ZW5zaWZpY2Fyb24gZW4gbWVkaW8gZGUgbGEgc2l0dWFjacOzbiwgZW4gdGVtYXMgZWNvbsOzbWljb3MgeSBlc3BhY2lhbGVzLjwvcD5cbjxwPkVzIGRlIGFsbMOtLCBjb21vIGVsIGFuZMOpbiBkZWwgZXNwYWNpbyBww7pibGljbyBlbiBlbCBiYXJyaW8sIHF1ZSBwZXJtYW5lY2UgZGlzcHVlc3RvLCBwYXNhIGRlIGNvbnRlbXBsYXIgeSBkZSBzZXIgZWwgZXNjZW5hcmlvIGRlc2RlIGRvbmRlIHNlIGF0aWJvcnJhIHkgc3VjZWRlIGxhIGNvdGlkaWFuaWRhZCBzb2NpYWwgaW5tZWRpYXRhLCBhIHNlciBjb250ZW1wbGFkbywgcXVlZGEgZGVzcHJvdmlzdG8gZGUgdG9kbyB0aXBvIGRlIGNvbWVyY2lvLiBMb3MgY29uZGljaW9uYW1pZW50b3MgZGUgZXN0ZSBlc3BhY2lvLCBzZSBoYWNlbiBtw6FzIG5vdGFibGVzLCBzZSBhY2VudMO6YSBsYSBuZWdhY2nDs24gZGUgdW4gZXNwYWNpbyBww7pibGljbyBwYXJhIGVsIHZlbmRlZG9yIGFtYnVsYW50ZSwgZG9uZGUgc29icmVzYWxlIGVsIHLDrWdpZG8gY29udHJvbCBxdWUgc2llbXByZSBoYSBleGlzdGlkbyBmcmVudGUgYSBlc3RlIGVsZW1lbnRvIGRlbCB1cmJhbmlzbW8gcXVlIHNlIHN1cG9uZSBwYXJhIHNlciB2aXZlbmNpYWRvLjwvcD4gXG48cD5BIGZ1ZXJ6YSwgc2UgZW5mYXRpemEgZWwgZWplcmNpY2lvIGRlIHJlYmVsZMOtYSwgcXVlIGhhY2UgY290aWRpYW5hbWVudGUgZWwgaGFiaXRhbnRlIC0gdmVuZGVkb3IgYW1idWxhbnRlLCBxdWUgZW4gc3UgcHLDoWN0aWNhIGdlbmVyYSBsYXpvcyBzb2NpYWxlcyB5IGRlc2RlIGRvbmRlIHNlIHRlamVuIGNvbmZyb250YWNpb25lcyB5IGNvbnZpdmVuY2lhcyBlc3BhY2lhbGVzLCBxdWUgcG9zaWJpbGl0YW4gbGEgZXhwZXJpZW5jaWEgc29jaWFsIGRlbCB2ZWNpbmRhcmlvLjwvcD5cbjxwPkRlIG1vZG8gY29udHJhcmlvLCBlc3RlIGFuZMOpbiBkZWwgZXNwYWNpbyBww7pibGljbyBwYXJhIGxvcyBoYWJpdGFudGVzIGRlIGxhIGNhbGxlLCBsYXMgcGVyc29uYXMgcXVlIGRlYmVuIHZpdmlyIGFsbMOtLCAgc2UgaGEgdnVlbHRvIHVuIGVzcGFjaW8gZGUgcmVmdWdpbyBvY2FzaW9uYWwsIHN1IGFjdG8gZGUgcmViZWxkw61hIGZyZW50ZSBhIGxhIG5lZ2FjacOzbiBkZWwgaGFiaXRhciBsYSBjYWxsZSBlbiB0aWVtcG9zIGRlIHBhbmRlbWlhLCBlcyBzZW5jaWxsYW1lbnRlIHVuYSBwcmVzZW50YWNpw7NuIGRlIGxhIG1hcmdpbmFsaWRhZC4gTGEgb2N1cGFjacOzbiBlZsOtbWVyYSB5IGNhbWJpYW50ZSBxdWUgaGFjZSBlbCBoYWJpdGFudGUgZGUgZXN0ZSBzaXRpbywgdHJhbnNncmVkZSBsYSBleHBlY3RhdGl2YSBzb2NpYWwuPC9wPlxuPHA+RW4gbWVkaW8gZGVsIGVjbGVjdGljaXNtbyBhcnF1aXRlY3TDs25pY28gZGUgYmFycmlvLCBzZSBwcmVzZW50YSBlbCBzdWVsbyBjb21vIHJlZnVnaW8sIHNvbWJyYSB5IGRlc2NhbnNvLCBhY29nZSB1bmEgcHJlc2VuY2lhIHRhbiBzb2xvIHZpc3RhLCBzaXF1aWVyYSBjYXBheiBkZSBzZXIgcGVyY2liaWRhLCBjb21vIHVuIHNvYnJlc2FsdG8gYSBsYSB2aXN0YSwgcXVlIHBhcnRpY3VsYXJtZW50ZSByb21wZSBsYSBjb250aW51aWRhZCB5IHByb2R1Y2UgcHJlY2F1Y2nDs24gZW4gZWwgdHJhbnNlw7pudGUuPC9wPlxuPHA+KioqKjwvcD5cbjxwPkVuIMOpcG9jYXMgZGUgY29uZWN0aXZpZGFkIHZpcnR1YWwsIGVsIHNlcnZpZG9yIHdlYiBTdHJlZXQgdmlldyBlbmNhcHN1bGEsIHkgZXRlcm5pemEgcG9yIHRpZW1wb3MgbWVkaWFuYW1lbnRlIGR1cmFkZXJvcywgYWNvbnRlY2ltaWVudG9zIGRlbCBlc3BhY2lvIHDDumJsaWNvIGhhYml0YWRvIHF1ZSBpZGVvbMOzZ2ljYW1lbnRlIGhhbiBpbnRlbnRhZG8gc2VyIGRpc2ltdWxhZG9zIGVuIGxhIHJlYWxpZGFkIGNvbmNyZXRhLiBDb21vIHVuYSBnYWxlcsOtYSBkZSBsYSByZWFsaWRhZCB0YWwgY3VhbCBlcywgc2luIGRlc2Fwcm9iYWNpw7NuIGFsZ3VuYSwgZnJhZ21lbnRvcyBkZSB2aXZlbmNpYXMgZXNwYWNpYWxlcyB5IGFjb250ZWNpbWllbnRvcyBlc3BvbnTDoW5lb3MgZGUgbGEgc29jaWVkYWQsIHF1ZWRhbiBjb25nZWxhZG9zIHkgc2UgdnVlbHZlbiB1bml2ZXJzYWxlcy48L3A+XG48cD5EZXNkZSBsbyBtZWRpYW5hbWVudGUgbGVqYW5vLCBzdXJnZW4gZm9ybWFzLCBxdWUgdGllbmRlbiBhIHZvbHZlcnNlIGluZGVzY2lmcmFibGVzLCBjb21vIHBlcXVlw7FhcyBpbnNpbnVhY2lvbmVzIGRlIGNvbG9yLCBjYXNpIGNvbiB1biBhc3BlY3RvIGRlIGPDs2RpZ28gZGUgY2l1ZGFkLCBtdWx0aWZvcm1lLCB5IGVtcGllemFuIGEgYWRxdWlyaXIgdW4gYXNwZWN0byBkZSBzZcOxYWxhbWllbnRvIHNvYnJlIGVsIHBhaXNhamUgdXJiYW5vLCBxdWUgc29icmVzYWxlLiBQYXNhamVzIGRlIHNlcmVzIGh1bWFub3MgZW4gc2l0dWFjaW9uZXMgcXVlIGVuYWx0ZWNlbiBsYSBzdWJqZXRpdmlkYWQgcXVlIGxvcyBjb21wb25lLCBvIGZvcm1hcyBzZW1pZXNjb25kaWRhcyBkZXRyw6FzIGRlIMOhcmJvbGVzLCBlc2NhbG9uZXMsIGJvbHNhcywgZW50cmUgb3Ryb3M7IHF1ZSBzdWdpZXJlbiBsYSBwcmVzZW5jaWEgZGUgdW4gY3VlcnBvIGh1bWFubyBhcHJvcGlhZG8gYSBzdSBhbnRvam8gZGVsIGVzcGFjaW8gcMO6YmxpY28uIEFsZ3VuYXMgZGUgZXN0YXMgcGVyc29uYXMsIHRyYWVuIGNvbnNpZ28gZWxlbWVudG9zLCBxdWUgZGUgbW9kbyBpbmdlbmlvc28gc2UgY29udmllcnRlbiBlbiBjb25zdHJ1Y2Npb25lcyBoYWJpdGFibGVzIHRlbXBvcmFsZXMgeSB0cmFuc3BvcnRhYmxlcywgcXVlIHN1Z2llcmVuIHF1aXrDoXMgdW5hIHByZWd1bnRhIHBvciBsbyBlc2N1bHTDs3JpY28sIHF1aXrDoXMgY29tbyBvdHJhIHBvc2liaWxpZGFkIGVudHJlIGxhIGFycXVpdGVjdHVyYSB5IGVsIHBhaXNhamUsIHNvYnJlIGxhcyBxdWUgYWxndW5hIHZleiBpbnRlbnTDsyBjYXJ0b2dyYWZpYXIgUm9zYWxpbmQgS3JhdXNzLjwvcD5cbjxwPkVtcGxhemFtaWVudG9zIGVmw61tZXJvcyBhIHBhcnRpciBkZSBlbGVtZW50b3MgcmVjaWNsYWRvcywgdHJhbnNmb3JtYWRvcywgcmVsb2NhbGl6YWRvcywgcmVjb250ZXh0dWFsaXphZG9zLCBxdWUgZ2VuZXJhIHVuYSBoZXRlcm90b3DDrGEgZXNwYWNpYWwsIHkgc2UgeXV4dGFwb25lIGFsIHBhaXNhamUgYXJxdWl0ZWN0w7NuaWNvIHJlZ3VsYXIuPC9wPlxuPGgzPkFwcm94aW1hY2lvbmVzIGFsIGNvbG9yLjwvaDM+XG48cD5MYSBleHBlcmllbmNpYSBxdWUgZXhpc3RlIGEgdHJhdsOpcyBkZWwgY29sb3IgZXMgcHJvZHVjdG8gZGlyZWN0byBkZSBsYSBwcmVzZW5jaWFsaWRhZC4gTmVjZXNhcmlhbWVudGUgbGEgbWFuZXJhIGNvbW8gcGVyY2liaW1vcyBsYXMgcHVsc2lvbmVzIGRlbCBjb2xvciwgZXN0w6FuIHByb2Z1bmRhbWVudGUgbGlnYWRhcyBhIGF0cmlidXRvcyBjdWx0dXJhbGVzIHkgYSBsYSBwcm9waWEgbWFuZXJhIGRlIHJlbGFjaW9uYXJub3MgY29uIGVsIGNvbG9yIGVuIG51ZXN0cm8gZW50b3JubyBjdWx0dXJhbC4gSW5jbHVzbyBhc3BlY3RvcyBkZSBsYSBnZW9ncmFmw61hIGRlIHVuIGx1Z2FyLCByZWxhY2lvbmFkbyBhIGNvbmRpY2lvbmVzIGVzcGVjw61maWNhcyBkZWwgY2xpbWEsIGF0bW9zZsOpcmljYXMsIGVudHJlIG90cm9zOyBjb25kaWNpb25hbiBlbCBjb21wb3J0YW1pZW50byBkZSB1biB0ZXJyaXRvcmlvLCBhcG9ydGFuZG8gc2lnbmlmaWNhdGl2YW1lbnRlIGEgbG9zIHZhbG9yZXMgZXN0w6l0aWNvcyBkZSBjYWRhIGN1bHR1cmEuPC9wPlxuPHA+QXVuIGFzw60sIGxhIGV4cGVyaWVuY2lhIHF1ZSB0ZW5lbW9zIGNvbiBlbCBjb2xvciBlcyBuZWNlc2FyaWFtZW50ZSBwYXJ0aWN1bGFyLiBPbGFmdXIgRWxpYXNzb24gbWVuY2lvbmEsIOKAnEVsIGNvbG9yIHRpZW5lIHVuIGVub3JtZSBwb3RlbmNpYWwgcHNpY29sw7NnaWNvIHkgYXNvY2lhdGl2bzogYXVuIGN1YW5kbyBzZSBoYSBjdWx0aXZhZG8gaGFzdGEgZWwgZXh0cmVtbywgbGEgZXhwZXJpZW5jaWEgZGUgbG9zIGNvbG9yZXMgZXMgYXPDrSBtaXNtbyBleHRyZW1hZGFtZW50ZSBpbmRpdmlkdWFsLuKAnSAoTywgRWxpYXNzb24sIDIwMTIpPC9wPlxuPHA+UGFydGlyIGRlIHVuYSBpbWFnZW4sIHJlY29tcG9uZXIsIHJlY29uZmlndXJhciwgZXh0cmFlciBkZSBlbGxhIHN1IG3DrW5pbW8gcHVudG8gZGUgaG9tb2dlbmVpZGFkLCB2YWNpbGFyIGEgcGFydGlyIGRlIGxhIHNhdHVyYWNpw7NuLCBlbCBtYXRpeiwgZWwgYXNwZWN0byBjcm9tw6F0aWNvLCBzdSBpbnRlbnNpZGFkIHkgZW5jb250cmFyIGxhIHBvc2ljacOzbiBlbnJpcXVlY2lkYSBlbiBsYSBjdWFsIGxhIG1pcmFkYSBhY3VkZSBhIGxhIGlucXVpZXR1ZCwgYSBsYSBhbWJpZ8O8ZWRhZCBkZSBsbyBldmVudHVhbCwgeWEgbm8gZW4gbW92aW1pZW50bywgc2lubyBjb21vIHVuIGhlY2hvIGNhcHR1cmFkbyBlbiBlbCBpbnN0YW50ZSBxdWUgc2UgcHJvbG9uZ2EgZW4gZWwgdGllbXBvLiBVbiBwdW50byBkZSBsYSBpbWFnZW4gcXVlIHNlIGNvcnJlbGFjaW9uYSBkaXJlY3RhbWVudGUgY29uIG90cm9zIG3DrW5pbW9zIGVsZW1lbnRvcywgeSBlbiBlc2EgaW50ZXJyZWxhY2nDs24sIHN1cmdlIHVuYSBleHBsb3JhY2nDs24gdmlzdWFsLCBxdWUgZ29scGVhIGVsIG9qbyBhbCBjb250YWN0by48L3A+XG48cD5Fc3RhbW9zIGFwcmVoZW5kaWRvcyBhIGxvIG3Ds3ZpbCwgYWwgZXZlbnRvIGZ1cnRpdm8geSBwYXNhamVybywgcGVzdGHDsWVhbW9zIGFsIHRpZW1wbyBlbiBxdWUgc2UgcmVjb25maWd1cmEgZWwgZXNwYWNpbyBjb24gc3VzIGV2ZW50dWFsaWRhZGVzLCB5IGxhIGltYWdlbiBwb2NhcyB2ZWNlcyBzZSBhZGhpZXJlLCBwb2NhcyB2ZWNlcyB0cmFzY2llbmRlIHkgc2UgZXhwYW5kZSBlbiBlbCB0aWVtcG8uIFJlY29ycmVyIGxhIGNpdWRhZCwgb3B0YXIgcG9yIHVuYSBwb3NpY2nDs24gcmVjZXB0aXZhIGVuIHN1cyBjYWxsZXMsIGVuIG9jYXNpb25lcyBwcm9kdWNlIGRlc2dhc3RlLCBkZWJpZG8gYSBsYSBzb25vcmlkYWQgdmlzdWFsIHkgbGEgZmFjaWxpZGFkIGVuIGxhIHF1ZSBzZSBwYXNhIGRlIHVuYSBpbWFnZW4gYSBvdHJhLiBMb3MgZXZlbnRvcyBkZWphbiBkZSBzZXIgZXZlbnRvcywgcGFyYSBjb252ZXJ0aXJzZSBlbiBwcmVzdW5jaW9uZXMgY290aWRpYW5hcywgYmFuYWxlcywgcXVlIHBpZXJkZW4gbGEgY2FsaWRhZCBwYXJhIHNlciBleHBsb3JhZGFzLCBtw6FzIGFsbMOhIGRlIGxhIGZvcm1hLjwvcD5cbjxwPkEgcGFydGlyIGRlbCBtw61uaW1vIGVsZW1lbnRvIGRlIGNvbG9yIHF1ZSBjb21wb25lIHVuYSBpbWFnZW4gZGlnaXRhbCBlbm1hcmNhZGEgZGUgbGEgcmVhbGlkYWQsIHNlIHJlY29uc3RydXllIHN1IHNpZ25pZmljYWRvLCBlbCBkZXN2YW5lY2ltaWVudG8gZGUgbGEgZmlndXJhY2nDs24gc2XDsWFsYSBlbCBjb2xvciBwb3Igc8OtIG1pc21vLjwvcD5cbjxwPkVsIGN1ZXJwbyB1cmJhbm8gbm9zIHBvc2ljaW9uYSBjb25zdGFudGVtZW50ZSBjb21vIGVzcGVjdGFkb3JlcyBkZSBwZXF1ZcOxYXMgcmVhbGlkYWRlcyBmcmFnbWVudGFkYXMgZGUgbGEgY2l1ZGFkLCBhbCB0aWVtcG8gZW4gcXVlIGVzdGFzIG9yZ8OhbmljYW1lbnRlIHNlIHZhbiBwb3NpY2lvbmFuZG8gZW4gbGEgc3VwZXJmaWNpZSBkZWwgZXNjZW5hcmlvIHNvY2lhbDsgcG9yIG90cm8gbGFkbyBzZSBsZXMgaW1waWRlIGZsdWlyLCBlbiBtZWRpbyBkZSBsYSB2aWdpbGFuY2lhIHF1ZSBiYWpvIG5vY2lvbmVzIGRlbCBiaWVuIGNvbcO6biB5IHVuIG1hcmtldGluZyB1cmJhbsOtc3RpY28gZW4gZWwgY3VhbCBwcmltYSBsYSBlc3TDqXRpY2EgeSBhbCBhcm1vbsOtYSB2aXN1YWwsIHNlIGVzY29uZGVuIG1hcmdpbmFsaWRhZGVzLCBxdWUgc2UgZGlzaW11bGFuIGNvbnN0YW50ZW1lbnRlIGRlbnRybyBkZWwgYXBhcmF0YWplIHBvbMOtdGljbywgZGVzdmFuZWNpZW5kbyBlc3RhcyByZWFsaWRhZGVzIGVzcGVjw61maWNhcy4gTGEgcHJlc2VuY2lhIGRlIGVzdG9zIGhlY2hvcyBjb3RpZGlhbm9zLCBlbiBlbCBhY29udGVjZXIgZGlhcmlvLCBlbXBpZXphbiBhIHBlcmRlciByZWxldmFuY2lhIHBhcmEgZWwgdXN1YXJpbyBkZSBsYSBjaXVkYWQuPC9wPlxuPHA+TGEgY29kaWZpY2FjacOzbiBkZSBsYSBpbWFnZW4gcGVybWl0ZSBzZcOxYWxhciBlc3RhcyBwcsOhY3RpY2FzLCBwb3RlbmNpYW5kbyBlbCB2YWxvciBkZSBsYSBpbmFjZXB0YWNpw7NuLCBuZWdhY2nDs24geSBjYW11ZmxhamUuICBFbCBjYXLDoWN0ZXIgc2lsZW5jaW9zbyBxdWUgaGFuIGFkcXVpcmlkbyBlc3RhcyBwcsOhY3RpY2FzIHNlIHRyYXN0b2NhIGNvbiBsYSBuZWNlc2lkYWQgZGUgb2N1bHRhY2nDs24gZGUgbGEgaW1hZ2VuIHF1ZSBpbmNvbW9kYSwgY29uIGVsIGludGVyw6lzIGRlIGRlc2xvY2FsaXphciB5IHJlc2l0dWFyIGVuIGVsIHBsYW5vIHNvY2lhbCwgbGEgcG9zaWNpw7NuIGRlIGVzdGFzIHByw6FjdGljYXMgY29uIGVsIGVzcGFjaW8gcXVlIG9jdXBhbi48L3A+XG48cD5FbCBhc3BlY3RvIGNvbXVuaWNhdGl2byBkZWwgY29sb3IgYXRyaWJ1eWUgb3RyYSBtaXJhZGEgZGUgbGEgcmVhbGlkYWQsIGFsIHl1eHRhcG9uZXJzZSBhIGxhIGVzdGFuZGFyaXphY2nDs24gY3JvbcOhdGljYSBkZWwgZW50b3JubyB1cmJhbm8uIExhIGluc3RydW1lbnRhY2nDs24geSBsb3MgZWxlbWVudG9zIHJlcXVlcmlkb3MgcG9yIGVzdGFzIHBlcnNvbmFzIHBhcmEgc29icmVsbGV2YXIgbG9zIGFzcGVjdG9zIG3DoXMgYsOhc2ljb3MgZGUgbGEgc3Vic2lzdGVuY2lhIGVuIGVsIGVudG9ybm8gdXJiYW5vIGVtcGllemFuIGEgZ2VuZXJhciBjb250cmFzdGVzIHZpc3VhbGVzLiBFbiBsYSBwcm94aW1pZGFkIGRlIGxvcyBlc3BhY2lvcyB0ZW1wb3JhbGVzIHF1ZSBzZSB2YW4gZ2VuZXJhbmRvLCBsb3MgY3VhbGVzIGxlcyBwZXJtaXRlbiBhY3VkaXIgeSBnZXN0aW9uYXIgc3VzIG5lY2VzaWRhZGVzIG3DoXMgY2VyY2FuYXMuPC9wPlxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRDb250ZW50KCkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICB0ZXh0Q29udGFpbmVyLmlkID0gXCJ0ZXh0LWNvbnRhaW5lclwiO1xuICAgIHRleHRDb250YWluZXIuaW5uZXJIVE1MID0gdGV4dDtcblxuICAgIHJldHVybiB0ZXh0Q29udGFpbmVyXG59IiwiaW1wb3J0IHZpZDEgZnJvbSAnLi92aWRlby8xLm1wNCc7XG5pbXBvcnQgdmlkMiBmcm9tICcuL3ZpZGVvLzIubXA0JztcbmltcG9ydCB2aWQzIGZyb20gJy4vdmlkZW8vMy5tcDQnO1xuaW1wb3J0IHZpZDQgZnJvbSAnLi92aWRlby80Lm1wNCc7XG5pbXBvcnQgdmlkNSBmcm9tICcuL3ZpZGVvLzUubXA0JztcbmltcG9ydCB2aWQ2IGZyb20gJy4vdmlkZW8vNi5tcDQnO1xuaW1wb3J0IHZpZDcgZnJvbSAnLi92aWRlby83Lm1wNCc7XG5pbXBvcnQgdmlkOCBmcm9tICcuL3ZpZGVvLzgubXA0JztcbmltcG9ydCB2aWQ5IGZyb20gJy4vdmlkZW8vOS5tcDQnO1xuaW1wb3J0IHZpZDEwIGZyb20gJy4vdmlkZW8vMTAubXA0JztcbmltcG9ydCB2aWQxMSBmcm9tICcuL3ZpZGVvLzExLm1wNCc7XG5pbXBvcnQgdmlkMTIgZnJvbSAnLi92aWRlby8xMi5tcDQnO1xuaW1wb3J0IHZpZDEzIGZyb20gJy4vdmlkZW8vMTMubXA0JztcbmltcG9ydCB2aWQxNCBmcm9tICcuL3ZpZGVvLzE0Lm1wNCc7XG5cbmV4cG9ydCBjb25zdCB2aWRlb3MgPSBbXG4gICAge3NyYzogdmlkMSwgcmdiOiBcInJnYigxMTAsIDYsIDM2KVwifSxcbiAgICB7c3JjOiB2aWQyLCByZ2I6IFwicmdiKDEyMywgMTU0LCAxMzQpXCJ9LFxuICAgIHtzcmM6IHZpZDMsIHJnYjogXCJyZ2IoOTQsIDkzLCAxMTMpXCJ9LFxuICAgIHtzcmM6IHZpZDQsIHJnYjogXCJyZ2IoMTg0LCAxNTAsIDEzNSlcIn0sXG4gICAge3NyYzogdmlkNSwgcmdiOiBcInJnYigxNTQsIDE1OSwgMTU2KVwifSxcbiAgICB7c3JjOiB2aWQ2LCByZ2I6IFwicmdiKDQ2LCA5OSwgOTMpXCJ9LFxuICAgIHtzcmM6IHZpZDcsIHJnYjogXCJyZ2IoMTM3LCAxNDEsIDE4NClcIn0sXG4gICAge3NyYzogdmlkOCwgcmdiOiBcInJnYigyMDYsIDE3OSwgMjA3KVwifSxcbiAgICB7c3JjOiB2aWQ5LCByZ2I6IFwicmdiKDE0MiwgMTYzLCAxOTcpXCJ9LFxuICAgIHtzcmM6IHZpZDEwLCByZ2I6IFwicmdiKDE3OCwgMTQsIDMpXCJ9LFxuICAgIHtzcmM6IHZpZDExLCByZ2I6IFwicmdiKDAsIDg4LCAxMjUpXCJ9LFxuICAgIHtzcmM6IHZpZDEyLCByZ2I6IFwicmdiKDg1LCAxMzAsIDE4NClcIn0sXG4gICAge3NyYzogdmlkMTMsIHJnYjogXCJyZ2IoNTksIDkyLCAyMDIpXCJ9LFxuICAgIHtzcmM6IHZpZDE0LCByZ2I6IFwicmdiKDIwNywgMTQ1LCA2MylcIn0sXG4gICAge3NyYzogdmlkMSwgcmdiOiBcInJnYigxMTAsIDYsIDM2KVwifSxcbiAgICB7c3JjOiB2aWQyLCByZ2I6IFwicmdiKDEyMywgMTU0LCAxMzQpXCJ9LFxuICAgIHtzcmM6IHZpZDMsIHJnYjogXCJyZ2IoOTQsIDkzLCAxMTMpXCJ9LFxuICAgIHtzcmM6IHZpZDQsIHJnYjogXCJyZ2IoMTg0LCAxNTAsIDEzNSlcIn0sXG4gICAge3NyYzogdmlkNSwgcmdiOiBcInJnYigxNTQsIDE1OSwgMTU2KVwifSxcbiAgICB7c3JjOiB2aWQ2LCByZ2I6IFwicmdiKDQ2LCA5OSwgOTMpXCJ9LFxuICAgIHtzcmM6IHZpZDcsIHJnYjogXCJyZ2IoMTM3LCAxNDEsIDE4NClcIn0sXG4gICAge3NyYzogdmlkOCwgcmdiOiBcInJnYigyMDYsIDE3OSwgMjA3KVwifSxcbiAgICB7c3JjOiB2aWQ5LCByZ2I6IFwicmdiKDE0MiwgMTYzLCAxOTcpXCJ9LFxuICAgIHtzcmM6IHZpZDEwLCByZ2I6IFwicmdiKDE3OCwgMTQsIDMpXCJ9LFxuICAgIHtzcmM6IHZpZDExLCByZ2I6IFwicmdiKDAsIDg4LCAxMjUpXCJ9LFxuICAgIHtzcmM6IHZpZDEyLCByZ2I6IFwicmdiKDg1LCAxMzAsIDE4NClcIn0sXG4gICAge3NyYzogdmlkMTMsIHJnYjogXCJyZ2IoNTksIDkyLCAyMDIpXCJ9LFxuICAgIHtzcmM6IHZpZDE0LCByZ2I6IFwicmdiKDIwNywgMTQ1LCA2MylcIn0sXG4gICAge3NyYzogdmlkMSwgcmdiOiBcInJnYigxMTAsIDYsIDM2KVwifSxcbiAgICB7c3JjOiB2aWQyLCByZ2I6IFwicmdiKDEyMywgMTU0LCAxMzQpXCJ9LFxuICAgIHtzcmM6IHZpZDMsIHJnYjogXCJyZ2IoOTQsIDkzLCAxMTMpXCJ9LFxuICAgIHtzcmM6IHZpZDQsIHJnYjogXCJyZ2IoMTg0LCAxNTAsIDEzNSlcIn0sXG4gICAge3NyYzogdmlkNSwgcmdiOiBcInJnYigxNTQsIDE1OSwgMTU2KVwifSxcbiAgICB7c3JjOiB2aWQ2LCByZ2I6IFwicmdiKDQ2LCA5OSwgOTMpXCJ9LFxuICAgIHtzcmM6IHZpZDcsIHJnYjogXCJyZ2IoMTM3LCAxNDEsIDE4NClcIn0sXG4gICAge3NyYzogdmlkOCwgcmdiOiBcInJnYigyMDYsIDE3OSwgMjA3KVwifSxcbl0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7Z2FsbGVyeUNvbnRlbnR9IGZyb20gJy4vZ2FsbGVyeS5qcyc7XG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gJy4vbW9kYWwuanMnO1xuaW1wb3J0IHsgdGV4dENvbnRlbnQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgY3JlYXRlVmlldyB9IGZyb20gJy4vZmlyc3R2aWV3JztcbmltcG9ydCB7IGNyZWF0ZUNhcm91c2VsLCBjYXJvdXNlbEZ1bmN0aW9uIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBjcmVhdGVNYXBzTGlicmFyeSB9IGZyb20gJy4vbWFwJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlVmlldygpKVxuXG5jb25zdCBuYXZtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5hdm1lbnUuaWQgPSBcIm5hdm1lbnVcIjtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJTdXBlcmZpY2llc1wiO1xubmF2bWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuY29uc3QgcGFnZU5hbWVzID0gW1xuICAgIHt0aXRsZTogXCJQaXhcIiwgY29udGVudDogZ2FsbGVyeUNvbnRlbnQoKX0sXG4gICAge3RpdGxlOiBcIkFsZ3Vub3MgZXNjcml0b3NcIiwgY29udGVudDogdGV4dENvbnRlbnQoKX0sIFxuICAgIHt0aXRsZTogXCJSZWNvcnJpZG9zXCIsIGNvbnRlbnQ6IGNyZWF0ZU1hcHNMaWJyYXJ5KCl9LFxuICAgIC8vIHt0aXRsZTogXCJTdXBlcmZpY2llc1wiLCBjb250ZW50OiBjcmVhdGVDYXJvdXNlbCgpLCBzZWNvbmQ6IGNhcm91c2VsRnVuY3Rpb24oKX1cbl07XG5wYWdlTmFtZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1lbnUuaWQgPSBwYWdlLnRpdGxlO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBwYWdlLnRpdGxlO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMXNcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UuY29udGVudCk7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVpblwiO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMXNcIlxuICAgICAgICB9LCA5OTApO1xuICAgIH0pXG4gICAgcGFnZXMuYXBwZW5kQ2hpbGQobWVudSk7XG59KVxuXG5jb25zdCBzdXBlcmZpY2llc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnN1cGVyZmljaWVzTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuc3VwZXJmaWNpZXNNZW51LmlkID0gXCJTdXBlcmZpY2llc1wiO1xuc3VwZXJmaWNpZXNNZW51LnRleHRDb250ZW50ID0gXCJTdXBlcmZpY2llc1wiO1xuc3VwZXJmaWNpZXNNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJvdXNlbCgpKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlaW5cIjtcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjFzXCJcbiAgICAgICAgICAgIGNhcm91c2VsRnVuY3Rpb24oKTtcbiAgICAgICAgfSwgMTQ5MCk7XG4gICAgfSwgNDkwKTtcbn0pXG5wYWdlcy5hcHBlbmRDaGlsZChzdXBlcmZpY2llc01lbnUpXG5uYXZtZW51LmFwcGVuZENoaWxkKHBhZ2VzKTtcblxuYm9keS5hcHBlbmRDaGlsZChuYXZtZW51KTtcblxuY29uc3QgbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbVwiKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICBtZW51c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWVudXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG1lbnVzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pXG59XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xud3JhcHBlci5pZCA9IFwid3JhcHBlclwiO1xuXG4vLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbi8vIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuLy8gaDEudGV4dENvbnRlbnQgPSBcIkdhbGVyaWFcIjtcbi8vIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbi8vIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XG53cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGdhbGxlcnlDb250ZW50KCkpO1xubWVudXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxud3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9