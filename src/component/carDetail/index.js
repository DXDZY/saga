import React, { Component } from 'react';

import Loading from './../Loading'
import Banner from './Banner';
import Title from './Title';
import Splite from './Splite';
import SubTitle from './SubTitle';
import BaseInformation from './BaseInformation';
import ProcedureInformation from './ProcedureInformation';
import Detail from './Detail';
class CarDetail extends Component {
    static defaultProps = {
        data:[],
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const carid = this.props.match.params.carid;
        this.props.getCarDetail(carid);
    }
    showData=()=>{
        const {data,payLoad} = this.props;
        if(data.data){
            const currentData = data.data;
            return(
                <div>
                    <Banner {...currentData}/>
                    <Title {...currentData}/>
                    <Splite />
                    <SubTitle type="link" title="出价规则" text="查看详情"/>
                    <Splite />
                    <SubTitle type="span" title="基本信息" moreHeight="true"/>
                    <BaseInformation {...currentData} />
                    <Splite />
                    <SubTitle type="span" title="手续信息" moreHeight="true" id={payLoad.shouXuId}/>
                    <ProcedureInformation {...currentData} payLoad = {payLoad}/>
                    <Splite />
                    <SubTitle type="span" title="车况信息" text="“质检师说”由科大讯飞转译" moreHeight="true" />
                    <Detail 
                        targetId="skeleton"
                        type="letter"
                        detailType="imgs"
                        carInfoName={currentData.skeletonInfo.carInfoName}
                        level_desc={currentData.skeletonInfo.skeleton_level_desc}
                        sound={currentData.skeletonInfo.skeleton_sound}
                        level={currentData.skeletonInfo.skeleton_level}
                        explain_time={currentData.skeletonInfo.skeleton_explain_time}
                        explain={currentData.skeletonInfo.skeleton_explain}
                        imgs={[
                            {
                                FileName:currentData.skeletonInfo.SkeletonInjury,
                                PicDes:"骨架损伤图",
                            },{
                                FileName:currentData.skeletonInfo.SkeletonPaintRepair,
                                PicDes:"骨架漆面修复图",
                            },
                            ...currentData.skeletonInfo.skelentonInjuryPicInfo,
                        ]}
                        heavyCount={currentData.skeletonInfo.skeleton_heavy_count}
                        lightCount={currentData.skeletonInfo.skeleton_light_count}
                        {...this.props}
                    />
                    <Splite />
                    <Detail 
                        targetId="appearance"
                        type="letter"
                        detailType="imgs"
                        carInfoName={currentData.appearanceInfo.carInfoName}
                        level={currentData.appearanceInfo.appearance_level}
                        level_desc={currentData.appearanceInfo.appearance_level_desc}
                        sound={currentData.appearanceInfo.appearance_sound}
                        explain_time={currentData.appearanceInfo.appearance_explain_time}
                        explain={currentData.appearanceInfo.appearance_explain}
                        imgs={[
                            {
                                FileName:currentData.appearanceInfo.AppearanceInjury,
                                PicDes:"外观损伤图",
                            },{
                                FileName:currentData.appearanceInfo.AppearancePaintRepair,
                                PicDes:"外观漆面修复图",
                            },
                            ...currentData.appearanceInfo.appearanceInjuryPicInfo,
                        ]}
                        heavyCount={currentData.appearanceInfo.appearance_heavy_count}
                        lightCount={currentData.appearanceInfo.appearance_light_count}
                        {...this.props}
                    />
                </div>
            )
        }
    }
    render() { 
        return (  
            <div>
                {this.showData()}
                <Loading {...this.props}/>
            </div>
        )
    }
}
 
export default CarDetail;