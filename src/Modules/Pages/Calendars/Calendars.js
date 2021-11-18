import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Cookies from 'js-cookie';
import style  from '../../../Styles/Calendars.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import CalendarList from './CalendarsList';
function Calendars() {
  const [calendars, setCalendars] = useState([])
  const history = useHistory()
  useEffect(() => {
    if(Cookies.get('login') == 'false' || !Cookies.get('login')) {
      history.push('/')
    }
    const api = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			url: `http://127.0.0.1:8000/api/users/show_all/${Cookies.get('user_id')}`,
		}
    axios.get(api.url, api.data, {
			headers: api.headers,
		})
    .then((response) => setCalendars(response.data))
  },[])
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
            <CalendarList calendars={calendars}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendars;