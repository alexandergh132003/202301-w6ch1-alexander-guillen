import useAPI from "../../customHooks/useApi/useApi";
import FormStyled from "./FormStyled";

const Form = () => {
  const { addToDoList } = useAPI();

  const handleClick = (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    addToDoList();
  };

  return (
    <FormStyled>
      <label htmlFor="form-user-input">ToDo</label>
      <input type="text" id="form-user-input" required />
      <button onClick={handleClick}>Add some shit to do</button>
    </FormStyled>
  );
};

export default Form;
