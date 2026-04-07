import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const correctEmail = "user1@gmail.com";
  const correctPassword = "pass123";

  const validateEmail = (value) => {
    setEmail(value);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)) {
      setEmailError("Enter valid email");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      age === "" ||
      gender === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setMessage("All fields are required");
    }
    else if (emailError !== "") {
      setMessage("Enter valid email");
    }
    else if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }
    else if (email === correctEmail && password === correctPassword) {
      navigate("/dashboard", { state: { name: firstName } });
    }
    else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          style={styles.input}
        />
        <span style={styles.error}>{emailError}</span>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <p style={styles.error}>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
  },
  container: {
    width: "320px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Login;
