import React from 'react'
import GoodsDetail from '../page/GoodsDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({auth, goods}) => {
  return auth ? <GoodsDetail  goods={ goods }/> : <Navigate to = {"/login"}/>
}

export default PrivateRoute