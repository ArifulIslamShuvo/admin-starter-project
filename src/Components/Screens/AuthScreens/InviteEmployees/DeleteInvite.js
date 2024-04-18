import { useEffect, useState } from "react"
import { MANAGE_EMPLOYEE_API } from "../../../../Utilities/APIs/APIs"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance"

function DeleteInvite({employee, targetID, setShowDeleteSection, setShowModal, triggerFetch}) {

    const [email, setEmail] = useState('')

    const axiosInstance = useAxiosInstance()


    useEffect(() => {
    
        async function fetchAndSetEmail() {
          const {data} = await axiosInstance.get(MANAGE_EMPLOYEE_API + 'getSingleInvite/' + targetID)
          setEmail(data.email)
        }
    
        fetchAndSetEmail()
    
    }, [targetID, employee.token, axiosInstance])
    
    async function handleDelete() {
        const response = await axiosInstance.delete(MANAGE_EMPLOYEE_API + 'deleteInvite/' + targetID)

        if (response) {
            setEmail('')

            setShowDeleteSection(false)
            setShowModal(false)
            triggerFetch()
        }
    }
    return (
        <div className='modal_delete_content'>
      
            <p>Are you sure you want to delete invite for {email ? email : ''}?</p>

            <div className="modal_group_buttons">
                <button
                className="delete" onClick={() => {
                    handleDelete()
                }}
                >Delete</button>

                <button className="cancel" onClick={() => {
                    setShowModal(false)
                    setShowDeleteSection(false)
                }}>Cancel</button>
            </div>

        </div>
    )
}

export default DeleteInvite