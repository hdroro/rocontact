/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Email, Github, Internet, PhoneFlip } from "../Icon/Icon";
import TopHeader from "../TopHeader/TopHeader";
import "./Contact.scss";

function Contact() {
  const objectDefault = {
    isHoveredPhone: false,
    isHoveredEmail: false,
    isHoveredGithub: false,
    isHoveredWeb: false,
  };
  const [isHovered, setIsHovered] = useState(objectDefault);

  const handleHover = (type) => {
    setIsHovered({
      ...objectDefault,
      [`isHovered${type.charAt(0).toUpperCase() + type.slice(1)}`]: true,
    });
  };

  const handleNotHover = () => {
    setIsHovered({ ...objectDefault });
  };

  return (
    <div id="contact">
      <TopHeader left={false}>contact</TopHeader>
      <div className="container pb-5">
        <div className="about-container">
          <h4>Have You Any Questions ?</h4>
          <h5>
            Contact me <span className="jumping-dots">...</span>
          </h5>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center gap-1">
              <PhoneFlip
                className={`icon-contact ${
                  isHovered.isHoveredPhone ? "hovering" : ""
                }`}
              />
              <p className="service-name">Call Me On</p>
              <a
                className="contact-link"
                href="tel:0353905691"
                onMouseEnter={() => handleHover("phone")}
                onMouseLeave={() => handleNotHover()}
              >
                0353905691
              </a>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center gap-1">
              <Email
                className={`icon-contact ${
                  isHovered.isHoveredEmail ? "hovering" : ""
                }`}
              />
              <p className="service-name">Email</p>
              <a
                className="contact-link"
                href="mailto:hongdiem060703@gmail.com"
                onMouseEnter={() => handleHover("email")}
                onMouseLeave={() => handleNotHover()}
              >
                hongdiem060703@gmail.com
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center gap-1">
              <Github
                className={`icon-contact ${
                  isHovered.isHoveredGithub ? "hovering" : ""
                }`}
              />
              <p className="service-name">Github</p>
              <a
                className="contact-link"
                href="https://github.com/hdroro"
                target="_blank"
                onMouseEnter={() => handleHover("github")}
                onMouseLeave={() => handleNotHover()}
              >
                https://github.com/hdroro
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 d-flex flex-column align-items-center gap-1">
              <Internet
                className={`icon-contact ${
                  isHovered.isHoveredWeb ? "hovering" : ""
                }`}
              />
              <p className="service-name">Website</p>
              <a
                className="contact-link"
                href="https://rorodevportfolio.netlify.app"
                onMouseEnter={() => handleHover("web")}
                onMouseLeave={() => handleNotHover()}
              >
                https://rorodevportfolio.netlify.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
