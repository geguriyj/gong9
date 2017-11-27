import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import firebase from "firebase";
import _ from "lodash";

// import itemData from "./com/data";
// import FireBase from "./components/firebase";

import About from './components/about';
import ItemDetail from './components/item-detail';
import ItemList from "./components/item-list";

class App extends Component {
    constructor() {
        super();

        const config = {
            apiKey: "AIzaSyD8e82aBUZMFgCkifAtiYRn4lJ-8D-Hyl0",
            authDomain: "gong9-41d7d.firebaseapp.com",
            databaseURL: "https://gong9-41d7d.firebaseio.com",
            projectId: "gong9-41d7d",
            storageBucket: "gong9-41d7d.appspot.com",
            messagingSenderId: "815953697268"
        };

        firebase.initializeApp(config);

        this.state = {
            items: []
        };
    }

    componentWillMount() {
        const database = firebase.database();
        database.ref("items").once("value").then((snapshot) => {
            this.setState({items: snapshot.val()});
        });
    }

    render() {
        const items = this.state.items;

        return (
            <BrowserRouter>
                <div className="container">
                    <div className="content col-lg-6 col-lg-offset-3">
                        <div className="main">
                            <div className="row order-selector"></div>

                            <Route exact path="/" render={() => <ItemList items={ items } />} />
                            <Route path="/list" render={() => <ItemList items={ items } />} />
                            <Route path="/detail/:id" render={(router) => this.renderDefail(router) } />
                            <Route path="/about" component={ About } />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    renderDefail(router) {
        if (!router) {
            return null;
        }
        const id = router.match.params.id;
        const items = this.state.items;
        const item = _.find(items, {id: id});

        if (!item) {
            return null;
        }

        return (
            <ItemDetail item={ item } />
        );
    }

    // updateItem(data) {
    //     const keys = _.keyBy(data, "id");
    //     const idx = _.indexOf(keys, data.id);
    //     const updates = {};
    //     updates[`/items/`][idx] = data;
    //
    //     return firebase.database().ref().update(updates);
    // }

    // addItem() {
    //     const updates = {};
    //     updates["/items/"] = itemData;
    //
    //     return firebase.database().ref().push(updates);
    // }
}

export default App;
