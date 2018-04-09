import {
    connect
} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loadable from 'react-loadable';
import Loading from 'component/Loading';
import {getCarDetailProps} from 'selector/CarDetail';
import * as actions from 'action/carDetail';

const mapStateToProps = (state) => getCarDetailProps(state);
const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(actions,dispatch)
})
const LoadableComponent = Loadable({
    loader: () =>
        import ('component/CarDetail'),
    loading: Loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadableComponent);