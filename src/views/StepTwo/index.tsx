import * as yup from "yup";
import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { FormContext } from "../../common/Context";
import { ContextType } from "../../types/ContextType";
import { ButtonsContainer } from "../../components/ButtonsContainer";
import { onChange } from "../../common/onChange";
import { handlePriceService } from "../../common/PriceService";

export const StepTwo = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;

  const ValidationSchema = yup.object().shape({
    plan: yup.string().required(),
    monthlyOrYearly: yup.string().required()
  })

  return (
    <div className="form-step-two form-item">
      <Formik initialValues={{ plan: formData.plan || '', monthlyOrYearly: formData.monthlyOrYearly || 'monthly' }} validationSchema={ValidationSchema} onSubmit={(values) => {
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
                <label htmlFor="arcade">Arcade<p>{handlePriceService(9, formData)}</p>{formData.monthlyOrYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
              </div>
              <Field id="arcade" type="radio" name="plan" value="arcade" onClick={(e:any) => onChange(e, formData, setFormData)}/>
            </div>
            <div className="box-check-plan">
              <div className="label advanced">
                <label htmlFor="advanced">Advanced<p>{handlePriceService(12, formData)}</p>{formData.monthlyOrYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
              </div>
              <Field id="advanced" type="radio" name="plan" value="advanced" onClick={(e:any) => onChange(e, formData, setFormData)}/>
            </div>
            <div className="box-check-plan">
              <div className="label pro">
                <label htmlFor="pro">Pro<p>{handlePriceService(15, formData)}</p>{formData.monthlyOrYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
              </div>
              <Field id="pro" type="radio" name="plan" value="pro" onClick={(e:any) => onChange(e, formData, setFormData)}/>
            </div>
          </div>

          <div className="select-monthly-yearly">
            <label htmlFor="monthly" className={`${formData.monthlyOrYearly === 'monthly' ? 'active' : ''}`}>Monthly</label>
            <div className={`input-key ${formData.monthlyOrYearly === 'yearly' ? 'circle-right' : 'circle-left'}`}>
              <Field id="monthlyYearly" name="monthlyOrYearly" type="radio" value="monthly" className={formData.monthlyOrYearly === 'monthly' ? 'd-none' : ''} onClick={(e:any) => onChange(e, formData, setFormData)} />
              <Field id="monthlyYearly" name="monthlyOrYearly" type="radio" value="yearly" className={formData.monthlyOrYearly === 'yearly' ? 'd-none' : ''} onClick={(e:any) => onChange(e, formData, setFormData)} />
            </div>

            <label htmlFor="monthly" className={`${formData.monthlyOrYearly === 'yearly' ? 'active' : ''}`}>Yearly</label>
          </div>

          <ButtonsContainer />
        </Form>
      </Formik>

    </div>
  )
}