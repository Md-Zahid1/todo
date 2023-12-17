import React, { useState } from "react";

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(
    localStorage.getItem('inputData') ? JSON.parse(localStorage.getItem('inputData')) :
       []);
    const addItem = () => {
            setItems([...items, inputData]);
            localStorage.setItem('inputData', JSON.stringify([...items, inputData]))
            setInputData('');
    }
    const deleteItem = (id) => {
     const update = items.filter((elem, ind) => {
          return ind != id
     })
     setItems(update)
     localStorage.setItem('inputData', JSON.stringify(update))
     
    }
    return (
        <>
        <div>
            <input type="text" 
            placeholder="Enter Your Todo......"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
             />
            <button onClick={addItem}>+</button>
        </div>

        <div>
            {
                items.map((elem, ind) => {
                    return (
                        <div key={ind}>
                        <span>{elem}</span>
                        <span><button onClick={ () => deleteItem(ind)}>Delete</button></span>
                        </div>
                    )
                })
            }
        
        </div>
        </>
    )
}

export default Todo;