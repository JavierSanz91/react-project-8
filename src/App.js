import React, {useState} from "react"

export default function App() {
    
    const [sum, setSum] = useState(0);

    const addFunction = () => {
        setSum(prevSum => prevSum + 1);
    }

    const subtractFunction = () => {
        setSum(prevSum => prevSum - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtractFunction}>–</button>
            <div className="counter--count">
                <h1>{sum}</h1>
            </div>
            <button className="counter--plus" onClick={addFunction}>+</button>
        </div>
    )
}

