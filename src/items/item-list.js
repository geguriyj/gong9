import React, { Component } from 'react';
import Tags from "./tags";
import StartTime from "./start-time";

class ItemList extends Component {
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

        return items.map((item) => {
            return (
                <div className="poll">
                    <div className="poll-left">
                        <div className="poll-index">
                            #{item.no}
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
}

export default ItemList;
