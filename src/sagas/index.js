import { all } from 'redux-saga/effects';

import bucketSaga from './bucket';

export default function* rootSaga() {
  yield all([
    bucketSaga(),
  ])
}
