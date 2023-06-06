import * as yup from "yup";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormContext } from "../../common/Context";
import { ContextType } from "../../types/ContextType";
import { ButtonsContainer } from "../../components/ButtonsContainer";
import { onChange } from "../../common/onChange";

export const StepOne = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;

  const ValidationSchema = yup.object().shape({
    name: yup.string().required(`This field is required`),
    email: yup.string().email().required(`This field is required`),
    phone: yup.string().required(`This field is required`)
  })

  


  return (
    <div className="form-step-one form-item">
      <Formik initialValues={{ name: formData.name || '', email: formData.email || '', phone: formData.phone || '' }} validationSchema={ValidationSchema} onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        setActiveStepIndex(activeStepIndex + 1)
      }}>
        <Form>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <div className="label">
            <label htmlFor="name">Name</label>
            <span><ErrorMessage name="name" /></span>
          </div>
          <Field name="name" placeholder="e.g. Stephen King" onKeyUp={(e: any) => onChange(e, formData, setFormData)}/>

          <div className="label">
            <label htmlFor="email">Email Address</label>
            <span><ErrorMessage name="email" /></span>
          </div>
          <Field name="email" placeholder="e.g. Stephen King" onKeyUp={(e: any) => onChange(e, formData, setFormData)} />

          <div className="label">
            <label htmlFor="phone">Phone Number</label>
            <span><ErrorMessage name="phone" /></span>
          </div>
          <Field name="phone" placeholder="e.g. Stephen King" onKeyUp={(e: any) => onChange(e, formData, setFormData)} />
          
          <ButtonsContainer />

        </Form>
      </Formik>
    </div>
  )
}