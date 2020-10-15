import React from "react";
import NewTemplateHeader from './components/new_template/header';
import NewTemplate from './views/new_templates';
import Header from './components/main/header';
import Main from './views/main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/templates">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

function About() {
  return (
    <>
      <NewTemplateHeader></NewTemplateHeader>
      <NewTemplate></NewTemplate>
    </>
  );
}