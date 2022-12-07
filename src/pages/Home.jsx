import { useState, useContext } from "react";
import Stepper from "../components/Stepper";
import { useParams } from "react-router-dom";
import StepperControl from "../components/StepperControl";
import Account from "../components/steps/Account";
import Final from "../components/steps/Final";
import { UserContext } from "../contexts/StepperContext.jsx";
// import { UseContextProvider } from "../contexts/StepperContext";
import { storeForm } from "../components/service";
import Swal from "sweetalert2";

function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  // const { listUser, values, setValues } = React.useContext(UserContext);
  const {listUser, values, setValues, open, setOpen } = useContext(UserContext);
  // const { listUser, values, setValues, userData, setUserData, open, setOpen } = useStepperContext();
  const params = useParams();
  const steps = [];

  for (var i = 0; i <= parseInt(params.numPassenger); i++) {
    steps.push(i);
  }

  const displayStep = (step) => {
     switch (step) {
       default:
         if (step === parseInt(params.numPassenger) + 1) {
           return <Final />
         }
         return <Account key={step}/>;
     }
  };

  const fetchStoreForm = (id) => {
    if (listUser.filter(passenger => passenger.tCodigoPasajero === values.tCodigoPasajero).length >= 1) {
      listUser[id] = values;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Modificado`,
        showConfirmButton: false,
        timer: 2000,
        color: '#000',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else {
      listUser.push(values);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Agregado`,
        showConfirmButton: false,
        timer: 2000,
        color: '#000',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    if ((id + 1) === parseInt(params.numPassenger)) {
      Swal.fire({
        title: `El formulario se enviara con la informaión de ${listUser.length} pasajeros`,
        showCancelButton: true,
        confirmButtonText: 'Registrar Pasajeros',
      }).then((result) => {
        if (result.isConfirmed) {
          // fetchBtn()
          Swal.fire('Enviado Correctamente', '', 'success')
        }
      });
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    listUser.push(values)
    console.log(listUser);
    setValues({}) 
    
    console.log(values);
    // fetchStoreForm()
  };

  return (
    <center>
      <div className="mx-4 rounded-2xl w-auto bg-white pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="my-4 p-4">
         
             {displayStep(currentStep)}
         
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
	    open={open}
          />
        )}
      </div>
    </center>
  );
}

export default Home;
