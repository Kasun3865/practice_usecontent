import React from 'react'
import First from './Components/First'
import { useState, createContext } from 'react'
import './App.css'

export const myName = createContext({})

export default function App() {

  const [userName, setUserName] = useState('Hello!')

  return (
    <div className='container'>
      <myName.Provider value={{
        userName,
        setUserName
      }} >
        <div className='header'>
          <p>{userName}</p>
        </div>

        <First />

      </myName.Provider>
    </div>
  )
}
