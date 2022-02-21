import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import FormAdd from '../components/FormAdd'
import Navbar from "../components/Navbar"
import Element from "../components/Element"


const AppScreen = () => {
  
  const userState = useSelector((data) => data.auth.displayName)      
  const state = useSelector(state => state.nominal.nominalData)
  const memoState = useMemo(() => state, [state])
  return (
    <>
    <Navbar />
    <h2 className='user-presentation'>Welcome back, {userState}</h2>
    <FormAdd />
    <table class=" highlight">
        <thead>
          <tr className='red table-r'>
              <th>Date Added</th>
              <th>Secret</th>
          </tr>
        </thead>
        <tbody>
          {
            memoState.map(el => {
              return <Element key={el.id} data={el}/>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default AppScreen