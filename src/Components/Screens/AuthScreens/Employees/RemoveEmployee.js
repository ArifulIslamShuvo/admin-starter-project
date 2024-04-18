import React, { useContext } from 'react'

import axios from 'axios'
import { EMPLOYEES_API } from '../../../../Utilities/APIs/APIs'
import AuthContext from '../../../../Context/AuthContext'
// import { useSelector } from 'react-redux';
function RemoveEmployee({
  setShowModal, setShowRemoveEmployee, targetID, triggerFetch
}) {

    const { employee } = useContext(AuthContext)

  async function handleRemove(e) {
      e.preventDefault()

      const config = {
        headers: {
            Authorization: `Bearer ${employee.token}`
        }
    }
    console.log(config);
    const response = await axios.patch(EMPLOYEES_API + 'superAdminOwnerRemoveEmployee/' + targetID, {}, config)

    if (response) {
      setShowModal(false);
      triggerFetch()
    }
  }
  return (
    <div className='modal_delete_content'>
      <p>
        Are you sure you want to remove this employee?

      </p>

      <div className="modal_group_buttons">
        <button
          className="delete"
          onClick={handleRemove}
        >Remove</button>

        <button className="cancel" onClick={() => {
          setShowModal(false);
          setShowRemoveEmployee(false);
          
        }}>Cancel</button>
      </div>

    </div>
  )
}

export default RemoveEmployee