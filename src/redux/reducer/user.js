import {
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from 'constant/actionTypes';

const userReducer = (state = {
    fetched: false,
    user: [],
    error: null,
}, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                fetched: true,
                user: action.user,
            }
        case GET_USER_FAIL:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
}
export default userReducer;