import React from 'react'
import { Navigate } from 'react-router'

const PublicRouter = ({log, children}) => {

    if(!log){
        return children
    } else {
        return <Navigate to="/" />
     }

}

export default PublicRouter