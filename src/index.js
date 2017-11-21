import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './components/About';
import NoMatch from './components/NoMatch';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<IndexRoute component={Index} />*/}
            <Route path="about" component={About}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
