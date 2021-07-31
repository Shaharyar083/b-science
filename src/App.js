import React from 'react'
import { Route, Switch } from "react-router-dom";

// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;
