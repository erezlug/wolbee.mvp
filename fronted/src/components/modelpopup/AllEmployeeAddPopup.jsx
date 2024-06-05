import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { emailrgx } from "../Authentication/RegEx";
import DatePicker from "react-datepicker";
import Select from "react-select";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AllEmployeeAddPopup = () => {
  const employee = [
    { value: 1, label: "Select Department" },
    { value: 2, label: "Web Development" },
    { value: 3, label: "IT Management" },
    { value: 4, label: "Marketing" },
  ];
  const designation = [
    { value: 1, label: "Web Developer" },
    { value: 2, label: "Web Designer" },
    { value: 3, label: "Ios Developer" },
    { value: 4, label: "Marketing" },
  ];
  const companies = [
    { value: 1, label: "Global Technologies" },
    { value: 1, label: "Delta Infotech" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ff9b44" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#ff9b44",
      },
    }),
  };

  const schema = yup.object({
    fullName: yup
      .string()
      .required("Field is required")
      .trim(),
    employeeOfManagerId: yup
      .string()
      .required("Field is required")
      .trim(),
    id: yup
      .string()
      .required("Field is required")
      .trim(),
    role: yup
      .string()
      .required("Field is required")
      .trim(),
    DataOfBirth: yup
      .date()
      .required("Field is required"),
    PlaceOfResidence: yup
      .string()
      .required("Field is required")
      .trim(),
    FamilyStatus: yup
      .string()
      .required("Field is required")
      .trim(),
    NumOfChildren: yup
      .number()
      .required("Field is required")
      .typeError("Must be a number")
      .min(0, "Must be a positive number or zero"),
    YearsInTheCompany: yup
      .number()
      .required("Field is required")
      .typeError("Must be a number")
      .min(0, "Must be a positive number or zero"),
    Anniversary: yup
      .string()
      .required("Field is required")
      .trim(),
    LastestActivity: yup
      .array()
      .of(
        yup.object({
          date: yup.date().required("Field is required"),
          activity: yup.string().required("Field is required").trim(),
        })
      )
      .min(1, "At least one activity is required"),
    InterestingFact: yup
      .string()
      .required("Field is required")
      .trim(),
    ClosestPersonalEvent: yup.object({
      date: yup.date().required("Field is required"),
      event: yup.string().required("Field is required").trim(),
    }).required("Field is required"),
    singers: yup
      .array()
      .of(
        yup.object({
          singer: yup.string().required("Field is required"),
        })
      ),
    FoodAndDrinks: yup
      .array()
      .of(
        yup.object({
          food1: yup.string().required("Field is required"),
          food2: yup.string().required("Field is required"),
          drink: yup.string().required("Field is required"),
        })
      ),
    Restaurants: yup
      .array()
      .of(
        yup.object({
          restaurant1: yup.string().required("Field is required"),
          restaurant2: yup.string().required("Field is required"),
        })
      ),
    Hobbys: yup
      .array()
      .of(
        yup.object({
          hobby1: yup.string().required("Field is required"),
          hobby2: yup.string().required("Field is required"),
          hobby3: yup.string().required("Field is required"),
        })
      )
  });

  const [selectedDate1, setSelectedDate1] = useState(null);
  const [latestActivities, setLatestActivities] = useState([{ date: null, activity: "" }]);
  const [closestPersonalEvent, setClosestPersonalEvent] = useState({ date: null, event: "" });
  const [singers, setSingers] = useState([{ singer: '' }]);
  const [foodAndDrinks, setFoodAndDrinks] = useState([{ food1: '', food2: '', drink: '' }]);
  const [restaurants, setRestaurants] = useState([{ restaurant1: '', restaurant2: '' }]);
  const [hobbys, setHobbys] = useState([{ hobby1: '', hobby2: '', hobby3: '' }]);
  const [isAddActivityBtnHovered, setIsAddActivityBtnHovered] = useState(false);
  const [isRemoveActivityBtnHovered, setIsRemoveActivityBtnHovered] = useState(false);
  const [isAddSingerBtnHovered, setIsAddSingerBtnHovered] = useState(false);
  const [isRemoveSingerBtnHovered, setIsRemoveSingerBtnHovered] = useState(false);
  const [isAddFoodAndDrinkBtnHovered, setIsAddFoodAndDrinkBtnHovered] = useState(false);
  const [isRemoveFoodAndDrinkBtnHovered, setIsRemoveFoodAndDrinkBtnHovered] = useState(false);
  const [isAddRestaurantBtnHovered, setIsAddRestaurantBtnHovered] = useState(false);
  const [isRemoveRestaurantBtnHovered, setIsRemoveRestaurantBtnHovered] = useState(false);
  const [isAddHobbyBtnHovered, setIsAddHobbyBtnHovered] = useState(false);
  const [isRemoveHobbyBtnHovered, setIsRemoveHobbyBtnHovered] = useState(false);
  const [isSubmitBtnHovered, setIsSubmitBtnHovered] = useState(false);
  // const [checkUser, setCheckUser] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  // const navigate = useNavigate();

  //latest activities functions
  const addActivity = () => {
    setLatestActivities([...latestActivities, { date: null, activity: "" }]);
  };

  const removeActivity = (index) => {
    const newActivities = latestActivities.filter((_, i) => i !== index);
    setLatestActivities(newActivities);
  };

  const handleActivityChange = (index, field, value) => {
    const newActivities = latestActivities.map((activity, i) =>
      i === index ? { ...activity, [field]: value } : activity
    );
    setLatestActivities(newActivities);
  };

  const enterHover = () => {
    setIsAddActivityBtnHovered(true);
  }

  const exitHover = () => {
    setIsAddActivityBtnHovered(false);
  }

  const enterRemoveActivityBtnHover = () => {
    setIsRemoveActivityBtnHovered(true);
  }

  const exitRemoveActivityBtnHover = () => {
    setIsRemoveActivityBtnHovered(false);
  }

  //singers functions
  const addSinger = () => {
    setSingers([...singers, { singer: '' }]);
  };

  const removeSinger = (index) => {
    const updatedSingers = singers.filter((_, i) => i !== index);
    setSingers(updatedSingers);
  };

  const handleSingerChange = (index, value) => {
    const updatedSingers = singers.map((singer, i) => i === index ? { singer: value } : singer);
    setSingers(updatedSingers);
  };

  const enterAddSingerHover = () => {
    setIsAddSingerBtnHovered(true);
  }

  const exitAddSingerHover = () => {
    setIsAddSingerBtnHovered(false);
  }

  const enterRemoveSingerHover = () => {
    setIsRemoveSingerBtnHovered(true);
  }

  const exitRemoveSingerHover = () => {
    setIsRemoveSingerBtnHovered(false);
  }

  //food and drinks functions
  const addFoodAndDrink = () => {
    setFoodAndDrinks([...foodAndDrinks, { food1: '', food2: '', drink: '' }]);
  };

  const removeFoodAndDrink = (index) => {
    const updatedFoodAndDrinks = foodAndDrinks.filter((_, i) => i !== index);
    setFoodAndDrinks(updatedFoodAndDrinks);
  };

  const handleFoodAndDrinkChange = (index, field, value) => {
    const updatedFoodAndDrinks = foodAndDrinks.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFoodAndDrinks(updatedFoodAndDrinks);
  };

  const enterAddFoodAndDrinkBtnHover = () => {
    setIsAddFoodAndDrinkBtnHovered(true);
  }

  const exitAddFoodAndDrinkBtnHover = () => {
    setIsAddFoodAndDrinkBtnHovered(false);
  }

  const enterRemoveFoodAndDrinkBtnHover = () => {
    setIsRemoveFoodAndDrinkBtnHovered(true);
  }

  const exitRemoveFoodAndDrinkBtnHover = () => {
    setIsRemoveFoodAndDrinkBtnHovered(false);
  }

  //restaurants functions
  const addRestaurant = () => {
    setRestaurants([...restaurants, { restaurant1: '', restaurant2: '' }]);
  };

  const removeRestaurant = (index) => {
    const updatedRestaurants = restaurants.filter((_, i) => i !== index);
    setRestaurants(updatedRestaurants);
  };

  const handleRestaurantChange = (index, field, value) => {
    const updatedRestaurants = restaurants.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setRestaurants(updatedRestaurants);
  };

  const enterAddRestaurantBtnHover = () => {
    setIsAddRestaurantBtnHovered(true);
  }

  const exitAddRestaurantBtnHover = () => {
    setIsAddRestaurantBtnHovered(false);
  }

  const enterRemoveRestaurantBtnHover = () => {
    setIsRemoveRestaurantBtnHovered(true);
  }

  const exitRemoveRestaurantBtnHover = () => {
    setIsRemoveRestaurantBtnHovered(false);
  }

  //hobbies functions
  const addHobby = () => {
    setHobbys([...hobbys, { hobby1: '', hobby2: '', hobby3: '' }]);
  };

  const removeHobby = (index) => {
    const updatedHobbys = hobbys.filter((_, i) => i !== index);
    setHobbys(updatedHobbys);
  };

  const handleHobbyChange = (index, field, value) => {
    const updatedHobbys = hobbys.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setHobbys(updatedHobbys);
  };

  const enterAddHobbyBtnHover = () => {
    setIsAddHobbyBtnHovered(true);
  }

  const exitAddHobbyBtnHover = () => {
    setIsAddHobbyBtnHovered(false);
  }

  const enterRemoveHobbyBtnHover = () => {
    setIsRemoveHobbyBtnHovered(true);
  }

  const exitRemoveHobbyBtnHover = () => {
    setIsRemoveHobbyBtnHovered(false);
  }

  //submit btn functions
  const enterSubmitBtnHover = () => {
    setIsSubmitBtnHovered(true);
  }

  const exitSubmitBtnHover = () => {
    setIsSubmitBtnHovered(false);
  }


  const onSubmit = async (data) => {
    console.log('hi');
    try {
      // Ensure dateOfBirth and latestActivities are included in the form data
      data.DataOfBirth = selectedDate1;
      data.LastestActivity = latestActivities;
      data.ClosestPersonalEvent = closestPersonalEvent;
      data.singers = singers;
      data.FoodAndDrinks = foodAndDrinks;
      data.Hobbys = hobbys;

      console.log(data);

      const response = await axios.post("http://localhost:5000/addemployee", data);
      console.log(response.data);
      // setCheckUser(true);
      // navigate("/");
    } catch (error) {
      console.error("Error registering employee:", error.response.data);
      // setCheckUser(false);
    }
  };

  return (
    <>
      <div id="add_employee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Employee</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="fullName"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.fullName ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Employee's full name"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.fullName?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Employee of manager id# <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="employeeOfManagerId"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.employeeOfManagerId ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Your Manager ID"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.employeeOfManagerId?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Employee ID# <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="employeeId"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.id ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Employee ID"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.id?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Role <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="role"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.role ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Role"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.role?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Date of birth <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <Controller
                          name="dateOfBirth"
                          control={control}
                          render={({ field }) => (
                            <DatePicker
                              selected={selectedDate1}
                              onChange={(date) => {
                                handleDateChange1(date);
                                field.onChange(date);
                              }}
                              className="form-control floating datetimepicker"
                              dateFormat="dd-MM-yyyy"
                            />
                          )}
                        />
                      </div>
                      <span className="text-danger">
                        {errors?.DataOfBirth?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Place Of residence <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="placeOfResidence"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.PlaceOfResidence ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Residence"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.PlaceOfResidence?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Family status <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="familyStatus"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.FamilyStatus ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Family status"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.FamilyStatus?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Number Of Children<span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="numberOfChildren"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.NumOfChildren ? "error-input" : ""
                              }`}
                            type="number"
                            value={value}
                            onChange={(e) => onChange(Number(e.target.value))}
                            autoComplete="false"
                            placeholder="Employee's nubmer of children"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.NumOfChildren?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Years in the company <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="yearsInTheCompany"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.YearsInTheCompany ? "error-input" : ""
                              }`}
                            type="number"
                            value={value}
                            onChange={(e) => onChange(Number(e.target.value))}
                            autoComplete="false"
                            placeholder="Number of years"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.YearsInTheCompany?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Anniversary <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="anniversary"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control ${errors?.Anniversary ? "error-input" : ""
                              }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Anniversary"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.Anniversary?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <label className="col-form-label">Latest activities<span className="text-danger">*</span>
                    </label>
                    {latestActivities.map((activity, index) => (
                      <div className="input-block mb-3" key={index}>
                        <div className="row">
                          <div className="col-sm-6">
                            <Controller
                              name={`latestActivities[${index}].date`}
                              control={control}
                              // defaultValue={activity.date}
                              render={({ field }) => (
                                <DatePicker
                                  selected={field.value}
                                  onChange={(date) => {
                                    field.onChange(date);
                                    handleActivityChange(index, 'date', date);
                                  }}
                                  className={`form-control ${errors?.LastestActivity?.[index]?.date ? "error-input" : ""}`}
                                  type="date"
                                  dateFormat="dd-MM-yyyy"
                                />
                              )}
                            />
                            <span className="text-danger">
                              {errors?.LastestActivity?.[index]?.date?.message}
                            </span>
                          </div>
                          <div className="col-sm-6">
                            <Controller
                              name={`latestActivities[${index}].activity`}
                              control={control}
                              // defaultValue={activity.activity}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.LastestActivity?.[index]?.activity ? "error-input" : ""}`}
                                  type="text"
                                  value={value}
                                  onChange={(e) => handleActivityChange(index, 'activity', e.target.value)}
                                  autoComplete="false"
                                  placeholder="Activity"
                                />
                              )}
                            />
                            <br />
                            <span className="text-danger">
                              {errors?.LastestActivity?.[index]?.activity?.message}
                            </span>
                          </div>
                          <div style={{
                            display: window.innerWidth <= 768 ? 'flex' : '',
                            flexDirection: window.innerWidth > 768 ? 'column' : '',
                            justifyContent: window.innerWidth > 768 ? '' : 'space-between',
                          }}>
                            <button type="button" className="btn btn-secondary"
                              onClick={addActivity} onMouseOver={enterHover}
                              onMouseOut={exitHover} style={{
                                width: '150px',
                                height: '40px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: isAddActivityBtnHovered ?
                                  '#e3a31d' : '#FEB723',
                                color: 'black',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                fontSize: '15px'
                              }}>
                              Add activity
                            </button>
                            <div className="col-sm-1">
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeActivity(index)}
                                onMouseOver={enterRemoveActivityBtnHover}
                                onMouseOut={exitRemoveActivityBtnHover}
                                style={{
                                  width: '150px',
                                  height: '40px',
                                  borderRadius: '5px',
                                  border: isRemoveActivityBtnHovered ? 'none' : '2px solid #FEB723',
                                  color: isRemoveActivityBtnHovered ? '#FEB723' : '#FEB723',
                                  backgroundColor: isRemoveActivityBtnHovered ? 'black'
                                    : 'white',
                                  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                  fontSize: '15px',
                                  marginTop: window.innerWidth > 768 ? '20px' : ''
                                }}
                              >
                                Remove activity
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Intresting fact <span className="text-danger">*</span>
                      </label>
                      <Controller
                        name="intrestingFact"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <textarea
                            className={`form-control ${errors?.InterestingFact ? "error-input" : ""}`}
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                            placeholder="Share an interesting fact about the employee"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors?.InterestingFact?.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Closest personal event <span className="text-danger">*</span>
                      </label>
                      <div className="row">
                        <div className="col-sm-6">
                          <Controller
                            name="closestPersonalEvent.date"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <DatePicker
                                selected={closestPersonalEvent.date}
                                onChange={(date) => setClosestPersonalEvent({ ...closestPersonalEvent, date })}
                                className={`form-control ${errors?.ClosestPersonalEvent?.date ? "error-input" : ""}`}
                                type="date"
                                dateFormat="dd-MM-yyyy"
                              />
                            )}
                          />
                          <span className="text-danger">
                            {errors?.ClosestPersonalEvent?.date?.message}
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <Controller
                            name="closestPersonalEvent.event"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <input
                                className={`form-control ${errors?.ClosestPersonalEvent?.event ? "error-input" : ""}`}
                                type="text"
                                value={closestPersonalEvent.event}
                                onChange={(e) => setClosestPersonalEvent({ ...closestPersonalEvent, event: e.target.value })}
                                autoComplete="false"
                                placeholder="Event"
                              />
                            )}
                          />
                          <span className="text-danger">
                            {errors?.ClosestPersonalEvent?.event?.message}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Favorite singers <span className="text-danger">*</span>
                      </label>
                      {singers.map((singer, index) => (
                        <div key={index} className="row mb-3">
                          <div className="col-sm-12">
                            <Controller
                              name={`singers[${index}].singer`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.singers?.[index]?.singer ? "error-input" : ""}`}
                                  type="text"
                                  value={singer.singer}
                                  onChange={(e) => handleSingerChange(index, e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Singer ${index + 1}`}
                                />
                              )}
                            />
                            <br />
                            <span className="text-danger">
                              {errors?.singers?.[index]?.singer?.message}
                            </span>
                          </div>
                          <div style={{
                            display: window.innerWidth <= 768 ? 'flex' : '',
                            flexDirection: window.innerWidth > 768 ? 'column' : '',
                            justifyContent: window.innerWidth > 768 ? '' : 'space-between',
                          }}>
                            <button type="button" onClick={addSinger}
                              onMouseOver={enterAddSingerHover}
                              onMouseOut={exitAddSingerHover}
                              style={{
                                width: '150px',
                                height: '40px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: isAddSingerBtnHovered ? '#e3a31d' :
                                  '#FEB723',
                                fontSize: '15px',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                fontSize: '15px'
                              }}>
                              Add singer</button>
                            <div className="col-sm-2">
                              <button type="button" onClick={() => removeSinger(index)}
                                onMouseOver={enterRemoveSingerHover}
                                onMouseOut={exitRemoveSingerHover}
                                style={{
                                  width: '150px',
                                  height: '40px',
                                  borderRadius: '5px',
                                  border: isRemoveSingerBtnHovered ? 'none' : '2px solid #FEB723',
                                  color: isRemoveSingerBtnHovered ? '#FEB723' : '#FEB723',
                                  backgroundColor: isRemoveSingerBtnHovered ? 'black'
                                    : 'white',
                                  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                  fontSize: '15px',
                                  marginTop: window.innerWidth > 768 ? '20px' : ''
                                }}>
                                Remove singer</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Food and drinks
                        <span className="text-danger">*</span>
                      </label>
                      {foodAndDrinks.map((item, index) => (
                        <div key={index} className="row mb-3">
                          <div className="col-sm-4">
                            <Controller
                              name={`foodAndDrinks[${index}].food1`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.FoodAndDrinks?.[index]?.food1 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.food1}
                                  onChange={(e) => handleFoodAndDrinkChange(index, 'food1', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Food 1`}
                                />
                              )}
                            />
                            <span className="text-danger">
                              {errors?.FoodAndDrinks?.[index]?.food1?.message}
                            </span>
                          </div>
                          <div className="col-sm-4">
                            <Controller
                              name={`foodAndDrinks[${index}].food2`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.FoodAndDrinks?.[index]?.food2 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.food2}
                                  onChange={(e) => handleFoodAndDrinkChange(index, 'food2', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Food 2`}
                                />
                              )}
                            />
                            <span className="text-danger">
                              {errors?.FoodAndDrinks?.[index]?.food2?.message}
                            </span>
                          </div>
                          <div className="col-sm-4">
                            <Controller
                              name={`foodAndDrinks[${index}].drink`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.FoodAndDrinks?.[index]?.drink ? "error-input" : ""}`}
                                  type="text"
                                  value={item.drink}
                                  onChange={(e) => handleFoodAndDrinkChange(index, 'drink', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Drink`}
                                />
                              )}
                            />
                            <br />
                            <span className="text-danger">
                              {errors?.FoodAndDrinks?.[index]?.drink?.message}
                            </span>
                          </div>
                          <div style={{
                            display: window.innerWidth <= 768 ? 'flex' : '',
                            flexDirection: window.innerWidth > 768 ? 'column' : '',
                            justifyContent: window.innerWidth > 768 ? '' : 'space-between',
                          }}>
                            <button type="button" onClick={addFoodAndDrink}
                              onMouseOver={enterAddFoodAndDrinkBtnHover}
                              onMouseOut={exitAddFoodAndDrinkBtnHover}
                              style={{
                                width: '150px',
                                height: '40px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: isAddFoodAndDrinkBtnHovered ? '#e3a31d' :
                                  '#FEB723',
                                fontSize: '15px',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                              }}>
                              Add food & drink</button>
                            <div className="col-sm-2">
                              <button type="button"
                                onClick={() => removeFoodAndDrink(index)}
                                onMouseOver={enterRemoveFoodAndDrinkBtnHover}
                                onMouseOut={exitRemoveFoodAndDrinkBtnHover}
                                style={{
                                  width: '150px',
                                  height: '40px',
                                  borderRadius: '5px',
                                  border: isRemoveFoodAndDrinkBtnHovered ? 'none' : '2px solid #FEB723',
                                  color: isRemoveFoodAndDrinkBtnHovered ? '#FEB723' : '#FEB723',
                                  backgroundColor: isRemoveFoodAndDrinkBtnHovered ? 'black'
                                    : 'white',
                                  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                  fontSize: '14px',
                                  marginTop: window.innerWidth > 768 ? '20px' : ''
                                }}>
                                Remove food & drink</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Favorite restaurants <span className="text-danger">*</span>
                      </label>
                      {restaurants.map((item, index) => (
                        <div key={index} className="row mb-3">
                          <div className="col-sm-6">
                            <Controller
                              name={`restaurants[${index}].restaurant1`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.Restaurants?.[index]?.restaurant1 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.restaurant1}
                                  onChange={(e) => handleRestaurantChange(index, 'restaurant1', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Restaurant 1`}
                                />
                              )}
                            />
                            <span className="text-danger">
                              {errors?.Restaurants?.[index]?.restaurant1?.message}
                            </span>
                          </div>
                          <div className="col-sm-6">
                            <Controller
                              name={`restaurants[${index}].restaurant2`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.Restaurants?.[index]?.restaurant2 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.restaurant2}
                                  onChange={(e) => handleRestaurantChange(index, 'restaurant2', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Restaurant 2`}
                                />
                              )}
                            />
                            <br />
                            <span className="text-danger">
                              {errors?.Restaurants?.[index]?.restaurant2?.message}
                            </span>
                          </div>
                          <div style={{
                            display: window.innerWidth <= 768 ? 'flex' : '',
                            flexDirection: window.innerWidth > 768 ? 'column' : '',
                            justifyContent: window.innerWidth > 768 ? '' : 'space-between',
                          }}>
                            <button type="button" onClick={addRestaurant}
                              onMouseOver={enterAddRestaurantBtnHover}
                              onMouseOut={exitAddRestaurantBtnHover}
                              style={{
                                width: '150px',
                                height: '40px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: isAddRestaurantBtnHovered ? '#e3a31d' :
                                  '#FEB723',
                                fontSize: '15px',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                              }}
                            >Add restaurant
                            </button>
                            <div className="col-sm-2">
                              <button type="button" onClick={() => removeRestaurant(index)}
                                onMouseOver={enterRemoveRestaurantBtnHover}
                                onMouseOut={exitRemoveRestaurantBtnHover}
                                style={{
                                  width: '150px',
                                  height: '40px',
                                  borderRadius: '5px',
                                  border: isRemoveRestaurantBtnHovered ? 'none' : '2px solid #FEB723',
                                  color: isRemoveRestaurantBtnHovered ? '#FEB723' : '#FEB723',
                                  backgroundColor: isRemoveRestaurantBtnHovered ? 'black'
                                    : 'white',
                                  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                  fontSize: '15px',
                                  marginTop: window.innerWidth > 768 ? '20px' : ''
                                }}
                              >
                                Remove restaurant</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Favorite hobbies <span className="text-danger">*</span>
                      </label>
                      {hobbys.map((item, index) => (
                        <div key={index} className="row mb-3">
                          <div className="col-sm-4">
                            <Controller
                              name={`hobbys[${index}].hobby1`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.Hobbys?.[index]?.hobby1 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.hobby1}
                                  onChange={(e) => handleHobbyChange(index, 'hobby1', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Hobby 1`}
                                />
                              )}
                            />
                            <span className="text-danger">
                              {errors?.Hobbys?.[index]?.hobby1?.message}
                            </span>
                          </div>
                          <div className="col-sm-4">
                            <Controller
                              name={`hobbys[${index}].hobby2`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.Hobbys?.[index]?.hobby2 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.hobby2}
                                  onChange={(e) => handleHobbyChange(index, 'hobby2', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Hobby 2`}
                                />
                              )}
                            />
                            <span className="text-danger">
                              {errors?.Hobbys?.[index]?.hobby2?.message}
                            </span>
                          </div>
                          <div className="col-sm-4">
                            <Controller
                              name={`hobbys[${index}].hobby3`}
                              control={control}
                              render={({ field: { value, onChange } }) => (
                                <input
                                  className={`form-control ${errors?.Hobbys?.[index]?.hobby3 ? "error-input" : ""}`}
                                  type="text"
                                  value={item.hobby3}
                                  onChange={(e) => handleHobbyChange(index, 'hobby3', e.target.value)}
                                  autoComplete="false"
                                  placeholder={`Hobby 3`}
                                />
                              )}
                            />
                            <br />
                            <span className="text-danger">
                              {errors?.Hobbys?.[index]?.hobby3?.message}
                            </span>
                          </div>
                          <div style={{
                            display: window.innerWidth <= 768 ? 'flex' : '',
                            flexDirection: window.innerWidth > 768 ? 'column' : '',
                            justifyContent: window.innerWidth > 768 ? '' : 'space-between',
                          }}>
                            <button type="button" onClick={addHobby}
                              onMouseOver={enterAddHobbyBtnHover}
                              onMouseOut={exitAddHobbyBtnHover}
                              style={{
                                width: '150px',
                                height: '40px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: isAddHobbyBtnHovered ?
                                  '#e3a31d' : '#FEB723',
                                color: 'black',
                                transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                fontSize: '15px'
                              }}>
                              Add hobby
                            </button>
                            <div className="col-sm-2">
                              <button type="button" onClick={() => removeHobby(index)}
                                onMouseOver={enterRemoveHobbyBtnHover}
                                onMouseOut={exitRemoveHobbyBtnHover}
                                style={{
                                  width: '150px',
                                  height: '40px',
                                  borderRadius: '5px',
                                  border: isRemoveHobbyBtnHovered ? 'none' : '2px solid #FEB723',
                                  color: isRemoveHobbyBtnHovered ? '#FEB723' : '#FEB723',
                                  backgroundColor: isRemoveHobbyBtnHovered ? 'black'
                                    : 'white',
                                  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                                  fontSize: '15px',
                                  marginTop: window.innerWidth > 768 ? '20px' : ''
                                }}>
                                Remove hobby</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
                {/* /////////////////////////////////////////////////////////////////////////// */}

                {/* <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th className="text-center">Read</th>
                        <th className="text-center">Write</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">Delete</th>
                        <th className="text-center">Import</th>
                        <th className="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="submit"
                    style={{
                      width: '339px', height: '60px', borderRadius: '5px',
                      backgroundColor: isSubmitBtnHovered ? '#4D4700' : 'black', border: 'none',
                    }}
                    onMouseOver={enterSubmitBtnHover}
                    onMouseOut={exitSubmitBtnHover}
                  // onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <div id="edit_employee" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Employee</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="John"
                        type="text"
                        valu
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Last Name</label>
                      <input
                        className="form-control"
                        defaultValue="Doe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="johndoe@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Confirm Password</label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Employee ID <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="FT-0001"
                        readOnly=""
                        className="form-control floating"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Joining Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
                          type="date"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone </label>
                      <input
                        className="form-control"
                        defaultValue={9876543210}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Company</label>
                      <Select
                        options={companies}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Department <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={employee}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Designation <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={designation}
                        placeholder="Select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th className="text-center">Read</th>
                        <th className="text-center">Write</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">Delete</th>
                        <th className="text-center">Import</th>
                        <th className="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" defaultChecked="true" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="submit-section">
                  <button
                    className="btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="reset"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEmployeeAddPopup;
