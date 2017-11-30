import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'

import firebase from "firebase";
import _ from "lodash";
import shortid from "shortid";

import About from './components/about';
import ItemDetail from './components/item-detail';
import ItemList from "./components/item-list";
import MyList from "./components/my-list";
import AddItem from "./components/add-item";
import MemberJoin from "./components/join";
import Login from "./components/login";

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

        this.memberJoin = this.memberJoin.bind(this);
        this.memberLogin = this.memberLogin.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.addFavoriteItem = this.addFavoriteItem.bind(this);

        this.state = {
            items: [],
            loginEmail: null
        };
    }

    componentWillMount() {

        this.reloadDataBase();

        const userId = this.state.loginEmail;

        if (!userId) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setLoginId(user.email);
                }
            });
        }
    }

    render() {
        const renderLoginInfo = this.renderLoginInfo();

        return (
            <Router>
                <div className="container">
                    <div className="content col-lg-6 col-lg-offset-3">
                        <div className="main">
                            { renderLoginInfo }
                            <div className="row order-selector"></div>

                            <Route exact path="/" render={(router) => this.renderItemList(router) } />
                            <Route path="/list" render={(router) => this.renderItemList(router) } />
                            <Route path="/my" render={(router) => this.renderMyList(router) } />
                            <Route path="/detail/:id" render={(router) => this.renderDetail(router) } />
                            <Route path="/about" component={ About } />
                            <Route path="/add" render={(router) => this.renderAddItem(router) } />
                            <Route path="/join" render={(router) => this.renderMemberJoin(router) } />
                            <Route path="/login" render={(router) => this.renderLoginPage(router) } />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    setLoginId(email) {
        this.setState({loginEmail: email});
    }

    reloadDataBase() {
        const database = firebase.database();
        database.ref("items").once("value").then((snapshot) => {
            this.setState({items: snapshot.val()});
        });
    }

    renderLoginInfo() {
        const { loginEmail } = this.state;

        if (!loginEmail) {
            return null;
        }

        return (
            <div className="row">
                <span>[{ loginEmail }] 님이 로그인 했습니다.</span>
                <span type="button" style={{ marginLeft: "15px" }}
                    onClick={ this.logout }>로그아웃</span>
            </div>
        );
    }

    renderItemList() {
        const { items, loginEmail } = this.state;
        const isLogin = loginEmail ? true :  false;

        return (
            <ItemList items={ items } isLogin={ isLogin } onDelete={ this.deleteItem } />
        );
    }

    renderMyList(router) {
        const { loginEmail } = this.state;
        const isLogin = loginEmail ? true :  false;
        const pathName = router.location.pathname;

        return (
            <MyList {...this.state} pathName={ pathName } isLogin={ isLogin } onDelete={ this.deleteItem } />
        );
    }

    renderAddItem(router) {
        return (
            <AddItem onAddItem={ this.addItem } router={ router } />
        );
    }

    renderMemberJoin(router) {
        return (
            <MemberJoin onMmberJoin={ this.memberJoin } router={ router } />
        );
    }

    renderLoginPage(router) {
        return (
            <Login onMemberLogin={ this.memberLogin } router={ router } />
        );
    }

    renderDetail(router) {
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
            <ItemDetail item={ item }
                onSave={ this.saveItem }
                onFavorite={ this.addFavoriteItem } />
        );
    }

    addItem(itemData, router) {
        const newKey = shortid.generate();

        const updates = {
            id: newKey,
            title: itemData.title,
            link: itemData.link,
            img: itemData.img,
            type: "ING",
            insert_time: new Date().getTime(),
            insert_user: this.state.loginEmail
        };
        const path = `items/${newKey}`;

        firebase.database().ref(path)
            .set(updates)
            .then(() => {

                this.reloadDataBase();

                router.history.replace("/");

            }).catch((error) => {
                alert(error.message);
            });
    }

    deleteItem(key) {
        const path = `items/${key}/`;

        firebase.database().ref(path)
            .remove()
            .then(() => {

                this.reloadDataBase();

            }).catch((error) => {
                alert(error.message);
            });
    }

    saveItem(item) {
        const newKey = shortid.generate();
        const loginEmail = this.state.loginEmail;

        const updates = {
            id: newKey,
            item_id: item.id,
            type: item.type
        };
        const path = `users/${loginEmail}/purchase/`;

        return firebase.database().ref(path).set(updates);
    }

    addFavoriteItem(item) {
        const newKey = shortid.generate();
        const loginEmail = this.state.loginEmail;

        const updates = {
            id: newKey,
            item_id: item.id,
            type: item.type
        };
        const path = `users/${loginEmail}/favorite/`;

        return firebase.database().ref(path).set(updates);
    }

    memberJoin(email, password, router) {

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                this._completeJoin(email, password, router);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    memberLogin(email, password, router) {
        this.login(email, password, router);
    }

    _completeJoin(email, password, router) {
        this.login(email, password, router);
    }

    login(email, password, router) {
        if (!email || !password) {
            return;
        }

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                return this._setSession(email, password, router);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    _setSession(email, password, router) {
        // const email = `${id}@naver.com`;
        // const password = pw || "aa1234";

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                this._completeLogin(email, router);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    _completeLogin(email, router) {
        this.setLoginId(email);

        if (router) {
            router.history.push("/");
        }
    }

    logout() {
        firebase.auth().signOut().then(() => {
            this.setLoginId(null);
        }).catch((error) => {
            // An error happened.
        });
    }

    // updateItem(data) {
    //     const keys = _.keyBy(data, "id");
    //     const idx = _.indexOf(keys, data.id);
    //     const updates = {};
    //     updates[`/items/`][idx] = data;
    //
    //     return firebase.database().ref().update(updates);
    // }

}

export default App;
