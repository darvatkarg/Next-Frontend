"use client";
import { register } from "@/components/services/Apis";
import { useState } from "react";

const SignUp = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let newData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };

    const res = await register(newData);
    console.log(res);
    setFirst_Name("");
    setLast_Name("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <form
        className="row g-3 needs-validation mt-4 mb-4"
        noValidate
        onSubmit={onSubmit}
      >
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              aria-describedby="inputGroupPrepend"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">
            Password
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend1">
              #
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustom04"
              aria-describedby="inputGroupPrepend1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please choose a password.</div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center mt-3 mb-3">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
