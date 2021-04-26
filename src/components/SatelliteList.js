import React from 'react';
import { Button } from 'antd';

class SatelliteList extends React.Component {
    render() {
        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn"
                        style={{textAlign: "center",
                                background: "#0a2a56",
                                color: "#fff",
                                margin: "10px"}}>
                    Track on the map
                </Button>
                <hr color="#0a2a56" size="1" width="150px" />
                <div>
                    data
                </div>
            </div>
        );
    }
}

export default SatelliteList;