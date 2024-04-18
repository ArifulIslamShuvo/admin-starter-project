// import { useSelector } from "react-redux"
import { useContext } from "react"
import { checkPermission } from "./PermissionFunctions"
import AuthContext from "../../Context/AuthContext"

// const contentManager = checkPermission(employee, 'Content Manager')
// const attendanceExecutive = checkPermission(employee, 'Attendance Executive')

function usePermissions() {
    const {employee} = useContext(AuthContext)

    const levels = {
        contentManager: checkPermission(employee, 'Content Manager'),
        attendanceExecutive: checkPermission(employee, 'Attendance Executive'),
    }

    return levels
}

export default usePermissions