import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../reducers/user";

export const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((data) => data.user.accessToken);
  const username = useSelector((data) => data.user.username);
  const navigate = useNavigate();

  // If user is not logged in, redirect to login page
  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  const onLogOutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
  };

  return (
    <div>
      <h2>Hello {username}!!</h2>
      <button type="button" onClick={onLogOutButtonClick}>
        Logout
      </button>
    </div>
  );
};
