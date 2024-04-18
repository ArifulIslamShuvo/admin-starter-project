import useAxiosInstance from '../../../../Utilities/Hooks/useAxiosInstance'
import './DeleteItem.css'

function DeleteItem({ api, targetID, setShowDeleteSection,setShowModal, triggerFetch}) {
  
  const axiosInstance = useAxiosInstance()

  async function handleDelete(id) {
   const res =  await axiosInstance.delete(api + id)
   if(res.data) {
    setShowModal(false)
    setShowDeleteSection(false)
    triggerFetch()
   }

  }

  return (
    <div className="delete_item">
      <div className="delete_content">
        <h1>Are you sure?</h1>
        <p>Please confirm you want to delete this item.</p>
        <div className="btn_container">

          <button
            onClick={() =>  handleDelete(targetID) }
            className='delete'
          >Delete
          </button>

          <button className='cancel'
            onClick={() => {
              setShowModal(false);
            }}
          >Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteItem