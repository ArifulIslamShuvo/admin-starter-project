import axios from "axios";
import { useContext, useMemo } from "react";
import AppContext from "../../Context/AppContext";

function useAxiosInstance() {

    const {employee} = useContext(AppContext)

    const  axiosInstance = useMemo(() => axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + 'api/employeeApp/protected/',
        headers: {
            'Authorization': 'Bearer ' + employee?.token
        }
    }), [employee])

    return axiosInstance;
}

export default useAxiosInstance;