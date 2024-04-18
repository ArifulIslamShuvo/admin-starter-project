import './RadioInput.css'

function RadioInput({label, value, state, setState}) {
  return (
    <div className="radio_item">
        <input
            type='radio'
            value={value}
            state={state}
            checked={state === value}
            onChange={e => setState(e.target.value)}
        />
        <label>{label}</label>
    </div>
  )
}

export default RadioInput