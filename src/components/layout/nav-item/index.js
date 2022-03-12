import React from "react";
import { useHistory } from "react-router-dom";
import './index.css';


const NavItem = ({icon, label, link}) => {

    const history = useHistory();

    const onClickNavItem = (link) => {
        history.push(link);
    }

    return (
        <div className='nav-item-container' onClick={() => onClickNavItem(link)}>
            <img
                alt={label}
                className="nav-item-img" 
                src={icon} 
                width={50}
            />
            <div className="nav-item-label">{label}</div>
        </div>
    );
}

export default NavItem;