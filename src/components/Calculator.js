import React from "react";
import { Link } from 'gatsby'
const Calculator = () => {
    return (
        <main className="calculator">

            <div className="calculator-box">
                <h1 className="heading-1-light">Mortage calculator</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="calculator-text-box">
                <h1 className="heading-1">Try our awesome <br /> Calculator</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <Link className="button-normal" to="/">Register</Link>
            </div>

        </main>
    )
}

export default Calculator;