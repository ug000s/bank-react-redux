import { deposit, withdraw } from "../actions/accountAction.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(0)
    const dispatch = useDispatch()

    return (
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg" 
            onClick={() => dispatch(withdraw(sum))}>
                Withdraw</button>
            <input className="text-center mx-2 border rounded-lg font-bold text-white" type={"number"} min={0} value={sum} onChange={e => setSum(+e.target.value)} />    
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg" 
            onClick={() => dispatch(deposit(sum))}>
                Deposit</button>
        </div>
    )
}

export default Operation