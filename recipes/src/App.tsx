import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navigationBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          key="navigation"
          path="/:navigation?"
          component={NavigationBar}
        />
      </Switch>
    </Router>
  );
}

export default App;
