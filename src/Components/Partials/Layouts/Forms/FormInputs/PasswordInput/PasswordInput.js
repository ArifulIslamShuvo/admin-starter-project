import InputBoilerplate from "../InputBoilerplate"

function PasswordInput({label, value, placeholder, setState}) {
  return (
    <InputBoilerplate
        label={label}
        type={'password'}
        value={value}
        placeholder={placeholder}
        setState={setState}
    />
  )
}

export default PasswordInput