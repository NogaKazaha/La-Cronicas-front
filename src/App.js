import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import WelcomePage from './Modules/Welcome/Welcome'
import Login from './Modules/Pages/Login/Login'
import Register from './Modules/Pages/Register/Register'
import ResetPassword from './Modules/Pages/ResetPass/ResetPass';
import ResetPasswordToken from './Modules/Pages/ResetPass/ResetPassToken';
import Calendars from './Modules/Pages/Calendars/Calendars';
import Settings from './Modules/Pages/Settings/UserAccount';
import Public from './Modules/Pages/Public/Public';
import Shared from './Modules/Pages/Calendars/Shared';
import EditCalendar from './Modules/Pages/Calendars/Edit';
import ShareCalendar from './Modules/Pages/Calendars/Share';
import CreateNewCalendar from './Modules/Pages/Calendars/CreateNew';
import OpenedCalendar from './Modules/Pages/Calendars/Calendar';
import CreateNewEvent from './Modules/Pages/Events/CreateNewEvent';
import EditEvent from './Modules/Pages/Events/EditEvent';
import EditSharedCalendar from './Modules/Pages/Calendars/EditShared';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ WelcomePage }/>
          <Route path="/sign_in" exact component={ Login }/>
          <Route path="/sign_up" exact component={ Register }/>
          <Route path="/reset_pass" exact component={ ResetPassword }/>
          <Route path="/reset_pass/:token" exact component={ ResetPasswordToken }/>
          <Route path="/calendars" exact component={ Calendars }/>
          <Route path="/calendars/create" exact component={ CreateNewCalendar }/>
          <Route path="/calendars/:id" exact component={ OpenedCalendar }/>
          <Route path="/calendars/edit/:id" exact component={ EditCalendar }/>
          <Route path="/calendars/edit/shared/:id"  component={ EditSharedCalendar }/>
          <Route path="/calendars/share/:id" exact component={ ShareCalendar }/>
          <Route path="/events/create" exact component={ CreateNewEvent }/>
          <Route path="/events/edit/:id" exact component={ EditEvent }/>
          <Route path="/me" exact component={ Settings }/>
          <Route path="/account" exact component={ Public }/>
          <Route path="/shared" exact component={ Shared }/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
