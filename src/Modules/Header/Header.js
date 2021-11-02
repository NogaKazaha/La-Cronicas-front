import React from 'react';
import { Link } from 'react-router-dom'
import { Logo } from '../../Items/JSX/Logo'
import style from '../../Styles/Header.module.scss'

function Header() {
  return(
    <div className={style.header}>
      <Link to="/">
        <div className={style.logoDiv}>
          <Logo />
          La Cronicas
        </div>
      </Link>
      <div>
        <Link to="sign_in">Sign in</Link>
      </div>    
    </div>
  );
}
export default Header;