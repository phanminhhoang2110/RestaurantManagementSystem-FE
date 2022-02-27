import React from "react";
import logo from "../../../assets/img/HuongKitchen.png";
import { Button} from "antd";
import CoreInput from '../../core-component/CoreInput.js'
import './Login.css'

class Login extends React.Component{

    onLoginClick = (event) => {
        
    }

    render(){
        return <div className="login-container">
            <img className="logo" src={logo}></img>
            <h1>Đăng nhập</h1>

            <CoreInput label='Tên đăng nhập'></CoreInput>
            <CoreInput label='Mật khẩu' password></CoreInput>

            <div className="login-btn">
                <Button type="primary" size="large" onClick={this.onLoginClick}>
                    Đăng nhập
                </Button>
            </div>
        </div>
    }
}

export default Login;