import React, { useState } from 'react';

const FigmaTool = () => {
    const [headingSize, setheadingSize] = useState(0.5);
    const [paragraphSize, setParagraphSize] = useState(0.5);
    const [backColor, setbackColor] = useState("black");
    const [color, setColor] = useState("white");

    const increaseSize = () => {
        setheadingSize(headingSize => headingSize + 0.5)
    }
    const decreaseSize = () => {
        headingSize <= 0.5 ? setheadingSize(0.5) : setheadingSize(headingSize - 0.5)
    }

    const paraincreaseSize = () => {
        setParagraphSize(paragraphSize => paragraphSize + 0.5)
    }
    const paradecreaseSize = () => {
        paragraphSize <= 0.5 ? setParagraphSize(0.5) : setParagraphSize(paragraphSize - 0.5)
    }
    const divStyling = () => {
        setColor("rgb(220, 0, 78)");
        setbackColor("grey");
    }
    return (
        <div className="container">
            <h3>Figma Tool</h3>
            <span>Increase or decrease height of box</span>
            <div>
                <h5>Heading</h5>
                <button onClick={increaseSize}>+</button>
                <span>{headingSize}</span>
                <button onClick={decreaseSize}>-</button>
            </div>
            <div>
                <h5>paragraph Size</h5>
                <button onClick={paraincreaseSize}>+</button>
                <span>{paragraphSize}</span>
                <button onClick={paradecreaseSize}>-</button>
            </div>
            <div className="styles">
                <div onClick={divStyling}>
                    Check me
              </div>
            </div>
            <div style={{ background: `${backColor}`, color: `${color}`, width: "auto", height: "20vh", padding: "2rem" }}>
                <h1 style={{ fontSize: `${headingSize}rem` }}>This is a sample heading</h1>
                <p style={{ fontSize: `${paragraphSize}rem` }} >
                    Hi! I am a paragraph
                </p>
            </div>
            <button>
                Css
            </button>
            <div></div>
        </div >
    )
}
export default FigmaTool;