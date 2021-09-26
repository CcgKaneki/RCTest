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
          }
            ,
            xAxis: {
                offset:0,
                axisLabel :{
                    color: '#fff',
                    interval:0
                },
                type: 'category',
                data: ['能量(kJ)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)', '蛋白质(g)', '脂肪(g)','亚油酸(g)']
            },
            yAxis: {
                
                textStyle: {
                    color: '#fff'
                },
                axisLabel :{
                    color: '#fff',
                    interval:0
                },

                type: 'value'
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

