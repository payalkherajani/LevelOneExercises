import React, { useState } from 'react';
import TypeToast from './TypeToast';

const Toast = () => {
    const [val, setVal] = useState(" ");

    const hide = (itemval) => {
        setVal(itemval);
    }
    const evaluateToastType = (e) => {
        setVal(Number(e.target.value));
    }
    return (
        <div>
            <button value={0} onClick={(e) => evaluateToastType(e)}>Show Success Toast</button>
            <button value={1} onClick={(e) => evaluateToastType(e)}>Show Error Toast </button>
            <button value={2} onClick={(e) => evaluateToastType(e)}>Show Warning Toast </button>
            <div>
                {val === 0 ? (<TypeToast color="green" text="I am success toast" hide={hide} />) : val === 1 ? (<TypeToast color="red" text="I am error toast" hide={hide} />) : val === 2 ? (<TypeToast color="yellow" text="I am warning toast" hide={hide} />) : ("Select the type of toast")}
            </div>
        </div>
    )
}

export default Toast;