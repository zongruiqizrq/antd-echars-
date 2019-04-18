import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
  render() {
    return (
      <div>
          <button onClick={()=>{
            //   axios.post('/api/login',{'zong','zong'})
          }}> 登录</button>
        
      </div>
    )
  }
}
