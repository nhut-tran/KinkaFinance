import React from "react";
import check from '../assets/images/check.png'

const Feature = () => {
    return (
        <main className="feature">
            <h1 className="heading-1">High Quality OutPut, <br /> Awesome Service</h1>
            <div className="feature_boxes">
                <div className="feature_box">
                    <span><img className="check_icon" src={check} alt="check" /></span>
                    <h2>Advisor</h2>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed doeiusmod tempor</p>
                </div>
                <div className="feature_box">

                    <span><img className="check_icon" src={check} alt="check" /></span>
                    <h2>Agency</h2>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed doeiusmod tempor</p>
                </div>
                <div className="feature_box">
                    <span><img className="check_icon" src={check} alt="check" /></span>
                    <h2>Management</h2>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed doeiusmod tempor</p>
                </div>
            </div>
        </main>
    )
}

export default Feature;