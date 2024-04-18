import './SelectOption.css'

function SelectOption({optionValue, optionText, hidden, disbled}) {
  return (
    <option
        value={optionValue}
        hidden={hidden}
        disbled={disbled}
    >{optionText}</option>
  )
}

export default SelectOption