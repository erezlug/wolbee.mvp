import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllEmployeeAddPopup from "../../../components/modelpopup/AllEmployeeAddPopup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import DeleteModal from "../../../components/modelpopup/DeleteModal";
import EmployeeListFilter from "../../../components/EmployeeListFilter";
import avatar_1 from '../../../imgs/avatar_1.jpg'
import avatar_2 from '../../../imgs/avatar_2.jpeg'
import avatar_3 from '../../../imgs/avatar_3.jpeg'
import avatar_4 from '../../../imgs/avatar_4.jpg'
import avatar_5 from '../../../imgs/avatar_5.avif'
import avatar_6 from '../../../imgs/avatar_6.avif'

const AllEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const avatars = [avatar_1, avatar_2,avatar_3,avatar_4,avatar_5,avatar_6 /* הוסף כאן את שאר התמונות */];
  useEffect(() => {
    const manager = localStorage.getItem('credencial');
    const currentLoggedInManager = JSON.parse(manager);

    fetch('https://wolbee-mvp-2.onrender.com/findemployees', {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(currentLoggedInManager)
    })
      .then(res => res.json())
      .then(data => {
        // Adding local avatar paths to employees
        const employeesWithAvatars = data.map((employee, index) => ({
          ...employee,
          avatar: `../imgs/avatar_${index + 1}.jpg`
        }));
        localStorage.setItem('employeesArr', JSON.stringify(employeesWithAvatars));
        setEmployees(employeesWithAvatars);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle='Employees Page'
            
            modal="#add_employee"
            name="Add Employee"/>
          <EmployeeListFilter />

          <div className="row">
            {employees.map((employee,index) => (
              <div
                className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                key={employee.id}
              >
                <div className="profile-widget">
                  <div className="profile-img">
                    <Link to={`/profile/${employee.id}`} className="avatar">
                      <img src={avatars[index % avatars.length]} alt={`${employee.fullName} Avatar`} />
                    </Link>
                  </div>
                  <div className="dropdown profile-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i className="fa fa-pencil m-r-5" /> ערוך
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete"
                      >
                        <i className="fa-regular fa-trash-can m-r-5" /> מחק
                      </Link>
                    </div>
                  </div>
                  <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                    <Link to={`/profile/${employee.id}`}>{employee.fullName}</Link>
                  </h4>
                  <div className="small text-muted">{employee.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AllEmployeeAddPopup />
      <DeleteModal Name="מחק עובד" />
    </div>
  );
};

export default AllEmployee;
