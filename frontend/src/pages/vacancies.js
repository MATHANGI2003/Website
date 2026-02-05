import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "../styles/vacancies.css";
import vacan1 from "../assets/images/vacancies1.jpg";

const allJobs = [
  {
    title: "Software Engineer",
    category: "Web Development",
    location: "Remote",
    rate: "$120,000",
    skills: [
      "Node.js, React, HTML, CSS;",
      "REST and/or HTTP API's;",
      "2+ years of experience."
    ]
  },
  {
    title: "UI/UX Designer",
    category: "Design & Creative",
    location: "Remote",
    rate: "$64,000",
    skills: [
      "Figma, Sketch, InVision;",
      "Strong collaboration skills;",
      "Experience in UX design."
    ]
  },
  {
    title: "Content Writer",
    category: "Digital Marketing",
    location: "Remote",
    rate: "$56,000",
    skills: [
      "Strong analytical skillset;",
      "Bachelor’s degree required;",
      "3+ years of experience."
    ]
  },
  {
    title: "Art Director",
    category: "Design and creative",
    location: "Remote",
    rate: "$56,000",
    skills: [
      "Strong analytical skillset;",
      "Bachelor’s degree required;",
      "3+ years of experience."
    ]
  }
];

const internships = [
  {
    title: "Software Engineer",
    startDate: "February 11, 2023",
    location: "New York office",
    rate: "$5 - $10 / hour",
    description:
      "It is an opportunity for college students to gain experience working on clients' projects."
  },
  {
    title: "Web Developer",
    startDate: "March 01, 2023",
    location: "Berlin office",
    rate: "$5 - $10 / hour",
    description:
      "The intern will be responsible for creating and maintaining websites for clients."
  },
  {
    title: "iOS Developer",
    startDate: "April 11, 2023",
    location: "London office",
    rate: "$7 - $12 / hour",
    description:
      "You will learn how to create new features for iOS applications and how to debug code."
  }
];

const recentSearches = [
  "Software Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Cybersecurity Analyst",
  "DevOps Engineer",
  "Cloud Engineer",
  "UI/UX Designer",
  "Business Analyst",
  "IT Support Specialist",
  "QA Engineer"
];

const SearchDropdown = ({ query, setQuery }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchClick = () => {
    setShowDropdown(true);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
};

  const handleSelect = (value) => {
    setQuery(value);
    setShowDropdown(false);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <FiSearch
          className="search-icon"
          onClick={handleSearchClick}
          onChange={handleInputChange}
          style={{ cursor: "pointer" }}
        />
        <input
          placeholder="Search jobs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {showDropdown && (
        <ul className="dropdown">
          {recentSearches
            .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            .map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

const VacanciesHeader = () => {
  const [query, setQuery] = useState("");

  const filteredJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredInternships = internships.filter((intern) =>
    intern.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="vacancy-section">
        <div className="vacancy-info-left">
          <h1 className="vacancy-titles">Opportunities</h1>
          <p className="vacancy-breadcrumbs">
            <Link to="/" className="vacancy-link">
              Home
            </Link>{" "}
            &gt; <span className="vacancy-current">Opportunities</span>
          </p>
        </div>
        <div className="vacancy-info-right">
          <p className="vacancy-description">
            We’re a company that creates impactful design and technological
            solutions for our clients. If you’re a good fit for one of our open
            roles, we’ll be reaching out to you.
          </p>
        </div>
      </section>

      {/* Search bar with dropdown */}
      <div className="search-wrapper">
        <SearchDropdown query={query} setQuery={setQuery} />
      </div>

      {/* Filtered Jobs */}
      <section className="hot-vacancies-section">
        <div className="hot-vacancies-header">
          <div className="vacancy-left">
            <p className="featured-label">- Featured -</p>
            <h2 className="hot-title">Hot Opportunities in CeiTCS</h2>
            <p className="hot-subtext">
              Willing to join us? Apply for the open position right now!
            </p>
          </div>
          <div className="vacancy-contact">
            <img src={vacan1} alt="HR Contact" className="contact-img" />
            <div>
              <p className="contact-title">Have questions?</p>
              <p>
                Call us <strong>+1 (234) 567 89 00</strong> <br />
                or write to <strong>hr_ceitcs@email.com</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="vacancy-cards">
          {filteredJobs.map((job, index) => (
            <div key={index} className="vacancy-card">
              <p className="vacancy-category">{job.category}</p>
              <h3 className="vacancy-title">{job.title}</h3>
              <div className="vacancy-info">
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Rate:</strong> from {job.rate}
                </p>
              </div>
              <ul className="vacancy-skills">
                {job.skills.map((skill, i) => (
                  <li key={i}>✅ {skill}</li>
                ))}
              </ul>
              <Link to="/applicationform" className="vacancy-link">
                Apply →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Filtered Internships */}
      {filteredInternships.length > 0 && (
        <section className="internship-section">
          <p className="internship-tag">- Internship -</p>
          <h2 className="internship-title">
            Internship for Applicants Without Experience
          </h2>
          <p className="internship-subtitle">
            Apply for your first job in a web development and design company!
          </p>

          <div className="internship-list">
            {filteredInternships.map((intern, index) => (
              <div className="internship-card" key={index}>
                <div className="internship-left">
                  <h3 className="intern-title">{intern.title}</h3>
                  <p className="intern-start">Start: {intern.startDate}</p>
                </div>
                <div className="internship-middle">
                  <p className="intern-info">
                    <FaMapMarkerAlt className="icon" /> {intern.location}
                  </p>
                  <p className="intern-info">
                    <FaDollarSign className="icon" /> {intern.rate}
                  </p>
                </div>
                <div className="internship-description">
                  {intern.description}
                </div>
                <div className="internship-apply">
                  <Link to="/applicationform" className="apply-button">
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default VacanciesHeader;
