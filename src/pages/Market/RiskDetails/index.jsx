import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Input, Card, Tabs, Typography, Tooltip, Table, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss'
import * as echarts from 'echarts';
import EchartsWrapper from '../../../compontents/EchartsWrapper'
const { Paragraph } = Typography;
const TabPane = Tabs.TabPane;
@observer
class RiskDetails extends Component {
  @observable company = {
    logo: '/images/zhongxin_logo_l.png',
    name: '深圳市金证科技股份有限公司',
    info: '公司简介，有点长， 当内容放不下的时候收盘每个点点点来表示 这样好看， 一般都这么处理，打个卡搭嘎速度高达地方的故事沙发电话阿大使馆矮冬瓜上个发放表新东方高度分公司特大V成功rag',
    code: '630128',
    plate: '金融',
    date: '41',
    count: '124',
  }
  @observable trends = {
    one_year: {
      yl: {
        name: "评分",
        date: ["2017第一季度", "2017中报", "2017第三季度", "2017年报"],
        data: [82, 32, 51, 94],
      },
      cz: {
        name: "评分",
        date: ["2017第一季度", "2017中报", "2017第三季度", "2017年报"],
        data: [32, 52, 11, 54],
      },
      ch: {
        name: "评分",
        date: ["2017第一季度", "2017中报", "2017第三季度", "2017年报"],
        data: [12, 62, 21, 74],
      },
      yy: {
        name: "评分",
        date: ["2017第一季度", "2017中报", "2017第三季度", "2017年报"],
        data: [82, 32, 71, 34],
      },
      xjl: {
        name: "评分",
        date: ["2017第一季度", "2017中报", "2017第三季度", "2017年报"],
        data: [12, 62, 51, 94],
      },
    },
    three_year: {
      yl: {
        name: "评分",
        date: ["2015", "2016", "2017"],
        data: [82, 32, 51],
      },
      cz: {
        name: "评分",
        date: ["2015", "2016", "2017"],
        data: [52, 11, 54],
      },
      ch: {
        name: "评分",
        date: ["2015", "2016", "2017"],
        data: [12, 62, 74],
      },
      yy: {
        name: "评分",
        date: ["2015", "2016", "2017"],
        data: [82, 71, 34],
      },
      xjl: {
        name: "评分",
        date: ["2015", "2016", "2017"],
        data: [12, 62, 94],
      },
    },
  }
  @observable ysnl = {
    title: "盈利能力分析",
    name: "盈利能力评分",
    score: 87.5,
    info: "该公司与去年第三季报相比，金证股份盈利能力有所增强，处于一年内得高位，其中，主营获利能力大幅增强，总资产收益能力大幅提升。该公司与去年第三季报相比，金证股份盈利能力有所增强，处于一年内得高位，其中，主营获利能力大幅增强，总资产收益能力大幅提升",
    resolve: [
      {
        idx: 30,
        title: '净利润收益率',
        status: 1
      },
      {
        idx: 70,
        title: '净利润收益率',
        status: 0
      },
      {
        idx: 30,
        title: '销售毛利率',
        status: 0
      },
      {
        idx: 90,
        title: '销售毛利率',
        status: 1
      },
      {
        idx: 30,
        title: '销售期间费用率',
        status: 0
      },
      {
        idx: 90,
        title: '销售期间费用率',
        status: 1
      },
    ],
  }
  trendsOption(value) {
    const option = {
      title: {
        text: value.name,
        textStyle: {
          fontSize: "14px",
          color: "#6B798E"
        },
        top: "10px",
        left: "2%"
      },
      grid: {
        top: "60px",
        left: "2%",
        right: "0",
        bottom: "30px",
        containLabel: true
      },
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#6B798E",
            fontSize: "12px"
          }
        },
        data: value.date
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#6B798E",
            fontSize: "12px"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#fff",
          }
        }

      },
      series: [{
        name: value.name,
        data: value.data,
        type: 'line',
        smooth: true,
        symbolSize: 8,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3
            }
          },
        },
      }],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      backgroundColor: new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          { offset: 0, color: 'rgba(26,197,150,0.2)' },
          { offset: 0.5, color: 'rgba(250,196,97,0.2)' },
          { offset: 1, color: 'rgba(247,49,28,.3)' }
        ]
      ),
    };
    return option
  }
  ylnlOption(value) {
    const option = {
      text: "评分",
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      grid: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        containLabel: true
      },
      series: [
        {
          name: '检测结果',
          type: 'gauge',
          detail: { formatter: '{value}' },
          data: [{ value: value.score, name: value.name }],
          splitLine: {           // 分隔线
            length: 10,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          axisLine: {
            lineStyle: {
              width: 10,
              color: [
                [0.3, new echarts.graphic.LinearGradient(1, 0, 1, 1, [
                  {
                    offset: 1,
                    color: "#E62129",// 0% 处的颜色
                  }
                ], false)],
                [0.7, new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "#FFAB2D" // 0% 处的颜色
                  }
                ], false)],
                [1, new echarts.graphic.LinearGradient(1, 0, 1, 1, [{
                  offset: 0,
                  color: "#2FC25B" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#2FC25B" // 100% 处的颜色
                }], false)]
              ]
            },
          }
        }
      ]
    };

    return option
  }
  render() {
    return (
      <div className='details-box'>
        <div className='top'>
          <div className='company'>
            <div className='logo'>
              <img src={this.company.logo} alt="logo" />
              <h4 className='name'>{this.company.name}</h4>
            </div>
            <div className='info'>
              <Paragraph ellipsis={{ rows: 2, expandable: true }}>
                {this.company.info}
              </Paragraph>
            </div>
            <div className='list'>
              <ul>
                <li>
                  <h4>{this.company.code}</h4>
                  <p>股票代码</p>
                </li>
                <li>
                  <h4>{this.company.plate}</h4>
                  <p>所属板块</p>
                </li>
                <li>
                  <h4>{this.company.date}</h4>
                  <p>财务总分</p>
                </li>
                <li>
                  <h4 className='red'>{this.company.count}</h4>
                  <p className='jump'>
                    <Link to="/market" >全年财务风险数量</Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className='down-load'>
              <button className='btn'>下载招股书</button>
            </div>
          </div>
          <div className='trends'>
            <Card title='财务风险变化趋势' bordered={false} >
              <Tabs defaultActiveKey="1">
                <TabPane tab='近一年' key="1">
                  <div className='tab_box_absolute'>
                    <Tabs type="card">
                      <TabPane tab="盈利能力" key="1">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.yl)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="成长能力" key="2">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.cz)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="偿债能力" key="3">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.ch)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="运营能力" key="4">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.yy)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="现金流" key="5">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.xjl)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                    </Tabs>
                  </div>
                </TabPane>
                <TabPane tab="近三年" key="2">
                  <div className='tab_box_absolute'>
                    <Tabs type="card">
                      <TabPane tab="盈利能力" key="1">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.three_year.yl)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="成长能力" key="2">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.three_year.cz)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="偿债能力" key="3">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.three_year.ch)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="运营能力" key="4">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.three_year.yy)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="现金流" key="5">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.three_year.xjl)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                    </Tabs>
                  </div>
                </TabPane>
                <TabPane tab="近五年" key="3">
                  <div className='tab_box_absolute'>
                    <Tabs type="card">
                      <TabPane tab="盈利能力" key="1">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.yl)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="成长能力" key="2">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.cz)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="偿债能力" key="3">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.ch)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="运营能力" key="4">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.yy)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                      <TabPane tab="现金流" key="5">
                        <EchartsWrapper
                          option={this.trendsOption(this.trends.one_year.xjl)}
                          style={{ height: 360 }}
                        ></EchartsWrapper>
                      </TabPane>
                    </Tabs>
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </div>
        <div className='content'>
          <Card title='盈利能力' bordered={false}>
            <div className='profitability-box'>
              <div className='left'>
                <div className='tu'>
                  <EchartsWrapper
                    option={this.ylnlOption(this.ysnl)}
                    style={{ height: 300 }}
                  />
                </div>

                <div className='title'>
                  <h3>{this.ysnl.title}</h3>
                  <Paragraph className="info" ellipsis={{ rows: 5, expandable: false }}>{this.ysnl.info}</Paragraph>
                </div>
              </div>
              <div className='right'>
                <div className='title'>
                  <Card title='风险指标解析' bordered={false} extra={<a href='#'>更换指标</a>}></Card>
                </div>
                <ul className='list'>
                  {
                    this.ysnl.resolve.map((item, index) => {
                      return <li key={index} className='item'>{item.title}</li>
                    })
                  }
                </ul>
              </div>
            </div>

          </Card>
        </div>
      </div>
    )
  }
}
export default RiskDetails