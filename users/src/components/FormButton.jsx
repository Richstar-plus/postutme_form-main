import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function FormButton({ title, action, type }) {
  return (
    <section className="card">
      <div
        className={`${action === "previous" ? "prev-button" : "form-button"}`}
      >
        {action === "previous" ? (
          <Button
            title={title}
            className="form-main-btn form-prev"
            action={action}
            type={type}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        ) : (
          <Button title={title} className="form-main-btn" type={type}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        )}
      </div>
    </section>
  );
}
