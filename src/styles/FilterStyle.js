import styled from "styled-components";
import { MovieButton } from "./Button";

export const FilterContainer = styled.div`
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
    /* padding: 1rem 1rem; */
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
  }
`;

export const FilterButton = styled(MovieButton)`
  background-color: #32cd32;
  color: black;

  :hover {
    background-color: #7cfc00;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 6px 8px;
    font-size: 10px;
  }
`;
