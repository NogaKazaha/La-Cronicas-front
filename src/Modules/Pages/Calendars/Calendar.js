import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import style  from '../../../Styles/Calendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import '../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)
function OpenedCalendar() {
  return (
    <div className={style.calendars}>
      <Helmet>
        <title>Calendar &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
      <div className={style.calendarDiv}>
        <div className={style.calendar}>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            views={['month']}
            style={{ height: 600 }}
          />
        </div>
        <div className={style.events}>
          <h1>Events list for date</h1>
          <div className={style.eventsList}>
            <div className={style.event}>
              <div className={style.info}>
                <span>Event</span>
                <span>Time</span>
                <Link to='/events/1'>
                  Open
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OpenedCalendar;