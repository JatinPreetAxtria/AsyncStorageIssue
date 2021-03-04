import { all, fork } from 'redux-saga/effects';
import watchOther from "./othersaga";

export function* rootSaga() {
  yield all([
    fork(watchOther),
  ]);
}