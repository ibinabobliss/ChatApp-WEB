import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Button } from "@mui/material";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

function CustomizedInputBase() {
  return (
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
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

function TopLayer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // padding: 6,
        marginTop: 13,
      }}
    >
      <div>
        <div />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <CustomizedInputBase />
        <NotificationsNoneOutlinedIcon
          style={{
            color: "#212121",
            fontWeight: "500",
            marginTop: 10,
          }}
        />
      </div>
    </div>
  );
}

function SecondLayer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 24,
      }}
    >
      <div>
        <p
          style={{
            fontSize: 25,
            textTransform: "capitalize",
            fontWeight: "500",
            color: "#212121",
          }}
        >
          Chat with ibinabo bliss
        </p>
      </div>
      <div
        style={{
          margin: "22px  ",
          marginLeft: 10,
        }}
      >
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
          startIcon={<TagOutlinedIcon />}
        >
          Filters
        </Button>
      </div>
    </div>
  );
}

export default function TopNavBar() {
  return (
    <div style={{ padding: 8, fontFamily: " Arial, Helvetica, sans-serif" }}>
      <TopLayer />
      <SecondLayer />
    </div>
  );
}
