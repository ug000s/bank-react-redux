import { useState } from 'react'

const Operation = ({ deposit, withdraw }) => {
    const [sum, setSum] = useState(0)
    return (
        <div>
            <button onClick={() => {withdraw(sum); setSum(0)}}>Withdraw</button>
            {/* the same input for both withdraw and deposit */}
            {/* <input type="number" min="0" /> */}
            <input type={"number"} min={0} value={sum} onChange={e => setSum(+e.target.value)} />    
            <button onClick={() => {deposit(sum); setSum(0)}}>Deposit</button>
            <h1>Operation</h1>
        </div>
    )
}

export default Operation