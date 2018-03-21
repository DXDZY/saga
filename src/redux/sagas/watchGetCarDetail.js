import {takeLatest,call,put} from 'redux-saga/effects'; 
import axios from 'axios';

import {get_carDetail,get_carDetail_success,get_carDetail_fail} from 'constant/actionTypes';
import {get_carDetail_url} from 'constant/url';

import 'mock/carDetail';

function* getDetail(action){
    try{
        let param = new URLSearchParams();
        param.append('carId','123456');
        const data = yield call(axios.post,get_carDetail_url,param);
        yield put({
            type:get_carDetail_success,
            data:data,
        });
    }catch(e){
        yield put({
            type:get_carDetail_fail,
            error:e,
        })
    }
}
export default function* watchGetCarDetail(){
    yield takeLatest(get_carDetail,getDetail)
}