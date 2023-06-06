import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { FormContext } from "../../common/Context";
import { ContextType } from "../../types/ContextType";
import { ButtonsContainer } from "../../components/ButtonsContainer";
import { handlePriceService } from "../../common/PriceService";

export const StepThree = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;

  const ValidationSchema = yup.object({
    addOns: yup.array()
  })

  const onChange = (event: any) => {
    let check = document.querySelectorAll('label');
    let data = { ...formData }
    let addOns = [...formData.addOns || '']

    if (event.target.checked) {
      check.forEach(e => {
        if (event.target.id === e?.htmlFor) {
          e?.classList.add("box-check")
        }
      })
      
      addOns.push(event.target.value)

      data.addOns = addOns

      setFormData(data)

    } else {
      let index = addOns.indexOf(event.target.value)

      if (index > -1) {
        addOns.splice(index, 1)
      }

      data.addOns = addOns

      setFormData(data)
      
      check.forEach(e => {
        if (event.target.id === e?.htmlFor) {
          e?.classList.remove("box-check")
        }
      })
    }


  }

  const handleBoxCheckLabel = (label: string) => {
    return formData.addOns?.find((e: string) => e === label) ? 'box-check' : ''
  }

  return (
    <div className="form-step-three form-item">
      <Formik initialValues={{ addOns: formData.addOns || [''] }} validationSchema={ValidationSchema} onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        setActiveStepIndex(activeStepIndex + 1)
      }}>
        <Form>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

          <div className="check-pick">
            <Field id="onlineService" type="checkbox" name="addOns" value="onlineService" className="checkboxPick" onClick={onChange} />
            <div className="check-info">
              <label htmlFor="onlineService" className={`box ${handleBoxCheckLabel('onlineService')}`}></label>
              <div className="check-content">
                <p className="check-text">Online service</p>
                <span>Access to multiplayer games</span>
              </div>
            </div>
            <div className="target">+{handlePriceService(1, formData)}</div>
          </div>

          <div className="check-pick">
            <Field id="largerStorage" type="checkbox" name="addOns" value="largerStorage" className="checkboxPick" onClick={onChange} />
            <div className="check-info">
              <label htmlFor="largerStorage" className={`box ${handleBoxCheckLabel('largerStorage')}`}></label>
              <div className="check-content">
                <p className="check-text">Larger storage</p>
                <span>Extra 1TB of cloud save</span>
              </div>
            </div>
            <div className="target">+{handlePriceService(2, formData)}</div>
          </div>

          <div className="check-pick">
            <Field id="customizableProfile" type="checkbox" name="addOns" value="customizableProfile" className="checkboxPick" onClick={onChange} />
            <div className="check-info">
              <label htmlFor="customizableProfile" className={`box ${handleBoxCheckLabel('customizableProfile')}`}></label>
              <div className="check-content">
                <p className="check-text">Customizable Profile</p>
                <span>Custom theme on your profile</span>
              </div>
            </div>
            <div className="target">+{handlePriceService(2, formData)}</div>
          </div>

          <ButtonsContainer />
        </Form>
      </Formik>
    </div>
  )
}