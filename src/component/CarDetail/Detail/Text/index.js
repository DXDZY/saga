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
        const {targetId} = this.props;
        this.props.currentSoundType(targetId);        
    }
    componentDidUpdate() {
        const {targetId,payLoad} = this.props;
        if(targetId===payLoad.currentSoundType){
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
        const {
            sound,
            level_desc,
            targetId,
            payLoad,
            explain_time,
            explain,
        } = this.props;
        const soundClass = classNames({
            sound:true,
            'radio-playing':targetId===payLoad.currentSoundType,
        });
        return (  
            <div styleName="container">
                <div styleName="title">{level_desc}</div>
                <div styleName="detail">
                    <div styleName="sound-c">
                        <div styleName={soundClass} onClick={this.soundClick}>
                            <audio ref={(ref)=>this.audio=ref}>
                                <source src={sound}/>
                            </audio>
                        </div>
                        <div styleName="second">{explain_time}</div>
                    </div>
                    <div styleName="text-c">
                        <span styleName="text">{explain}</span>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default CSSModules(Text,Styles,{
    allowMultiple:true,
});