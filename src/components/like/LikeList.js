import React, { useState } from 'react';


const LikeList = () => {
    const [items, setItems] = useState([
        { key: "1", value: "apples", likes: 0 },
        { key: "2", value: "grapes", likes: 0 },
        { key: "3", value: "coconut", likes: 0 }
    ])

    const addLike = (i) => {
        const updatedlistItems = items.map(it => {
            if (it.key === i.key) {
                it.likes = it.likes + 1;
            }
            return it
        });
        setItems(updatedlistItems);
    }
    return (
        <div>
            <ul>
                {
                    items.map((i) =>
                        <div key={i.key} style={{ display: 'flex' }}>
                            <li>{i.value}</li>
                            <button onClick={() => addLike(i)}><span>{i.likes}</span>Like</button>
                        </div>)
                }
            </ul>
        </div>
    )
}

export default LikeList;