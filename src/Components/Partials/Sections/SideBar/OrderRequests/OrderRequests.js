import React from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../../../../../Context/AppContext'
import { useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import { RiShoppingCart2Line } from 'react-icons/ri'
import './OrderRequests.css'
function OrderRequests({ link, children, dataTip, dataFor }) {
    const { pendingOrders } = useContext(AppContext)
  return (
    <>
    <div className='small_sidebar_item' data-tip={dataTip} data-for={dataFor} >
        <NavLink to={link ? link : '/'}>
            <button type="button" >
                {
                    pendingOrders?.length > 0
                        ?
                        <div className='pending'>
                            <h3>
                                {pendingOrders?.length}
                            </h3>
                        </div>
                        :
                        <RiShoppingCart2Line />
                }
            </button>
        </NavLink>
    </div>
    <ReactTooltip id={dataFor} place='right' effect='solid' />
</>
  )
}

export default OrderRequests