import React from "react";
import './table.css';
import table from  '../../../assets/img/table.png';

const Table = (props) => {
    const {label, id} = props;

    const onClickToTable = (id) => {
        
    }

    return (
        <div onClick={() => onClickToTable(id)}>
            <div className="card">
                <img src={table} />
                <div className="container">
                    <h2><b>{label}</b></h2>
                </div>
            </div>
        </div>
    );
}

export default Table;