import { useState } from "react";
import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { lgas } from "../components/SelectOptions";

export function AgeDeclarationBirthCertificate() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedStateOfBirth, setSelectedStateOfBirth] = useState("");
  const [selectedLgaOfBirth, setSelectedLgaOfBirth] = useState("");
  const [parentPassportPreview, setParentPassportPreview] = useState(null);
  const [passportPreview, setPassportPreview] = useState(null);

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
        <h1 className="result-heading">Age Declaration/Birth Certificate.</h1>
        <Caution>
          <ul>
            <li>Fill all your details correctly.</li>
            <li>
              Make sure you check the date of birth very well before submitting.
            </li>
            <li>
              If you are using either of your parents, the information is
              correct and belongs to them.
            </li>
            <li>
              After you fill your details, Make payment and you will be
              contacted within an hour.
            </li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput
                title="Which of your parents information do you want to provide?"
                select="parent"
              />
              <FormInput
                title="Mother/Father First Name"
                inputType="input"
                placeholder="Enter your mother or father's First name"
              />
              <FormInput
                title="Mother/Father Middle Name"
                inputType="input"
                placeholder="Enter your mother or father's middle name"
              />
              <FormInput
                title="Mother/Father Last Name"
                inputType="input"
                placeholder="Enter your mother or father's Last name"
              />
              <FormInput title="Religion" select="religion" />
              <FormInput
                title="Mother/Father occupation"
                inputType="input"
                placeholder="Enter your mother or father's occupation"
              />
              <FormInput
                title="House Address"
                inputType="input"
                placeholder="eg. #No. 23 GRA Street"
              />

              <FormInput
                title="City"
                inputType="input"
                placeholder="eg. Port Harcourt"
              />
              <FormInput
                title="State of Origin"
                select="states"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedLga("");
                }}
              />
              <FormInput
                title="L.G.A"
                select="lga"
                options={lgas[selectedState] || []}
                value={selectedLga}
                onChange={(e) => setSelectedLga(e.target.value)}
              />
              <FormInput
                title="Mother/Father passport Photograph"
                type="file"
                onChange={(e) => handleFilePreview(e, setParentPassportPreview)}
              />
              {parentPassportPreview && (
                <div className="passport-preview">
                  <h3>Parent Passport Preview</h3>
                  <img src={parentPassportPreview} alt="WAEC Preview" />
                </div>
              )}

              <FormInput
                title="Full Name"
                inputType="input"
                placeholder="Enter your full name"
              />
              <FormInput
                title="Place of Birth"
                inputType="input"
                placeholder="eg. Port Harcourt"
              />
              <FormInput title="Date of Birth" inputType="dob" />
              <FormInput
                title="State of Birth"
                select="statesOfBirth"
                value={selectedStateOfBirth}
                onChange={(e) => {
                  setSelectedStateOfBirth(e.target.value);
                  setSelectedLgaOfBirth("");
                }}
              />
              <FormInput
                title="LGA of birth"
                select="lgaOfBirth"
                options={lgas[selectedStateOfBirth] || []}
                value={selectedLgaOfBirth}
                onChange={(e) => setSelectedLgaOfBirth(e.target.value)}
              />
              <FormInput title="Gender" select="gender" />
              <FormInput
                title="Your passport Photograph"
                type="file"
                onChange={(e) => handleFilePreview(e, setPassportPreview)}
              />
              {passportPreview && (
                <div className="passport-preview">
                  <h3>Passport Preview</h3>
                  <img src={passportPreview} alt="WAEC Preview" />
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
