import React from "react";
import './foodItem.css';


const FoodItem = ({item}) => {
    const {name, _id, image, price } = item;

    const onClickFoodItem = (_id) => {
        console.log(_id);
    }

    return (
        <div className="food-item-container" onClick={() => onClickFoodItem(_id)}>
            <img className="food-item-img" src={image} width={300} />
            <h2>{name}</h2>
            <div>
                <h2>{price}</h2>
            </div>
        </div>
    );
}

export default FoodItem;