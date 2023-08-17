import React from "react";
import image from "../assets/pam.png";
import secondimage from "../assets/bts.jpg";
import thirdimage from "../assets/logo.png";
import forthimage from "../assets/logo.jpg";
import "./message.css";
const messages = [
  {
    name: "Ibinabo Bobmanuel",
    message: "am on my way home from work.",
    time: "12:2am",
    image: secondimage,
  },
  {
    name: "Fortune Bliss",
    message: "Dreams on jah.",
    time: "12:2am",
    image: thirdimage,
  },
  {
    name: "Shalom Lebron",
    message: "Heaven is real.",
    time: "12:2am",
    image: forthimage,
  },
  {
    name: "Philip jerimiah",
    message: "Heaven is real.",
    time: "12:2am",
    image: thirdimage,
  },
  {
    name: "James Snodgrass",
    message: "Heaven is real.",
    time: "12:2am",
    image: forthimage,
  },
  {
    name: "Fortune  Bobmanuel",
    message: "am on my way home from work.",
    time: "12:2am",
    image: secondimage,
  },
];

const MessageList = () => {
  return (
    <div
      style={{
        marginTop: 1,
        padding: 1,
      }}
    >
      {messages.map((message, index) => (
        <button
          key={index}
          onClick={() => alert("not working ")}
          style={{
            borderWidth: 0,
            backgroundColor: "#fafafa",
            display: "flex",
            marginTop: 11,
          }}
        >
          <img
            src={message.image}
            alt="profile picture "
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginLeft: 20,
              //  marginTop: 4,
              marginRight: 10,
            }}
          />
          <p
            style={{
              fontSize: 15,
              fontWeight: "520",
              color: "#212121",
              marginTop: 5,
            }}
          >
            {message.name}
          </p>
        </button>
      ))}
    </div>
  );
};

export default MessageList;
