import { useState } from "react";
import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";
import { StepFour } from "../StepFour";
import IconThank from '../../assets/images/icon-thank-you.svg'

type steps = 'Step1' | 'Step2' | 'Step3' | 'Step4' | 'Step5'

export const Home = () => {
  const [step, setStep] = useState<steps>('Step1')

  const onSubmit = (data: any) => {
    console.log(data)

    if (step === 'Step1') {
      setStep('Step2');
    } else if (step === 'Step2') {
      setStep('Step3');
    } else if (step === 'Step3') {
      setStep('Step4')
    } else if (step === 'Step4') {
      setStep('Step5')
    }
  }

  const handleBackStep = () => {
    if (step === 'Step2') {
      setStep('Step1');
    } else if (step === 'Step3') {
      setStep('Step2')
    } else if (step === 'Step4') {
      setStep('Step3')
    }
  }

  return (
    <div className="home">
      <div className="container">
        <div className="steps">
          <div className="step-box active">
            <button className="step-button">1</button>
            <div className="step-info">
              <span>step 1</span>
              <p>Your info</p>
            </div>
          </div>

          <div className="step-box">
            <button className="step-button">2</button>
            <div className="step-info">
              <span>step 2</span>
              <p>Select plan</p>
            </div>
          </div>

          <div className="step-box">
            <button className="step-button">3</button>
            <div className="step-info">
              <span>step 3</span>
              <p>Add-ons</p>
            </div>
          </div>

          <div className="step-box">
            <button className="step-button">4</button>
            <div className="step-info">
              <span>step 4</span>
              <p>Summary</p>
            </div>
          </div>
        </div>

        <div className="form-container">
          {step === 'Step1' &&
            <StepOne onSubmit={onSubmit} />
          }
          {step === 'Step2' &&
            <StepTwo onSubmit={onSubmit} />
          }
          {step === 'Step3' &&
            <StepThree onSubmit={onSubmit} />
          }
          {
            step === 'Step4' &&
            <StepFour onSubmit={onSubmit} />
          }
          {
            step === 'Step5' &&
            <div className="form-step-five form-item">
              <img src={IconThank} alt="" />
              <h1>Thank you!</h1>
              <p>Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}