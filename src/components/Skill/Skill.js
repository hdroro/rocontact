import { CirclePoints } from "../CirclePoints/CirclePoints";
import TopHeader from "../TopHeader/TopHeader";
import "./Skill.scss";

function Skill() {
  return (
    <div id="skills">
      <TopHeader left={false}>skills</TopHeader>
      <div className="container">
        <div className="skill-main">
          <div className="row">
            <div className="col-md-5 skill-left mb-5">
              <h3>Frontend Technologies</h3>
              <div className="skill-bar">
                <div className="info">
                  <p>HTML/Javascript/CSS</p>
                  <p>85%</p>
                </div>
                <div className="bar">
                  <span className="fe-basic"></span>
                </div>
              </div>

              <div className="skill-bar">
                <div className="info">
                  <p>ReactJS</p>
                  <p>85%</p>
                </div>
                <div className="bar">
                  <span className="reactjs"></span>
                </div>
              </div>

              <div className="skill-bar">
                <div className="info">
                  <p>Bootstrap 5</p>
                  <p>70%</p>
                </div>
                <div className="bar">
                  <span className="bootstrap5"></span>
                </div>
              </div>

              <div className="skill-bar">
                <div className="info">
                  <p>Figma</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="figma"></span>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-2 mb-5 skill-right">
              <h3>Backend Technologies</h3>
              <div className="skill-bar">
                <div className="info">
                  <p>NodeJS (Express)</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="nodejs"></span>
                </div>
              </div>

              <div className="skill-bar">
                <div className="info">
                  <p>MySQL/SQL server</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="database"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h3>Professional Skills</h3>
            <div className="professional">
              <div className="box">
                <div className="circle" data-dots="80" data-percent="90">
                  <CirclePoints dots={80} marked={90} />
                </div>
                <div className="text">
                  <big>90%</big>
                  <small>Team Work</small>
                </div>
              </div>

              <div className="box">
                <div className="circle" data-dots="80" data-percent="80">
                  <CirclePoints dots={80} marked={80} />
                </div>
                <div className="text">
                  <big>80%</big>
                  <small>Time Management</small>
                </div>
              </div>

              <div className="box">
                <div className="circle" data-dots="80" data-percent="80">
                  <CirclePoints dots={80} marked={80} />
                </div>
                <div className="text">
                  <big>80%</big>
                  <small> Critical Thinking</small>
                </div>
              </div>

              <div className="box">
                <div className="circle" data-dots="80" data-percent="80">
                  <CirclePoints dots={80} marked={80} />
                </div>
                <div className="text">
                  <big>80%</big>
                  <small>Problem Solving</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skill;
