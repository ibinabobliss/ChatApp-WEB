import React from "react";
import "./chats.css";
import Firstscreen from "./firstscreen";
import SecondScreen from "./SecondScreen";
import TopNavBar from "./TopNavBar";
import ThirdChatScreen from "./ThirdChatScreen";
import Lastscreen from "./lastscreen";

export default function ChatScreen() {
  return (
    <div className="container">
      <div className="div1">
        <Firstscreen />
      </div>
      <div className="div2">
        <SecondScreen />
      </div>
      <div className="div3">
        <div>
          <TopNavBar />
        </div>
        <div>
          <ThirdChatScreen />
        </div>
      </div>

      <div className="div4">
        <Lastscreen />
      </div>
    </div>
  );
}
