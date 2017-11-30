import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MemberLogin extends Component {
    constructor() {
        super();

        this.clickMemberLogin = this.clickMemberLogin.bind(this);
    }

    render() {
        const itemContent = this._getContent();

        return (
            <div>
                {itemContent}
            </div>
        );
    }

    _getContent() {
        return (
            <div>
                <div>
                    <div className="poll">
                        <div className="poll-left">
                            <div className="question">로그인</div>
                        </div>
                    </div>
                    <div className="bar-line"></div>
                    <div className="poll" style={{ padding: "10px 10px 10px 20px" }}>
                        <span>*아이디: </span><input id="txt_id" type="text" className="input-field"/>
                    </div>
                    <div className="poll" style={{ padding: "10px 10px 10px 20px" }}>
                        <span>*비밀번호(6자리): </span><input id="txt_pw" type="text" className="input-field"/>
                    </div>
                </div>
                <div className="task-menu">
                    <div className="btn-group" role="group">
                        <span type="button" data-toggle="button" className="btn btn-outline-success lg-btn"
                    onClick={ this.clickMemberLogin }>로그인</span>
                        <Link to={`/`}>
                            <span type="button" data-toggle="button" className="btn btn-outline-danger lg-btn">취소</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    clickMemberLogin() {
        const { onMemberLogin, router } = this.props;

        const txt_id = document.getElementById("txt_id");
        const txt_pw = document.getElementById("txt_pw");

        const id = txt_id.value;
        const pw = txt_pw.value;

        if (id.length === 0) {
            txt_id.focus();
            return;
        }

        if (pw.length === 0) {
            txt_pw.focus();
            return;
        }

        onMemberLogin(id, pw, router);
    }
}
export default MemberLogin;