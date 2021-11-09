import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/CreateEvent.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
import Select from 'react-select'
function CreateNewEvent() {
  const [value, onChange] = useState(new Date());
  const options = [
    { value: 'reminder', label: 'Reminder' },
    { value: 'arrangement', label: 'Arrangement' },
    { value: 'task', label: 'Task' }
  ]
  return (
    <div>
      <Helmet>
        <title>Create new event &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new event to participate</h1>
        <div className={style.inputs}>
          <input type="text" placeholder="Enter event title"></input>
          <input type="text" placeholder="Enter event description"></input>
          <div style={{width: '600px'}}>
            <Select
              className={style.select}
              options={options} 
            />
          </div >
          <div style={{width: '600px'}}>
            <DateTimePicker
              className={style.datepicker}
              onChange={onChange}
              value={value}
            />
          </div>
          <button>Submit</button>
        </div>
    </div>
  );
}
export default CreateNewEvent;