import axios from "axios";

function useAxiosAuthInstance() {

    const  axiosAuthInstance = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + 'api/employeeApp/public/auth',
    })

    return axiosAuthInstance;
}

export default useAxiosAuthInstance;