import React, { Component } from 'react';
import "./css/bootstrap-social.css";
import "./css/main.css";

import itemData from "./items/data";
import ItemList from "./items/item-list";

class App extends Component {
    render() {
        return (
            <div id="app">
                <div className="container">
                    <div className="row">
                        <div className="content col-lg-6 col-lg-offset-3">
                            <div className="main">
                                <div>
                                    <div className="row order-selector"></div>
                                    <ItemList items={ itemData } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
