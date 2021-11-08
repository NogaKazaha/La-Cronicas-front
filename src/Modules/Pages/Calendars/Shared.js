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
        <title>Shared calendars &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
      <h1>Shared calendars</h1>
      <div className={style.outerCalendars}>
        <div className={style.allCalendars}>
          <div className={style.calendarsList}>
              <div className={style.calendar}>
                <h1>Shared calendar</h1>
                <div className={style.info}>
                  <span>Events: </span>
                  <span>Holidays: </span>
                  <span>Created</span>
                </div>
                <div>
                  <Link to='/calendars/1'>
                    Open calendar
                  </Link>
                  <Link to='/calendars/edit/1'>
                    Edit
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