import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/CreateEvent.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import Select from 'react-select'
import axios from "axios"
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import toast, { Toaster } from "react-hot-toast"
function EditEvent() {
  const [value, onChange] = useState(new Date());
  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  const [eventData, setEvent] = useState([])
  let [selectedOptions, setSelectedOptions] = useState();
  const options = [
    { value: 'reminder', label: 'Reminder' },
    { value: 'arrangement', label: 'Arrangement' },
    { value: 'task', label: 'Task' }
  ]
  const params = useParams()
  const handleChange = (option) => {
    setSelectedOptions(option.value);
  }
  useEffect(() => {
    const api = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			url: `http://127.0.0.1:8000/api/events/show/${params.id}`,
		}
    axios.get(api.url, api.data, {
			headers: api.headers,
		})
    .then((response) => setEvent(response.data))
  },[])
  const handleClick = () => {
    if(title == "") {
      title = eventData.title
    }
    if(description == "") {
      description = eventData.description
    }
    if(selectedOptions == undefined) {
      selectedOptions = eventData.category
    }
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
        url: `http://127.0.0.1:8000/api/events/update/${params.id}`,
      }
    const event = axios.patch(api.url, api.data, {
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
  return (
    <div>
      <Helmet>
        <title>Edit event &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Change your event how you want</h1>
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
          <span className={style.warnign}>This time will be used as a new time for event. Check it</span>
          <div style={{width: '600px'}}>
            <DateTimePicker
              className={style.datepicker}
              onChange={onChange}
              value={value}
            />
          </div>
          <button onClick={(e) => handleClick(e.preventDefault())}>Submit</button>
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
export default EditEvent;