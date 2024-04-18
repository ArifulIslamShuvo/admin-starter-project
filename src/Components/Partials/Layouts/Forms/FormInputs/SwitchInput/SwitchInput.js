import Switch from "react-switch"
import './SwitchInput.css'

function SwitchInput({label, toggleSwitch, checked}) {
  return (
    <div>
        <label className="input_field_label">{label}</label>
        <Switch className="ecommerce-switch" onChange={toggleSwitch} checked={checked} />
    </div>
  )
}

export default SwitchInput