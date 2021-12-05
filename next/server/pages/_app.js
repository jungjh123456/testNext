"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var effects_ = __webpack_require__(673);
// EXTERNAL MODULE: ./redux/reducers/modules/count.js + 4 modules
var count = __webpack_require__(548);
// EXTERNAL MODULE: ./redux/reducers/modules/loading.js
var loading = __webpack_require__(356);
;// CONCATENATED MODULE: ./redux/reducers/rootReducer.js




const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    count: count/* default */.ZP,
    loading: loading/* default */.ZP
});
function* rootSaga() {
    yield (0,effects_.all)([
        (0,count/* countRequestSaga */.lr)()
    ]);
}
/* harmony default export */ const reducers_rootReducer = (rootReducer);

;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
;// CONCATENATED MODULE: ./redux/store.js




const sagaMiddleware = external_redux_saga_default()();
const initialState = {
    count: {
        num: 0,
        list: []
    }
};
const middlewares = [
    (0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware)
];
const store = (0,external_redux_namespaceObject.createStore)(reducers_rootReducer, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)(...middlewares));
sagaMiddleware.run(rootSaga);
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
const makeStore = ()=>redux_store
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 673:
/***/ ((module) => {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 133:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 984:
/***/ ((module) => {

module.exports = require("redux-actions");

/***/ }),

/***/ 477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [548], () => (__webpack_exec__(810)));
module.exports = __webpack_exports__;

})();