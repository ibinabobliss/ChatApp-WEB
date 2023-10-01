import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";

function TopLayer() {
  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
      }}>
      <p
        style={{
          fontSize: 18,
          color: "#c62828",
          fontWeight: "bold",
        }}>
        Messages /
      </p>
      <p
        style={{
          fontSize: 18,
          color: "#6a1b9a",
          fontWeight: "bold",
          marginLeft: 7,
        }}>
        Team Chat
      </p>
    </div>
  );
}

function SecondLayer() {
  return (
    <div
      style={{
        padding: 3,
        backgroundColor: "#212121",
        borderRadius: 12,
        marginTop: 18,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        width: 200,
        marginLeft: 20,
      }}>
      <DriveFileRenameOutlineOutlinedIcon
        style={{
          color: "#fafafa",
          marginTop: 10,
        }}
      />
      <p
        style={{
          color: "#fafafa",
          fontWeight: "bold",
        }}>
        New Messages
      </p>
    </div>
  );
}

function ThirdLayer({ name, icon }) {
  return (
    <div
      style={{
        margin: 11,
        marginTop: 10,
      }}>
      <Button
        style={{
          color: "#000",
          borderWidth: 0,
          backgroundColor: "#fafafa",
          fontSize: 13,
          fontWeight: "bold",
        }}
        variant="outlined"
        startIcon={icon}>
        {name}
      </Button>
    </div>
  );
}

function ForthLayer() {
  return (
    <div
      style={{
        marginLeft: 20,
        marginTop: 40,
      }}>
      <p
        style={{
          fontSize: 18,
          color: "#c62828",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}>
        Direct messages
      </p>
    </div>
  );
}

function SecondScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  const getChatId = (senderId, receiverId) => {
    axios
      .get(`http://localhost:5000/chat/find/${senderId}/${receiverId}`)
      .then((response) => {
        const chatId = response.data.chatId;
        window.location.href = `/chat/${chatId}`;
      })
      .catch((error) => {
        // If chat is not found, create one
        createChat(senderId, receiverId);
      });
  };

  const createChat = (senderId, receiverId) => {
    axios
      .post(`http://localhost:5000/chat/create`, {
        senderId,
        receiverId,
      })
      .then((response) => {
        const chatId = response.data.chatId;
        window.location.href = `/chat/${chatId}`;
      })
      .catch((error) => {
        console.error("Error creating chat:", error);
      });
  };

  const HandleClick = (senderId, receiverId) => {
    getChatId(senderId, receiverId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <TopLayer />
      <SecondLayer />
      <ThirdLayer
        name={"Channels"}
        icon={<TagOutlinedIcon style={{ color: "grey", fontSize: 14 }} />}
      />
      <ThirdLayer
        name={"Mentions"}
        icon={<SaveAsOutlinedIcon style={{ color: "grey", fontSize: 14 }} />}
      />
      <ThirdLayer
        name={"Drafts"}
        icon={
          <AlternateEmailOutlinedIcon style={{ color: "grey", fontSize: 14 }} />
        }
      />
      <ThirdLayer
        name={"Files and media"}
        icon={
          <DriveFileMoveOutlinedIcon style={{ color: "grey", fontSize: 14 }} />
        }
      />
      <ForthLayer />
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <button
              style={{
                backgroundColor: "#212121",
                padding: 10,
                color: "#fafafa",
                borderRadius: 7,
                marginTop: 10,
                fontSize: 13,
                fontWeight: "530",
                whiteSpace: "nowrap",
                overflow: "hidden",
                borderWidth: 0,
                textOverflow: "ellipsis",
                textTransform: "capitalize",
                maxWidth: "230px",
                position: "relative",
                textDecoration: "none",
              }}
              onClick={() => HandleClick(user._id, user._id)}>
              {user.username}
              {user.hasUnreadMessages && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "3px 6px",
                    fontSize: "10px",
                  }}>
                  New
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondScreen;
