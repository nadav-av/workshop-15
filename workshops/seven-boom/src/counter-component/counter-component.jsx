import "./counter-component.css";
import {useState} from "react";

const CounterComponent = props => {
    const [counterValue, setCounterValue] = useState(0);
    return (
        <div className="counter-component">
            <button className="counter-component__button" onClick={() => setCounterValue(counterValue + 1)}>+</button>
            <div className="counter-component__value">{counterValue}</div>
            <button className="counter-component__button" onClick={() => setCounterValue(counterValue - 1)}>-</button>
        </div>
    )
}

export default CounterComponent;