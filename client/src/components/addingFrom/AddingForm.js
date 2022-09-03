import PersonForm from './PersonForm'
import CarForm from './CarForm'
import ServiceForm from './ServiceForm'
import Success from './Success'
import React, { useState } from 'react'

const AddingForm = () => {

  const [step, setStep] = useState(1)
  const [contractFields, setContractFields] = useState({});

  //Proceed to next Step
  const nextStep = () => {
    setStep(step + 1)
  }

  //Go back to the previous Step
  const prevStep = () => {
    setStep(step - 1)

  }

  const updateContractFields = (data) => {
    setContractFields((prevContractFields) => ({ ...prevContractFields, ...data }))
  }


  //to route to the proper form according to the step
  switch (step) {
    case 1:
      return (
        <PersonForm
          nextStep={nextStep} //props to pass the nextStep function to the PersonForm to use it in the continue button & handle the fields
          contractFields={contractFields}
          updateContractFields={updateContractFields}
        />
      )
    case 2:
      return (
        <CarForm
          nextStep={nextStep}
          prevStep={prevStep}
          contractFields={contractFields}
          updateContractFields={updateContractFields}
        />
      )
    case 3:
      return (
        <ServiceForm
          nextStep={nextStep}
          prevStep={prevStep}
          contractFields={contractFields}
          updateContractFields={updateContractFields}
        />
      )
    case 4:
      return <Success contractFields={contractFields} />
    default:
      return (
        <p>
          <h1>ERROR !!</h1>
        </p>
      )
  }
}

export default AddingForm
