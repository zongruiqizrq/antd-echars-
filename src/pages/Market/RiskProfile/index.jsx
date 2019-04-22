import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import classname from 'classname'
import { Link } from 'react-router-dom';
import { Input, Card, Tabs, Select, Typography, Tooltip, Table, Icon } from 'antd';
import './style.scss'
import EchartsWrapper from '../../../compontents/EchartsWrapper'
import Icons from '../../../compontents/Icons'
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
        },
        rink: {
          compare: '财务状况好于67%的企业',
          date: ['2017第一季度', '2017中报', '2017第三季度', '2017年报'],
          name: '中信股份',
          data: [66, 52, 96, 34]
        },
        income: {
          compare: "业绩收益好于67%的企业",
          date: ["2017第一季度", "2017中报", "2017第三季度", "2017年报"],
          incomeData: [
            {
              name: "中信股份",
              data: [2.5, 1.8, -2.1, 1.5]
            },
            {
              name: "平均行业",
              data: [-0.6, 1.3, 2.5, 1.7]
            }
          ]
        },
        profit: {
          score: '77.9',
          data_source: [
            {
              key: "1",
              index: '流动比率',
              ranking: '22/165',
              status: 0
            },
            {
              key: "2",
              index: '现金比例',
              ranking: '42/165',
              status: 1
            },
            {
              key: "3",
              index: '已获利息倍率',
              ranking: '52/165',
              status: 0
            }
          ]
        },
        ability:{
          score: '30.9',
          data_source: [
            {
              key: "1",
              index: '流动比率',
              ranking: '22/165',
              status: 0
            },
            {
              key: "2",
              index: '现金比例',
              ranking: '42/165',
              status: 1
            },
            {
              key: "3",
              index: '已获利息倍率',
              ranking: '52/165',
              status: 0
            }
          ]
        },
        // 近期风险事件
        recent_risk_event:[
          {
            title:'内幕交易中信被证监会处罚3.12亿',
            date:'2019.03.12',
            score:30
          },
          {
            title:'内幕交易中信被证监会处罚3.12亿',
            date:'2019.03.12',
            score:0
          },
          {
            title:'内幕交易中信被证监会处罚3.12亿',
            date:'2019.03.12',
            score:90
          },
          {
            title:'内幕交易中信被证监会处罚3.12亿',
            date:'2019.03.12',
            score:30
          }
        ]
        
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
  // 总排名
  OverallRanking = (value) => {
    const option = {
      title: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {},
      grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        top: '40px',
        containLabel: true
      },
      // 下载的按钮
      // toolbox: {
      //     feature: {
      //         saveAsImage: {}
      //     }
      // },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: "#6B798E",
            fontSize: "12px"
          }
        },
        data: value.date
      },
      yAxis: {
        type: 'value',
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
          type: 'line',
          symbolSize: 8,   //折线点的大小
          label: { //线上的文字 是否显示
            normal: {
              show: true,
              position: 'top'
            }
          },
          // 折线颜色
          itemStyle: {
            normal: {
              // 线上数字的颜色
              color: '#53A0FD',
              lineStyle: {
                color: '#53A0FD',
                width: 3
              }
            },
          },
          data: value.data
        }
      ]
    };
    return option
  }

  // 业绩收益
  performanceGain = (value) => {
    const option = {
      legend: {},
      tooltip: {
        tigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#6B798E",
            fontSize: "12px"
          }
        },
        data: value.date,
      },
      yAxis: {
        type: "value",
        show: true,
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
      grid: {
        top: "45px",
        left: "0%",
        right: "0px",
        bottom: "3%",
        containLabel: true
      },

      series: [
        {
          name: '中信股份',
          type: 'bar',
          barWidth: "24",
          marginBottom: -20,
          textAlign: "left",
          itemStyle: {
            normal: {
              color: "#1890FF",
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 14
                }
              }
            }
          },
          data: value.incomeData[0].data
        },
        {
          name: '平均行业',
          type: 'bar',
          barWidth: "24",
          marginBottom: -20,
          textAlign: "left",
          itemStyle: {
            normal: {
              color: "#B53ECE",
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 14
                }
              }
            }
          },
          data: value.incomeData[1].data
        },

      ]
    }
    return option
  }
  // 判断评分的颜色
  getColor(value) {
    let color
    if (value > 0 && value <= 50) {
      color = 'red'
    } else if (value > 50 && value <= 70) {
      color = 'orange'
    } else if (value > 70 && value <= 100) {
      color = 'green'
    }
    return color
  }
  // 风险图标
  tipRisk = (value) => { 
    let str
    if (value>0 && value<=33) { 
      str = <Icons type='iconannoucement_risk_n' className='iconannoucement_risk_n'  />
    }else if (value>33 && value<=66) { 
      str = <Icons type='iconannoucement_risk_l' className='iconannoucement_risk_l' />
    }else if (value>66 && value<=100) { 
      str = <Icons type='iconannoucement_risk_h' className='iconannoucement_risk_h' />
    }
    return str
  }
  render() {
    const columns = [
      {
        title: '指标',
        dataIndex: 'index',
        key: 'index',
      }, {
        title: '行业排名',
        dataIndex: 'ranking',
        key: 'ranking',
      }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (record) => {
          switch (record) {
            case 0:
              return <span><Tooltip placement="topLeft" overlayClassName="tips-bg" title="1.利润结构不合理，经营性利润低，投资性利润高 2.利润同比大幅下滑">
              <Icon type="exclamation-circle" className='red' style={{fontSize:'20px'}}/>
            </Tooltip></span>
            case 1:
              return <span>
              <Tooltip placement="topLeft" overlayClassName="tips-bg" title="1.利润同比大幅上升">
                <Icon type="check-circle" className='green' style={{fontSize:'20px'}} />
              </Tooltip>
            </span>
          }
        }
      }
    ];
    const { company, financial_status, one_year, rink, income, profit, ability, recent_risk_event } = this.state.data
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
                            <Icons type={item.icon_name} className={item.icon_name} />
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
                            <Icons type={item.icon_name} className={item.icon_name} />
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
                            <Icons type={item.icon_name} className={item.icon_name} />
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
            <div className='overall-ranking'>
              <Card
                title='总排名'
                bordered={false}
                extra={<button className='btn'><Icons type='iconbtn_add' className='iconbtn_add' />增加对比</button>}
              >
                <div className='tip'> {rink.compare}</div>
                <EchartsWrapper
                  option={this.OverallRanking(rink)}
                  style={{ height: 360 }}
                />
              </Card>
            </div>
            <div className='performance-gain'>
              <Card
                title='业绩收益'
                bordered={false}
                // extra 为右上角的操作区域
                extra={<button className='btn'><Icons type='iconbtn_edit' className='iconbtn_edit' />更改行业</button>}
              >
                <div className='tip'> {income.compare}</div>
                <EchartsWrapper
                  option={this.performanceGain(income)}
                  style={{ height: 360 }}
                />
              </Card>
            </div>
          </div>
          <div className='content-top2'>
            <div className={classname('profitability ', 'card')}>
              <Card
                title='盈利能力'
                bordered={false}
                extra={
                  <span className='score'>
                    <Icons type="icongeneral_score" className="icongeneral_score" />
                    <span>评分：</span>
                    <span className={this.getColor(profit.score)} style={{
                      fontSize:'20px'
                    }}> {profit.score}</span>
                  </span>
                }
              >
                <Table dataSource={profit.data_source} columns={columns} pagination={false}></Table>
              </Card>
            </div>
            <div className={classname('ability', 'card')}>
            <Card
                title='偿债能力'
                bordered={false}
                extra={
                  <span className='score'>
                    <Icons type="icongeneral_score" className="icongeneral_score" />
                    <span>评分：</span>
                    <span className={this.getColor(ability.score)} style={{
                      fontSize:'20px'
                    }}>{ability.score}</span>
                  </span>
                }
              >
                <Table dataSource={ability.data_source} columns={columns} pagination={false}></Table>
              </Card>
            </div>
          </div>
        </div>
        <div className='content-top3'>
            <div className={classname('operation ', 'card')}>
              <Card
                title='盈利能力'
                bordered={false}
                extra={
                  <span className='score'>
                    <Icons type="icongeneral_score" className="icongeneral_score" />
                    <span>评分：</span>
                    <span className={this.getColor(profit.score)} style={{
                      fontSize:'20px'
                    }}> {profit.score}</span>
                  </span>
                }
              >
                <Table dataSource={profit.data_source} columns={columns} pagination={false}></Table>
              </Card>
            </div>
            <div className={classname('cash-quality', 'card')}>
            <Card
                title='现金质量'
                bordered={false}
                extra={
                  <span className='score'>
                    <Icons type="icongeneral_score" className="icongeneral_score" />
                    <span>评分：</span>
                    <span className={this.getColor(ability.score)} style={{
                      fontSize:'20px'
                    }}>{ability.score}</span>
                  </span>
                }
              >
                <Table dataSource={ability.data_source} columns={columns} pagination={false}></Table>
              </Card>
            </div>
          </div>
          <div className='content-top4'>
            <div className={classname('growth ', 'card')}>
              <Card
                title='盈利能力'
                bordered={false}
                extra={
                  <span className='score'>
                    <Icons type="icongeneral_score" className="icongeneral_score" />
                    <span>评分：</span>
                    <span className={this.getColor(profit.score)} style={{
                      fontSize:'20px'
                    }}> {profit.score}</span>
                  </span>
                }
              >
                <Table dataSource={profit.data_source} columns={columns} pagination={false}></Table>
              </Card>
            </div>
            <div className={classname('event', 'card')}>
            <Card
                title='近期风险事件'
                bordered={false}
                extra={
                  <span>查看更多</span>
                }
              >
               <ul className='ul-list'>
                {
                    recent_risk_event.map((item,index) => {
                      return <li key={index}><span>{this.tipRisk(item.score)}<a href="#">{item.title}</a></span><time>{item.date}</time></li>
                    })
                }
               </ul>
              </Card>
            </div>
          </div>
          <div className='corporate-earnings' ></div>
      </div>
    )
  }
}
export default RiskProfile
