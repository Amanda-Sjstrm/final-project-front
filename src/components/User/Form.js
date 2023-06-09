import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../reducers/user";
import { API_URL } from "../../utils/utils";
import { Switch, FormControlLabel } from "@mui/material";
import { FormContainer, RightFormImage, LeftFormGroup, FormTitle, FormGroup, FormGroupSwitch, FormButton, Error } from "./StyledForm";
import image from "../../images/login-bg.png";

export const Form = () => {
  // State variables for login and registration
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);

  // Redux hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((data) => data.user.accessToken);
  const error = useSelector((data) => data.user.error);

  // When user loggs in redirect to profile page
  useEffect(() => {
    if (accessToken) {
      navigate("/profile");
    }
  }, [accessToken, navigate]);

  // Handle login form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Prepare request options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };

    // Send login request to the server
    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Update user state with access token, username, and user ID
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
          console.log("success!");
        } else {
          // Handle login error
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
          console.log("fail");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFormTypeChange = () => {
    console.log("Switch toggled");
    setMode((prevMode) => (prevMode === "login" ? "register" : "login"));
  };

  const btnText = mode === "register" ? "Register" : "Login";

  return (
    <FormContainer>
      <RightFormImage src={image} alt="Image" />
      <LeftFormGroup>
        <FormTitle>Login or register a new user</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <h3 htmlFor="username">Username:</h3>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <h3 htmlFor="password">Password:</h3>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          <FormButton type="submit">{btnText}</FormButton>
          {loading && <div>Loading...</div>}
        </form>
        <FormGroupSwitch>
          <p>Login</p>
          <div>
            <FormControlLabel control={<Switch checked={mode === "register"} onChange={handleFormTypeChange} />} />
          </div>
          <p>Register</p>
        </FormGroupSwitch>
        {error && <Error>Unable to login. Please make sure you're registered.</Error>}
      </LeftFormGroup>
    </FormContainer>
  );
};
