import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../reducers/user";
import { ProfileContainer, ProfileHeading, ProfilePart, LogoutButton } from "../User/StyledProfile";

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
    navigate("/");
  };

  return (
    <ProfileContainer>
      <ProfileHeading>Hello {username}!</ProfileHeading>
      <ProfilePart>
        <p>This is where i'd like to add personal information like a profile picture, hiking trails, maybe photos, friend requests etc.</p>
      </ProfilePart>
      <LogoutButton type="button" onClick={onLogOutButtonClick}>
        Logout
      </LogoutButton>
    </ProfileContainer>
  );
};
