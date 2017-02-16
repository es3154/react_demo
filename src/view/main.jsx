
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute,
    hashHistory, browserHistory } from 'react-router';
import { App } from './app.jsx';
import { Welcome } from './welcome.jsx';
import { Repos } from './repos.jsx';
import { About } from './about.jsx';
import { ParamView } from './paramView.jsx';
import { FormView } from './formView.jsx';

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Welcome}/>
                    <Route path='repos' component={Repos}/>
                    <Route path='about' component={About}/>
                    <Route path='form' component={FormView}/>
                    <Route path='p/:name1/:name2' component={ParamView}/>
                </Route>
            </Router>
        );
    }
}

ReactDom.render(<Main/>,document.getElementById('hello'));