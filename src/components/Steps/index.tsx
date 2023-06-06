import { useContext } from "react";
import { FormContext } from "../../common/Context";
import { ContextType } from "../../types/ContextType";

export const StepBar = () => {
  const { activeStepIndex, setActiveStepIndex, formData } = useContext(FormContext) as ContextType;

  const handleStepActive = (step: number) => {
    return activeStepIndex === step ? 'active' : ''
  }

  const handleClickButton = (step: number) => {
    if (activeStepIndex === 0) {
      if (formData.name !== '' && formData.email !== '' && formData.phone !== '') {
        setActiveStepIndex(step)
      }
    } else if (activeStepIndex === 1 ) {
      if (formData.plan !== '') {
        setActiveStepIndex(step)
      }
      if (step === 0) {
        setActiveStepIndex(step)
      }
    } else if (activeStepIndex === 4) {
      if (step === 0) {
        setActiveStepIndex(step)
      }
    } else {
      setActiveStepIndex(step)
    }

  }

  return (
    <div className="steps">
      <div className={`step-box ${handleStepActive(0)}`} onClick={() => handleClickButton(0)}>
        <button className="step-button">1</button>
        <div className="step-info">
          <span>step 1</span>
          <p>Your info</p>
        </div>
      </div>

      <div className={`step-box ${handleStepActive(1)}`} onClick={() => handleClickButton(1)}>
        <button className="step-button">2</button>
        <div className="step-info">
          <span>step 2</span>
          <p>Select plan</p>
        </div>
      </div>

      <div className={`step-box ${handleStepActive(2)}`} onClick={() => handleClickButton(2)}>
        <button className="step-button">3</button>
        <div className="step-info">
          <span>step 3</span>
          <p>Add-ons</p>
        </div>
      </div>

      <div className={`step-box ${handleStepActive(3)} ${handleStepActive(4)}`} onClick={() => handleClickButton(3)}>
        <button className="step-button">4</button>
        <div className="step-info">
          <span>step 4</span>
          <p>Summary</p>
        </div>
      </div>
    </div>
  )
}