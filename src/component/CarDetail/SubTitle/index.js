import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Styles from './index.scss'
class SubTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    showType = ()=>{
        const {type,text} = this.props;
        let ui = <div></div>;
        switch(type){
            case 'link':
                ui = <a styleName="right">{text}</a>;
                break;
            case 'span':
                ui = <span styleName="text">{text}</span>
                break;
            default:
                break;
        }
        return ui;
    }
    render() { 
        const {title,id} = this.props;
        const containerStyle = classNames({
            "container":true,
            "moreHeight":this.props.moreHeight,
        });
        return (  
            <div styleName={containerStyle} id={id}>
                <div styleName="inner">
                    <span styleName="left">{title}</span>
                    {this.showType()}
                </div>
            </div>
        )
    }
}
 
export default CSSModules(SubTitle,Styles,{
    allowMultiple:true,
});