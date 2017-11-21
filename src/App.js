import React, { Component } from 'react';

import itemData from "./data/data";
import ItemList from "./components/item-list";

class App extends Component {
    render() {
        return (
            <div id="app">
                <div className="poll-list">
                    <div className="content col-lg-6 col-lg-offset-3">
                        <ItemList items={ itemData } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
