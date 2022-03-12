import React, { useEffect } from "react";
import './index.css'
import Tables from "../screens/table";
import Food from "../screens/food/index";
import NavContainer from "./nav-container";
import OrderHistory from "../screens/order-history/index"
import Revenue from "../screens/revernue/index"
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

const LayoutComponent = () => {
    const history = useHistory();
    const {url, path} = useRouteMatch();

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
                        <Route path={'/dashboard'} exact>
                            <Tables></Tables>
                        </Route>
                        <Route path={`${url}` + '/order'}>
                            <Tables></Tables>
                        </Route>
                        <Route path={`${url}` + '/food'}>
                            <Food></Food>
                        </Route>
                        <Route path={`${url}` + '/order-history'}>
                            <OrderHistory></OrderHistory>
                        </Route>
                        <Route path={`${url}` + '/revenue'}>
                            <Revenue></Revenue>
                        </Route>
                    </Switch>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default LayoutComponent;