import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("counter update");
        
    },[])
    const handlePlus = () => {
        setCount(count + 1)
    }
    const handleMinus = () => {
        setCount(count - 1)
    }

    return (
        <div className='counter'>
            <h1>{count}</h1>
            <div className="btns">
                <button id='inc' onClick={handlePlus}>Increment</button>
                <button id='dec' onClick={handleMinus}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter