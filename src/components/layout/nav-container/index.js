import React from "react";
import NavItem from "../nav-item";
import iconNav1 from '../../../assets/icons/food.svg'
import iconNav2 from '../../../assets/icons/revenue.svg'
import iconNav4 from '../../../assets/icons/order.svg'
import iconNav3 from '../../../assets/icons/order-history.svg'

const items = [
    {
        'label': 'Order',
        'icon': iconNav4,
        'link': '/order'
    },
    {
        'label': 'Đồ ăn',
        'icon': iconNav1,
        'link': '/food'
    },
    {
        'label': 'Doanh thu',
        'icon': iconNav2,
        'link': '/revenue'
    },
    {
        'label': 'Lịch sử order',
        'icon': iconNav3,
        'link': '/order-history'
    }
]

const NavContainer = () => {
    return (
        <div>
            {items.map((item, index)=>{
                return <NavItem key={index} icon={item.icon} label={item.label} link={item.link}/>
            })}
        </div>
    );
}

export default NavContainer;