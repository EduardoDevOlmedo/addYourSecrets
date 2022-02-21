import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addActions } from '../actions/valueActions'

const FormAdd = () => {
   
    const dispatch = useDispatch()
    const [viewForm, setViewForm] = useState(false) 
    const [secret, setSecret] = useState("")

    const handleChange = (e) => {
      setSecret(e.target.value)
    }

    const handleClick = () => {
      setViewForm(!viewForm)
    }

    const handleSave = () => {
      dispatch(addActions(secret))
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  
    return (
   <div className='container'>
        <button onClick={handleClick} className='btn blue'>
        {
            !viewForm ? "Expandir" : "Disminuir"
        }
        </button>
        {
            viewForm && 
            <div className='container'>
                <input value={secret} onChange={handleChange} className='' type="text" placeholder='Add a secret!'></input>
                <button onClick={handleSave} className='btn purple'>Add and save</button>
            </div>
        }
   </div>
  )
}

export default FormAdd