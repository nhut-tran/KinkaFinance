import React from "react";
import { Link } from 'gatsby'
import Slider, { forMatCurrency } from "./Slider";
import useMortage from "../hook/mortageHook";
import "../assets/css/calculator.css";

const Calculator = () => {
    const [state, dispatch] = useMortage();

    //pass this func to Slider component to manage state
    const setValue = (type, value) => {
        dispatch({ type, value })
    }


    return (
        <main className="calculator">

            <div className="calculator-box">
                <h1 className="heading-1-light">Mortage calculator</h1>
                <p className="calculator-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="slider-container">
                    <Slider title="Purchase Price" step={100} value={state.purchasePrice} unit="$" setValue={setValue.bind(null, "purchasePrice")} min={100} max={900000} />
                    <Slider title="Down Payment" step={100} value={state.downPayment} unit="$" setValue={setValue.bind(null, "downPayment")} min={0} max={
                        state.purchasePrice === 0 ? 0 : state.purchasePrice //control downpayment always <= purchaseprice
                    } />
                    <Slider title="Repayment Time" step={1} value={state.repaymentTime} unit="year" setValue={setValue.bind(null, "repaymentTime")} min={0} max={65} />
                    <Slider title="Interest Rate" step={1} value={state.interestRate} unit="%" setValue={setValue.bind(null, "interestRate")} min={0} max={12} />

                </div>
                <p className="mortage-result">Loan amount: <span className="mortage-result-number">{forMatCurrency(state.purchasePrice - state.downPayment)}</span></p>
                <p className="mortage-result">Estimated repayment per month: <span className="mortage-result-number">{forMatCurrency(state.estimatePayPerMonth)}</span></p>
            </div>
            <div className="calculator-text-box">
                <h1 className="heading-1">Try our awesome Calculator</h1>
                <p className="calculator-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <Link className="button button-calculator" to="/">Register</Link>
            </div>

        </main>
    )
}

export default Calculator;