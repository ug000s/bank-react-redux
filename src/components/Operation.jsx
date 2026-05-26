import { deposit, withdraw } from "../actions/accountAction.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(0)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            {/* the same input for both withdraw and deposit */}
            {/* <input type="number" min="0" /> */}
            <input type={"number"} min={0} value={sum} onChange={e => setSum(+e.target.value)} />    
            <button onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
    )
}

export default Operation