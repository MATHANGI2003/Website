import React, { useState } from "react";
import "../styles/aboutus.css";
import BG from "../assets/images/about us.jpg";
import bg from "../assets/images/about us 2.jpg";

const AboutUs = () => {
    const [selectedTab, setSelectedTab] = useState("global-partners");
    const [, setImageSrc] = useState("/images/about us 2.jpg"); // initial image path

    const contentData = {
        "global-partners": {
            text: "We collaborate with leading global partners to bring innovative solutions that enhance business growth and productivity.",
            image: "/images/about us 2.jpg",
        },
        "company-benefits": {
            text: "Our company offers competitive benefits including flexible work hours, health insurance, and career development programs.",
            image: "/images/about us 2.jpg",
        },
        "competitive-analysis": {
            text: "We conduct in-depth competitive analysis to ensure our products and services remain industry leaders.",
            image: "/images/about us2.jpg",
        },
        "trusted-experience": {
            text: "With years of experience, we have earned a reputation for delivering reliable and innovative technology solutions.",
            image: "/images/about us 2.jpg",
        },
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setImageSrc(contentData[tab].image);
    };

    return (
        <>
            
            <div>
                {/* Hero Section */}
                <section className="hero">
                    <div className="overlay"> </div>
                    <div className="hero-content">
                        <h1>about us</h1>
                        <p>
                            <a href="/home">Home</a> » <span>about us</span>
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section className="about-section">
                    <div className="about-image">
                        <img src={BG} alt="Smiling business professional" />
                    </div>
                    <div className="about-content">
                        <span className="tag">About company</span>
                        <h2>Empowering Innovation And Intelligence Through Technology</h2>
                        <p>
                            At the forefront of the digital revolution, we specialize in transforming businesses through
                            cutting-edge solutions. Our expertise spans across Digital Transformation, Business Intelligence,
                            and advanced Analytics, helping you make informed, data-driven decisions. We lead innovation in AI,
                            Emerging Technologies, and intelligent automation, including RPA and IoT/IIoT solutions.
                        </p>
                        <p>
                            Our robust IT Compliance, Risk, and Governance frameworks ensure your operations run securely and
                            efficiently. With a focus on Operational Technology, Cybersecurity, and Customer Analytics, we design,
                            model, and mine data for actionable insights.
                        </p>
                        <a href="/services" className="cta-button">Our Services »</a>
                    </div>
                </section>

                {/* Tabs Section */}
                <div className="tabs">
                    {Object.keys(contentData).map((tabKey) => (
                        <button
                            key={tabKey}
                            className={`tab-btn ${selectedTab === tabKey ? "active" : ""}`}
                            onClick={() => handleTabClick(tabKey)}
                        >
                            {tabKey.replace(/-/g, " ")}
                        </button>
                    ))}
                </div>

                <div className="contents">
                    <img src={bg} alt="Content" className="content-image" />
                    <p id="contentText">{contentData[selectedTab].text}</p>
                </div>

                {/* Our Team Section */}
                <section className="our-team-section">
                    <div className="team-button">Our Team</div>
                    <p>
                        Our team of passionate and skilled professionals is committed to pushing the boundaries of technology
                        to develop solutions that are not only advanced but also user-friendly and tailored to meet our clients’ 
                        unique needs.
                    </p>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
