
export function Date({ school, registrationStart, registrationEnd }) {
  return (
    <div className="date-content">
      <div className="date-item">
        <h4>{school}</h4>
        <div className="date-content-item">
          <p>Registration starts:</p>
          <p>Registration Ends:</p>
        </div>
        <div className="date-content-item date-content-item-details">
          <p>{registrationStart}</p>
          <p>{registrationEnd}</p>
        </div>
      </div>
    </div>
  );
}
