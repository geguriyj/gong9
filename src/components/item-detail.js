import React, { Component } from 'react';
import firebase from "firebase";
import _ from "lodash";
// import itemData from "../data/data";
// import { Button } from 'react-bootstrap';

export default class extends Component {
    render() {
        const itemContent = this._getContent();

        return (
            <div>
                {itemContent}
            </div>
        );
    }

    _getContent() {
        const { item } = this.props.item;

        debugger;

        if (!item) {
            return null;
        }

        return (
            <div key={ item.id } id={ item.id } className="mb-3">
                <div className="poll col-lg-6 col-lg-offset-3" style={{ padding: "5px 10px 0 10px"}}>
                    <div className="poll-left">
                        <div className="question">{item.title}</div>
                    </div>
                    <div className="poll-right">
                        <div className="poll-votes-label">D-DAY:</div>
                        <div className="poll-votes-value" style={{ fontSize: "20px", fontWeight: "500"}}>3</div>
                    </div>
                </div>
                <div style={{ borderBottom: "2px solid #7AF5F5"}}></div>
                <div className="poll" style={{ textAlign: "center"}}>
                    <img width="100%" height="300" src={ item.img }/>
                </div>
                <div className="row align-items-end">
                    <div className="col" style={{ textAlign: "center"}}>
                        <span type="button" data-toggle="button" className="btn btn-outline-danger" style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}>공구</span>
                        <span type="button" data-toggle="button" className="btn btn-outline-success" style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}>초대</span>
                        <span type="button" data-toggle="button" className="btn btn-outline-info" style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}>찜</span>
                    </div>
                </div>
            </div>
        );
    }
}