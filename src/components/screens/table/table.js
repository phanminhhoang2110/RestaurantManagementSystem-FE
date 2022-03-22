import React, { useState } from "react";
import './table.css';
import table from  '../../../assets/img/table.png';
import { Col } from "antd";
import OrderModal from '../order/order-modal';

const Table = (props) => {
    const {label, id} = props;

    const [visible, setVisible] = useState(false);

    const onClickToTable = (id) => {
        setVisible(true)
    }

    const onClickOrder = () => {

    }

    const onClickCancel = () => {
        setVisible(false)
    }

    return (
        <Col span={6}>
            <div className="table-container" onClick={() => onClickToTable(id)}>
                <div className="table-item">
                    <img className="table-img" src={table} />
                    <div className="table-label">
                        <h2><b>{label}</b></h2>
                    </div>
                </div>
            </div>
            <OrderModal visible={visible} onClickCancel={onClickCancel} />
        </Col>
    );
}

export default Table;