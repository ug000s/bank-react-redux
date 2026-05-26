import { useSelector } from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.balance)

    return (
        <div className="text-center">
            <h1 className={"text-8xl font-bold text-[gold]"}>Iron bank of Braavos</h1>
            <h2 className="text-7xl text-[firebrick]">Balance: {balance}</h2>
        </div>
    )
}

export default Balance