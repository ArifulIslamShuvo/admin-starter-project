import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import NavBar from './Partials/Sections/NavBar/NavBar'
import SideBar from './Partials/Sections/SideBar/SideBar'
import Login from './Screens/AuthScreens/Login/Login'
import Dashboard from './Screens/Dashboard/Dashboard'
import InviteEmployees from './Screens/AuthScreens/InviteEmployees/InviteEmployees'
import EmployeesScreen from './Screens/AuthScreens/EmployeesScreen'
import Employees from './Screens/AuthScreens/Employees/Employees'

import Register from './Screens/AuthScreens/Register/Register'

import RecoverPassOne from './Screens/AuthScreens/RecoverPassOne'
import RecoverPassThree from './Screens/AuthScreens/RecoverPassThree'

import Customers from './Screens/UsersScreen/Customers/Customers'

import AllManagers from './Screens/AuthScreens/AllManagers/AllManagers'
import AllOwners from './Screens/AuthScreens/AllOwners/AllOwners'
import useLevels from '../Utilities/Permissions/useLevels'
import DashboardScreen from './Screens/DashboardScreen/DashboardScreen'

import { useContext } from 'react'
import AppContext from '../Context/AppContext'




function App() {
  const {logout, employee} = useContext(AppContext)

  // const { setNewOrder , newOrder} = useContext(AppContext)

  const { superAdmin, owner } = useLevels()

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response.status === 401) {
        logout()
      }
      return Promise.reject(err);
    }
  );


  return (
    <section>
      <BrowserRouter>
        <NavBar />
        <main>
          {employee && <SideBar />}
          <section className='screen-container'>

            <Routes>

              <Route path='/login' element={!employee ? <Login /> : <Navigate to={'/'} />} />
              <Route path='/register/:token' element={!employee ? <Register /> : <Navigate to={'/'} />} />
              <Route path="/recover-pass-one" element={<RecoverPassOne />} />
              <Route path="/resetEmployeePassword/:token" element={<RecoverPassThree />} />

              <Route path='/employeeInvites' element={(employee && (owner || superAdmin)) ? <InviteEmployees /> : <Navigate to={'/login'} />} />
              <Route path='/employeesScreen' element={employee ? <EmployeesScreen /> : <Navigate to={'/login'} />} />
              <Route path='/employees' element={(employee && (owner || superAdmin)) ? <Employees /> : <Navigate to={'/login'} />} />
              <Route path='/allManagers' element={(employee && (owner || superAdmin)) ? <AllManagers /> : <Navigate to={'/login'} />} />
              <Route path='/allOwners' element={(employee && superAdmin) ? <AllOwners /> : <Navigate to={'/login'} />} />
              <Route path='/customers' element={employee ? <Customers /> : <Navigate to={'/login'} />} />

              <Route path='/dashboard' element={employee ? <DashboardScreen /> : <Navigate to={'/login'} />} />
              <Route path='/' element={(employee && (owner || superAdmin )) ? <Dashboard /> : <Navigate to={'/login'} />} />

            </Routes>
            {/* {newOrder &&
              <Modal
                handleClose={handleClose}
              >
                <PendingOrders />
              </Modal>
            } */}

          </section>
        </main>
      </BrowserRouter>

    </section>
  )
}

export default App
