import { NavLink } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import './SmallSideBarItem.css'

function SmallSideBarItem({link, children, dataTip, dataFor}) {
  return (
    <>
      <div className='small_sidebar_item' data-tip={dataTip} data-for={dataFor} >
          <NavLink to={link ? link : '/'}>
              <button type="button" >
                  {children}
              </button>
          </NavLink>
      </div>
      <ReactTooltip  id={dataFor} place='right' effect='solid' />
    </>
  )
}

export default SmallSideBarItem