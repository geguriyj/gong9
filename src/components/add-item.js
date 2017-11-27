import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class extends Component {
    constructor() {
        super();

        this.clickAddItem = this.clickAddItem.bind(this);
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
                        <div className="question">공구등록</div>
                    </div>
                </div>
                <div style={{ borderBottom: "2px solid #7AF5F5"}}></div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    상품링크: <input type="text" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    상품이미지: <input type="text" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    상품태그: <input type="text" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    상품옵션: <input type="text" />
                </div>
                <div className="row align-items-end">
                    <div className="col" style={{ textAlign: "center"}}>
                        <div style={{ position: "fixed", bottom: 0, width: "93%" }}>
                            <div style={{ padding: "5px 0 5px 0" }}>
                                <span type="button" data-toggle="button" className="btn btn-outline-info"
                                    style={{ width: "50%", fontSize: "1.2em"}}
                                    onClick={ this.clickAddItem }>공구등록</span>
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

    clickAddItem() {
        const { onAddItem } = this.props;

        onAddItem();
    }
}