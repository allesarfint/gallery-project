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
___CSS_LOADER_EXPORT___.push([module.id, "#library::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 0 -2rem 2rem 0 white;\n  pointer-events: none;\n}\n\n#library {\n  width: 100%;\n  overflow: scroll;\n  overflow-x: hidden;\n  font-size: 1.5rem;\n  padding-bottom: 2rem;\n  /* Hide scrollbar for IE, Edge and Firefox */\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#library::-webkit-scrollbar {\n  display: none;\n}\n\n.mapa {\n  margin-top: 20px;\n  margin-bottom: 50px;\n  width: 90%;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/css/map.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sCAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,4CAAA;EACA,wBAAA;EAA2B,gBAAA;EAC3B,qBAAA;EAAwB,YAAA;AAG5B;;AAAA,gDAAA;AACA;EACI,aAAA;AAGJ;;AAAA;EACI,gBAAA;EACA,mBAAA;EACA,UAAA;EACA,YAAA;AAGJ","sourcesContent":["#library::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: inset 0 -2rem 2rem 0 white;\n    pointer-events: none;\n}\n\n#library {\n    width: 100%;\n    overflow: scroll;\n    overflow-x: hidden;\n    font-size: 1.5rem;\n    padding-bottom: 2rem;\n    /* Hide scrollbar for IE, Edge and Firefox */\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n#library::-webkit-scrollbar {\n    display: none;\n}\n\n.mapa {\n    margin-top: 20px;\n    margin-bottom: 50px;\n    width: 90%;\n    height: auto;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 50px;\n  /* Location of the box */\n  padding-bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #ffffff;\n}\n\n/* Modal Content (image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  aspect-ratio: 1/1;\n  max-width: 80%;\n  max-height: 80%;\n}\n\n/* Caption of Modal Image */\n#caption {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  text-align: center;\n  color: #ccc;\n  padding: 10px 0;\n  height: 150px;\n}\n\n/* Add Animation */\n.modal-content, #caption {\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0.1);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #5c5c5c;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.closeX {\n  color: #5c5c5c;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.closeX:hover,\n.closeX:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n#view {\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: white;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n#view-content {\n  display: flex;\n  height: 80%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #6b6b6b;\n  animation-name: fadein;\n  animation-duration: 2s;\n}\n\n@keyframes change-color {\n  20% {\n    background-color: #ca6565;\n  }\n  40% {\n    background-color: #6767b6;\n  }\n  80% {\n    background-color: #93d193;\n  }\n  100% {\n    background-color: #d3d35b;\n  }\n}\n@keyframes change-size {\n  0% {\n    transform: scale(0.25);\n  }\n  50% {\n    transform: scale(1);\n    background-color: #ca6565;\n  }\n  100% {\n    transform: scale(0.25);\n    background-color: #93d193;\n  }\n}\n.animated-point {\n  margin-top: 20px;\n  height: 100px;\n  width: 100px;\n  background-color: #93d193;\n  animation-name: change-color;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  cursor: pointer;\n}\n\n.animated-point:hover {\n  transform: scale(1.05);\n}\n\n#after-text {\n  width: 70%;\n  font-family: \"Crinsom Text\", serif;\n  font-size: 1.5rem;\n  margin: 10px;\n  cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA,2BAAA;AACA;EACI,aAAA;EAAe,sBAAA;EACf,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,iBAAA;EAAmB,wBAAA;EACnB,oBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,yBAAA;AASJ;;AANA,0BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AASJ;;AANA,2BAAA;AACA;EACI,YAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;AASJ;;AANA,kBAAA;AACA;EACI,oBAAA;EACA,wBAAA;AASJ;;AANA;EACI;IAAM,qBAAA;EAUR;EATE;IAAI,mBAAA;EAYN;AACF;AAVA,qBAAA;AACA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAYJ;;AATA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAYJ;;AATA;EACI,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAYJ;;AATA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;EACA,sBAAA;AAYJ;;AATA,wCAAA;AACA;EACI;IACI,WAAA;EAYN;AACF;AARA;EACI,eAAA;EAAiB,kBAAA;EACjB,UAAA;EAAY,eAAA;EACZ,OAAA;EACA,MAAA;EACA,WAAA;EAAa,eAAA;EACb,YAAA;EAAc,gBAAA;EACd,cAAA;EAAgB,4BAAA;EAChB,uBAAA;AAeJ;;AAZA;EACI;IAAM,UAAA;EAgBR;EAfE;IAAI,UAAA;EAkBN;AACF;AAhBA;EACI;IAAM,UAAA;EAmBR;EAlBE;IAAI,UAAA;EAqBN;AACF;AAnBA;EACI,aAAA;EACA,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,sBAAA;EACA,sBAAA;AAqBJ;;AAlBA;EACI;IAAK,yBAAA;EAsBP;EArBE;IAAK,yBAAA;EAwBP;EAvBE;IAAK,yBAAA;EA0BP;EAzBE;IAAM,yBAAA;EA4BR;AACF;AA1BA;EACI;IAAI,sBAAA;EA6BN;EA5BE;IAAK,mBAAA;IAAqB,yBAAA;EAgC5B;EA/BE;IAAM,sBAAA;IAAwB,yBAAA;EAmChC;AACF;AAjCA;EACI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,sBAAA;EACA,mCAAA;EACA,eAAA;AAmCJ;;AAhCA;EACI,sBAAA;AAmCJ;;AA9BA;EACI,UAAA;EACA,kCAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;AAiCJ","sourcesContent":["/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 50px; /* Location of the box */\n    padding-bottom: 50px;\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: #ffffff;\n  }\n  \n/* Modal Content (image) */\n.modal-content {\n    margin: auto;\n    display: block;\n    aspect-ratio: 1/1;\n    max-width: 80%;\n    max-height: 80%;\n}\n  \n/* Caption of Modal Image */\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n}\n  \n/* Add Animation */\n.modal-content, #caption {  \n    animation-name: zoom;\n    animation-duration: 0.6s;\n}\n  \n@keyframes zoom {\n    from {transform: scale(0.1)} \n    to {transform: scale(1)}\n}\n  \n/* The Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #5c5c5c;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.closeX {\n    color: #5c5c5c;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n}\n  \n.closeX:hover,\n.closeX:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n    transform: scale(1.05);\n}\n  \n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n    .modal-content {\n        width: 100%;\n    }\n}\n\n  \n#view {\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(255, 255, 255);\n}\n\n@keyframes fadein {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {opacity: 1;}\n    to {opacity: 0;}\n}\n\n#view-content {\n    display: flex;\n    height: 80%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color:rgb(107, 107, 107);    \n    animation-name: fadein;\n    animation-duration: 2s;\n}\n\n@keyframes change-color {\n    20% {background-color: rgb(202, 101, 101);}\n    40% {background-color: rgb(103, 103, 182);}\n    80% {background-color: rgb(147, 209, 147);}\n    100% {background-color: rgb(211, 211, 91);}\n}\n\n@keyframes change-size {\n    0% {transform: scale(0.25);}\n    50% {transform: scale(1); background-color: rgb(202, 101, 101);}\n    100% {transform: scale(0.25); background-color: rgb(147, 209, 147);}\n}\n\n.animated-point {\n    margin-top: 20px;\n    height: 100px;\n    width: 100px;\n    background-color: rgb(147, 209, 147);\n    animation-name: change-color;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    cursor: pointer\n}\n\n.animated-point:hover {\n    transform: scale(1.05);\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');\n\n#after-text {\n    width: 70%;\n    font-family: 'Crinsom Text', serif;\n    font-size: 1.5rem;\n    margin: 10px;\n    cursor: default;\n}\n"],"sourceRoot":""}]);
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
    projectTitle.textContent = "El lugar de las Superficies";
    projectTitle.classList.add("project");
    viewContent.appendChild(projectTitle);

    const closeButton = document.createElement("span");
    closeButton.textContent = "×";
    const afterText = document.createElement("article");
    afterText.id = "after-text";
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas elit a ligula condimentum, vitae ultrices enim venenatis. Curabitur sit amet elementum lorem, in lobortis purus. Donec turpis nibh, imperdiet et tellus sit amet, euismod euismod sem. Praesent nunc erat, ornare sed malesuada et, varius quis arcu. Vivamus urna lacus, interdum at lacus quis, finibus vehicula dolor. In consectetur accumsan blandit. Sed id turpis vitae eros feugiat aliquam id nec massa. Sed vitae faucibus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque bibendum gravida neque.`;
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
/* harmony import */ var _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/carousel-2.jpg */ "./src/images/carousel-2.jpg");
/* harmony import */ var _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/mapa-1.jpg */ "./src/images/mapa-1.jpg");












const imgs = [
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_10__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_10__,
    _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__, _images_carousel_2_jpg__WEBPACK_IMPORTED_MODULE_10__, _images_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_9__,
];



const mapas = [
    _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_11__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_11__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_11__, _images_mapa_1_jpg__WEBPACK_IMPORTED_MODULE_11__,
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

/***/ "./src/images/carousel-2.jpg":
/*!***********************************!*\
  !*** ./src/images/carousel-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "405dcde919deb3019c15.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSx5QkFBeUI7QUFDdkMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksNEJBQTRCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLDBDQUFLLHlCQUF5QjtBQUN4QyxLQUFLLEtBQUssMkNBQUsseUJBQXlCO0FBQ3hDLEtBQUssS0FBSywyQ0FBSywyQkFBMkI7QUFDMUMsS0FBSyxLQUFLLDJDQUFLLDBCQUEwQjtBQUN6QyxLQUFLLEtBQUssMkNBQUssMkJBQTJCO0FBQzFDLEtBQUssS0FBSyx5Q0FBSSx5QkFBeUI7QUFDdkMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUksMEJBQTBCO0FBQ3hDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQyxLQUFLLEtBQUsseUNBQUkseUJBQXlCO0FBQ3ZDLEtBQUssS0FBSyx5Q0FBSSw0QkFBNEI7QUFDMUMsS0FBSyxLQUFLLHlDQUFJLDRCQUE0QjtBQUMxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QjtBQUNtQjtBQUNUO0FBQ0U7QUFDSTtBQUNxQjtBQUNwQjs7QUFFMUM7O0FBRUEsaUJBQWlCLHNEQUFVOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCLDJEQUFjLEdBQUc7QUFDN0MsS0FBSyxvQ0FBb0Msa0RBQVcsR0FBRztBQUN2RCxLQUFLLDhCQUE4Qix1REFBaUIsR0FBRztBQUN2RCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQWM7QUFDdEM7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsMkRBQWM7QUFDbEM7O0FBRUEsb0JBQW9CLDRDQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9nYWxsZXJ5LmNzcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL21hcC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy90ZXh0Y29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2Nhcm91c2VsLnNjc3M/ZGU2NSIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL2dhbGxlcnkuY3NzPzYzNGIiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tYXAuY3NzP2RlZmQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3M/YTBhYyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz9iY2JjIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9jc3MvdGV4dGNvbnRlbnQuY3NzP2E3M2UiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2ZpcnN0dmlldy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvaW1nZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvbWFwLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3QvLi9zcmMvdmlkZW9kYXRhLmpzIiwid2VicGFjazovL2dhbGxlcnktcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYWxsZXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FsbGVyeS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcm91c2VsIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWRlO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJvdXNlbCA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5jYXJvdXNlbCBmaWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG59XFxuLmNhcm91c2VsIGZpZ3VyZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4uY2Fyb3VzZWwgZmlndXJlIGltZzpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5jYXJvdXNlbCBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAyMHB4IDAgMDtcXG59XFxuLmNhcm91c2VsIG5hdiBidXR0b24ge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbi5jYXJvdXNlbCBuYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY2Fyb3VzZWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFQZ0I7RUFRaEIsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJKO0FBU0k7RUFDRSxjQUFBO0FBUE47QUFVSTtFQUNFLFNBQUE7RUFFQSxVQXRCUztFQXVCVCw0QkFBQTtFQUNBLDBCQUFBO0FBVE47QUFXTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFUUjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQVRWO0FBY0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7RUFDQSxnQkFBQTtBQWJOO0FBZU07RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFmUjtBQWtCTTtFQUNFLHNCQUFBO0FBaEJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxuICBcXG4gIC8vIENhcm91c2VsIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xcbiAgJGl0ZW0td2lkdGg6IDYwJTsgLy8gTm93IHdlIGNhbiB1c2UgcGVyY2VudGFnZXMhXFxuICAkaXRlbS1zZXBhcmF0aW9uOiAwcHg7IC8vIFRoaXMgbm93IGlzIHNldCB3aXRoIEpzXFxuICAkdmlld2VyLWRpc3RhbmNlOiAxMDAwcHg7XFxuICBcXG4gIC5jYXJvdXNlbCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyMjIpO1xcbiAgXFxuICAgIHBlcnNwZWN0aXZlOiAkdmlld2VyLWRpc3RhbmNlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgID4gKiB7XFxuICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgIH1cXG4gIFxcbiAgICBmaWd1cmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gIFxcbiAgICAgIHdpZHRoOiAkaXRlbS13aWR0aDtcXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbiAgXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmc6IG1hdGguZGl2KCRpdGVtLXNlcGFyYXRpb24sIDIpO1xcbiAgXFxuICAgICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICBuYXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMjAlO1xcbiAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBtYXJnaW46IDIwcHggMCAwO1xcbiAgXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICBcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcGl4IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNnYWxsZXJ5IHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZyYW1lIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ucGljdHVyZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBpY3R1cmU6aG92ZXIge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMC4wMTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUzNjAge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzU5ZGVnKTtcXG4gIH1cXG59XFxuLyogI3Jlc2V0OmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTM2MDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYWxsZXJ5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUFNLHVCQUFBO0VBRVI7RUFERTtJQUFJLDBCQUFBO0VBSU47QUFDRjtBQUZBOzs7R0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGl4IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNnYWxsZXJ5IHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcXG4gICAgcGFkZGluZzogM3B4OyAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZyYW1lIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5waWN0dXJlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBpY3R1cmU6aG92ZXIge1xcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMC4wMTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUzNjAge1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMzU5ZGVnKTt9XFxufVxcblxcbi8qICNyZXNldDpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUzNjA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNsaWJyYXJ5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycmVtIDJyZW0gMCB3aGl0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI2xpYnJhcnk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXBhIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFBd0IsWUFBQTtBQUc1Qjs7QUFBQSxnREFBQTtBQUNBO0VBQ0ksYUFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xpYnJhcnk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnJlbSAycmVtIDAgd2hpdGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiNsaWJyYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXBhIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Dcmltc29uK1RleHQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLyogQ2FwdGlvbiBvZiBNb2RhbCBJbWFnZSAqL1xcbiNjYXB0aW9uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2NjYztcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi8qIEFkZCBBbmltYXRpb24gKi9cXG4ubW9kYWwtY29udGVudCwgI2NhcHRpb24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb207XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgY29sb3I6ICM1YzVjNWM7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICNiYmI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZVgge1xcbiAgY29sb3I6ICM1YzVjNWM7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jbG9zZVg6aG92ZXIsXFxuLmNsb3NlWDpmb2N1cyB7XFxuICBjb2xvcjogI2JiYjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi8qIDEwMCUgSW1hZ2UgV2lkdGggb24gU21hbGxlciBTY3JlZW5zICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI3ZpZXcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuI3ZpZXctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2YjZiNmI7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcbiAgMjAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhNjU2NTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzY3YjY7XFxuICB9XFxuICA4MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMTkzO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzNWI7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgY2hhbmdlLXNpemUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhNjU2NTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMTkzO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZWQtcG9pbnQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMTkzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZS1jb2xvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFuaW1hdGVkLXBvaW50OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNhZnRlci10ZXh0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LWZhbWlseTogXFxcIkNyaW5zb20gVGV4dFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDEwcHg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osaUJBQUE7RUFBbUIsd0JBQUE7RUFDbkIsb0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix5QkFBQTtBQVNKOztBQU5BLDBCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFOQSwyQkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVNKOztBQU5BLGtCQUFBO0FBQ0E7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0FBU0o7O0FBTkE7RUFDSTtJQUFNLHFCQUFBO0VBVVI7RUFURTtJQUFJLG1CQUFBO0VBWU47QUFDRjtBQVZBLHFCQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVEE7O0VBRUksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVEE7O0VBRUksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBWUo7O0FBVEEsd0NBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtFQVlOO0FBQ0Y7QUFSQTtFQUNJLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGVBQUE7RUFDWixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtFQUNoQix1QkFBQTtBQWVKOztBQVpBO0VBQ0k7SUFBTSxVQUFBO0VBZ0JSO0VBZkU7SUFBSSxVQUFBO0VBa0JOO0FBQ0Y7QUFoQkE7RUFDSTtJQUFNLFVBQUE7RUFtQlI7RUFsQkU7SUFBSSxVQUFBO0VBcUJOO0FBQ0Y7QUFuQkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBcUJKOztBQWxCQTtFQUNJO0lBQUsseUJBQUE7RUFzQlA7RUFyQkU7SUFBSyx5QkFBQTtFQXdCUDtFQXZCRTtJQUFLLHlCQUFBO0VBMEJQO0VBekJFO0lBQU0seUJBQUE7RUE0QlI7QUFDRjtBQTFCQTtFQUNJO0lBQUksc0JBQUE7RUE2Qk47RUE1QkU7SUFBSyxtQkFBQTtJQUFxQix5QkFBQTtFQWdDNUI7RUEvQkU7SUFBTSxzQkFBQTtJQUF3Qix5QkFBQTtFQW1DaEM7QUFDRjtBQWpDQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFtQ0o7O0FBaENBO0VBQ0ksc0JBQUE7QUFtQ0o7O0FBOUJBO0VBQ0ksVUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWlDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG4gIFxcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XFxufVxcbiAgXFxuLyogQ2FwdGlvbiBvZiBNb2RhbCBJbWFnZSAqL1xcbiNjYXB0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2NjYztcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4gIFxcbi8qIEFkZCBBbmltYXRpb24gKi9cXG4ubW9kYWwtY29udGVudCwgI2NhcHRpb24geyAgXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XFxufVxcbiAgXFxuQGtleWZyYW1lcyB6b29tIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwLjEpfSBcXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XFxufVxcbiAgXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMzVweDtcXG4gICAgY29sb3I6ICM1YzVjNWM7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbiAgXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlWCB7XFxuICAgIGNvbG9yOiAjNWM1YzVjO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4gIFxcbi5jbG9zZVg6aG92ZXIsXFxuLmNsb3NlWDpmb2N1cyB7XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuICBcXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgICAubW9kYWwtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4gIFxcbiN2aWV3IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMTt9XFxuICAgIHRvIHtvcGFjaXR5OiAwO31cXG59XFxuXFxuI3ZpZXctY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiKDEwNywgMTA3LCAxMDcpOyAgICBcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcbiAgICAyMCUge2JhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDEwMSwgMTAxKTt9XFxuICAgIDQwJSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAxODIpO31cXG4gICAgODAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMDksIDE0Nyk7fVxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDkxKTt9XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlLXNpemUge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjI1KTt9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTAxLCAxMDEpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjI1KTsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgMjA5LCAxNDcpO31cXG59XFxuXFxuLmFuaW1hdGVkLXBvaW50IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMDksIDE0Nyk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2UtY29sb3I7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG59XFxuXFxuLmFuaW1hdGVkLXBvaW50OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q3JpbXNvbitUZXh0JmRpc3BsYXk9c3dhcCcpO1xcblxcbiNhZnRlci10ZXh0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdDcmluc29tIFRleHQnLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZWQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRpbGxpdW0gV2ViXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaXRpbGxpdW0gV2ViXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMXB4KTtcXG59XFxuXFxuLyogI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG59ICovXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksU0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTs7Ozs7OztHQUFBO0FBU0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0k7SUFBTSxVQUFBO0VBQVI7RUFDRTtJQUFJLFVBQUE7RUFFTjtBQUNGO0FBQUE7RUFDSTtJQUFNLFVBQUE7RUFHUjtFQUZFO0lBQUksVUFBQTtFQUtOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2bWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZWQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDFweCk7XFxufVxcblxcbi8qICNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxufSAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAxO31cXG4gICAgdG8ge29wYWNpdHk6IDA7fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Dcmltc29uK1RleHQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RleHQtY29udGFpbmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDRyZW0gMCB3aGl0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jdGV4dC1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDcmltc29tIFRleHRcXFwiLCBzZXJpZjtcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI3RleHQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RleHRjb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFBd0IsWUFBQTtBQUU1Qjs7QUFDQSxnREFBQTtBQUNBO0VBQ0ksYUFBQTtBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNyaW1zb24rVGV4dCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4jdGV4dC1jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHJlbSA0cmVtIDAgd2hpdGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jdGV4dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JpbXNvbSBUZXh0XFxcIiwgc2VyaWY7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuI3RleHQtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Y29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Y29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGltZ3MgfSBmcm9tICcuL2ltZ2RhdGEnO1xuaW1wb3J0ICcuL2Nzcy9jYXJvdXNlbC5zY3NzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwgKCkge1xuICAgIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gICAgY2Fyb3VzZWwuZGF0YXNldC5nYXAgPSAyMDtcbiAgICBjYXJvdXNlbC5kYXRhc2V0LmJmYztcblxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1nc1tpXTtcbiAgICAgICAgZmlndXJlLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoZmlndXJlKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgYnV0dG9uUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uUHJldi5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwicHJldlwiKTtcbiAgICBidXR0b25QcmV2LnRleHRDb250ZW50ID0gXCJQcmV2XCI7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uTmV4dC5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwibmV4dFwiKTtcbiAgICBidXR0b25OZXh0LnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uUHJldik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk5leHQpO1xuXG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICByZXR1cm4gY2Fyb3VzZWxcbn07XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIGNhcm91c2VsRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuICAgIHZhciBmaWd1cmUgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiZmlndXJlXCIpLFxuICAgICAgbmF2ID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIm5hdlwiKSxcbiAgICAgIGltYWdlcyA9IGZpZ3VyZS5jaGlsZHJlbixcbiAgICAgIG4gPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgZ2FwID0gY2Fyb3VzZWwuZGF0YXNldC5nYXAgfHwgMCxcbiAgICAgIGJmYyA9IHRydWUsXG4gICAgICB0aGV0YSA9ICgyICogTWF0aC5QSSkgLyBuLFxuICAgICAgY3VyckltYWdlID0gMDtcbiAgICBzZXR1cENhcm91c2VsKG4sIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShpbWFnZXNbMF0pLndpZHRoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgc2V0dXBDYXJvdXNlbChuLCBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoaW1hZ2VzWzBdKS53aWR0aCkpO1xuICAgIH0pO1xuICBcbiAgICBzZXR1cE5hdmlnYXRpb24oKTtcbiAgXG4gICAgZnVuY3Rpb24gc2V0dXBDYXJvdXNlbChuLCBzKSB7XG4gICAgICB2YXIgYXBvdGhlbSA9IHMgLyAoMiAqIE1hdGgudGFuKE1hdGguUEkgLyBuKSk7XG4gICAgICBmaWd1cmUuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYDUwJSA1MCUgJHstYXBvdGhlbX1weGA7XG4gIFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGltYWdlc1tpXS5zdHlsZS5wYWRkaW5nID0gYCR7Z2FwfXB4YDtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaW1hZ2VzW2ldLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGA1MCUgNTAlICR7LWFwb3RoZW19cHhgO1xuICAgICAgICBpbWFnZXNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpICogdGhldGF9cmFkKWA7XG4gICAgICB9XG4gICAgICBpZiAoYmZjKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBpbWFnZXNbaV0uc3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgXG4gICAgICByb3RhdGVDYXJvdXNlbChjdXJySW1hZ2UpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gc2V0dXBOYXZpZ2F0aW9uKCkge1xuICAgICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrLCB0cnVlKTtcbiAgXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgIHZhciB0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0LnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPSBcIkJVVFRPTlwiKSByZXR1cm47XG4gIFxuICAgICAgICBpZiAodC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXh0XCIpKSB7XG4gICAgICAgICAgY3VyckltYWdlKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyckltYWdlLS07XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHJvdGF0ZUNhcm91c2VsKGN1cnJJbWFnZSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiByb3RhdGVDYXJvdXNlbChpbWFnZUluZGV4KSB7XG4gICAgICBmaWd1cmUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpbWFnZUluZGV4ICogLXRoZXRhfXJhZClgO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgJy4vY3NzL21vZGFsLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWV3KCkge1xuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZpZXcuaWQgPSBcInZpZXdcIjtcblxuICAgIGNvbnN0IHZpZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2aWV3Q29udGVudC5pZCA9IFwidmlldy1jb250ZW50XCI7XG4gICAgdmlldy5hcHBlbmRDaGlsZCh2aWV3Q29udGVudCk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJFbCBsdWdhciBkZSBsYXMgU3VwZXJmaWNpZXNcIjtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCI7XG4gICAgY29uc3QgYWZ0ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgYWZ0ZXJUZXh0LmlkID0gXCJhZnRlci10ZXh0XCI7XG4gICAgY29uc3QgdGV4dCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgZWdlc3RhcyBlbGl0IGEgbGlndWxhIGNvbmRpbWVudHVtLCB2aXRhZSB1bHRyaWNlcyBlbmltIHZlbmVuYXRpcy4gQ3VyYWJpdHVyIHNpdCBhbWV0IGVsZW1lbnR1bSBsb3JlbSwgaW4gbG9ib3J0aXMgcHVydXMuIERvbmVjIHR1cnBpcyBuaWJoLCBpbXBlcmRpZXQgZXQgdGVsbHVzIHNpdCBhbWV0LCBldWlzbW9kIGV1aXNtb2Qgc2VtLiBQcmFlc2VudCBudW5jIGVyYXQsIG9ybmFyZSBzZWQgbWFsZXN1YWRhIGV0LCB2YXJpdXMgcXVpcyBhcmN1LiBWaXZhbXVzIHVybmEgbGFjdXMsIGludGVyZHVtIGF0IGxhY3VzIHF1aXMsIGZpbmlidXMgdmVoaWN1bGEgZG9sb3IuIEluIGNvbnNlY3RldHVyIGFjY3Vtc2FuIGJsYW5kaXQuIFNlZCBpZCB0dXJwaXMgdml0YWUgZXJvcyBmZXVnaWF0IGFsaXF1YW0gaWQgbmVjIG1hc3NhLiBTZWQgdml0YWUgZmF1Y2lidXMganVzdG8uIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBRdWlzcXVlIGJpYmVuZHVtIGdyYXZpZGEgbmVxdWUuYDtcbiAgICBhZnRlclRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGNvbnN0IGNsb3NlWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNsb3NlWC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VYXCIpO1xuICAgIGNsb3NlWC50ZXh0Q29udGVudCA9IFwiw5dcIlxuXG4gICAgY29uc3QgYW5pbWF0ZWRQb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYW5pbWF0ZWRQb2ludC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWQtcG9pbnRcIik7XG4gICAgYW5pbWF0ZWRQb2ludC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRlZFBvaW50LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgYW5pbWF0ZWRQb2ludC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiMC41c1wiO1xuICAgICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5yZW1vdmVDaGlsZChhbmltYXRlZFBvaW50KTsgICAgICAgICAgXG4gICAgICAgIH0sIDQ5MClcbiAgICAgICAgcHJvamVjdFRpdGxlLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgcHJvamVjdFRpdGxlLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjsgICBcbiAgICAgICAgfSwgNTAwKVxuICAgICAgICBhcnJvdy5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJmYWRlb3V0XCI7XG4gICAgICAgIGFycm93LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgIHNldFRpbWVvdXQgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LnJlbW92ZUNoaWxkKGFycm93KTtcbiAgICAgICAgICAgIHZpZXdDb250ZW50LmFwcGVuZENoaWxkKGFmdGVyVGV4dCk7XG4gICAgICAgICAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChjbG9zZVgpO1xuICAgICAgICAgICAgYWZ0ZXJUZXh0LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVpblwiO1xuICAgICAgICAgICAgYWZ0ZXJUZXh0LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgIH0sIDUwMClcbiAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xvc2VYLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVpblwiO1xuICAgICAgICAgICAgY2xvc2VYLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7ICAgICBcbiAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgXG4gICAgfSlcbiAgICB2aWV3Q29udGVudC5hcHBlbmRDaGlsZChhbmltYXRlZFBvaW50KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZVguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmlld0NvbnRlbnQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiZmFkZW91dFwiO1xuICAgICAgICAgICAgdmlld0NvbnRlbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnJlbW92ZUNoaWxkKHZpZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBcImZhZGVvdXRcIjtcbiAgICAgICAgICAgICAgICB2aWV3LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gXCIwLjVzXCI7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodmlldyk7XG4gICAgICAgICAgICAgICAgfSwgNDkwKVxuICAgICAgICAgICAgfSwgNDkwKVxuICAgICAgICB9KVxuICAgIH0sIDEwMDApXG5cbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYXJyb3cuc3JjID0gXCJodHRwOi8vYTFzaXRlcy5jb20vRnJlZUltYWdlcy9GcmVlX0NsaXBfQXJ0L2ltYWdlcy9hcnJvdy91cF9hcnJvd19jbGlwLnBuZ1wiO1xuICAgIGFycm93LnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XG4gICAgYXJyb3cuc3R5bGUubWFyZ2luVG9wID0gXCIyMHB4XCI7XG4gICAgdmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXG4gICAgcmV0dXJuIHZpZXdcbn0iLCJpbXBvcnQge21vZGFsfSBmcm9tICcuL21vZGFsLmpzJztcbmltcG9ydCB7IHZpZGVvcyB9IGZyb20gJy4vdmlkZW9kYXRhJztcbmltcG9ydCAnLi9jc3MvZ2FsbGVyeS5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnYWxsZXJ5Q29udGVudCgpIHtcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYWxsZXJ5LmlkID0gXCJnYWxsZXJ5XCI7XG5cbiAgICBjb25zdCBjcmVhdGVEaXZGcmFtZSA9ICh2aWRlbykgPT4ge1xuICAgICAgICBjb25zdCBkaXZUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZUYWcuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpO1xuICAgICAgICBkaXZUYWcuYXBwZW5kKHZpZGVvKTtcbiAgICAgICAgcmV0dXJuIGRpdlRhZ1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVZpZCA9IChzcmMsIGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB2aWRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2aWRUYWcuaWQgPSBpbmRleDtcbiAgICAgICAgdmlkVGFnLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICB2aWRUYWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIHZpZFRhZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlkVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9Tb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICAgICAgICAgICAgdmlkZW9Tb3VyY2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3JjKVxuICAgICAgICAgICAgdmlkZW9Tb3VyY2UudHlwZSA9IFwidmlkZW8vbXA0XCI7XG4gICAgICAgICAgICBpZiAobW9kYWxDb250ZW50LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRlbnQuY2hpbGROb2Rlc1swXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50Lmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgbW9kYWxDb250ZW50Lm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5zdHlsZS53aWR0aCA9IFwiNjAwcHhcIjtcbiAgICAgICAgICAgIG1vZGFsQ29udGVudC5zdHlsZS5oZWlnaHQgPSBcIjYwMHB4XCI7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodmlkZW9Tb3VyY2UpO1xuICAgICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHZpZFRhZ1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmlkZW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZpZHNyYyA9IHZpZGVvc1tpXS5zcmM7XG4gICAgICAgIGNvbnN0IHZpZENvbG9yID0gdmlkZW9zW2ldLnJnYjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHZpZFBpY3R1cmUgPSBjcmVhdGVWaWQodmlkc3JjLCB2aWRDb2xvciwgaSk7XG4gICAgICAgIGNvbnN0IGRpdkZyYW1lID0gY3JlYXRlRGl2RnJhbWUodmlkUGljdHVyZSk7XG4gICAgICAgIFxuICAgICAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGRpdkZyYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVzZXQuaWQgPSBcInJlc2V0XCI7XG4gICAgLy8gcmVzZXQudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgcmVzZXQuc3JjID0gXCJodHRwczovL2Z1cnRhZXYucnUvcHJldmlldy91bmRvX3NtYWxsLnBuZ1wiO1xuICAgIHJlc2V0LnN0eWxlLndpZHRoID0gXCI1MHB4XCJcbiAgICByZXNldC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAvLyByZXNldC50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXNldC5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJyb3RhdGUzNjBcIjtcbiAgICAgICAgcmVzZXQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuNXNcIjtcbiAgICAgICAgY29uc3QgcGljdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpY3R1cmVcIik7XG4gICAgICAgIHBpY3R1cmVzLmZvckVhY2gocGljdHVyZSA9PiB7XG4gICAgICAgICAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXQuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICByZXNldC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IFwiXCI7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pXG5cbiAgICBjb25zdCBwaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpeC5pZCA9IFwicGl4XCI7XG4gICAgcGl4LmFwcGVuZENoaWxkKGdhbGxlcnkpO1xuICAgIHBpeC5hcHBlbmRDaGlsZChyZXNldCk7XG5cbiAgICByZXR1cm4gcGl4XG59IiwiaW1wb3J0IGltZ0EgZnJvbSAnLi9pbWFnZXMvYS5qcGcnO1xuaW1wb3J0IGltZ0IgZnJvbSAnLi9pbWFnZXMvYi5qcGcnO1xuaW1wb3J0IGltZ0MgZnJvbSAnLi9pbWFnZXMvYy5qcGcnO1xuaW1wb3J0IGltZ0QgZnJvbSAnLi9pbWFnZXMvZC5qcGcnO1xuaW1wb3J0IGltZ0UgZnJvbSAnLi9pbWFnZXMvZS5qcGcnO1xuaW1wb3J0IGltZ0YgZnJvbSAnLi9pbWFnZXMvZi5qcGcnO1xuaW1wb3J0IGltZ0cgZnJvbSAnLi9pbWFnZXMvZy5qcGcnO1xuaW1wb3J0IGltZ0ggZnJvbSAnLi9pbWFnZXMvaC5qcGcnO1xuaW1wb3J0IGltZ0kgZnJvbSAnLi9pbWFnZXMvaS5qcGcnO1xuaW1wb3J0IGNhcm91c2VsMSBmcm9tICcuL2ltYWdlcy9jYXJvdXNlbC0xLmpwZyc7XG5pbXBvcnQgY2Fyb3VzZWwyIGZyb20gJy4vaW1hZ2VzL2Nhcm91c2VsLTIuanBnJztcblxuZXhwb3J0IGNvbnN0IGltZ3MgPSBbXG4gICAgY2Fyb3VzZWwxLCBjYXJvdXNlbDIsIGNhcm91c2VsMSwgY2Fyb3VzZWwyLFxuICAgIGNhcm91c2VsMSwgY2Fyb3VzZWwyLCBjYXJvdXNlbDEsXG5dO1xuXG5pbXBvcnQgbWFwYTEgZnJvbSAnLi9pbWFnZXMvbWFwYS0xLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtYXBhcyA9IFtcbiAgICBtYXBhMSwgbWFwYTEsIG1hcGExLCBtYXBhMSxcbl0iLCJpbXBvcnQgeyBtYXBhcyB9IGZyb20gJy4vaW1nZGF0YSc7XG5pbXBvcnQgJy4vY3NzL21hcC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFwc0xpYnJhcnkoKSB7XG4gICAgY29uc3QgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlicmFyeS5pZCA9IFwibGlicmFyeVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcIm1hcGFcIik7XG4gICAgICAgIGltZy5zcmMgPSBtYXBhc1tpXTtcbiAgICAgICAgbGlicmFyeS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH1cblxuICAgIHJldHVybiBsaWJyYXJ5XG59IiwiaW1wb3J0ICcuL2Nzcy9tb2RhbC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubW9kYWwuaWQgPSBcIm1vZGFsXCI7XG5tb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG1vZGFsLmNoaWxkTm9kZXNbMV0ucmVtb3ZlKCk7XG59KVxuY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCJcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuIiwiaW1wb3J0ICcuL2Nzcy90ZXh0Y29udGVudC5jc3MnO1xuXG5jb25zdCB0ZXh0ID0gYFxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGVnZXN0YXMgZWxpdCBhIGxpZ3VsYSBjb25kaW1lbnR1bSwgdml0YWUgdWx0cmljZXMgZW5pbSB2ZW5lbmF0aXMuIEN1cmFiaXR1ciBzaXQgYW1ldCBlbGVtZW50dW0gbG9yZW0sIGluIGxvYm9ydGlzIHB1cnVzLiBEb25lYyB0dXJwaXMgbmliaCwgaW1wZXJkaWV0IGV0IHRlbGx1cyBzaXQgYW1ldCwgZXVpc21vZCBldWlzbW9kIHNlbS4gUHJhZXNlbnQgbnVuYyBlcmF0LCBvcm5hcmUgc2VkIG1hbGVzdWFkYSBldCwgdmFyaXVzIHF1aXMgYXJjdS4gVml2YW11cyB1cm5hIGxhY3VzLCBpbnRlcmR1bSBhdCBsYWN1cyBxdWlzLCBmaW5pYnVzIHZlaGljdWxhIGRvbG9yLiBJbiBjb25zZWN0ZXR1ciBhY2N1bXNhbiBibGFuZGl0LiBTZWQgaWQgdHVycGlzIHZpdGFlIGVyb3MgZmV1Z2lhdCBhbGlxdWFtIGlkIG5lYyBtYXNzYS4gU2VkIHZpdGFlIGZhdWNpYnVzIGp1c3RvLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gUXVpc3F1ZSBiaWJlbmR1bSBncmF2aWRhIG5lcXVlLlxuXG5DdXJhYml0dXIgYWxpcXVldCBzZWQganVzdG8gbmVjIHBoYXJldHJhLiBWaXZhbXVzIHZpdGFlIGVyYXQgYWMgbmliaCBjb25zZXF1YXQgaW1wZXJkaWV0IG5vbiBjb25kaW1lbnR1bSBmZWxpcy4gRXRpYW0gZXUgc29sbGljaXR1ZGluIG51bGxhLiBOYW0gbW9sbGlzIGZhY2lsaXNpcyBtaSwgaWQgZWxlaWZlbmQgZW5pbSBmYXVjaWJ1cyBwbGFjZXJhdC4gU3VzcGVuZGlzc2UgdmVsaXQgcHVydXMsIHBlbGxlbnRlc3F1ZSBldCBsYWN1cyBtb2xlc3RpZSwgaGVuZHJlcml0IHN1c2NpcGl0IG51bGxhLiBWaXZhbXVzIHB1cnVzIHVybmEsIGludGVyZHVtIHV0IHNvZGFsZXMgZXQsIGZhY2lsaXNpcyB2ZWwgbWkuIEV0aWFtIGxhY2luaWEgcG9ydHRpdG9yIGltcGVyZGlldC4gUXVpc3F1ZSBncmF2aWRhIGVsaXQgZXUgcHVydXMgbG9ib3J0aXMgdGVtcHVzLiBTZWQgc2l0IGFtZXQgbGFjdXMgdHJpc3RpcXVlIG1hdXJpcyBlZmZpY2l0dXIgZmF1Y2lidXMgc2VkIGVnZXQgbG9yZW0uIENyYXMgc2l0IGFtZXQgbGVjdHVzIGluIGxlbyBzY2VsZXJpc3F1ZSBjb252YWxsaXMuIEN1cmFiaXR1ciBzZWQgbGFjdXMgbm9uIGxpZ3VsYSBhbGlxdWFtIGVsZWlmZW5kIHNlZCBhIHB1cnVzLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gU3VzcGVuZGlzc2Ugc2VkIHZ1bHB1dGF0ZSBlbmltLiBWaXZhbXVzIHNpdCBhbWV0IGVnZXN0YXMgYXJjdS4gTW9yYmkgbnVsbGEgZmVsaXMsIHN1c2NpcGl0IGN1cnN1cyBuaXNpIGFjLCBzb2RhbGVzIG1vbGxpcyBsaWd1bGEuIFByYWVzZW50IGNvbmd1ZSBtb2xlc3RpZSBtb2xlc3RpZS5cblxuRHVpcyBtYWduYSBsZWN0dXMsIGJsYW5kaXQgdmVsIGVyYXQgZWdldCwgbW9sZXN0aWUgcHVsdmluYXIgbnVuYy4gU2VkIGFsaXF1YW0gdWx0cmljaWVzIG51bGxhLCBlZ2V0IGNvbnNlcXVhdCB0ZWxsdXMgcG9ydGEgdmVsLiBDdXJhYml0dXIgcXVhbSBudWxsYSwgZmFjaWxpc2lzIHZpdGFlIGVzdCB2aXRhZSwgZmluaWJ1cyBjb25zZWN0ZXR1ciBsb3JlbS4gUHJvaW4gdml2ZXJyYSBtYXNzYSBub24gZXN0IHByZXRpdW0gb3JuYXJlLiBOdWxsYW0gc2l0IGFtZXQgZmVsaXMgZWdldCB0ZWxsdXMgYmliZW5kdW0gdGluY2lkdW50IGV0IHF1aXMgbGVvLiBVdCBwb3J0YSBhdCBuaXNpIHZpdGFlIHNjZWxlcmlzcXVlLiBOYW0gYSBxdWFtIG1hbGVzdWFkYSwgdGVtcG9yIHJpc3VzIGV1LCBpYWN1bGlzIGVzdC5cblxuTW9yYmkgaGVuZHJlcml0IHNhZ2l0dGlzIHRlbXB1cy4gUHJhZXNlbnQgdGVtcHVzIGxpZ3VsYSBzaXQgYW1ldCB2ZWxpdCBldWlzbW9kLCBtb2xsaXMgY29uc2VxdWF0IGR1aSBtYXR0aXMuIE51bGxhbSBpZCBmZXVnaWF0IHVybmEuIFBoYXNlbGx1cyB2ZWwgZWdlc3RhcyBsaWJlcm8uIFNlZCBldCBwbGFjZXJhdCBvZGlvLiBDcmFzIHB1bHZpbmFyIHZlaGljdWxhIGFyY3UsIHNlZCBibGFuZGl0IGlwc3VtIGxhb3JlZXQgZWdldC4gTnVsbGFtIG1heGltdXMsIG9kaW8gYWMgc29sbGljaXR1ZGluIHByZXRpdW0sIG1hdXJpcyBlcmF0IHZpdmVycmEgYXJjdSwgbm9uIGdyYXZpZGEgb2RpbyBmZWxpcyBmcmluZ2lsbGEgbmliaC5cblxuUHJvaW4gaW4gdmVsaXQgdmVoaWN1bGEsIHRlbXBvciBtZXR1cyBldCwgc29kYWxlcyBsZWN0dXMuIEludGVnZXIgZWdldCBhbnRlIGFjIGxvcmVtIGF1Y3RvciBzYWdpdHRpcy4gRG9uZWMgbnVsbGEgbmlzaSwgZGljdHVtIHZlbCBtZXR1cyBhYywgYWNjdW1zYW4gdnVscHV0YXRlIG1hc3NhLiBQcm9pbiB2ZWwgY29uc2VjdGV0dXIgbGFjdXMsIHF1aXMgdml2ZXJyYSBhbnRlLiBWaXZhbXVzIGluIGZlbGlzIGEgZXJhdCBsdWN0dXMgdmVoaWN1bGEuIE1hdXJpcyBldCBtYXNzYSBzZWQgZWxpdCBtYXR0aXMgdGVtcHVzLiBNYXVyaXMgb2RpbyBzYXBpZW4sIHRlbXBvciBldSB2ZW5lbmF0aXMgYSwgaW50ZXJkdW0gc2VkIHZlbGl0LlxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRDb250ZW50KCkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICB0ZXh0Q29udGFpbmVyLmlkID0gXCJ0ZXh0LWNvbnRhaW5lclwiO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRleHRDb250YWluZXJcbn0iLCJpbXBvcnQgdmlkMSBmcm9tICcuL3ZpZGVvLzEubXA0JztcbmltcG9ydCB2aWQyIGZyb20gJy4vdmlkZW8vMi5tcDQnO1xuaW1wb3J0IHZpZDMgZnJvbSAnLi92aWRlby8zLm1wNCc7XG5pbXBvcnQgdmlkNCBmcm9tICcuL3ZpZGVvLzQubXA0JztcbmltcG9ydCB2aWQ1IGZyb20gJy4vdmlkZW8vNS5tcDQnO1xuaW1wb3J0IHZpZDYgZnJvbSAnLi92aWRlby82Lm1wNCc7XG5pbXBvcnQgdmlkNyBmcm9tICcuL3ZpZGVvLzcubXA0JztcbmltcG9ydCB2aWQ4IGZyb20gJy4vdmlkZW8vOC5tcDQnO1xuaW1wb3J0IHZpZDkgZnJvbSAnLi92aWRlby85Lm1wNCc7XG5pbXBvcnQgdmlkMTAgZnJvbSAnLi92aWRlby8xMC5tcDQnO1xuaW1wb3J0IHZpZDExIGZyb20gJy4vdmlkZW8vMTEubXA0JztcbmltcG9ydCB2aWQxMiBmcm9tICcuL3ZpZGVvLzEyLm1wNCc7XG5pbXBvcnQgdmlkMTMgZnJvbSAnLi92aWRlby8xMy5tcDQnO1xuaW1wb3J0IHZpZDE0IGZyb20gJy4vdmlkZW8vMTQubXA0JztcblxuZXhwb3J0IGNvbnN0IHZpZGVvcyA9IFtcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuICAgIHtzcmM6IHZpZDksIHJnYjogXCJyZ2IoMTQyLCAxNjMsIDE5NylcIn0sXG4gICAge3NyYzogdmlkMTAsIHJnYjogXCJyZ2IoMTc4LCAxNCwgMylcIn0sXG4gICAge3NyYzogdmlkMTEsIHJnYjogXCJyZ2IoMCwgODgsIDEyNSlcIn0sXG4gICAge3NyYzogdmlkMTIsIHJnYjogXCJyZ2IoODUsIDEzMCwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQxMywgcmdiOiBcInJnYig1OSwgOTIsIDIwMilcIn0sXG4gICAge3NyYzogdmlkMTQsIHJnYjogXCJyZ2IoMjA3LCAxNDUsIDYzKVwifSxcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuICAgIHtzcmM6IHZpZDksIHJnYjogXCJyZ2IoMTQyLCAxNjMsIDE5NylcIn0sXG4gICAge3NyYzogdmlkMTAsIHJnYjogXCJyZ2IoMTc4LCAxNCwgMylcIn0sXG4gICAge3NyYzogdmlkMTEsIHJnYjogXCJyZ2IoMCwgODgsIDEyNSlcIn0sXG4gICAge3NyYzogdmlkMTIsIHJnYjogXCJyZ2IoODUsIDEzMCwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQxMywgcmdiOiBcInJnYig1OSwgOTIsIDIwMilcIn0sXG4gICAge3NyYzogdmlkMTQsIHJnYjogXCJyZ2IoMjA3LCAxNDUsIDYzKVwifSxcbiAgICB7c3JjOiB2aWQxLCByZ2I6IFwicmdiKDExMCwgNiwgMzYpXCJ9LFxuICAgIHtzcmM6IHZpZDIsIHJnYjogXCJyZ2IoMTIzLCAxNTQsIDEzNClcIn0sXG4gICAge3NyYzogdmlkMywgcmdiOiBcInJnYig5NCwgOTMsIDExMylcIn0sXG4gICAge3NyYzogdmlkNCwgcmdiOiBcInJnYigxODQsIDE1MCwgMTM1KVwifSxcbiAgICB7c3JjOiB2aWQ1LCByZ2I6IFwicmdiKDE1NCwgMTU5LCAxNTYpXCJ9LFxuICAgIHtzcmM6IHZpZDYsIHJnYjogXCJyZ2IoNDYsIDk5LCA5MylcIn0sXG4gICAge3NyYzogdmlkNywgcmdiOiBcInJnYigxMzcsIDE0MSwgMTg0KVwifSxcbiAgICB7c3JjOiB2aWQ4LCByZ2I6IFwicmdiKDIwNiwgMTc5LCAyMDcpXCJ9LFxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHtnYWxsZXJ5Q29udGVudH0gZnJvbSAnLi9nYWxsZXJ5LmpzJztcbmltcG9ydCB7IG1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7XG5pbXBvcnQgeyB0ZXh0Q29udGVudCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3IH0gZnJvbSAnLi9maXJzdHZpZXcnO1xuaW1wb3J0IHsgY3JlYXRlQ2Fyb3VzZWwsIGNhcm91c2VsRnVuY3Rpb24gfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IGNyZWF0ZU1hcHNMaWJyYXJ5IH0gZnJvbSAnLi9tYXAnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVWaWV3KCkpXG5cbmNvbnN0IG5hdm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubmF2bWVudS5pZCA9IFwibmF2bWVudVwiO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIlN1cGVyZmljaWVzXCI7XG5uYXZtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5jb25zdCBwYWdlTmFtZXMgPSBbXG4gICAge3RpdGxlOiBcIlBpeFwiLCBjb250ZW50OiBnYWxsZXJ5Q29udGVudCgpfSxcbiAgICB7dGl0bGU6IFwiQWxndW5vcyBlc2NyaXRvc1wiLCBjb250ZW50OiB0ZXh0Q29udGVudCgpfSwgXG4gICAge3RpdGxlOiBcIlJlY29ycmlkb3NcIiwgY29udGVudDogY3JlYXRlTWFwc0xpYnJhcnkoKX0sXG4gICAgLy8ge3RpdGxlOiBcIlN1cGVyZmljaWVzXCIsIGNvbnRlbnQ6IGNyZWF0ZUNhcm91c2VsKCksIHNlY29uZDogY2Fyb3VzZWxGdW5jdGlvbigpfVxuXTtcbnBhZ2VOYW1lcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudS5pZCA9IHBhZ2UudGl0bGU7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IHBhZ2UudGl0bGU7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlLmNvbnRlbnQpXG4gICAgfSlcbiAgICBwYWdlcy5hcHBlbmRDaGlsZChtZW51KTtcbn0pXG5cbmNvbnN0IHN1cGVyZmljaWVzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc3VwZXJmaWNpZXNNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5zdXBlcmZpY2llc01lbnUuaWQgPSBcIlN1cGVyZmljaWVzXCI7XG5zdXBlcmZpY2llc01lbnUudGV4dENvbnRlbnQgPSBcIlN1cGVyZmljaWVzXCI7XG5zdXBlcmZpY2llc01lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJvdXNlbCgpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2Fyb3VzZWxGdW5jdGlvbigpO1xuICAgIH0sIDUwMCk7XG59KVxucGFnZXMuYXBwZW5kQ2hpbGQoc3VwZXJmaWNpZXNNZW51KVxubmF2bWVudS5hcHBlbmRDaGlsZChwYWdlcyk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobmF2bWVudSk7XG5cbmNvbnN0IG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW1cIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVudXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1lbnVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBtZW51c1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KVxufVxuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbndyYXBwZXIuaWQgPSBcIndyYXBwZXJcIjtcblxuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4vLyBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbi8vIGgxLnRleHRDb250ZW50ID0gXCJHYWxlcmlhXCI7XG4vLyBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4vLyB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xud3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChnYWxsZXJ5Q29udGVudCgpKTtcbm1lbnVzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbndyYXBwZXIuYXBwZW5kQ2hpbGQobW9kYWwpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==