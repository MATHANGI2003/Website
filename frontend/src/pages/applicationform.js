import React, { useState, useRef } from "react";
import "../styles/applicationform.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

// Custom Dropdown Component
const CustomDropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["fresher", "experienced", "internship"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-wrapper">
      <label className="dropdown-label">
        Experience <span className="required-star">*</span>
      </label>
      <div className="dropdown-container">
        <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
          {selected || "Select One..."}
          <span className="dropdown-arrow">{isOpen ? "▴" : "▾"}</span>
        </div>
        {isOpen && (
          <ul className="dropdown-list" onClick={(e) => e.stopPropagation()}>
            {options.map((option, index) => (
              <li
                key={index}
                className={`dropdown-option ${
                  selected === option ? "selected" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Main Application Form Component
const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState("");
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    certificate: null,
    resume: null,
  });

  const MAX_FILE_SIZE = 500 * 1024; // 500 KB

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "certificate" || name === "resume") {
      const file = files[0];
      if (file && file.size > MAX_FILE_SIZE) {
        alert("Please upload files smaller than 500 KB.");
        return;
      }
      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!experience) {
      alert("Please select your experience.");
      return;
    }

    if (!formData.certificate || !formData.resume) {
      alert("Please upload both certificate and resume.");
      return;
    }

    setLoading(true);

    try {
      // Upload to backend
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("position", formData.position);
      data.append("experience", experience);
      data.append("certificate", formData.certificate);
      data.append("resume", formData.resume);

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/applications`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Send text-only data to EmailJS
      await emailjs.send(
        "service_vmbus9o",
        "template_0otrkt3",
        {
          name: formData.name,
          email: formData.email,
          position: formData.position,
          experience: experience,
        },
        "eVyJqHU8RUwNQ03kj"
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        position: "",
        certificate: null,
        resume: null,
      });
      setExperience("");
      formRef.current.reset(); // Resets file input

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      {submitted && (
        <div className="popup-message">
          ✅ Thank you! You will receive a mail shortly.
        </div>
      )}

      <form className="application-form" ref={formRef} onSubmit={handleSubmit}>
        <h2 className="form-title">Application Form</h2>

        <label>
          Name <span className="required-star">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />

        <label>
          Email <span className="required-star">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />

        <label>
          Position Applied For <span className="required-star">*</span>
        </label>
        <input
          type="text"
          name="position"
          required
          value={formData.position}
          onChange={handleChange}
          placeholder="Eg: UX Designer"
        />

        <CustomDropdown selected={experience} setSelected={setExperience} />

        <label>
          Certificate <span className="required-star">*</span>
        </label>
        <input
          type="file"
          name="certificate"
          accept=".pdf,.docx"
          required
          onChange={handleChange}
        />

        <label>
          Resume <span className="required-star">*</span>
        </label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.docx"
          required
          onChange={handleChange}
        />

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
