import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import BatmanDuck from "./batmanduck";

export default function RubberDuck() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // You can add further logic like sending the form data to a server
  };

  return (
    <div>
      <h2>Rubber Duck Tales</h2>
      <div className="duck-tales-box">
        <p>
          Learning Front-End development is more fun when you are part of a
          community, reach out and share your stories!
        </p>
      </div>
      <div>
        <BatmanDuck />
      </div>
      <div className="contact-form">
        <h3>Contact Us</h3>
        <TextField
          type="Message"
          value={email}
          label="Share your story"
          margin="normal"
        />
      </div>
      <div>
        <Button
          className="subscribeButton"
          style={{ backgroundColor: "#0F6466", color: "white" }}
        >
          Share !
        </Button>
      </div>
    </div>
  );
}
