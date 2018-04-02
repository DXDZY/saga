import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Styles from './index.scss';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    soundClick=()=>{
        const {soundType} = this.props;
        this.props.currentSoundType(soundType);        
    }
    componentDidUpdate() {
        const {soundType,payLoad} = this.props;
        if(soundType===payLoad.currentSoundType){
            this.audio.play();
        }else{
            this.audio.pause();
        }     
    }
    componentDidMount() {
        this.audio.addEventListener('ended',()=>{
            this.props.currentSoundType('-1');
        }); 
    }
    componentWillUnmount() {
        this.audio.removeEventListener('ended',()=>{
            this.props.currentSoundType('-1');
        });
    }
    render() { 
        const {dataInfo,soundType,payLoad} = this.props;
        const soundClass = classNames({
            sound:true,
            'radio-playing':soundType===payLoad.currentSoundType,
        });
        return (  
            <div styleName="container">
                <div styleName="title">{dataInfo.skeleton_level_desc}</div>
                <div styleName="detail">
                    <div styleName="sound-c">
                        <div styleName={soundClass} onClick={this.soundClick}>
                            <audio ref={(ref)=>this.audio=ref}>
                                <source src={dataInfo.skeleton_sound}/>
                            </audio>
                        </div>
                        <div styleName="second">{dataInfo.skeleton_explain_time}</div>
                    </div>
                    <div styleName="text-c">
                        <span styleName="text">{dataInfo.skeleton_explain}</span>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default CSSModules(Text,Styles,{
    allowMultiple:true,
});