import React, { useState } from "react";
import "../styles/contactus.css";
import contactus2 from "../assets/images/contactus2.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("✅ Message sent successfully!");
      setFormData({
        user_name: "",
        user_phone: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Error:", error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            <a href="/home">Home</a> » <span>Contact Us</span>
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <h1>Feel Free To Get In Touch</h1>
            <p>
              IT drives business efficiency, cybersecurity, data management,
              and innovation through emerging technologies.
            </p>

            <h3 className="city">Chennai</h3>
            <p>Email: ceitcschennai@gmail.com</p>
            <p>Mobile: +91 9790835693</p>
            <p>Mobile: +91 9791424421</p>
            <p>Mobile: +971 545313855</p>
            <p>
              Address: F3 Plot, 36, Ranganatha Nagar, Second Street,
              Selaiyur, Chennai – 600073
            </p>
          </div>

          <div className="contact-form">
            <h1>Drop Us A Message</h1>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Mobile Number"
                  required
                  value={formData.user_phone}
                  onChange={handleChange}
                />
              </div>

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                value={formData.user_email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <div className="captcha">
                <input type="checkbox" required /> I am human
                <img src={contactus2} alt="captcha" />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Your Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
