import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { EMPLOYEES_API } from '../../../Utilities/APIs/APIs';
import ScreenHolder from '../../Partials/Layouts/ScreenHolder/ScreenHolder';

import './Auth.css';
import useAxiosAuthInstance from '../../../Utilities/Hooks/AxiosInstanceHooks/useAxiosAuthInstance';

function RecoverPassOne() {

    const [emailSent, setEmailSent] = useState(false)
    const [email, setEmail] = useState('')

    // const axiosInstance = useAxiosInstance()
  const axiosAuthInstance = useAxiosAuthInstance()


    async function handleSubmit(e) {
        e.preventDefault()
        if (email.length > 0) {
            const forgotPass = await axiosAuthInstance.post('forgotPassword', {email})
            if (forgotPass) {
                console.log(forgotPass)
                setEmailSent(true)
            }
        }
    }

    return (
        <ScreenHolder>
            {
                emailSent
                ?
                <div className="form_wrapper">
                    <h3>Check your email</h3>
                    <p className="auth_status">If we found an account with <span>{email ? email : ''}</span>, an email has been sent. Please check your email in a moment.</p>
                    <div className="dha_box" style={{ marginTop: '0' }}>
                        <p className="body_text">Didn’t receive a link?</p>
                        <button type='submit' className='btn_text sign_up'>resend email</button>
                    </div>
                    <Link to='/login' className='btn_text forgot_pass'>Back to Login</Link>
                </div>
                :
                <div className="form_wrapper">
                    <h3>Recover Password</h3>
                    <form action="/">
                        <div className="input_group">
                            <label className="input_field_label caption bold">Email</label>
                            <input 
                                type="email" 
                                className="input_field body_text" 
                                placeholder='Enter Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            {/* <p className="status">We’ll email you a link that will let you change your password</p> */}
                        </div>
                        <button type='submit' className='btn_text submit' onClick={handleSubmit}>
                            send recovery email
                        </button>
                    </form>
                    <Link to='/login' className='btn_text forgot_pass'>Back to Login</Link>
                </div>
            }
            
        </ScreenHolder>
    )
}

export default RecoverPassOne