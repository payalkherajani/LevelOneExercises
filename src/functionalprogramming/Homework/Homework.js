import React, { useState } from 'react'

const Homework = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]);
    const [arrS, setArrS] = useState(['apple', 'orange', 'mango', 'grapes', 'sss'])
    const getSum = (a, c) => {
        return a + c;
    }
    const oddNumSum = () => {
        const oddnumbersarray = arr.filter(a => a % 2 !== 0);
        const result = oddnumbersarray.reduce(getSum, 0);
        console.log("sum of odd numbers in array is ", result)
    }
    const oddIndices = () => {
        const oddIndicesNumber = arr.filter((a, index) => index % 2 !== 0);
        const result = oddIndicesNumber.reduce(getSum, 0);
        console.log("sum of numbers at odd indices in array  ", result)
    }
    const biggestNumber = () => {
        const result = Math.max(...arr);
        console.log("Biggest number in array", result);
    }
    const divisiblebyten = () => {
        const divisible = arr.filter(a => a % 10 === 0);
        console.log("Divisible by 10", divisible);
    }
    const increment = () => {
        const result = arr.map((a) => {
            if (a % 2 === 0) {
                return a - 1;
            }
            else {
                return a + 1;
            }
        })
        console.log("Odd numbers are incremented by 1 and even are decremnted by 1", result);
    }
    const sum = () => {
        const odd = arr.filter((a) => a % 2 !== 0);
        const oddsum = odd.reduce(getSum, 0);
        const even = arr.filter((a) => a % 2 === 0);
        const evensum = even.reduce(getSum, 0);
        const result = {
            oddsum,
            evensum
        }
        console.log("Odd sum and even sum object", result);
    }


    const stringarray = () => {
        const vowelstring = arrS.filter(item => item.match(/[aeiou]/gi));
        console.log("strings containing vowels", vowelstring);
        const numberofcharacter = arrS.map((item) => ({
            [item]: item.length
        }));
        console.log("Number of character in string", numberofcharacter);
    }
    return (
        <div>
            <button onClick={oddNumSum}>Sum of odd Numbers</button>
            <button onClick={oddIndices}>Sum of numbers at odd indices</button>
            <button onClick={biggestNumber}>Biggest Number in array</button>
            <button onClick={divisiblebyten}>Number divisible by 10</button>
            <button onClick={increment}>Incremented game</button>
            <button onClick={sum}>Sum of odd and even numbers</button>
            <button onClick={stringarray}>String of array</button>
        </div>
    )
}

export default Homework;