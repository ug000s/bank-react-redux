import { DEPOSIT, WITHDRAW } from "../actions/accountActions";
import { PUT_QUOTE } from "../actions/quoteActions";

/*
type State = {
    balance: number,
    quote: string
}
    accountReducer
    - state: current balance
    - action: action to perform
    - returns: new balance
*/
// state = { balance: 0 }, action = { type: 'DEPOSIT', payload: 10 } -> {balance: 10}
export const accountReducer = (state, action) => {
    // console.log('accountReducer', state, action)
    switch (action.type) {
        case DEPOSIT:
            // return new state with updated balance - spread operator to copy existing state
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            // return new state with updated balance - spread operator to copy existing state
            return { 
                ...state, 
                balance: state.balance - action.payload >= 0 ? state.balance - action.payload : state.balance 
            }
        case PUT_QUOTE:
            return {
                ...state,
                quote: action.payload
            }
        default:
            // return current state
            return state
    }
}