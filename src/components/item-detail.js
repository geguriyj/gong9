import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemDetail extends Component {
    constructor() {
        super();

        this.clickSave = this.clickSave.bind(this);
        this.clickFavorite = this.clickFavorite.bind(this);
    }
    render() {
        const itemContent = this._getContent();

        return (
            <div>
                { itemContent }
            </div>
        );
    }

    _getContent() {
        const { item } = this.props;

        if (!item) {
            return null;
        }

        return (
            <div key={ item.id } id={ item.id }>
                <div className="poll">
                    <div className="poll-left">
                        <div className="question">{item.title}</div>
                    </div>
                    <div className="poll-right">
                        <div className="poll-votes-label">D-DAY:</div>
                        <div className="poll-votes-value" style={{ fontSize: "25px", fontWeight: "500"}}>3</div>
                    </div>
                </div>
                <div className="bar-line"></div>
                <div className="poll" style={{ textAlign: "center", padding: 0}}>
                    <img src={ item.img } alt="" style={{ width: "100%", height: "100%"}}/>
                </div>
                <div className="row align-items-end">
                    <div className="col" style={{ textAlign: "center" }}>
                        <span type="button" data-toggle="button" className="btn btn-outline-danger sm-btn"
                              onClick={ this.clickSave }>공구</span>
                        <span type="button" data-toggle="button" className="btn btn-outline-success sm-btn">초대</span>
                        <span type="button" data-toggle="button" className="btn btn-outline-info sm-btn"
                              onClick={ this.clickFavorite }>찜</span>
                        <Link to="/">
                            <span type="button" data-toggle="button" className="btn btn-outline-warning sm-btn">목록</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    clickSave() {
        const { onSave, user, item, router } = this.props;

        if (!user.uid) {
            router.history.replace("/login");
            return;
        }

        onSave(item, router);
    }

    clickFavorite() {
        const { onFavorite, user, item, router } = this.props;

        if (!user.uid) {
            router.history.replace("/login");
            return;
        }

        onFavorite(item, router);
    }
}

export default ItemDetail;