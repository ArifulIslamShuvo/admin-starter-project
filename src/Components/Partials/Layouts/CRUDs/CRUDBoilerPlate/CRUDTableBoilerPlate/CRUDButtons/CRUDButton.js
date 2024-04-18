import './CRUDButton.css';

function CRUDButton({ children, handleClick, deleteButton }) {
  return (
    <button
      className={deleteButton ? 'delete_btn' : ''}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CRUDButton