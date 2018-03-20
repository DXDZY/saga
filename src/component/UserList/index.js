import React, { Component } from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() { 
        const {user} = this.props;
        return (  
            <div>
                {JSON.stringify(user)}
            </div>
        )
    }
}
 
export default UserList;