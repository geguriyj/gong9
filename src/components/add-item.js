import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddItem extends Component {
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
                    *공구이름: <input type="text" id="txt_title" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    *상품링크: <input type="text" id="txt_link" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    *상품이미지: <input type="text" id="txt_img" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    상품태그 ('상품 | 태그' 로 입력): <input type="text" id="txt_tag" />
                </div>
                <div className="poll" style={{ textAlign: "center", padding: "5px"}}>
                    상품옵션: <input type="text" id="txt_option" />
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
        const { onAddItem, router } = this.props;

        const txt_title = document.getElementById("txt_title");
        const txt_link = document.getElementById("txt_link");
        const txt_img = document.getElementById("txt_img");
        const txt_tag = document.getElementById("txt_tag");
        const txt_option = document.getElementById("txt_option");

        const title = txt_title.value;
        const link = txt_link.value;
        const img = txt_img.value;
        const tags = txt_tag.value;
        const options = txt_option.value;

        if (title.length === 0) {
            txt_title.focus();
            return;
        }

        if (link.length === 0) {
            txt_link.focus();
            return;
        }

        if (img.length === 0) {
            txt_img.focus();
            return;
        }

        onAddItem({ title, link, img, tags, options }, router);
    }
}

export default AddItem;