import React from "react";
import { Switch, Route, Link, Redirect } from "wouter";
import { ImagesContextProvider } from "context/ImagesContext";
import Detail from "pages/Detail/Detail";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Home from "pages/Home/Home";
import SearchResults from "pages/SearchResults/SearchResults";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Link to="/" title="Home-Images">
        <figure className="app-logo">
          <img alt="Images logo" src="/logo.png" />
        </figure>
      </Link>
      <ImagesContextProvider>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/image/:id" />
          <Route component={ErrorPage} path="/404" />
          <Redirect to="/404" />
        </Switch>
      </ImagesContextProvider>
    </div>
  );
}

export default App;
