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
            <div key={ item.id } id={ item.id } className="mb-3">
                <div className="poll col-lg-6 col-lg-offset-3" style={{ padding: "5px 10px 0 10px"}}>
                    <div className="poll-left">
                        <div className="question">{item.title}</div>
                    </div>
                    <div className="poll-right">
                        <div className="poll-votes-label">D-DAY:</div>
                        <div className="poll-votes-value" style={{ fontSize: "20px", fontWeight: "500"}}>3</div>
                    </div>
                </div>
                <div style={{ borderBottom: "2px solid #7AF5F5"}}></div>
                <div className="poll" style={{ textAlign: "center", padding: 0}}>
                    <img src={ item.img } alt="" style={{ width: "100%", height: "100%"}}/>
                </div>
                <div className="row align-items-end">
                    <div className="col" style={{ textAlign: "center"}}>
                        <span type="button" data-toggle="button" className="btn btn-outline-danger"
                              style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}
                              onClick={ this.clickSave }>공구</span>
                        <span type="button" data-toggle="button" className="btn btn-outline-success"
                              style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}>초대</span>
                        <span type="button" data-toggle="button" className="btn btn-outline-info"
                              style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}
                              onClick={ this.clickFavorite }>찜</span>
                        <Link to="/">
                            <span type="button" data-toggle="button" className="btn btn-outline-info"
                                  style={{ width: "90px", margin: "2px", fontSize: "1.2em"}}
                                  onClick={ this.clickFavorite }>목록으로</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    clickSave() {
        const { onSave, item } = this.props;

        onSave(item);
    }

    clickFavorite() {
        const { onFavorite, item } = this.props;

        onFavorite(item);
    }
}

export default ItemDetail;