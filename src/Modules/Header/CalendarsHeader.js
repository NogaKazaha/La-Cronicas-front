import React from 'react';
import { Link } from 'react-router-dom'
import { Logo } from '../../Items/JSX/Logo'
import style from '../../Styles/CalendarsHeader.module.scss'

function CalendarsHeader() {
  return(
    <div className={style.header}>
      <Link to="/calendars">
        <div className={style.logoDiv}>
          <Logo />
          La Cronicas
        </div>
      </Link>
      <div>
        <Link to="/calendars">Calendars</Link>
        <Link to="/shared">Shared calendars</Link>
        <Link to="/account">Public Account</Link>
        <Link to="/me">Settings</Link>
      </div> 
      <div>
        <Link to="/">Log out</Link>
      </div>   
    </div>
  );
}
export default CalendarsHeader;