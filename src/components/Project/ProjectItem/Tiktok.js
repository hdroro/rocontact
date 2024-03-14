/* eslint-disable react/jsx-no-target-blank */
import WrapButton from "../WrapButton/WrapButton";

function Tiktok() {
  return (
    <div className="description mt-3">
      <span className="title">Technologies used</span> <br />
      <span className="technologies-used flex-wrap mt-1">
        <WrapButton>ReactJs</WrapButton>
        <WrapButton>Responsive</WrapButton>
      </span>
      <div className="about-project mt-2">
        <span className="title">About project</span>
        <ul>
          <li>The product is cloned by tiktok.com (UI/UX only)</li>
          <li>
            <b>Teamsize:</b> 1
          </li>
          <li>
            <b>Position:</b> Frontend developer
          </li>
        </ul>
      </div>
      <div className="view-project">
        <a href="https://github.com/hdroro/tiktok-ui" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Tiktok;
