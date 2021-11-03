import React from 'react';
import { Helmet } from 'react-helmet'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import style from '../../Styles/Welcome.module.scss'
import { Manage } from '../../Items/JSX/ManageTime'
function WelcomePage() {
  return (
    <div className={style.welcome}>
      <Helmet>
        <title>Welcome &#8739; La Cronicas</title>
      </Helmet>
      <Header />
        <div className={style.content}>
          <h1>Manage your life easier with La Cronicas</h1>
          <Manage />
          <span>Everything you need in one app: calendars, events, sharing</span> 
          <Link to='sign_in' className={style.button}>Start using</Link>
        </div>
      <Footer />
    </div>
  );
}
export default WelcomePage;