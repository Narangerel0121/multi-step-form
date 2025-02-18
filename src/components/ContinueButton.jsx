export const ContinueButton = ({ nextStep, currentStep }) => {
    return (
        <div className="absolute w-full inset-x-8 bottom-8">
        {currentStep != 1 && <button className="p-3 border border-black rounded-2xl mr-2">Back</button>}

        <button type="submit" className="p-3 border border-black rounded-2xl mr-2">Continue <span>{currentStep} / 3</span> </button>
      </div>  
    )
}