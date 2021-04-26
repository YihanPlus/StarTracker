import React from 'react';
import SatSetting from "./SatSetting"
import SatelliteList from "./SatelliteList"
import {Row, Col} from 'antd';
import axios from "axios";
import {NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY} from "../constants";

// sibling data communication
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            satInfo: null,
            isLoadingList: false
        };
    }

    showNearBySatellite = (setting) => {
        this.setState({
            settings: setting
        })
        this.fetchSatellite(setting);
    }

    fetchSatellite = (setting) => {
        const { latitude, longitude, elevation, altitude } = setting;
        const url = `/api/${NEARBY_SATELLITE}/${latitude}/${longitude}/${elevation}/${altitude}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        this.setState({
            isLoadingList: true
        });
        axios.get(url)
            .then(response => {
                console.log('res ->', response);
                this.setState( {
                    satInfo: response.data,
                    isLoadingList: false
                })
            })
            .catch(err => {
                console.log('err in fetch satellite ->', err);
            })
    }

    render() {
        const { satInfo, isLoadingList } = this.state;

        return (
            <Row className='main'>
                <Col span={8}>
                    <div className="left-side">
                        <SatSetting onShow={this.showNearBySatellite}/>
                        <SatelliteList
                            satInfo={satInfo}
                            isLoading={isLoadingList}

                        />
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