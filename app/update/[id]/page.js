"use client";
import { getUserById, updateUser } from "@/components/services/Apis";
import { useEffect, useState } from "react";

const UpdateForm = ({ params }) => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");

  const userID = params.id;

  useEffect(() => {
    console.log("id", params.id);
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    const res = await getUserById(userID);
    console.log(res);
    setFirst_Name(res.data.data.first_name);
    setLast_Name(res.data.data.last_name);
    setEmail(res.data.data.email);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let newData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
    };

    const res = await updateUser(userID, newData);
    console.log(res);
    setFirst_Name("");
    setLast_Name("");
    setEmail("");
  };

  return (
    <div className="container">
      <form
        className="row g-3 needs-validation was-validated mt-4 mb-4"
        noValidate=""
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
          <div className="invalid-feedback">Please enter your name!</div>
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
          <div className="invalid-feedback">Please enter your last name!</div>
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
            <div className="invalid-feedback">Please enter your email!</div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center mt-3 mb-3">
          <button className="btn btn-primary" type="submit">
            Update form
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
