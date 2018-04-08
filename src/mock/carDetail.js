import Mock from 'mockjs';

//设置响应时间
Mock.setup({timeout:0});

Mock.mock('api/carDetail',function(options){
    console.log(options);
    return {
        "code": 1,
        "data": {
            "prompt_box_type": "updatePrice",
            "skeletonInfo": {
                "skelentonInjuryPicInfo": [
                    {
                        "tag": "R,L,L",
                        "Point": "0.627861,0.567164|0.588060,0.276119|0.421891,0.201493",
                        "IsEmptyPic": 1,
                        "OtherInfo": "undefined",
                        "color": "1,1,1",
                        "FileName": "http://img.youxinpai.com/che/201707/2517/59770cfd730e0391122.jpg",
                        "PicDes": "左C柱上部-20CM~30CM以内修理痕迹,切割痕迹,切割痕迹",
                        "FileType": 1
                    },
                    {
                        "tag": "R,L,L",
                        "Point": "0.627861,0.567164|0.588060,0.276119|0.421891,0.201493",
                        "IsEmptyPic": 1,
                        "OtherInfo": "undefined",
                        "color": "1,1,1",
                        "FileName": "http://img.youxinpai.com/che/201707/2517/59770cfd730e0391122.jpg",
                        "PicDes": "左C柱上部-20CM~30CM以内修理痕迹,切割痕迹,切割痕迹",
                        "FileType": 1
                    }
                ],
                "carInfoName": "车身骨架",
                "skeleton_explain": "测试内容p6go",
                "skeleton_sound": "http://img.youxinpai.com/che/20170725/1026/5976ac5995a7a120609.wav",
                "skeleton_heavy_count": 9,
                "skeleton_level": "B",
                "skeleton_explain_time": "0:07",
                "SkeletonPaintRepair": "http://img.youxinpai.com/che/201707/1011/5962f41d6af40794462.jpg",
                "SkeletonInjury": "http://img.youxinpai.com/che/201707/1011/5962f41d6af40794462.jpg",
                "skeleton_level_desc": "车身加强件和结构件均无因事故造成的修复、损伤痕迹",
                "skeleton_light_count": 4
            },
            "electricInfo": {
                "ElectricalSystem": "未见明显损伤",
                "electric_explain": "后排空调出风口缺失；电器功能失效",
                "electric_level_desc": "电器有配件缺失；电器功能失效",
                "carInfoName": "车辆电器",
                "electric_level": "4",
                "electric_sound": "http://img.youxinpai.com/che/20170725/1026/5976ac596b714996428.wav",
                "electric_explain_time": "0:05"
            },
            "Summary": "小型普通客车，汽油，排气量3.0L",
            "resumeUrl": "https://m.qichejianli.com/index.html?cid=QCJL_AE7077D504EFA2DFC5994ACCFB9E13A1&vinno=&engineNo=&nativeTop=appDsj&source=c2bgm",
            "LicenseNumber": "沪P",
            "servicing_level": "++",
            "conditionInfo": {
                "condition_explain": "配气机构异响，皮带轮组异响，皮带老化，发动机怠速抖动，发动机缸改螺丝有拆装痕迹，发动机故障灯常亮",
                "condition_level_desc": "发动机，变速箱功能正常；发动机、变速箱有拆解历史（参考维保记录）",
                "carInfoName": "车辆工况",
                "condition_explain_time": "0:10",
                "condition_level": "2",
                "ConditionSummarys": [
                    {
                        "m_Item2": "机油检查",
                        "m_Item3": "混入水分",
                        "m_Item1": "EngineOilRemark"
                    },
                    {
                        "m_Item2": "机油检查",
                        "m_Item3": "混入水分",
                        "m_Item1": "EngineOilRemark"
                    },
                    {
                        "m_Item2": "机油检查",
                        "m_Item3": "混入水分",
                        "m_Item1": "EngineOilRemark"
                    }
                ],
                "condition_sound": "http://img.youxinpai.com/che/20170725/1026/5976ac59491d7472235.wav"
            },
            "is_permission": 1,
            "status": 2,
            "id": 12,
            "FormalitiesInfo": {
                "GetLicenseDate": "2011年8月8日",
                "FoAssuranceDate": "无",
                "ComAssuranceDate": "无",
                "CarShipTaxExpireDate": "无",
                "RegistDate": "2010年1月1日",
                "carProcedurePicsInfo": [
                    {
                        "PicDes": "行驶证正面",
                        "FileName": "http://img.youxinpai.com/che/201707/2510/5976aa09c722b760019.jpg"
                    },
                    {
                        "PicDes": "行驶证正面",
                        "FileName": "http://img.youxinpai.com/che/201707/2510/5976aa09c722b760019.jpg"
                    }
                ],
                "AnnualValidity": "2017年8月",
                "FormalitiesSideSummary": "此车为非营运，公户，过户一次，最近一次过户时间2016年9月；除行驶证和登记证外，其他车辆手续均缺失"
            },
            "carConfigPicsInfo": [
                {
                    "PicDes": "45度",
                    "FileName": "http://img.youxinpai.com/car/201702/1610/58a51586825fa610329.jpg"
                },
                {
                    "PicDes": "左前46度",
                    "FileName": "http://img.youxinpai.com/car/201702/1610/58a51586825fa610329.jpg"
                },
                {
                    "PicDes": "左前47度",
                    "FileName": "http://img.youxinpai.com/car/201702/1610/58a51586825fa610329.jpg"
                }
            ],
            "car_price_status": 201,
            "skeleton_level": "A",
            "interiorInfo": {
                "interior_explain": "后排空调出风口断裂、前排座椅磨损",
                "Interior_light_count": 3,
                "Interior_heavy_count": 19,
                "interior_level_desc": "内饰不可去除污渍、破损、总成件缺失（包含座椅及头枕，内饰盖板，备胎，后备箱隔板、抽屉），非电器总成件故障（含仪表台破损）",
                "interior_level": "3",
                "interiorInjuryPicInfo": [
                    {
                        "FileName": "http://img.youxinpai.com/che/201707/2510/5976aa09c722b760019.jpg",
                        "PicDes": "行驶证正面"
                    }
                ],
                "InteriorInjury": "http://img.youxinpai.com/che/201707/1011/5962f41d455e0378911.jpg",
                "interior_sound": "http://img.youxinpai.com/che/20170725/1026/5976ac59db926167696.wav",
                "interior_explain_time": "0:05",
                "carInfoName": "内饰及附件"
            },
            "appearanceInfo": {
                "appearance_level_desc": "外观覆盖件无更换历史，有修复痕迹（有局部色差、流漆、漆雾）；有伤及漆面凹坑、划伤",
                "carInfoName": "车辆外观",
                "appearance_heavy_count": 10,
                "appearance_explain_time": "0:10",
                "AppearancePaintRepair": "http://img.youxinpai.com/che/201707/1011/5962f41d1b1ec649884.jpg",
                "appearance_light_count": 14,
                "appearance_explain": "四轮轮毂均有划伤，前风挡玻璃飞石砸伤。右前裙边托底。外观漆面除车顶外均需喷漆修复",
                "appearance_level": "C",
                "appearance_sound": "http://img.youxinpai.com/che/20170725/1026/5976ac59b7725479180.wav",
                "AppearanceInjury": "http://img.youxinpai.com/che/201707/1011/5962f41d1b1ec649884.jpg",
                "appearanceInjuryPicInfo": [
                    {
                        "color": "0,0,0",
                        "tag": "R,R,R",
                        "PicDes": "车尾-10CM~30CM以内划伤,10CM~30CM以内划伤,10CM~30CM以内划伤",
                        "FileName": "http://img.youxinpai.com/che/201707/2517/59770e3c8ef68214418.jpg",
                        "IsEmptyPic": 1,
                        "FileType": 0,
                        "Point": "0.653731,0.559701|0.647761,0.225373|0.732338,0.358209",
                        "OtherInfo": "测试内容6kba"
                    },
                    {
                        "color": "0,0,0",
                        "tag": "R,R,R",
                        "PicDes": "车尾-10CM~30CM以内划伤,10CM~30CM以内划伤,10CM~30CM以内划伤",
                        "FileName": "http://img.youxinpai.com/che/201707/2517/59770e3c8ef68214418.jpg",
                        "IsEmptyPic": 1,
                        "FileType": 0,
                        "Point": "0.653731,0.559701|0.647761,0.225373|0.732338,0.358209",
                        "OtherInfo": "测试内容6kba"
                    }
                ]
            },
            "skynet_status": 1,
            "my_price": {
                "transfer_fee": 0.4,
                "offer_buyer_price": 12.4,
                "trade_commission": 0.4,
                "recharge_cash": 100,
                "inquiry_end_time": 79200,
                "offer_price": 12.4
            },
            "SupplementInfo": "车辆有涉水或水泡维修记录；车辆有自燃或火烧维修记录",
            "GetLicenseDate": "13年上牌",
            "FuelType": "汽油",
            "Mileage": "9.55万公里",
            "price_info": {
                "trade_commission": "{\"type\":\"2\",\"values\":{\"0-5\":\"300\",\"5-~\":\"400\"}}",
                "transfer_address": "'北京利星行'",
                "transfer_way": 1,
                "transfer_fee": "{\"agency\":{\"type\":\"2\",\"values\":\"900\"},\"self\":{\"type\":1,\"values\":\"555\"}}",
                "transfer_way_name": "本地号牌自行过户",
                "transfer_pledge_fee": 5000
            },
            "priceType": 1,
            "report_type": 2,
            "car_info_explain": "因车型库匹配失败、实际型号为（FV7160CIX），请买方以实际车型为准",
            "CarConfigInfo": "普通天窗,电动车窗、自动空调",
            "CarOriginalColor": "银灰色",
            "type": 1,
            "electronic_status": 2,
            "EffluentYellow": "环保标准",
            "CarUseType": "使用性质",
            "EfitContent": "未改装；非原车物品不承诺随车出售",
            "TransferType": "本市外迁均可",
            "appearance_level": "A",
            "NameInfo": "[上海] 奥迪 A4L 2013款 2.0T 自动 35TFSI标准型"
        },
        "msg": "处理结果成功"
    };
});
