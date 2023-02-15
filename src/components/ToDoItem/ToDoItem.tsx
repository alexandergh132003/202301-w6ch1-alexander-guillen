import useAPI from "../../customHooks/useApi/useApi";
import listItem from "../../types";
import ToDoItemStyled from "./ToDoItemStyled";

interface ToDoItemProps {
  toDoListItem: listItem;
}

const ToDoItem = ({ toDoListItem }: ToDoItemProps) => {
  const { deleteToDo, toggleToDo } = useAPI();

  return (
    <ToDoItemStyled>
      <button onClick={() => toggleToDo(toDoListItem)}>
        {toDoListItem.isDone ? "✅" : "☑️"}
      </button>
      <span>{toDoListItem.name}</span>
      <button onClick={() => deleteToDo(toDoListItem.id)}>{"❌"}</button>
    </ToDoItemStyled>
  );
};

export default ToDoItem;
