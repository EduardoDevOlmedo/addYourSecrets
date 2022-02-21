import React from 'react'
import { Navigate } from 'react-router'


const PrivateRouter = ({log, children}) => {

  if(log){
      console.log(true)
      return children
    } else if(!log){
      return <Navigate to="/login" />
   }

}
export default PrivateRouter