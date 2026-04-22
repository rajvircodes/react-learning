import React, { useState } from 'react'
import ComponentB from './ComponentB'
import { createContext } from 'react'

export const userContext = createContext()


const ComponentA = () => {
    const [user, setUser] = useState('Rajvir')

    return (

        <div className='box'>
            <h1>Component A</h1>
            <h2 className='name'>{`Hello ${user}`}</h2>

            <userContext.Provider value={user}>
                <ComponentB />

            </userContext.Provider>
        </div>
    )
}

export default ComponentA