import React, { Component } from 'react';
import { HashRouter,Switch,Route,Redirect,Link } from 'react-router-dom';

import PostList from './PostList';
import UserList from './UserList';
import Sider from 'component/Sider';
import carDetail from './carDetail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <HashRouter basename="/">
                <div>
                    <Sider/>
                    <div>
                        <Switch>
                            <Route path="/" exact component={carDetail}></Route>
                            <Route path="/page1" exact component={UserList}></Route>
                            <Route path="/page2" exact component={PostList}></Route>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
 
export default App;