import axios from "axios"
import { useContext, useEffect, useState } from "react"
// import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ADDRESSES_API } from "../../../../../Utilities/APIs/APIs"
import Modal from "../../../../Partials/Elements/Modal/Modal"
import ViewButton from "../../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/ViewButton/ViewButton"
import CRUDTable from "../../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTable"
import ShortTextCell from "../../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell"
import CRUDTableHeader from "../../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDTableHeader"
import CRUDth from "../../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDth/CRUDth"
import CRUDTableRow from "../../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableRow/CRUDTableRow"
import ViewAddress from "./ViewAddress"
import AuthContext from "../../../../../Context/AuthContext"

function AddressesFromCustomer() {

    const [addresses, setAddresses] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)
    const [showViewSection, setShowViewSection] = useState(false)

    const {employee} = useContext(AuthContext)
    const {customerID} = useParams()

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${employee.token}`
            }
        }

        async function fetchAndSetAddresses() {
            const {data} = await axios.get(ADDRESSES_API, config)
            const customerAddresses = data.filter(add => add.customer === customerID)
            setAddresses(customerAddresses)
        }
        fetchAndSetAddresses()

    }, [employee.token, customerID])

    function handleClose() {
        setShowModal(false);
        setShowViewSection(false);
    }

    return (
        <>
            <div className='crud_holder'>
                <div className="body_header">
                    <h1 className="heading">{`Addresses (${addresses?.length} in total)`}</h1>
                </div>
                <CRUDTable>
                    <CRUDTableHeader>
                        <CRUDth th= 'Address Name' />
                        <CRUDth th= 'Address Type' />
                        <CRUDth th= 'Actions' />
                    </CRUDTableHeader>
                    <tbody>
                        {addresses?.map(address => (
                            <CRUDTableRow key={address._id}>
                                <ShortTextCell text={address.name} />
                                <ShortTextCell text={address.type} />
                                <td className="action_button_cell">
                                    <ViewButton
                                    setShowModal={setShowModal}
                                    setShowViewSection={setShowViewSection}
                                    targetID={address._id}
                                    setTargetID={setTargetID}
                                    />
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
                        (showViewSection && `View Address`)
                    }
                >
                    {
                        showViewSection &&
                            <ViewAddress
                                targetID={targetID}
                                employee={employee}
                            />
                    }    
                </Modal>
            }
        </>
    )
}

export default AddressesFromCustomer