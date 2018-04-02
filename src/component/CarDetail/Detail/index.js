import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Styles from './index.scss'
import Title from './Title'
import Text from './Text';
import Imgs from './../Imgs';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {skeletonInfo} = this.props;
        return (  
            <div styleName="container">
                <Title text={skeletonInfo.carInfoName} type="letter" level={skeletonInfo.skeleton_level}/>
                <Text {...this.props} soundType="skeleton" dataInfo={skeletonInfo}/>
                <Imgs imgs={[
                    {
                        FileName:skeletonInfo.SkeletonInjury,
                        PicDes:"骨架损伤图",
                    },{
                        FileName:skeletonInfo.SkeletonPaintRepair,
                        PicDes:"骨架漆面修复图",
                    },
                    ...skeletonInfo.skelentonInjuryPicInfo,
                ]}/>
            </div>
        )
    }
}
 
export default CSSModules(Detail,Styles);