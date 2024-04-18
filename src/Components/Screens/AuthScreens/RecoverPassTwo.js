import { Link } from 'react-router-dom'
import ScreenHolder from '../../Partials/Layouts/ScreenHolder/ScreenHolder';

import './Auth.css';

function RecoverPassTwo() {
    return (
        <ScreenHolder>
            <div className="form_wrapper">
                <h3>Check your email</h3>
                <p className="auth_status">If we found an account with <span>email@email.com</span>, an email has been sent. Please check your email in a moment.</p>
                <div className="dha_box" style={{ marginTop: '0' }}>
                    <p className="body_text">Didn’t receive a link?</p>
                    <button type='submit' className='btn_text sign_up'>resend email</button>
                </div>
                <Link to='/login' className='btn_text forgot_pass'>Back to Login</Link>
            </div>
        </ScreenHolder>
    )
}

export default RecoverPassTwo