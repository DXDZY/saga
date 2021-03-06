import React, { Component } from 'react';
import { HashRouter,Switch,Route,Redirect } from 'react-router-dom';

// import DevTools from 'container/DevTools';
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
                            <Redirect to="/012" />
                        </Switch>
                    </div>
                    {/* <DevTools /> */}
                </div>
            </HashRouter>
        )
    }
}
 
export default App;