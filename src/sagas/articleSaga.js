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
    let title = yield select(state => state.article.editTitle);
    let image = yield select(state => state.article.editImage);
    let description = yield select(state => state.article.editDescription);
    let text = yield select(state => state.article.editText);

    let item = yield call(articleService.addItem, {
      title,
      image,
      description,
      text,
    });

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
