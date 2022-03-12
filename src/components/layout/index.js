import React, { useEffect } from "react";
import './index.css'
import Tables from "../screens/table";
import Food from "../screens/food/index";
import NavContainer from "./nav-container";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

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
            history.push('/');
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
                    <Switch>
                        <Route path='/dashboard'>
                            <Tables></Tables>
                        </Route>
                        <Route path='/food'>
                            <Food></Food>
                        </Route>
                    </Switch>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default LayoutComponent;