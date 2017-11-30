import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class extends Component {
    render() {
        const renderButton = this._renderButton();

        return (
            <div style={{ position: "fixed", bottom: 0, width: "93%" }}>
                <div style={{ padding: "5px 0 5px 0" }}>
                    { renderButton }
                </div>
            </div>
        );
    }

    _renderButton() {
        const { isLogin } = this.props;

        if (isLogin) {
            return (
                <Link to={`/add`}>
                    <span type="button" data-toggle="button" className="btn btn-outline-success"
                          style={{ width: "100%", fontSize: "1.2em"}}>공구등록</span>
                </Link>
            );
        }

        return (
            <div>
                <Link to={`/login`}>
                        <span type="button" data-toggle="button" className="btn btn-outline-info"
                              style={{ width: "50%", fontSize: "1.2em"}}>로그인</span>
                </Link>
                <Link to={`/join`}>
                    <span type="button" data-toggle="button" className="btn btn-outline-success"
                          style={{ width: "50%", fontSize: "1.2em"}}>멤버할래.유</span>
                </Link>
            </div>
        );
    }
}