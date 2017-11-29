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
            <div className="mb-3">
                <div className="poll col-lg-6 col-lg-offset-3">
                    <div className="poll-left">
                        <div className="question">가입</div>
                    </div>
                </div>
                <div style={{ borderBottom: "2px solid #7AF5F5"}}></div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    *아이디: <input id="txt_id" type="text" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    *비밀번호(6자리): <input id="txt_pw" type="text" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>

                </div>
                <div className="row align-items-end">
                    <div className="col" style={{ textAlign: "center"}}>
                        <div style={{ position: "fixed", bottom: 0, width: "93%" }}>
                            <div style={{ padding: "5px 0 5px 0" }}>
                                <span type="button" data-toggle="button" className="btn btn-outline-info"
                                    style={{ width: "50%", fontSize: "1.2em"}}
                                    onClick={ this.clickMemberJoin }>가입</span>
                                <Link to={`/`}>
                                    <span type="button" data-toggle="button" className="btn btn-outline-danger"
                                          style={{ width: "50%", fontSize: "1.2em"}}>취소</span>
                                </Link>
                            </div>
                        </div>
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