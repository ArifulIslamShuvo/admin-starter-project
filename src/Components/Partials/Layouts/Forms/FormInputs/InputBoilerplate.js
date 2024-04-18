import './InputBoilerplate.css';

function InputBoilerplate({label, type, value, placeholder, setState, inputIsTextArea}) {
  return (
    <div className="input_group">
        <label className="input_field_label caption bold">{label}</label>
        {!inputIsTextArea &&
          <input
              className='input_field'
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={e => setState(e.target.value)}
          />
        }
        {inputIsTextArea &&
          <textarea
            className='input_field'
            value={value}
            placeholder={placeholder}
            onChange={e => setState(e.target.value)}
          />
        }
    </div>
  )
}

export default InputBoilerplate