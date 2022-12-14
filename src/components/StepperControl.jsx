import React from 'react'; 
export default function StepperControl({ handleClick, currentStep, steps, open }) {
  //* const { listUser, values, setValues, userData, setUserData, open, setOpen } = useStepperContext();
  //* const { open } = useStepperContext();
  console.log(open);
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        disabled={open}
        onClick={() => handleClick("next")}
        className={`cursor-pointer rounded-lg 
        ${open ? "bg-gray-200 text-gray-400": "bg-green-500 text-white"} py-2 px-4 font-semibold uppercase
         text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white`}
      >
        {currentStep === steps.length - 1 ? "Enviar" : "Siguiente"}
      </button>
    </div>
  );
}
