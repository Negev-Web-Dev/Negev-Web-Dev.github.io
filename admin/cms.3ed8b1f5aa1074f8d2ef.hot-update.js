webpackHotUpdate("cms",{

/***/ "./src/components/LeafletMap.js":
/*!**************************************!*\
  !*** ./src/components/LeafletMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/esm/index.js");

var _jsxFileName = "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/LeafletMap.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var LeafletMap = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LeafletMap, _Component);

  function LeafletMap() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LeafletMap.prototype;

  _proto.render = function render() {
    if (typeof window !== 'undefined') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
        center: this.props.position,
        zoom: this.props.zoom,
        style: {
          height: '50vh',
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["TileLayer"], {
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      }), this.props.markerText !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
        position: this.props.position,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, this.props.markerText)));
    }

    return null;
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return LeafletMap;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

LeafletMap.propTypes = {
  /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
  position: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /** Initial zoom level for the map (default 13) **/
  zoom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /** If set, will display a marker, which when clicked will display this text **/
  markerText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
LeafletMap.defaultProps = {
  position: [31.2632623, 34.8086711],
  zoom: 13,
  markerText: ""
};
var _default = LeafletMap;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LeafletMap, "LeafletMap", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/LeafletMap.js");
  reactHotLoader.register(_default, "default", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/LeafletMap.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.3ed8b1f5aa1074f8d2ef.hot-update.js.map