import React, { useState } from "react";
import * as S from "./styles";
import Arrow from "../../Img/arrow.svg";
import CategorieItem from "../Categorie";
import Add from "../../Img/add.svg";

interface SidebarItemProps {
  name: string;
  icon: string;
}

const ExpandSidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => {
  const [active, setActive] = useState(false);

  const categList = [
    {
      id: 0,
      name: "None",
      color: "#afafaf",
    },
    {
      id: 1,
      name: "Home",
      color: "#FF9C9C",
    },
    { id: 2, name: "School", color: "#FFD79C" },
    {
      id: 3,
      name: "Shopping list",
      color: "#9CD0FF",
    },
  ];

  function handleActivate() {
    setActive(!active);
  }

  return (
    <S.OuterContainer isActive={active}>
      <S.Container isActive={active} onClick={handleActivate}>
        <S.Icon src={icon} />
        <S.Name>{name}</S.Name>
        <S.Arrow isActive={active} src={Arrow} />
      </S.Container>
      <S.CatArea isActive={active}>
        {categList.map((cat) => (
          <CategorieItem key={cat.id} name={cat.name} color={cat.color} />
        ))}
        <S.AddArea>
          <S.AddIcon src={Add} />
          <S.AddText>Add new</S.AddText>
        </S.AddArea>
      </S.CatArea>
    </S.OuterContainer>
  );
};

export default ExpandSidebarItem;
