import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Cookies from 'js-cookie';
import style  from '../../../Styles/Calendars.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import SharedList from './SharedList';
function Shared() {
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
			url: `http://127.0.0.1:8000/api/users/show_all/shared/${Cookies.get('user_id')}`,
		}
    axios.get(api.url, api.data, {
			headers: api.headers,
		})
    .then((response) => setCalendars(response.data))
  },[])
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
            <SharedList calendars={calendars}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shared;