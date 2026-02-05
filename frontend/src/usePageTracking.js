// src/usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your actual GA4 Measurement ID

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default usePageTracking;