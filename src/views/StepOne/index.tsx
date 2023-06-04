import * as yup from "yup";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormContext } from "../../services/Context";
import { ContextType } from "../../types/ContextType";

export const StepOne = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext) as ContextType;

  const ValidationSchema = yup.object().shape({
    name: yup.string().required(`This field is required`),
    email: yup.string().email().required(`This field is required`),
    phone: yup.string().required(`This field is required`)
  })


  return (
    <div className="form-step-one form-item">
      <Formik initialValues={{ name: '', email: '', phone: '' }} validationSchema={ValidationSchema} onSubmit={(values) => {
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
          <Field name="name" placeholder="e.g. Stephen King" />

          <div className="label">
            <label htmlFor="email">Email Address</label>
            <span><ErrorMessage name="email" /></span>
          </div>
          <Field name="email" placeholder="e.g. Stephen King" />

          <div className="label">
            <label htmlFor="phone">Phone Number</label>
            <span><ErrorMessage name="phone" /></span>
          </div>
          <Field name="phone" placeholder="e.g. Stephen King" />
          <div className="button-next-container">
            <button type="submit" className="button-next">Next Step</button>
          </div>

        </Form>
      </Formik>
    </div>
  )
}