import React, { Component } from 'react';
import classNames from 'classnames';
import Swiper from 'swiper';
import 'styles/swiper.css'
import styles from './index.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const mySwiper = new Swiper('.swiper-container',{
            autoplay: {
                disableOnInteraction: false,
            },
        });
    }
    render() { 
        const {carConfigPicsInfo} = this.props;
        const liClass = classNames({
            'swiper-slide':true,
            [styles.imgItem]:true,
        });
        return (  
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                    {
                        carConfigPicsInfo.map(function(item,index){
                            return (<li className={liClass} key={index}><img src={item.FileName} alt=""/></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
export default Banner;