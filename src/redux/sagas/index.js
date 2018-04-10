

import watchGetCarDetail from './watchGetCarDetail';
import { all } from 'redux-saga/effects'
// root saga
export default function* rootSaga() {
    yield all([
        watchGetCarDetail(),
    ]);
}