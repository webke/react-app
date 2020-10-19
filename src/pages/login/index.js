import React, { Component } from 'react'
import Header from '../../components/header'
// import Time from '../../components/time'
import './login.less'
// import { Button } from 'antd';
import 'antd/dist/antd.css';



class Login extends Component {
    render() {
        return (
            <div className="P-login">
                <Header param1="abc"></Header>
            </div>
        )
    }
    gotoHome(){
       this.props.history.push('./home')
    }
}

export default Login


          /* <Time ></Time>
                <h1>Login page</h1>
                <button onClick={this.gotoHome.bind(this)}>跳转home页面</button>
                <Button type="primary">Button</Button> */