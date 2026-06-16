import { Fragment } from "react";

export function FormProgress({ currentStep = 1 }) {
  const steps = ["Personal Info", "Documents", "Review", "Payment"];

  return (
    <section className="card">
      <div className="form-nav">
        {steps.map((title, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const cardClass = isActive
            ? "active-card"
            : isCompleted
              ? "completed-card"
              : "idle-card";
          const titleClass = isActive || isCompleted ? "" : "nav-idle-title";

          return (
            <Fragment key={title}>
              <div className={`nav-card ${cardClass}`}>
                <div className={`nav-num-card ${cardClass}`}>{stepNumber}</div>
                <div className={`nav-title ${titleClass}`}>{title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="nav-line">
                  <div className={`line ${isCompleted ? "nav-pass" : ""}`} />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
