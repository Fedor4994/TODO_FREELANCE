import React from "react";
import * as S from "./styles";
import Edit from "../../Img/edit.svg";
import Erase from "../../Img/erase.svg";

interface TaskCardProps {
  id: number;
  name: string;
  list: string;
  color: string;
  done: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, name, list, color, done }) => {
  function handleCheck() {
    console.log(id);
  }

  function handleDelete() {
    console.log(id);
  }

  return (
    <S.Container>
      <S.CheckField>
        <S.CheckboxRing onClick={handleCheck}>
          <S.CheckFill done={done} />
        </S.CheckboxRing>
      </S.CheckField>
      <S.Description>
        <S.Name done={done}>{name}</S.Name>
        <S.ListBelong>
          <S.ColorTag color={color} />
          <S.ListName>{list}</S.ListName>
        </S.ListBelong>
      </S.Description>

      <S.Icon src={Edit} />
      <S.Icon src={Erase} onClick={handleDelete} />
    </S.Container>
  );
};

export default TaskCard;
