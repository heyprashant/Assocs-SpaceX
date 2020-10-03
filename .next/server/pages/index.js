module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Filters/Filters.js":
/*!***************************************!*\
  !*** ./components/Filters/Filters.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters.module.css */ "./components/Filters/Filters.module.css");
/* harmony import */ var _Filters_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Filters_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LaunchYears_LaunchYears__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaunchYears/LaunchYears */ "./components/Filters/LaunchYears/LaunchYears.js");
/* harmony import */ var _SuccessLaunch_SucessLaunch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuccessLaunch/SucessLaunch */ "./components/Filters/SuccessLaunch/SucessLaunch.js");
/* harmony import */ var _SuccessLanding_SucessLanding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuccessLanding/SucessLanding */ "./components/Filters/SuccessLanding/SucessLanding.js");
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\Filters\\Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Filters extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: _Filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: _Filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, "Filters"), __jsx(_LaunchYears_LaunchYears__WEBPACK_IMPORTED_MODULE_2__["default"], {
      yearHandler: this.props.launchYear,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }), __jsx(_SuccessLaunch_SucessLaunch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      SuccessHandler: this.props.launchSuccess,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), __jsx(_SuccessLanding_SucessLanding__WEBPACK_IMPORTED_MODULE_4__["default"], {
      landHandler: this.props.landSuccess,
      disable: this.props.disable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./components/Filters/Filters.module.css":
/*!***********************************************!*\
  !*** ./components/Filters/Filters.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Filters_container__2WzRw",
	"header": "Filters_header__1-K7_"
};


/***/ }),

/***/ "./components/Filters/LaunchYears/LaunchYears.js":
/*!*******************************************************!*\
  !*** ./components/Filters/LaunchYears/LaunchYears.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _LaunchYears_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaunchYears.module.css */ "./components/Filters/LaunchYears/LaunchYears.module.css");
/* harmony import */ var _LaunchYears_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LaunchYears_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\Filters\\LaunchYears\\LaunchYears.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LaunchYears extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      active: null
    });

    _defineProperty(this, "onClickHandler", year => {
      if (this.state.active === year) {
        this.setState({
          active: null
        });
        this.props.yearHandler(null);
      } else {
        this.setState({
          active: year
        });
        this.props.yearHandler(year);
      }
    });
  }

  render() {
    const years = [];

    for (let i = 2006; i <= 2020; i++) {
      years.push(i);
    }

    let launchYears = years.map(year => __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: year,
      name: year,
      onClicked: () => this.onClickHandler(year),
      style: this.state.active == year,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }));
    return __jsx("div", {
      className: _LaunchYears_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: _LaunchYears_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, "Launch Year", __jsx("div", {
      className: _LaunchYears_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.borderBottom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    })), launchYears);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LaunchYears);

/***/ }),

/***/ "./components/Filters/LaunchYears/LaunchYears.module.css":
/*!***************************************************************!*\
  !*** ./components/Filters/LaunchYears/LaunchYears.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LaunchYears_container__1ucrh",
	"header": "LaunchYears_header__2r_Us",
	"borderBottom": "LaunchYears_borderBottom__1WRBP"
};


/***/ }),

/***/ "./components/Filters/SuccessLanding/SucessLanding.js":
/*!************************************************************!*\
  !*** ./components/Filters/SuccessLanding/SucessLanding.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _SucessLanding_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SucessLanding.module.css */ "./components/Filters/SuccessLanding/SucessLanding.module.css");
/* harmony import */ var _SucessLanding_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SucessLanding_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\Filters\\SuccessLanding\\SucessLanding.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class SuccesLand extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      active: null
    });

    _defineProperty(this, "onClickHandler", bool => {
      if (bool === this.state.active) {
        this.setState({
          active: null
        });
        this.props.landHandler(null);
      } else {
        this.setState({
          active: bool
        });
        this.props.landHandler(bool);
      }
    });
  }

  render() {
    return __jsx("div", {
      className: _SucessLanding_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: _SucessLanding_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 18
      }
    }, "Successful Landing", __jsx("div", {
      className: _SucessLanding_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.borderBottom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    })), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "True",
      onClicked: () => this.onClickHandler(true),
      style: this.state.active,
      disabled: this.props.disable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "False",
      onClicked: () => this.onClickHandler(false),
      style: this.state.active === false,
      disabled: this.props.disable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SuccesLand);

/***/ }),

/***/ "./components/Filters/SuccessLanding/SucessLanding.module.css":
/*!********************************************************************!*\
  !*** ./components/Filters/SuccessLanding/SucessLanding.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "SucessLanding_container__1MwMR",
	"header": "SucessLanding_header__2aGXm",
	"borderBottom": "SucessLanding_borderBottom__15kEQ"
};


/***/ }),

/***/ "./components/Filters/SuccessLaunch/SuccessLaunch.module.css":
/*!*******************************************************************!*\
  !*** ./components/Filters/SuccessLaunch/SuccessLaunch.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "SuccessLaunch_container__2zzCH",
	"header": "SuccessLaunch_header__3MKqh",
	"borderBottom": "SuccessLaunch_borderBottom__uVlvE"
};


/***/ }),

/***/ "./components/Filters/SuccessLaunch/SucessLaunch.js":
/*!**********************************************************!*\
  !*** ./components/Filters/SuccessLaunch/SucessLaunch.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Button/Button */ "./components/UI/Button/Button.js");
/* harmony import */ var _SuccessLaunch_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuccessLaunch.module.css */ "./components/Filters/SuccessLaunch/SuccessLaunch.module.css");
/* harmony import */ var _SuccessLaunch_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SuccessLaunch_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\Filters\\SuccessLaunch\\SucessLaunch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class SuccesLaunch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      active: null
    });

    _defineProperty(this, "onClickHandler", bool => {
      if (bool === this.state.active) {
        this.setState({
          active: null
        });
        this.props.SuccessHandler(null);
      } else {
        this.setState({
          active: bool
        });
        this.props.SuccessHandler(bool);
      }
    });
  }

  render() {
    return __jsx("div", {
      className: _SuccessLaunch_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: _SuccessLaunch_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, "Successful Launch", __jsx("div", {
      className: _SuccessLaunch_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.borderBottom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    })), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "True",
      onClicked: () => this.onClickHandler(true),
      style: this.state.active,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "False",
      onClicked: () => this.onClickHandler(false),
      style: this.state.active === false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SuccesLaunch);

/***/ }),

/***/ "./components/LaunchPrograms/LaunchProgram/LaunchProgram.js":
/*!******************************************************************!*\
  !*** ./components/LaunchPrograms/LaunchProgram/LaunchProgram.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LaunchProgram_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaunchProgram.module.css */ "./components/LaunchPrograms/LaunchProgram/LaunchProgram.module.css");
/* harmony import */ var _LaunchProgram_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LaunchProgram_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\LaunchPrograms\\LaunchProgram\\LaunchProgram.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class LaunchProgram extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let landingStatus = null;

    switch (this.props.launchLanding) {
      case null:
        landingStatus = '-';
        break;

      case false:
        landingStatus = 'False';
        break;

      case true:
        landingStatus = 'True';
        break;
    }

    return __jsx("div", {
      className: _LaunchProgram_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: _LaunchProgram_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
      src: this.props.imageSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx("section", {
      className: _LaunchProgram_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx("h3", {
      style: {
        margin: "15px 0px 10px 0px",
        lineHeight: "normal"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, this.props.missionName, "#", this.props.flightNumber, " "), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, "Mission Ids :"), __jsx("ul", {
      style: {
        margin: "0px",
        lineHeight: "normal"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, this.props.missionId.map((item, index) => __jsx("li", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, item, " "))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }
    }, "Launch Year : "), " ", this.props.launchYear, " "), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 14
      }
    }, "Successful Launch: "), this.props.launchSuccess ? "True" : "False"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 14
      }
    }, "Successful Landing: "), landingStatus)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LaunchProgram);

/***/ }),

/***/ "./components/LaunchPrograms/LaunchProgram/LaunchProgram.module.css":
/*!**************************************************************************!*\
  !*** ./components/LaunchPrograms/LaunchProgram/LaunchProgram.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LaunchProgram_container__2AlrO",
	"img": "LaunchProgram_img__ZW5dr",
	"section": "LaunchProgram_section__3GK0u"
};


/***/ }),

/***/ "./components/LaunchPrograms/LaunchPrograms.js":
/*!*****************************************************!*\
  !*** ./components/LaunchPrograms/LaunchPrograms.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LaunchProgram_LaunchProgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaunchProgram/LaunchProgram */ "./components/LaunchPrograms/LaunchProgram/LaunchProgram.js");
/* harmony import */ var _LaunchPrograms_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaunchPrograms.module.css */ "./components/LaunchPrograms/LaunchPrograms.module.css");
/* harmony import */ var _LaunchPrograms_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LaunchPrograms_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\LaunchPrograms\\LaunchPrograms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class LaunchPrograms extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let programs = this.props.data.map((item, index) => __jsx(_LaunchProgram_LaunchProgram__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      flightNumber: item.flight_number,
      missionName: item.mission_name,
      missionId: item.mission_id,
      launchYear: item.launch_year,
      launchSuccess: item.launch_success,
      imageSrc: item.links.mission_patch,
      launchLanding: this.props.successLanding,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 61
      }
    }));
    return __jsx("div", {
      className: _LaunchPrograms_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, programs);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LaunchPrograms);

/***/ }),

/***/ "./components/LaunchPrograms/LaunchPrograms.module.css":
/*!*************************************************************!*\
  !*** ./components/LaunchPrograms/LaunchPrograms.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LaunchPrograms_container__174Fj"
};


/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Filters/Filters */ "./components/Filters/Filters.js");
/* harmony import */ var _LaunchPrograms_LaunchPrograms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LaunchPrograms/LaunchPrograms */ "./components/LaunchPrograms/LaunchPrograms.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ "./components/Layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\Layout\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChangeYearHandler", year => {
      this.setState({
        launchYear: year
      });
    });

    _defineProperty(this, "onChangeLaunchSuccessHanler", success => {
      this.setState({
        launchSuccess: success
      });

      if (!success) {
        this.setState({
          landSuccess: null
        });
      }
    });

    _defineProperty(this, "onChangeLandSeccessHandler", success => {
      this.setState({
        landSuccess: success
      });
    });

    this.state = {
      launchYear: null,
      launchSuccess: null,
      landSuccess: null,
      data: props.data
    };
  }

  componentDidMount() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace(next_router__WEBPACK_IMPORTED_MODULE_4___default.a.pathname, "/");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.launchYear !== this.state.launchYear || prevState.launchSuccess !== this.state.launchSuccess || prevState.landSuccess !== this.state.landSuccess) {
      let queryParams = "";

      if (this.state.launchSuccess != null) {
        if (queryParams.length > 0) {
          queryParams += "&";
        }

        queryParams += "launch_success=" + this.state.launchSuccess.toString();
      }

      if (this.state.landSuccess != null) {
        if (queryParams.length > 0) {
          queryParams += "&";
        }

        queryParams += "land_success=" + this.state.landSuccess.toString();
      }

      if (this.state.launchYear) {
        if (queryParams.length > 0) {
          queryParams += "&";
        }

        queryParams += "launch_year=" + this.state.launchYear;
      }

      if (queryParams) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("?" + queryParams);
      }

      if (queryParams == null) {
        this.setState({
          data: this.props.data
        });
      } else {
        fetch(`https://api.spaceXdata.com/v3/launches?limit=100` + "&" + queryParams).then(res => res.json()).then(data => {
          this.setState({
            data: data
          });
        });
      }
    }
  }

  render() {
    ;
    return __jsx("div", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, __jsx("h1", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, "SpaceX Launch Programs"), __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
      launchYear: this.onChangeYearHandler,
      launchSuccess: this.onChangeLaunchSuccessHanler,
      landSuccess: this.onChangeLandSeccessHandler,
      disable: this.state.launchSuccess === false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }), __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx(_LaunchPrograms_LaunchPrograms__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: this.state.data,
      successLanding: this.state.landSuccess,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    })), __jsx("footer", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, "Developed by:", __jsx("p", {
      style: {
        fontFamily: "Gabriola",
        marginLeft: "10px",
        fontSize: "28px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, "Prashant ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/Layout/Layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__259yc",
	"header": "Layout_header__3ucUF",
	"footer": "Layout_footer__3mkvi"
};


/***/ }),

/***/ "./components/UI/Button/Button.js":
/*!****************************************!*\
  !*** ./components/UI/Button/Button.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ "./components/UI/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\components\\UI\\Button\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const button = props => {
  return __jsx("button", {
    className: props.style && !props.disabled ? _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active : _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn,
    onClick: props.onClicked,
    disabled: props.disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, " ", props.name, " ");
};

/* harmony default export */ __webpack_exports__["default"] = (button);

/***/ }),

/***/ "./components/UI/Button/Button.module.css":
/*!************************************************!*\
  !*** ./components/UI/Button/Button.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__rDn8A",
	"active": "Button_active__2IfJs"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
var _jsxFileName = "C:\\Users\\Prashant\\Desktop\\Assocs-SpaceX\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function HomePage({
  data
}) {
  return __jsx("div", {
    className: "jsx-3943487427",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3943487427",
    __self: this
  }, "body{margin:0;padding:0;font-size:18px;font-weight:350;line-height:1.6;color:#000000;font-family:sans-serif;}h1{font-weight:600;}p{margin:0px;}b{color:black;font-size:19px;font-weight:900;font-family:Calibri;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJhc2hhbnRcXERlc2t0b3BcXEFzc29jcy1TcGFjZVhcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPeUIsQUFHb0IsQUFTTyxBQUdMLEFBR0MsU0FkRixFQVlaLENBR2lCLElBTmpCLEdBUmlCLFFBZUMsT0FkQSxTQWVLLE9BZEwsYUFlbEIsR0FkZ0IsY0FDUyx1QkFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcmFzaGFudFxcRGVza3RvcFxcQXNzb2NzLVNwYWNlWFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtkYXRhfSkge1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICA8TGF5b3V0IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBiIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaSA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8L2Rpdj4pO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxyXG4gIH0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Prashant\\\\Desktop\\\\Assocs-SpaceX\\\\pages\\\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);
async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`);
  const data = await res.json(); // Pass data to the page via props

  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJzL0ZpbHRlcnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlcnMvTGF1bmNoWWVhcnMvTGF1bmNoWWVhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJzL0xhdW5jaFllYXJzL0xhdW5jaFllYXJzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJzL1N1Y2Nlc3NMYW5kaW5nL1N1Y2Vzc0xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJzL1N1Y2Nlc3NMYW5kaW5nL1N1Y2Vzc0xhbmRpbmcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlcnMvU3VjY2Vzc0xhdW5jaC9TdWNjZXNzTGF1bmNoLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJzL1N1Y2Nlc3NMYXVuY2gvU3VjZXNzTGF1bmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoUHJvZ3JhbXMvTGF1bmNoUHJvZ3JhbS9MYXVuY2hQcm9ncmFtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoUHJvZ3JhbXMvTGF1bmNoUHJvZ3JhbS9MYXVuY2hQcm9ncmFtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXVuY2hQcm9ncmFtcy9MYXVuY2hQcm9ncmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaFByb2dyYW1zL0xhdW5jaFByb2dyYW1zLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoZWFkZXIiLCJwcm9wcyIsImxhdW5jaFllYXIiLCJsYXVuY2hTdWNjZXNzIiwibGFuZFN1Y2Nlc3MiLCJkaXNhYmxlIiwiTGF1bmNoWWVhcnMiLCJhY3RpdmUiLCJ5ZWFyIiwic3RhdGUiLCJzZXRTdGF0ZSIsInllYXJIYW5kbGVyIiwieWVhcnMiLCJpIiwicHVzaCIsImxhdW5jaFllYXJzIiwibWFwIiwib25DbGlja0hhbmRsZXIiLCJib3JkZXJCb3R0b20iLCJTdWNjZXNMYW5kIiwiYm9vbCIsImxhbmRIYW5kbGVyIiwiU3VjY2VzTGF1bmNoIiwiU3VjY2Vzc0hhbmRsZXIiLCJMYXVuY2hQcm9ncmFtIiwibGFuZGluZ1N0YXR1cyIsImxhdW5jaExhbmRpbmciLCJpbWciLCJpbWFnZVNyYyIsInNlY3Rpb24iLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwibWlzc2lvbk5hbWUiLCJmbGlnaHROdW1iZXIiLCJtaXNzaW9uSWQiLCJpdGVtIiwiaW5kZXgiLCJMYXVuY2hQcm9ncmFtcyIsInByb2dyYW1zIiwiZGF0YSIsImZsaWdodF9udW1iZXIiLCJtaXNzaW9uX25hbWUiLCJtaXNzaW9uX2lkIiwibGF1bmNoX3llYXIiLCJsYXVuY2hfc3VjY2VzcyIsImxpbmtzIiwibWlzc2lvbl9wYXRjaCIsInN1Y2Nlc3NMYW5kaW5nIiwiTGF5b3V0IiwiY29uc3RydWN0b3IiLCJzdWNjZXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJSb3V0ZXIiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJxdWVyeVBhcmFtcyIsImxlbmd0aCIsInRvU3RyaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm9uQ2hhbmdlWWVhckhhbmRsZXIiLCJvbkNoYW5nZUxhdW5jaFN1Y2Nlc3NIYW5sZXIiLCJvbkNoYW5nZUxhbmRTZWNjZXNzSGFuZGxlciIsImZvb3RlciIsImZvbnRGYW1pbHkiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJidXR0b24iLCJzdHlsZSIsImRpc2FibGVkIiwiU3R5bGVzIiwiYnRuIiwib25DbGlja2VkIiwibmFtZSIsIkhvbWVQYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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Q0QsQzs7Ozs7Ozs7Ozs7QUM1Q0gsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZpbHRlcnMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMYXVuY2hZZWFycyBmcm9tICcuL0xhdW5jaFllYXJzL0xhdW5jaFllYXJzJztcclxuaW1wb3J0IFN1Y2Nlc3NMYXVuY2ggZnJvbSAnLi9TdWNjZXNzTGF1bmNoL1N1Y2Vzc0xhdW5jaCc7XHJcbmltcG9ydCBTdWNjZXNzTGFuZGluZyBmcm9tICcuL1N1Y2Nlc3NMYW5kaW5nL1N1Y2Vzc0xhbmRpbmcnO1xyXG5cclxuY2xhc3MgRmlsdGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuY29udGFpbmVyfT4gICAgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkZpbHRlcnM8L2gyPlxyXG4gICAgICAgICAgICA8TGF1bmNoWWVhcnMgeWVhckhhbmRsZXI9e3RoaXMucHJvcHMubGF1bmNoWWVhcn0vPlxyXG4gICAgICAgICAgICA8U3VjY2Vzc0xhdW5jaCAgU3VjY2Vzc0hhbmRsZXI9e3RoaXMucHJvcHMubGF1bmNoU3VjY2Vzc30gLz5cclxuICAgICAgICAgICAgPFN1Y2Nlc3NMYW5kaW5nIGxhbmRIYW5kbGVyPXt0aGlzLnByb3BzLmxhbmRTdWNjZXNzfSBkaXNhYmxlPXt0aGlzLnByb3BzLmRpc2FibGV9Lz5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkZpbHRlcnNfY29udGFpbmVyX18yV3pSd1wiLFxuXHRcImhlYWRlclwiOiBcIkZpbHRlcnNfaGVhZGVyX18xLUs3X1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xhdW5jaFllYXJzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5jbGFzcyBMYXVuY2hZZWFycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY3RpdmU6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgb25DbGlja0hhbmRsZXIgPSAoeWVhcikgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSB5ZWFyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IG51bGwgfSk7XHJcbiAgICAgIHRoaXMucHJvcHMueWVhckhhbmRsZXIobnVsbClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHllYXIgfSk7XHJcbiAgICAgIHRoaXMucHJvcHMueWVhckhhbmRsZXIoeWVhcilcclxuICAgIH1cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHllYXJzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMjAwNjsgaSA8PSAyMDIwOyBpKyspIHtcclxuICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGF1bmNoWWVhcnMgPSB5ZWFycy5tYXAoKHllYXIpID0+IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGtleT17eWVhcn1cclxuICAgICAgICBuYW1lPXt5ZWFyfVxyXG4gICAgICAgIG9uQ2xpY2tlZD17KCkgPT4gdGhpcy5vbkNsaWNrSGFuZGxlcih5ZWFyKX1cclxuICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0geWVhcn1cclxuICAgICAgLz5cclxuICAgICkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICBMYXVuY2ggWWVhclxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJCb3R0b219PjwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB7bGF1bmNoWWVhcnN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhdW5jaFllYXJzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXVuY2hZZWFyc19jb250YWluZXJfXzF1Y3JoXCIsXG5cdFwiaGVhZGVyXCI6IFwiTGF1bmNoWWVhcnNfaGVhZGVyX18ycl9Vc1wiLFxuXHRcImJvcmRlckJvdHRvbVwiOiBcIkxhdW5jaFllYXJzX2JvcmRlckJvdHRvbV9fMVdSQlBcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vVUkvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdWNlc3NMYW5kaW5nLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgU3VjY2VzTGFuZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgYWN0aXZlOiBudWxsXHJcbiAgICB9XHJcbiAgICBvbkNsaWNrSGFuZGxlciA9ICggYm9vbCApPT57XHJcbiAgICAgICAgaWYoYm9vbD09PXRoaXMuc3RhdGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogbnVsbH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxhbmRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlIDogYm9vbH0pXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubGFuZEhhbmRsZXIoYm9vbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9IHtzdHlsZXMuaGVhZGVyfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgU3VjY2Vzc2Z1bCBMYW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJCb3R0b219PjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gXHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiVHJ1ZVwiIG9uQ2xpY2tlZD17KCk9PnRoaXMub25DbGlja0hhbmRsZXIodHJ1ZSl9IHN0eWxlPXt0aGlzLnN0YXRlLmFjdGl2ZX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbmFtZT1cIkZhbHNlXCIgb25DbGlja2VkPXsoKT0+dGhpcy5vbkNsaWNrSGFuZGxlcihmYWxzZSl9IHN0eWxlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gZmFsc2UgfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VjY2VzTGFuZDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTdWNlc3NMYW5kaW5nX2NvbnRhaW5lcl9fMU13TVJcIixcblx0XCJoZWFkZXJcIjogXCJTdWNlc3NMYW5kaW5nX2hlYWRlcl9fMmFHWG1cIixcblx0XCJib3JkZXJCb3R0b21cIjogXCJTdWNlc3NMYW5kaW5nX2JvcmRlckJvdHRvbV9fMTVrRVFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlN1Y2Nlc3NMYXVuY2hfY29udGFpbmVyX18yenpDSFwiLFxuXHRcImhlYWRlclwiOiBcIlN1Y2Nlc3NMYXVuY2hfaGVhZGVyX18zTUtxaFwiLFxuXHRcImJvcmRlckJvdHRvbVwiOiBcIlN1Y2Nlc3NMYXVuY2hfYm9yZGVyQm90dG9tX191Vmx2RVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N1Y2Nlc3NMYXVuY2gubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBTdWNjZXNMYXVuY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIGFjdGl2ZTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tIYW5kbGVyID0gKCBib29sICk9PntcclxuICAgICAgICBpZihib29sPT09dGhpcy5zdGF0ZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBudWxsfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuU3VjY2Vzc0hhbmRsZXIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmUgOiBib29sfSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5TdWNjZXNzSGFuZGxlcihib29sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSB7c3R5bGVzLmhlYWRlcn0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFN1Y2Nlc3NmdWwgTGF1bmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJCb3R0b219PjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj4gXHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiVHJ1ZVwiIG9uQ2xpY2tlZD17KCk9PnRoaXMub25DbGlja0hhbmRsZXIodHJ1ZSl9IHN0eWxlPXt0aGlzLnN0YXRlLmFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbmFtZT1cIkZhbHNlXCIgb25DbGlja2VkPXsoKT0+dGhpcy5vbkNsaWNrSGFuZGxlcihmYWxzZSl9IHN0eWxlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gZmFsc2UgfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc0xhdW5jaDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXVuY2hQcm9ncmFtLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgTGF1bmNoUHJvZ3JhbSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBsYW5kaW5nU3RhdHVzPW51bGw7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmxhdW5jaExhbmRpbmcpIHtcclxuICAgICAgICBjYXNlIG51bGwgOiBsYW5kaW5nU3RhdHVzID0gJy0nOyBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlIDogbGFuZGluZ1N0YXR1cyA9ICdGYWxzZSc7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdHJ1ZSA6IGxhbmRpbmdTdGF0dXMgPSAnVHJ1ZSc7IGJyZWFrO1xyXG4gICAgICB9IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IFxyXG4gICAgICAgICAgICBzcmM9IHt0aGlzLnByb3BzLmltYWdlU3JjfSAvPlxyXG5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7bWFyZ2luOlwiMTVweCAwcHggMTBweCAwcHhcIiAsIGxpbmVIZWlnaHQ6IFwibm9ybWFsXCJ9fT57dGhpcy5wcm9wcy5taXNzaW9uTmFtZX0je3RoaXMucHJvcHMuZmxpZ2h0TnVtYmVyfSA8L2gzPlxyXG4gICAgICAgICAgPGI+TWlzc2lvbiBJZHMgOjwvYj5cclxuICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbjogXCIwcHhcIiwgIGxpbmVIZWlnaHQ6IFwibm9ybWFsXCJ9fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubWlzc2lvbklkLm1hcCgoaXRlbSwgaW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfSA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8cD48Yj5MYXVuY2ggWWVhciA6IDwvYj4ge3RoaXMucHJvcHMubGF1bmNoWWVhcn0gPC9wPiBcclxuICAgICAgICAgIDxwPjxiPlN1Y2Nlc3NmdWwgTGF1bmNoOiA8L2I+e3RoaXMucHJvcHMubGF1bmNoU3VjY2Vzcz8gXCJUcnVlXCIgOiBcIkZhbHNlXCJ9PC9wPlxyXG4gICAgICAgICAgPHA+PGI+U3VjY2Vzc2Z1bCBMYW5kaW5nOiA8L2I+e2xhbmRpbmdTdGF0dXN9PC9wPlxyXG4gICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXVuY2hQcm9ncmFtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXVuY2hQcm9ncmFtX2NvbnRhaW5lcl9fMkFsck9cIixcblx0XCJpbWdcIjogXCJMYXVuY2hQcm9ncmFtX2ltZ19fWlc1ZHJcIixcblx0XCJzZWN0aW9uXCI6IFwiTGF1bmNoUHJvZ3JhbV9zZWN0aW9uX18zR0swdVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExhdW5jaFByb2dyYW0gZnJvbSAnLi9MYXVuY2hQcm9ncmFtL0xhdW5jaFByb2dyYW0nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF1bmNoUHJvZ3JhbXMubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBMYXVuY2hQcm9ncmFtcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcm9ncmFtcyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoIChpdGVtLGluZGV4KSA9PiA8TGF1bmNoUHJvZ3JhbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsaWdodE51bWJlcj17aXRlbS5mbGlnaHRfbnVtYmVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2lvbk5hbWU9e2l0ZW0ubWlzc2lvbl9uYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2lvbklkPXtpdGVtLm1pc3Npb25faWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXVuY2hZZWFyPXtpdGVtLmxhdW5jaF95ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXVuY2hTdWNjZXNzPXtpdGVtLmxhdW5jaF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17aXRlbS5saW5rcy5taXNzaW9uX3BhdGNofSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF1bmNoTGFuZGluZz17dGhpcy5wcm9wcy5zdWNjZXNzTGFuZGluZ30vPilcclxuICAgICAgICByZXR1cm4gKDxcclxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZSA9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge3Byb2dyYW1zfSBcclxuXHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF1bmNoUHJvZ3JhbXM7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGF1bmNoUHJvZ3JhbXNfY29udGFpbmVyX18xNzRGalwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi4vRmlsdGVycy9GaWx0ZXJzXCI7XHJcbmltcG9ydCBMYXVuY2hQcm9ncmFtcyBmcm9tIFwiLi4vTGF1bmNoUHJvZ3JhbXMvTGF1bmNoUHJvZ3JhbXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MYXlvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGF1bmNoWWVhcjogbnVsbCxcclxuICAgICAgbGF1bmNoU3VjY2VzczogbnVsbCxcclxuICAgICAgbGFuZFN1Y2Nlc3M6IG51bGwsXHJcbiAgICAgIGRhdGE6IHByb3BzLmRhdGEsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFJvdXRlci5yZXBsYWNlKFJvdXRlci5wYXRobmFtZSwgXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHByZXZTdGF0ZS5sYXVuY2hZZWFyICE9PSB0aGlzLnN0YXRlLmxhdW5jaFllYXIgfHxcclxuICAgICAgcHJldlN0YXRlLmxhdW5jaFN1Y2Nlc3MgIT09IHRoaXMuc3RhdGUubGF1bmNoU3VjY2VzcyB8fFxyXG4gICAgICBwcmV2U3RhdGUubGFuZFN1Y2Nlc3MgIT09IHRoaXMuc3RhdGUubGFuZFN1Y2Nlc3NcclxuICAgICkge1xyXG4gICAgICBsZXQgcXVlcnlQYXJhbXMgPSBcIlwiO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUubGF1bmNoU3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zICs9IFwiJlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxdWVyeVBhcmFtcyArPSBcImxhdW5jaF9zdWNjZXNzPVwiICsgdGhpcy5zdGF0ZS5sYXVuY2hTdWNjZXNzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc3RhdGUubGFuZFN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBxdWVyeVBhcmFtcyArPSBcIiZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgKz0gXCJsYW5kX3N1Y2Nlc3M9XCIgKyB0aGlzLnN0YXRlLmxhbmRTdWNjZXNzLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc3RhdGUubGF1bmNoWWVhcikge1xyXG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBxdWVyeVBhcmFtcyArPSBcIiZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgKz0gXCJsYXVuY2hfeWVhcj1cIiArIHRoaXMuc3RhdGUubGF1bmNoWWVhcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCI/XCIgKyBxdWVyeVBhcmFtcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChxdWVyeVBhcmFtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGF0YSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDBgICsgXCImXCIgKyBxdWVyeVBhcmFtc1xyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBvbkNoYW5nZVllYXJIYW5kbGVyID0gKHllYXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXVuY2hZZWFyOiB5ZWFyIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlTGF1bmNoU3VjY2Vzc0hhbmxlciA9IChzdWNjZXNzKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbGF1bmNoU3VjY2Vzczogc3VjY2VzcyB9KTtcclxuICAgIGlmKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhbmRTdWNjZXNzIDogbnVsbH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2VMYW5kU2VjY2Vzc0hhbmRsZXIgPSAoc3VjY2VzcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxhbmRTdWNjZXNzOiBzdWNjZXNzIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHs7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+U3BhY2VYIExhdW5jaCBQcm9ncmFtczwvaDE+XHJcbiAgICAgICAgPEZpbHRlcnNcclxuICAgICAgICAgIGxhdW5jaFllYXI9e3RoaXMub25DaGFuZ2VZZWFySGFuZGxlcn1cclxuICAgICAgICAgIGxhdW5jaFN1Y2Nlc3M9e3RoaXMub25DaGFuZ2VMYXVuY2hTdWNjZXNzSGFubGVyfVxyXG4gICAgICAgICAgbGFuZFN1Y2Nlc3M9e3RoaXMub25DaGFuZ2VMYW5kU2VjY2Vzc0hhbmRsZXJ9XHJcbiAgICAgICAgICBkaXNhYmxlPXt0aGlzLnN0YXRlLmxhdW5jaFN1Y2Nlc3M9PT1mYWxzZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPExhdW5jaFByb2dyYW1zIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gc3VjY2Vzc0xhbmRpbmc9e3RoaXMuc3RhdGUubGFuZFN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5OiBcclxuICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTpcIkdhYnJpb2xhXCIgLCBtYXJnaW5MZWZ0OlwiMTBweFwiLCBmb250U2l6ZTpcIjI4cHhcIn19PlxyXG4gICAgICAgICAgICAgIFByYXNoYW50IDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfY29udGFpbmVyX18yNTl5Y1wiLFxuXHRcImhlYWRlclwiOiBcIkxheW91dF9oZWFkZXJfXzN1Y1VGXCIsXG5cdFwiZm9vdGVyXCI6IFwiTGF5b3V0X2Zvb3Rlcl9fM21rdmlcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IChwcm9wcyk9PntcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuc3R5bGUgJiYgIXByb3BzLmRpc2FibGVkID8gU3R5bGVzLmFjdGl2ZSA6IFN0eWxlcy5idG59XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tlZH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICA+IHtwcm9wcy5uYW1lfSA8L2J1dHRvbj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b247IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnRuXCI6IFwiQnV0dG9uX2J0bl9fckRuOEFcIixcblx0XCJhY3RpdmVcIjogXCJCdXR0b25fYWN0aXZlX18ySWZKc1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtkYXRhfSkge1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICA8TGF5b3V0IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBiIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaSA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8L2Rpdj4pO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=