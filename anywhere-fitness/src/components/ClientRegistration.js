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
    email: yup
    .string()
    .email("Must be a valid email")
    .required("You don't have an email?"),
    username: yup
    .string()
    .required("Username required"),
    password: yup
    .string()
    .min(6, "Your password should contain at least 6 characters")
    .required("Password is a required field"),
});

export default function ClientRegistration() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
    //password
    //email
    //genderChoice: "",
    //dietaryRestrictions: "",
    //profileAttributes: []
  });

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
    //genderChoice: "",
    //dietaryRestrictions: "",
    //profileAttributes: []
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

  // const handleCheck = e => {
  //   e.persist();
  //   setFormState({
  //     ...formState,
  //     profileAttributes: [formState.profileAttributes, e.target.value]
  //   })
  // }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://anywhere-fitness-ptbw.herokuapp.com/api/auth/register/user", formState)
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
      <label htmlFor="email">
        <h5>Email</h5>
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="Enter email here..."
        value={formState.email}
        onChange={inputChange}
        />
      </label>
      <label htmlFor="username">
        <h5>Username</h5>
        <textarea
          name="username"
          id="username"
          value={formState.username}
          onChange={inputChange}
        />
        {errorState.username.length > 0 ? (
          <p className="error">{errorState.username}</p>
        ) : null}
      </label>
      <label htmlFor="password">
        <h5>Password</h5>
        <textarea
          name="password"
          id="password"
          value={formState.password}
          onChange={inputChange}
          />
      </label>
     <div>
       <p>
      <button type="submit">Register</button>
      </p>
      </div>
    </form>
  );
}
