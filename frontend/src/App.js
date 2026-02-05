import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Pages
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Features from "./pages/features";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contactus";
import Experts from "./pages/experts";
import Careers from "./pages/careers";
import Vacancies from "./pages/vacancies";
import Applicationform from "./pages/applicationform";
import usePageTracking from "./usePageTracking"; // ✅ import the hook

// const NotFound = () => <div>404 Page Not Found</div>; // optional

const App = () => {
  return (
    <Router>
      {/* ✅ Call this component inside Router so useLocation works */}
      <PageTracker />

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/applicationform" element={<Applicationform />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

// ✅ This component tracks route changes using your custom hook
const PageTracker = () => {
  usePageTracking();
  return null;
};

export default App;
