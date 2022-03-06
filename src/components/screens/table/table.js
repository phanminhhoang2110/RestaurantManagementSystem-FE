import React from "react";
import './table.css';
import table from  '../../../assets/img/table.png';
import { Col } from "antd";

const Table = (props) => {
    const {label, id} = props;

    const onClickToTable = (id) => {
        console.log(id);
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
        </Col>
    );
}

export default Table;