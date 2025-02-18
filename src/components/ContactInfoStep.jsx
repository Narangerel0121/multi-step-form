import { ContinueButton } from "./ContinueButton"
import { InputFiled } from "./InputField"

export const ContactInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {

        event.preventDefault()

        if (!formValues.email) {
            setFormErrors((prev) => ({ ...prev, email: "Email haygaa boglono uu" }))
        }

        if (!formValues.phoneNumber) {
            setFormErrors((prev) => ({ ...prev, phoneNumber: "Dugaaraa boglono uu" }))
        }

        if (!formValues.password) {
            setFormErrors((prev) => ({ ...prev, password: "Kodoo boglono uu" }))
        }

        if (!formValues.confirmPassword) {
            setFormErrors((prev) => ({ ...prev, confirmPassword: "Dahin kodoo boglono uu" }))
        }

        if(!formValues.email || !formValues.phoneNumber || !formValues.password || !formValues.confirmPassword) {
            return;
        }

        nextStep();

    }

    return (
        <form onSubmit={handleNext}>

            <InputFiled required label="Email" name="email" onChange={onChange} placeholder={"Enter your email"} error={formErrors['email']} />

            <InputFiled required label="Phone number" name="phoneNumber" onChange={onChange} placeholder={"Enter your phone number"} error={formErrors['phoneNumber']} />

            <InputFiled required label="Password" name="password" onChange={onChange} placeholder={"Enter your password"} error={formErrors['password']} />

            <InputFiled required label="Confirm password" name="confirmPassword" onChange={onChange} placeholder={"Enter your password again"} error={formErrors['confirmPassword']} />


            <ContinueButton
                currentStep={currentStep} />
        </form>
    )
}