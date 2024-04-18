import { FiTrash2 } from 'react-icons/fi';

import CRUDButton from '../CRUDButton';

import './DeleteButton.css';

function DeleteButton({setShowModal, setShowDeleteSection, targetID, setTargetID}) {
  return (
    <CRUDButton
      handleClick={() => {
        setShowModal(true)
        setShowDeleteSection(true)
        setTargetID(targetID)
      }}
      deleteButton
    >
        <FiTrash2 />
    </CRUDButton>
  )
}

export default DeleteButton