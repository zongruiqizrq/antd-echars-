import React, { Component } from 'react'
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import classname from 'classname'
import { Input,Icon,Card, Tabs, Select  } from 'antd';
import './style.scss'

import EchartsWrapper from '../../compontents/EchartsWrapper'

const Search = Input.Search;
const TabPane = Tabs.TabPane;
const Option = Select.Option;
function handleChange(value) {
  console.log(`selected ${value}`);
}

@observer
 class Market extends Component {
  //  header上边搜索的内容
  @observable search_text = ""
   constructor(props){
     super(props)
     this.state={
      //  公告数量
       count:[
         {type:'smile',title:'今日财务风险事件',num:'60'},
         {type:'smile',title:'今日风险企业数',num:'50'},
         {type:'smile',title:'今日风险企业数',num:'20'}
       ],
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
      risk_list:[
        {id:1,icon:'home',title:'房地产',num:23},
        {id:2,icon:'home',title:'金融',num:45},
        {id:3,icon:'home',title:'餐饮',num:66},
        {id:4,icon:'home',title:'环保',num:75},
        {id:5,icon:'home',title:'科技',num:90},
      ],
      fchange_list:[
        {id:1,icon:'home',title:'房地产',num:23},
        {id:2,icon:'home',title:'金融',num:45},
        {id:3,icon:'home',title:'餐饮',num:66},
        {id:4,icon:'home',title:'环保',num:75},
        {id:5,icon:'home',title:'科技',num:90},
      ]
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
    const {count, option, one_year,three_year, five_year, risk_list, fchange_list} = this.state
    return (
      <div className='market'>
        <div className='search'>
          <Search
            placeholder="请输入公司名字，代码或简称"
            enterButton="搜索"
            size="large"
            onSearch={value =>{
              this.search_text=value
              console.log( this.search_text)
            }}
          />
        </div>
        <div className='content'>
          <div className='left'>
            <div className='count'>
              {count.map((item,index)=>(
                // theme 是显示双色图标
                <div className='item' key={index}>
                  <Icon type={item.type} theme="twoTone" className='icon' />
                  <div>
                    <span className='title'>{item.title}</span>
                    <span className='num'>{item.num}</span>
                  </div>
                </div>
              ))}
          </div>
          <Card
              className="history-box"
              title="历史走势"
              bordered={false}
            >
              <Tabs defaultActiveKey="1" >
                <TabPane tab="近 1 年" key="1">
                  <Select defaultValue="所有" style={{ width: 120 }} onChange={handleChange}>
                    {
                      option.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
                    }
                  </Select> 
                  <EchartsWrapper option={this.getOption(one_year)} style={{height:450}} /> 
                </TabPane>

                <TabPane tab="近 3 年" key="2">
                   <Select defaultValue="所有" style={{ width: 120 }} onChange={handleChange}>
                    {
                      option.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
                    }
                  </Select>
                  <EchartsWrapper option={this.getOption(three_year)} style={{height:450}} /> 
                </TabPane>

                <TabPane tab="近 5 年" key="3">
                   <Select defaultValue="所有" style={{ width: 120 }} onChange={handleChange}>
                    {
                      option.map((item, idx) => <Option key={idx} value={item}>{item}</Option>)
                    }
                  </Select>
                   <EchartsWrapper option={this.getOption(five_year)} style={{height:450}} /> 
                </TabPane>
              </Tabs>
            </Card>    
        </div>
        <div className='right'>
          <div className='risk-list'>
            <div className='title'>本报告期行业风险榜</div>
            <ul className='list'>
            {
              risk_list.map((item,index) => {
                return <li key={index} className='item'>
                  <span className='id'>{item.id}.</span>
                  <Icon type={item.icon} className='icon' />
                  <span className='title'>{item.title}</span>
                  <span className='num'>{item.num}</span>
                </li>
              })
            }
            </ul>
          </div>
          <div className={classname('fchange-list','risk-list')}>
            <div className='title'>本报告期财务移动榜</div>
            <ul className='list'>
                {fchange_list.map((item,index) => {
                   return <li key={index} className='item'>
                   <span className='id'>{item.id}.</span>
                   <Icon type={item.icon} className='icon' />
                   <span className='title'>{item.title}</span>
                   <span className='num'>
                    <Icon type="arrow-up" style={{marginRight:'10px'}} />
                    {item.num}%
                   </span>
                 </li>
                })}
            </ul>
          </div>
        </div>
        
    </div>
        
       
      </div>
    )
  }
}
export default Market
