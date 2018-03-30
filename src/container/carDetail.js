import {connect} from 'react-redux';
import {get_carDetail} from 'constant/actionTypes';
import CarDetail from 'component/CarDetail';

const mapStateToProps = (state)=>({
    data:state.carDetail.data.data,
    isLoading:state.carDetail.isLoading,
    payLoad:state.carDetail.payLoad,
})

const mapDispatchToProps = (dispatch)=>({
    getCarDetail:(carid)=>dispatch({
        type:get_carDetail,
        carid,
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(CarDetail);