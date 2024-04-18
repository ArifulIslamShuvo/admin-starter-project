import {BsFillPlusCircleFill} from 'react-icons/bs'

import './CreateButton.css';

function CreateButton({screenTopicSingular, setShowModal, setShowCreateForm}) {
  return (
    <div className="btn_addnew_wrapper">
        <button 
          className='btn_add_new'
          onClick={() => {
            setShowModal(true)
            setShowCreateForm(true)
          }} 
        >
            <BsFillPlusCircleFill />
            {`Create New ${screenTopicSingular}`}
        </button>
    </div>
  )
}

export default CreateButton