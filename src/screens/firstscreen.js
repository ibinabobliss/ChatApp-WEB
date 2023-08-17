import React from "react";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Button } from "@mui/material";
import image from "../assets/bts.jpg";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import HouseIcon from "@mui/icons-material/House";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import "./chats.css";
import Profile from "../assets/pam.png";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

function TopLayer() {
  return (
    <div
      style={
        {
          // padding: 20,
        }
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: 20 }}>
          <img
            src={image}
            alt="a logo "
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
            }}
          />
        </div>{" "}
        <div
          style={{
            padding: 20,
            marginTop: 5,
          }}
        >
          <AutoAwesomeMosaicIcon style={{ color: "grey" }} />
        </div>
      </div>
      <div style={{ marginTop: 10, marginLeft: 20 }}>
        <p style={{ color: "grey", fontWeight: "400", fontSize: 15 }}>
          Favorite
        </p>
      </div>
    </div>
  );
}

function SecondLayer({ name, icon }) {
  return (
    <div
      style={{
        margin: 10,
        marginTop: 20,
      }}
    >
      <div>
        <Button
          onClick={() => {
            //   setbgcolor("black");
          }}
          style={{
            color: "#212121",
            borderWidth: 0,
            backgroundColor: "#fafafa",
            fontSize: 11,
            fontWeight: "550",
          }}
          variant="outlined"
          startIcon={icon}
        >
          {name}
        </Button>
      </div>
    </div>
  );
}

function ThirdLayer() {
  return (
    <div style={{ marginTop: 27, marginLeft: 20 }}>
      <p style={{ color: "grey", fontWeight: "400", fontSize: 15 }}>
        Main Menu
      </p>
    </div>
  );
}

function ForthLayer({ name, icon }) {
  return (
    <div
      style={{
        margin: 10,
        marginTop: 20,
      }}
    >
      <div>
        <Button
          onClick={() => {
            //   setbgcolor("black");
          }}
          style={{
            color: "#212121",
            borderWidth: 0,
            backgroundColor: "#fafafa",
            fontSize: 12,
            fontWeight: "600",
          }}
          variant="outlined"
          startIcon={icon}
        >
          {name}
        </Button>
      </div>
    </div>
  );
}
function FifthLayer() {
  return (
    <div style={{}}>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          //backgroundColor: "#eeeeee",
          // paddingInline: 33,
          // margin: 9,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", marginLeft: 3 }}>
            <div>
              <img
                src={Profile}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  marginTop: 12,
                }}
              />
            </div>

            <div style={{ marginLeft: 10 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                }}
              >
                Amanda john
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "grey",
                }}
              >
                {" "}
                Administrator
              </p>
            </div>
          </div>
          <div style={{ margin: 20, marginLeft: 50 }}>
            <NightlightOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Firstscreen() {
  return (
    <div style={{ fontFamily: " Arial, Helvetica, sans-serif" }}>
      <TopLayer />
      <SecondLayer
        icon={<LineStyleIcon style={{ color: "grey" }} />}
        name={"Technical Docs  "}
      />{" "}
      <SecondLayer
        icon={<LineStyleIcon style={{ color: "grey" }} />}
        name={"Guidlines   "}
      />{" "}
      <SecondLayer
        icon={<LineStyleIcon style={{ color: "grey" }} />}
        name={"Important rules "}
      />
      <SecondLayer
        icon={<EmergencyRecordingIcon style={{ color: "grey" }} />}
        name={"onboarding "}
      />
      <ThirdLayer />
      <ForthLayer
        icon={<AssuredWorkloadIcon style={{ color: "grey" }} />}
        name={"Dashboard "}
      />{" "}
      <ForthLayer
        icon={<BlurCircularIcon style={{ color: "grey" }} />}
        name={"Campaign "}
      />{" "}
      <ForthLayer
        icon={<MapsUgcOutlinedIcon style={{ color: "grey" }} />}
        name={"Message "}
      />{" "}
      <ForthLayer
        icon={<WebAssetIcon style={{ color: "grey" }} />}
        name={"Archieve"}
      />
      <FifthLayer />
    </div>
  );
}
