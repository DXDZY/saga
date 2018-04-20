import {
    takeLatest,
    call,
    put,
    all,
} from 'redux-saga/effects';
import ajax from 'service/ajax';
import * as apis from 'service/api';

import 'mock/carDetail';

function* getDetail(action) {
    try {
        // let param = new URLSearchParams();
        // param.append('carid', action.payload.carid);
        // param.append('carid2', action.payload.carid);
        // const data = yield call(axios.post, get_carDetail_url, param);
        const data = yield call(ajax.post,apis.get_carDetail_url,{
            carid:action.payload.carid,
            carid2:action.payload.carid,
        });
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