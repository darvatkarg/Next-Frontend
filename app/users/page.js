"use client";
import { deleteUser, getAllUsers } from "@/components/services/Apis";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const UsersTable = () => {
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    const res = await getAllUsers();
    console.log(res);
    setData(res.data.data);
  }

  const handleDelete = async (id) => {
    try {
      const del = await deleteUser(id);
      console.log(del);
      fetchUsersData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="container">
      <table class="table table-primary table-hover mt-5 mb-5">
        <thead>
          <tr className="row">
            <th className="col-3 text-center">First Name</th>
            <th className="col-3 text-center">Last Name</th>
            <th className="col-4 text-center">Email</th>
            <th className="col-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr className="row" key={index}>
                <td className="col-3 text-center">{row.first_name}</td>
                <td className="col-3 text-center">{row.last_name}</td>
                <td className="col-4 text-center">{row.email}</td>
                <td className="col-2 text-center d-flex justify-content-evenly">
                  <FontAwesomeIcon
                    icon={faTrash}
                    color="red"
                    cursor="pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() => setUserId(row.id)}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    color="blue"
                    cursor="pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleView(row)}
                  />
                  <FontAwesomeIcon
                    icon={faPen}
                    color="gray"
                    cursor="pointer"
                    onClick={() => router.push(`/update/${row.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/*View Button Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              {currentUser && (
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {currentUser.first_name}'s Details
                </h1>
              )}

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {currentUser && (
                <>
                  <h6>
                    First Name:
                    <input
                      type="text"
                      className="form-control mt-3 mb-3"
                      id="validationCustom01"
                      value={currentUser.first_name}
                      disabled
                    />
                  </h6>
                  <h6>
                    Last Name:
                    <input
                      type="text"
                      className="form-control mt-3 mb-3"
                      id="validationCustom01"
                      value={currentUser.last_name}
                      disabled
                    />
                  </h6>
                  <h6>
                    Email:
                    <input
                      type="text"
                      className="form-control mt-3 mb-3"
                      id="validationCustom01"
                      value={currentUser.email}
                      disabled
                    />
                  </h6>
                </>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete User Modal */}
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-center align-items-center">
              <p className="text-danger-emphasis">
                Are you sure want to delete this user?
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(userId)}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
