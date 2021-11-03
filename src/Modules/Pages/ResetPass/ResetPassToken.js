import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import style  from '../../../Styles/Reset.module.scss'
import { ResetSVG } from '../../../Items/JSX/Reset'
function ResetPasswordToken() {
  return (
    <div className={style.reset}>
      <Helmet>
        <title>Reset Password &#8739; La Cronicas</title>
      </Helmet>
      <Header />
        <h1>Prepare new password and input it</h1>
        <div className={style.content}>
          <div className={style.inputs}>
            <input type='password' placeholder='Enter new password'></input>
            <button>Reset</button>
          </div>
          <div className={style.svg}>
            <ResetSVG />
          </div>
        </div>
      <Footer />
    </div>
  );
}
export default ResetPasswordToken;