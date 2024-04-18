import InputBoilerplate from "../InputBoilerplate"

function EmailInput({label, value, placeholder, setState}) {
  return (
    <InputBoilerplate
        label={label}
        type={'email'}
        value={value}
        placeholder={placeholder}
        setState={setState}
    />
  )
}

export default EmailInput