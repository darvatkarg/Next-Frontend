"use client";
import { login } from "@/components/services/Apis";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let newData = {
      email: email,
      password: password,
    };

    const res = await login(newData);
    console.log(res);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <form
        className="row g-3 needs-validation was-validated mt-4 mb-4"
        noValidate=""
        onSubmit={onSubmit}
      >
        <div className="col-md-12">
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
            <div className="invalid-feedback">Please enter your email!</div>
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom04" className="form-label">
            Password
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend1">
              #
            </span>
            <input
              type="password"
              className="form-control"
              id="validationCustom04"
              aria-describedby="inputGroupPrepend1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please enter password!</div>
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

export default Login;
