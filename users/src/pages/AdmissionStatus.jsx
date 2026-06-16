import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function AdmissionStatus() {
  return (
    <>
      <section className="card">
        <p className="card-title">richstar Online Services</p>
      </section>
      <section className="card">
        <h1 className="result-heading">JAMB Admission Status</h1>
        <Caution>
          <ul>
            <li>Fill all your details correctly.</li>
            <li>
              After you fill your details, Make payment and you will be
              contacted within an hour. Your admission status will be forwarded
              to your whatsApp number and email address.
            </li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput
                title="JAMB Registration Number"
                inputType="input"
                placeholder="Enter you Jamb Registration Number"
              />
              <FormInput
                title="Full Name"
                inputType="input"
                placeholder="Enter your full name"
              />
              <FormInput
                title="Email Address"
                inputType="input"
                placeholder="Enter a working email address"
              />
              <FormInput
                title="Phone Number"
                inputType="input"
                placeholder="Enter your phone number or whatsApp"
              />
            </div>
            <FormButton title="Next: Payment Page" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
