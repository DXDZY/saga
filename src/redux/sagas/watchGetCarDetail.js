import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects';
import axios from 'axios';

import {
    get_carDetail_url
} from 'constant/url';

import 'mock/carDetail';

function* getDetail(action) {
    try {
        let param = new URLSearchParams();
        param.append('carid', action.payload.carid);
        const data = yield call(axios.post, get_carDetail_url, param);
        yield put({
            type: 'carDetail/getDataSuccess',
            payload:{
                data,
            }
        });
    } catch (e) {
        yield put({
            type: 'carDetail/getDataError',
            payload:{
                error: e,
            }
        })
    }
}

export default function* watchGetCarDetail() {
    yield all([
        takeLatest('carDetail/getData', getDetail),
    ])
}