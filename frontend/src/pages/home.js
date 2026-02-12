import React, { useEffect, useState } from "react";
import "../styles/home.css";
import video from "../assets/images/background.mp4";
import home2 from "../assets/images/home 2.png";
import home3 from "../assets/images/home 3.png";
import home4 from "../assets/images/home 4.png";
import home5 from "../assets/images/home 5.png";
import home6 from "../assets/images/home 6.jpg";
import home7 from "../assets/images/home 7.png";
import home9 from "../assets/images/home 9.webp";
import home10 from "../assets/images/home 10.webp";
import home11 from "../assets/images/home 11.webp";
import home12 from "../assets/images/home 12.webp";
import blog2 from "../assets/images/blog 2.webp";
import blog3 from "../assets/images/blog 3.webp";
import blog4 from "../assets/images/blog4.webp";
import cybersecurity from "../assets/images/cybersecuriy.jpeg";
import healthcare from "../assets/images/healthcare.png";
import sap from "../assets/images/sap.jpeg";
import user1 from "../assets/images/expert.jpg";
<meta name="google-site-verification" content="s-UbftGl8rPfBQJg_ZzhNUpdV94YA25oLymX0la2Q0I" />
const tabData = [
  {
    title: "Digital Transformation",
    image: home3,
    alt: "Digital Transformation",
    text: [
      "Adopting digital technology can bring various benefits to a business. CIPS has also observed that digital capability can be used to support supply chain transparency and remote working.",
      "The goal for its implementation is to increase value through innovation, invention, improved customer experience, and efficiency.",
    ],
  },
  {
    title: "Business Intelligence",
    image: home4,
    alt: "Business Intelligence",
    text: [
      "BI is a technology-driven process for analyzing data and delivering actionable information that helps executives, managers, and workers make informed business decisions.",
      "The goal of BI is to help inform and improve business decision-making by making data easier to interpret and act on. BI involves collecting and visualizing data.",
    ],
  },
  {
    title: "Analytics and Data Science",
    image: home5,
    alt: "Data Science",
    text: [
      "Data science is an umbrella term for all aspects of data processing—from collection to modeling to insights. On the other hand, data analytics is mainly concerned with statistics, mathematics, and statistical analysis.",
    ],
  },
  {
    title: "Information Security",
    image: home6,
    alt: "Cybersecurity",
    text: [
      "In today’s hyper-connected world, the importance of strong cybersecurity and information security cannot be overstated. We provide comprehensive cybersecurity solutions that address risks head-on.",
      "Our approach includes advanced threat detection, secure data management, and robust risk mitigation strategies.",
    ],
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [score, setScore] = useState(5.0);
  const [activeCard, setActiveCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const buttons = document.querySelectorAll(".tech-btn");
    buttons.forEach((button) =>
      button.addEventListener("click", () =>
        alert("Thank you for showing interest!")
      )
    );

    const cards = document.querySelectorAll(".tech-card");
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });

    return () => {
      buttons.forEach((button) =>
        button.removeEventListener("click", () => { })
      );
      cards.forEach((card) => {
        card.removeEventListener("mouseover", () => { });
        card.removeEventListener("mouseleave", () => { });
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => (prev === 5.0 ? 4.9 : 5.0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const testimonialsData = [
    {
      message:
        "The wonderful services you offer locally are great for our community. People are tired of having to travel out of town for things.",
      name: "Eby",
      role: "Chennai Academy Student",
    },
    {
      message:
        "Excellent customer support and a great experience! Highly recommend.",
      name: "John Doe",
      role: "University Student",
    },
    {
      message:
        "Amazing services, professional approach, and very user-friendly.",
      name: "Sarah Lee",
      role: "College Student",
    },
  ];

  const services = [
    {
      title: "Operational Technology",
      img: home9,
      desc: "Benefit from our decades of experience and immigration expertise. We're your trusted guides.",
    },
    {
      title: "IT Compliance Risk and Governance",
      img: home10,
      desc: "Ensuring your IT infrastructure aligns with regulatory standards for security and efficiency.",
    },
    {
      title: "Robotic Process Automation",
      img: home11,
      desc: "Automating repetitive tasks to enhance productivity and reduce operational costs.",
    },
    {
      title: "E-gov/IOT/IIOT",
      img: home12,
      desc: "Leveraging IoT solutions to drive smart governance and industrial efficiency.",
    },
  ];

  return (
    <>
      {/* Hero Section with Video */}
      <section className="corporate-hero-section">
        <video className="corporate-hero-video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="corporate-hero-text-content">
          <h1 className="corporate-hero-heading">
            Transforming Businesses Through <br /> Intelligent Solutions
          </h1>
          <p className="corporate-hero-description">
            We empower organizations with innovative technologies and data-driven insights <br />
            to drive efficiency, security, and sustainable growth.
          </p>
          <div className="corporate-hero-buttons">
            <a href="/services" className="corporate-hero-button">
              Our Services
            </a>
            <a href="/contact" className="corporate-hero-button" style={{ marginLeft: "1rem" }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <div className="feature-cards">
        <div className="feature-card">
          <span className="feature-text">AI and Cybersecurity</span>
          <span className="feature-icon">
            <img src={cybersecurity} alt="AI and Cybersecurity" />
          </span>
        </div>
        <div className="feature-card">
          <span className="feature-text">AI and Healthcare</span>
          <span className="feature-icon">
            <img src={healthcare} alt="AI and Healthcare" />
          </span>
        </div>
        <div className="feature-card">
          <span className="feature-text">SAP MM</span>
          <span className="feature-icon">
            <img src={sap} alt="SAP MM" />
          </span>
        </div>
      </div>

      {/* About Area Section */}
      <section className="about-area">
        <div className="about-area-wrapper">
          <div className="about-area-image">
            <img
              src={home2}
              alt="Confident woman pointing up"
              className="about-area-image-img"
            />
          </div>
          <div className="about-area-content">
            <h2 className="about-area-heading">
              Powerful agency for <br /> corporate business.
            </h2>
            <p className="about-area-description">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using CeiTCS is that it has a
              more-or-less normal distribution...
            </p>
            <a href="/about">
              <button className="about-area-btn">About Us</button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-container">
        <div className="features-item">
          <h3>Trusted Company</h3>
          <p>Digital marketing that helps you to promote the world.</p>
        </div>
        <div className="features-item">
          <h3>Professional Work</h3>
          <p>We never fail for support for your business anywhere.</p>
        </div>
        <div className="features-item">
          <h3>Award Winning</h3>
          <p>We never fail for support for your business anywhere.</p>
        </div>
        <div className="features-item">
          <h3>Help Any Time</h3>
          <p>We never fail for support for your business anywhere.</p>
        </div>
      </section>

      {/* Tech Support Section */}
      <section className="tech-support-section">
        <h1>Your One-Stop Shop For Tech Support</h1>

        <div className="tech-tabs">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`tech-tab ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="tech-content">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`tech-tab-content ${index === activeTab ? "active" : ""}`}
            >
              <div className="tech-image-section">
                <img src={tab.image} alt={tab.alt} />
              </div>
              <div className="tech-text-section">
                <a href="/services">
                  <button className="tech-tag">Our Services</button>
                </a>
                {tab.text.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <a href="/services">
                  <button className="tech-btn">Learn More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo">
        <div className="promo__content">
          <p className="promo__tagline">Customer happiness assured</p>
          <h1 className="promo__heading">
            Enhance your marketing strategy with our expertise
          </h1>
          <p className="promo__description">
            Our package includes 6 months of professional and dedicated customer
            support to resolve your queries and concerns.
          </p>
          <div className="promo__reviews">
            <div className="promo__avatars">
              <img src={user1} alt="Client 1" className="promo__avatar" />
              <img src={user1} alt="Client 2" className="promo__avatar" />
              <img src={user1} alt="Client 3" className="promo__avatar" />
            </div>
            <div className="promo__review-details">
              <p className="promo__review-label"><strong>Customer Support Team</strong></p>
              <p className="promo__stars">★★★★★ <span className="promo__score">5.0</span></p>
            </div>
          </div>
        </div>

        <div className="promo__image-wrapper">
          <img src={home7} alt="Marketing Analytics" className="promo__image" />
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <h1 className="banner-title">
            Embedded analytics purpose-built <br /> For software teams!
          </h1>
          <p className="banner-text">
            There are many variations of passages of CeiTCS available, but the majority
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3 className="services-titles">Services</h3>
        <h2 className="services-headings">Your One-Stop Shop For Tech Support</h2>

        <div className="services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${activeCard === index ? "active" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-container">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="card-back">
                  <p>{service.desc}</p>
                  <a href="/services">
                    <button className="read-more">Read More</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="marketing-message">
          <p>We provide quality marketing services to customers.</p>
          <p className="review-stars">★★★★★ <span className="review-score">{score.toFixed(1)}</span></p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-container">
        <div className="testimonial-wrapper">
          <div className="testimonial-content">
            <p className="testimonial-subtitle">Students Feedback</p>
            <h2 className="testimonial-title">We are trusted by our clients</h2>
            <div className="testimonial-navigation">
              <button className="nav-btn nav-left" onClick={prevTestimonial}>
                &#10094;
              </button>
              <button className="nav-btn nav-right" onClick={nextTestimonial}>
                &#10095;
              </button>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-slider">
              {testimonialsData.map((item, index) => (
                <div
                  key={index}
                  className={`testimonial-item ${index === currentIndex ? "active" : ""
                    }`}
                >
                  <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                  <p className="testimonial-message">{item.message}</p>
                  <p className="testimonial-author">
                    <span className="author-name">{item.name}</span>
                    <br />
                    <span className="author-role">{item.role}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* blog */}

      {/* Blog Section */}
      <section className="blog-container">
        <div className="blog-card">
          <img src={blog2} alt="Penetration Testing" />
          <h3>The Importance of Regular Penetration Testing</h3>
          <button className="read-more-btn">Read More »</button>
        </div>

        <div className="blog-card">
          <img src={blog3} alt="API Security" />
          <h3>API Security Best Practices for Developers</h3>
          <button className="read-more-btn">Read More »</button>
        </div>

        <div className="blog-card">
          <img src={blog4} alt="Application Security" />
          <h3>Understanding the Basics of Application Security</h3>
          <button className="read-more-btn">Read More »</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;