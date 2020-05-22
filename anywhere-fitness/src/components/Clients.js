//setting up client accounts, and interaction to view instructors and select classes to attend.

// - `Type`
// - `Start time`
// - `Duration`
// - `Intensity level`
// - `Location`
// - `Current number of registered attendees`
// - `Max class size`


//Use the below as a form to create the client profile (name, age, weight, gender, and what type of restrictions or diets they have tried in the past and how well they worked on a scale from 1-10[dropdown], and other preferences). 


import React, { useState } from 'react'
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Your name should have at least 2 characters")
      .required("Name is a required field"),
    ageChoice: yup
    .string()
    .required("Must select an age"),
    genderChoice: yup
    .string()
    .required("Must select a gender"),
    dietaryRestrictions: yup.string(),
    profileAttributes: yup
      .array()
      .min(1, "at least 1")
      .required("Please select"),
});

export default function ClientRegistration() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    genderChoice: "",
    dietaryRestrictions: "",
    profileAttributes: []
  });

  const [errorState, setErrorState] = useState({
    name: "",
    genderChoice: "",
    dietaryRestrictions: "",
    profileAttributes: []
  });

  const validate = e => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  // onChange function
  const inputChange = e => {
    e.persist();
    validate(e);
    console.log(e.target.value);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const handleCheck = e => {
    e.persist();
    setFormState({
      ...formState,
      profileAttributes: [formState.profileAttributes, e.target.value]
    })
  }

  const dietsCheck = e => {
    e.persist();
    setFormState({
      ...formState,
      profileAttributes: [formState.profileAttributes, e.target.value]
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name here..."
          value={formState.name}
          onChange={inputChange}
        />
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
      </label>
      <label htmlFor="dietaryRestrictions">
        <h5>Dietary Restrictions</h5>
        <textarea
          name="dietaryRestrictions"
          id="dietaryRestrictions"
          value={formState.dietaryRestrictions}
          onChange={inputChange}
        />
        {errorState.dietaryRestrictions.length > 0 ? (
          <p className="error">{errorState.dietaryRestrictions}</p>
        ) : null}
      </label>
      <label htmlFor="genderChoice">
        <h5>Gender</h5>
        <select
          value={formState.genderChoice}
          name="genderChoice"
          id="genderChoice"
          onChange={inputChange}
        >
            <option value="">--Please choose an option--</option>
          <option value="Small">Male</option>
          <option value="Medium">Female</option>
          <option value="Large">None of the Above</option>
          <option value="Extra Large">Prefer Not to Say</option>
        </select>
      </label>
      <p> What is your current weight? </p>
      <label>
        <input
          type="radio"
          id="superLight"
          name="profileAttributes"
          onChange={handleCheck}
        />
        <100
      </label>
      <label>
        <input
          type="radio"
          id="light"
          name="profileAttributes"
          onChange={handleCheck}
        />
        100-140
      </label>
      <label>
        <input
          type="radio"
          id="average"
          name="profileAttributes"
          onChange={handleCheck}
        />
        141-180
      </label>
      <label>
        <input
          type="radio"
          id="heavy"
          name="profileAttributes"
          onChange={handleCheck}
        />
        181-220
      </label>
      <label>
        <input
          type="radio"
          id="veryHeavy"
          name="profileAttributes"
          onChange={handleCheck}
        />
        221+
      </label>
      <p> What diets have you tried or are currently trying? </p>
      <label>
        <input
          type="checkbox"
          id="keto"
          name="diets"
          checked={formState.diets}
          onChange={dietsCheck}
        />
        Keto
      </label>
      <label>
        <input
          type="checkbox"
          id="atkins"
          name="diets"
          checked={formState.diets}
          onChange={dietsCheck}
        />
        Atkins
      </label>
      <label>
        <input
          type="checkbox"
          id="Paleo"
          name="diets"
          checked={formState.diets}
          onChange={dietsCheck}
        />
        Paleo
      </label>
      <label>
        <input
          type="checkbox"
          id="vegan"
          name="diets"
          checked={formState.diets}
          onChange={dietsCheck}
        />
        Vegan
      </label>
     <div>
       <p>
      <button type="submit">Register</button>
      </p>
      </div>
    </form>
  );
}
