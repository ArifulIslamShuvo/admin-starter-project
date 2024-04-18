import './Form.css'

function Form({ children, onSubmit, hasImage }) {
  if (!hasImage) {
    return (
        <form onSubmit={onSubmit} >
          {children}
        </form>
    )
  } else {
    return (
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          {children}
        </form>
    )
  }
}

export default Form