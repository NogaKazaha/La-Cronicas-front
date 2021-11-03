import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import style  from '../../../Styles/Reset.module.scss'
import { ResetSVG } from '../../../Items/JSX/Reset'
function ResetPassword() {
  return (
    <div className={style.reset}>
      <Helmet>
        <title>Reset Password &#8739; La Cronicas</title>
      </Helmet>
      <Header />
        <h1>Forgot your password? We will help you!</h1>
        <div className={style.content}>
          <div className={style.inputs}>
            <input type='email' placeholder='Enter your email'></input>
            <button>Send email</button>
            <span>Remembered password? <Link to='/sign_in'>Go back</Link></span>
          </div>
          <div className={style.svg}>
            <ResetSVG />
          </div>
        </div>
      <Footer />
    </div>
  );
}
export default ResetPassword;