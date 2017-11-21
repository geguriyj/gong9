import React, { Component } from 'react';
export default class extends Component {
    render() {
        const { params } = this.props.match.params;

        return (
            <div>params.id</div>
        );
    }
}