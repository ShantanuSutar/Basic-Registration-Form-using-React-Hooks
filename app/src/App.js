import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [valid, setValid] = useState(false);

  const [sumbitted, setSubmitted] = useState(false);

  const firstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const lastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const emailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {sumbitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={firstNameChange}
        />
        {sumbitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={lastNameChange}
        />

        {sumbitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={emailChange}
        />

        {sumbitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
