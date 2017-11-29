import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div style={{ position: "fixed", bottom: 0, width: "93%" }}>
                <div style={{ padding: "5px 0 5px 0" }}>
                    <Link to={`/add`}>
                        <span type="button" data-toggle="button" className="btn btn-outline-success"
                              style={{ width: "100%", fontSize: "1.2em"}}>공구등록</span>
                    </Link>
                </div>
            </div>
        );
    }
}