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
        const renderTaskButton = this._renderTaskButton();

        return (
            <div className="poll-list">
                { itemList }
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

        _.forEach(items, (item, key) => {

            count++;

            const title = item.title || "공구할래.유?";
            const type = item.type || "진행중";

            itemList.push(
                <div className="poll" key={ key }>
                    <div className="poll-left">
                        <div className="poll-index">
                            #{count}
                        </div>
                        <div>
                            <div>
                                <span className="poll-info">[{type}] </span>
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
                                      className="btn btn-outline-danger"
                                      style={{ width: "80px", margin: "2px", fontSize: "1.2em"}}>공구</span>
                            </Link>
                            <span type="button"
                                  data-toggle="button"
                                  className="btn btn-outline-danger"
                                  style={{ width: "80px", margin: "2px", fontSize: "1.2em"}}
                                  data-key={ key }
                                  onClick={ this.clickDelete }>삭제</span>
                    </div>
                </div>
            );
        });

        return itemList;
    }

    _renderTaskButton() {
        const { isLogin } = this.props;

        return (
            <TaskButton isLogin={ isLogin } />
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
