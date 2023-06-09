import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { user } from "./reducers/user";
import { Main } from "./components/Main/Main";
import { Form } from "./components/User/Form";
import { Profile } from "./components/User/Profile";

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
