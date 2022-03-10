import React from "react";
import iconNav from '../../../assets/img/food.svg'
import './index.css';


const NavItem = ({icon, label}) => {

    const onClickNavItem = () => {
        console.log(label)
    }

    return (
        <div className='nav-item-container' onClick={onClickNavItem}>
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