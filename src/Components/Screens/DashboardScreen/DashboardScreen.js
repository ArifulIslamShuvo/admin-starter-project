import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './DashboardScreen.css'
import AppContext from '../../../Context/AppContext'

function DashboardScreen() {
  const { pendingOrders } = useContext(AppContext)
  return (
    <div className='pending_order'>
      <h1>You have pending {pendingOrders?.length} orders</h1>
      <Link to='/orderScreens'>
        <button className='delete pending_btn'>View</button>
      </Link>
    </div>
  )
}

export default DashboardScreen