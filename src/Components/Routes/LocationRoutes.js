import { Navigate, Route } from "react-router-dom"
import AddressScreens from "../Screens/AddressScreens/AddressScreens"
import Areas from "../Screens/AddressScreens/Areas"
import Districts from "../Screens/AddressScreens/Districts"
import Divisions from "../Screens/AddressScreens/Divisions"

function LocationRoutes({employee}) {
    return (
        <>
            <Route path='/address_screens' element={employee ? <AddressScreens /> : <Navigate to={'/login'} />} />
            <Route path='/areas/:parentID' element={employee ? <Areas /> : <Navigate to={'/login'} />} />
            <Route path='/districts/:parentID' element={employee ? <Districts /> : <Navigate to={'/login'} />} />
            <Route path='/divisions' element={employee ? <Divisions /> : <Navigate to={'/login'} />} />
        </>
    )
}

export default LocationRoutes