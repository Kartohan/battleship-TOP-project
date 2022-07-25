/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n.playboard {\\n  height: 400px;\\n  width: 400px;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 40px;\\n  width: 40px;\\n  border: 1px solid black;\\n  font-size: 1.4em;\\n}\\n.gameboard {\\n  display: flex;\\n  gap: 50px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-top-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-top-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-top-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Game {\n  constructor() {\n    this.playerOne = new Player(\"Player\");\n    this.playerAI = new Player(\"Computer\");\n  }\n\n  renderPlayer(obj) {\n    obj.innerHTML = \"\";\n    this.playerOne.gameboard.board.forEach((item) => {\n      let cell = document.createElement(\"div\");\n      cell.dataset.x = item.x;\n      cell.dataset.y = item.y;\n      cell.classList.add(\"cell\");\n      obj.append(cell);\n      if (item.ship) {\n        cell.style.border = \"1px solid blue\";\n        cell.style.backgroundColor = \"rgb(153 198 255)\";\n      }\n      if (item.attacked) {\n        cell.innerText = \"•\";\n        cell.dataset.attacked = \"true\";\n      }\n      if (item.attacked && item.ship) {\n        cell.style.backgroundColor = \"rgb(255 153 153)\";\n        cell.style.border = \"1px solid red\";\n        cell.innerText = \"\";\n      }\n    });\n  }\n  renderComputer(obj) {\n    obj.innerHTML = \"\";\n    this.playerAI.gameboard.board.forEach((item) => {\n      let cell = document.createElement(\"div\");\n      cell.dataset.x = item.x;\n      cell.dataset.y = item.y;\n      cell.classList.add(\"cell\");\n      cell.classList.add(\"computer\");\n      obj.append(cell);\n      if (item.attacked) {\n        cell.innerText = \"•\";\n        cell.dataset.attacked = \"true\";\n        cell.style.backgroundColor = \"#8080804f\";\n      }\n      if (item.attacked && item.ship) {\n        cell.style.backgroundColor = \"rgb(255 153 153)\";\n        cell.innerText = \"\";\n        cell.style.border = \"1px solid red\";\n      }\n    });\n  }\n\n  gameAuto() {\n    this.playerOne.putRandomly();\n    this.playerAI.putRandomly();\n    let gameOver = false;\n    let turn = 0;\n    do {\n      this.playerOne.attackRandomly(this.playerAI);\n      this.playerAI.attackRandomly(this.playerOne);\n      turn++;\n      if (\n        this.playerOne.gameboard.isGameOver === true ||\n        this.playerAI.gameboard.isGameOver === true\n      ) {\n        gameOver = true;\n      }\n    } while (gameOver === false);\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://battleship-top-project/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

eval("class Gameboard {\n  constructor(boardSize) {\n    this.board = (() => {\n      let board = [];\n      for (let i = 1; i <= boardSize; i++) {\n        for (let j = 1; j <= boardSize; j++) {\n          let coords = {\n            x: i,\n            y: j,\n          };\n          board.push(coords);\n        }\n      }\n      return board;\n    })();\n    this.size = boardSize;\n    this.isGameOver = false;\n  }\n  putShip(x, y, ship, direction) {\n    if (direction === \"h\") {\n      let j = 0;\n      for (let i = y; i < ship.length.length + y; i++) {\n        let checkCell = this.board.find((item) => item.x === x && item.y === i);\n        if (checkCell == undefined) {\n          throw new Error(\"cannot be placed outside the field\");\n        }\n        if (checkCell.marked) {\n          throw new Error(\"cannot be placed near the another ship\");\n        }\n      }\n      for (let i = y; i < ship.length.length + y; i++) {\n        let cell = this.board.find((item) => item.x === x && item.y === i);\n        let index = this.board.findIndex(\n          (item) => item.x === x && item.y === i\n        );\n        cell.ship = ship;\n        cell.shipPart = ship.length[j];\n        this.board[index] = cell;\n        this.makeMarked(x, i, \"marked\");\n        j++;\n      }\n    } else if (direction === \"v\") {\n      let j = 0;\n      for (let i = x; i < ship.length.length + x; i++) {\n        let checkCell = this.board.find((item) => item.x === i && item.y === y);\n        if (checkCell == undefined) {\n          throw new Error(\"cannot be placed outside the field\");\n        }\n        if (checkCell.marked) {\n          throw new Error(\"cannot be placed near the another ship\");\n        }\n      }\n      for (let i = x; i < ship.length.length + x; i++) {\n        let cell = this.board.find((item) => item.x === i && item.y === y);\n        let index = this.board.findIndex(\n          (item) => item.x === i && item.y === y\n        );\n        cell.ship = ship;\n        cell.shipPart = ship.length[j];\n        this.board[index] = cell;\n        this.makeMarked(i, y, \"marked\");\n        j++;\n      }\n    }\n  }\n  checkGameOver() {\n    let cellsWithShips = this.board.filter((item) => item.ship);\n    if (cellsWithShips.every((item) => item.ship.sunk)) {\n      this.isGameOver = true;\n    }\n  }\n  recieveAttack(x, y) {\n    let cellIndex = this.board.findIndex(\n      (item) => item.x === x && item.y === y\n    );\n    if (this.board[cellIndex].attacked) {\n      throw new Error(\"cannot attack in the already attacked cell\");\n    }\n    if (this.board.find((item) => item.x === x && item.y === y).ship) {\n      this.board[cellIndex].attacked = true;\n      this.board[cellIndex].ship.hit(this.board[cellIndex].shipPart);\n      this.makeMarked(x, y, \"attacked\");\n      if (this.board.find((item) => item.x === x && item.y === y).ship.sunk) {\n        // for (\n        //   let i = 0;\n        //   i <=\n        //   this.board.find((item) => item.x === x && item.y === y).ship.length\n        //     .length;\n        //   i++\n        // ) {\n        //   let shipName = this.board[cellIndex].ship.name;\n        //   let cell = this.board.find(item => item.ship)\n        //   this.makeMarked(cell.x, cell.y, \"sunk\");\n        // }\n        let shipName = this.board[cellIndex].ship.name;\n        let sunkShipCells = this.board.filter(\n          (item) => item.shipPart && item.ship.name === shipName\n        );\n        for (let i = 0; i < sunkShipCells.length; i++) {\n          this.makeMarked(sunkShipCells[i].x, sunkShipCells[i].y, \"sunk\");\n        }\n      }\n    } else {\n      this.board[cellIndex].attacked = true;\n    }\n    this.checkGameOver();\n  }\n  makeMarked(x, y, mark) {\n    let markedCoodrsArray = [];\n    for (let i = -1; i <= 1; i++) {\n      for (let j = -1; j <= 1; j++) {\n        let coords = {\n          x: i,\n          y: j,\n        };\n        markedCoodrsArray.push(coords);\n      }\n    }\n    let markedCoordsArrayWitoutZeros = [];\n    for (let i = -1; i <= 1; i++) {\n      for (let j = -1; j <= 1; j++) {\n        if (i === 0 || j === 0) {\n          continue;\n        }\n        let coords = {\n          x: i,\n          y: j,\n        };\n        markedCoordsArrayWitoutZeros.push(coords);\n      }\n    }\n\n    let cell = this.board.find((item) => item.x === x && item.y === y);\n    markedCoodrsArray.forEach((item) => {\n      let nextCell = {\n        x: cell.x - item.x,\n        y: cell.y - item.y,\n      };\n      let index = this.board.findIndex(\n        (item) => item.x === nextCell.x && item.y === nextCell.y\n      );\n      if (this.board[index] && mark === \"marked\") {\n        this.board[index].marked = true;\n      } else if (this.board[index] && mark === \"sunk\") {\n        this.board[index].attacked = true;\n      }\n    });\n    markedCoordsArrayWitoutZeros.forEach((item) => {\n      let nextCell = {\n        x: cell.x - item.x,\n        y: cell.y - item.y,\n      };\n      let index = this.board.findIndex(\n        (item) => item.x === nextCell.x && item.y === nextCell.y\n      );\n      if (this.board[index] && mark === \"attacked\") {\n        this.board[index].attacked = true;\n      }\n    });\n    return this.board;\n  }\n}\n\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack://battleship-top-project/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nlet game = new Game();\n\nconst body = document.querySelector(\"body\");\nconst gameBoard = document.createElement(\"div\");\nconst playboardPlayerOne = document.createElement(\"div\");\nconst playboardPlayerAI = document.createElement(\"div\");\nconst randomButton = document.createElement(\"button\");\nconst startButton = document.createElement(\"button\");\nconst restartButton = document.createElement(\"button\");\nconst message = document.createElement(\"p\");\nlet isGameStarted = false;\n\nrandomButton.innerText = \"Randomize\";\nstartButton.innerText = \"Start Game\";\nrestartButton.innerText = \"Restart Game\";\nmessage.innerText = \"Place ships!\";\n\ngameBoard.classList.add(\"gameboard\");\nplayboardPlayerOne.classList.add(\"playboard\");\nplayboardPlayerAI.classList.add(\"playboard\");\nrestartButton.style.display = \"none\";\n\ngame.renderPlayer(playboardPlayerOne);\ngame.renderComputer(playboardPlayerAI);\n\nrandomButton.addEventListener(\"click\", (e) => {\n  game.playerOne.putRandomly();\n  game.renderPlayer(playboardPlayerOne);\n});\n\nstartButton.addEventListener(\"click\", (e) => {\n  let checkShips = [];\n  game.playerOne.ships.forEach((ship) => {\n    let cellsWithShips = game.playerOne.gameboard.board.filter(\n      (item) => item.ship\n    );\n    let findShip = cellsWithShips.find((item) => item.ship.name === ship.name);\n    if (findShip) {\n      checkShips.push(true);\n    } else {\n      checkShips.push(false);\n    }\n  });\n  if (checkShips.every((item) => item === true)) {\n    game.playerAI.putRandomly();\n    randomButton.style.display = \"none\";\n    startButton.style.display = \"none\";\n    restartButton.style.display = \"inline-block\";\n    message.innerText = \"\";\n    isGameStarted = true;\n  } else {\n    message.innerText = \"Place all ships into the field\";\n  }\n});\n\nrestartButton.addEventListener(\"click\", (e) => {\n  randomButton.style.display = \"inline-block\";\n  startButton.style.display = \"inline-block\";\n  restartButton.style.display = \"none\";\n  message.innerText = \"Place ships!\";\n  isGameStarted = false;\n  game.playerOne.gameboard.isGameOver = false;\n  game.playerAI.gameboard.isGameOver = false;\n  game.playerOne.createNewShips();\n  game.playerAI.createNewShips();\n  game.playerOne.gameboard = new Gameboard(10);\n  game.playerAI.gameboard = new Gameboard(10);\n  game.renderPlayer(playboardPlayerOne);\n  game.renderComputer(playboardPlayerAI);\n});\n\nplayboardPlayerAI.addEventListener(\"click\", (e) => {\n  if (isGameStarted === false) {\n    return;\n  }\n  if (game.playerOne.gameboard.isGameOver === true) {\n    message.innerText = \"Computer Wins!\";\n    return;\n  } else if (game.playerAI.gameboard.isGameOver === true) {\n    message.innerText = \"Player Wins!\";\n    return;\n  }\n  try {\n    game.playerOne.attackEnemy(\n      game.playerAI,\n      Number(e.target.dataset.x),\n      Number(e.target.dataset.y)\n    );\n    game.playerAI.attackRandomly(game.playerOne);\n    message.innerText = \"\";\n  } catch (e) {\n    message.innerText = e;\n  }\n  game.renderPlayer(playboardPlayerOne);\n  game.renderComputer(playboardPlayerAI);\n  if (game.playerOne.gameboard.isGameOver === true) {\n    message.innerText = \"Computer Wins!\";\n    return;\n  } else if (game.playerAI.gameboard.isGameOver === true) {\n    message.innerText = \"Player Wins!\";\n    return;\n  }\n});\n\ngameBoard.append(playboardPlayerOne, playboardPlayerAI);\nbody.append(gameBoard, randomButton, startButton, restartButton, message);\n\n\n//# sourceURL=webpack://battleship-top-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.ships = [\n      new Ship(4, \"Battleship\"),\n      new Ship(3, \"Cruiser_one\"),\n      new Ship(3, \"Cruiser_two\"),\n      new Ship(2, \"Submarine_one\"),\n      new Ship(2, \"Submarine_two\"),\n      new Ship(2, \"Submarine_three\"),\n      new Ship(1, \"Patrol_one\"),\n      new Ship(1, \"Patrol_two\"),\n      new Ship(1, \"Patrol_three\"),\n      new Ship(1, \"Patrol_four\"),\n    ];\n    this.turn = false;\n    this.gameboard = new Gameboard(10);\n  }\n  putRandomly() {\n    this.gameboard = new Gameboard(10);\n    this.ships.forEach((ship) => {\n      let directions = [\"v\", \"h\"];\n      let randomIndex = () => {\n        return Math.round(Math.random());\n      };\n      let index = randomIndex();\n      let cells = [];\n      this.gameboard.board.forEach((item) => {\n        if (directions[index] === \"v\") {\n          let add = true;\n          for (let i = item.x; i < ship.length.length + item.x; i++) {\n            let checkCell = this.gameboard.board.find(\n              (cell) => cell.x === i && cell.y === item.y\n            );\n            if (checkCell == undefined || checkCell.marked) {\n              add = false;\n            }\n          }\n          if (add) {\n            cells.push(item);\n          }\n        } else if (directions[index] === \"h\") {\n          let add = true;\n          for (let i = item.y; i < ship.length.length + item.y; i++) {\n            let checkCell = this.gameboard.board.find(\n              (cell) => cell.x === item.x && cell.y === i\n            );\n            if (checkCell == undefined || checkCell.marked) {\n              add = false;\n            }\n          }\n          if (add) {\n            cells.push(item);\n          }\n        }\n      });\n      let randomCell = cells[Math.floor(Math.random() * cells.length)];\n      this.gameboard.putShip(\n        randomCell.x,\n        randomCell.y,\n        ship,\n        directions[index]\n      );\n    });\n  }\n  attackRandomly(enemy) {\n    let cells = enemy.gameboard.board.filter(\n      (item) => item.attacked == undefined || !item.attacked\n    );\n    let randomCell = cells[Math.floor(Math.random() * cells.length)];\n    enemy.gameboard.recieveAttack(randomCell.x, randomCell.y);\n  }\n  attackEnemy(enemy, x, y) {\n    enemy.gameboard.recieveAttack(x, y);\n  }\n  createNewShips() {\n    let newShips = [];\n    for (let i = 0; i < this.ships.length; i++) {\n      newShips.push(new Ship(this.ships[i].length.length, this.ships[i].name));\n    }\n    this.ships = newShips;\n  }\n}\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack://battleship-top-project/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n  constructor(length, name) {\n    this.length = (() => {\n      let arr = [];\n      for (let i = 1; i <= length; i++) {\n        arr.push(i);\n      }\n      return arr;\n    })();\n    this.sunk = false;\n    this.name = name;\n  }\n  hit(position) {\n    let index = this.length.indexOf(position);\n    this.length[index] = \"x\";\n    this.isSunk();\n  }\n  isSunk() {\n    this.length.every((item) => item === \"x\")\n      ? (this.sunk = true)\n      : (this.sunk = false);\n  }\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://battleship-top-project/./src/ship.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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