import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { FormContext } from "../../services/Context";
import { ContextType } from "../../types/ContextType";

export const StepThree = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;

  const ValidationSchema = yup.object({
    addOns: yup.array()
  })

  const handleBoxCheck = (event: any) => {
    let check = document.querySelectorAll('label');

    if (event.target.checked) {
      check.forEach(e => {
        if (event.target.id === e?.htmlFor) {
          e?.classList.add("box-check")
        }
      })

    } else {
      check.forEach(e => {
        if (event.target.id === e?.htmlFor) {
          e?.classList.remove("box-check")
        }
      })
    }
  }

  return (
    <div className="form-step-three form-item">
      <Formik initialValues={{ addOns: '' }} validationSchema={ValidationSchema} onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        setActiveStepIndex(activeStepIndex + 1)
      }}>
        <Form>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

          <div className="check-pick">
            <Field id="onlineService" type="checkbox" name="addOns" value="onlineService" className="checkboxPick" onClick={handleBoxCheck} />
            <div className="check-info">
              <label htmlFor="onlineService" className="box"></label>
              <div className="check-content">
                <p className="check-text">Online service</p>
                <span>Access to multiplayer games</span>
              </div>
            </div>
            <div className="target">+$1/mo</div>
          </div>

          <div className="check-pick">
            <Field id="largerStorage" type="checkbox" name="addOns" value="largerStorage" className="checkboxPick" onClick={handleBoxCheck} />
            <div className="check-info">
              <label htmlFor="largerStorage" className="box"></label>
              <div className="check-content">
                <p className="check-text">Larger storage</p>
                <span>Extra 1TB of cloud save</span>
              </div>
            </div>
            <div className="target">+$2/mo</div>
          </div>

          <div className="check-pick">
            <Field id="customizableProfile" type="checkbox" name="addOns" value="customizableProfile" className="checkboxPick" onClick={handleBoxCheck}/>
            <div className="check-info">
              <label htmlFor="customizableProfile" className="box"></label>
              <div className="check-content">
                <p className="check-text">Customizable Profile</p>
                <span>Custom theme on your profile</span>
              </div>
            </div>
            <div className="target">+$2/mo</div>
          </div>

          <div className="button-next-container">
            <button className="button-back">Go Back</button>
            <button type="submit" className="button-next">Next Step</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}