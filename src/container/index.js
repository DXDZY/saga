import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';

// import Sider from 'component/Sider';
import CarDetail from './CarDetail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <HashRouter basename="/">
                <div>
                    {/* 可在此添加导航 */}
                    <div>
                        <Switch>
                            <Route path="/:carid" exact component={CarDetail}></Route>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
 
export default App;