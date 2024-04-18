// import { useSelector } from "react-redux"
import { useContext } from "react"
import { checkLevel } from "./PermissionFunctions"
import AuthContext from "../../Context/AuthContext"

// export const admin = checkLevel(employee, 'admin')
// export const superAdmin = checkLevel(employee, 'superAdmin')
// export const member = checkLevel(employee, 'employee')

function useLevels() {
    const {employee} = useContext(AuthContext)

    const levels = {
        restaurantManager: checkLevel(employee, 'restaurantManager'),
        owner: checkLevel(employee, 'owner'),
        superAdmin: checkLevel(employee, 'superAdmin'),
        employee: checkLevel(employee, 'employee')
    }

    return levels
}

export default useLevels