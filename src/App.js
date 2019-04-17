import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import {Layout, Menu, Breadcrumb, LocaleProvider} from 'antd';
import './app.scss'
import SiteSider from './compontents/SiteSider'
import Header from './compontents/Header'
import history from './history'
import Pages from './pageSwitch'

const { Content, Footer, Sider,} = Layout;

const pages = Pages.map((p) => (
  <Route 
      exact={true}
      key={p.path}
      path={p.path}
      component={p.component}
  />
))

const LocalApp = () => (
  <Router history={history}>
      <Layout className='layout'>
          <SiteSider />
          <Content
            // className='content'
             
          >
              <Header style={{background:'white'}}/>
              <div className="container">
                  {pages}
              </div>
          </Content>
      </Layout>
  </Router>
)
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
            <LocalApp/>
        </LocaleProvider>
    );
  }
}

export default App;
