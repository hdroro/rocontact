import React from "react";
import WrapContainer from "../WrapContainer/WrapContainer";
import "./ProjectItem.scss";

const ProjectItem = (props) => {
  return (
    <div className={`col-md-4 mb-5 ${props.isTeam_ ? "offset-md-2" : ""}`}>
      <WrapContainer isTeam={props.isTeam}>
        <div
          onMouseEnter={
            props.handleMouseEnterNowSG ||
            props.handleMouseEnterTiktok ||
            props.handleMouseEnterTodolist
          }
          onMouseLeave={
            props.handleMouseLeaveNowSG ||
            props.handleMouseLeaveTiktok ||
            props.handleMouseLeaveTodolist
          }
          onClick={
            props.handleOpenNowSG ||
            props.handleOpenTiktok ||
            props.handleOpenTodolist ||
            props.handleOpenDanasaTicket ||
            props.handleOpenMakingFriend
          }
          className="expand-item"
        >
          {props.images?.map((image, index) => (
            <img
              src={image}
              alt=""
              className={`w-100 ${
                index === props.currentIndex ? "active" : ""
              }`}
              key={index}
            />
          ))}
        </div>

        {props.isOpenNowSG ||
        props.isOpenTiktok ||
        props.isOpenTodolist ||
        props.isOpenDanasaTicket ||
        props.isOpenMakingFriend ? (
          props.children
        ) : (
          <div className="label-project mt-3 text-center">
            <span>{props.titlePrj} </span>-<span> {props.responsibility}</span>
          </div>
        )}
      </WrapContainer>
    </div>
  );
};

export default ProjectItem;
