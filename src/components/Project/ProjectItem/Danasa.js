/* eslint-disable react/jsx-no-target-blank */
import WrapButton from "../WrapButton/WrapButton";

function Danasa() {
  return (
    <div className="description  mt-3">
      <span className="title mb-2">Technologies used</span> <br />
      <span className="technologies-used flex-wrap  mt-1">
        <WrapButton>HTML5</WrapButton>
        <WrapButton>CSS3</WrapButton>
        <WrapButton>Javascript</WrapButton>
        <WrapButton>Nodejs</WrapButton>
        <WrapButton>Handlebars</WrapButton>
        <WrapButton>MySQL</WrapButton>
      </span>
      <div className="about-project mt-2">
        <span className="title">About project</span>
        <ul>
          <li>Web booking coach ticket for everyone.</li>
          <li>
            <b>Teamsize:</b> 3
          </li>
          <li>
            <b>Position:</b> Fullstack developer, Team leader, Setup project,...
          </li>
        </ul>
      </div>
      <div className="view-project">
        <a href="https://github.com/hdroro/PBL3-Danasa" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Danasa;
