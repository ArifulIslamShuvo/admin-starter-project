import axios from "axios"
import { useContext, useEffect, useState } from "react"
// import { useSelector } from "react-redux"
import { EMPLOYEES_API } from "../../../../Utilities/APIs/APIs"
import CRUDTable from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTable"
import ImageCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ImageCell/ImageCell"
import ShortTextCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell"
import CRUDTableHeader from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDTableHeader"
import CRUDth from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDth/CRUDth"
import CRUDTableRow from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableRow/CRUDTableRow"

import Modal from "../../../Partials/Elements/Modal/Modal"
import CRUDButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/CRUDButton"
import { RiDeleteBin2Line } from "react-icons/ri"
import RemoveOwner from "../Employees/RemoveOwner"
import AuthContext from "../../../../Context/AuthContext"

function AllOwners() {

    const [allOwners, setAllOwners] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)
    const [toggleFetch, setToggleFetch] = useState(false)
    const [showRemoveOwner, setShowRemoveOwner] = useState(false)

    const { employee } = useContext(AuthContext)

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${employee.token}`
            }
        }

        async function fetchAndSetAllOwners() {
            const { data } = await axios.get(EMPLOYEES_API + 'getAllOwners', config)
            setAllOwners(data)
        }

        fetchAndSetAllOwners()

    }, [employee.token, toggleFetch])

    function triggerFetch() {
        setToggleFetch(prevState => !prevState)
    }

    function handleClose() {
        setShowModal(false)
        setShowRemoveOwner(false)
    }

    return (
        <>
            <div className='crud_holder'>
                <div className="body_header">
                    <h1 className="heading">{`Owners (${allOwners?.length} in total)`}</h1>
                </div>
                <CRUDTable>
                    <CRUDTableHeader>
                        <CRUDth th='Image' />
                        <CRUDth th='Name' />
                        <CRUDth th='Email Address' />
                        <CRUDth th='Level' />
                        {/* <CRUDth th='Actions' /> */}
                    </CRUDTableHeader>
                    <tbody>
                        {allOwners?.map(m => (
                            <CRUDTableRow key={m._id}>
                                <ImageCell
                                    imgSrc={m.dp}
                                    imgAlt={m.name}
                                />
                                <ShortTextCell text={m.name} />
                                <ShortTextCell text={m.email} />
                                <ShortTextCell text={m.level} />
                                <td className="action_button_cell">

                                    <CRUDButton

                                        handleClick={() => {
                                            setShowModal(true)
                                            setShowRemoveOwner(true)
                                            setTargetID(m._id)

                                        }}
                                    >
                                        <RiDeleteBin2Line />
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
                        (`Remove Restaurant Owner `)
                    }
                >
                    {showRemoveOwner &&
                        <RemoveOwner
                            targetID={targetID}
                            setShowModal={setShowModal}
                            setShowRemoveOwner={setShowRemoveOwner}
                            triggerFetch={triggerFetch}
                        />
                    }
                </Modal>
            }

        </>
    )
}

export default AllOwners