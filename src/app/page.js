"use client"
import { ContactInfoStep } from "@/components/ContactInfoStep";
import { FormHeader } from "@/components/FormHeader";
import { ProfileInfoStep } from "@/components/ProfileInfoStep";
import { UserInfoStep } from "@/components/UserInfoStep";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    profileImage: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    profileImage: "",
  })

  const steps = [UserInfoStep, ContactInfoStep, ProfileInfoStep];
  const Component = steps[currentStep];

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  }
  
  const nextStep = () => {
    if(currentStep == steps.length -1) return;
    setCurrentStep((prev) => prev + 1);

    window.localStorage.setItem("multi-step-form", JSON.stringify({ formValues, currentStep: currentStep + 1 }));
  }

  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem("multi-step-form"))

    if(!localStorage) return;

    setFormValues(localStorage.formValues)
    setCurrentStep(localStorage.currentStep)
  }, [])

  const isEqual = currentStep == steps.length

  return (
    <div className={"p-8 bg-white rounded-lg w-[460px] h-[685px] relative"}>
      <FormHeader title={isEqual ? "You're All Set" : "Join us! 😎"} description={isEqual ? "We have recieved your submission. Thank you!" :"Please provide all current information accurately."} />

      <div className="mt-7 space-y-2">
        {currentStep < steps.length && <Component
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={currentStep} />}
      </div>

    </div>
  );
}
