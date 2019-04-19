import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Layout, Menu } from 'antd'
import Icon from '../Icons/index'

import './style.scss'
const logo = '/images/logo.png'
const {Sider} = Layout
const { Item } = Menu
export default class SiteSider extends Component {
    constructor(props){
      super(props)
      this.state={
        active:'',
        mouseCover: true,
      }
    }
    componentDidMount() {
      this.inter = setInterval(() => {
         let active = ''
          if (document.location.pathname === '/') {
              active = 'home'
          }
          if (document.location.pathname === '/market') {
              active = 'market'
          }
          if (document.location.pathname === '/knowledge') {
              active = 'knowledge'
          }
          if (document.location.pathname === '/enterprise') {
              active = 'enterprise'
          }
          if (document.location.pathname === '/market/riskProfile') {
              active = 'riskProfile'
          }
          if (document.location.pathname === '/market/riskDetails') {
              active = 'riskDetails'
          }
          if (active !== this.state.active) {
              this.setState({ active })
          }

         
      }, 10)
  }

  componentWillUnmount() {
      clearInterval(this.inter)
  }
  render() {
    const { active, mouseCover} = this.state
    return (
      <Sider  width={mouseCover ? 180 : 50} className='page'>
        <div className="logo">
          <img src={logo} alt="logo" className='logo_img'/>
        </div>
        <Menu 
        theme="dark"
        mode="inline"
        selectable={false}
        className='menu'
        >
          <Item key="home" className={ active === 'home' ? "active" : 'item'}>
            <Link to='/'>
              <Icon type="iconmenu_home"  className="iconmenu_home"/>
              <span className="nav-text">首页</span>
            </Link>
          </Item>
          <Item key="market" className={ active === 'market' ? "active" : 'item'}>
            <Link to='/market'>
              <Icon type="iconmenu_finance" className="iconmenu_finance" />
              <span className="nav-text">大盘财务行情</span>
            </Link>
          </Item>
          <Item key="riskProfile" className={ active === 'riskProfile' ? "active" : 'item'}>
            <Link to='/market/riskProfile'>
              <Icon type="video-camera" />
              <span className="nav-text">财务风险概况</span>
            </Link>
          </Item>
          <Item key="riskDetails" className={ active === 'riskDetails' ? "active" : 'item'}>
          <Link to='/market/riskDetails'>
            <Icon type="upload" />
            <span className="nav-text">风险详情</span>
            </Link>
          </Item>
          <Item key="knowledge" className={ active === 'knowledge' ? "active" : 'item'}>
          <Link to='/knowledge'>
            <Icon  type="iconmenu_map" className="iconmenu_map" />
            <span className="nav-text">知识图谱</span>
            </Link>
          </Item>
          <Item key="enterprise" className={ active === 'enterprise' ? "active" : 'item'}>
          <Link to='/enterprise'>
            <Icon type="iconmenu_monitor" className="iconmenu_monitor" />
            <span className="nav-text">企业监控</span>
            </Link>
          </Item>
        </Menu>
      </Sider>
    )
  }
}
