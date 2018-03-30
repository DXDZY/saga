import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Styles from './index.scss';
import $ from 'jquery';

class ProcedureInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            hide:true,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(!this.state.hide){
            const {payLoad} = this.props;
            $('html,body').animate({
                scrollTop: $(`#${payLoad.shouXuId}`).offset().top
            },300);
        }
    }
    showHide=()=>{
        this.setState({
            hide:!this.state.hide,
        })
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
                    <div styleName="imgContainer clearfix">
                        {
                            FormalitiesInfo.carProcedurePicsInfo.map(function(item,index){
                                return (
                                    <div key={index} styleName="imgItem">
                                        <img src={item.FileName} alt=""/>
                                        <span>{item.PicDes}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
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