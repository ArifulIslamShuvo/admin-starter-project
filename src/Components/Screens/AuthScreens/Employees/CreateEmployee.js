import React, { useContext } from 'react'

import axios from 'axios'
// import { useSelector } from 'react-redux';
import { EMPLOYEES_API } from '../../../../Utilities/APIs/APIs'
import AuthContext from '../../../../Context/AuthContext'

function CreateEmployee({
  setShowModal, setShowCreateEmployee, targetID, triggerFetch
}) {

  const { employee } = useContext(AuthContext)

  async function handleCreateAdmin(e) {
    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Bearer ${employee.token}`
      }
    }
    console.log(config);
    const response = await axios.patch(EMPLOYEES_API + 'createManagerToEmployeeBySuperAdminOwner/' + targetID, {}, config)

    if (response) {
      setShowModal(false);
      triggerFetch()
    }
  }
  return (
    <div className='modal_delete_content'>
      <p style={{ textAlign: 'center' }}>
        Are you sure you want to remove restaurant manager from {employee?.name}?
      </p>

      <div className="modal_group_buttons ">
        <button
          className="delete"
          onClick={handleCreateAdmin}
        >Remove</button>

        <button className="cancel" onClick={() => {
          setShowModal(false);
          setShowCreateEmployee(false);
        }}>Cancel</button>
      </div>

    </div>
  )
}

export default CreateEmployee