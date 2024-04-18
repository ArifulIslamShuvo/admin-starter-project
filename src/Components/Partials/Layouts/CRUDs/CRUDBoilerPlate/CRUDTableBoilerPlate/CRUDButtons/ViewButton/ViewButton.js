import {FiEye} from 'react-icons/fi'
import CRUDButton from '../CRUDButton';

import './ViewButton.css';

function ViewButton({setShowModal, setShowViewSection, setTargetID, targetID}) {
  return (
    <CRUDButton
      handleClick={() => {
        setShowModal(true)
        setShowViewSection(true)
        setTargetID(targetID)
      }}
    >
        <FiEye />
    </CRUDButton>
  )
}

export default ViewButton