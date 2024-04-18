import React from 'react'

function RadioInputGroup({ children, radioGroupLabel }) {
    return (
        <div className='radio_group'>
            <label className="input_field_label">{radioGroupLabel}</label>
            <div className="radio_items">{children}</div>
        </div>
    )
}

export default RadioInputGroup