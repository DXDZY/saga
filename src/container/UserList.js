import {connect} from 'react-redux';

import {GET_USER} from 'constant/actionTypes';
import UserList from 'component/UserList';

const mapStateToProps = (state)=>({
    user:state.user.user,
});
const mapDispatchToProps = (dispatch)=>({
    fetchUser:()=>(dispatch({
        type:GET_USER,
    }))
})
export default connect(mapStateToProps,mapDispatchToProps)(UserList);