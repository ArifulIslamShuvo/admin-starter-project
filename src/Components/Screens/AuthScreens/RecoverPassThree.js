import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import ScreenHolder from '../../Partials/Layouts/ScreenHolder/ScreenHolder';

import './Auth.css';
import useAxiosAuthInstance from '../../../Utilities/Hooks/AxiosInstanceHooks/useAxiosAuthInstance';

function RecoverPassThree() {
    const axiosAuthInstance = useAxiosAuthInstance()

    const [newPass, setNewPass] = useState('')
    const [newPass2, setNewPass2] = useState('')

    const {token} = useParams()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        
        e.preventDefault()

        if (newPass !== newPass2) {
            console.log('Passwords Do Not Match')
        }

        const formBody = {
            token,
            newPassword: newPass
        }

        const changePassword = await axiosAuthInstance.patch('resetPassword', formBody)

        if (changePassword) {
            console.log(changePassword)
            setNewPass('')
            setNewPass2('')
            navigate('/login')
        }

    }

    return (
        <ScreenHolder>
            <div className="form_wrapper">
                <h3>Recover Password</h3>
                <form action="/">
                    <div className="input_group">
                        <label className="input_field_label caption bold">new password</label>
                        <input 
                            type="password" 
                            className="input_field body_text" 
                            placeholder='Enter password'
                            value={newPass}
                            onChange={e => setNewPass(e.target.value)} 
                        />
                    </div>
                    <div className="input_group">
                        <label className="input_field_label caption bold">confirm password</label>
                        <input 
                            type="password" 
                            className="input_field body_text" 
                            placeholder='Enter password'
                            value={newPass2}
                            onChange={e => setNewPass2(e.target.value)} 
                        />
                    </div>
                    <button type='submit' className='btn_text submit' onClick={handleSubmit}>change password</button>
                </form>
                <Link to='/login' className='btn_text forgot_pass'>Back to Login</Link>
            </div>
        </ScreenHolder>
    )
}

export default RecoverPassThree