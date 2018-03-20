import React, { Component } from 'react';
import PropTypes from 'prop-types'
const {func} = PropTypes;

class PostList extends Component {
    static propTypes = {
        fetchPosts:func,
    }
    static defaultProps = {
        posts : [],
    }
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() { 
        const { posts } = this.props;
        return (  
            <div>
                {JSON.stringify(posts)}
            </div>
        )
    }
}
 
export default PostList;