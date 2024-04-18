import InputBoilerplate from '../InputBoilerplate';

import './NumberInput.css';

function NumberInput({label, placeholder, setState, value}) {
  return (
    <InputBoilerplate
        type={'number'}
        label={label}
        value={value}
        placeholder={placeholder}
        setState={setState}
    />
  )
}

export default NumberInput