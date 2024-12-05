import React, { useContext } from 'react'
import { myName } from '../App'
import './Component.css'

export default function Third() {

    const { setUserName } = useContext(myName)

    const handleSubmit = (event) => {
        setUserName(event.target.value)
    }
    return (
        <div>

            <input type='text' placeholder='Type Here' onChange={handleSubmit}></input>
        </div>
    )
}
