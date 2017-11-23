import React, { Component } from 'react';
import firebase from "firebase";

import itemData from "./data/data";
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
        const itemList = this.state.items;

        return (
            <div className="poll-list">
                <ItemList items={ itemList } />
            </div>
        );
    }

    updateItem(data) {
        const keys = _.keyBy(data, "id");
        const idx = _.indexOf(keys, data.id);
        const updates = {};
        updates[`/items/`][idx] = data;

        return firebase.database().ref().update(updates);
    }

    addItem() {
        const updates = {};
        updates["/items/"] = itemData;

        return firebase.database().ref().push(updates);
    }
}

export default App;
