import React from "react";

export default function Chats() {
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ThirdChatScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        // backgroundColor: "#f5f5f5",
      }}
    >
      <PrettyChatWindow
        projectId="cc7fb31b-ef02-41b4-ab74-fb4ad55147d7"
        username="ibinabobliss"
        secret="08122787682"
        style={{
          backgroundColor: "#fafafa",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginTop: 30,
          color: "tomato",
          // Add more styles as needed
        }}
      />
    </div>
  );
};

export default ThirdChatScreen;
