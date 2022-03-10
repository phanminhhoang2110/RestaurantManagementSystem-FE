import React from "react";
import NavItem from "../nav-item";
import iconNav1 from '../../../assets/img/food.svg'
import iconNav2 from '../../../assets/img/table.svg'

const items = [
    {
        'label': 'Đồ ăn',
        'icon': iconNav1,
    },
    {
        'label': 'Order',
        'icon': iconNav2,
    },
    {
        'label': 'Doanh thu',
        'icon': iconNav2,
    },
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