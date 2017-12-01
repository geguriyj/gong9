import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MemberJoin extends Component {
    constructor() {
        super();

        this.clickMemberJoin = this.clickMemberJoin.bind(this);
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
                            <div className="question">가 입</div>
                        </div>
                    </div>
                    <div className="bar-line"></div>
                    <div className="poll" style={{ padding: "10px 10px 10px 20px" }}>
                        <span className="input-title">*아이디: </span>
                        <input id="txt_id" type="text" className="input-field" style={{ width: "300px" }}/>
                    </div>
                    <div className="poll" style={{ padding: "10px 10px 10px 20px" }}>
                        <span className="input-title">*비밀번호(6자리): </span>
                        <input id="txt_pw" type="text" className="input-field" style={{ width: "300px" }}/>
                    </div>
                </div>
                <div className="task-menu">
                    <div className="btn-group" role="group">
                        <span type="button" data-toggle="button" className="btn btn-outline-success lg-btn"
                            onClick={ this.clickMemberJoin }>가입</span>
                        <Link to={`/`}>
                            <span type="button" data-toggle="button" className="btn btn-outline-danger lg-btn">취소</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    clickMemberJoin() {
        const { onMmberJoin, router } = this.props;

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

        onMmberJoin(id, pw, router);
    }
}
export default MemberJoin;