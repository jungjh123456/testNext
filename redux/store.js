import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { rootSaga } from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  count: {
    num: 0,
    list: [],
  },
};

const middlewares = [applyMiddleware(sagaMiddleware)];

const store = createStore(rootReducer, initialState, composeWithDevTools(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
