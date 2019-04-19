import * as React from 'react';
import { checkLogin } from './utils/user'



class AsyncComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            c: null,
        }
    }

   componentDidUpdate() {
        const {title} = this.props
        if (title) {
            document.title = title
        } else {
            document.title = '财务分析系统'
        }
    }

 componentDidMount() {
    if (this.props.needLogin) {
        if (checkLogin()) {
            this.props.require(this)
        }
    } else {
        this.props.require(this)
    }
    } 

     render() {
       if (this.state.c) {
           const Component = this.state.c
           const otherProps = this.props.otherProps
           return (
               <Component {...otherProps} />
           )
       }
       return (
           <div>
               Loading
           </div>
       )
    }
}

const b = (requireFunc, title, needLogin=false) => {
    const b = (props) => {
        return (
            <AsyncComponent title={title} otherProps={props} require={requireFunc} needLogin={needLogin} />
        ) 
    }
    return b
}

const l = (s) => {
    const load = (m) => {
        s.setState({c: m.default})
    }
    return load
}

const Pages = [
    // {
    //     path: '/',
    //     component: b((s: any) => import('./pages/Home').then(l(s)), '财务分析系统', true),
    // },
    {
        path: '/',
        component: b((s) => import('./pages/Home').then(l(s)), '大盘财务行情', true),
    },
    {
        path: '/market',
        component: b((s) => import('./pages/Market').then(l(s)), '大盘财务行情', true),
    },
    {
        path: '/knowledge',
        component: b((s) => import('./pages/Knowledge').then(l(s)), '知识图谱', true),
    },
    {
        path: '/enterprise',
        component: b((s) => import('./pages/Enterprise').then(l(s)), '企业监控', true),
    },
    {
        path: '/market/riskProfile',
        component: b((s) => import('./pages/Market/RiskProfile').then(l(s)), '财务风险概况', true),
    },
    {
        path: '/market/riskDetails',
        component: b((s) => import('./pages/Market/RiskDetails').then(l(s)), '风险详情', true),
    },
    {
        path: '/login/:lastPage',
        component: b((s) => import('./pages/Login').then(l(s)), 'Login'),
    },

    {
        path: '/login',
        component: b((s) => import('./pages/Login').then(l(s)), 'Login'),
    },

]

export default Pages
