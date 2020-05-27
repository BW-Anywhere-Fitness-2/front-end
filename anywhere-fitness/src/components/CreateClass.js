import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
// import TimePicker from "react-time-picker";

//YUP validation schema 
const formSchema = yup.object().shape({
  class_name: yup
    .string()
    .required("Class is a required field")
    .min(2, "Name must be at least 2 characters long"),
  class_type: yup.string().required("Please choose a class type"),
  class_length: yup.string(),
  intensity: yup.string(),
  location: yup.string().required("Please state a location"),
});

export default function Form() {
  const [formState, setFormState] = useState({
    class_name: "",
    class_type: "HITT",
    class_length: "",
    intensity: "1",
    location: ""
  });

  //Error State 
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    instructions: "",
  });

  const [order, setOrder] = useState({});


  //Validation 
  const validate = (e) => {
    let value =
    e.target.type === "radio"
    ? e.target.id
    : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value, e.target.checked);
    validate(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Pizza ordered!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="class_name">
        <h2> Class Name</h2>
        <input
          type="text"
          name="class_name"
          id="class_name"
          placeholder="class name"
          value={formState.class_name}
          onChange={inputChange}
        ></input>
        {errors.name.lenth > 2 ? <p className="error">{errors.name}</p> : null}
      </label>

      <div className="typeComponent">
        <form>
          <h3>Type</h3>
          <select
            id="class_type"
            name="class_type"
            value={formState.class_type}
            onChange={inputChange}
          >
            <option value="weightlifting"> Weightlifting</option>
            <option value="aerobics"> Aerobics</option>
            <option value="crossfit"> CrossFit </option>
            <option value="hiit"> HIIT </option>
          </select>
        </form>
      </div>

      {/* <div className="timeComponent">
        <h3>Select Time </h3>
        <TimePicker />
      </div> */}

      <div className="lengthComponent">
        <form>
          <h3>Length</h3>
          <select
            id="length"
            name="class_length"
            value={formState.length}
            onChange={inputChange}
          >
            <option value=".5hour"> 30 minutes</option>
            <option value=".75hour"> 45 minutes</option>
            <option value="1hour"> 1 hour </option>
            <option value="1.25hour"> 1 hour 15 minutes </option>
            <option value="1.5hour"> 1 hour 30 minutes </option>
          </select>
        </form>
      </div>

      <div className="intensitySelection">
        <h3>Intensity Level </h3>
        <label className="intensitySelection" htmlFor="easy">
          1 (easy)
          <input
            id="easy"
            type="radio"
            name="intensity"
            value={formState.intensity}
            onChange={inputChange}
          />
          </label>
          <label className="intensitySelection" htmlFor="2">
          2
          <input
            id="2"
            type="radio"
            name="intensity"
            value={formState.intensity}
            onChange={inputChange}
          />
          </label>
           <label className="intensitySelection" htmlFor="moderate">
          3
          <input
            id="moderate"
            type="radio"
            name="intensity"
            value={formState.intensity}
            onChange={inputChange}
          />
          </label>
          <label className="intensitySelection" htmlFor="4">
          (moderate) 4
          <input
            id="4"
            type="radio"
            name="intensity"
            value={formState.intensity}
            onChange={inputChange}
          />
          </label>
          <label className="intensitySelection" htmlFor="extreme">
          5 (extreme)
          <input
            id="extreme"
            type="radio"
            name="intensity"
            value={formState.intensity}
            onChange={inputChange}
          />
          </label>
      </div>

      <label htmlFor="location">
        <h3>Class Location</h3>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="location"
          value={formState.location}
          onChange={inputChange}
        ></input>
        {errors.name.lenth > 2 ? <p className="error">{errors.name}</p> : null}
      </label>

      <div className="attendees">
        <label htmlFor="attendees">
          <h3>Current # of attendees:</h3>
        </label>
      </div>

      <div className="maxOccupancy">
        <label htmlFor="maxOccupancy">
          <h3>Max # of attendees:</h3>
        </label>
      </div>
      <button data-test-id="submitButton">Submit</button>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </form>
  );
}
