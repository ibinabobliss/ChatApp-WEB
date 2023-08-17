import React from "react";
import image from "../assets/pam.png";
import secondimage from "../assets/bts.jpg";
import thirdimage from "../assets/logo.png";
import forthimage from "../assets/logo.jpg";

const document = [
  {
    image: forthimage,
    name: "Summer Campaign ",
    time: "updated 2 weeks ago ",
  },
  {
    image: image,
    name: "Inspiration notes ",
    time: "updated 2 weeks ago ",
  },
  {
    image: secondimage,
    name: "campaign manboard ",
    time: "updated 2 weeks ago ",
  },
  {
    image: secondimage,
    name: "daily inspiration  ",
    time: "updated 2 weeks ago ",
  },
];
const Teams = [
  {
    image: forthimage,
    name: "Fortune Bobamnuel ",
    time: "Supervisor ",
  },
  {
    image: image,
    name: "Pamela Bobmanuel ",
    time: "Manager ",
  },
  {
    image: secondimage,
    name: "Shalom Bobmanuel ",
    time: "Instructor ",
  },
  {
    image: thirdimage,
    name: "Ibinabo Bobmanuel  ",
    time: "Managing Director ",
  },
];

function Toplayer() {
  return (
    <div>
      <div>
        <p
          style={{
            textTransform: "capitalize",
            // textAlign: "center",
            marginTop: 34,
            fontWeight: "500",
            marginLeft: 10,
          }}
        >
          recent documents{" "}
        </p>
      </div>
    </div>
  );
}

function SecondLayer() {
  return (
    <div>
      {document.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <img
                src={item.image}
                style={{
                  width: 44,
                  height: 45,
                  marginLeft: 10,
                  marginTop: 18,
                  borderRadius: 10,
                }}
              />
            </div>
            <div style={{}}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  //  textAlign: "center",
                  marginLeft: 10,
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: 12,
                  marginLeft: 10,
                }}
              >
                {item.time}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ThirdLayer() {
  return (
    <div>
      <p
        style={{
          marginLeft: 10,
          fontWeight: "500",
          color: "#212121",
          marginTop: 30,
        }}
      >
        Team Mates
      </p>
    </div>
  );
}

function ForthLayer() {
  return (
    <div>
      {Teams.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div>
              <img
                src={item.image}
                style={{
                  width: 44,
                  height: 45,
                  marginLeft: 10,
                  marginTop: 18,
                  borderRadius: 30,
                }}
              />
            </div>
            <div style={{}}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  //  textAlign: "center",
                  marginLeft: 10,
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: 12,
                  marginLeft: 10,
                }}
              >
                {item.time}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default function Lastscreen() {
  return (
    <div
      style={{
        fontFamily: " Arial, Helvetica, sans-serif",
      }}
    >
      <Toplayer />
      <SecondLayer />
      <ThirdLayer />
      <ForthLayer />
    </div>
  );
}
