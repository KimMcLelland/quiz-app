import './main.css';
import React, {useState} from 'react';


function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [whichForm, setWhichForm] = useState();
  const handleWhichForm = (event) => {
    setWhichForm(event.target.value)
  }
  const handleUsernameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };
  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handleSubmitLogin = (event) => {
    console.log(`sending ${values.username} and values.password to back end for verification`)
  }

  const handleSubmitRegister = (event) => {
    console.log(`sending ${values.username}, ${values.email} and values.password to back end to be added to database`)
  }

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

  return (
    <div>
        <h1>Login or register</h1>
        <div onChange={handleWhichForm}>
          <input type="radio" id="login" name="whichForm" value="login" />
          <label for="login">Login</label>
          <input type="radio" id="register" name="whichForm" value="register" />
          <label for="register">Register</label>
        </div>
        {console.log(whichForm)}
        {formChoice()}
    </div>
  );
}

export default Login;
