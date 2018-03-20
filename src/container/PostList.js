import {connect} from  'react-redux';
import { GET_POSTS_SAGA } from 'constant/actionTypes'
import PostList from 'component/PostList';

const mapStateToProps = (state) => ({
    posts:state.posts.posts,
});
const mapDispatchToProps = (dispatch)=>({
    fetchPosts:()=>dispatch({
        type:GET_POSTS_SAGA,
    })
});
export default connect(mapStateToProps,mapDispatchToProps)(PostList);