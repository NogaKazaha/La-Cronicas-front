import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import style  from '../../../Styles/Register.module.scss'
import { RegisterSVG } from '../../../Items/JSX/Register'
function Register() {
  return (
    <div className={style.register}>
      <Helmet>
        <title>Sign Up &#8739; La Cronicas</title>
      </Helmet>
      <Header />
        <h1>Don't have account? Start working with us now!</h1>
        <div className={style.content}>
          <div className={style.inputs}>
            <input type='text' placeholder='Enter your username'></input>
            <input type='email' placeholder='Enter your email'></input>
            <input type='password' placeholder='Enter your password'></input>
            <button>Sign Up</button>
            <span>Have an account? <Link to='/sign_in'>Log in!</Link></span>
          </div>
          <div className={style.svg}>
            <RegisterSVG />
          </div>
        </div>
      <Footer />
    </div>
  );
}
export default Register;