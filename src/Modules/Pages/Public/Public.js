import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style  from '../../../Styles/Public.module.scss'
import CalendarsHeader from '../../Header/CalendarsHeader';
function Public() {
  return (
    <div>
      <Helmet>
        <title>Public Account &#8739; La Cronicas</title>
      </Helmet>
      <CalendarsHeader />
        <h1>Here you can check your public information</h1>
        <div className={style.outerinfo}>
          <div className={style.info}>
            <span>Username: NogaKazaha</span>
            <span>Email: nogakazahawork@gmail.com</span>
            <span>ShareId: qweqweqw</span>
          </div>
        </div>
        <span>Want to chage your info? <Link to='/me'>Go to settings</Link></span>
    </div>
  );
}
export default Public;