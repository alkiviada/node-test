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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactUid = __webpack_require__(3);

var _reactBodyClassname = __webpack_require__(4);

var _reactBodyClassname2 = _interopRequireDefault(_reactBodyClassname);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    var quotes = void 0;
    if (false) {
      quotes = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      quotes = props.staticContext.quotes;
    }
    console.log(quotes);

    _this.state = {
      quotes: quotes,
      name: '',
      quote: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(About, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.name);
      console.log(this.state.quote);

      var headers = { "Content-Type": "application/json" };
      var body = JSON.stringify({ name: this.state.name, quote: this.state.quote });

      return fetch('/:haha').then(function (response) {
        return console.log('I am a response' + response);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.props);

      var quotes = this.state.quotes;


      console.log('About ' + quotes);
      return _react2.default.createElement(
        _reactBodyClassname2.default,
        { className: 'about-body' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'align-left' },
            'Test1'
          ),
          _react2.default.createElement('div', { className: 'item-a black-notify' }),
          _react2.default.createElement(
            'div',
            { className: 'align-right' },
            'Test2'
          ),
          _react2.default.createElement(
            'form',
            { className: 'grid-form', onSubmit: this.handleSubmit },
            _react2.default.createElement('input', { className: 'input form-input', type: 'text', placeholder: 'Text input', value: this.state.value, onChange: function onChange(e) {
                return _this2.setState({ name: e.target.value });
              } }),
            _react2.default.createElement(
              'div',
              { className: 'form-item-select' },
              _react2.default.createElement(
                'select',
                { name: 'car-select', value: this.state.quote, onChange: function onChange(e) {
                    return _this2.setState({ quote: e.target.value });
                  } },
                _react2.default.createElement(
                  'option',
                  null,
                  'Select dropdown'
                ),
                quotes.map(function (e) {
                  return _react2.default.createElement(
                    'option',
                    { key: (0, _reactUid.uid)(e), value: e },
                    e
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-item-button' },
              _react2.default.createElement(
                'button',
                { className: 'button is-primary' },
                'Submit'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'lower-box', to: '/map' },
            _react2.default.createElement('div', { className: 'ham' }),
            _react2.default.createElement('div', { className: 'ham' })
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-uid");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-body-classname");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactUid = __webpack_require__(3);

var _reactBodyClassname = __webpack_require__(4);

var _reactBodyClassname2 = _interopRequireDefault(_reactBodyClassname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  _createClass(Map, [{
    key: 'render',
    value: function render() {
      console.log('Map ' + this.props.data);
      return _react2.default.createElement(
        _reactBodyClassname2.default,
        { className: 'map-body' },
        _react2.default.createElement(
          'div',
          null,
          'the undiscovered country, from whose bourn no traveller returns'
        )
      );
    }
  }]);

  return Map;
}(_react.Component);

exports.default = Map;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(8);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

var _serializeJavascript = __webpack_require__(14);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(_express2.default.static("public"));

app.get("*", function (req, res, next) {
  console.log(req.url);

  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  console.log('Active ' + activeRoute.path);

  var data = activeRoute.react ? activeRoute.react(req) : {};

  console.log(data);

  var markup = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: data },
    _react2.default.createElement(_App2.default, null)
  ));

  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Collect Quotes</title>\n        <link href=\"//fonts.googleapis.com/css?family=Alegreya|Cormorant+Garamond\" rel=\"stylesheet\" type=\"text/css\">\n        <link rel=\"stylesheet\" href=\"/main.css\">\n        <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data.quotes) + "</script>\n        <script src=\"/bundle.js\" defer></script>\n      </head>\n\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n    </html>\n  ");
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _About = __webpack_require__(2);

var _About2 = _interopRequireDefault(_About);

var _Map = __webpack_require__(5);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
            return _react2.default.createElement(_About2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/map', component: _Map2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Map = __webpack_require__(5);

var _Map2 = _interopRequireDefault(_Map);

var _About = __webpack_require__(2);

var _About2 = _interopRequireDefault(_About);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  component: _About2.default,
  react: function react(req) {
    return (0, _helpers.loadQuotes)();
  }
}, {
  path: '/map',
  component: _Map2.default
}, {
  path: '/log',
  component: _Map2.default,
  react: function react(req) {
    return (0, _helpers.logCalc)(req.body);
  }
}];

exports.default = routes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var logCalc = exports.logCalc = function logCalc(b) {
  var fs = __webpack_require__(12);
  fs.readFile('../../assets/log.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      var obj = JSON.parse(data); //now it an object
      if (obj.table) {
        console.log(b);
        obj.table.push({ id: 2, square: 3 }); //add some data
      } else {
        console.log(b);
        obj.table = [];
      }
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('myjsonfile.json', json, 'utf8'); // write it back 
    }
  });
  return 'Success';
};

var loadQuotes = exports.loadQuotes = function loadQuotes() {
  var json = __webpack_require__(13);
  var quotes = json.q;
  return { quotes: quotes };
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"q":["b","c","d"]}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);