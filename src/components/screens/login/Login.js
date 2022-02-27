import React from "react";
import logo from "../../../assets/img/HuongKitchen.png";
import { Input, Button } from "antd";
import './Login.css'

class Login extends React.Component{

    render(){
        return <div className="login">
            <img className="logo" src={logo}></img>
            <h1>Đăng nhập</h1>
            <div>
                <p>Tên đăng nhập</p>
                <Input></Input>
            </div>
            <div>
                <p>Mật khẩu</p>
                <Input></Input>
            </div>
            <Button type="primary">
                Đăng nhập
            </Button>
        </div>
    }
}

export default Login;