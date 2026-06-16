import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faHeadset,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function Support() {
  return (
    <div className="support">
      <h3>
        <FontAwesomeIcon icon={faHeadset} /> Contact Support
      </h3>

      <p className="support-description">
        Need help with your Application? Our Technical team are available 24/7.
      </p>

      <div className="support-details">
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> official.richstar001@gmail.com
        </li>
        <li>
          <FontAwesomeIcon icon={faPhoneAlt} /> +234 903 901 4066
        </li>
        <li>
          <Link>
            <FontAwesomeIcon icon={faMessage} /> Live Technical Help
          </Link>
        </li>
      </div>
    </div>
  );
}
