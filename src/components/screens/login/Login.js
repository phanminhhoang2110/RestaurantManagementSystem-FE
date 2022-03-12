import React from "react";
import logo from "../../../assets/img/HuongKitchen.png";
import { Button} from "antd";
import CoreInput from '../../core-component/CoreInput.js'
import './Login.css'
import axios from "axios";
import {withRouter} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        const {history} = this.props;
        const token = localStorage.getItem('bearer_token');
        if(token){
            axios.post(
                window.API_HOST + '/api/auth/me',
                '',
                {headers: { Authorization: `Bearer ${token}` }}
            ).then((response)=> {
                if(response.data.status !== 200 || !response.data.data._id){
                    history.push('/');
                }else{
                    history.push('/dashboard')
                }
            }).catch((error)=>{
                toast('Hệ thống gặp vấn đề vui lòng gọi hỗ trợ viên');
                history.push('/');
            })
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

    onLoginClick = (history) => {
        const {username, password} = this.state;
        console.log(username)
        axios.post(window.API_HOST + '/api/auth/login?', {
            username: username,
            password: password
        }).then(function(response){
            console.log(response)
            if(response.data.status == 200){
                localStorage.setItem('bearer_token', response.data.access_token)
                history.push('/dashboard')
            }else{
                toast("Mật khẩu hoặc tài khoản chưa đúng!", {
                    type: 'warning'
                })
            }
        }).catch(function(error){
            history.push('/');
        });
    }


    render(){
        const {history} = this.props;
        return <div className="login-container">
            <img className="logo" src={logo}></img>
            <h1>Đăng nhập</h1>

            <CoreInput label='Tên đăng nhập' getValueOfInput={this.getValueOfInput} defaultValue='hoang' ></CoreInput>
            <CoreInput label='Mật khẩu' password getValueOfInput={this.getValueOfInputPassword} defaultValue='12345' ></CoreInput>

            <div className="login-btn">
                <Button type="primary" size="large" onClick={() => this.onLoginClick(history)}>
                    Đăng nhập
                </Button>
            </div>
            <ToastContainer/>
        </div>
    }
}

export default withRouter(Login);