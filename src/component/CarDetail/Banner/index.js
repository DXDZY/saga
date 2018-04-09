import React, { Component } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import Swiper from 'common/js/swiper/swiper.js';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'common/js/photoswipe/photoswipe-ui-default';
import 'styles/swiper.css'
import styles from './index.scss'
import 'styles/photoswipe/photoswipe.css';
import 'styles/photoswipe/default-skin.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.imgItems = [];
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
    imgClick=(e,index)=>{
        const pswpElement = document.querySelectorAll('.pswp')[0];
        const options = {
            index: index,
            showHideOpacity: true,
            bgOpacity: 0.7, //遮罩层
            spacing: 0.1, //幻灯片之间的间距比
            allowPanToNext: true, //当前项目被放大时，允许滑动导航到下一个/上一个项目
            maxSpreadZoom: 2, //执行传播（缩放）手势时的最大缩放级别
            loop: false, //使用轻扫手势时循环滑动。如果设置为true您可以从最后一个图像刷到第一个图像。选项总是false少于3张幻灯片。
            pinchToClose: false, //捏合以关闭画廊手势。用户缩小后，画廊的背景将逐渐淡出。手势完成后，画廊将关闭。
            closeOnScroll: false, //在页面滚动上关闭图库。该选项仅适用于没有硬件触摸支持的设备。
            closeOnVerticalDrag: true, //垂直拖动和图像未缩放时关闭图库。总是false在使用鼠标时。
            escKey: true, //esc键盘键来关闭PhotoSwipe
            arrowKeys: true, //键盘向左或向右箭头键导航
            history: false, //如果设置为false禁用历史模块（后退按钮关闭图库，每个幻灯片的唯一URL）。你也可以history.js从你的版本中排除模块。
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a>加载失败</div>', //图像未加载时的错误消息。%url%将被图像的URL替换。
            preload: [1, 1], //根据移动方向延迟加载附近的幻灯片。应该是一个具有两个整数的数组，第一个数组 - 当前图像之前预加载的项目数量，第二个 - 当前图像之后的数量。例如，如果将它设置为[1,3]，它将在当前之前加载1张图像，在当前之后加载3张图像。值不能小于1。
            zoomEl: true,
            shareEl:false,
            fullscreenEl:false,
            tapToToggleControls: false,
        }
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, this.imgItems, options);
        gallery.init();
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
        const that = this;
        this.imgItems = [];
        return (  
            <div styleName="container">
                <div className="swiper-container">
                    <ul className="swiper-wrapper">
                        {
                            carConfigPicsInfo.map(function(item,index){
                                that.imgItems.push({
                                    src:`${item.FileName}`,
                                    w:480,
                                    h:320,
                                    title: item.PicDes.split('-')[0],
                                });              
                                return (
                                    <li className="swiper-slide" styleName={liClass} key={index} onClick={(e)=>that.imgClick(e,index)}>
                                        <img src={item.FileName} alt="" />
                                    </li>
                                )
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
                {/* -------photoswip------ */}
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="pswp__bg"></div>
                    <div className="pswp__scroll-wrap">
                        <div className="pswp__container">
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                        </div>
                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter"></div>

                                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

                                <button className="pswp__button pswp__button--share" title="Share"></button>

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip"></div> 
                            </div>

                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                            </button>

                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                            </button>

                            <div className="pswp__caption">
                                <div className="pswp__caption__center"></div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ------------- */}
            </div>
        )
    }
}
 
export default CSSModules(Banner,styles,{
    allowMultiple:true
});