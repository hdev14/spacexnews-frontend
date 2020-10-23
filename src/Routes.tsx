import React, { Suspense }from 'react';
import { Switch, Route } from 'react-router-dom';

const News = React.lazy(() => import('./pages/News'));
const CreateNews = React.lazy(() => import('./pages/CreateNews'));
const NewsContent = React.lazy(() => import('./pages/NewsContent'));
const Users = React.lazy(() => import('./pages/Users'));

const Routes = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route exact path="/" component={News} />
      <Route path="/create/news" component={CreateNews} />
      <Route path="/news/:slug" component={NewsContent} />
      <Route path="/users" component={Users} />
    </Switch>
  </Suspense>
);

export default Routes;
