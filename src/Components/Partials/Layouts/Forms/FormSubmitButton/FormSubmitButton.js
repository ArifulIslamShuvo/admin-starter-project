import './FormSubmitButton.css'

function FormSubmitButton({ text }) {
  return (
    <div className="btn_wrapper">
      <button type='submit' className='submit w_100'>{text}</button>
    </div>
  )
}

export default FormSubmitButton