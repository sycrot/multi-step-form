import * as yup from "yup";
import { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FormContext } from "../../services/Context";
import { ContextType } from "../../types/ContextType";

export const StepTwo = () => {
  const [monthlyOrYearly, setMonthlyOrYearly] = useState<string>('monthly');
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;

  const ValidationSchema = yup.object().shape({
    plan: yup.string().required(),
    monthlyOrYearly: yup.string().required()
  })

  const handleMonthlyYearly = () => {
    setMonthlyOrYearly(monthlyOrYearly === 'yearly' ? 'monthly' : 'yearly')
  }

  return (
    <div className="form-step-two form-item">
      <Formik initialValues={{ plan: '', monthlyOrYearly: 'monthly' }} validationSchema={ValidationSchema} onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        setActiveStepIndex(activeStepIndex + 1)
      }}>
        <Form>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>

          <div className="plans-container">
            <div className="box-check-plan">
              <div className="label arcade">
                <label htmlFor="arcade">Arcade<p>$9/mo</p>{monthlyOrYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
              </div>
              <Field id="arcade" type="radio" name="plan" value="arcade" />
            </div>
            <div className="box-check-plan">
              <div className="label advanced">
                <label htmlFor="advanced">Advanced<p>$12/mo</p>{monthlyOrYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
              </div>
              <Field id="advanced" type="radio" name="plan" value="advanced" />
            </div>
            <div className="box-check-plan">
              <div className="label pro">
                <label htmlFor="pro">Pro<p>$15/mo</p>{monthlyOrYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
              </div>
              <Field id="pro" type="radio" name="plan" value="pro" />
            </div>
          </div>

          <div className="select-monthly-yearly">
            <label htmlFor="monthly" className={`${monthlyOrYearly === 'monthly' ? 'active' : ''}`}>Monthly</label>
            <div className={`input-key ${monthlyOrYearly === 'yearly' ? 'circle-right' : 'circle-left'}`}>
              <Field id="monthlyYearly" name="monthlyOrYearly" type="radio" value="monthly" className={monthlyOrYearly === 'monthly' ? 'd-none' : ''} onClick={handleMonthlyYearly}/>
              <Field id="monthlyYearly" name="monthlyOrYearly" type="radio" value="yearly" className={monthlyOrYearly === 'yearly' ? 'd-none' : ''} onClick={handleMonthlyYearly}/>
            </div>

            <label htmlFor="monthly" className={`${monthlyOrYearly === 'yearly' ? 'active' : ''}`}>Yearly</label>
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