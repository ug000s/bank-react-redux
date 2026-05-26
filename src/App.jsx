import './App.css'
import Balance from './components/Balance'
import Operation from './components/Operation'
import { useState } from 'react'

function App() {

  const [balance, setBalance] = useState(0)

  const deposit = amount => setBalance(prevBalance => prevBalance + amount)
  const withdraw = amount => setBalance(prevBalance => prevBalance - amount > 0 ? prevBalance - amount : prevBalance)
  return (
    <div>
      <Balance balance={balance} />
      <Operation deposit={deposit} withdraw={withdraw} />
    </div>
  )
}

export default App
