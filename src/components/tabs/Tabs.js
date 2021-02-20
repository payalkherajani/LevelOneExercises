import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const Tabs = () => {
    const [val, setVal] = useState("");
    const changeComponent = (e) => {
        setVal(Number(e.target.value))
    }
    return (
        <div>
            <h3>Swtich Tabs</h3>
            <button value={0} onClick={(e) => changeComponent(e)}>Home</button>
            <button value={1} onClick={(e) => changeComponent(e)}>About</button>
            <button value={2} onClick={(e) => changeComponent(e)}>Profile</button>
            <div>
                {
                    val === 0 ? (<Home />) : val === 1 ? (<About />) : val === 2 ? (<Profile />) : (<p>Select any one button</p>)
                }
            </div>
        </div>
    )
}

export default Tabs
