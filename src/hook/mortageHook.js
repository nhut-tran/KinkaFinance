import { useReducer } from "react";

const initialState = {
    purchasePrice: 0,
    downPayment: 0,
    repaymentTime: 0,
    interestRate: 0,

    estimatePayPerMonth: 0
};
const calculatePayPerMonth = ({
    purchasePrice,
    downPayment,
    repaymentTime,
    interestRate,
    estimatePayPerMonth
}) => {

    const convertedInterestRate = interestRate / 100 / 12;
    const numberPayTime = repaymentTime * 12;
    const firstPartFormular = purchasePrice - downPayment
    const seconPartFormular = convertedInterestRate * ((1 + convertedInterestRate) ** numberPayTime)
    const thirdPartFormular = (((1 + convertedInterestRate) ** numberPayTime) - 1)
    estimatePayPerMonth = (firstPartFormular * (seconPartFormular / thirdPartFormular))




    return {
        purchasePrice,
        downPayment,
        repaymentTime,
        interestRate,
        estimatePayPerMonth
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "purchasePrice":
            return calculatePayPerMonth({ ...state, [action.type]: action.value })
        case "downPayment":
            return calculatePayPerMonth({ ...state, [action.type]: action.value })
        case "repaymentTime":
            return calculatePayPerMonth({ ...state, [action.type]: action.value })
        case "interestRate":
            return calculatePayPerMonth({ ...state, [action.type]: action.value })
        default:
            return state;
    }
}
const useMortage = () => useReducer(reducer, initialState);

export default useMortage

