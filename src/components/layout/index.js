import React, { useEffect } from "react";
import './index.css'
import Tables from "../screens/table";
import NavContainer from "./nav-container";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

const LayoutComponent = () => {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('bearer_token');
        axios.post(
            window.API_HOST + '/api/auth/me',
            '',
            {headers: { Authorization: `Bearer ${token}` }}
        ).then((response)=> {
            if(response.data.status !== 200 || !response.data.data._id){
                history.push('/');
            }
        }).catch((error)=>{
            toast('Hệ thống gặp vấn đề vui lòng gọi hỗ trợ viên');
        })
    })

    return (
        <div>
            <div className="layout-component-navtop"></div>
            <div className="layout-component-container">
                <div className="layout-component-nav">
                    <NavContainer></NavContainer> 
                </div>
                <div className="layout-component-main">
                    <Tables></Tables>    
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default LayoutComponent;