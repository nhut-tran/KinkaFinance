import React from "react";
import Sliders from 'rc-slider';
import 'rc-slider/assets/index.css';

export const forMatCurrency = (num) => {
    if (isNaN(num) | !isFinite(num) | num < 0) return 0
    return num.toLocaleString('en-US',
        {
            style: 'currency', currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })
}
const Slider = ({ value, setValue, max, min, title, unit, step }) => {
    return (
        <div className="slider">
            <p>{title}: {unit === "$" ?
                forMatCurrency(value) : `${value} ${unit}`}</p>
            <Sliders
                step={step}
                style={{ width: "240px" }}
                railStyle={{
                    backgroundColor: "#ffffff",
                    height: "14px",
                }}
                trackStyle={{
                    backgroundColor: "#FF8049",
                    height: "14px"
                }}
                handleStyle={
                    [{
                        backgroundColor: "#ffffff",
                        opacity: '1',
                        height: "23px",
                        width: "22.6px",
                        border: "4px solid #FF8049",

                    }]
                }
                onChange={(value) => setValue(value)}
                min={min} max={max} />
        </div>
    )

}

export default Slider