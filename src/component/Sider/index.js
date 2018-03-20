import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Link to="/page1">获取User数据</Link><br/>
                <Link to="/page2">获取Posts数据</Link>
            </div>
        )
    }
}
 
export default Sider;