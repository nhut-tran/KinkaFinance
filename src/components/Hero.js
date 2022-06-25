import React from "react";
import { Link } from 'gatsby'


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="heading-1-light">Financial Advisor For Next Level Happy Life!</h1>
                <p>Are you looking for amazing financial advisor services? Don’t worry! We got it for you!</p>
                <Link className="hero_button" to="/" />
                <Link className="button-header" to="/">Learn more</Link>
            </div>

        </div>
    )
}

export default Hero;