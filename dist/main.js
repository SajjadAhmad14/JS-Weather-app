/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Weather-app/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #407de6;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nmain {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  height: 90vh;\\n  width: 50%;\\n  border-radius: 20px;\\n  background-color: #4c8cfc;\\n  font-family: 'Montserrat', sans-serif;\\n  color: #fff;\\n}\\n\\n.app-branding {\\n  margin-bottom: 30px;\\n  font-size: 30px;\\n}\\n\\n.app-branding img {\\n  width: 15%;\\n  height: 25%;\\n}\\n\\n.center {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#city {\\n  padding: 5px;\\n  width: 40%;\\n}\\n\\n#search-city {\\n  padding: 5px;\\n}\\n\\n.choose-city {\\n  margin-top: 20px;\\n}\\n\\n#city-container {\\n  margin-top: 30px;\\n  font-size: 50px;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#weather-container {\\n  margin-top: 50px;\\n  font-size: 100px;\\n}\\n\\n#flag-container {\\n  width: 50px;\\n  height: 50px;\\n  margin-left: 10px;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n}\\n\\n#addition-data {\\n  margin-top: 30px;\\n}\\n\\n.toggle { \\n  position : relative ; \\n  display : inline-block; \\n  width : 100px; \\n  height : 52px; \\n  background-color: #407de6; \\n  border-radius: 30px; \\n  border: 2px solid gray; \\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n} \\n\\n.toggle:after { \\n  content: ''; \\n  position: absolute; \\n  width: 50px; \\n  height: 50px; \\n  border-radius: 50%; \\n  background-color: gray; \\n  top: 1px;  \\n  left: 1px; \\n  transition:  all 0.5s; \\n} \\n      \\np { \\n  font-weight: bold; \\n  font-size: 30px;\\n} \\n\\n.checkbox:checked + .toggle::after { \\n  left : 49px;  \\n} \\n      \\n.checkbox:checked + .toggle { \\n  background-color: #4c8cfc; \\n} \\n      \\n.checkbox {  \\n  display : none; \\n} \\n\\n.toggle-container{\\n  position: relative;\\n  bottom: -350px;\\n  right: -270px;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-Weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://JS-Weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-Weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ \"./src/weatherData.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst form = document.querySelector('form');\n\n(0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.processweatherData)().then((obj) => {\n  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setDefaultCity)(obj);\n  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setDefaultWeather)(obj);\n  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.additionDataFefault)(obj);\n});\n\nconst getLocation = (e) => {\n  e.preventDefault();\n  const city = document.getElementById('city').value;\n  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.processweatherData)(city).then((obj) => {\n    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setCityName)(obj);\n    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setWeather)(obj);\n    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.additionalData)(obj);\n  }).catch((error) => {\n    alert(error.name + ': Please Enter A Valid City Name!');\n  })\n  form.reset();\n};\n\nform.addEventListener('submit', getLocation);\n\n  const check = document.getElementsByClassName('checkbox')[0];\n  check.addEventListener('click', () => {\n    if(check.value == 'F') {\n      check.value = 'C';\n    }\n    else {\n      check.value = 'F';\n    }\n    console.log(check.value)\n  })\n\n//# sourceURL=webpack://JS-Weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"processweatherData\": () => (/* binding */ processweatherData),\n/* harmony export */   \"setCityName\": () => (/* binding */ setCityName),\n/* harmony export */   \"setDefaultCity\": () => (/* binding */ setDefaultCity),\n/* harmony export */   \"setDefaultWeather\": () => (/* binding */ setDefaultWeather),\n/* harmony export */   \"setWeather\": () => (/* binding */ setWeather),\n/* harmony export */   \"additionDataFefault\": () => (/* binding */ additionDataFefault),\n/* harmony export */   \"additionalData\": () => (/* binding */ additionalData)\n/* harmony export */ });\nconst getWeatherData = async (location) => {\n  const key = 'ab1bb349d168e0577aa7f9a8a76025a4';\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;\n  const weatherData = await fetch(url);\n  return weatherData;\n};\n\n\nconst getFlags = async (code) => {\n  const data = await fetch('https://restcountries.eu/rest/v2/all');\n  const response = await data.json();\n  return response.find(country => country.alpha2Code === code);\n};\n\nconst processweatherData = async (location = 'Abbottabad') => {\n  const response = await getWeatherData(location);\n  const data = await response.json();\n  return data;\n};\n\nconst setDefaultCity = (obj) => {\n  const city = obj.name;\n  const { country } = obj.sys;\n  const flagContainer = document.createElement('div');\n  flagContainer.setAttribute('id', 'flag-container');\n  getFlags(country).then((obj) => {\n    flagContainer.style.backgroundImage = `url(${obj.flag})`;\n  });\n  const main = document.querySelector('main');\n  const cityContainer = document.createElement('div');\n  cityContainer.classList.add('center');\n  cityContainer.setAttribute('id', 'city-container');\n  const cityName = document.createElement('h1');\n  cityName.setAttribute('id', 'city-name');\n  cityName.textContent = `${city}, ${country}`;\n  cityContainer.appendChild(cityName);\n  cityContainer.appendChild(flagContainer);\n  main.appendChild(cityContainer);\n};\nconst setCityName = (obj) => {\n  const city = obj.name;\n  const { country } = obj.sys;\n  const flagContainer = document.getElementById('flag-container');\n  getFlags(country).then((obj) => {\n    flagContainer.style.backgroundImage = `url(${obj.flag})`;\n  });\n  const cityName = document.getElementById('city-name');\n  cityName.textContent = `${city}, ${country}`;\n};\n\nconst setDefaultWeather = (obj) => {\n  let weatherInCelsius = obj.main.temp - 273.15;\n  weatherInCelsius = Math.floor(weatherInCelsius);\n  const main = document.querySelector('main');\n  const weatherContainer = document.createElement('div');\n  weatherContainer.classList.add('center');\n  weatherContainer.setAttribute('id', 'weather-container');\n  weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>\n  <h3>&#8451;</h3>`;\n  main.appendChild(weatherContainer);\n};\n\nconst setWeather = (obj) => {\n  let weatherInCelsius = obj.main.temp - 273.15;\n  weatherInCelsius = Math.floor(weatherInCelsius);\n  const weatherUpdate = document.getElementById('weather-update');\n  weatherUpdate.textContent = weatherInCelsius;\n};\n\nconst additionDataFefault = (obj) => {\n  let feelsLike = obj.main.feels_like - 273.15;\n  feelsLike = Math.floor(feelsLike);\n  let minTemp = obj.main.temp_min - 273.15;\n  minTemp = Math.floor(minTemp);\n  const clouds = obj.weather[0].description;\n  const main = document.querySelector('main');\n  const dataContainer = document.createElement('div');\n  dataContainer.classList.add('center');\n  dataContainer.setAttribute('id', 'addition-data');\n  const feelsLikeHead = document.createElement('h1');\n  feelsLikeHead.setAttribute('id', 'feels-like');\n  const minTempHead = document.createElement('h1');\n  minTempHead.setAttribute('id', 'min-temp');\n  const cloudsHead = document.createElement('h1');\n  cloudsHead.setAttribute('id', 'clouds');\n  feelsLikeHead.textContent = `Feels Like: ${feelsLike}C |`;\n  minTempHead.textContent = ` Min Temperature: ${minTemp}C |`;\n  cloudsHead.textContent = ` Clouds: ${clouds}`;\n  dataContainer.appendChild(feelsLikeHead);\n  dataContainer.appendChild(minTempHead);\n  dataContainer.appendChild(cloudsHead);\n  main.appendChild(dataContainer);\n};\n\nconst additionalData = (obj) => {\n  let feelsLike = obj.main.feels_like - 273.15;\n  feelsLike = Math.floor(feelsLike);\n  let minTemp = obj.main.temp_min - 273.15;\n  minTemp = Math.floor(minTemp);\n  const clouds = obj.weather[0].description;\n  const feelsLikeHead = document.getElementById('feels-like');\n  const minTempHead = document.getElementById('min-temp');\n  const cloudsHead = document.getElementById('clouds');\n  feelsLikeHead.textContent = `Feels Like: ${feelsLike}C |`;\n  minTempHead.textContent = `Min Temperature: ${minTemp}C |`;\n  cloudsHead.textContent = ` Clouds: ${clouds}`;\n};\n\n\n//# sourceURL=webpack://JS-Weather-app/./src/weatherData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;