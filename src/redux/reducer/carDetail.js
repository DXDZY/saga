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
            ...action.payload,
        }
    },
    [actions.getDataError]:(state,action)=>{
        return {
            ...state,
            ...action.payload,
            isLoading:false,
        }
    }
}, {
    data: '',
    error: null,
    isLoading: true,
    currentSoundType: '-1',
});

export default carDetailReducer;