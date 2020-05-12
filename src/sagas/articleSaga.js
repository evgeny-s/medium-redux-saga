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

function* addArticles() {
  try {
    let item = yield call(articleService.addItem);

    yield put({type: 'ARTICLE/ADDED_NEW_ARTICLE_SUCCESSFULLY', payload: {item}});
  } catch ({message}) {
    yield put({type: 'ARTICLE/ADDED_NEW_ARTICLE_ERROR', payload: {message}});
  }
}

function* fetchArticlesSaga() {
  yield takeLatest('ARTICLE/FETCH', fetchArticles);
}

function* addArticlesSaga() {
  yield takeLatest('ARTICLE/ADD_NEW_ARTICLE', addArticles);
}

export default function* articlesSaga() {
  yield all([
    fetchArticlesSaga(),
    addArticlesSaga(),
  ]);
};
