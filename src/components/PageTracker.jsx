import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPage = () => {
      if (window.gtag) {
        window.gtag("config", "G-W9YG16MD31", {
          page_path: location.pathname + location.search,
        });

        console.log("Tracked page:", location.pathname);
      }
    };

    trackPage();
  }, [location.pathname, location.search]);

  return null;
};

export default PageTracker;