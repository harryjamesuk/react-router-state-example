import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from "./Page";

/**
 * This describes a simple React App with one route "/".
 * It currently has no constraints though these can be added by adding attributes "exact strict" to the Route tag.
 */
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" component={Page} />
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(
    App(),
    document.getElementById('root')
);