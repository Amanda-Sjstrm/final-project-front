import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../reducers/user";
import { API_URL } from "../../utils/utils";
import { Switch, FormControlLabel, styled } from "@mui/material";
import { FormContainer, RightFormImage, LeftFormGroup, FormTitle, FormGroup, FormGroupSwitch, FormButton, Error } from "./StyledForm";
import image from "../../images/login-bg.png";

// Switch styled with help from 'https://mui.com/material-ui/react-switch/'
const StyledSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#6873c3" : "#6873c3",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#6873c3",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 400,
    }),
  },
}));

export const Form = ({ path }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("login");
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  const navigate = useNavigate();
  const error = useSelector((store) => store.user.error);

  useEffect(() => {
    if (accessToken) {
      navigate("/profile");
    }
  }, [accessToken, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
          console.log("success!");
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
          console.log("fail");
        }
      });
  };

  const handleFormTypeChange = () => {
    setMode(mode === "login" ? "register" : "login");
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
          <StyledSwitch>
            <FormControlLabel control={<Switch checked={mode === "register"} onChange={handleFormTypeChange} />} />
          </StyledSwitch>
          <p>Register</p>
        </FormGroupSwitch>
        {error && <Error>Unable to login. Please make sure you're registered.</Error>}
      </LeftFormGroup>
    </FormContainer>
  );
};
