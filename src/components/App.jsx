import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
    // const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    // function handleChange(event) {
    //     const newValue = event.target.value;
    //     setInputText(newValue);
    // }

    // function addItem() {
    //     setItems(prevItems => {
    //         return [...prevItems, inputText]
    //     });
    //     setInputText("");
    // }

    // challenge
    function addItem(inputText) {
        setItems(prevItems => {
            return[...prevItems, inputText]
        })
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            {/* <div className="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputText}
                />
                <button>
                    <span onClick={addItem}>Add</span>
                </button>
            </div> */}
            <InputArea onAdd={addItem} />
            <div>
                {/* <ul>
                    {items.map(todoItem => (
                        <li>{todoItem}</li>
                    ))}
                </ul> */}
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
