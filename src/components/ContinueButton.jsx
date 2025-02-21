export const ContinueButton = ({ currentStep, prevStep, length }) => {
  return (
    <div className="absolute w-full left-0 bottom-8 px-8">
      {currentStep != 0 && <button type="button" onClick={prevStep} className="py-3 px-6 border border-black rounded-2xl mr-3">Back</button>}

      <button type="submit" className={`${currentStep == 0 ? "w-full" : ""}  text-white py-3 px-24 bg-black rounded-2xl`}>Continue <span>{(currentStep + 1)} / {length} </span> </button>
    </div>
  )
}