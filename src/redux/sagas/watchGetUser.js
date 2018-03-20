import {call,takeLatest,put} from 'redux-saga/effects';
import axios from 'axios';
import {GET_USER,GET_USER_SUCCESS,GET_USER_FAIL} from  'constant/actionTypes';
import {GET_USER_URL} from 'constant/url';

function* getUserData(action){
    try{
        const userData = yield call(axios.get,GET_USER_URL);
        yield put({
            type:GET_USER_SUCCESS,
            user:userData,
        })
    }catch(e){
        yield put({
            type:GET_USER_FAIL,
            error:e,
        })
    }
}
function* watchGetUser(){
    yield takeLatest(GET_USER,getUserData);
}
export default watchGetUser;