import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useHistory, useParams } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Cookies from 'js-cookie';
import style  from '../../../Styles/ShareCalendar.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function ShareCalendar() {
  const params = useParams()
  const [shareId, setShare] = useState("")
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
      url: `http://127.0.0.1:8000/api/calendars/share/${params.id}/${shareId}`,
    }
    const update = axios.post(api.url, null, {
      headers: api.headers,
    })
    const promise = toast.promise(update, {
      loading: "Sharing your calendar",
      success: (response) => {
        history.push('/shared')
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
        <title>Share Calendars &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Share your calendar with friends</h1>
        <div className={style.inputs}>
          <input 
            type="text" 
            placeholder="Enter ShareId of the user to add"
            name='shareId'
            value={shareId}
            onChange={(e) => setShare(e.target.value)}
            required
          />
          <button onClick={(e) => handleClick(e.preventDefault())}>Share</button>
        </div>
    </div>
  );
}
export default ShareCalendar;