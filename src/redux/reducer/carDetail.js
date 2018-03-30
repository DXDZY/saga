import {get_carDetail_success,get_carDetail_fail} from 'constant/actionTypes';

const carDetailReducer = (state={
    data:{},
    error:null,
    isLoading:true,
    payLoad:{
        shouXuId:'sxId',
    }
},action)=>{
    switch(action.type){
        case get_carDetail_success:
            return {
                ...state,
                data:action.data,
                isLoading:false,
            }
        case get_carDetail_fail:
            return {
                ...state,
                error:action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}
export default carDetailReducer;