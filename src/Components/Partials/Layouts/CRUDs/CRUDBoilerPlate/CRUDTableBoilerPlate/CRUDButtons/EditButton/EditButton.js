import {FiPenTool} from 'react-icons/fi'
import CRUDButton from '../CRUDButton';

import './EditButton.css';

function EditButton({setShowModal, setShowUpdateForm, setTargetID, targetID}) {
  return (
    <CRUDButton
      handleClick={() => {
        setShowModal(true)
        setShowUpdateForm(true)
        setTargetID(targetID)
      }}
    >
        <FiPenTool />
    </CRUDButton>
  )
}

export default EditButton