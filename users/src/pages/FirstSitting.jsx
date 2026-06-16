import { useState } from "react";
import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { FormProgress } from "../components/FormProgress";

export function FirstSitting() {
  const [passportPreview, setPassportPreview] = useState(null);
  const [waecPreview, setWaecPreview] = useState(null);
  const [necoPreview, setNecoPreview] = useState(null);

  const handleFilePreview = (e, setPreview) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setPreview(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="card">
        <p className="card-title">richstar Online Services</p>
      </section>
      <section className="card">
        <h1 className="result-heading">POST UTME Portal.</h1>
      </section>

      <FormProgress currentStep={2} />

      <section className="card">
        <h1 className="result-heading">O'Level Details</h1>

        <Caution>
          <ul>
            <li>O'level result must be in picture format.</li>
            <li>If you await your O'level Result please indicate.</li>
            <li>
              If you are combining two (2) O'level Results, make sure you upload
              the two results.
            </li>
          </ul>
        </Caution>

        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput
                title="WAEC (First Sitting)"
                type="file"
                onChange={(e) => handleFilePreview(e, setWaecPreview)}
              />

              <FormInput
                title="NECO (Second Sitting)"
                type="file"
                onChange={(e) => handleFilePreview(e, setNecoPreview)}
              />

              <FormInput
                title="Passport Photograph"
                type="file"
                onChange={(e) => handleFilePreview(e, setPassportPreview)}
              />
            </div>

            {waecPreview && (
              <div className="passport-preview">
                <h3>WAEC Preview</h3>
                <img src={waecPreview} alt="WAEC Preview" />
              </div>
            )}

            {necoPreview && (
              <div className="passport-preview">
                <h3>NECO Preview</h3>
                <img src={necoPreview} alt="NECO Preview" />
              </div>
            )}

            {passportPreview && (
              <div className="passport-preview">
                <h3>Passport Preview</h3>
                <img src={passportPreview} alt="Passport Preview" />
              </div>
            )}

            <FormButton title="Previous Page" action="previous" type="button" />

            <FormButton title="Next: Payment Page" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
