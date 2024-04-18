import {AiOutlineClose} from 'react-icons/ai'

import './ModalHeader.css'

function ModalHeader({modalHeading, handleClose}) {
  return (
    <div className='modal-header'>
        <h1>{modalHeading}</h1>
        <button className='close-button' onClick={handleClose}>
          <AiOutlineClose />
        </button>
    </div>
  )
}

export default ModalHeader