import {
    Modal
} from "antd";
import React from "react";

const OrderModal = ({
    visible,
    onClickCancel
}) => {

    return ( <
        div >
        <
        Modal visible = {
            visible
        }
        onCancel = {
            onClickCancel
        } >
        <
        p > This is a modal < /p> <
        /Modal> <
        /div>
    );
}

export default OrderModal;