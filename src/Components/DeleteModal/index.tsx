import React from "react";
import * as S from "./styles";

const DeleteModal: React.FC = () => {
  function handleCancel() {
    console.log(123);
  }

  function handleConfirm() {
    console.log(123);
  }

  return (
    <S.Background>
      <S.Container>
        <S.Text>Are you sure you want to delete this task?</S.Text>
        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.DeletButton onClick={handleConfirm}>Delete</S.DeletButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default DeleteModal;
