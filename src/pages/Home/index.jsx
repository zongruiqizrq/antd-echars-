import React, { Component } from 'react'
import classname from 'classname'
import {observer,inject} from 'mobx-react'
import {observable} from 'mobx'

import './style.scss'
import { Select } from 'antd'

import EchartsWrapper from '../../compontents/EchartsWrapper'
const Option = Select.Option
@observer
 class Home extends Component {
  @observable tab1 = true
  @observable tab2 = false
  @observable tab3 = false
  @observable box1 = true
  @observable box2 = false
  @observable box3 = false
  constructor(props){
    super(props)
    this.state={
      option:["所有","金融","地产","科技","农林牧渔"],
      one_year:{
        text: '指标：风险企业数',
        date: ['2017-01-01 至 2017-03-31', '2017-04-01 至 2017-06-30', '2017-07-01 至 2017-09-30', '2017-10-01 至 2017-12-31'],
        name: "风险",
        data: [20, 52, 76, 84],
       },
       three_year : {
        text: '指标：风险企业数',
        date: ['2016', '2017', '2018'],
        name: "风险",
        data: [50, 152, 76],
      },
      five_year : {
        text: '指标：风险企业数',
        date: ['2014','2015', '2016', '2017', '2018'],
        name: "风险",
        data: [120, 252, 176, 184,69],
      },
    }
  }
  getOption = (value) => {
    const option = {
      title: {
        text: value.text,
        textStyle: {
          fontSize: "14px",
          color: '#6B798E',
        },
        top:'20px'
      },
      // 鼠标hover的提示
      tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
      },
      // 整体格子的样式
      grid: {
        top:'80px',
        left: '0%',
        right: '0',
        bottom: '3%',
        containLabel: true
      },
      // x 轴数据
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: "#6B798E",
            fontSize:"12px",
          },
        },
        data: value.date,
      },
      // y 轴数据
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: "#6B798E",
            fontSize:"12px",
          },
        },
        splitLine: {
          show: true,
          lineStyle:{
              type:'dashed'
          }
        }
      },
      // 点上边的字 series 系列的意思
        series: [{
          name:value.name,
          type: 'line',
          lineStyle: { //线的样式
            color: "#3D659A",
            width: "4",
          },
          itemStyle: { //折线拐点处的样式
            borderWidth: "4",
            borderColor: "#3D659A",
            shadowColor: '#F1F2FC',
          },
          data: value.data,
      }]
    };
    return option
  }
  render() {
    const { option, one_year,three_year, five_year} = this.state
    return (
      <div className='home'>
        <div className='top'>
          <span className='title'>非组件选项卡（div）</span>
          <ul className='tabs'>
            <li className={classname('item',this.tab1 ? 'cur' : '')} onClick={()=>{
              this.tab1=true
              this.tab2=false
              this.tab3=false
              this.box1=true
              this.box2=false
              this.box3=false
            }}>近一年</li>
            <li className={classname('item', this.tab2 ? 'cur' : '')} onClick={()=>{
              this.tab1=false
              this.tab2=true
              this.tab3=false
              this.box1=false
              this.box2=true
              this.box3=false
            }}>近三年</li>
            <li className={classname('item', this.tab3 ? 'cur' : '')} onClick={()=>{
              this.tab1=false
              this.tab2=false
              this.tab3=true
              this.box1=false
              this.box2=false
              this.box3=true
            }}>近五年</li>
          </ul> 
        </div>
        <div className='content'>
          <div className={classname('box',this.box1 ? 'cur' : '')}>
            <Select defaultValue="所有" style={{ width: 120 }} className='select'>
              {
                option.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
              }
            </Select>
            <EchartsWrapper option={this.getOption(one_year)} style={{height:450}} /> 
          </div>
          <div className={classname('box',this.box2 ? 'cur' : '')}>
          <Select defaultValue="所有" style={{ width: 120 }} className='select'>
              {
                option.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
              }
            </Select>
            <EchartsWrapper option={this.getOption(three_year)} style={{height:450}} /> 
          </div>
          <div className={classname('box',this.box3 ? 'cur' : '')}> 
          <Select defaultValue="所有" style={{ width: 120 }} className='select'>
              {
                option.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
              }
          </Select>
          <EchartsWrapper option={this.getOption(five_year)} style={{height:450}} /> 
          </div>
        </div>
      </div>
    )
  }
}
export default Home
