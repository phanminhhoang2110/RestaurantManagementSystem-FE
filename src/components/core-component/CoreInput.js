import React, { Component } from "react";
import { Input, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


export default class CoreInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    getValueOfInput = (event) => {
        console.log(event.target.value)
        this.setState({inputValue: event.target.value})
    }

    render(){
        const props = this.props;
        const label = props.label;
        const defaultValue = props.defaultValue;
        const password = props.password;
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
                                onPressEnter = {this.getValueOfInput}
                            />
                            :
                            <Input 
                                defaultValue={defaultValue ? defaultValue : ''}
                                style={{width:'40%'}}
                                onPressEnter = {this.getValueOfInput}
                            />
                        }
                        
                    </Col>
                </Row>
            </div>
        )
    }
}