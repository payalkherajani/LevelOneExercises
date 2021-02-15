import React, { useState } from 'react';

const CharacterCounter = () => {

    const [val, setVal] = useState("");

    const textareaChange = (e) => {
        if (val.length < 280) {
            setVal(e.target.value)
        }
        else {
            return
        }
    }
    return (
        <div className="character-Counter">
            <h3>Character Counter</h3>
            <textarea placeholder="Enter your post text" rows={5} onChange={textareaChange} value={val}></textarea>
            { val.length >= 280 ? (<> Exceeded the limit</>) : (" ")}
        </div>

    )
}

export default CharacterCounter;