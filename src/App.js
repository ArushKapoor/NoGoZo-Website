import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
