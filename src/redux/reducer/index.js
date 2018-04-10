import {
    combineReducers
} from 'redux';
import carDetail from './carDetail';

const appReducer = (() => combineReducers({
    carDetail,
}))();

export default appReducer;