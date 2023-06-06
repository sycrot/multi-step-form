import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormContext } from "../../common/Context";
import { ContextType } from "../../types/ContextType";
import { ButtonsContainer } from "../../components/ButtonsContainer";
import { onChange } from "../../common/onChange";


export const StepFour = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;
  const [total, setTotal] = useState('')

  const ValidationSchema = yup.object({
    monthlyOrYearly: yup.string()
  });

  const handleFlatPrice = () => {
    if (formData.plan === 'arcade') {
      return formData.monthlyOrYearly === 'monthly' ? 9 : 90
    } else if (formData.plan === 'advanced') {
      return formData.monthlyOrYearly === 'monthly' ? 12 : 120
    } else if (formData.plan === 'pro') {
      return formData.monthlyOrYearly === 'monthly' ? 15 : 150
    }
  }

  const handleAddOns = () => {
    const addOns: any = []

    if (formData.addOns.find((e: string) => e === 'largerStorage')) {
      addOns.push({
        addOn: 'largerStorage',
        price: formData.monthlyOrYearly === 'monthly' ? 2 : 20
      })
    }

    if (formData.addOns.find((e: string) => e === 'onlineService')) {
      addOns.push({
        addOn: 'onlineService',
        price: formData.monthlyOrYearly === 'monthly' ? 1 : 10
      })
    }

    if (formData.addOns.find((e: string) => e === 'customizableProfile')) {
      addOns.push({
        addOn: 'customizableProfile',
        price: formData.monthlyOrYearly === 'monthly' ? 2 : 20
      })
    }

    return addOns
  }

  useEffect(() => {
    const handleTotal = () => {
      let plan = handleFlatPrice()
      let services = handleAddOns().map((value: any) => value.price).reduce((e: any, val: any) => e + val, 0)

      setTotal(`${formData.monthlyOrYearly === 'monthly' ? '+' : ''}$${plan + services}${formData.monthlyOrYearly === 'monthly' ? '/mo' : '/yr'}`)
    }
    handleTotal()
  })

  return (
    <div className="form-step-four form-item">
      <Formik initialValues={{ monthlyOrYearly: formData.monthlyOrYearly }} validationSchema={ValidationSchema} onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        setActiveStepIndex(activeStepIndex + 1)

        console.log(data)
      }}>
        <Form>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className="card">
            <div className="change-total">
              <div>
                <p>{formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)} ({formData.monthlyOrYearly === 'monthly' ? 'Monthly' : 'Yearly'})</p>
                <ErrorMessage name="monthlyOrYearly" />
                <Field type="radio" name="monthlyOrYearly" value="monthly" className={`change ${formData.monthlyOrYearly === 'monthly' ? 'd-none' : ''}`} onClick={(e:any) => onChange(e, formData, setFormData)} />
                <Field type="radio" name="monthlyOrYearly" value="yearly" className={`change ${formData.monthlyOrYearly === 'yearly' ? 'd-none' : ''}`} onClick={(e:any) => onChange(e, formData, setFormData)} />
              </div>
              <span>${handleFlatPrice()}/{formData.monthlyOrYearly === 'monthly' ? 'mo' : 'yr'}</span>
            </div>
            <div className="services">
              {handleAddOns().map((value: any, index: number) => (<p key={index}>{value.addOn}<span>+${value.price}/{formData.monthlyOrYearly === 'monthly' ? 'mo' : 'yr'}</span></p>))}
            </div>
          </div>
          <div className="total">
            <p>Total {formData.monthlyOrYearly === 'monthly' ? '(per month)' : '(per year)'}</p>
            <h4>{total}</h4>
          </div>


          <ButtonsContainer />
        </Form>
      </Formik>
    </div>
  )
}