import React, { useState, useRef } from "react";
import { InputField } from "./InputField";
import { ContinueButton } from "./ContinueButton";
export const ProfileInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors, length }) => {

    const imageRef = useRef();


    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        setFormErrors((prev) => ({ ...prev, [event.target.name]: "" }))
    }

    const handleImage = (event) => {

        const image = window.URL.createObjectURL(event.target.files[0]);

        setFormValues((prev) => ({ ...prev, [event.target.name]: image }))

    }

    const uploadImage = () => {
        imageRef.current.click()
    }

    const handleNext = (event) => {
        event.preventDefault()

        if (!formValues.date) {
            setFormErrors((prev) => ({ ...prev, date: "Torson odroo oruulaagui baina" }))
        }

        const birthDate = new Date(formValues.date);
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 18);
        if (currentDate < birthDate) {
            setFormErrors((prev) => ({ ...prev, date: "Nasand hureegui baina!" }))
        }

        if (!formValues.profileImage) {
            setFormErrors((prev) => ({ ...prev, profileImage: "Zurag oruulaagui baina" }))
        }

        if (!formValues.date || !formValues.profileImage) {
            return;
        }

        nextStep();

    }
    return (
        <form onSubmit={handleNext}>
            <InputField type="date" required label="date" name="date" onChange={onChange} error={formErrors['date']} value={formValues.date} />

            <div>
                <div className="mt-7">
                    <label className="text-sm font-semibold text-[#334155] ">Profile image <span className="text-red-700">*</span> </label>
                    <div className="h-[210px] w-full bg-gray-50 rounded-lg flex justify-center items-center cursor-pointer text-center" onClick={uploadImage}>

                        {formValues.profileImage ? <img className="h-full w-full object-cover" src={formValues.profileImage} /> : "Add image"}

                    </div>
                    <input name="profileImage" className="hidden" type='file' ref={imageRef} onChange={handleImage}  />
                    {
                        formErrors && <p className="text-red-700">{formErrors['profileImage']}</p>
                    }
                </div>


            </div>
            <ContinueButton
                currentStep={currentStep} prevStep={prevStep} length={length} />
        </form>
    )
}