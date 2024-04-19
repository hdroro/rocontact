// import { files } from "../../assets/files";
import TopHeader from "../TopHeader/TopHeader";
import "./About.scss";

function About() {
  // const handleDownloadClick = () => {
  //   const cvUrl = files.cv;
  //   window.open(cvUrl, "_blank");
  // };
  return (
    <div id="about">
      <TopHeader left={true}>about</TopHeader>
      <div className="container">
        <div className="about-main">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-left pb-4">
                <h5 className="name">
                  I'm Hong Diem Nguyen and <span>Web Developer!</span>
                </h5>
                <p className="object">
                  I am currently a third-year student in information technology
                  at{" "}
                  <span className="uni-name">
                    Danang University of Science and Technology
                  </span>
                  . At present, I am seeking an internship as a{" "}
                  <b>Web Developer</b> to further develop my skills. If given
                  the chance to join your team, I am committed to not only
                  advancing my current knowledge but also accumulating valuable
                  experience in the field to contribute to the team's growth.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-lg-1">
              <div className="about-right">
                <p className="d-flex">
                  <b>Fullname:</b> Nguyễn Thị Hồng Diễm
                </p>
                <p className="d-flex">
                  <b>Birth:</b> 6 July 2003
                </p>
                <p className="d-flex">
                  <b>Website:</b>{" "}
                  <a href="https://rorodev.netlify.app">
                    https://rorodev.netlify.app
                  </a>
                </p>
                <p className="d-flex">
                  <b>Github:</b>{" "}
                  <a href="https://github.com/hdroro">
                    https://github.com/hdroro
                  </a>
                </p>

                <p className="d-flex">
                  <b>Email:</b>{" "}
                  <a href="mailto:hongdiem060703@gmail.com">
                    hongdiem060703@gmail.com
                  </a>
                </p>
                <p className="d-flex">
                  <b>Facebook:</b>{" "}
                  <a href="https://web.facebook.com/Scimath.G.O.S">
                    https://web.facebook.com/Scimath.G.O.S
                  </a>
                </p>
                <p className="d-flex">
                  <b>Phone:</b> <a href="tel:0353905691">0353905691</a>
                </p>

                {/* <div className="download-cv mt-3" onClick={handleDownloadClick}>
                  <span> Download CV</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
