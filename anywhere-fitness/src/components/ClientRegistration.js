import React, { useState } from 'react';
import * as yup from "yup";
import axios from "axios";
import FormField from './FormField'
import Buttons from './Buttons'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Your name should have at least 2 characters")
      .required("Name is a required field"),
    email: yup
    .string()
    .email("Must be a valid email"),
    username: yup
    .string()
    .required("Username required"),
    password: yup
    .string()
    .min(6, "Your password should contain at least 6 characters")
    .required("Password is a required field"),
});

// const FormField = styled.field`
// display: inline-block;
// color: palevioletred;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid palevioletred;
// border-radius: 3px;
// display: block;
// `;

export default function ClientRegistration() {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
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

  const inputChange = e => {
    e.persist();
    validate(e);
    console.log(e.target.value);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://anywhere-fitness-ptbw.herokuapp.com/api/auth/register/user", formState)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };



  return (
    <form onSubmit={formSubmit} >
      <h1>Client Registration</h1>
      <label htmlFor="name">
        <h5>Name</h5>
        <FormField
          // style={FormField}
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
        <FormField 
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
        <FormField
          name="username"
          id="username"
          placeholder="Enter username here..."
          value={formState.username}
          onChange={inputChange}
        />
        {errorState.username.length > 0 ? (
          <p className="error">{errorState.username}</p>
        ) : null}
      </label>
      <label htmlFor="password">
        <h5>Password</h5>
        <FormField
          name="password"
          id="password"
          placeholder="Enter password here..."
          value={formState.password}
          onChange={inputChange}
          />
      </label>
     <div>
       <p>
      <Buttons type="submit">Register</Buttons>
      </p>
      </div>
    </form>
    
  //   <div className="switch">
  //   <Link to={`/register/instructor`}>
  //       <h2>{title}</h2>
  //       </Link>
  //   </div>
  //    <div>
  //    <button className="switch">Switch to Instructor</button>
  //  </div>

  );
  
}




// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid red;
//   color: red;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;
// const Container = styled.div`
//   text-align: center;
// `
// render(
//   <Container>
//     <Button>Register</Button>
//     <Button primary>Primary Button</Button>
//   </Container>
// );

// Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
// Create a Wrapper component that'll render a <section> tag with some styles
// const Background = styled.section`
//   padding: 4em;
//   background: black;
// `;
// Use Title and Wrapper like any other React component – except they're styled!
