/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/components/Header.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      UserName: "",
      csrf: "fre"
    };

    _this.Logout = function (event) {
      event.preventDefault();
      axios.post('/logout', {
        _token: _this.state.csrf
      }).then(function (res) {
        history.go();
        console.log(res);
      })["catch"](function (err) {
        console.error(err);
      });
    };

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("/username").then(function (res) {
        _this2.setState({
          UserName: res.data.username,
          csrf: res.data.csrf
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("nav", {
        className: "navbar navbar-expand-sm navbar-dark bg-primary fixed-top"
      }, /*#__PURE__*/React.createElement("a", {
        className: "navbar-brand",
        href: "/"
      }, "ChatApp"), /*#__PURE__*/React.createElement("button", {
        className: "navbar-toggler d-lg-none",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#collapsibleNavId",
        "aria-controls": "collapsibleNavId",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }), /*#__PURE__*/React.createElement("div", {
        className: "collapse navbar-collapse",
        id: "collapsibleNavId"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0"
      }, /*#__PURE__*/React.createElement("li", {
        className: "nav-item active"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "/home"
      }, "Home ", /*#__PURE__*/React.createElement("span", {
        className: "sr-only"
      }, "(current)"))), /*#__PURE__*/React.createElement("li", {
        className: "nav-item dropdown"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "dropdownId",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "Dropdown"), /*#__PURE__*/React.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownId"
      }, /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Action 1"), /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "#"
      }, "Action 2")))), /*#__PURE__*/React.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "navbar-nav mr-auto"
      }), /*#__PURE__*/React.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, this.state.UserName === null && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "/login"
      }, "Login")), /*#__PURE__*/React.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-link",
        href: "/register"
      }, "register"))), this.state.UserName != null && /*#__PURE__*/React.createElement("li", {
        className: "nav-item dropdown"
      }, /*#__PURE__*/React.createElement("a", {
        id: "navbarDropdown",
        className: "nav-link dropdown-toggle",
        href: "#",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, this.state.UserName.toString(), /*#__PURE__*/React.createElement("span", {
        className: "caret"
      })), /*#__PURE__*/React.createElement("div", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "navbarDropdown"
      }, /*#__PURE__*/React.createElement("a", {
        className: "dropdown-item",
        href: "/logout",
        onClick: this.Logout
      }, "Logout"), /*#__PURE__*/React.createElement("form", {
        id: "logout-form",
        action: "'/logout",
        method: "POST",
        style: {
          display: "none"
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "hidden",
        id: "input",
        className: "form-control",
        value: this.state.csrf
      }))))))));
    }
  }]);

  return Header;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

if (document.getElementById("header")) {
  ReactDOM.render( /*#__PURE__*/React.createElement(Header, null), document.getElementById("header"));
}

/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/js/components/Header.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\Chat\resources\js\components\Header.js */"./resources/js/components/Header.js");


/***/ })

/******/ });