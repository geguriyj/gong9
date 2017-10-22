import React, { Component } from 'react';
// import './App.css';
import "./css/bootstrap-social.css";
import "./css/main.css";

import itemData from "./items/data";

import ItemList from "./items/item-list";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        // const item = {
        //     no: 1,
        //     type: "진행중",
        //     title: "aaa"
        // };
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
