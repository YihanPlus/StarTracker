import React from 'react';
import axios from 'axios';
import { WORLD_MAP_URL } from "../constants"
import { feature } from 'topojson-client';
import { geoEckert4 } from 'd3-geo-projection';
import { geoGraticule, geoPath } from 'd3-geo';
import { select as d3Select } from 'd3-selection';

// set canva
const width = 1180;
const height = 760;

class WorldMap extends React.Component {
    constructor() {
        super();
        this.state = {
            map: null
        }
        this.refMap = React.createRef();
    }

    componentDidMount() {
        axios.get(WORLD_MAP_URL)
            .then(res => {
                const { data } = res;
                console.log(data);
                // convert data to UI
                const land = feature(data, data.objects.countries).features;
                console.log(land);
                this.generateMap(land);
            })
            .catch(err => {
                console.log(`err in fetch world map data: `, err);
            });
    }

    generateMap(land) {
        // step1: create projection
        const projection = geoEckert4()
            .scale(200)
            .translate([width / 2, height / 2])
            .precision(.1);

        const graticule = geoGraticule();

        // step2: get canvas via ref
        const canvas = d3Select(this.refMap.current)
            .attr('width', width)
            .attr('height', height);

        let context = canvas.node().getContext("2d");

        // step3: show data via path
        let path = geoPath()
            .projection(projection)
            .context(context);

        land.forEach(ele => {
            context.fillStyle = '#020c1c';
            context.strokeStyle = '#fff';
            context.globalAlpha = 0.8;
            context.beginPath();
            path(ele);
            context.fill();
            context.stroke();
            context.strokeStyle = 'rgba(220, 220, 220, 0.8)';
            context.beginPath();
            path(graticule());
            context.lineWidth = 0.1;
            context.stroke();

            // 头尾
            context.beginPath();
            context.lineWidth = 0.1;
            path(graticule.outline());
            context.stroke();
        })
    }

    render() {
        return (
            <div className="map-box">
                <canvas className="map" ref={this.refMap} />
            </div>
        )
    }
}

export default WorldMap;