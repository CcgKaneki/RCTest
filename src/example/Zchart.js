import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import "./Zchart.css"
import echartsTheme from './echartsTheme'
import echarts from 'echarts';



class Zchart extends Component {
    componentWillMount(){
     echarts.registerTheme('theme', echartsTheme);
}
    getOption = () => {
        let option = {

            toolbox: {
                feature: {
                  dataZoom: {
                    yAxisIndex: false
                  },
                  saveAsImage: {
                    pixelRatio: 2
                  }
                }
            },

          
          dataZoom: [
            {
              type: 'inside',
            },
            {
              type: 'slider'
            }
          ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
          grid:{
            x2:60,
            bottom: '70px'
          },
          legend: {
              textStyle:{
              fontSize: 18,//字体大小
              color: '#ffffff'//字体颜色
              }
          }
 
            ,xAxis: {
                data: ['乳铁蛋白(mg)','能量(100*kJ)','蛋白质(g)','脂肪(g)','亚油酸(g)'
                ,'α-亚麻酸(mg)','碳水化合物(g)','维生素A(μg RE)','维生素D(μg)','维生素E(mg α-TE)'
                ,'维生素K1(μg)','维生素B1(μg)','维生素B2(μg)','维生素B6(μg)','维生素B12(μg)','烟酸(100*μg)'
                ,'叶酸(μg)','泛酸(100*μg)','维生素C(mg)','生物素(μg)'
                ,'钠(mg)','钾(mg)','铜(μg)','镁(mg)','铁(mg)','锌(mg)','锰(μg)','钙(mg)','磷(mg)','碘(μg)','氯(mg)','硒(μg)'
                ,'胆碱(mg)','肌醇(mg)','牛磺酸(mg)','左旋肉碱(mg)','二十二碳六烯酸(%总脂肪酸/100)','二十碳四烯酸(%总脂肪酸/100)','低聚半乳糖(g)','核苷酸(mg)'
                ,'1,3-二油酸2-棕榈酸甘油三酯(g)','叶黄素(μg)','酪蛋白磷酸肽(mg)'
                ],
                axisLabel: {
                   show: true,
                    textStyle: {
                      color: '#ffffff',  //更改坐标轴文字颜色
                      fontSize : 14      //更改坐标轴文字大小
                    }
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine:{
                     lineStyle:{
                        color:'#ffffff' //更改坐标轴颜色
                     }
               }
            },



            // xAxis: {
            //     offset:0,
            //     textStyle: {
            //         color: '#FFB6C1'
            //     },
            //     axisLabel :{
            //         color: '#FFB6C1',
            //         interval:0
            //     },
            //     type: 'category',
            //     data: ['能量(kJ)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)']
            // },
            yAxis: {
                splitLine:{
                    show:false //去掉背景的网格线
                },
                show:true,  //隐藏坐标轴及刻度
                axisLabel: {
                    textStyle:{
                        color:'#00FFFF',  //坐标的字体颜色
                    }
                },
                axisLine:{
                    show:false, //隐藏坐标轴
                    lineStyle:{
                        color:'#00eeff',  //坐标轴的颜色
                    }
                },
                axisTick:{
                    show:false, //隐藏坐标轴的刻度
                }

            },
            // '乳铁蛋白(mg)','能量(100*kJ)','蛋白质(g)','脂肪(g)','亚油酸(g)'
                // ,'α-亚麻酸(mg)','碳水化合物(g)','维生素A(μg RE)','维生素D(μg)','维生素E(mg α-TE)'],
                // ,'维生素K1(μg)','维生素B1(μg)','维生素B2(μg)','维生素B6(μg)','维生素B12(μg)','烟酸(μg)'
                // ,'叶酸(μg)','泛酸(μg)','维生素C(mg)','生物素(μg)'

                // ,'钠(mg)','钾(mg)','铜(μg)','镁(mg)','铁(mg)','锌(mg)','锰(μg)',
                // '钙(mg)','磷(mg)','碘(μg)','氯(mg)','硒(μg)'

                // '胆碱(mg)','肌醇(mg)','牛磺酸(mg)','左旋肉碱(mg)'
                // ,'二十二碳六烯酸(%总脂肪酸)','二十碳四烯酸(%总脂肪酸)','低聚半乳糖(g)','核苷酸(mg)'
            series: [{
                large: true,
                name: '皇家美素佳儿1段',
                data: [450,21.21,11.0,27.0,2.30,325,53.5,400,8.6,6.2,39,490,660,370,1.7,36,95,50,100,20
                ,160,550,370,48,6.0,4.6,115,400,230,95,320,19.0
                ,155,50,30,20,35,46,3.0,24,0,0,0
                ],
                type: 'bar'          },
            {
                large: true,
                name: '美素佳儿1段',
                data: [0,21.09,11.5,26.4,3.01,420,53.6,550,8.5,8.1,39,430,610,500,2.8,36,85,50,100,20
                ,175,600,365,46,6.0,4.6,115,400,230,110,340,19.0
                ,155,50,46,20,25,34,3.0,23,0,0,0
                ],
                type: 'bar'
            },
            {
                large: true,
                name: '皇家美素佳儿2段',
                data: [450,19.94,15.5,21.5,1.82,0,53.5,450,9.3,5.2,46,510,790,640,2.0,54,140,50,95,22
                ,210,700,405,56,7.4,3.5,230,560,380,100,430,23
                ,135,45,30,18,38,10,3.0,25,0,0,0
                ],
                type: 'bar'
            },
            {
                large: true,
                name: '飞鹤星飞帆',
                data: [0,21.22,10.5,27.2,4.1,410,53.6,500,7.5,6.0,60,650,500,520,1.5,41,67,30.5,70,16
                ,131,360,350,32,5.0,4.5,40,350,200,70,280,15
                ,65,40,38,9,17,35,3.0,30,6.0,80,40
                ],
                type: 'bar'
            }
            ]
        };
        return option;
    };

    getOption2 = () => {
        let option = {

            toolbox: {
                feature: {
                  dataZoom: {
                    yAxisIndex: false
                  },
                  saveAsImage: {
                    pixelRatio: 2
                  }
                }
            },

            dataZoom: [{
                type: 'slider',
                show:true,
                start: 0,
                end: 55,
                bottom:0, 
                backgroundColor: "rgba(255,255,255,0.5)",
                dataBackgroundColor: "#ffffff",
                fillerColor: "rgba(205,127,50,0.7)",
                handleColor: "#ffffff",
                handleSize: "100%",
                textStyle: {
                    color: "#ffffff"
                }
            },{
                type: 'inside'
                
            }],

          
          
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
          grid:{
            x2:60,
            bottom: '70px'
          },
          legend: {
              textStyle:{
              fontSize: 18,//字体大小
              color: '#ffffff'//字体颜色
              }
          }
 
            ,xAxis: {
                data: ['钠(mg)','钾(mg)','铜(μg)','镁(mg)','铁(mg)','锌(mg)'
                ,'锰(μg)','钙(mg)','磷(mg)','碘(μg)','氯(mg)','硒(μg)'
                
                ],
                axisLabel: {
                   show: true,
                    textStyle: {
                      color: '#ffffff',  //更改坐标轴文字颜色
                      fontSize : 14      //更改坐标轴文字大小
                    }
                 },
                 axisTick: {
                     show: false
                 },
                 axisLine:{
                     lineStyle:{
                        color:'#ffffff' //更改坐标轴颜色
                     }
               }
            },



            yAxis: {
                splitLine:{
                    show:false //去掉背景的网格线
                },
                show:true,  //隐藏坐标轴及刻度
                axisLabel: {
                    textStyle:{
                        color:'#00FFFF',  //坐标的字体颜色
                    }
                },
                axisLine:{
                    show:false, //隐藏坐标轴
                    lineStyle:{
                        color:'#00eeff',  //坐标轴的颜色
                    }
                },
                axisTick:{
                    show:false, //隐藏坐标轴的刻度
                }

            },
            // '乳铁蛋白(mg)','能量(100*kJ)','蛋白质(g)','脂肪(g)','亚油酸(g)'
                // ,'α-亚麻酸(mg)','碳水化合物(g)','维生素A(μg RE)','维生素D(μg)','维生素E(mg α-TE)'],
                // ,'维生素K1(μg)','维生素B1(μg)','维生素B2(μg)','维生素B6(μg)','维生素B12(μg)','烟酸(μg)'
                // ,'叶酸(μg)','泛酸(μg)','维生素C(mg)','生物素(μg)'

                // ,'钠(mg)','钾(mg)','铜(μg)','镁(mg)','铁(mg)','锌(mg)','锰(μg)',
                // '钙(mg)','磷(mg)','碘(μg)','氯(mg)','硒(μg)'

                // '胆碱(mg)','肌醇(mg)','牛磺酸(mg)','左旋肉碱(mg)'
                // ,'二十二碳六烯酸(%总脂肪酸)','二十碳四烯酸(%总脂肪酸)','低聚半乳糖(g)','核苷酸(mg)'
            series: [{
                large: true,
                name: '皇家美素佳儿1段',
                data: [160,550,370,48,6.0,4.6,115,400,230,95,320,19.0
                
                ],
                type: 'bar'          },
            {
                large: true,
                name: '美素佳儿1段',
                data: [175,600,365,46,6.0,4.6,115,400,230,110,340,19.0
                
                ],
                type: 'bar'
            },
            {
                large: true,
                name: '皇家美素佳儿2段',
                data: [210,700,405,56,7.4,3.5,230,560,380,100,430,23
                
                ],
                type: 'bar'
            },
            {
                large: true,
                name: '飞鹤星飞帆',
                data: [131,360,350,32,5.0,4.5,40,350,200,70,280,15
                
                ],
                type: 'bar'
            }
            ]
        };
        return option;
    };


    render() {
        return (
            <div className="col-md-10">
                <h1 className="zlbt">奶粉营养成分表</h1>
                <h5 className="zlfbt">每100g含量</h5>
                <h1 className="zlh">
                    <ReactEcharts className="biaoge" theme="theme"  option={this.getOption()} style={{ height: 600 }} />
                    
                </h1>
                <div className="zljl">1、乳铁蛋白只有皇家美素佳儿(1段和2段)有. <br/> 
                2、飞鹤星飞帆部分营养成分明显偏少(主要是矿物质). <br/> 
                3、飞鹤星飞帆独有成分(每100含量是：1,3-二油酸2-棕榈酸甘油三酯(6.0g),叶黄素(80.0μg),酪蛋白磷酸肽(40.0mg)). <br/> 
                4、皇家2段不含α-亚麻酸,二十碳四烯酸偏低,其他含量基本上都高于其他三种奶粉. <br/> 
                5、美素佳儿1段除了不含乳铁蛋白,其他营养成分和皇家美素佳儿近乎一模一样.

                </div>
                
                <h1 className="zlbt2">矿物质</h1>
                <h5 className="zlfbt">每100g含量</h5>
                <h1 className="zlh2">
                    <ReactEcharts className="biaoge2" theme="theme"  option={this.getOption2()} style={{ height: 600 }} />
                    
                </h1>
            </div>


        )
    }
}

export default Zchart;

