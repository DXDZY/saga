import React, { Component } from 'react';

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
        let ui = [];
        if(data.data){
            return(
                <div>
                    <Banner {...data.data}/>
                </div>
            )
        }else{
            return(<div>123</div>);
        }
        // return ui
    }
    render() { 
        const showData = this.showData();
        return (  
            <div>
                {showData}
            </div>
        )
    }
}
 
export default CarDetail;