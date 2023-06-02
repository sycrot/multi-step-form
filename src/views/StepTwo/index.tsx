import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";

interface Props {
  onSubmit: (data: FormData) => void
}

const schema = yup.object({
  plan: yup.string().required(),
  monthlyOrYearly: yup.string()
}).required();

type FormData = yup.InferType<typeof schema>

export const StepTwo = (props: Props) => {
  const [monthlyYearly, setMonthYearly] = useState<string>('monthly');

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleMonthlyYearly = () => {
    if (monthlyYearly === 'monthly') {
      setMonthYearly('yearly')
    } else {
      setMonthYearly('monthly')
    }
  }


  return (
    <div className="form-step-two form-item">
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="plans-container">
          <div className="box-check-plan">
            <div className="label arcade">
              <label htmlFor="arcade">Arcade<p>$9/mo</p>{monthlyYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
            </div>
            <input id="arcade" type="radio" {...register("plan")} value="arcade" />
          </div>
          <div className="box-check-plan">
            <div className="label advanced">
              <label htmlFor="advanced">Advanced<p>$12/mo</p>{monthlyYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
            </div>
            <input id="advanced" type="radio" {...register("plan")} value="advanced" />
          </div>
          <div className="box-check-plan">
            <div className="label pro">
              <label htmlFor="pro">Pro<p>$15/mo</p>{monthlyYearly === 'yearly' && <span className="yearly-label">2 months free</span>}</label>
            </div>
            <input id="pro" type="radio" {...register("plan")} value="pro" />
          </div>
        </div>

        <div className="select-monthly-yearly">
          <label htmlFor="monthly" className={`${monthlyYearly === 'monthly' ? 'active' : ''}`}>Monthly</label>
          <div className={`input-key ${monthlyYearly === 'yearly' ? 'circle-right' : 'circle-left'}`}>
            <input type="radio" checked id="monthlyYearly" {...register("monthlyOrYearly")} value={monthlyYearly} onClick={handleMonthlyYearly} />
          </div>

          <label htmlFor="monthly" className={`${monthlyYearly === 'yearly' ? 'active' : ''}`}>Yearly</label>
        </div>

        <div className="button-next-container">
          <button className="button-back">Go Back</button>
          <button className="button-next">Next Step</button>
        </div>
      </form>
    </div>
  )
}