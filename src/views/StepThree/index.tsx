import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface Props {
  onSubmit: (data: FormData) => void
}

const schema = yup.object({
  addOns: yup.array()
}).required();

type FormData = yup.InferType<typeof schema>

export const StepThree = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleBoxCheck = (event: any) => {
    let check = document.querySelectorAll('label');

    if (event.target.checked) {
      check.forEach(e => {
        if (event.target.id === e?.htmlFor) {
          e?.classList.add("box-check")
        }
      })
      
    } else {
      check.forEach(e => {
        if (event.target.id === e?.htmlFor) {
          e?.classList.remove("box-check")
        }
      })
    }
  }

  return (
    <div className="form-step-three form-item">
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="check-pick">
          <input id="onlineService" type="checkbox" value="onlineService" className="checkboxPick" onClick={handleBoxCheck} {...register('addOns')}/>
          <div className="check-info">
            <label htmlFor="onlineService" className="box"></label>
            <div className="check-content">
              <p className="check-text">Online service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <div className="target">+$1/mo</div>
        </div>

        <div className="check-pick">
          <input id="largerStorage" type="checkbox" value="largerStorage" className="checkboxPick" onClick={handleBoxCheck} {...register('addOns')}/>
          <div className="check-info">
            <label htmlFor="largerStorage" className="box"></label>
            <div className="check-content">
              <p className="check-text">Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <div className="target">+$2/mo</div>
        </div>

        <div className="check-pick">
          <input id="customizableProfile" type="checkbox" value="customizableProfile" className="checkboxPick" onClick={handleBoxCheck} {...register('addOns')}/>
          <div className="check-info">
            <label htmlFor="customizableProfile" className="box"></label>
            <div className="check-content">
              <p className="check-text">Customizable Profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <div className="target">+$2/mo</div>
        </div>

        <div className="button-next-container">
          <button className="button-back">Go Back</button>
          <button className="button-next">Next Step</button>
        </div>
      </form>
    </div>
  )
}