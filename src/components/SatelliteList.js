import React from 'react';
import {Button, Spin, List, Avatar, Checkbox} from 'antd';
import satellite from '../assets/images/satellite.png'

class SatelliteList extends React.Component {
    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const {isLoad} = this.props.isLoading;

        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn"
                        style={{
                            textAlign: "center",
                            background: "#0a2a56",
                            color: "#fff",
                            margin: "10px"
                        }}>
                    Track on the map
                </Button>
                <hr color="#0a2a56" size="1" width="150px"/>

                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large"/>
                        </div>
                        :
                        <List className="sat-list"
                              itemLayout="horizontal"
                              size="small"
                              dataSource={satList}
                              renderItem={(item) => (
                                  <List.Item actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}>
                                      <List.Item.Meta
                                          avatar={<Avatar size={50} src={satellite}/>}
                                          title={<p>{item.satname}</p>}
                                          description={`Launch Date: ${item.launchDate}`}
                                      />
                                  </List.Item>
                              )}
                        />
                }
            </div>
        );
    }
}

export default SatelliteList;