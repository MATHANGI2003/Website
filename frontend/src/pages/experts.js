import React from 'react';
import "../styles/experts.css"; // Make sure your CSS file is correctly named and imported
import expertImage from "../assets/images/expert.jpg";
import mohanRajImage from "../assets/images/mohan raj.png";
import savithaImage from '../assets/images/savitha.jpg';
import sanjayImage from '../assets/images/sanjay.png';
import vinayImage from '../assets/images/vinay 2.png';
import sathyaImage from '../assets/images/sathya.png';
import groupPicImage from '../assets/images/grouppics.jpg';

const Experts = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="experts-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Experts</h1>
          <p><a href="/home">Home</a> » <span>Experts</span></p>
        </div>
      </section>

      {/* Team Section */}
      <div className="team-page">
        <section className="team-section">
          <h1>Our Experts Are Who Make Up Circle</h1>
          <p>"Our experts are the backbone of Circle, shaping its success with their dedication and expertise."</p>

          <div className="team-grid">
            {[
              { name: 'Shankar', role: 'IT adviser', desc: 'Guides organizations in aligning technology with business goals, ensuring effective and secure IT systems. Brings strategic insight to drive innovation and efficiency through tailored tech solutions.', img: expertImage },
              { name: 'Mani Ezhilan', role: 'IT adviser', desc: 'Mani is a seasoned engineering leader with experience at top companies like Cisco, HP, General Motors, and Indeed. He specialize in building high-scale, low-latency systems and excel in distributed systems, A/B testing, and driving operational excellence. Known for inclusive leadership, Mani empowers high-performing teams and collaborates effectively across functions to deliver impactful results.', img: expertImage },
              { name: 'Sathya', role: 'Java Specialist', desc: '15 years of experience in full stack development with various technologies Java/J2ee/spring/Micro Services/Angular', img: expertImage },
              { name: 'Sudha Rajinikanth', desc: 'A passionate woman in IT,contributing to innovation and digital transformation through strong technical skills. Committed to fostering diversity and delivering impactful tech solutions.', img: expertImage },
              { name: 'Rajinikanth V', role: 'Testing', desc: '20 years of experience in analytical thinking, problem-solving, technical proficiency, Domain Knowledge, Automation Skills, statistical analysis', img: expertImage },
              { name: 'Cornelius Sukumar Rathnam', role: 'Custom Technology Specialist', desc: '20 years of IT experience delivering large-scale,complex custom technology solutions across Government, Healthcare, Retail, and Insurance sectors.currently working on the Wisconsin CARES project in Madison, focusing on integrated eligibility solutions for state Health and Human Services.', img: expertImage },
              { name: 'Narendrakumar', role: '.NET Specialist', desc: '15 years of experience in .NET, specialize in building and deploying enterprise-level applications using .NET Framework, .NET Core, ASP.NET MVC, and C#. he is skilled in software architecture, Azure cloud, RESTful APIs, and agile practices, and well-versed in managing SDLC projects across diverse industries.', img: expertImage },
              { name: 'Balarajan', role: 'BI Specialist', desc: '15 years of experience in designing end-to-end BI solutions, including data warehousing, ETL pipelines, and dashboards. Proficient in SQL, Python, Power BI, and Tableau, with a strong ability to translate complex data into actionable insights for strategic decisions.', img: expertImage },
              { name: 'Mohan Raj G', role: 'SAP Specialist', desc: '10 years of experience in Cost Management, Procurement Management, Construction Management, Resource Management, Quality Management, Safety Management, and Risk Management.', img: mohanRajImage },
              { name: 'Savitha Narendrakumar', role: 'Cybersecurity Specialist', desc: '15 years of experience in computer networks, protocols, and cybersecurity, with strong expertise in Python and C++. Skilled in designing secure network architectures and developing robust software solutions.', img: savithaImage },
              {name: 'Karthiga Jayaraj', role: 'Human Resource', desc: '15 years of experience in Human Resource Management, specializing in talent acquisition, employee engagement, and organizational development. She is passionate about building inclusive cultures, driving HR strategy, and empowering teams to thrive.', img: expertImage }
            ].map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Through the Lens Section */}
      <div className="team-member">
        <section className="lens-section">
          <h1>Through the Lens</h1>
          <ul className="description">
            <li>We have a diverse team of technology developers skilled in MERN, AI, Full Stack, Cloud Engineering, Cybersecurity, and SAP.</li>
            <li>Our team also includes Network Engineers, Mobile Developers, Data Engineers, Data Analysts, DBAs, and Business Analysts.</li>
            <li>We have strong domain expertise in healthcare, insurance, banking, and retail, including eCommerce development with secure payment gateways.</li>
            <li>Each team member has a clear understanding of their specific tasks and accountabilities.</li>
            <li>Regular communication and collaboration help in effective problem-solving.</li>
            <li>Team members work together efficiently, sharing knowledge and supporting one another.</li>
            <li>The IT landscape is constantly evolving, so our team stays adaptable and committed to continuous learning.</li>
            <li>Effective leadership provides direction, motivation, and support to the entire team.</li>
          </ul>

          <div className="team-info">
            <div className="team-images">
              <img src={sanjayImage} alt="Team Member" />
              <img src={vinayImage} alt="Team Member" />
              <img src={sathyaImage} alt="Team Member" />
            </div>
            <p className="team-text">Our <strong>10+</strong> professional experts</p>
          </div>

          <div className="team-image">
            <img src={groupPicImage} alt="Photography Team" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experts;
