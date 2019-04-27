import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Test from './routes/Test';
import Curved from './components/Curved';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
				<Route path="/test"  component={Test} />
				<Route path="/curved"  component={Curved} />
				
      </Switch>
    </Router>
  );
}

export default RouterConfig;
