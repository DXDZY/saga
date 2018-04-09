import React, { Component } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import Swiper from 'common/js/swiper/swiper.js';

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
        new Swiper('.swiper-container',{
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
        const {
            carConfigPicsInfo,
            skeleton_level,
            appearance_level,
            servicing_level,
        } = this.props;
        const liClass = classNames({
            imgItem:true,
        });
        return (  
            <div styleName="container">
                <div className="swiper-container">
                    <ul className="swiper-wrapper">
                        {
                            carConfigPicsInfo.map(function(item,index){
                                return (<li className="swiper-slide" styleName={liClass} key={index}><img src={item.FileName} alt="" /></li>)
                            })
                        }
                    </ul>
                </div>
                <div styleName="topRight">
                    <span>{carConfigPicsInfo[this.state.pageIndex].PicDes}</span>
                    <span styleName="topRightPage">{this.state.pageIndex+1}/{carConfigPicsInfo.length}</span>
                </div>
                <div styleName="leftBtn" id="prevEl"></div>
                <div styleName="rightBtn" id="nextEl"></div>
                <div styleName="see see-procedures">查看手续</div>
                <div styleName="see see-carCondition">查看完整车况</div>
                <div styleName="bottomRight">
                    <dl>
                        <dt>骨架</dt>
                        <dd>{skeleton_level}</dd>
                    </dl>
                    <dl>
                        <dt>外观</dt>
                        <dd>{appearance_level}</dd>
                    </dl>
                    <dl>
                        <dt>整备</dt>
                        <dd>{servicing_level}</dd>
                    </dl>
                </div>
            </div>
        )
    }
}
 
export default CSSModules(Banner,styles,{
    allowMultiple:true
});