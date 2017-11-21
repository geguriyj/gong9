import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import About from './components/about';
import ItemDetail from './components/item-detail';

import "./css/bootstrap-social.css";
import "./css/main.css";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/detail/:id" component={ItemDetail} />
            <Route path="/about" component={About} />
        </div>
    </Router>
, document.getElementById('root'));
// registerServiceWorker();
