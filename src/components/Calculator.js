import React from "react";
import { Link } from 'gatsby'
import Slider, { forMatCurrency } from "./Slider";
import useMortage from "../hook/mortageHook";


const Calculator = () => {
    const [state, dispatch] = useMortage();
    console.log(state)
    const setValue = (type, value) => {
        dispatch({ type, value })
    }


    return (
        <main className="calculator">

            <div className="calculator-box">
                <h1 className="heading-1-light">Mortage calculator</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="mortage-container">
                    <Slider title="Purchase Price" value={state.purchasePrice} unit="$" setValue={setValue.bind(null, "purchasePrice")} min={100} max={900000} />
                    <Slider title="Down Payment" value={state.downPayment} unit="$" setValue={setValue.bind(null, "downPayment")} min={1} max={state.purchasePrice} />
                    <Slider title="Repayment Time" value={state.repaymentTime} unit="year" setValue={setValue.bind(null, "repaymentTime")} min={0} max={65} />
                    <Slider title="Interest Rate" value={state.interestRate} unit="%" setValue={setValue.bind(null, "interestRate")} min={0} max={12} />

                </div>
                <p className="mortage-result">Loan amount: <span className="mortage-result-number">{forMatCurrency(state.purchasePrice - state.downPayment)}</span></p>
                <p className="mortage-result">Estimated repayment per month:<span className="mortage-result-number">{forMatCurrency(state.estimatePayPerMonth)}</span></p>
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