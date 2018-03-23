import React, { Component } from 'react';

import Loading from './../Loading'
import Banner from './Banner';
class CarDetail extends Component {
    static defaultProps = {
        data:[],
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const carid = this.props.match.params.carid;
        this.props.getCarDetail(carid);
    }
    showData=()=>{
        const {data} = this.props;
        if(data.data){
            return(
                <div>
                    <Banner {...data.data}/>
                </div>
            )
        }
    }
    render() { 
        const showData = this.showData();
        return (  
            <div>
                <Loading {...this.props}/>
                {showData}
            </div>
        )
    }
}
 
export default CarDetail;