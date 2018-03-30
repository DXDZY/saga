import {connect} from 'react-redux';
import {get_carDetail} from 'constant/actionTypes';
import Loadable from 'react-loadable';
import Loading from 'component/Loading';

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
const LoadableComponent = Loadable({
    loader: () => import('component/CarDetail'),
    loading: Loading,
});
export default connect(mapStateToProps,mapDispatchToProps)(LoadableComponent);