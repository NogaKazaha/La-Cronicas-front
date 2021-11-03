import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import style  from '../../../Styles/Login.module.scss'
import { LoginSVG } from '../../../Items/JSX/Login'
function Login() {
  return (
    <div className={style.login}>
      <Helmet>
        <title>Sign In &#8739; La Cronicas</title>
      </Helmet>
      <Header />
        <h1>Have an account? Login and continue using our app</h1>
        <div className={style.content}>
          <div className={style.inputs}>
            <input type='email' placeholder='Enter your email'></input>
            <input type='password' placeholder='Enter your password'></input>
            <button>Sign In</button>
            <span>Don't have an account? <Link to='/sign_up'>Join us!</Link></span>
            <span>Forgot your password? <Link to='/reset_pass'>Reset it!</Link></span>
          </div>
          <div className={style.svg}>
            <LoginSVG />
          </div>
        </div>
      <Footer />
    </div>
  );
}
export default Login;