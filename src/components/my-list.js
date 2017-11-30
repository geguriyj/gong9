import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import _ from "lodash";
import firebase from "firebase";

import Tags from "./tags";
import StartTime from "./start-time";
import TaskButton from "./task-button";

class MyList extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            user: {
                email: null,
                uid: null,
                purchase: [],
                favorite: []
            }
        };

        this.clickDelete = this.clickDelete.bind(this);
    }

    componentDidMount() {
        this.myPurchaseList();
    }

    myPurchaseList() {
        const { items, user } = this.props;

        const path = `users/${user.uid}/purchase`;

        const database = firebase.database();
        database.ref(path).once("value").then((snapshot) => {

            const purchase = snapshot.val();

            let myList = [];

            _.forEach(purchase, (val1) => {
                _.forEach(items, (val2) => {
                    if (val1.item_id === val2.id) {
                        myList.push(val2);
                    }
                });
            });

            this.setState({user: {purchase: myList} });
        });
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
        const { purchase } = this.state.user;

        if (_.isEmpty(purchase)) {
            return (
                <div className="poll" style={{ textAlign: "center" }}>참여중인 공구가 없습니다.</div>
            );
        }

        const items = purchase;

        let itemList = [];
        let count = 0;

        _.forEach(items, (item, key) => {

            count++;

            const title = item.title || "공구할래.유?";
            const type = item.type === "ING" ? "진행중" : "종료";

            //TODO 1일 미만으로 남았으면 "마감임박" 으로 표시

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
                        <span type="button"
                              data-toggle="button"
                              className="btn btn-outline-danger list-btn"
                              data-key={ key }
                              onClick={ this.clickDelete }>삭제</span>
                    </div>
                </div>
            );
        });

        return itemList;
    }

    _renderTaskButton() {
        return (
            <TaskButton {...this.props} />
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

export default MyList;
