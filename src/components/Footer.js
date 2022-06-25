import React from "react";
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <div className="logo-footer">
                    <div className="logo-wrapper-footer"><span className="logo-icon">K</span></div>
                    <span className="logo-text-footer">Kinka<br />Finance</span>
                </div>
                <p>2021 Award winning Finance Advisor <br /> and Lorem ipsum dolor sit amet</p>
                <div className="media">
                    <img src={facebook} alt="check" />
                    <img src={twitter} alt="check" />
                    <img src={instagram} alt="check" />
                </div>
            </div>
            <ul className="footer-nav">
                <li className="footer-nav-title">Location</li>
                <li><Link to="/">America</Link></li>
                <li><Link to="/">Asia</Link></li>
                <li><Link to="/">Europe</Link></li>
                <li><Link to="/">Africa</Link></li>
            </ul>
            <ul className="footer-nav">
                <li className="footer-nav-title">Contact</li>
                <li><Link to="/">About me</Link></li>
                <li><Link to="/">Team</Link></li>
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/">FAQ</Link></li>
            </ul>
            <ul className="footer-nav">
                <li className="footer-nav-title">Privacy</li>
                <li><Link to="/">Legal</Link></li>
                <li><Link to="/">Disclaimer</Link></li>
                <li><Link to="/">Terms</Link></li>
                <li><Link to="/">Company</Link></li>
            </ul>

        </div>
    )
}

export default Footer;