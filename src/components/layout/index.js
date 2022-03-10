import React from "react";
import './index.css'
import Tables from "../screens/table";
import NavContainer from "./nav-container";

const LayoutComponent = () => {
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
        </div>
    );
}

export default LayoutComponent;