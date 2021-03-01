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
    const returnobjects = () => {
        const newarr = arr.map(a => ({ a }));
        console.log(newarr);
    }
    const myfunction = (totalvalue, currentvalue) => {
        return totalvalue + currentvalue;
    }
    const calculate = () => {
        const op = arr.reduce(myfunction, 0);
        console.log(op);
    }
    console.log(arr);
    return (
        <div>
            <button onClick={() => myfilter(numlessthanten)}>Filter</button>
            <button onClick={returnobjects}>Return object for every element in array</button>
            <button onClick={calculate}>CalculateSum</button>
        </div>
    )
}


export default Filter;

//blahhh