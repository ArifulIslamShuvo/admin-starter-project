import axios from "axios"
import { useEffect, useState } from "react"
import { CUSTOMERS_API, MANAGE_CUSTOMERS_API } from "../../../../Utilities/APIs/APIs"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance";

function ViewCustomer({

    //common props
    targetID, employee

}) {

    const [customer, setCustomer] = useState(null)
    const axiosInstance = useAxiosInstance();

    useEffect(() => {

        async function fetchAndSetCustomer() {
        
            const {data} = await axiosInstance.get(MANAGE_CUSTOMERS_API + 'getSingleCustomer/' + targetID)
  
            setCustomer(data);
        }
    
        fetchAndSetCustomer()
  
        
      }, [targetID, axiosInstance])

    return (

        <div className="crud_view_content">

            <h1>Name</h1>
            <p>{customer?.name}</p>

            <h1>Email</h1>
            <p>{customer?.email}</p>

            <h1>Phone</h1>
            <p>{customer?.mobile}</p>

            {
                customer?.dp &&
                <>
                    <h1>Image</h1>
                    <p>{customer?.dp}</p>
                </>
            }

        </div>

    )
}

export default ViewCustomer