import {
    combineReducers
} from 'redux';
import posts from './posts';
import user from './user';

const appReducer = (() => combineReducers({
    posts,
    user,
}))();

export default appReducer;