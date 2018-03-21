import {
    combineReducers
} from 'redux';
import posts from './posts';
import user from './user';
import carDetail from './carDetail';

const appReducer = (() => combineReducers({
    posts,
    user,
    carDetail,
}))();

export default appReducer;