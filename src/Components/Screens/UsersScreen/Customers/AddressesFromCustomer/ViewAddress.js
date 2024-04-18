import axios from "axios"
import { useEffect, useState } from "react"
import { ADDRESSES_API, AREAS_API } from "../../../../../Utilities/APIs/APIs"

function ViewAddress({

  //common props
  targetID, employee

}) {

  const [address, setAddress] = useState(null)
  const [areas, setAreas] = useState(null)
  console.log(address)

  useEffect(() => {

    const config = {
        headers: {
            Authorization: `Bearer ${employee.token}`
        }
    }

    async function fetchAndSetAddress() {
    
        const {data} = await axios.get(ADDRESSES_API + 'getSingleAddress/' + targetID, config)

        setAddress(data[0]);
    }

    fetchAndSetAddress()

    async function fetchAndSetAreas() {
    
        const {data} = await axios.get(AREAS_API)

        setAreas(data);
    }

    fetchAndSetAreas()

    
  }, [targetID, employee.token])

  return (

    <div className="crud_view_content">

        <h1>Address Name</h1>
        <p>{address?.name}</p>

        <h1>Address Type</h1>
        <p>{address?.type}</p>

        <h1>Area</h1>
        <p>{areas?.find(area => area._id === address?.area)?.name}</p>

        <h1>Full Address</h1>
        <p>{address?.fullAddress}</p>

        <h1>Zip Code</h1>
        <p>{address?.zipCode}</p>

    </div>

  )
}

export default ViewAddress