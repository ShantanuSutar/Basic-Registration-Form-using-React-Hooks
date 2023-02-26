import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const firstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const lastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const email = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  return (
    <div class="form-container">
      <form class="register-form">
        <div class="success-message">Success! Thank you for registering</div>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={firstNameChange}
        />

        <span id="first-name-error">Please enter a first name</span>
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={lastNameChange}
        />

        <span id="last-name-error">Please enter a last name</span>
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={email}
        />

        <span id="email-error">Please enter an email address</span>
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
