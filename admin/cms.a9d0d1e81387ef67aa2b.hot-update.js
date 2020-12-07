webpackHotUpdate("cms",{

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image */ "./src/components/Image.js");
/* harmony import */ var _Content_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.css */ "./src/components/Content.css");
/* harmony import */ var _Content_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var encodeMarkdownURIs = function encodeMarkdownURIs(source) {
  if (source === void 0) {
    source = '';
  }

  var markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g;
  return source.replace(markdownLinkRegex, function (match, linkURI) {
    if (!linkURI) return match;
    var replaced = match.replace(linkURI, encodeURI(linkURI));
    return replaced;
  });
};

var withContentImages = function withContentImages(source) {
  var images = source.match(/<img(.*?)\\?>/gim);

  for (var i in images) {
    var src = /src="(.*?)"/g.exec(images[i]),
        alt = /alt="(.*?)"/g.exec(images[i]),
        title = /title="(.*?)"/g.exec(images[i]);
    source = source.replace(images[i], react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      resolutions: "medium",
      className: "Content--Image",
      lazy: false,
      src: src ? src[1] : null,
      alt: alt ? alt[1] : null,
      title: title ? title[1] : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    })));
  }

  return source;
};

var MyImage = function MyImage(_ref) {
  var nodeKey = _ref.nodeKey,
      src = _ref.src,
      title = _ref.title,
      alt = _ref.alt;
  var decodedSrc = decodeURI(src);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "Content--Image markdown-preview",
    resolutions: "medium",
    lazy: false,
    src: decodedSrc,
    title: title,
    alt: alt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  });
};

var HtmlBlock = function HtmlBlock(_ref2) {
  var value = _ref2.value;
  if (value.indexOf('<iframe') !== 0) return value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Content--Iframe",
    dangerouslySetInnerHTML: {
      __html: value
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  });
};

var Content = function Content(_ref3) {
  var source = _ref3.source,
      src = _ref3.src,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className;
  // accepts either html or markdown
  source = source || src || '';

  if (source.match(/^</)) {
    source = withContentImages(source);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Content " + className,
      dangerouslySetInnerHTML: {
        __html: source
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "Content " + className,
    source: encodeMarkdownURIs(source),
    renderers: {
      image: MyImage,
      html: HtmlBlock
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  });
};

Content.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
var _default = Content;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encodeMarkdownURIs, "encodeMarkdownURIs", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js");
  reactHotLoader.register(withContentImages, "withContentImages", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js");
  reactHotLoader.register(MyImage, "MyImage", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js");
  reactHotLoader.register(HtmlBlock, "HtmlBlock", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js");
  reactHotLoader.register(Content, "Content", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js");
  reactHotLoader.register(_default, "default", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Content.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.a9d0d1e81387ef67aa2b.hot-update.js.map