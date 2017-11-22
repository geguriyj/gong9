import React, { Component } from 'react';

import itemData from "./data/data";
import ItemList from "./components/item-list";

class App extends Component {
    render() {
        return (
            <div className="poll-list">
                <ItemList items={ itemData } />
            </div>
        );
    }
}

export default App;
