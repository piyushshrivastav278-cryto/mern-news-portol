import React, { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Feedback Form</h2>
      {submitted && <p style={{ color: "green" }}>Thank you for your feedback!</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

// simple inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "15px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    marginBottom: "15px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FeedbackForm;
