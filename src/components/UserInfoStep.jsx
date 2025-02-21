import { ContinueButton } from "./ContinueButton"
import { InputField } from "./InputField"

export const UserInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors, length }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        setFormErrors((prev) => ({ ...prev, [event.target.name]: '' }))
    }

    const handleNext = (event) => {

        event.preventDefault()

        if (!formValues.firstName) {
            setFormErrors((prev) => ({ ...prev, firstName: "Hooson baina" }))
        }

        if (!formValues.lastName) {
            setFormErrors((prev) => ({ ...prev, lastName: "Hooson baina" }))
        }

        if (!formValues.userName) {
            setFormErrors((prev) => ({ ...prev, userName: "Hooson baina" }))
        }

        if( !formValues.firstName || !formValues.lastName || !formValues.userName) {
            return;
        }

        nextStep();

    }

    return (
        <form onSubmit={handleNext}>
            <InputField required label="First name" name="firstName" onChange={onChange}  placeholder={"Enter your first name"} error={formErrors['firstName']} value={formValues.firstName} />

            <InputField required label="Last name" name="lastName" onChange={onChange}  placeholder={"Enter your last name"} error={formErrors['lastName']} value={formValues.lastName} />

            <InputField required label="User name" name="userName" onChange={onChange}  placeholder={"Enter your user name"} error={formErrors['userName']} value={formValues.userName} />

            <ContinueButton
                currentStep={currentStep} prevStep={prevStep} length={length}/>

        </form>
    )
}