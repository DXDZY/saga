import {connect} from 'react-redux';
import {get_carDetail} from 'constant/actionTypes';
import carDetail from 'component/carDetail';

const mapStateToProps = (state)=>({
    data:state.carDetail.data,
})
const mapDispatchToProps = (dispatch)=>({
    getCarDetail:()=>dispatch({
        type:get_carDetail
    }),
})

export default connect(mapStateToProps,mapDispatchToProps)(carDetail);