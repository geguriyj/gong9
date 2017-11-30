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

        const renderMyPageButton = this.renderMyPageButton();

        //로그인 사용자
        if (isLogin) {
            return (
                <div>
                    <Link to={`/add`}>
                        <span type="button" data-toggle="button"
                              className="btn btn-outline-danger lg-btn">공구등록</span>
                    </Link>
                    { renderMyPageButton }
                </div>
            );
        }

        //비로그인 사용자
        const renderCheckInButton = this.renderCheckInButton();

        return renderCheckInButton;
    }

    renderMyPageButton() {
        const { pathName } = this.props;

        if (pathName && pathName.indexOf("my") > -1) {
            return (
                <Link to={`/`}>
                    <span type="button" data-toggle="button"
                          className="btn btn-outline-success lg-btn">목록으로</span>
                </Link>
            );
        }

        return (
            <Link to={`/my`}>
                <span type="button" data-toggle="button"
                      className="btn btn-outline-success lg-btn">내 공구</span>
            </Link>
        );
    }

    renderCheckInButton() {
        return (
            <div>
                <Link to={`/login`}>
                    <span type="button" data-toggle="button"
                          className="btn btn-outline-success lg-btn">로그인</span>
                </Link>
                <Link to={`/join`}>
                    <span type="button" data-toggle="button"
                          className="btn btn-outline-success lg-btn">멤버할래.유</span>
                </Link>
            </div>
        );
    }
}