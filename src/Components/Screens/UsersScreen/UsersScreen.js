import React from 'react'
import NavCardList from '../../Partials/Layouts/NavCardList/NavCardList'
import NavCard from '../../Partials/Layouts/NavCardList/NavCard/NavCard'
import { RiGroup2Line, RiGroupLine } from 'react-icons/ri'

function UsersScreen() {
    return (
        <NavCardList numOfCards={'four'}>
            <NavCard cardName={'Customers'} navCardLink='/customers' ><RiGroup2Line /></NavCard>
            <NavCard cardName={'Employees'} navCardLink='/employeesScreen' ><RiGroupLine /></NavCard>
        </NavCardList>
    )
}

export default UsersScreen