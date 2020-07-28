import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all, call } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import apply from './apply/apply';
import modal from './modal/modal';
import videoSort from './videoSort/videoSort';
import video from './video/video';
import popularVideo from './videoList/popularVideo/popularVideo';
import waitingVideo from './videoList/waitingVideo/waitingVideo';
import writeSubtitle from './writeSubtitle/writeSubtitle';
import mypage from './mypage';

const rootReducer = combineReducers({
  apply,
  modal,
  video,
  videoSort,
  popularVideo,
  waitingVideo,
  writeSubtitle,
  mypage,
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
