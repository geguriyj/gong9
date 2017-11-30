import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class extends Component {
    render() {
        const renderButton = this._renderButton();

        return (
            <div className="task-menu">
                { renderButton }
            </div>
        );
    }

    _renderButton() {
        const { isLogin } = this.props;

        const renderMyPageButton = this.renderMyPageButton();

        //로그인 사용자
        if (isLogin) {
            return (
                <div className="btn-group" role="group">
                    <Link to={`/add`}>
                        <span type="button" data-toggle="button"
                              className="btn btn-outline-success lg-btn">공구등록</span>
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
                          className="btn btn-outline-warning lg-btn">목록으로</span>
                </Link>
            );
        }

        return (
            <Link to={`/my`}>
                <span type="button" data-toggle="button"
                      className="btn btn-outline-info lg-btn">내 공구</span>
            </Link>
        );
    }

    renderCheckInButton() {
        return (
            <div className="btn-group" role="group">
                <Link to={`/login`}>
                    <span type="button" data-toggle="button"
                          className="btn btn-outline-success lg-btn">로그인</span>
                </Link>
                <Link to={`/join`}>
                    <span type="button" data-toggle="button"
                          className="btn btn-outline-info lg-btn">가입할래.유</span>
                </Link>
            </div>
        );
    }
}