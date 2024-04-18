import './SelectInput.css'

function SelectInput({value, setState, children}) {
  return (
    <select 
        className='input_field'
        value={value}
        onChange={e => setState(e.target.value)}
    >
        {children}
    </select>
  )
}

export default SelectInput