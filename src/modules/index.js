import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all, call } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import apply from './apply/apply';
import modal from './modal/modal';

const rootReducer = combineReducers({
  apply,
  modal,
});

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
  yield all([]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);

export default store;

sagaMiddleWare.run(rootSaga);
