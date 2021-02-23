import React, { useState } from 'react'

const PureQue = () => {
    const [obj, setObj] = useState({});
    const birthday = (myobj) => {
        setObj({ ...obj, age: myobj.age + 1, name: myobj.name });
        //So myobj is not change a new object is created and set ib obj state
    }

    return (
        <div>
            <button onClick={() => birthday({ name: "payal", age: 23 })}>Pure function</button>
        </div>
    )
}

export default PureQue;