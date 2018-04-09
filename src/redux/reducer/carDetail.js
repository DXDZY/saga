import * as actions from 'action/carDetail';
import {
    handleActions
} from 'redux-actions';
const carDetailReducer = handleActions({
    [actions.getDataSuccess]: (state, action) => ({
        ...state,
        isLoading: false,
        ...action.payload,
    }),
    [actions.getSoundType]: (state, action) => {
        return {
            ...state,
            currentSoundType:action.payload.currentSoundType,
        }
    },
}, {
    data: {},
    error: null,
    isLoading: true,
    currentSoundType: '-1',
});
// import {
//     get_carDetail_success,
//     get_carDetail_fail,
//     current_sound_type,
// } from 'constant/actionTypes';

// const carDetailReducer = (state = {
//     data: {},
//     error: null,
//     isLoading: true,
//     payLoad: {
//         currentSoundType: '-1',
//     }
// }, action) => {
//     switch (action.type) {
//         case get_carDetail_success:
//             return {
//                 ...state,
//                 data: action.data,
//                 isLoading: false,
//             }
//         case get_carDetail_fail:
//             return {
//                 ...state,
//                 error: action.error,
//                 isLoading: false,
//             }
//         case current_sound_type:
//             return {
//                 ...state,
//                 payLoad:{
//                     ...state.payLoad,
//                     currentSoundType: action.currentSoundType,
//                 }
//             }
//         default:
//             return state;
//     }
// }
export default carDetailReducer;