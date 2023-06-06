import { useContext } from "react";
import { FormContext } from "../common/Context";
import { ContextType } from "../types/ContextType";


export const ButtonsContainer = () => {
  const { activeStepIndex, setActiveStepIndex } = useContext(FormContext) as ContextType;

  const handleBackStep = () => {
    setActiveStepIndex(activeStepIndex - 1)
  }

  return (
    <div className="button-next-container">
      {activeStepIndex !== 0 &&
        <button type="button" className="button-back" onClick={handleBackStep}>Go Back</button>
      }

      <button type="submit" className={`button-submit ${activeStepIndex === 3 ? 'button-confirm' : 'button-next'}`}>{activeStepIndex === 3 ? 'Confirm' : 'Next Step'}</button>
    </div>
  )
}