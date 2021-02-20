import React, { useState } from 'react';

const ToggleColor = () => {
    const [darkmode, setdarkmode] = useState(false);
    const toggle = () => {
        setdarkmode(!darkmode);
    }
    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            <div style={darkmode === true ? ({ color: "white", backgroundColor: "black" }) : ({})}>
                Can you see how the program works at this point? The first two lines give two memory locations their starting values: total will be used to build up the result of the computation, and count will keep track of the number that we are currently looking at. The lines using compare are probably the weirdest ones. The program wants to see whether count is equal to 11 to decide whether it can stop running. Because our hypothetical machine is rather primitive, it can only test whether a number is zero and make a decision based on that. So it uses the memory location labeled compare to compute the value of count - 11 and makes a decision based on that value. The next two lines add the value of count to the result and increment count by 1 every time the program has decided that count is not 11 yet.
            </div>
        </div>
    )
}

export default ToggleColor;