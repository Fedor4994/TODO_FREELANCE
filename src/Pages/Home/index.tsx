import React from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import TaskFill from "../../Img/taskFill.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg";
import SidebarItem from "../../Components/SidebarItem";
import ExpandSidebarItem from "../../Components/ExpandSidebarItem";
import TaskCard from "../../Components/TaskCard";
import AddTask from "../../Components/AddTask";
import FilterTag from "../../Components/FilterTag";
import Filter from "../../Img/filter.svg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const listOfLists = [
    {
      id: 1,
      title: "Example task",
      done: false,
      categorie: "Home",
      color: "#FF9C9C",
    },
    {
      id: 2,
      title: "Example task 2",
      done: false,
      categorie: "Home",
      color: "#FF9C9C",
    },
    {
      id: 3,
      title: "Example task 3",
      done: true,
      categorie: "Home",
      color: "#FF9C9C",
    },
  ];

  function handleAll() {
    console.log("all");
  }

  function handleDone() {
    console.log("done");
  }
  function handleNotDone() {
    console.log("not done");
  }

  function handleLogout() {
    localStorage.removeItem("@Project:email");
  }

  return (
    <S.Page>
      <S.Sidebar>
        <S.Img src={Logo} />
        <S.Tabs>
          <SidebarItem
            icon={TaskFill}
            name="Tasks"
            isActive={true}
          ></SidebarItem>
          <ExpandSidebarItem
            icon={Folder}
            name="Categories"
          ></ExpandSidebarItem>
          <SidebarItem
            icon={Settings}
            name="Settings"
            isActive={false}
          ></SidebarItem>
        </S.Tabs>
        <Link
          to="/login"
          style={{ textDecoration: "none" }}
          onClick={handleLogout}
        >
          <SidebarItem
            icon={Logout}
            name="Logout"
            isActive={false}
          ></SidebarItem>
        </Link>
      </S.Sidebar>
      <S.Main>
        <S.Header>All your tasks</S.Header>
        <S.TitleAndFilter>
          <S.Title onClick={handleDone}>Tasks </S.Title>
          <S.FilterField>
            <div onClick={handleAll}>
              <FilterTag name="All" active={false} />
            </div>
            <div onClick={handleDone}>
              <FilterTag name="Done" active={false} />
            </div>
            <div onClick={handleNotDone}>
              <FilterTag name="Not done" active={false} />
            </div>
            <S.FilterIcon src={Filter} />
          </S.FilterField>
        </S.TitleAndFilter>
        {listOfLists.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.title}
            list={task.categorie}
            color={task.color}
            done={task.done}
          />
        ))}
        <AddTask></AddTask>
      </S.Main>
      {/* <DeleteModal />
      <AddModal /> */}
    </S.Page>
  );
};

export default Home;
