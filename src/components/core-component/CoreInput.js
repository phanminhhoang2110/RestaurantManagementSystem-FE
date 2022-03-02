import React, { Component } from "react";
import { Input, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


export default class CoreInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            valueOfInput: ""
        }
    }
    setValueOfInput = (event) => {
        this.setState({valueOfInput: event.target.value});
        if(this.props.getValueOfInput){
            this.props.getValueOfInput(event.target.value);
        }
    }

    render(){
        const {label, defaultValue, password} = this.props;
        return (
            <div>
                <Row justify="center">
                    <Col span={2}>
                        <p><b>{label}</b></p>
                    </Col>
                    <Col span={8}>
                        {
                            password ? 
                            <Input.Password
                                defaultValue={defaultValue ? defaultValue : ''}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                style={{width:'40%'}}
                                onChange = {this.setValueOfInput}
                            />
                            :
                            <Input 
                                defaultValue={defaultValue ? defaultValue : ''}
                                style={{width:'40%'}}
                                onChange = {this.setValueOfInput}
                            />
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}