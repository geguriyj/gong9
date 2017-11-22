import React, { Component } from 'react';

class StartTime extends Component {
    render() {
        const { limit, color } = this.props.item;

        return (
            <span className="poll-info" style={{ color: color }}>종료: { limit }</span>
        );
    }
}

export default StartTime;
