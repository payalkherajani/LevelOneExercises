import React from 'react'

const TypeToast = ({ color, text, hide }) => {
    return (
        <div>
            <h4 style={{ color: color }}>{text}</h4>
            <button onClick={() => hide("")}>Hide toast</button>
        </div>
    )
}

export default TypeToast;