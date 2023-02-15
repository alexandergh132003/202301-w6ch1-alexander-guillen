import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import useAPI from "../../customHooks/useApi/useApi";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoListStyled from "./ToDoListStyled";

const ToDoList = () => {
  const { loadToDoList } = useAPI();
  const list = useAppSelector(({ list }) => list);

  useEffect(() => {
    loadToDoList();
  }, [loadToDoList]);

  return (
    <ToDoListStyled>
      {list.map((listItem) => (
        <li key={listItem.id}>
          <ToDoItem toDoListItem={listItem} />
        </li>
      ))}
    </ToDoListStyled>
  );
};

export default ToDoList;
