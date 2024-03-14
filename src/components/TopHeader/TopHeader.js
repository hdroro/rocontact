import { useEffect } from "react";
import "./TopHeader.scss";
import { useState } from "react";

function TopHeader({ children, left, right }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveDistance = 10;
  const moveThreshold = 200;

  return (
    <>
      {left ? (
        <div className="top-header d-flex justify-content-between align-items-center w-100">
          <div
            className={`line ${
              scrollPosition > moveThreshold ? "move-left" : ""
            }`}
            style={{
              transform: `translateX(-${scrollPosition / moveDistance}px)`,
            }}
          ></div>
          <div className="title d-flex align-items-center gap-2">
            {children}
            <div className="line-large md-3"></div>
          </div>
        </div>
      ) : (
        <div className="top-header d-flex justify-content-between align-items-center w-100">
          <div className="title d-flex align-items-center gap-2">
            <div className="line-large md-3"> </div> {children}
          </div>
          <div
            className={`line ${
              scrollPosition > moveThreshold ? "move-right" : ""
            }`}
            style={{
              transform: `translateX(${scrollPosition / moveDistance}px)`,
            }}
          ></div>
        </div>
      )}
    </>
  );
}

export default TopHeader;
