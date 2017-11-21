import React, { Component } from 'react';
import { Link } from 'react-router'

import itemData from "./data/data";
import ItemList from "./components/item-list";

class App extends Component {
    render() {
        return (
            <div id="app">
                <div className="container">
                    <div className="row">
                        <div className="row order-selector"></div>
                        <div className="poll-list">
                            <div className="content col-lg-6 col-lg-offset-3">
                                <ItemList items={ itemData } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
