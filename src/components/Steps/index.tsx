export const StepBar = () => {
  return (
    <div className="steps">
      <div className="step-box active">
        <button className="step-button">1</button>
        <div className="step-info">
          <span>step 1</span>
          <p>Your info</p>
        </div>
      </div>

      <div className="step-box">
        <button className="step-button">2</button>
        <div className="step-info">
          <span>step 2</span>
          <p>Select plan</p>
        </div>
      </div>

      <div className="step-box">
        <button className="step-button">3</button>
        <div className="step-info">
          <span>step 3</span>
          <p>Add-ons</p>
        </div>
      </div>

      <div className="step-box">
        <button className="step-button">4</button>
        <div className="step-info">
          <span>step 4</span>
          <p>Summary</p>
        </div>
      </div>
    </div>
  )
}