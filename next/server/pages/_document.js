"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./pages/_document.js


 //next의 html과 나머지 기타 기능들을 넣어주는 Main과 NextScript
 // head태그에 넣을 정보를 jsx로 작성할 수 있게 도와준다.

// _document.js는 index.html을 꾸며주는거다라고 생각하면 된다.
// class형으로 밖에 못 하는게 조금 아쉽다.
// ServerStyleSheet을 사용하여 서버사이드렌더링을 하게 할 수 있다.
// 전체적으로 css를 주고 싶은 부분은 createGlobalStyle을 사용하여 가능하다.
const GlobalStyles = external_styled_components_.createGlobalStyle`
       html, body {
            height: 100%;
            overflow: auto;
          }
          #__next {
            height: 100%;
          }
`;
class MyDocument extends next_document["default"] {
    static getInitialProps(context) {
        const sheet = new external_styled_components_.ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
        const page = context.renderPage((App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(App, {
                            ...props
                        })
                    ]
                }))
        ); // 아래의 스타일들을 모아서 페이지를 그려준다. 원래는 <GlobalStyles/> 없이 하는데 글로벌 스타일을 지정해주기 위해 저렇게 적었다.
        const styleTags = sheet.getStyleElement();
        return {
            ...page,
            helmet: external_react_helmet_default().renderStatic(),
            styleTags
        };
    }
    render() {
        const { htmlAttributes , bodyAttributes , ...helmet } = this.props.helmet; // helmet으로 부터 받아온다.
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        return(//html이랑 head, body 부분에 각각 props들을 넣어준다
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
            ...htmlAttrs,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        this.props.styleTags,
                        Object.values(helmet).map((el)=>el.toComponent()
                        )
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    ...bodyAttrs,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const _document = (MyDocument);


/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(563)));
module.exports = __webpack_exports__;

})();