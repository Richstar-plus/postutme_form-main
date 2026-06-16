import { FormButton } from "../components/FormButton";
import { FormProgress } from "../components/FormProgress";

const personalDetails = [
  { label: "Full Name", value: "John Doe" },
  { label: "Gender", value: "Male" },
  { label: "JAMB Score", value: "230" },
  { label: "First Choice Institution", value: "University of Lagos" },
  { label: "First Choice Course of Study", value: "Computer Science" },
  { label: "NIN Number", value: "1234 5678 9012" },
  { label: "Date of Birth", value: "January 1, 2003" },
  { label: "Email Address", value: "john.doe@example.com" },
  { label: "Phone Number", value: "+234 801 234 5678" },
  { label: "Two O'Level Results", value: "Yes" },
  { label: "O'Level Qualification", value: "WAEC" },
  { label: "State of Origin", value: "Rivers" },
  { label: "L.G.A", value: "Port Harcourt" },
  { label: "House Address", value: "12 Freedom Street, PHC" },
  { label: "Marital Status", value: "Single" },
  { label: "Place of Birth", value: "Port Harcourt" },
];

const documentDetails = [
  { label: "WAEC (First Sitting)", value: "Uploaded" },
  { label: "NECO (Second Sitting)", value: "Uploaded" },
  { label: "Passport", value: "Passport photo uploaded" },
];

const paymentDetails = [
  { label: "Cardholder Name", value: "John Doe" },
  { label: "Card Number", value: "0000 0000 0000 0000" },
  { label: "Expiry Date", value: "12/26" },
  { label: "Payment Amount", value: "₦5,000" },
  { label: "Transaction Status", value: "Awaiting confirmation" },
];

export function ReviewPage() {
  return (
    <>
      <section className="card">
        <p className="card-title">richstar Online Services</p>
      </section>
      <section className="card">
        <h1 className="result-heading">POST UTME Portal.</h1>
      </section>
      <FormProgress currentStep={3} />
      <section className="card review-grid">
        <div className="review-summary">
          <h1 className="result-heading">Application Review</h1>
          <p className="review-intro">
            Confirm every detail before final submission. This preview includes
            your personal information, uploaded documents, and payment summary.
          </p>

          <div className="review-section">
            <h3>Personal & Academic Information</h3>
            <div className="review-fields">
              {personalDetails.map((item) => (
                <div key={item.label} className="review-field">
                  <span className="review-field-label">{item.label}</span>
                  <span className="review-field-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="review-section">
            <h3>Document Upload Summary</h3>
            <div className="review-fields">
              {documentDetails.map((item) => (
                <div key={item.label} className="review-field">
                  <span className="review-field-label">{item.label}</span>
                  <span className="review-field-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="review-section">
            <h3>Payment Summary</h3>
            <div className="review-fields">
              {paymentDetails.map((item) => (
                <div key={item.label} className="review-field">
                  <span className="review-field-label">{item.label}</span>
                  <span className="review-field-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="review-preview-card">
          <h3>Passport Preview</h3>
          <div className="passport-preview">
            <span>Passport Preview</span>
          </div>
          <p className="preview-note">
            Your passport appears here once uploaded. Confirm the image is clear
            and shows your full face.
          </p>
        </aside>
      </section>

      <section className="card review-actions-card">
        <div className="review-actions">
          <FormButton title="Previous Page" action="previous" />
          <FormButton title="Next: Payment Page" />
        </div>
      </section>
    </>
  );
}
