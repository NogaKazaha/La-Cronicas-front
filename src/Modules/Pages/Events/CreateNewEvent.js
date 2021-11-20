import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast"
import style  from '../../../Styles/CreateEvent.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import Select from 'react-select'
import axios from "axios"
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
function CreateNewEvent() {
  const [value, onChange] = useState(new Date());
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedOptions, setSelectedOptions] = useState();
  const options = [
    { value: 'reminder', label: 'Reminder' },
    { value: 'arrangement', label: 'Arrangement' },
    { value: 'task', label: 'Task' }
  ]
  const params = useParams()
  const handleChange = (option) => {
    setSelectedOptions(option.value);
  }
  const handleClick = () => {
    if(title == "" || description == "" || selectedOptions == undefined || value == null) {
      toast.error("You need to fill in all fields")
    }
    else {
      const year = value.getFullYear()
      let month, date, hours, minutes, sec
      if(value.getMonth() + 1 < 10) {
        month = '0' + (value.getMonth() + 1)
      } else {
        month = value.getMonth() + 1
      }
      if(value.getDate() < 10) {
        date = '0' + value.getDate()
      } else {
        date = value.getDate()
      }
      if(value.getHours() < 10) {
        hours = '0' + value.getHours()
      } else {
        hours = value.getHours()
      }
      if(value.getMinutes() < 10) {
        minutes = '0' + value.getMinutes()
      } else {
        minutes = value.getMinutes()
      }
      if(value.getSeconds() < 10) {
        sec = '0' + value.getSeconds()
      } else {
        sec = value.getSeconds()
      }
      const newDate = `${year}-${month}-${date} ${hours}:${minutes}:${sec}`
      const api = {
        	headers: {
        		"Content-Type": "application/json",
        		Accept: "application/json",
            Authorization: 'Bearer' + Cookies.get('token'),
        	},
        	data: {
        		title: title,
        		description: description,
            category: selectedOptions,
            date: newDate
        	},
        	url: `http://127.0.0.1:8000/api/events/create/${params.id}`,
        }
        const event = axios.post(api.url, api.data, {
        	headers: api.headers,
        })
        const promise = toast.promise(event, {
          loading: "Creating event",
          success: (response) => {
            return response.data.message
          },
          error: (error) => {
            return error.response.data.message
          },
        })    
    } 
  }
  return (
    <div>
      <Helmet>
        <title>Create new event &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new event to participate</h1>
        <div className={style.inputs}>
          <input 
            type="text" 
            placeholder="Enter event title"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder="Enter event description"
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div style={{width: '600px'}}>
            <Select
              className={style.select}
              options={options}
              onChange={handleChange} 
            />
          </div >
          <div style={{width: '600px'}}>
            <DateTimePicker
              className={style.datepicker}
              onChange={onChange}
              value={value}
            />
          </div>
          <button onClick={(e) => handleClick(e.preventDefault())}>Submit</button>
          <Link to={`/calendars/${params.id}`}>Go back</Link>
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
    </div>
  );
}
export default CreateNewEvent;