import {
    get_carDetail_success,
    get_carDetail_fail,
    current_sound_type,
} from 'constant/actionTypes';

const carDetailReducer = (state = {
    data: {},
    error: null,
    isLoading: true,
    payLoad: {
        shouXuId: 'sxId',
        currentSoundType: '-1',
    }
}, action) => {
    switch (action.type) {
        case get_carDetail_success:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            }
        case get_carDetail_fail:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            }
        case current_sound_type:
            return {
                ...state,
                payLoad:{
                    ...state.payLoad,
                    currentSoundType: action.currentSoundType,
                }
            }
        default:
            return state;
    }
}
export default carDetailReducer;