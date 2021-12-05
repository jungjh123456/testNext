import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import count, { countRequestSaga } from './modules/count';
import loading from './modules/loading';

const rootReducer = combineReducers({
count,
loading,
});

export function* rootSaga() {
	yield all([countRequestSaga()]);
}

export default rootReducer;