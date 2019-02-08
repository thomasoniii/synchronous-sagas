import { all, put, takeEvery, select } from 'redux-saga/effects';

import {
  INCREMENT_ALFA,
  INCREMENT_BRAVO,
} from '../constants/types';

import {
  incrementCharlie,
  incrementDelta
} from '../actions';

export default function* bucketSaga() {
  yield all([
    takeEvery( INCREMENT_ALFA,  acknowledgeAlfa ),
    takeEvery( INCREMENT_BRAVO, acknowledgeBravo ),
  ])
}


function* acknowledgeAlfa(action) {
  const state = yield select();
  console.log('state in acknowledge alfa is : ', state);
  yield put( incrementCharlie() );
}

function* acknowledgeBravo(action) {
  const state = yield select();
  console.log('state in acknowledge bravo is : ', state);
  yield put( incrementDelta() );
}
