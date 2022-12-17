import React, { useState } from "react";
import { Container } from "react-bootstrap";


const FORM_ENDPOINT = "https://formspree.io/f/mqkjegzz";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon.</div>
      </>
    );
  }

  return (
  <Container  fluid className="about-section">
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          style={{ borderStyle: "groove", justifyContent: "center", padding: "10px", marginBottom: "20px", width: "30%"}}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          style={{ borderStyle: "groove", justifyContent: "center", padding: "10px", marginBottom: "20px", width: "30%" }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          required
          style={{ borderStyle: "groove", justifyContent: "center", padding: "10px", marginBottom: "20px", width: "30%"}}
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn-primary1"
          style={{ color: "#414141", marginBottom: "20%" }} 
        >
          Send a message
        </button>
      </div>
    </form>
  </Container>

  );
};

export default Contact;