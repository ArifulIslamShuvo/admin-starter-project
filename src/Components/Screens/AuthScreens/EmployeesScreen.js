import { RiGroupLine, RiUserShared2Line } from "react-icons/ri"
import NavCard from "../../Partials/Layouts/NavCardList/NavCard/NavCard"
import NavCardList from "../../Partials/Layouts/NavCardList/NavCardList"
import useLevels from "../../../Utilities/Permissions/useLevels"

function EmployeesScreen() {
  const { superAdmin } = useLevels()
  return (
    <NavCardList numOfCards={'four'}>
      <NavCard cardName={'Employees'} navCardLink='/employees' ><RiGroupLine /></NavCard>
      <NavCard cardName={'Employee Invites'} navCardLink='/employeeInvites' ><RiUserShared2Line /></NavCard>
      <NavCard cardName={'All Managers'} navCardLink='/allManagers' ><RiGroupLine /></NavCard>

      {
        (superAdmin) &&
        <NavCard cardName={'All Owners'} navCardLink='/allOwners' ><RiGroupLine /></NavCard>
      }

    </NavCardList>
  )
}

export default EmployeesScreen