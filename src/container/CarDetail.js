import {
    connect
} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loadable from 'react-loadable';
import Loading from 'component/Loading';
import {getState} from 'selector';
import * as actions from 'action/carDetail';

const mapStateToProps = (state) => getState(state).carDetail;
const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(actions,dispatch)
})
const LoadableComponent = Loadable({
    loader: () =>
        import ('component/CarDetail'),
    loading: Loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadableComponent);