"use client"
import { ContactInfoStep } from "@/components/ContactInfoStep";
import { FormHeader } from "@/components/FormHeader";
import { UserInfoStep } from "@/components/UserInfoStep";
import React, { useState } from "react";

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
    image: "",
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
    image: "",
  })

  const steps = [UserInfoStep, ContactInfoStep];
  const Component = steps[currentStep];
  const nextStep = (event) => {
    setCurrentStep((prev) => prev + 1)
  }

  return (
    <div className="p-8 bg-white rounded-lg w-[460px] h-[655px] relative">
      <FormHeader />

      <div className="mt-7 space-y-2">
        <Component
          formValues={formValues}
          setFormValues={setFormValues}
          form
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          nextStep={nextStep}
          currentStep={currentStep} />
      </div>

    </div>
  );
}
