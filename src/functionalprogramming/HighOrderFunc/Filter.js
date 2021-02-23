import React, { useState } from 'react'

const Filter = () => {
    const [arr, setArr] = useState([1, 8, 5, 70, 96, 58, 3, 7]);
    const numlessthanten = (num) => {
        if (num < 10) {
            return true
        }
        return false
    }
    const myfilter = (numlessthanten) => {
        const uparr = arr.filter(n => numlessthanten(n));
        setArr(uparr);
    }
    console.log(arr);
    return (
        <div>
            <button onClick={() => myfilter(numlessthanten)}>Filter</button>
        </div>
    )
}


export default Filter;