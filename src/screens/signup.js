import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Navigate } from "react-router-dom";

function TopView() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p style={{ fontWeight: "500", fontSize: 25 }}>
        Create your chat account{" "}
      </p>
      <p
        style={{
          fontWeight: "400",
          color: "grey",
          fontSize: 18,
          textTransform: "capitalize",
        }}
      >
        {" "}
        lets get started with your 30 days free trial{" "}
      </p>
    </div>
  );
}
function BottonView() {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 10,
      }}
    >
      <button
        style={{
          color: "#212121",
          borderColor: "#bdbdbd",
          borderWidth: 0.1,
          backgroundColor: "#fff",
          width: 350,
          padding: 10,
          borderRadius: 30,
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        login with google
      </button>
    </div>
  );
}

function Thirdlayer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{ fontWeight: "bold", marginRight: 5 }}>...... </p>
      <p style={{ marginTop: 18 }}>Or sign in with </p>
      <p style={{ fontWeight: "bold", marginLeft: 5 }}>...... </p>
    </div>
  );
}

function Formlayer() {
  return (
    <div>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        style={{ marginBottom: "16px" }}
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        style={{ marginBottom: "16px" }}
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        variant="outlined"
        style={{ marginBottom: "16px" }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox />
        <span style={{ marginLeft: "3px", fontWeight: "500" }}>
          I agree to all terms , privacy policy and Fees
        </span>
      </div>
    </div>
  );
}

function Signupbutton() {
  const [navigating, setNavigation] = useState(false);
  const [loginNavigating, setLoginNavigation] = useState(false);

  if (navigating) {
    return <Navigate to={"/chatscreen"} />;
  }
  if (loginNavigating) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <div
      style={{
        marginTop: 5,
      }}
    >
      <button
        onClick={() => setNavigation(true)}
        style={{
          backgroundColor: "#212121",
          width: 350,
          padding: 10,
          borderRadius: 30,
          fontWeight: "bold",
          textTransform: "capitalize",
          color: "#fafafa",
        }}
      >
        Sign Up
      </button>
      <div style={{ display: "flex", marginTop: 10 }}>
        <p style={{ fontWeight: "500" }}>Already have an account ?</p>
        <button
          onClick={() => setLoginNavigation(true)}
          style={{
            height: 50,
            marginLeft: 10,
            backgroundColor: "#fff",
            borderWidth: 0,
            marginTop: 2,
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
const Signup = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "400px", marginTop: 50, padding: 10 }}>
        <CardContent>
          <TopView />
          <BottonView />
          <Thirdlayer />
          <Formlayer />
          <Signupbutton />
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
