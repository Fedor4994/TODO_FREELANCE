import React, { useState } from "react";

import { useParams } from "react-router-dom";

import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import TaskFill from "../../Img/task.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg";
import SidebarItem from "../../Components/SidebarItem";
import ExpandSidebarItem from "../../Components/ExpandSidebarItem";
import AddTask from "../../Components/AddTask";
import FilterTag from "../../Components/FilterTag";
import Filter from "../../Img/filter.svg";
import { Link } from "react-router-dom";

const CategoriePage: React.FC = () => {
  const { name } = useParams<string>();

  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);

  function handleAll() {
    setAllActive(true);
    setDoneActive(false);
    setNotDoneActive(false);
  }

  function handleDone() {
    setAllActive(false);
    setDoneActive(true);
    setNotDoneActive(false);
  }
  function handleNotDone() {
    setAllActive(false);
    setDoneActive(false);
    setNotDoneActive(true);
  }

  function handleLogout() {
    localStorage.removeItem("@Project:email");
  }
  return (
    <S.Page>
      <S.Sidebar>
        <S.Img src={Logo} />
        <S.Tabs>
          <Link to="/" style={{ textDecoration: "none" }}>
            <SidebarItem
              icon={TaskFill}
              name="Tasks"
              isActive={false}
            ></SidebarItem>
          </Link>
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
        <S.Header>{name}</S.Header>
        <S.TitleAndFilter>
          <S.Title onClick={handleDone}>Tasks </S.Title>
          <S.FilterField>
            <div onClick={handleAll}>
              <FilterTag name="All" active={allActive} />
            </div>
            <div onClick={handleDone}>
              <FilterTag name="Done" active={doneActive} />
            </div>
            <div onClick={handleNotDone}>
              <FilterTag name="Not done" active={notDoneActive} />
            </div>
            <S.FilterIcon src={Filter} />
          </S.FilterField>
        </S.TitleAndFilter>

        <AddTask></AddTask>
      </S.Main>
      {/* <DeleteModal />
      <AddModal /> */}
    </S.Page>
  );
};

export default CategoriePage;
