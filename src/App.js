import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import WelcomePage from './Modules/Welcome/Welcome'
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ WelcomePage }/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
