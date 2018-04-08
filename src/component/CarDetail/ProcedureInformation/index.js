import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Styles from './index.scss';
import $ from 'jquery';
import Imgs from './../Imgs'

class ProcedureInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            hide:true,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // const {payLoad} = this.props;
        // if(!this.state.first){
        //     $('html,body').animate({
        //         scrollTop: $(`#${payLoad.shouXuId}`).offset().top
        //     },300);
        // }
    }
    showHide=()=>{
        this.setState({
            hide:!this.state.hide,
        })
        const {targetId} = this.props;
        $('html,body').animate({
            scrollTop: $(`#${targetId}`).offset().top
        },300);
    }
    showDetail=()=>{
        const {FormalitiesInfo} = this.props;
        if(this.state.hide){
            return <div></div>
        }else{
            return (
                <div styleName="detail-container">
                    <div styleName="item">
                        <span styleName="key">出厂日期</span>
                        <span styleName="value">{FormalitiesInfo.RegistDate}</span>
                    </div>
                    <div styleName="item">
                        <span styleName="key">注册日期</span>
                        <span styleName="value">{FormalitiesInfo.GetLicenseDate}</span>
                    </div>
                    <div styleName="item">
                        <span styleName="key">年检到期</span>
                        <span styleName="value">{FormalitiesInfo.AnnualValidity}</span>
                    </div>
                    <div styleName="item">
                        <span styleName="key">交强险到期</span>
                        <span styleName="value">{FormalitiesInfo.FoAssuranceDate}</span>
                    </div>
                    <div styleName="item">
                        <span styleName="key">车船税到期</span>
                        <span styleName="value">{FormalitiesInfo.CarShipTaxExpireDate}</span>
                    </div>
                    <div styleName="item">
                        <span styleName="key">商业险到期</span>
                        <span styleName="value">{FormalitiesInfo.ComAssuranceDate}</span>
                    </div>
                    <Imgs imgs={FormalitiesInfo.carProcedurePicsInfo}/>
                </div>
            )
        }
    }
    render() { 
        const {FormalitiesInfo} = this.props;
        const moreClass = classNames({
            more:true,
        });
        const moreIconClass = classNames({
            iDown:this.state.hide,
            iUp:!this.state.hide,
        });
        return (  
            <div styleName="container">
                <p styleName="text">{FormalitiesInfo.FormalitiesSideSummary}</p>
                    {this.showDetail()}
                <div styleName="show-c">
                    <a styleName={moreClass} onClick={this.showHide}>
                        <span>
                            {
                                this.state.hide?'查看全部手续':'收起'
                            }
                        </span>
                        <i styleName={moreIconClass}></i>
                    </a>
                </div>
            </div>
        )
    }
}
 
export default CSSModules(ProcedureInformation,Styles,{
    allowMultiple:true,
});