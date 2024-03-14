/* eslint-disable react/jsx-no-target-blank */
import WrapButton from "../WrapButton/WrapButton";

function Todolist() {
  return (
    <div className="description mt-3">
      <span className="title">Technologies used</span> <br />
      <span className="technologies-used flex-wrap mt-1">
        <WrapButton>ReactJs</WrapButton>
        <WrapButton>NodeJs</WrapButton>
        <WrapButton>Redux</WrapButton>
        <WrapButton>Bootstrap 5</WrapButton>
        <WrapButton>Restful API</WrapButton>
        <WrapButton>MySQL</WrapButton>
        <WrapButton>Sass</WrapButton>
      </span>
      <div className="about-project mt-2">
        <span className="title">About project</span>
        <ul>
          <li>The product is cloned by todoist.com</li>
          <li>
            <b>Teamsize:</b> 1
          </li>
          <li>
            <b>Position:</b> Fullstack developer
          </li>
        </ul>
      </div>
      <div className="view-project">
        <a href="https://github.com/hdroro/todo-list-fe" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Todolist;
