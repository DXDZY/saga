import React, { Component } from 'react';
import Swiper from 'swiper';
import 'styles/swiper.css'
import './index.css'

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
        return (  
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                    {
                        carConfigPicsInfo.map(function(item,index){
                            return (<li className="swiper-slide imgItem" key={index}><img src={item.FileName} alt=""/></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
 
export default Banner;