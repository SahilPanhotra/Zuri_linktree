import React from 'react'
import zuri from "../assets/zuri_logo.svg"
import ingress from "../assets/Ingressive.svg"
import "./Footer.css";

function Footer() {
  return (
    <div>
        <footer>
    <div className="footer__container">
      <div className="footer__row">
        <div className="footer__wrapper">
        <img className='margin' src={zuri} alt="" />
        <p className='margin'>HNG Internship 9 Frontend Task</p>
        <img src={ingress} alt="" />
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer;