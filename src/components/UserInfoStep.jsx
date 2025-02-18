import { ContinueButton } from "./ContinueButton"
import { InputFiled } from "./InputField"

export const UserInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {

        event.preventDefault()

        if (!formValues.firstName) {
            setFormErrors((prev) => ({ ...prev, firstName: "Neree boglono uu" }))
        }

        if (!formValues.lastName) {
            setFormErrors((prev) => ({ ...prev, lastName: "Ovgoo boglono uu" }))
        }

        if (!formValues.userName) {
            setFormErrors((prev) => ({ ...prev, userName: "Hereglegchiin neree boglono uu" }))
        }

        if( !formValues.firstName || !formValues.lastName || !formValues.userName) {
            return;
        }

        nextStep();

    }

    return (
        <form onSubmit={handleNext}>
            <InputFiled required label="First name" name="firstName" onChange={onChange}  placeholder={"Enter your first name"} error={formErrors['firstName']}/>

            <InputFiled required label="Last name" name="lastName" onChange={onChange}  placeholder={"Enter your last name"} error={formErrors['lastName']}/>

            <InputFiled required label="User name" name="userName" onChange={onChange}  placeholder={"Enter your user name"} error={formErrors['userName']}/>

            <ContinueButton
                currentStep={currentStep} />

        </form>
    )
}