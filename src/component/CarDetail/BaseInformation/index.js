import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Styles from './index.scss';

class BaseInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {
            Summary,
            CarConfigInfo,
            EfitContent,
            car_model_explain,
            car_info_explain,
            SupplementInfo,
            report_type,
        } = this.props;
        return (  
            <div styleName="container">
                <div styleName="item">
                    <span styleName="key">车辆信息</span>
                    <span styleName="value">{Summary}</span>
                </div>
                {
                    report_type===2?
                    <div styleName="item">
                        <span styleName="key">可见配置</span>
                        <span styleName="value">{CarConfigInfo}</span>
                    </div>:''
                }
                <div styleName="item">
                    <span styleName="key">改装说明</span>
                    <span styleName="value">{EfitContent}</span>
                </div>
                {
                    (()=>{
                        let ui=[];
                        if(report_type === 2&&car_model_explain){
                            ui.push(
                                <div styleName="item" key="1">
                                    <span styleName="key">车型说明</span>
                                    <span styleName="value">{car_model_explain}</span>
                                </div>
                            )
                        }
                        if(report_type === 2&&car_info_explain){
                            ui.push(
                                <div styleName="item" key="2">
                                    <span styleName="key">手续说明</span>
                                    <span styleName="value">{car_info_explain}</span>
                                </div>
                            )
                        }
                        if(SupplementInfo){
                            ui.push(
                                <div styleName="item" key="3">
                                    <span styleName="key">补充说明</span>
                                    <span styleName="value orange">{SupplementInfo}</span>
                                </div>
                            )
                        }
                        return ui;
                    })()
                }
            </div>
        )
    }
}
 
export default CSSModules(BaseInformation,Styles,{
    allowMultiple:true,
});