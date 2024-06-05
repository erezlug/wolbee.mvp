import React, { useState, useEffect } from "react";
import { Avatar_02, Avatar_16 } from "../../../Routes/ImagePath";
import { Link, useParams } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import Breadcrumbs from "../../../components/Breadcrumbs";

const Profile = () => {
  const { employeeId } = useParams();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const employeesArrJson = localStorage.getItem('employeesArr');
    const currentManagerEmployeesArr = JSON.parse(employeesArrJson);
    const employee = currentManagerEmployeesArr.find(emp => emp.id === (employeeId));
    setSelectedEmployee(employee);
  }, [employeeId]);

  if (!selectedEmployee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Profile"
            title="Dashboard"
            subtitle="Profile"
            modal="#add_indicator"
            name="Add New"
          />
          <div className="card mb-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        <Link to="#">
                          <img src={Avatar_02} alt="User Image" />
                        </Link>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">
                              {selectedEmployee.fullName}
                            </h3>
                            <h6 className="text-muted">{selectedEmployee.role}</h6>
                            <div className="staff-id">
                              Employee ID: {selectedEmployee.id}
                            </div>
                            <div className="small doj text-muted">
                              Employee of manager ID#: {selectedEmployee.employeeOfManagerId}
                            </div>
                            <div className="staff-msg">
                              <Link className="btn btn-custom" to="/call/chat">
                                Send Message
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Phone:</div>
                              <div className="text">
                                <Link to={`tel:050-1234567`}>
                                  050-1234567
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Birthday:</div>
                              <div className="text">{selectedEmployee.DataOfBirth}</div>
                            </li>
                            <li>
                              <div className="title">Place of residence:</div>
                              <div className="text">{selectedEmployee.PlaceOfResidence}</div>
                            </li>
                            <li>
                              <div className="title">Status:</div>
                              <div className="text">{selectedEmployee.FamilyStatus}</div>
                            </li>
                            <li>
                              <div className="title">Number of children:</div>
                              <div className="text">
                                {selectedEmployee.NumOfChildren}
                              </div>
                            </li>
                            <li>
                              <div className="title">Intresting fact:</div>
                              <div className="text">
                                {selectedEmployee.InterestingFact}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-edit">
                      <Link
                        data-bs-target="#profile_info"
                        data-bs-toggle="modal"
                        className="edit-icon"
                        to="#"
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card tab-box">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <Link
                      to="#emp_profile"
                      data-bs-toggle="tab"
                      className="nav-link active"
                    >
                     | Profile |
                    </Link>
                  </li>

   <li className="nav-item">
                    <Link
                      to="#emp_assets"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                     | Statistics about the employee |
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#emp_projects"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                     | Insights about the employee |
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#bank_statutory"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      | Questions about the employee in the interview |
                      <small className="text-danger ms-1"></small>
                    </Link>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
          {/* Profile Info Tab */}
          <ProfileTab />
        </div>
      </div>
    </>
  );
};

export default Profile;
