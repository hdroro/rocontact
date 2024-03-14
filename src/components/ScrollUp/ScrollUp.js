import { useEffect, useState } from "react";
import { ChevronUp } from "../Icon/Icon";
import "./ScrollUp.scss";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`scroll-to-top + ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <ChevronUp />
    </div>
  );
}

export default ScrollUp;
