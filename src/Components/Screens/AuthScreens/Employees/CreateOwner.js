import React, { useContext } from 'react'

import axios from 'axios'
// import { useSelector } from 'react-redux';
import { EMPLOYEES_API } from '../../../../Utilities/APIs/APIs'
import AuthContext from '../../../../Context/AuthContext';
function CreateOwner({
  setShowModal, setShowCreateOwner, targetID, triggerFetch
}) {

  const { employee } = useContext(AuthContext)

  console.log(targetID);

  async function handleCreateOwner(e) {
    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Bearer ${employee.token}`
      }
    }
    console.log(config);
    const response = await axios.patch(EMPLOYEES_API + 'createEmployeeToOwnerBySuperAdmin/' + targetID, {}, config)

    if (response) {
      setShowModal(false);
      triggerFetch()
    }
  }
  return (
    <div className='modal_delete_content'>
      <p style={{ textAlign: 'center' }}>
        Are you sure you want to make this employee a restaurant owner?

      </p>

      <div className="modal_group_buttons ">
        <button
          className="delete"
          onClick={handleCreateOwner}
        >Make Owner</button>

        <button className="cancel" onClick={() => {
          setShowModal(false);
          setShowCreateOwner(false);

        }}>Cancel</button>
      </div>

    </div>
  )
}

export default CreateOwner