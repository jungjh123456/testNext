"use strict";
exports.id = 548;
exports.ids = [548];
exports.modules = {

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lr": () => (/* binding */ countRequestSaga),
  "ZP": () => (/* binding */ modules_count),
  "m3": () => (/* binding */ testGet)
});

// UNUSED EXPORTS: countPlus

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(133);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: external "redux-actions"
var external_redux_actions_ = __webpack_require__(984);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(477);
// EXTERNAL MODULE: ./redux/reducers/modules/loading.js
var loading = __webpack_require__(356);
;// CONCATENATED MODULE: ./lib/createRequestSaga.js


//  request : 백엔드 api
function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function*(action) {
        yield (0,effects_.put)((0,loading/* startLoading */.Av)(type)); // 로딩 시작, type: 요청 작업 종류
        try {
            // yield put(pendingLoading(type));
            const response = yield (0,effects_.call)(request, action.payload);
            console.log(response);
            // delay(3000);
            yield (0,effects_.put)({
                type: SUCCESS,
                payload: response
            });
            yield (0,effects_.put)((0,loading/* finishLoading */.kU)(type)); // 로딩 종료, type: 요청 작업 종류
        } catch (error) {
            console.log(error);
            yield (0,effects_.put)((0,loading/* finishLoading */.kU)(type));
            yield (0,effects_.put)({
                type: FAILURE,
                payload: error.response.data
            });
        }
    };
};

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./lib/api/client.js

const client = external_axios_default().create();
/* harmony default export */ const api_client = (client);

;// CONCATENATED MODULE: ./lib/api/restApi.js
const API = 'https://staging.reliefmom.co.kr';

;// CONCATENATED MODULE: ./lib/api/test.js


const getText = ()=>{
    return api_client.get(`${API}/staffs/counselors/`);
};

// EXTERNAL MODULE: external "@redux-saga/core/effects"
var core_effects_ = __webpack_require__(673);
;// CONCATENATED MODULE: ./redux/reducers/modules/count.js





const COUNTPLUS = 'count/COUNTPLUS';
const countPlus = (0,external_redux_actions_.createAction)(COUNTPLUS);
const TESTGET = 'count/TESTGET';
const TESTGET_SUCCESS = 'count/TESTGET_SUCCESS';
const testGet = (0,external_redux_actions_.createAction)(TESTGET);
const initialState = {
    num: 0,
    list: []
};
const count = (0,external_redux_actions_.handleActions)({
    [COUNTPLUS]: (state, { payload  })=>{
        return external_immer_default()(state, (draft)=>{
            draft.num = 3;
        });
    },
    [TESTGET_SUCCESS]: (state, { payload  })=>{
        return external_immer_default()(state, (draft)=>{
            draft.list = payload.data;
        });
    }
}, initialState);
/* harmony default export */ const modules_count = (count);
const getTextListGetSagaRequest = createRequestSaga(TESTGET, getText);
function* countRequestSaga() {
    yield (0,core_effects_.takeLatest)(TESTGET, getTextListGetSagaRequest);
}


/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Av": () => (/* binding */ startLoading),
/* harmony export */   "kU": () => (/* binding */ finishLoading),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(984);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';
const startLoading = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(START_LOADING, (requestType)=>requestType
);
const finishLoading = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(FINISH_LOADING, (requestType)=>requestType
);
const initialState = {
};
// reducer
const loading = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.handleActions)({
    [START_LOADING]: (state, { payload  })=>({
            ...state,
            [payload]: true
        })
    ,
    [FINISH_LOADING]: (state, { payload  })=>({
            ...state,
            [payload]: false
        })
}, initialState);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);


/***/ })

};
;