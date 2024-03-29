import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";
import { StepFour } from "../StepFour";
import IconThank from '../../assets/images/icon-thank-you.svg'
import { StepBar } from "../../components/Steps";
import { useEffect, useState } from "react";
import { FormContext } from "../../common/Context";
import { FormType } from "../../types/FormType";

const Step = (activeStepIndex: number) => {
  switch (activeStepIndex) {
    case 0:
      return <StepOne />
    case 1:
      return <StepTwo />
    case 2:
      return <StepThree />
    case 3:
      return <StepFour />
    case 4:
      return (
        <div className="form-step-five form-item">
          <img src={IconThank} alt="" />
          <h1>Thank you!</h1>
          <p>Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.</p>
        </div>
      )
  }
}
export const Home = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [formData, setFormData] = useState<FormType>({name: '', email: '', phone: '', plan: '', monthlyOrYearly: 'monthly', addOns: []})

  useEffect(() => {
    if (activeStepIndex === 4) {
      setFormData({name: '', email: '', phone: '', plan: '', monthlyOrYearly: 'monthly', addOns: []})

      setTimeout(() => {
        setActiveStepIndex(0)
      }, 10000)
    }
  }, [activeStepIndex])

  return (
    <FormContext.Provider value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
      <div className="home">
        <div className="container">
          <StepBar />

          <div className="form-container">
            {Step(activeStepIndex)}
          </div>
        </div>
      </div>
    </FormContext.Provider>
  )
}