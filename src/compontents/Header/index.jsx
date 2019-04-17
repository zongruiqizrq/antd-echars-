import React, { Component } from 'react'
import { Avatar, Icon } from 'antd';

import './style.scss'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'Admin',
            breadcrumb: document.title === '财务分析系统' ? '首页' : `首页 > ${document.title}`,
        }
    }
    
    componentDidMount () {
        this.inter = setInterval(() => {
            const newBreadcrumb = document.title === '财务分析系统' ? '首页' : `首页 > ${document.title}`
            if (newBreadcrumb !== this.state.breadcrumb) {
                this.setState({
                    breadcrumb: newBreadcrumb,
                })
            }
        }, 100)
    }
    componentWillUnmount () {
        if (this.inter) {
            clearInterval(this.inter)
            this.inter = null
        }
    }
    render(){
        const {username, breadcrumb} = this.state
        return (
            <div>
                <header className='header_right'>
                    <div className='avatar'> 
                        <Avatar className='avatar_icon'>USER</Avatar>
                        <span className='text'>Hello, {username}</span> 
                        <Icon type="poweroff" className="poweroff" style={{fontSize:'20px'}}  / >
                        <span className='quit'>退出</span>
                    </div> 
                </header>
                <div className="nav_path">
                    <span>当前位置：</span>{breadcrumb}
                </div>
            </div>
            
        )
    }
}