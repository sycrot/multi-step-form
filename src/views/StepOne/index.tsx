import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface Props {
  onSubmit: (data: FormData) => void
}

const schema = yup.object({
  name: yup.string().required(`This field is required`),
  email: yup.string().email().required(`This field is required`),
  phone: yup.string().required(`This field is required`)
}).required();

type FormData = yup.InferType<typeof schema>

export const StepOne = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });


  return (
    <div className="form-step-one form-item">
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className="label">
          <label htmlFor="name">Name</label>
          <span>{errors.name?.message}</span>
        </div>
        <input id="name" {...register("name")} aria-invalid={errors.name ? "true" : "false"} placeholder="e.g. Stephen King" />

        <div className="label">
          <label htmlFor="email">Email Address</label>
          <span>{errors.email?.message}</span>
        </div>
        <input id="email" {...register("email")} aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="e.g.
              stephenking@lorem.com" />

        <div className="label">
          <label htmlFor="phone">Phone Number</label>
          <span>{errors.phone?.message}</span>
        </div>
        <input className="required" id="phone" type="text" placeholder="e.g. +1 234 567 890"  {...register("phone")} aria-invalid={errors.phone ? "true" : "false"} />
        <div className="button-next-container">
          <button className="button-next">Next Step</button>
        </div>

      </form>
    </div>
  )
}