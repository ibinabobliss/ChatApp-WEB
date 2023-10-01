import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Button } from "@mui/material";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import axios from "axios";
import Thirdchatscreen from "./ThirdChatScreen";

function TopNavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [unreadMessages, setUnreadMessages] = useState({});
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        const initialUnreadMessages = {};
        response.data.forEach((user) => {
          initialUnreadMessages[user._id] = 0;
        });
        setUnreadMessages(initialUnreadMessages);

        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleUserSearch = () => {
    const filtered = filteredUsers.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleUserSelect = (user) => {
    setUnreadMessages({
      ...unreadMessages,
      [user._id]: 0,
    });

    setSelectedUser(user);

    axios
      .get(`http://localhost:5000/chat/find/${user._id}/senderId`)
      .then((response) => {
        if (response.status === 200) {
          setChatId(response.data.chatId);
        } else if (response.status === 404) {
          const createChatResponse = axios.post(
            "http://localhost:5000/chat/create",
            {
              senderId: "senderId",
              receiverId: user._id,
            }
          );

          if (createChatResponse.status === 201) {
            setChatId(createChatResponse.data.chatId);
          }
        }
      })
      .catch((error) => {
        console.error("Error selecting user and creating chat:", error);
      });
  };

  const handleSendMessage = (messageText) => {
    if (messageText.trim() === "") return;

    const message = {
      chatId: chatId,
      senderId: "senderId",
      text: messageText,
    };

    setChatMessages([...chatMessages, message]);

    setUnreadMessages({
      ...unreadMessages,
      [selectedUser._id]: unreadMessages[selectedUser._id] + 1,
    });

    axios
      .post("http://localhost:5000/message/add", message)
      .then((response) => {
        if (response.status === 201) {
          console.log("Message sent successfully.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div style={{ padding: 8, fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 13,
        }}>
        <div>
          <div />
        </div>
        <div
          style={{
            display: "flex",
          }}>
          <Paper
            component="form"
            sx={{
              paddingInline: "18px",
              display: "flex",
              alignItems: "center",
              width: 200,
              backgroundColor: "#fafafa",
              borderWidth: 0,
              marginRight: 3,
            }}>
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Users"
              inputProps={{ "aria-label": "search users" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleUserSearch}>
              <SearchIcon />
            </IconButton>
          </Paper>
          <NotificationsNoneOutlinedIcon
            style={{
              color: "#212121",
              fontWeight: "500",
              marginTop: 10,
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 24,
        }}>
        <div>
          <p
            style={{
              fontSize: 25,
              textTransform: "capitalize",
              fontWeight: "500",
              color: "#212121",
            }}>
            Chat with {selectedUser ? selectedUser.username : "Select a User"}
          </p>
        </div>
        <div
          style={{
            margin: "22px  ",
            marginLeft: 10,
          }}>
          <Button
            onClick={() => {
              //   setbgcolor("black");
            }}
            style={{
              color: "#212121",
              borderWidth: 1,
              backgroundColor: "#fff",
              fontSize: 11,
              borderColor: "grey",
              fontWeight: "550",
            }}
            variant="outlined"
            startIcon={<TagOutlinedIcon />}>
            Filters
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 20, display: "flex", overflowX: "auto" }}>
        {filteredUsers.slice(0, 7).map((user) => (
          <Button
            key={user._id}
            onClick={() => handleUserSelect(user)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid blue",
              textTransform: "capitalize",
              cursor: "pointer",
              color: "#fafafa",
              fontSize: 12,
              fontWeight: "500",
              backgroundColor: "grey",
            }}>
            {user.username}
            {unreadMessages[user._id] > 0 && (
              <span style={{ marginLeft: 5 }}>
                ({unreadMessages[user._id]})
              </span>
            )}
          </Button>
        ))}
      </div>
      <div
        style={{
          margin: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          height: "67vh",
        }}>
        {selectedUser && (
          <Thirdchatscreen
            selectedUser={selectedUser}
            chatMessages={chatMessages}
            onSendMessage={handleSendMessage}
          />
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
