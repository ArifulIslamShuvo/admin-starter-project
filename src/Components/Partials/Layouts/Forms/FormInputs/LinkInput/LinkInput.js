import InputBoilerplate from '../InputBoilerplate'
import './LinkInput.css'

function LinkInput({value, setState}) {
  return (
    <InputBoilerplate 
        label='Link'
        type='url'
        value={value}
        placeholder='PleaseEnter Link'
        setState={setState}
    />
  )
}

export default LinkInput