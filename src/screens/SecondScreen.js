import React, { useEffect, useState } from "react";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Button } from "@mui/material";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import Messages from "../component/messages";
import axios from "axios";

function TopLayer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from your backend API
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        setUsers(response.data); // Assuming the response data is an array of user objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontSize: 18,
          color: "#e0e0e0",
          fontWeight: "bold",
        }}
      >
        Messages /
      </p>
      <p
        style={{
          fontSize: 18,
          color: "#212121",
          fontWeight: "bold",
          marginLeft: 7,
        }}
      >
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
        // margin: 5,
        borderRadius: 12,
        //  marginRight: 25,
        //marginLeft: 25,
        marginTop: 18,
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        width: 200,
        marginLeft: 20,
      }}
    >
      <DriveFileRenameOutlineOutlinedIcon
        style={{
          color: "#fafafa",
          marginTop: 10,
        }}
      />
      <p
        style={{
          color: "#fafafa",
          // marginLeft: 8,
          fontWeight: "bold",
        }}
      >
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
      }}
    >
      <Button
        onClick={() => {
          //   setbgcolor("black");
        }}
        style={{
          color: "#212121",
          borderWidth: 0,
          backgroundColor: "#fafafa",
          fontSize: 12,
          fontWeight: "550",
        }}
        variant="outlined"
        startIcon={icon}
      >
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
      }}
    >
      <p
        style={{
          color: "#bdbdbd",
          fontWeight: "550",
          textTransform: "capitalize",
          fontSize: 14,
        }}
      >
        Dirrect messages
      </p>
    </div>
  );
}
export default function SecondScreen() {
  return (
    <div style={{ fontFamily: " Arial, Helvetica, sans-serif" }}>
      <TopLayer />
      <SecondLayer />
      <ThirdLayer
        name={"Channels"}
        icon={<TagOutlinedIcon style={{ color: "grey", fontSize: 12 }} />}
      />
      <ThirdLayer
        name={"Mentions"}
        icon={<SaveAsOutlinedIcon style={{ color: "grey", fontSize: 12 }} />}
      />
      <ThirdLayer
        name={"drafts"}
        icon={
          <AlternateEmailOutlinedIcon style={{ color: "grey", fontSize: 12 }} />
        }
      />
      <ThirdLayer
        name={"Files and media"}
        icon={
          <DriveFileMoveOutlinedIcon style={{ color: "grey", fontSize: 12 }} />
        }
      />
      <ForthLayer />
      <Messages />
    </div>
  );
}
