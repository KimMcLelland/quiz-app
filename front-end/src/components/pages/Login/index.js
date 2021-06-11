import './main.css';
import React, {useState} from 'react';
import { json } from 'express';


function Login() {
  // setting State variables: object with username, password and email keys
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  // variables and functions to do with user selecting between login and register
  const [whichForm, setWhichForm] = useState();
  const handleWhichForm = (event) => {
    setWhichForm(event.target.value)
  }

  const sendLogin = async (username, password) => {
    const response = await fetch ('localhost: 3001/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: user.username, 
        password: user.password,
      }),
    });
  }

  const registerUser = async (username, password, email) => {
    const response = await fetch ('http://localhost:3001/user/register', {
      method: 'POST',
      body: JSON.stringify({
        username: user.username, 
        password: user.password,
        email: user.email,
      }),
    });
  }
  // functions to change values when input changes
  const handleUsernameInputChange = (event) => {
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };
  const handlePasswordInputChange = (event) => {
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };
  const handleEmailInputChange = (event) => {
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  // functions that affect what happens when form is submitted
  const handleSubmitLogin = (event) => {
    sendLogin(values.username, values.password);
  }

  const handleSubmitRegister = (event) => {
    registerUser(values.username, values.password, values.email);
  }

  // the function that changes the form that appears (login or register) depending on which 
  // radio button the user selects
  const formChoice = () => { 
    if (whichForm === "login")
      return (
        <div>
        <h2>Login:</h2>
        <form className = "logOrRegister" onSubmit={handleSubmitLogin}>
        <label>
          Username:
          <input type = "text" value = {values.username} onChange={handleUsernameInputChange}/>
        </label>
        <label>
          Password:
          <input type = "password" value = {values.password} onChange={handlePasswordInputChange}/>
        </label>
        <input className = "submitButton" type="submit" value="Submit"  />
      </form>
      </div>
      )
    else if (whichForm === "register")
        return (
          <div>
            <h2>Register</h2>
      <form className = "logOrRegister" onSubmit={handleSubmitRegister}>
        <label>
          Username:
          <input type = "text" value = {values.username} onChange={handleUsernameInputChange}/>
        </label>
        <label>
          Password:
          <input type = "password" value = {values.password} onChange={handlePasswordInputChange}/>
        </label>
        <label>
          Email:
          <input type = "text" value = {values.email} onChange={handleEmailInputChange}/>
        </label>
        <input className = "submitButton" type="submit" value="Submit"  />
      </form>
          </div>
        )
  }

  // the general page layout: radio button to select which form and the function call of formChoice
  return (
    <div>
        <h1>Login or register</h1>
        <div onChange={handleWhichForm}>
          <input type="radio" id="login" name="whichForm" value="login" />
          <label for="login">Login</label>
          <input type="radio" id="register" name="whichForm" value="register" />
          <label for="register">Register</label>
        </div>
        {formChoice()}
    </div>
  );
}

export default Login;
