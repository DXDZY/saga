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
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const carid = this.props.match.params.carid;
        this.props.actions.getDate({
            carid,
        });
    }
    showData=()=>{
        const {data} = this.props;
        if(data){
            return(
                <div>
                    <Banner {...data}/>
                    <Title {...data}/>
                    <Splite />
                    <SubTitle type="link" title="出价规则" text="查看详情"/>
                    <Splite />
                    <SubTitle type="span" title="基本信息" moreHeight="true"/>
                    <BaseInformation {...data} />
                    <Splite />
                    <SubTitle type="span" title="手续信息" moreHeight="true" id="procedure"/>
                    <ProcedureInformation targetId="procedure" {...data} />
                    <Splite />
                    <SubTitle type="span" title="车况信息" text="“质检师说”由科大讯飞转译" moreHeight="true" />
                    <Detail 
                        targetId="skeleton"
                        type="letter"
                        detailType="imgs"
                        text="车身骨架"
                        carInfoName={data.skeletonInfo.carInfoName}
                        level_desc={data.skeletonInfo.skeleton_level_desc}
                        sound={data.skeletonInfo.skeleton_sound}
                        level={data.skeletonInfo.skeleton_level}
                        explain_time={data.skeletonInfo.skeleton_explain_time}
                        explain={data.skeletonInfo.skeleton_explain}
                        imgs={[
                            {
                                FileName:data.skeletonInfo.SkeletonInjury,
                                PicDes:"骨架损伤图",
                            },{
                                FileName:data.skeletonInfo.SkeletonPaintRepair,
                                PicDes:"骨架漆面修复图",
                            },
                            ...data.skeletonInfo.skelentonInjuryPicInfo,
                        ]}
                        heavyCount={data.skeletonInfo.skeleton_heavy_count}
                        lightCount={data.skeletonInfo.skeleton_light_count}
                        {...this.props}
                    />
                    <Splite />
                    <Detail 
                        targetId="appearance"
                        type="letter"
                        detailType="imgs"
                        text="车辆外观"
                        carInfoName={data.appearanceInfo.carInfoName}
                        level={data.appearanceInfo.appearance_level}
                        level_desc={data.appearanceInfo.appearance_level_desc}
                        sound={data.appearanceInfo.appearance_sound}
                        explain_time={data.appearanceInfo.appearance_explain_time}
                        explain={data.appearanceInfo.appearance_explain}
                        imgs={[
                            {
                                FileName:data.appearanceInfo.AppearanceInjury,
                                PicDes:"外观损伤图",
                            },{
                                FileName:data.appearanceInfo.AppearancePaintRepair,
                                PicDes:"外观漆面修复图",
                            },
                            ...data.appearanceInfo.appearanceInjuryPicInfo,
                        ]}
                        heavyCount={data.appearanceInfo.appearance_heavy_count}
                        lightCount={data.appearanceInfo.appearance_light_count}
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