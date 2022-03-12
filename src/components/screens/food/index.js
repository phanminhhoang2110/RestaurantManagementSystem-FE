import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodItem from "./food-item/foodItem";

const Food = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(window.API_HOST + '/api/item/get-all')
            .then((response)=>{
                setItems(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Row gutter={16}>
            {items.map((item) =>{
                return <FoodItem key={item._id} item={item}/>
            })}
        </Row>
    );
}

export default Food;