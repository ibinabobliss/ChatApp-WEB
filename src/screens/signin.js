import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import axios from "axios";

const TopView = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontSize: 24,
          color: "#212121",
          fontWeight: "500",
        }}
      >
        sign in your chat account
      </p>
      <p
        style={{
          fontSize: 22,
          color: "#9e9e9e",
          fontWeight: "300",
        }}
      >
        lets get started with your 30 days free trial{" "}
      </p>
    </div>
  );
};

function BottomView() {
  const [logINavigation, setLoginNavigation] = useState(false);
  if (logINavigation) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <p style={{ fontWeight: "500" }}>Don't have an account ?</p>
        <button
          onClick={() => setLoginNavigation(true)}
          style={{
            height: 50,
            marginLeft: 10,
            backgroundColor: "#fff",
            borderWidth: 0,
            color: "tomato",
            fontWeight: "600",
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [navigating, setNavigation] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/signin", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token) {
        // Authentication successful, you can store the token in local storage or context
        // for future authenticated requests
        localStorage.setItem("token", response.data.token);
        setNavigation(true); // Navigate to the chat screen or another protected route
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  if (navigating) {
    return <Navigate to={"/chatscreen"} />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          width: "400px",
          marginTop: 50,
          padding: 10,
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TopView />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: "16px" }}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ marginBottom: "16px" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "16px",
                borderRadius: 20,
                backgroundColor: "#212121",
                fontWeight: "300",
              }}
            >
              Sign In
            </Button>
            <BottomView />
          </form>

          {error && (
            <div style={{ marginTop: "16px", color: "red" }}>{error}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
