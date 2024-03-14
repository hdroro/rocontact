/* eslint-disable react/jsx-no-target-blank */
import WrapButton from "../WrapButton/WrapButton";

function NowSaigon() {
  return (
    <div className="description mt-3">
      <span className="title ">Technologies used</span> <br />
      <span className="technologies-used flex-wrap mt-1">
        <WrapButton>ReactJs</WrapButton>
        <WrapButton>Responsive</WrapButton>
        <WrapButton>SCSS module</WrapButton>
      </span>
      <div className="about-project mt-2">
        <span className="title">About project</span>
        <ul>
          <li>Web shopping for everyone (UI/UX only and cloned).</li>
          <li>
            <b>Teamsize:</b> 1
          </li>
          <li>
            <b>Position:</b> Frontend developer
          </li>
        </ul>
      </div>
      <div className="view-project">
        <a href="https://github.com/hdroro/nowsaigon" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default NowSaigon;
