import React from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">

                <StaticImage className="logo-footer-image" as="div" src="../assets/images/logo-footer.png" placeholder="TRACED_SVG" alt="logo" />
                <p>2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet</p>
                <div className="media">
                    <StaticImage className="footer-image" as="div" src="../assets/images/facebook.png" placeholder="TRACED_SVG" alt="facebook" />
                    <StaticImage className="footer-image" as="div" src="../assets/images/twitter.png" placeholder="TRACED_SVG" layout="CONSTRAINED" alt="twitter" />
                    <StaticImage className="footer-image" as="div" src="../assets/images/instagram.png" placeholder="TRACED_SVG" layout="CONSTRAINED" alt="instagram" />
                </div>
            </div>
            <div className="footer-nav-container">
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
        </div>
    )
}

export default Footer;