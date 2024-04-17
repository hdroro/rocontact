import { CheckIcon } from "../Icon/Icon";
import "./Home.scss";
import { Link } from "react-scroll";

function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">
            <div className="container information">
              <h3 className="name">hongdiemnguyen</h3>
              <h3 className="description-home text-center">
                <div className="d-flex flex-column lh-1 main-text">
                  <span>Web</span>
                  <span>Developer</span>
                </div>
              </h3>
              <figure className="text-end mt-4">
                <blockquote className="blockquote">
                  <p>
                    <span className="hight-light">Simplicity</span> is the
                    ultimate sophistication.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Source Title">Leonardo da Vinci</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <div className="figure"></div>
            <Link
              className="d-flex flex-column justify-content-end check-double"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <CheckIcon className="check-top" />
              <CheckIcon className="check-bottom" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
