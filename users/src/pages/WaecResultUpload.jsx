import { useState } from "react";
import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function WaecResultUpload() {
  const [sitting, setSitting] = useState("");
  const [firstSittingPreview, setFirstSittingPreview] = useState(null);
  const [secondSittingPreview, setSecondSittingPreview] = useState(null);

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
        <h1 className="result-heading">O'Level Result Upload</h1>

        <Caution>
          <ul>
            <li>O'level result must be in picture format.</li>
            <li>If you await your O'level Result please indicate.</li>
            <li>
              If you are combining two (2) O'level Results, make sure you upload
              the two results.
            </li>
            <li>
              After upload, make payment and you will be contacted within an
              hour
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

              <FormInput
                title="How many sitting?"
                select="noOfSitting"
                value={sitting}
                onChange={(e) => setSitting(e.target.value)}
              />

              {/* Always show WAEC */}
              <FormInput
                title="O'level (First Sitting)"
                type="file"
                onChange={(e) => handleFilePreview(e, setFirstSittingPreview)}
              />

              {/* Show only if 2 Sitting selected */}
              {sitting === "2 Sitting" && (
                <FormInput
                  title="O'level (Second Sitting)"
                  type="file"
                  onChange={(e) =>
                    handleFilePreview(e, setSecondSittingPreview)
                  }
                />
              )}
              {firstSittingPreview && (
                <div className="passport-preview">
                  <h3>O'level First Sitting Preview</h3>
                  <img src={firstSittingPreview} alt="WAEC Preview" />
                </div>
              )}
              {secondSittingPreview && (
                <div className="passport-preview">
                  <h3>O'level Second Sitting Preview</h3>
                  <img src={secondSittingPreview} alt="WAEC Preview" />
                </div>
              )}
            </div>

            <FormButton title="Next: Payment Page" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
