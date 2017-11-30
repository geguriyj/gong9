import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import _ from "lodash";

import Tags from "./tags";
import StartTime from "./start-time";
import TaskButton from "./task-button";

class ItemList extends Component {
    constructor() {
        super();

        this.clickDelete = this.clickDelete.bind(this);
    }

    render() {
        const itemList = this._getList();
        const renderTaskButton = this.renderTaskButton();

        return (
            <div>
                <div className="poll-list">
                    { itemList }
                </div>
                { renderTaskButton }
            </div>
        );
    }

    _getList() {
        const { items } = this.props;

        if (_.isEmpty(items)) {
            return (
                <div className="poll" style={{ textAlign: "center" }}>준비중입니다.</div>
            );
        }

        let itemList = [];
        let count = 0;

        _.forEach(items, (item) => {

            count++;

            const title = item.title || "공구할래.유?";
            // const type = item.type === "ING" ? "진행중" : "종료";

            //TODO 1일 미만으로 남았으면 "마감임박" 으로 표시

            const renderRemoveButton = this.renderDeleteButton(item);

            itemList.push(
                <div className="poll" key={ item.id }>
                    <div className="poll-left">
                        <div className="poll-index">
                            #{count}
                        </div>
                        <div>
                            <div>
                                {/*<span className="poll-info">[{type}] </span>*/}
                                <span className="question">{title}</span>
                            </div>
                            <div className="poll-answer">
                                <div className="answer-options">
                                    <Tags tags={ item.tags } />
                                </div>
                            </div>
                            <StartTime item={ item } />
                        </div>
                    </div>
                    <div className="poll-right">
                        {/*<div className="poll-votes-label">참여자:</div>*/}
                        <Link to={`/detail/${item.id}`}>
                            <span type="button"
                                  data-toggle="button"
                                  className="btn btn-outline-success list-btn">보기</span>
                        </Link>
                        { renderRemoveButton }
                    </div>
                </div>
            );
        });

        return itemList;
    }

    renderTaskButton() {
        const { isLogin } = this.props;

        return (
            <TaskButton isLogin={ isLogin } />
        );
    }

    renderDeleteButton(item) {
        const { user } = this.props;

        if (user.email !== item.insert_user) {
            return null;
        }

        return (
            <span type="button"
                  data-toggle="button"
                  className="btn btn-outline-danger list-btn"
                  data-key={ item.id }
                  onClick={ this.clickDelete }>삭제</span>
        );
    }

    clickDelete(e) {
        const { onDelete } = this.props;

        const target = e.target;
        const key = target.getAttribute("data-key");

        if (!key) {
            return;
        }

        onDelete(key);
    }
}

export default ItemList;
