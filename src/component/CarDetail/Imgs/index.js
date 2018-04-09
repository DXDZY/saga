import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Styles from './index.scss';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'common/js/photoswipe/photoswipe-ui-default';
import initPhotoSwipeFromDOM from 'common/js/photoswipe/photoswipeShow';
import 'styles/photoswipe/photoswipe.css';
import 'styles/photoswipe/default-skin.css';
import defalutImg from 'common/img/default.png';

class Imgs extends Component {
    constructor(props) {
        super(props);
        this.imgItems = [];
        this.state = {  }
    }

    clickImg=(e,index)=>{
        const pswpElement = document.querySelectorAll('.pswp')[0];
        const options = {
            index: index,
            history: false,
            focus: false,
        }
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, this.imgItems, options);
        gallery.init();
    }
    componentDidMount() {
        initPhotoSwipeFromDOM('.my-gallery');
    }
    
    imgError=(e)=>{
        e.target.src=defalutImg;
    }
    render() { 
        const {imgs} = this.props;
        const that = this;
        return (  
            <div>
                <div styleName="container clearfix" className="my-gallery">
                {
                    imgs.map(function(item,index){
                        that.imgItems.push({
                            src:`${item.FileName}`,
                            w:480,
                            h:320,
                            title: item.PicDes.split('-')[0],
                        });                      
                        return (
                            // <div key={index} styleName="imgItem" onClick={(e)=>that.clickImg(e,index)}>
                            //     <img src={item.FileName} alt=""/>
                            //     <span>{item.PicDes.split('-')[0]}</span>
                            // </div>
                            <figure key={index} styleName="imgItem">
                                <a href={item.FileName} data-size="480x320">
                                    <img src={item.FileName} alt="" onError={that.imgError}/>
                                </a>
                                <figcaption>{item.PicDes.split('-')[0]}</figcaption>
                            </figure>
                        )
                    })
                }
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
 
export default CSSModules(Imgs,Styles,{
    allowMultiple:true,
});