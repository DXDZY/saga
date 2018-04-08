import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects';
import axios from 'axios';

import {
    get_carDetail,
    get_carDetail_success,
    get_carDetail_fail,
    // current_sound_type
} from 'constant/actionTypes';
import {
    get_carDetail_url
} from 'constant/url';

import 'mock/carDetail';

function* getDetail(action) {
    try {
        let param = new URLSearchParams();
        param.append('carId', action.carid);
        const data = yield call(axios.post, get_carDetail_url, param);
        yield put({
            type: get_carDetail_success,
            data: data,
        });
    } catch (e) {
        yield put({
            type: get_carDetail_fail,
            error: e,
        })
    }
}

export default function* watchGetCarDetail() {
    yield all([
        takeLatest(get_carDetail, getDetail),
    ])
}