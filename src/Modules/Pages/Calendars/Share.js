import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/ShareCalendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function ShareCalendar() {
  return (
    <div>
      <Helmet>
        <title>Share Calendars &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Share your calendar with friends</h1>
        <div className={style.inputs}>
          <input type="text" placeholder="Enter ShareId of the user to add"></input>
          <button>Share</button>
        </div>
    </div>
  );
}
export default ShareCalendar;