import React from 'react';
import { Switch, Route } from 'react-router-dom';

import News from './pages/News';
import NewsContent from './pages/NewsContent';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={News} />
    <Route path="/news/:slug" component={NewsContent} />
  </Switch>
);

export default Routes;
