import { useState } from "react"
import { MANAGE_EMPLOYEE_API } from "../../../../Utilities/APIs/APIs"
import Form from "../../../Partials/Layouts/Forms/Form"
import EmailInput from "../../../Partials/Layouts/Forms/FormInputs/EmailInput/EmailInput"
import FormSubmitButton from "../../../Partials/Layouts/Forms/FormSubmitButton/FormSubmitButton"
import useAxiosInstance from "../../../../Utilities/Hooks/useAxiosInstance"

function CreateInvite({employee, setShowCreateForm, setShowModal, triggerFetch}) {

    const [email, setEmail] = useState('')

    const axiosInstance = useAxiosInstance()

    async function handleSubmit(e) {
        e.preventDefault()

        const itemData = {}

        itemData.email = email
        
        const response = await axiosInstance.post(MANAGE_EMPLOYEE_API + 'employeeinvite', itemData)

        if (response) {
            setEmail('')

            setShowCreateForm(false)
            setShowModal(false)
            triggerFetch()
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <EmailInput
                label={'Email'}
                value={email}
                placeholder={'Please Enter an Email'}
                setState={setEmail}
            />
            <FormSubmitButton text='Send Invite to Email' />
        </Form>
    )

}

export default CreateInvite