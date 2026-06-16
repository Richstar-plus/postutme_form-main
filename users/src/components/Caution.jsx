import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export function Caution({children}) {
  return (
    <section className="card">
      <div className="caution">
        <h3>
          <FontAwesomeIcon icon={faCircleExclamation} /> Important Notice
        </h3>
        {children}
      </div>
    </section>
  );
}
