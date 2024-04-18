import { createContext, useState } from "react";
import { LOGIN_API, REGISTER_API } from './../Utilities/APIs/AuthAPIs/AuthAPIs';

// import { useNavigate } from "react-router-dom";
import useAxiosAuthInstance from './../Utilities/Hooks/AxiosInstanceHooks/useAxiosAuthInstance';

const AuthContext = createContext({})


function AuthContextProvider({ children }) {

    // const navigate = useNavigate()
    const axiosAuthInstance = useAxiosAuthInstance()

    const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem('employee')))
    // const [isLoading, setIsLoading] = useState(false)

    async function register(employeeData) {

        try {
        const response = await axiosAuthInstance.post(REGISTER_API, employeeData);

            if (response.data) {
                setEmployee(response.data)
                localStorage.setItem('employee', JSON.stringify(response.data))
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    async function login(employeeData) {
        try {
            // setIsLoading(true)
            const response = await axiosAuthInstance.post(LOGIN_API, employeeData);
        

            if (response.data) {
                setEmployee(response.data)
                localStorage.setItem('employee', JSON.stringify(response.data))
                // setIsLoading(false)
            } 

        } catch (error) {

        }
    }

    function logout() {
        setEmployee(null)
        localStorage.removeItem('employee')
        // navigate('/auth/login')
    }


    return (
        <AuthContext.Provider
            value={{
                register,
                login,
                logout,
                employee,
                // isLoading,
                // setIsLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContextProvider
}

export default AuthContext;