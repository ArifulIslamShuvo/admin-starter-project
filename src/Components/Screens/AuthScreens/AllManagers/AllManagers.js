import axios from "axios"
import { useContext, useEffect, useState } from "react"
// import { useSelector } from "react-redux"
import { EMPLOYEES_API, RESTAURANT_MANAGER_API } from "../../../../Utilities/APIs/APIs"
import CRUDTable from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTable"
import ImageCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ImageCell/ImageCell"
import ShortTextCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell"
import CRUDTableHeader from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDTableHeader"
import CRUDth from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDth/CRUDth"
import CRUDTableRow from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableRow/CRUDTableRow"
import CRUDButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/CRUDButton"
import { RiDeleteBin2Line, RiImage2Line } from "react-icons/ri"
import Modal from "../../../Partials/Elements/Modal/Modal"
import CreateEmployee from "../Employees/CreateEmployee"
import CreateRestaurantManager from "./CreateRestaurantManager"
import ViewButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/ViewButton/ViewButton"
import ViewEmployee from "../Employees/ViewEmployee"
import AuthContext from "../../../../Context/AuthContext"

function AllManagers() {

    const [allManagers, setAllManagers] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)
    const [toggleFetch, setToggleFetch] = useState(false)
    const [showCreateEmployee, setShowCreateEmployee] = useState(false)
    const [showRestaurantManager, setShowRestaurantManager] = useState(false)
    const [restaurantManager, setRestaurantManager] = useState(null)
    const [showViewSection, setShowViewSection] = useState(false)

    const { employee } = useContext(AuthContext)

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${employee.token}`
            }
        }

        async function fetchAndSetAllManagers() {
            const { data } = await axios.get(EMPLOYEES_API + 'getAllManagers', config)
            setAllManagers(data)
        }

        fetchAndSetAllManagers()
        async function fetchAndSetRestaurantManagers() {
            const { data } = await axios.get(RESTAURANT_MANAGER_API, config)
            setRestaurantManager(data)
        }

        fetchAndSetRestaurantManagers()

    }, [employee.token, toggleFetch])

    function triggerFetch() {
        setToggleFetch(prevState => !prevState)
    }

    function handleClose() {
        setShowModal(false)
        setShowRestaurantManager(false)
        setShowViewSection(false)
        setShowCreateEmployee(false)
    }

    return (
        <>
            <div className='crud_holder'>
                <div className="body_header">
                    <h1 className="heading">{`Managers (${allManagers?.length} in total)`}</h1>
                </div>
                <CRUDTable>
                    <CRUDTableHeader>
                        <CRUDth th='Image' />
                        <CRUDth th='Name' />
                        <CRUDth th='Assigned to' />
                        <CRUDth th='Actions' />
                    </CRUDTableHeader>
                    <tbody>
                        {allManagers?.map(m => (
                            <CRUDTableRow key={m._id}>
                                <ImageCell
                                    imgSrc={m.dp}
                                    imgAlt={m.name}
                                />
                                <ShortTextCell text={m.name} />
                                <ShortTextCell
                                    text={
                                        restaurantManager?.map(rm => rm.employee)?.includes(m._id)
                                            ?
                                            restaurantManager?.find(rm => rm.employee === m._id)?.restaurant.name
                                            :
                                            'Not Assigned'
                                    }
                                />
                                <td className="action_button_cell">
                                    <ViewButton
                                        setShowModal={setShowModal}
                                        setShowViewSection={setShowViewSection}
                                        targetID={m._id}
                                        setTargetID={setTargetID}
                                    />

                                    <CRUDButton
                                        handleClick={() => {
                                            setShowModal(true)
                                            setShowCreateEmployee(true)
                                            setTargetID(m._id)

                                        }}
                                    >
                                        <RiDeleteBin2Line />
                                    </CRUDButton>
                                    <CRUDButton
                                        handleClick={() => {
                                            setShowModal(true)
                                            setShowRestaurantManager(true)
                                            setTargetID(m._id)

                                        }}
                                    >
                                        <RiImage2Line />
                                    </CRUDButton>
                                </td>

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
                    {
                        showViewSection &&
                        <ViewEmployee
                            targetID={targetID}
                            employee={employee}
                        />
                    }
                </Modal>
            }

            {showModal && showCreateEmployee &&
                <Modal
                    handleClose={handleClose}
                    modalHeading={
                        (`Remove Restaurant Manager `)
                    }
                >
                    {showCreateEmployee &&
                        <CreateEmployee
                            targetID={targetID}
                            setShowModal={setShowModal}
                            setShowCreateEmployee={setShowCreateEmployee}
                            triggerFetch={triggerFetch}
                        />
                    }
                </Modal>
            }
            {showModal && showRestaurantManager &&
                <Modal
                    handleClose={handleClose}
                    modalHeading={
                        (`Create Restaurant Manager `)
                    }
                >
                    {showRestaurantManager &&
                        <CreateRestaurantManager
                            targetID={targetID}
                            employee={employee}
                            setShowModal={setShowModal}
                            setShowRestaurantManager={setShowRestaurantManager}
                            triggerFetch={triggerFetch}
                        />
                    }
                </Modal>
            }

        </>
    )
}

export default AllManagers