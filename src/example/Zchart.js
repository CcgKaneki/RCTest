import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';

class Zchart extends Component {
    getOption = () => {
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
        return option;
    };
    getOptionTwo = () => {
        let optionTwo = {
            title: {
                text: '药品各类别销量统计',
                subtext: '（单位：件/年）',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '销售量',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '颗粒剂' },
                        { value: 735, name: '丸剂' },
                        { value: 580, name: '散剂' },
                        { value: 484, name: '酊剂' },
                        { value: 300, name: '片剂' },
                        { value: 500, name: '胶囊剂' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return optionTwo;
    }

    render() {
        return (
            <div className="col-md-10">
                <h2>营业额统计</h2>
                <div className="col-md-6 ">
                    <ReactEcharts option={this.getOption()} />
                    <p>药品每月销售总额（单位：/万元）</p>
                </div>
                <div className="col-md-6 ">
                    <ReactEcharts option={this.getOptionTwo()} />
                </div>
            </div>
        )
    }
}

export default Zchart;

