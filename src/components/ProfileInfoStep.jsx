import React, { useState, useRef } from "react";
import { InputFiled } from "./InputField";
import { ContinueButton } from "./ContinueButton";
export const ProfileInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

    const imageRef = useRef();

    const [preview, setPreview] = useState("")

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        setFormErrors((prev) => ({ ...prev, [event.target.name]: ""}))
    }

    const handleImage = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.files[0] }))
        setPreview(window.URL.createObjectURL(event.target.files[0]))
    }

    const uploadImage = () => {
        imageRef.current.click()
    }

    const handleNext = (event) => {

        event.preventDefault()

        if (!formValues.date) {
            setFormErrors((prev) => ({ ...prev, date: "Hooson baina" }))
        }

        if (!formValues.profileImage) {
            setFormErrors((prev) => ({ ...prev, profileImage: "Zurag oruulaagui baina" }))
        }

        nextStep();

    }
    return (
        <form onSubmit={handleNext}>
            <InputFiled type="date" required label="date" name="date" onChange={onChange} error={formErrors['date']} value={formValues.date} />

            <div className="mt-7">
                <label className="text-sm font-semibold text-[#334155] ">Profile image <span className="text-red-700">*</span> </label>
                <div className="h-[180px] w-full bg-gray-50 rounded-lg flex justify-center items-center cursor-pointer text-center" onClick={uploadImage}>

                    {preview ? <img className="h-full w-full object-cover" src={preview} /> : "Add image"}

                </div>
                <input name="profileImage" className="hidden" type='file' ref={imageRef} onChange={handleImage} />
            </div>

            <ContinueButton
                currentStep={currentStep} prevStep={prevStep} />
        </form>
    )
}