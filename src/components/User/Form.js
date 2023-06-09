import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../reducers/user";
import { API_URL } from "../../utils/utils";
import { Switch, FormControlLabel, TextField } from "@mui/material";
import { FormContainer, RightFormImage, LeftFormGroup, FormTitle, FormGroup, FormGroupSwitch, FormButton, StyledLink, Error } from "./StyledForm";
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

  const btnText = mode === "register" ? "Registrera" : "Logga in";

  return (
    <FormContainer>
      <RightFormImage src={image} alt="Image" />
      <LeftFormGroup>
        <FormTitle>Logga in eller registrera ny användare</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <h3 htmlFor="username">Användarnamn:</h3>
            <TextField required fullWidth id="username" label="Username" name="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <h3 htmlFor="password">Lösenord:</h3>
            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          <FormButton type="submit">{btnText}</FormButton>
          {loading && <div>Laddar...</div>}
        </form>
        <FormGroupSwitch>
          <p>Logga in</p>
          <div className="styled-switch">
            <FormControlLabel control={<Switch checked={mode === "register"} onChange={handleFormTypeChange} />} />
          </div>
          <p>Registrera</p>
        </FormGroupSwitch>
        {error && <Error>Det gick inte att logga in. Tänk på att registrera dig om du är ny 🙂</Error>}
        <StyledLink to="/">Tillbaka till startsidan</StyledLink>
      </LeftFormGroup>
    </FormContainer>
  );
};
