import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Chatscreen from "./screens/chatscreen";
import SignUp from "./screens/signup";
import SignIn from "./screens/signin";
import Signup from "./screens/signup";

export default function App(props) {
  return (
    <div
      style={
        {
          //backgroundColor: "#f5f5f5",
        }
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Signup props={props} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chatscreen" element={<Chatscreen />} />
        </Routes>
      </Router>
    </div>
  );
}
