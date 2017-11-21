import React, { Component } from 'react';
import itemData from "../data/data";
import { Button } from 'react-bootstrap';

export default class extends Component {
    render() {
        const itemContent = this._getContent();

        return (
            <div className="poll-list">
                <div className="content col-lg-2 col-lg-offset-5">
                    <div className="main">
                        <div>
                            {itemContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _getContent() {
        // const { id } = this.props.match.params;

        const item = {
            id: "item-1",
            type: "진행중",
            title: "미리겨울준비 스타킹 1+1+1",
            tags: ["여성스타킹","3묶음","무료배송"],
            start: "1 hour ago",
            image: "http://img.wemep.co.kr/deal/5/585/2315855/76d29834a2c66594ddd1e1545e9bb42b7d719b3b.jpg"
        };

        return (
            <div className="poll" key={ item.id } id={ item.id }>
                <div className="poll-center">
                    <div className="poll-index">
                        <img width="300" height="300" src={ item.image }/>
                    </div>
                    <div>
                        <div>
                            <span className="poll-info">[{item.type}] </span>
                            <span className="question">{item.title}</span>
                        </div>
                        <div className="poll-answer">
                            <div className="answer-options">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poll-right">
                    <div className="content col-lg-1 col-lg-offset-5">
                    <div className="poll-votes-label">D-DAY:</div>
                    <div className="poll-votes-value">3</div>
                    <div>
                        <Button outline color="primary" size="lg">구매</Button>
                    </div>
                    <div>
                        <Button color="primary">찜</Button>
                    </div>
                    <div>
                        <Button color="primary">추천</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}