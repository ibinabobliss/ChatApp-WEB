import React, { useState } from "react";

function ThirdChatScreen({ selectedUser, chatMessages, onSendMessage }) {
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (messageText.trim() !== "") {
      onSendMessage(messageText);
      setMessageText("");
    }
  };

  return (
    <div
      style={{
        borderColor: "#212121",
        display: "flex",
        flexDirection: "column",
        height: "98%",
        paddingInline: 10,
      }}>
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "10px",
          backgroundColor: "#fafafa",
          color: "#fff",
        }}>
        {chatMessages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              maxWidth: "70%",
              alignSelf:
                message.sender === "senderid" ? "flex-start" : "flex-end",
            }}>
            <div
              style={{
                padding: "8px",
                borderRadius: "5px",
                backgroundColor:
                  message.sender === "senderid" ? "#000" : "#333",
                color: message.sender === "senderid" ? "#fff" : "#000", // Added text color
                textAlign: message.sender === "senderid" ? "right" : "left", // Align text
                maxWidth: message.sender === "senderid" ? "70%" : "100%", // Set max width for sender messages
              }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "none",
          }}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            padding: "8px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ThirdChatScreen;
