import React, { useState } from "react";
import * as S from "./styles";

import { TaskProps } from "../../Contexts/taskType";

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
  const [taskCat, setTaskCat] = useState(
    categList.findIndex((cat) => cat.name == "None")
  );

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleCancel() {
    console.log(123);
  }

  function handleAdd() {
    const newTask: TaskProps = {
      id: Math.random(),
      title: taskName,
      categorie: categList[taskCat].name,
      color: categList[taskCat].color,
      done: false,
    };
  }

  var e = document.getElementById("select") as HTMLSelectElement;

  function handleChange() {
    setTaskCat(Number(e.options[e.selectedIndex].value));
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
            <option value={cat.id}>{cat.name}</option>
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
