import { useState, useEffect } from "react"
import axios from "axios"
import { EMPLOYEES_API, IMAGE_URL } from "../../../../Utilities/APIs/APIs"


function ViewEmployee({

    //common props
    targetID, employee

}) {

    const [managerInfo, setManagerInfo] = useState(null)

    useEffect(() => {
        async function fetchAndSetManagerInfo() {
            const config = {
                headers: {
                    Authorization: `Bearer ${employee.token}`
                }
            }
            const { data } = await axios.get(EMPLOYEES_API + 'getSingleEmployee/' + targetID, config)
            setManagerInfo(data);
        }
        fetchAndSetManagerInfo()
    }, [targetID , employee.token])

    return (

        <div className="crud_view_content">

            {managerInfo &&
                <>
                    <h1>Name</h1>
                    <p>{managerInfo.name}</p>
                    <h1>Image</h1>
                    <img src={IMAGE_URL + managerInfo.dp} alt="" />
                    <h1>Email</h1>
                    <p>{managerInfo.email}</p>
                    <h1>Level</h1>
                    <p>{managerInfo.level}</p>
                   

                </>
            }
        </div>
    )
}

export default ViewEmployee