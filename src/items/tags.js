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

        return tags.map((tag, idx) => {
            return (
                <a key={ idx }>
                    <li className="option-result btn">{ tag }</li>
                </a>
            );
        });
    }
}

export default Tags;
