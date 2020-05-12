import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import articleService from './../services/articleService';

function* fetchTodos() {
  let items = yield call(articleService.getItems);

  yield put({type: 'FETCH_COMPLETED', payload: {items}});
}

function* fetchTodosSaga() {
  yield takeLatest('FETCH_TODOS', fetchTodos);
}

export default function* todoSaga() {
  yield all([
    fetchTodosSaga(),
  ]);
};
