import React, { Component } from 'react';

class StartTime extends Component {
    render() {
        const { start } = this.props;

        return (
            <span className="poll-info">{ start }</span>
        );
    }
}

export default StartTime;
