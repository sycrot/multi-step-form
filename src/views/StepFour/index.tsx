import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface Props {
  onSubmit: (data: FormData) => void
}

const schema = yup.object({
  plan: yup.string().default('')
});

type FormData = yup.InferType<typeof schema>

export const StepFour = (props: Props) => {


  return (
    <div className="form-step-four form-item">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="card">
        <div className="change-total">
          <div>
            <p>Arcade (Monthly)</p>
            <button>Change</button>
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
        <button className="button-confirm">Confirm</button>
      </div>
    </div>
  )
}