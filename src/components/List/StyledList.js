import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  padding-left: 30px;
  width: 70%;
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
  height: 55vh;
  width: 40vw;
  overflow: auto;
`;

export default makeStyles((theme) => ({
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
