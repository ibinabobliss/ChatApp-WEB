import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { Navigate } from "react-router-dom";

const TopView = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontSize: 24,
          color: "#212121",
          fontWeight: "500",
        }}>
        create your chat account
      </p>
      <p
        style={{
          fontSize: 22,
          color: "#9e9e9e",
          fontWeight: "300",
        }}>
        lets get started with your 30 days free trial{" "}
      </p>
    </div>
  );
};

function BottomView() {
  const [logINavigation, setLoginNavigation] = useState(false);
  if (logINavigation) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <div>
      <div style={{ display: "flex", marginTop: 8 }}>
        <p style={{ fontWeight: "500" }}>Already have an account ?</p>
        <button
          onClick={() => setLoginNavigation(true)}
          style={{
            height: 50,
            marginLeft: 10,
            backgroundColor: "#fff",
            borderWidth: 0,
            color: "tomato",
            fontWeight: "600",
          }}>
          Sign in
        </button>
      </div>
    </div>
  );
}

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [navigating, setNavigation] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/user/add", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        setNavigation(true);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setError(
        "An error occurred during registration. Please try again later."
      );
      console.error("Error:", error);
    } finally {
      setLoading(false);
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
        }}>
        <CardContent>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TopView />
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginBottom: "16px" }}
            />
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
              />
              <span style={{ marginLeft: 0, fontWeight: "500" }}>
                I agree to all terms, privacy policy, and fees
              </span>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "9px",
                borderRadius: 20,
                backgroundColor: "grey",
              }}
              disabled={loading} // Disable the button during form submission
            >
              Sign Up
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

export default Signup;
