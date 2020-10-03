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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Z2W":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__rDn8A",
	"active": "Button_active__2IfJs"
};


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "G68h":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LaunchProgram_container__2AlrO",
	"img": "LaunchProgram_img__ZW5dr",
	"section": "LaunchProgram_section__3GK0u"
};


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "LPUd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LaunchYears_container__1ucrh",
	"header": "LaunchYears_header__2r_Us",
	"borderBottom": "LaunchYears_borderBottom__1WRBP"
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Filters/Filters.module.css
var Filters_module = __webpack_require__("TkhT");
var Filters_module_default = /*#__PURE__*/__webpack_require__.n(Filters_module);

// EXTERNAL MODULE: ./components/UI/Button/Button.module.css
var Button_module = __webpack_require__("2Z2W");
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// CONCATENATED MODULE: ./components/UI/Button/Button.js
var __jsx = external_react_default.a.createElement;



const Button_button = props => {
  return __jsx("button", {
    className: props.style && !props.disabled ? Button_module_default.a.active : Button_module_default.a.btn,
    onClick: props.onClicked,
    disabled: props.disabled
  }, " ", props.name, " ");
};

/* harmony default export */ var Button = (Button_button);
// EXTERNAL MODULE: ./components/Filters/LaunchYears/LaunchYears.module.css
var LaunchYears_module = __webpack_require__("LPUd");
var LaunchYears_module_default = /*#__PURE__*/__webpack_require__.n(LaunchYears_module);

// CONCATENATED MODULE: ./components/Filters/LaunchYears/LaunchYears.js
var LaunchYears_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LaunchYears_LaunchYears extends external_react_["Component"] {
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

    let launchYears = years.map(year => LaunchYears_jsx(Button, {
      key: year,
      name: year,
      onClicked: () => this.onClickHandler(year),
      style: this.state.active == year
    }));
    return LaunchYears_jsx("div", {
      className: LaunchYears_module_default.a.container
    }, LaunchYears_jsx("span", {
      className: LaunchYears_module_default.a.header
    }, "Launch Year", LaunchYears_jsx("div", {
      className: LaunchYears_module_default.a.borderBottom
    })), launchYears);
  }

}

/* harmony default export */ var Filters_LaunchYears_LaunchYears = (LaunchYears_LaunchYears);
// EXTERNAL MODULE: ./components/Filters/SuccessLaunch/SuccessLaunch.module.css
var SuccessLaunch_module = __webpack_require__("huVf");
var SuccessLaunch_module_default = /*#__PURE__*/__webpack_require__.n(SuccessLaunch_module);

// CONCATENATED MODULE: ./components/Filters/SuccessLaunch/SucessLaunch.js
var SucessLaunch_jsx = external_react_default.a.createElement;

function SucessLaunch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class SucessLaunch_SuccesLaunch extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SucessLaunch_defineProperty(this, "state", {
      active: null
    });

    SucessLaunch_defineProperty(this, "onClickHandler", bool => {
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
    return SucessLaunch_jsx("div", {
      className: SuccessLaunch_module_default.a.container
    }, SucessLaunch_jsx("span", {
      className: SuccessLaunch_module_default.a.header
    }, "Successful Launch", SucessLaunch_jsx("div", {
      className: SuccessLaunch_module_default.a.borderBottom
    })), SucessLaunch_jsx(Button, {
      name: "True",
      onClicked: () => this.onClickHandler(true),
      style: this.state.active
    }), SucessLaunch_jsx(Button, {
      name: "False",
      onClicked: () => this.onClickHandler(false),
      style: this.state.active === false
    }));
  }

}

/* harmony default export */ var SucessLaunch = (SucessLaunch_SuccesLaunch);
// EXTERNAL MODULE: ./components/Filters/SuccessLanding/SucessLanding.module.css
var SucessLanding_module = __webpack_require__("YAqo");
var SucessLanding_module_default = /*#__PURE__*/__webpack_require__.n(SucessLanding_module);

// CONCATENATED MODULE: ./components/Filters/SuccessLanding/SucessLanding.js
var SucessLanding_jsx = external_react_default.a.createElement;

function SucessLanding_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class SucessLanding_SuccesLand extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SucessLanding_defineProperty(this, "state", {
      active: null
    });

    SucessLanding_defineProperty(this, "onClickHandler", bool => {
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
    return SucessLanding_jsx("div", {
      className: SucessLanding_module_default.a.container
    }, SucessLanding_jsx("span", {
      className: SucessLanding_module_default.a.header
    }, "Successful Landing", SucessLanding_jsx("div", {
      className: SucessLanding_module_default.a.borderBottom
    })), SucessLanding_jsx(Button, {
      name: "True",
      onClicked: () => this.onClickHandler(true),
      style: this.state.active,
      disabled: this.props.disable
    }), SucessLanding_jsx(Button, {
      name: "False",
      onClicked: () => this.onClickHandler(false),
      style: this.state.active === false,
      disabled: this.props.disable
    }));
  }

}

/* harmony default export */ var SucessLanding = (SucessLanding_SuccesLand);
// CONCATENATED MODULE: ./components/Filters/Filters.js
var Filters_jsx = external_react_default.a.createElement;






class Filters_Filters extends external_react_["Component"] {
  render() {
    return Filters_jsx("div", {
      className: Filters_module_default.a.container
    }, Filters_jsx("h2", {
      className: Filters_module_default.a.header
    }, "Filters"), Filters_jsx(Filters_LaunchYears_LaunchYears, {
      yearHandler: this.props.launchYear
    }), Filters_jsx(SucessLaunch, {
      SuccessHandler: this.props.launchSuccess
    }), Filters_jsx(SucessLanding, {
      landHandler: this.props.landSuccess,
      disable: this.props.disable
    }));
  }

}

/* harmony default export */ var components_Filters_Filters = (Filters_Filters);
// EXTERNAL MODULE: ./components/LaunchPrograms/LaunchProgram/LaunchProgram.module.css
var LaunchProgram_module = __webpack_require__("G68h");
var LaunchProgram_module_default = /*#__PURE__*/__webpack_require__.n(LaunchProgram_module);

// CONCATENATED MODULE: ./components/LaunchPrograms/LaunchProgram/LaunchProgram.js
var LaunchProgram_jsx = external_react_default.a.createElement;



class LaunchProgram_LaunchProgram extends external_react_["Component"] {
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

    return LaunchProgram_jsx("div", {
      className: LaunchProgram_module_default.a.container
    }, LaunchProgram_jsx("img", {
      className: LaunchProgram_module_default.a.img,
      src: this.props.imageSrc
    }), LaunchProgram_jsx("section", {
      className: LaunchProgram_module_default.a.section
    }, LaunchProgram_jsx("h3", {
      style: {
        margin: "15px 0px 10px 0px",
        lineHeight: "normal"
      }
    }, this.props.missionName, "#", this.props.flightNumber, " "), LaunchProgram_jsx("b", null, "Mission Ids :"), LaunchProgram_jsx("ul", {
      style: {
        margin: "0px",
        lineHeight: "normal"
      }
    }, this.props.missionId.map((item, index) => LaunchProgram_jsx("li", {
      key: index
    }, item, " "))), LaunchProgram_jsx("p", null, LaunchProgram_jsx("b", null, "Launch Year : "), " ", this.props.launchYear, " "), LaunchProgram_jsx("p", null, LaunchProgram_jsx("b", null, "Successful Launch: "), this.props.launchSuccess ? "True" : "False"), LaunchProgram_jsx("p", null, LaunchProgram_jsx("b", null, "Successful Landing: "), landingStatus)));
  }

}

/* harmony default export */ var LaunchPrograms_LaunchProgram_LaunchProgram = (LaunchProgram_LaunchProgram);
// EXTERNAL MODULE: ./components/LaunchPrograms/LaunchPrograms.module.css
var LaunchPrograms_module = __webpack_require__("usJa");
var LaunchPrograms_module_default = /*#__PURE__*/__webpack_require__.n(LaunchPrograms_module);

// CONCATENATED MODULE: ./components/LaunchPrograms/LaunchPrograms.js
var LaunchPrograms_jsx = external_react_default.a.createElement;




class LaunchPrograms_LaunchPrograms extends external_react_["Component"] {
  render() {
    let programs = this.props.data.map((item, index) => LaunchPrograms_jsx(LaunchPrograms_LaunchProgram_LaunchProgram, {
      key: index,
      flightNumber: item.flight_number,
      missionName: item.mission_name,
      missionId: item.mission_id,
      launchYear: item.launch_year,
      launchSuccess: item.launch_success,
      imageSrc: item.links.mission_patch,
      launchLanding: this.props.successLanding
    }));
    return LaunchPrograms_jsx("div", {
      className: LaunchPrograms_module_default.a.container
    }, programs);
  }

}

/* harmony default export */ var components_LaunchPrograms_LaunchPrograms = (LaunchPrograms_LaunchPrograms);
// EXTERNAL MODULE: ./components/Layout/Layout.module.css
var Layout_module = __webpack_require__("lR24");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Layout/Layout.js
var Layout_jsx = external_react_default.a.createElement;

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Layout_Layout extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Layout_defineProperty(this, "onChangeYearHandler", year => {
      this.setState({
        launchYear: year
      });
    });

    Layout_defineProperty(this, "onChangeLaunchSuccessHanler", success => {
      this.setState({
        launchSuccess: success
      });

      if (!success) {
        this.setState({
          landSuccess: null
        });
      }
    });

    Layout_defineProperty(this, "onChangeLandSeccessHandler", success => {
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
    router_default.a.replace(router_default.a.pathname, "/");
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
        router_default.a.push("?" + queryParams);
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
    return Layout_jsx("div", {
      className: Layout_module_default.a.container
    }, Layout_jsx("h1", {
      className: Layout_module_default.a.header
    }, "SpaceX Launch Programs"), Layout_jsx(components_Filters_Filters, {
      launchYear: this.onChangeYearHandler,
      launchSuccess: this.onChangeLaunchSuccessHanler,
      landSuccess: this.onChangeLandSeccessHandler,
      disable: this.state.launchSuccess === false
    }), Layout_jsx("section", null, Layout_jsx(components_LaunchPrograms_LaunchPrograms, {
      data: this.state.data,
      successLanding: this.state.landSuccess
    })), Layout_jsx("footer", {
      className: Layout_module_default.a.footer
    }, "Developed by:", Layout_jsx("p", {
      style: {
        fontFamily: "Gabriola",
        marginLeft: "10px",
        fontSize: "28px"
      }
    }, "Prashant ")));
  }

}

/* harmony default export */ var components_Layout_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;



function HomePage({
  data
}) {
  return pages_jsx("div", {
    className: "jsx-3943487427"
  }, pages_jsx(components_Layout_Layout, {
    data: data
  }), pages_jsx(style_default.a, {
    id: "3943487427"
  }, ["body{margin:0;padding:0;font-size:18px;font-weight:350;line-height:1.6;color:#000000;font-family:sans-serif;}", "h1{font-weight:600;}", "p{margin:0px;}", "b{color:black;font-size:19px;font-weight:900;font-family:Calibri;}"]));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);
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

/***/ "TkhT":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Filters_container__2WzRw",
	"header": "Filters_header__1-K7_"
};


/***/ }),

/***/ "YAqo":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "SucessLanding_container__1MwMR",
	"header": "SucessLanding_header__2aGXm",
	"borderBottom": "SucessLanding_borderBottom__15kEQ"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "huVf":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "SuccessLaunch_container__2zzCH",
	"header": "SuccessLaunch_header__3MKqh",
	"borderBottom": "SuccessLaunch_borderBottom__uVlvE"
};


/***/ }),

/***/ "lR24":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__259yc",
	"header": "Layout_header__3ucUF",
	"footer": "Layout_footer__3mkvi"
};


/***/ }),

/***/ "usJa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LaunchPrograms_container__174Fj"
};


/***/ })

/******/ });