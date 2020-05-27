import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
// import TimePicker from "react-time-picker";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must be at least 2 characters long"),
  sizes: yup.string().required("Please choose a size"),
  marinara: yup.boolean(),
  whiteGarlic: yup.boolean(),
  pesto: yup.boolean(),
  bbq: yup.boolean(),
  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  olives: yup.boolean(),
  mushrooms: yup.boolean(),
  instructions: yup.string(),
});

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    sizes: "xLarge",
    pesto: false,
    whiteGarlic: false,
    bbq: false,
    pepperoni: false,
    pineapple: false,
    olives: false,
    mushrooms: false,
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    instructions: "",
  });

  const [order, setOrder] = useState({});

  const validate = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
      <label htmlFor="name">
       <h2> Class Name</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="class name"
          value={formState.name}
          onChange={inputChange}
        ></input>
        {errors.name.lenth > 2 ? <p className="error">{errors.name}</p> : null}
      </label>

      <div className="typeComponent">
        <form>
          <h3>Type</h3>
          <select
            id="type"
            name="type"
            value={formState.type}
            onChange={inputChange}
          >
            <option value="xLarge"> XL</option>
            <option value="large"> Large</option>
            <option value="medium"> Medium </option>
            <option value="small"> Small </option>
            <option value="personalPizza"> Personal </option>
          </select>
        </form>
      </div>

      <div className="timeComponent">
        <h3>Select Time </h3>
        <TimePicker />
      </div>

      <div className="lengthComponent">
        <form>
          <h3>Length</h3>
          <select
            id="length"
            name="length"
            value={formState.type}
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

      <div className="intensity">
        <h3>Intensity Level </h3>
        <label>
          1 (easy)
          <input type="radio" onChange={(event) => inputChange(event)} />
          2
        <input type="radio" onChange={event => inputChange(event)}/>
        3
        <input type="radio" onChange={event => inputChange(event)}/>
        4
        <input type="radio" onChange={event => inputChange(event)}/>
        
        <input type="radio" onChange={event => inputChange(event)}/>
        5 (difficult)
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
