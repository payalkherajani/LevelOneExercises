import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [item, setItem] = useState("");

    const addTodoIteminArray = () => {
        if (item !== "") {
            const toAddTodo = {
                item,
                isCompleted: false,
                key: Date.now()
            }
            setTodo([...todo, toAddTodo]);
            setItem("")
        } else {
            alert("Add a item ");
        }
    }
    const listItem = (to) => {
        const updateTodo = todo.map((i) => {
            if (i.key === to.key) {
                i.isCompleted = !to.isCompleted
            }
            return i;
        })
        setTodo(updateTodo);
    }
    return (
        <div>
            <input name="todo" type="text" placeholder="Add Todo" value={item} onChange={(e) => setItem(e.target.value)} required />
            <button onClick={addTodoIteminArray}>Add</button>
            <div>
                {
                    <ul style={{ listStyle: 'none' }}>
                        {
                            todo.map((to) => (
                                <li key={to.key} onClick={() => listItem(to)} style={to.isCompleted === true ? ({ textDecoration: 'line-through', color: 'green' }) : ({ color: 'red' })} >{to.item}</li>

                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Todo;