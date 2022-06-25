import React from "react";
import { Link } from 'gatsby'


const Header = () => {
    return (
        <main className="header">
            <nav className="header-nav">
                <div className="logo-header">
                    <div className="logo-wrapper-header"><span className="logo-icon">K</span></div>
                    <span className="logo-text-header">Kinka<br />Finance</span>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Calculator</Link>
                    <Link to="/" className="nav-link">Service</Link>
                </div>
            </nav>
        </main>
    )
}

export default Header;