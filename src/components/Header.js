import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../assets/css/header.css"

const Header = () => {
    const [displaySmallNav, setDisplaySmallNav] = useState(false);
    return (
        <header className="header">
            <nav className="header-nav">
                <StaticImage className="logo-header" as="div" src="../assets/images/logo-header.png" placeholder="TRACED_SVG" alt="logo" />
                <div className="nav-links">
                    <Link to="/" className="nav-link">Calculator</Link>
                    <Link to="/" className="nav-link">Service</Link>
                </div>

                {
                    displaySmallNav && <div className="nav-links-small-screen">
                        <Link onClick={() => {
                            setDisplaySmallNav(!displaySmallNav)
                        }} to="/" className="nav-link-small-screen">Calculator</Link>

                        <Link
                            onClick={() => {
                                setDisplaySmallNav(!displaySmallNav)
                            }} to="/" className="nav-link-small-screen">Service</Link>
                    </div>
                }
                <div className="nav-link-button"
                    onClick={() => {
                        setDisplaySmallNav(!displaySmallNav)
                    }}>
                    <span className="nav-link-stick"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;