import './Checkbox.css'

function Checkbox({id, handleCheckBox, checkedState, checkboxLabel, valueToUpdate}) {
    return (
        <div className='check-box'>
            <input
                type="checkbox"
                className='form-check-input'
                id={id}
                onChange={e => handleCheckBox(e.target.checked, valueToUpdate)}
                checked={checkedState}
            />
            <label
                htmlFor={id}
                className='form-check-label'>
                {checkboxLabel}
            </label>
        </div>
    )
}

export default Checkbox