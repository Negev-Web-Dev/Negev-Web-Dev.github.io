webpackHotUpdate("cms",{

/***/ "./src/templates/SinglePost.js":
/*!*************************************!*\
  !*** ./src/templates/SinglePost.js ***!
  \*************************************/
/*! exports provided: SinglePostTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostTemplate", function() { return SinglePostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _SinglePost_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SinglePost.css */ "./src/templates/SinglePost.css");
/* harmony import */ var _SinglePost_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SinglePost_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Comment */ "./src/components/Comment.js");
var _this = undefined,
    _jsxFileName = "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/templates/SinglePost.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









var SinglePostTemplate = function SinglePostTemplate(_ref) {
  var title = _ref.title,
      date = _ref.date,
      body = _ref.body,
      nextPostURL = _ref.nextPostURL,
      prevPostURL = _ref.prevPostURL,
      _ref$categories = _ref.categories,
      categories = _ref$categories === void 0 ? [] : _ref$categories;
  var commentBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', 'Negev-Web-Dev/Negev-Web-Dev.github.io');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('id', 'utterances');
    scriptEl.setAttribute('label', 'comment');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('crossorigin', 'anonymous');

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl);
    } else {
      console.log("Error adding utterances comments on: " + commentBox);
    }
  }, [commentBox]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "SinglePost section light",
    itemScope: true,
    itemType: "http://schema.org/BlogPosting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container skinny",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "SinglePost--BackButton",
    to: "/blog/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronLeft"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), " BACK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SinglePost--Content relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SinglePost--Meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    className: "SinglePost--Meta--Date",
    itemProp: "dateCreated pubdate datePublished",
    date: date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, date), categories && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "|"), categories.map(function (cat, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: cat.category,
      className: "SinglePost--Meta--Category",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, cat.category, index !== categories.length - 1 ? ',' : '');
  }))), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "SinglePost--Title",
    itemProp: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SinglePost--InnerContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    source: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SinglePost--Pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, prevPostURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "SinglePost--Pagination--Link prev",
    to: prevPostURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Previous Post"), nextPostURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "SinglePost--Pagination--Link next",
    to: nextPostURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "Next Post")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Comment__WEBPACK_IMPORTED_MODULE_7__["default"], {
    commentBox: commentBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  })));
}; // Export Default SinglePost for front-end

__signature__(SinglePostTemplate, "useEffect{}");

var SinglePost = function SinglePost(_ref2) {
  var _ref2$data = _ref2.data,
      post = _ref2$data.post,
      allPosts = _ref2$data.allPosts;
  var thisEdge = allPosts.edges.find(function (edge) {
    return edge.node.id === post.id;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    meta: post.frontmatter.meta || false,
    title: post.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SinglePostTemplate, Object.assign({}, post, post.frontmatter, {
    body: post.html,
    nextPostURL: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(thisEdge, 'next.fields.slug'),
    prevPostURL: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(thisEdge, 'previous.fields.slug'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  })));
};

var _default = SinglePost;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3322067518";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SinglePostTemplate, "SinglePostTemplate", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/templates/SinglePost.js");
  reactHotLoader.register(SinglePost, "SinglePost", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/templates/SinglePost.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/templates/SinglePost.js");
  reactHotLoader.register(_default, "default", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/templates/SinglePost.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.b50677920cb033733997.hot-update.js.map