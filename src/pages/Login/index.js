
import * as React from 'react'
import { Form, Button, Input, Row, Col, message } from 'antd'
import history from '../../history'
import { loginSuccess } from '../../utils/user'
import { hot } from 'react-hot-loader'
import Loading from '../../compontents/Loading'
import axios from 'axios'

import './style.scss'

const logo = '/images/logo.png'
/**
 * 登录页面
 */

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false,
        }
      }
  
  async login() {
        this.setState({ loading: true })
        const { username, password } = this.state
        const ret = await axios.get(`/api/login?username=${username}&password=${password}`)
        if (ret.data.success) {
            message.success('Login success')
            loginSuccess(username)
            console.log(this.props.match.params.lastPage)
            if (this.props.match.params.lastPage) {
                setTimeout(() => {
                    history.push(decodeURIComponent(
                        this.props.match.params.lastPage,
                    ))
                }, 100)
            } else {
                setTimeout(() => history.push('/'), 100)
            }
        } else {
            message.error(ret.message || 'Unknown error, login failed')
            this.setState({ loading: false })
        }
    }

     render() {
        const { username, password,  loading} = this.state

        const loginWindow = (
            <div className='part' >
                <Loading loading={loading} />
                <Form
                    layout='vertical'
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.login()
                    }}
                >
                    <h1 className='h1'>
                         Welcome to
                         <span  className = 'title' >SELF</span>
                    </h1>
                    <div  className='form' >
                        <h2 className='h2'>
                            We make it easy for everyone to view public opinion analysis
                        </h2>
                        <div className='border'/>
                    </div>
                    <h3 className='name'>
                        Name
                    </h3>
                    <div>
                        <Input
                            className='login-input'
                            autoFocus={true}
                            value={username}
                            onChange={(e) => this.setState({username: e.target.value})}
                            placeholder=''
                        />
                    </div>
                    <h3 className='password'>
                        Password
                    </h3>
                    <div>
                        <Input
                            className='login-input'
                            type='password'
                            value={password}
                            onChange={(e) => this.setState({password: e.target.value})}
                            placeholder=''
                        />
                    </div>
                    <div
                        style={{
                            marginTop: '50px',
                        }}
                    >
                        <Button className='sub-btn' htmlType='submit'>
                            Login
                        </Button>
                    </div>

                </Form>
            </div>
        )

        return (
            <Row className='page-login'>
                <Col xs={{span: 0 }} md={{span: 12}}
                >
                    <div className='bg' >
                        <div className='title'>
                            <h1 className='h1'>
                                Public opinion analysis
                            </h1>
                            <h2 className='h2'>
                                <span>HOME</span>
                                <span style={{marginLeft: '20px'}}>TREND</span>
                                <span style={{marginLeft: '20px'}}>FUNNEL</span>
                            </h2>
                            <img src={logo} alt='img' className='logo'/>
                        </div>
                    </div>
                </Col>
                <Col xs={{span: 24}} md={{span: 12}}>
                    <div className='right-part' >
                        {loginWindow}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default hot(module)(Login)
