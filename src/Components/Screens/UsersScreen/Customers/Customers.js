import axios from "axios"
import { useContext, useEffect, useState } from "react"
import {  RiMapPin2Line } from "react-icons/ri"
// import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CUSTOMERS_API, MANAGE_CUSTOMERS_API} from "../../../../Utilities/APIs/APIs"
import Modal from "../../../Partials/Elements/Modal/Modal"
import CRUDButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/CRUDButton"
import ViewButton from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDButtons/ViewButton/ViewButton"
import CRUDTable from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTable"
import ShortTextCell from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableCells/ShortTextCell/ShortTextCell"
import CRUDTableHeader from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDTableHeader"
import CRUDth from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableHeader/CRUDth/CRUDth"
import CRUDTableRow from "../../../Partials/Layouts/CRUDs/CRUDBoilerPlate/CRUDTableBoilerPlate/CRUDTable/CRUDTableRow/CRUDTableRow"
import ViewCustomer from "./ViewCustomer"
import AuthContext from "../../../../Context/AuthContext"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance"

function Customers() {

    const [customers, setCustomers] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [targetID, setTargetID] = useState(null)
    const [showViewSection, setShowViewSection] = useState(false)

    const {employee} = useContext(AuthContext)

    const axiosInstance = useAxiosInstance();


    useEffect(() => {

     

        async function fetchAndSetCustomers() {
            const {data} = await axiosInstance.get(MANAGE_CUSTOMERS_API + 'getAllCustomers',)
            setCustomers(data)
        }
        fetchAndSetCustomers()
 
    }, [axiosInstance])

    function handleClose() {
        setShowModal(false);
        setShowViewSection(false);
    }

    const navigate = useNavigate()

    return (
        <>
            <div className='crud_holder'>
                <div className="body_header">
                    <h1 className="heading">{`Customers (${customers?.length} in total)`}</h1>
                </div>
                <CRUDTable>
                    <CRUDTableHeader>
                        <CRUDth th= 'Customer Name' />
                        <CRUDth th= 'Email' />
                        <CRUDth th='Actions' />
                    </CRUDTableHeader>
                    <tbody>
                        {customers?.map(customer => (
                            <CRUDTableRow key={customer._id}>
                                <ShortTextCell text={customer.name} />
                                
                                <ShortTextCell text={customer.email} />
                                <td className="action_button_cell">
                                    <ViewButton
                                    setShowModal={setShowModal}
                                    setShowViewSection={setShowViewSection}
                                    targetID={customer._id}
                                    setTargetID={setTargetID}
                                    />
                                
                                    <CRUDButton handleClick={() => navigate('/addressesFromCustomer/' + customer._id)}>
                                        <RiMapPin2Line />
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
                        (showViewSection && `View Item`)
                    }
                >
                    {
                        showViewSection &&
                            <ViewCustomer
                                targetID={targetID}
                                employee={employee}
                            />
                    }    
                </Modal>
            }
        </>
    )
}

export default Customers