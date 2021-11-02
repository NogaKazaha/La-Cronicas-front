import React from 'react';
import { Logo } from '../../Items/JSX/Logo'
import style from '../../Styles/Footer.module.scss'
import { GitHub } from '../../Items/JSX/GitHub'
import { Telegram } from '../../Items/JSX/Telegram'
import { LinkedIn } from '../../Items/JSX/LinkedIn'
function Footer() {
  return(
    <div className={style.footer}>
      <div className={style.logoDiv}>
        <Logo />
        <span>La Cronicas</span>
        <div className={style.socialsDiv}>
          <a href='https://github.com/NogaKazaha'>
            <GitHub />
          </a>
          <a href='https://t.me/noga_kazaha'>
            <Telegram />
          </a>
          <a href='https://www.linkedin.com/in/olehsavich/'>
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className={style.contacts}>
        <span>Phone: +38(067)-129-80-21</span>
        <span>Email: oleg.savich2001@gmail.com</span>
      </div>
    </div>
  );
}
export default Footer;