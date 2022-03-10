import React from "react";
import NavItem from "../nav-item";
import iconNav1 from '../../../assets/icons/food.svg'
import iconNav2 from '../../../assets/icons/revenue.svg'
import iconNav4 from '../../../assets/icons/order.svg'
import iconNav3 from '../../../assets/icons/order-history.svg'

const items = [
    {
        'label': 'Đồ ăn',
        'icon': iconNav1,
    },
    {
        'label': 'Order',
        'icon': iconNav4,
    },
    {
        'label': 'Doanh thu',
        'icon': iconNav2,
    },
    {
        'label': 'Lịch sử order',
        'icon': iconNav3
    }
]

const NavContainer = () => {
    return (
        <div>
            {items.map((item)=>{
                return <NavItem icon={item.icon} label={item.label}/>
            })}
        </div>
    );
}

export default NavContainer;