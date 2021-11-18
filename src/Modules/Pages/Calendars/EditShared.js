import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Cookies from 'js-cookie';
import style  from '../../../Styles/EditCalendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import { useParams } from 'react-router-dom';
function EditSharedCalendar() {
  const params = useParams()
  const [title, setTitle] = useState("")
  const history = useHistory()
  const [calendars, setCalendars] = useState([])
  useEffect(() => {
    const api = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			url: `http://127.0.0.1:8000/api/calendars/show/${params.id}`,
		}
    axios.get(api.url, api.data, {
			headers: api.headers,
		})
    .then((response) => setCalendars(response.data))
  },[])
  if(Cookies.get('login') == 'false' || !Cookies.get('login')) {
    history.push('/')
  }
  const handleClick = () => {
    if(title == "") {
      toast.error("Please enter non empty string")
    }
    else {
      const api = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: 'Bearer' + Cookies.get('token'),
        },
        data: {
          title: title,
        },
        url: `http://127.0.0.1:8000/api/calendars/update/${params.id}`,
      }
      const update = axios.patch(api.url, api.data, {
        headers: api.headers,
      })
      const promise = toast.promise(update, {
        loading: "Updating your calendar",
        success: (response) => {
          history.push('/calendars')
          return response.data.message
        },
        error: (error) => {
          return error.response.data.message
        },
      })
    }  
  }
  const handleDel = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: 'Bearer' + Cookies.get('token'),
      },
      url: `http://127.0.0.1:8000/api/calendars/delete/${params.id}`,
    }
    const update = axios.post(api.url, null, {
      headers: api.headers,
    })
    console.log(update)
    const promise = toast.promise(update, {
      loading: "Deleting your calendar",
      success: (response) => {
        history.push('/calendars')
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
        <title>Edit Calendars &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new name for your calendar</h1>
        <div className={style.inputs}>
          <input 
            type="text" 
            placeholder="Enter new calendar title"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button onClick={(e) => handleClick(e.preventDefault())}>Submit</button>
          {
            calendars.status == false && 
              <button onClick={(e) => handleDel(e.preventDefault())}>Delete this calendar</button>
          }
        </div>
    </div>
  );
}
export default EditSharedCalendar;