import {
    connect
} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loadable from 'react-loadable';
import Loading from 'component/Loading';
import {getCarDetailProps} from 'selector/CarDetail';
import * as actions from 'action/carDetail';

// const mapStateToProps = (state) => ({
//     data: state.carDetail.data.data,
//     isLoading: state.carDetail.isLoading,
//     payLoad: state.carDetail.payLoad,
// })
const mapStateToProps = (state) => getCarDetailProps(state);
const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(actions,dispatch)
})
// const mapDispatchToProps = (dispatch) => ({
//     getCarDetail: (carid) => dispatch({
//         type: get_carDetail,
//         carid,
//     }),
//     currentSoundType: (currentSoundType) => dispatch({
//         type:current_sound_type,
//         currentSoundType,
//     }),
// })
const LoadableComponent = Loadable({
    loader: () =>
        import ('component/CarDetail'),
    loading: Loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadableComponent);