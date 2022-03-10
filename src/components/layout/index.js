import React from "react";
import './index.css'
import Tables from "../screens/table";

const LayoutComponent = () => {
    return (
        <div>
            <div className="layout-component-container">
                <div className="layout-component-nav"></div>
                <div className="layout-component-main">
                    <Tables></Tables>    
                </div>
            </div>
        </div>
    );
}

export default LayoutComponent;