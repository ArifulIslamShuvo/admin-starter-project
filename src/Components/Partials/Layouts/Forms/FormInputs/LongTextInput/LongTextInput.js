import React from 'react'
import InputBoilerplate from '../InputBoilerplate'

function LongTextInput({label, value, placeholder, setState}) {
    return (
        <InputBoilerplate
            inputIsTextArea={true}
            label={label}
            value={value}
            placeholder={placeholder}
            setState={setState}
        />
  )
}

export default LongTextInput