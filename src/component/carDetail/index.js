import React, { Component } from 'react';

import Loading from './../Loading'
import Banner from './Banner';
import Title from './Title';
import Splite from './Splite';
import SubTitle from './SubTitle';
import BaseInformation from './BaseInformation';
import ProcedureInformation from './ProcedureInformation';
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
        const {data,payLoad} = this.props;
        if(data.data){
            return(
                <div>
                    <Banner {...data.data}/>
                    <Title {...data.data}/>
                    <Splite />
                    <SubTitle type="link" title="出价规则" text="查看详情"/>
                    <Splite />
                    <SubTitle type="span" title="基本信息" moreHeight="true"/>
                    <BaseInformation {...data.data} />
                    <Splite />
                    <SubTitle type="span" title="手续信息" moreHeight="true" id={payLoad.shouXuId}/>
                    <ProcedureInformation {...data.data} payLoad = {payLoad}/>
                    <Splite />
                    <SubTitle type="span" title="手续信息" text="“质检师说”由科大讯飞转译" moreHeight="true" />
                </div>
            )
        }
    }
    render() { 
        return (  
            <div>
                {this.showData()}
                <Loading {...this.props}/>
            </div>
        )
    }
}
 
export default CarDetail;