import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0px auto;
  align-items: center;
`;

export const RightFormImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

export const LeftFormGroup = styled.div`
  background: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-size: 2.2em;
  color: #000;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3em;
  font-size: 20px;
  color: #000;

  h3 {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const FormButton = styled.button`
  padding: 10px 12px;
  background-color: #bfbfbf;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;
  font-family: "Mulish", sans-serif;
  margin-top: 1em;
  width: 100%;
  cursor: pointer;
`;

export const FormGroupSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: #000;
  margin-top: 1em;

  p {
    font-size: 1.2em;
    margin: 10px;
  }
`;

export const Error = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  color: red;
`;
