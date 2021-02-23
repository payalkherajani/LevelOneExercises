import React, { useState } from 'react'

const Questions = () => {
    const [obj, setObj] = useState({ mumname: 'kanchan', myage: 23 });
    const [array, setArray] = useState(["white", "black", "blue", "orange", "yellow"])
    const calculateAgeDifference = () => {
        setObj({ ...obj, myage: obj.myage + 3 });
    }
    const addColors = () => {
        setArray([...array, "pink", "purple"]);
    }
    return (
        <div>
            <button onClick={calculateAgeDifference}>Age Difference</button>
            <button onClick={addColors}>Add Colors</button>
        </div>
    )
}

export default Questions;



// Do not change any data.Always return a new copy
// In javascript function arguments are reference to actual data