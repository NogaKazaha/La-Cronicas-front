import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/Calendars.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function Shared() {
  return (
    <div className={style.calendars}>
      <Helmet>
        <title>Calendars &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
      <h1>Your calendars</h1>
      <div className={style.outerCalendars}>
        <div className={style.allCalendars}>
          <div className={style.addButton}>
            <button>Add new calendar</button>
          </div>
          <div className={style.calendarsList}>
              <div className={style.calendar}>
                <h1>My calendar</h1>
                <div className={style.info}>
                  <span>Events: </span>
                  <span>Holidays: </span>
                  <span>Created</span>
                </div>
                <div>
                  <Link to='/calender/1'>
                    Open calendar
                  </Link>
                </div>
              </div>   
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shared;