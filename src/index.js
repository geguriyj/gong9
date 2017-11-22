import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

// import './index.css';
import App from './App';
import About from './components/about';
import ItemDetail from './components/item-detail';

import "./css/main.css";
// import "bootstrap-social";
// import "./css/bootstrap-social.css";
// import "./css/main.css";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <div className="content col-lg-6 col-lg-offset-3">
                <div className="main">
                    <div className="row order-selector"></div>

                    <Route exact path="/" component={App} />
                    <Route path="/detail/:id" component={ItemDetail} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </div>
    </BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();
