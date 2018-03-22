import React, { Component } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import Swiper from 'swiper';

import 'styles/swiper.css'
import styles from './index.scss'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const mySwiper = new Swiper('.swiper-container');
    }
    render() { 
        const {carConfigPicsInfo} = this.props;
        const liClass = classNames({
            imgItem:true,
        });
        return (  
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                    {
                        carConfigPicsInfo.map(function(item,index){
                            return (<li className="swiper-slide" styleName={liClass} key={index}><img src={item.FileName} alt=""/></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
export default CSSModules(Banner,styles,{
    allowMultiple:true
});