import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import WelcomePage from './Modules/Welcome/Welcome'
import Login from './Modules/Pages/Login/Login'
import Register from './Modules/Pages/Register/Register'
import ResetPassword from './Modules/Pages/ResetPass/ResetPass';
import ResetPasswordToken from './Modules/Pages/ResetPass/ResetPassToken';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ WelcomePage }/>
          <Route path="/sign_in" exact component={ Login }/>
          <Route path="/sign_up" exact component={ Register }/>
          <Route path="/reset_pass" exact component={ ResetPassword }/>
          <Route path="/reset_pass/:token" exact component={ ResetPasswordToken }/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
