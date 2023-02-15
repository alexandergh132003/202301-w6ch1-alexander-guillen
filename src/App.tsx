import AppStyled from "./AppStyled";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <AppStyled>
      <Form />
      <ToDoList />
    </AppStyled>
  );
}

export default App;
