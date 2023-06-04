import * as yup from "yup";
import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormContext } from "../../services/Context";
import { ContextType } from "../../types/ContextType";


export const StepFour = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;
  const [monthlyYearly, setMonthlyYearly] = useState<string>(formData.monthlyOrYearly)

  const ValidationSchema = yup.object({
    monthlyOrYearly: yup.string()
  });

  const handleMonthlyYearly = () => {
    setMonthlyYearly(monthlyYearly === 'yearly' ? 'monthly' : 'yearly')
  }

  return (
    <div className="form-step-four form-item">
      <Formik initialValues={{ monthlyOrYearly: monthlyYearly }} validationSchema={ValidationSchema} onSubmit={(values) => {
        const data = { ...formData, ...values }
        /* setFormData(data)
        setActiveStepIndex(activeStepIndex + 1) */

        console.log(data)
      }}>
        <Form>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>

          <div className="card">
            <div className="change-total">
              <div>
                <p>Arcade ({monthlyYearly === 'monthly' ? 'Monthly' : 'Yearly'})</p>
                <ErrorMessage name="monthlyOrYearly"/>
                <Field type="radio" name="monthlyOrYearly" value="monthly" className={`change ${monthlyYearly === 'monthly' ? 'd-none' : ''}`} onClick={handleMonthlyYearly} />
                <Field type="radio" name="monthlyOrYearly" value="yearly" className={`change ${monthlyYearly === 'yearly' ? 'd-none' : ''}`} onClick={handleMonthlyYearly} />
              </div>
              <span>$9/mo</span>
            </div>
            <div className="services">
              <p>Online service<span>+$1/mo</span></p>
              <p>Larger storage<span>+$2/mo</span></p>
            </div>
          </div>
          <div className="total">
            <p>Total (per month/year)</p>
            <h4>+12/mo</h4>
          </div>


          <div className="button-next-container">
            <button className="button-back">Go Back</button>
            <button type="submit" className="button-confirm">Confirm</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}