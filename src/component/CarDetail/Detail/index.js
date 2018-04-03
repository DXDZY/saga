import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Styles from './index.scss'
import Title from './Title'
import Text from './Text';
import Imgs from './../Imgs';
// import $ from 'jquery';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            hide:true,
            first:true,
        }
    }
    showDetail=()=>{
        const {imgs} = this.props;
        if(!this.state.hide){
            return <Imgs imgs={imgs}/>;
        }else{
            return <div></div>;
        }
    }
    footClick=()=>{
        this.setState({
            hide:!this.state.hide,
            first:false,
        })
    }
    componentDidUpdate() {
        // const {targetId} = this.props;
        // if(!this.state.first){
        //     $('html,body').animate({
        //         scrollTop: $(`#${targetId}`).offset().top
        //     },300);
        // }
    }
    render() { 
        const {
            level_desc,
            type,
            level,
            heavyCount,
            lightCount,
            targetId,
            carInfoName,
        } = this.props;
        const iClass = classNames({
            iDown:this.state.hide,
            iUp:!this.state.hide,
        });
        return (  
            <div>
                <div styleName="container" id={targetId}>
                    <Title {...this.props}/>
                    <Text {...this.props}/>
                    {
                        this.showDetail()
                    }
                </div>
                <div styleName="foot-container" onClick={this.footClick}>
                    <div styleName="injure">
                        <span>重要损伤{heavyCount}处</span>
                        <span>一般损伤{lightCount}处</span>
                    </div>
                    <div styleName="button">
                        <span>
                            {this.state.hide?'查看详情':'收起详情'}
                        </span>
                        <i styleName={iClass}></i>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default CSSModules(Detail,Styles);