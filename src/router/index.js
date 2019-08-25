import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AppDetail from "../pages/app_detail/AppDetail";
import SearchResult from "../pages/search_result/SearchResult";
import Profile from "../pages/profile/Profile";
import Find from "../pages/find/Find";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/app/detail" component={AppDetail} />
      <Route exact path="/search/result" component={SearchResult} />
      <Route exact path="/find" component={Find} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
