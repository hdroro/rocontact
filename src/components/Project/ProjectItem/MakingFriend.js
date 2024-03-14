/* eslint-disable react/jsx-no-target-blank */
import WrapButton from "../WrapButton/WrapButton";

function MakingFriend() {
  return (
    <div className="description  mt-3">
      <span className="title">Technologies used</span> <br />
      <span className="technologies-used flex-wrap mt-1">
        <WrapButton>Nodejs</WrapButton>
        <WrapButton>Reactjs</WrapButton>
        <WrapButton>Restful API</WrapButton>
        <WrapButton>SocketIO</WrapButton>
        <WrapButton>WebRTC</WrapButton>
        <WrapButton>MySQL</WrapButton>
      </span>
      <div className="about-project mt-2">
        <span className="title">About project</span>
        <ul>
          <li>Making friends based on zodiac compatibility.</li>
          <li>
            <b>Teamsize:</b> 3
          </li>
          <li>
            <b>Position:</b> Fullstack developer, Team leader, Setup project,...
          </li>
        </ul>
      </div>
      <div className="view-project">
        <a href="https://github.com/hdroro/PBL4" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default MakingFriend;
