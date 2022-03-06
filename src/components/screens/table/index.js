import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./table";
import './index.css';
import { Row } from "antd";

const Tables = () => {
    const [tables,setTables] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/table/get-all')
            .then(function(response){
                const {data} = response.data;
                setTables(data);
            })
            .catch(function(err){
                console.log(err);
            });
    },[]);

    return (
        <Row gutter={16}>
            {tables.map((table) => {
                return <Table key={table._id} label={table.name} id={table._id}></Table>
            })}
        </Row>
    );
}

export default Tables;