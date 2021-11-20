import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import axios from "axios"
import moment from 'moment';
import Cookies from 'js-cookie';
import style  from '../../../Styles/Calendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventsList from '../Events/EventsList';
const localizer = momentLocalizer(moment)
function OpenedCalendar() {
  const [selectedDate, setDate] = useState(new Date())
  const [dateEvents, setDateEvents] = useState([])
  const [events, setEvents] = useState([])
  const [parsedEvents, setParsed] = useState([])
  const [mouseClick, setMouse] = useState(false)
  const history = useHistory()
  const params = useParams()
  function showAll() {
    setMouse(true)
    document.getElementById('shownh1').style = 'display: none'
    document.getElementById('shownbutton').style = 'display: none'
  }
  useEffect(() => {
    if(Cookies.get('login') == 'false' || !Cookies.get('login')) {
      history.push('/')
    } 
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      url: `http://127.0.0.1:8000/api/events/show/calendar/${params.id}`,
    }
    axios.get(api.url, api.data, {
      headers: api.headers,
    })
    .then((response) => setEvents(response.data))
    let resultId = events.map(event => event.id)
    let resultTitle = events.map(event => event.title)
    let resultDate = events.map(event => new Date(event.date))
    let allEvents = []
    for(let i = 0; i < events.length; i++) {
      const obj = {
        id: resultId[i],
        title: resultTitle[i],
        allDay: true,
        start: resultDate[i],
        end: resultDate[i]
      }
      allEvents.push(obj)
      setParsed(allEvents)
    }
  },[mouseClick])
  function onSlot(slot) {
    setDate(slot.start)
    const year = slot.start.getFullYear()
    let month, date
    if(slot.start.getMonth() + 1 < 10) {
      month = '0' + (slot.start.getMonth() + 1)
    } else {
      month = slot.start.getMonth() + 1
    }
    if(slot.start.getDate() < 10) {
      date = '0' + slot.start.getDate()
    } else {
      date = slot.start.getDate()
    }
    const checkDate = `${year}-${month}-${date}`
    const api = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
      data: {
        date: checkDate
      },
			url: `http://127.0.0.1:8000/api/events/show/date/${params.id}`,
		}
    axios.post(api.url, api.data, {
			headers: api.headers,
		})
    .then((response) => {
      setDateEvents(response.data)
    })
  }
  function onEvent(event) {
    history.push(`/events/edit/${event.id}`)
  }
  return (
    <div className={style.calendars}>
      <Helmet>
        <title>Calendar &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
      <div className={style.calendarDiv}>
        <div className={style.calendar}>
          <Calendar
            events={parsedEvents}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            views={['month']}
            style={{ height: 600 }}
            selectable
            onSelectSlot={slot => onSlot(slot)}
            onSelectEvent={(event) => onEvent(event)}
          />
        </div>
        <div className={style.events}>
          <h1 id='shownh1'>To show events in calendar click the button</h1>
          <button id='shownbutton' onClick={() => showAll()}>Show all events in calendar</button>
          <div>
            <h2>Events for {`${selectedDate.toLocaleDateString()}`}</h2>
          </div>
            <Link to={`/events/create/${params.id}`}>
              Create new event
            </Link>
          <EventsList events={dateEvents}/>
        </div>
      </div>
    </div>
  );
}
export default OpenedCalendar;