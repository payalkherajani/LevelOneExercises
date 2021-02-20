import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const addHandler = () => {
        setCount(count => count + 1);    //Why not? setCount(count+1);
    }

    const substractHandler = () => {
        count <= 0 ? (setCount(0)) : (setCount(count => count - 1));
    }

    return (
        <div className="counter-div">
            <h3>Counter</h3>
            <button onClick={addHandler}>+</button>
            <span>{count}</span>
            <button onClick={substractHandler}>-</button>
        </div>
    )
}

export default Counter;