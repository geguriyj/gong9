import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { buttons } from 'bootstrap-css'

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
                <div className="list-group">
                    <div className="poll">
                        <span className="input-title">*공구이름: </span>
                        <input type="text" id="txt_title" className="input-field" />
                    </div>
                    <div className="poll">
                        <span className="input-title">*상품링크: </span>
                        <input type="text" id="txt_link" className="input-field" />
                    </div>
                    <div className="poll">
                        <span className="input-title">*상품이미지: </span>
                        <input type="text" id="txt_img" className="input-field" />
                    </div>
                    <div className="poll">
                        <span className="input-title">상품태그: </span>
                        <input type="text" id="txt_tag" className="input-field" />
                    </div>
                    <div className="poll">
                        <span className="input-title">상품옵션:('상품|태그'로 입력)</span>
                        <input type="text" id="txt_option" className="input-field" />
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col" style={{ textAlign: "center"}}>
                        <div style={{ position: "fixed", bottom: 0, width: "93%" }}>
                            <span type="button" data-toggle="button" className="btn btn-outline-success lg-btn"
                                  onClick={ this.clickAddItem }>공구등록</span>
                            <Link to={`/`}>
                                <span type="button" data-toggle="button" className="btn btn-outline-danger lg-btn">취소</span>
                            </Link>
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