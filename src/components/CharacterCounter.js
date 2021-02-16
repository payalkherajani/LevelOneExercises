import React, { useState } from 'react';

const CharacterCounter = () => {
    const [val, setVal] = useState("");
    const [count, setCount] = useState(0);

    const textareaChange = (e) => {
        if (val.length >= 280) {
            setCount(count - 1);
        }
        setVal(e.target.value)

    }
    return (
        <div className="character-Counter">
            <h3>Character Counter</h3>
            <textarea placeholder="Enter your post text" rows={5} onChange={textareaChange} value={val}></textarea>
            { val.length >= 280 ? (<> {count}</>) : (" ")}
        </div>

    )
}

export default CharacterCounter;