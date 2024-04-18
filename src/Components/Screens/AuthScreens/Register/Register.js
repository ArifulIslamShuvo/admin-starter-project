import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosInstance from '../../../../Utilities/Hooks/useAxiosInstance';
import AppContext from './../../../../Context/AppContext';
import { MANAGE_EMPLOYEE_API } from '../../../../Utilities/APIs/APIs';
import ScreenHolder from '../../../Partials/Layouts/ScreenHolder/ScreenHolder';
import Form from '../../../Partials/Layouts/Forms/Form';
import ShortTextInput from '../../../Partials/Layouts/Forms/FormInputs/ShortTextInput/ShortTextInput';
import PasswordInput from '../../../Partials/Layouts/Forms/FormInputs/PasswordInput/PasswordInput';
import ImageInput from '../../../Partials/Layouts/Forms/FormInputs/ImageInput/ImageInput';
import FormSubmitButton from '../../../Partials/Layouts/Forms/FormSubmitButton/FormSubmitButton';
import useAxiosAuthInstance from '../../../../Utilities/Hooks/AxiosInstanceHooks/useAxiosAuthInstance';

function Register() {

  const axiosAuthInstance = useAxiosAuthInstance()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [dp, setDp] = useState(null)

  const navigate = useNavigate();

  const {register, employee, isLoading, isSuccess, isError, message } = useContext(AppContext);
  const { token } = useParams()
  console.log('token: ', token)

  useEffect(() => {

    async function fetchAndSetEmail() {
      console.log('yooo')
      const { data } = await axiosAuthInstance.get('getEmailFromToken/' + token)
      console.log('Data: ', data)
      setEmail(data.email)
    }

    fetchAndSetEmail()
  }, [token, axiosAuthInstance])

  useEffect(() => {

    if (isError) {
      console.log(message);
    }

    if (isSuccess || employee) {
      navigate('/');
    }

    // reset();

  }, [employee, isError, isSuccess, isLoading, message, navigate])

  function handleSubmit(e) {

    e.preventDefault();

    if (password !== password2) {
      console.log('Passwords do not match!')

    } else {

      const employeeData = new FormData();
      console.log("🚀 ~ handleSubmit ~ employeeData:", employeeData)

      employeeData.append('name', name)
      employeeData.append('email', email)
      employeeData.append('password', password)
      employeeData.append('dp', dp)
      employeeData.append('level', 'employee')

      register(employeeData);

      setName('')
      setEmail('')
      setPassword('')
      setPassword2('')

    }

  }

  return (
    <ScreenHolder>
      <div className="form_wrapper register">
        <h3>Register</h3>
        <p>Email: {email ? email : 'yo'}</p>
        {/* <p>{email}</p> */}
        <Form
          onSubmit={handleSubmit}
          hasImage
        >
          <ShortTextInput
            label='Name'
            value={name}
            placeholder='Please Enter your Name'
            setState={setName}
          />
          <PasswordInput
            label='Password'
            value={password}
            placeholder='Please Enter your Password'
            setState={setPassword}
          />
          <PasswordInput
            label='Confirm Password'
            value={password2}
            placeholder='Please Confirm your Password'
            setState={setPassword2}
          />
          <ImageInput
            allowCreateImage
            state={dp}
            setState={setDp}
            fieldId={'employeeDp'}
            children={'Display Picture'}
          />

          <FormSubmitButton text='Create Account' />

        </Form>
      </div>
    </ScreenHolder>
  )
}

export default Register