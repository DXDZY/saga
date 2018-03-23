import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import 'styles/pacman.css';
import styles from './index.scss';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {isLoading} = this.props;
        const containerStyle = classNames({
            hid:!isLoading,
            container:true,
        })
        return (  
            <div styleName={containerStyle}>
                <div styleName="loading-color" className="la-pacman la-2x">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
 
export default CSSModules(Loading,styles,{
    allowMultiple:true,
});