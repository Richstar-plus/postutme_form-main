import { Link } from "react-router-dom";
import { PersonalInfo } from "../components/PersonalInfo";
import { Ads } from "../components/Ads";
import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormProgress } from "../components/FormProgress";

export function FormPage() {
  return (
    <div className="form">
      <form action="">
        <section className="card">
          <p className="card-title">richstar Online Services</p>
        </section>
        <section className="card">
          <h1 className="result-heading">POST UTME Portal.</h1>
        </section>
        <FormProgress currentStep={1} />
        <PersonalInfo />
        <Ads />
        <Caution>
          <ul>
            <li>Ensure your name matches JAMB records exactly.</li>
            <li>Minimun UTME Score of 150 is required for University.</li>
            <li>O'level result must be in picture format.</li>
            <li>If you await your O'level Result please indicate.</li>
            <li>
              If you are combining two (2) O'level Results, make sure you select
              two sitting.
            </li>
          </ul>
        </Caution>
        <FormButton title="Next: Document Upload" />
      </form>
    </div>
  );
}
