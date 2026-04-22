import React from 'react'
import ComponentD from './ComponentD'
import { useContext } from 'react'
import { userContext } from './ComponentA'



const ComponentC = () => {

  const user = useContext(userContext)
  return (
    <div className='box'>
      <h1>Component C</h1>
      <h2>{`Welcom ${user}`}</h2>
      <ComponentD/>
    </div>
  )
}

export default ComponentC