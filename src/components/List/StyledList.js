import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  padding: 25px;
`;

export const LoadingContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const ListContainer = styled.div`
  height: 75vh;
  overflow: auto;
`;

export default makeStyles((theme) => ({
  // Your existing makeStyles styles go here
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  marginBottom: {
    marginBottom: "30px",
  },
}));
