import React from 'react';
import "../styles/features.css";
import features1 from "../assets/images/features1.png";
import features2 from "../assets/images/features2.png";
import features3 from "../assets/images/features3.jpg";

const Features = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="heros">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Features</h1>
          <p>
            <a href="/home">Home</a> » <span>features</span>
          </p>
        </div>
      </section>

      {/* Container Block */}
      <section className="container">
        <div className="content">
          <h1>AI And Cybersecurity</h1>
          <p>
            Today’s security teams face many challenges—sophisticated hackers, an expanding attack surface,
            an explosion of data and growing infrastructure complexity—that hinder their ability to safeguard data,
            manage user access, and quickly detect and respond to AI security threats. AI is used in cyber security
            to quickly analyze millions of events and identify many different types of threats.
          </p>
        </div>
        <div className="image">
          <img src={features1} alt="AI in Cybersecurity" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <h3>Protecting Data Across Hybrid Cloud Environments</h3>
          <p>
            AI tools can identify shadow data, monitor for abnormalities in data access and alert cybersecurity
            professionals about potential threats by malicious actors accessing the data or sensitive information—
            saving valuable time in detecting and remediating issues in real time.
          </p>
        </div>

        <div className="card">
          <h3>Generating More Accurate And Prioritized Threats</h3>
          <p>
            AI-powered risk analysis can produce incident summaries for high-fidelity alerts and automate incident
            responses, accelerating alert investigations and triage by an average of 55%. The AI technology also helps
            identify vulnerabilities across threat landscapes and defend against cybercriminals and cyber crime.
          </p>
        </div>

        <div className="card">
          <h3>Balancing User Access Needs And Security</h3>
          <p>
            AI models can help balance security with user experience by analyzing the risk of each login attempt and
            verifying users through behavioral data, simplifying access for verified users and reducing the cost of
            fraud by up to 90%. Also, AI systems help prevent phishing, malware and other malicious activities,
            ensuring a high security posture within security systems.
          </p>
        </div>
      </section>

      {/* AI Healthcare Section */}
      <section className="ai-healthcare">
        <div className="image-container">
          <img src={features2} alt="AI in Healthcare" />
        </div>
        <div className="content">
          <h1>AI And Healthcare</h1>
          <p>
            Artificial intelligence (AI) technologies are revolutionizing nearly every aspect of healthcare.
            From data management to drug discovery and development to clinical practice and patient care,
            the innovations of AI continue to optimize and advance medical services. By understanding the impact of
            current and emerging AI technologies—including global trends and regulatory constraints—healthcare
            professionals can drive decision-making, elevate patient care, and improve profitability and performance.
          </p>
          <p>
            The Artificial Intelligence (AI) in Medical Coding and Billing Course will provide medical professionals,
            coders, and billers with an understanding of AI applications in coding and billing procedures.
          </p>
        </div>
      </section>

      {/* SAP MM Section */}
      <section className="sap-mm">
        <div className="content">
          <h1>SAP MM</h1>
          <p>
            SAP MM is an ERP system that deals with procuring, processing, and production of materials with transactions
            such as Purchase Order (PO), Purchase Requisition (PR), Contracts, Inventory Valuation, Vendor Management,
            and Materials Requirement Planning. SAP MM is related to the SAP ERP Logistics system.
          </p>
          <p>
            Each system needs data. For SAP MM, it requires data related to materials, vendors, plants, storage
            locations, and inventory management. That data is called Master Data.
          </p>
        </div>
        <div className="image-container">
          <img src={features3} alt="SAP MM Diagram" />
        </div>
      </section>
    </>
  );
};

export default Features;
