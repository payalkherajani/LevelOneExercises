import React from 'react'

const TypeToast = ({ color, text, hide }) => {
    return (
        <div style={{ color: color }}>
            {text}
            <button onClick={() => hide("")}>Hide toast</button>
        </div>
    )
}

export default TypeToast;