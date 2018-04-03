import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Styles from './index.scss';
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {text,type,level} = this.props;
        return (  
            <div styleName="container">
                <span styleName="key">{text}</span>
                {
                    type==='letter'?<span styleName="letter">{level}</span>:(
                        <div styleName="start-gray">
                            <div styleName={`start-${level}`}>
                                <div styleName="start"></div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
 
export default CSSModules(Title,Styles,{
    allowMultiple:true,
});