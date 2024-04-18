import { useEffect, useState } from "react"
import axios from "axios"
import { EMPLOYEES_API, MANAGR_RESTAURANTS_API, RESTAURANT_MANAGER_API } from "../../../../Utilities/APIs/APIs"
import Form from "../../../Partials/Layouts/Forms/Form";

import FormSubmitButton from "../../../Partials/Layouts/Forms/FormSubmitButton/FormSubmitButton";
import SelectInput from "../../../Partials/Layouts/Forms/FormInputs/SelectInput/SelectInput";
import SelectOption from "../../../Partials/Layouts/Forms/FormInputs/SelectInput/SelectOption/SelectOption";
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance";

function CreateRestaurantManager({

    employee, targetID, setShowRestaurantManager, setShowModal, triggerFetch

}) {
    console.log(targetID);
    const [restaurant, setRestaurant] = useState('')
    const [restaurants, setRestaurants] = useState(null)
    const [checkManager, setCheckManager] = useState(null)
    const axiosInstance = useAxiosInstance();

    useEffect(() => {
        async function fetchAndSetRestaurants() {
            const { data } = await axiosInstance.get(MANAGR_RESTAURANTS_API)
            setRestaurants(data)
        }
        fetchAndSetRestaurants()
    }, [axiosInstance])

    useEffect(() => {
        async function fetchAndSetCheckManager() {
            const { data } = await axios.get(EMPLOYEES_API + 'checkManagerAssignedOrNot/' + targetID,)
            setCheckManager(data)
        }
        fetchAndSetCheckManager()
    }, [targetID, employee.token])


    async function handleSubmit(e) {

        e.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${employee.token}`
            }
        }

        const itemData = { employee: targetID, restaurant }
        let response;
        response = await axios.post(RESTAURANT_MANAGER_API, itemData, config)
        if (checkManager?.restaurant) {
            response = await axios.patch(EMPLOYEES_API + 'updateRestaurantManager/' + targetID, itemData, config)
        }
        if (!checkManager?.restaurant) {
            response = await axios.post(RESTAURANT_MANAGER_API, itemData, config)
        }


        if (response) {

            setShowRestaurantManager(false);
            setShowModal(false);
            triggerFetch()
        }
    }

    return (
        <>
            <h1>Assigned to:</h1>
            {
                checkManager?.restaurant ? <p>{checkManager?.restaurant}</p> : 'Not Assigned to any restaurant'
            }
            <br />

            <Form onSubmit={handleSubmit} >
                <h1>Select Restaurant to Assign</h1>
                <SelectInput value={restaurant} setState={setRestaurant}>
                    <SelectOption optionValue={''} optionText={`Select Restaurant`} />
                    {restaurants && restaurants.map(restaurant => (
                        <SelectOption key={restaurant._id} optionValue={restaurant._id} optionText={restaurant.name} />
                    ))}
                </SelectInput>


                <FormSubmitButton text='Assign' />
            </Form>
        </>
    )
}

export default CreateRestaurantManager