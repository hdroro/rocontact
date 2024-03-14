import "./WrapContainer.scss";

function WrapContainer({ children, onClick, isTeam }) {
  return (
    <div className="wrapper-container mt-2" onClick={onClick}>
      <div className="label">
        <span>{isTeam ? "team project" : "personal project"}</span>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default WrapContainer;
