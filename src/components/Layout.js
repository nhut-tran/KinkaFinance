import React from "react";
import "../assets/css/main.css"

const Layout = ({ children }) => {

    return (
        <div className="container">

            {children}

        </div>
    )
}

export default Layout;