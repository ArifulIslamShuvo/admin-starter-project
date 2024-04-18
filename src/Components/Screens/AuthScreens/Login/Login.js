import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../../Partials/Layouts/Forms/Form";
import EmailInput from "../../../Partials/Layouts/Forms/FormInputs/EmailInput/EmailInput";
import PasswordInput from "../../../Partials/Layouts/Forms/FormInputs/PasswordInput/PasswordInput";
import FormSubmitButton from "../../../Partials/Layouts/Forms/FormSubmitButton/FormSubmitButton";
import ScreenHolder from "../../../Partials/Layouts/ScreenHolder/ScreenHolder";

import "../Auth.css";
import AppContext from "../../../../Context/AppContext";

function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { login, employee, isLoading, isSuccess, isError, message } = useContext(AppContext);

    useEffect(() => {

        if (isError) {
            console.log(message);
        }

        if (isSuccess || employee) {
            navigate('/');
        }

        // reset();

    }, [employee, isError, isSuccess, message, navigate])

    function handleSubmit(e) {

        e.preventDefault();

        const employeeData = {
            email,
            password
        }

       login(employeeData);

    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

  return (
    <ScreenHolder>
      <div className="form_wrapper">
        <h3>Login</h3>
        <Form onSubmit={handleSubmit}>
          <EmailInput
            label={"Email"}
            value={email}
            placeholder={"Please Enter your Email"}
            setState={setEmail}
          />
          <PasswordInput
            label={"Password"}
            value={password}
            placeholder={"Please Enter your Password"}
            setState={setPassword}
          />
          <FormSubmitButton text={"Sign In"} />
        </Form>
        <Link to="/recover-pass-one" className="btn_text forgot_pass">
          forgot password
        </Link>
      </div>
    </ScreenHolder>
  );
}

export default Login;
