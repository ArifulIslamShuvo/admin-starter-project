import { useContext, useEffect, useState } from "react"
import { RiDeleteBin2Line, RiMailSendLine } from "react-icons/ri"
import { MANAGE_EMPLOYEE_API } from "../../../../Utilities/APIs/APIs"
import Modal from "../../../Partials/Elements/Modal/Modal"
import CreateButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDDashboardBoilerplate/CRUDHeader/CreateButton/CreateButton"
import CRUDButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/CRUDButton"
import CRUDTable from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTable"
import ShortTextCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell"
import CRUDTableHeader from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDTableHeader"
import CRUDth from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDth/CRUDth"
import CRUDTableRow from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableRow/CRUDTableRow"
import CreateInvite from "./CreateInvite"
import DeleteInvite from "./DeleteInvite"
import ResendInvite from "./ResendInvite"
import AuthContext from "../../../../Context/AuthContext"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance"

function InviteEmployees() {

    const [invitedEmployees, setInvitedEmployees] = useState(null)
    const [employees, setEmployees] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [showResendSection, setShowResendSection] = useState(false)
    const [showDeleteSection, setShowDeleteSection] = useState(false)
    const [toggleFetch, setToggleFetch] = useState(false)

    const {employee} = useContext(AuthContext)

    const axiosInstance = useAxiosInstance()

    useEffect(() => {

        async function fetchAndSetInvitedEmployees() {
            const {data} = await axiosInstance.get(MANAGE_EMPLOYEE_API + 'getAllInvites')
            setInvitedEmployees(data)
        }

        fetchAndSetInvitedEmployees()

        async function fetchAndSetEmployees() {
            const {data} = await axiosInstance.get(MANAGE_EMPLOYEE_API + 'getAllEmployees')
            setEmployees(data)
        }

        fetchAndSetEmployees()
        
    }, [toggleFetch, axiosInstance])  

    function handleClose() {
        setShowModal(false)
        setShowCreateForm(false)
        setShowDeleteSection(false)
        setShowResendSection(false)
    }

    function triggerFetch() {
        setToggleFetch(prevState => !prevState)
    }



    return (
        <>
            <div className='crud_holder'>
                <div className="body_header">
                    <h1 className="heading">{`Invited Employees (${invitedEmployees?.length} in total)`}</h1>
                    <CreateButton
                        screenTopicSingular='Employee Invite'
                        setShowModal={setShowModal}
                        setShowCreateForm={setShowCreateForm}
                    />
                </div>
                <CRUDTable>
                    <CRUDTableHeader>
                        <CRUDth th= 'Email Address' />
                        <CRUDth th= 'Invited By' />
                        <CRUDth th= 'Actions' />
                    </CRUDTableHeader>
                    <tbody>
                        {invitedEmployees?.map(invite => (
                            <CRUDTableRow key={invite._id}>
                                <ShortTextCell text={invite.email} />
                                <ShortTextCell text={employees?.find(e => e._id === invite.employee)?.name} />
                                <td className="action_button_cell">
                                    <CRUDButton handleClick={() => {
                                        setShowModal(true)
                                        setShowDeleteSection(true)
                                        setTargetID(invite._id)
                                    }}>
                                        <RiDeleteBin2Line />
                                    </CRUDButton>
                                    <CRUDButton handleClick={() => {
                                        setShowModal(true)
                                        setShowResendSection(true)
                                        setTargetID(invite._id)
                                    }}>
                                        <RiMailSendLine />
                                    </CRUDButton>
                                </td>
                            </CRUDTableRow>
                        ))}
                    </tbody>
                </CRUDTable>
            </div>
            {showModal && 
                <Modal
                    handleClose={handleClose}
                    modalHeading={
                        (showCreateForm && `Create Invite`) || 
                        (showDeleteSection && `Delete Invite`)
                    }
                >
                    {
                        showCreateForm &&
                            <CreateInvite
                                employee={employee}
                                setShowCreateForm={setShowCreateForm}
                                setShowModal={setShowModal}
                                triggerFetch={triggerFetch}
                            />
                    }    
                    {
                        showResendSection &&
                            <ResendInvite
                                employee={employee}
                                setShowResendSection={setShowResendSection}
                                setShowModal={setShowModal}
                                targetID={targetID}
                            />
                    }    
                    {
                        showDeleteSection &&
                            <DeleteInvite
                                employee={employee}
                                setShowDeleteSection={setShowDeleteSection}
                                setShowModal={setShowModal}
                                targetID={targetID}
                                triggerFetch={triggerFetch}
                            />
                    }    
                </Modal>
            }
        </>
    )
}

export default InviteEmployees