import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUsers, FaLightbulb, FaHandshake, FaUserGraduate,
    FaCogs, FaHandsHelping,
} from "react-icons/fa";

import "../styles/careers.css";
import career5 from "../assets/images/career5.jpg"; // ✅ Make sure this path is correct
import career1 from "../assets/images/career1.jpg";
import career2 from "../assets/images/career2.webp";
import career3 from "../assets/images/career3.avif";
import career4 from "../assets/images/career4.webp";

// HERO SECTION
const CareerHero = () => (
    <div className="career-hero">
        <div className="career-left">
            <p className="career-welcome">- Hello and welcome -</p>
            <h1 className="career-heading">
                Start Your Career <br />
                in <span className="highlight">CeiTCS</span>
            </h1>
            <p className="career-subtext">We are the people who dream &amp; do.</p>
            <div className="career-buttons">
                <Link to="/about" className="btn purple">About us</Link>
                <Link to="/Vacancies" className="btn outline">Opportunities</Link>
            </div>
            <p className="career-hot">
                <span className="bold">Hot vacancies :</span> UX Designer, JS Developer, iOS Developer, Product Manager
            </p>
        </div>
        <div className="career-right">
            <div className="img-grid">
                <img src={career1} alt="Smiling Woman" />
                <img src={career2} alt="Office Space" />
                <img src={career3} alt="Team Talk" className="full-width" />
            </div>
        </div>
    </div>
);

// BENEFITS SECTION
const BenefitsSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const benefitsData = [
        {
            title: "Employees Care",
            content: "We care deeply about employee wellness, offering support programs and a healthy work-life balance."
        },
        {
            title: "Unity in Diversity",
            content: "We embrace diversity and inclusivity in our workplace culture."
        },
        {
            title: "Talent Growth",
            content: "From learning programs to mentorship, we help your career thrive."
        },
        {
            title: "Autonomy",
            content: "We trust our people and give them the space to innovate and lead."
        },
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="benefits-section">
            <div className="benefits-left">
                <p className="section-tag">- Benefits -</p>
                <h2 className="section-title">Become a Part of Our Team</h2>
                <h4 className="section-subtitle">CeiTCS offers a stimulating work environment.</h4>
                <p className="section-description">
                    Are you looking for an exciting career opportunity? We are looking for talented individuals to join our team!
                    We offer competitive salaries, great benefits, and an opportunity to grow professionally.
                    We are committed to helping our employees reach their greatest potential.
                </p>

                <div className="accordion">
                    {benefitsData.map((item, index) => (
                        <div key={index} className="accordion-item">
                            <div className="accordion-header" onClick={() => toggleIndex(index)}>
                                <h3>{item.title}</h3>
                                <span>{openIndex === index ? "-" : "+"}</span>
                            </div>
                            {openIndex === index && (
                                <p className="accordion-content">{item.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="benefits-right">
                <img src={career4} alt="Team Discussion" />
            </div>
        </div>
    );
};

// ✅ APPLY SECTION
const ApplySection = () => {
    return (
        <section className="apply-section">
            <div className="apply-left">
                <p className="apply-tag">- Apply now -</p>
                <h2 className="apply-title">Start Your Dream Career<br />with CeiTCS</h2>
                <p className="apply-subtext">Send your CV and start the hiring process.</p>

                <div className="apply-buttons">
                    <Link to="/vacancies" className="btn primary">Apply</Link>
                </div>
            </div>

            <div className="apply-right">
                <img src={career5} alt="Professional holding laptop" />
            </div>
        </section>
    );
};

// ✅ MAIN PAGE
const Careers = () => {
    const stats = [
        { number: "20+", label: "Employees worldwide" },
        { number: "10", label: "Years of work" },
        { number: "2", label: "Offices around the world" },
        { number: "10+", label: "Fascinating projects" },
    ];

    return (
        <>
            <CareerHero />

            <section className="perks-section">
                <p className="perks-subtitle">- Perks -</p>
                <h2 className="perks-title">Main Reasons Why You Should Work Here</h2>
                <p className="perks-description">Being a part of CeiTCS means enjoying every working day!</p>

                <div className="perks-grid">
                    <div className="perk-card">
                        <FaUsers className="perk-icon" />
                        <h3>Teamwork</h3>
                        <div className="underline"></div>
                        <p>Our employees work in teams and share even the boldest ideas.</p>
                    </div>
                    <div className="perk-card">
                        <FaLightbulb className="perk-icon" />
                        <h3>Room for New Ideas</h3>
                        <div className="underline"></div>
                        <p>We’re always ready to listen and discuss new initiatives.</p>
                    </div>
                    <div className="perk-card">
                        <FaHandshake className="perk-icon" />
                        <h3>Competitive Salary</h3>
                        <div className="underline"></div>
                        <p>Get paid well for your skills! We offer competitive salary + benefits.</p>
                    </div>
                    <div className="perk-card">
                        <FaUserGraduate className="perk-icon" />
                        <h3>Personal Development</h3>
                        <div className="underline"></div>
                        <p>We encourage you to study and cover your expenses on courses.</p>
                    </div>
                </div>
            </section>

            <section className="working-section">
                <div className="working-left">
                    <img src={career4} alt="Team working together" />
                </div>
                <div className="working-right">
                    <p className="section-subtitles">- Our values -</p>
                    <h2 className="section-title">Working in CeiTCS Be Like…</h2>
                    <p className="section-descriptions">Learn more about working in our company.</p>
                    <p className="section-paragraph">
                        We’re an international team of enthusiastic professionals committed to delivering the best technological solutions, websites, and applications for our clients. At CeiTCS, everyone is invited to combine their talent and skills with cutting-edge tech to develop outstanding products.
                    </p>

                    <div className="value-item">
                        <FaLightbulb className="value-icon" />
                        <div>
                            <h4>Creativity at the core</h4>
                            <p>Employees' creativity is a valuable asset to CeiTCS. Here we encourage you to share new ideas and improve processes.</p>
                        </div>
                    </div>

                    <div className="value-item">
                        <FaCogs className="value-icon" />
                        <div>
                            <h4>Modern approaches</h4>
                            <p>We use cutting-edge web development technologies and web design tools to deliver the best results.</p>
                        </div>
                    </div>

                    <div className="value-item">
                        <FaHandsHelping className="value-icon" />
                        <div>
                            <h4>Impactful projects</h4>
                            <p>We collaborate with world-famous companies and develop projects for them that have significant social impact.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <h2 className="stat-number">{stat.number}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <BenefitsSection />
            <ApplySection />
        </>
    );
};

export default Careers;
