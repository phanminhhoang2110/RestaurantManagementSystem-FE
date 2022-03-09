import React from "react";
import logo from "../../../assets/img/HuongKitchen.png";
import { Button} from "antd";
import CoreInput from '../../core-component/CoreInput.js'
import './Login.css'
import axios from "axios";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    getValueOfInput = (value) => {
        this.setState({
            username: value
        })
    }

    getValueOfInputPassword = (value) => {
        this.setState({
            password: value
        })
    }

    onLoginClick = (event) => {
        const {username, password} = this.state;
        axios.post(window.API_HOST + 'api/auth/login?', {
            username: username,
            password: password
        }).then(function(response){
            console.log(response)
           localStorage.setItem('bearer_token', response.data.access_token)
        }).catch(function(error){
            console.log(error);
        });
    }


    render(){
        return <div className="login-container">
            <img className="logo" src={logo}></img>
            <h1>Đăng nhập</h1>

            <CoreInput label='Tên đăng nhập' getValueOfInput={this.getValueOfInput}></CoreInput>
            <CoreInput label='Mật khẩu' password getValueOfInput={this.getValueOfInputPassword}></CoreInput>

            <div className="login-btn">
                <Button type="primary" size="large" onClick={this.onLoginClick}>
                    Đăng nhập
                </Button>
            </div>
        </div>
    }
}

export default Login;