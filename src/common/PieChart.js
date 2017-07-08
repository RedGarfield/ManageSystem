import React, { Component } from 'react';

//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/pie') //图表类型
require('echarts/lib/component/title') //标题插件

export class PieChart extends React.Component {
    constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
        this.initPie = this.initPie.bind(this)
    }
    initPie() {
        const { data } = this.props; //外部传入的data数据
        let myChart = echarts.init(this.refs.pieChart); //初始化echarts
        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data);
        //设置options
        myChart.setOption(options);
    }
    componentDidMount() {
        this.initPie();
    }
    componentDidUpdate() {
        this.initPie();
    }
    render() {
        return (
            <div ref="pieChart" style={{width: "100%", height: "200px"}}></div>
        )
    }
    //一个基本的echarts图表配置函数
    setPieOption(data) {
        return {
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }
}