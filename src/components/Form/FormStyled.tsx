import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  input {
    border-radius: 16px 16px 16px 16px;
    height: 40px;
  }

  button {
    height: 3.1em;
    border-radius: 16px 16px 16px 16px;
    background-color: greenyellow;
    font-weight: bold;
  }
`;

export default FormStyled;
