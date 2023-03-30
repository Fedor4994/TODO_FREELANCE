import React, { useState } from "react";
import * as S from "./styles";

const AddModal: React.FC = () => {
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

  const [taskName, setTaskName] = useState("");

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleCancel() {
    console.log("cancel");
  }

  function handleAdd() {
    console.log("add task");
  }

  function handleChange() {
    console.log("change category");
  }

  return (
    <S.Background>
      <S.Container>
        <S.Text>Insert name</S.Text>
        <S.TitleInput
          placeholder="Task name"
          onChange={handleTyping}
          value={taskName}
        />
        <S.Text>Select a categorie</S.Text>
        <S.Select id="select" onChange={handleChange}>
          {categList.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </S.Select>
        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.DeletButton onClick={handleAdd}>Add</S.DeletButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default AddModal;
