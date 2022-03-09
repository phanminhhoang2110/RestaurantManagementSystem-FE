import React from "react";
import './index.css'
import Tables from "../screens/table";

const LayoutComponent = () => {
    return (
        <div className="layout-component-container">
            <div className="layout-component-nav">Nav</div>
            <div className="layout-component-main">
                <Tables></Tables>    
            </div>
        </div>
    );
}

export default LayoutComponent;