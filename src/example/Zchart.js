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
                data: ['能量(kJ)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)'],
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
            series: [{
                large: true,
                name: '皇家美素佳儿1段',
                data: [120, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222],
                type: 'bar'          },
            {
                large: true,
                name: '美素佳儿1段',
                data: [120, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222],
                type: 'bar'
            },
            {
                large: true,
                name: '皇家美素佳儿2段',
                data: [120, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222],
                type: 'bar'
            },
            {
                large: true,
                name: '飞鹤星飞帆',
                data: [1200, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222, 200, 150,222],
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
                
            </div>
        )
    }
}

export default Zchart;

