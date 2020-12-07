webpackHotUpdate("cms",{

/***/ "./src/components/Comment.js":
/*!***********************************!*\
  !*** ./src/components/Comment.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Comment.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var commentNodeId = 'comments';

var Comment = function Comment() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // docs - https://utteranc.es/
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'Negev-Web-Dev/Negev-Web-Dev.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('id', 'utterances');
    script.setAttribute('label', 'comment :speech_balloon:');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    var scriptParentNode = document.getElementById(commentNodeId);
    scriptParentNode.appendChild(script);
    return function () {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: commentNodeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 10
    }
  });
};

__signature__(Comment, "useEffect{}");

var _default = Comment;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(commentNodeId, "commentNodeId", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Comment.js");
  reactHotLoader.register(Comment, "Comment", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Comment.js");
  reactHotLoader.register(_default, "default", "/Users/v/Documents/clients/mess/nwd/Negev-Web-Dev.github.io/src/components/Comment.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.ec6191b93843da0bef7d.hot-update.js.map