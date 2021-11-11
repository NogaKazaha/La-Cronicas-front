import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Cookies from 'js-cookie';
import { Logo } from '../../Items/JSX/Logo'
import style from '../../Styles/CalendarsHeader.module.scss'

function CalendarsHeader() {
  const history = useHistory();
  const handleClick = () => {
    const api = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
        Authorization: 'Bearer' + Cookies.get('token'),
			},
			url: `http://127.0.0.1:8000/api/auth/logout`,
		}
    const login = axios.post(api.url, null, {
			headers: api.headers,
		})
    const promise = toast.promise(login, {
			loading: "Logging out process",
			success: () => {
        Cookies.remove('login')
        Cookies.remove('token')
        history.push('/')
			},
			error: (error) => {
				return error.response.data.message
			},
		})   
  }
  return(
    <div className={style.header}>
      <Link to="/calendars">
        <div className={style.logoDiv}>
          <Logo />
          La Cronicas
        </div>
      </Link>
      <div>
        <Link to="/calendars">Calendars</Link>
        <Link to="/shared">Shared calendars</Link>
        <Link to="/account">Public Account</Link>
        <Link to="/me">Settings</Link>
      </div> 
      <div>
        <Link onClick={(e) => handleClick(e.preventDefault())}>Log out</Link>
      </div>
      <Toaster
            position='bottom-center'
            toastOptions={{
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
              duration: 4000,
            }}
          />   
    </div>
  );
}
export default CalendarsHeader;