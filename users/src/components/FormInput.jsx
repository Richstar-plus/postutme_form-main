import {
  monthNames,
  universities,
  sitting,
  gender,
  olevel,
  states,
  maritalStatus,
  noOfSitting,
  parent,
  religion
} from "./SelectOptions";


export function FormInput({
  title,
  placeholder,
  type,
  inputType,
  select,
  value,
  onChange,
  options = [],
}) {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1980 + 1 },
    (_, i) => currentYear - i,
  );

  return (
    <div className={`form-input ${inputType === "dob" ? "dob-input" : ""}`}>
      <label>{title}</label>
      {inputType === "dob" ? (
        <div className="dob-fields">
          <input
            type="number"
            min="1"
            max="31"
            placeholder="DD"
            inputMode="numeric"
          />
          <select name="month">
            <option value="">Month</option>
            {monthNames.map((month, idx) => (
              <option key={month} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
          <select name="year">
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      ) : inputType === "input" ? (
        <input type={type} placeholder={placeholder} />
      ) : type === "file" ? (
        <input type="file" className="fileInput" onChange={onChange} />
      ) : (
        <select name={title} value={value} onChange={onChange}>
          {select === "institution" ? (
            <>
              <option value="">Select University</option>
              {universities.map((university) => (
                <option key={university} value={university}>
                  {university}
                </option>
              ))}
            </>
          ) : select === "courses" ? (
            <>
              <option value="">Select Course</option>
              {options.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) :select === "gender" ? (
            <>
              <option value="">Select</option>
              {gender.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "sitting" ? (
            <>
              <option value="">Select</option>
              {sitting.map((sitting) => (
                <option key={sitting} value={sitting}>
                  {sitting}
                </option>
              ))}
            </>
          ) : select === "olevel" ? (
            <>
              <option value="">Select</option>
              {olevel.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "states" ? (
            <>
              <option value="">Select</option>
              {states.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "lga" ? (
            <>
              <option value="">Select L.G.A</option>
              {options.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
            </>
          ) : select === "statesOfBirth" ? (
            <>
              <option value="">Select</option>
              {states.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "lgaOfBirth" ? (
            <>
              <option value="">Select L.G.A</option>
              {options.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
            </>
          ) : select === "maritalStatus" ? (
            <>
              <option value="">Select</option>
              {maritalStatus.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "noOfSitting" ? (
            <>
              <option value="">Select</option>
              {noOfSitting.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "religion" ? (
            <>
              <option value="">Select</option>
              {religion.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : select === "parent" ? (
            <>
              <option value="">Select</option>
              {parent.map((info) => (
                <option key={info} value={info}>
                  {info}
                </option>
              ))}
            </>
          ) : (
            <option value="">Select</option>
          )}
        </select>
      )}
    </div>
  );
}
