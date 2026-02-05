import React from 'react';
import '../styles/blog.css'; // Assuming you have a separate CSS file for styles
import blog2 from "../assets/images/blog 2.webp";
import blog3 from "../assets/images/blog 3.webp";
import blog4 from "../assets/images/blog4.webp";

const BlogPage = () => {
    return (
        <div>
            {/* Hero Section with Background Image */}
            <section className="blog">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Blog</h1> {/* Updated h1 text */}
                    <p><a href="/home">Home</a> » <span>blog</span></p> {/* Updated breadcrumb */}
                </div>
            </section>

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
        </div>
    );
}

export default BlogPage;
