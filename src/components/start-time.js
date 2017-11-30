import React, { Component } from 'react';
import _ from "lodash";

class StartTime extends Component {
    render() {
        const limit_date = ["1일 전", "2일 전", "오늘마감"];
        const colors = ["#fd7e14", "#20c997", "#dc3545"];
        const idx = _.random(0,2);
        const limit = limit_date[idx];
        const color = colors[idx];

        return (
            <div>
                <span className="poll-info" style={{ fontSize: "0.7em" }}>종료:</span>
                <span className="btn btn-outline-secondary log-out" type="button" style={{ color: color }}>{ limit }</span>
            </div>
        );
    }
}

export default StartTime;
