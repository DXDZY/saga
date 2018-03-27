import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.scss';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    showTips=()=>{
        const {CarUseType,TransferType,EffluentYellow} = this.props;
        let ui = [];
        if(CarUseType!==''){
            ui.push(<span styleName="tip color-yellow" key="1">{CarUseType}</span>);
        }
        if(TransferType!==''){
            ui.push(<span styleName="tip color-red" key="2">{TransferType}</span>);
        }
        if(EffluentYellow!==''){
            ui.push(<span styleName="tip color-blue" key="3">{EffluentYellow}</span>);
        }
        return ui;
    }
    render() { 
        const {
            NameInfo,
            LicenseNumber,
            GetLicenseDate,
            Mileage,
            CarOriginalColor,
        } = this.props;
        return (  
            <div>
                <div styleName="container">
                    <h1 styleName="title">{NameInfo}</h1>
                    <div>
                        {this.showTips()}
                    </div>
                    <div styleName="ditail">
                        {LicenseNumber}/{GetLicenseDate}/{Mileage}/{CarOriginalColor}
                    </div>
                </div>
                <div styleName="line-c">不支持7天无理由退换</div>
            </div>
        )
    }
}
 
export default CSSModules(Title,styles,{
    allowMultiple:true,
});