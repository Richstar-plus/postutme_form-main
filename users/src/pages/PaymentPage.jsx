import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { FormProgress } from "../components/FormProgress";

export function PaymentPage() {
  return (
    <>
      <section className="card">
        <p className="card-title">richstar Online Services</p>
      </section>
      <section className="card">
        <h1 className="result-heading">POST UTME Portal.</h1>
      </section>
      <FormProgress currentStep={4} />
      <section className="card">
        <h1 className="result-heading">Payment Details</h1>
        <Caution>
          <ul>
            <li>Please use the exact name on your card during payment.</li>
            <li>Ensure your card has enough funds before submitting.</li>
            <li>Confirm your transaction details carefully.</li>
            <li>Payment is required to complete your registration.</li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput
                title="Cardholder Name"
                type="text"
                placeholder="Enter card name"
                inputType="input"
              />
              <FormInput
                title="Card Number"
                type="text"
                placeholder="0000 0000 0000 0000"
                inputType="input"
              />
              <FormInput
                title="Expiry Date"
                type="text"
                placeholder="MM/YY"
                inputType="input"
              />
              <FormInput
                title="CVV"
                type="password"
                placeholder="123"
                inputType="input"
              />
            </div>
            <FormButton title="Previous Page" action="previous" />
            <FormButton title="Submit Payment" />
          </form>
        </div>
      </section>
    </>
  );
}
