import React, { Component } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import Swiper from 'swiper';

import 'styles/swiper.css'
import styles from './index.scss'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pageIndex:0,
        }
    }
    componentDidMount() {
        const that = this;
        const mySwiper = new Swiper('.swiper-container',{
            zoom : true,
            navigation:{
                nextEl: '#nextEl',
                prevEl: '#prevEl',
                disabledClass: 'swiper-disabled',
            },
            on:{
                slideChangeTransitionEnd:function(swiper){
                    that.setState({
                        pageIndex:this.activeIndex,
                    })
                }
            }
        });
    }
    render() { 
        const {picArray} = this.props;
        const liClass = classNames({
            imgItem:true,
        });
        return (  
            <div styleName="container">
                <div className="swiper-container">
                    <ul className="swiper-wrapper">
                        {
                            picArray.map(function(item,index){
                                return (<li className="swiper-slide" styleName={liClass} key={index}><img src={item.FileName} alt="" /></li>)
                            })
                        }
                    </ul>
                </div>
                <div styleName="topRight">
                    <span>{picArray[this.state.pageIndex].PicDes}</span>
                    <span styleName="topRightPage">{this.state.pageIndex+1}/{picArray.length}</span>
                </div>
                <div styleName="leftBtn" id="prevEl"></div>
                <div styleName="rightBtn" id="nextEl"></div>
            </div>
            
        )
    }
}
 
export default CSSModules(Banner,styles,{
    allowMultiple:true
});