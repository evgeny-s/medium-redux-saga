import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import articleService from './../services/articleService';

function* fetchArticles() {
  try {
    let items = yield call(articleService.getItems);

    yield put({type: 'ARTICLE/FETCH_SUCCESSFULLY', payload: {items}});
  } catch ({message}) {
    yield put({type: 'ARTICLE/FETCH_ERROR', payload: {message}});
  }
}

function* fetchArticlesSaga() {
  yield takeLatest('ARTICLE/FETCH', fetchArticles);
}

export default function* articlesSaga() {
  yield all([
    fetchArticlesSaga(),
  ]);
};
