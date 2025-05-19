import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const SERVICE_ID = "service_xwfu5gd";
    const TEMPLATE_ID = "template_6plb59b";
    const USER_ID = "37XDiqJe34x7Lv9-O"; // Replace with your actual EmailJS Public Key

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log("EmailJS success:", result.text);
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      })
      .catch((error) => {
        console.error("EmailJS error:", error.text);
        setSubmitStatus("error");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">Contact Me</h2>
        <p className="contact-intro">
          Interested in collaborating or have a project in mind?
          <br />
          I'm always open to discussing new opportunities in web development.
        </p>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Inquiry about..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitStatus === "success" && (
            <p className="submit-message success">
              Your message has been sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="submit-message error">
              Something went wrong. Please try again or contact me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
