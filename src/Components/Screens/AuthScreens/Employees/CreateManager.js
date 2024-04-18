import React, { useContext } from 'react'

import axios from 'axios'
// import { useSelector } from 'react-redux';
import { EMPLOYEES_API } from '../../../../Utilities/APIs/APIs'
import AuthContext from '../../../../Context/AuthContext';
function CreateManager({
  setShowModal, setShowCreateAdmin, targetID, triggerFetch
}) {

  const { employee } = useContext(AuthContext)

  console.log(targetID);

  async function handleCreateAdmin(e) {
    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Bearer ${employee.token}`
      }
    }
    console.log(config);
    const response = await axios.patch(EMPLOYEES_API + 'createManagerBySuperAdminOwner/' + targetID, {}, config)

    if (response) {
      setShowModal(false);
      triggerFetch()
    }
  }
  return (
    <div className='modal_delete_content'>
      <p style={{ textAlign: 'center' }}>
        Are you sure you want to make this employee an restaurant manager?

      </p>

      <div className="modal_group_buttons ">
        <button
          className="delete"
          onClick={handleCreateAdmin}
        >Make Manager</button>

        <button className="cancel" onClick={() => {
          setShowModal(false);
          setShowCreateAdmin(false);

        }}>Cancel</button>
      </div>

    </div>
  )
}

export default CreateManager