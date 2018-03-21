import {get_carDetail_success,get_carDetail_fail} from 'constant/actionTypes';

const carDetailReducer = (state={
    data:{},
    error:null,
    fetched:false,
},action)=>{
    switch(action.type){
        case get_carDetail_success:
            return {
                ...state,
                fetched:true,
                data:action.data,
            }
        case get_carDetail_fail:
            return {
                ...state,
                error:action.error,
            }
        default:
            return state;
    }
}
export default carDetailReducer;