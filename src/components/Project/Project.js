/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { images } from "../../assets/images";
import TopHeader from "../TopHeader/TopHeader";
import "./Project.scss";
import ProjectItem from "./ProjectItem/ProjectItem";
import NowSaigon from "./ProjectItem/NowSG";
import Tiktok from "./ProjectItem/Tiktok";
import Todolist from "./ProjectItem/Todolist";
import Danasa from "./ProjectItem/Danasa";
import MakingFriend from "./ProjectItem/MakingFriend";

function Project() {
  const [currentIndexNowSG, setCurrentIndexNowSG] = useState(0);
  const [currentIndexTiktok, setCurrentIndexTiktok] = useState(0);
  const [currentIndexTodolist, setCurrentIndexTodolist] = useState(0);
  const [intervalIdNowSG, setIntervalIdNowSG] = useState(null);
  const [intervalIdTiktok, setIntervalIdTiktok] = useState(null);
  const [intervalIdTodolist, setIntervalIdTodolist] = useState(null);
  const [isOpenNowSG, setIsOpenNowSG] = useState(false);
  const [isOpenTiktok, setIsOpenTiktok] = useState(false);
  const [isOpenTodolist, setIsOpenTodolist] = useState(false);
  const [isOpenDanasaTicket, setIsOpenDanasaTicket] = useState(false);
  const [isOpenMakingFriend, setIsOpenMakingFriend] = useState(false);

  const handleMouseEnterNowSG = () => {
    if (!intervalIdNowSG) {
      const id = setInterval(() => {
        setCurrentIndexNowSG((prevIndex) =>
          prevIndex === images?.nowsg.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
      setIntervalIdNowSG(id);
    }
  };

  const handleMouseEnterTiktok = () => {
    if (!intervalIdTiktok) {
      const id = setInterval(() => {
        setCurrentIndexTiktok((prevIndex) =>
          prevIndex === images?.tiktok.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
      setIntervalIdTiktok(id);
    }
  };

  const handleMouseEnterTodolist = () => {
    if (!intervalIdTodolist) {
      const id = setInterval(() => {
        setCurrentIndexTodolist((prevIndex) =>
          prevIndex === images?.todolist.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
      setIntervalIdTodolist(id);
    }
  };

  const handleMouseLeaveNowSG = () => {
    clearInterval(intervalIdNowSG);
    setIntervalIdNowSG(null);
    setCurrentIndexNowSG(0);
  };

  const handleMouseLeaveTiktok = () => {
    clearInterval(intervalIdTiktok);
    setIntervalIdTiktok(null);
    setCurrentIndexTiktok(0);
  };

  const handleMouseLeaveTodolist = () => {
    clearInterval(intervalIdTodolist);
    setIntervalIdTodolist(null);
    setCurrentIndexTodolist(0);
  };

  const handleOpenNowSG = () => {
    clearInterval(intervalIdNowSG);
    setIntervalIdNowSG(null);
    setCurrentIndexNowSG(0);
    setIsOpenNowSG(!isOpenNowSG);
  };

  const handleOpenTiktok = () => {
    clearInterval(intervalIdTiktok);
    setIntervalIdTiktok(null);
    setCurrentIndexTiktok(0);
    setIsOpenTiktok(!isOpenTiktok);
  };

  const handleOpenTodolist = () => {
    clearInterval(intervalIdTodolist);
    setIntervalIdTodolist(null);
    setCurrentIndexTodolist(0);
    setIsOpenTodolist(!isOpenTodolist);
  };

  const handleOpenDanasaTicket = () => {
    setIsOpenDanasaTicket(!isOpenDanasaTicket);
  };

  const handleOpenMakingFriend = () => {
    setIsOpenMakingFriend(!isOpenMakingFriend);
  };

  return (
    <div id="projects">
      <TopHeader left={true}>projects</TopHeader>
      <div className="container">
        <div className="container-main">
          <div className="row">
            <ProjectItem
              handleMouseEnterNowSG={handleMouseEnterNowSG}
              handleMouseLeaveNowSG={handleMouseLeaveNowSG}
              images={images?.nowsg}
              currentIndex={currentIndexNowSG}
              handleOpenNowSG={handleOpenNowSG}
              isOpenNowSG={isOpenNowSG}
              titlePrj="NowSaigon"
              responsibility="Frontend Developer"
            >
              <NowSaigon />
            </ProjectItem>
            <ProjectItem
              handleMouseEnterTiktok={handleMouseEnterTiktok}
              handleMouseLeaveTiktok={handleMouseLeaveTiktok}
              images={images?.tiktok}
              currentIndex={currentIndexTiktok}
              handleOpenTiktok={handleOpenTiktok}
              isOpenTiktok={isOpenTiktok}
              titlePrj="Tiktok"
              responsibility="Frontend Developer"
            >
              <Tiktok />
            </ProjectItem>
            <ProjectItem
              handleMouseEnterTodolist={handleMouseEnterTodolist}
              handleMouseLeaveTodolist={handleMouseLeaveTodolist}
              images={images?.todolist}
              currentIndex={currentIndexTodolist}
              handleOpenTodolist={handleOpenTodolist}
              isOpenTodolist={isOpenTodolist}
              titlePrj="Todolist"
              responsibility="Fullstack Developer"
            >
              <Todolist />
            </ProjectItem>
          </div>

          <div className="row">
            <ProjectItem
              currentIndex={0}
              images={images?.danasa}
              handleOpenDanasaTicket={handleOpenDanasaTicket}
              isOpenDanasaTicket={isOpenDanasaTicket}
              titlePrj="Coach Ticket"
              responsibility="Fullstack Developer"
              isTeam
              isTeam_
            >
              <Danasa />
            </ProjectItem>

            <ProjectItem
              images={images?.markingfriend}
              currentIndex={0}
              handleOpenMakingFriend={handleOpenMakingFriend}
              isOpenMakingFriend={isOpenMakingFriend}
              titlePrj="Making friend"
              responsibility="Fullstack Developer"
              isTeam
            >
              <MakingFriend />
            </ProjectItem>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
