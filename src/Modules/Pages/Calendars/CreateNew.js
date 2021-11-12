import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Cookies from 'js-cookie';
import style  from '../../../Styles/CreateCalendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function CreateNewCalendar() {
  const [title, setTitle] = useState("")
  const history = useHistory()
  if(Cookies.get('login') == 'false' || !Cookies.get('login')) {
    history.push('/')
  }
  const handleClick = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: 'Bearer' + Cookies.get('token'),
      },
      data: {
        title: title,
      },
      url: `http://127.0.0.1:8000/api/calendars/create`,
    }
    const create = axios.post(api.url, api.data, {
      headers: api.headers,
    })
    const promise = toast.promise(create, {
      loading: "Creating new calendar",
      success: (response) => {
        return response.data.message
      },
      error: (error) => {
        return error.response.data.message
      },
    })  
  }
  return (
    <div>
      <Helmet>
        <title>Create new calendar &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new calendar for any needs</h1>
        <div className={style.inputs}>
          <input 
            type="text" 
            placeholder="Enter calendar title"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button onClick={(e) => handleClick(e.preventDefault())}>Submit</button>
        </div>
    </div>
  );
}
export default CreateNewCalendar;