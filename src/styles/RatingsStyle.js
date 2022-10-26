import styled from "styled-components";
import { MovieButton } from "./Button";

export const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    margin-bottom: 10px;
  }
`;

export const RatingBtn = styled(MovieButton)`
  background-color: #ffdf00;
  color: black;

  :hover {
    background-color: #fdcc0d;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 4px 7px;
    font-size: 14px;
  }
`;
