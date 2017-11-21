import React, { Component } from 'react';
import Tags from "./tags";
import StartTime from "./start-time";

class ItemList extends Component {
    constructor() {
        super();

        this._itemClick = this._itemClick.bind(this);
    }
    render() {
        const itemList = this._getList();
        return (
            <div className="poll-list">
                {itemList}
            </div>
        );
    }

    _getList() {
        const { items } = this.props;

        return items.map((item, idx) => {
            return (
                <div className="poll" key={ item.id } onClick={ this._itemClick }>
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
                            <StartTime start={ item.start } />
                        </div>
                    </div>
                </div>
            );
        });
    }

    _itemClick(event) {
        const target = event.target;
        const key = target.getAttribute("key");

        alert(key);
    }
}

export default ItemList;
