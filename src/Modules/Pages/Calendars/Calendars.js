import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/Calendars.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function Calendars() {
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
            <Link to='/calendars/create'>
              Create new calendar
            </Link>
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
                  <Link to='/calendars/1'>
                    Open calendar
                  </Link>
                  <Link to='/calendars/edit/1'>
                    Edit
                  </Link>
                  <Link to='/calendars/share/1'>
                    Share
                  </Link>
                </div>
              </div>   
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendars;