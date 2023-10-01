import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ChatComponent from "./component/chatcomponent";
import Chatscreen from "./screens/chatscreen";
import SignIn from "./screens/signin";
import Signup from "./screens/signup";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chatscreen" element={<Chatscreen />} />
          <Route path="/chat/:chatId" element={<ChatComponent />} />
        </Routes>
      </Router>
    </div>
  );
}
