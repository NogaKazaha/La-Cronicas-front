import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/EditCalendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function CreateNewCalendar() {
  return (
    <div>
      <Helmet>
        <title>Create new calendar &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new calendar for any needs</h1>
        <div className={style.inputs}>
          <input type="text" placeholder="Enter calendar title"></input>
          <button>Submit</button>
        </div>
    </div>
  );
}
export default CreateNewCalendar;