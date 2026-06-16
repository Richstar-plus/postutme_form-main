import { useState } from "react";
import { Caution } from "../components/Caution";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";
import { AllCourses } from "../components/AllSchoolCourses";

export function ChangeOfCourseInstitution() {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  return (
    <>
      <section className="card">
        <p className="card-title">richstar Online Services</p>
      </section>
      <section className="card">
        <h1 className="result-heading">Change of Institution/Course</h1>
        <Caution>
          <ul>
            <li>Fill all your details correctly.</li>
            <li>
              Note that you are to change only your first choice, other choices
              does not matter.
            </li>
            <li>
              After you fill your details, Make payment and you will be
              contacted within an hour
            </li>
          </ul>
        </Caution>
        <div className="result">
          <form action="">
            <div className="form-actions">
              <FormInput
                title="JAMB Registration Number"
                inputType="input"
                placeholder="Enter you Jamb Registration Number"
              />
              <FormInput
                title="Full Name"
                inputType="input"
                placeholder="Enter your full name"
              />
              <FormInput
                title="Email Address"
                inputType="input"
                placeholder="Enter a working email address"
              />
              <FormInput
                title="Phone Number"
                inputType="input"
                placeholder="Enter your phone number or whatsApp"
              />
              <FormInput
                title="Institution (First Choice)"
                select="institution"
                value={selectedUniversity}
                onChange={(e) => {
                  setSelectedUniversity(e.target.value);
                  setSelectedCourse("");
                }}
              />
              <FormInput
                title="Course (First Choice)"
                select="courses"
                options={AllCourses[selectedUniversity] || []}
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              />
            </div>
            <FormButton title="Next: Payment Page" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
