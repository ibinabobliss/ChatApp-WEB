import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Assuming you have Axios installed
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        borderBottom: "1px solid #fafafa",
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
      }}>
      {/* ... Add any top navigation elements here */}
      <Link to={"/chatscreen"}>
        <KeyboardBackspaceOutlinedIcon
          style={{ fontSize: 23, color: "#fafafa" }}
        />
      </Link>
    </div>
  );
}

function Message({ text, isSent, timestamp }) {
  const messageStyle = {
    backgroundColor: isSent ? "#4CAF50" : "gray",
    color: isSent ? "white" : "#fafafa",
    borderRadius: "10px",
    padding: "8px 12px",
    maxWidth: "60%",
    alignSelf: isSent ? "flex-end" : "flex-start",
    marginBottom: "8px",
    wordWrap: "break-word",
    display: "inline-block",
  };

  const timestampStyle = {
    fontSize: "12px",
    color: "#aaa",
    textAlign: isSent ? "right" : "left",
  };

  return (
    <div style={{ textAlign: isSent ? "right" : "left", marginBottom: "10px" }}>
      <div style={messageStyle}>{text}</div>
      <div style={timestampStyle}>{new Date(timestamp).toLocaleString()}</div>
    </div>
  );
}

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { chatId } = useParams();
  const senderId = "senderId"; // Replace with the actual sender ID
  const receiverId = "receiverId"; // Replace with the actual sender ID

  const getSentMessages = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/message/${chatId}/sent/${senderId}`
      );
      setMessages(response.data.sentMessages);
    } catch (error) {
      console.error("Error fetching sent messages:", error);
    }
  }, [chatId, senderId]);

  const getReceivedMessages = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/message/${chatId}/received/${receiverId}`
      );
      setMessages(response.data.receivedMessages);
    } catch (error) {
      console.error("Error fetching received messages:", error);
    }
  }, [chatId, receiverId]);

  const sendMessage = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:5000/message/add", {
        chatId,
        senderId,
        text: message,
      });

      setMessages([...messages, response.data.message]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }, [chatId, senderId, message, messages]);

  useEffect(() => {
    //getSentMessages();
    getReceivedMessages();
  }, [getReceivedMessages, chatId]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      sendMessage();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}>
      <TopNav />
      <div
        style={{
          backgroundColor: "#212121",
          padding: "20px",
          flex: "1",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            isSent={msg.senderId === senderId}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#212121",
          display: "flex",
          padding: "20px",
          alignItems: "flex-end",
        }}>
        <input
          style={{
            flex: "1",
            fontSize: "16px",
            padding: "8px",
            marginRight: "10px",
            borderRadius: "20px",
          }}
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message"
        />
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={handleSendClick}>
          Send
        </button>
      </div>
    </div>
  );
}
