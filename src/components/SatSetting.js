import React from 'react';
import {Form, Button, InputNumber} from 'antd';


class SatSetting extends React.Component {
    render() {
        // get form object from props.form
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            // responsive
            labelCol: {
                xs: {span: 24},
                sm: {span: 11},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 13},
            }
        };

        return (
            <Form {...formItemLayout} className="sat-setting" onSubmit={this.showSatellite}>
                <Form.Item label="Longitude(degrees)">
                    {getFieldDecorator("longitude", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your longitude"
                            }
                        ],
                    })(<InputNumber min={-180} max={180}
                                    style={{width: "100%"}}
                                    placeholder="Please input your longitude"
                    />)
                    }
                </Form.Item>
                <Form.Item label="Latitude(degrees)">
                    {getFieldDecorator("latitude", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your latitude"
                            }
                        ],
                    })(<InputNumber min={-90} max={90}
                                    style={{width: "100%"}}
                                    placeholder="Please input your latitude"
                    />)
                    }
                </Form.Item>
                <Form.Item label="Elevation(degrees)">
                    {getFieldDecorator("elevation", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your elevation"
                            }
                        ],
                    })(<InputNumber min={-413} max={8850}
                                    style={{width: "100%"}}
                                    placeholder="Please input your elevation"
                    />)
                    }
                </Form.Item>
                <Form.Item label="Altitude(degrees)">
                    {getFieldDecorator("altitude", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your altitude"
                            }
                        ],
                    })(<InputNumber min={0} max={90}
                                    style={{width: "100%"}}
                                    placeholder="Please input your altitude"
                    />)
                    }
                </Form.Item>
                <Form.Item label="Duration(secs)">
                    {getFieldDecorator("duration", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your duration"
                            }
                        ],
                    })(<InputNumber min={0} max={90}
                                    style={{width: "100%"}}
                                    placeholder="Please input your duration"
                    />)
                    }
                </Form.Item>
                <Form.Item className="show-nearby">
                    <Button type="primary"
                            htmlType="submit"
                            style={{textAlign: "center"}}>
                        Find Nearby Satellite
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    showSatellite = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                // pass to parent component
                this.props.onShow(values);
            }
        })
    }
}

const SatSetting1 = Form.create({name: 'satellite-setting'})(SatSetting);
export default SatSetting1;