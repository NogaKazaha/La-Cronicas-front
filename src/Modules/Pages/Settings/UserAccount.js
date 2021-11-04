import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/Settings.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function Settings() {
  return (
    <div>
      <Helmet>
        <title>Settings &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Make new you</h1>
        <div className={style.inputs}>
          <input type="text" placeholder="Enter new username"></input>
          <button>Submit</button>
        </div>
    </div>
  );
}
export default Settings;