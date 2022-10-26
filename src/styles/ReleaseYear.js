import styled from "styled-components";
import { MovieButton } from "./Button";

export const ReleaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    /* padding-left: 1rem; */
    display: flex;
    margin-bottom: 20px;
  }
`;

export const ReleaseButton = styled(MovieButton)`
  background-color: white;
  color: black;

  :hover {
    color: black;
    background-color: lightgray;
    border: 1px solid black;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5px 10px;
    font-size: 13px;
    background-color: white;
    color: black;
  }
`;
