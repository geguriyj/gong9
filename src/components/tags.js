import React, { Component } from 'react';

class Tags extends Component {
    render() {
        const Tags = this._getTags();

        return (
            <ul>
                {Tags}
            </ul>
        );
    }

    _getTags() {
        const { tags } = this.props;

        if (!tags || tags.length === 0) {
            return null;
        }

        return tags.map((tag, idx) => {
            return (
                <a key={ idx }>
                    <li className="option-result btn" style={{borderRadius: 0, padding: 0}}>{ tag }</li>
                </a>
            );
        });
    }
}

export default Tags;
