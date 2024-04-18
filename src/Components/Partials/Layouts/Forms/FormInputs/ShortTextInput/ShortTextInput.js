import InputBoilerplate from "../InputBoilerplate";

function ShortTextInput({label, value, placeholder, setState}) {
  return (
    <InputBoilerplate 
        label={label}
        type={'text'}
        value={value}
        placeholder={placeholder}
        setState={setState}
    />
  )
}

export default ShortTextInput