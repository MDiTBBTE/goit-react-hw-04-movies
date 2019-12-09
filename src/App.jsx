import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HmePages from "./Pages/HomePage/HomePage";
import Movies from "./Pages/Movies/Movies";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
import Reader from "../../goit-react-hw-04-reader/src/components/Reader/Reader";
import publications from "../../goit-react-hw-04-reader/src/components/2/publications.json.js.js";

const App = () => (
  <>
    <Reader items={publications} />
    <Nav />
    <Switch>
      <Route path="/" exact component={HmePages} />
      <Route path="/movies/:id" component={MovieDetailsPage} />
      <Route path="/movies?:query" component={Movies} />
      <Route path="/movies" component={Movies} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
