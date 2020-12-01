import React from "react";
import HomePage from "./components/HomePage";
// used to connect Redux to React & takes in the store as a prop
import { Provider } from "react-redux";
import store from "./store";
import { Route, HashRouter, Switch } from "react-router-dom";
//
import Note from "./components/notes/Note";
import Login from "./components/Login";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/note" component={Note} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute path="/" component={Dashboard} /> */}
          <Route exact path="/" component={Login} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
