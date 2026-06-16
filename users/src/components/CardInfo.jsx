import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPassport,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
export function CardInfo() {
  return (
    <div className="card-info">
      <div className="card-info-heading">
        <h3>Application Instructions</h3>
      </div>
      <div className="card-info-1">
        <div className="card-info-1-content">
          <h5>1. Elegibity Criteria</h5>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Candidates must have
              chosen their preferred institution as their first choice.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> A minimum score of 160 in
              the Unified Tertiary Matriculation Examination (JAMB) is required.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} /> Candidates must have a
              minimum of five (5) credit passes in the West African Senior
              Secondary School Certificate Examination (WASSCE) or its
              equivalent.
            </li>
          </ul>
        </div>
      </div>
      <div className="card-info-1">
        <div className="card-info-1-content">
          <h5>2. Required Documents</h5>
          <ul>
            <li>
              <div className="document">
                <FontAwesomeIcon icon={faPassport} />
                <span>Passport-sized photograph</span>
              </div>
              <div className="document">
                <FontAwesomeIcon icon={faFilePdf} />
                <span>O'Level Result</span>
              </div>
              <div className="document">
                <FontAwesomeIcon icon={faFilePdf} />
                <span>JAMB Registration Slip</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-info-2">
        <div className="card-info-2-content">
          <h3>Ready to Apply?</h3>
          <p>Click the "Start Application" button above to begin your application
            process. Ensure you have all the required documents ready for upload.
          </p>
          <Button title="Start Application" className="primary-btn">
            <FontAwesomeIcon icon={faCircleCheck} className="button-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}
