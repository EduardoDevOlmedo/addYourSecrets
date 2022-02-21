import React from 'react'
import { useDispatch } from 'react-redux'
import {borrarRegistro} from '../actions/valueActions'

const Element = ({data}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(borrarRegistro(data.id))
  }

    return (
        <tr className='animate__animated animate__fadeInUp animate__animate__fadeInUp'>
         <td>{data.fecha} </td>
          <div className='contains'>
          <td>{data.value} </td>
          <button onClick={handleDelete} className='btn red'><i className='material-icons'>delete_forever</i></button>
          </div>
        </tr>
  )
}

export default Element