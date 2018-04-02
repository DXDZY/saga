import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Styles from './index.scss';
class Imgs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {imgs} = this.props;
        return (  
            <div styleName="container clearfix">
                {
                    imgs.map(function(item,index){
                        return (
                            <div key={index} styleName="imgItem">
                                <img src={item.FileName} alt=""/>
                                <span>{item.PicDes.split('-')[0]}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
 
export default CSSModules(Imgs,Styles,{
    allowMultiple:true,
});