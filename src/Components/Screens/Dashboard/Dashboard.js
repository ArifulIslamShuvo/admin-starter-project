import React from 'react'
import NavCardList from '../../Partials/Layouts/NavCardList/NavCardList'
import NavCard from '../../Partials/Layouts/NavCardList/NavCard/NavCard'
import { RiHome2Line } from 'react-icons/ri'

function Dashboard() {
  return (
    <NavCardList numOfCards={'six'}>
      <NavCard cardName={'Home'} navCardLink={'/homeScreen'} ><RiHome2Line /></NavCard>
    </NavCardList>
  )
}

export default Dashboard