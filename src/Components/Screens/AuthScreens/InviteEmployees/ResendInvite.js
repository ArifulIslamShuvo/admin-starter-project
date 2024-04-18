import axios from "axios"
import { useEffect, useState } from "react"
import { MANAGE_EMPLOYEE_API } from "../../../../Utilities/APIs/APIs"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance"

function ResendInvite({employee, setShowModal, setShowResendSection, targetID}) {

  const [email, setEmail] = useState('')

  const axiosInstance = useAxiosInstance()

  useEffect(() => {

  

    async function fetchAndSetEmail() {
      const {data} = await axiosInstance.get(MANAGE_EMPLOYEE_API + 'getSingleInvite/' + targetID)
      setEmail(data.email)
    }

    fetchAndSetEmail()

  }, [targetID, employee.token, axiosInstance])

  async function handleResend() {

      const itemData = {email}
      
      const response = await axios.post(MANAGE_EMPLOYEE_API + 'employeeinvite/', itemData)

      if (response) {
        setEmail('')

        setShowResendSection(false);
        setShowModal(false);
    }
  }

  return (
    <div className='modal_delete_content'>
      
      <p>Are you sure you want to resend invite to {email ? email : ''}?</p>

      <div className="modal_group_buttons">
        <button
          className="delete" onClick={() => {
            handleResend()
          }}
        >Resend</button>

        <button className="cancel" onClick={() => {
          setShowModal(false);
          setShowResendSection(false);
        }}>Cancel</button>
      </div>

    </div>
  )
}

export default ResendInvite