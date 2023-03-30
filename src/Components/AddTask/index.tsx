import React from "react";
import * as S from "./styles";
import Add from "../../Img/add.svg";

const AddTask: React.FC = () => {
  function handleClick() {
    console.log(123);
  }

  return (
    <S.Container onClick={handleClick}>
      <S.Icon src={Add} />
      <S.Text>Add a task</S.Text>
    </S.Container>
  );
};

export default AddTask;
