import React from 'react';
import SatSetting from "./SatSetting"
import SatelliteList from "./SatelliteList"
import {Row, Col} from 'antd';

class Main extends React.Component {
    render() {
        return (
            <Row className='main'>
                <Col span={8}>
                    <div className="left-side">
                        <SatSetting/>
                        <SatelliteList/>
                    </div>
                </Col>
                <Col span={16} className="right-side">
                    right
                </Col>
            </Row>
        )
    }
}

export default Main;