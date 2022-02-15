import React, { useState, useEffect } from 'react'


export default function Prueba() {

    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
   

    useEffect(() => {
        document.title = `You have clicked the buttons ${counter + 1} times`; 
    });


    return (
        <div>
            <h1>Hello, have a look a this button:</h1>
            <h2>Counter:{count}</h2>
            <button onClick={() => (setCount(count + 1) setCounter(counter +1))}>+</button>
            <button onClick={() => (setCount(count - 1) setCounter(counter +1))}>-</button>
            <h2>{document.title}</h2>
        </div>
    )
}
