
import { useContext, useEffect, useState } from "react"
// import { RiDeleteBin2Line } from "react-icons/ri"
import { MANAGE_EMPLOYEE_API } from "../../../../Utilities/APIs/APIs"
// import Modal from "../../../Partials/Elements/Modal/Modal"
// import CRUDButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/CRUDButton"
import CRUDTable from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTable"
import ImageCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ImageCell/ImageCell"
import ShortTextCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell"
import CRUDTableHeader from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDTableHeader"
import CRUDth from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDth/CRUDth"
import CRUDTableRow from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableRow/CRUDTableRow"
import { RiDeleteBin2Line, RiUser2Line, RiVipCrown2Line } from "react-icons/ri"
import CRUDButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/CRUDButton"
import Modal from "../../../Partials/Elements/Modal/Modal"
import RemoveEmployee from "./RemoveEmployee"
import useLevels from "../../../../Utilities/Permissions/useLevels"
import CreateManager from "./CreateManager"
import CreateOwner from "./CreateOwner"
import ViewButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/ViewButton/ViewButton"
import ViewEmployee from "./ViewEmployee"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance"
import AuthContext from './../../../../Context/AuthContext';

function Employees() {

    const [employees, setEmployees] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)
    const [toggleFetch, setToggleFetch] = useState(false)
    const [showRemoveEmployee, setShowRemoveEmployee] = useState(false)
    const [showCreateManager, setShowCreateManager] = useState(false)
    const [showCreateOwner, setShowCreateOwner] = useState(false)
    const [showViewSection, setShowViewSection] = useState(false)
    const { employee } = useContext(AuthContext)

    const { superAdmin, owner } = useLevels()

    
    const axiosInstance = useAxiosInstance()

    useEffect(() => {

        async function fetchAndSetEmployees() {
            const { data } = await axiosInstance.get( MANAGE_EMPLOYEE_API + 'getAllEmployees')
            setEmployees(data)
        }

        fetchAndSetEmployees()

    }, [toggleFetch, axiosInstance])

    function triggerFetch() {
        setToggleFetch(prevState => !prevState)
    }

    function handleClose() {
        setShowModal(false)
        setShowRemoveEmployee(false)
        setShowCreateManager(false)
        setShowCreateOwner(false)
        setShowViewSection(false)
    }

    return (
        <>
            <div className='crud_holder'>
                <div className="body_header">
                    <h1 className="heading">{`Employees (${employees?.length} in total)`}</h1>
                </div>
                <CRUDTable>
                    <CRUDTableHeader>
                        <CRUDth th='Image' />
                        <CRUDth th='Name' />
                        <CRUDth th='Actions' />
                    </CRUDTableHeader>
                    <tbody>
                        {employees?.map(e => (
                            <CRUDTableRow key={e._id}>
                                <ImageCell
                                    imgSrc={e?.dp}
                                    // imgAlt={e?.name}
                                />
                                <ShortTextCell text={e.name} />

                                {
                                    (owner || superAdmin) &&
                                    <td className="action_button_cell">
                                        <ViewButton
                                            setShowModal={setShowModal}
                                            setShowViewSection={setShowViewSection}
                                            targetID={e._id}
                                            setTargetID={setTargetID}
                                        />
                                        {!(e.level === 'superAdmin' || e.level === 'restaurantManeger') &&

                                            <CRUDButton

                                                handleClick={() => {
                                                    setShowModal(true)
                                                    setShowCreateManager(true)
                                                    setTargetID(e._id)

                                                }}
                                            >
                                                <RiUser2Line />
                                            </CRUDButton>
                                        }
                                        {
                                            superAdmin &&
                                            <CRUDButton

                                                handleClick={() => {
                                                    setShowModal(true)
                                                    setShowCreateOwner(true)
                                                    setTargetID(e._id)

                                                }}
                                            >
                                                <RiVipCrown2Line />
                                            </CRUDButton>
                                        }

                                        {!(e.level === 'superAdmin') &&

                                            <CRUDButton

                                                handleClick={() => {
                                                    setShowModal(true)
                                                    setShowRemoveEmployee(true)
                                                    setTargetID(e._id)

                                                }}
                                            >
                                                <RiDeleteBin2Line />
                                            </CRUDButton>
                                        }
                                    </td>
                                }

                            </CRUDTableRow>
                        ))}
                    </tbody>
                </CRUDTable>
            </div>
            {showModal && showViewSection &&
                <Modal
                    view
                    handleClose={handleClose}
                    modalHeading={
                        (showViewSection && `View Employee`)
                    }
                >
                    <ViewEmployee
                        targetID={targetID}
                        employee={employee}
                    />
                </Modal>
            }
            {showModal && showCreateManager &&
                <Modal
                    handleClose={handleClose}
                    modalHeading={
                        (`Create Restaurant Manager`)
                    }
                >
                    {showCreateManager &&
                        <CreateManager
                            targetID={targetID}
                            setShowModal={setShowModal}
                            setShowCreateAdmin={setShowCreateManager}
                            triggerFetch={triggerFetch}
                        />
                    }
                </Modal>
            }
            {showModal && showCreateOwner &&
                <Modal
                    handleClose={handleClose}
                    modalHeading={
                        (`Create Restaurant Owner`)
                    }
                >
                    {showCreateOwner &&
                        <CreateOwner
                            targetID={targetID}
                            setShowModal={setShowModal}
                            setShowCreateOwner={setShowCreateOwner}
                            triggerFetch={triggerFetch}
                        />
                    }
                </Modal>
            }

            {showModal && showRemoveEmployee &&
                <Modal
                    handleClose={handleClose}
                    modalHeading={
                        (`Remove Employee`)
                    }
                >
                    {showRemoveEmployee &&
                        <RemoveEmployee
                            targetID={targetID}
                            setShowModal={setShowModal}
                            setShowRemoveEmployee={setShowRemoveEmployee}
                            triggerFetch={triggerFetch}
                        />
                    }
                </Modal>
            }
        </>
    )
}

export default Employees