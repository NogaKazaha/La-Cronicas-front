import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/EditCalendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function EditCalendar() {
  return (
    <div>
      <Helmet>
        <title>Edit Calendars &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new name for your calendar</h1>
        <div className={style.inputs}>
          <input type="text" placeholder="Enter new calendar title"></input>
          <button>Submit</button>
          <button>Delete this calendar</button>
        </div>
    </div>
  );
}
export default EditCalendar;