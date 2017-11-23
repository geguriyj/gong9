import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";

import Tags from "./tags";
import StartTime from "./start-time";

class ItemList extends Component {
    render() {
        const itemList = this._getList();

        return (
            <div>
                {itemList}
            </div>
        );
    }

    _getList() {
        const { items } = this.props;

        if (_.isEmpty(items)) {
            return (
                <div className="poll">현재 진행중인 공구가 없습니다.</div>
            );
        }
        return items.map((item, idx) => {
            return (
                <div className="poll" key={ item.id } id={ item.id }>
                    <div className="poll-left">
                        <div className="poll-index">
                            #{idx+1}
                        </div>
                        <div>
                            <div>
                                <span className="poll-info">[{item.type}] </span>
                                <span className="question">{item.title}</span>
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
                        <Link to={`/detail/${item.id}`} className="">
                        <span type="button"
                              data-toggle="button"
                              className="btn btn-outline-danger"
                              style={{ width: "80px", margin: "2px", fontSize: "1.2em"}}>공구</span>
                        </Link>
                    </div>
                </div>
            );
        });
    }
}

export default ItemList;
