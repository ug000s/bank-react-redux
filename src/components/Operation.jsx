import { deposit, withdraw } from "../actions/accountAction.js";
import { store } from "../configureStore/store.js";
import { useState } from "react";

const Operation = () => {
    const [sum, setSum] = useState(0)
    return (
        <div>
            <button onClick={() => store.dispatch(withdraw(sum))}>Withdraw</button>
            {/* the same input for both withdraw and deposit */}
            {/* <input type="number" min="0" /> */}
            <input type={"number"} min={0} value={sum} onChange={e => setSum(+e.target.value)} />    
            <button onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div>
    )
}

export default Operation