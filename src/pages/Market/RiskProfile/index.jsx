import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import classname from 'classname'
import { Link } from 'react-router-dom';
import { Input, Card, Tabs, Select, Typography } from 'antd';
import './style.scss'
import EchartsWrapper from '../../../compontents/EchartsWrapper'
import Icon from '../../../compontents/Icons'
const Search = Input.Search;
const { Paragraph } = Typography;
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
@observer
class RiskProfile extends Component {
  //  header上边搜索的内容
  @observable search_text = ""
  constructor(props) {
    super(props)
    this.state = {
      data: {
        company: {
          logo: '/images/zhongxin_logo_l.png',
          name: '中信股份',
          info: '公司简介，有点长， 当内容放不下的时候收盘每个点点点来表示 这样好看， 一般都这么处理，打个卡搭嘎速度高达地方的故事沙发电话阿大使馆矮冬瓜上个发放表新东方高度分公司特大V成功rag',
          code: '630011',
          plate: '金融',
          date: '2000.01.01',
          count: '124',
        },
        one_year: {
          text: "指标：风险数",
          date: [
            "2017-01-01 至 2017-03-31",
            "2017-04-01 至 2017-06-30",
            "2017-07-01 至 2017-09-30",
            "2017-10-01 至 2017-12-31"
          ],
          name: "风险",
          data: [86, 52, 76, 34]
        },
        financial_status: {
          one_year: {
            name: '中信股份',
            data: [63, 70, 68, 75, 60],
            diag: "经分析，该企业存在如下问题，综合评定结果为无风险文字内容文字内",
            grade: 30,
            ability_list: [
              {
                title: "盈利能力",
                value: 78,
                icon_name: "icongeneral_score_profit"
              },
              {
                title: "现金流",
                value: 65,
                icon_name: "icongeneral_score_cash"
              },
              {
                title: "成长能力",
                value: 34,
                icon_name: "icongeneral_score_grow"
              },
              {
                title: "偿债能力",
                value: 45,
                icon_name: "icongeneral_score_debt"
              },
              {
                title: "运营能力",
                value: 98,
                icon_name: "icongeneral_score_operate"
              },
            ]
          },
          three_year: {
            name: '中信股份',
            data: [53, 40, 38, 55, 70],
            diag: "经分析，该企业存在如下问题，综合评定结果为无风险文字内容文字内",
            grade: 70,
            ability_list: [
              {
                title: "盈利能力",
                value: 78,
                icon_name: "icongeneral_score_profit"
              },
              {
                title: "现金流",
                value: 65,
                icon_name: "icongeneral_score_cash"
              },
              {
                title: "成长能力",
                value: 34,
                icon_name: "icongeneral_score_grow"
              },
              {
                title: "偿债能力",
                value: 45,
                icon_name: "icongeneral_score_debt"
              },
              {
                title: "运营能力",
                value: 98,
                icon_name: "icongeneral_score_operate"
              },
            ]
          },
          five_year: {
            name: '中信股份',
            data: [58, 65, 54, 35, 78],
            diag: "经分析，该企业存在如下问题，综合评定结果为无风险文字内容文字内",
            grade: 80,
            ability_list: [
              {
                title: "盈利能力",
                value: 58,
                icon_name: "icongeneral_score_profit"
              },
              {
                title: "现金流",
                value: 65,
                icon_name: "icongeneral_score_cash"
              },
              {
                title: "成长能力",
                value: 54,
                icon_name: "icongeneral_score_grow"
              },
              {
                title: "偿债能力",
                value: 35,
                icon_name: "icongeneral_score_debt"
              },
              {
                title: "运营能力",
                value: 78,
                icon_name: "icongeneral_score_operate"
              },
            ]
          },
        }
      }
    }
  }
  // 财务整体概况数据
  FinancialOption = (value) => {
    const option = {
      title: {
        text: ''
      },
      tooltip: {},
      legend: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#3A3B46',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '盈利能力', max: 80 },
          { name: '偿还能力 ', max: 80 },
          { name: '现金流', max: 80 },
          { name: '运营能力', max: 80 },
          { name: '成长能力', max: 80 }
        ]
      },
      series: [{
        name: '',
        type: 'radar',
        areaStyle: {
          normal: {
            opacity: 0.4
          }
        },
        data: [
          {
            value: value.data,
            name: '中信股份',
            itemStyle: {
              normal: {
                color: "#1890FF",
              }
            },
            label: {
              normal: {
                show: true,
                formatter: 50,
              }
            }
          },
          {
            value: [50, 34, 50, 31, 42],
            name: '行业平均',
            itemStyle: {
              normal: {
                color: "#B53ECE",
              }
            },
            label: {
              normal: {
                show: true,
                formatter: 50,

              }
            }
          }
        ]
      }]
    }
    return option
  }

  // 近期风险走势
  riskTrend = (value) => {
    const option = {
      title: {
        text: value.text,
        textStyle: {
          fontSize: "14px",
          color: "#6B798E"
        },
        top: "20px"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      grid: {
        top: "80px",
        left: "0%",
        right: "0",
        bottom: "3%",
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
            type: "dashed"
          }
        }
      },
      series: [
        {
          name: value.name,
          type: "line",
          symbolSize: 8,   //折线点的大小
          lineStyle: {
            //线的样式
            color: "#53A0FD",
            // width: "3"
          },
          // 折线颜色
          itemStyle: {
            normal: {
              color: '#53A0FD',
              lineStyle: {
                color: '#53A0FD',
                width: 3
              }
            },
            borderWidth: "4",
            borderColor: "#2075F7",
          },
          label: {
            //折线上的文字
            normal: {
              show: true,
              position: "top"
            }
          },
          data: value.data
        },
        {
          name: "",
          type: "bar",
          barWidth: "40",
          itemStyle: {
            //柱状图的样式
            color: "#BEC8D3"
          },
          data: value.data
        }
      ]
    };
    return option;
  }
  render() {
    const { company, financial_status, one_year } = this.state.data
    return (
      <div className='risk-box'>

        <div className='search'>
          <Search
            placeholder="请输入公司名字，代码或简称"
            enterButton="搜索"
            size="large"
            onSearch={value => {
              this.search_text = value
              console.log(this.search_text)
            }}
          />
        </div>
        <div className='content'>
          <div className='content-top'>
            <div className='company'>
              <div className='logo'>
                <img src={company.logo} alt="logo" />
                <h4 className='name'>{company.name}</h4>
              </div>
              <div className='info'>
                <Paragraph ellipsis={{ rows: 2, expandable: true }}>
                  {company.info}
                </Paragraph>
              </div>
              <div className='list'>
                <ul>
                  <li>
                    <h4>{company.code}</h4>
                    <p>股票代码</p>
                  </li>
                  <li>
                    <h4>{company.plate}</h4>
                    <p>所属板块</p>
                  </li>
                  <li>
                    <h4>{company.date}</h4>
                    <p>上市日期</p>
                  </li>
                  <li>
                    <h4 className='red'>{company.count}</h4>
                    <p className='jump'>
                      <Link to="/market" >全年财务风险数量</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='finance'>
              <Card title='财务整体状况' bordered={false} className='financial-status' >
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="近一年" key="1">
                    <div className='left'>
                      <EchartsWrapper
                        option={this.FinancialOption(financial_status.one_year)}
                        style={{ height: 360 }}
                      />
                    </div>
                    <div className='right'>
                      <div className='content'>
                        <div className='item'>
                          <span>财务风险等级:</span>
                          <span className="em-list">
                            <em>{financial_status.one_year.grade <= 35 ? <i>无风险</i> : null}</em>
                            <em>{financial_status.one_year.grade > 35 && financial_status.one_year.grade <= 70 ? <i>低风险</i> : null}</em>
                            <em>{financial_status.one_year.grade > 70 ? <i>高风险</i> : null}</em>
                          </span>
                        </div>
                        <div className='item'>
                          <span>风险诊断：</span>
                          <span>{financial_status.one_year.diag}</span>
                        </div>
                        <div className='item'>
                          <span>财务综合评分：</span>
                          <span>{80}</span>
                        </div>
                      </div>
                      <ul className='icon-list'>
                        {financial_status.one_year.ability_list.map((item, index) => (
                          <li key={index} className='item'>
                            <Icon type={item.icon_name} className={item.icon_name} />
                            <span className='title'>{item.title}</span>
                            <span className='value'>{item.value}</span>
                          </li>
                        ))}
                      </ul>
                      <div className='foot'>
                        <a className='more'>查看详情</a>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="近三年" key="2">
                    <div className='left'>
                      <EchartsWrapper
                        option={this.FinancialOption(financial_status.three_year)}
                        style={{ height: 360 }}
                      />
                    </div>
                    <div className='right'>
                      <div className='content'>
                        <div className='item'>
                          <span>财务风险等级:</span>
                          <span className="em-list">
                            <em>{financial_status.three_year.grade <= 35 ? <i>无风险</i> : null}</em>
                            <em>{financial_status.three_year.grade > 35 && financial_status.three_year.grade <= 70 ? <i>低风险</i> : null}</em>
                            <em>{financial_status.three_year.grade > 70 ? <i>高风险</i> : null}</em>
                          </span>
                        </div>
                        <div className='item'>
                          <span>风险诊断：</span>
                          <span>{financial_status.three_year.diag}</span>
                        </div>
                        <div className='item'>
                          <span>财务综合评分：</span>
                          <span>{80}</span>
                        </div>
                      </div>
                      <ul className='icon-list'>
                        {financial_status.three_year.ability_list.map((item, index) => (
                          <li key={index} className='item'>
                            <Icon type={item.icon_name} className={item.icon_name} />
                            <span className='title'>{item.title}</span>
                            <span className='value'>{item.value}</span>
                          </li>
                        ))}
                      </ul>
                      <div className='foot'>
                        <a className='more'>查看详情</a>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="近五年" key="3">
                    <div className='left'>
                      <EchartsWrapper
                        option={this.FinancialOption(financial_status.five_year)}
                        style={{ height: 360 }}
                      />
                    </div>
                    <div className='right'>
                      <div className='content'>
                        <div className='item'>
                          <span>财务风险等级:</span>
                          <span className="em-list">
                            <em>{financial_status.five_year.grade <= 35 ? <i>无风险</i> : null}</em>
                            <em>{financial_status.five_year.grade > 35 && financial_status.five_year.grade <= 70 ? <i>低风险</i> : null}</em>
                            <em>{financial_status.five_year.grade > 70 ? <i>高风险</i> : null}</em>
                          </span>
                        </div>
                        <div className='item'>
                          <span>风险诊断：</span>
                          <span>{financial_status.five_year.diag}</span>
                        </div>
                        <div className='item'>
                          <span>财务综合评分：</span>
                          <span>{80}</span>
                        </div>
                      </div>
                      <ul className='icon-list'>
                        {financial_status.five_year.ability_list.map((item, index) => (
                          <li key={index} className='item'>
                            <Icon type={item.icon_name} className={item.icon_name} />
                            <span className='title'>{item.title}</span>
                            <span className='value'>{item.value}</span>
                          </li>
                        ))}
                      </ul>
                      <div className='foot'>
                        <a className='more'>查看详情</a>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </Card>
            </div>
          </div>
          <div className='risk-trend'>
            <Card title='近期风险走势' bordered={false}>
              <EchartsWrapper
                option={this.riskTrend(one_year)}
                style={{ height: 330 }}
              />
            </Card>
          </div>
          <div className='content-top1'>
            <div className='overall-ranking'></div>
            <div className='performance-gain'></div>              
          </div>
        </div>

      </div>
    )
  }
}
export default RiskProfile
