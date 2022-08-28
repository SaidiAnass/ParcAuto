import PersonForm from './PersonForm'
import CarForm from './CarForm'
import ServiceForm from './ServiceForm'
import Success from './Success'
import React, { Component } from 'react'





export class AddingForm extends Component {

  state = {
    step: 1,
    contractFields: {
    },
  }

  updateContractFields = (data) => {
    this.setState((contractFields) => ({ ...contractFields, data }))
    console.log(this.state.contractFields)
  }//retaining data across the multi-step from 


  //Proceed to next Step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  //Go back to the previous Step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  render() {
    const { step } = this.state //to handle the form stepper
    const { contractFields } = this.state

    //to route to the proper form according to the step
    switch (step) {
      case 1:
        return (
          <PersonForm
            nextStep={this.nextStep} //props to pass the nextStep function to the PersonForm to use it in the continue button & handle the fields
            handleChange={this.handleChange}
            contract={contractFields}
            updateConstactFields={this.updateContractFields}
          />
        )
      case 2:
        return (
          <CarForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            contract={contractFields}
            updateConstactFields={this.updateContractFields}
          />
        )
      case 3:
        return (
          <ServiceForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            contract={contractFields}
            updateConstactFields={this.updateContractFields}
          />
        )
      case 4:
        return <Success />
      default:
        return (
          <p>
            <h1>ERROR !!</h1>
          </p>
        )
    }
  }
}

export default AddingForm
